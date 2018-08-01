import { TodoGenerator } from '../lib'

test('Instantiate', done => {
  const todoGenerator = new TodoGenerator()
  expect(todoGenerator).toBeDefined()
  done()
})
