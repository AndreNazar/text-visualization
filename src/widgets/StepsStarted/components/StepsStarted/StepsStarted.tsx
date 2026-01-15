import { memo, useEffect } from 'react'
import styles from './StepsStarted.module.scss'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'

function StepsStartedComponents({ completeText }: { completeText: string }) {
  const arrayTexts = completeText.split('\n').filter(Boolean)
  return (
    <div className={styles.steps_started}>
      <h1>Теперь нужно сделать несколько действий:</h1>
      <Step1 />
      <Step2 arrayTexts={arrayTexts} />
      <Step3 />
      <Step4 />
    </div>
  )
}

export const StepsStarted = memo(StepsStartedComponents)
