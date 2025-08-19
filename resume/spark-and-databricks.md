---
layout: doc
---

# PySpark and Databricks

## Answers

- #### DataFrame vs RDD:
  - When to use each, performance tradeoffs.

> You can think of a dataframe as a dictionary of key and value pairs where the key is a string and the value is a list of elements of type [T]. A `RDD` is Resilient Distributed Dataset. That means:

- That an RDD is fault tolerant and can be recovered if a partition is a lost in case of node failures; this ensures data integrity and continued processing.
- The Data inside a RDD is partitioned and distributed across multiple nodes in a cluster.
- A DataSet is just a collection of elements, like an array or list, but designed for distributed environments.

#### Other facts not covered in the acronym are immutability and Deferred Execution.

- RDD is a Monad. RDD's are immutable, that means once a RDD is created, its contents cannot be changed. Any operation of a RDD results in a new RDD, hence the Monadic nature.
- Transformation on RDD's are executed on a deferred evaluation policy: That means they are not executed immediately but rather built into a graph of operations.

In short, A RDD is a Monadic Automaton distributed over a cluster governed by a deferred execution policy.

#### When to use RDD

> When the data does not fit into a tabular format

#### When to use DataFrame

> When ever the data is structured csv, json etc.

### Shuffle

A shuffle is the moving of data between partitions,

### Narrow Transformations vs Wide Transformations

> A narrow transformation is one in which data result does not require a shuffle.
> A wide transformation is one is which the data result does require a shuffle.

### Optimizing Spark Shuffling

Let the tool do what it is best at, and spark is great at distributed compute. Not so great at distributed aggregation. So what is the solution? Let spark handle the narrow transformations, cache the result in an intermediary storage, like DuckDB, then let databases do what they are good at, which aggregating data.
