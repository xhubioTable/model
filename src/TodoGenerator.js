import TodoMeta from './TodoMeta'

/**
 * Defines the todo for calling a generator.
 * When processing a table all the generator calls are collected
 * in a list of Todos.
 * Then the list of todos will be executed untill each generator has generated
 * its data.
 */
export default class TodoGenerator extends TodoMeta {
  constructor(opts = {}) {
    super(opts)

    // The name of this generator
    this.generatorName = opts.generatorName

    // The parametzer for this generator call
    this.config = opts.config

    // The instanceIdSuffix
    this.instanceIdSuffix = opts.instanceIdSuffix

    // The generator todos will be executed in the
    // order defined in the TODO.
    this.order = opts.order ? opts.order : 1000
  }
}
