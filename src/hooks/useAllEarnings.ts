import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../meat/utils'
import useMeat from './useMeat'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const meat = useMeat()
  const farms = getFarms(meat)
  const masterChefContract = getMasterChefContract(meat)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, meat])

  useEffect(() => {
    if (account && masterChefContract && meat) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, meat])

  return balances
}

export default useAllEarnings
