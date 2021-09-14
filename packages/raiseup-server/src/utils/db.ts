import mongoose from 'mongoose'

export const initDB = async (dbHost = 'mongodb://localhost', dbName = 'raiseup-dev') => {
  try {
    await mongoose.connect(dbHost, {
      dbName
    })
  } catch (e) {
    console.error(`host: ${dbHost}, dbName: ${dbName}`, e)
    throw new Error('Unable to connect to Mongo')
  }

  return {
    dbHost,
    dbName
  }
}
