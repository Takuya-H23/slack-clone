import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { providers, signIn, useSession } from 'next-auth/client'
import Image from 'next/image'
import { Box, Button, Typography } from '@material-ui/core'
import { PageLayout } from '../elements'
import { OAuthButtons } from '../components'

const handleClick = (id: string) => () => signIn(id)

export default function SignIn({ providers }: any) {
  const [session] = useSession()
  const { push } = useRouter()

  React.useEffect(() => {
    if (session) push('/app')
  }, [session])

  return (
    <PageLayout>
      <Box
        display="flex"
        flexDirection="column"
        alignContent="center"
        alignItems="center"
      >
        <Box component="header" mb={5}>
          <Link href="/">
            <a>
              <Image
                src="/slack-logo.svg"
                width={150}
                height={40}
                alt="slack"
              />
            </a>
          </Link>
        </Box>
        <Typography variant="h1" paragraph>
          Sign in to Slack
        </Typography>
        <Typography variant="body1" paragraph>
          We suggest using the email address you ruse at work.
        </Typography>
        <OAuthButtons providers={Object.values(providers)} />
      </Box>
    </PageLayout>
  )
}

SignIn.getInitialProps = async () => ({ providers: await providers() })
