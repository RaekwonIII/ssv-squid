import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "@subsquid/typeorm-store"
import {Validator} from "./validator.model"
import {Operator} from "./operator.model"

@Entity_()
export class ValidatorOperator {
    constructor(props?: Partial<ValidatorOperator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Validator, {nullable: true})
    validator!: Validator

    @Index_()
    @ManyToOne_(() => Operator, {nullable: true})
    operator!: Operator
}
