import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import errorHandler from "../config/errorHandler.js";

dotenv.config()
const ACCESS_SECRET_KEY = process.env.ACCESS_SECRET_KEY
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY


function generateAccessToken(userId, email){
    const payload = {userId, email}
    return jsonwebtoken.sign(payload, ACCESS_SECRET_KEY, {expiresIn: "5m"})
}

function generateRefreshToken(userId, email){
    const payload = {userId, email}
    return jsonwebtoken.sign(payload, REFRESH_SECRET_KEY, {expiresIn: "1h"})
}

function verifyToken(req, res, next){
    try {
        const headersAuth = req.headers['authorization']
        if (!authHeader) return errorHandler(res, 403, "Authorization header missing");

        const token = headersAuth.split(' ')[1]
        if(!token) return errorHandler(res, 403, "Token not found")

        const decodedData = jsonwebtoken.verify(token, ACCESS_SECRET_KEY)
        req.user = decodedData
        next()
    } catch (error) {
        errorHandler(res, 403, "Invalid or expired token")
    }
}

function refreshAccessToken(req, res, next){
    try {
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken) return res.status(401).json({ message: 'No token provided' })

        const decodedData = jsonwebtoken.verify(refreshToken, REFRESH_SECRET_KEY, (error, user) => {if(error) return res.status(403).json({ message: 'Invalid refresh token' })})

        const newAccessToken = generateAccessToken(decodedData.userId, decodedData.email)
        res.status(200).json({ 
            message: "Token successfully refreshed",
            accessToken: newAccessToken });
    } catch (error) {
        errorHandler(res, 403, "Invalid refresh token")
    }
}

export default { generateAccessToken, generateRefreshToken, verifyToken, refreshAccessToken}