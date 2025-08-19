---
layout: doc
---

# Apache Spark

## What is Spark

Apache Spark is a unified computing engine for parallel data processing over a collection of two or more interconnected computers working together as a single unified system. These individual computers are called nodes, and the collection of nodes is called a cluster. This act of distributing workloads across multiple nodes, a cluster can improve fault tolerance, ensuring that if one node fails another can take over and continue operating on the job with minimal interruption.

## How does spark work?

Spark has two primitives. The RDD, which stands for A **Residual Distributed Dataset**, and the **Distributed Variable**. First lets talk a little about what is a RDD. Plainly, a RDD is Residual Distributed Dataset, (just kidding)...A RDD is represents an immutable partitioned collection of records that can parallelized.

::: info NOTE
Running tasks in parallel, is not the same thing as running tasks concurrently. Parallel does a collection of things at the same time while Concurrency manages a collection of things together, but only is every doing one task at a time.  
:::

Every time you run Spark, there are the same actors involved.

- The Driver Program
- The Cluster Manager
- Executors
- Tasks
- Shuffles (optional)
- Stages
- RDD's

![Spark Architecture](../../public/spark_arch.svg)

### The Driver

The Driver process sits on the master node, runs your main function, and has three responsibilities:

::: tip Driver Responsibilities

1. Maintaining State of the Spark Application
2. Responding to the users program or input
3. Analysis, distribution, and scheduling work across the **executors**.
   :::

The Drive acts as a controller in software development parlance, it is the entry point of the Spark Application. It must communicate with the Cluster Manager to get physical resources and manage executors. But on the simplest level, The Driver is just a process on a physical machine that is responsible for the Spark Application's state running on the cluster.

### Executors

The executors are responsible for preforming the work that the Driver Program assigns. The Executor is responsible for only two things:

::: tip Executor Responsibilities

1. Executing Code
2. Reporting State of its computation back to the Driver Program.
   :::

The executors are the processes that perform the tasks assigned by the Spark Driver. The executor has one job: Do the task given to it, and return the state of that task after it finishes.

### The Cluster Manager

The Cluster Manager is responsible for, well, managing a cluster of machines. These machines are broken into two types: Master and worker nodes.

## DataFrames

In modern Spark one of the core primitives is the `DataFrame`. What is a DataFrame? Well in python you can think of it as a dictionary of lists, where each list is a value associated with a key.

```python
df = {
    'id': [1,2,3],
    'name': ["John", "Mary", "Kelly"],
    'age': [24, 22, 32]
}
```

> This example of a dataframe is naive. A DataFrame is more complex than this. But for this stage of understanding `Spark` it will give you some fundamental conceptual foundation on which to build.

Now think of this in contrast to a table which is how data is organized in a database, at least from a query perspective.
| id | name | age |
|----|-------|-----|
| 1 | John | 24 |
| 2 | Mary | 22 |
| 3 | Kelly | 32 |

### Benefits of using a DataFrame

What would a database have to do in order to query for say the name of every person in a User table? Well it would need to do what is called a `Scan`, which is naively where it has to iterate over every row in the database. If the Table has millions of rows, this gets very expensive.

However for a DataFrame, as you see this is as simple as `df["name"]`. We went from an `O(n)` operation to `O(1)`

## Second Primitive

The second primitive of modern Spark is the Monad RDD which is short for (Resilient Distributed Dataset). The RDD is a immutable partitioned collection of elements distributed across a cluster.

> #### Qualities of an RDD
>
> - Resilient: Spark tracks the sequence of transformations so that in the event a partition is lost, Spark can recompute on failure.
> - Distributed: Data is divided into partitions, each potentially on a different node.
> - DataSet: The RDD holds elements of type `T`
> - Immutable: All transformations produce a new RDD, they are never modified in place.

I placed this second, but in reality all other API's like `DataFrames` and `DataSets` are compiled down to RDD's internally before execution. The RDD is built on a deferred execution architecture, by that what is meant, the RDD does not compute anything until what Spark calls an `Action` has been requested by the caller.

### RDD Lineage

RDD lineage is the recording of the sequence of transformations that produced the RDD. It is stored as a DAG (Directed Acyclic Graph) of RDD's where each node in the DAG represents an RDD and each edge represents a transformation like (`map`, `filter` `join` etc...)
