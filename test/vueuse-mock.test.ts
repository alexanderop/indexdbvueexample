import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import VueUsePage from '../src/pages/vueuse.vue'

const mockData = ref<number>(0)

vi.mock('@vueuse/integrations/useIDBKeyval', () => ({
  useIDBKeyval: vi.fn(() => ({
    data: mockData,
    isFinished: ref(true),
  })),
}))

describe('vueUse page (vi.mock approach)', () => {
  beforeEach(() => {
    mockData.value = 0
  })

  it('renders the counter with initial value', () => {
    const wrapper = mount(VueUsePage)
    expect(wrapper.find('[data-testid="count"]').text()).toBe('0')
  })

  it('increments the counter', async () => {
    const wrapper = mount(VueUsePage)
    await wrapper.find('[data-testid="inc"]').trigger('click')
    expect(mockData.value).toBe(1)
  })

  it('decrements the counter', async () => {
    mockData.value = 5
    const wrapper = mount(VueUsePage)
    await wrapper.find('[data-testid="dec"]').trigger('click')
    expect(mockData.value).toBe(4)
  })

  it('loads existing data', () => {
    mockData.value = 42
    const wrapper = mount(VueUsePage)
    expect(wrapper.find('[data-testid="count"]').text()).toBe('42')
  })
})
