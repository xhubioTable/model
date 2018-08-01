import TodoMeta from './TodoMeta'

/**
 * Defines the todo for calling a generator
 */
export default class TodoReference extends TodoMeta {
  constructor(opts = {}) {
    super(opts)

    // The instanceIdSuffix
    this.targetTableName = opts.targetTableName

    // The instanceIdSuffix
    this.targetFieldName = opts.targetFieldName

    // The instanceIdSuffix
    this.targetTestcaseName = opts.targetTestcaseName

    // The instanceIdSuffix
    this.instanceIdSuffix = opts.instanceIdSuffix
  }
}
