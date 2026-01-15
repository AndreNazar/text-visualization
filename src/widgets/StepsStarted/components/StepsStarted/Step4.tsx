import { FileLoader } from '@features/FileLoader'
import styles from './StepsStarted.module.scss'

export function Step4() {
  return (
    <div className={styles.step_block}>
      <h1>Шаг 4</h1>
      <p>Теперь нужно подождать когда загрузится json файл, затем загрузите его в поле ниже</p>
      <FileLoader />
    </div>
  )
}
