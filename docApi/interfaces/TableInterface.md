[@xhubiotable/model](../README.md) / [Exports](../modules.md) / TableInterface

# Interface: TableInterface

## Table of contents

### Properties

- [getTestcaseForName](TableInterface.md#gettestcaseforname)
- [getTestcasesForExecution](TableInterface.md#gettestcasesforexecution)
- [meta](TableInterface.md#meta)
- [name](TableInterface.md#name)
- [processRanges](TableInterface.md#processranges)
- [tableType](TableInterface.md#tabletype)

## Properties

### getTestcaseForName

• **getTestcaseForName**: (`testcaseName`: `string`) => [`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md)

#### Type declaration

▸ (`testcaseName`): [`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md)

Returns the testcase for the given name. If not found it will throw an exception

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `testcaseName` | `string` | The name of the testcase |

##### Returns

[`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md)

testcaseDefinition - returns the testcase definition

#### Defined in

[table/TableInterface.ts:20](https://github.com/xhubioTable/model/blob/d4f4ceb/src/table/TableInterface.ts#L20)

___

### getTestcasesForExecution

• **getTestcasesForExecution**: () => `Generator`<[`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md), `void`, [`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md)\>

#### Type declaration

▸ (): `Generator`<[`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md), `void`, [`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md)\>

This generator returns all the testcases which should be executed

##### Returns

`Generator`<[`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md), `void`, [`TestcaseDefinitionInterface`](TestcaseDefinitionInterface.md)\>

A TestcaseDefinitionInterface for each call

#### Defined in

[table/TableInterface.ts:26](https://github.com/xhubioTable/model/blob/d4f4ceb/src/table/TableInterface.ts#L26)

___

### meta

• **meta**: `any`

Any meta information the table may have

#### Defined in

[table/TableInterface.ts:10](https://github.com/xhubioTable/model/blob/d4f4ceb/src/table/TableInterface.ts#L10)

___

### name

• **name**: `string`

The name of the table

#### Defined in

[table/TableInterface.ts:7](https://github.com/xhubioTable/model/blob/d4f4ceb/src/table/TableInterface.ts#L7)

___

### processRanges

• **processRanges**: (`testcaseName`: `string`) => `string`[]

#### Type declaration

▸ (`testcaseName`): `string`[]

Returns the testcase for the given name. If not found it will throw an exception

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `testcaseName` | `string` | The name of the testcase |

##### Returns

`string`[]

testcaseNames - returns an Array of test case names

#### Defined in

[table/TableInterface.ts:37](https://github.com/xhubioTable/model/blob/d4f4ceb/src/table/TableInterface.ts#L37)

___

### tableType

• **tableType**: `TableType`

The type of the table

#### Defined in

[table/TableInterface.ts:13](https://github.com/xhubioTable/model/blob/d4f4ceb/src/table/TableInterface.ts#L13)
