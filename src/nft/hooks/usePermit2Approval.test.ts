import { CurrencyAmount } from '@uniswap/sdk-core'
import { USDC_MAINNET } from '@uniswap/smart-order-router'
// import { UNIVERSAL_ROUTER_ADDRESS } from '@uniswap/universal-router-sdk'
const UNIVERSAL_ROUTER_ADDRESS = (chainId: Number) => {
  return '0x5359300dE564A36713CAB1eDD154B9e66D821002'
};
import usePermit2Allowance, { AllowanceState } from 'hooks/usePermit2Allowance'
import { renderHook } from 'test-utils/render'

import usePermit2Approval from './usePermit2Approval'

const USDCAmount = CurrencyAmount.fromRawAmount(USDC_MAINNET, '10000')

jest.mock('hooks/usePermit2Allowance')

const mockUsePermit2Allowance = usePermit2Allowance as jest.MockedFunction<typeof usePermit2Allowance>

describe('usePermit2Approval', () => {
  it('sets spender of the correct UR contract from NFT side', async () => {
    mockUsePermit2Allowance.mockReturnValue({ state: AllowanceState.LOADING })
    renderHook(() => usePermit2Approval(USDCAmount, undefined, UNIVERSAL_ROUTER_ADDRESS(1)))
    expect(mockUsePermit2Allowance).toHaveBeenCalledWith(USDCAmount, UNIVERSAL_ROUTER_ADDRESS(1))
  })
})
