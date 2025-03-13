[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / TodoReference

# Class: TodoReference

Defined in: todo/TodoReference.ts:63

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

Defined in: todo/TodoReference.ts:75

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

Defined in: todo/TodoBase.ts:37

The name of the field associated with this todo.

#### Implementation of

[`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md).[`fieldName`](../interfaces/TodoReferenceInterface.md#fieldname)

#### Inherited from

[`TodoBase`](TodoBase.md).[`fieldName`](TodoBase.md#fieldname)

***

### instanceIdSuffix

> **instanceIdSuffix**: `string`

Defined in: todo/TodoReference.ts:67

The instance ID suffix used to uniquely identify this reference.

#### Implementation of

[`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md).[`instanceIdSuffix`](../interfaces/TodoReferenceInterface.md#instanceidsuffix)

***

### targetFieldName

> **targetFieldName**: `string`

Defined in: todo/TodoReference.ts:65

The name of the target field in the referenced table.

#### Implementation of

[`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md).[`targetFieldName`](../interfaces/TodoReferenceInterface.md#targetfieldname)

***

### targetTableName

> **targetTableName**: `string`

Defined in: todo/TodoReference.ts:64

The name of the target table to which this reference points.

#### Implementation of

[`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md).[`targetTableName`](../interfaces/TodoReferenceInterface.md#targettablename)

***

### targetTestcaseName

> **targetTestcaseName**: `string`

Defined in: todo/TodoReference.ts:66

The name of the target test case in the referenced table.

#### Implementation of

[`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md).[`targetTestcaseName`](../interfaces/TodoReferenceInterface.md#targettestcasename)

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](../interfaces/MetaTestcase.md)

Defined in: todo/TodoBase.ts:38

Meta-information about the test case.

#### Implementation of

[`TodoReferenceInterface`](../interfaces/TodoReferenceInterface.md).[`testcaseMeta`](../interfaces/TodoReferenceInterface.md#testcasemeta)

#### Inherited from

[`TodoBase`](TodoBase.md).[`testcaseMeta`](TodoBase.md#testcasemeta)
