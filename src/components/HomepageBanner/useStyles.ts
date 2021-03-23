import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ spacing, breakpoints }) => ({
  video: {
    maxWidth: '100%',
    height: 'auto',
    [breakpoints.up('md')]: {
      paddingLeft: spacing(5)
    },
    [breakpoints.up('lg')]: {
      paddingLeft: spacing(8)
    }
  }
}))
