import { memo, useCallback, useState } from 'react'
import styles from './GetStartedPage.module.scss'
import { Text } from '@ui/Text'
import { Button } from '@ui/Button'
import { StepsStarted } from '@widgets/StepsStarted'

function GetStartedPageComponent() {
  const [text, setText] = useState('')
  const [completeText, setCompleteText] = useState('')

  const onComplete = useCallback(() => {
    setCompleteText(text)
  }, [text])

  return (
    <div className={styles.container}>
      <Text align="left">
        Вставьте набор текстов, чтобы увидеть их смысловые связи в виде интерактивной 2D-карты.
      </Text>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Пример (набор случайных отзывов): &#13; &#13;  Отличный продукт! Пользуюсь второй месяц &#13;  Качество так себе, за эти деньги лучшее есть &#13;  Нормально, но сервис мог бы быть лучше &#13;  Рекомендую, хорошее соотношение цены и качества &#13;  ..."
      ></textarea>
      <Button onClick={onComplete}>Готово</Button>

      {completeText && <StepsStarted completeText={completeText} />}
    </div>
  )
}

export const GetStartedPage = memo(GetStartedPageComponent)
