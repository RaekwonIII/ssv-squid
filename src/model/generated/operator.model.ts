import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, ManyToOne as ManyToOne_, Index as Index_, BytesColumn as BytesColumn_, BooleanColumn as BooleanColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {AccountOperator} from "./accountOperator.model"
import {ValidatorOperator} from "./validatorOperator.model"

@Entity_()
export class Operator {
    constructor(props?: Partial<Operator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BigIntColumn_({nullable: false})
    operatorId!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account

    @BytesColumn_({nullable: false})
    publicKey!: Uint8Array

    @BooleanColumn_({nullable: false})
    active!: boolean

    @BigIntColumn_({nullable: false})
    fee!: bigint

    @BigIntColumn_({nullable: false})
    previousFee!: bigint

    @OneToMany_(() => AccountOperator, e => e.operator)
    whitelisted!: AccountOperator[]

    @BytesColumn_({nullable: false})
    whitelistedContract!: Uint8Array

    @BooleanColumn_({nullable: false})
    isPrivate!: boolean

    @BigIntColumn_({nullable: false})
    totalWithdrawn!: bigint

    @BigIntColumn_({nullable: false})
    lastUpdateBlockNumber!: bigint

    @BigIntColumn_({nullable: false})
    lastUpdateBlockTimestamp!: bigint

    @BytesColumn_({nullable: false})
    lastUpdateTransactionHash!: Uint8Array

    @BigIntColumn_({nullable: false})
    validatorCount!: bigint

    @OneToMany_(() => ValidatorOperator, e => e.operator)
    validators!: ValidatorOperator[]
}
