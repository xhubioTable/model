import { TodoGenerator } from '../lib/index'

test('Instantiate', done => {
  const todoGenerator = new TodoGenerator()
  expect(todoGenerator).toBeDefined()
  done()
})
