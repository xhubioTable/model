[**@xhubiotable/model**](../README.md)

***

[@xhubiotable/model](../globals.md) / TodoReferenceInterface

# Interface: TodoReferenceInterface

Defined in: [todo/TodoReference.ts:10](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L10)

Represents a todo item for a reference.

A reference todo points to a test case in a different table.
It includes details such as the target table, field, and test case,
as well as an instance ID suffix to distinguish multiple references.

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

### instanceIdSuffix

> **instanceIdSuffix**: `string`

Defined in: [todo/TodoReference.ts:29](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L29)

The instance ID suffix used to uniquely identify this reference.

***

### targetFieldName

> **targetFieldName**: `string`

Defined in: [todo/TodoReference.ts:19](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L19)

The name of the target field in the referenced table.

***

### targetTableName

> **targetTableName**: `string`

Defined in: [todo/TodoReference.ts:14](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L14)

The name of the target table to which this reference points.

***

### targetTestcaseName

> **targetTestcaseName**: `string`

Defined in: [todo/TodoReference.ts:24](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L24)

The name of the target test case in the referenced table.

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](MetaTestcase.md)

Defined in: [todo/TodoBase.ts:19](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L19)

Meta-information about the test case.

#### Inherited from

[`TodoBaseInterface`](TodoBaseInterface.md).[`testcaseMeta`](TodoBaseInterface.md#testcasemeta)
