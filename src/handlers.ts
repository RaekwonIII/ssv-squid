import { decodeHex } from "@subsquid/evm-processor"
import { ValidatorAddedEventArgs } from "./abi/SSVNetwork"
import { ValidatorAdded } from "./model"
import { Log } from "./processor"

export function handleValidatorAdded(event: Log, eventData: ValidatorAddedEventArgs): ValidatorAdded {
    let entity = new ValidatorAdded(
        {
            id: `${event.transaction?.hash}-${event.logIndex}`, //concatI32(event.logIndex.toI32()),
            blockNumber: BigInt(event.block.height),
            blockTimestamp: BigInt(event.block.timestamp),
            transactionHash: decodeHex(event.block.hash),
            owner: decodeHex(eventData.owner),
            operatorIds: eventData.operatorIds.map((x) => parseInt(x.toString())),
            publicKey: decodeHex(eventData.publicKey),
            shares: decodeHex(eventData.shares),
            clusterValidatorCount: BigInt(eventData.cluster.validatorCount),
            clusterNetworkFeeIndex: BigInt(eventData.cluster.networkFeeIndex),
            clusterIndex: BigInt(eventData.cluster.index),
            clusterBalance: BigInt(eventData.cluster.balance),
            clusterActive: eventData.cluster.active,
        }
    )
    return entity
  
    // let owner = Account.load(event.params.owner)
    // if (!owner){
    //   owner = new Account(event.params.owner)
    //   log.info(`New Address ${owner.id.toHexString()} is adding a validator, creating new Account`, []);
    //   owner.nonce = BigInt.zero()
    //   owner.validatorCount = BigInt.zero()
    // }
    // log.info(`Old nonce of Account ${owner.id.toHexString()}: ${owner.nonce}`, []);
    // owner.nonce = owner.nonce.plus(BigInt.fromI32(1))
    // log.info(`Increased nonce of Account ${owner.id.toHexString()} to ${owner.nonce}`, []);
    // owner.validatorCount = owner.validatorCount.plus(BigInt.fromI32(1))
    // owner.save()
  
    // let clusterId = `${event.params.owner.toHexString()}-${event.params.operatorIds.join("-")}`
    // let cluster = Cluster.load(clusterId) 
    // if (!cluster) {
    //   log.info(`Validator ${event.params.publicKey.toHexString()} is being added to new Cluster ${clusterId}`, [])
    //   cluster = new Cluster(clusterId)
    // }
  
    // cluster.owner = owner.id
    // cluster.operatorIds = event.params.operatorIds
    // cluster.validatorCount = event.params.cluster.validatorCount
    // log.info(`Set validator count of cluster ${cluster.id} to ${event.params.cluster.validatorCount}`, []);
    // cluster.networkFeeIndex = event.params.cluster.networkFeeIndex
    // cluster.index = event.params.cluster.index
    // cluster.active = event.params.cluster.active
    // cluster.balance = event.params.cluster.balance
    // cluster.lastUpdateBlockNumber = event.block.number
    // cluster.lastUpdateBlockTimestamp = event.block.timestamp
    // cluster.lastUpdateTransactionHash = event.transaction.hash
    // cluster.save()
  
    // let validatorId = event.params.publicKey
    // let validator = Validator.load(validatorId) 
    // if (!validator) {
    //   log.info(`new Validator ${event.params.publicKey.toHexString()} being added to Cluster ${clusterId}`, [])
    //   validator = new Validator(validatorId)
    // }
  
    // validator.owner = owner.id // this does not sound right 🧐
    // validator.operators = event.params.operatorIds.map<string>((id: BigInt) => id.toString())
    // validator.cluster = cluster.id // this does not sound right 🧐
    // validator.active = event.params.cluster.active
    // validator.shares = event.params.shares
    // validator.lastUpdateBlockNumber = event.block.number
    // validator.lastUpdateBlockTimestamp = event.block.timestamp
    // validator.lastUpdateTransactionHash = event.transaction.hash
    // validator.save()
  
    // for (var i=0; i < event.params.operatorIds.length; i++) {
    //   let operatorId = event.params.operatorIds[i].toString()
    //   let operator = Operator.load(operatorId) 
    //   if (!operator) {
    //     log.error(`Adding validator data for Operator ${event.params.operatorIds[i]}, but it does not exist on the database`, [])
    //     log.error(`Could not create ${operatorId} on the database, because of missing owner, publicKey and fee information`, [])
    //   } else {
    //     operator.operatorId = event.params.operatorIds[i]
    //     operator.validatorCount = operator.validatorCount.plus(BigInt.fromI32(1))
    //     operator.lastUpdateBlockNumber = event.block.number
    //     operator.lastUpdateBlockTimestamp = event.block.timestamp
    //     operator.lastUpdateTransactionHash = event.transaction.hash
    //     operator.save()
    //   }
    // }
  }