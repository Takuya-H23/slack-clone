import React from 'react'
import { providers, signIn, useSession } from 'next-auth/client'
import { Button } from '@material-ui/core'

const handleClick = (id: string) => () => signIn(id)

export default function SignIn({ providers }: any) {
  const [session] = useSession()

  React.useEffect(() => {
    console.log(session)
  }, [session])

  console.log(providers)

  return Object.values(providers).map(({ id, name }: any) => (
    <Button onClick={handleClick(id)} key={name} variant="contained">
      Sign in with {name}
    </Button>
  ))
}

SignIn.getInitialProps = async () => ({ providers: await providers() })
