[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / TodoField

# Class: TodoField

Defined in: todo/TodoField.ts:52

Implementation of a Todo item for static field values.

This class extends the basic todo functionality provided by TodoBase and includes
properties for the "key", "comment", and "other" columns to handle static data values.

## Extends

- [`TodoBase`](TodoBase.md)

## Implements

- [`TodoFieldInterface`](../interfaces/TodoFieldInterface.md)

## Constructors

### new TodoField()

> **new TodoField**(`opts`): [`TodoField`](TodoField.md)

Defined in: todo/TodoField.ts:74

Constructs a new TodoField instance.

#### Parameters

##### opts

[`TodoFieldOptions`](../interfaces/TodoFieldOptions.md)

Initialization options for the TodoField, including base properties
              and specific static field values.

#### Returns

[`TodoField`](TodoField.md)

#### Overrides

[`TodoBase`](TodoBase.md).[`constructor`](TodoBase.md#constructors)

## Properties

### comment

> **comment**: `string`

Defined in: todo/TodoField.ts:61

The comment provided in the "comment" column.

#### Implementation of

[`TodoFieldInterface`](../interfaces/TodoFieldInterface.md).[`comment`](../interfaces/TodoFieldInterface.md#comment)

***

### fieldName

> **fieldName**: `string`

Defined in: todo/TodoBase.ts:37

The name of the field associated with this todo.

#### Implementation of

[`TodoFieldInterface`](../interfaces/TodoFieldInterface.md).[`fieldName`](../interfaces/TodoFieldInterface.md#fieldname)

#### Inherited from

[`TodoBase`](TodoBase.md).[`fieldName`](TodoBase.md#fieldname)

***

### key

> **key**: `string`

Defined in: todo/TodoField.ts:56

The value provided in the "key" column.

#### Implementation of

[`TodoFieldInterface`](../interfaces/TodoFieldInterface.md).[`key`](../interfaces/TodoFieldInterface.md#key)

***

### other

> **other**: `string`

Defined in: todo/TodoField.ts:66

Additional information provided in the "other" column.

#### Implementation of

[`TodoFieldInterface`](../interfaces/TodoFieldInterface.md).[`other`](../interfaces/TodoFieldInterface.md#other)

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](../interfaces/MetaTestcase.md)

Defined in: todo/TodoBase.ts:38

Meta-information about the test case.

#### Implementation of

[`TodoFieldInterface`](../interfaces/TodoFieldInterface.md).[`testcaseMeta`](../interfaces/TodoFieldInterface.md#testcasemeta)

#### Inherited from

[`TodoBase`](TodoBase.md).[`testcaseMeta`](TodoBase.md#testcasemeta)
