[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / TestcaseDefinitionInterface

# Interface: TestcaseDefinitionInterface

Defined in: TestcaseDefinitionInterface.ts:14

Represents the definition of a test case, including its metadata, execution parameters,
and functions to generate related data (such as tags, filters, and todos).

This interface encapsulates the information and behavior required to create and manage
test case data within a table context.

## Properties

### createFilter()

> **createFilter**: () => [`FilterInterface`](FilterInterface.md)[]

Defined in: TestcaseDefinitionInterface.ts:74

Generates and returns all filters associated with this test case.

#### Returns

[`FilterInterface`](FilterInterface.md)[]

An array of FilterInterface objects representing the filters.

***

### createGeneratorSwitches()

> **createGeneratorSwitches**: () => `string`[]

Defined in: TestcaseDefinitionInterface.ts:81

Returns a list of generator names that should be skipped during test execution.

#### Returns

`string`[]

An array of generator names as strings.

***

### createTags()

> **createTags**: () => `string`[]

Defined in: TestcaseDefinitionInterface.ts:67

Generates and returns all tags associated with this test case.

#### Returns

`string`[]

An array of tags (strings) derived from the test case data.

***

### createTodos()

> **createTodos**: () => [`TestcaseTodosInterface`](TestcaseTodosInterface.md)

Defined in: TestcaseDefinitionInterface.ts:90

Creates and returns all todo items associated with this test case definition.

Todo items are used to schedule additional processing or data generation tasks.

#### Returns

[`TestcaseTodosInterface`](TestcaseTodosInterface.md)

An object conforming to TestcaseTodosInterface.

***

### data?

> `optional` **data**: `any`

Defined in: TestcaseDefinitionInterface.ts:55

Data associated with this test case.

In a decision table, a test case represents a column where all data in that column
is identified by a unique row value. In a matrix table, this property typically holds a single value.

***

### execute

> **execute**: `boolean`

Defined in: TestcaseDefinitionInterface.ts:41

Indicates whether this test case should be executed.
If false, the test case serves only as a reference.

***

### id

> **id**: `string`

Defined in: TestcaseDefinitionInterface.ts:23

Unique identifier for this test case.

***

### logger

> **logger**: `LoggerInterface`

Defined in: TestcaseDefinitionInterface.ts:18

Logger instance used for logging information related to the test case.

***

### multiplicity

> **multiplicity**: `number`

Defined in: TestcaseDefinitionInterface.ts:35

Specifies how many times this test case should be generated.
Must be an integer greater than 0.

***

### neverExecute

> **neverExecute**: `boolean`

Defined in: TestcaseDefinitionInterface.ts:47

When true, indicates that this test case should not be executed if a referenced
test case has this flag set.

***

### table

> **table**: [`TableInterface`](TableInterface.md)

Defined in: TestcaseDefinitionInterface.ts:60

Back reference to the table that contains this test case.

***

### testcaseMeta

> `readonly` **testcaseMeta**: [`MetaTestcase`](MetaTestcase.md)

Defined in: TestcaseDefinitionInterface.ts:29

Read-only meta-information for this test case.
Contains details inherited from the table (e.g., test case name).
