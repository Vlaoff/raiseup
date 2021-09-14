import { initTests, Server } from 'Utils/tests'
import request from 'supertest'
import { Currencies } from 'Shared/utils/Types'

let server
describe('donation integration', () => {
  beforeAll(async () => {
    await initTests()
    const { port } = await Server()
    server = `http://localhost:${port}`
  })

  it('should be able to save a donation', async () => {
    const { body, status } = await request(server).post('/donate').send({
      amount: 100,
      currency: Currencies.EUR
    })

    expect(status).toBe(200)
    expect(body.ok).toBe(true)
  })

  it('should not save a donation with an invalid amount', async () => {
    const { body, status } = await request(server).post('/donate').send({
      amount: -1,
      currency: Currencies.EUR
    })

    expect(status).toBe(400)
    expect(body.ok).toBe(false)
    expect(body.error).toBe('Amount required')
  })

  it('should not save a donation with a non numeral amount', async () => {
    const { body, status } = await request(server).post('/donate').send({
      amount: 'testing',
      currency: Currencies.EUR
    })

    expect(status).toBe(400)
    expect(body.ok).toBe(false)
    expect(body.error).toBe('Amount required')
  })

  it('should not save a donation with an invalid currency', async () => {
    const { body, status } = await request(server).post('/donate').send({
      amount: 100,
      currency: 'RUR'
    })

    expect(status).toBe(400)
    expect(body.error).toBe('Valid currency required')
  })
})
