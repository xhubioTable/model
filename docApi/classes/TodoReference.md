[**@xhubiotable/model**](../README.md)

***

[@xhubiotable/model](../globals.md) / TodoReference

# Class: TodoReference

Defined in: [todo/TodoReference.ts:63](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L63)

Implementation of a todo item for a reference.

This class extends the base todo functionality by including properties specific to references,
such as target table, field, test case names, and an instance ID suffix.

## Extends

- [`TodoBase`](TodoBase.md)

## Implements

- [`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md)

## Constructors

### new TodoReference()

> **new TodoReference**(`opts`): [`TodoReference`](TodoReference.md)

Defined in: [todo/TodoReference.ts:75](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L75)

Constructs a new TodoReference instance.

#### Parameters

##### opts

[`TodoReferenceOptions`](../interfaces/TodoReferenceOptions.md)

Initialization options for the TodoReference, including base properties
              and specific reference details.

#### Returns

[`TodoReference`](TodoReference.md)

#### Overrides

[`TodoBase`](TodoBase.md).[`constructor`](TodoBase.md#constructors)

## Properties

### fieldName

> **fieldName**: `string`

Defined in: [todo/TodoBase.ts:37](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L37)

The name of the field associated with this todo.

#### Implementation of

[`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md).[`fieldName`](../interfaces/TodoReferenceInterface.md#fieldname)

#### Inherited from

[`TodoBase`](TodoBase.md).[`fieldName`](TodoBase.md#fieldname)

***

### instanceIdSuffix

> **instanceIdSuffix**: `string`

Defined in: [todo/TodoReference.ts:67](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L67)

The instance ID suffix used to uniquely identify this reference.

#### Implementation of

[`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md).[`instanceIdSuffix`](../interfaces/TodoReferenceInterface.md#instanceidsuffix)

***

### targetFieldName

> **targetFieldName**: `string`

Defined in: [todo/TodoReference.ts:65](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L65)

The name of the target field in the referenced table.

#### Implementation of

[`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md).[`targetFieldName`](../interfaces/TodoReferenceInterface.md#targetfieldname)

***

### targetTableName

> **targetTableName**: `string`

Defined in: [todo/TodoReference.ts:64](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L64)

The name of the target table to which this reference points.

#### Implementation of

[`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md).[`targetTableName`](../interfaces/TodoReferenceInterface.md#targettablename)

***

### targetTestcaseName

> **targetTestcaseName**: `string`

Defined in: [todo/TodoReference.ts:66](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoReference.ts#L66)

The name of the target test case in the referenced table.

#### Implementation of

[`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md).[`targetTestcaseName`](../interfaces/TodoReferenceInterface.md#targettestcasename)

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](../interfaces/MetaTestcase.md)

Defined in: [todo/TodoBase.ts:38](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/todo/TodoBase.ts#L38)

Meta-information about the test case.

#### Implementation of

[`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md).[`testcaseMeta`](../interfaces/TodoReferenceInterface.md#testcasemeta)

#### Inherited from

[`TodoBase`](TodoBase.md).[`testcaseMeta`](TodoBase.md#testcasemeta)
