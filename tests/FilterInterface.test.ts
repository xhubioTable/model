import { FilterInterface } from '../src/index'

test('Instantiate', () => {
  const filter: FilterInterface = {
    expression: '',
    filterProcessorName: '',
    comment: ''
  }

  expect(filter).toBeDefined()
})
