[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / TodoBaseInterface

# Interface: TodoBaseInterface

Defined in: todo/TodoBase.ts:10

Represents the common data structure for all todo items.

A "todo" item defines a unit of work that must be completed to generate the test case data.
The generator will repeatedly process all todo items until each one is fulfilled,
or it will throw an error if any remain incomplete.

## Extended by

- [`TodoGeneratorInterface`](TodoGeneratorInterface.md)
- [`TodoBaseOptions`](TodoBaseOptions.md)
- [`TodoFieldInterface`](TodoFieldInterface.md)
- [`TodoReferenceInterface`](TodoReferenceInterface.md)
- [`TodoStaticInterface`](TodoStaticInterface.md)

## Properties

### fieldName

> **fieldName**: `string`

Defined in: todo/TodoBase.ts:14

The name of the field associated with this todo.

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](MetaTestcase.md)

Defined in: todo/TodoBase.ts:19

Meta-information about the test case.
