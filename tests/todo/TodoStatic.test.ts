import { TodoStatic } from '../../src/index'

test('Schuld create an instance of the Todo', () => {
  const todo = new TodoStatic({
    fieldName: 'myField',
    testcaseMeta: {
      fileName: 'myFile',
      tableName: 'myTable',
      tableType: 'myTableType',
      testcaseName: 'myTestcaseName'
    },
    value: 'myValue'
  })
  expect(todo).toBeDefined()
})
