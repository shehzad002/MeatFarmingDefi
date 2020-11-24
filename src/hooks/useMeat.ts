import { useContext } from 'react'
import { Context } from '../contexts/MeatProvider'

const useMeat = () => {
  const { meat } = useContext(Context)
  return meat
}

export default useMeat
