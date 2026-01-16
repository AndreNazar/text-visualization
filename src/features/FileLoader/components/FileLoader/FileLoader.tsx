import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type DragEvent,
} from 'react'
import styles from './FileLoader.module.scss'
import { useNavigate } from 'react-router-dom'
import { saveFileToDB } from '@api/indexedDB/files'
import cn from 'classnames'
import { Button } from '@ui/Button'

let timeoutId: number | null = null
const onPreventDefault = (e: DragEvent<HTMLLabelElement>) => e.preventDefault()

function FileLoaderComponent() {
  const navigate = useNavigate()
  const [file, setFile] = useState<File | null>(null)
  const [statusDrag, setStatusDrag] = useState<'error' | 'opened' | 'closed'>('closed')

  const onClose = useCallback(() => setStatusDrag('closed'), [])
  const onOpen = useCallback(() => setStatusDrag('opened'), [])

  const textOut = useMemo(
    () =>
      statusDrag === 'error' ? 'Неправильный формат файла' : 'Перетащите или выберите JSON-файл',
    [statusDrag],
  )

  const onInputTouch = useCallback(() => document.getElementById('file')?.click(), [])

  const applyFile = useCallback((localFile: File) => {
    clearTimeout(timeoutId || 0)
    if (localFile?.type === 'application/json') {
      setFile(localFile)
      setStatusDrag('closed')
    } else {
      setStatusDrag('error')

      timeoutId = setTimeout(() => {
        setStatusDrag('closed')
      }, 3000)
    }
  }, [])

  const uploadFile = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const localFile = e.target.files?.[0]
      if (localFile) applyFile(localFile)
    },
    [applyFile],
  )

  const dropFile = useCallback(
    (e: DragEvent<HTMLLabelElement>) => {
      e.preventDefault()
      const localFile = e.dataTransfer.files[0]
      applyFile(localFile)
    },
    [applyFile],
  )

  useEffect(() => {
    if (file) saveFileToDB(file).then(id => navigate('/visualization/' + id))
  }, [file, navigate])

  return (
    <label
      className={cn(styles.loader_zone, styles[statusDrag])}
      onDragOver={onPreventDefault}
      onDrop={dropFile}
      onDragEnter={onOpen}
      onDragLeave={onClose}
    >
      <span>{textOut}</span>
      <input id="file" type="file" onChange={uploadFile} />
      <Button onClick={onInputTouch} size="small">
        Выбрать файл
      </Button>
    </label>
  )
}

export const FileLoader = memo(FileLoaderComponent)
