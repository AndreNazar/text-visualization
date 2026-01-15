import { memo, type CSSProperties, type PropsWithChildren } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

function ButtonComponent({
  children,
  onClick,
  size = 'large',
  style,
}: PropsWithChildren & {
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  style?: CSSProperties
}) {
  return (
    <button className={cn(styles.button, styles[size])} onClick={onClick} style={style}>
      {children}
    </button>
  )
}

export const Button = memo(ButtonComponent)
