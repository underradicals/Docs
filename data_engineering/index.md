---
layout: doc
---

# Data Engineering

To drive innovations and improve business outcomes, organizations of all types and sizes are asking important questions such as:

How can we offer hyper-personalized experiences to our customers?
How can we empower our business users to make data-driven decisions?
And, of course, where can we innovate, improve operations, and optimize costs?
To answer these questions, organizations need to foster a data-driven culture, democratize access to data and insights, and leverage innovative technologies such as data analytics, machine learning, and generative AI applications.

But there are challenges. Many organizations experience data management issues such as data and processing silos, excessive data movement, and data duplication across business units.

That’s where you come in.

As a data engineer, you play a crucial role in transforming raw data into valuable insights for organizations. You design, develop, and maintain data architectures and extract, transform, load (ETL) pipelines that data analysts, data scientists, and other data consumers can use to effectively access and analyze data.

Essentially, the role of the data engineer can be summed up as getting data from sources, making it useful, and then serving it to stakeholders.

::: tip Responsibility of DE & DA
The data engineer builds the system that delivers usable data to the data analyst, who analyzes the data to gain business insights.
:::

## What are the key functions of the data engineer?
The following is a list of some important data engineer functions. In your organization, you might perform all these functions, or you might share them with other specialists. 

#### Build and manage data infrastructure and platforms
This includes setting up databases, data lakes, and data warehouses on AWS services like Amazon Simple Storage Service (Amazon S3), AWS Glue, Amazon Redshift, among others. 

#### Ingest data from various sources
You can use tools like AWS Glue jobs or AWS Lambda functions to ingest data from databases, applications, files, and streaming devices into the centralized data platforms. 

#### Prepare the ingested data for analytics
Use technologies like AWS Glue, Apache Spark, or Amazon EMR to prepare data by cleaning, transforming, and enriching it.

#### Catalog and document curated datasets
Use AWS Glue crawlers to determine the format and schema, group data into tables, and write metadata to the AWS Glue Data Catalog. Use metadata tagging in Data Catalog for data governance and discoverability.

#### Automate regular data workflows and pipelines
Simplify and accelerate data processing using services like AWS Glue workflows, AWS Lambda, or AWS Step Functions.


::: tip Key Functions of the DE
1. They build and manage data infrastructure platforms.
2. They catalog and document datasets.
3. They ensure security and compliance.
:::


#### Ensure data quality, security, and compliance
Create access controls, establish authorization policies, and build monitoring processes. Use Amazon DataZone or AWS Lake Formation to manage and govern access to data using fine-grained controls. These controls help ensure access with the right level of privileges and context. 

### As a DE who will help you solve problems
Building, running, and maintaining a data analytics system is a highly collaborative endeavor. You will work with people in varied roles, including executive, managerial, and technical. The following table identifies the responsibilities and areas of interest for the various personas that work with a data analytics system.


| Personas                 | Responsibility                                                                                                                | Areas of interest                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Chief data officer (CDO) | Builds a culture of using data to solve problems and accelerate innovation                                                    | Data quality, data governance, data and AI strategy, evangelizing the value of data to the business       |
| Data architect           | Architects technical solutions to meet business needs; solves complex data challenges to help the CDO deliver on their vision | Data pipeline, data processing, data integration, data governance, data catalogs                          |
| Data engineer            | Delivers usable, accurate datasets to the organization in a secure and high-performing manner                                 | Tools for building data pipelines, ease of use, configuration, and maintenance                            |
| Data security officer    | Ensures data security, privacy, and governance are strictly defined and adhered to                                            | Information security, data privacy compliance, protecting PII, fine-grained access controls, data masking |
| Data scientist           | Constructs means for extracting business-focused insight from data to support better decisions                                | Tools for data manipulation, insight beyond visualization, and tools to build ML pipelines                |
| Data analyst             | Reacts to market conditions in real time; finds data and performs analytics quickly and easily                                | Querying data, performing analysis, creating business insights, producing reports and visualizations      |

