import { TableType } from '../TableType'

export interface ActionMetaInformationInterface {
  /** The name of the test case */
  testcaseName: string

  /** The name of the table */
  tableName: string

  /** The type of this table */
  tableType: TableType

  meta: any

  testcaseMeta: any
}
