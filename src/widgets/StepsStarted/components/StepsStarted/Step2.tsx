import { AddIcon, GoogleColabIcon, StartIcon } from '@assets/index'
import styles from './StepsStarted.module.scss'

export function Step2() {
  return (
    <div className={styles.step_block}>
      <h1>Шаг 2</h1>
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
        Затем вставьте код в появившееся поле, затем запустите код, нажав на <StartIcon />
      </p>
    </div>
  )
}
