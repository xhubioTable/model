import { ActionMetaInformationInterface } from './ActionMetaInformationInterface'
import { TableType } from '../TableType'

export interface ActionDefinitionMetaOptions {
  /** The name of the filed in the table */
  fieldName: string

  /** The name of the test case */
  testcaseName: string

  /** The name of the table */
  tableName: string

  /** The type of this table */
  tableType: TableType

  meta?: any
  testcaseMeta: any
}

/**
 * Defines the data common for all the todos.
 * This todo only contains meta data
 * The Todos defining actions which needs to be executed
 * to fill the testcases with data
 */
export class ActionDefinitionMeta {
  /** The name of the filed in the table */
  fieldName: string

  /** The name of the test case */
  testcaseName: string

  /** The name of the table */
  tableName: string

  /** The type of this table */
  tableType: TableType

  meta: any
  testcaseMeta: any

  constructor(opts: ActionDefinitionMetaOptions) {
    // The fieldName
    this.fieldName = opts.fieldName

    // The testcaseName this todo comes from
    this.testcaseName = opts.testcaseName

    // depends from which table the data comes from
    this.meta = opts.meta || {}

    this.tableName = opts.tableName
    this.tableType = opts.tableType
    this.testcaseMeta = opts.testcaseMeta
  }

  get metaInformation(): ActionMetaInformationInterface {
    return {
      tableName: this.tableName,
      tableType: this.tableType,
      testcaseName: this.testcaseName,
      testcaseMeta: this.testcaseMeta,
      meta: this.meta
    }
  }
}
