[@xhubiotable/model](../README.md) / [Exports](../modules.md) / ActionDefinitionGenerator

# Class: ActionDefinitionGenerator

Defines the data common for all the todos.
This todo only contains meta data
The Todos defining actions which needs to be executed
to fill the testcases with data

## Hierarchy

- [`ActionDefinitionMeta`](ActionDefinitionMeta.md)

  ↳ **`ActionDefinitionGenerator`**

## Table of contents

### Constructors

- [constructor](ActionDefinitionGenerator.md#constructor)

### Properties

- [config](ActionDefinitionGenerator.md#config)
- [fieldName](ActionDefinitionGenerator.md#fieldname)
- [generatorName](ActionDefinitionGenerator.md#generatorname)
- [instanceIdSuffix](ActionDefinitionGenerator.md#instanceidsuffix)
- [meta](ActionDefinitionGenerator.md#meta)
- [order](ActionDefinitionGenerator.md#order)
- [tableName](ActionDefinitionGenerator.md#tablename)
- [tableType](ActionDefinitionGenerator.md#tabletype)
- [testcaseMeta](ActionDefinitionGenerator.md#testcasemeta)
- [testcaseName](ActionDefinitionGenerator.md#testcasename)

### Accessors

- [metaInformation](ActionDefinitionGenerator.md#metainformation)

## Constructors

### constructor

• **new ActionDefinitionGenerator**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ActionDefinitionGeneratorOptions` |

#### Overrides

[ActionDefinitionMeta](ActionDefinitionMeta.md).[constructor](ActionDefinitionMeta.md#constructor)

#### Defined in

[action/ActionDefinitionGenerator.ts:41](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionGenerator.ts#L41)

## Properties

### config

• **config**: `string`

Parameter for the geneartor call

#### Defined in

[action/ActionDefinitionGenerator.ts:33](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionGenerator.ts#L33)

___

### fieldName

• **fieldName**: `string`

The name of the filed in the table

#### Inherited from

[ActionDefinitionMeta](ActionDefinitionMeta.md).[fieldName](ActionDefinitionMeta.md#fieldname)

#### Defined in

[action/ActionDefinitionMeta.ts:29](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L29)

___

### generatorName

• **generatorName**: `string`

The name of the generator

#### Defined in

[action/ActionDefinitionGenerator.ts:30](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionGenerator.ts#L30)

___

### instanceIdSuffix

• **instanceIdSuffix**: `TableType`

The instanceIdSuffix

#### Defined in

[action/ActionDefinitionGenerator.ts:36](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionGenerator.ts#L36)

___

### meta

• **meta**: `any`

#### Inherited from

[ActionDefinitionMeta](ActionDefinitionMeta.md).[meta](ActionDefinitionMeta.md#meta)

#### Defined in

[action/ActionDefinitionMeta.ts:40](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L40)

___

### order

• **order**: `number`

A number to order the generators. The generators are called in this order

#### Defined in

[action/ActionDefinitionGenerator.ts:39](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionGenerator.ts#L39)

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

## Accessors

### metaInformation

• `get` **metaInformation**(): [`ActionMetaInformationInterface`](../interfaces/ActionMetaInformationInterface.md)

#### Returns

[`ActionMetaInformationInterface`](../interfaces/ActionMetaInformationInterface.md)

#### Inherited from

ActionDefinitionMeta.metaInformation

#### Defined in

[action/ActionDefinitionMeta.ts:58](https://github.com/xhubioTable/model/blob/d4f4ceb/src/action/ActionDefinitionMeta.ts#L58)
