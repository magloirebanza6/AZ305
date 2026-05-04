// Questions 251 to 286
import { Question } from './types';

export const questions6: Question[] = [
  {
    id: 251,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -Your on-premises datacenter contains a server named Server1 that runs Microsoft SQL Server 2022. Server1 contains a 30-TB database named DB1 that stores customer data. Server1 runs a custom application named App1 that verifies the compliance of records in DB1. App1 must run on the same server as DB1.You have an Azure subscription.You need to migrate DB1 to Azure. The solution must minimize administrative effort.To which service should you migrate DB1, and what should you use to perform the migration? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image251.png"],
    backImage: "/images/questions/image278.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/135399-exam-az-305-topic-4-question-117-discussion/"
  },
  {
    id: 252,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Managed Instance Business Critical",
      "B. Azure SQL Database Business Critical",
      "C. Azure SQL Database Basic",
      "D. Azure SQL Database Standard"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/135402-exam-az-305-topic-4-question-118-discussion/"
  },
  {
    id: 253,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Azure Log Analytics",
      "B. Azure Arc",
      "C. Azure Monitor metrics",
      "D. Azure Monitor action groups"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/135686-exam-az-305-topic-4-question-119-discussion/"
  },
  {
    id: 254,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Azure Log Analytics",
      "B. Azure Arc",
      "C. Azure Analysis Services",
      "D. Azure Monitor action groups"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/142959-exam-az-305-topic-4-question-120-discussion/"
  },
  {
    id: 255,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Azure Log Analytics",
      "B. Azure Analysis Services",
      "C. Azure Monitor metrics",
      "D. Azure Monitor action groups"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/137338-exam-az-305-topic-4-question-121-discussion/"
  },
  {
    id: 256,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Business Critical",
      "B. Azure SQL Database Premium",
      "C. Azure SQL Database Basic",
      "D. Azure SQL Database Hyperscale"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/135403-exam-az-305-topic-4-question-122-discussion/"
  },
  {
    id: 257,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Application Insights",
      "B. Azure Analysis Services",
      "C. Azure Advisor",
      "D. Azure Log Analytics"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/139492-exam-az-305-topic-4-question-123-discussion/"
  },
  {
    id: 258,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription that contains the resources shown in the following table.VNet1, VNet2, and VNet3 each has multiple virtual machines connected. The virtual machines use the Azure DNS service for name resolution.You need to recommend an Azure Monitor log routing solution that meets the following requirements:• Ensures that the logs collected from the virtual machines and sent to Workspace1 are routed over the Microsoft backbone network• Minimizes administrative effortWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.",
    frontImages: ["/images/questions/image253.png", "/images/questions/image254.png"],
    backImage: "/images/questions/image279.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/135378-exam-az-305-topic-4-question-124-discussion/"
  },
  {
    id: 259,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Standard",
      "B. Azure SQL Managed Instance Business Critical",
      "C. Azure SQL Database Serverless",
      "D. Azure SQL Database Premium"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/135526-exam-az-305-topic-4-question-125-discussion/"
  },
  {
    id: 260,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have 100 Azure Storage accounts.Access to the accounts is restricted by using Azure role-based access control (Azure RBAC) assignments.You need to recommend a solution that uses role assignment conditions based on the tags assigned to individual resources within the storage accounts.What should you include in the recommendation? To answer, select the appropriate options in the answer area.",
    frontImages: ["/images/questions/image256.png"],
    backImage: "/images/questions/image257.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/135379-exam-az-305-topic-4-question-126-discussion/"
  },
  {
    id: 261,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Service Fabric",
      "B. Azure Notification Hubs",
      "C. Azure Service Bus",
      "D. Azure Traffic Manager"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/142938-exam-az-305-topic-4-question-127-discussion/"
  },
  {
    id: 262,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You need to ensure that users managing the production environment are registered for Azure MFA and must authenticate by using Azure MFA when they sign in to the Azure portal. The solution must meet the authentication and authorization requirements.What should you do? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0000500001.png"],
    backImage: "/images/questions/0000500002.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80116-exam-az-305-topic-5-question-1-discussion/"
  },
  {
    id: 263,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution for the App1 maintenance task. The solution must minimize costs.What should you include in the recommendation?",
    options: [
      "A. an Azure logic app",
      "B. an Azure function",
      "C. an Azure virtual machine",
      "D. an App Service WebJob"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81661-exam-az-305-topic-6-question-1-discussion/"
  },
  {
    id: 264,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "After you migrate App1 to Azure, you need to enforce the data modification requirements to meet the security and compliance requirements.What should you do?",
    options: [
      "A. Create an access policy for the blob service.",
      "B. Implement Azure resource locks.",
      "C. Create Azure RBAC assignments.",
      "D. Modify the access level of the blob service."
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure Policy enforces organizational standards at Management Group, Subscription, or Resource Group scope. Policies can audit, deny, or remediate non-compliant resources.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81900-exam-az-305-topic-5-question-2-discussion/"
  },
  {
    id: 265,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution that meets the application development requirements.What should you include in the recommendation?",
    options: [
      "A. the Azure App Configuration service",
      "B. an Azure Container Registry instance",
      "C. deployment slots",
      "D. Continuous Integration/Continuous Deployment (CI/CD) sources"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81904-exam-az-305-topic-6-question-2-discussion/"
  },
  {
    id: 266,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You need to recommend an App Service architecture that meets the requirements for App1. The solution must minimize costs.What should you recommend?",
    options: [
      "A. one App Service Environment (ASE) per availability zone",
      "B. one App Service Environment (ASE) per region",
      "C. one App Service plan per region",
      "D. one App Service plan per availability zone"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81907-exam-az-305-topic-6-question-3-discussion/"
  },
  {
    id: 267,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You need to recommend a solution to ensure that App1 can access the third-party credentials and access strings. The solution must meet the security requirements.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0016000001.png"],
    backImage: "/images/questions/image280.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81606-exam-az-305-topic-6-question-4-discussion/"
  },
  {
    id: 268,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are evaluating the components of the migration to Azure that require you to provision an Azure Storage account. For each of the following statements, selectYes if the statement is true. Otherwise, select No.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0016400009.png"],
    backImage: "/images/questions/image281.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67819-exam-az-305-topic-7-question-1-discussion/"
  },
  {
    id: 269,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "What should you include in the identity management strategy to support the planned changes?",
    options: [
      "A. Deploy domain controllers for corp.fabrikam.com to virtual networks in Azure.",
      "B. Move all the domain controllers from corp.fabrikam.com to virtual networks in Azure.",
      "C. Deploy a new Microsoft Entra ID tenant for the authentication of new R&D projects.",
      "D. Deploy domain controllers for the rd.fabrikam.com forest to virtual networks in Azure."
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/68930-exam-az-305-topic-7-question-2-discussion/"
  },
  {
    id: 270,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "HOTSPOT -You plan to migrate App1 to Azure.You need to recommend a high-availability solution for App1. The solution must meet the resiliency requirements.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0017000001.jpg"],
    backImage: "/images/questions/0017100001.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/83184-exam-az-305-topic-8-question-1-discussion/"
  },
  {
    id: 271,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You plan to migrate App1 to Azure.You need to recommend a storage solution for App1 that meets the security and compliance requirements.Which type of storage should you recommend, and how should you recommend configuring the storage? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0017200001.png", "/images/questions/0017300001.png"],
    backImage: "/images/questions/0017300005.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/84950-exam-az-305-topic-8-question-2-discussion/"
  },
  {
    id: 272,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to implement the Azure RBAC role assignments for the Network Contributor role. The solution must meet the authentication and authorization requirements.What is the minimum number of assignments that you must use?",
    options: [
      "A. 1",
      "B. 2",
      "C. 5",
      "D. 10",
      "E. 15"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/82774-exam-az-305-topic-8-question-4-discussion/"
  },
  {
    id: 273,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You plan to migrate App1 to Azure.You need to recommend a network connectivity solution for the Azure Storage account that will host the App1 data. The solution must meet the security and compliance requirements.What should you include in the recommendation?",
    options: [
      "A. Microsoft peering for an ExpressRoute circuit",
      "B. Azure public peering for an ExpressRoute circuit",
      "C. a service endpoint that has a service endpoint policy",
      "D. a private endpoint"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. For network connectivity troubleshooting, Azure Network Watcher provides IP flow verify (checks NSG rules), connection troubleshoot, and packet capture capabilities.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/84951-exam-az-305-topic-8-question-3-discussion/"
  },
  {
    id: 274,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "DRAG DROP -You need to configure an Azure policy to ensure that the Azure SQL databases have Transparent Data Encryption (TDE) enabled. The solution must meet the security and compliance requirements.Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.Select and Place:",
    frontImages: ["/images/questions/0017600001.jpg"],
    backImage: "/images/questions/0017600002.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/83206-exam-az-305-topic-8-question-5-discussion/"
  },
  {
    id: 275,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -To meet the authentication requirements of Fabrikam, what should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0001100001.jpg"],
    backImage: "/images/questions/0001200001.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/83012-exam-az-305-topic-9-question-1-discussion/"
  },
  {
    id: 276,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a notification solution for the IT Support distribution group.What should you include in the recommendation?",
    options: [
      "A. a SendGrid account with advanced reporting",
      "B. an action group",
      "C. Azure Network Watcher",
      "D. Microsoft Entra Connect Health"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/84953-exam-az-305-topic-9-question-2-discussion/"
  },
  {
    id: 277,
    category: "Design Business Continuity Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to meet the database retention requirements.What should you recommend?",
    options: [
      "A. Configure a long-term retention policy for the database.",
      "B. Configure Azure Site Recovery.",
      "C. Use automatic Azure SQL Database backups.",
      "D. Configure geo-replication of the database."
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67737-exam-az-305-topic-9-question-3-discussion/"
  },
  {
    id: 278,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "What should you recommend to meet the monitoring requirements for App2?",
    options: [
      "A. VM insights",
      "B. Azure Application Insights",
      "C. Microsoft Sentinel",
      "D. Container insights"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure Monitor provides metrics, logs, alerts, and Application Insights for comprehensive monitoring. Activity Log tracks control plane operations.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81956-exam-az-305-topic-10-question-2-discussion/"
  },
  {
    id: 279,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -What should you implement to meet the identity requirements? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0001900001.png"],
    backImage: "/images/questions/0002000001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81953-exam-az-305-topic-10-question-1-discussion/"
  },
  {
    id: 280,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to recommend a data storage strategy for WebApp1.What should you include in the recommendation?",
    options: [
      "A. an Azure virtual machine that runs SQL Server",
      "B. a fixed-size DTU Azure SQL database",
      "C. an Azure SQL Database elastic pool",
      "D. a vCore-based Azure SQL database"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81955-exam-az-305-topic-11-question-1-discussion/"
  },
  {
    id: 281,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "DRAG DROP -You need to recommend a solution that meets the file storage requirements for App2.What should you deploy to the Azure subscription and the on-premises network? To answer, drag the appropriate services to the correct locations. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:",
    frontImages: ["/images/questions/0008600001.png"],
    backImage: "/images/questions/0008700001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/84955-exam-az-305-topic-13-question-1-discussion/"
  },
  {
    id: 282,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You plan to migrate DB1 and DB2 to Azure.You need to ensure that the Azure database and the service tier meet the resiliency and business requirements.What should you configure? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0008100001.jpg"],
    backImage: "/images/questions/0008200001.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/82084-exam-az-305-topic-12-question-1-discussion/"
  },
  {
    id: 283,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are evaluating whether to use Azure Traffic Manager and Azure Application Gateway to meet the connection requirements for App1.What is the minimum numbers of instances required for each service? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0011700001.jpg"],
    backImage: "/images/questions/0011800001.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/83185-exam-az-305-topic-14-question-1-discussion/"
  },
  {
    id: 284,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution that meets the data requirements for App1.What should you recommend deploying to each availability zone that contains an instance of App1?",
    options: [
      "A. an Azure Cosmos DB that uses multi-region writes",
      "B. an Azure Data Lake store that uses geo-zone-redundant storage (GZRS)",
      "C. an Azure Storage account that uses geo-zone-redundant storage (GZRS)"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure VM availability options: Availability Zones (99.99% SLA, datacenter failure), Availability Sets (99.95% SLA, rack failure), Scale Sets for auto-scaling.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/84956-exam-az-305-topic-13-question-2-discussion/"
  },
  {
    id: 285,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -How should the migrated databases DB1 and DB2 be implemented in Azure?Hot Area:",
    frontImages: ["/images/questions/0012300001.png"],
    backImage: "/images/questions/image282.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/82981-exam-az-305-topic-15-question-1-discussion/"
  },
  {
    id: 286,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You design a solution for the web tier of WebApp1 as shown in the exhibit.For each of the following statements, select Yes if the statement is true. Otherwise, select No.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0012800009.jpg", "/images/questions/0012900001.png"],
    backImage: "/images/questions/image283.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/82044-exam-az-305-topic-16-question-1-discussion/"
  }
];



