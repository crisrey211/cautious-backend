import mongoose from 'mongoose'
import { DBHOST } from './config'

export const connectDB = async () => {
    try {
        await mongoose.connect(DBHOST)
        console.log('>>>>BBDD conectada correctamente')
    } catch (error) {
        console.log(error)
    }
}
