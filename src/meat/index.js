import BigNumber from 'bignumber.js/bignumber'
import Web3 from 'web3'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export { Meat } from './Meat.js'
export { Web3, BigNumber }
