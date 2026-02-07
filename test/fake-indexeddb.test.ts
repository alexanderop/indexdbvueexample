import { clear, get, set } from 'idb-keyval'
import { beforeEach, describe, expect, it } from 'vitest'

describe('idb-keyval with fake-indexeddb', () => {
  beforeEach(async () => {
    await clear()
  })

  it('stores and retrieves a value', async () => {
    await set('counter', 42)
    const value = await get('counter')
    expect(value).toBe(42)
  })

  it('returns undefined for missing keys', async () => {
    const value = await get('nonexistent')
    expect(value).toBeUndefined()
  })

  it('overwrites existing values', async () => {
    await set('counter', 1)
    await set('counter', 2)
    const value = await get('counter')
    expect(value).toBe(2)
  })

  it('clears all values', async () => {
    await set('a', 1)
    await set('b', 2)
    await clear()
    expect(await get('a')).toBeUndefined()
    expect(await get('b')).toBeUndefined()
  })
})
