import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Cluster} from "./cluster.model"
import {Validator} from "./validator.model"
import {Operator} from "./operator.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BigIntColumn_({nullable: false})
    nonce!: bigint

    @BigIntColumn_({nullable: false})
    validatorCount!: bigint

    @OneToMany_(() => Cluster, e => e.owner)
    clusters!: Cluster[]

    @OneToMany_(() => Validator, e => e.owner)
    validators!: Validator[]

    @OneToMany_(() => Operator, e => e.owner)
    operators!: Operator[]
}
