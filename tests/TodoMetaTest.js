import { TodoMeta } from '../lib'

test('Instantiate', done => {
  const todoMeta = new TodoMeta()
  expect(todoMeta).toBeDefined()
  done()
})
