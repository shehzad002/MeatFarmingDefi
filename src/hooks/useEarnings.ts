import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../meat/utils'
import useMeat from './useMeat'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const meat = useMeat()
  const masterChefContract = getMasterChefContract(meat)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, meat])

  useEffect(() => {
    if (account && masterChefContract && meat) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, meat])

  return balance
}

export default useEarnings
