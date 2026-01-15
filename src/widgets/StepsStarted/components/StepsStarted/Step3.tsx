import { StartIcon } from '@assets/index'
import styles from './StepsStarted.module.scss'

export function Step3() {
  return (
    <div className={styles.step_block}>
      <h1>Шаг 3</h1>
      <p>
        Вставьте код в появившееся поле, затем запустите код, нажав на <StartIcon />
      </p>
    </div>
  )
}
