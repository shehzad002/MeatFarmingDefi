import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Meat } from '../../meat'

export interface MeatContext {
  meat?: typeof Meat
}

export const Context = createContext<MeatContext>({
  meat: undefined,
})

declare global {
  interface Window {
    meatsauce: any
  }
}

const MeatProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [meat, setMeat] = useState<any>()

  // @ts-ignore
  window.meat = meat
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const meatLib = new Meat(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setMeat(meatLib)
      window.meatsauce = meatLib
    }
  }, [ethereum])

  return <Context.Provider value={{ meat }}>{children}</Context.Provider>
}

export default MeatProvider
