import express from 'express'
import path from 'path'
import {connection as db} from './config/config.js'
// Create an express app
const app = express()
const port = +process.env.PORT || 4000
const router = express.Router()



app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})