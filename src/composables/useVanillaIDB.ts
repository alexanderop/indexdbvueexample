import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'

const DB_NAME = 'vanilla-counter-db'
const STORE_NAME = 'settings'
const KEY = 'counter'

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME)
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

function getValue(db: IDBDatabase): Promise<number | undefined> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly')
    const store = tx.objectStore(STORE_NAME)
    const request = store.get(KEY)
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

function setValue(db: IDBDatabase, value: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    const request = store.put(value, KEY)
    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
  })
}

export function useVanillaIDB() {
  const count: Ref<number> = ref(0)
  const isReady = ref(false)
  let db: IDBDatabase | null = null

  async function persist() {
    if (db)
      await setValue(db, count.value)
  }

  onMounted(async () => {
    db = await openDB()
    const stored = await getValue(db)
    if (stored !== undefined)
      count.value = stored
    isReady.value = true
  })

  function inc() {
    count.value++
    persist()
  }

  function dec() {
    count.value--
    persist()
  }

  return { count, inc, dec, isReady }
}
