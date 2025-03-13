[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / TodoFieldInterface

# Interface: TodoFieldInterface

Defined in: todo/TodoField.ts:9

Represents a todo item for handling static field values.

A static field todo corresponds to a value specified in the generator column,
typically representing the value for a multi-row field in the test case data.

## Extends

- [`TodoBaseInterface`](TodoBaseInterface.md)

## Properties

### comment

> **comment**: `string`

Defined in: todo/TodoField.ts:18

The comment or annotation provided in the "comment" column.

***

### fieldName

> **fieldName**: `string`

Defined in: todo/TodoBase.ts:14

The name of the field associated with this todo.

#### Inherited from

[`TodoBaseInterface`](TodoBaseInterface.md).[`fieldName`](TodoBaseInterface.md#fieldname)

***

### key

> **key**: `string`

Defined in: todo/TodoField.ts:13

The value provided in the "key" column.

***

### other

> **other**: `string`

Defined in: todo/TodoField.ts:23

Additional information provided in the "other" column.

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](MetaTestcase.md)

Defined in: todo/TodoBase.ts:19

Meta-information about the test case.

#### Inherited from

[`TodoBaseInterface`](TodoBaseInterface.md).[`testcaseMeta`](TodoBaseInterface.md#testcasemeta)
