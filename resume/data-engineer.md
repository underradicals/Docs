---
layout: doc
---

# Data Engineer Interview Prep

## 1. **Core Technical Areas to Review**

### 🔹 PySpark & Databricks

- **DataFrame vs RDD**: When to use each, performance tradeoffs.
- **Wide vs Narrow Transformations**: e.g., `map` (narrow) vs `groupBy`/`join` (wide).
- **Shuffle operations**: why they’re expensive, how to minimize.
- **Partitioning strategies**: `repartition`, `coalesce`, skew handling.
- **Caching & Persistence**: when to use `cache()` vs `persist()` vs `checkpoint()`.
- **UDFs vs Pandas UDFs**: vectorized operations, when they’re worth using.
- **Delta Lake**: time travel, ACID transactions, schema evolution.

### 🔹 Cloud Migration & Data Engineering

- **Data Lake vs Data Warehouse**: roles in the architecture, migration considerations.
- **ETL vs ELT in Cloud**: how Databricks fits into both.
- **Data ingestion patterns**: batch vs streaming, ingestion from legacy DBs to cloud.
- **File formats**: Parquet, ORC, Avro, JSON — tradeoffs (compression, schema evolution).
- **Performance tuning in cloud**: autoscaling clusters, job clusters vs interactive clusters, cost optimization.

---

## 2. **Likely Technical Interview Questions**

1. Explain how Spark executes a job (DAG, stages, tasks).
2. What are common performance bottlenecks in PySpark, and how do you fix them?
3. How would you handle skewed data in a large join?
4. If you’re migrating an on-prem Oracle warehouse to cloud (Databricks + AWS/Azure), what’s your high-level strategy?
5. How do Delta Lake features (ACID, schema enforcement, time travel) help in migration scenarios?
6. You have a slow Spark job — what steps do you take to debug and optimize it?
7. What’s the difference between `repartition()` and `coalesce()`? When would you use each?
8. How would you design an ELT pipeline for ingesting financial transactions daily?

---

## 3. **System Design / Practical Scenarios**

Expect scenario-based design problems:

- **Cloud migration**:

  - How would you migrate historical + incremental data from Oracle/DB2 to cloud (S3/ADLS → Databricks → Delta Lake → downstream)?
  - How do you ensure **data consistency** during migration? (checkpoints, validation, reconciliation).

- **Financial data**:

  - Model payments, invoices, transactions in a normalized form.
  - Handle slowly changing dimensions (SCD Type 2 with Delta Lake).

- **Data quality**:

  - Implement validations (row counts, null checks, schema drift detection).

---

## 4. **Key Prep**

- They emphasize **governance and compliance**: be ready to talk about data lineage, GDPR/CCPA handling, audit logs.
- They use **Databricks on AWS and Azure**: know storage (S3, ADLS), IAM roles, and networking basics.
- They are heavy on **Delta Lake**: know how it fits with structured streaming and batch processing.
- They care about **cost management**: cluster sizing, spot instances, job scheduling.

---

## 5. **Mock Rapid-Fire Drill**

- What is a Spark DAG?
- Difference between narrow vs wide transformations?
- How do you optimize a join between a huge and a small dataset?
- Explain the benefits of Delta Lake.
- What’s your approach to cloud migration with minimal downtime?
