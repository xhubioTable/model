[**@xhubiotable/model**](../README.md)

***

[@xhubiotable/model](../globals.md) / TodoBase

# Class: `abstract` TodoBase

Defined in: [todo/TodoBase.ts:36](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L36)

Abstract base class for todo items.

Provides the essential properties for all todo items and serves as a foundation
for more specific implementations of todo tasks.

## Extended by

- [`TodoGenerator`](TodoGenerator.md)
- [`TodoField`](TodoField.md)
- [`TodoReference`](TodoReference.md)
- [`TodoStatic`](TodoStatic.md)

## Implements

- [`TodoBaseInterface`](../interfaces/TodoBaseInterface.md)

## Constructors

### new TodoBase()

> **new TodoBase**(`opts`): [`TodoBase`](TodoBase.md)

Defined in: [todo/TodoBase.ts:45](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L45)

Constructs a new instance of TodoBase.

#### Parameters

##### opts

[`TodoBaseInterface`](../interfaces/TodoBaseInterface.md)

An object conforming to TodoBaseInterface that provides the necessary initialization data.

#### Returns

[`TodoBase`](TodoBase.md)

## Properties

### fieldName

> **fieldName**: `string`

Defined in: [todo/TodoBase.ts:37](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L37)

The name of the field associated with this todo.

#### Implementation of

[`TodoBaseInterface`](../interfaces/TodoBaseInterface.md).[`fieldName`](../interfaces/TodoBaseInterface.md#fieldname)

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](../interfaces/MetaTestcase.md)

Defined in: [todo/TodoBase.ts:38](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L38)

Meta-information about the test case.

#### Implementation of

[`TodoBaseInterface`](../interfaces/TodoBaseInterface.md).[`testcaseMeta`](../interfaces/TodoBaseInterface.md#testcasemeta)
