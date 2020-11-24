import {useCallback} from 'react'

import useMeat from './useMeat'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getMeatContract,
  getXMeatStakingContract
} from '../meat/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const meat = useMeat()
  const lpContract = getMeatContract(meat)
  const contract = getXMeatStakingContract(meat)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
