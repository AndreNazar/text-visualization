import { ArrowToRightIcon, LinesIcon, PointsIcon } from '@assets/index'
import { GlassWrapper } from '@ui/GlassWrapper'
import { memo } from 'react'
import styles from './ProcessSchema.module.scss'

function ProcessSchemaComponent() {
  return (
    <div className={styles.process_schema}>
      <div className={styles.big_block}>
        <LinesIcon />
      </div>
      <div className={styles.process_wrapper}>
        <ArrowToRightIcon />
        <div className={styles.mini_blocks}>
          <div className={styles.mini_block}>UMAP</div>
          <div className={styles.mini_block}>DBSCAN</div>
        </div>
        <ArrowToRightIcon />
      </div>
      <div className={styles.big_block}>
        <PointsIcon />
      </div>
    </div>
  )
}

export const ProcessSchema = memo(ProcessSchemaComponent)
