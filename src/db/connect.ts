//@ts-nocheck
import { Db, MongoClient } from 'mongodb'

global.mongo = global.mongo = {}

export const coonectToDb = async () => {
  if (!global.mongo) {
    const client = new MongoClient(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000
    })

    console.log('connecting to DB')
    await global.mongo.client.connect()
    console.log('connected to DB')

    global.mongo.client = client
  }

  const db: Db = global.mongo.client.db(process.env.DATABASE_NAME)

  return { db, dbClient: global.mongo.client }
}
