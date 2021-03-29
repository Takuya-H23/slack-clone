//@ts-nocheck
import { Client } from 'pg'

global.postgres = global.postgres || {}

export const connectToDb = async () => {
  if (!global.postgres.client) {
    const client = new Client({
      connectionString: process.env.DATABASE_URL
    })

    global.postgres.client = client

    global.postgres.client.connect()
  }

  return global.postgres.client
}
