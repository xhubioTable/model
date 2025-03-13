import { TodoBase, TodoBaseInterface, TodoBaseOptions } from './TodoBase'

/**
 * Represents a todo item for handling static values.
 *
 * A static todo defines a constant value specified in the generator column.
 * This value is used as-is during the test case generation process.
 */
export interface TodoStaticInterface extends TodoBaseInterface {
  /**
   * The static value assigned to this todo.
   */
  value: string
}

/**
 * Options for creating a TodoStatic instance.
 */
export interface TodoStaticOptions extends TodoBaseOptions {
  /**
   * The static value that this todo will hold.
   */
  value: string
}

/**
 * Implementation of a todo item for static values.
 *
 * This class extends the base todo functionality by including a static value
 * that represents constant data used during test case generation.
 */
export class TodoStatic extends TodoBase implements TodoStaticInterface {
  /**
   * The static value for this todo.
   */
  value: string

  /**
   * Constructs a new TodoStatic instance.
   *
   * @param opts - Initialization options for the TodoStatic, including base properties
   *               and the specific static value.
   */
  constructor(opts: TodoStaticOptions) {
    super(opts)
    this.value = opts.value
  }
}
