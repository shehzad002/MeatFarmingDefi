import {useCallback} from 'react'

import useMeat from './useMeat'
import {useWallet} from 'use-wallet'

import {enter, getXMeatStakingContract} from '../meat/utils'

const useEnter = () => {
  const {account} = useWallet()
  const meat = useMeat()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXMeatStakingContract(meat),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, meat],
  )

  return {onEnter: handle}
}

export default useEnter
