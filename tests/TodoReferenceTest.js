import { TodoReference } from '../src/index'

test('Instantiate', (done) => {
  const todoReference = new TodoReference()
  expect(todoReference).toBeDefined()
  done()
})
