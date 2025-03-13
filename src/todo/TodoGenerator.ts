import { TodoBase, TodoBaseInterface, TodoBaseOptions } from './TodoBase'

/**
 * Represents a todo item for invoking a generator.
 *
 * When processing a table, all generator calls are collected into a list of todo items.
 * These todos are then executed until each generator has produced its data.
 */
export interface TodoGeneratorInterface extends TodoBaseInterface {
  /**
   * The name of the generator to be invoked.
   */
  generatorName: string

  /**
   * The configuration or parameters for this generator call.
   */
  config: string

  /**
   * The suffix for the instanceId to distinguish multiple calls.
   */
  instanceIdSuffix: string

  /**
   * Determines the execution order of generator todos.
   * Lower numbers are executed before higher numbers.
   */
  order: number
}

/**
 * Options for creating a TodoGenerator instance.
 */
export interface TodoGeneratorOptions extends TodoBaseOptions {
  /**
   * The name of the generator to be invoked.
   */
  generatorName: string

  /**
   * The configuration or parameters for this generator call.
   */
  config: string

  /**
   * The suffix for the instanceId to distinguish multiple calls.
   */
  instanceIdSuffix: string

  /**
   * Determines the execution order of generator todos.
   * Lower numbers are executed first. Defaults to 1000 if not provided.
   */
  order?: number
}

/**
 * Implementation of a todo item for calling a generator.
 *
 * This class extends the base todo functionality and adds properties specific to
 * generator invocation, such as the generator name, configuration parameters, instance ID suffix,
 * and execution order.
 */
export class TodoGenerator extends TodoBase implements TodoGeneratorInterface {
  generatorName: string
  config: string
  instanceIdSuffix: string
  order: number

  /**
   * Constructs a new TodoGenerator instance.
   *
   * @param opts - Initialization options for the TodoGenerator, including base properties
   *               and specific details required for generator invocation.
   */
  constructor(opts: TodoGeneratorOptions) {
    super(opts)
    this.generatorName = opts.generatorName
    this.config = opts.config
    this.instanceIdSuffix = opts.instanceIdSuffix
    this.order = opts.order || 1000
  }
}
