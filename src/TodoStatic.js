import TodoMeta from './TodoMeta'

/**
 * Defines the todo for static values
 */
export default class TodoStatic extends TodoMeta {
  constructor(opts = {}) {
    super(opts)

    // The static data
    this.value = opts.value
  }
}
