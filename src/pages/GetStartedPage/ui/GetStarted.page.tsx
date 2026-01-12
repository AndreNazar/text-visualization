import { memo } from 'react'
import styles from './GetStartedPage.module.scss'
import { Text } from '@ui/Text'
import { Button } from '@ui/Button'

function GetStartedPageComponent() {
  return (
    <div className={styles.container}>
      <Text align="left">
        Вставьте набор текстов, чтобы увидеть их смысловые связи в виде интерактивной 2D-карты.
      </Text>
      <textarea placeholder="Пример (набор случайных отзывов): &#13; &#13;  Отличный продукт! Пользуюсь второй месяц &#13;  Качество так себе, за эти деньги лучшее есть &#13;  Нормально, но сервис мог бы быть лучше &#13;  Рекомендую, хорошее соотношение цены и качества &#13;  ..."></textarea>
      <Button>Готово</Button>
    </div>
  )
}

export const GetStartedPage = memo(GetStartedPageComponent)
