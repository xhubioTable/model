[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / TodoGeneratorOptions

# Interface: TodoGeneratorOptions

Defined in: todo/TodoGenerator.ts:35

Options for creating a TodoGenerator instance.

## Extends

- [`TodoBaseOptions`](TodoBaseOptions.md)

## Properties

### config

> **config**: `string`

Defined in: todo/TodoGenerator.ts:44

The configuration or parameters for this generator call.

***

### fieldName

> **fieldName**: `string`

Defined in: todo/TodoBase.ts:14

The name of the field associated with this todo.

#### Inherited from

[`TodoBaseOptions`](TodoBaseOptions.md).[`fieldName`](TodoBaseOptions.md#fieldname)

***

### generatorName

> **generatorName**: `string`

Defined in: todo/TodoGenerator.ts:39

The name of the generator to be invoked.

***

### instanceIdSuffix

> **instanceIdSuffix**: `string`

Defined in: todo/TodoGenerator.ts:49

The suffix for the instanceId to distinguish multiple calls.

***

### order?

> `optional` **order**: `number`

Defined in: todo/TodoGenerator.ts:55

Determines the execution order of generator todos.
Lower numbers are executed first. Defaults to 1000 if not provided.

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](MetaTestcase.md)

Defined in: todo/TodoBase.ts:19

Meta-information about the test case.

#### Inherited from

[`TodoBaseOptions`](TodoBaseOptions.md).[`testcaseMeta`](TodoBaseOptions.md#testcasemeta)
