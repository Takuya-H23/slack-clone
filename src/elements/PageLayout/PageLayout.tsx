import React from 'react'
import useStyles from './styles'

type Props = { children: React.ReactNode; disablePadding?: boolean }

export default function PageLayout({ children, disablePadding }: Props) {
  const cls = useStyles({ disablePadding })

  return (
    <div className={cls.outer}>
      <div className={cls.inner}>{children}</div>
    </div>
  )
}

PageLayout.defaultProps = {
  disablePadding: false
}
