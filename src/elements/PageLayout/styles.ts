import makeStyles from '@material-ui/core/styles/makeStyles'

type Args = {
  disablePadding?: boolean
}

export default makeStyles(() => ({
  wrapper: ({ disablePadding }: Args) => ({
    width: '76.875rem',
    maxWidth: '92vw',
    margin: '0 auto',
    padding: disablePadding ? 0 : '1.8rem 0'
  })
}))
