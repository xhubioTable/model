[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / TableInterface

# Interface: TableInterface

Defined in: TableInterface.ts:9

Represents the abstract definition of a table.
This can include various types of tables such as decision tables, matrix tables, etc.

## Properties

### fileName

> **fileName**: `string`

Defined in: TableInterface.ts:13

The file name from which the table is loaded.

***

### getTestcaseForName()

> **getTestcaseForName**: (`testcaseName`) => [`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md)

Defined in: TableInterface.ts:42

Retrieves the test case definition for a given test case name.

#### Parameters

##### testcaseName

`string`

The name of the test case to retrieve.

#### Returns

[`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md)

The test case definition corresponding to the provided name.

#### Throws

An error if the test case cannot be found.

***

### logger

> **logger**: `LoggerInterface`

Defined in: TableInterface.ts:23

Logger instance used for logging operations related to the table.

***

### processRanges()

> **processRanges**: (`rangeName`) => `string`[]

Defined in: TableInterface.ts:64

Parses a test case name or range and returns an array of individual test case names.

For example, a range name such as "tc12-14" is expanded to:
["tc12", "tc13", "tc14"].

#### Parameters

##### rangeName

`string`

The test case name or range to parse.

#### Returns

`string`[]

An array of test case names.

***

### tableMeta

> `readonly` **tableMeta**: [`MetaTable`](MetaTable.md)

Defined in: TableInterface.ts:28

Read-only meta information about the table.

***

### tableName

> **tableName**: `string`

Defined in: TableInterface.ts:18

The human-readable name of the table.

***

### tableType

> `readonly` **tableType**: `string`

Defined in: TableInterface.ts:33

A string identifier representing the type of table (e.g., 'decision-table').

## Methods

### getTestcasesForExecution()

> **getTestcasesForExecution**(): `Generator`\<[`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md), `void`, `unknown`\>

Defined in: TableInterface.ts:49

A generator function that yields all test cases intended for execution.

#### Returns

`Generator`\<[`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md), `void`, `unknown`\>

A generator yielding test case definitions.
