import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_, BigIntColumn as BigIntColumn_, OneToMany as OneToMany_, BooleanColumn as BooleanColumn_, BytesColumn as BytesColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {Validator} from "./validator.model"

@Entity_()
export class Cluster {
    constructor(props?: Partial<Cluster>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account

    @IntColumn_({array: true, nullable: false})
    operatorIds!: (number)[]

    @BigIntColumn_({nullable: false})
    validatorCount!: bigint

    @OneToMany_(() => Validator, e => e.cluster)
    validators!: Validator[]

    @BigIntColumn_({nullable: false})
    networkFeeIndex!: bigint

    @BigIntColumn_({nullable: false})
    index!: bigint

    @BooleanColumn_({nullable: false})
    active!: boolean

    @BigIntColumn_({nullable: false})
    balance!: bigint

    @BigIntColumn_({nullable: false})
    lastUpdateBlockNumber!: bigint

    @BigIntColumn_({nullable: false})
    lastUpdateBlockTimestamp!: bigint

    @BytesColumn_({nullable: false})
    lastUpdateTransactionHash!: Uint8Array
}
