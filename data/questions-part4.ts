// Questions 151 to 200
import { Question } from './types';

export const questions4: Question[] = [
  {
    id: 151,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You plan to deploy multiple instances of an Azure web app across several Azure regions.You need to design an access solution for the app. The solution must meet the following replication requirements:✑ Support rate limiting.✑ Balance requests between all instances.✑ Ensure that users can access the app in the event of a regional outage.Solution: You use Azure Traffic Manager to provide access to the app.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81576-exam-az-305-topic-4-question-17-discussion/"
  },
  {
    id: 152,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You plan to deploy multiple instances of an Azure web app across several Azure regions.You need to design an access solution for the app. The solution must meet the following replication requirements:✑ Support rate limiting.✑ Balance requests between all instances.✑ Ensure that users can access the app in the event of a regional outage.Solution: You use Azure Load Balancer to provide access to the app.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81577-exam-az-305-topic-4-question-18-discussion/"
  },
  {
    id: 153,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You plan to deploy multiple instances of an Azure web app across several Azure regions.You need to design an access solution for the app. The solution must meet the following replication requirements:✑ Support rate limiting.✑ Balance requests between all instances.✑ Ensure that users can access the app in the event of a regional outage.Solution: You use Azure Application Gateway to provide access to the app.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/92174-exam-az-305-topic-4-question-19-discussion/"
  },
  {
    id: 154,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -Your company has two on-premises sites in New York and Los Angeles and Azure virtual networks in the East US Azure region and the West US Azure region.Each on-premises site has ExpressRoute Global Reach circuits to both regions.You need to recommend a solution that meets the following requirements:✑ Outbound traffic to the internet from workloads hosted on the virtual networks must be routed through the closest available on-premises site.✑ If an on-premises site fails, traffic from the workloads on the virtual networks to the internet must reroute automatically to the other site.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0020100001.png"],
    backImage: "/images/questions/0020100002.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80509-exam-az-305-topic-4-question-20-discussion/"
  },
  {
    id: 155,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are designing an application that will use Azure Linux virtual machines to analyze video files. The files will be uploaded from corporate offices that connect toAzure by using ExpressRoute.You plan to provision an Azure Storage account to host the files.You need to ensure that the storage account meets the following requirements:✑ Supports video files of up to 7 TB✑ Provides the highest availability possible✑ Ensures that storage is optimized for the large video files✑ Ensures that files from the on-premises network are uploaded by using ExpressRouteHow should you configure the storage account? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0020300001.png"],
    backImage: "/images/questions/image272.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79489-exam-az-305-topic-4-question-21-discussion/"
  },
  {
    id: 156,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -A company plans to implement an HTTP-based API to support a web app. The web app allows customers to check the status of their orders.The API must meet the following requirements:✑ Implement Azure Functions.✑ Provide public read-only operations.✑ Prevent write operations.You need to recommend which HTTP methods and authorization level to configure.What should you recommend? To answer, configure the appropriate options in the dialog box in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0020600001.png"],
    backImage: "/images/questions/0020600002.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81580-exam-az-305-topic-4-question-22-discussion/"
  },
  {
    id: 157,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription.You need to recommend a solution to provide developers with the ability to provision Azure virtual machines. The solution must meet the following requirements:✑ Only allow the creation of the virtual machines in specific regions.✑ Only allow the creation of specific sizes of virtual machines.What should you include in the recommendation?",
    options: [
      "A. Azure Resource Manager (ARM) templates",
      "B. Azure Policy",
      "C. Conditional Access policies",
      "D. role-based access control (RBAC)"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure VM availability options: Availability Zones (99.99% SLA, datacenter failure), Availability Sets (99.95% SLA, rack failure), Scale Sets for auto-scaling.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79107-exam-az-305-topic-4-question-23-discussion/"
  },
  {
    id: 158,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "DRAG DROP -You have an on-premises network that uses an IP address space of 172.16.0.0/16.You plan to deploy 30 virtual machines to a new Azure subscription.You identify the following technical requirements:✑ All Azure virtual machines must be placed on the same subnet named Subnet1.✑ All the Azure virtual machines must be able to communicate with all on-premises servers.✑ The servers must be able to communicate between the on-premises network and Azure by using a site-to-site VPN.You need to recommend a subnet design that meets the technical requirements.What should you include in the recommendation? To answer, drag the appropriate network addresses to the correct subnets. Each network address may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:",
    frontImages: ["/images/questions/0020800004.jpg"],
    backImage: "/images/questions/0020800005.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81581-exam-az-305-topic-4-question-24-discussion/"
  },
  {
    id: 159,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have data files in Azure Blob Storage.You plan to transform the files and move them to Azure Data Lake Storage.You need to transform the data by using mapping data flow.Which service should you use?",
    options: [
      "A. Azure Databricks",
      "B. Azure Storage Sync",
      "C. Azure Data Factory",
      "D. Azure Data Box Gateway"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81582-exam-az-305-topic-4-question-25-discussion/"
  },
  {
    id: 160,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription.You need to deploy an Azure Kubernetes Service (AKS) solution that will use Windows Server 2019 nodes. The solution must meet the following requirements:✑ Minimize the time it takes to provision compute resources during scale-out operations.✑ Support autoscaling of Windows Server containers.Which scaling option should you recommend?",
    options: [
      "A. Kubernetes version 1.20.2 or newer",
      "B. Virtual nodes with Virtual Kubelet ACI",
      "C. cluster autoscaler",
      "D. horizontal pod autoscaler"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. Azure Kubernetes Service (AKS) provides managed Kubernetes with integrated CI/CD, monitoring, and security. Supports RBAC, network policies, and Microsoft Entra integration.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81583-exam-az-305-topic-4-question-26-discussion/"
  },
  {
    id: 161,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -Your on-premises network contains a file server named Server1 that stores 500 GB of data.You need to use Azure Data Factory to copy the data from Server1 to Azure Storage.You add a new data factory.What should you do next? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0021100001.png"],
    backImage: "/images/questions/0021100002.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81586-exam-az-305-topic-4-question-27-discussion/"
  },
  {
    id: 162,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription.You need to recommend an Azure Kubernetes Service (AKS) solution that will use Linux nodes. The solution must meet the following requirements:✑ Minimize the time it takes to provision compute resources during scale-out operations.✑ Support autoscaling of Linux containers.✑ Minimize administrative effort.Which scaling option should you recommend?",
    options: [
      "A. horizontal pod autoscaler",
      "B. cluster autoscaler",
      "C. virtual nodes",
      "D. Virtual Kubelet"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. Azure Kubernetes Service (AKS) provides managed Kubernetes with integrated CI/CD, monitoring, and security. Supports RBAC, network policies, and Microsoft Entra integration.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81749-exam-az-305-topic-4-question-28-discussion/"
  },
  {
    id: 163,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are designing an order processing system in Azure that will contain the Azure resources shown in the following table.The order processing system will have the following transaction flow:✑ A customer will place an order by using App1.✑ When the order is received, App1 will generate a message to check for product availability at vendor 1 and vendor 2.✑ An integration component will process the message, and then trigger either Function1 or Function2 depending on the type of order.✑ Once a vendor confirms the product availability, a status message for App1 will be generated by Function1 or Function2.✑ All the steps of the transaction will be logged to storage1.Which type of resource should you recommend for the integration component?",
    options: [
      "A. an Azure Service Bus queue",
      "B. an Azure Data Factory pipeline",
      "C. an Azure Event Grid domain",
      "D. an Azure Event Hubs capture"
    ],
    correct: [1],
    multipleAnswers: false,
    images: ["/images/questions/0021300001.png"],
    explanation: "CORRECT: B. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80775-exam-az-305-topic-4-question-29-discussion/"
  },
  {
    id: 164,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have 100 Microsoft SQL Server Integration Services (SSIS) packages that are configured to use 10 on-premises SQL Server databases as their destinations.You plan to migrate the 10 on-premises databases to Azure SQL Database.You need to recommend a solution to create Azure-SQL Server Integration Services (SSIS) packages. The solution must ensure that the packages can target theSQL Database instances as their destinations.What should you include in the recommendation?",
    options: [
      "A. Data Migration Assistant (DMA)",
      "B. Azure Data Factory",
      "C. Azure Data Catalog",
      "D. SQL Server Migration Assistant (SSMA)"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81587-exam-az-305-topic-4-question-30-discussion/"
  },
  {
    id: 165,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an Azure virtual machine named VM1 that runs Windows Server 2019 and contains 500 GB of data files.You are designing a solution that will use Azure Data Factory to transform the data files, and then load the files to Azure Data Lake Storage.What should you deploy on VM1 to support the design?",
    options: [
      "A. the On-premises data gateway",
      "B. the Azure Pipelines agent",
      "C. the self-hosted integration runtime",
      "D. the Azure File Sync agent"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81588-exam-az-305-topic-4-question-31-discussion/"
  },
  {
    id: 166,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an Microsoft Entra ID tenant that syncs with an on-premises Active Directory domain.Your company has a line-of-business (LOB) application that was developed internally.You need to implement SAML single sign-on (SSO) and enforce multi-factor authentication (MFA) when users attempt to access the application from an unknown location.Which two features should you include in the solution? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.",
    options: [
      "A. Microsoft Entra ID Privileged Identity Management (PIM)",
      "B. Azure Application Gateway",
      "C. Microsoft Entra ID enterprise applications",
      "D. Microsoft Entra ID Identity Protection",
      "E. Conditional Access policies"
    ],
    correct: [2, 4],
    multipleAnswers: true,
    explanation: "CORRECT: C, E. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79109-exam-az-305-topic-4-question-32-discussion/"
  },
  {
    id: 167,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You plan to automata the deployment of resources to Azure subscriptions.What is a difference between using Azure Blueprints and Azure Resource Manager (ARM) templates?",
    options: [
      "A. ARM templates remain connected to the deployed resources.",
      "B. Only blueprints can contain policy definitions.",
      "C. Only ARM templates can contain policy definitions.",
      "D. Blueprints remain connected to the deployed resources."
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure Blueprints package ARM templates, policies, role assignments, and resource groups for repeatable environment deployment with versioning and tracking.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/84461-exam-az-305-topic-4-question-33-discussion/"
  },
  {
    id: 168,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have the resources shown in the following table.You create a new resource group in Azure named RG2.You need to move the virtual machines to RG2.What should you use to move each virtual machine? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0021700001.png", "/images/questions/0021800001.png"],
    backImage: "/images/questions/0021900001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81750-exam-az-305-topic-4-question-34-discussion/"
  },
  {
    id: 169,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have the Azure resources shown in the following table.You need to design a solution that provides on-premises network connectivity to SQLDB1 through PE1.How should you configure name resolution? To answer select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0022200001.png", "/images/questions/0022200002.png"],
    backImage: "/images/questions/image273.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81448-exam-az-305-topic-4-question-36-discussion/"
  },
  {
    id: 170,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You plan to deploy an Azure App Service web app that will have multiple instances across multiple Azure regions.You need to recommend a load balancing service for the planned deployment The solution must meet the following requirements:✑ Maintain access to the app in the event of a regional outage.✑ Support Azure Web Application Firewall (WAF).✑ Support cookie-based affinity.✑ Support URL routing.What should you include in the recommendation?",
    options: [
      "A. Azure Front Door",
      "B. Azure Traffic Manager",
      "C. Azure Application Gateway",
      "D. Azure Load Balancer"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81751-exam-az-305-topic-4-question-35-discussion/"
  },
  {
    id: 171,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are designing a microservices architecture that will support a web application.The solution must meet the following requirements:✑ Deploy the solution on-premises and to Azure.Support low-latency and hyper-scale operations.✑ Allow independent upgrades to each microservice.✑ Set policies for performing automatic repairs to the microservices.You need to recommend a technology.What should you recommend?",
    options: [
      "A. Azure Container Instance",
      "B. Azure Logic App",
      "C. Azure Service Fabric",
      "D. Azure virtual machine scale set"
    ],
    correct: [2],
    multipleAnswers: false,
    images: ["/images/questions/0022400003.png"],
    explanation: "CORRECT: C. Azure Monitor provides metrics, logs, alerts, and Application Insights for comprehensive monitoring. Activity Log tracks control plane operations.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81752-exam-az-305-topic-4-question-37-discussion/"
  },
  {
    id: 172,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Azure Activity Log",
      "B. Azure Arc",
      "C. Azure Analysis Services",
      "D. Azure Monitor action groups"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/82764-exam-az-305-topic-4-question-39-discussion/"
  },
  {
    id: 173,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You plan to deploy multiple instances of an Azure web app across several Azure regions.You need to design an access solution for the app. The solution must meet the following replication requirements:✑ Support rate limiting.✑ Balance requests between all instances.✑ Ensure that users can access the app in the event of a regional outage.Solution: You use Azure Front Door to provide access to the app.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81029-exam-az-305-topic-4-question-38-discussion/"
  },
  {
    id: 174,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription.You need to recommend a solution to provide developers with the ability to provision Azure virtual machines. The solution must meet the following requirements:✑ Only allow the creation of the virtual machines in specific regions.✑ Only allow the creation of specific sizes of virtual machines.What should you include in the recommendation?",
    options: [
      "A. Attribute-based access control (ABAC)",
      "B. Azure Policy",
      "C. Conditional Access policies",
      "D. role-based access control (RBAC)"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure VM availability options: Availability Zones (99.99% SLA, datacenter failure), Availability Sets (99.95% SLA, rack failure), Scale Sets for auto-scaling.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/82886-exam-az-305-topic-4-question-40-discussion/"
  },
  {
    id: 175,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to recommend a storage solution for the records of a mission critical application. The solution must provide a Service Level Agreement (SLA) for the latency of write operations and the throughput.What should you include in the recommendation?",
    options: [
      "A. Azure Data Lake Storage Gen2",
      "B. Azure Blob Storage",
      "C. Azure SQL",
      "D. Azure Cosmos DB"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81754-exam-az-305-topic-4-question-43-discussion/"
  },
  {
    id: 176,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have 100 devices that write performance data to Azure Blob Storage.You plan to store and analyze the performance data in an Azure SQL database.You need to recommend a solution to continually copy the performance data to the Azure SQL database.What should you include in the recommendation?",
    options: [
      "A. Azure Data Factory",
      "B. Data Migration Assistant (DMA)",
      "C. Azure Data Box",
      "D. Azure Database Migration Service"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81753-exam-az-305-topic-4-question-42-discussion/"
  },
  {
    id: 177,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Notification Hubs",
      "B. Azure Data Lake",
      "C. Azure Service Bus",
      "D. Azure Blob Storage"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78679-exam-az-305-topic-4-question-41-discussion/"
  },
  {
    id: 178,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You are planning a storage solution. The solution must meet the following requirements:✑ Support at least 500 requests per second.✑ Support a large image, video, and audio streams.Which type of Azure Storage account should you provision?",
    options: [
      "A. standard general-purpose v2",
      "B. premium block blobs",
      "C. premium page blobs",
      "D. premium file shares"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81031-exam-az-305-topic-4-question-44-discussion/"
  },
  {
    id: 179,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are designing a software as a service (SaaS) application that will enable Azure Active Directory (Azure AD) users to create and publish online surveys. TheSaaS application will have a front-end web app and a back-end web API. The web app will rely on the web API to handle updates to customer surveys.You need to design an authorization flow for the SaaS application. The solution must meet the following requirements:✑ To access the back-end web API, the web app must authenticate by using OAuth 2 bearer tokens.✑ The web app must authenticate by using the identities of individual users.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0023200001.jpg", "/images/questions/0023300001.jpg"],
    backImage: "/images/questions/0023400001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81758-exam-az-305-topic-4-question-46-discussion/"
  },
  {
    id: 180,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to recommend a data storage solution that meets the following requirements:✑ Ensures that applications can access the data by using a REST connection✑ Hosts 20 independent tables of varying sizes and usage patterns✑ Automatically replicates the data to a second Azure region✑ Minimizes costsWhat should you recommend?",
    options: [
      "A. an Azure SQL Database elastic pool that uses active geo-replication",
      "B. tables in an Azure Storage account that use geo-redundant storage (GRS)",
      "C. tables in an Azure Storage account that use read-access geo-redundant storage (RA-GRS)",
      "D. an Azure SQL database that uses active geo-replication"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81757-exam-az-305-topic-4-question-45-discussion/"
  },
  {
    id: 181,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You plan to create an Azure environment that will contain a root management group and 10 child management groups. Each child management group will contain five Azure subscriptions. You plan to have between 10 and 30 resource groups in each subscription.You need to design an Azure governance solution. The solution must meet the following requirements:✑ Use Azure Blueprints to control governance across all the subscriptions and resource groups.✑ Ensure that Blueprints-based configurations are consistent across all the subscriptions and resource groups.✑ Minimize the number of blueprint definitions and assignments.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0023500004.jpg"],
    backImage: "/images/questions/image274.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78959-exam-az-305-topic-4-question-47-discussion/"
  },
  {
    id: 182,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "DRAG DROP -You are designing a virtual machine that will run Microsoft SQL Server and contain two data disks. The first data disk will store log files, and the second data disk will store data. Both disks are P40 managed disks.You need to recommend a host caching method for each disk. The method must provide the best overall performance for the virtual machine while preserving the integrity of the SQL data and logs.Which host caching method should you recommend for each disk? To answer, drag the appropriate methods to the correct disks. Each method may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:",
    frontImages: ["/images/questions/0023700001.jpg"],
    backImage: "/images/questions/0023800001.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80648-exam-az-305-topic-4-question-48-discussion/"
  },
  {
    id: 183,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are designing a solution that calculates 3D geometry from height-map data.You need to recommend a solution that meets the following requirements:✑ Performs calculations in Azure.✑ Ensures that each node can communicate data to every other node.✑ Maximizes the number of nodes to calculate multiple scenes as fast as possible.Minimizes the amount of effort to implement the solution.Which two actions should you include in the recommendation? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.",
    options: [
      "A. Enable parallel file systems on Azure.",
      "B. Create a render farm that uses virtual machines.",
      "C. Create a render farm that uses virtual machine scale sets.",
      "D. Create a render farm that uses Azure Batch.",
      "E. Enable parallel task execution on compute nodes."
    ],
    correct: [3, 4],
    multipleAnswers: true,
    images: ["/images/questions/0023800005.png"],
    explanation: "CORRECT: D, E. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81761-exam-az-305-topic-4-question-49-discussion/"
  },
  {
    id: 184,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an on-premises application that consumes data from multiple databases. The application code references database tables by using a combination of the server, database, and table name.You need to migrate the application data to Azure.To which two services can you migrate the application data to achieve the goal? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.",
    options: [
      "A. SQL Server Stretch Database",
      "B. SQL Server on an Azure virtual machine",
      "C. Azure SQL Database",
      "D. Azure SQL Managed Instance"
    ],
    correct: [1, 3],
    multipleAnswers: true,
    explanation: "CORRECT: B, D. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80109-exam-az-305-topic-4-question-50-discussion/"
  },
  {
    id: 185,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "HOTSPOT -You plan to migrate on-premises Microsoft SQL Server databases to Azure.You need to recommend a deployment and resiliency solution that meets the following requirements:✑ Supports user-initiated backups✑ Supports multiple automatically replicated instances across Azure regions✑ Minimizes administrative effort to implement and maintain business continuityWhat should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0024100001.jpg"],
    backImage: "/images/questions/image275.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81296-exam-az-305-topic-4-question-51-discussion/"
  },
  {
    id: 186,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:✑ Failover between replicas of the database must occur without any data loss.✑ The database must remain available in the event of a zone outage.✑ Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Managed Instance Business Critical",
      "B. Azure SQL Managed Instance General Purpose",
      "C. Azure SQL Database Business Critical",
      "D. Azure SQL Database Serverless"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81482-exam-az-305-topic-4-question-52-discussion/"
  },
  {
    id: 187,
    category: "Design Business Continuity Solutions",
    type: "multiple-choice",
    question: "You have an Azure web app that uses an Azure key vault named KeyVault1 in the West US Azure region.You are designing a disaster recovery plan for KeyVault1.You plan to back up the keys in KeyVault1.You need to identify to where you can restore the backup.What should you identify?",
    options: [
      "A. any region worldwide",
      "B. the same region only",
      "C. KeyVault1 only",
      "D. the same geography only"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80817-exam-az-305-topic-4-question-53-discussion/"
  },
  {
    id: 188,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an on-premises line-of-business (LOB) application that uses a Microsoft SQL Server instance as the backend.You plan to migrate the on-premises SQL Server instance to Azure virtual machines.You need to recommend a highly available SQL Server deployment that meets the following requirements:✑ Minimizes costsMinimizes failover time if a single server failsWhat should you include in the recommendation?",
    options: [
      "A. an Always On availability group that has premium storage disks and a virtual network name (VNN)",
      "B. an Always On Failover Cluster Instance that has a virtual network name (VNN) and a standard file share",
      "C. an Always On availability group that has premium storage disks and a distributed network name (DNN)",
      "D. an Always On Failover Cluster Instance that has a virtual network name (VNN) and a premium file share"
    ],
    correct: [2],
    multipleAnswers: false,
    images: ["/images/questions/0024400002.png"],
    explanation: "CORRECT: C. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/82860-exam-az-305-topic-4-question-54-discussion/"
  },
  {
    id: 189,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed at the same time as the Azure SQL databases.The company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service instances must reside in the same region.You need to recommend a solution to meet the regulatory requirement.Solution: You recommend creating resource groups based on locations and implementing resource locks on the resource groups.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/85353-exam-az-305-topic-4-question-55-discussion/"
  },
  {
    id: 190,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed at the same time as the Azure SQL databases.The company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service instances must reside in the same region.You need to recommend a solution to meet the regulatory requirement.Solution: You recommend using the Regulatory compliance dashboard in Microsoft Defender for Cloud.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure Policy enforces organizational standards at Management Group, Subscription, or Resource Group scope. Policies can audit, deny, or remediate non-compliant resources.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/93916-exam-az-305-topic-4-question-56-discussion/"
  },
  {
    id: 191,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed at the same time as the Azure SQL databases.The company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service instances must reside in the same region.You need to recommend a solution to meet the regulatory requirement.Solution: You recommend using an Azure Policy initiative to enforce the location.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure Policy enforces organizational standards at Management Group, Subscription, or Resource Group scope. Policies can audit, deny, or remediate non-compliant resources.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/85433-exam-az-305-topic-4-question-57-discussion/"
  },
  {
    id: 192,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You plan to deploy an application named App1 that will run in containers on Azure Kubernetes Service (AKS) clusters. The AKS clusters will be distributed across four Azure regions.You need to recommend a storage solution to ensure that updated container images are replicated automatically to all the Azure regions hosting the AKS clusters.Which storage solution should you recommend?",
    options: [
      "A. geo-redundant storage (GRS) accounts",
      "B. Premium SKU Azure Container Registry",
      "C. Azure Content Delivery Network (CDN)",
      "D. Azure Cache for Redis"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81894-exam-az-305-topic-4-question-59-discussion/"
  },
  {
    id: 193,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You plan to move a web app named App1 from an on-premises datacenter to Azure.App1 depends on a custom COM component that is installed on the host server.You need to recommend a solution to host App1 in Azure. The solution must meet the following requirements:✑ App1 must be available to users if an Azure datacenter becomes unavailable.✑ Costs must be minimized.What should you include in the recommendation?",
    options: [
      "A. In two Azure regions, deploy a load balancer and a web app.",
      "B. In two Azure regions, deploy a load balancer and a virtual machine scale set.",
      "C. Deploy a load balancer and a virtual machine scale set across two availability zones.",
      "D. In two Azure regions, deploy an Azure Traffic Manager profile and a web app."
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67757-exam-az-305-topic-4-question-58-discussion/"
  },
  {
    id: 194,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an Microsoft Entra ID tenant.You plan to deploy Azure Cosmos DB databases that will use the SQL API.You need to recommend a solution to provide specific Microsoft Entra ID user accounts with read access to the Cosmos DB databases.What should you include in the recommendation?",
    options: [
      "A. shared access signatures (SAS) and Conditional Access policies",
      "B. certificates and Azure Key Vault",
      "C. master keys and Azure Information Protection policies",
      "D. a resource token and an Access control (IAM) role assignment"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81895-exam-az-305-topic-4-question-60-discussion/"
  },
  {
    id: 195,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to recommend an Azure Storage solution that meets the following requirements:✑ The storage must support 1 PB of data.✑ The data must be stored in blob storage.✑ The storage must support three levels of subfolders.✑ The storage must support access control lists (ACLs).What should you include in the recommendation?",
    options: [
      "A. a premium storage account that is configured for block blobs",
      "B. a general purpose v2 storage account that has hierarchical namespace enabled",
      "C. a premium storage account that is configured for page blobs",
      "D. a premium storage account that is configured for file shares and supports large file shares"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81896-exam-az-305-topic-4-question-61-discussion/"
  },
  {
    id: 196,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You manage a database environment for a Microsoft Volume Licensing customer named Contoso, Ltd. Contoso uses License Mobility through SoftwareAssurance.You need to deploy 50 databases. The solution must meet the following requirements:✑ Support automatic scaling.✑ Minimize Microsoft SQL Server licensing costs.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0025300001.jpg"],
    backImage: "/images/questions/0025300002.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81897-exam-az-305-topic-4-question-62-discussion/"
  },
  {
    id: 197,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have an on-premises application named App1 that uses an Oracle database.You plan to use Azure Databricks to transform and load data from App1 to an Azure Synapse Analytics instance.You need to ensure that the App1 data is available to Databricks.Which two Azure services should you include in the solution? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.",
    options: [
      "A. Azure Data Box Gateway",
      "B. Azure Import/Export service",
      "C. Azure Data Lake Storage",
      "D. Azure Data Box Edge",
      "E. Azure Data Factory"
    ],
    correct: [2, 4],
    multipleAnswers: true,
    explanation: "CORRECT: C, E. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80703-exam-az-305-topic-4-question-63-discussion/"
  },
  {
    id: 198,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are designing a cost-optimized solution that uses Azure Batch to run two types of jobs on Linux nodes. The first job type will consist of short-running tasks for a development environment. The second job type will consist of long-running Message Passing Interface (MPI) applications for a production environment that requires timely job completion.You need to recommend the pool type and node type for each job type. The solution must minimize compute charges and leverage Azure Hybrid Benefit whenever possible.What should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0025500001.jpg"],
    backImage: "/images/questions/0025600001.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81601-exam-az-305-topic-4-question-64-discussion/"
  },
  {
    id: 199,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Notification Hubs",
      "B. Azure Service Fabric",
      "C. Azure Queue Storage",
      "D. Azure Data Lake"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79671-exam-az-305-topic-4-question-65-discussion/"
  },
  {
    id: 200,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Notification Hubs",
      "B. Azure Service Fabric",
      "C. Azure Queue Storage",
      "D. Azure Application Gateway"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78681-exam-az-305-topic-4-question-66-discussion/"
  }
];



