import { TodoGenerator } from '../../src/index'

test('Schuld create an instance of the Todo', () => {
  const todo = new TodoGenerator({
    fieldName: 'myField',
    testcaseMeta: {
      fileName: 'myFile',
      tableName: 'myTable',
      tableType: 'myTableType',
      testcaseName: 'myTestcaseName'
    },
    config: 'myConfig',
    generatorName: 'myGenerator',
    instanceIdSuffix: 'mySuffix',
    order: 1000
  })
  expect(todo).toBeDefined()
})
