import { useCallback } from 'react'

import useMeat from './useMeat'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../meat/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const meat = useMeat()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(meat),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, meat],
  )

  return { onStake: handleStake }
}

export default useStake
