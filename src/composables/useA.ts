import { useB } from './useB'
export const useA = () => {
  const b = useB()
  function doThing() {}
}
