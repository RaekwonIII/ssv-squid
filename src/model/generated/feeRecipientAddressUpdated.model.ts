import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BytesColumn as BytesColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class FeeRecipientAddressUpdated {
    constructor(props?: Partial<FeeRecipientAddressUpdated>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BytesColumn_({nullable: false})
    owner!: Uint8Array

    @BytesColumn_({nullable: false})
    recipientAddress!: Uint8Array

    @BigIntColumn_({nullable: false})
    blockNumber!: bigint

    @BigIntColumn_({nullable: false})
    blockTimestamp!: bigint

    @BytesColumn_({nullable: false})
    transactionHash!: Uint8Array
}
