import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useMeat from '../../hooks/useMeat'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../meat/utils'
import { getFarms } from '../../meat/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const meat = useMeat()
  const { account } = useWallet()

  const farms = getFarms(meat)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
