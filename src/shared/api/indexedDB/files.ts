function openFilesDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('files-db')

    request.onupgradeneeded = () => {
      const db = request.result
      db.createObjectStore('files', { keyPath: 'id' })
    }

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

async function initStoreDB(mode: IDBTransactionMode) {
  const db = await openFilesDB()
  const tx = db.transaction('files', mode)
  return tx.objectStore('files')
}

export async function saveFileToDB(file: File) {
  return new Promise<string>((resolve, reject) => {
    initStoreDB('readwrite').then(store => {
      const id = crypto.randomUUID()
      const req = store.put({
        id,
        name: file.name,
        createAt: Date.now(),
        file,
      })

      req.onsuccess = () => resolve(id)
      req.onerror = () => reject(req.error)
    })
  })
}

export async function getFileFromDB(id: string) {
  return new Promise((resolve, reject) => {
    initStoreDB('readonly').then(store => {
      const req = store.get(id)

      req.onsuccess = () => resolve(req.result)
      req.onerror = () => reject(req.error)
    })
  })
}

export async function getAllFilesFromDB() {
  return new Promise((resolve, reject) => {
    initStoreDB('readonly').then(store => {
      const req = store.getAll()

      req.onsuccess = () => resolve(req.result)
      req.onerror = () => reject(req.error)
    })
  })
}
