import Image from 'next/image'
import { Box, IconButton, Button, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { PageLayout } from '../elements'

export default function Home() {
  return (
    <Box bgcolor="background.paper">
      <PageLayout disablePadding>
        <Box
          component="header"
          py={1.8}
          px={1}
          display="flex"
          justifyContent="space-between"
        >
          <Image src="/slack-logo.svg" width={110} height={30} alt="slack" />
          <IconButton>
            <Menu />
          </IconButton>
        </Box>
      </PageLayout>
      <PageLayout>
        <Typography variant="h1" gutterBottom>
          Welcome to your new HQ
        </Typography>
        <Typography paragraph>
          Teamwork can be hard, messy, complicated… and still the best way to
          work. That’s why we made Slack — a place where people get work done,
          together.
        </Typography>
        <Button variant="contained" color="primary" size="large" fullWidth>
          TRY FOR FREE
        </Button>
      </PageLayout>
    </Box>
  )
}
