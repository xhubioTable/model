[@xhubiotable/model](../README.md) / [Exports](../modules.md) / ActionDefinitionStatic

# Class: ActionDefinitionStatic

Defines the data common for all the todos.
This todo only contains meta data
The Todos defining actions which needs to be executed
to fill the testcases with data

## Hierarchy

- [`ActionDefinitionMeta`](ActionDefinitionMeta.md)

  ↳ **`ActionDefinitionStatic`**

## Table of contents

### Constructors

- [constructor](ActionDefinitionStatic.md#constructor)

### Properties

- [fieldName](ActionDefinitionStatic.md#fieldname)
- [meta](ActionDefinitionStatic.md#meta)
- [tableName](ActionDefinitionStatic.md#tablename)
- [tableType](ActionDefinitionStatic.md#tabletype)
- [testcaseMeta](ActionDefinitionStatic.md#testcasemeta)
- [testcaseName](ActionDefinitionStatic.md#testcasename)
- [value](ActionDefinitionStatic.md#value)

### Accessors

- [metaInformation](ActionDefinitionStatic.md#metainformation)

## Constructors

### constructor

• **new ActionDefinitionStatic**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ActionDefinitionStaticOptions` |

#### Overrides

[ActionDefinitionMeta](ActionDefinitionMeta.md).[constructor](ActionDefinitionMeta.md#constructor)

#### Defined in

[action/ActionDefinitionStatic.ts:22](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionStatic.ts#L22)

## Properties

### fieldName

• **fieldName**: `string`

The name of the filed in the table

#### Inherited from

[ActionDefinitionMeta](ActionDefinitionMeta.md).[fieldName](ActionDefinitionMeta.md#fieldname)

#### Defined in

[action/ActionDefinitionMeta.ts:29](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L29)

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

___

### value

• **value**: `string`

The static value

#### Defined in

[action/ActionDefinitionStatic.ts:20](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionStatic.ts#L20)

## Accessors

### metaInformation

• `get` **metaInformation**(): [`ActionMetaInformationInterface`](../interfaces/ActionMetaInformationInterface.md)

#### Returns

[`ActionMetaInformationInterface`](../interfaces/ActionMetaInformationInterface.md)

#### Inherited from

ActionDefinitionMeta.metaInformation

#### Defined in

[action/ActionDefinitionMeta.ts:58](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L58)
