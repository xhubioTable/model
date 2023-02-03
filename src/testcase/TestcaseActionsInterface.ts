import { ActionDefinitionGenerator } from '../action/ActionDefinitionGenerator'
import { ActionDefinitionReference } from '../action/ActionDefinitionReference'
import { ActionDefinitionStatic } from '../action/ActionDefinitionStatic'

/**
 * This object contains all the Actions a test case has
 */
export interface TestcaseActionsInterface {
  /** Alll the generator actions */
  generators: ActionDefinitionGenerator[]

  /** alle the reference actions */
  references: ActionDefinitionReference[]

  /** all the static value actions */
  static: ActionDefinitionStatic[]
}
