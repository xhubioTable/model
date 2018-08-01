import { TableInterface } from '../lib'

test('Instantiate', done => {
  const tableInterface = new TableInterface()
  expect(tableInterface).toBeDefined()
  done()
})
