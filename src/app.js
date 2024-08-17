import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import { CORS_ORIGIN } from './config.js'

const app = express()
app.use(cors({ origin: `${CORS_ORIGIN}`, credentials: true }))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('/api', authRoutes)
app.use('/api', taskRoutes)

export default app
