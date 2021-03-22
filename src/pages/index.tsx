import Image from 'next/image'
import { AppBar, Box } from '@material-ui/core'

export default function Home() {
  return (
    <Box bgcolor="background.default">
      <AppBar component="header" color="transparent">
        <Image
          src="/slack-logo.svg"
          alt="Picture of the author"
          width={150}
          height={80}
        />
      </AppBar>
    </Box>
  )
}
