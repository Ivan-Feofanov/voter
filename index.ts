import { Web3 } from 'web3'
import AragonABI from './abi/AragonVoting.json' with { type: 'json' }

import type { VoteInfo } from './types.ts'
import { printVoteState } from './vote.ts'
import BigNumber from 'bignumber.js'

const LIDO_VOTING_ADDRESS = '0x2e59a20f205bb85a89c53f1936454680651e618e'
const voters = [
  '0x3e40d73eb977dc6a537af587d48316fee66e9c8c',
  '0xb8d83908aab38a159f3da47a59d84db8e1838712',
  '0xa2dfc431297aee387c05beef507e5335e684fbcd',
]

const client = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
const contract = new client.eth.Contract(AragonABI, LIDO_VOTING_ADDRESS)
const votes = await contract.methods.votesLength().call()
const votesLength = new BigNumber(String(votes))
const lastVoteID = votesLength.minus(new BigNumber(String(1))).toNumber()

let lastVote: VoteInfo = await contract.methods.getVote(lastVoteID).call()
printVoteState(lastVote)

try {
  await contract.methods.vote(lastVoteID, true, true).send({ from: voters[1], gas: '200000', gasPrice: '2000000000' })
} catch (e) {
  console.log('Error: ')
  console.log(e)
  console.log(JSON.stringify(e, null, 2))
}

lastVote = await contract.methods.getVote(lastVoteID).call()
printVoteState(lastVote)
