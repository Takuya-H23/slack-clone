import makeStyles from '@material-ui/core/styles/makeStyles'

type Args = {
  disableMargin?: boolean
}

export default makeStyles(({ spacing }) => ({
  root: ({ disableMargin }: Args) => ({
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
    marginTop: disableMargin ? 0 : spacing(4)
  })
}))
