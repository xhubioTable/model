import { TodoMeta, TableInterface } from '../lib/index'

test('Instantiate', done => {
  const todoMeta = new TodoMeta()
  expect(todoMeta).toBeDefined()
  done()
})

test('metaInformation empty', done => {
  const todoMeta = new TodoMeta()
  expect(todoMeta.metaInformation).toEqual({})
  done()
})

test('metaInformation', done => {
  const table = new TableInterface({
    name: 'hugo',
    meta: { tName: 'tableMetaName' },
  })

  Object.defineProperty(table, 'tableType', {
    get: () => {
      return 'dummyType'
    },
  })

  const todoMeta = new TodoMeta({
    table,
    meta: { metaName: 'otherName' },
    testcaseName: 'tcName',
  })
  expect(todoMeta.metaInformation).toEqual({
    metaName: 'otherName',
    tName: 'tableMetaName',
    tableName: 'hugo',
    tableType: 'dummyType',
    testcaseName: 'tcName',
  })
  done()
})
