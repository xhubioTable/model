import { TodoField } from '../../src/index'

test('Schuld create an instance of the Todo', () => {
  const todo = new TodoField({
    fieldName: 'myField',
    testcaseMeta: {
      fileName: 'myFile',
      tableName: 'myTable',
      tableType: 'myTableType',
      testcaseName: 'myTestcaseName'
    },
    comment: 'myComment',
    key: 'myKey',
    other: 'myOther'
  })
  expect(todo).toBeDefined()
})
