import { Box, Grid, Typography, useMediaQuery } from '@material-ui/core'
import { Button } from '../../elements'
import useStyles from './useStyles'

export default function HomepageBanner() {
  const cls = useStyles()
  const isGreaterThanMd = useMediaQuery('(min-width: 950px )')

  return (
    <Grid container spacing={4} alignItems="center" justify="center">
      <Grid item md={6}>
        <Typography variant="h1" gutterBottom>
          Welcome to your new HQ
        </Typography>
        <Typography paragraph>
          Teamwork can be hard, messy, complicated… and still the best way to
          work. That’s why we made Slack — a place where people get work done,
          together.
        </Typography>
        <Button
          ButtonProps={{
            variant: 'contained',
            color: 'primary',
            size: 'large',
            fullWidth: !isGreaterThanMd
          }}
        >
          TRY FOR FREE
        </Button>
      </Grid>
      <Grid item md={6}>
        <Box mt={4}>
          <video autoPlay loop className={cls.video}>
            <source
              src="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/tablet/mp4/hero-image-tablet.mp4"
              type="video/mp4"
            />
            <source
              src="https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/hp-prospect/hero/tablet/webm/hero-image-tablet.webm"
              type="video/webm"
            />
          </video>
        </Box>
      </Grid>
    </Grid>
  )
}
