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

    // The testcaseName this todo comes from
    this.testcaseName = opts.testcaseName

    // depends from which table the data comes from
    this.meta = opts.meta || {}

    this.tableName = opts.tableName
    this.tableType = opts.tableType
    this.testcaseMeta = opts.testcaseMeta
  }

  get metaInformation() {
    return {
      tableName: this.tableName,
      tableType: this.tableType,
      testcaseName: this.testcaseName,
      testcaseMeta: this.testcaseMeta,
      meta: this.meta,
    }
  }
}
