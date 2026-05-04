// Questions 51 to 100
import { Question } from './types';

export const questions2: Question[] = [
  {
    id: 51,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Azure Arc",
      "B. Azure Monitor metrics",
      "C. Azure Advisor",
      "D. Azure Log Analytics"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106886-exam-az-305-topic-1-question-50-discussion/"
  },
  {
    id: 52,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Azure Arc",
      "B. Azure Log Analytics",
      "C. Application insights",
      "D. Azure Monitor action groups"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/108113-exam-az-305-topic-1-question-53-discussion/"
  },
  {
    id: 53,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "DRAG DROP -You have an Azure AD tenant that contains an administrative unit named MarketingAU. MarketingAU contains 100 users.You create two users named User1 and User2.You need to ensure that the users can perform the following actions in MarketingAU:• User1 must be able to create user accounts.• User2 must be able to reset user passwords.Which role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image187.png"],
    backImage: "/images/questions/image188.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106781-exam-az-305-topic-1-question-52-discussion/"
  },
  {
    id: 54,
    category: "Design Business Continuity Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are designing an app that will be hosted on Azure virtual machines that run Ubuntu. The app will use a third-party email service to send email messages to users. The third-party email service requires that the app authenticate by using an API key.You need to recommend an Azure Key Vault solution for storing and accessing the API key. The solution must minimize administrative effort.What should you recommend using to store and access the key? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image191.png"],
    backImage: "/images/questions/image192.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/114902-exam-az-305-topic-1-question-54-discussion/"
  },
  {
    id: 55,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "DRAG DROP -You have two app registrations named App1 and App2 in Azure AD. App1 supports role-based access control (RBAC) and includes a role named Writer.You need to ensure that when App2 authenticates to access App1, the tokens issued by Azure AD include the Writer role claim.Which blade should you use to modify each app registration? To answer, drag the appropriate blades to the correct app registrations. Each blade may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image193.png"],
    backImage: "/images/questions/image261.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/114903-exam-az-305-topic-1-question-55-discussion/"
  },
  {
    id: 56,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Application Insights",
      "B. Azure Arc",
      "C. Azure Log Analytics",
      "D. Azure Monitor metrics"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/116372-exam-az-305-topic-1-question-56-discussion/"
  },
  {
    id: 57,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription.You plan to deploy a monitoring solution that will include the following:• Azure Monitor Network Insights• Application Insights• Microsoft Sentinel• VM insightsThe monitoring solution will be managed by a single team.What is the minimum number of Azure Monitor workspaces required?",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure Monitor provides metrics, logs, alerts, and Application Insights for comprehensive monitoring. Activity Log tracks control plane operations.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/114850-exam-az-305-topic-1-question-57-discussion/"
  },
  {
    id: 58,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your Azure subscription.What should you include in the recommendation?",
    options: [
      "A. Application Insights",
      "B. Azure Analysis Services",
      "C. Azure Advisor",
      "D. Azure Activity Log"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/118062-exam-az-305-topic-1-question-58-discussion/"
  },
  {
    id: 59,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription that contains 10 web apps. The apps are integrated with Microsoft Entra ID and are accessed by users on different project teams.The users frequently move between projects.You need to recommend an access management solution for the web apps. The solution must meet the following requirements:• The users must only have access to the app of the project to which they are assigned currently.• Project managers must verify which users have access to their project’s app and remove users that are no longer assigned to their project.• Once every 30 days, the project managers must be prompted automatically to verify which users are assigned to their projects.What should you include in the recommendation?",
    options: [
      "A. Microsoft Entra ID Identity Protection",
      "B. Microsoft Defender for Identity",
      "C. Microsoft Entra Permissions Management",
      "D. Microsoft Entra ID Identity Governance"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure App Service provides managed hosting for web apps with built-in CI/CD, scaling, custom domains, SSL, and Microsoft Entra authentication.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/121189-exam-az-305-topic-1-question-60-discussion/"
  },
  {
    id: 60,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -Case Study -This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.To start the case study -To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.Overview -Fabrikam, Inc. is an engineering company that has offices throughout Europe. The company has a main office in London and three branch offices in Amsterdam, Berlin, and Rome.Existing Environment: Active Directory EnvironmentThe network contains two Active Directory forests named corp.fabrikam.com and rd.fabrikam.com. There are no trust relationships between the forests.Corp.fabrikam.com is a production forest that contains identities used for internal user and computer authentication.Rd.fabrikam.com is used by the research and development (R&D) department only. The R&D department is restricted to using on-premises resources only.Existing Environment: Network InfrastructureEach office contains at least one domain controller from the corp.fabrikam.com domain. The main office contains all the domain controllers for the rd.fabrikam.com forest.All the offices have a high-speed connection to the internet.An existing application named WebApp1 is hosted in the data center of the London office. WebApp1 is used by customers to place and track orders. WebApp1 has a web tier that uses Microsoft Internet Information Services (IIS) and a database tier that runs Microsoft SQL Server 2016. The web tier and the database tier are deployed to virtual machines that run on Hyper-V.The IT department currently uses a separate Hyper-V environment to test updates to WebApp1.Fabrikam purchases all Microsoft licenses through a Microsoft Enterprise Agreement that includes Software Assurance.Existing Environment: Problem StatementsThe use of WebApp1 is unpredictable. At peak times, users often report delays. At other times, many resources for WebApp1 are underutilized.Requirements: Planned Changes -Fabrikam plans to move most of its production workloads to Azure during the next few years, including virtual machines that rely on Active Directory for authentication.As one of its first projects, the company plans to establish a hybrid identity model, facilitating an upcoming Microsoft 365 deployment.All R&D operations will remain on-premises.Fabrikam plans to migrate the production and test instances of WebApp1 to Azure.Requirements: Technical RequirementsFabrikam identifies the following technical requirements:• Website content must be easily updated from a single point.• User input must be minimized when provisioning new web app instances.• Whenever possible, existing on-premises licenses must be used to reduce cost.• Users must always authenticate by using their corp.fabrikam.com UPN identity.• Any new deployments to Azure must be redundant in case an Azure region fails.• Whenever possible, solutions must be deployed to Azure by using the Standard pricing tier of Azure App Service.• An email distribution group named IT Support must be notified of any issues relating to the directory synchronization services.• In the event that a link fails between Azure and the on-premises network, ensure that the virtual machines hosted in Azure can authenticate to Active Directory.• Directory synchronization between Azure Active Directory (Azure AD) and corp.fabrikam.com must not be affected by a link failure between Azure and the on-premises network.Requirements: Database RequirementsFabrikam identifies the following database requirements:• Database metrics for the production instance of WebApp1 must be available for analysis so that database administrators can optimize the performance settings.• To avoid disrupting customer access, database downtime must be minimized when databases are migrated.• Database backups must be retained for a minimum of seven years to meet compliance requirements.Requirements: Security RequirementsFabrikam identifies the following security requirements:• Company information including policies, templates, and data must be inaccessible to anyone outside the company.• Users on the on-premises network must be able to authenticate to corp.fabrikam.com if an internet link fails.• Administrators must be able authenticate to the Azure portal by using their corp.fabrikam.com credentials.• All administrative access to the Azure portal must be secured by using multi-factor authentication (MFA).• The testing of WebApp1 updates must not be visible to anyone outside the company.To meet the authentication requirements of Fabrikam, what should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image198.png"],
    backImage: "/images/questions/image199.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/115985-exam-az-305-topic-1-question-59-discussion/"
  },
  {
    id: 61,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription. The subscription contains a tiered app named App1 that is distributed across multiple containers hosted in Azure Container Instances.You need to deploy an Azure Monitor monitoring solution for App. The solution must meet the following requirements:• Support using synthetic transaction monitoring to monitor traffic between the App1 components.• Minimize development effort.What should you include in the solution?",
    options: [
      "A. Network insights",
      "B. Application Insights",
      "C. Container insights",
      "D. Log Analytics Workspace insights"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure Monitor provides metrics, logs, alerts, and Application Insights for comprehensive monitoring. Activity Log tracks control plane operations.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/121261-exam-az-305-topic-1-question-62-discussion/"
  },
  {
    id: 62,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription that contains 50 Azure SQL databases.You create an Azure Resource Manager (ARM) template named Template1 that enables Transparent Data Encryption (TDE).You need to create an Azure Policy definition named Policy1 that will use Template1 to enable TDE for any noncompliant Azure SQL databases.How should you configure Policy1? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image200.png"],
    backImage: "/images/questions/image262.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/121190-exam-az-305-topic-1-question-61-discussion/"
  },
  {
    id: 63,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription that contains the resources shown in the following table:Log files from App1 are registered to App1Logs. An average of 120 GB of log data is ingested per day.You configure an Azure Monitor alert that will be triggered if the App1 logs contain error messages.You need to minimize the Log Analytics costs associated with App1. The solution must meet the following requirements:• Ensure that all the log files from App1 are ingested to App1Logs.• Minimize the impact on the Azure Monitor alert.Which resource should you modify, and which modification should you perform? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image202.png", "/images/questions/image203.png"],
    backImage: "/images/questions/image204.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/121191-exam-az-305-topic-1-question-63-discussion/"
  },
  {
    id: 64,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "multiple-choice",
    question: "You have 12 Azure subscriptions and three projects. Each project uses resources across multiple subscriptions.You need to use Microsoft Cost Management to monitor costs on a per project basis. The solution must minimize administrative effort.Which two components should you include in the solution? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.",
    options: [
      "A. budgets",
      "B. resource tags",
      "C. custom role-based access control (RBAC) roles",
      "D. management groups",
      "E. Azure boards"
    ],
    correct: [0, 1],
    multipleAnswers: true,
    explanation: "CORRECT: A, B. Azure Monitor provides metrics, logs, alerts, and Application Insights for comprehensive monitoring. Activity Log tracks control plane operations.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/121192-exam-az-305-topic-1-question-64-discussion/"
  },
  {
    id: 65,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription that contains multiple storage accounts.You assign Azure Policy definitions to the storage accounts.You need to recommend a solution to meet the following requirements:• Trigger on-demand Azure Policy compliance scans.• Raise Azure Monitor non-compliance alerts by querying logs collected by Log Analytics.What should you recommend for each requirement? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image214.png"],
    backImage: "/images/questions/image215.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122495-exam-az-305-topic-1-question-65-discussion/"
  },
  {
    id: 66,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription.You plan to deploy five storage accounts that will store block blobs and five storage accounts that will host file shares. The file shares will be accessed by using the SMB protocol.You need to recommend an access authorization solution for the storage accounts. The solution must meet the following requirements:• Maximize security.• Prevent the use of shared keys.• Whenever possible, support time-limited access.What should you include in the solution? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image216.png"],
    backImage: "/images/questions/image263.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122528-exam-az-305-topic-1-question-66-discussion/"
  },
  {
    id: 67,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription. The subscription contains 100 virtual machines that run Windows Server 2022 and have the Azure Monitor Agent installed.You need to recommend a solution that meets the following requirements:• Forwards JSON-formatted logs from the virtual machines to a Log Analytics workspace• Transforms the logs and stores the data in a table in the Log Analytics workspaceWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image218.png"],
    backImage: "/images/questions/image219.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/122532-exam-az-305-topic-1-question-67-discussion/"
  },
  {
    id: 68,
    category: "Design Identity, Governance, and Monitoring Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have five Azure subscriptions. Each subscription is linked to a separate Azure AD tenant and contains virtual machines that run Windows Server 2022.You plan to collect Windows security events from the virtual machines and send them to a single Log Analytics workspace.You need to recommend a solution that meets the following requirements:• Collects event logs from multiple subscriptions• Supports the use of data collection rules (DCRs) to define which events to collectWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image241.png"],
    backImage: "/images/questions/image264.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/130525-exam-az-305-topic-1-question-68-discussion/"
  },
  {
    id: 69,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have 100 servers that run Windows Server 2012 R2 and host Microsoft SQL Server 2014 instances. The instances host databases that have the following characteristics:✑ Stored procedures are implemented by using CLR.✑ The largest database is currently 3 TB. None of the databases will ever exceed 4 TB.You plan to move all the data from SQL Server to Azure.You need to recommend a service to host the databases. The solution must meet the following requirements:✑ Whenever possible, minimize management overhead for the migrated databases.✑ Ensure that users can authenticate by using Microsoft Entra ID credentials.✑ Minimize the number of database changes required to facilitate the migration.What should you include in the recommendation?",
    options: [
      "A. Azure SQL Database elastic pools",
      "B. Azure SQL Managed Instance",
      "C. Azure SQL Database single databases",
      "D. SQL Server 2016 on Azure virtual machines"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67957-exam-az-305-topic-2-question-1-discussion/"
  },
  {
    id: 70,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription that contains an Azure Blob Storage account named store1.You have an on-premises file server named Server1 that runs Windows Server 2016. Server1 stores 500 GB of company files.You need to store a copy of the company files from Server1 in store1.Which two possible Azure services achieve this goal? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.",
    options: [
      "A. an Azure Logic Apps integration account",
      "B. an Azure Import/Export job",
      "C. Azure Data Factory",
      "D. an Azure Analysis services On-premises data gateway",
      "E. an Azure Batch account"
    ],
    correct: [1, 2],
    multipleAnswers: true,
    explanation: "CORRECT: B, C. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67513-exam-az-305-topic-2-question-2-discussion/"
  },
  {
    id: 71,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription that contains two applications named App1 and App2. App1 is a sales processing application. When a transaction in App1 requires shipping, a message is added to an Azure Storage account queue, and then App2 listens to the queue for relevant transactions.In the future, additional applications will be added that will process some of the shipping requests based on the specific details of the transactions.You need to recommend a replacement for the storage account queue to ensure that each additional application will be able to read the relevant transactions.What should you recommend?",
    options: [
      "A. one Azure Data Factory pipeline",
      "B. multiple storage account queues",
      "C. one Azure Service Bus queue",
      "D. one Azure Service Bus topic"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67833-exam-az-305-topic-2-question-3-discussion/"
  },
  {
    id: 72,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You need to design a storage solution for an app that will store large amounts of frequently used data. The solution must meet the following requirements:✑ Maximize data throughput.✑ Prevent the modification of data for one year.✑ Minimize latency for read and write operations.Which Azure Storage account type and storage service should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0009200001.png"],
    backImage: "/images/questions/0009300001.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67443-exam-az-305-topic-2-question-4-discussion/"
  },
  {
    id: 73,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription that contains the storage accounts shown in the following table.You plan to implement two new apps that have the requirements shown in the following table.Which storage accounts should you recommend using for each app? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0009400001.png", "/images/questions/0009400002.png", "/images/questions/0009500001.png"],
    backImage: "/images/questions/0009600001.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/68197-exam-az-305-topic-2-question-5-discussion/"
  },
  {
    id: 74,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You are designing an application that will be hosted in Azure.The application will host video files that range from 50 MB to 12 GB. The application will use certificate-based authentication and will be available to users on the internet.You need to recommend a storage option for the video files. The solution must provide the fastest read performance and must minimize storage costs.What should you recommend?",
    options: [
      "A. Azure Files",
      "B. Azure Data Lake Storage Gen2",
      "C. Azure Blob Storage",
      "D. Azure SQL Database"
    ],
    correct: [2],
    multipleAnswers: false,
    explanation: "CORRECT: C. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67444-exam-az-305-topic-2-question-6-discussion/"
  },
  {
    id: 75,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an on-premises database that you plan to migrate to Azure.You need to design the database architecture to meet the following requirements:✑ Support scaling up and down.✑ Support geo-redundant backups.✑ Support a database of up to 75 TB.✑ Be optimized for online transaction processing (OLTP).What should you include in the design? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0009900001.png"],
    backImage: "/images/questions/0010000001.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/68096-exam-az-305-topic-2-question-8-discussion/"
  },
  {
    id: 76,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You are designing a SQL database solution. The solution will include 20 databases that will be 20 GB each and have varying usage patterns.You need to recommend a database platform to host the databases. The solution must meet the following requirements:✑ The solution must meet a Service Level Agreement (SLA) of 99.99% uptime.✑ The compute resources allocated to the databases must scale dynamically.✑ The solution must have reserved capacity.Compute charges must be minimized.What should you include in the recommendation?",
    options: [
      "A. an elastic pool that contains 20 Azure SQL databases",
      "B. 20 databases on a Microsoft SQL server that runs on an Azure virtual machine in an availability set",
      "C. 20 databases on a Microsoft SQL server that runs on an Azure virtual machine",
      "D. 20 instances of Azure SQL Database serverless"
    ],
    correct: [0],
    multipleAnswers: false,
    images: ["/images/questions/0009700004.png"],
    explanation: "CORRECT: A. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/68095-exam-az-305-topic-2-question-7-discussion/"
  },
  {
    id: 77,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You are planning an Azure IoT Hub solution that will include 50,000 IoT devices.Each device will stream data, including temperature, device ID, and time data. Approximately 50,000 records will be written every second. The data will be visualized in near real time.You need to recommend a service to store and query the data.Which two services can you recommend? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.",
    options: [
      "A. Azure Table Storage",
      "B. Azure Event Grid",
      "C. Azure Cosmos DB SQL API",
      "D. Azure Time Series Insights"
    ],
    correct: [2, 3],
    multipleAnswers: true,
    explanation: "CORRECT: C, D. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/68097-exam-az-305-topic-2-question-9-discussion/"
  },
  {
    id: 78,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You are designing an application that will aggregate content for users.You need to recommend a database solution for the application. The solution must meet the following requirements:✑ Support SQL commands.✑ Support multi-master writes.✑ Guarantee low latency read operations.What should you include in the recommendation?",
    options: [
      "A. Azure Cosmos DB SQL API",
      "B. Azure SQL Database that uses active geo-replication",
      "C. Azure SQL Database Hyperscale",
      "D. Azure Database for PostgreSQL"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67751-exam-az-305-topic-2-question-10-discussion/"
  },
  {
    id: 79,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "DRAG DROP -You plan to import data from your on-premises environment to Azure. The data is shown in the following table.What should you recommend using to migrate the data? To answer, drag the appropriate tools to the correct data sources. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct selection is worth one point.Select and Place:",
    frontImages: ["/images/questions/0010500001.png", "/images/questions/0010500002.png"],
    backImage: "/images/questions/0010500003.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79391-exam-az-305-topic-2-question-12-discussion/"
  },
  {
    id: 80,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription that contains the SQL servers on Azure shown in the following table.The subscription contains the storage accounts shown in the following table.You create the Azure SQL databases shown in the following table.For each of the following statements, select Yes if the statement is true. Otherwise, select No.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0010300001.png", "/images/questions/0010300002.png", "/images/questions/0010300003.png", "/images/questions/0010400001.png"],
    backImage: "/images/questions/0010400002.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/67837-exam-az-305-topic-2-question-11-discussion/"
  },
  {
    id: 81,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You store web access logs data in Azure Blob Storage.You plan to generate monthly reports from the access logs.You need to recommend an automated process to upload the data to Azure SQL Database every month.What should you include in the recommendation?",
    options: [
      "A. Microsoft SQL Server Migration Assistant (SSMA)",
      "B. Data Migration Assistant (DMA)",
      "C. AzCopy",
      "D. Azure Data Factory"
    ],
    correct: [3],
    multipleAnswers: false,
    explanation: "CORRECT: D. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79393-exam-az-305-topic-2-question-13-discussion/"
  },
  {
    id: 82,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an app named App1 that uses two on-premises Microsoft SQL Server databases named DB1 and DB2.You plan to migrate DB1 and DB2 to AzureYou need to recommend an Azure solution to host DB1 and DB2. The solution must meet the following requirements:✑ Support server-side transactions across DB1 and DB2.✑ Minimize administrative effort to update the solution.What should you recommend?",
    options: [
      "A. two Azure SQL databases in an elastic pool",
      "B. two databases on the same Azure SQL managed instance",
      "C. two databases on the same SQL Server instance on an Azure virtual machine",
      "D. two Azure SQL databases on different Azure SQL Database servers"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79418-exam-az-305-topic-2-question-15-discussion/"
  },
  {
    id: 83,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have an Azure subscription.Your on-premises network contains a file server named Server1. Server1 stores 5 ׀¢׀’ of company files that are accessed rarely.You plan to copy the files to Azure Storage.You need to implement a storage solution for the files that meets the following requirements:✑ The files must be available within 24 hours of being requested.✑ Storage costs must be minimized.Which two possible storage solutions achieve this goal? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.",
    options: [
      "A. Create an Azure Blob Storage account that is configured for the Cool default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.",
      "B. Create a general-purpose v1 storage account. Create a blob container and copy the files to the blob container.",
      "C. Create a general-purpose v2 storage account that is configured for the Cool default access tier. Create a file share in the storage account and copy the files to the file share.",
      "D. Create a general-purpose v2 storage account that is configured for the Hot default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.",
      "E. Create a general-purpose v1 storage account. Create a fie share in the storage account and copy the files to the file share."
    ],
    correct: [0, 3],
    multipleAnswers: true,
    explanation: "CORRECT: A, D. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78601-exam-az-305-topic-2-question-14-discussion/"
  },
  {
    id: 84,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You need to design a highly available Azure SQL database that meets the following requirements:✑ Failover between replicas of the database must occur without any data loss.✑ The database must remain available in the event of a zone outage.✑ Costs must be minimized.Which deployment option should you use?",
    options: [
      "A. Azure SQL Database Hyperscale",
      "B. Azure SQL Database Premium",
      "C. Azure SQL Database Basic",
      "D. Azure SQL Managed Instance General Purpose"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure business continuity solutions: Azure Backup for data protection, Azure Site Recovery for VM replication and DR, geo-redundant storage for data redundancy.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/79423-exam-az-305-topic-2-question-16-discussion/"
  },
  {
    id: 85,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are planning an Azure Storage solution for sensitive data. The data will be accessed daily. The dataset is less than 10 GB.You need to recommend a storage solution that meets the following requirements:✑ All the data written to storage must be retained for five years.✑ Once the data is written, the data can only be read. Modifications and deletion must be prevented.✑ After five years, the data can be deleted, but never modified.✑ Data access charges must be minimized.What should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0011000001.jpg"],
    backImage: "/images/questions/image265.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/78936-exam-az-305-topic-2-question-17-discussion/"
  },
  {
    id: 86,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are designing a data storage solution to support reporting.The solution will ingest high volumes of data in the JSON format by using Azure Event Hubs. As the data arrives, Event Hubs will write the data to storage. The solution must meet the following requirements:✑ Organize data in directories by date and time.✑ Allow stored data to be queried directly, transformed into summarized tables, and then stored in a data warehouse.✑ Ensure that the data warehouse can store 50 TB of relational data and support between 200 and 300 concurrent read operations.Which service should you recommend for each type of data store? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.Hot Area:",
    frontImages: ["/images/questions/0011200001.jpg"],
    backImage: "/images/questions/0011200002.jpg",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/80098-exam-az-305-topic-2-question-18-discussion/"
  },
  {
    id: 87,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have an app named App1 that uses an on-premises Microsoft SQL Server database named DB1.You plan to migrate DB1 to an Azure SQL managed instance.You need to enable customer managed Transparent Data Encryption (TDE) for the instance. The solution must maximize encryption strength.Which type of encryption algorithm and key length should you use for the TDE protector?",
    options: [
      "A. RSA 3072",
      "B. AES 256",
      "C. RSA 4096",
      "D. RSA 2048"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/93991-exam-az-305-topic-2-question-19-discussion/"
  },
  {
    id: 88,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You are planning an Azure IoT Hub solution that will include 50,000 IoT devices.Each device will stream data, including temperature, device ID, and time data. Approximately 50,000 records will be written every second. The data will be visualized in near real time.You need to recommend a service to store and query the data.Which two services can you recommend? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.",
    options: [
      "A. Azure Table Storage",
      "B. Azure Event Grid",
      "C. Azure Cosmos DB for NoSQL",
      "D. Azure Time Series Insights"
    ],
    correct: [2, 3],
    multipleAnswers: true,
    explanation: "CORRECT: C, D. This solution best meets the requirements for security, scalability, cost-effectiveness, and operational efficiency in the Azure environment.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/94045-exam-az-305-topic-2-question-20-discussion/"
  },
  {
    id: 89,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are planning an Azure Storage solution for sensitive data. The data will be accessed daily. The dataset is less than 10 GB.You need to recommend a storage solution that meets the following requirements:• All the data written to storage must be retained for five years.• Once the data is written, the data can only be read. Modifications and deletion must be prevented.• After five years, the data can be deleted, but never modified.• Data access charges must be minimized.What should you recommend? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image166.png"],
    backImage: "/images/questions/image266.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95594-exam-az-305-topic-2-question-21-discussion/"
  },
  {
    id: 90,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are designing a data analytics solution that will use Azure Synapse and Azure Data Lake Storage Gen2.You need to recommend Azure Synapse pools to meet the following requirements:• Ingest data from Data Lake Storage into hash-distributed tables.• Implement query, and update data in Delta Lake.What should you recommend for each requirement? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image168.png"],
    backImage: "/images/questions/image267.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95788-exam-az-305-topic-2-question-22-discussion/"
  },
  {
    id: 91,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You have an on-premises storage solution.You need to migrate the solution to Azure. The solution must support Hadoop Distributed File System (HDFS).What should you use?",
    options: [
      "A. Azure Data Lake Storage Gen2",
      "B. Azure NetApp Files",
      "C. Azure Data Share",
      "D. Azure Table storage"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/95575-exam-az-305-topic-2-question-23-discussion/"
  },
  {
    id: 92,
    category: "Design Infrastructure Solutions",
    type: "flashcard",
    question: "DRAG DROP -You have an on-premises app named App1.Customers use App1 to manage digital images.You plan to migrate App1 to Azure.You need to recommend a data storage solution for App1. The solution must meet the following image storage requirements:• Encrypt images at rest.• Allow files up to 50 MB.• Manage access to the images by using Azure Web Application Firewall (WAF) on Azure Front Door.The solution must meet the following customer account requirements:• Support automatic scale out of the storage.• Maintain the availability of App1 if a datacenter fails.• Support reading and writing data from multiple Azure regions.Which service should you include in the recommendation for each type of data? To answer, drag the appropriate services to the correct type of data. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.NOTE: Each correct answer is worth one point.",
    frontImages: ["/images/questions/image176.png"],
    backImage: "/images/questions/image177.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/100297-exam-az-305-topic-2-question-24-discussion/"
  },
  {
    id: 93,
    category: "Design Infrastructure Solutions",
    type: "multiple-choice",
    question: "You plan to migrate on-premises MySQL databases to Azure Database for MySQL Flexible Server.You need to recommend a solution for the Azure Database for MySQL Flexible Server configuration. The solution must meet the following requirements:• The databases must be accessible if a datacenter fails.• Costs must be minimized.Which compute tier should you recommend?",
    options: [
      "A. Burstable",
      "B. General Purpose",
      "C. Memory Optimized"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/99422-exam-az-305-topic-2-question-26-discussion/"
  },
  {
    id: 94,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You are designing an application that will aggregate content for users.You need to recommend a database solution for the application. The solution must meet the following requirements:• Support SQL commands.• Support multi-master writes.• Guarantee low latency read operations.What should you include in the recommendation?",
    options: [
      "A. Azure Cosmos DB for NoSQL",
      "B. Azure SQL Database that uses active geo-replication",
      "C. Azure SQL Database Hyperscale",
      "D. Azure Cosmos DB for PostgreSQL"
    ],
    correct: [0],
    multipleAnswers: false,
    explanation: "CORRECT: A. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/99419-exam-az-305-topic-2-question-25-discussion/"
  },
  {
    id: 95,
    category: "Design Business Continuity Solutions",
    type: "multiple-choice",
    question: "You are designing an app that will use Azure Cosmos DB to collate sales from multiple countries.You need to recommend an API for the app. The solution must meet the following requirements:• Support SQL queries.• Support geo-replication.• Store and access data relationally.Which API should you recommend?",
    options: [
      "A. Apache Cassandra",
      "B. PostgreSQL",
      "C. MongoDB",
      "D. NoSQL"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure database options: SQL Database (managed PaaS), Cosmos DB (globally distributed NoSQL), SQL Managed Instance (near 100% SQL Server compatibility).",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106681-exam-az-305-topic-2-question-27-discussion/"
  },
  {
    id: 96,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You have the resources shown in the following table.CDB1 hosts a container that stores continuously updated operational data.You are designing a solution that will use AS1 to analyze the operational data daily.You need to recommend a solution to analyze the data without affecting the performance of the operational data store.What should you include in the recommendation?",
    options: [
      "A. Azure Data Factory with Azure Cosmos DB and Azure Synapse Analytics connectors",
      "B. Azure Synapse Analytics with PolyBase data loading",
      "C. Azure Synapse Link for Azure Cosmos DB",
      "D. Azure Cosmos DB change feed"
    ],
    correct: [2],
    multipleAnswers: false,
    images: ["/images/questions/image195.png"],
    explanation: "CORRECT: C. Azure Kubernetes Service (AKS) provides managed Kubernetes with integrated CI/CD, monitoring, and security. Supports RBAC, network policies, and Microsoft Entra integration.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/115064-exam-az-305-topic-2-question-29-discussion/"
  },
  {
    id: 97,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an app that generates 50,000 events daily.You plan to stream the events to an Azure event hub and use Event Hubs Capture to implement cold path processing of the events. The output of Event Hubs Capture will be consumed by a reporting system.You need to identify which type of Azure storage must be provisioned to support Event Hubs Capture, and which inbound data format the reporting system must support.What should you identify? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image189.png"],
    backImage: "/images/questions/image190.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/106695-exam-az-305-topic-2-question-28-discussion/"
  },
  {
    id: 98,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You have an Azure subscription. The subscription contains an Azure SQL managed instance that stores employee details, including social security numbers and phone numbers.You need to configure the managed instance to meet the following requirements:• The helpdesk team must see only the last four digits of an employee’s phone number.• Cloud administrators must be prevented from seeing the employee’s social security numbers.What should you enable for each column in the managed instance? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image205.png"],
    backImage: "/images/questions/image206.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/121187-exam-az-305-topic-2-question-30-discussion/"
  },
  {
    id: 99,
    category: "Design Data Storage Solutions",
    type: "multiple-choice",
    question: "You plan to use an Azure Storage account to store data assets.You need to recommend a solution that meets the following requirements:• Supports immutable storage• Disables anonymous access to the storage account• Supports access control list (ACL)-based Microsoft Entra ID permissionsWhat should you include in the recommendation?",
    options: [
      "A. Azure Files",
      "B. Azure Data Lake Storage",
      "C. Azure NetApp Files",
      "D. Azure Blob Storage"
    ],
    correct: [1],
    multipleAnswers: false,
    explanation: "CORRECT: B. Azure Storage security options include SAS tokens (time-limited, granular), access keys (full access), Microsoft Entra authentication, and private endpoints.",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/121178-exam-az-305-topic-2-question-31-discussion/"
  },
  {
    id: 100,
    category: "Design Data Storage Solutions",
    type: "flashcard",
    question: "HOTSPOT -You are designing a storage solution that will ingest, store, and analyze petabytes (PBs) of structured, semi-structured, and unstructured text data. The analyzed data will be offloaded to Azure Data Lake Storage Gen2 for long-term retention.You need to recommend a storage and analytics solution that meets the following requirements:• Stores the processed data• Provides interactive analytics• Supports manual scaling, built-in autoscaling, and custom autoscalingWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.NOTE: Each correct selection is worth one point.",
    frontImages: ["/images/questions/image207.png"],
    backImage: "/images/questions/image268.png",
    explanation: "Suggested Answer:",
    sourceLink: "https://www.examtopics.com/discussions/microsoft/view/121180-exam-az-305-topic-2-question-32-discussion/"
  }
];



