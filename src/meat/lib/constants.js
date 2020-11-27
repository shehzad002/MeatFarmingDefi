import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const contractAddresses = {
  meat: {
    1: '0x34012ec52C4e1De3F8E4ea058158781383e42b6B',
  },
  masterChef: {
    1: '0xf296a186e046c7dDa6D622B2aba10E0c7574FA0e',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xMeat: {
    1: '0x1F9eE9F5933c5c48746b39e064c70349c77dCbEb'
  }
}

/*
SLP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 MEAT 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  // Perm Menu
  {
    pid: 0,
    lpAddresses: {
      1: '0x9c0b92b74e2aa5c5e09a7a33bac71541b1a4210d',
    },
    tokenAddresses: {
      1: '0x34012ec52C4e1De3F8E4ea058158781383e42b6B',
    },
    name: 'Meat Party!',
    symbol: 'MEAT-ETH MLP',
    tokenSymbol: 'MEAT',
    icon: '🍣',
  },
 
  // Perm Menu
]
