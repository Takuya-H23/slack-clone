import { Box, IconButton } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import useStyles from './useStyles'

export default function SlackLayout() {
  const cls = useStyles()

  return (
    <div className={cls.gridContainer}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        bgcolor="primary.dark"
        color="text.hint"
        className={cls.workspaces}
      >
        <IconButton color="inherit">
          <Add fontSize="large" />
        </IconButton>
      </Box>
      <Box pt={2} px={1} bgcolor="primary.main" color="text.hint">
        list
      </Box>
      <Box pt={2} px={1}>
        chat
      </Box>
    </div>
  )
}
