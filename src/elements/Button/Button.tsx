import React from 'react'
import { Button as MaterialButton } from '@material-ui/core'
import useStyles from './useStyles'

type Props = {
  children: React.ReactNode
  ButtonProps?: { [key: string]: any }
  disableMargin?: boolean
  onClick?: () => void
}

export default function Button({
  children,
  disableMargin,
  ButtonProps,
  onClick
}: Props) {
  const cls = useStyles({ disableMargin })

  return (
    <MaterialButton {...ButtonProps} onClick={onClick} classes={cls}>
      {children}
    </MaterialButton>
  )
}

Button.defaultProps = {
  ButtonProps: {},
  disableMargin: false
}
