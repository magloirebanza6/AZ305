// Questions 101 to 150
import { Question } from './types';

export const questions3: Question[] = [
  {
    id: 101,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You plan to use Azure SQL as a database platform.You need to recommend an Azure SQL product and service tier that meets the following requirements:• Automatically scales compute resources based on the workload demand• Provides per second billingWhat should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image209.png"],
    backImage: "/images/questions/image210.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/121181-exam-az-305-topic-2-question-33-discussion/"
  },
  {
    id: 102,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription.You need to deploy a solution that will provide point-in-time restore for blobs in storage accounts that have blob versioning and blob soft delete enabled.Which type of blob should you create, and what should you enable for the accounts? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image220.png"],
    backImage: "/images/questions/image221.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122642-exam-az-305-topic-2-question-34-discussion/"
  },
  {
    id: 103,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -Your company, named Contoso, Ltd., has an Azure subscription that contains the following resources:• An Azure Synapse Analytics workspace named contosoworkspace1• An Azure Data Lake Storage account named contosolake1• An Azure SQL database named contososql1The product data of Contoso is copied from contososql1 to contosolake1.Contoso has a partner company named Fabrikam Inc. Fabrikam has an Azure subscription that contains the following resources:• A virtual machine named FabrikamVM1 that runs Microsoft SQL Server 2019• An Azure Storage account named fabrikamsa1Contoso plans to upload the research data on FabrikamVM1 to contosolake1. During the upload, the research data must be transformed to the data formats used by Contoso.The data in contosolake1 will be analyzed by using contosoworkspace1.You need to recommend a solution that meets the following requirements:• Upload and transform the FabrikamVM1 research data.• Provide Fabrikam with restricted access to snapshots of the data in contosoworkspace1.What should you recommend for each requirement? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image222.png"],
    backImage: "/images/questions/image223.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122643-exam-az-305-topic-2-question-35-discussion/"
  },
  {
    id: 104,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are designing a data pipeline that will integrate large amounts of data from multiple on-premises Microsoft SQL Server databases into an analytics platform in Azure. The pipeline will include the following actions:• Database updates will be exported periodically into a staging area in Azure Blob storage.• Data from the blob storage will be cleansed and transformed by using a highly parallelized load process.• The transformed data will be loaded to a data warehouse.• Each batch of updates will be used to refresh an online analytical processing (OLAP) model in a managed serving layer.• The managed serving layer will be used by thousands of end users.You need to implement the data warehouse and serving layers.What should you use? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image224.png"],
    backImage: "/images/questions/image225.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122759-exam-az-305-topic-2-question-36-discussion/"
  },
  {
    id: 105,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription.You need to deploy a relational database. The solution must meet the following requirements:• Support multiple read-only replicas.• Automatically load balance read-only requests across all the read-only replicas.• Minimize administrative effortWhat should you use? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image243.png"],
    backImage: "/images/questions/image244.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/130623-exam-az-305-topic-2-question-37-discussion/"
  },
  {
    id: 106,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have an app named App1 that uses an Azure Blob Storage container named app1data.App1 uploads a cumulative transaction log file named File1.txt to a block blob in app1data once every hour. File1.txt only stores transaction data from the current day.You need to ensure that you can restore the last uploaded version of File1.txt from any day for up to 30 days after the file was overwritten. The solution must minimize storage space.What should you include in the solution?",
    options: [
      "A. container soft delete",
      "B. blob snapshots",
      "C. blob soft delete",
      "D. blob versioning"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/130404-exam-az-305-topic-2-question-38-discussion/"
  },
  {
    id: 107,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have 12 on-premises data sources that contain customer information and consist of Microsoft SQL Server, MySQL, and Oracle databases.You have an Azure subscription.You plan to create an Azure Data Lake Storage account that will consolidate the customer information for analysis and reporting.You need to recommend a solution to automatically copy new information from the data sources to the Data Lake Storage account by using extract, transform and load (ETL). The solution must minimize administrative effort.What should you include in the recommendation?",
    options: [
      "A. Azure Data Factory",
      "B. Azure Data Explorer",
      "C. Azure Data Share",
      "D. Azure Data Studio"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/130346-exam-az-305-topic-2-question-39-discussion/"
  },
  {
    id: 108,
    category: "Design Business Continuity Solutions",
    type: "multiple-choice",
    question: "You have SQL Server on an Azure virtual machine. The databases are written to nightly as part of a batch process.You need to recommend a disaster recovery solution for the data. The solution must meet the following requirements:✑ Provide the ability to recover in the event of a regional outage.✑ Support a recovery time objective (RTO) of 15 minutes.✑ Support a recovery point objective (RPO) of 24 hours.✑ Support automated recovery.✑ Minimize costs.What should you include in the recommendation?",
    options: [
      "A. Azure virtual machine availability sets",
      "B. Azure Disk Backup",
      "C. an Always On availability group",
      "D. Azure Site Recovery"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/68098-exam-az-305-topic-3-question-1-discussion/"
  },
  {
    id: 109,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "HOTSPOT -You plan to deploy the backup policy shown in the following exhibit.Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0013200001.png", "/images/questions/0013300001.png"],
    backImage: "/images/questions/0013400001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67838-exam-az-305-topic-3-question-2-discussion/"
  },
  {
    id: 110,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:✑ Provide access to the full .NET framework.Provide redundancy if an Azure region fails.✑ Grant administrators access to the operating system to install custom application dependencies.Solution: You deploy two Azure virtual machines to two Azure regions, and you create an Azure Traffic Manager profile.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [0],
    multipleAnswers: false,
    images: ["/images/questions/0013400003.png"],
    explanation: "CORRECT: A. Azure VM availability options: Availability Zones (99.99% SLA, datacenter failure), Availability Sets (99.95% SLA, rack failure), Scale Sets for auto-scaling.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67781-exam-az-305-topic-3-question-3-discussion/"
  },
  {
    id: 111,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:✑ Provide access to the full .NET framework.✑ Provide redundancy if an Azure region fails.✑ Grant administrators access to the operating system to install custom application dependencies.Solution: You deploy two Azure virtual machines to two Azure regions, and you deploy an Azure Application Gateway.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure VM availability options: Availability Zones (99.99% SLA, datacenter failure), Availability Sets (99.95% SLA, rack failure), Scale Sets for auto-scaling.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67780-exam-az-305-topic-3-question-4-discussion/"
  },
  {
    id: 112,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You plan to create an Azure Storage account that will host file shares. The shares will be accessed from on-premises applications that are transaction intensive.You need to recommend a solution to minimize latency when accessing the file shares. The solution must provide the highest-level of resiliency for the selected storage tier.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0013700001.png"],
    backImage: "/images/questions/0013800001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67778-exam-az-305-topic-3-question-5-discussion/"
  },
  {
    id: 113,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:✑ Provide access to the full .NET framework.✑ Provide redundancy if an Azure region fails.✑ Grant administrators access to the operating system to install custom application dependencies.Solution: You deploy an Azure virtual machine scale set that uses autoscaling.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure VM availability options: Availability Zones (99.99% SLA, datacenter failure), Availability Sets (99.95% SLA, rack failure), Scale Sets for auto-scaling.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67779-exam-az-305-topic-3-question-6-discussion/"
  },
  {
    id: 114,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You need to recommend an Azure Storage account configuration for two applications named Application1 and Application2. The configuration must meet the following requirements:✑ Storage for Application1 must provide the highest possible transaction rates and the lowest possible latency.✑ Storage for Application2 must provide the lowest possible storage costs per GB.✑ Storage for both applications must be available in an event of datacenter failure.✑ Storage for both applications must be optimized for uploads and downloads.What should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0014100001.png"],
    backImage: "/images/questions/0014200001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80236-exam-az-305-topic-3-question-7-discussion/"
  },
  {
    id: 115,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You plan to deploy 10 applications to Azure. The applications will be deployed to two Azure Kubernetes Service (AKS) clusters. Each cluster will be deployed to a separate Azure region.The application deployment must meet the following requirements:✑ Ensure that the applications remain available if a single AKS cluster fails.✑ Ensure that the connection traffic over the internet is encrypted by using SSL without having to configure SSL on each container.Which service should you include in the recommendation?",
    options: [
      "A. Azure Front Door",
      "B. Azure Traffic Manager",
      "C. AKS ingress controller",
      "D. Azure Load Balancer"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure Kubernetes Service (AKS) provides managed Kubernetes with integrated CI/CD, monitoring, and security. Supports RBAC, network policies, and Microsoft Entra integration.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80249-exam-az-305-topic-3-question-9-discussion/"
  },
  {
    id: 116,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "HOTSPOT -You plan to develop a new app that will store business critical data. The app must meet the following requirements:✑ Prevent new data from being modified for one year.✑ Maximize data resiliency.✑ Minimize read latency.What storage solution should you recommend for the app? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0014300004.jpg"],
    backImage: "/images/questions/image269.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78938-exam-az-305-topic-3-question-8-discussion/"
  },
  {
    id: 117,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an on-premises file server that stores 2 TB of data files.You plan to move the data files to Azure Blob Storage in the West Europe Azure region.You need to recommend a storage account type to store the data files and a replication solution for the storage account. The solution must meet the following requirements:✑ Be available if a single Azure datacenter fails.✑ Support storage tiers.✑ Minimize cost.What should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0014500004.png"],
    backImage: "/images/questions/0014600001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80252-exam-az-305-topic-3-question-10-discussion/"
  },
  {
    id: 118,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "DRAG DROP -Your company identifies the following business continuity and disaster recovery objectives for virtual machines that host sales, finance, and reporting applications in the company's on-premises data center:✑ The sales application must be able to fail over to a second on-premises data center.✑ The reporting application must be able to recover point-in-time data at a daily granularity. The RTO is eight hours.✑ The finance application requires that data be retained for seven years. In the event of a disaster, the application must be able to run from Azure. The recovery time objective (RTO) is 10 minutes.You need to recommend which services meet the business continuity and disaster recovery objectives. The solution must minimize costs.What should you recommend for each application? To answer, drag the appropriate services to the correct applications. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:",
    frontImages: ["/images/questions/0014900004.jpg"],
    backImage: "/images/questions/0015000001.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80255-exam-az-305-topic-3-question-12-discussion/"
  },
  {
    id: 119,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure web app named App1 and an Azure key vault named KV1.App1 stores database connection strings in KV1.App1 performs the following types of requests to KV1:✑ Get✑ List✑ Wrap✑ DeleteUnwrap -✑ Backup✑ Decrypt✑ EncryptYou are evaluating the continuity of service for App1.You need to identify the following if the Azure region that hosts KV1 becomes unavailable:✑ To where will KV1 fail over?✑ During the failover, which request type will be unavailable?What should you identify? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0014600006.png", "/images/questions/0014700006.jpg"],
    backImage: "/images/questions/0014800001.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80253-exam-az-305-topic-3-question-11-discussion/"
  },
  {
    id: 120,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:✑ Failover between replicas of the database must occur without any data loss.✑ The database must remain available in the event of a zone outage.✑ Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Managed Instance Business Critical",
      "B. Azure SQL Database Premium",
      "C. Azure SQL Database Basic",
      "D. Azure SQL Managed Instance General Purpose"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78412-exam-az-305-topic-3-question-13-discussion/"
  },
  {
    id: 121,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:✑ Provide access to the full .NET framework.✑ Provide redundancy if an Azure region fails.✑ Grant administrators access to the operating system to install custom application dependencies.Solution: You deploy a web app in an Isolated App Service plan.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80258-exam-az-305-topic-3-question-15-discussion/"
  },
  {
    id: 122,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:✑ Failover between replicas of the database must occur without any data loss.✑ The database must remain available in the event of a zone outage.✑ Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Managed Instance Business Critical",
      "B. Azure SQL Database Premium",
      "C. Azure SQL Database Basic",
      "D. Azure SQL Database Hyperscale"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80378-exam-az-305-topic-3-question-14-discussion/"
  },
  {
    id: 123,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:✑ Failover between replicas of the database must occur without any data loss.✑ The database must remain available in the event of a zone outage.✑ Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Serverless",
      "B. Azure SQL Database Business Critical",
      "C. Azure SQL Database Basic",
      "D. Azure SQL Database Standard"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79037-exam-az-305-topic-3-question-16-discussion/"
  },
  {
    id: 124,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an on-premises Microsoft SQL Server database named SQL1.You plan to migrate SQL1 to Azure.You need to recommend a hosting solution for SQL1. The solution must meet the following requirements:• Support the deployment of multiple secondary, read-only replicas.• Support automatic replication between primary and secondary replicas.• Support failover between primary and secondary replicas within a 15-minute recovery time objective (RTO).What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image155.png"],
    backImage: "/images/questions/image156.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94051-exam-az-305-topic-3-question-17-discussion/"
  },
  {
    id: 125,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have two on-premises Microsoft SQL Server 2017 instances that host an Always On availability group named AG1. AG1 contains a single database named DB1.You have an Azure subscription that contains a virtual machine named VM1. VM1 runs Linux and contains a SQL Server 2019 instance.You need to migrate DB1 to VM1. The solution must minimize downtime on DB1.What should you do? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image157.png"],
    backImage: "/images/questions/image158.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94059-exam-az-305-topic-3-question-18-discussion/"
  },
  {
    id: 126,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are building an Azure web app that will store the Personally Identifiable Information (PII) of employees.You need to recommend an Azure SQL. Database solution for the web app. The solution must meet the following requirements:• Maintain availability in the event of a single datacenter outage.• Support the encryption of specific columns that contain PII.• Automatically scale up during payroll operations.• Minimize costs.What should you include in the recommendations? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image170.png"],
    backImage: "/images/questions/image270.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95554-exam-az-305-topic-3-question-19-discussion/"
  },
  {
    id: 127,
    category: "Design Business Continuity Solutions",
    type: "multiple-choice",
    question: "You plan to deploy an Azure Database for MySQL flexible server named Server1 to the East US Azure region.You need to implement a business continuity solution for Server1. The solution must minimize downtime in the event of a failover to a paired region.What should you do?",
    options: [
      "A. Create a read replica.",
      "B. Store the database files in Azure premium file shares.",
      "C. Implement Geo-redundant backup.",
      "D. Configure native MySQL replication."
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106707-exam-az-305-topic-3-question-20-discussion/"
  },
  {
    id: 128,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription that contains the resources shown in the following table.You need to recommend a load balancing solution that will distribute incoming traffic for VMSS1 across NVA1 and NVA2. The solution must minimize administrative effort.What should you include in the recommendation?",
    options: [
      "A. Gateway Load Balancer",
      "B. Azure Front Door",
      "C. Azure Application Gateway",
      "D. Azure Traffic Manager"
    ],
    correct: [0],
    multipleAnswers: false,
    images: ["/images/questions/image211.png"],
    explanation: "CORRECT: A. Azure load balancing options: Load Balancer (L4), Application Gateway (L7 with WAF), Front Door (global HTTP), Traffic Manager (DNS-based).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/121225-exam-az-305-topic-3-question-21-discussion/"
  },
  {
    id: 129,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have 10 on-premises servers that run Windows Server.You need to perform daily backups of the servers to a Recovery Services vault. The solution must meet the following requirements:• Back up all the files and folders on the servers.• Maintain three copies of the backups in Azure.• Minimize costs.What should you configure? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image229.png"],
    backImage: "/images/questions/image230.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122765-exam-az-305-topic-3-question-23-discussion/"
  },
  {
    id: 130,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have the Azure subscriptions shown in the following table.Contoso.onmicrosft.com contains a user named User1.You need to deploy a solution to protect against ransomware attacks. The solution must meet the following requirements:• Ensure that all the resources in Sub1 are backed up by using Azure Backup.• Require that User1 first be assigned a role for Sub2 before the user can make major changes to the backup configuration.What should you create in each subscription? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image226.png", "/images/questions/image227.png"],
    backImage: "/images/questions/image228.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122725-exam-az-305-topic-3-question-22-discussion/"
  },
  {
    id: 131,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You plan to deploy a containerized web-app that will be hosted in five Azure Kubernetes Service (AKS) clusters. Each cluster will be hosted in a different Azure region.You need to provide access to the app from the internet. The solution must meet the following requirements:• Incoming HTTPS requests must be routed to the cluster that has the lowest network latency.• HTTPS traffic to individual pods must be routed via an ingress controller.• In the event of an AKS cluster outage, failover time must be minimized.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image231.png"],
    backImage: "/images/questions/image232.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122750-exam-az-305-topic-3-question-24-discussion/"
  },
  {
    id: 132,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription.You create a storage account that will store documents.You need to configure the storage account to meet the following requirements:• Ensure that retention policies are standardized across the subscription.• Ensure that data can be purged if the data is copied to an unauthorized location.Which two settings should you enable? To answer, select the appropriate settings in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image233.png"],
    backImage: "/images/questions/image271.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122794-exam-az-305-topic-3-question-25-discussion/"
  },
  {
    id: 133,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription.You are designing a solution for containerized apps. The solution must meet the following requirements:• Automatically scale the apps by creating additional instances.• Minimize administrative effort to maintain nodes and clusters.• Ensure that containerized apps are highly available across multiple availability zones.• Provide a central location for the lifecycle management and storage of container images.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image245.png"],
    backImage: "/images/questions/image246.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/130408-exam-az-305-topic-3-question-26-discussion/"
  },
  {
    id: 134,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "DRAG DROP -You plan to use Azure Storage to store data assets.You need to identify the procedure to fail over a general-purpose v2 account as part of a disaster recovery plan. The solution must meet the following requirements:• Apps must be able to access the storage account after a failover.• You must be able to fail back the storage account to the original location.• Downtime must be minimized.Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    frontImages: ["/images/questions/image247.png"],
    backImage: "/images/questions/image248.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/130392-exam-az-305-topic-3-question-27-discussion/"
  },
  {
    id: 135,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription that contains a Basic Azure virtual WAN named VirtualWAN1 and the virtual hubs shown in the following table.You have an ExpressRoute circuit in the US East Azure region.You need to create an ExpressRoute association to VirtualWAN1.What should you do first?",
    options: [
      "A. Upgrade VirtualWAN1 to Standard.",
      "B. Create a gateway on Hub1.",
      "C. Enable the ExpressRoute premium add-on.",
      "D. Create a hub virtual network in US East."
    ],
    correct: [0],
    multipleAnswers: false,
    images: ["/images/questions/0017800001.png"],
    explanation: "CORRECT: A. For network connectivity troubleshooting, Azure Network Watcher provides IP flow verify (checks NSG rules), connection troubleshoot, and packet capture capabilities.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67782-exam-az-305-topic-4-question-1-discussion/"
  },
  {
    id: 136,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription that contains a storage account.An application sometimes writes duplicate files to the storage account.You have a PowerShell script that identifies and deletes duplicate files in the storage account. Currently, the script is run manually after approval from the operations manager.You need to recommend a serverless solution that performs the following actions:✑ Runs the script once an hour to identify whether duplicate files exist✑ Sends an email notification to the operations manager requesting approval to delete the duplicate files✑ Processes an email response from the operations manager specifying whether the deletion was approved✑ Runs the script if the deletion was approvedWhat should you include in the recommendation?",
    options: [
      "A. Azure Logic Apps and Azure Event Grid",
      "B. Azure Logic Apps and Azure Functions",
      "C. Azure Pipelines and Azure Service Fabric",
      "D. Azure Functions and Azure Batch"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/68149-exam-az-305-topic-4-question-2-discussion/"
  },
  {
    id: 137,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Your company has the infrastructure shown in the following table.The on-premises Active Directory domain syncs with Microsoft Entra ID.Server1 runs an application named App1 that uses LDAP queries to verify user identities in the on-premises Active Directory domain.You plan to migrate Server1 to a virtual machine in Subscription1.A company security policy states that the virtual machines and services deployed to Subscription1 must be prevented from accessing the on-premises network.You need to recommend a solution to ensure that App1 continues to function after the migration. The solution must meet the security policy.What should you include in the recommendation?",
    options: [
      "A. Microsoft Entra ID Application Proxy",
      "B. the Active Directory Domain Services role on a virtual machine",
      "C. an Azure VPN gateway",
      "D. Microsoft Entra Domain Services (Microsoft Entra ID DS)"
    ],
    correct: [3],
    multipleAnswers: false,
    images: ["/images/questions/0018000001.png"],
    explanation: "CORRECT: D. Azure Policy enforces organizational standards at Management Group, Subscription, or Resource Group scope. Policies can audit, deny, or remediate non-compliant resources.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67592-exam-az-305-topic-4-question-3-discussion/"
  },
  {
    id: 138,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You need to design a solution that will execute custom C# code in response to an event routed to Azure Event Grid. The solution must meet the following requirements:✑ The executed code must be able to access the private IP address of a Microsoft SQL Server instance that runs on an Azure virtual machine.✑ Costs must be minimized.What should you include in the solution?",
    options: [
      "A. Azure Logic Apps in the Consumption plan",
      "B. Azure Functions in the Premium plan",
      "C. Azure Functions in the Consumption plan",
      "D. Azure Logic Apps in the integrated service environment"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure VM availability options: Availability Zones (99.99% SLA, datacenter failure), Availability Sets (99.95% SLA, rack failure), Scale Sets for auto-scaling.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67842-exam-az-305-topic-4-question-4-discussion/"
  },
  {
    id: 139,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an on-premises network and an Azure subscription. The on-premises network has several branch offices.A branch office in Toronto contains a virtual machine named VM1 that is configured as a file server. Users access the shared files on VM1 from all the offices.You need to recommend a solution to ensure that the users can access the shared files as quickly as possible if the Toronto branch office is inaccessible.What should you include in the recommendation?",
    options: [
      "A. a Recovery Services vault and Windows Server Backup",
      "B. Azure blob containers and Azure File Sync",
      "C. a Recovery Services vault and Azure Backup",
      "D. an Azure file share and Azure File Sync"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure VM availability options: Availability Zones (99.99% SLA, datacenter failure), Availability Sets (99.95% SLA, rack failure), Scale Sets for auto-scaling.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67593-exam-az-305-topic-4-question-5-discussion/"
  },
  {
    id: 140,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription named Subscription1 that is linked to a hybrid Azure Active Directory (Azure AD) tenant.You have an on-premises datacenter that does NOT have a VPN connection to Subscription1. The datacenter contains a computer named Server1 that hasMicrosoft SQL Server 2016 installed. Server is prevented from accessing the internet.An Azure logic app resource named LogicApp1 requires write access to a database on Server1.You need to recommend a solution to provide LogicApp1 with the ability to access Server1.What should you recommend deploying on-premises and in Azure? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0018300001.png"],
    backImage: "/images/questions/0018400001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/69209-exam-az-305-topic-4-question-6-discussion/"
  },
  {
    id: 141,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "DRAG DROP -Your company has an existing web app that runs on Azure virtual machines.You need to ensure that the app is protected from SQL injection attempts and uses a layer-7 load balancer. The solution must minimize disruptions to the code of the app.What should you recommend? To answer, drag the appropriate services to the correct targets. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:",
    frontImages: ["/images/questions/0018800001.png"],
    backImage: "/images/questions/0018800002.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/68002-exam-az-305-topic-4-question-8-discussion/"
  },
  {
    id: 142,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -Your company develops a web service that is deployed to an Azure virtual machine named VM1. The web service allows an API to access real-time data fromVM1.The current virtual machine deployment is shown in the Deployment exhibit.The chief technology officer (CTO) sends you the following email message: \\\\\"Our developers have deployed the web service to a virtual machine named VM1.Testing has shown that the API is accessible from VM1 and VM2. Our partners must be able to connect to the API over the Internet. Partners will use this data in applications that they develop.\\\\\"You deploy an Azure API Management (APIM) service. The relevant API Management configuration is shown in the API exhibit.For each of the following statements, select Yes if the statement is true. Otherwise, select No.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0018500001.png", "/images/questions/0018600001.jpg", "/images/questions/0018600002.png"],
    backImage: "/images/questions/0018700001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/69213-exam-az-305-topic-4-question-7-discussion/"
  },
  {
    id: 143,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are designing a microservices architecture that will be hosted in an Azure Kubernetes Service (AKS) cluster. Apps that will consume the microservices will be hosted on Azure virtual machines. The virtual machines and the AKS cluster will reside on the same virtual network.You need to design a solution to expose the microservices to the consumer apps. The solution must meet the following requirements:✑ Ingress access to the microservices must be restricted to a single private IP address and protected by using mutual TLS authentication.✑ The number of incoming microservice calls must be rate-limited.✑ Costs must be minimized.What should you include in the solution?",
    options: [
      "A. Azure App Gateway with Azure Web Application Firewall (WAF)",
      "B. Azure API Management Standard tier with a service endpoint",
      "C. Azure Front Door with Azure Web Application Firewall (WAF)",
      "D. Azure API Management Premium tier with virtual network connection"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure VM availability options: Availability Zones (99.99% SLA, datacenter failure), Availability Sets (99.95% SLA, rack failure), Scale Sets for auto-scaling.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67847-exam-az-305-topic-4-question-9-discussion/"
  },
  {
    id: 144,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have the Azure resources shown in the following table.You need to deploy a new Azure Firewall policy that will contain mandatory rules for all Azure Firewall deployments. The new policy will be configured as a parent policy for the existing policies.What is the minimum number of additional Azure Firewall policies you should create?",
    options: [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. 3"
    ],
    correct: [3],
    multipleAnswers: false,
    images: ["/images/questions/0019100001.png"],
    explanation: "CORRECT: D. Azure Policy enforces organizational standards at Management Group, Subscription, or Resource Group scope. Policies can audit, deny, or remediate non-compliant resources.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/68003-exam-az-305-topic-4-question-11-discussion/"
  },
  {
    id: 145,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Your company has an app named App1 that uses data from the on-premises Microsoft SQL Server databases shown in the following table.App1 and the data are used on the first day of the month only. The data is not expected to grow more than 3 percent each year.The company is rewriting App1 as an Azure web app and plans to migrate all the data to Azure.You need to migrate the data to Azure SQL Database and ensure that the database is only available on the first day of each month.Which service tier should you use?",
    options: [
      "A. vCore-based General Purpose",
      "B. DTU-based Standard",
      "C. vCore-based Business Critical",
      "D. DTU-based Basic"
    ],
    correct: [0],
    multipleAnswers: false,
    images: ["/images/questions/0019200001.png"],
    explanation: "CORRECT: A. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80487-exam-az-305-topic-4-question-12-discussion/"
  },
  {
    id: 146,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have a .NET web service named Service1 that performs the following tasks:✑ Reads and writes temporary files to the local file system.✑ Writes to the Application event log.You need to recommend a solution to host Service1 in Azure. The solution must meet the following requirements:✑ Minimize maintenance overhead.✑ Minimize costs.What should you include in the recommendation?",
    options: [
      "A. an Azure App Service web app",
      "B. an Azure virtual machine scale set",
      "C. an App Service Environment (ASE)",
      "D. an Azure Functions app"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure Monitor provides metrics, logs, alerts, and Application Insights for comprehensive monitoring. Activity Log tracks control plane operations.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79105-exam-az-305-topic-4-question-10-discussion/"
  },
  {
    id: 147,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Service Fabric",
      "B. Azure Data Lake",
      "C. Azure Service Bus",
      "D. Azure Traffic Manager"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/68099-exam-az-305-topic-4-question-13-discussion/"
  },
  {
    id: 148,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You plan to provision a High Performance Computing (HPC) cluster in Azure that will use a third-party scheduler.You need to recommend a solution to provision and manage the HPC cluster node.What should you include in the recommendation?",
    options: [
      "A. Azure Automation",
      "B. Azure CycleCloud",
      "C. Azure Purview",
      "D. Azure Lighthouse"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/68100-exam-az-305-topic-4-question-15-discussion/"
  },
  {
    id: 149,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Your company has 300 virtual machines hosted in a VMware environment. The virtual machines vary in size and have various utilization levels.You plan to move all the virtual machines to Azure.You need to recommend how many and what size Azure virtual machines will be required to move the current workloads to Azure. The solution must minimize administrative effort.What should you use to make the recommendation?",
    options: [
      "A. Azure Pricing calculator",
      "B. Azure Advisor",
      "C. Azure Migrate",
      "D. Azure Cost Management"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. Azure VM availability options: Availability Zones (99.99% SLA, datacenter failure), Availability Sets (99.95% SLA, rack failure), Scale Sets for auto-scaling.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67849-exam-az-305-topic-4-question-14-discussion/"
  },
  {
    id: 150,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are designing an Azure App Service web app.You plan to deploy the web app to the North Europe Azure region and the West Europe Azure region.You need to recommend a solution for the web app. The solution must meet the following requirements:✑ Users must always access the web app from the North Europe region, unless the region fails.✑ The web app must be available to users if an Azure region is unavailable.✑ Deployment costs must be minimized.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0019600001.png"],
    backImage: "/images/questions/0019700001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/68101-exam-az-305-topic-4-question-16-discussion/"
  }
];



