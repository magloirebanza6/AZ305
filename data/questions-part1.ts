// Questions 1 to 50
import { Question } from './types';

export const questions1: Question[] = [
  {
    id: 1,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription that contains a custom application named Application1. Application1 was developed by an external company named Fabrikam,Ltd. Developers at Fabrikam were assigned role-based access control (RBAC) permissions to the Application1 components. All users are licensed for theMicrosoft 365 E5 plan.You need to recommend a solution to verify whether the Fabrikam developers still require permissions to Application1. The solution must meet the following requirements:✑ To the manager of the developers, send a monthly email message that lists the access permissions to Application1.✑ If the manager does not verify an access permission, automatically revoke that permission.✑ Minimize development effort.What should you recommend?",
    options: [
      "A. In Microsoft Entra ID, create an access review of Application1.",
      "B. Create an Azure Automation runbook that runs the Get-AzRoleAssignment cmdlet.",
      "C. In Microsoft Entra ID Privileged Identity Management, create a custom role assignment for the Application1 resources.",
      "D. Create an Azure Automation runbook that runs the Get-AzureADUserAppRoleAssignment cmdlet."
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A - Microsoft Entra ID Access Reviews. Access Reviews automatically send periodic emails to reviewers, allow configuring automatic revocation when reviewers don't respond, and require no custom development. This meets all requirements: monthly emails, automatic revocation, minimal effort. Azure Automation runbooks (B, D) would require significant development. PIM (C) is for just-in-time privileged access, not for reviewing existing permissions.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67502-exam-az-305-topic-1-question-1-discussion/"
  },
  {
    id: 2,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription. The subscription has a blob container that contains multiple blobs.Ten users in the finance department of your company plan to access the blobs during the month of April.You need to recommend a solution to enable access to the blobs during the month of April only.Which security solution should you include in the recommendation?",
    options: [
      "A. shared access signatures (SAS)",
      "B. Conditional Access policies",
      "C. certificates",
      "D. access keys"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A - Shared Access Signatures (SAS). SAS tokens can be configured with specific start and expiry times, making them perfect for time-limited access (April only). You can grant granular permissions without sharing account keys. Access keys (D) provide permanent full access. Conditional Access (B) works with identity, not storage. Certificates (C) aren't used for blob access.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67503-exam-az-305-topic-1-question-2-discussion/"
  },
  {
    id: 3,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an Microsoft Entra ID tenant that syncs with an on-premises Active Directory domain.You have an internal web app named WebApp1 that is hosted on-premises. WebApp1 uses Integrated Windows authentication.Some users work remotely and do NOT have VPN access to the on-premises network.You need to provide the remote users with single sign-on (SSO) access to WebApp1.Which two features should you include in the solution? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.",
    options: [
      "A. Microsoft Entra ID Application Proxy",
      "B. Microsoft Entra ID Privileged Identity Management (PIM)",
      "C. Conditional Access policies",
      "D. Azure Arc",
      "E. Microsoft Entra ID enterprise applications",
      "F. Azure Application Gateway"
    ],
    correct: [0, 4],
    multipleAnswers: true,
    explanation: "CORRECT: A, E - Microsoft Entra application proxy and enterprise applications. Application Proxy publishes on-premises web apps to external users without VPN, supporting Integrated Windows Authentication through Kerberos Constrained Delegation. Enterprise Applications is where you configure the app for SSO. Together they provide seamless SSO for remote users. PIM (B) is for privileged access. Conditional Access (C) adds conditions but doesn't enable access. Azure Arc (D) and Application Gateway (F) don't provide SSO for on-premises apps.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67504-exam-az-305-topic-1-question-3-discussion/"
  },
  {
    id: 4,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an Microsoft Entra ID tenant named contoso.com that has a security group named Group1. Group1 is configured for assigned membership. Group1 has 50 members, including 20 guest users.You need to recommend a solution for evaluating the membership of Group1. The solution must meet the following requirements:✑ The evaluation must be repeated automatically every three months.✑ Every member must be able to report whether they need to be in Group1.✑ Users who report that they do not need to be in Group1 must be removed from Group1 automatically.✑ Users who do not report whether they need to be in Group1 must be removed from Group1 automatically.What should you include in the recommendation?",
    options: [
      "A. Implement Microsoft Entra ID Identity Protection.",
      "B. Change the Membership type of Group1 to Dynamic User.",
      "C. Create an access review.",
      "D. Implement Microsoft Entra ID Privileged Identity Management (PIM)."
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C - Create an access review. Access Reviews meet all requirements: (1) Can be scheduled every 3 months, (2) Allow self-attestation by members, (3) Auto-remove non-responders and those who say 'No'. Identity Protection (A) detects risky sign-ins. Dynamic groups (B) use attribute rules, not self-attestation. PIM (D) manages privileged roles, not group membership.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67505-exam-az-305-topic-1-question-4-discussion/"
  },
  {
    id: 5,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You plan to deploy Azure Databricks to support a machine learning application. Data engineers will mount an Azure Data Lake Storage account to the Databricks file system. Permissions to folders are granted directly to the data engineers.You need to recommend a design for the planned Databrick deployment. The solution must meet the following requirements:✑ Ensure that the data engineers can only access folders to which they have permissions.✑ Minimize development effort.✑ Minimize costs.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0002600001.png"],
    backImage: "/images/questions/0002700001.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67715-exam-az-305-topic-1-question-5-discussion/"
  },
  {
    id: 6,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You plan to deploy an Azure web app named App1 that will use Azure Active Directory (Azure AD) authentication.App1 will be accessed from the internet by the users at your company. All the users have computers that run Windows 10 and are joined to Azure AD.You need to recommend a solution to ensure that the users can connect to App1 without being prompted for authentication and can access App1 only from company-owned computers.What should you recommend for each requirement? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0002800001.png"],
    backImage: "/images/questions/0002900001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67440-exam-az-305-topic-1-question-6-discussion/"
  },
  {
    id: 7,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure connectivity.Several virtual machines exhibit network connectivity issues.You need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.Solution: Use Azure Advisor to analyze the network traffic.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B - No. Azure Advisor provides recommendations for Cost, Security, Reliability, Operational Excellence, and Performance. It does NOT analyze network traffic or packet flows. To identify if packets are allowed/denied, use Azure Network Watcher's IP flow verify feature, which checks packets against NSG rules.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67741-exam-az-305-topic-1-question-8-discussion/"
  },
  {
    id: 8,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure connectivity.Several virtual machines exhibit network connectivity issues.You need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.Solution: Use Azure Traffic Analytics in Azure Network Watcher to analyze the network traffic.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B - No. Traffic Analytics analyzes NSG flow logs to show traffic patterns, trends, and top talkers. However, it doesn't determine if specific packets are allowed or denied. For that specific check, use Network Watcher's IP flow verify feature.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67740-exam-az-305-topic-1-question-7-discussion/"
  },
  {
    id: 9,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure connectivity.Several virtual machines exhibit network connectivity issues.You need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.Solution: Use Azure Network Watcher to run IP flow verify to analyze the network traffic.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A - Yes. Azure Network Watcher IP flow verify is specifically designed to check if packets are allowed or denied based on NSG rules. It evaluates source/destination IP, port, and protocol, then identifies which rule is allowing or denying the traffic. This is the correct tool for NSG troubleshooting.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67742-exam-az-305-topic-1-question-9-discussion/"
  },
  {
    id: 10,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You are designing a large Azure environment that will contain many subscriptions.You plan to use Azure Policy as part of a governance solution.To which three scopes can you assign Azure Policy definitions? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.",
    options: [
      "A. Microsoft Entra ID administrative units",
      "B. Microsoft Entra ID tenants",
      "C. subscriptions",
      "D. compute resources",
      "E. resource groups",
      "F. management groups"
    ],
    correct: [2, 4, 5],
    multipleAnswers: true,
    explanation: "CORRECT: C, E, F - Subscriptions, Resource Groups, and Management Groups. Azure Policy follows the resource hierarchy: Management Groups â†’ Subscriptions â†’ Resource Groups â†’ Resources. Policy can be assigned at the first three levels. It cannot be assigned to Microsoft Entra objects (A, B) or individual resources (D).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67442-exam-az-305-topic-1-question-11-discussion/"
  },
  {
    id: 11,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "DRAG DROP -You have an Azure subscription. The subscription contains Azure virtual machines that run Windows Server 2016 and Linux.You need to use Azure Monitor to design an alerting strategy for security-related events.Which Azure Monitor Logs tables should you query? To answer, drag the appropriate tables to the correct log types. Each table may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:",
    frontImages: ["/images/questions/0003300001.png"],
    backImage: "/images/questions/0003400001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67743-exam-az-305-topic-1-question-10-discussion/"
  },
  {
    id: 12,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "DRAG DROP -Your on-premises network contains a server named Server1 that runs an ASP.NET application named App1.You have a hybrid deployment of Azure Active Directory (Azure AD).You need to recommend a solution to ensure that users sign in by using their Azure AD account and Azure Multi-Factor Authentication (MFA) when they connect to App1 from the internet.Which three features should you recommend be deployed and configured in sequence? To answer, move the appropriate features from the list of features to the answer area and arrange them in the correct order.Select and Place:",
    frontImages: ["/images/questions/0003600001.png"],
    backImage: "/images/questions/0003700001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67507-exam-az-305-topic-1-question-12-discussion/"
  },
  {
    id: 13,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Azure Activity Log",
      "B. Azure Advisor",
      "C. Azure Analysis Services",
      "D. Azure Monitor action groups"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A - Azure Activity Log. The Activity Log records all control plane operations including resource deployments (write operations). You can query for Microsoft.Resources/deployments to generate deployment reports. Activity Log data can be exported to Log Analytics for long-term retention and analysis. Advisor (B) provides recommendations, not history. Analysis Services (C) is for BI. Action groups (D) are for notifications.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67508-exam-az-305-topic-1-question-13-discussion/"
  },
  {
    id: 14,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.Your company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure connectivity.Several virtual machines exhibit network connectivity issues.You need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.Solution: Install and configure the Azure Monitoring agent and the Dependency Agent on all the virtual machines. Use VM insights in Azure Monitor to analyze the network traffic.Does this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B - No. VM insights provides performance monitoring, health status, and dependency mapping for VMs. While it shows network connections between VMs, it does NOT determine whether packets are being allowed or denied by security rules. Use Network Watcher IP flow verify for that.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78685-exam-az-305-topic-1-question-14-discussion/"
  },
  {
    id: 15,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "DRAG DROP -You need to design an architecture to capture the creation of users and the assignment of roles. The captured data must be stored in Azure Cosmos DB.Which services should you include in the design? To answer, drag the appropriate services to the correct targets. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:",
    frontImages: ["/images/questions/0004000001.jpg"],
    backImage: "/images/questions/0004100001.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78731-exam-az-305-topic-1-question-15-discussion/"
  },
  {
    id: 16,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Your company, named Contoso, Ltd., implements several Azure logic apps that have HTTP triggers. The logic apps provide access to an on-premises web service.Contoso establishes a partnership with another company named Fabrikam, Inc.Fabrikam does not have an existing Microsoft Entra ID tenant and uses third-party OAuth 2.0 identity management to authenticate its users.Developers at Fabrikam plan to use a subset of the logic apps to build applications that will integrate with the on-premises web service of Contoso.You need to design a solution to provide the Fabrikam developers with access to the logic apps. The solution must meet the following requirements:✑ Requests to the logic apps from the developers must be limited to lower rates than the requests from the users at Contoso.✑ The developers must be able to rely on their existing OAuth 2.0 provider to gain access to the logic apps.✑ The solution must NOT require changes to the logic apps.✑ The solution must NOT use Microsoft Entra ID guest accounts.What should you include in the solution?",
    options: [
      "A. Azure Front Door",
      "B. Microsoft Entra ID Application Proxy",
      "C. Microsoft Entra ID business-to-business (B2B)",
      "D. Azure API Management"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D - Azure API Management. APIM meets all requirements: (1) Rate limiting policies can restrict Fabrikam to lower request rates, (2) Supports external OAuth 2.0 identity providers without requiring guest accounts, (3) Acts as a facade without modifying Logic Apps. Front Door (A) is for load balancing. Application Proxy (B) requires Microsoft Entra ID. B2B (C) requires guest accounts.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79598-exam-az-305-topic-1-question-16-discussion/"
  },
  {
    id: 17,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription that contains 300 virtual machines that run Windows Server 2019.You need to centrally monitor all warning events in the System logs of the virtual machines.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0004300001.png"],
    backImage: "/images/questions/0004400001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80190-exam-az-305-topic-1-question-17-discussion/"
  },
  {
    id: 18,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have several Azure App Service web apps that use Azure Key Vault to store data encryption keys.Several departments have the following requests to support the web app:Which service should you recommend for each department's request? To answer, configure the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0004500001.png", "/images/questions/0004600001.png"],
    backImage: "/images/questions/0004700001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78932-exam-az-305-topic-1-question-18-discussion/"
  },
  {
    id: 19,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -Your company has the divisions shown in the following table.You plan to deploy a custom application to each subscription. The application will contain the following:✑ A resource group✑ An Azure web app✑ Custom role assignments✑ An Azure Cosmos DB accountYou need to use Azure Blueprints to deploy the application to each subscription.What is the minimum number of objects required to deploy the application? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0004800001.png", "/images/questions/0004900001.jpg"],
    backImage: "/images/questions/image258.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78713-exam-az-305-topic-1-question-19-discussion/"
  },
  {
    id: 20,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You need to design an Azure policy that will implement the following functionality:✑ For new resources, assign tags and values that match the tags and values of the resource group to which the resources are deployed.✑ For existing resources, identify whether the tags and values match the tags and values of the resource group that contains the resources.✑ For any non-compliant resources, trigger auto-generated remediation tasks to create missing tags and values.The solution must use the principle of least privilege.What should you include in the design? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0005200001.png"],
    backImage: "/images/questions/0005200002.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78717-exam-az-305-topic-1-question-20-discussion/"
  },
  {
    id: 21,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription that contains the resources shown in the following table.You create an Azure SQL database named DB1 that is hosted in the East US Azure region.To DB1, you add a diagnostic setting named Settings1. Settings1 archive SQLInsights to storage1 and sends SQLInsights to Workspace1.For each of the following statements, select Yes if the statement is true. Otherwise, select No.Hot Area:",
    frontImages: ["/images/questions/0005400001.png", "/images/questions/0005500001.png"],
    backImage: "/images/questions/0005500002.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79826-exam-az-305-topic-1-question-21-discussion/"
  },
  {
    id: 22,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You plan to deploy an Azure SQL database that will store Personally Identifiable Information (PII).You need to ensure that only privileged users can view the PII.What should you include in the solution?",
    options: [
      "A. dynamic data masking",
      "B. role-based access control (RBAC)",
      "C. Data Discovery & Classification",
      "D. Transparent Data Encryption (TDE)"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A - Dynamic data masking. Dynamic data masking automatically masks sensitive data for non-privileged users while showing full data to privileged users (like db_owner). Perfect for PII where some users need real data. TDE (D) encrypts at rest but doesn't control visibility. RBAC (B) controls resource access. Data Discovery (C) classifies but doesn't mask.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79215-exam-az-305-topic-1-question-22-discussion/"
  },
  {
    id: 23,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You plan to deploy an app that will use an Azure Storage account.You need to deploy the storage account. The storage account must meet the following requirements:✑ Store the data for multiple users.✑ Encrypt each user's data by using a separate key.✑ Encrypt all the data in the storage account by using customer-managed keys.What should you deploy?",
    options: [
      "A. files in a premium file share storage account",
      "B. blobs in a general purpose v2 storage account",
      "C. blobs in an Azure Data Lake Storage Gen2 account",
      "D. files in a general purpose v2 storage account"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B - Blobs in a general purpose v2 storage account. GPv2 supports encryption scopes, allowing different encryption keys for different blobs (per-user encryption). It also supports customer-managed keys (CMK). Azure Files and premium file shares don't support encryption scopes for this purpose. Data Lake Gen2 could work but GPv2 blob with encryption scopes is the standard approach.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/81933-exam-az-305-topic-1-question-23-discussion/"
  },
  {
    id: 24,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure App Service web app that uses a system-assigned managed identity.You need to recommend a solution to store the settings of the web app as secrets in an Azure key vault. The solution must meet the following requirements:✑ Minimize changes to the app code.✑ Use the principle of least privilege.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0005800001.png"],
    backImage: "/images/questions/0005800002.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/82743-exam-az-305-topic-1-question-24-discussion/"
  },
  {
    id: 25,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You plan to deploy an application named App1 that will run on five Azure virtual machines. Additional virtual machines will be deployed later to run App1.You need to recommend a solution to meet the following requirements for the virtual machines that will run App1:✑ Ensure that the virtual machines can authenticate to Microsoft Entra ID to gain access to an Azure key vault, Azure Logic Apps instances, and an Azure SQL database.✑ Avoid assigning new roles and permissions for Azure services when you deploy additional virtual machines.✑ Avoid storing secrets and certificates on the virtual machines.✑ Minimize administrative effort for managing identities.Which type of identity should you include in the recommendation?",
    options: [
      "A. a system-assigned managed identity",
      "B. a service principal that is configured to use a certificate",
      "C. a service principal that is configured to use a client secret",
      "D. a user-assigned managed identity"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D - Azure Site Recovery. ASR provides disaster recovery with continuous VM replication to a secondary region, automated failover/failback, and recovery plans. It's designed for this exact scenario. Availability Zones (A) protect within a region. Backup (B) is for data recovery, not VM replication. Load balancers (C) distribute traffic but don't replicate.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78933-exam-az-305-topic-1-question-25-discussion/"
  },
  {
    id: 26,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You deploy several Azure SQL Database instances.You plan to configure the Diagnostics settings on the databases as shown in the following exhibit.Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0006200001.jpg", "/images/questions/0006300001.png"],
    backImage: "/images/questions/0006300002.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80193-exam-az-305-topic-1-question-27-discussion/"
  },
  {
    id: 27,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have the resources shown in the following table:CDB1 hosts a container that stores continuously updated operational data.You are designing a solution that will use AS1 to analyze the operational data daily.You need to recommend a solution to analyze the data without affecting the performance of the operational data store.What should you include in the recommendation?",
    options: [
      "A. Azure Cosmos DB change feed",
      "B. Azure Data Factory with Azure Cosmos DB and Azure Synapse Analytics connectors",
      "C. Azure Synapse Link for Azure Cosmos DB",
      "D. Azure Synapse Analytics with PolyBase data loading"
    ],
    correct: [2],
    multipleAnswers: false,
    images: ["/images/questions/0006000001.png"],
    explanation: "CORRECT: C - Change feed. Cosmos DB change feed provides an ordered list of changed documents, perfect for triggering real-time sync. It integrates with Azure Functions for serverless processing. Triggers (A) run within Cosmos DB. Data Factory (B) is for batch ETL. Event Grid (D) doesn't directly capture Cosmos DB changes.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80531-exam-az-305-topic-1-question-26-discussion/"
  },
  {
    id: 28,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an application that is used by 6,000 users to validate their vacation requests. The application manages its own credential store.Users must enter a username and password to access the application. The application does NOT support identity providers.You plan to upgrade the application to use single sign-on (SSO) authentication by using an Microsoft Entra ID application registration.Which SSO method should you use?",
    options: [
      "A. header-based",
      "B. SAML",
      "C. password-based",
      "D. OpenID Connect"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C - Azure SQL Database serverless. Serverless auto-pauses when inactive (saves costs during low usage) and auto-scales during peak times. Perfect for intermittent, unpredictable workloads. Provisioned tiers have fixed costs regardless of usage.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/83747-exam-az-305-topic-1-question-28-discussion/"
  },
  {
    id: 29,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription that contains a virtual network named VNET1 and 10 virtual machines. The virtual machines are connected to VNET1.You need to design a solution to manage the virtual machines from the internet. The solution must meet the following requirements:✑ Incoming connections to the virtual machines must be authenticated by using Azure Multi-Factor Authentication (MFA) before network connectivity is allowed.✑ Incoming connections must use TLS and connect to TCP port 443.✑ The solution must support RDP and SSH.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0006500004.png"],
    backImage: "/images/questions/image259.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79347-exam-az-305-topic-1-question-29-discussion/"
  },
  {
    id: 30,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You are designing an Azure governance solution.All Azure resources must be easily identifiable based on the following operational information: environment, owner, department and cost center.You need to ensure that you can use the operational information when you generate reports for the Azure resources.What should you include in the solution?",
    options: [
      "A. an Azure data catalog that uses the Azure REST API as a data source",
      "B. an Azure management group that uses parent groups to create a hierarchy",
      "C. an Azure policy that enforces tagging rules",
      "D. Microsoft Entra ID administrative units"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C - Resource tags. Tags are key-value pairs for organizing and identifying resources by business unit, environment, cost center, etc. They can be enforced via Azure Policy. Resource groups (A) can only contain one resource per group. Management groups (B) organize subscriptions. Administrative units (D) are for Microsoft Entra ID.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78934-exam-az-305-topic-1-question-30-discussion/"
  },
  {
    id: 31,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "A company named Contoso, Ltd. has an Microsoft Entra ID tenant that is integrated with Microsoft 365 and an Azure subscription.Contoso has an on-premises identity infrastructure. The infrastructure includes servers that run Active Directory Domain Services (AD DS) and Microsoft Entra Connect.Contoso has a partnership with a company named Fabrikam. Inc. Fabrikam has an Active Directory forest and a Microsoft 365 tenant. Fabrikam has the same on- premises identity infrastructure components as Contoso.A team of 10 developers from Fabrikam will work on an Azure solution that will be hosted in the Azure subscription of Contoso. The developers must be added to the Contributor role for a resource group in the Contoso subscription.You need to recommend a solution to ensure that Contoso can assign the role to the 10 Fabrikam developers. The solution must ensure that the Fabrikam developers use their existing credentials to access resourcesWhat should you recommend?",
    options: [
      "A. In the Microsoft Entra ID tenant of Contoso. create cloud-only user accounts for the Fabrikam developers.",
      "B. Configure a forest trust between the on-premises Active Directory forests of Contoso and Fabrikam.",
      "C. Configure an organization relationship between the Microsoft 365 tenants of Fabrikam and Contoso.",
      "D. In the Microsoft Entra ID tenant of Contoso, create guest accounts for the Fabnkam developers."
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78994-exam-az-305-topic-1-question-31-discussion/"
  },
  {
    id: 32,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Microsoft Entra ID for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?",
    options: [
      "A. Configure the Microsoft Entra ID provisioning service.",
      "B. Enable Microsoft Entra ID pass-through authentication and update the sign-in endpoint.",
      "C. Use Microsoft Entra ID entitlement management to govern external users.",
      "D. Configure Microsoft Entra ID join."
    ],
    correct: [2],
    multipleAnswers: false,
    images: ["/images/questions/0006800001.jpg"],
    explanation: "CORRECT: C. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79364-exam-az-305-topic-1-question-32-discussion/"
  },
  {
    id: 33,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -Your company has 20 web APIs that were developed in-house.The company is developing 10 web apps that will use the web APIs. The web apps and the APIs are registered in the company s Azure Active Directory (AzureAD) tenant. The web APIs are published by using Azure API Management.You need to recommend a solution to block unauthorized requests originating from the web apps from reaching the web APIs. The solution must meet the following requirements:✑ Use Azure AD-generated claims.Minimize configuration and management effort.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0006900002.png", "/images/questions/0007000001.jpg"],
    backImage: "/images/questions/0007000002.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79369-exam-az-305-topic-1-question-33-discussion/"
  },
  {
    id: 34,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Azure Log Analytics",
      "B. Azure Arc",
      "C. Azure Analysis Services",
      "D. Application Insights"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80199-exam-az-305-topic-1-question-34-discussion/"
  },
  {
    id: 35,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Microsoft Entra ID for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?",
    options: [
      "A. Configure the Microsoft Entra ID provisioning service.",
      "B. Configure assignments for the fabrikam.com users by using Microsoft Entra ID Privileged Identity Management (PIM).",
      "C. Use Microsoft Entra ID entitlement management to govern external users.",
      "D. Configure Microsoft Entra ID Identity Protection."
    ],
    correct: [2],
    multipleAnswers: false,
    images: ["/images/questions/0007200001.jpg"],
    explanation: "CORRECT: C. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78704-exam-az-305-topic-1-question-35-discussion/"
  },
  {
    id: 36,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You are developing an app that will read activity logs for an Azure subscription by using Azure Functions.You need to recommend an authentication solution for Azure Functions. The solution must minimize administrative effort.What should you include in the recommendation?",
    options: [
      "A. an enterprise application in Azure AD",
      "B. system-assigned managed identities",
      "C. shared access signatures (SAS)",
      "D. application registration in Azure AD"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B - User-assigned managed identity. Managed identities eliminate credential management. User-assigned can be shared across multiple Function instances and works with Azure RBAC. System-assigned (A) creates separate identity per resource. Service principals (C) require secret management. SAS (D) requires rotation.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94020-exam-az-305-topic-1-question-36-discussion/"
  },
  {
    id: 37,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Microsoft Entra ID for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?",
    options: [
      "A. Configure Microsoft Entra ID join.",
      "B. Use Microsoft Entra ID entitlement management to govern external users.",
      "C. Enable Microsoft Entra ID pass-through authentication and update the sign-in endpoint.",
      "D. Configure assignments for the fabrikam.com users by using Microsoft Entra ID Privileged Identity Management (PIM)."
    ],
    correct: [1],
    multipleAnswers: false,
    images: ["/images/questions/image154.png"],
    explanation: "CORRECT: B. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/93993-exam-az-305-topic-1-question-37-discussion/"
  },
  {
    id: 38,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Microsoft Entra ID for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?",
    options: [
      "A. Configure Microsoft Entra ID join.",
      "B. Configure Microsoft Entra ID Identity Protection.",
      "C. Use Microsoft Entra ID entitlement management to govern external users.",
      "D. Configure assignments for the fabrikam.com users by using Microsoft Entra ID Privileged Identity Management (PIM)."
    ],
    correct: [2],
    multipleAnswers: false,
    images: ["/images/questions/image154.png"],
    explanation: "CORRECT: C. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/93994-exam-az-305-topic-1-question-38-discussion/"
  },
  {
    id: 39,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Azure Activity Log",
      "B. Azure Arc",
      "C. Azure Analysis Services",
      "D. Azure Monitor metrics"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95913-exam-az-305-topic-1-question-39-discussion/"
  },
  {
    id: 40,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription that contains an Azure key vault named KV1 and a virtual machine named VM1. VM1 runs Windows Server 2022: Azure Edition.You plan to deploy an ASP.Net Core-based application named App1 to VM1.You need to configure App1 to use a system-assigned managed identity to retrieve secrets from KV1. The solution must minimize development effort.What should you do? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image161.png"],
    backImage: "/images/questions/image260.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95618-exam-az-305-topic-1-question-40-discussion/"
  },
  {
    id: 41,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Microsoft Entra ID for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?",
    options: [
      "A. Configure Microsoft Entra ID join.",
      "B. Configure Microsoft Entra ID Identity Protection.",
      "C. Configure a Conditional Access policy.",
      "D. Configure Supported account types in the application registration and update the sign-in endpoint."
    ],
    correct: [3],
    multipleAnswers: false,
    images: ["/images/questions/image163.png"],
    explanation: "CORRECT: D. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95571-exam-az-305-topic-1-question-41-discussion/"
  },
  {
    id: 42,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an Microsoft Entra ID tenant named contoso.com that has a security group named Group1. Group1 is configured for assigned memberships. Group1 has 50 members, including 20 guest users.You need to recommend a solution for evaluating the membership of Group1. The solution must meet the following requirements:• The evaluation must be repeated automatically every three months.• Every member must be able to report whether they need to be in Group1.• Users who report that they do not need to be in Group1 must be removed from Group1 automatically.• Users who do not report whether they need to be in Group1 must be removed from Group1 automatically.What should you include in the recommendation?",
    options: [
      "A. Implement Microsoft Entra ID Identity Protection.",
      "B. Change the Membership type of Group1 to Dynamic User.",
      "C. Create an access review.",
      "D. Implement Microsoft Entra ID Privileged Identity Management (PIM)."
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C - Access Reviews. For periodic evaluation of group membership with self-attestation and automatic removal of non-responders, Access Reviews is the solution. Supports recurring schedules, self-review, and auto-remediation. PIM (D) is for privileged roles. Identity Protection (A) detects risks. Dynamic groups (B) can't do self-attestation.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95520-exam-az-305-topic-1-question-42-discussion/"
  },
  {
    id: 43,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription named Sub1 that is linked to an Azure AD tenant named contoso.com.You plan to implement two ASP.NET Core apps named App1 and App2 that will be deployed to 100 virtual machines in Sub1. Users will sign in to App1 and App2 by using their contoso.com credentials.App1 requires read permissions to access the calendar of the signed-in user. App2 requires write permissions to access the calendar of the signed-in user.You need to recommend an authentication and authorization solution for the apps. The solution must meet the following requirements:• Use the principle of least privilege.• Minimize administrative effort.What should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image164.png"],
    backImage: "/images/questions/image165.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95567-exam-az-305-topic-1-question-43-discussion/"
  },
  {
    id: 44,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Microsoft Entra ID for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?",
    options: [
      "A. Configure the Microsoft Entra ID provisioning service.",
      "B. Enable Microsoft Entra ID pass-through authentication and update the sign-in endpoint.",
      "C. Configure Supported account types in the application registration and update the sign-in endpoint.",
      "D. Configure Microsoft Entra ID join."
    ],
    correct: [2],
    multipleAnswers: false,
    images: ["/images/questions/image175.png"],
    explanation: "CORRECT: C. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/99471-exam-az-305-topic-1-question-45-discussion/"
  },
  {
    id: 45,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Microsoft Entra ID for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?",
    options: [
      "A. Enable Microsoft Entra ID pass-through authentication and update the sign-in endpoint.",
      "B. Use Microsoft Entra ID entitlement management to govern external users.",
      "C. Configure assignments for the fabrikam.com users by using Microsoft Entra ID Privileged Identity Management (PIM).",
      "D. Configure Microsoft Entra ID Identity Protection."
    ],
    correct: [1],
    multipleAnswers: false,
    images: ["/images/questions/image175.png"],
    explanation: "CORRECT: B. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/99933-exam-az-305-topic-1-question-44-discussion/"
  },
  {
    id: 46,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure AD tenant that contains a management group named MG1.You have the Azure subscriptions shown in the following table.The subscriptions contain the resource groups shown in the following table.The subscription contains the Azure AD security groups shown in the following table.The subscription contains the user accounts shown in the following table.You perform the following actions:Assign User3 the Contributor role for Sub1.Assign Group1 the Virtual Machine Contributor role for MG1.Assign Group3 the Contributor role for the Tenant Root Group.For each of the following statements, select Yes if the statement is true. Otherwise, select No.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image180.png", "/images/questions/image181.png", "/images/questions/image182.png", "/images/questions/image183.png", "/images/questions/image184.png"],
    backImage: "/images/questions/image185.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106780-exam-az-305-topic-1-question-46-discussion/"
  },
  {
    id: 47,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Microsoft Entra ID for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?",
    options: [
      "A. Configure Microsoft Entra ID Identity Protection.",
      "B. Configure assignments for the fabrikam.com users by using Microsoft Entra ID Privileged Identity Management (PIM).",
      "C. Configure Supported account types in the application registration and update the sign-in endpoint.",
      "D. Configure a Conditional Access policy."
    ],
    correct: [2],
    multipleAnswers: false,
    images: ["/images/questions/image186.png"],
    explanation: "CORRECT: C. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106958-exam-az-305-topic-1-question-47-discussion/"
  },
  {
    id: 48,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "Your company has the divisions shown in the following table.Sub1 contains an Azure App Service web app named App1. App1 uses Microsoft Entra ID for single-tenant user authentication. Users from contoso.com can authenticate to App1.You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.What should you recommend?",
    options: [
      "A. Use Microsoft Entra ID entitlement management to govern external users.",
      "B. Enable Microsoft Entra ID pass-through authentication and update the sign-in endpoint.",
      "C. Configure a Conditional Access policy.",
      "D. Configure assignments for the fabrikam.com users by using Microsoft Entra ID Privileged Identity Management (PIM)."
    ],
    correct: [0],
    multipleAnswers: false,
    images: ["/images/questions/image186.png"],
    explanation: "CORRECT: A. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106784-exam-az-305-topic-1-question-48-discussion/"
  },
  {
    id: 49,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Azure Monitor action groups",
      "B. Azure Arc",
      "C. Azure Monitor metrics",
      "D. Azure Activity Log"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106883-exam-az-305-topic-1-question-51-discussion/"
  },
  {
    id: 50,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription that contains 1,000 resources.You need to generate compliance reports for the subscription. The solution must ensure that the resources can be grouped by department.What should you use to organize the resources?",
    options: [
      "A. application groups and quotas",
      "B. Azure Policy and tags",
      "C. administrative units and Azure Lighthouse",
      "D. resource groups and role assignments"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure Policy enforces organizational standards at Management Group, Subscription, or Resource Group scope. Policies can audit, deny, or remediate non-compliant resources.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106885-exam-az-305-topic-1-question-49-discussion/"
  }
];



