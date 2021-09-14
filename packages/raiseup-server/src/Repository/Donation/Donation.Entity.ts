import { getModelForClass, prop } from '@typegoose/typegoose'
import { Currencies } from 'Shared/utils/Types'

export class Donation {
  @prop()
  amount: number

  @prop({ type: String, enum: Currencies })
  currency: Currencies
}

export const DonationModel = getModelForClass(Donation, {
  schemaOptions: {
    timestamps: true,
    collection: 'donations'
  }
})
