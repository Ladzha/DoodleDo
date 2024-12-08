import authentication from "../controllers/authentication.js";

const { verifyToken } = authentication
const authMiddleware = (req, res, next) => {
    console.log('I am authMiddleware');
    // verifyToken()
    // try {
    //     const headersAuth = req.headers['authorization']
    //     if (!authHeader) return errorHandler(res, 403, "Authorization header missing");

    //     const token = headersAuth.split(' ')[1]

    //     if (!token) {
    //         return res.status(401).json({ message: 'Access denied. No token provided.' });
    //     }

    //     const decodedData = jsonwebtoken.verify(token, ACCESS_SECRET_KEY)
    //     req.user = decodedData
    //     next()
    // } catch (error) {
    //     res.status(401).json({ message: 'Invalid token.' });
    // }
    next()
}

export default authMiddleware