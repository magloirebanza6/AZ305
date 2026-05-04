// Questions 201 to 250
import { Question } from './types';

export const questions5: Question[] = [
  {
    id: 201,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Service Bus",
      "B. Azure Data Lake",
      "C. Azure Traffic Manager",
      "D. Azure Blob Storage"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94033-exam-az-305-topic-4-question-68-discussion/"
  },
  {
    id: 202,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Hyperscale",
      "B. Azure SQL Database Premium",
      "C. Azure SQL Database Basic",
      "D. Azure SQL Database Standard"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94032-exam-az-305-topic-4-question-67-discussion/"
  },
  {
    id: 203,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Basic",
      "B. Azure SQL Managed Instance General Purpose",
      "C. Azure SQL Database Business Critical",
      "D. Azure SQL Managed Instance Business Critical"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94034-exam-az-305-topic-4-question-69-discussion/"
  },
  {
    id: 204,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription.You need to deploy an Azure Kubernetes Service (AKS) solution that will use Windows Server 2019 nodes. The solution must meet the following requirements:• Minimize the time it takes to provision compute resources during scale-out operations.• Support autoscaling of Windows Server containers.Which scaling option should you recommend?",
    options: [
      "A. horizontal pod autoscaler",
      "B. Virtual nodes",
      "C. Kubernetes version 1.20.2 or newer",
      "D. cluster autoscaler"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure Kubernetes Service (AKS) provides managed Kubernetes with integrated CI/CD, monitoring, and security. Supports RBAC, network policies, and Microsoft Entra integration.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94035-exam-az-305-topic-4-question-70-discussion/"
  },
  {
    id: 205,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Service Fabric",
      "B. Azure Data Lake",
      "C. Azure Service Bus",
      "D. Azure Application Gateway"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94037-exam-az-305-topic-4-question-71-discussion/"
  },
  {
    id: 206,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Your company has offices in North America and Europe.You plan to migrate to Azure.You need to recommend a networking solution for the new Azure infrastructure. The solution must meet the following requirements:• The Point-to-Site (P2S) VPN connections of mobile users must connect automatically to the closest Azure region.• The offices in each region must connect to their local Azure region by using an ExpressRoute circuit.• Transitive routing between virtual networks and on-premises networks must be supported.• The network traffic between virtual networks must be filtered by using FQDNs.What should you include in the recommendation?",
    options: [
      "A. Azure Virtual WAN with a secured virtual hub",
      "B. virtual network peering and application security groups",
      "C. virtual network gateways and network security groups (NSGs)",
      "D. Azure Route Server and Azure Network Function Manager"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. For network connectivity troubleshooting, Azure Network Watcher provides IP flow verify (checks NSG rules), connection troubleshoot, and packet capture capabilities.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94039-exam-az-305-topic-4-question-72-discussion/"
  },
  {
    id: 207,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Business Critical",
      "B. Azure SQL Managed Instance Business Critical",
      "C. Azure SQL Database Standard",
      "D. Azure SQL Managed Instance General Purpose"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94040-exam-az-305-topic-4-question-73-discussion/"
  },
  {
    id: 208,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You are designing a point of sale (POS) solution that will be deployed across multiple locations and will use an Azure Databricks workspace in the Standard tier. The solution will include multiple apps deployed to the on-premises network of each location.You need to configure the authentication method that will be used by the app to access the workspace. The solution must minimize the administrative effort associated with staff turnover and credential management.What should you configure?",
    options: [
      "A. a managed identity",
      "B. a service principal",
      "C. a personal access token"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94042-exam-az-305-topic-4-question-74-discussion/"
  },
  {
    id: 209,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have two Azure AD tenants named contoso.com and fabrikam.com. Each tenant is linked to 50 Azure subscriptions. Contoso.com contains two users named User1 and User2.You need to meet the following requirements:• Ensure that User1 can change the Azure AD tenant linked to specific Azure subscriptions.• If an Azure subscription is liked to a new Azure AD tenant, and no available Azure AD accounts have full subscription-level permissions to the subscription, elevate the access of User2 to the subscription.The solution must use the principle of least privilege.Which role should you assign to each user? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image159.png"],
    backImage: "/images/questions/image160.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94030-exam-az-305-topic-4-question-75-discussion/"
  },
  {
    id: 210,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Microsoft Entra ID for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?",
    options: [
      "A. Configure a Conditional Access policy.",
      "B. Use Microsoft Entra ID entitlement management to govern external users.",
      "C. Configure the Microsoft Entra ID provisioning service.",
      "D. Configure Microsoft Entra ID Identity Protection."
    ],
    correct: [1],
    multipleAnswers: false,
    images: ["/images/questions/image154.png"],
    explanation: "CORRECT: B. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94031-exam-az-305-topic-4-question-76-discussion/"
  },
  {
    id: 211,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have a multi-tier app named App1 and an Azure SQL database named SQL1. The backend service of App1 writes data to SQL1. Users use the App1 client to read the data from SQL1.During periods of high utilization, the users experience delays retrieving the data.You need to minimize how long it takes for data requests.What should you include in the solution?",
    options: [
      "A. Azure Cache for Redis",
      "B. Azure Content Delivery Network (CDN)",
      "C. Azure Data Factory",
      "D. Azure Synapse Analytics"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95577-exam-az-305-topic-4-question-77-discussion/"
  },
  {
    id: 212,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You are designing an app that will include two components. The components will communicate by sending messages via a queue.You need to recommend a solution to process the messages by using a First in, First out (FIFO) pattern.What should you include in the recommendation?",
    options: [
      "A. storage queues with a custom metadata setting",
      "B. Azure Service Bus queues with partitioning enabled",
      "C. Azure Service Bus queues with sessions enabled",
      "D. storage queues with a stored access policy"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95581-exam-az-305-topic-4-question-79-discussion/"
  },
  {
    id: 213,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription that contains the resources shown in the following table.You create peering between VNet1 and VNet2 and between VNet1 and VNet3.The virtual machines host an HTTPS-based client/server application and are accessible only via the private IP address of each virtual machine.You need to implement a load balancing solution for VM2 and VM3. The solution must ensure that if VM2 fails, requests will be routed automatically to VM3, and if VM3 fails, requests will be routed automatically to VM2.What should you include in the solution?",
    options: [
      "A. Azure Firewall Premium",
      "B. Azure Application Gateway v2",
      "C. a cross-region load balancer",
      "D. Azure Front Door Premium"
    ],
    correct: [3],
    multipleAnswers: false,
    images: ["/images/questions/image172.png"],
    explanation: "CORRECT: D. Azure VM availability options: Availability Zones (99.99% SLA, datacenter failure), Availability Sets (99.95% SLA, rack failure), Scale Sets for auto-scaling.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95590-exam-az-305-topic-4-question-78-discussion/"
  },
  {
    id: 214,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing an app that will use Azure Functions to process Azure Event Hubs events. Request processing is estimated to take between five and 20 minutes.You need to recommend a hosting solution that meets the following requirements:• Supports estimates of request processing runtimes• Supports event-driven autoscaling for the appWhich hosting plan should you recommend?",
    options: [
      "A. Dedicated",
      "B. Consumption",
      "C. App Service",
      "D. Premium"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure Functions serverless compute scales automatically and charges only for execution time. Supports multiple triggers, bindings, and managed identity authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95587-exam-az-305-topic-4-question-81-discussion/"
  },
  {
    id: 215,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You need to deploy an instance of SQL Server on Azure Virtual Machines. The solution must meet the following requirements:• Support 15,000 disk IOPS.• Support SR-IOV.• Minimize costs.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image173.png"],
    backImage: "/images/questions/image174.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95553-exam-az-305-topic-4-question-80-discussion/"
  },
  {
    id: 216,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Notification Hubs",
      "B. Azure Application Gateway",
      "C. Azure Service Bus",
      "D. Azure Traffic Manager"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/99749-exam-az-305-topic-4-question-82-discussion/"
  },
  {
    id: 217,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Notification Hubs",
      "B. Azure Application Gateway",
      "C. Azure Queue Storage",
      "D. Azure Traffic Manager"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/99750-exam-az-305-topic-4-question-83-discussion/"
  },
  {
    id: 218,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Basic",
      "B. Azure SQL Database Business Critical",
      "C. Azure SQL Database Standard",
      "D. Azure SQL Managed Instance General Purpose"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/99751-exam-az-305-topic-4-question-84-discussion/"
  },
  {
    id: 219,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Hyperscale",
      "B. Azure SQL Database Premium",
      "C. Azure SQL Database Standard",
      "D. Azure SQL Managed Instance General Purpose"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/101793-exam-az-305-topic-4-question-85-discussion/"
  },
  {
    id: 220,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You company has offices in New York City, Sydney, Paris, and Johannesburg.The company has an Azure subscription.You plan to deploy a new Azure networking solution that meets the following requirements:• Connects to ExpressRoute circuits in the Azure regions of East US, Southeast Asia, North Europe, and South Africa• Minimizes latency by supporting connection in three regions• Supports Site-to-site VPN connections• Minimizes costsYou need to identify the minimum number of Azure Virtual WAN hubs that you must deploy, and which virtual WAN SKU to use.What should you identify? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image178.png"],
    backImage: "/images/questions/image179.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/99439-exam-az-305-topic-4-question-86-discussion/"
  },
  {
    id: 221,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an Azure Functions microservice app named App1 that is hosted in the Consumption plan. App1 uses an Azure Queue Storage trigger.You plan to migrate App1 to an Azure Kubernetes Service (AKS) cluster.You need to prepare the AKS cluster to support App1. The solution must meet the following requirements:• Use the same scaling mechanism as the current deployment.• Support kubenet and Azure Container Networking Interface (CNI) networking.Which two actions should you perform? Each correct answer presents part of the solution.NOTE: Each correct answer is worth one point.",
    options: [
      "A. Configure the horizontal pod autoscaler.",
      "B. Install Virtual Kubelet.",
      "C. Configure the AKS cluster autoscaler.",
      "D. Configure the virtual node add-on.",
      "E. Install Kubernetes-based Event Driven Autoscaling (KEDA)."
    ],
    correct: [0, 4],
    multipleAnswers: true,
    explanation: "CORRECT: A, E. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/100772-exam-az-305-topic-4-question-87-discussion/"
  },
  {
    id: 222,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Application Gateway",
      "B. Azure Queue Storage",
      "C. Azure Data Lake",
      "D. Azure Traffic Manager"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/108784-exam-az-305-topic-4-question-88-discussion/"
  },
  {
    id: 223,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Managed Instance General Purpose",
      "B. Azure SQL Database Hyperscale",
      "C. Azure SQL Database Premium",
      "D. Azure SQL Managed Instance Business Critical"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/114104-exam-az-305-topic-4-question-89-discussion/"
  },
  {
    id: 224,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Hyperscale",
      "B. Azure SQL Database Premium",
      "C. Azure SQL Database Basic",
      "D. Azure SQL Database Serverless"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106760-exam-az-305-topic-4-question-90-discussion/"
  },
  {
    id: 225,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Notification Hubs",
      "B. Azure Service Bus",
      "C. Azure Blob Storage",
      "D. Azure Service Fabric"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/107675-exam-az-305-topic-4-question-91-discussion/"
  },
  {
    id: 226,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Service Fabric",
      "B. Azure Traffic Manager",
      "C. Azure Queue Storage",
      "D. Azure Notification Hubs"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/117374-exam-az-305-topic-4-question-92-discussion/"
  },
  {
    id: 227,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Managed Instance Business Critical",
      "B. Azure SQL Managed Instance General Purpose",
      "C. Azure SQL Database Standard",
      "D. Azure SQL Database Premium"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/118927-exam-az-305-topic-4-question-94-discussion/"
  },
  {
    id: 228,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an on-premises Microsoft SQL Server 2008 instance that hosts a 50-GB database.You need to migrate the database to an Azure SQL managed instance. The solution must minimize downtime.What should you use?",
    options: [
      "A. Azure Migrate",
      "B. Azure Data Studio",
      "C. WANdisco LiveData Platform for Azure",
      "D. SQL Server Management Studio (SSMS)"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106764-exam-az-305-topic-4-question-93-discussion/"
  },
  {
    id: 229,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Service Fabric",
      "B. Azure Queue Storage",
      "C. Azure Traffic Manager",
      "D. Azure Application Gateway"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/108786-exam-az-305-topic-4-question-96-discussion/"
  },
  {
    id: 230,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Business Critical",
      "B. Azure SQL Database Basic",
      "C. Azure SQL Managed Instance General Purpose",
      "D. Azure SQL Database Hyperscale"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/107685-exam-az-305-topic-4-question-95-discussion/"
  },
  {
    id: 231,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Application Gateway",
      "B. Azure Data Lake",
      "C. Azure Queue Storage",
      "D. Azure Blob Storage"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/118845-exam-az-305-topic-4-question-97-discussion/"
  },
  {
    id: 232,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Blob Storage",
      "B. Azure Data Lake",
      "C. Azure Queue Storage",
      "D. Azure Service Fabric"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/107072-exam-az-305-topic-4-question-98-discussion/"
  },
  {
    id: 233,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Standard",
      "B. Azure SQL Managed Instance General Purpose",
      "C. Azure SQL Database Serverless",
      "D. Azure SQL Database Premium"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106749-exam-az-305-topic-4-question-100-discussion/"
  },
  {
    id: 234,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Serverless",
      "B. Azure SQL Managed Instance General Purpose",
      "C. Azure SQL Database Basic",
      "D. Azure SQL Database Business Critical"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/107070-exam-az-305-topic-4-question-99-discussion/"
  },
  {
    id: 235,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Notification Hubs",
      "B. Azure Queue Storage",
      "C. Azure Blob Storage",
      "D. Azure Application Gateway"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106682-exam-az-305-topic-4-question-101-discussion/"
  },
  {
    id: 236,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Service Bus",
      "B. Azure Blob Storage",
      "C. Azure Notification Hubs",
      "D. Azure Application Gateway"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/118028-exam-az-305-topic-4-question-103-discussion/"
  },
  {
    id: 237,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are developing a multi-tier app named App1 that will be hosted on Azure virtual machines. The peak utilization periods for App1 will be from 8 AM to 9 AM and 4 PM to 5 PM on weekdays.You need to deploy the infrastructure for App1. The solution must meet the following requirements:• Support virtual machines deployed to four availability zones across two Azure regions.• Minimize costs by accumulating CPU credits during periods of low utilization.What is the minimum number of virtual networks you should deploy, and which virtual machine size should you use? To answer, select the appropriate options in the answer area.",
    frontImages: ["/images/questions/image196.png"],
    backImage: "/images/questions/image197.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/115056-exam-az-305-topic-4-question-102-discussion/"
  },
  {
    id: 238,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an on-premises Microsoft SQL server named SQL1 that hosts 50 databases.You plan to migrate SQL1 to Azure SQL Managed Instance.You need to perform an offline migration of SQL1. The solution must minimize administrative effort.What should you include in the solution?",
    options: [
      "A. Azure Migrate",
      "B. Azure Database Migration Service",
      "C. SQL Server Migration Assistant (SSMA)",
      "D. Data Migration Assistant (DMA)"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/115257-exam-az-305-topic-4-question-104-discussion/"
  },
  {
    id: 239,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Service Bus",
      "B. Azure Data Lake",
      "C. Azure Application Gateway",
      "D. Azure Notification Hubs"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/118842-exam-az-305-topic-4-question-106-discussion/"
  },
  {
    id: 240,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?",
    options: [
      "A. Azure Service Bus",
      "B. Azure Data Lake",
      "C. Azure Traffic Manager",
      "D. Azure Notification Hubs"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/118843-exam-az-305-topic-4-question-105-discussion/"
  },
  {
    id: 241,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Business Critical",
      "B. Azure SQL Database Hyperscale",
      "C. Azure SQL Managed Instance Business Critical",
      "D. Azure SQL Database Standard"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/116858-exam-az-305-topic-4-question-107-discussion/"
  },
  {
    id: 242,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "DRAG DROP -You plan to deploy an infrastructure solution that will contain the following configurations:• External users will access the infrastructure by using Azure Front Door.• External user access to the backend APIs hosted in Azure Kubernetes Service (AKS) will be controlled by using Azure API Management.• External users will be authenticated by an Azure AD B2C tenant that uses OpenID Connect-based federation with a third-party identity provider.Which function does each service provide? To answer, drag the appropriate functions to the correct services. Each function may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image212.png"],
    backImage: "/images/questions/image276.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/121239-exam-az-305-topic-4-question-108-discussion/"
  },
  {
    id: 243,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed at the same time as the Azure SQL databases.The company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service instances must reside in the same region.You need to recommend a solution to meet the regulatory requirement.Solution: You recommend using an Azure Policy initiative to enforce the location of resource groups.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure Policy enforces organizational standards at Management Group, Subscription, or Resource Group scope. Policies can audit, deny, or remediate non-compliant resources.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/121271-exam-az-305-topic-4-question-109-discussion/"
  },
  {
    id: 244,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Your on-premises datacenter contains a server that runs Linux and hosts a Java app named App1. App1 has the following characteristics:• App1 is an interactive app that users access by using HTTPS connections.• The number of connections to App1 changes significantly throughout the day.• App1 runs multiple concurrent instances.• App1 requires major changes to run in a container.You plan to migrate App1 to Azure.You need to recommend a compute solution for App1. The solution must meet the following requirements:• The solution must run multiple instances of App1.• The number of instances must be managed automatically depending on the load.• Administrative effort must be minimized.What should you include in the recommendation?",
    options: [
      "A. Azure Batch",
      "B. Azure App Service",
      "C. Azure Kubernetes Service (AKS)",
      "D. Azure Virtual Machine Scale Sets"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure Kubernetes Service (AKS) provides managed Kubernetes with integrated CI/CD, monitoring, and security. Supports RBAC, network policies, and Microsoft Entra integration.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122756-exam-az-305-topic-4-question-110-discussion/"
  },
  {
    id: 245,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure App Service web app named Webapp1 that connects to an Azure SQL database named DB1. Webapp1 and DB1 are deployed to the East US Azure region.You need to ensure that all the traffic between Webapp1 and DB1 is sent via a private connection.What should you do? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image235.png"],
    backImage: "/images/questions/image236.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/123825-exam-az-305-topic-4-question-111-discussion/"
  },
  {
    id: 246,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription that contains an Azure Kubernetes Service (AKS) instance named AKS1. AKS1 hosts microservice-based APIs that are configured to listen on non-default HTTP ports.You plan to deploy a Standard tier Azure API Management instance named APIM1 that will make the APIs available to external users.You need to ensure that the AKS1 APIs are accessible to APIM1. The solution must meet the following requirements:• Implement MTLS authentication between APIM1 and AKS1.• Minimize development effort.• Minimize costs.What should you do?",
    options: [
      "A. Implement an external load balancer on AKS1.",
      "B. Redeploy APIM1 to the virtual network that contains AKS1.",
      "C. Implement an ExternalName service on AKS1.",
      "D. Deploy an ingress controller to AKS1."
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure Kubernetes Service (AKS) provides managed Kubernetes with integrated CI/CD, monitoring, and security. Supports RBAC, network policies, and Microsoft Entra integration.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122959-exam-az-305-topic-4-question-113-discussion/"
  },
  {
    id: 247,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -Your on-premises network contains an Active Directory Domain Services (AD DS) domain. The domain contains a server named Server1. Server1 contains an app named App1 that uses AD DS authentication. Remote users access App1 by using a VPN connection to the on-premises network.You have an Azure AD tenant that syncs with the AD DS domain by using Azure AD Connect.You need to ensure that the remote users can access App1 without using a VPN. The solution must meet the following requirements:• Ensure that the users authenticate by using Azure Multi-Factor Authentication (MFA).• Minimize administrative effort.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image237.png"],
    backImage: "/images/questions/image238.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/123521-exam-az-305-topic-4-question-112-discussion/"
  },
  {
    id: 248,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You need to recommend a solution to integrate Azure Cosmos DB and Azure Synapse. The solution must meet the following requirements:• Traffic from an Azure Synapse workspace to the Azure Cosmos DB account must be sent via the Microsoft backbone network.• Traffic from the Azure Synapse workspace to the Azure Cosmos DB account must NOT be routed over the internet.• Implementation effort must be minimized.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image239.png"],
    backImage: "/images/questions/image240.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122962-exam-az-305-topic-4-question-114-discussion/"
  },
  {
    id: 249,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription that contains an Azure Cosmos DB for NoSQL account named account1 and an Azure Synapse Analytics workspace named Workspace1. The account1 account contains a container named Contained that has the analytical store enabled.You need to recommend a solution that will process the data stored in Contained in near-real-time (NRT) and output the results to a data warehouse in Workspace1 by using a runtime engine in the workspace. The solution must minimize data movement.Which pool in Workspace1 should you use?",
    options: [
      "A. Apache Spark",
      "B. serverless SQL",
      "C. dedicated SQL",
      "D. Data Explorer"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure Kubernetes Service (AKS) provides managed Kubernetes with integrated CI/CD, monitoring, and security. Supports RBAC, network policies, and Microsoft Entra integration.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/130480-exam-az-305-topic-4-question-115-discussion/"
  },
  {
    id: 250,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "DRAG DROP -You have an on-premises datacenter named Site1. Site1 contains a VMware vSphere cluster named Cluster1 that hosts 100 virtual machines. Cluster1 is managed by using VMware vCenter.You have an Azure subscription named Sub1.You plan to migrate the virtual machines from Cluster1 to Sub1.You need to identify which resources are required to run the virtual machines in Azure. The solution must minimize administrative effort.What should you configure? To answer, drag the appropriate resources to the correct targets. Each resource may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image249.png"],
    backImage: "/images/questions/image277.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/130354-exam-az-305-topic-4-question-116-discussion/"
  }
];



