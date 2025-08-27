---
layout: doc
---

# Security

The importance of security in AWS data analytics workflows cannot be overstated. Any breach or compromise could lead to severe consequences including data theft, financial loss, damage to reputation, and regulatory penalties.

Security should address the following five areas:


### Access management

Strong access controls are important to ensure only authorized users and applications can access analytics resources and data. With IAM, granular permissions are applied on a per-user or group basis using policies.


### Regulatory compliance

Many regulations like GDPR and HIPAA mandate that organizations securely manage data and adhere to privacy and security best practices. Non-compliance can result in heavy fines. Using managed services from AWS helps automate common compliance controls and auditing capabilities.


### Sensitive data protection

Data analytics often involves large volumes of sensitive data such as Personally Identifiable Information (PII), financial records, and health records. These must be protected from unauthorized access, theft, or leakage. AWS provides services like encryption, masking, identity and access management, and data loss prevention to securely manage sensitive data.


### Data and network security

AWS services like security groups, network access control lists, and firewalls help restrict network access and secure compute and storage resources. Features like encryption-at-rest provide added protection.


### Data auditability 

It is essential to be able to track the origin, transformation, and flow of data from source to target. You need to know where the data came from, how it was processed, and who and what systems have access to it. With the AWS Glue Data Catalog you can store the table definition and physical location of a dataset, add business-relevant attributes, and track how this data has changed over time.

## AWS security services

#### IAM
IAM manages fine-grained access and permissions for human users, software users, other services and microservices.


#### ACM
Use ACM to provision, manage, and deploy SSL/TLS certificates for AWS services and applications.

### **Regulatory compliance**

#### Audit Manager
Audit Manager automatically collects and organizes relevant evidence from AWS services and translates it into auditor-friendly reports in standards like GDPR, PCI DSS, and others. 

#### AWS Config
AWS Config provides configuration management and auditing of AWS resources to assess security and compliance posture over time.

### Sensitive Data Protection

#### Macie
Macie uses machine learning (ML) and pattern matching to discover and help protect your sensitive data, such as personally identifiable information (PII).

#### AWS KMS
Use AWS KMS to encrypt and decrypt data at rest and in transit using customer managed or AWS managed keys.

#### AWS Glue
AWS Glue protects sensitive data in a number of ways including data encryption using AWS KMS and data masking.

### Data and network security

#### AWS Control Tower
With AWS Control Tower you can set up and operate your multi-account AWS environment with prescriptive controls.

#### GuardDuty
GuardDuty provides a threat detection service to identify potential security issues by monitoring AWS resources like networks, applications, and user activity.

#### AWS WAF
Use AWS WAF to protect web applications from common exploits, attacks and protect application availability.

#### Shield
Shield provides a distributed denial of service (DDoS) mitigation service to protect applications running on AWS from volumetric attacks.

### Data auditability

#### CloudTrail
CloudTrail provides auditing and logging of API calls and management events in AWS accounts for security monitoring and compliance.

#### Lake Formation
Lake Formation automatically catalogs the source and destination of the data in AWS Glue Data Catalog. This provides metadata about the origin, landing location, and transformations of the data.

#### AWS Glue Data Catalog
As data moves between different data stores like Amazon S3, Amazon Redshift, and others, AWS Glue tracks these changes to metadata in the AWS Glue Data Catalog. This helps trace the flow of data.

## Security best practices

AWS has established the following best practices for securing data analytics pipelines based on decades of experience with thousands of customers.


::: tip Securing Data
1. Implementing least privilege access and preventing unintended access to analytics infrastructure and data.
2. Encrypting data at rest and in transit to protect sensitive information
3. Monitoring infrastructure for changes and user activity with alerts for abnormal behavior.
:::


- #### Implement robust access control.
  - Create IAM roles and policies to control who can access what resources.
- #### Encrypt data at rest and in transit.
  - Use AWS KMS to encrypt data at rest. For data in transit, AWS uses the HTTPS/TLS protocol that uses transport layer security to encrypt communication between services.
- #### Use data masking.
  - Use masking and anonymization techniques to protect sensitive data like PII while still allowing analytics.
- #### Use network isolation techniques.
  - Use a virtual private cloud (VPC) and network access control lists (network ACLs) to avoid exposing resources publicly.
- #### Understand applicable laws.
  - Understand and follow industry and geographic data compliance laws and ensure the architecture conforms to them.
- #### Classify data.
  - Create classes of data based on sensitivity and apply appropriate security controls for each class.
- #### Plan for disaster recovery.
  - Implement recovery plans, backup procedures, and high availability (redundancy) to ensure continuity of operations and data availability.
- #### Define and implement data governance.
  - Design comprehensive, flexible, and robust governance policies and techniques.


:::info 
Securing data in AWS analytics environments include implementing least privilege access controls, encrypting data, monitoring infrastructure security threats and anomalies, and auditing access. Automating the monitoring of changes helps maintain ongoing visibility and control over an environment subject to evolving analytics requirements. Referring to the AWS documentation on security best practices can provide more details about optimally configuring and managing security.
:::


## Monitoring

Monitoring is crucial for maintaining the reliability, availability, and performance of AWS data analytics workflows. 

The following are a few key aspects that should be monitored:

### Resources
The AWS resources involved in the workflow like EC2 instances, databases, and data stores should be monitored. Metrics such as CPU utilization, memory usage, network traffic, and disk I/O can help identify performance bottlenecks.


### Analytics jobs
Metrics for extract, transform, load (ETL), or extract, load, transform (ELT) jobs should be monitored. Metrics such as job run time, errors encountered, and records processed provide insights into job performance. Monitoring job statuses helps troubleshoot issues.


### Data pipelines
Services such as AWS Glue, AWS Step Functions, and Lambda are commonly used to orchestrate ETL workflows and should be monitored. Monitoring metrics indicate pipeline health and identify bottlenecks.


### Data access
Permissions and access logs should be tracked using services such as IAM and CloudTrail to help ensure security and data governance.


::: tip Which metrics would be most useful to monitor when analyzing the performance of ETL jobs running on AWS Glue? 
1. Resource utilization of the Amazon EC2 instances running the ETL code
2. ETL job durations
3. ETL job failure and retry rates
:::


## AWS monitoring services

#### CloudWatch
CloudWatch collects metrics from AWS resources like EC2 instances, databases, and data pipelines. You can set alarms and visualize performance metrics.

#### CloudTrail
CloudTrail provides visibility into API calls made in your AWS account. You can use it to monitor user activity and troubleshoot access-related issues.

#### X-Ray
X-Ray provides end-to-end monitoring and performance insights for applications running on AWS and their underlying services.

#### GuardDuty
GuardDuty helps detect potential security issues in workloads by monitoring for malicious or unauthorized behavior.

#### Systems Manager
Systems Manager provides application-level monitoring for EC2 instances and helps automate operational tasks.


::: tip Which are areas or activities of data systems that should be monitored? 
1. Job submission and completion times for batch jobs using services like AWS Step Functions
2. Resource utilization of Amazon EC2 instances running analytics jobs to ensure they are not overused
3. Application performance metrics like request latency and error rates using services like Amazon CloudWatch
:::


## Monitoring best practices
AWS has compiled best practices by studying the usage patterns and experiences of thousands of customers for more than a decade.

The following are best practices for monitoring in a data analytics workflow:
- #### Test and validate analytics jobs.
Test deployments before making changes in production. This helps validate performance and accuracy.

- #### Monitor key metrics at each stage.
Monitoring ETL job success and failure rates, model training times, and the number of predictions made can help troubleshoot issues.

- #### Set up alerts for critical failures.
Notify appropriate teams to troubleshoot issues in a timely manner.

- #### Integrate monitoring with visualization tools.
Amazon Managed Grafana and QuickSight can be used for monitoring of end-to-end workflows. Dashboards provide a single view of overall system health.

- #### Periodically review metrics.
Identify inefficiencies and optimize performance over time based on usage patterns.

::: tip Recommended monitoring best practices
1. Test and validate jobs. 
2. Integrate monitoring with visualization tools.
3. Set up alerts for critical failures.
:::