import {
  ActionDefinitionMeta,
  ActionDefinitionMetaOptions
} from './ActionDefinitionMeta'
import { TableType } from '../TableType'

export interface ActionDefinitionGeneratorOptions
  extends ActionDefinitionMetaOptions {
  /** The name of the generator */
  generatorName: string

  /** Parameter for the geneartor call */
  config: string

  /** The instanceIdSuffix */
  instanceIdSuffix: TableType

  /** A number to order the generators. The generators are called in this order */
  order: number
}

/**
 * Defines the data common for all the todos.
 * This todo only contains meta data
 * The Todos defining actions which needs to be executed
 * to fill the testcases with data
 */
export class ActionDefinitionGenerator extends ActionDefinitionMeta {
  /** The name of the generator */
  generatorName: string

  /** Parameter for the geneartor call */
  config: string

  /** The instanceIdSuffix */
  instanceIdSuffix: TableType

  /** A number to order the generators. The generators are called in this order */
  order: number

  constructor(opts: ActionDefinitionGeneratorOptions) {
    super(opts)
    // The name of this generator
    this.generatorName = opts.generatorName

    // The parametzer for this generator call
    this.config = opts.config

    // The instanceIdSuffix
    this.instanceIdSuffix = opts.instanceIdSuffix

    // The generator todos will be executed in the
    // order defined in the TODO.
    this.order = opts.order ? opts.order : 1000
  }
}
