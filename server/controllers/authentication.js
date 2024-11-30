import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY

function generateAccessToken(userId, email){
    const payload = {userId, email}
    return jsonwebtoken.sign(payload, SECRET_KEY, {expiresIn: "15m"})
}

function generateRefreshToken(userId, email){
    const payload = {userId, email}
    return jsonwebtoken.sign(payload, SECRET_KEY, {expiresIn: "15m"})
}

function authenticationToken(req, res, next){
    try {
        const headersAuth = req.headers['authorization']
        const token = headersAuth.split(' ')[1]
        if(!token) return errorHandler(res, 403, "Token not found")
        const decodedData = jsonwebtoken.verify(token, SECRET_KEY)
        req.body = decodedData
        next()
    } catch (error) {
        errorHandler(res, 403, "Not authorized")
    }
}

function refreshAccessToken(req, re, next){
    try {
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken) return res.sendStatus(401)
        const decodedData = jsonwebtoken.verify(token, SECRET_KEY, (error, user) => {if(error) return res.sendStatus(401)})
        const accessToken = generateAccessToken(user.id, user)
    } catch (error) {
        errorHandler(res, 403, "Not authorized")
    }
}

export default { generateAccessToken, generateRefreshToken, authenticationToken, refreshAccessToken}