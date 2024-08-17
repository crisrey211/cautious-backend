import 'dotenv/config'
export const PORT = process.env.PORT || 3000
export const DBHOST =
    process.env.DBHOST || 'mongodb://username:password@host:port/database'
export const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173'
export const TOKEN_SECRET = 'token secret'
