import { TodoReference } from '../../src/index'

test('Schuld create an instance of the Todo', () => {
  const todo = new TodoReference({
    fieldName: 'myField',
    testcaseMeta: {
      fileName: 'myFile',
      tableName: 'myTable',
      tableType: 'myTableType',
      testcaseName: 'myTestcaseName'
    },
    instanceIdSuffix: 'mySuffix',
    targetFieldName: 'myTargetFieldName',
    targetTableName: 'myTargetTableName',
    targetTestcaseName: 'myTargetTestcaseName'
  })
  expect(todo).toBeDefined()
})
