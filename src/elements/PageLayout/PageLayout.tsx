import React from 'react'
import useStyles from './styles'

type Props = { children: React.ReactNode; disablePadding?: boolean }

export default function PageLayout({ children, disablePadding }: Props) {
  const cls = useStyles({ disablePadding })

  return <div className={cls.wrapper}>{children}</div>
}

PageLayout.defaultProps = {
  disablePadding: false
}
