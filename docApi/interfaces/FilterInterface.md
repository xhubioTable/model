[**@tlink/model**](../README.md)

***

[@tlink/model](../globals.md) / FilterInterface

# Interface: FilterInterface

Defined in: FilterInterface.ts:8

Represents a filter used to select or exclude test cases.

This interface defines the structure of a filter that can be applied
to test cases later in the process. A filter is characterized by a specific
filter processor, a filter expression, and optional comments.

## Properties

### comment?

> `optional` **comment**: `string`

Defined in: FilterInterface.ts:26

Optional comments providing additional context or description about the filter.

***

### expression

> **expression**: `string`

Defined in: FilterInterface.ts:21

The filter expression.

This expression is used to evaluate test cases and determine whether they should be included.

***

### filterProcessorName

> **filterProcessorName**: `string`

Defined in: FilterInterface.ts:14

The name of the filter processor.

This identifies the engine or algorithm that will process the filter expression.
