---
layout: doc
title: Joseph's Resume
description: The totality of my hard work, blood, sweat, and tears reduced to 1+ pages to be judged by some stranger, as if I am not human, or equal to one.
sidebar: false
---

<script setup>
  import ResumeHeader from '../components/ResumeHeader.vue';
  import SpaceBetween from '../components/SpaceBetween.vue';
</script>

<ResumeHeader email="underradicals@gmail.com" phone="9035199940">
  <template #person_name>
    Joseph Burton
  </template>
  <template #subtitle>
    Aspired Engineer and Developer
  </template>
</ResumeHeader>

## Objective

---

> *Driven dedicated Software Engineer and Developer with a strong foundation in Information Technology and Computer Science.  My experience ranges across backend and front-end application development, data engineering, data analytics with a background in logistics and commercial construction. I have a Master of Science in IT, and I hold a Bachelor of Science in Computer Science. I am looking for a challenging role that will leverage my technical and analytical skills, leadership experience and my ability to work through complex domains in which I have little or no experience. I am smart, fast learner and want nothing more than to help you reach your project goals.*

## Education

---

<SpaceBetween left="Master of Science in Information Technology"  right="Expected: August 2025"/>
<SpaceBetween left="Bachelor of Science in Computer Science"  right="Commencement: November 2023"/>

## Experience

---

### _R&N Transportation_

---
##### Data Pipeline
> _October_ 2023 &horbar; Present

> _Lead Software Engineer and Developer_

- Implemented data warehouse expansion with Sr Data Analyst, modeled R&N data flow by normalizing ingestion up to isomorphism with respect to our schema to increase data availability and accuracy; as a result, R&N was able to forecast and make better predictions on their future returns.  
- Aggregated and simplified data validation and transformations with Sr. Data Analyst, through optimized SQL queries, tools like dbt and Prefect for orchestration, this resulted in a more robust pipeline, mitigating data loss and ingestion failures by 100%. 
- Implemented data retention layer with Sr Data Analyst, by updating Change Data Capture layer to logical decoding migrating away from SQL triggers that produced fewer stable returns due to lag associated with triggers, as a result the ELT experienced more stable E2E performance gains. 
##### R&N Admin Panel
- Designed and Developed Administrative UI under the supervision of Project Sponsor, modeled ingested data, developed view compositions, and implemented the tie-in with back-end proprietary API, with micro-frontend (built in Typescript and React) error boundaries, and authentication. As a result, R&N Transportation was able to track revenues, and able to maintain accurate employee information.  
- Design and Developed Company Database under supervision of Project Sponsor, domains included Compliance, HR, payroll, ELD logs and more; as a result, R&N was able to save money and ultimately pay their drivers more and offer them better benefits.  
##### R&N Client API
- Implemented REST API, under the coordination of the Project Sponsor, using the .NET Core Framework and C#, on-premises output-caching, rate-limiting, filtering, pagination, free observability via Aspire; as a result, R&N was able to track company data in near-real-time and employees were able to stay within compliance limits.  
- Implemented REST API Gateway/Load-Balancer using .NET Core Framework, created NAT rules for SSH and TELNET access to API behind the LB, health checks, LB rules, as a result R&N experienced near 100% uptime, and mitigated API catastrophic failure and increased workload limit from 10,000 rps, to 30,000+ rps. shoring R&N for years into the future. 


## Projects
### _D2 ETL_

---
##### Project Management
> _August 2023 &horbar; October 2023_

> _Jr Data Engineer / Web Developer_

- Created deliverables Project-Charter, Project Management Plan and WBS. This created a clearly defined project scope and gave the product direction and unlike earlier project mitigated scope creep. 
- Rewrote D2 API, replacing custom pipeline with dbt and prefect, de-complecting the data model I was able to add analytics and more measures to the warehouse.  This increased the richness of the data thereby enriching the potential of every consumer down the pipeline. 

### REST API
> _May 2019 &horbar; August 2019_
> _Jr Data Engineer / Jr Web Developer_

##### Project Execution
- Created ELT Data Model in PostgreSQL with data provided by Destiny2 manifest, created data pipeline that consumed manifest data, extracted blobs of Json into minIO s3 compliant buckets (lakehouse), built 3NF database (warehouse), extracted from Json blobs from minIO, transformed, normalized, and transported to 3NF database. 
- Built REST API in .NET Core that consumed the warehouse data with rate-limiting, filtering, and pagination. I was able to maintain upper bound of 10,000+ rps. 
- Built front-end web application in React to consume the REST API. API key authentication was used on M2C communication and Client Credential Flow was used on M2M communication. 
