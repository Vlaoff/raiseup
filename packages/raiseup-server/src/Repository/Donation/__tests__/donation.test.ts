import { initTests } from 'Api/utils/tests'
import { saveDonation } from 'Api/Repository/Donation/Donation.Services'
import { Currencies } from 'Shared/utils/Types'

describe('donation', () => {
  beforeAll(async () => {
    await initTests()
  })

  it('should be able to save a donation', async () => {
    const donation = await saveDonation({
      amount: 100,
      currency: Currencies.EUR
    })

    expect(donation.currency).toBe(Currencies.EUR)
    expect(donation.amount).toBe(100)
  })

  it('should not save an invalid donation', async () => {
    await expect(
      saveDonation({
        amount: -1,
        currency: Currencies.EUR
      })
    ).rejects.toThrow('Amount required')

    await expect(
      saveDonation({
        amount: 100,
        // @ts-ignore
        currency: 'RUR'
      })
    ).rejects.toThrow('Valid currency required')
  })
})
