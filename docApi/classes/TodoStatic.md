[**@xhubiotable/model**](../README.md)

***

[@xhubiotable/model](../globals.md) / TodoStatic

# Class: TodoStatic

Defined in: [todo/TodoStatic.ts:32](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoStatic.ts#L32)

Implementation of a todo item for static values.

This class extends the base todo functionality by including a static value
that represents constant data used during test case generation.

## Extends

- [`TodoBase`](TodoBase.md)

## Implements

- [`TodoStaticInterface`](../interfaces/TodoStaticInterface.md)

## Constructors

### new TodoStatic()

> **new TodoStatic**(`opts`): [`TodoStatic`](TodoStatic.md)

Defined in: [todo/TodoStatic.ts:44](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoStatic.ts#L44)

Constructs a new TodoStatic instance.

#### Parameters

##### opts

[`TodoStaticOptions`](../interfaces/TodoStaticOptions.md)

Initialization options for the TodoStatic, including base properties
              and the specific static value.

#### Returns

[`TodoStatic`](TodoStatic.md)

#### Overrides

[`TodoBase`](TodoBase.md).[`constructor`](TodoBase.md#constructors)

## Properties

### fieldName

> **fieldName**: `string`

Defined in: [todo/TodoBase.ts:37](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L37)

The name of the field associated with this todo.

#### Implementation of

[`TodoStaticInterface`](../interfaces/TodoStaticInterface.md).[`fieldName`](../interfaces/TodoStaticInterface.md#fieldname)

#### Inherited from

[`TodoBase`](TodoBase.md).[`fieldName`](TodoBase.md#fieldname)

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](../interfaces/MetaTestcase.md)

Defined in: [todo/TodoBase.ts:38](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L38)

Meta-information about the test case.

#### Implementation of

[`TodoStaticInterface`](../interfaces/TodoStaticInterface.md).[`testcaseMeta`](../interfaces/TodoStaticInterface.md#testcasemeta)

#### Inherited from

[`TodoBase`](TodoBase.md).[`testcaseMeta`](TodoBase.md#testcasemeta)

***

### value

> **value**: `string`

Defined in: [todo/TodoStatic.ts:36](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoStatic.ts#L36)

The static value for this todo.

#### Implementation of

[`TodoStaticInterface`](../interfaces/TodoStaticInterface.md).[`value`](../interfaces/TodoStaticInterface.md#value)
