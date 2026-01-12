import { memo, type PropsWithChildren } from 'react'
import styles from './Text.module.scss'
import cn from 'classnames'

type TextPropsType = PropsWithChildren & {
  weight?: number
  size?: number
  color?: string
  align?: 'center' | 'left' | 'right'
  className?: string
}

function TextComponent({
  children,
  weight = 400,
  size = 16,
  color = '#fff',
  align = 'center',
  className,
}: TextPropsType) {
  return (
    <div
      className={cn(styles.text, className && className)}
      style={{
        fontWeight: weight,
        fontSize: `${size}px`,
        color,
        textAlign: align,
      }}
    >
      {children}
    </div>
  )
}

export const Text = memo(TextComponent)
