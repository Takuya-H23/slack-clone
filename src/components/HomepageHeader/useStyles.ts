import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ palette, spacing }) => ({
  drawer: {
    width: '100vw',
    height: '100vh',
    backgroundColor: palette.background.default,
    padding: spacing(3)
  },
  list: {
    marginTop: spacing(4)
  },
  listItem: {
    marginBottom: spacing(2.5)
  },
  link: {
    fontSize: '1rem',
    fontWeight: 700
  },
  cta: {
    boxShadow: '0 -10px 12px rgba(0,0,0,.04)',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    '& button:first-child': {
      marginBottom: spacing(2)
    }
  }
}))
