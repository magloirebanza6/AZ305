import { Question } from './types';

export const questions3: Question[] = [
  {
    id: 201,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Service Bus`, `Azure Data Lake`, `Azure Traffic Manager`, `Azure Blob Storage`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 202,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Hyperscale`, `Azure SQL Database Premium`, `Azure SQL Database Basic`, `Azure SQL Database Standard`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 203,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Basic`, `Azure SQL Managed Instance General Purpose`, `Azure SQL Database Business Critical`, `Azure SQL Managed Instance Business Critical`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Business Critical. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 204,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription.You need to deploy an Azure Kubernetes Service (AKS) solution that will use Windows Server 2019 nodes. The solution must meet the following requirements:• Minimize the time it takes to provision compute resources during scale-out operations.• Support autoscaling of Windows Server containers.Which scaling option should you recommend?`,
    options: [`horizontal pod autoscaler`, `Virtual nodes`, `Kubernetes version 1.20.2 or newer`, `cluster autoscaler`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure Kubernetes Service (AKS) simplifies deploying and managing containerized applications with automated upgrades, scaling, and integration with Azure services. The correct answer is: cluster autoscaler. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 205,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Service Fabric`, `Azure Data Lake`, `Azure Service Bus`, `Azure Application Gateway`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Service Bus. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 206,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Your company has offices in North America and Europe.You plan to migrate to Azure.You need to recommend a networking solution for the new Azure infrastructure. The solution must meet the following requirements:• The Point-to-Site (P2S) VPN connections of mobile users must connect automatically to the closest Azure region.• The offices in each region must connect to their local Azure region by using an ExpressRoute circuit.• Transitive routing between virtual networks and on-premises networks must be supported.• The network traffic between virtual networks must be filtered by using FQDNs.What should you include in the recommendation?`,
    options: [`Azure Virtual WAN with a secured virtual hub`, `virtual network peering and application security groups`, `virtual network gateways and network security groups (NSGs)`, `Azure Route Server and Azure Network Function Manager`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 207,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Business Critical`, `Azure SQL Managed Instance Business Critical`, `Azure SQL Database Standard`, `Azure SQL Managed Instance General Purpose`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 208,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are designing a point of sale (POS) solution that will be deployed across multiple locations and will use an Azure Databricks workspace in the Standard tier. The solution will include multiple apps deployed to the on-premises network of each location.You need to configure the authentication method that will be used by the app to access the workspace. The solution must minimize the administrative effort associated with staff turnover and credential management.What should you configure?`,
    options: [`a managed identity`, `a service principal`, `a personal access token`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Single sign-on (SSO) enables users to sign in once and access multiple applications. Azure AD supports various SSO methods including SAML, OpenID Connect, and password-based for legacy apps. The correct answer is: a service principal. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 209,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have two Azure AD tenants named contoso.com and fabrikam.com. Each tenant is linked to 50 Azure subscriptions. Contoso.com contains two users named User1 and User2.You need to meet the following requirements:• Ensure that User1 can change the Azure AD tenant linked to specific Azure subscriptions.• If an Azure subscription is liked to a new Azure AD tenant, and no available Azure AD accounts have full subscription-level permissions to the subscription, elevate the access of User2 to the subscription.The solution must use the principle of least privilege.Which role should you assign to each user? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image159.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 210,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?`,
    options: [`Configure a Conditional Access policy.`, `Use Azure AD entitlement management to govern external users.`, `Configure the Azure AD provisioning service.`, `Configure Azure AD Identity Protection.`],
    correct: [1],
    imageUrl: `https://img.examtopics.com/az-305/image154.png`,
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: Use Azure AD entitlement management to govern external users.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 211,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have a multi-tier app named App1 and an Azure SQL database named SQL1. The backend service of App1 writes data to SQL1. Users use the App1 client to read the data from SQL1.During periods of high utilization, the users experience delays retrieving the data.You need to minimize how long it takes for data requests.What should you include in the solution?`,
    options: [`Azure Cache for Redis`, `Azure Content Delivery Network (CDN)`, `Azure Data Factory`, `Azure Synapse Analytics`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 212,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription that contains the resources shown in the following table.You create peering between VNet1 and VNet2 and between VNet1 and VNet3.The virtual machines host an HTTPS-based client/server application and are accessible only via the private IP address of each virtual machine.You need to implement a load balancing solution for VM2 and VM3. The solution must ensure that if VM2 fails, requests will be routed automatically to VM3, and if VM3 fails, requests will be routed automatically to VM2.What should you include in the solution?`,
    options: [`Azure Firewall Premium`, `Azure Application Gateway v2`, `a cross-region load balancer`, `Azure Front Door Premium`],
    correct: [3],
    imageUrl: `https://img.examtopics.com/az-305/image172.png`,
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Front Door Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 213,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are designing an app that will include two components. The components will communicate by sending messages via a queue.You need to recommend a solution to process the messages by using a First in, First out (FIFO) pattern.What should you include in the recommendation?`,
    options: [`storage queues with a custom metadata setting`, `Azure Service Bus queues with partitioning enabled`, `Azure Service Bus queues with sessions enabled`, `storage queues with a stored access policy`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Service Bus queues with sessions enabled. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 214,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You need to deploy an instance of SQL Server on Azure Virtual Machines. The solution must meet the following requirements:• Support 15,000 disk IOPS.• Support SR-IOV.• Minimize costs.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image173.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 215,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You are developing an app that will use Azure Functions to process Azure Event Hubs events. Request processing is estimated to take between five and 20 minutes.You need to recommend a hosting solution that meets the following requirements:• Supports estimates of request processing runtimes• Supports event-driven autoscaling for the appWhich hosting plan should you recommend?`,
    options: [`Dedicated`, `Consumption`, `App Service`, `Premium`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure Service Bus provides enterprise messaging with queues and topics. Event Hubs handles high-throughput event streaming. Event Grid enables reactive event-driven architectures. The correct answer is: Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 216,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Notification Hubs`, `Azure Application Gateway`, `Azure Service Bus`, `Azure Traffic Manager`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Service Bus. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 217,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Notification Hubs`, `Azure Application Gateway`, `Azure Queue Storage`, `Azure Traffic Manager`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Queue Storage. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 218,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Basic`, `Azure SQL Database Business Critical`, `Azure SQL Database Standard`, `Azure SQL Managed Instance General Purpose`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Business Critical. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 219,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Hyperscale`, `Azure SQL Database Premium`, `Azure SQL Database Standard`, `Azure SQL Managed Instance General Purpose`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 220,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You company has offices in New York City, Sydney, Paris, and Johannesburg.The company has an Azure subscription.You plan to deploy a new Azure networking solution that meets the following requirements:• Connects to ExpressRoute circuits in the Azure regions of East US, Southeast Asia, North Europe, and South Africa• Minimizes latency by supporting connection in three regions• Supports Site-to-site VPN connections• Minimizes costsYou need to identify the minimum number of Azure Virtual WAN hubs that you must deploy, and which virtual WAN SKU to use.What should you identify? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image178.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 221,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Application Gateway`, `Azure Queue Storage`, `Azure Data Lake`, `Azure Traffic Manager`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Queue Storage. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 222,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure Functions microservice app named App1 that is hosted in the Consumption plan. App1 uses an Azure Queue Storage trigger.You plan to migrate App1 to an Azure Kubernetes Service (AKS) cluster.You need to prepare the AKS cluster to support App1. The solution must meet the following requirements:• Use the same scaling mechanism as the current deployment.• Support kubenet and Azure Container Networking Interface (CNI) networking.Which two actions should you perform? Each correct answer presents part of the solution.NOTE: Each correct answer is worth one point.`,
    options: [`Configure the horizontal pod autoscaler.`, `Install Virtual Kubelet.`, `Configure the AKS cluster autoscaler.`, `Configure the virtual node add-on.`, `Install Kubernetes-based Event Driven Autoscaling (KEDA).`],
    correct: [0, 4],
    multipleAnswers: true,
    explanation: `Azure Kubernetes Service (AKS) simplifies deploying and managing containerized applications with automated upgrades, scaling, and integration with Azure services. The correct answers are: Configure the horizontal pod autoscaler.; Install Kubernetes-based Event Driven Autoscaling (KEDA).. These options work together to fulfill all the requirements specified in the question.`
  },
  {
    id: 223,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Managed Instance General Purpose`, `Azure SQL Database Hyperscale`, `Azure SQL Database Premium`, `Azure SQL Managed Instance Business Critical`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 224,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Hyperscale`, `Azure SQL Database Premium`, `Azure SQL Database Basic`, `Azure SQL Database Serverless`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 225,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Notification Hubs`, `Azure Service Bus`, `Azure Blob Storage`, `Azure Service Fabric`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Service Bus. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 226,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Service Fabric`, `Azure Traffic Manager`, `Azure Queue Storage`, `Azure Notification Hubs`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Queue Storage. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 227,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Managed Instance Business Critical`, `Azure SQL Managed Instance General Purpose`, `Azure SQL Database Standard`, `Azure SQL Database Premium`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 228,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an on-premises Microsoft SQL Server 2008 instance that hosts a 50-GB database.You need to migrate the database to an Azure SQL managed instance. The solution must minimize downtime.What should you use?`,
    options: [`Azure Migrate`, `Azure Data Studio`, `WANdisco LiveData Platform for Azure`, `SQL Server Management Studio (SSMS)`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure Data Studio. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 229,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Business Critical`, `Azure SQL Database Basic`, `Azure SQL Managed Instance General Purpose`, `Azure SQL Database Hyperscale`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 230,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Application Gateway`, `Azure Data Lake`, `Azure Queue Storage`, `Azure Blob Storage`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Queue Storage. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 231,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Service Fabric`, `Azure Queue Storage`, `Azure Traffic Manager`, `Azure Application Gateway`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Queue Storage. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 232,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Blob Storage`, `Azure Data Lake`, `Azure Queue Storage`, `Azure Service Fabric`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Queue Storage. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 233,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Serverless`, `Azure SQL Managed Instance General Purpose`, `Azure SQL Database Basic`, `Azure SQL Database Business Critical`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Business Critical. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 234,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Standard`, `Azure SQL Managed Instance General Purpose`, `Azure SQL Database Serverless`, `Azure SQL Database Premium`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 235,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Service Bus`, `Azure Blob Storage`, `Azure Notification Hubs`, `Azure Application Gateway`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 236,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are developing a multi-tier app named App1 that will be hosted on Azure virtual machines. The peak utilization periods for App1 will be from 8 AM to 9 AM and 4 PM to 5 PM on weekdays.You need to deploy the infrastructure for App1. The solution must meet the following requirements:• Support virtual machines deployed to four availability zones across two Azure regions.• Minimize costs by accumulating CPU credits during periods of low utilization.What is the minimum number of virtual networks you should deploy, and which virtual machine size should you use? To answer, select the appropriate options in the answer area.`,
    imageUrl: `https://img.examtopics.com/az-305/image196.png`,
    multipleAnswers: false,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 237,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Notification Hubs`, `Azure Queue Storage`, `Azure Blob Storage`, `Azure Application Gateway`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Queue Storage. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 238,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an on-premises Microsoft SQL server named SQL1 that hosts 50 databases.You plan to migrate SQL1 to Azure SQL Managed Instance.You need to perform an offline migration of SQL1. The solution must minimize administrative effort.What should you include in the solution?`,
    options: [`Azure Migrate`, `Azure Database Migration Service`, `SQL Server Migration Assistant (SSMA)`, `Data Migration Assistant (DMA)`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure Database Migration Service. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 239,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Service Bus`, `Azure Data Lake`, `Azure Traffic Manager`, `Azure Notification Hubs`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 240,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Service Bus`, `Azure Data Lake`, `Azure Application Gateway`, `Azure Notification Hubs`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 241,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You plan to deploy an infrastructure solution that will contain the following configurations:• External users will access the infrastructure by using Azure Front Door.• External user access to the backend APIs hosted in Azure Kubernetes Service (AKS) will be controlled by using Azure API Management.• External users will be authenticated by an Azure AD B2C tenant that uses OpenID Connect-based federation with a third-party identity provider.Which function does each service provide? To answer, drag the appropriate functions to the correct services. Each function may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image212.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 242,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Business Critical`, `Azure SQL Database Hyperscale`, `Azure SQL Managed Instance Business Critical`, `Azure SQL Database Standard`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 243,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed at the same time as the Azure SQL databases.The company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service instances must reside in the same region.You need to recommend a solution to meet the regulatory requirement.Solution: You recommend using an Azure Policy initiative to enforce the location of resource groups.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Policy enforces organizational standards and assesses compliance at scale. Policies can be assigned at management group, subscription, or resource group scopes, with effects like deny, audit, or deployIfNotExists. The correct answer is: No. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 244,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure App Service web app named Webapp1 that connects to an Azure SQL database named DB1. Webapp1 and DB1 are deployed to the East US Azure region.You need to ensure that all the traffic between Webapp1 and DB1 is sent via a private connection.What should you do? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image235.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 245,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Your on-premises datacenter contains a server that runs Linux and hosts a Java app named App1. App1 has the following characteristics:• App1 is an interactive app that users access by using HTTPS connections.• The number of connections to App1 changes significantly throughout the day.• App1 runs multiple concurrent instances.• App1 requires major changes to run in a container.You plan to migrate App1 to Azure.You need to recommend a compute solution for App1. The solution must meet the following requirements:• The solution must run multiple instances of App1.• The number of instances must be managed automatically depending on the load.• Administrative effort must be minimized.What should you include in the recommendation?`,
    options: [`Azure Batch`, `Azure App Service`, `Azure Kubernetes Service (AKS)`, `Azure Virtual Machine Scale Sets`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Kubernetes Service (AKS) simplifies deploying and managing containerized applications with automated upgrades, scaling, and integration with Azure services. The correct answer is: Azure App Service. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 246,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -Your on-premises network contains an Active Directory Domain Services (AD DS) domain. The domain contains a server named Server1. Server1 contains an app named App1 that uses AD DS authentication. Remote users access App1 by using a VPN connection to the on-premises network.You have an Azure AD tenant that syncs with the AD DS domain by using Azure AD Connect.You need to ensure that the remote users can access App1 without using a VPN. The solution must meet the following requirements:• Ensure that the users authenticate by using Azure Multi-Factor Authentication (MFA).• Minimize administrative effort.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image237.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 247,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription that contains an Azure Kubernetes Service (AKS) instance named AKS1. AKS1 hosts microservice-based APIs that are configured to listen on non-default HTTP ports.You plan to deploy a Standard tier Azure API Management instance named APIM1 that will make the APIs available to external users.You need to ensure that the AKS1 APIs are accessible to APIM1. The solution must meet the following requirements:• Implement MTLS authentication between APIM1 and AKS1.• Minimize development effort.• Minimize costs.What should you do?`,
    options: [`Implement an external load balancer on AKS1.`, `Redeploy APIM1 to the virtual network that contains AKS1.`, `Implement an ExternalName service on AKS1.`, `Deploy an ingress controller to AKS1.`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure AD Privileged Identity Management (PIM) provides just-in-time privileged access, enforces approval workflows for role activation, and maintains audit trails of privileged operations. The correct answer is: Deploy an ingress controller to AKS1.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 248,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You need to recommend a solution to integrate Azure Cosmos DB and Azure Synapse. The solution must meet the following requirements:• Traffic from an Azure Synapse workspace to the Azure Cosmos DB account must be sent via the Microsoft backbone network.• Traffic from the Azure Synapse workspace to the Azure Cosmos DB account must NOT be routed over the internet.• Implementation effort must be minimized.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image239.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 249,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription that contains an Azure Cosmos DB for NoSQL account named account1 and an Azure Synapse Analytics workspace named Workspace1. The account1 account contains a container named Contained that has the analytical store enabled.You need to recommend a solution that will process the data stored in Contained in near-real-time (NRT) and output the results to a data warehouse in Workspace1 by using a runtime engine in the workspace. The solution must minimize data movement.Which pool in Workspace1 should you use?`,
    options: [`Apache Spark`, `serverless SQL`, `dedicated SQL`, `Data Explorer`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 250,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You have an on-premises datacenter named Site1. Site1 contains a VMware vSphere cluster named Cluster1 that hosts 100 virtual machines. Cluster1 is managed by using VMware vCenter.You have an Azure subscription named Sub1.You plan to migrate the virtual machines from Cluster1 to Sub1.You need to identify which resources are required to run the virtual machines in Azure. The solution must minimize administrative effort.What should you configure? To answer, drag the appropriate resources to the correct targets. Each resource may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image249.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 251,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -Your on-premises datacenter contains a server named Server1 that runs Microsoft SQL Server 2022. Server1 contains a 30-TB database named DB1 that stores customer data. Server1 runs a custom application named App1 that verifies the compliance of records in DB1. App1 must run on the same server as DB1.You have an Azure subscription.You need to migrate DB1 to Azure. The solution must minimize administrative effort.To which service should you migrate DB1, and what should you use to perform the migration? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image251.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 252,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Managed Instance Business Critical`, `Azure SQL Database Business Critical`, `Azure SQL Database Basic`, `Azure SQL Database Standard`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Business Critical. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 253,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Azure Log Analytics`, `Azure Arc`, `Azure Monitor metrics`, `Azure Monitor action groups`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 254,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Azure Log Analytics`, `Azure Arc`, `Azure Analysis Services`, `Azure Monitor action groups`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 255,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Azure Log Analytics`, `Azure Analysis Services`, `Azure Monitor metrics`, `Azure Monitor action groups`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 256,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Business Critical`, `Azure SQL Database Premium`, `Azure SQL Database Basic`, `Azure SQL Database Hyperscale`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 257,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription that contains the resources shown in the following table.VNet1, VNet2, and VNet3 each has multiple virtual machines connected. The virtual machines use the Azure DNS service for name resolution.You need to recommend an Azure Monitor log routing solution that meets the following requirements:• Ensures that the logs collected from the virtual machines and sent to Workspace1 are routed over the Microsoft backbone network• Minimizes administrative effortWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.`,
    imageUrl: `https://img.examtopics.com/az-305/image253.png`,
    multipleAnswers: false,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 258,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Application Insights`, `Azure Analysis Services`, `Azure Advisor`, `Azure Log Analytics`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Log Analytics. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 259,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:• Failover between replicas of the database must occur without any data loss.• The database must remain available in the event of a zone outage.• Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Standard`, `Azure SQL Managed Instance Business Critical`, `Azure SQL Database Serverless`, `Azure SQL Database Premium`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 260,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have 100 Azure Storage accounts.Access to the accounts is restricted by using Azure role-based access control (Azure RBAC) assignments.You need to recommend a solution that uses role assignment conditions based on the tags assigned to individual resources within the storage accounts.What should you include in the recommendation? To answer, select the appropriate options in the answer area.`,
    imageUrl: `https://img.examtopics.com/az-305/image256.png`,
    multipleAnswers: false,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 261,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.What should you include in the recommendation?`,
    options: [`Azure Service Fabric`, `Azure Notification Hubs`, `Azure Service Bus`, `Azure Traffic Manager`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Service Bus. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 262,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You need to ensure that users managing the production environment are registered for Azure MFA and must authenticate by using Azure MFA when they sign in to the Azure portal. The solution must meet the authentication and authorization requirements.What should you do? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0000500001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 263,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `After you migrate App1 to Azure, you need to enforce the data modification requirements to meet the security and compliance requirements.What should you do?`,
    options: [`Create an access policy for the blob service.`, `Implement Azure resource locks.`, `Create Azure RBAC assignments.`, `Modify the access level of the blob service.`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 264,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution for the App1 maintenance task. The solution must minimize costs.What should you include in the recommendation?`,
    options: [`an Azure logic app`, `an Azure function`, `an Azure virtual machine`, `an App Service WebJob`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: an Azure function. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 265,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution that meets the application development requirements.What should you include in the recommendation?`,
    options: [`the Azure App Configuration service`, `an Azure Container Registry instance`, `deployment slots`, `Continuous Integration/Continuous Deployment (CI/CD) sources`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: deployment slots. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 266,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You need to recommend a solution to ensure that App1 can access the third-party credentials and access strings. The solution must meet the security requirements.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0016000001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 267,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend an App Service architecture that meets the requirements for App1. The solution must minimize costs.What should you recommend?`,
    options: [`one App Service Environment (ASE) per availability zone`, `one App Service Environment (ASE) per region`, `one App Service plan per region`, `one App Service plan per availability zone`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: one App Service plan per region. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 268,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are evaluating the components of the migration to Azure that require you to provision an Azure Storage account. For each of the following statements, selectYes if the statement is true. Otherwise, select No.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0016400009.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 269,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You plan to migrate App1 to Azure.You need to recommend a high-availability solution for App1. The solution must meet the resiliency requirements.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0017000001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 270,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `What should you include in the identity management strategy to support the planned changes?`,
    options: [`Deploy domain controllers for corp.fabrikam.com to virtual networks in Azure.`, `Move all the domain controllers from corp.fabrikam.com to virtual networks in Azure.`, `Deploy a new Azure AD tenant for the authentication of new R&D projects.`, `Deploy domain controllers for the rd.fabrikam.com forest to virtual networks in Azure.`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 271,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You plan to migrate App1 to Azure.You need to recommend a network connectivity solution for the Azure Storage account that will host the App1 data. The solution must meet the security and compliance requirements.What should you include in the recommendation?`,
    options: [`Microsoft peering for an ExpressRoute circuit`, `Azure public peering for an ExpressRoute circuit`, `a service endpoint that has a service endpoint policy`, `a private endpoint`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure Blob Storage in General Purpose v2 accounts supports encryption scopes for per-blob encryption with customer-managed keys, enabling multi-tenant scenarios where each customer's data is encrypted separately. The correct answer is: a private endpoint. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 272,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to implement the Azure RBAC role assignments for the Network Contributor role. The solution must meet the authentication and authorization requirements.What is the minimum number of assignments that you must use?`,
    options: [`1`, `2`, `5`, `10`, `15`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: 2. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 273,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You plan to migrate App1 to Azure.You need to recommend a storage solution for App1 that meets the security and compliance requirements.Which type of storage should you recommend, and how should you recommend configuring the storage? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0017200001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 274,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You need to configure an Azure policy to ensure that the Azure SQL databases have Transparent Data Encryption (TDE) enabled. The solution must meet the security and compliance requirements.Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.Select and Place:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0017600001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 275,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a notification solution for the IT Support distribution group.What should you include in the recommendation?`,
    options: [`a SendGrid account with advanced reporting`, `an action group`, `Azure Network Watcher`, `Azure AD Connect Health`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure AD Connect Health. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 276,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -To meet the authentication requirements of Fabrikam, what should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0001100001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 277,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to meet the database retention requirements.What should you recommend?`,
    options: [`Configure a long-term retention policy for the database.`, `Configure Azure Site Recovery.`, `Use automatic Azure SQL Database backups.`, `Configure geo-replication of the database.`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 278,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -What should you implement to meet the identity requirements? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0001900001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 279,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `What should you recommend to meet the monitoring requirements for App2?`,
    options: [`VM insights`, `Azure Application Insights`, `Microsoft Sentinel`, `Container insights`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Application Insights. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 280,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a data storage strategy for WebApp1.What should you include in the recommendation?`,
    options: [`an Azure virtual machine that runs SQL Server`, `a fixed-size DTU Azure SQL database`, `an Azure SQL Database elastic pool`, `a vCore-based Azure SQL database`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: a vCore-based Azure SQL database. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 281,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You plan to migrate DB1 and DB2 to Azure.You need to ensure that the Azure database and the service tier meet the resiliency and business requirements.What should you configure? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0008100001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 282,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You need to recommend a solution that meets the file storage requirements for App2.What should you deploy to the Azure subscription and the on-premises network? To answer, drag the appropriate services to the correct locations. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0008600001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 283,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are evaluating whether to use Azure Traffic Manager and Azure Application Gateway to meet the connection requirements for App1.What is the minimum numbers of instances required for each service? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0011700001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 284,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution that meets the data requirements for App1.What should you recommend deploying to each availability zone that contains an instance of App1?`,
    options: [`an Azure Cosmos DB that uses multi-region writes`, `an Azure Data Lake store that uses geo-zone-redundant storage (GZRS)`, `an Azure Storage account that uses geo-zone-redundant storage (GZRS)`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 285,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -How should the migrated databases DB1 and DB2 be implemented in Azure?Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0012300001.png`,
    multipleAnswers: false,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 286,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You design a solution for the web tier of WebApp1 as shown in the exhibit.For each of the following statements, select Yes if the statement is true. Otherwise, select No.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0012800009.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
];

