import { TestcaseDefinitionInterface } from '../lib'

test('Instantiate', done => {
  const testcaseDefinitionInterface = new TestcaseDefinitionInterface()
  expect(testcaseDefinitionInterface).toBeDefined()
  done()
})
