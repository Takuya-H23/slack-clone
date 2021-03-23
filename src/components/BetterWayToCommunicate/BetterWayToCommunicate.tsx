import { Box, Grid, Typography, useMediaQuery } from '@material-ui/core'
import { Button } from '../../elements'

export default function BetterWayToCommunicate() {
  const isGreaterThanMd = useMediaQuery('(min-width: 950px )')
  return (
    <Box mt={5}>
      <Grid container spacing={5}>
        <Grid item md={5} style={{ order: isGreaterThanMd ? 1 : 0 }}>
          <Box>
            <Typography variant="h2" gutterBottom>
              A better way to communicate
            </Typography>
            <Typography paragraph>
              Unlike email, conversations in Slack are easy to follow. And
              they're more than conversations — you can make calls, share files,
              and even connect with other apps.
            </Typography>
            <Button
              ButtonProps={{
                variant: 'outlined',
                color: 'primary',
                size: 'large',
                fullWidth: !isGreaterThanMd
              }}
            >
              SEE ALL FEATURES
            </Button>
          </Box>
        </Grid>
        <Grid item md={7}>
          <Box>
            <video
              autoPlay
              loop
              style={{
                maxWidth: '100%',
                height: 'auto',
                boxShadow: '0 4px 20px rgba(0,0,0,.08)'
              }}
            >
              <source
                src="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/channels/bring-your-team-together-in-channels.mp4"
                type="video/mp4"
              />
            </video>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
