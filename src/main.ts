import {TypeormDatabase} from '@subsquid/typeorm-store'
import {CONTRACT_ADDRESS, Log, processor} from './processor'
import { events, ValidatorAddedEventArgs } from './abi/SSVNetwork'
import { handleValidatorAdded } from './handlers'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    let validatorAddedObjs = new Map()
    for (let block of ctx.blocks) {
        for (let log of block.logs) {
            let eventData = getLogData(log)
            ctx.log.info(`Parsed validator ${eventData.publicKey} owned by ${eventData.owner} being registered to cluster with operators: ${eventData.operatorIds}`)
            let validatorAddedObj = handleValidatorAdded(log, eventData)
            validatorAddedObjs.set(validatorAddedObj.id, validatorAddedObj)
        }
    }
    await ctx.store.upsert([...validatorAddedObjs.values()]);
})

function getLogData(log: Log): ValidatorAddedEventArgs {
    if (log.address === CONTRACT_ADDRESS && log.topics[0] === events.ValidatorAdded.topic) {
        return events.ValidatorAdded.decode(log)
    }
    throw new Error('Unsupported topic')
}