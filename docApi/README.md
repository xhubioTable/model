**@tlink/model**

***

# Model

This Package is the base for the table models and test cases

## Table Interface Documentation

The `TableInterface` defines the abstract representation of a table. It
is designed to support various types of tables such as decision tables,
matrix tables, etc. This interface provides properties to hold the
table’s metadata and methods to retrieve and process test case
definitions.

### Properties

-   **fileName** The file name from which the table is loaded.

-   **tableName** The human-readable name of the table.

-   **logger** The logger instance used for logging operations related
    to the table.

-   **tableMeta** Read-only meta-information about the table (e.g.,
    origin, descriptive details).

-   **tableType** Read-only string identifier representing the type of
    the table (e.g., "decision-table", "matrix-table").

### Methods

#### getTestcaseForName

    getTestcaseForName(testcaseName: string): TestcaseDefinitionInterface

Retrieves the test case definition for a given test case name.
**Parameters:** - `testcaseName` – The name of the test case to
retrieve. **Returns:** - The test case definition corresponding to the
provided name. **Throws:** - An error if the test case cannot be found.

#### getTestcasesForExecution

    getTestcasesForExecution(): Generator<TestcaseDefinitionInterface, void, unknown>

A generator function that yields all test case definitions intended for
execution. This method allows the caller to iterate over each test case
defined in the table.

#### processRanges

    processRanges(rangeName: string): string[]

Parses a test case name or range and returns an array of individual test
case names. For example, a range name such as "tc12-14" is expanded to:
\["tc12", "tc13", "tc14"\]. **Parameters:** - `rangeName` – The test
case name or range to parse. **Returns:** - An array of test case names.

### Summary

The `TableInterface` serves as a foundational contract for table
implementations. It encapsulates essential properties, such as metadata
and logging, and defines key methods for accessing test case definitions
and processing test case ranges. This interface enables consistent
handling of various table types across the application.

## Testcase Definition Interface Documentation

The `TestcaseDefinitionInterface` represents the definition of a test
case, including its metadata, execution parameters, and functions to
generate related data such as tags, filters, and todos. This interface
encapsulates the information and behavior required to create and manage
test case data within a table context.

### Properties

-   **logger** Logger instance used for logging information related to
    the test case.

-   **id** Unique identifier for this test case.

-   **testcaseMeta** Read-only meta-information for this test case.
    Contains details inherited from the table (e.g., test case name).

-   **multiplicity** Specifies how many times this test case should be
    generated. Must be an integer greater than 0.

-   **execute** Indicates whether this test case should be executed. If
    false, the test case serves only as a reference.

-   **neverExecute** When true, indicates that this test case should not
    be executed if a referenced test case has this flag set.

-   **data** Data associated with this test case. In a decision table, a
    test case represents a column where all data in that column is
    identified by a unique row value. In a matrix table, this property
    typically holds a single value.

-   **table** Back reference to the table that contains this test case.

### Methods

#### createTags

    createTags(): string[]

Generates and returns all tags associated with this test case.
**Returns:** An array of strings derived from the test case data.

#### createFilter

    createFilter(): FilterInterface[]

Generates and returns all filters associated with this test case.
**Returns:** An array of `FilterInterface` objects representing the
filters.

#### createGeneratorSwitches

    createGeneratorSwitches(): string[]

Returns a list of generator names that should be skipped during test
execution. **Returns:** An array of generator names as strings.

#### createTodos

    createTodos(): TestcaseTodosInterface

Creates and returns all todo items associated with this test case
definition. Todo items are used to schedule additional processing or
data generation tasks. **Returns:** An object conforming to
`TestcaseTodosInterface`.

### Summary

The `TestcaseDefinitionInterface` is essential for defining and managing
the execution of test cases within a table. It not only holds
fundamental properties such as identification and metadata, but also
provides methods to generate supplementary data including tags, filters,
generator switches, and todo items.

## Todos

The Todos defines what is needed to create the test cases. Each
Generator cmd or each reference creates a 'todo'. There are different
types of todos.

### TodoStatic Documentation

The `TodoStatic` component represents a todo item for handling static
values during test case generation. A static todo defines a constant
value specified in the generator column. This value is used as-is
without modification, providing a straightforward way to assign static
data to a test case.

#### TodoStaticInterface

This interface extends the base todo interface and specifies the
structure for a static todo item. It includes the following property:

-   **value** The static value assigned to this todo.

#### TodoStaticOptions

This interface defines the options required to create a `TodoStatic`
instance. It extends the base todo options and includes:

-   **value** The static value that this todo will hold.

#### Class: TodoStatic

The `TodoStatic` class implements the `TodoStaticInterface` and extends
the base functionality provided by `TodoBase`. It encapsulates the
static value used during test case generation.

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

#### Summary

The `TodoStatic` component is essential for representing constant,
unchanging data in the test case generation process. By providing a
clear structure for static values through its interface and class
implementation, it ensures that static data is managed consistently
across test cases.

### TodoField Documentation

The `TodoField` represents a todo item for handling static field values.
It corresponds to a value specified in the generator column and is
typically used for multi-row fields in test case data. This
documentation covers the interfaces and class that define and implement
this functionality.

#### TodoFieldInterface

Defines the structure for a todo item related to static field values. It
extends the base todo interface and includes the following properties:
\* **key**: The value provided in the "key" column. \* **comment**: The
comment or annotation provided in the "comment" column. \* **other**:
Additional information provided in the "other" column.

#### TodoFieldOptions

Specifies the options used to create a `TodoField` instance. In addition
to the base properties inherited from the todo base options, it
includes: \* **key**: The static value from the "key" column. \*
**comment**: The comment or annotation from the "comment" column. \*
**other**: Additional information from the "other" column.

#### Class: TodoField

The `TodoField` class is an implementation of the static field todo
item. It extends the base todo functionality (provided by `TodoBase`)
and implements the `TodoFieldInterface`. The class encapsulates the
properties needed to handle static data values, including: \* **key**:
The static value. \* **comment**: The comment or annotation. \*
**other**: Additional information.

The constructor initializes these properties using the provided options.

#### Example Usage

    import { TodoField } from './TodoField'

    const options = {
      fieldName: 'exampleField',
      testcaseMeta: {
        fileName: 'test.xlsx',
        tableName: 'Test Table',
        tableType: 'decision-table',
        testcaseName: 'TestCase1'
      },
      key: 'staticKey',
      comment: 'This is a comment for the static field',
      other: 'Additional info'
    }

    const todoField = new TodoField(options)
    console.log(todoField)

#### Summary

The `TodoField` component is essential for representing static data
values in test case generation. It provides a structured way to capture
and process static values along with their associated comments and
additional details. This helps ensure that static field data is managed
consistently across test cases.

### TodoGenerator Documentation

The `TodoGenerator` component represents a todo item for invoking a
generator. During table processing, all generator calls are collected
into a list of todo items. These todos are then executed repeatedly
until each generator has produced its data. This mechanism ensures that
dynamic data generation is coordinated across the processing of a table.

### Interfaces

#### TodoGeneratorInterface

Defines the structure for a generator todo item. This interface extends
the base todo interface and includes properties specific to generator
invocation.

-   **generatorName** The name of the generator to be invoked.

-   **config** The configuration or parameters for this generator call.

-   **instanceIdSuffix** The suffix for the instanceId, used to
    distinguish multiple calls.

-   **order** Determines the execution order of generator todos. Lower
    numbers are executed before higher numbers.

#### TodoGeneratorOptions

Specifies the options required to create a `TodoGenerator` instance. It
extends the base todo options and includes additional properties
necessary for invoking a generator.

-   **generatorName** The name of the generator to be invoked.

-   **config** The configuration or parameters for the generator call.

-   **instanceIdSuffix** The suffix for the instanceId to distinguish
    multiple calls.

-   **order** Determines the execution order of the generator todos. If
    not provided, it defaults to 1000.

### Class: TodoGenerator

The `TodoGenerator` class implements the `TodoGeneratorInterface` and
extends the base functionality provided by `TodoBase`. It encapsulates
the properties needed for a generator invocation, such as the generator
name, configuration, instance ID suffix, and execution order.

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

### Summary

The `TodoGenerator` is a critical component for scheduling and executing
generator calls within the test case data generation process. By
defining clear properties and an execution order, it ensures that
dynamic data can be generated in a controlled and predictable manner.

### TodoReference Documentation

The `TodoReference` component represents a todo item for a reference. A
reference todo points to a test case in a different table and includes
details such as the target table, target field, target test case, and an
instance ID suffix to distinguish multiple references.

### Interfaces

#### TodoReferenceInterface

Defines the structure for a reference todo item. This interface extends
the base todo interface and includes the following properties:

-   **targetTableName** The name of the target table to which this
    reference points.

-   **targetFieldName** The name of the target field in the referenced
    table.

-   **targetTestcaseName** The name of the target test case in the
    referenced table.

-   **instanceIdSuffix** The instance ID suffix used to uniquely
    identify this reference.

#### TodoReferenceOptions

Specifies the options required to create a `TodoReference` instance. In
addition to the base todo options, it includes:

-   **targetTableName** The name of the target table to which this
    reference points.

-   **targetFieldName** The name of the target field in the referenced
    table.

-   **targetTestcaseName** The name of the target test case in the
    referenced table.

-   **instanceIdSuffix** The instance ID suffix used to uniquely
    identify this reference.

### Class: TodoReference

The `TodoReference` class implements the reference todo item. It extends
the base todo functionality provided by `TodoBase` and implements the
`TodoReferenceInterface`. This class encapsulates the properties needed
to reference a test case from a different table.

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

### Summary

The `TodoReference` component is essential for managing references
between test cases across different tables. It enables a test case to
refer to data in another table by specifying the target table, field,
test case, and an instance ID suffix for disambiguation.
