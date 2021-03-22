//@ts-nocheck
import { Db, MongoClient } from 'mongodb'

global.mongo = global.mongo || {}

export const connectToDb = async () => {
  if (!global.mongo.client) {
    const client = new MongoClient(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000
    })

    global.mongo.client = client

    console.log('connecting to DB')
    await global.mongo.client.connect()
    console.log('connected to DB')
  }

  const db: Db = global.mongo.client.db(process.env.DATABASE_NAME)

  return { db, dbClient: global.mongo.client }
}
