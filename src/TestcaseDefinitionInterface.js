import uuidv4 from 'uuid/v4'

/**
 * Defines the interface for a testcase definition
 */
export default class TestcaseDefinitionInterface {
  constructor(opts = {}) {
    // The id of this testcase
    this.id = uuidv4()

    // Defines how often this test case should be created
    this.multiplicity = opts.multiplicity || 1

    // The data in the cell for this testcase
    this.data = opts.data

    // some meta information.
    // The format depends on the table
    this.meta = opts.meta

    // The table this testcase comes from
    this.table = opts.table
  }

  /**
   * Should this test case be executed or is it only for a reference
   */
  get execute() {
    return true
  }

  /**
   * The name of this testcase. With this name the
   * testcase could be found in the table
   */
  get name() {
    throw new Error('Implement this')
  }

  get tableType() {
    if (this.table) {
      return this.table.tableType
    }
  }

  /**
   * Create all the todos for this testcase definition
   * const todos = {
   *   generators :[genTodo,],
   *   references: [refTodo,],
   *   static: [staticData],
   * }
   *
   */
  createTodos() {
    throw new Error('Implement this')
  }
}
