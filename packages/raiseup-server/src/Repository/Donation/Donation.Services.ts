import { DonateInput } from 'Shared/Repository/Donation.InputTypes'
import { Donation, DonationModel } from 'Api/Repository/Donation/Donation.Entity'
import { Currencies } from 'Shared/utils/Types'

export const saveDonation = async ({ amount, currency }: DonateInput): Promise<Donation> => {
  if (!amount || isNaN(amount) || amount <= 0) {
    throw new Error('Amount required')
  }

  if (!currency || !Object.values(Currencies).includes(currency)) {
    throw new Error('Valid currency required')
  }

  return DonationModel.create({
    amount,
    currency
  })
}
