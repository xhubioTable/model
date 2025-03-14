[**@xhubiotable/model**](../README.md)

***

[@xhubiotable/model](../globals.md) / TodoReferenceOptions

# Interface: TodoReferenceOptions

Defined in: [todo/TodoReference.ts:35](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L35)

Options for creating a TodoReference instance.

## Extends

- [`TodoBaseOptions`](TodoBaseOptions.md)

## Properties

### fieldName

> **fieldName**: `string`

Defined in: [todo/TodoBase.ts:14](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L14)

The name of the field associated with this todo.

#### Inherited from

[`TodoBaseOptions`](TodoBaseOptions.md).[`fieldName`](TodoBaseOptions.md#fieldname)

***

### instanceIdSuffix

> **instanceIdSuffix**: `string`

Defined in: [todo/TodoReference.ts:54](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L54)

The instance ID suffix used to uniquely identify this reference.

***

### targetFieldName

> **targetFieldName**: `string`

Defined in: [todo/TodoReference.ts:44](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L44)

The name of the target field in the referenced table.

***

### targetTableName

> **targetTableName**: `string`

Defined in: [todo/TodoReference.ts:39](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L39)

The name of the target table to which this reference points.

***

### targetTestcaseName

> **targetTestcaseName**: `string`

Defined in: [todo/TodoReference.ts:49](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L49)

The name of the target test case in the referenced table.

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](MetaTestcase.md)

Defined in: [todo/TodoBase.ts:19](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L19)

Meta-information about the test case.

#### Inherited from

[`TodoBaseOptions`](TodoBaseOptions.md).[`testcaseMeta`](TodoBaseOptions.md#testcasemeta)
