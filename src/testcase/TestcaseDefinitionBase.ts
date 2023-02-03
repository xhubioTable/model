import { v4 as uuidv4 } from 'uuid'
import { TestcaseActionsInterface } from './TestcaseActionsInterface'
import { TestcaseFilterInterface } from './TestcaseFilterInterface'
import { TableType } from '../TableType'
import { TableMetaInformationInterface } from '../table/TableMetaInformationInterface'
import { TableInterface } from '../table/TableInterface'
import { TestcaseDefinitionInterface } from './TestcaseDefinitionInterface'

export interface TestcaseDefinitionBaseOptions {
  /** The name of this test case */
  name: string
  /** Defines how often this test case should be created */
  multiplicity?: number

  /** The data in the cell for this testcase */
  data: string

  // Some meta information.  The format depends on the table
  meta: any

  /** The table this testcase comes from */
  table: TableInterface
}

/**
 * Defines the interface for a testcase definition
 */
export class TestcaseDefinitionBase implements TestcaseDefinitionInterface {
  /** The name of this test case */
  name: string

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

  /** Should this test case be executed or is it only for a reference */
  shouldExecute: boolean = true

  // This means that a test case should not be executed if a referenced test case has this set to true
  neverExecute: boolean

  constructor(opts: TestcaseDefinitionBaseOptions) {
    this.id = uuidv4()
    this.name = opts.name
    this.multiplicity = opts.multiplicity ?? 1
    this.data = opts.data
    this.meta = opts.meta
    this.table = opts.table
    this.neverExecute = false
  }

  /**
   * The table type of the table object
   */
  get tableType(): TableType {
    return this.table.tableType
  }

  /**
   * The name of the table stored in the table object
   */
  get tableName(): string {
    return this.table.name
  }

  /**
   * The meta information of the stored table object
   */
  get tableMeta(): any {
    return this.table.meta
  }

  /**
   * Returns the Metainformation if this test case
   */
  get metaInformation(): TableMetaInformationInterface {
    return {
      tableName: this.tableName,
      tableType: this.tableType,
      testcaseName: this.name,
      tableMeta: this.tableMeta,
      meta: this.meta
    }
  }

  /**
   * Returns all the tags found in this test case
   * @returns tags - An Array with all the found tags
   */
  createTags(): string[] {
    return []
  }

  /**
   * Returns all the filter found in this test case
   * @returns filter - An Array with all the found filter
   */
  createFilter(): TestcaseFilterInterface[] {
    return []
  }

  /**
   * Returns a list of generator names which should not be executed
   * @returns generatorNames - An Array with alle the generator names to be switched off for this test case
   */
  createGeneratorSwitches(): string[] {
    return []
  }

  /**
   * Create all the actions for this testcase definition
   * @returns testcaseActions - @see TestcaseActionsInterface
   */
  createTestcaseActions(): TestcaseActionsInterface {
    throw new Error('Implement this')
  }
}
