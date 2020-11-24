import { useCallback } from 'react'

import useMeat from './useMeat'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../meat/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const meat = useMeat()
  const masterChefContract = getMasterChefContract(meat)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, meat],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
