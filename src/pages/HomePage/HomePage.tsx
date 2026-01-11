import { memo } from 'react'
import styles from './HomePage.module.scss'
import cn from 'classnames'

function HomePageComponent() {
  return (
    <div className={styles.container}>
      <div className={cn(styles.ball, styles.ball_1)}></div>
      <div className={cn(styles.ball, styles.ball_2)}></div>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>Context Atlas</h1>
          <p className={styles.subtitle}>Визуальный атлас ваших текстов</p>
        </div>
        <div className={styles.glass_blocks}>
          <div className={cn(styles.glass_block, styles.glass_block_1)}>
            <div className={styles.lines}>
              <svg
                width="210"
                height="177"
                viewBox="0 0 210 177"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="210" height="7.8202" rx="2" fill="white" />
                <rect y="33.8202" width="210" height="7.8202" rx="2" fill="white" />
                <rect y="67.6404" width="210" height="7.8202" rx="2" fill="white" />
                <rect y="101.461" width="210" height="7.8202" rx="2" fill="white" />
                <rect y="135.281" width="210" height="7.8202" rx="2" fill="white" />
                <rect y="169.101" width="210" height="7.8202" rx="2" fill="white" />
              </svg>
            </div>
          </div>
          <div className={styles.process_wrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#00000088"
            >
              <path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z" />
            </svg>
            <div className={styles.mini_glass_blocks}>
              <div className={styles.mini_glass_block}>UMAP</div>
              <div className={styles.mini_glass_block}>DBSCAN</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#00000088"
            >
              <path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z" />
            </svg>
          </div>
          <div className={cn(styles.glass_block, styles.glass_block_2)}>
            <svg
              width="168"
              height="164"
              viewBox="0 0 168 164"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.71"
                d="M3 23.5C3 18.2533 7.2533 14 12.5 14C17.7467 14 22 18.2533 22 23.5C22 28.7467 17.7467 33 12.5 33C7.2533 33 3 28.7467 3 23.5Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M54 10C54 4.47715 58.4772 0 64 0C69.5228 0 74 4.47715 74 10C74 15.5228 69.5228 20 64 20C58.4772 20 54 15.5228 54 10Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M103 37.5C103 32.2533 107.253 28 112.5 28H113.5C118.747 28 123 32.2533 123 37.5C123 42.7467 118.747 47 113.5 47H112.5C107.253 47 103 42.7467 103 37.5Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M128 24C128 18.4772 132.477 14 138 14C143.523 14 148 18.4772 148 24C148 29.5228 143.523 34 138 34C132.477 34 128 29.5228 128 24Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M113 61.5C113 56.2533 117.253 52 122.5 52C127.747 52 132 56.2533 132 61.5V62.5C132 67.7467 127.747 72 122.5 72C117.253 72 113 67.7467 113 62.5V61.5Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M68 138.5C68 133.253 72.2533 129 77.5 129C82.7467 129 87 133.253 87 138.5C87 143.747 82.7467 148 77.5 148C72.2533 148 68 143.747 68 138.5Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M148 154C148 148.477 152.477 144 158 144C163.523 144 168 148.477 168 154C168 159.523 163.523 164 158 164C152.477 164 148 159.523 148 154Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M148 123C148 117.477 152.477 113 158 113C163.523 113 168 117.477 168 123C168 128.523 163.523 133 158 133C152.477 133 148 128.523 148 123Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M123 138.5C123 133.253 127.253 129 132.5 129H133.5C138.747 129 143 133.253 143 138.5C143 143.747 138.747 148 133.5 148H132.5C127.253 148 123 143.747 123 138.5Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M67 71.5C67 66.2533 71.2533 62 76.5 62H77.5C82.7467 62 87 66.2533 87 71.5C87 76.7467 82.7467 81 77.5 81H76.5C71.2533 81 67 76.7467 67 71.5Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M22 42C22 36.4772 26.4772 32 32 32C37.5228 32 42 36.4772 42 42C42 47.5228 37.5228 52 32 52C26.4772 52 22 47.5228 22 42Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M0 81.5C0 76.2533 4.25329 72 9.5 72H10.5C15.7467 72 20 76.2533 20 81.5C20 86.7467 15.7467 91 10.5 91H9.5C4.2533 91 0 86.7467 0 81.5Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M34 118C34 112.477 38.4772 108 44 108C49.5228 108 54 112.477 54 118C54 123.523 49.5228 128 44 128C38.4772 128 34 123.523 34 118Z"
                fill="white"
              />
              <path
                opacity="0.71"
                d="M3 132.5C3 127.253 7.2533 123 12.5 123C17.7467 123 22 127.253 22 132.5V133.5C22 138.747 17.7467 143 12.5 143C7.2533 143 3 138.747 3 133.5V132.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <button className={styles.startButton}>Начать</button>
      </div>
    </div>
  )
}

export const HomePage = memo(HomePageComponent)
