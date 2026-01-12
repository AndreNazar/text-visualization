import { memo } from 'react'
import styles from './HomePage.module.scss'
import { Button } from '@ui/Button'
import { ProcessSchema } from '../ProcessSchema/ProcessSchema'
import { useNavigate } from 'react-router-dom'

function HomePageComponent() {
  const navigate = useNavigate()

  const onStart = () => {
    navigate('/start')
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ProcessSchema />
        <Button onClick={onStart}>Начать</Button>
      </div>
    </div>
  )
}

export const HomePage = memo(HomePageComponent)
