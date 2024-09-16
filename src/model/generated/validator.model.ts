import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_, BooleanColumn as BooleanColumn_, BytesColumn as BytesColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {ValidatorOperator} from "./validatorOperator.model"
import {Cluster} from "./cluster.model"

@Entity_()
export class Validator {
    constructor(props?: Partial<Validator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account

    @OneToMany_(() => ValidatorOperator, e => e.validator)
    operators!: ValidatorOperator[]

    @Index_()
    @ManyToOne_(() => Cluster, {nullable: true})
    cluster!: Cluster

    @BooleanColumn_({nullable: false})
    active!: boolean

    @BytesColumn_({nullable: false})
    shares!: Uint8Array

    @BigIntColumn_({nullable: false})
    lastUpdateBlockNumber!: bigint

    @BigIntColumn_({nullable: false})
    lastUpdateBlockTimestamp!: bigint

    @BytesColumn_({nullable: false})
    lastUpdateTransactionHash!: Uint8Array
}
