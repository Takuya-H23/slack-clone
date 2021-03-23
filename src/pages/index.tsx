import { Box, Button, Typography } from '@material-ui/core'
import { PageLayout } from '../elements'
import { HomepageHeader } from '../components'

export default function Home() {
  return (
    <Box bgcolor="background.paper">
      <HomepageHeader />
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
