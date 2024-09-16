import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, BytesColumn as BytesColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class OperatorAdded {
    constructor(props?: Partial<OperatorAdded>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BigIntColumn_({nullable: false})
    operatorId!: bigint

    @BytesColumn_({nullable: false})
    owner!: Uint8Array

    @BytesColumn_({nullable: false})
    publicKey!: Uint8Array

    @BigIntColumn_({nullable: false})
    fee!: bigint

    @BigIntColumn_({nullable: false})
    blockNumber!: bigint

    @BigIntColumn_({nullable: false})
    blockTimestamp!: bigint

    @BytesColumn_({nullable: false})
    transactionHash!: Uint8Array
}
