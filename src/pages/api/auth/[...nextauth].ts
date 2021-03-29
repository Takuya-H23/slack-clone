//@ts-nocheck
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { lensProp, over } from 'ramda'

const L = { user: lensProp('user') }

export default NextAuth({
  session: {
    jwt: true
  },
  jwt: {
    secret: process.env.JWT_SECRET
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  database: process.env.DATABASE_CONNECTION_STRING,
  page: {
    signIn: '/signIn'
  },
  callbacks: {
    session(session, user) {
      return over(L.user, x => ({ ...x, _id: user.sub }), session)
    }
  }
})
