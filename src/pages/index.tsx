import { Box, Typography } from '@material-ui/core'
import { Button, PageLayout } from '../elements'
import { HomepageBanner, HomepageHeader } from '../components'

export default function Home() {
  return (
    <Box bgcolor="background.paper">
      <HomepageHeader />
      <PageLayout>
        <HomepageBanner />
        <Box mt={4}>
          <Typography variant="h2" gutterBottom>
            A better way to communicate
          </Typography>
          <Typography paragraph>
            Unlike email, conversations in Slack are easy to follow. And they're
            more than conversations — you can make calls, share files, and even
            connect with other apps.
          </Typography>
          <Button
            ButtonProps={{
              variant: 'outlined',
              color: 'primary',
              size: 'large',
              fullWidth: true
            }}
          >
            SEE ALL FEATURES
          </Button>
        </Box>
        <Box mt={4} style={{ boxShadow: '0 4px 20px rgba(0,0,0,.08)' }}>
          <video autoPlay loop style={{ maxWidth: '100%', height: 'auto' }}>
            <source
              src="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/channels/bring-your-team-together-in-channels.mp4"
              type="video/mp4"
            />
          </video>
        </Box>
        <Box mt={4} style={{ boxShadow: '0 4px 20px rgba(0,0,0,.08)' }}>
          <Typography variant="h2" gutterBottom>
            Over 750,000 compannies use Slack to get work done
          </Typography>
        </Box>
      </PageLayout>
    </Box>
  )
}
