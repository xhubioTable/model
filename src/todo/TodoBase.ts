import { MetaTestcase } from '../MetaInterface'

/**
 * Represents the common data structure for all todo items.
 *
 * A "todo" item defines a unit of work that must be completed to generate the test case data.
 * The generator will repeatedly process all todo items until each one is fulfilled,
 * or it will throw an error if any remain incomplete.
 */
export interface TodoBaseInterface {
  /**
   * The name of the field associated with this todo.
   */
  fieldName: string

  /**
   * Meta-information about the test case.
   */
  testcaseMeta: MetaTestcase
}

/**
 * Options for initializing a TodoBase.
 *
 * This interface extends TodoBaseInterface for potential future extensions.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TodoBaseOptions extends TodoBaseInterface {}

/**
 * Abstract base class for todo items.
 *
 * Provides the essential properties for all todo items and serves as a foundation
 * for more specific implementations of todo tasks.
 */
export abstract class TodoBase implements TodoBaseInterface {
  fieldName: string
  testcaseMeta: MetaTestcase

  /**
   * Constructs a new instance of TodoBase.
   *
   * @param opts - An object conforming to TodoBaseInterface that provides the necessary initialization data.
   */
  constructor(opts: TodoBaseInterface) {
    this.fieldName = opts.fieldName
    this.testcaseMeta = opts.testcaseMeta
  }
}
