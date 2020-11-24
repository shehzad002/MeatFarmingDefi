import {useCallback} from 'react'

import useMeat from './useMeat'
import {useWallet} from 'use-wallet'

import {leave, getXMeatStakingContract} from '../meat/utils'

const useLeave = () => {
  const {account} = useWallet()
  const meat = useMeat()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXMeatStakingContract(meat),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, meat],
  )

  return {onLeave: handle}
}

export default useLeave
