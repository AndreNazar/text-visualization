import { memo, type PropsWithChildren } from 'react'
import styles from './GlassWrapper.module.scss'

type PlaceItemsType = 'start' | 'center' | 'end'

type GlassWrapperPropsType = {
  w?: number
  h?: number
  r?: number
  maxWidth?: boolean
  fitHeight?: boolean
  justify?: PlaceItemsType
  align?: PlaceItemsType
}

function GlassWrapperComponent({
  children,
  w = 300,
  h = 300,
  r = 10,
  maxWidth = false,
  fitHeight = false,
  justify = 'start',
  align = 'start',
}: PropsWithChildren & GlassWrapperPropsType) {
  return (
    <div
      className={styles.glass_wrapper}
      style={{
        width: maxWidth ? '100%' : `${w}px`,
        height: fitHeight ? 'fit-content' : `${h}px`,
        borderRadius: `${r}px`,
        justifyContent: justify,
        alignContent: align,
      }}
    >
      {children}
    </div>
  )
}

export const GlassWrapper = memo(GlassWrapperComponent)
