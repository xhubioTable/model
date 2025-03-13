[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / TodoGenerator

# Class: TodoGenerator

Defined in: todo/TodoGenerator.ts:65

Implementation of a todo item for calling a generator.

This class extends the base todo functionality and adds properties specific to
generator invocation, such as the generator name, configuration parameters, instance ID suffix,
and execution order.

## Extends

- [`TodoBase`](TodoBase.md)

## Implements

- [`TodoGeneratorInterface`](../interfaces/TodoGeneratorInterface.md)

## Constructors

### new TodoGenerator()

> **new TodoGenerator**(`opts`): [`TodoGenerator`](TodoGenerator.md)

Defined in: todo/TodoGenerator.ts:77

Constructs a new TodoGenerator instance.

#### Parameters

##### opts

[`TodoGeneratorOptions`](../interfaces/TodoGeneratorOptions.md)

Initialization options for the TodoGenerator, including base properties
              and specific details required for generator invocation.

#### Returns

[`TodoGenerator`](TodoGenerator.md)

#### Overrides

[`TodoBase`](TodoBase.md).[`constructor`](TodoBase.md#constructors)

## Properties

### config

> **config**: `string`

Defined in: todo/TodoGenerator.ts:67

The configuration or parameters for this generator call.

#### Implementation of

[`TodoGeneratorInterface`](../interfaces/TodoGeneratorInterface.md).[`config`](../interfaces/TodoGeneratorInterface.md#config)

***

### fieldName

> **fieldName**: `string`

Defined in: todo/TodoBase.ts:37

The name of the field associated with this todo.

#### Implementation of

[`TodoGeneratorInterface`](../interfaces/TodoGeneratorInterface.md).[`fieldName`](../interfaces/TodoGeneratorInterface.md#fieldname)

#### Inherited from

[`TodoBase`](TodoBase.md).[`fieldName`](TodoBase.md#fieldname)

***

### generatorName

> **generatorName**: `string`

Defined in: todo/TodoGenerator.ts:66

The name of the generator to be invoked.

#### Implementation of

[`TodoGeneratorInterface`](../interfaces/TodoGeneratorInterface.md).[`generatorName`](../interfaces/TodoGeneratorInterface.md#generatorname)

***

### instanceIdSuffix

> **instanceIdSuffix**: `string`

Defined in: todo/TodoGenerator.ts:68

The suffix for the instanceId to distinguish multiple calls.

#### Implementation of

[`TodoGeneratorInterface`](../interfaces/TodoGeneratorInterface.md).[`instanceIdSuffix`](../interfaces/TodoGeneratorInterface.md#instanceidsuffix)

***

### order

> **order**: `number`

Defined in: todo/TodoGenerator.ts:69

Determines the execution order of generator todos.
Lower numbers are executed before higher numbers.

#### Implementation of

[`TodoGeneratorInterface`](../interfaces/TodoGeneratorInterface.md).[`order`](../interfaces/TodoGeneratorInterface.md#order)

***

### testcaseMeta

> **testcaseMeta**: [`MetaTestcase`](../interfaces/MetaTestcase.md)

Defined in: todo/TodoBase.ts:38

Meta-information about the test case.

#### Implementation of

[`TodoGeneratorInterface`](../interfaces/TodoGeneratorInterface.md).[`testcaseMeta`](../interfaces/TodoGeneratorInterface.md#testcasemeta)

#### Inherited from

[`TodoBase`](TodoBase.md).[`testcaseMeta`](TodoBase.md#testcasemeta)
