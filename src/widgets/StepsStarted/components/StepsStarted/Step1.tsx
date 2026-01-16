import styles from './StepsStarted.module.scss'
import { CopyCode } from '@features/CopyCode'

export function Step1({ arrayTexts }: { arrayTexts: string[] }) {
  return (
    <div className={styles.step_block}>
      <h1>Шаг 1</h1>
      <p>Скопируйте сгенерированный скрипт нажав на кнопку ниже</p>
      <CopyCode arrayTexts={arrayTexts} />
    </div>
  )
}
