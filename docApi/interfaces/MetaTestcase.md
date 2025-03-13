[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / MetaTestcase

# Interface: MetaTestcase

Defined in: MetaInterface.ts:24

Extends MetaTable with additional details specific to a test case.

This interface adds test case-specific metadata, such as the test case name,
to the basic table metadata defined in MetaTable.

## Extends

- [`MetaTable`](MetaTable.md)

## Properties

### fileName

> **fileName**: `string`

Defined in: MetaInterface.ts:9

The name of the file from which the table originates.

#### Inherited from

[`MetaTable`](MetaTable.md).[`fileName`](MetaTable.md#filename)

***

### tableName

> **tableName**: `string`

Defined in: MetaInterface.ts:12

The human-readable name of the table.

#### Inherited from

[`MetaTable`](MetaTable.md).[`tableName`](MetaTable.md#tablename)

***

### tableType

> **tableType**: `string`

Defined in: MetaInterface.ts:15

The type or category of the table.

#### Inherited from

[`MetaTable`](MetaTable.md).[`tableType`](MetaTable.md#tabletype)

***

### testcaseName

> **testcaseName**: `string`

Defined in: MetaInterface.ts:26

The name of the test case within the table.
