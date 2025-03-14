[**@xhubiotable/model**](../README.md)

***

[@xhubiotable/model](../globals.md) / MetaTestcase

# Interface: MetaTestcase

Defined in: [MetaInterface.ts:24](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/MetaInterface.ts#L24)

Extends MetaTable with additional details specific to a test case.

This interface adds test case-specific metadata, such as the test case name,
to the basic table metadata defined in MetaTable.

## Extends

- [`MetaTable`](MetaTable.md)

## Properties

### fileName

> **fileName**: `string`

Defined in: [MetaInterface.ts:9](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/MetaInterface.ts#L9)

The name of the file from which the table originates.

#### Inherited from

[`MetaTable`](MetaTable.md).[`fileName`](MetaTable.md#filename)

***

### tableName

> **tableName**: `string`

Defined in: [MetaInterface.ts:12](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/MetaInterface.ts#L12)

The human-readable name of the table.

#### Inherited from

[`MetaTable`](MetaTable.md).[`tableName`](MetaTable.md#tablename)

***

### tableType

> **tableType**: `string`

Defined in: [MetaInterface.ts:15](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/MetaInterface.ts#L15)

The type or category of the table.

#### Inherited from

[`MetaTable`](MetaTable.md).[`tableType`](MetaTable.md#tabletype)

***

### testcaseName

> **testcaseName**: `string`

Defined in: [MetaInterface.ts:26](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/MetaInterface.ts#L26)

The name of the test case within the table.
