[**@xhubiotable/model**](../README.md)

***

[@xhubiotable/model](../globals.md) / TodoStaticInterface

# Interface: TodoStaticInterface

Defined in: [todo/TodoStatic.ts:9](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoStatic.ts#L9)

Represents a todo item for handling static values.

A static todo defines a constant value specified in the generator column.
This value is used as-is during the test case generation process.

## Extends

- [`TodoBaseInterface`](TodoBaseInterface.md)

## Properties

### fieldName

> **fieldName**: `string`

Defined in: [todo/TodoBase.ts:14](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L14)

The name of the field associated with this todo.

#### Inherited from

[`TodoBaseInterface`](TodoBaseInterface.md).[`fieldName`](TodoBaseInterface.md#fieldname)

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](MetaTestcase.md)

Defined in: [todo/TodoBase.ts:19](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L19)

Meta-information about the test case.

#### Inherited from

[`TodoBaseInterface`](TodoBaseInterface.md).[`testcaseMeta`](TodoBaseInterface.md#testcasemeta)

***

### value

> **value**: `string`

Defined in: [todo/TodoStatic.ts:13](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoStatic.ts#L13)

The static value assigned to this todo.
