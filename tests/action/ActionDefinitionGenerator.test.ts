import { ActionDefinitionMeta } from '../../src/index'
import { ActionDefinitionMetaOptions } from '../../src/action/ActionDefinitionMeta'
import { TableType } from '../../src/TableType'

const defaultOptions: ActionDefinitionMetaOptions = {
  fieldName: 'myFieldName',
  testcaseName: 'tcName',
  tableName: 'hugo',
  tableType: TableType.decissionTable,
  meta: { metaName: 'otherName' },
  testcaseMeta: { tName: 'tableMetaName' }
}

test('Instantiate', () => {
  const todoMeta = new ActionDefinitionMeta(defaultOptions)
  expect(todoMeta).toBeDefined()
})

test('metaInformation empty', () => {
  const todoMeta = new ActionDefinitionMeta({ ...defaultOptions, meta: {} })
  expect(todoMeta.metaInformation).toEqual({
    meta: {},
    tableName: 'hugo',
    tableType: TableType.decissionTable,
    testcaseName: 'tcName',
    testcaseMeta: { tName: 'tableMetaName' }
  })
})

test('metaInformation', () => {
  const todoMeta = new ActionDefinitionMeta(defaultOptions)
  expect(todoMeta.metaInformation).toEqual({
    meta: { metaName: 'otherName' },
    tableName: 'hugo',
    tableType: TableType.decissionTable,
    testcaseName: 'tcName',
    testcaseMeta: { tName: 'tableMetaName' }
  })
})
