/**
 * Defines the data common for all the todos.
 * This todo only contains meta data
 * The Todos defining actions which needs to be executed
 * to fill the testcases with data
 */
export default class TodoMeta {
  constructor(opts = {}) {
    // The fieldName
    this.fieldName = opts.fieldName

    // The table this todo comes from
    this.tableName = opts.tableName

    // The table this todo comes from
    this.tableType = opts.tableType

    // The testcaseName this todo comes from
    this.testcaseName = opts.testcaseName

    // depends from which table the data comes from
    this.meta = opts.meta || {}
  }
}
