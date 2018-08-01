import { TodoStatic } from '../lib'

test('Instantiate', done => {
  const todoStatic = new TodoStatic()
  expect(todoStatic).toBeDefined()
  done()
})
