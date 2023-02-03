[@xhubiotable/model](../README.md) / [Exports](../modules.md) / TestcaseDefinitionBase

# Class: TestcaseDefinitionBase

Defines the interface for a testcase definition

## Implements

- [`TestcaseDefinitionInterface`](../interfaces/TestcaseDefinitionInterface.md)

## Table of contents

### Constructors

- [constructor](TestcaseDefinitionBase.md#constructor)

### Properties

- [data](TestcaseDefinitionBase.md#data)
- [id](TestcaseDefinitionBase.md#id)
- [meta](TestcaseDefinitionBase.md#meta)
- [multiplicity](TestcaseDefinitionBase.md#multiplicity)
- [name](TestcaseDefinitionBase.md#name)
- [neverExecute](TestcaseDefinitionBase.md#neverexecute)
- [shouldExecute](TestcaseDefinitionBase.md#shouldexecute)
- [table](TestcaseDefinitionBase.md#table)

### Accessors

- [metaInformation](TestcaseDefinitionBase.md#metainformation)
- [tableMeta](TestcaseDefinitionBase.md#tablemeta)
- [tableName](TestcaseDefinitionBase.md#tablename)
- [tableType](TestcaseDefinitionBase.md#tabletype)

### Methods

- [createFilter](TestcaseDefinitionBase.md#createfilter)
- [createGeneratorSwitches](TestcaseDefinitionBase.md#creategeneratorswitches)
- [createTags](TestcaseDefinitionBase.md#createtags)
- [createTestcaseActions](TestcaseDefinitionBase.md#createtestcaseactions)

## Constructors

### constructor

• **new TestcaseDefinitionBase**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `TestcaseDefinitionBaseOptions` |

#### Defined in

[testcase/TestcaseDefinitionBase.ts:53](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L53)

## Properties

### data

• **data**: `string`

The data in the cell for this testcase

#### Implementation of

[TestcaseDefinitionInterface](../interfaces/TestcaseDefinitionInterface.md).[data](../interfaces/TestcaseDefinitionInterface.md#data)

#### Defined in

[testcase/TestcaseDefinitionBase.ts:39](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L39)

___

### id

• **id**: `string`

The id of this testcase

#### Implementation of

[TestcaseDefinitionInterface](../interfaces/TestcaseDefinitionInterface.md).[id](../interfaces/TestcaseDefinitionInterface.md#id)

#### Defined in

[testcase/TestcaseDefinitionBase.ts:33](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L33)

___

### meta

• **meta**: `any`

#### Implementation of

[TestcaseDefinitionInterface](../interfaces/TestcaseDefinitionInterface.md).[meta](../interfaces/TestcaseDefinitionInterface.md#meta)

#### Defined in

[testcase/TestcaseDefinitionBase.ts:42](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L42)

___

### multiplicity

• **multiplicity**: `number`

Defines how often this test case should be created

#### Implementation of

[TestcaseDefinitionInterface](../interfaces/TestcaseDefinitionInterface.md).[multiplicity](../interfaces/TestcaseDefinitionInterface.md#multiplicity)

#### Defined in

[testcase/TestcaseDefinitionBase.ts:36](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L36)

___

### name

• **name**: `string`

The name of this test case

#### Defined in

[testcase/TestcaseDefinitionBase.ts:30](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L30)

___

### neverExecute

• **neverExecute**: `boolean`

#### Implementation of

[TestcaseDefinitionInterface](../interfaces/TestcaseDefinitionInterface.md).[neverExecute](../interfaces/TestcaseDefinitionInterface.md#neverexecute)

#### Defined in

[testcase/TestcaseDefinitionBase.ts:51](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L51)

___

### shouldExecute

• **shouldExecute**: `boolean` = `true`

Should this test case be executed or is it only for a reference

#### Defined in

[testcase/TestcaseDefinitionBase.ts:48](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L48)

___

### table

• **table**: [`TableInterface`](../interfaces/TableInterface.md)

The table this testcase comes from

#### Implementation of

[TestcaseDefinitionInterface](../interfaces/TestcaseDefinitionInterface.md).[table](../interfaces/TestcaseDefinitionInterface.md#table)

#### Defined in

[testcase/TestcaseDefinitionBase.ts:45](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L45)

## Accessors

### metaInformation

• `get` **metaInformation**(): [`TableMetaInformationInterface`](../interfaces/TableMetaInformationInterface.md)

Returns the Metainformation if this test case

#### Returns

[`TableMetaInformationInterface`](../interfaces/TableMetaInformationInterface.md)

#### Defined in

[testcase/TestcaseDefinitionBase.ts:87](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L87)

___

### tableMeta

• `get` **tableMeta**(): `any`

The meta information of the stored table object

#### Returns

`any`

#### Defined in

[testcase/TestcaseDefinitionBase.ts:80](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L80)

___

### tableName

• `get` **tableName**(): `string`

The name of the table stored in the table object

#### Returns

`string`

#### Defined in

[testcase/TestcaseDefinitionBase.ts:73](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L73)

___

### tableType

• `get` **tableType**(): `TableType`

The table type of the table object

#### Returns

`TableType`

#### Defined in

[testcase/TestcaseDefinitionBase.ts:66](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L66)

## Methods

### createFilter

▸ **createFilter**(): [`TestcaseFilterInterface`](../interfaces/TestcaseFilterInterface.md)[]

Returns all the filter found in this test case

#### Returns

[`TestcaseFilterInterface`](../interfaces/TestcaseFilterInterface.md)[]

filter - An Array with all the found filter

#### Defined in

[testcase/TestcaseDefinitionBase.ts:109](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L109)

___

### createGeneratorSwitches

▸ **createGeneratorSwitches**(): `string`[]

Returns a list of generator names which should not be executed

#### Returns

`string`[]

generatorNames - An Array with alle the generator names to be switched off for this test case

#### Defined in

[testcase/TestcaseDefinitionBase.ts:117](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L117)

___

### createTags

▸ **createTags**(): `string`[]

Returns all the tags found in this test case

#### Returns

`string`[]

tags - An Array with all the found tags

#### Defined in

[testcase/TestcaseDefinitionBase.ts:101](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L101)

___

### createTestcaseActions

▸ **createTestcaseActions**(): [`TestcaseActionsInterface`](../interfaces/TestcaseActionsInterface.md)

Create all the actions for this testcase definition

**`See`**

TestcaseActionsInterface

#### Returns

[`TestcaseActionsInterface`](../interfaces/TestcaseActionsInterface.md)

testcaseActions -

#### Defined in

[testcase/TestcaseDefinitionBase.ts:125](https://github.com/xhubioTable/model/blob/d4f4ceb/src/testcase/TestcaseDefinitionBase.ts#L125)
