import { TableInterface } from '../src/index'

test('Instantiate', (done) => {
  const tableInterface = new TableInterface()
  expect(tableInterface).toBeDefined()
  done()
})
