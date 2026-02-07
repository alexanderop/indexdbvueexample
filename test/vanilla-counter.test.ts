import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import VanillaPage from '../src/pages/vanilla.vue'

describe('vanilla IndexedDB counter', () => {
  it('renders and loads', async () => {
    const wrapper = mount(VanillaPage)
    await new Promise(r => setTimeout(r, 50))
    await nextTick()
    expect(wrapper.find('[data-testid="count"]').exists()).toBe(true)
  })

  it('increments the counter', async () => {
    const wrapper = mount(VanillaPage)
    await new Promise(r => setTimeout(r, 50))
    await nextTick()
    const before = Number(wrapper.find('[data-testid="count"]').text())
    await wrapper.find('[data-testid="inc"]').trigger('click')
    await nextTick()
    const after = Number(wrapper.find('[data-testid="count"]').text())
    expect(after).toBe(before + 1)
  })

  it('decrements the counter', async () => {
    const wrapper = mount(VanillaPage)
    await new Promise(r => setTimeout(r, 50))
    await nextTick()
    const before = Number(wrapper.find('[data-testid="count"]').text())
    await wrapper.find('[data-testid="dec"]').trigger('click')
    await nextTick()
    const after = Number(wrapper.find('[data-testid="count"]').text())
    expect(after).toBe(before - 1)
  })
})
