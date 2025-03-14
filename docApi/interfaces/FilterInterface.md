[**@xhubiotable/model**](../README.md)

***

[@xhubiotable/model](../globals.md) / FilterInterface

# Interface: FilterInterface

Defined in: [FilterInterface.ts:8](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/FilterInterface.ts#L8)

Represents a filter used to select or exclude test cases.

This interface defines the structure of a filter that can be applied
to test cases later in the process. A filter is characterized by a specific
filter processor, a filter expression, and optional comments.

## Properties

### comment?

> `optional` **comment**: `string`

Defined in: [FilterInterface.ts:26](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/FilterInterface.ts#L26)

Optional comments providing additional context or description about the filter.

***

### expression

> **expression**: `string`

Defined in: [FilterInterface.ts:21](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/FilterInterface.ts#L21)

The filter expression.

This expression is used to evaluate test cases and determine whether they should be included.

***

### filterProcessorName

> **filterProcessorName**: `string`

Defined in: [FilterInterface.ts:14](https://github.com/xhubioTable/model/blob/3ec038a83f8a676734aeb01841968d004d66a15f/src/FilterInterface.ts#L14)

The name of the filter processor.

This identifies the engine or algorithm that will process the filter expression.
