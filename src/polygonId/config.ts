import { EthConnectionConfig } from '@0xpolygonid/js-sdk'

const RPC_URL = 'https://polygon-mumbai.g.alchemy.com/v2/BI7_GYAO787OflUC7E6DhMJNkhkyq7kp'

export const defaultEthConnectionConfig: EthConnectionConfig = {
  url: RPC_URL,
  defaultGasLimit: 600000,
  minGasPrice: '0',
  maxGasPrice: '100000000000',
  confirmationBlockCount: 5,
  confirmationTimeout: 600000,
  contractAddress: '0x134b1be34911e39a8397ec6289782989729807a4',
  receiptTimeout: 600000,
  rpcResponseTimeout: 5000,
  waitReceiptCycleTime: 30000,
  waitBlockCycleTime: 3000,
  chainId: 80001,
}
