import { TodoStatic } from '../src/index'

test('Instantiate', (done) => {
  const todoStatic = new TodoStatic()
  expect(todoStatic).toBeDefined()
  done()
})
