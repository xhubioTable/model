import { ActionDefinitionGenerator } from '../../src/index'
import { ActionDefinitionGeneratorOptions } from '../../src/action/ActionDefinitionGenerator'
import { TableType } from '../../src/TableType'

const defaultOptions: ActionDefinitionGeneratorOptions = {
  /** The name of the filed in the table */
  fieldName: 'myFieldName',

  /** The name of the test case */
  testcaseName: 'tcName',

  /** The name of the table */
  tableName: 'hugo',

  /** The type of this table */
  tableType: TableType.decissionTable,

  meta: { metaName: 'otherName' },
  testcaseMeta: {},

  /** The name of the generator */
  generatorName: 'tableGeneratorName',

  /** Parameter for the generator call */
  config: '',

  /** The instanceIdSuffix */
  instanceIdSuffix: TableType.decissionTable,

  /** A number to order the generators. The generators are called in this order */
  order: 1000
}

test('Instantiate', () => {
  const actionDefinitionGenerator = new ActionDefinitionGenerator(
    defaultOptions
  )
  expect(actionDefinitionGenerator).toBeDefined()
})

test('metaInformation empty', () => {
  const actionDefinitionGenerator = new ActionDefinitionGenerator({
    ...defaultOptions,
    meta: {}
  })
  expect(actionDefinitionGenerator.metaInformation).toEqual({
    meta: {},
    tableName: 'hugo',
    tableType: TableType.decissionTable,
    testcaseName: 'tcName',
    testcaseMeta: {}
  })
})

test('metaInformation', () => {
  const actionDefinitionGenerator = new ActionDefinitionGenerator(
    defaultOptions
  )
  expect(actionDefinitionGenerator.metaInformation).toEqual({
    meta: { metaName: 'otherName' },
    tableName: 'hugo',
    tableType: TableType.decissionTable,
    testcaseName: 'tcName',
    testcaseMeta: {}
  })
})
