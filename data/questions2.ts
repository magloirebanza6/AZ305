import { Question } from './types';

export const questions2: Question[] = [
  {
    id: 101,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You plan to use Azure SQL as a database platform.You need to recommend an Azure SQL product and service tier that meets the following requirements:• Automatically scales compute resources based on the workload demand• Provides per second billingWhat should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image209.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 102,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -Your company, named Contoso, Ltd., has an Azure subscription that contains the following resources:• An Azure Synapse Analytics workspace named contosoworkspace1• An Azure Data Lake Storage account named contosolake1• An Azure SQL database named contososql1The product data of Contoso is copied from contososql1 to contosolake1.Contoso has a partner company named Fabrikam Inc. Fabrikam has an Azure subscription that contains the following resources:• A virtual machine named FabrikamVM1 that runs Microsoft SQL Server 2019• An Azure Storage account named fabrikamsa1Contoso plans to upload the research data on FabrikamVM1 to contosolake1. During the upload, the research data must be transformed to the data formats used by Contoso.The data in contosolake1 will be analyzed by using contosoworkspace1.You need to recommend a solution that meets the following requirements:• Upload and transform the FabrikamVM1 research data.• Provide Fabrikam with restricted access to snapshots of the data in contosoworkspace1.What should you recommend for each requirement? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image222.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 103,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription.You need to deploy a solution that will provide point-in-time restore for blobs in storage accounts that have blob versioning and blob soft delete enabled.Which type of blob should you create, and what should you enable for the accounts? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image220.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 104,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are designing a data pipeline that will integrate large amounts of data from multiple on-premises Microsoft SQL Server databases into an analytics platform in Azure. The pipeline will include the following actions:• Database updates will be exported periodically into a staging area in Azure Blob storage.• Data from the blob storage will be cleansed and transformed by using a highly parallelized load process.• The transformed data will be loaded to a data warehouse.• Each batch of updates will be used to refresh an online analytical processing (OLAP) model in a managed serving layer.• The managed serving layer will be used by thousands of end users.You need to implement the data warehouse and serving layers.What should you use? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image224.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 105,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an app named App1 that uses an Azure Blob Storage container named app1data.App1 uploads a cumulative transaction log file named File1.txt to a block blob in app1data once every hour. File1.txt only stores transaction data from the current day.You need to ensure that you can restore the last uploaded version of File1.txt from any day for up to 30 days after the file was overwritten. The solution must minimize storage space.What should you include in the solution?`,
    options: [`container soft delete`, `blob snapshots`, `blob soft delete`, `blob versioning`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure Blob Storage in General Purpose v2 accounts supports encryption scopes for per-blob encryption with customer-managed keys, enabling multi-tenant scenarios where each customer's data is encrypted separately. The correct answer is: blob versioning. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 106,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription.You need to deploy a relational database. The solution must meet the following requirements:• Support multiple read-only replicas.• Automatically load balance read-only requests across all the read-only replicas.• Minimize administrative effortWhat should you use? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image243.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 107,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have 12 on-premises data sources that contain customer information and consist of Microsoft SQL Server, MySQL, and Oracle databases.You have an Azure subscription.You plan to create an Azure Data Lake Storage account that will consolidate the customer information for analysis and reporting.You need to recommend a solution to automatically copy new information from the data sources to the Data Lake Storage account by using extract, transform and load (ETL). The solution must minimize administrative effort.What should you include in the recommendation?`,
    options: [`Azure Data Factory`, `Azure Data Explorer`, `Azure Data Share`, `Azure Data Studio`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 108,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have SQL Server on an Azure virtual machine. The databases are written to nightly as part of a batch process.You need to recommend a disaster recovery solution for the data. The solution must meet the following requirements:✑ Provide the ability to recover in the event of a regional outage.✑ Support a recovery time objective (RTO) of 15 minutes.✑ Support a recovery point objective (RPO) of 24 hours.✑ Support automated recovery.✑ Minimize costs.What should you include in the recommendation?`,
    options: [`Azure virtual machine availability sets`, `Azure Disk Backup`, `an Always On availability group`, `Azure Site Recovery`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Shared Access Signatures (SAS) provide secure delegated access to Azure Storage resources with fine-grained control over permissions, IP restrictions, and time validity without sharing account keys. The correct answer is: Azure Site Recovery. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 109,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You plan to deploy the backup policy shown in the following exhibit.Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0013200001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 110,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:✑ Provide access to the full .NET framework.Provide redundancy if an Azure region fails.✑ Grant administrators access to the operating system to install custom application dependencies.Solution: You deploy two Azure virtual machines to two Azure regions, and you create an Azure Traffic Manager profile.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [0],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0013400003.png`,
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 111,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:✑ Provide access to the full .NET framework.✑ Provide redundancy if an Azure region fails.✑ Grant administrators access to the operating system to install custom application dependencies.Solution: You deploy two Azure virtual machines to two Azure regions, and you deploy an Azure Application Gateway.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Front Door provides global load balancing with SSL offloading, while Application Gateway offers regional Layer 7 load balancing with WAF capabilities. Choose based on global vs regional requirements. The correct answer is: No. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 112,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:✑ Provide access to the full .NET framework.✑ Provide redundancy if an Azure region fails.✑ Grant administrators access to the operating system to install custom application dependencies.Solution: You deploy an Azure virtual machine scale set that uses autoscaling.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Virtual Machine Scale Sets enable auto-scaling of identical VMs based on metrics or schedules, providing high availability and easy management for compute-intensive workloads. The correct answer is: No. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 113,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You plan to create an Azure Storage account that will host file shares. The shares will be accessed from on-premises applications that are transaction intensive.You need to recommend a solution to minimize latency when accessing the file shares. The solution must provide the highest-level of resiliency for the selected storage tier.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0013700001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 114,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You need to recommend an Azure Storage account configuration for two applications named Application1 and Application2. The configuration must meet the following requirements:✑ Storage for Application1 must provide the highest possible transaction rates and the lowest possible latency.✑ Storage for Application2 must provide the lowest possible storage costs per GB.✑ Storage for both applications must be available in an event of datacenter failure.✑ Storage for both applications must be optimized for uploads and downloads.What should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0014100001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 115,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You plan to develop a new app that will store business critical data. The app must meet the following requirements:✑ Prevent new data from being modified for one year.✑ Maximize data resiliency.✑ Minimize read latency.What storage solution should you recommend for the app? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0014300004.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 116,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You plan to deploy 10 applications to Azure. The applications will be deployed to two Azure Kubernetes Service (AKS) clusters. Each cluster will be deployed to a separate Azure region.The application deployment must meet the following requirements:✑ Ensure that the applications remain available if a single AKS cluster fails.✑ Ensure that the connection traffic over the internet is encrypted by using SSL without having to configure SSL on each container.Which service should you include in the recommendation?`,
    options: [`Azure Front Door`, `Azure Traffic Manager`, `AKS ingress controller`, `Azure Load Balancer`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 117,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure web app named App1 and an Azure key vault named KV1.App1 stores database connection strings in KV1.App1 performs the following types of requests to KV1:✑ Get✑ List✑ Wrap✑ DeleteUnwrap -✑ Backup✑ Decrypt✑ EncryptYou are evaluating the continuity of service for App1.You need to identify the following if the Azure region that hosts KV1 becomes unavailable:✑ To where will KV1 fail over?✑ During the failover, which request type will be unavailable?What should you identify? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0014600006.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 118,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -Your company identifies the following business continuity and disaster recovery objectives for virtual machines that host sales, finance, and reporting applications in the company's on-premises data center:✑ The sales application must be able to fail over to a second on-premises data center.✑ The reporting application must be able to recover point-in-time data at a daily granularity. The RTO is eight hours.✑ The finance application requires that data be retained for seven years. In the event of a disaster, the application must be able to run from Azure. The recovery time objective (RTO) is 10 minutes.You need to recommend which services meet the business continuity and disaster recovery objectives. The solution must minimize costs.What should you recommend for each application? To answer, drag the appropriate services to the correct applications. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0014900004.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 119,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an on-premises file server that stores 2 TB of data files.You plan to move the data files to Azure Blob Storage in the West Europe Azure region.You need to recommend a storage account type to store the data files and a replication solution for the storage account. The solution must meet the following requirements:✑ Be available if a single Azure datacenter fails.✑ Support storage tiers.✑ Minimize cost.What should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0014500004.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 120,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:✑ Failover between replicas of the database must occur without any data loss.✑ The database must remain available in the event of a zone outage.✑ Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Managed Instance Business Critical`, `Azure SQL Database Premium`, `Azure SQL Database Basic`, `Azure SQL Database Hyperscale`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 121,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:✑ Provide access to the full .NET framework.✑ Provide redundancy if an Azure region fails.✑ Grant administrators access to the operating system to install custom application dependencies.Solution: You deploy a web app in an Isolated App Service plan.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: No. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 122,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:✑ Failover between replicas of the database must occur without any data loss.✑ The database must remain available in the event of a zone outage.✑ Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Managed Instance Business Critical`, `Azure SQL Database Premium`, `Azure SQL Database Basic`, `Azure SQL Managed Instance General Purpose`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 123,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an on-premises Microsoft SQL Server database named SQL1.You plan to migrate SQL1 to Azure.You need to recommend a hosting solution for SQL1. The solution must meet the following requirements:• Support the deployment of multiple secondary, read-only replicas.• Support automatic replication between primary and secondary replicas.• Support failover between primary and secondary replicas within a 15-minute recovery time objective (RTO).What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image155.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 124,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:✑ Failover between replicas of the database must occur without any data loss.✑ The database must remain available in the event of a zone outage.✑ Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Serverless`, `Azure SQL Database Business Critical`, `Azure SQL Database Basic`, `Azure SQL Database Standard`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Business Critical. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 125,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have two on-premises Microsoft SQL Server 2017 instances that host an Always On availability group named AG1. AG1 contains a single database named DB1.You have an Azure subscription that contains a virtual machine named VM1. VM1 runs Linux and contains a SQL Server 2019 instance.You need to migrate DB1 to VM1. The solution must minimize downtime on DB1.What should you do? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image157.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 126,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription that contains the resources shown in the following table.You need to recommend a load balancing solution that will distribute incoming traffic for VMSS1 across NVA1 and NVA2. The solution must minimize administrative effort.What should you include in the recommendation?`,
    options: [`Gateway Load Balancer`, `Azure Front Door`, `Azure Application Gateway`, `Azure Traffic Manager`],
    correct: [0],
    imageUrl: `https://img.examtopics.com/az-305/image211.png`,
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 127,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You plan to deploy an Azure Database for MySQL flexible server named Server1 to the East US Azure region.You need to implement a business continuity solution for Server1. The solution must minimize downtime in the event of a failover to a paired region.What should you do?`,
    options: [`Create a read replica.`, `Store the database files in Azure premium file shares.`, `Implement Geo-redundant backup.`, `Configure native MySQL replication.`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Implement Geo-redundant backup.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 128,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are building an Azure web app that will store the Personally Identifiable Information (PII) of employees.You need to recommend an Azure SQL. Database solution for the web app. The solution must meet the following requirements:• Maintain availability in the event of a single datacenter outage.• Support the encryption of specific columns that contain PII.• Automatically scale up during payroll operations.• Minimize costs.What should you include in the recommendations? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image170.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 129,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have the Azure subscriptions shown in the following table.Contoso.onmicrosft.com contains a user named User1.You need to deploy a solution to protect against ransomware attacks. The solution must meet the following requirements:• Ensure that all the resources in Sub1 are backed up by using Azure Backup.• Require that User1 first be assigned a role for Sub2 before the user can make major changes to the backup configuration.What should you create in each subscription? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image226.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 130,
    category: `Design Business Continuity Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have 10 on-premises servers that run Windows Server.You need to perform daily backups of the servers to a Recovery Services vault. The solution must meet the following requirements:• Back up all the files and folders on the servers.• Maintain three copies of the backups in Azure.• Minimize costs.What should you configure? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image229.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 131,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You plan to deploy a containerized web-app that will be hosted in five Azure Kubernetes Service (AKS) clusters. Each cluster will be hosted in a different Azure region.You need to provide access to the app from the internet. The solution must meet the following requirements:• Incoming HTTPS requests must be routed to the cluster that has the lowest network latency.• HTTPS traffic to individual pods must be routed via an ingress controller.• In the event of an AKS cluster outage, failover time must be minimized.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image231.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 132,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription.You create a storage account that will store documents.You need to configure the storage account to meet the following requirements:• Ensure that retention policies are standardized across the subscription.• Ensure that data can be purged if the data is copied to an unauthorized location.Which two settings should you enable? To answer, select the appropriate settings in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image233.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 133,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription.You are designing a solution for containerized apps. The solution must meet the following requirements:• Automatically scale the apps by creating additional instances.• Minimize administrative effort to maintain nodes and clusters.• Ensure that containerized apps are highly available across multiple availability zones.• Provide a central location for the lifecycle management and storage of container images.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image245.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 134,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You plan to use Azure Storage to store data assets.You need to identify the procedure to fail over a general-purpose v2 account as part of a disaster recovery plan. The solution must meet the following requirements:• Apps must be able to access the storage account after a failover.• You must be able to fail back the storage account to the original location.• Downtime must be minimized.Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.`,
    imageUrl: `https://img.examtopics.com/az-305/image247.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 135,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription that contains a storage account.An application sometimes writes duplicate files to the storage account.You have a PowerShell script that identifies and deletes duplicate files in the storage account. Currently, the script is run manually after approval from the operations manager.You need to recommend a serverless solution that performs the following actions:✑ Runs the script once an hour to identify whether duplicate files exist✑ Sends an email notification to the operations manager requesting approval to delete the duplicate files✑ Processes an email response from the operations manager specifying whether the deletion was approved✑ Runs the script if the deletion was approvedWhat should you include in the recommendation?`,
    options: [`Azure Logic Apps and Azure Event Grid`, `Azure Logic Apps and Azure Functions`, `Azure Pipelines and Azure Service Fabric`, `Azure Functions and Azure Batch`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Blob Storage in General Purpose v2 accounts supports encryption scopes for per-blob encryption with customer-managed keys, enabling multi-tenant scenarios where each customer's data is encrypted separately. The correct answer is: Azure Logic Apps and Azure Functions. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 136,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription that contains a Basic Azure virtual WAN named VirtualWAN1 and the virtual hubs shown in the following table.You have an ExpressRoute circuit in the US East Azure region.You need to create an ExpressRoute association to VirtualWAN1.What should you do first?`,
    options: [`Upgrade VirtualWAN1 to Standard.`, `Create a gateway on Hub1.`, `Enable the ExpressRoute premium add-on.`, `Create a hub virtual network in US East.`],
    correct: [0],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0017800001.png`,
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 137,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Your company has the infrastructure shown in the following table.The on-premises Active Directory domain syncs with Azure Active Directory (Azure AD).Server1 runs an application named App1 that uses LDAP queries to verify user identities in the on-premises Active Directory domain.You plan to migrate Server1 to a virtual machine in Subscription1.A company security policy states that the virtual machines and services deployed to Subscription1 must be prevented from accessing the on-premises network.You need to recommend a solution to ensure that App1 continues to function after the migration. The solution must meet the security policy.What should you include in the recommendation?`,
    options: [`Azure AD Application Proxy`, `the Active Directory Domain Services role on a virtual machine`, `an Azure VPN gateway`, `Azure AD Domain Services (Azure AD DS)`],
    correct: [3],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0018000001.png`,
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure AD Domain Services (Azure AD DS). This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 138,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You have an on-premises network and an Azure subscription. The on-premises network has several branch offices.A branch office in Toronto contains a virtual machine named VM1 that is configured as a file server. Users access the shared files on VM1 from all the offices.You need to recommend a solution to ensure that the users can access the shared files as quickly as possible if the Toronto branch office is inaccessible.What should you include in the recommendation?`,
    options: [`a Recovery Services vault and Windows Server Backup`, `Azure blob containers and Azure File Sync`, `a Recovery Services vault and Azure Backup`, `an Azure file share and Azure File Sync`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: an Azure file share and Azure File Sync. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 139,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a solution that will execute custom C# code in response to an event routed to Azure Event Grid. The solution must meet the following requirements:✑ The executed code must be able to access the private IP address of a Microsoft SQL Server instance that runs on an Azure virtual machine.✑ Costs must be minimized.What should you include in the solution?`,
    options: [`Azure Logic Apps in the Consumption plan`, `Azure Functions in the Premium plan`, `Azure Functions in the Consumption plan`, `Azure Logic Apps in the integrated service environment`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Service Bus provides enterprise messaging with queues and topics. Event Hubs handles high-throughput event streaming. Event Grid enables reactive event-driven architectures. The correct answer is: Azure Functions in the Premium plan. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 140,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription named Subscription1 that is linked to a hybrid Azure Active Directory (Azure AD) tenant.You have an on-premises datacenter that does NOT have a VPN connection to Subscription1. The datacenter contains a computer named Server1 that hasMicrosoft SQL Server 2016 installed. Server is prevented from accessing the internet.An Azure logic app resource named LogicApp1 requires write access to a database on Server1.You need to recommend a solution to provide LogicApp1 with the ability to access Server1.What should you recommend deploying on-premises and in Azure? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0018300001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 141,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -Your company develops a web service that is deployed to an Azure virtual machine named VM1. The web service allows an API to access real-time data fromVM1.The current virtual machine deployment is shown in the Deployment exhibit.The chief technology officer (CTO) sends you the following email message: "Our developers have deployed the web service to a virtual machine named VM1.Testing has shown that the API is accessible from VM1 and VM2. Our partners must be able to connect to the API over the Internet. Partners will use this data in applications that they develop."You deploy an Azure API Management (APIM) service. The relevant API Management configuration is shown in the API exhibit.For each of the following statements, select Yes if the statement is true. Otherwise, select No.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0018500001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 142,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -Your company has an existing web app that runs on Azure virtual machines.You need to ensure that the app is protected from SQL injection attempts and uses a layer-7 load balancer. The solution must minimize disruptions to the code of the app.What should you recommend? To answer, drag the appropriate services to the correct targets. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0018800001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 143,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are designing a microservices architecture that will be hosted in an Azure Kubernetes Service (AKS) cluster. Apps that will consume the microservices will be hosted on Azure virtual machines. The virtual machines and the AKS cluster will reside on the same virtual network.You need to design a solution to expose the microservices to the consumer apps. The solution must meet the following requirements:✑ Ingress access to the microservices must be restricted to a single private IP address and protected by using mutual TLS authentication.✑ The number of incoming microservice calls must be rate-limited.✑ Costs must be minimized.What should you include in the solution?`,
    options: [`Azure App Gateway with Azure Web Application Firewall (WAF)`, `Azure API Management Standard tier with a service endpoint`, `Azure Front Door with Azure Web Application Firewall (WAF)`, `Azure API Management Premium tier with virtual network connection`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure Kubernetes Service (AKS) simplifies deploying and managing containerized applications with automated upgrades, scaling, and integration with Azure services. The correct answer is: Azure API Management Premium tier with virtual network connection. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 144,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have a .NET web service named Service1 that performs the following tasks:✑ Reads and writes temporary files to the local file system.✑ Writes to the Application event log.You need to recommend a solution to host Service1 in Azure. The solution must meet the following requirements:✑ Minimize maintenance overhead.✑ Minimize costs.What should you include in the recommendation?`,
    options: [`an Azure App Service web app`, `an Azure virtual machine scale set`, `an App Service Environment (ASE)`, `an Azure Functions app`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 145,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `Your company has an app named App1 that uses data from the on-premises Microsoft SQL Server databases shown in the following table.App1 and the data are used on the first day of the month only. The data is not expected to grow more than 3 percent each year.The company is rewriting App1 as an Azure web app and plans to migrate all the data to Azure.You need to migrate the data to Azure SQL Database and ensure that the database is only available on the first day of each month.Which service tier should you use?`,
    options: [`vCore-based General Purpose`, `DTU-based Standard`, `vCore-based Business Critical`, `DTU-based Basic`],
    correct: [0],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0019200001.png`,
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 146,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have the Azure resources shown in the following table.You need to deploy a new Azure Firewall policy that will contain mandatory rules for all Azure Firewall deployments. The new policy will be configured as a parent policy for the existing policies.What is the minimum number of additional Azure Firewall policies you should create?`,
    options: [`0`, `1`, `2`, `3`],
    correct: [3],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0019100001.png`,
    multipleAnswers: false,
    explanation: `Azure Firewall provides centralized network security with stateful inspection, while NSGs offer distributed filtering at the subnet or NIC level. Use both for defense-in-depth. The correct answer is: 3. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 147,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Service Fabric`, `Azure Data Lake`, `Azure Service Bus`, `Azure Traffic Manager`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Service Bus. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 148,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Your company has 300 virtual machines hosted in a VMware environment. The virtual machines vary in size and have various utilization levels.You plan to move all the virtual machines to Azure.You need to recommend how many and what size Azure virtual machines will be required to move the current workloads to Azure. The solution must minimize administrative effort.What should you use to make the recommendation?`,
    options: [`Azure Pricing calculator`, `Azure Advisor`, `Azure Migrate`, `Azure Cost Management`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Migrate. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 149,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You plan to provision a High Performance Computing (HPC) cluster in Azure that will use a third-party scheduler.You need to recommend a solution to provision and manage the HPC cluster node.What should you include in the recommendation?`,
    options: [`Azure Automation`, `Azure CycleCloud`, `Azure Purview`, `Azure Lighthouse`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure CycleCloud. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 150,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You plan to deploy multiple instances of an Azure web app across several Azure regions.You need to design an access solution for the app. The solution must meet the following replication requirements:✑ Support rate limiting.✑ Balance requests between all instances.✑ Ensure that users can access the app in the event of a regional outage.Solution: You use Azure Traffic Manager to provide access to the app.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: No. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 151,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You plan to deploy multiple instances of an Azure web app across several Azure regions.You need to design an access solution for the app. The solution must meet the following replication requirements:✑ Support rate limiting.✑ Balance requests between all instances.✑ Ensure that users can access the app in the event of a regional outage.Solution: You use Azure Load Balancer to provide access to the app.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: No. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 152,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are designing an Azure App Service web app.You plan to deploy the web app to the North Europe Azure region and the West Europe Azure region.You need to recommend a solution for the web app. The solution must meet the following requirements:✑ Users must always access the web app from the North Europe region, unless the region fails.✑ The web app must be available to users if an Azure region is unavailable.✑ Deployment costs must be minimized.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0019600001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 153,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You plan to deploy multiple instances of an Azure web app across several Azure regions.You need to design an access solution for the app. The solution must meet the following replication requirements:✑ Support rate limiting.✑ Balance requests between all instances.✑ Ensure that users can access the app in the event of a regional outage.Solution: You use Azure Application Gateway to provide access to the app.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Front Door provides global load balancing with SSL offloading, while Application Gateway offers regional Layer 7 load balancing with WAF capabilities. Choose based on global vs regional requirements. The correct answer is: No. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 154,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -Your company has two on-premises sites in New York and Los Angeles and Azure virtual networks in the East US Azure region and the West US Azure region.Each on-premises site has ExpressRoute Global Reach circuits to both regions.You need to recommend a solution that meets the following requirements:✑ Outbound traffic to the internet from workloads hosted on the virtual networks must be routed through the closest available on-premises site.✑ If an on-premises site fails, traffic from the workloads on the virtual networks to the internet must reroute automatically to the other site.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0020100001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 155,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are designing an application that will use Azure Linux virtual machines to analyze video files. The files will be uploaded from corporate offices that connect toAzure by using ExpressRoute.You plan to provision an Azure Storage account to host the files.You need to ensure that the storage account meets the following requirements:✑ Supports video files of up to 7 TB✑ Provides the highest availability possible✑ Ensures that storage is optimized for the large video files✑ Ensures that files from the on-premises network are uploaded by using ExpressRouteHow should you configure the storage account? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0020300001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 156,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -A company plans to implement an HTTP-based API to support a web app. The web app allows customers to check the status of their orders.The API must meet the following requirements:✑ Implement Azure Functions.✑ Provide public read-only operations.✑ Prevent write operations.You need to recommend which HTTP methods and authorization level to configure.What should you recommend? To answer, configure the appropriate options in the dialog box in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0020600001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 157,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription.You need to recommend a solution to provide developers with the ability to provision Azure virtual machines. The solution must meet the following requirements:✑ Only allow the creation of the virtual machines in specific regions.✑ Only allow the creation of specific sizes of virtual machines.What should you include in the recommendation?`,
    options: [`Azure Resource Manager (ARM) templates`, `Azure Policy`, `Conditional Access policies`, `role-based access control (RBAC)`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Policy. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 158,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You have an on-premises network that uses an IP address space of 172.16.0.0/16.You plan to deploy 30 virtual machines to a new Azure subscription.You identify the following technical requirements:✑ All Azure virtual machines must be placed on the same subnet named Subnet1.✑ All the Azure virtual machines must be able to communicate with all on-premises servers.✑ The servers must be able to communicate between the on-premises network and Azure by using a site-to-site VPN.You need to recommend a subnet design that meets the technical requirements.What should you include in the recommendation? To answer, drag the appropriate network addresses to the correct subnets. Each network address may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0020800004.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 159,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have data files in Azure Blob Storage.You plan to transform the files and move them to Azure Data Lake Storage.You need to transform the data by using mapping data flow.Which service should you use?`,
    options: [`Azure Databricks`, `Azure Storage Sync`, `Azure Data Factory`, `Azure Data Box Gateway`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Azure Blob Storage in General Purpose v2 accounts supports encryption scopes for per-blob encryption with customer-managed keys, enabling multi-tenant scenarios where each customer's data is encrypted separately. The correct answer is: Azure Data Factory. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 160,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription.You need to deploy an Azure Kubernetes Service (AKS) solution that will use Windows Server 2019 nodes. The solution must meet the following requirements:✑ Minimize the time it takes to provision compute resources during scale-out operations.✑ Support autoscaling of Windows Server containers.Which scaling option should you recommend?`,
    options: [`Kubernetes version 1.20.2 or newer`, `Virtual nodes with Virtual Kubelet ACI`, `cluster autoscaler`, `horizontal pod autoscaler`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Azure Kubernetes Service (AKS) simplifies deploying and managing containerized applications with automated upgrades, scaling, and integration with Azure services. The correct answer is: cluster autoscaler. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 161,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription.You need to recommend an Azure Kubernetes Service (AKS) solution that will use Linux nodes. The solution must meet the following requirements:✑ Minimize the time it takes to provision compute resources during scale-out operations.✑ Support autoscaling of Linux containers.✑ Minimize administrative effort.Which scaling option should you recommend?`,
    options: [`horizontal pod autoscaler`, `cluster autoscaler`, `virtual nodes`, `Virtual Kubelet`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Azure Kubernetes Service (AKS) simplifies deploying and managing containerized applications with automated upgrades, scaling, and integration with Azure services. The correct answer is: virtual nodes. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 162,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -Your on-premises network contains a file server named Server1 that stores 500 GB of data.You need to use Azure Data Factory to copy the data from Server1 to Azure Storage.You add a new data factory.What should you do next? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0021100001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 163,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are designing an order processing system in Azure that will contain the Azure resources shown in the following table.The order processing system will have the following transaction flow:✑ A customer will place an order by using App1.✑ When the order is received, App1 will generate a message to check for product availability at vendor 1 and vendor 2.✑ An integration component will process the message, and then trigger either Function1 or Function2 depending on the type of order.✑ Once a vendor confirms the product availability, a status message for App1 will be generated by Function1 or Function2.✑ All the steps of the transaction will be logged to storage1.Which type of resource should you recommend for the integration component?`,
    options: [`an Azure Service Bus queue`, `an Azure Data Factory pipeline`, `an Azure Event Grid domain`, `an Azure Event Hubs capture`],
    correct: [1],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0021300001.png`,
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: an Azure Data Factory pipeline. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 164,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have 100 Microsoft SQL Server Integration Services (SSIS) packages that are configured to use 10 on-premises SQL Server databases as their destinations.You plan to migrate the 10 on-premises databases to Azure SQL Database.You need to recommend a solution to create Azure-SQL Server Integration Services (SSIS) packages. The solution must ensure that the packages can target theSQL Database instances as their destinations.What should you include in the recommendation?`,
    options: [`Data Migration Assistant (DMA)`, `Azure Data Factory`, `Azure Data Catalog`, `SQL Server Migration Assistant (SSMA)`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure Data Factory. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 165,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure virtual machine named VM1 that runs Windows Server 2019 and contains 500 GB of data files.You are designing a solution that will use Azure Data Factory to transform the data files, and then load the files to Azure Data Lake Storage.What should you deploy on VM1 to support the design?`,
    options: [`the On-premises data gateway`, `the Azure Pipelines agent`, `the self-hosted integration runtime`, `the Azure File Sync agent`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Azure Data Lake Storage Gen2 combines the scalability of blob storage with hierarchical namespace for efficient data organization and POSIX-compliant ACLs for fine-grained access control. The correct answer is: the self-hosted integration runtime. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 166,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure Active Directory (Azure AD) tenant that syncs with an on-premises Active Directory domain.Your company has a line-of-business (LOB) application that was developed internally.You need to implement SAML single sign-on (SSO) and enforce multi-factor authentication (MFA) when users attempt to access the application from an unknown location.Which two features should you include in the solution? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.`,
    options: [`Azure AD Privileged Identity Management (PIM)`, `Azure Application Gateway`, `Azure AD enterprise applications`, `Azure AD Identity Protection`, `Conditional Access policies`],
    correct: [2, 4],
    multipleAnswers: true,
    explanation: `Single sign-on (SSO) enables users to sign in once and access multiple applications. Azure AD supports various SSO methods including SAML, OpenID Connect, and password-based for legacy apps. The correct answers are: Azure AD enterprise applications; Conditional Access policies. These options work together to fulfill all the requirements specified in the question.`
  },
  {
    id: 167,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You plan to automata the deployment of resources to Azure subscriptions.What is a difference between using Azure Blueprints and Azure Resource Manager (ARM) templates?`,
    options: [`ARM templates remain connected to the deployed resources.`, `Only blueprints can contain policy definitions.`, `Only ARM templates can contain policy definitions.`, `Blueprints remain connected to the deployed resources.`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure Blueprints enable declarative deployment of resource templates, policies, and role assignments as a single versioned package that can be assigned to subscriptions. The correct answer is: Blueprints remain connected to the deployed resources.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 168,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have the resources shown in the following table.You create a new resource group in Azure named RG2.You need to move the virtual machines to RG2.What should you use to move each virtual machine? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0021700001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 169,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have the Azure resources shown in the following table.You need to design a solution that provides on-premises network connectivity to SQLDB1 through PE1.How should you configure name resolution? To answer select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0022200001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 170,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You plan to deploy an Azure App Service web app that will have multiple instances across multiple Azure regions.You need to recommend a load balancing service for the planned deployment The solution must meet the following requirements:✑ Maintain access to the app in the event of a regional outage.✑ Support Azure Web Application Firewall (WAF).✑ Support cookie-based affinity.✑ Support URL routing.What should you include in the recommendation?`,
    options: [`Azure Front Door`, `Azure Traffic Manager`, `Azure Application Gateway`, `Azure Load Balancer`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 171,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are designing a microservices architecture that will support a web application.The solution must meet the following requirements:✑ Deploy the solution on-premises and to Azure.Support low-latency and hyper-scale operations.✑ Allow independent upgrades to each microservice.✑ Set policies for performing automatic repairs to the microservices.You need to recommend a technology.What should you recommend?`,
    options: [`Azure Container Instance`, `Azure Logic App`, `Azure Service Fabric`, `Azure virtual machine scale set`],
    correct: [2],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0022400003.png`,
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: Azure Service Fabric. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 172,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You plan to deploy multiple instances of an Azure web app across several Azure regions.You need to design an access solution for the app. The solution must meet the following replication requirements:✑ Support rate limiting.✑ Balance requests between all instances.✑ Ensure that users can access the app in the event of a regional outage.Solution: You use Azure Front Door to provide access to the app.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 173,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription.You need to recommend a solution to provide developers with the ability to provision Azure virtual machines. The solution must meet the following requirements:✑ Only allow the creation of the virtual machines in specific regions.✑ Only allow the creation of specific sizes of virtual machines.What should you include in the recommendation?`,
    options: [`Attribute-based access control (ABAC)`, `Azure Policy`, `Conditional Access policies`, `role-based access control (RBAC)`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Policy. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 174,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Azure Activity Log`, `Azure Arc`, `Azure Analysis Services`, `Azure Monitor action groups`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 175,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Notification Hubs`, `Azure Data Lake`, `Azure Service Bus`, `Azure Blob Storage`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Service Bus. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 176,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have 100 devices that write performance data to Azure Blob Storage.You plan to store and analyze the performance data in an Azure SQL database.You need to recommend a solution to continually copy the performance data to the Azure SQL database.What should you include in the recommendation?`,
    options: [`Azure Data Factory`, `Data Migration Assistant (DMA)`, `Azure Data Box`, `Azure Database Migration Service`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 177,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a storage solution for the records of a mission critical application. The solution must provide a Service Level Agreement (SLA) for the latency of write operations and the throughput.What should you include in the recommendation?`,
    options: [`Azure Data Lake Storage Gen2`, `Azure Blob Storage`, `Azure SQL`, `Azure Cosmos DB`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Cosmos DB. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 178,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a data storage solution that meets the following requirements:✑ Ensures that applications can access the data by using a REST connection✑ Hosts 20 independent tables of varying sizes and usage patterns✑ Automatically replicates the data to a second Azure region✑ Minimizes costsWhat should you recommend?`,
    options: [`an Azure SQL Database elastic pool that uses active geo-replication`, `tables in an Azure Storage account that use geo-redundant storage (GRS)`, `tables in an Azure Storage account that use read-access geo-redundant storage (RA-GRS)`, `an Azure SQL database that uses active geo-replication`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: tables in an Azure Storage account that use geo-redundant storage (GRS). This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 179,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You are planning a storage solution. The solution must meet the following requirements:✑ Support at least 500 requests per second.✑ Support a large image, video, and audio streams.Which type of Azure Storage account should you provision?`,
    options: [`standard general-purpose v2`, `premium block blobs`, `premium page blobs`, `premium file shares`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Blob Storage in General Purpose v2 accounts supports encryption scopes for per-blob encryption with customer-managed keys, enabling multi-tenant scenarios where each customer's data is encrypted separately. The correct answer is: premium block blobs. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 180,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are designing a software as a service (SaaS) application that will enable Azure Active Directory (Azure AD) users to create and publish online surveys. TheSaaS application will have a front-end web app and a back-end web API. The web app will rely on the web API to handle updates to customer surveys.You need to design an authorization flow for the SaaS application. The solution must meet the following requirements:✑ To access the back-end web API, the web app must authenticate by using OAuth 2 bearer tokens.✑ The web app must authenticate by using the identities of individual users.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0023200001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 181,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You plan to create an Azure environment that will contain a root management group and 10 child management groups. Each child management group will contain five Azure subscriptions. You plan to have between 10 and 30 resource groups in each subscription.You need to design an Azure governance solution. The solution must meet the following requirements:✑ Use Azure Blueprints to control governance across all the subscriptions and resource groups.✑ Ensure that Blueprints-based configurations are consistent across all the subscriptions and resource groups.✑ Minimize the number of blueprint definitions and assignments.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0023500004.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 182,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You are designing a virtual machine that will run Microsoft SQL Server and contain two data disks. The first data disk will store log files, and the second data disk will store data. Both disks are P40 managed disks.You need to recommend a host caching method for each disk. The method must provide the best overall performance for the virtual machine while preserving the integrity of the SQL data and logs.Which host caching method should you recommend for each disk? To answer, drag the appropriate methods to the correct disks. Each method may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0023700001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 183,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are designing a solution that calculates 3D geometry from height-map data.You need to recommend a solution that meets the following requirements:✑ Performs calculations in Azure.✑ Ensures that each node can communicate data to every other node.✑ Maximizes the number of nodes to calculate multiple scenes as fast as possible.Minimizes the amount of effort to implement the solution.Which two actions should you include in the recommendation? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.`,
    options: [`Enable parallel file systems on Azure.`, `Create a render farm that uses virtual machines.`, `Create a render farm that uses virtual machine scale sets.`, `Create a render farm that uses Azure Batch.`, `Enable parallel task execution on compute nodes.`],
    correct: [3, 4],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0023800005.png`,
    multipleAnswers: true,
    explanation: `Based on the requirements stated in the question, The correct answers are: Create a render farm that uses Azure Batch.; Enable parallel task execution on compute nodes.. These options work together to fulfill all the requirements specified in the question.`
  },
  {
    id: 184,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an on-premises application that consumes data from multiple databases. The application code references database tables by using a combination of the server, database, and table name.You need to migrate the application data to Azure.To which two services can you migrate the application data to achieve the goal? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.`,
    options: [`SQL Server Stretch Database`, `SQL Server on an Azure virtual machine`, `Azure SQL Database`, `Azure SQL Managed Instance`],
    correct: [1, 3],
    multipleAnswers: true,
    explanation: `Based on the requirements stated in the question, The correct answers are: SQL Server on an Azure virtual machine; Azure SQL Managed Instance. These options work together to fulfill all the requirements specified in the question.`
  },
  {
    id: 185,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You plan to migrate on-premises Microsoft SQL Server databases to Azure.You need to recommend a deployment and resiliency solution that meets the following requirements:✑ Supports user-initiated backups✑ Supports multiple automatically replicated instances across Azure regions✑ Minimizes administrative effort to implement and maintain business continuityWhat should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0024100001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 186,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:✑ Failover between replicas of the database must occur without any data loss.✑ The database must remain available in the event of a zone outage.✑ Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Managed Instance Business Critical`, `Azure SQL Managed Instance General Purpose`, `Azure SQL Database Business Critical`, `Azure SQL Database Serverless`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Serverless. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 187,
    category: `Design Business Continuity Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure web app that uses an Azure key vault named KeyVault1 in the West US Azure region.You are designing a disaster recovery plan for KeyVault1.You plan to back up the keys in KeyVault1.You need to identify to where you can restore the backup.What should you identify?`,
    options: [`any region worldwide`, `the same region only`, `KeyVault1 only`, `the same geography only`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Shared Access Signatures (SAS) provide secure delegated access to Azure Storage resources with fine-grained control over permissions, IP restrictions, and time validity without sharing account keys. The correct answer is: the same geography only. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 188,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed at the same time as the Azure SQL databases.The company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service instances must reside in the same region.You need to recommend a solution to meet the regulatory requirement.Solution: You recommend creating resource groups based on locations and implementing resource locks on the resource groups.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: No. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 189,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an on-premises line-of-business (LOB) application that uses a Microsoft SQL Server instance as the backend.You plan to migrate the on-premises SQL Server instance to Azure virtual machines.You need to recommend a highly available SQL Server deployment that meets the following requirements:✑ Minimizes costsMinimizes failover time if a single server failsWhat should you include in the recommendation?`,
    options: [`an Always On availability group that has premium storage disks and a virtual network name (VNN)`, `an Always On Failover Cluster Instance that has a virtual network name (VNN) and a standard file share`, `an Always On availability group that has premium storage disks and a distributed network name (DNN)`, `an Always On Failover Cluster Instance that has a virtual network name (VNN) and a premium file share`],
    correct: [2],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0024400002.png`,
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: an Always On availability group that has premium storage disks and a distributed network name (DNN). This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 190,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed at the same time as the Azure SQL databases.The company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service instances must reside in the same region.You need to recommend a solution to meet the regulatory requirement.Solution: You recommend using the Regulatory compliance dashboard in Microsoft Defender for Cloud.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: No. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 191,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed at the same time as the Azure SQL databases.The company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service instances must reside in the same region.You need to recommend a solution to meet the regulatory requirement.Solution: You recommend using an Azure Policy initiative to enforce the location.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 192,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You plan to move a web app named App1 from an on-premises datacenter to Azure.App1 depends on a custom COM component that is installed on the host server.You need to recommend a solution to host App1 in Azure. The solution must meet the following requirements:✑ App1 must be available to users if an Azure datacenter becomes unavailable.✑ Costs must be minimized.What should you include in the recommendation?`,
    options: [`In two Azure regions, deploy a load balancer and a web app.`, `In two Azure regions, deploy a load balancer and a virtual machine scale set.`, `Deploy a load balancer and a virtual machine scale set across two availability zones.`, `In two Azure regions, deploy an Azure Traffic Manager profile and a web app.`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: Deploy a load balancer and a virtual machine scale set across two availability zones.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 193,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You plan to deploy an application named App1 that will run in containers on Azure Kubernetes Service (AKS) clusters. The AKS clusters will be distributed across four Azure regions.You need to recommend a storage solution to ensure that updated container images are replicated automatically to all the Azure regions hosting the AKS clusters.Which storage solution should you recommend?`,
    options: [`geo-redundant storage (GRS) accounts`, `Premium SKU Azure Container Registry`, `Azure Content Delivery Network (CDN)`, `Azure Cache for Redis`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Kubernetes Service (AKS) simplifies deploying and managing containerized applications with automated upgrades, scaling, and integration with Azure services. The correct answer is: Premium SKU Azure Container Registry. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 194,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure Active Directory (Azure AD) tenant.You plan to deploy Azure Cosmos DB databases that will use the SQL API.You need to recommend a solution to provide specific Azure AD user accounts with read access to the Cosmos DB databases.What should you include in the recommendation?`,
    options: [`shared access signatures (SAS) and Conditional Access policies`, `certificates and Azure Key Vault`, `master keys and Azure Information Protection policies`, `a resource token and an Access control (IAM) role assignment`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure Synapse Link for Cosmos DB enables near real-time analytics over operational data without impacting transactional workloads by automatically syncing data to an analytical store. The correct answer is: a resource token and an Access control (IAM) role assignment. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 195,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend an Azure Storage solution that meets the following requirements:✑ The storage must support 1 PB of data.✑ The data must be stored in blob storage.✑ The storage must support three levels of subfolders.✑ The storage must support access control lists (ACLs).What should you include in the recommendation?`,
    options: [`a premium storage account that is configured for block blobs`, `a general purpose v2 storage account that has hierarchical namespace enabled`, `a premium storage account that is configured for page blobs`, `a premium storage account that is configured for file shares and supports large file shares`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Blob Storage in General Purpose v2 accounts supports encryption scopes for per-blob encryption with customer-managed keys, enabling multi-tenant scenarios where each customer's data is encrypted separately. The correct answer is: a general purpose v2 storage account that has hierarchical namespace enabled. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 196,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You manage a database environment for a Microsoft Volume Licensing customer named Contoso, Ltd. Contoso uses License Mobility through SoftwareAssurance.You need to deploy 50 databases. The solution must meet the following requirements:✑ Support automatic scaling.✑ Minimize Microsoft SQL Server licensing costs.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0025300001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 197,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an on-premises application named App1 that uses an Oracle database.You plan to use Azure Databricks to transform and load data from App1 to an Azure Synapse Analytics instance.You need to ensure that the App1 data is available to Databricks.Which two Azure services should you include in the solution? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.`,
    options: [`Azure Data Box Gateway`, `Azure Import/Export service`, `Azure Data Lake Storage`, `Azure Data Box Edge`, `Azure Data Factory`],
    correct: [2, 4],
    multipleAnswers: true,
    explanation: `Based on the requirements stated in the question, The correct answers are: Azure Data Lake Storage; Azure Data Factory. These options work together to fulfill all the requirements specified in the question.`
  },
  {
    id: 198,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Notification Hubs`, `Azure Service Fabric`, `Azure Queue Storage`, `Azure Data Lake`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Queue Storage. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 199,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are designing a cost-optimized solution that uses Azure Batch to run two types of jobs on Linux nodes. The first job type will consist of short-running tasks for a development environment. The second job type will consist of long-running Message Passing Interface (MPI) applications for a production environment that requires timely job completion.You need to recommend the pool type and node type for each job type. The solution must minimize compute charges and leverage Azure Hybrid Benefit whenever possible.What should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0025500001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 200,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Notification Hubs`, `Azure Service Fabric`, `Azure Queue Storage`, `Azure Application Gateway`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Queue Storage. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
];

