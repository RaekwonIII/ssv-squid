import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BytesColumn as BytesColumn_, IntColumn as IntColumn_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class ValidatorAdded {
    constructor(props?: Partial<ValidatorAdded>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BytesColumn_({nullable: false})
    owner!: Uint8Array

    @IntColumn_({array: true, nullable: false})
    operatorIds!: (number)[]

    @BytesColumn_({nullable: false})
    publicKey!: Uint8Array

    @BytesColumn_({nullable: false})
    shares!: Uint8Array

    @BigIntColumn_({nullable: false})
    clusterValidatorCount!: bigint

    @BigIntColumn_({nullable: false})
    clusterNetworkFeeIndex!: bigint

    @BigIntColumn_({nullable: false})
    clusterIndex!: bigint

    @BooleanColumn_({nullable: false})
    clusterActive!: boolean

    @BigIntColumn_({nullable: false})
    clusterBalance!: bigint

    @BigIntColumn_({nullable: false})
    blockNumber!: bigint

    @BigIntColumn_({nullable: false})
    blockTimestamp!: bigint

    @BytesColumn_({nullable: false})
    transactionHash!: Uint8Array
}
