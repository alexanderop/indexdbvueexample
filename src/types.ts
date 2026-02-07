export interface CounterComposable {
  count: import('vue').Ref<number>
  inc: () => void
  dec: () => void
  isReady: import('vue').Ref<boolean>
}
