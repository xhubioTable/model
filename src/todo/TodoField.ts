import { TodoBase, TodoBaseInterface, TodoBaseOptions } from './TodoBase'

/**
 * Represents a todo item for handling static field values.
 *
 * A static field todo corresponds to a value specified in the generator column,
 * typically representing the value for a multi-row field in the test case data.
 */
export interface TodoFieldInterface extends TodoBaseInterface {
  /**
   * The value provided in the "key" column.
   */
  key: string

  /**
   * The comment or annotation provided in the "comment" column.
   */
  comment: string

  /**
   * Additional information provided in the "other" column.
   */
  other: string
}

/**
 * Options used for creating a TodoField instance.
 */
export interface TodoFieldOptions extends TodoBaseOptions {
  /**
   * The value provided in the "key" column.
   */
  key: string

  /**
   * The comment or annotation provided in the "comment" column.
   */
  comment: string

  /**
   * Additional information provided in the "other" column.
   */
  other: string
}

/**
 * Implementation of a Todo item for static field values.
 *
 * This class extends the basic todo functionality provided by TodoBase and includes
 * properties for the "key", "comment", and "other" columns to handle static data values.
 */
export class TodoField extends TodoBase implements TodoFieldInterface {
  /**
   * The value provided in the "key" column.
   */
  key: string

  /**
   * The comment provided in the "comment" column.
   */
  comment: string

  /**
   * Additional information provided in the "other" column.
   */
  other: string

  /**
   * Constructs a new TodoField instance.
   *
   * @param opts - Initialization options for the TodoField, including base properties
   *               and specific static field values.
   */
  constructor(opts: TodoFieldOptions) {
    super(opts)
    this.key = opts.key
    this.comment = opts.comment
    this.other = opts.other
  }
}
