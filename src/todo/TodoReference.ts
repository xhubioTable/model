import { TodoBase, TodoBaseInterface, TodoBaseOptions } from './TodoBase'

/**
 * Represents a todo item for a reference.
 *
 * A reference todo points to a test case in a different table.
 * It includes details such as the target table, field, and test case,
 * as well as an instance ID suffix to distinguish multiple references.
 */
export interface TodoReferenceInterface extends TodoBaseInterface {
  /**
   * The name of the target table to which this reference points.
   */
  targetTableName: string

  /**
   * The name of the target field in the referenced table.
   */
  targetFieldName: string

  /**
   * The name of the target test case in the referenced table.
   */
  targetTestcaseName: string

  /**
   * The instance ID suffix used to uniquely identify this reference.
   */
  instanceIdSuffix: string
}

/**
 * Options for creating a TodoReference instance.
 */
export interface TodoReferenceOptions extends TodoBaseOptions {
  /**
   * The name of the target table to which this reference points.
   */
  targetTableName: string

  /**
   * The name of the target field in the referenced table.
   */
  targetFieldName: string

  /**
   * The name of the target test case in the referenced table.
   */
  targetTestcaseName: string

  /**
   * The instance ID suffix used to uniquely identify this reference.
   */
  instanceIdSuffix: string
}

/**
 * Implementation of a todo item for a reference.
 *
 * This class extends the base todo functionality by including properties specific to references,
 * such as target table, field, test case names, and an instance ID suffix.
 */
export class TodoReference extends TodoBase implements TodoReferenceInterface {
  targetTableName: string
  targetFieldName: string
  targetTestcaseName: string
  instanceIdSuffix: string

  /**
   * Constructs a new TodoReference instance.
   *
   * @param opts - Initialization options for the TodoReference, including base properties
   *               and specific reference details.
   */
  constructor(opts: TodoReferenceOptions) {
    super(opts)
    this.targetTableName = opts.targetTableName
    this.targetFieldName = opts.targetFieldName
    this.targetTestcaseName = opts.targetTestcaseName
    this.instanceIdSuffix = opts.instanceIdSuffix
  }
}
