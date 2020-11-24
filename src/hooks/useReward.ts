import { useCallback } from 'react'

import useMeat from './useMeat'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../meat/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const meat = useMeat()
  const masterChefContract = getMasterChefContract(meat)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, meat])

  return { onReward: handleReward }
}

export default useReward
