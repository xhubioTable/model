import { TableInterface } from '../lib/index'

test('Instantiate', done => {
  const tableInterface = new TableInterface()
  expect(tableInterface).toBeDefined()
  done()
})
