import { memo, useEffect, useState } from 'react'
import styles from './FileLoader.module.scss'
import { useNavigate } from 'react-router-dom'
import { saveFileToDB } from '@api/indexedDB/files'

function FileLoaderComponent() {
  const navigate = useNavigate()
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    if (file) saveFileToDB(file).then(id => navigate('/visualisation/' + id))
  }, [file, navigate])
  return (
    <div className={styles.loader_zone}>
      <input type="file" onChange={e => setFile(e?.target?.files?.[0] || null)} />
    </div>
  )
}

export const FileLoader = memo(FileLoaderComponent)
