import { reactive, toRefs } from 'vue'
export const useLion = () => {
  const animal = reactive({
    name: 'Lion',
    diet: 'Carnivore',
    lifespan: '8-12 years'
  })

  return toRefs(animal)
}
