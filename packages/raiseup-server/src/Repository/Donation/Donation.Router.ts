import KoaRouter from 'koa-router'
import { saveDonation } from 'Api/Repository/Donation/Donation.Services'

const donationRouter = new KoaRouter()

donationRouter.post('/donate', async (ctx) => {
  await saveDonation(ctx.request.body)
    .then(() => {
      ctx.body = {
        ok: true
      }
    })
    .catch((error: Error) => {
      ctx.status = 400
      ctx.body = {
        ok: false,
        error: error.message
      }
    })
})

export default donationRouter
