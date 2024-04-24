import type { VoteInfo } from './types.ts'
import BigNumber from 'bignumber.js'

const ETH_DECIMALS = new BigNumber(10).pow(18)

export const printVoteState = (voteInfo: VoteInfo) => {
  const votingPower = new BigNumber(String(voteInfo.votingPower))
  const yea = new BigNumber(String(voteInfo.yea))
  const nay = new BigNumber(String(voteInfo.nay))
  const total = yea.plus(nay)
  const supportRequired = new BigNumber(String(voteInfo.supportRequired))
  const minAcceptQuorum = new BigNumber(String(voteInfo.minAcceptQuorum))

  const passed =
    yea.gte(votingPower.times(minAcceptQuorum).div(ETH_DECIMALS)) &&
    yea.gte(total.times(supportRequired).div(ETH_DECIMALS))
  console.log('Passed: ')
  console.log(passed)
}
