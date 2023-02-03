/* eslint-disable @typescript-eslint/indent */
import { TableType } from '../TableType'
import { TestcaseDefinitionInterface } from '../testcase/TestcaseDefinitionInterface'

export interface TableInterface {
  /** The name of the table */
  name: string

  /** Any meta information the table may have */
  meta: any

  /** The type of the table */
  tableType: TableType

  /**
   * Returns the testcase for the given name. If not found it will throw an exception
   * @param testcaseName - The name of the testcase
   * @returns testcaseDefinition - returns the testcase definition
   */
  getTestcaseForName: (testcaseName: string) => TestcaseDefinitionInterface

  /**
   * This generator returns all the testcases which should be executed
   * @returns A TestcaseDefinitionInterface for each call
   */
  getTestcasesForExecution: () => Generator<
    TestcaseDefinitionInterface,
    void,
    TestcaseDefinitionInterface
  > // sollte TestcaseDefinitionInterface sein, denke ich

  /**
   * Returns the testcase for the given name. If not found it will throw an exception
   * @param testcaseName - The name of the testcase
   * @returns testcaseNames - returns an Array of test case names
   */
  processRanges: (testcaseName: string) => string[]
}
