import { TableType } from '../TableType'

export interface TableMetaInformationInterface {
  /** The name of the test case */
  testcaseName: string

  /** The name of the table */
  tableName: string

  /** The type of this table */
  tableType: TableType

  meta: any

  tableMeta: any
}
