[**@xhubiotable/model**](../README.md)

***

[@xhubiotable/model](../globals.md) / TableInterface

# Interface: TableInterface

Defined in: [TableInterface.ts:9](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/TableInterface.ts#L9)

Represents the abstract definition of a table.
This can include various types of tables such as decision tables, matrix tables, etc.

## Properties

### fileName

> **fileName**: `string`

Defined in: [TableInterface.ts:13](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/TableInterface.ts#L13)

The file name from which the table is loaded.

***

### getTestcaseForName()

> **getTestcaseForName**: (`testcaseName`) => [`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md)

Defined in: [TableInterface.ts:42](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/TableInterface.ts#L42)

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

Defined in: [TableInterface.ts:23](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/TableInterface.ts#L23)

Logger instance used for logging operations related to the table.

***

### processRanges()

> **processRanges**: (`rangeName`) => `string`[]

Defined in: [TableInterface.ts:64](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/TableInterface.ts#L64)

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

Defined in: [TableInterface.ts:28](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/TableInterface.ts#L28)

Read-only meta information about the table.

***

### tableName

> **tableName**: `string`

Defined in: [TableInterface.ts:18](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/TableInterface.ts#L18)

The human-readable name of the table.

***

### tableType

> `readonly` **tableType**: `string`

Defined in: [TableInterface.ts:33](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/TableInterface.ts#L33)

A string identifier representing the type of table (e.g., 'decision-table').

## Methods

### getTestcasesForExecution()

> **getTestcasesForExecution**(): `Generator`\<[`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md), `void`, `unknown`\>

Defined in: [TableInterface.ts:49](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/TableInterface.ts#L49)

A generator function that yields all test cases intended for execution.

#### Returns

`Generator`\<[`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md), `void`, `unknown`\>

A generator yielding test case definitions.
