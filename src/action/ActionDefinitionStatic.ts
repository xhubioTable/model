import {
  ActionDefinitionMeta,
  ActionDefinitionMetaOptions
} from './ActionDefinitionMeta'

export interface ActionDefinitionStaticOptions
  extends ActionDefinitionMetaOptions {
  /** The static value */
  value: string
}

/**
 * Defines the data common for all the todos.
 * This todo only contains meta data
 * The Todos defining actions which needs to be executed
 * to fill the testcases with data
 */
export class ActionDefinitionStatic extends ActionDefinitionMeta {
  /** The static value */
  value: string

  constructor(opts: ActionDefinitionStaticOptions) {
    super(opts)
    // The instanceIdSuffix
    this.value = opts.value
  }
}
