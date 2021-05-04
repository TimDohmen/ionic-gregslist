import express from 'express'
import Socket from './services/SocketService'
import Startup from './Startup'
import DbContext from './db/DbConfig'
import { logger } from './utils/Logger'
import history from 'connect-history-api-fallback'

// create server & socketServer
const app = express()
app.use(history())
const socketServer = require('http').createServer(app)
const io = require('socket.io')(socketServer)
const port = process.env.PORT || 3000

// Establish Socket
Socket.setIO(io)
Startup.ConfigureGlobalMiddleware(app)
Startup.ConfigureRoutes(app)

// Connect to Atlas MongoDB
DbContext.connect()

// Start Server
socketServer.listen(port, () => {
  logger.log(`[SERVING ON PORT: ${port}]`)
})
