import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(() => ({
  outer: {
    with: 1200
  },
  inner: ({ disablePadding }) => ({
    maxWidth: '92vw',
    margin: '0 auto',
    padding: disablePadding ? 0 : '1.8rem 0'
  })
}))
