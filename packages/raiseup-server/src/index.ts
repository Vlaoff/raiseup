import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

import { initDB } from 'Api/utils/db'
import donationRouter from './Repository/Donation/Donation.Router'
const PORT = 4009

initDB()

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
