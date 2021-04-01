import { signIn } from 'next-auth/client'
import { Box } from '@material-ui/core'
import GitHub from '@material-ui/icons/GitHub'
import { Button } from '../../elements'
import useStyles from './useStyles'

type Provider = { name: string; id: string }

type Props = {
  providers: Provider[]
}

const handleClick = (id: string) => () => signIn(id)

export default function OAuthButtons({ providers }: Props) {
  const cls = useStyles()

  return (
    <Box className={cls.root}>
      {providers.map(({ id, name }: Provider) => (
        <Button
          onClick={handleClick(id)}
          key={name}
          ButtonProps={{
            variant: 'outlined',
            fullWidth: true,
            color: 'primary'
          }}
        >
          <GitHub className={cls.oathIcon} />
          Sign in with {name}
        </Button>
      ))}
    </Box>
  )
}
