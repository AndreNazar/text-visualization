import { memo } from 'react'
import styles from './StepsStarted.module.scss'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'

function StepsStartedComponents({ completeText }: { completeText: string }) {
  const arrayTexts = completeText.replace(/'/g, '"').split('\n').filter(Boolean)
  return (
    <div className={styles.steps_started}>
      <h1>Теперь нужно сделать несколько действий:</h1>
      <Step1 arrayTexts={arrayTexts} />
      <Step2 />
      <Step3 />
    </div>
  )
}

export const StepsStarted = memo(StepsStartedComponents)
