[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / TodoStaticInterface

# Interface: TodoStaticInterface

Defined in: todo/TodoStatic.ts:9

Represents a todo item for handling static values.

A static todo defines a constant value specified in the generator column.
This value is used as-is during the test case generation process.

## Extends

- [`TodoBaseInterface`](TodoBaseInterface.md)

## Properties

### fieldName

> **fieldName**: `string`

Defined in: todo/TodoBase.ts:14

The name of the field associated with this todo.

#### Inherited from

[`TodoBaseInterface`](TodoBaseInterface.md).[`fieldName`](TodoBaseInterface.md#fieldname)

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](MetaTestcase.md)

Defined in: todo/TodoBase.ts:19

Meta-information about the test case.

#### Inherited from

[`TodoBaseInterface`](TodoBaseInterface.md).[`testcaseMeta`](TodoBaseInterface.md#testcasemeta)

***

### value

> **value**: `string`

Defined in: todo/TodoStatic.ts:13

The static value assigned to this todo.
