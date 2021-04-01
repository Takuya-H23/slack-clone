import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Drawer,
  IconButton,
  Button,
  Typography,
  List,
  ListItem
} from '@material-ui/core'
import { Menu, Close } from '@material-ui/icons'
import { PageLayout } from '../../elements'
import useStyles from './useStyles'

const urls = [
  { label: 'Product', url: '/' },
  { label: 'Enterprise', url: '/' },
  { label: 'Resources', url: '/' },
  { label: 'Pricing', url: '/' },
  { label: 'Sign in', url: '/signIn' }
]

export default function HomepageHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const cls = useStyles()
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <PageLayout disablePadding>
      <Box
        component="header"
        py={1.8}
        px={1}
        display="flex"
        justifyContent="space-between"
      >
        <Image src="/slack-logo.svg" width={110} height={30} alt="slack" />
        <IconButton onClick={open}>
          <Menu />
        </IconButton>
        <Drawer anchor="right" open={isOpen}>
          <Box className={cls.drawer}>
            <Box display="flex" justifyContent="space-between">
              <Image
                src="/slack-logo.svg"
                width={110}
                height={30}
                alt="slack"
              />

              <IconButton onClick={close}>
                <Close />
              </IconButton>
            </Box>
            <List className={cls.list}>
              {urls.map(({ label, url }) => (
                <ListItem key={label} disableGutters className={cls.listItem}>
                  <Link href={url}>
                    <a className={cls.link}>{label}</a>
                  </Link>
                </ListItem>
              ))}
            </List>
            <Box
              display="flex"
              flexDirection="column"
              p={5}
              className={cls.cta}
            >
              <Button variant="outlined" color="primary" size="large">
                <Link href="/signIn">SIGN IN</Link>
              </Button>
              <Button variant="contained" color="primary" size="large">
                <Link href="/">DOWNLOAD SLACK</Link>
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </PageLayout>
  )
}
