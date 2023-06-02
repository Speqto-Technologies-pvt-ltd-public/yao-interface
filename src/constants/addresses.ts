// import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from '@uniswap/v2-sdk'
// import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from '@uniswap/v3-sdk'
import { SupportedChainId } from './chains'
type AddressMap = { [chainId: number]: string }

// MUMBAI - ADDRESSES !!
// pool =  0x5d55B8dDC20693bAfB1359c6EBf6ddf61eCD254B

// MUMBAI ADDDRESSES 
const _WETH_ADDRESS = '0x83c00cBE8981a85b7c847b955F3b8C6424711bc9'
const _FACTORY_V3_ADDRESS = '0xbA3FDb7e5aE1a5F9e4DaEd2c450929942DEbcBDe'
const _SWAP_ROUTER_ADDRESS = '0x5Cb404374434F48e06baF916b1a72B9501EE565D'
const _NFT_DESCRIPTOR_ADDRESS = '0xB2591d8B920F0D4f744bE93a378737B551F719c2'
const _POSITION_DESCRIPTOR_ADDRESS = '0x2dEaDeb8867e217c11f61fd4Ce32b583b1fd9DeC'
const _POSITION_MANAGER_ADDRESS = '0xd75406D0DAF09c545F22A70b89162FB3cB2AE35D'
const _QUOTER_ADDRESS = '0x19bA8988C078e87DC49D70B71Fc127263992dA89'
const _QUOTER_V2_ADDRESS = '0x8E64EdC03aD4C9FDf059D1d6b1265E7BE18AA3d3'
const _V3_MIGRATOR_ADDRESS = '0x66Bd8fA94B777d091Bfd11b590906F338A2bfca7'
const _TICK_LENS_ADDRESS = '0xD7e2ccB4aF64aCdbD7221bb8D6e8a45F31d00D6b'
const _MULTICALL2_ADDRESS = '0x38a551e080a86327A53358824ce3b41692B3C844'
const _FACTORY_V2_ADDRESS = '0x8F4005d40C3E515B57d78781Cf300dcde24493Cf'
const _ROUTER_V2_ADDRESS = '0x61c46db1A183D68bbf8f3191B08aCc5b57532834'
const _UNISWAP_INTERFACE_MULTICALL = '0xBdcc7Bd73620BaDB15868fEa60b529a73bA46D00'


const _PERMIT2_ADDRESS = '0xc62fadf45e4228186DF4A68739dF39b121eb9A52'
const _UNIVERSAL_ROUTER_ADDRESS = '0x43A5fCFd00704EC73EFC87ECEFBC7ca670583eef'

const _YAO_TOKEN_ADDRESS = '0x2E932705409009EFC758Bb4495d77C7Bc814aFd0'


// SEPOLIA ADDRESSES 
const SEPOLIA_WETH_ADDRESS = '0xEDF6339dB9aa064548b2BC2E3911006d77B2e7c5'
const SEPOLIA_FACTORY_V3_ADDRESS = '0xF8Ef73608517d6384b0354913A7a3CF5B4B196f0'
const SEPOLIA_SWAP_ROUTER_ADDRESS = '0xe86446c47aB1Ff890fAE3AC9faDcE1C614f8f839'
const SEPOLIA_NFT_DESCRIPTOR_ADDRESS = '0xB6B404694Af69846b0EEe96c9BDC01EEbB0d0958'
const SEPOLIA_POSITION_DESCRIPTOR_ADDRESS = '0x023a2D8b4Dd7964451E6faA3Af9377CC4feC0c04'
const SEPOLIA_POSITION_MANAGER_ADDRESS = '0xA579C018C63cA5A1D5F2Cc3C8035a085225729D8'
const SEPOLIA_QUOTER_ADDRESS = '0x5fF05DF020bB215d5D0bEab8fc20D2478aB854c9'
const SEPOLIA_QUOTER_V2_ADDRESS = '0x0022A2b99A86e7bBd2096032352a89D55a4d43a5'
const SEPOLIA_V3_MIGRATOR_ADDRESS = '0xa3e54945DF91731EeDd7922DBca3292ED937b922'
const SEPOLIA_TICK_LENS_ADDRESS = '0x423F32E244EedE52Fa52576d229aE266fD483544'
const SEPOLIA_MULTICALL2_ADDRESS = '0xaa78931160bf6B1F4C9c09E01EE249E520c041Db'
const SEPOLIA_FACTORY_V2_ADDRESS = '0x1b438b16cabBD1aE916aeC3A01C7c42CD3e38Dc5'
const SEPOLIA_ROUTER_V2_ADDRESS = '0x4C61D6dFbae61179cdDA923f3C1136b3BfC47Cc3'
const SEPOLIA_UNISWAP_INTERFACE_MULTICALL = '0xb2b815E0fECB43839e3E8ba08bb22B0025eC95Ab'
const SEPOLIA_PERMIT2_ADDRESS = '0x3F2Ba73da6812F222cB3452D76AbCe58AAf7802f'
const SEPOLIA_UNIVERSAL_ROUTER_ADDRESS = '0x23F3fb0Fc20aC34392ce4dF30024FBC6023e813A'

const SEPOLIA_YAO_TOKEN_ADDRESS = '0xCD0740b36322B0Be79bA0fa8dae151158E28b404'
export const PERMIT2_ADDRESS  = (chainId: number): string => {
  console.log('chainId  ----> ' ,chainId);
  
  switch (chainId) {
    case 1: // mainnet
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 5: // goerli
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 11155111: // sepolia
      return SEPOLIA_PERMIT2_ADDRESS
    case 137: // polygon
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 80001: // polygon mumbai
      return _PERMIT2_ADDRESS
    case 10: // optimism
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 420: // optimism goerli
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 42161: // arbitrum
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 421613: // arbitrum goerli
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 42220: // celo
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 44787: // celo alfajores
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 56: // binance smart chain
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    default:
      throw new Error(`Permit 2 address  not deployed on chain ${chainId}`)
  }
}

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number): string => {
  switch (chainId) {
    case 1: // mainnet
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 5: // goerli
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 11155111: // sepolia
      return SEPOLIA_UNIVERSAL_ROUTER_ADDRESS
    case 137: // polygon
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 80001: // polygon mumbai
      return _UNIVERSAL_ROUTER_ADDRESS
    case 10: // optimism
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 420: // optimism goerli
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 42161: // arbitrum
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 421613: // arbitrum goerli
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 42220: // celo
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 44787: // celo alfajores
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 56: // binance smart chain
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    default:
      throw new Error(`Universal Router not deployed on chain ${chainId}`)
  }
}

const DEFAULT_NETWORKS = [SupportedChainId.MAINNET, SupportedChainId.GOERLI]

function constructSameAddressMap(address: string, additionalNetworks: SupportedChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}

// export const UNI_ADDRESS: AddressMap = constructSameAddressMap(SEPOLIA_YAO_TOKEN_ADDRESS)
export const UNI_ADDRESS: AddressMap = {
  ...constructSameAddressMap(_YAO_TOKEN_ADDRESS, [SupportedChainId.POLYGON_MUMBAI]),
  [SupportedChainId.SEPOLIA]: SEPOLIA_YAO_TOKEN_ADDRESS,
}

export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

// export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(_FACTORY_V2_ADDRESS)
export const V2_FACTORY_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON_MUMBAI]: _FACTORY_V2_ADDRESS,
  [SupportedChainId.SEPOLIA]: SEPOLIA_FACTORY_V2_ADDRESS,
}
// export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap(_ROUTER_V2_ADDRESS)
export const V2_ROUTER_ADDRESS: AddressMap = {
  [SupportedChainId.POLYGON_MUMBAI]: _ROUTER_V2_ADDRESS,
  [SupportedChainId.SEPOLIA]: SEPOLIA_ROUTER_V2_ADDRESS,
}


// celo v3 addresses
const CELO_V3_CORE_FACTORY_ADDRESSES = '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc'
const CELO_V3_MIGRATOR_ADDRESSES = '0x3cFd4d48EDfDCC53D3f173F596f621064614C582'
const CELO_MULTICALL_ADDRESS = '0x633987602DE5C4F337e3DbF265303A1080324204'
const CELO_QUOTER_ADDRESSES = '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8'
const CELO_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES = '0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A'
const CELO_TICK_LENS_ADDRESSES = '0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D'

// BNB v3 addresses
const BNB_V3_CORE_FACTORY_ADDRESSES = '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7'
const BNB_V3_MIGRATOR_ADDRESSES = '0x32681814957e0C13117ddc0c2aba232b5c9e760f'
const BNB_MULTICALL_ADDRESS = '0x963Df249eD09c358A4819E39d9Cd5736c3087184'
const BNB_QUOTER_ADDRESSES = '0x78D78E420Da98ad378D7799bE8f4AF69033EB077'
const BNB_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES = '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613'
const BNB_TICK_LENS_ADDRESSES = '0xD9270014D396281579760619CCf4c3af0501A47C'

// optimism goerli addresses
const OPTIMISM_GOERLI_V3_CORE_FACTORY_ADDRESSES = '0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10'
const OPTIMISM_GOERLI_V3_MIGRATOR_ADDRESSES = '0xf6c55fBe84B1C8c3283533c53F51bC32F5C7Aba8'
const OPTIMISM_GOERLI_MULTICALL_ADDRESS = '0x07F2D8a2a02251B62af965f22fC4744A5f96BCCd'
const OPTIMISM_GOERLI_QUOTER_ADDRESSES = '0x9569CbA925c8ca2248772A9A4976A516743A246F'
const OPTIMISM_GOERLI_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES = '0x39Ca85Af2F383190cBf7d7c41ED9202D27426EF6'
const OPTIMISM_GOERLI_TICK_LENS_ADDRESSES = '0xe6140Bd164b63E8BfCfc40D5dF952f83e171758e'

// arbitrum goerli v3 addresses
const ARBITRUM_GOERLI_V3_CORE_FACTORY_ADDRESSES = '0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6'
const ARBITRUM_GOERLI_V3_MIGRATOR_ADDRESSES = '0xA815919D2584Ac3F76ea9CB62E6Fd40a43BCe0C3'
const ARBITRUM_GOERLI_MULTICALL_ADDRESS = '0x8260CB40247290317a4c062F3542622367F206Ee'
const ARBITRUM_GOERLI_QUOTER_ADDRESSES = '0x1dd92b83591781D0C6d98d07391eea4b9a6008FA'
const ARBITRUM_GOERLI_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES = '0x622e4726a167799826d1E1D150b076A7725f5D81'
const ARBITRUM_GOERLI_TICK_LENS_ADDRESSES = '0xb52429333da969a0C79a60930a4Bf0020E5D1DE8'

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(_FACTORY_V3_ADDRESS, [
    SupportedChainId.OPTIMISM,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.CELO]: CELO_V3_CORE_FACTORY_ADDRESSES,
  [SupportedChainId.CELO_ALFAJORES]: CELO_V3_CORE_FACTORY_ADDRESSES,
  [SupportedChainId.BNB]: BNB_V3_CORE_FACTORY_ADDRESSES,
  [SupportedChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_V3_CORE_FACTORY_ADDRESSES,
  [SupportedChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_V3_CORE_FACTORY_ADDRESSES,
  [SupportedChainId.SEPOLIA]: SEPOLIA_FACTORY_V3_ADDRESS,
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  // ...constructSameAddressMap('0xA5644E29708357803b5A882D272c41cC0dF92B34', [
  ...constructSameAddressMap(_V3_MIGRATOR_ADDRESS, [ //changed
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.CELO]: CELO_V3_MIGRATOR_ADDRESSES,
  [SupportedChainId.CELO_ALFAJORES]: CELO_V3_MIGRATOR_ADDRESSES,
  [SupportedChainId.BNB]: BNB_V3_MIGRATOR_ADDRESSES,
  [SupportedChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_V3_MIGRATOR_ADDRESSES,
  [SupportedChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_V3_MIGRATOR_ADDRESSES,
  [SupportedChainId.SEPOLIA]: SEPOLIA_V3_MIGRATOR_ADDRESS,
}

export const MULTICALL_ADDRESS: AddressMap = {
  // ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [
  ...constructSameAddressMap(_UNISWAP_INTERFACE_MULTICALL, [ //changed
    SupportedChainId.OPTIMISM,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [SupportedChainId.CELO]: CELO_MULTICALL_ADDRESS,
  [SupportedChainId.CELO_ALFAJORES]: CELO_MULTICALL_ADDRESS,
  [SupportedChainId.BNB]: BNB_MULTICALL_ADDRESS,
  [SupportedChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_MULTICALL_ADDRESS,
  [SupportedChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_MULTICALL_ADDRESS,
  [SupportedChainId.SEPOLIA]: SEPOLIA_UNISWAP_INTERFACE_MULTICALL,
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3',
}

export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}

export const QUOTER_ADDRESSES: AddressMap = {
  // ...constructSameAddressMap('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', [
  ...constructSameAddressMap(_QUOTER_ADDRESS, [ //changed
    SupportedChainId.OPTIMISM,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.CELO]: CELO_QUOTER_ADDRESSES,
  [SupportedChainId.CELO_ALFAJORES]: CELO_QUOTER_ADDRESSES,
  [SupportedChainId.BNB]: BNB_QUOTER_ADDRESSES,
  [SupportedChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_QUOTER_ADDRESSES,
  [SupportedChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_QUOTER_ADDRESSES,
  [SupportedChainId.SEPOLIA]: SEPOLIA_QUOTER_ADDRESS,
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  // ...constructSameAddressMap('0xC36442b4a4522E871399CD717aBDD847Ab11FE88', [
  ...constructSameAddressMap(_POSITION_MANAGER_ADDRESS, [
    SupportedChainId.OPTIMISM,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.CELO]: CELO_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
  [SupportedChainId.CELO_ALFAJORES]: CELO_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
  [SupportedChainId.BNB]: BNB_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
  [SupportedChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
  [SupportedChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
  [SupportedChainId.SEPOLIA]: SEPOLIA_POSITION_MANAGER_ADDRESS,
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  // [SupportedChainId.ARBITRUM_ONE]: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
  [SupportedChainId.ARBITRUM_ONE]: _TICK_LENS_ADDRESS,
  [SupportedChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_TICK_LENS_ADDRESSES,
  [SupportedChainId.CELO]: CELO_TICK_LENS_ADDRESSES,
  [SupportedChainId.CELO_ALFAJORES]: CELO_TICK_LENS_ADDRESSES,
  [SupportedChainId.BNB]: BNB_TICK_LENS_ADDRESSES,
  [SupportedChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_TICK_LENS_ADDRESSES,
}