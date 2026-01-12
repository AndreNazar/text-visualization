import { memo, type PropsWithChildren } from 'react'
import styles from './GlassWrapper.module.scss'

function GlassWrapperComponent({
  children,
  w = 300,
  h = 300,
  r = 10,
}: PropsWithChildren & { w?: number; h?: number; r?: number }) {
  return (
    <div
      className={styles.glass_wrapper}
      style={{ width: `${w}px`, height: `${h}px`, borderRadius: `${r}px` }}
    >
      {children}
    </div>
  )
}

export const GlassWrapper = memo(GlassWrapperComponent)
