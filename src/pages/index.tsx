import { Box, Typography } from '@material-ui/core'
import { Button, PageLayout } from '../elements'
import {
  BetterWayToCommunicate,
  HomepageBanner,
  HomepageHeader
} from '../components'

export default function Home() {
  return (
    <Box bgcolor="background.paper">
      <HomepageHeader />
      <PageLayout>
        <HomepageBanner />
        <BetterWayToCommunicate />
        <Box mt={5} style={{ boxShadow: '0 4px 20px rgba(0,0,0,.08)' }}>
          <Typography variant="h2" gutterBottom>
            Over 750,000 companies use Slack to get work done
          </Typography>
        </Box>
      </PageLayout>
    </Box>
  )
}
