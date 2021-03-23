import React from 'react'
import { Button as MaterialButton } from '@material-ui/core'
import useStyles from './useStyles'

type Props = {
  children: React.ReactNode
  ButtonProps?: { [key: string]: any }
  disableMargin?: boolean
}

export default function Button({
  children,
  disableMargin,
  ButtonProps
}: Props) {
  const cls = useStyles({ disableMargin })

  return (
    <MaterialButton {...ButtonProps} classes={cls}>
      {children}
    </MaterialButton>
  )
}

Button.defaultProps = {
  ButtonProps: {},
  disableMargin: false
}
