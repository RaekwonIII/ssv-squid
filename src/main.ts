import {TypeormDatabase} from '@subsquid/typeorm-store'
// import {Burn} from './model'
import {CONTRACT_ADDRESS, processor} from './processor'
import { events } from './abi/SSVNetwork'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {

    for (let block of ctx.blocks) {
        for (let log of block.logs) {
            if (log.address === CONTRACT_ADDRESS && log.topics[0] === events.ValidatorAdded.topic) {
                let { owner, operatorIds, publicKey, shares, cluster } = events.ValidatorAdded.decode(log)
                ctx.log.info(`Parsed validator ${publicKey} owned by ${owner} being registered to cluster with operators: ${operatorIds}`)
            }
        }
    }
})
