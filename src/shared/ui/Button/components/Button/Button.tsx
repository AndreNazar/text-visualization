import { memo, type PropsWithChildren } from 'react'
import styles from './Button.module.scss'

function ButtonComponent({ children, onClick }: PropsWithChildren & { onClick?: () => void }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

export const Button = memo(ButtonComponent)
