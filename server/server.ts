import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import logger from 'morgan'

import config from './config'
import routes from './routes'

let PORT = parseInt((config.PORT || "3000"), 10)
let NODE_ENV = config.NODE_ENV

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cors())
server.use(logger("dev"))
NODE_ENV !== "test" ? require("morgan-body")(server) : null
server.use("/", routes)

const serverObj = server.listen(PORT, () => { console.log("Server listening in PORT ", PORT) })

export default serverObj