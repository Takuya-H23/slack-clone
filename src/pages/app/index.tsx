import React from 'react'
import { ObjectId } from 'mongodb'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client'
import { connectToDb } from '../../db/connect'

type Props = {
  session: { [key: string]: string } | null
}

export default function App({ session }: Props) {
  const { push } = useRouter()

  React.useEffect(() => {
    if (!session) {
      push('/signIn')
    }
  }, [session])

  return <div>welcome!!</div>
}

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx)
  if (!session) return { props: { session } }

  const { db } = await connectToDb()
  const getUser = await db
    .collection('users')
    .findOne({ _id: ObjectId(session.user._id) })

  console.log(getUser)

  return {
    props: {
      session
    }
  }
}
