import { TodoReference } from '../lib'

test('Instantiate', done => {
  const todoReference = new TodoReference()
  expect(todoReference).toBeDefined()
  done()
})
