import type { Ref } from 'vue'
import Dexie from 'dexie'
import { onMounted, ref } from 'vue'

const db = new Dexie('dexie-counter-db')
db.version(1).stores({
  settings: '',
})

export function useDexieCounter() {
  const count: Ref<number> = ref(0)
  const isReady = ref(false)

  onMounted(async () => {
    const stored = await db.table('settings').get('counter')
    if (stored !== undefined)
      count.value = stored
    isReady.value = true
  })

  async function persist() {
    await db.table('settings').put(count.value, 'counter')
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
