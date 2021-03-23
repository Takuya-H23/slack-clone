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
        <Box mt={4}>
          <video autoPlay loop style={{ maxWidth: '100%', height: 'auto' }}>
            <source
              src="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/tablet/mp4/hero-image-tablet.mp4"
              type="video/mp4"
            />
          </video>
        </Box>
        <Box mt={4}>
          <Typography variant="h2" gutterBottom>
            A better way to comuunicate
          </Typography>
          <Typography paragraph>
            Unlike email, conversaions in Slack are easy to follow. And they're
            more than conversations — you can make calls, share files, and even
            connect with other apps.
          </Typography>
          <Button variant="outlined" color="primary" size="large" fullWidth>
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
