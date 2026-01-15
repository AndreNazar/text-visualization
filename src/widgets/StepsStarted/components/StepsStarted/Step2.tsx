import styles from './StepsStarted.module.scss'
import { CopyCode } from '@features/CopyCode'

export function Step2({ arrayTexts }: { arrayTexts: string[] }) {
  return (
    <div className={styles.step_block}>
      <h1>Шаг 2</h1>
      <p>
        Теперь нужно скопировать сгенерированный скрипт, для этого нажмите кнопку, чтобы скопировать
        его
      </p>
      <CopyCode arrayTexts={arrayTexts} />
    </div>
  )
}
