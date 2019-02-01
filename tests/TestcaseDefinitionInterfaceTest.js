import { TestcaseDefinitionInterface, TableInterface } from '../lib/index'

test('Instantiate', done => {
  const testcaseDefinitionInterface = new TestcaseDefinitionInterface()
  expect(testcaseDefinitionInterface).toBeDefined()
  done()
})

test('meta', done => {
  const table = new TableInterface({
    name: 'hugo',
    meta: { tName: 'tableMetaName' },
  })
  Object.defineProperty(table, 'tableType', {
    get: () => {
      return 'dummyType'
    },
  })

  const testcaseDefinitionInterface = new TestcaseDefinitionInterface({
    data: 'myDat',
    table,
    meta: { here: 'there', one: 'two' },
  })

  const meta = testcaseDefinitionInterface.metaInformation

  expect(meta).toEqual({
    meta: {
      here: 'there',
      one: 'two',
    },
    tableMeta: {
      tName: 'tableMetaName',
    },
    tableName: 'hugo',
    tableType: 'dummyType',
    testcaseName: '',
  })
  done()
})
