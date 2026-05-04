import { Question } from './types';

export const questions1: Question[] = [
  {
    id: 1,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure Active Directory (Azure AD) tenant that syncs with an on-premises Active Directory domain.You have an internal web app named WebApp1 that is hosted on-premises. WebApp1 uses Integrated Windows authentication.Some users work remotely and do NOT have VPN access to the on-premises network.You need to provide the remote users with single sign-on (SSO) access to WebApp1.Which two features should you include in the solution? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.`,
    options: [`Azure AD Application Proxy`, `Azure AD Privileged Identity Management (PIM)`, `Conditional Access policies`, `Azure Arc`, `Azure AD enterprise applications`, `Azure Application Gateway`],
    correct: [0, 4],
    multipleAnswers: true,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answers are: Azure AD Application Proxy; Azure AD enterprise applications. These options work together to fulfill all the requirements specified in the question.`
  },
  {
    id: 2,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription that contains a custom application named Application1. Application1 was developed by an external company named Fabrikam,Ltd. Developers at Fabrikam were assigned role-based access control (RBAC) permissions to the Application1 components. All users are licensed for theMicrosoft 365 E5 plan.You need to recommend a solution to verify whether the Fabrikam developers still require permissions to Application1. The solution must meet the following requirements:✑ To the manager of the developers, send a monthly email message that lists the access permissions to Application1.✑ If the manager does not verify an access permission, automatically revoke that permission.✑ Minimize development effort.What should you recommend?`,
    options: [`In Azure Active Directory (Azure AD), create an access review of Application1.`, `Create an Azure Automation runbook that runs the Get-AzRoleAssignment cmdlet.`, `In Azure Active Directory (Azure AD) Privileged Identity Management, create a custom role assignment for the Application1 resources.`, `Create an Azure Automation runbook that runs the Get-AzureADUserAppRoleAssignment cmdlet.`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 3,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription. The subscription has a blob container that contains multiple blobs.Ten users in the finance department of your company plan to access the blobs during the month of April.You need to recommend a solution to enable access to the blobs during the month of April only.Which security solution should you include in the recommendation?`,
    options: [`shared access signatures (SAS)`, `Conditional Access policies`, `certificates`, `access keys`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 4,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure Active Directory (Azure AD) tenant named contoso.com that has a security group named Group1. Group1 is configured for assigned membership. Group1 has 50 members, including 20 guest users.You need to recommend a solution for evaluating the membership of Group1. The solution must meet the following requirements:✑ The evaluation must be repeated automatically every three months.✑ Every member must be able to report whether they need to be in Group1.✑ Users who report that they do not need to be in Group1 must be removed from Group1 automatically.✑ Users who do not report whether they need to be in Group1 must be removed from Group1 automatically.What should you include in the recommendation?`,
    options: [`Implement Azure AD Identity Protection.`, `Change the Membership type of Group1 to Dynamic User.`, `Create an access review.`, `Implement Azure AD Privileged Identity Management (PIM).`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Create an access review.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 5,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You plan to deploy an Azure web app named App1 that will use Azure Active Directory (Azure AD) authentication.App1 will be accessed from the internet by the users at your company. All the users have computers that run Windows 10 and are joined to Azure AD.You need to recommend a solution to ensure that the users can connect to App1 without being prompted for authentication and can access App1 only from company-owned computers.What should you recommend for each requirement? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0002800001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 6,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You plan to deploy Azure Databricks to support a machine learning application. Data engineers will mount an Azure Data Lake Storage account to the Databricks file system. Permissions to folders are granted directly to the data engineers.You need to recommend a design for the planned Databrick deployment. The solution must meet the following requirements:✑ Ensure that the data engineers can only access folders to which they have permissions.✑ Minimize development effort.✑ Minimize costs.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0002600001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 7,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure connectivity.Several virtual machines exhibit network connectivity issues.You need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.Solution: Use Azure Traffic Analytics in Azure Network Watcher to analyze the network traffic.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Network Watcher's IP flow verify checks if packets are allowed or denied to/from a VM by evaluating NSG rules. It's the appropriate tool for troubleshooting network connectivity at the packet level. The correct answer is: No. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 8,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure connectivity.Several virtual machines exhibit network connectivity issues.You need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.Solution: Use Azure Network Watcher to run IP flow verify to analyze the network traffic.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 9,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure connectivity.Several virtual machines exhibit network connectivity issues.You need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.Solution: Use Azure Advisor to analyze the network traffic.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [1],
    multipleAnswers: false,
    explanation: `ExpressRoute provides private, dedicated connectivity between on-premises networks and Azure. It offers more reliability, faster speeds, and lower latencies than typical internet connections. The correct answer is: No. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 10,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are designing a large Azure environment that will contain many subscriptions.You plan to use Azure Policy as part of a governance solution.To which three scopes can you assign Azure Policy definitions? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.`,
    options: [`Azure Active Directory (Azure AD) administrative units`, `Azure Active Directory (Azure AD) tenants`, `subscriptions`, `compute resources`, `resource groups`, `management groups`],
    correct: [2, 4, 5],
    multipleAnswers: true,
    explanation: `Azure Policy enforces organizational standards and assesses compliance at scale. Policies can be assigned at management group, subscription, or resource group scopes, with effects like deny, audit, or deployIfNotExists. The correct answers are: subscriptions; resource groups; management groups. These options work together to fulfill all the requirements specified in the question.`
  },
  {
    id: 11,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You have an Azure subscription. The subscription contains Azure virtual machines that run Windows Server 2016 and Linux.You need to use Azure Monitor to design an alerting strategy for security-related events.Which Azure Monitor Logs tables should you query? To answer, drag the appropriate tables to the correct log types. Each table may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0003300001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 12,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -Your on-premises network contains a server named Server1 that runs an ASP.NET application named App1.You have a hybrid deployment of Azure Active Directory (Azure AD).You need to recommend a solution to ensure that users sign in by using their Azure AD account and Azure Multi-Factor Authentication (MFA) when they connect to App1 from the internet.Which three features should you recommend be deployed and configured in sequence? To answer, move the appropriate features from the list of features to the answer area and arrange them in the correct order.Select and Place:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0003600001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 13,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure connectivity.Several virtual machines exhibit network connectivity issues.You need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.Solution: Install and configure the Azure Monitoring agent and the Dependency Agent on all the virtual machines. Use VM insights in Azure Monitor to analyze the network traffic.Does this meet the goal?`,
    options: [`Yes`, `No`],
    correct: [1],
    multipleAnswers: false,
    explanation: `ExpressRoute provides private, dedicated connectivity between on-premises networks and Azure. It offers more reliability, faster speeds, and lower latencies than typical internet connections. The correct answer is: No. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 14,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Azure Activity Log`, `Azure Advisor`, `Azure Analysis Services`, `Azure Monitor action groups`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 15,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You need to design an architecture to capture the creation of users and the assignment of roles. The captured data must be stored in Azure Cosmos DB.Which services should you include in the design? To answer, drag the appropriate services to the correct targets. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0004000001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 16,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription that contains 300 virtual machines that run Windows Server 2019.You need to centrally monitor all warning events in the System logs of the virtual machines.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0004300001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 17,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Your company, named Contoso, Ltd., implements several Azure logic apps that have HTTP triggers. The logic apps provide access to an on-premises web service.Contoso establishes a partnership with another company named Fabrikam, Inc.Fabrikam does not have an existing Azure Active Directory (Azure AD) tenant and uses third-party OAuth 2.0 identity management to authenticate its users.Developers at Fabrikam plan to use a subset of the logic apps to build applications that will integrate with the on-premises web service of Contoso.You need to design a solution to provide the Fabrikam developers with access to the logic apps. The solution must meet the following requirements:✑ Requests to the logic apps from the developers must be limited to lower rates than the requests from the users at Contoso.✑ The developers must be able to rely on their existing OAuth 2.0 provider to gain access to the logic apps.✑ The solution must NOT require changes to the logic apps.✑ The solution must NOT use Azure AD guest accounts.What should you include in the solution?`,
    options: [`Azure Front Door`, `Azure AD Application Proxy`, `Azure AD business-to-business (B2B)`, `Azure API Management`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure Logic Apps provide serverless workflow automation with 400+ connectors for integrating applications, data, and services across cloud and on-premises systems. The correct answer is: Azure API Management. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 18,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have several Azure App Service web apps that use Azure Key Vault to store data encryption keys.Several departments have the following requests to support the web app:Which service should you recommend for each department's request? To answer, configure the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0004500001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 19,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -Your company has the divisions shown in the following table.You plan to deploy a custom application to each subscription. The application will contain the following:✑ A resource group✑ An Azure web app✑ Custom role assignments✑ An Azure Cosmos DB accountYou need to use Azure Blueprints to deploy the application to each subscription.What is the minimum number of objects required to deploy the application? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0004800001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 20,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You need to design an Azure policy that will implement the following functionality:✑ For new resources, assign tags and values that match the tags and values of the resource group to which the resources are deployed.✑ For existing resources, identify whether the tags and values match the tags and values of the resource group that contains the resources.✑ For any non-compliant resources, trigger auto-generated remediation tasks to create missing tags and values.The solution must use the principle of least privilege.What should you include in the design? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0005200001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 21,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription that contains the resources shown in the following table.You create an Azure SQL database named DB1 that is hosted in the East US Azure region.To DB1, you add a diagnostic setting named Settings1. Settings1 archive SQLInsights to storage1 and sends SQLInsights to Workspace1.For each of the following statements, select Yes if the statement is true. Otherwise, select No.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0005400001.png`,
    multipleAnswers: false,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 22,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You plan to deploy an Azure SQL database that will store Personally Identifiable Information (PII).You need to ensure that only privileged users can view the PII.What should you include in the solution?`,
    options: [`dynamic data masking`, `role-based access control (RBAC)`, `Data Discovery & Classification`, `Transparent Data Encryption (TDE)`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 23,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You plan to deploy an app that will use an Azure Storage account.You need to deploy the storage account. The storage account must meet the following requirements:✑ Store the data for multiple users.✑ Encrypt each user's data by using a separate key.✑ Encrypt all the data in the storage account by using customer-managed keys.What should you deploy?`,
    options: [`files in a premium file share storage account`, `blobs in a general purpose v2 storage account`, `blobs in an Azure Data Lake Storage Gen2 account`, `files in a general purpose v2 storage account`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Blob Storage in General Purpose v2 accounts supports encryption scopes for per-blob encryption with customer-managed keys, enabling multi-tenant scenarios where each customer's data is encrypted separately. The correct answer is: blobs in a general purpose v2 storage account. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 24,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure App Service web app that uses a system-assigned managed identity.You need to recommend a solution to store the settings of the web app as secrets in an Azure key vault. The solution must meet the following requirements:✑ Minimize changes to the app code.✑ Use the principle of least privilege.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0005800001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 25,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You plan to deploy an application named App1 that will run on five Azure virtual machines. Additional virtual machines will be deployed later to run App1.You need to recommend a solution to meet the following requirements for the virtual machines that will run App1:✑ Ensure that the virtual machines can authenticate to Azure Active Directory (Azure AD) to gain access to an Azure key vault, Azure Logic Apps instances, and an Azure SQL database.✑ Avoid assigning new roles and permissions for Azure services when you deploy additional virtual machines.✑ Avoid storing secrets and certificates on the virtual machines.✑ Minimize administrative effort for managing identities.Which type of identity should you include in the recommendation?`,
    options: [`a system-assigned managed identity`, `a service principal that is configured to use a certificate`, `a service principal that is configured to use a client secret`, `a user-assigned managed identity`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: a user-assigned managed identity. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 26,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You have the resources shown in the following table:CDB1 hosts a container that stores continuously updated operational data.You are designing a solution that will use AS1 to analyze the operational data daily.You need to recommend a solution to analyze the data without affecting the performance of the operational data store.What should you include in the recommendation?`,
    options: [`Azure Cosmos DB change feed`, `Azure Data Factory with Azure Cosmos DB and Azure Synapse Analytics connectors`, `Azure Synapse Link for Azure Cosmos DB`, `Azure Synapse Analytics with PolyBase data loading`],
    correct: [2],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0006000001.png`,
    multipleAnswers: false,
    explanation: `Azure Kubernetes Service (AKS) simplifies deploying and managing containerized applications with automated upgrades, scaling, and integration with Azure services. The correct answer is: Azure Synapse Link for Azure Cosmos DB. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 27,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You deploy several Azure SQL Database instances.You plan to configure the Diagnostics settings on the databases as shown in the following exhibit.Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0006200001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 28,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an application that is used by 6,000 users to validate their vacation requests. The application manages its own credential store.Users must enter a username and password to access the application. The application does NOT support identity providers.You plan to upgrade the application to use single sign-on (SSO) authentication by using an Azure Active Directory (Azure AD) application registration.Which SSO method should you use?`,
    options: [`header-based`, `SAML`, `password-based`, `OpenID Connect`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Single sign-on (SSO) enables users to sign in once and access multiple applications. Azure AD supports various SSO methods including SAML, OpenID Connect, and password-based for legacy apps. The correct answer is: password-based. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 29,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription that contains a virtual network named VNET1 and 10 virtual machines. The virtual machines are connected to VNET1.You need to design a solution to manage the virtual machines from the internet. The solution must meet the following requirements:✑ Incoming connections to the virtual machines must be authenticated by using Azure Multi-Factor Authentication (MFA) before network connectivity is allowed.✑ Incoming connections must use TLS and connect to TCP port 443.✑ The solution must support RDP and SSH.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0006500004.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 30,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are designing an Azure governance solution.All Azure resources must be easily identifiable based on the following operational information: environment, owner, department and cost center.You need to ensure that you can use the operational information when you generate reports for the Azure resources.What should you include in the solution?`,
    options: [`an Azure data catalog that uses the Azure REST API as a data source`, `an Azure management group that uses parent groups to create a hierarchy`, `an Azure policy that enforces tagging rules`, `Azure Active Directory (Azure AD) administrative units`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: an Azure policy that enforces tagging rules. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 31,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `A company named Contoso, Ltd. has an Azure Active Directory (Azure AD) tenant that is integrated with Microsoft 365 and an Azure subscription.Contoso has an on-premises identity infrastructure. The infrastructure includes servers that run Active Directory Domain Services (AD DS) and Azure AD Connect.Contoso has a partnership with a company named Fabrikam. Inc. Fabrikam has an Active Directory forest and a Microsoft 365 tenant. Fabrikam has the same on- premises identity infrastructure components as Contoso.A team of 10 developers from Fabrikam will work on an Azure solution that will be hosted in the Azure subscription of Contoso. The developers must be added to the Contributor role for a resource group in the Contoso subscription.You need to recommend a solution to ensure that Contoso can assign the role to the 10 Fabrikam developers. The solution must ensure that the Fabrikam developers use their existing credentials to access resourcesWhat should you recommend?`,
    options: [`In the Azure AD tenant of Contoso. create cloud-only user accounts for the Fabrikam developers.`, `Configure a forest trust between the on-premises Active Directory forests of Contoso and Fabrikam.`, `Configure an organization relationship between the Microsoft 365 tenants of Fabrikam and Contoso.`, `In the Azure AD tenant of Contoso, create guest accounts for the Fabnkam developers.`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: In the Azure AD tenant of Contoso, create guest accounts for the Fabnkam developers.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 32,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?`,
    options: [`Configure the Azure AD provisioning service.`, `Enable Azure AD pass-through authentication and update the sign-in endpoint.`, `Use Azure AD entitlement management to govern external users.`, `Configure Azure AD join.`],
    correct: [2],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0006800001.jpg`,
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: Use Azure AD entitlement management to govern external users.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 33,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -Your company has 20 web APIs that were developed in-house.The company is developing 10 web apps that will use the web APIs. The web apps and the APIs are registered in the company s Azure Active Directory (AzureAD) tenant. The web APIs are published by using Azure API Management.You need to recommend a solution to block unauthorized requests originating from the web apps from reaching the web APIs. The solution must meet the following requirements:✑ Use Azure AD-generated claims.Minimize configuration and management effort.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0006900002.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 34,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Azure Log Analytics`, `Azure Arc`, `Azure Analysis Services`, `Application Insights`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 35,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?`,
    options: [`Configure the Azure AD provisioning service.`, `Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).`, `Use Azure AD entitlement management to govern external users.`, `Configure Azure AD Identity Protection.`],
    correct: [2],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0007200001.jpg`,
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: Use Azure AD entitlement management to govern external users.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 36,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are developing an app that will read activity logs for an Azure subscription by using Azure Functions.You need to recommend an authentication solution for Azure Functions. The solution must minimize administrative effort.What should you include in the recommendation?`,
    options: [`an enterprise application in Azure AD`, `system-assigned managed identities`, `shared access signatures (SAS)`, `application registration in Azure AD`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Activity Log records all control-plane operations including resource deployments, modifications, and deletions. It's the primary source for tracking ARM resource changes. The correct answer is: system-assigned managed identities. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 37,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?`,
    options: [`Configure Azure AD join.`, `Use Azure AD entitlement management to govern external users.`, `Enable Azure AD pass-through authentication and update the sign-in endpoint.`, `Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).`],
    correct: [1],
    imageUrl: `https://img.examtopics.com/az-305/image154.png`,
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: Use Azure AD entitlement management to govern external users.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 38,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?`,
    options: [`Configure Azure AD join.`, `Configure Azure AD Identity Protection.`, `Use Azure AD entitlement management to govern external users.`, `Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).`],
    correct: [2],
    imageUrl: `https://img.examtopics.com/az-305/image154.png`,
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: Use Azure AD entitlement management to govern external users.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 39,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Azure Activity Log`, `Azure Arc`, `Azure Analysis Services`, `Azure Monitor metrics`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 40,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?`,
    options: [`Configure Azure AD join.`, `Configure Azure AD Identity Protection.`, `Configure a Conditional Access policy.`, `Configure Supported account types in the application registration and update the sign-in endpoint.`],
    correct: [3],
    imageUrl: `https://img.examtopics.com/az-305/image163.png`,
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: Configure Supported account types in the application registration and update the sign-in endpoint.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 41,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription that contains an Azure key vault named KV1 and a virtual machine named VM1. VM1 runs Windows Server 2022: Azure Edition.You plan to deploy an ASP.Net Core-based application named App1 to VM1.You need to configure App1 to use a system-assigned managed identity to retrieve secrets from KV1. The solution must minimize development effort.What should you do? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image161.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 42,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure AD tenant named contoso.com that has a security group named Group1. Group1 is configured for assigned memberships. Group1 has 50 members, including 20 guest users.You need to recommend a solution for evaluating the membership of Group1. The solution must meet the following requirements:• The evaluation must be repeated automatically every three months.• Every member must be able to report whether they need to be in Group1.• Users who report that they do not need to be in Group1 must be removed from Group1 automatically.• Users who do not report whether they need to be in Group1 must be removed from Group1 automatically.What should you include in the recommendation?`,
    options: [`Implement Azure AD Identity Protection.`, `Change the Membership type of Group1 to Dynamic User.`, `Create an access review.`, `Implement Azure AD Privileged Identity Management (PIM).`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Create an access review.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 43,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?`,
    options: [`Enable Azure AD pass-through authentication and update the sign-in endpoint.`, `Use Azure AD entitlement management to govern external users.`, `Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).`, `Configure Azure AD Identity Protection.`],
    correct: [1],
    imageUrl: `https://img.examtopics.com/az-305/image175.png`,
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: Use Azure AD entitlement management to govern external users.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 44,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription named Sub1 that is linked to an Azure AD tenant named contoso.com.You plan to implement two ASP.NET Core apps named App1 and App2 that will be deployed to 100 virtual machines in Sub1. Users will sign in to App1 and App2 by using their contoso.com credentials.App1 requires read permissions to access the calendar of the signed-in user. App2 requires write permissions to access the calendar of the signed-in user.You need to recommend an authentication and authorization solution for the apps. The solution must meet the following requirements:• Use the principle of least privilege.• Minimize administrative effort.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image164.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 45,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?`,
    options: [`Configure the Azure AD provisioning service.`, `Enable Azure AD pass-through authentication and update the sign-in endpoint.`, `Configure Supported account types in the application registration and update the sign-in endpoint.`, `Configure Azure AD join.`],
    correct: [2],
    imageUrl: `https://img.examtopics.com/az-305/image175.png`,
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: Configure Supported account types in the application registration and update the sign-in endpoint.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 46,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure AD tenant that contains a management group named MG1.You have the Azure subscriptions shown in the following table.The subscriptions contain the resource groups shown in the following table.The subscription contains the Azure AD security groups shown in the following table.The subscription contains the user accounts shown in the following table.You perform the following actions:Assign User3 the Contributor role for Sub1.Assign Group1 the Virtual Machine Contributor role for MG1.Assign Group3 the Contributor role for the Tenant Root Group.For each of the following statements, select Yes if the statement is true. Otherwise, select No.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image180.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 47,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?`,
    options: [`Configure Azure AD Identity Protection.`, `Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).`, `Configure Supported account types in the application registration and update the sign-in endpoint.`, `Configure a Conditional Access policy.`],
    correct: [2],
    imageUrl: `https://img.examtopics.com/az-305/image186.png`,
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: Configure Supported account types in the application registration and update the sign-in endpoint.. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 48,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?`,
    options: [`Use Azure AD entitlement management to govern external users.`, `Enable Azure AD pass-through authentication and update the sign-in endpoint.`, `Configure a Conditional Access policy.`, `Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).`],
    correct: [0],
    imageUrl: `https://img.examtopics.com/az-305/image186.png`,
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 49,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription that contains 1,000 resources.You need to generate compliance reports for the subscription. The solution must ensure that the resources can be grouped by department.What should you use to organize the resources?`,
    options: [`application groups and quotas`, `Azure Policy and tags`, `administrative units and Azure Lighthouse`, `resource groups and role assignments`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Policy and tags. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 50,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Azure Arc`, `Azure Monitor metrics`, `Azure Advisor`, `Azure Log Analytics`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Log Analytics. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 51,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Azure Monitor action groups`, `Azure Arc`, `Azure Monitor metrics`, `Azure Activity Log`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Activity Log. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 52,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You have an Azure AD tenant that contains an administrative unit named MarketingAU. MarketingAU contains 100 users.You create two users named User1 and User2.You need to ensure that the users can perform the following actions in MarketingAU:• User1 must be able to create user accounts.• User2 must be able to reset user passwords.Which role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image187.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 53,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Azure Arc`, `Azure Log Analytics`, `Application insights`, `Azure Monitor action groups`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Log Analytics. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 54,
    category: `Design Infrastructure Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are designing an app that will be hosted on Azure virtual machines that run Ubuntu. The app will use a third-party email service to send email messages to users. The third-party email service requires that the app authenticate by using an API key.You need to recommend an Azure Key Vault solution for storing and accessing the API key. The solution must minimize administrative effort.What should you recommend using to store and access the key? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image191.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 55,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You have two app registrations named App1 and App2 in Azure AD. App1 supports role-based access control (RBAC) and includes a role named Writer.You need to ensure that when App2 authenticates to access App1, the tokens issued by Azure AD include the Writer role claim.Which blade should you use to modify each app registration? To answer, drag the appropriate blades to the correct app registrations. Each blade may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image193.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 56,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Application Insights`, `Azure Arc`, `Azure Log Analytics`, `Azure Monitor metrics`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Log Analytics. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 57,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription.You plan to deploy a monitoring solution that will include the following:• Azure Monitor Network Insights• Application Insights• Microsoft Sentinel• VM insightsThe monitoring solution will be managed by a single team.What is the minimum number of Azure Monitor workspaces required?`,
    options: [`1`, `2`, `3`, `4`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 58,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?`,
    options: [`Application Insights`, `Azure Analysis Services`, `Azure Advisor`, `Azure Activity Log`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Activity Log. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 59,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -Case Study -This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.To start the case study -To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.Overview -Fabrikam, Inc. is an engineering company that has offices throughout Europe. The company has a main office in London and three branch offices in Amsterdam, Berlin, and Rome.Existing Environment: Active Directory EnvironmentThe network contains two Active Directory forests named corp.fabrikam.com and rd.fabrikam.com. There are no trust relationships between the forests.Corp.fabrikam.com is a production forest that contains identities used for internal user and computer authentication.Rd.fabrikam.com is used by the research and development (R&D) department only. The R&D department is restricted to using on-premises resources only.Existing Environment: Network InfrastructureEach office contains at least one domain controller from the corp.fabrikam.com domain. The main office contains all the domain controllers for the rd.fabrikam.com forest.All the offices have a high-speed connection to the internet.An existing application named WebApp1 is hosted in the data center of the London office. WebApp1 is used by customers to place and track orders. WebApp1 has a web tier that uses Microsoft Internet Information Services (IIS) and a database tier that runs Microsoft SQL Server 2016. The web tier and the database tier are deployed to virtual machines that run on Hyper-V.The IT department currently uses a separate Hyper-V environment to test updates to WebApp1.Fabrikam purchases all Microsoft licenses through a Microsoft Enterprise Agreement that includes Software Assurance.Existing Environment: Problem StatementsThe use of WebApp1 is unpredictable. At peak times, users often report delays. At other times, many resources for WebApp1 are underutilized.Requirements: Planned Changes -Fabrikam plans to move most of its production workloads to Azure during the next few years, including virtual machines that rely on Active Directory for authentication.As one of its first projects, the company plans to establish a hybrid identity model, facilitating an upcoming Microsoft 365 deployment.All R&D operations will remain on-premises.Fabrikam plans to migrate the production and test instances of WebApp1 to Azure.Requirements: Technical RequirementsFabrikam identifies the following technical requirements:• Website content must be easily updated from a single point.• User input must be minimized when provisioning new web app instances.• Whenever possible, existing on-premises licenses must be used to reduce cost.• Users must always authenticate by using their corp.fabrikam.com UPN identity.• Any new deployments to Azure must be redundant in case an Azure region fails.• Whenever possible, solutions must be deployed to Azure by using the Standard pricing tier of Azure App Service.• An email distribution group named IT Support must be notified of any issues relating to the directory synchronization services.• In the event that a link fails between Azure and the on-premises network, ensure that the virtual machines hosted in Azure can authenticate to Active Directory.• Directory synchronization between Azure Active Directory (Azure AD) and corp.fabrikam.com must not be affected by a link failure between Azure and the on-premises network.Requirements: Database RequirementsFabrikam identifies the following database requirements:• Database metrics for the production instance of WebApp1 must be available for analysis so that database administrators can optimize the performance settings.• To avoid disrupting customer access, database downtime must be minimized when databases are migrated.• Database backups must be retained for a minimum of seven years to meet compliance requirements.Requirements: Security RequirementsFabrikam identifies the following security requirements:• Company information including policies, templates, and data must be inaccessible to anyone outside the company.• Users on the on-premises network must be able to authenticate to corp.fabrikam.com if an internet link fails.• Administrators must be able authenticate to the Azure portal by using their corp.fabrikam.com credentials.• All administrative access to the Azure portal must be secured by using multi-factor authentication (MFA).• The testing of WebApp1 updates must not be visible to anyone outside the company.To meet the authentication requirements of Fabrikam, what should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image198.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 60,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription that contains 10 web apps. The apps are integrated with Azure AD and are accessed by users on different project teams.The users frequently move between projects.You need to recommend an access management solution for the web apps. The solution must meet the following requirements:• The users must only have access to the app of the project to which they are assigned currently.• Project managers must verify which users have access to their project’s app and remove users that are no longer assigned to their project.• Once every 30 days, the project managers must be prompted automatically to verify which users are assigned to their projects.What should you include in the recommendation?`,
    options: [`Azure AD Identity Protection`, `Microsoft Defender for Identity`, `Microsoft Entra Permissions Management`, `Azure AD Identity Governance`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple languages and frameworks with built-in CI/CD, custom domains, and SSL. The correct answer is: Azure AD Identity Governance. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 61,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription that contains 50 Azure SQL databases.You create an Azure Resource Manager (ARM) template named Template1 that enables Transparent Data Encryption (TDE).You need to create an Azure Policy definition named Policy1 that will use Template1 to enable TDE for any noncompliant Azure SQL databases.How should you configure Policy1? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image200.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 62,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription that contains the resources shown in the following table:Log files from App1 are registered to App1Logs. An average of 120 GB of log data is ingested per day.You configure an Azure Monitor alert that will be triggered if the App1 logs contain error messages.You need to minimize the Log Analytics costs associated with App1. The solution must meet the following requirements:• Ensure that all the log files from App1 are ingested to App1Logs.• Minimize the impact on the Azure Monitor alert.Which resource should you modify, and which modification should you perform? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image202.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 63,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription. The subscription contains a tiered app named App1 that is distributed across multiple containers hosted in Azure Container Instances.You need to deploy an Azure Monitor monitoring solution for App. The solution must meet the following requirements:• Support using synthetic transaction monitoring to monitor traffic between the App1 components.• Minimize development effort.What should you include in the solution?`,
    options: [`Network insights`, `Application Insights`, `Container insights`, `Log Analytics Workspace insights`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Monitor collects and analyzes telemetry from Azure and on-premises resources. Log Analytics workspaces store log data for querying, while diagnostic settings route logs to storage, Event Hubs, or workspaces. The correct answer is: Application Insights. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 64,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have 12 Azure subscriptions and three projects. Each project uses resources across multiple subscriptions.You need to use Microsoft Cost Management to monitor costs on a per project basis. The solution must minimize administrative effort.Which two components should you include in the solution? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.`,
    options: [`budgets`, `resource tags`, `custom role-based access control (RBAC) roles`, `management groups`, `Azure boards`],
    correct: [0, 1],
    multipleAnswers: true,
    explanation: `Based on the requirements stated in the question, The correct answers are: budgets; resource tags. These options work together to fulfill all the requirements specified in the question.`
  },
  {
    id: 65,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription that contains multiple storage accounts.You assign Azure Policy definitions to the storage accounts.You need to recommend a solution to meet the following requirements:• Trigger on-demand Azure Policy compliance scans.• Raise Azure Monitor non-compliance alerts by querying logs collected by Log Analytics.What should you recommend for each requirement? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image214.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 66,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription.You plan to deploy five storage accounts that will store block blobs and five storage accounts that will host file shares. The file shares will be accessed by using the SMB protocol.You need to recommend an access authorization solution for the storage accounts. The solution must meet the following requirements:• Maximize security.• Prevent the use of shared keys.• Whenever possible, support time-limited access.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image216.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 67,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription. The subscription contains 100 virtual machines that run Windows Server 2022 and have the Azure Monitor Agent installed.You need to recommend a solution that meets the following requirements:• Forwards JSON-formatted logs from the virtual machines to a Log Analytics workspace• Transforms the logs and stores the data in a table in the Log Analytics workspaceWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image218.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 68,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You have 100 servers that run Windows Server 2012 R2 and host Microsoft SQL Server 2014 instances. The instances host databases that have the following characteristics:✑ Stored procedures are implemented by using CLR.✑ The largest database is currently 3 TB. None of the databases will ever exceed 4 TB.You plan to move all the data from SQL Server to Azure.You need to recommend a service to host the databases. The solution must meet the following requirements:✑ Whenever possible, minimize management overhead for the migrated databases.✑ Ensure that users can authenticate by using Azure Active Directory (Azure AD) credentials.✑ Minimize the number of database changes required to facilitate the migration.What should you include in the recommendation?`,
    options: [`Azure SQL Database elastic pools`, `Azure SQL Managed Instance`, `Azure SQL Database single databases`, `SQL Server 2016 on Azure virtual machines`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure SQL Managed Instance. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 69,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have five Azure subscriptions. Each subscription is linked to a separate Azure AD tenant and contains virtual machines that run Windows Server 2022.You plan to collect Windows security events from the virtual machines and send them to a single Log Analytics workspace.You need to recommend a solution that meets the following requirements:• Collects event logs from multiple subscriptions• Supports the use of data collection rules (DCRs) to define which events to collectWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image241.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 70,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription that contains an Azure Blob Storage account named store1.You have an on-premises file server named Server1 that runs Windows Server 2016. Server1 stores 500 GB of company files.You need to store a copy of the company files from Server1 in store1.Which two possible Azure services achieve this goal? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.`,
    options: [`an Azure Logic Apps integration account`, `an Azure Import/Export job`, `Azure Data Factory`, `an Azure Analysis services On-premises data gateway`, `an Azure Batch account`],
    correct: [1, 2],
    multipleAnswers: true,
    explanation: `Azure Blob Storage in General Purpose v2 accounts supports encryption scopes for per-blob encryption with customer-managed keys, enabling multi-tenant scenarios where each customer's data is encrypted separately. The correct answers are: an Azure Import/Export job; Azure Data Factory. These options work together to fulfill all the requirements specified in the question.`
  },
  {
    id: 71,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription that contains two applications named App1 and App2. App1 is a sales processing application. When a transaction in App1 requires shipping, a message is added to an Azure Storage account queue, and then App2 listens to the queue for relevant transactions.In the future, additional applications will be added that will process some of the shipping requests based on the specific details of the transactions.You need to recommend a replacement for the storage account queue to ensure that each additional application will be able to read the relevant transactions.What should you recommend?`,
    options: [`one Azure Data Factory pipeline`, `multiple storage account queues`, `one Azure Service Bus queue`, `one Azure Service Bus topic`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure Blob Storage in General Purpose v2 accounts supports encryption scopes for per-blob encryption with customer-managed keys, enabling multi-tenant scenarios where each customer's data is encrypted separately. The correct answer is: one Azure Service Bus topic. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 72,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You need to design a storage solution for an app that will store large amounts of frequently used data. The solution must meet the following requirements:✑ Maximize data throughput.✑ Prevent the modification of data for one year.✑ Minimize latency for read and write operations.Which Azure Storage account type and storage service should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0009200001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 73,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription that contains the storage accounts shown in the following table.You plan to implement two new apps that have the requirements shown in the following table.Which storage accounts should you recommend using for each app? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0009400001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 74,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are designing an application that will be hosted in Azure.The application will host video files that range from 50 MB to 12 GB. The application will use certificate-based authentication and will be available to users on the internet.You need to recommend a storage option for the video files. The solution must provide the fastest read performance and must minimize storage costs.What should you recommend?`,
    options: [`Azure Files`, `Azure Data Lake Storage Gen2`, `Azure Blob Storage`, `Azure SQL Database`],
    correct: [2],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: Azure Blob Storage. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 75,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You are designing a SQL database solution. The solution will include 20 databases that will be 20 GB each and have varying usage patterns.You need to recommend a database platform to host the databases. The solution must meet the following requirements:✑ The solution must meet a Service Level Agreement (SLA) of 99.99% uptime.✑ The compute resources allocated to the databases must scale dynamically.✑ The solution must have reserved capacity.Compute charges must be minimized.What should you include in the recommendation?`,
    options: [`an elastic pool that contains 20 Azure SQL databases`, `20 databases on a Microsoft SQL server that runs on an Azure virtual machine in an availability set`, `20 databases on a Microsoft SQL server that runs on an Azure virtual machine`, `20 instances of Azure SQL Database serverless`],
    correct: [0],
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0009700004.png`,
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 76,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an on-premises database that you plan to migrate to Azure.You need to design the database architecture to meet the following requirements:✑ Support scaling up and down.✑ Support geo-redundant backups.✑ Support a database of up to 75 TB.✑ Be optimized for online transaction processing (OLTP).What should you include in the design? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0009900001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 77,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are planning an Azure IoT Hub solution that will include 50,000 IoT devices.Each device will stream data, including temperature, device ID, and time data. Approximately 50,000 records will be written every second. The data will be visualized in near real time.You need to recommend a service to store and query the data.Which two services can you recommend? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.`,
    options: [`Azure Table Storage`, `Azure Event Grid`, `Azure Cosmos DB SQL API`, `Azure Time Series Insights`],
    correct: [2, 3],
    multipleAnswers: true,
    explanation: `Based on the requirements stated in the question, The correct answers are: Azure Cosmos DB SQL API; Azure Time Series Insights. These options work together to fulfill all the requirements specified in the question.`
  },
  {
    id: 78,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You are designing an application that will aggregate content for users.You need to recommend a database solution for the application. The solution must meet the following requirements:✑ Support SQL commands.✑ Support multi-master writes.✑ Guarantee low latency read operations.What should you include in the recommendation?`,
    options: [`Azure Cosmos DB SQL API`, `Azure SQL Database that uses active geo-replication`, `Azure SQL Database Hyperscale`, `Azure Database for PostgreSQL`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 79,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You store web access logs data in Azure Blob Storage.You plan to generate monthly reports from the access logs.You need to recommend an automated process to upload the data to Azure SQL Database every month.What should you include in the recommendation?`,
    options: [`Microsoft SQL Server Migration Assistant (SSMA)`, `Data Migration Assistant (DMA)`, `AzCopy`, `Azure Data Factory`],
    correct: [3],
    multipleAnswers: false,
    explanation: `Azure Blob Storage in General Purpose v2 accounts supports encryption scopes for per-blob encryption with customer-managed keys, enabling multi-tenant scenarios where each customer's data is encrypted separately. The correct answer is: Azure Data Factory. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 80,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You plan to import data from your on-premises environment to Azure. The data is shown in the following table.What should you recommend using to migrate the data? To answer, drag the appropriate tools to the correct data sources. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0010500001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 81,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription that contains the SQL servers on Azure shown in the following table.The subscription contains the storage accounts shown in the following table.You create the Azure SQL databases shown in the following table.For each of the following statements, select Yes if the statement is true. Otherwise, select No.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0010300001.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 82,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an app named App1 that uses two on-premises Microsoft SQL Server databases named DB1 and DB2.You plan to migrate DB1 and DB2 to AzureYou need to recommend an Azure solution to host DB1 and DB2. The solution must meet the following requirements:✑ Support server-side transactions across DB1 and DB2.✑ Minimize administrative effort to update the solution.What should you recommend?`,
    options: [`two Azure SQL databases in an elastic pool`, `two databases on the same Azure SQL managed instance`, `two databases on the same SQL Server instance on an Azure virtual machine`, `two Azure SQL databases on different Azure SQL Database servers`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Based on the requirements stated in the question, The correct answer is: two databases on the same Azure SQL managed instance. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 83,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You need to design a highly available Azure SQL database that meets the following requirements:✑ Failover between replicas of the database must occur without any data loss.✑ The database must remain available in the event of a zone outage.✑ Costs must be minimized.Which deployment option should you use?`,
    options: [`Azure SQL Database Hyperscale`, `Azure SQL Database Premium`, `Azure SQL Database Basic`, `Azure SQL Managed Instance General Purpose`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: Azure SQL Database Premium. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 84,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an Azure subscription.Your on-premises network contains a file server named Server1. Server1 stores 5 ׀¢׀’ of company files that are accessed rarely.You plan to copy the files to Azure Storage.You need to implement a storage solution for the files that meets the following requirements:✑ The files must be available within 24 hours of being requested.✑ Storage costs must be minimized.Which two possible storage solutions achieve this goal? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.`,
    options: [`Create an Azure Blob Storage account that is configured for the Cool default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.`, `Create a general-purpose v1 storage account. Create a blob container and copy the files to the blob container.`, `Create a general-purpose v2 storage account that is configured for the Cool default access tier. Create a file share in the storage account and copy the files to the file share.`, `Create a general-purpose v2 storage account that is configured for the Hot default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.`, `Create a general-purpose v1 storage account. Create a fie share in the storage account and copy the files to the file share.`],
    correct: [0, 3],
    multipleAnswers: true,
    explanation: `Based on the requirements stated in the question, The correct answers are: Create an Azure Blob Storage account that is configured for the Cool default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.; Create a general-purpose v2 storage account that is configured for the Hot default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.. These options work together to fulfill all the requirements specified in the question.`
  },
  {
    id: 85,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are planning an Azure Storage solution for sensitive data. The data will be accessed daily. The dataset is less than 10 GB.You need to recommend a storage solution that meets the following requirements:✑ All the data written to storage must be retained for five years.✑ Once the data is written, the data can only be read. Modifications and deletion must be prevented.✑ After five years, the data can be deleted, but never modified.✑ Data access charges must be minimized.What should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0011000001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 86,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an app named App1 that uses an on-premises Microsoft SQL Server database named DB1.You plan to migrate DB1 to an Azure SQL managed instance.You need to enable customer managed Transparent Data Encryption (TDE) for the instance. The solution must maximize encryption strength.Which type of encryption algorithm and key length should you use for the TDE protector?`,
    options: [`RSA 3072`, `AES 256`, `RSA 4096`, `RSA 2048`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 87,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are designing a data storage solution to support reporting.The solution will ingest high volumes of data in the JSON format by using Azure Event Hubs. As the data arrives, Event Hubs will write the data to storage. The solution must meet the following requirements:✑ Organize data in directories by date and time.✑ Allow stored data to be queried directly, transformed into summarized tables, and then stored in a data warehouse.✑ Ensure that the data warehouse can store 50 TB of relational data and support between 200 and 300 concurrent read operations.Which service should you recommend for each type of data store? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:`,
    imageUrl: `https://www.examtopics.com/assets/media/exam-media/04224/0011200001.jpg`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 88,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You are planning an Azure IoT Hub solution that will include 50,000 IoT devices.Each device will stream data, including temperature, device ID, and time data. Approximately 50,000 records will be written every second. The data will be visualized in near real time.You need to recommend a service to store and query the data.Which two services can you recommend? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.`,
    options: [`Azure Table Storage`, `Azure Event Grid`, `Azure Cosmos DB for NoSQL`, `Azure Time Series Insights`],
    correct: [2, 3],
    multipleAnswers: true,
    explanation: `Based on the requirements stated in the question, The correct answers are: Azure Cosmos DB for NoSQL; Azure Time Series Insights. These options work together to fulfill all the requirements specified in the question.`
  },
  {
    id: 89,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are designing a data analytics solution that will use Azure Synapse and Azure Data Lake Storage Gen2.You need to recommend Azure Synapse pools to meet the following requirements:• Ingest data from Data Lake Storage into hash-distributed tables.• Implement query, and update data in Delta Lake.What should you recommend for each requirement? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image168.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 90,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are planning an Azure Storage solution for sensitive data. The data will be accessed daily. The dataset is less than 10 GB.You need to recommend a storage solution that meets the following requirements:• All the data written to storage must be retained for five years.• Once the data is written, the data can only be read. Modifications and deletion must be prevented.• After five years, the data can be deleted, but never modified.• Data access charges must be minimized.What should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image166.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 91,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You have an on-premises storage solution.You need to migrate the solution to Azure. The solution must support Hadoop Distributed File System (HDFS).What should you use?`,
    options: [`Azure Data Lake Storage Gen2`, `Azure NetApp Files`, `Azure Data Share`, `Azure Table storage`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 92,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `DRAG DROP -You have an on-premises app named App1.Customers use App1 to manage digital images.You plan to migrate App1 to Azure.You need to recommend a data storage solution for App1. The solution must meet the following image storage requirements:• Encrypt images at rest.• Allow files up to 50 MB.• Manage access to the images by using Azure Web Application Firewall (WAF) on Azure Front Door.The solution must meet the following customer account requirements:• Support automatic scale out of the storage.• Maintain the availability of App1 if a datacenter fails.• Support reading and writing data from multiple Azure regions.Which service should you include in the recommendation for each type of data? To answer, drag the appropriate services to the correct type of data. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct answer is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image176.png`,
    multipleAnswers: false,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 93,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You are designing an application that will aggregate content for users.You need to recommend a database solution for the application. The solution must meet the following requirements:• Support SQL commands.• Support multi-master writes.• Guarantee low latency read operations.What should you include in the recommendation?`,
    options: [`Azure Cosmos DB for NoSQL`, `Azure SQL Database that uses active geo-replication`, `Azure SQL Database Hyperscale`, `Azure Cosmos DB for PostgreSQL`],
    correct: [0],
    multipleAnswers: false,
    explanation: `Review the question requirements carefully and select the option that best meets all stated criteria.`
  },
  {
    id: 94,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You plan to migrate on-premises MySQL databases to Azure Database for MySQL Flexible Server.You need to recommend a solution for the Azure Database for MySQL Flexible Server configuration. The solution must meet the following requirements:• The databases must be accessible if a datacenter fails.• Costs must be minimized.Which compute tier should you recommend?`,
    options: [`Burstable`, `General Purpose`, `Memory Optimized`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure SQL Database is a fully managed PaaS database service with built-in high availability, automatic backups, and intelligent performance optimization. The correct answer is: General Purpose. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 95,
    category: `Design Infrastructure Solutions`,
    type: `multiple-choice`,
    question: `You have the resources shown in the following table.CDB1 hosts a container that stores continuously updated operational data.You are designing a solution that will use AS1 to analyze the operational data daily.You need to recommend a solution to analyze the data without affecting the performance of the operational data store.What should you include in the recommendation?`,
    options: [`Azure Data Factory with Azure Cosmos DB and Azure Synapse Analytics connectors`, `Azure Synapse Analytics with PolyBase data loading`, `Azure Synapse Link for Azure Cosmos DB`, `Azure Cosmos DB change feed`],
    correct: [2],
    imageUrl: `https://img.examtopics.com/az-305/image195.png`,
    multipleAnswers: false,
    explanation: `Azure Kubernetes Service (AKS) simplifies deploying and managing containerized applications with automated upgrades, scaling, and integration with Azure services. The correct answer is: Azure Synapse Link for Azure Cosmos DB. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 96,
    category: `Design Data Storage Solutions`,
    type: `multiple-choice`,
    question: `You are designing an app that will use Azure Cosmos DB to collate sales from multiple countries.You need to recommend an API for the app. The solution must meet the following requirements:• Support SQL queries.• Support geo-replication.• Store and access data relationally.Which API should you recommend?`,
    options: [`Apache Cassandra`, `PostgreSQL`, `MongoDB`, `NoSQL`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Synapse Link for Cosmos DB enables near real-time analytics over operational data without impacting transactional workloads by automatically syncing data to an analytical store. The correct answer is: PostgreSQL. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
  {
    id: 97,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an app that generates 50,000 events daily.You plan to stream the events to an Azure event hub and use Event Hubs Capture to implement cold path processing of the events. The output of Event Hubs Capture will be consumed by a reporting system.You need to identify which type of Azure storage must be provisioned to support Event Hubs Capture, and which inbound data format the reporting system must support.What should you identify? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image189.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 98,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You have an Azure subscription. The subscription contains an Azure SQL managed instance that stores employee details, including social security numbers and phone numbers.You need to configure the managed instance to meet the following requirements:• The helpdesk team must see only the last four digits of an employee’s phone number.• Cloud administrators must be prevented from seeing the employee’s social security numbers.What should you enable for each column in the managed instance? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image205.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 99,
    category: `Design Data Storage Solutions`,
    type: `flashcard`,
    question: `HOTSPOT -You are designing a storage solution that will ingest, store, and analyze petabytes (PBs) of structured, semi-structured, and unstructured text data. The analyzed data will be offloaded to Azure Data Lake Storage Gen2 for long-term retention.You need to recommend a storage and analytics solution that meets the following requirements:• Stores the processed data• Provides interactive analytics• Supports manual scaling, built-in autoscaling, and custom autoscalingWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.`,
    imageUrl: `https://img.examtopics.com/az-305/image207.png`,
    multipleAnswers: true,
    explanation: `This is a HOTSPOT/drag-and-drop question. Review the diagram carefully and match the correct options to each requirement based on Azure best practices and service capabilities.`
  },
  {
    id: 100,
    category: `Design Identity, Governance, and Monitoring Solutions`,
    type: `multiple-choice`,
    question: `You plan to use an Azure Storage account to store data assets.You need to recommend a solution that meets the following requirements:• Supports immutable storage• Disables anonymous access to the storage account• Supports access control list (ACL)-based Azure AD permissionsWhat should you include in the recommendation?`,
    options: [`Azure Files`, `Azure Data Lake Storage`, `Azure NetApp Files`, `Azure Blob Storage`],
    correct: [1],
    multipleAnswers: false,
    explanation: `Azure Blob Storage in General Purpose v2 accounts supports encryption scopes for per-blob encryption with customer-managed keys, enabling multi-tenant scenarios where each customer's data is encrypted separately. The correct answer is: Azure Data Lake Storage. This option best addresses all the requirements specified in the question while aligning with Azure best practices and architectural principles.`
  },
];

