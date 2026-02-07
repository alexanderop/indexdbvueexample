import type { Ref } from 'vue'
import { openDB } from 'idb'
import { onMounted, ref } from 'vue'

const DB_NAME = 'idb-counter-db'
const STORE_NAME = 'settings'
const KEY = 'counter'

function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME)
      }
    },
  })
}

export function useIdbCounter() {
  const count: Ref<number> = ref(0)
  const isReady = ref(false)

  onMounted(async () => {
    const db = await getDB()
    const stored = await db.get(STORE_NAME, KEY)
    if (stored !== undefined)
      count.value = stored
    isReady.value = true
  })

  async function persist() {
    const db = await getDB()
    await db.put(STORE_NAME, count.value, KEY)
  }

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
