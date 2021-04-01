import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ breakpoints, spacing }) => ({
  root: {
    width: '100%',
    [breakpoints.up('sm')]: {
      width: '80%'
    },
    [breakpoints.up('md')]: {
      width: '60%'
    },
    [breakpoints.up('lg')]: {
      width: '40%'
    }
  },
  oathIcon: {
    marginRight: spacing(1)
  }
}))
