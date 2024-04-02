import { Interface } from '@ethersproject/abi'
import { Currency, CurrencyAmount } from '@uniswap/sdk-core'
// import IUniswapV2PairJSON from '@uniswap/v2-core/build/IUniswapV2Pair.json'
import IUniswapV2PairJSON from '../utils/ABI/UniswapV2Pair.json'
import { computePairAddress, Pair } from '@uniswap/v2-sdk'
import { useMultipleContractSingleData } from 'lib/hooks/multicall'
import { useMemo } from 'react'

import { V2_FACTORY_ADDRESSES } from '../constants/addresses'

// const PAIR_INTERFACE = new Interface(IUniswapV2PairJSON.abi)
const PAIR_INTERFACE = new Interface(IUniswapV2PairJSON)

export enum PairState {
  LOADING,
  NOT_EXISTS,
  EXISTS,
  INVALID,
}

export function useV2Pairs(currencies: [Currency | undefined, Currency | undefined][]): [PairState, Pair | null][] {
  const tokens = useMemo(
    () => currencies.map(([currencyA, currencyB]) => [currencyA?.wrapped, currencyB?.wrapped]),
    [currencies]
  )

  const pairAddresses = useMemo(
    () =>
    tokens.map(([tokenA, tokenB]) => {
       
        return tokenA &&
        tokenB &&
        tokenA.chainId === tokenB.chainId &&
        !tokenA.equals(tokenB) &&
        V2_FACTORY_ADDRESSES[tokenA.chainId]
        ? computePairAddress({ factoryAddress: V2_FACTORY_ADDRESSES[tokenA.chainId], tokenA, tokenB })
        // ? '0x6609FfFe096e00aCd636Bda945261da9C27d6aB1'
        : undefined
      }),
      [tokens]
  )

  console.log('pairAddresses:',pairAddresses);
  

  const results = useMultipleContractSingleData(pairAddresses, PAIR_INTERFACE, 'getReserves')
  

  return useMemo(() => {
    return results.map((result, i) => {
      const { result: reserves, loading } = result
      const tokenA = tokens[i][0]
      const tokenB = tokens[i][1]

      if (loading) return [PairState.LOADING, null]
      if (!tokenA || !tokenB || tokenA.equals(tokenB)) return [PairState.INVALID, null]
      if (!reserves) return [PairState.NOT_EXISTS, null]
      const { reserve0, reserve1 } = reserves
      const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
      
      return [
        PairState.EXISTS,
        new Pair(
          CurrencyAmount.fromRawAmount(token0, reserve0?.toString() || '0'),
          CurrencyAmount.fromRawAmount(token1, reserve1?.toString() || '0')
        ),
      ]
    })
  }, [results, tokens])
}

export function useV2Pair(tokenA?: Currency, tokenB?: Currency): [PairState, Pair | null] {
  const inputs: [[Currency | undefined, Currency | undefined]] = useMemo(() => [[tokenA, tokenB]], [tokenA, tokenB])
  return useV2Pairs(inputs)[0]
}
