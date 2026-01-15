import { AddIcon, GoogleColabIcon } from '@assets/index'
import styles from './StepsStarted.module.scss'

export function Step1() {
  return (
    <div className={styles.step_block}>
      <h1>Шаг 1</h1>
      <p>
        Посетите сервис
        <a
          href="https://colab.research.google.com/"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          <GoogleColabIcon /> Google Colab
        </a>
        и там нажмите на кнопку{' '}
        <span className={styles.google_button}>
          <AddIcon /> Код
        </span>
      </p>
    </div>
  )
}
