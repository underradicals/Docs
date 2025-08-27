---
layout: doc
---

# Orchestration and Automation

As businesses increasingly rely on data analytics to make informed decisions, managing the complexity of data workflows, processing, and analysis becomes a significant challenge. Without efficient coordination and automation, data pipelines can become fragmented, error-prone, and time-consuming to manage. Additionally, scaling these processes to handle growing volumes of data can be daunting. 

Orchestration and automation can help solve these problems.

## Orchestration and automation

**Orchestration** is the process of coordinating multiple services to define and manage the flow of data through a series of steps. It involves defining workflows and dependencies between steps. 

**Automation** refers to using tools and services to automate repetitive tasks related to data ingestion, processing, and analytics. 

Automation is suitable for simple repetitive tasks. Orchestration is needed for complex workflows involving the coordination of multiple services, teams, and dependencies across stages.

Typically, they are used together in analytics workflows. For example, orchestration could involve coordinating multiple automated tasks in a defined sequence. Together, orchestration and automation can streamline operations, improve reliability, and empower non-programmers to manage complex workflows. 

## Options for orchestration and automation

Many AWS services can be used to orchestrate pipelines and workflows. They can be combined in nearly unlimited ways to meet very demanding requirements.

### AWS Step Functions
Step Functions is a visual workflow service to orchestrate and automate workflows, pipelines, and processes. Step Functions ensures tasks run in the correct order. It does the following:

- Orchestrates ETL workflows by connecting Lambda functions that extract the data from sources, transform it, and load it into databases and data lakes. 
- Runs batch jobs on data in AWS Glue, AWS EMR, or other services. 
- Processes streaming data by connecting Lambda functions processing data from Kinesis Data Streams or Amazon Data Firehose for real-time analytics.


::: tip What do Step Functions actually do?
1. Coordinating multiple AWS Glue extract, transform, and load (ETL) jobs that process data from different sources and load it into a data warehouse
2. Orchestrating a machine learning workflow that involves data preprocessing, model training, evaluation, and deployment
3. Performing batch processing jobs on data stored in Amazon S3 using AWS Batch
:::


### AWS Lambda
Lambda runs code (called Lambda functions) without provisioning or managing servers. Combined with Step Functions, Lambda functions can invoke AWS services and microservices and perform tasks to that are part of orchestrated workflows.

- Lambda functions can be invoked by events from data sources like Amazon S3, DynamoDB, or Kinesis Data Streams to process incoming data in real time.
- Step Functions can be used to orchestrate multiple Lambda functions for error handling, retries, and visualizations. 
- Lambda functions can be used in event-driven architectures with services like Amazon SNS and Amazon SQS to decouple and coordinate different analytics tasks.

### Amazon MWAA
Amazon Managed Workflows for Apache Airflow (Amazon MWAA) can be used to orchestrate data analytics workflows on AWS.

- Amazon MWAA workflows can be configured to ingest, process, transform, and load data into databases and data warehouses. Amazon MWAA can also be used to run queries on the data for analysis.
- Amazon MWAA workflows handle dependencies, support parallel running of tasks, and ensure tasks run sequentially.
- Through Amazon MWAA, Apache Airflow workers can be scaled dynamically based on workload.


### Amazon EventBridge
Amazon EventBridge is a serverless service used to build event-driven applications. It employs loosely coupled applications that work together by emitting and responding to events. 

- EventBridge can ingest events from various sources, and then route these events to different targets for processing or action. Athena can run SQL queries, and Lambda functions can drive custom processing.
- Events coming into EventBridge can invoke workflows in Step Functions, which coordinates multiple AWS services in a data processing pipeline. 
- EventBridge also supports built-in matching and routing rules that filter and transform events before delivering to targets. Therefore, event data can be pre-processed before analytics.

### Amazon SNS
Amazon Simple Notification Service (Amazon SNS) is a fully managed messaging service. With Amazon SNS, applications and services can send messages to multiple endpoints simultaneously through SNS topics. 

- SNS topics can be used to receive notifications and events from various data sources and AWS services. 
- These events invoke Step Functions workflows, which coordinate AWS services like AWS Glue, Amazon Redshift, and Athena for data processing and analytics pipelines.
- Features like message durability, encryption, and archiving help improve reliability of analytics workflows and help recover from failures.

### Amazon SQS
Amazon Simple Queue Service (Amazon SQS) is a managed message queuing service to send, store, and retrieve multiple messages of various sizes asynchronously. 

- Multiple users or systems can submit analytic jobs and tasks by sending messages to an SQS queue. This decouples the submitters from the jobs being processed.
- Compute resources like EC2 instances can be designed to poll the SQS queue and pick up messages containing jobs. Processing can scale independently based on the number of messages in the queue.
- Amazon SQS features include message attributes, dead letter queues, and integration with AWS Command Line Interface (AWS CLI) and SDKs. This makes Amazon SQS useful for building robust and scalable workflows.


## Enhancing orchestration and automation

Two technologies can make orchestration and automation even more effective in data analytics workflows: Zero-ETL and serverless architectures.

### Zero-ETL
Zero-ETL refers to an approach for data integration that minimizes or eliminates the need for ETL processes. With traditional ETL, data needs to be extracted from source systems, transformed or cleaned, and loaded into a data warehouse or data lake. These processes can be time-consuming and complex to develop and maintain. 

With zero-ETL integrations, data can be directly queried from its original sources without requiring data movement or transformation.

Several AWS services support zero-ETL and can be used in orchestrated workflows.


::: tip Benefits of Zero-ETL
1. It streamlines data architecture and reduces data engineering efforts by automating custom extract, transform, and load (ETL) processes.
2. It provides real-time insights through real-time or near real-time data access
3. It optimizes costs for organizations because it is based on actual usage and data processing needs.
:::


#### Amazon Athena
With Athena, data stored in Amazon S3 can be queried by using SQL commands. It does not need to be extracted and loaded elsewhere. Step Functions can orchestrate Lambda functions to process and analyze the query results from Athena in real time. 

#### Amazon Redshift streaming ingestion
Amazon Redshift ingests streaming data in near real time at high throughput. Because it doesn't need to stage in Amazon S3, the need for some ETL tasks is eliminated.

#### Amazon Aurora with Amazon Redshift
Replicate data from some Aurora sources to Amazon Redshift in near real time for analytics. Zero-ETL seamlessly makes that data available in Amazon Redshift and removes the need to build and maintain complex ETL pipelines. Check current Aurora product documentation for a list of supported sources.

#### Amazon Redshift auto copy from Amazon S3
Continuously ingest new data files from Amazon S3 into Amazon Redshift with no manual intervention.

#### Amazon OpenSearch Service
OpenSearch Service has zero-ETL integration with Amazon S3 for querying data directly in Amazon S3 without extracting to OpenSearch. This improves query performance for log analysis use cases.

### **Serverless architecture**
A serverless architecture is a way to build and run applications and services without having to manage infrastructure. Your application still runs on servers, but all the server management is done by AWS. Serverless architectures are extremely cost effective because you only pay for the actual time that your code is running.

Efficiently orchestrated and automated workflows depend significantly on serverless applications.

Many AWS services have serverless options or can be used in serverless workflows. 

#### AWS Lambda
Lambda is the primary serverless AWS service. It runs code called Lambda functions without provisioning or managing servers. Lambda functions can be invoked by other services or events and can also invoke other services to perform tasks.

#### Amazon API Gateway
With API Gateway, you can create RESTful and HTTP APIs that can integrate with AWS Lambda functions. You can build serverless applications where the business logic is run with Lambda. 

#### Amazon DynamoDB
DynamoDB is a fully managed NoSQL database that does not require you to provision or manage any servers. Lambda functions can perform operations directly on DynamoDB tables without having to manage any underlying infrastructure. 

#### Amazon S3
Serverless applications often use Amazon S3 for file storage and hosting static websites.

#### Amazon SNS
Use Amazon SNS in serverless workflows to facilitate asynchronous communication between different AWS services. 

For example, when you upload objects to Amazon S3, an Amazon S3 event can publish a message to an SNS topic. Lambda functions or other services can subscribe to this topic and process the object asynchronously.

#### Amazon SQS
Use SQS queues to connect serverless Lambda functions together into workflows. For example, a Lambda function could process a request and send a message to an SQS queue. That message could then invoke a separate Lambda function to perform further processing asynchronously.

#### Amazon Redshift Serverless
Amazon Redshift Serverless automatically provisions and scales resources to meet demand. Analytics can run without setting up and managing data warehouse infrastructure.

#### Amazon EMR Serverless
With Amazon EMR Serverless, you don’t have to configure, optimize, secure, or operate clusters. You can avoid overprovisioning or underprovisioning resources for your data processing jobs.

#### AWS Glue
AWS Glue is a serverless data integration service. AWS Glue ETL jobs automatically scale. You don't need to manage infrastructure, and you only pay per use.

#### Amazon MSK Serverless
Amazon MSK offers a serverless option called MSK Serverless. With MSK Serverless, you can run Apache Kafka clusters without having to manage and scale infrastructure. It provides pay-per-use pricing, automatic scaling, and high availability.

#### Amazon OpenSearch Service Serverless
OpenSearch Service Serverless streamlines running petabyte-scale search and analytics workloads and automatically provisions and scales underlying resources without needing to manage or scale OpenSearch clusters.