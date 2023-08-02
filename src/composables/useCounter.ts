import { ref } from 'vue'

const count = ref(0)
export const useCounter = () => {
  return {
    count
  }
}
