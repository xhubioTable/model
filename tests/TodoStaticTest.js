import { TodoStatic } from '../lib/index'

test('Instantiate', done => {
  const todoStatic = new TodoStatic()
  expect(todoStatic).toBeDefined()
  done()
})
