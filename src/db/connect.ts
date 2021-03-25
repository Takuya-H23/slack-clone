//@ts-nocheck
import { Client } from 'pg'

global.postgres = global.postgres || {}

export const connectToDb = async () => {
  if (!global.postgres.client) {
    console.log('hit')
    const client = new Client({
      connectionString: 'postgresql://postgres:@localhost:5432/postgres'
    })

    global.postgres.client = client

    global.postgres.client.connect()
  }

  return global.postgres.client
}
