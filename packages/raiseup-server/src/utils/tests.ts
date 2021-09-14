import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import donationRouter from 'Api/Repository/Donation/Donation.Router'

export const initTests = async () => {
  const mongoServer = await MongoMemoryServer.create()
  const mongoUri = mongoServer.getUri()

  const options = {}

  mongoose.connect(mongoUri, options)

  mongoose.connection.on('error', (e) => {
    if (e.message.code === 'ETIMEDOUT') {
      mongoose.connect(mongoUri, options)
    }
  })
}

export const Server = async () => {
  const PORT = 4100

  const app = new Koa()
  app.use(cors())
  app.use(bodyParser())

  app.use(donationRouter.routes()).use(donationRouter.allowedMethods())

  app.listen(
    {
      port: PORT
    },
    () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}`)
    }
  )

  return {
    port: PORT
  }
}
