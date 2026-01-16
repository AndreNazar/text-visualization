import { memo, useCallback, useEffect, useState } from 'react'
import styles from './HistoryPage.module.scss'
import { getAllFilesFromDB } from '@api/indexedDB/files'
import { getSizeFile } from '@lib/helpers/getSizeFile'
import { Button } from '@ui/Button'
import { useNavigate } from 'react-router-dom'

function HistoryPageComponent() {
  const navigate = useNavigate()
  const [items, setItems] = useState<
    {
      id: string
      name: string
      createAt: string
      size: number
    }[]
  >([])

  const goToVisualization = useCallback(
    (id: string) => {
      navigate(`/visualization/${id}`)
    },
    [navigate],
  )

  useEffect(() => {
    const getFiles = async () => {
      const files = await getAllFilesFromDB()
      setItems(
        files
          .sort((a, b) => b.createAt - a.createAt)
          .map(file => ({
            id: file.id,
            name: file.name,
            createAt: new Date(file.createAt).toLocaleString(),
            size: file.file.size,
          })),
      )
    }

    getFiles()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {items.map(item => (
          <div key={item.id} className={styles.item}>
            <div className={styles.item_text}>
              <div className={styles.item__title}>Файл: {item.name}</div>
              <div className={styles.item__date}>От: {item.createAt}</div>
              <div className={styles.item__time}>Размер: {getSizeFile(item.size)}</div>
            </div>
            <Button size="medium" onClick={goToVisualization.bind(null, item.id)}>
              Перейти
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

const HistoryPage = memo(HistoryPageComponent)
export default HistoryPage
