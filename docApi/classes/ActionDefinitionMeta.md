[@xhubiotable/model](../README.md) / [Exports](../modules.md) / ActionDefinitionMeta

# Class: ActionDefinitionMeta

Defines the data common for all the todos.
This todo only contains meta data
The Todos defining actions which needs to be executed
to fill the testcases with data

## Hierarchy

- **`ActionDefinitionMeta`**

  ↳ [`ActionDefinitionGenerator`](ActionDefinitionGenerator.md)

  ↳ [`ActionDefinitionReference`](ActionDefinitionReference.md)

  ↳ [`ActionDefinitionStatic`](ActionDefinitionStatic.md)

## Table of contents

### Constructors

- [constructor](ActionDefinitionMeta.md#constructor)

### Properties

- [fieldName](ActionDefinitionMeta.md#fieldname)
- [meta](ActionDefinitionMeta.md#meta)
- [tableName](ActionDefinitionMeta.md#tablename)
- [tableType](ActionDefinitionMeta.md#tabletype)
- [testcaseMeta](ActionDefinitionMeta.md#testcasemeta)
- [testcaseName](ActionDefinitionMeta.md#testcasename)

### Accessors

- [metaInformation](ActionDefinitionMeta.md#metainformation)

## Constructors

### constructor

• **new ActionDefinitionMeta**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ActionDefinitionMetaOptions` |

#### Defined in

[action/ActionDefinitionMeta.ts:43](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L43)

## Properties

### fieldName

• **fieldName**: `string`

The name of the filed in the table

#### Defined in

[action/ActionDefinitionMeta.ts:29](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L29)

___

### meta

• **meta**: `any`

#### Defined in

[action/ActionDefinitionMeta.ts:40](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L40)

___

### tableName

• **tableName**: `string`

The name of the table

#### Defined in

[action/ActionDefinitionMeta.ts:35](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L35)

___

### tableType

• **tableType**: `TableType`

The type of this table

#### Defined in

[action/ActionDefinitionMeta.ts:38](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L38)

___

### testcaseMeta

• **testcaseMeta**: `any`

#### Defined in

[action/ActionDefinitionMeta.ts:41](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L41)

___

### testcaseName

• **testcaseName**: `string`

The name of the test case

#### Defined in

[action/ActionDefinitionMeta.ts:32](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L32)

## Accessors

### metaInformation

• `get` **metaInformation**(): [`ActionMetaInformationInterface`](../interfaces/ActionMetaInformationInterface.md)

#### Returns

[`ActionMetaInformationInterface`](../interfaces/ActionMetaInformationInterface.md)

#### Defined in

[action/ActionDefinitionMeta.ts:58](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L58)
