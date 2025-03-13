[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / TodoGeneratorInterface

# Interface: TodoGeneratorInterface

Defined in: todo/TodoGenerator.ts:9

Represents a todo item for invoking a generator.

When processing a table, all generator calls are collected into a list of todo items.
These todos are then executed until each generator has produced its data.

## Extends

- [`TodoBaseInterface`](TodoBaseInterface.md)

## Properties

### config

> **config**: `string`

Defined in: todo/TodoGenerator.ts:18

The configuration or parameters for this generator call.

***

### fieldName

> **fieldName**: `string`

Defined in: todo/TodoBase.ts:14

The name of the field associated with this todo.

#### Inherited from

[`TodoBaseInterface`](TodoBaseInterface.md).[`fieldName`](TodoBaseInterface.md#fieldname)

***

### generatorName

> **generatorName**: `string`

Defined in: todo/TodoGenerator.ts:13

The name of the generator to be invoked.

***

### instanceIdSuffix

> **instanceIdSuffix**: `string`

Defined in: todo/TodoGenerator.ts:23

The suffix for the instanceId to distinguish multiple calls.

***

### order

> **order**: `number`

Defined in: todo/TodoGenerator.ts:29

Determines the execution order of generator todos.
Lower numbers are executed before higher numbers.

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](MetaTestcase.md)

Defined in: todo/TodoBase.ts:19

Meta-information about the test case.

#### Inherited from

[`TodoBaseInterface`](TodoBaseInterface.md).[`testcaseMeta`](TodoBaseInterface.md#testcasemeta)
