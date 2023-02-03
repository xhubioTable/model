[@xhubiotable/model](../README.md) / [Exports](../modules.md) / ActionDefinitionReference

# Class: ActionDefinitionReference

Defines the data common for all the todos.
This todo only contains meta data
The Todos defining actions which needs to be executed
to fill the testcases with data

## Hierarchy

- [`ActionDefinitionMeta`](ActionDefinitionMeta.md)

  ↳ **`ActionDefinitionReference`**

## Table of contents

### Constructors

- [constructor](ActionDefinitionReference.md#constructor)

### Properties

- [fieldName](ActionDefinitionReference.md#fieldname)
- [instanceIdSuffix](ActionDefinitionReference.md#instanceidsuffix)
- [meta](ActionDefinitionReference.md#meta)
- [tableName](ActionDefinitionReference.md#tablename)
- [tableType](ActionDefinitionReference.md#tabletype)
- [targetFieldName](ActionDefinitionReference.md#targetfieldname)
- [targetTableName](ActionDefinitionReference.md#targettablename)
- [targetTestcaseName](ActionDefinitionReference.md#targettestcasename)
- [testcaseMeta](ActionDefinitionReference.md#testcasemeta)
- [testcaseName](ActionDefinitionReference.md#testcasename)

### Accessors

- [metaInformation](ActionDefinitionReference.md#metainformation)

## Constructors

### constructor

• **new ActionDefinitionReference**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ActionDefinitionReferenceOptions` |

#### Overrides

[ActionDefinitionMeta](ActionDefinitionMeta.md).[constructor](ActionDefinitionMeta.md#constructor)

#### Defined in

[action/ActionDefinitionReference.ts:41](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionReference.ts#L41)

## Properties

### fieldName

• **fieldName**: `string`

The name of the filed in the table

#### Inherited from

[ActionDefinitionMeta](ActionDefinitionMeta.md).[fieldName](ActionDefinitionMeta.md#fieldname)

#### Defined in

[action/ActionDefinitionMeta.ts:29](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L29)

___

### instanceIdSuffix

• **instanceIdSuffix**: `TableType`

The instanceIdSuffix

#### Defined in

[action/ActionDefinitionReference.ts:39](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionReference.ts#L39)

___

### meta

• **meta**: `any`

#### Inherited from

[ActionDefinitionMeta](ActionDefinitionMeta.md).[meta](ActionDefinitionMeta.md#meta)

#### Defined in

[action/ActionDefinitionMeta.ts:40](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L40)

___

### tableName

• **tableName**: `string`

The name of the table

#### Inherited from

[ActionDefinitionMeta](ActionDefinitionMeta.md).[tableName](ActionDefinitionMeta.md#tablename)

#### Defined in

[action/ActionDefinitionMeta.ts:35](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L35)

___

### tableType

• **tableType**: `TableType`

The type of this table

#### Inherited from

[ActionDefinitionMeta](ActionDefinitionMeta.md).[tableType](ActionDefinitionMeta.md#tabletype)

#### Defined in

[action/ActionDefinitionMeta.ts:38](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L38)

___

### targetFieldName

• **targetFieldName**: `string`

The name of the target field

#### Defined in

[action/ActionDefinitionReference.ts:33](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionReference.ts#L33)

___

### targetTableName

• **targetTableName**: `string`

The name of the target table

#### Defined in

[action/ActionDefinitionReference.ts:30](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionReference.ts#L30)

___

### targetTestcaseName

• **targetTestcaseName**: `string`

The name of the target test case

#### Defined in

[action/ActionDefinitionReference.ts:36](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionReference.ts#L36)

___

### testcaseMeta

• **testcaseMeta**: `any`

#### Inherited from

[ActionDefinitionMeta](ActionDefinitionMeta.md).[testcaseMeta](ActionDefinitionMeta.md#testcasemeta)

#### Defined in

[action/ActionDefinitionMeta.ts:41](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L41)

___

### testcaseName

• **testcaseName**: `string`

The name of the test case

#### Inherited from

[ActionDefinitionMeta](ActionDefinitionMeta.md).[testcaseName](ActionDefinitionMeta.md#testcasename)

#### Defined in

[action/ActionDefinitionMeta.ts:32](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L32)

## Accessors

### metaInformation

• `get` **metaInformation**(): [`ActionMetaInformationInterface`](../interfaces/ActionMetaInformationInterface.md)

#### Returns

[`ActionMetaInformationInterface`](../interfaces/ActionMetaInformationInterface.md)

#### Inherited from

ActionDefinitionMeta.metaInformation

#### Defined in

[action/ActionDefinitionMeta.ts:58](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L58)
