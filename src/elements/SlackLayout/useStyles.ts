import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ palette, shadows }) => ({
  gridContainer: {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '3.5rem 15rem 1fr',
    backgroundColor: palette.background.default
  },
  workspaces: {
    boxShadow: shadows[1]
  }
}))
