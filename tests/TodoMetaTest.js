import { TodoMeta } from '../src/index'

test('Instantiate', (done) => {
  const todoMeta = new TodoMeta()
  expect(todoMeta).toBeDefined()
  done()
})

test('metaInformation empty', (done) => {
  const todoMeta = new TodoMeta()
  expect(todoMeta.metaInformation).toEqual({
    meta: {},
    tableName: undefined,
    tableType: undefined,
    testcaseName: undefined,
    tableMeta: undefined,
  })
  done()
})

test('metaInformation', (done) => {
  const todoMeta = new TodoMeta({
    tableName: 'hugo',
    tableType: 'dummyType',
    testcaseMeta: { tName: 'tableMetaName' },
    meta: { metaName: 'otherName' },
    testcaseName: 'tcName',
  })
  expect(todoMeta.metaInformation).toEqual({
    meta: { metaName: 'otherName' },
    tableName: 'hugo',
    tableType: 'dummyType',
    testcaseName: 'tcName',
    testcaseMeta: { tName: 'tableMetaName' },
  })
  done()
})
