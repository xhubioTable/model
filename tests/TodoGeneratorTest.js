import { TodoGenerator } from '../src/index'

test('Instantiate', (done) => {
  const todoGenerator = new TodoGenerator()
  expect(todoGenerator).toBeDefined()
  done()
})
