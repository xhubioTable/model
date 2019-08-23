## Classes

<dl>
<dt><a href="#TableInterface">TableInterface</a></dt>
<dd><p>Defines the interface for a table. All the table models must Implement
this interface.</p>
</dd>
<dt><a href="#TestcaseDefinitionInterface">TestcaseDefinitionInterface</a></dt>
<dd><p>Defines the interface for a testcase definition</p>
</dd>
<dt><a href="#TodoGenerator">TodoGenerator</a></dt>
<dd><p>Defines the todo for calling a generator.
When processing a table all the generator calls are collected
in a list of Todos.
Then the list of todos will be executed untill each generator has generated
its data.</p>
</dd>
<dt><a href="#TodoMeta">TodoMeta</a></dt>
<dd><p>Defines the data common for all the todos.
This todo only contains meta data
The Todos defining actions which needs to be executed
to fill the testcases with data</p>
</dd>
<dt><a href="#TodoReference">TodoReference</a></dt>
<dd><p>Defines the todo for calling a generator</p>
</dd>
<dt><a href="#TodoStatic">TodoStatic</a></dt>
<dd><p>Defines the todo for static values</p>
</dd>
</dl>

<a name="TableInterface"></a>

## TableInterface
Defines the interface for a table. All the table models must Implement
this interface.

**Kind**: global class  

* [TableInterface](#TableInterface)
    * [.name](#TableInterface+name)
    * [.meta](#TableInterface+meta)
    * [.tableType](#TableInterface+tableType)
    * [.getTestcaseForName(testcaseName)](#TableInterface+getTestcaseForName) ⇒ <code>object</code>
    * [.getTestcasesForExecution()](#TableInterface+getTestcasesForExecution)
    * [.processRanges(testcaseName)](#TableInterface+processRanges) ⇒ <code>array</code>

<a name="TableInterface+name"></a>

### tableInterface.name
The name of this table

**Kind**: instance property of [<code>TableInterface</code>](#TableInterface)  
<a name="TableInterface+meta"></a>

### tableInterface.meta
Any meta information the table may have.
For example the original file name.

**Kind**: instance property of [<code>TableInterface</code>](#TableInterface)  
<a name="TableInterface+tableType"></a>

### tableInterface.tableType
The type of this table

**Kind**: instance property of [<code>TableInterface</code>](#TableInterface)  
<a name="TableInterface+getTestcaseForName"></a>

### tableInterface.getTestcaseForName(testcaseName) ⇒ <code>object</code>
Returns the testcase for the given name. If not found it will throw an exception

**Kind**: instance method of [<code>TableInterface</code>](#TableInterface)  
**Returns**: <code>object</code> - testcaseDefinition  returns the testcase definition  

| Param | Type | Description |
| --- | --- | --- |
| testcaseName | <code>string</code> | The name of the testcase |

<a name="TableInterface+getTestcasesForExecution"></a>

### tableInterface.getTestcasesForExecution()
This generator returns all the testcases which should be executed

**Kind**: instance method of [<code>TableInterface</code>](#TableInterface)  
<a name="TableInterface+processRanges"></a>

### tableInterface.processRanges(testcaseName) ⇒ <code>array</code>
Parses a testcase name. If the name is a range it will return an
Array of names. For example the name 'tc12-14' will be expanded to:
tc12, tc13, tc14
This is a helper method

**Kind**: instance method of [<code>TableInterface</code>](#TableInterface)  
**Returns**: <code>array</code> - tcNames  An array of test case names  

| Param | Type | Description |
| --- | --- | --- |
| testcaseName | <code>string</code> | The reference test case name |

<a name="TestcaseDefinitionInterface"></a>

## TestcaseDefinitionInterface
Defines the interface for a testcase definition

**Kind**: global class  

* [TestcaseDefinitionInterface](#TestcaseDefinitionInterface)
    * [.id](#TestcaseDefinitionInterface+id)
    * [.multiplicity](#TestcaseDefinitionInterface+multiplicity)
    * [.data](#TestcaseDefinitionInterface+data)
    * [.table](#TestcaseDefinitionInterface+table)
    * [.neverExecute](#TestcaseDefinitionInterface+neverExecute)
    * [.tableType](#TestcaseDefinitionInterface+tableType)
    * [.tableName](#TestcaseDefinitionInterface+tableName)
    * [.tableMeta](#TestcaseDefinitionInterface+tableMeta)
    * [.execute](#TestcaseDefinitionInterface+execute)
    * [.name](#TestcaseDefinitionInterface+name)
    * [.createTags()](#TestcaseDefinitionInterface+createTags) ⇒ <code>array</code>
    * [.createFilter()](#TestcaseDefinitionInterface+createFilter) ⇒ <code>array</code>
    * [.createGeneratorSwitches()](#TestcaseDefinitionInterface+createGeneratorSwitches) ⇒ <code>array</code>
    * [.createTodos()](#TestcaseDefinitionInterface+createTodos)

<a name="TestcaseDefinitionInterface+id"></a>

### testcaseDefinitionInterface.id
The id of this testcase

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+multiplicity"></a>

### testcaseDefinitionInterface.multiplicity
Defines how often this test case should be created

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+data"></a>

### testcaseDefinitionInterface.data
The data in the cell for this testcase

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+table"></a>

### testcaseDefinitionInterface.table
The table this testcase comes from

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+neverExecute"></a>

### testcaseDefinitionInterface.neverExecute
Should this test case never be executed. This means if this test case
is referenced from an other test case it will not be executed

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+tableType"></a>

### testcaseDefinitionInterface.tableType
The table type of the table object

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+tableName"></a>

### testcaseDefinitionInterface.tableName
The name of the table stored in the table object

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+tableMeta"></a>

### testcaseDefinitionInterface.tableMeta
The meta information of the stored table object

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+execute"></a>

### testcaseDefinitionInterface.execute
Should this test case be executed or is it only for a reference

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+name"></a>

### testcaseDefinitionInterface.name
The name of this testcase. With this name the
testcase could be found in the table

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+createTags"></a>

### testcaseDefinitionInterface.createTags() ⇒ <code>array</code>
Returns all the tags found in this test case

**Kind**: instance method of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
**Returns**: <code>array</code> - tags  An Array with all the found tags  
<a name="TestcaseDefinitionInterface+createFilter"></a>

### testcaseDefinitionInterface.createFilter() ⇒ <code>array</code>
Returns all the filter found in this test case

**Kind**: instance method of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
**Returns**: <code>array</code> - filter  An Array with all the found filter  
<a name="TestcaseDefinitionInterface+createGeneratorSwitches"></a>

### testcaseDefinitionInterface.createGeneratorSwitches() ⇒ <code>array</code>
Returns a list of generator names which should not be executed

**Kind**: instance method of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
**Returns**: <code>array</code> - generatorNames  An Array with alle the generator names to be switched off for this test case  
<a name="TestcaseDefinitionInterface+createTodos"></a>

### testcaseDefinitionInterface.createTodos()
Create all the todos for this testcase definition
const todos = {
  generators :[genTodo,],
  references: [refTodo,],
  static: [staticData],
}

**Kind**: instance method of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TodoGenerator"></a>

## TodoGenerator
Defines the todo for calling a generator.
When processing a table all the generator calls are collected
in a list of Todos.
Then the list of todos will be executed untill each generator has generated
its data.

**Kind**: global class  
<a name="TodoMeta"></a>

## TodoMeta
Defines the data common for all the todos.
This todo only contains meta data
The Todos defining actions which needs to be executed
to fill the testcases with data

**Kind**: global class  
<a name="TodoReference"></a>

## TodoReference
Defines the todo for calling a generator

**Kind**: global class  
<a name="TodoStatic"></a>

## TodoStatic
Defines the todo for static values

**Kind**: global class  
