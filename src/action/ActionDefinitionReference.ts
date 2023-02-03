import {
  ActionDefinitionMeta,
  ActionDefinitionMetaOptions
} from './ActionDefinitionMeta'
import { TableType } from '../TableType'

export interface ActionDefinitionReferenceOptions
  extends ActionDefinitionMetaOptions {
  /** The name of the target table */
  targetTableName: string

  /** The name of the target field */
  targetFieldName: string

  /** The name of the target test case */
  targetTestcaseName: string

  /** The instanceIdSuffix */
  instanceIdSuffix: TableType
}

/**
 * Defines the data common for all the todos.
 * This todo only contains meta data
 * The Todos defining actions which needs to be executed
 * to fill the testcases with data
 */
export class ActionDefinitionReference extends ActionDefinitionMeta {
  /** The name of the target table */
  targetTableName: string

  /** The name of the target field */
  targetFieldName: string

  /** The name of the target test case */
  targetTestcaseName: string

  /** The instanceIdSuffix */
  instanceIdSuffix: TableType

  constructor(opts: ActionDefinitionReferenceOptions) {
    super(opts)
    // The instanceIdSuffix
    this.targetTableName = opts.targetTableName

    // The instanceIdSuffix
    this.targetFieldName = opts.targetFieldName

    // The instanceIdSuffix
    this.targetTestcaseName = opts.targetTestcaseName

    // The instanceIdSuffix
    this.instanceIdSuffix = opts.instanceIdSuffix
  }
}
