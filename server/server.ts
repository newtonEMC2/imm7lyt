import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import logger from 'morgan'
import mongoose from 'mongoose'

import routes from './routes'

let NODE_ENV = process.env.NODE_ENV
let dbUrl = process.env.DB_URL || ''
let dbName = process.env.DB_NAME
let PORT = parseInt((process.env.PORT || "3000"), 10)

if (NODE_ENV !== "production") require("dotenv").config()

// if (mongoose.connection.readyState === 0) {
//     mongoose.connect(dbUrl, {
//         dbName, useNewUrlParser: true, keepAlive: true,
//         keepAliveInitialDelay: 300000, useUnifiedTopology: true, useCreateIndex: true
//     }, error => {
//         if (error) throw error
//         else console.log("Mongo DB connected")
//     })
// }

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cors())
server.use(logger("dev"))
NODE_ENV !== "test" ? require("morgan-body")(server) : null
server.use("/", routes)


const serverObj = server.listen(PORT, () => { console.log("Server listening in PORT ", PORT) })

export default serverObj