/**
 * Defines the interface for a table. All the table models must Implement
 * this interface.
 */
export default class TableInterface {
  constructor(opts = {}) {
    /**
     * The name of this table
     */
    this.name = opts.name

    /**
     * Any meta information the table may have.
     * For example the original file name.
     */
    this.meta = opts.meta !== undefined ? opts.meta : {}
  }

  /**
   * The type of this table
   */
  get tableType() {
    throw new Error(`Implement this`)
  }

  /**
   * Returns the testcase for the given name. If not found it will throw an exception
   * @param testcaseName {string} The name of the testcase
   * @return testcaseDefinition {object} returns the testcase definition
   */
  // eslint-disable-next-line no-unused-vars
  getTestcaseForName(testcaseName) {
    throw new Error(`Implement this`)
  }

  /**
   * This generator returns all the testcases which should be executed
   * @generator
   * @yields {testcaseDefinitionInterface}
   */
  *getTestcasesForExecution() {
    if (this.name === '___') {
      yield ''
    }
    throw new Error(`Implement this`)
  }

  /**
   * Parses a testcase name. If the name is a range it will return an
   * Array of names. For example the name 'tc12-14' will be expanded to:
   * tc12, tc13, tc14
   * This is a helper method
   * @param testcaseName {string} The reference test case name
   * @return tcNames {array} An array of test case names
   */
  // eslint-disable-next-line no-unused-vars
  processRanges(testcaseName) {
    throw new Error(`Implement this`)
  }
}
