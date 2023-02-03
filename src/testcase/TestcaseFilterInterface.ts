/**
 * A filter is used to filter out test cases from execution
 */
export interface TestcaseFilterInterface {
  /** The name of the filter processor */
  filterProcessorName: string

  /** The filter expression */
  expression: string

  /** A comment for this filter */
  comment: string
}
