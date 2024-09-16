import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, BytesColumn as BytesColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class OperatorMultipleWhitelistUpdated {
    constructor(props?: Partial<OperatorMultipleWhitelistUpdated>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({array: true, nullable: false})
    operatorIds!: (number)[]

    @BytesColumn_({array: true, nullable: true})
    whitelistAddresses!: (Uint8Array)[] | undefined | null

    @BigIntColumn_({nullable: false})
    blockNumber!: bigint

    @BigIntColumn_({nullable: false})
    blockTimestamp!: bigint

    @BytesColumn_({nullable: false})
    transactionHash!: Uint8Array
}
