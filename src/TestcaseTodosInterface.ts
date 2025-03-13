import { TodoFieldInterface } from './todo/TodoField'
import { TodoGeneratorInterface } from './todo/TodoGenerator'
import { TodoReferenceInterface } from './todo/TodoReference'
import { TodoStaticInterface } from './todo/TodoStatic'

/**
 * Represents all the todo items associated with a single test case.
 *
 * A "todo" item defines a specific task or operation that must be executed
 * to construct the test case and/or generate its associated data.
 */
export interface TestcaseTodosInterface {
  /**
   * An array of todos for invoking data generators.
   *
   * These todos represent generator calls that need to be executed to produce dynamic test case data.
   */
  generator: TodoGeneratorInterface[]

  /**
   * An array of reference todos.
   *
   * These todos manage the resolution of references between test cases or data elements.
   */
  reference: TodoReferenceInterface[]

  /**
   * An array of static todos.
   *
   * These todos handle the assignment or processing of static values within the test case.
   */
  static: TodoStaticInterface[]

  /**
   * An array of field todos.
   *
   * These todos are responsible for processing individual field values within the test case.
   */
  field: TodoFieldInterface[]
}
