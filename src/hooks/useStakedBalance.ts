import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../meat/utils'
import useMeat from './useMeat'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const meat = useMeat()
  const masterChefContract = getMasterChefContract(meat)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, meat])

  useEffect(() => {
    if (account && meat) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, meat])

  return balance
}

export default useStakedBalance
