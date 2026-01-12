import { ArrowToRightIcon, LinesIcon, PointsIcon } from '@assets/index'
import { GlassWrapper } from '@ui/GlassWrapper'
import { memo } from 'react'
import styles from './ProcessSchema.module.scss'

function ProcessSchemaComponent() {
  return (
    <div className={styles.process_schema}>
      <GlassWrapper>
        <LinesIcon />
      </GlassWrapper>
      <div className={styles.process_wrapper}>
        <ArrowToRightIcon />
        <div className={styles.mini_glass_blocks}>
          <GlassWrapper w={80} h={50} r={3}>
            UMAP
          </GlassWrapper>
          <GlassWrapper w={80} h={50} r={3}>
            DBSCAN
          </GlassWrapper>
        </div>
        <ArrowToRightIcon />
      </div>
      <GlassWrapper>
        <PointsIcon />
      </GlassWrapper>
    </div>
  )
}

export const ProcessSchema = memo(ProcessSchemaComponent)
