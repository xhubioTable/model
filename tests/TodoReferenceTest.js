import { TodoReference } from '../lib/index'

test('Instantiate', done => {
  const todoReference = new TodoReference()
  expect(todoReference).toBeDefined()
  done()
})
