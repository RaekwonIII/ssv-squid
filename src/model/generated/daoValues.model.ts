import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, BytesColumn as BytesColumn_} from "@subsquid/typeorm-store"
import {DAOUpdateTypes} from "./_daoUpdateTypes"

@Entity_()
export class DAOValues {
    constructor(props?: Partial<DAOValues>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BigIntColumn_({nullable: false})
    networkFee!: bigint

    @BigIntColumn_({nullable: false})
    liquidationThreshold!: bigint

    @BigIntColumn_({nullable: false})
    minimumLiquidationCollateral!: bigint

    @BigIntColumn_({nullable: false})
    operatorFeeIncreaseLimit!: bigint

    @BigIntColumn_({nullable: false})
    declareOperatorFeePeriod!: bigint

    @BigIntColumn_({nullable: false})
    executeOperatorFeePeriod!: bigint

    @BigIntColumn_({nullable: false})
    operatorMaximumFee!: bigint

    @Column_("varchar", {length: 27, nullable: false})
    updateType!: DAOUpdateTypes

    @BigIntColumn_({nullable: false})
    lastUpdateBlockNumber!: bigint

    @BigIntColumn_({nullable: false})
    lastUpdateBlockTimestamp!: bigint

    @BytesColumn_({nullable: false})
    lastUpdateTransactionHash!: Uint8Array
}
