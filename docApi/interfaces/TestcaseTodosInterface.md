[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / TestcaseTodosInterface

# Interface: TestcaseTodosInterface

Defined in: TestcaseTodosInterface.ts:12

Represents all the todo items associated with a single test case.

A "todo" item defines a specific task or operation that must be executed
to construct the test case and/or generate its associated data.

## Properties

### field

> **field**: [`TodoFieldInterface`](TodoFieldInterface.md)[]

Defined in: TestcaseTodosInterface.ts:39

An array of field todos.

These todos are responsible for processing individual field values within the test case.

***

### generator

> **generator**: [`TodoGeneratorInterface`](TodoGeneratorInterface.md)[]

Defined in: TestcaseTodosInterface.ts:18

An array of todos for invoking data generators.

These todos represent generator calls that need to be executed to produce dynamic test case data.

***

### reference

> **reference**: [`TodoReferenceInterface`](TodoReferenceInterface.md)[]

Defined in: TestcaseTodosInterface.ts:25

An array of reference todos.

These todos manage the resolution of references between test cases or data elements.

***

### static

> **static**: [`TodoStaticInterface`](TodoStaticInterface.md)[]

Defined in: TestcaseTodosInterface.ts:32

An array of static todos.

These todos handle the assignment or processing of static values within the test case.
