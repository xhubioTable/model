/* eslint-disable @typescript-eslint/indent,generator-star-spacing,@typescript-eslint/consistent-type-assertions */

import { TableType } from '../../src/TableType'
import {
  TestcaseDefinitionBase,
  TableInterface,
  TestcaseDefinitionInterface
} from '../../src/index'
import { TestcaseDefinitionBaseOptions } from '../../src/testcase/TestcaseDefinitionBase'

class DefaultTableClass implements TableInterface {
  name: string = 'hugo'
  meta: any = { tName: 'tableMetaName' }
  tableType: TableType = TableType.decissionTable

  getTestcaseForName(testcaseName: string): TestcaseDefinitionInterface {
    return {} as TestcaseDefinitionInterface
  }

  *getTestcasesForExecution(): Generator<
    TestcaseDefinitionInterface,
    void,
    TestcaseDefinitionInterface
  > {
    for (let i = 0; i < 3; i++) {
      const td: TestcaseDefinitionInterface = {} as TestcaseDefinitionInterface
      yield td
    }
  }

  processRanges(testcaseName: string): string[] {
    return [testcaseName]
  }
}

const defaultTestcaseDefinitionOptions: TestcaseDefinitionBaseOptions = {
  name: 'myName',

  /** The data in the cell for this testcase */
  data: 'A data string',

  // Some meta information.  The format depends on the table
  meta: {
    here: 'there',
    one: 'two'
  },

  /** The table this testcase comes from */
  table: new DefaultTableClass()
}

test('Instantiate', (done) => {
  const testcaseDefinitionBase = new TestcaseDefinitionBase(
    defaultTestcaseDefinitionOptions
  )

  expect(testcaseDefinitionBase).toBeDefined()
  done()
})

test('meta', (done) => {
  const testcaseDefinitionBase = new TestcaseDefinitionBase(
    defaultTestcaseDefinitionOptions
  )

  const meta = testcaseDefinitionBase.metaInformation

  expect(meta).toEqual({
    meta: {
      here: 'there',
      one: 'two'
    },
    tableMeta: {
      tName: 'tableMetaName'
    },
    tableName: 'hugo',
    tableType: TableType.decissionTable,
    testcaseName: 'myName'
  })
  done()
})
