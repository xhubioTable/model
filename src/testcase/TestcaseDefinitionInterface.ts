import { TableInterface } from '../table/TableInterface'

export interface TestcaseDefinitionInterface {
  /** The id of this testcase */
  id: string

  /** Defines how often this test case should be created */
  multiplicity: number

  /** The data in the cell for this testcase */
  data: string

  // Some meta information.  The format depends on the table
  meta: any

  /** The table this testcase comes from */
  table: TableInterface

  // This means that a test case should not be executed if a referenced test case has this set to true
  neverExecute: boolean
}
