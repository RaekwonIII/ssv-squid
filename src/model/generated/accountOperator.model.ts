import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {Operator} from "./operator.model"

@Entity_()
export class AccountOperator {
    constructor(props?: Partial<AccountOperator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Index_()
    @ManyToOne_(() => Operator, {nullable: true})
    operator!: Operator
}
