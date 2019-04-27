import uuidv4 from 'uuid/v4'

/**
 * Defines the interface for a testcase definition
 */
export default class TestcaseDefinitionInterface {
  constructor(opts = {}) {
    /** The id of this testcase */
    this.id = uuidv4()

    /** Defines how often this test case should be created */
    this.multiplicity = opts.multiplicity || 1

    /** The data in the cell for this testcase */
    this.data = opts.data

    // Some meta information.  The format depends on the table
    this.meta = opts.meta

    /** The table this testcase comes from */
    this.table = opts.table

    // This means that a test case should not be executed if a referenced test case has this set to true
    this._neverExecute = false
  }
  /**
   * Should this test case never be executed. This means if this test case
   * is referenced from an other test case it will not be executed
   */
  get neverExecute() {
    return this._neverExecute
  }
  set neverExecute(execute) {
    this._neverExecute = execute
  }

  /**
   * The table type of the table object
   */
  get tableType() {
    if (this.table !== undefined) {
      return this.table.tableType
    }
  }


  /**
   * The name of the table stored in the table object
   */
   get tableName() {
    if (this.table !== undefined) {
      return this.table.name
    }
  }

  /**
   * The meta information of the stored table object
   */
  get tableMeta() {
    if (this.table !== undefined) {
      return this.table.meta
    }
  }

  get metaInformation() {
    return {
      tableName: this.tableName,
      tableType: this.tableType,
      testcaseName: this.name,
      tableMeta: this.tableMeta,
      meta: this.meta,
    }
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
    return ''
  }

  /**
   * Returns all the tags found in this test case
   * @return tags {array} An Array with all the found tags
   */
  createTags() {
    return []
  }

  /**
   * Returns all the filter found in this test case
   * @return filter {array} An Array with all the found filter
   */
  createFilter() {
    return []
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
