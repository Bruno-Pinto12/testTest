# AZ-900 Practice Questions — V4

Independent study material. Immediate feedback; not an official exam.

---

## Question 001 — Azure Cost Management

To transition a large capital expenditure (CapEx) to an operational expenditure (OpEx), Contoso's CIO has suggested to the board that the organization move their virtual machine (IaaS) workloads to Azure. The CFO argues that this will result in unpredictable OpEx spending. In this case, what pricing option is available to reduce costs and making predicting future spending easier?

- A. Azure Reservations
- B. Pay-as-you-go (PAYG)
- C. Azure VM Scale Sets
- D. Azure in CSP

**Correct answer: A. Azure Reservations**

### Explanation

Azure Reservations reduce costs for eligible usage through a 1-year or 3-year commitment, making future spending more predictable.

### Why the other answers are incorrect

- **B. Pay-as-you-go (PAYG):** Charges are based on actual resource usage, making future expenses less predictable.
- **C. Azure VM Scale Sets:** Automatically manage and scale groups of virtual machines. They are not a pricing commitment option.
- **D. Azure in CSP:** Allows organizations to purchase Azure services through a Cloud Solution Provider, but does not inherently guarantee reduced or predictable costs.

### Key concept to remember

Azure Reservations are suitable for stable, predictable workloads, whereas Pay-as-you-go offers greater flexibility without a long-term commitment.

**Brochure reference:** Chapter 9

---

## Question 002 — Cloud Models

Tailspin Toys, a small startup, is choosing their initial services architecture. They choose to rely on Office 365 and Microsoft Azure for all services. Which of the following best describes the cloud model they have chosen?

- A. Private Cloud
- B. Public Cloud
- C. Hybrid Cloud
- D. Government Cloud

**Correct answer: B. Public Cloud**

### Explanation

Office 365 and Microsoft Azure are cloud services provided by Microsoft using public cloud infrastructure.

### Why the other answers are incorrect

- **A. Private Cloud:** Cloud infrastructure dedicated to a single organization. Tailspin Toys uses Microsoft's public cloud services instead.
- **C. Hybrid Cloud:** Combines public and private cloud environments. The scenario does not mention any private cloud infrastructure.
- **D. Government Cloud:** A specialized cloud environment designed to meet government security and regulatory requirements. No such requirements are mentioned in the scenario.

### Key concept to remember

- **Public Cloud:** Provider-owned infrastructure shared across multiple customers.
- **Private Cloud:** Infrastructure dedicated to one organization.
- **Hybrid Cloud:** Combination of public and private cloud environments.

Public cloud does not mean that customer data is publicly accessible.

**Brochure reference:** Chapter 1

---

## Question 003 — Cloud Service Types (SaaS)

Which of the following statements are true of a Software as a Service solution?

- A. You are responsible for maintaining the solution infrastructure
- B. You are responsible for deploying updates to the solution
- C. You are responsible for solution availability and scalability
- D. You are responsible for configuring the solution features

**Correct answer: D. You are responsible for configuring the solution features**

### Explanation

In a SaaS model, the cloud provider manages the application and underlying infrastructure, while the customer configures the available application features.

### Why the other answers are incorrect

- **A. Maintaining the solution infrastructure:** The cloud provider maintains the servers, networking, storage, and underlying operating systems.
- **B. Deploying updates to the solution:** The cloud provider manages application updates, security patches, and software maintenance.
- **C. Solution availability and scalability:** The cloud provider manages the infrastructure and application capacity required to deliver the service, according to its service commitments.

### Key concept to remember

SaaS provides a ready-to-use application with minimal infrastructure management responsibilities for the customer. The customer remains responsible for data, identities, access management, and application configuration.

| Responsibility | Customer | Provider |
|---|:---:|:---:|
| Application configuration | Yes | |
| User accounts and access | Yes | |
| Customer data | Yes | |
| Software updates | | Yes |
| Infrastructure maintenance | | Yes |
| Service availability and scalability | | Yes |

**Examples of SaaS:** Microsoft 365, Dynamics 365 and Salesforce.

**Brochure reference:** Chapter 3

---

## Question 004 — Cloud Models

Contoso is planning to move to Azure, but currently hosts business applications in a shared virtualization infrastructure on-premises, utilizing Hyper-V. This is an example of which cloud computing model?

- A. Hybrid Cloud
- B. Private Cloud
- C. Public Cloud
- D. Government Cloud

**Correct answer: B. Private Cloud**

### Explanation

Contoso currently uses its own on-premises virtualization infrastructure with Hyper-V, dedicated to the organization. In this scenario, this corresponds to a private cloud.

### Why the other answers are incorrect

- **A. Hybrid Cloud:** Combines private and public cloud environments. Contoso is planning to migrate to Azure but is not currently using it.
- **C. Public Cloud:** Infrastructure owned and operated by a cloud provider, such as Microsoft Azure, rather than Contoso's own infrastructure.
- **D. Government Cloud:** A specialized cloud environment designed to meet government security and regulatory requirements.

### Key concept to remember

| Cloud model | Example |
|---|---|
| Private Cloud | Dedicated internal cloud infrastructure |
| Public Cloud | Microsoft Azure |
| Hybrid Cloud | Integrated on-premises private cloud and Azure environments |

Planning to migrate to Azure does not make an existing environment a hybrid cloud. Virtualization alone does not technically constitute a private cloud, but Private Cloud is the expected answer among the available choices.

**Brochure reference:** Chapter 1

---

## Question 005 — CapEx vs OpEx

Azure SQL Database and an on-premises SQL cluster represent a(n) ___ expense and a(n) ___ expense, respectively.

- A. Capital, Capital
- B. Capital, Operational
- C. Operational, Operational
- D. Operational, Capital

**Correct answer: D. Operational, Capital**

### Explanation

Azure SQL Database is an operational expense (OpEx) because it is billed as a cloud service. Purchasing infrastructure for an on-premises SQL cluster represents a capital expense (CapEx).

### Why the other answers are incorrect

- **A. Capital, Capital:** Azure SQL Database does not require purchasing physical infrastructure upfront.
- **B. Capital, Operational:** Reverses the typical expenditure models of cloud services and on-premises infrastructure.
- **C. Operational, Operational:** Although an on-premises SQL cluster generates ongoing operational costs, purchasing its physical infrastructure represents CapEx.

### Key concept to remember

| CapEx — Capital Expenditure | OpEx — Operational Expenditure |
|---|---|
| Upfront investment | Ongoing operating expenses |
| Purchasing physical servers | Paying for Azure services |
| Purchasing networking equipment | Monthly cloud bills |
| Infrastructure acquisition | Consumption-based pricing |

Moving from on-premises infrastructure to Azure typically shifts spending from CapEx to OpEx. On-premises infrastructure can also generate OpEx, such as electricity and maintenance costs.

**Brochure reference:** Chapter 1

---

## Question 006 — Consumption-Based Model

In Azure, you are charged only for what you use. This is known as a

- A. Fixed-price model
- B. Consumption based model

**Correct answer: B. Consumption based model**

### Explanation

The consumption-based model allows customers to pay for the resources they consume rather than purchasing infrastructure upfront.

### Why the other answers are incorrect

- **A. Fixed-price model:** Customers pay a predetermined price regardless of their actual consumption. This does not correspond to Azure's consumption-based pricing model.

### Key concept to remember

The consumption-based model provides several benefits:

- No upfront infrastructure investment.
- Pay for consumed or provisioned resources.
- Increase or decrease resources according to demand.
- Reduce costs by releasing unused resources.

However, unused resources that remain provisioned, such as managed disks, can still generate costs.

**Exam keywords:** Pay-as-you-go, consumption-based pricing, OpEx.

**Brochure reference:** Chapter 1

---

## Question 007 — Cloud Service Types (IaaS)

Contoso runs several business applications in Azure VMs. Which cloud computing model best categorizes Azure VMs?

- A. Software as a service (SaaS)
- B. Platform as a service (PaaS)
- C. Infrastructure as a service (IaaS)
- D. Function as a service (FaaS)

**Correct answer: C. Infrastructure as a service (IaaS)**

### Explanation

Azure VMs are an IaaS solution because Microsoft manages the physical infrastructure while the customer manages the guest operating system and installed applications.

### Why the other answers are incorrect

- **A. Software as a service (SaaS):** Provides ready-to-use applications without requiring customers to manage the underlying operating system or infrastructure.
- **B. Platform as a service (PaaS):** Provides a managed platform for developing and hosting applications without managing the underlying operating system.
- **D. Function as a service (FaaS):** Executes code in response to events without requiring customers to manage virtual machines directly.

### Key concept to remember

| Service model | Azure example | Customer manages |
|---|---|---|
| IaaS | Azure Virtual Machines | OS, applications, data |
| PaaS | Azure App Service | Application code, data |
| SaaS | Microsoft 365 | Data, access, configuration |
| FaaS | Azure Functions | Function code, data, configuration |

IaaS provides the greatest level of infrastructure control among these service models, but also requires more management responsibilities.

**Exam keywords:** Virtual machines, guest OS, infrastructure control, shared responsibility.

**Brochure reference:** Chapter 3

---

## Question 008 — Cloud Service Types (PaaS)

Azure App Service, Azure SQL Database, and Cosmos DB are examples of which category of cloud computing service?

- A. Function as a Service (FaaS)
- B. Software as a Service (SaaS)
- C. Platform as a Service (PaaS)
- D. Infrastructure as a Service (IaaS)

**Correct answer: C. Platform as a Service (PaaS)**

### Explanation

Azure App Service, Azure SQL Database, and Cosmos DB are PaaS solutions because Microsoft manages the underlying infrastructure and platform, allowing customers to focus on their applications and data.

### Why the other answers are incorrect

- **A. Function as a Service (FaaS):** Executes code in response to events. Azure Functions is an example of this serverless computing model.
- **B. Software as a Service (SaaS):** Provides complete, ready-to-use applications, such as Microsoft 365, rather than a platform for developing applications.
- **D. Infrastructure as a Service (IaaS):** Provides infrastructure resources, such as Azure Virtual Machines, where customers are responsible for managing the guest operating system.

### Key concept to remember

| PaaS service | Purpose |
|---|---|
| Azure App Service | Hosting web applications and APIs |
| Azure SQL Database | Managed relational databases |
| Azure Cosmos DB | Globally distributed databases |

With PaaS, developers can focus on application development and data management without maintaining the underlying servers or operating systems.

**Exam keywords:** Managed platform, application development, managed databases, no OS management.

**Brochure reference:** Chapter 3

---

## Question 009 — Cloud Models and Cost Optimization

You need to provide additional capacity than what is currently available in your on-premises datacenter. The solution must minimize capital expense (CapEx) and operational expense (OpEx). Which solution should you recommend?

- A. Migration to public cloud
- B. A private cloud
- C. A hybrid cloud
- D. Additional on-premises servers

**Correct answer: C. A hybrid cloud**

### Explanation

A hybrid cloud allows the organization to extend its existing on-premises infrastructure with public cloud resources without purchasing additional physical servers.

### Why the other answers are incorrect

- **A. Migration to public cloud:** A complete migration could reduce infrastructure costs but may introduce unnecessary migration expenses when only additional capacity is required.
- **B. A private cloud:** Expanding the existing private infrastructure may require purchasing additional hardware and increasing maintenance costs.
- **D. Additional on-premises servers:** Requires upfront hardware investment (CapEx) and increases ongoing expenses (OpEx), such as electricity, cooling, and maintenance.

### Key concept to remember

Cloud bursting is a hybrid cloud approach in which an organization uses public cloud resources when its on-premises infrastructure reaches its capacity limits.

| Benefit | Explanation |
|---|---|
| Reduced CapEx | No additional physical servers to purchase. |
| Optimized OpEx | Additional cloud capacity can be consumed when needed. |
| Scalability | Resources can be increased according to demand. |
| Existing infrastructure | Current on-premises investments remain useful. |

A hybrid cloud is the expected answer because the scenario requires additional capacity rather than a complete migration. Actual cost savings depend on the workload and architecture.

**Exam keywords:** Additional capacity, cloud bursting, hybrid cloud, CapEx, OpEx.

**Brochure reference:** Chapter 1

---

## Question 010 — Cloud Service Types

Office 365, Azure VMs, and Event Grid represent, ____, ____, and ____, respectively.

- A. 1)SaaS 2) PaaS 3) IaaS
- B. 1) PaaS 2) IaaS 3) SaaS
- C. 1) SaaS 2) IaaS 3) PaaS

**Correct answer: C. 1) SaaS 2) IaaS 3) PaaS**

### Explanation

Office 365 provides ready-to-use software (SaaS), Azure VMs provide virtualized infrastructure (IaaS), and Azure Event Grid provides a managed event distribution service (PaaS).

### Why the other answers are incorrect

- **A. 1) SaaS 2) PaaS 3) IaaS:** Office 365 is correctly classified, but Azure VMs are IaaS and Event Grid is PaaS.
- **B. 1) PaaS 2) IaaS 3) SaaS:** Azure VMs are correctly classified, but Office 365 is SaaS and Event Grid is PaaS.

### Key concept to remember

| Service | Cloud service model | Purpose |
|---|---|---|
| Office 365 | SaaS | Ready-to-use productivity applications |
| Azure Virtual Machines | IaaS | Virtual servers with OS-level control |
| Azure Event Grid | PaaS | Managed event distribution and routing |

Azure Event Grid enables event-driven architectures by distributing events from publishers to subscribers without requiring customers to manage the underlying infrastructure.

**Exam keywords:** Ready-to-use software, virtual machines, managed services, event-driven architecture.

**Brochure reference:** Chapter 3

---

## Question 011 — Cloud Service Types (PaaS)

Contoso host databases for customer-facing web applications in Azure MySQL Database. Which cloud computing model best categorizes this service?

- A. Software as a service (SaaS)
- B. Platform as a service (PaaS)
- C. infrastructure as a service (IaaS)
- D. Function as a service (FaaS)

**Correct answer: B. Platform as a service (PaaS)**

### Explanation

Azure Database for MySQL is a PaaS solution because Microsoft manages the underlying infrastructure, operating system, and database engine maintenance.

### Why the other answers are incorrect

- **A. Software as a service (SaaS):** Provides ready-to-use applications, such as Microsoft 365, rather than a managed database platform for application development.
- **C. Infrastructure as a service (IaaS):** Would require Contoso to install and maintain MySQL on an Azure Virtual Machine, including managing the guest operating system.
- **D. Function as a service (FaaS):** Executes code in response to events, rather than providing a managed database service.

### Key concept to remember

| Database solution | Service model |
|---|---|
| MySQL installed on an Azure VM | IaaS |
| Azure Database for MySQL | PaaS |
| Azure SQL Database | PaaS |
| Azure Cosmos DB | PaaS |

With a managed database service, Microsoft handles infrastructure maintenance, database engine patching and automated backups. The customer remains responsible for data, queries, access permissions and database configuration.

**Exam keywords:** Managed database, PaaS, database engine, no OS management.

**Brochure reference:** Chapter 3

---

## Question 012 — Scalability vs Elasticity

Contoso hosts a legacy CRM application that runs on an Azure VM scale set. The application runs at a steady state of around 30% resource utilization. However, during month end closing activities, the application spikes to 90% resource utilization for extended periods during the last week of the month. Azure allows Contoso IT to meet these spikes in resource demand at the push of a button, paying for the additional capacity only when needed. This is an example of:

- A. Scalability
- B. Elasticity
- C. Fault Tolerance
- D. High Availability

**Correct answer: B. Elasticity**

### Explanation

Elasticity allows Contoso to increase resources during periods of high demand and reduce them when demand decreases, paying for additional capacity only when needed.

### Why the other answers are incorrect

- **A. Scalability:** Refers to the ability to increase or decrease resource capacity. Elasticity is more specific because it focuses on matching capacity to fluctuating demand and avoiding unnecessary resource costs.
- **C. Fault Tolerance:** Allows a system to continue operating when one or more components fail. The scenario describes increased demand, not component failures.
- **D. High Availability:** Keeps a service accessible with minimal downtime. It does not specifically describe adjusting resources according to demand.

### Key concept to remember

| Concept | Purpose |
|---|---|
| Scalability | Ability to increase or decrease resource capacity. |
| Elasticity | Dynamically adjust capacity according to demand. |
| Fault Tolerance | Continue operating despite component failures. |
| High Availability | Minimize service downtime. |

Elasticity is particularly useful for temporary or recurring demand spikes, such as month-end activities or seasonal sales. Scaling can be manual or automated; the key distinction is matching capacity to changing demand.

**Exam keywords:** Fluctuating demand, temporary capacity, scale out, scale in, pay only when needed.

**Brochure reference:** Chapter 2

---

## Question 013 — CapEx vs OpEx

Contoso plans to migrate their existing on-premises SQL VMs to Azure. Which expenditure model does this implement?

- A. Capital (CAPEX)
- B. Operational (OPEX)
- C. Subscription
- D. Elastic

**Correct answer: B. Operational (OPEX)**

### Explanation

Migrating SQL VMs to Azure shifts infrastructure spending from upfront hardware investments to ongoing cloud service expenses (OpEx).

### Why the other answers are incorrect

- **A. Capital (CAPEX):** Refers to upfront investments, such as purchasing physical servers and networking equipment. Azure eliminates the need to purchase the underlying physical infrastructure.
- **C. Subscription:** An Azure subscription is a billing and resource management boundary, not an expenditure model.
- **D. Elastic:** Refers to the ability to adjust resource capacity according to demand. It is a cloud computing benefit, not an expenditure model.

### Key concept to remember

| CapEx | OpEx |
|---|---|
| Capital Expenditure | Operational Expenditure |
| Upfront investment | Ongoing expenses |
| Purchasing physical servers | Paying for Azure VMs |
| Infrastructure acquisition | Cloud service consumption |

Migrating existing virtual machines to Azure typically shifts infrastructure spending from **CapEx to OpEx**, even when the applications remain unchanged.

**Exam keywords:** Upfront investment, ongoing expenses, cloud migration, consumption-based pricing.

**Brochure reference:** Chapter 1

---

## Question 014 — Economies of Scale

A financial analysis of migration of on-premises files to Azure Storage at Contoso showed that storing 2TB of archived data in Azure would be less expensive than hosting this data on-premises. The report also showed unit cost in Azure would decrease even further as the data archive grows. This is an example of cloud

- A. Elasticity
- B. Economies of scale
- C. Scalability
- D. High Availability

**Correct answer: B. Economies of scale**

### Explanation

Economies of scale occur when the average cost per unit decreases as the scale of operations increases. Cloud providers can benefit from large-scale infrastructure and pass some savings on to customers.

### Why the other answers are incorrect

- **A. Elasticity:** Allows resources to be increased or decreased according to demand. It does not specifically describe a reduction in cost per unit.
- **C. Scalability:** Refers to the ability to increase or decrease resource capacity. It does not necessarily imply lower unit costs.
- **D. High Availability:** Focuses on keeping services accessible and minimizing downtime, rather than reducing infrastructure costs.

### Key concept to remember

Economies of scale allow cloud providers to reduce average infrastructure costs through large-scale operations, bulk hardware purchases and efficient resource management.

| Storage volume | Illustrative cost per GB |
|---|---|
| 2 TB | $0.025 |
| 20 TB | $0.020 |
| 200 TB | $0.015 |

These fictional prices illustrate the concept, not actual Azure rates. A lower unit cost does not necessarily mean a lower total bill. Actual Azure pricing depends on the service and pricing tier.

**Exam keywords:** Lower unit cost, large-scale infrastructure, cost efficiency, economies of scale.

**Brochure reference:** Chapter 1

---

## Question 015 — Business Process Automation

The Contoso Corp Financial Services team needs to automate several business processes. They need to create workflows in a low-code environment with a visual interface. The service must have built-in connectivity to their existing platforms, like SalesForce and SAP. The members working on the project are only lightly technical (citizen developers). Which Microsoft service will best fit their use case?

- A. Power Automate
- B. Logic Apps
- C. Azure Automation
- D. Azure Functions

**Correct answer: A. Power Automate**

### Explanation

Power Automate allows citizen developers to automate business processes using a visual, low-code interface and built-in connectors to services such as Salesforce and SAP.

### Why the other answers are incorrect

- **B. Logic Apps:** Also provides visual workflows and built-in connectors, but is more oriented toward developers, enterprise application integration and Azure-based solutions.
- **C. Azure Automation:** Focuses on automating IT operations and infrastructure management through runbooks, rather than business processes for nontechnical users.
- **D. Azure Functions:** Provides serverless, event-driven code execution. It generally requires programming knowledge, making it less suitable for citizen developers.

### Key concept to remember

| Service | Main purpose | Target audience |
|---|---|---|
| Power Automate | Business process automation | Business users, citizen developers |
| Azure Logic Apps | Application and system integration | Developers, IT professionals |
| Azure Automation | Infrastructure and IT task automation | IT administrators |
| Azure Functions | Event-driven code execution | Developers |

Both Power Automate and Logic Apps support low-code workflows and connectors. The decisive clue in this question is **citizen developers**, which makes Power Automate the best choice.

**Exam keywords:** Low-code, visual workflows, business processes, built-in connectors, citizen developers.

**Brochure reference:** Part E

---

## Question 016 — Azure Functions and Serverless Computing

Kelly, who works in IT Operations, wants to automate a task using a script she wrote. She wants to do this with a minimum of expense and maintenance effort. She selected Azure Functions to host the job, instead of Azure Virtual Machines (IaaS). Does this service meet the solution criteria?

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

Azure Functions allows Kelly to execute her script without managing virtual machines, reducing maintenance effort and potentially minimizing costs through consumption-based pricing.

### Why the other answer is incorrect

- **B. NO:** Azure Functions supports automated tasks through event-driven or scheduled execution. Unlike Azure Virtual Machines, it does not require Kelly to maintain the underlying operating system or directly manage servers.

### Key concept to remember

| Azure Functions | Azure Virtual Machines |
|---|---|
| Serverless computing | Infrastructure as a Service (IaaS) |
| Provider-managed infrastructure | Customer manages the guest OS |
| Event-driven or scheduled execution | General-purpose computing |
| Consumption-based pricing available | Charges for allocated compute capacity |
| Reduced maintenance effort | Greater management responsibilities |

Azure Functions is particularly suitable for short, intermittent automated tasks. With a Consumption hosting plan, Kelly can avoid paying for continuously running compute infrastructure. Actual suitability depends on script compatibility, execution duration, and hosting plan.

**Exam keywords:** Serverless, script execution, automation, minimal maintenance, consumption-based pricing.

**Brochure reference:** Chapter 3

---

## Question 017 — Azure Storage Services

Contoso has a line-of-business application that requires access to a file share. You need to host this share in Azure with a minimum of cost and administration effort. Which service would best fulfill this requirement?

- A. Azure Files
- B. Azure Blob Storage
- C. Azure VMs
- D. VM Scale Sets

**Correct answer: A. Azure Files**

### Explanation

Azure Files provides fully managed cloud file shares using SMB or NFS protocols, reducing infrastructure management and administration effort.

### Why the other answers are incorrect

- **B. Azure Blob Storage:** Designed for storing unstructured data as objects, such as images, videos and backups. It does not provide a traditional SMB file share.
- **C. Azure VMs:** Can host a file server but require the customer to manage the operating system, software updates and server configuration, increasing administration effort.
- **D. VM Scale Sets:** Designed to manage and scale groups of virtual machines. They do not directly provide a managed file-sharing service.

### Key concept to remember

| Storage service | Main purpose |
|---|---|
| Azure Files | Managed network file shares (SMB/NFS) |
| Azure Blob Storage | Unstructured object storage |
| Azure Queue Storage | Messages between application components |
| Azure Table Storage | NoSQL structured data |
| Azure Managed Disks | Block storage for virtual machines |

Azure Files is particularly useful for replacing traditional on-premises file servers or migrating applications that depend on existing network file shares without significantly modifying their code. Actual costs depend on usage and configuration.

**Exam keywords:** File share, SMB, NFS, managed storage, minimal administration, lift-and-shift.

**Brochure reference:** Chapter 7

---

## Question 018 — Azure Resource Manager (ARM) Templates

Contoso IT needs to ensure deployments of like Azure resources are the same for every deployment. Which of the following could be used to automate resource deployment?

- A. Azure API Management
- B. Management Groups
- C. Azure Resource Manager (ARM) templates
- D. Azure Synapse

**Correct answer: C. Azure Resource Manager (ARM) templates**

### Explanation

ARM templates define Azure resources and their configurations using declarative JSON files, enabling automated, consistent and repeatable deployments.

### Why the other answers are incorrect

- **A. Azure API Management:** Allows organizations to publish, secure, monitor and manage APIs. It is not a tool for automating infrastructure deployments.
- **B. Management Groups:** Organize Azure subscriptions and enable centralized governance through policies and access permissions. They do not automate resource deployments.
- **D. Azure Synapse:** An analytics service designed for data integration, data warehousing and big data analytics, rather than infrastructure deployment.

### Key concept to remember

ARM templates implement **Infrastructure as Code (IaC)**, which allows infrastructure to be defined in files instead of manually configuring resources.

| Tool | Main purpose |
|---|---|
| Azure Resource Manager (ARM) | Azure resource management and deployment layer |
| ARM templates | Declarative infrastructure deployment using JSON |
| Bicep | Simplified declarative language for Azure infrastructure |
| Azure Policy | Enforcing resource configuration and compliance |
| Management Groups | Organizing and governing multiple subscriptions |

ARM templates provide repeatable deployments, consistent configurations and reduced human error.

**Exam keywords:** Infrastructure as Code, JSON, declarative, automated deployment, repeatability, consistency.

**Brochure reference:** Chapter 11

---

## Question 019 — Azure VM Billing

You are testing new software in an Azure VM. When you are done testing, you shut down the VM, which shows a state of "Stopped" in the Azure portal. Will you incur additional costs while the VM is in this state?

- A. YES
- B. NO (inferred; second option is cropped in the screenshot)

**Correct answer: A. YES**

### Explanation

A VM in the **Stopped** state remains allocated to physical infrastructure, meaning compute charges continue. To stop compute charges, the VM must be deallocated.

### Why the other answer is incorrect

- **B. NO:** Shutting down a VM from within its operating system does not necessarily release its allocated compute resources. Azure continues charging for these resources until the VM is deallocated.

### Key concept to remember

| VM state | Compute charges | Storage charges |
|---|---|---|
| Running | Yes | Yes |
| Stopped | Yes | Yes |
| Stopped (deallocated) | No | Yes |
| Deleted | No | Possible if disks are retained |

**Stopped is not the same as Stopped (deallocated).**

Deallocating a VM releases its allocated compute resources. However, associated resources such as managed disks and certain public IP addresses can still generate costs.

**Exam keywords:** VM billing, stopped, deallocated, compute charges, allocated resources.

**Brochure reference:** Chapter 5

---

## Question 020 — Azure Resource Groups

You are deploying multiple instances of a custom Contoso web application. The application instances share a common management lifecycle, but will be located in different Azure regions. Can you deploy resources across multiple Azure regions in a single resource group?

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

An Azure resource group can contain resources deployed in different Azure regions. Resources are logically grouped according to their management lifecycle rather than their geographical location.

### Why the other answer is incorrect

- **B. NO:** A resource group is not a geographical boundary. Although the resource group itself has a region where its metadata is stored, its resources can be deployed in other Azure regions.

### Key concept to remember

- A resource group can contain resources from multiple Azure regions.
- A resource belongs to only one resource group at a time.
- Resource groups cannot contain other resource groups.
- Resources sharing a common lifecycle should generally be grouped together.
- Deleting a resource group also deletes its contained resources, subject to applicable protections.

For example, one resource group can contain web applications deployed in West Europe, North Europe and East US.

**Exam keywords:** Logical container, multiple regions, resource group metadata, common management lifecycle.

**Brochure reference:** Chapter 4

---

## Question 021 — Microsoft Entra B2B Collaboration

A supplier needs to access your organization’s application using their existing identity. Which feature should you use?

- A. Microsoft Entra Domain Services
- B. Microsoft Entra B2B collaboration
- C. Azure Policy
- D. Azure DNS

**Correct answer: B. Microsoft Entra B2B collaboration**

### Explanation

B2B collaboration enables guest access using external identities. Domain Services provides managed domain services; Policy governs resources; DNS resolves names.

### Key concept to remember

B2B collaboration enables guest access using external identities.

**Brochure reference:** Chapter 8

---

## Question 022 — Azure Log Analytics

Which Azure service would you use to correlate events from multiple Azure resources in a central repository? (choose the best answer)

- A. Azure Data Lake
- B. Azure Log Analytics
- C. Azure Event Grid
- D. Azure Event Hub

**Correct answer: B. Azure Log Analytics**

### Explanation

Azure Log Analytics allows you to query, analyze and correlate logs from multiple Azure resources using a centralized Log Analytics workspace.

### Why the other answers are incorrect

- **A. Azure Data Lake:** Designed to store large volumes of structured, semi-structured and unstructured data for analytics. It is not specifically designed for centralized Azure resource monitoring.
- **C. Azure Event Grid:** Routes events from publishers to subscribers to enable event-driven architectures. Its primary purpose is event distribution rather than log analysis and correlation.
- **D. Azure Event Hub:** Designed for high-throughput event ingestion and real-time data streaming. It does not directly provide the centralized log analysis capabilities of Log Analytics.

### Key concept to remember

| Azure service | Main purpose |
|---|---|
| Azure Monitor | Collecting and monitoring telemetry |
| Azure Log Analytics | Querying, analyzing and correlating logs |
| Log Analytics workspace | Central repository for collected logs |
| Azure Event Grid | Event routing and distribution |
| Azure Event Hubs | Large-scale event ingestion and streaming |
| Azure Data Lake | Large-scale data storage for analytics |

Azure Log Analytics is part of **Azure Monitor** and uses **Kusto Query Language (KQL)** to query and analyze collected logs.

**Exam keywords:** Central repository, log correlation, multiple resources, KQL, centralized monitoring.

**Brochure reference:** Chapter 12

---

## Question 023 — Availability Zones

An _____ protects against datacenter-level failures.

- A. Availability Set
- B. Availability Zone
- C. VM scale set
- D. Azure VM

**Correct answer: B. Availability Zone**

### Explanation

Availability Zones are physically separate locations within an Azure region, with independent power, cooling and networking. Deploying resources across multiple zones protects against datacenter-level failures.

### Why the other answers are incorrect

- **A. Availability Set:** Protects virtual machines against hardware failures and planned maintenance through fault domains and update domains. It does not provide protection against an entire datacenter failure.
- **C. VM scale set:** Manages and scales groups of virtual machines. It can use Availability Zones for additional resilience, but does not inherently protect against datacenter-level failures.
- **D. Azure VM:** A single virtual machine does not inherently provide protection against datacenter-level failures.

### Key concept to remember

| Concept | Protection or purpose |
|---|---|
| Fault Domain | Hardware, power or network failures |
| Update Domain | Planned maintenance |
| Availability Set | Hardware failures and planned maintenance |
| Availability Zone | Datacenter-level failures |
| Multi-region deployment | Regional-level failures, with appropriate architecture |
| VM Scale Set | Scaling and managing multiple VMs |

**Important:** Deploying a resource in a single Availability Zone is not sufficient to protect it against the failure of that zone. Resources must be distributed across multiple zones.

**Exam keywords:** Datacenter failure, physical separation, independent infrastructure, high availability.

**Brochure reference:** Chapter 4

---

## Question 024 — Azure Event Grid

Contoso has messages from a variety of sources (many Azure services) that need to be relayed to an application. Which Azure service would be best suited to the task?

- A. Azure Functions
- B. Azure Event Grid
- C. Azure IoT Hub
- D. Azure Service Bus

**Correct answer: B. Azure Event Grid**

### Explanation

Azure Event Grid routes events from multiple Azure services to subscribing applications using a publish-subscribe model. The quiz correction confirms this answer.

### Why the other answers are incorrect

- **A. Azure Functions:** Executes event-driven code rather than primarily routing events.
- **C. Azure IoT Hub:** Provides communication between IoT devices and cloud applications.
- **D. Azure Service Bus:** Provides reliable enterprise messaging through queues and topics. It is plausible given the wording, but Event Grid is better suited to distributing notifications from multiple Azure services.

### Key concept to remember

| Azure service | Main purpose |
|---|---|
| Azure Event Grid | Event notification and distribution |
| Azure Service Bus | Reliable enterprise messaging using queues and topics |
| Azure Event Hubs | High-volume event ingestion and data streaming |
| Azure IoT Hub | Communication with IoT devices |
| Azure Functions | Event-driven code execution |
| Azure Queue Storage | Simple asynchronous message queues |

Event Grid notifies subscribers that something happened, such as a blob upload. Service Bus reliably delivers business messages or instructions. The question uses the word messages, which makes Service Bus plausible, but the official quiz correction selects Event Grid.

**Exam keywords:** Event Grid, event routing, publish-subscribe, event sources, event-driven architecture.

**Brochure reference:** Part E

---

## Question 025 — Azure Monitor

You can monitor health and availability of your Azure Kubernetes Service (AKS) cluster with:

- A. Azure Monitor
- B. Azure App Insights
- C. Microsoft Sentinel
- D. Microsoft Defender for Cloud

**Correct answer: A. Azure Monitor**

### Explanation

Azure Monitor collects and analyzes metrics and logs from AKS clusters to monitor their health, performance and availability.

### Why the other answers are incorrect

- **B. Azure App Insights:** Focuses on application performance, including response times, requests, exceptions and dependencies, rather than overall AKS cluster health.
- **C. Microsoft Sentinel:** A cloud-native SIEM and SOAR solution for detecting, investigating and responding to security threats rather than monitoring infrastructure availability.
- **D. Microsoft Defender for Cloud:** Focuses on cloud security posture, vulnerability assessment and workload protection rather than general infrastructure performance and availability monitoring.

### Key concept to remember

| Azure service | Main purpose |
|---|---|
| Azure Monitor | Infrastructure and application monitoring |
| Container Insights | Monitoring container and Kubernetes workloads |
| Application Insights | Application performance monitoring |
| Log Analytics | Querying and analyzing collected logs |
| Microsoft Sentinel | Security threat detection and response |
| Microsoft Defender for Cloud | Cloud security posture and workload protection |

**Container Insights** is a feature of Azure Monitor that provides visibility into the performance and health of Kubernetes clusters, nodes and containers. Azure Monitor is the broader monitoring platform, while Application Insights and Container Insights provide specialized monitoring capabilities.

**Exam keywords:** AKS, cluster health, availability, metrics, logs, Container Insights.

**Brochure reference:** Chapter 12

---

## Question 026 — Azure Storage Access Tiers

Which storage tier in Azure Storage delivers the highest cost of data storage?

- A. Hot
- B. Cool
- C. Cold
- D. Archive

**Correct answer: A. Hot**

### Explanation

The Hot access tier has the highest data storage cost but the lowest data access costs, making it suitable for frequently accessed data.

### Why the other answers are incorrect

- **B. Cool:** Provides lower storage costs than Hot but higher access costs. Designed for infrequently accessed data.
- **C. Cold:** Provides lower storage costs than Cool but higher access costs. Designed for rarely accessed data that still requires immediate availability.
- **D. Archive:** Provides the lowest storage costs but higher retrieval costs and latency. Data must be rehydrated before it can be read.

### Key concept to remember

| Access tier | Storage cost | Access cost | Typical minimum retention |
|---|---|---|---|
| Hot | Highest | Lowest | None |
| Cool | Lower | Higher | 30 days |
| Cold | Very low | High | 90 days |
| Archive | Lowest | Highest | 180 days |

Hot, Cool and Cold are online tiers, providing immediate access to data. Archive is an offline tier, requiring rehydration. Minimum billable durations and early deletion charges depend on account type and configuration.

**Exam trap:** Hot has the highest storage cost, whereas Archive generally has the highest retrieval cost. Do not confuse storage costs with access costs.

**Exam keywords:** Access tiers, frequently accessed data, storage cost, retrieval cost, rehydration.

**Brochure reference:** Chapter 7

---

## Question 027 — Azure Pricing Calculator

To retire some aging on-premises servers, Contoso is planning to move several SQL databases to Azure SQL Database. The CIO has asked for a tool to estimate the cost of hosting these resources in Azure. Sally suggests using the Azure Pricing Calculator to estimate costs prior to migration. Does Sally's solution meet the solution criteria?

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

The Azure Pricing Calculator estimates the cost of Azure services based on their expected configuration and usage before deployment or migration.

### Why the other answer is incorrect

- **B. NO:** The Azure Pricing Calculator is specifically designed to estimate future Azure expenses. Contoso can configure Azure SQL Database parameters, such as compute capacity, storage and region, to obtain an estimated cost before migration.

### Key concept to remember

| Tool | Main purpose |
|---|---|
| Azure Pricing Calculator | Estimate future Azure costs before deployment |
| Microsoft Cost Management | Analyze, monitor and manage Azure spending |
| Azure Advisor | Provide cost optimization recommendations |
| TCO Calculator (retired) | Historically used to compare on-premises and cloud infrastructure costs |

The Pricing Calculator provides an estimate, not a guaranteed final bill.

**Exam keywords:** Cost estimation, before deployment, before migration, expected usage.

**Brochure reference:** Chapter 9

---

## Question 028 — Azure Storage Access Tiers

Which storage tier in Azure Storage delivers the lowest cost of data storage?

- A. Hot
- B. Cool
- C. Cold
- D. Archive

**Correct answer: D. Archive**

### Explanation

The Archive access tier provides the lowest data storage cost, making it suitable for long-term retention of rarely accessed data.

### Why the other answers are incorrect

- **A. Hot:** Has the highest storage cost but the lowest access costs. Designed for frequently accessed data.
- **B. Cool:** Provides lower storage costs than Hot, but remains more expensive for storage than Cold and Archive.
- **C. Cold:** Provides very low storage costs while maintaining immediate data access. However, its storage cost is higher than Archive.

### Key concept to remember

| Access tier | Storage cost | Data availability | Typical minimum retention |
|---|---|---|---|
| Hot | Highest | Immediate | No minimum |
| Cool | Lower | Immediate | 30 days |
| Cold | Very low | Immediate | 90 days |
| Archive | Lowest | Rehydration required | 180 days |

Archive is an offline storage tier. Archived data must be rehydrated before it can be read, which can take several hours. Minimum billable durations and early deletion charges depend on account type and configuration.

**Exam trap:** Archive has the lowest storage cost, but generally the highest retrieval cost. Cold is the lowest-cost online tier among these choices.

**Exam keywords:** Long-term retention, rarely accessed data, lowest storage cost, offline storage, rehydration.

**Brochure reference:** Chapter 7

---

## Question 029 — Azure Queue Storage

You have a mobile application that exchanges large numbers of messages with customer devices. Which type of Azure storage is optimized for storing large numbers of messages, accessible from anywhere via authenticated HTTP or HTTPS calls?

- A. Blob Storage
- B. Queue Storage
- C. Table Storage
- D. File Storage

**Correct answer: B. Queue Storage**

### Explanation

Azure Queue Storage is designed to store large numbers of messages that can be accessed from anywhere through authenticated HTTP or HTTPS requests.

### Why the other answers are incorrect

- **A. Blob Storage:** Designed for storing unstructured data, such as images, videos, documents and backups, rather than managing message queues.
- **C. Table Storage:** Provides NoSQL storage for structured, non-relational data using keys and properties. It is not designed for message queuing.
- **D. File Storage:** Provides managed network file shares using SMB or NFS protocols, rather than asynchronous messaging between application components.

### Key concept to remember

| Storage service | Main purpose |
|---|---|
| Blob Storage | Unstructured object storage |
| Queue Storage | Asynchronous message storage and processing |
| Table Storage | NoSQL structured data |
| File Storage | Managed network file shares |

Azure Queue Storage allows application components to communicate asynchronously without needing to operate simultaneously. Each message can be up to **64 KB**, and a queue can contain millions of messages, subject to storage account limits.

**Exam keywords:** Large numbers of messages, authenticated HTTP/HTTPS, message queue, asynchronous communication, application decoupling.

**Brochure reference:** Chapter 7

---

## Question 030 — Azure Management Groups

Contoso's Security team wants to apply policy-based configuration across deployments in multiple Azure subscriptions. Which of the following can help achieve this requirement?

- A. Resource Groups
- B. Management Groups
- C. Role Based Access Control (RBAC)
- D. Access Policies

**Correct answer: B. Management Groups**

### Explanation

Management Groups allow organizations to apply Azure policies across multiple subscriptions. Subscriptions and their resources inherit applicable policies assigned at the management group level.

### Why the other answers are incorrect

- **A. Resource Groups:** Organize resources within a single subscription. They cannot provide centralized governance across multiple subscriptions.
- **C. Role Based Access Control (RBAC):** Controls who can access Azure resources and which actions they can perform, rather than enforcing resource configuration requirements.
- **D. Access Policies:** Define access permissions in specific service contexts. They are not designed to organize subscriptions and enforce centralized resource governance.

### Key concept to remember

Azure resource hierarchy: Management Groups → Subscriptions → Resource Groups → Resources.

| Azure concept | Main purpose |
|---|---|
| Management Groups | Governance across multiple subscriptions |
| Subscriptions | Billing and resource management boundaries |
| Resource Groups | Logical organization of resources |
| Azure Policy | Enforcing configuration and compliance rules |
| Azure RBAC | Managing access and permissions |

Management Groups provide the governance scope, while Azure Policy defines the rules to enforce. Applicable policy assignments are inherited by descendant scopes.

**Exam keywords:** Multiple subscriptions, centralized governance, policy inheritance, resource hierarchy.

**Brochure reference:** Chapter 4

---

## Question 031 — Azure ExpressRoute

Contoso plans to implement a hybrid cloud architecture utilizing Azure. They need to connect on-premises application resources. The solution should minimize latency and maximize security. Which option should they choose?

- A. Point-to-Site VPN
- B. Site-to-Site VPN
- C. ExpressRoute
- D. Azure Application Gateway

**Correct answer: C. ExpressRoute**

### Explanation

Azure ExpressRoute provides private connectivity between on-premises infrastructure and Azure without traversing the public Internet, offering more predictable latency and enhanced network isolation.

### Why the other answers are incorrect

- **A. Point-to-Site VPN:** Connects individual client devices to an Azure virtual network through an encrypted VPN connection. It is primarily designed for individual remote users.
- **B. Site-to-Site VPN:** Connects an entire on-premises network to Azure using an encrypted IPsec tunnel over the public Internet. It generally provides less predictable latency than ExpressRoute.
- **D. Azure Application Gateway:** Provides application-level load balancing for HTTP and HTTPS traffic. It is not designed to establish private network connectivity between on-premises infrastructure and Azure.

### Key concept to remember

| Connectivity option | Main purpose | Connection |
|---|---|---|
| Point-to-Site VPN | Individual devices to Azure | Public Internet |
| Site-to-Site VPN | On-premises network to Azure | Public Internet |
| ExpressRoute | Private enterprise connectivity | Private connection |
| Application Gateway | Web traffic load balancing | HTTP/HTTPS |

**Important:** ExpressRoute provides private connectivity, but traffic is not automatically encrypted by default. Additional encryption can be configured when required.

ExpressRoute generally costs more than a VPN but provides more predictable network performance. Actual latency and security depend on the connection and configuration.

**Exam keywords:** Hybrid cloud, private connection, low latency, predictable performance, bypass public Internet.

**Brochure reference:** Chapter 6

---

## Question 032 — Azure VPN Gateway

As part of a hybrid cloud deployment at Contoso, you need to connect Contoso's on-premises datacenter to Azure. The solution you choose should minimize expense during the low-scale pilot deployment. Which option will you choose?

- A. Point-to-Site VPN
- B. Site-to-Site VPN
- C. ExpressRoute
- D. Azure Application Gateway

**Correct answer: B. Site-to-Site VPN**

### Explanation

A Site-to-Site VPN connects an on-premises datacenter to Azure through an encrypted tunnel over the public Internet, generally at a lower cost than ExpressRoute.

### Why the other answers are incorrect

- **A. Point-to-Site VPN:** Connects individual client devices to an Azure virtual network. It is not designed to connect an entire on-premises datacenter.
- **C. ExpressRoute:** Provides private connectivity with more predictable network performance. However, it is generally more expensive, making it less suitable for a small-scale pilot deployment focused on minimizing costs.
- **D. Azure Application Gateway:** Provides application-level load balancing for HTTP and HTTPS traffic. It does not establish network connectivity between an on-premises datacenter and Azure.

### Key concept to remember

| Connectivity option | Best use case |
|---|---|
| Point-to-Site VPN | Individual remote users |
| Site-to-Site VPN | Cost-effective connectivity between networks |
| ExpressRoute | Private connectivity with predictable performance |
| Application Gateway | Web application load balancing |

**Comparison with question 031:**

- Minimize latency and avoid the public Internet: ExpressRoute.
- Minimize expenses when connecting an on-premises network to Azure: Site-to-Site VPN.

**Exam keywords:** Hybrid cloud, low cost, pilot deployment, encrypted tunnel, network-to-network connectivity.

**Brochure reference:** Chapter 6

---

## Question 033 — Azure App Service and TLS

For regulatory compliance, you need to ensure Contoso's corporate web apps use TLS 1.2 for encryption. Does Azure App Service support enforcing this specific requirement?

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

Azure App Service allows administrators to configure the minimum TLS version, ensuring that incoming TLS connections use TLS 1.2 or higher.

### Why the other answer is incorrect

- **B. NO:** Azure App Service provides built-in TLS configuration settings. Administrators can enforce a minimum TLS version without managing the underlying web server or operating system, helping organizations meet security and regulatory compliance requirements.

### Key concept to remember

| Concept | Purpose |
|---|---|
| TLS (Transport Layer Security) | Encrypts data in transit |
| Minimum TLS version | Rejects connections using older TLS versions |
| HTTPS Only | Enforces HTTPS instead of unencrypted HTTP |
| Azure App Service | Managed platform for hosting web applications and APIs |
| Azure Policy | Can enforce or audit TLS configuration requirements across resources |

Setting the minimum TLS version to 1.2 prevents TLS connections using older versions, such as TLS 1.0 and TLS 1.1, while allowing newer supported versions. Enable HTTPS Only to prevent unencrypted HTTP access.

**Important:** A minimum TLS version of 1.2 does not mean that only TLS 1.2 is permitted.

**Exam keywords:** TLS, encryption in transit, regulatory compliance, HTTPS, minimum TLS version.

**Precision:** A minimum TLS version of 1.2 also allows higher supported versions; it is not an exact TLS 1.2-only setting.

**Brochure reference:** Chapter 5

---

## Question 034 — Azure Files

Contoso wants to migrate a legacy application to Azure that requires an file share accessible on a UNC path. You need to provide an SMB file share and secure access. The solution should minimize administrative effort. Which service will you use?

- A. OneDrive
- B. SharePoint
- C. Azure VM with a file share
- D. Azure Files

**Correct answer: D. Azure Files**

### Explanation

Azure Files provides fully managed SMB file shares accessible through UNC paths, offering secure access without requiring administration of a dedicated file server.

### Why the other answers are incorrect

- **A. OneDrive:** Designed for personal cloud file storage, synchronization and sharing. It does not provide a native SMB file share for legacy applications.
- **B. SharePoint:** Designed for document management, collaboration and content sharing. It is not a traditional SMB file server.
- **C. Azure VM with a file share:** Can provide an SMB file share accessible through a UNC path, but requires managing the virtual machine, operating system, security updates and file server configuration.

### Key concept to remember

| Service | Main purpose | Native SMB share |
|---|---|---|
| OneDrive | Personal file storage | No |
| SharePoint | Document management and collaboration | No |
| Azure VM with a file share | Self-managed file server | Yes |
| Azure Files | Fully managed cloud file shares | Yes |

UNC (Universal Naming Convention) is a standard format used to access shared network resources.

Example: `\\storageaccount.file.core.windows.net\myshare`

Azure Files is particularly suitable for lift-and-shift migrations of legacy applications that depend on traditional network file shares. It supports secure access through authentication, access permissions and SMB encryption.

**Exam keywords:** SMB, UNC path, legacy application, managed file share, minimal administrative effort.

**Brochure reference:** Chapter 7

---

## Question 035 — Azure Disk Storage

Storage for Azure VMs is hosted in which Azure Storage type?

- A. File
- B. Table
- C. Disk
- D. Blob

**Correct answer: C. Disk**

### Explanation

Azure Disk Storage provides block-level storage for Azure Virtual Machines, including operating system disks and data disks.

### Why the other answers are incorrect

- **A. File:** Provides managed network file shares using SMB or NFS, rather than primary VM disk storage.
- **B. Table:** Provides NoSQL storage for structured, non-relational data using keys and properties.
- **D. Blob:** Provides object storage for unstructured data, such as images, videos and backups. Although legacy unmanaged VM disks used page blobs, Azure Managed Disks are the expected answer for modern Azure VMs.

### Key concept to remember

| Storage type | Main purpose |
|---|---|
| Azure Disk Storage | Virtual machine disks |
| Azure Files | Managed network file shares |
| Azure Table Storage | NoSQL structured data |
| Azure Blob Storage | Unstructured object storage |
| Azure Queue Storage | Asynchronous messages |

- **OS Disk:** Stores the operating system.
- **Data Disk:** Stores application data and other persistent files.
- **Temporary Disk:** Provides nonpersistent storage on supported VM sizes.

Azure Managed Disks simplify storage administration because Microsoft manages the underlying storage infrastructure.

**Exam keywords:** Virtual machines, managed disks, block storage, OS disk, data disk.

**Brochure reference:** Chapter 7

---

## Question 036 — Microsoft Entra ID and Azure Subscriptions

Contoso IT wants to configure separate Azure subscriptions for different environments (production, development, test) and products. Can they associate multiple Azure subscriptions to the same Entra ID tenant?

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

Multiple Azure subscriptions can be associated with the same Microsoft Entra ID tenant, allowing centralized identity and access management across different environments and products.

### Why the other answer is incorrect

- **B. NO:** Microsoft Entra ID does not require a separate tenant for each Azure subscription. An organization can manage multiple subscriptions using the same directory, users and groups while maintaining separate billing and resource management boundaries.

### Key concept to remember

| Concept | Main purpose |
|---|---|
| Microsoft Entra ID Tenant | Identity and directory management |
| Management Group | Governance across multiple subscriptions |
| Subscription | Billing, access and resource management boundary |
| Resource Group | Logical organization of Azure resources |

- One Entra ID tenant can be associated with multiple Azure subscriptions.
- One Azure subscription is associated with only one Entra ID tenant at a time.
- Users can access multiple subscriptions through appropriate Azure RBAC role assignments.

**Exam keywords:** Entra ID tenant, multiple subscriptions, centralized identity management, environment separation.

**Brochure reference:** Chapter 4

---

## Question 037 — Microsoft Purview

Contoso Financial Services regularly creates documents containing sensitive customer data, including personally identifiable information. You need to ensure access is restricted to finance personnel, regardless of where the document travels. Which service should you use to classify and protect these documents?

- A. Microsoft Defender for Cloud Apps
- B. Microsoft Defender for Endpoint
- C. Microsoft Purview
- D. Entra ID Conditional Access

**Correct answer: C. Microsoft Purview**

### Explanation

Microsoft Purview Information Protection uses sensitivity labels, encryption and access permissions to classify and protect sensitive documents, even when shared outside the organization.

### Why the other answers are incorrect

- **A. Microsoft Defender for Cloud Apps:** Provides visibility into cloud application usage, detects threats and helps protect sensitive data in cloud applications. Microsoft Purview is the dedicated solution for document classification and persistent information protection.
- **B. Microsoft Defender for Endpoint:** Protects endpoint devices against malware, vulnerabilities and other security threats. It is not designed to classify sensitive documents.
- **D. Entra ID Conditional Access:** Controls access to applications and resources based on conditions such as identity, location, device compliance and sign-in risk. It does not directly apply persistent protection to individual documents.

### Key concept to remember

| Microsoft service | Main purpose |
|---|---|
| Microsoft Purview | Data governance, classification, protection and compliance |
| Defender for Cloud Apps | Cloud application security |
| Defender for Endpoint | Endpoint security |
| Entra ID Conditional Access | Conditional access to applications and resources |
| Defender for Cloud | Cloud security posture and workload protection |
| Microsoft Sentinel | Security threat detection and response |

Sensitivity labels can classify documents according to confidentiality and apply encryption and access restrictions. For example, a document labeled Confidential — Finance can remain accessible only to authorized finance personnel even after being downloaded or shared externally, when appropriate protection settings are configured.

**Exam keywords:** Sensitive data, PII (Personally Identifiable Information), data classification, sensitivity labels, information protection, compliance.

**Brochure reference:** Chapter 10

---

## Question 038 — Azure Regions

An Azure _____ is a set of datacenters deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network.

- A. Availability Zone
- B. Region
- C. Geography
- D. Datacenter

**Correct answer: B. Region**

### Explanation

An Azure region is a set of datacenters deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network.

### Why the other answers are incorrect

- **A. Availability Zone:** A physically separate location within an Azure region, consisting of one or more datacenters with independent power, cooling and networking.
- **C. Geography:** A geographical market containing one or more Azure regions, designed to address data residency and compliance requirements.
- **D. Datacenter:** A physical facility containing servers, networking equipment and storage infrastructure, rather than a collection of interconnected datacenters.

### Key concept to remember

| Concept | Definition |
|---|---|
| Geography | Contains one or more regions |
| Region | Collection of interconnected datacenters |
| Availability Zone | Physically separate location within a region |
| Datacenter | Physical facility hosting computing infrastructure |

Not all Azure regions support Availability Zones.

**Exam keywords:** Set of datacenters, latency-defined perimeter, dedicated regional network, low latency.

**Brochure reference:** Chapter 4

---

## Question 039 — Azure Storage Redundancy

Which Azure storage redundancy option does Microsoft recommend for maximum redundancy and recoverability?

- A. Locally Redundant Storage (LRS)
- B. Geo-Redundant Storage (GRS)
- C. Zone Redundant Storage (ZRS)
- D. Geo Zone Redundant Storage (GZRS)

**Correct answer: D. Geo Zone Redundant Storage (GZRS)**

### Explanation

GZRS combines replication across Availability Zones in the primary region with replication to a secondary region, providing protection against both zonal and regional failures.

### Why the other answers are incorrect

- **A. Locally Redundant Storage (LRS):** Replicates data three times within a single physical location. It does not protect against the loss of that entire location.
- **B. Geo-Redundant Storage (GRS):** Replicates data to a secondary region but uses locally redundant storage within the primary region rather than distributing copies across Availability Zones.
- **C. Zone Redundant Storage (ZRS):** Replicates data across three Availability Zones within the primary region. However, it does not protect against the loss of the entire region.

### Key concept to remember

| Redundancy | Copies | Zone redundancy | Geo-redundancy |
|---|---:|---|---|
| LRS | 3 | No | No |
| ZRS | 3 | Yes | No |
| GRS | 6 | No | Yes |
| GZRS | 6 | Yes | Yes |

**GZRS = ZRS in the primary region + LRS in the secondary region.**

RA-GRS and RA-GZRS additionally provide read access to the secondary region. Geo-replication is asynchronous, meaning some recent data may be lost during an unexpected regional failure. Replication does not guarantee automatic application failover.

**Exam keywords:** Maximum redundancy, recoverability, Availability Zones, secondary region, disaster recovery.

**Precision:** GZRS is the strongest replication choice listed. RA-GZRS adds read access to the secondary region where supported; it does not add extra replicas.

**Brochure reference:** Chapter 7

---

## Question 040 — Azure Availability Sets

An _____ protects against VM failures due to failures in updates, power, or network connectivity.

- A. Availability Set
- B. Availability Zone
- C. VM scale set
- D. Azure VM

**Correct answer: A. Availability Set**

### Explanation

An Availability Set distributes virtual machines across fault domains and update domains to reduce the impact of hardware failures, power outages, network failures and planned maintenance.

### Why the other answers are incorrect

- **B. Availability Zone:** Protects against datacenter-level failures when resources are distributed across physically separate zones. The question specifically describes fault domains and update domains.
- **C. VM scale set:** Manages and scales groups of virtual machines. It can support high availability configurations, but scaling is its primary purpose.
- **D. Azure VM:** A single virtual machine does not inherently provide redundancy against hardware failures or planned maintenance.

### Key concept to remember

| Concept | Purpose |
|---|---|
| Fault Domain (FD) | Separates VMs across hardware, power and network failure boundaries |
| Update Domain (UD) | Separates VMs into groups for planned maintenance |
| Availability Set | Protects against localized hardware failures and maintenance |
| Availability Zone | Protects against datacenter-level failures when resources are distributed across zones |
| VM Scale Set | Manages and scales multiple virtual machines |

**Comparison with question 023:** Hardware, power, network failures and planned updates point to Availability Sets; entire datacenter failures point to Availability Zones.

An Availability Set requires multiple VMs to provide application-level redundancy; it does not prevent an individual VM from failing.

**Exam keywords:** Fault domains, update domains, planned maintenance, hardware failures, high availability.

**Brochure reference:** Chapter 4

---

## Question 041 — Azure Portal

You need to manage your Azure VMs using the Azure portal. Which URL would you use to manage the Azure VMs?

- A. https://portal.azurewebsites.net
- B. https://portal.microsoft.com
- C. https://portal.azure.microsoft.com
- D. https://portal.azure.com

**Correct answer: D. https://portal.azure.com**

### Explanation

The Azure portal is a web-based graphical interface accessible at `https://portal.azure.com`, allowing users to create, configure and manage Azure resources.

### Why the other answers are incorrect

- **A. https://portal.azurewebsites.net:** The `azurewebsites.net` domain is typically used for applications hosted on Azure App Service, not for the Azure management portal.
- **B. https://portal.microsoft.com:** This is not the official URL for managing Azure resources through the Azure portal.
- **C. https://portal.azure.microsoft.com:** This is not the official Azure portal address.

### Key concept to remember

| Management tool | Main purpose |
|---|---|
| Azure Portal | Web-based graphical resource management |
| Azure CLI | Command-line resource management |
| Azure PowerShell | Resource management using PowerShell cmdlets |
| Azure Cloud Shell | Browser-based command-line environment |
| Azure Mobile App | Monitoring and managing resources from mobile devices |

The Azure portal allows administrators to manage virtual machines, storage accounts, virtual networks, subscriptions and other Azure resources without installing management tools locally.

**Official Azure portal:** [https://portal.azure.com](https://portal.azure.com)

**Exam keywords:** Azure Portal, graphical user interface (GUI), browser-based management, resource administration.

**Brochure reference:** Chapter 11

---

## Question 042 — Microsoft Entra Domain Services

A legacy application requires LDAP and domain join without managing domain controllers. Which service meets this need?

- A. Microsoft Entra Domain Services
- B. Azure Functions
- C. Azure DNS
- D. Azure Advisor

**Correct answer: A. Microsoft Entra Domain Services**

### Explanation

Entra Domain Services supplies managed domain capabilities. Functions runs code; DNS resolves names; Advisor recommends improvements.

### Key concept to remember

Entra Domain Services supplies managed domain capabilities.

**Brochure reference:** Chapter 8

---

## Question 043 — Azure Application Insights

You can monitor health and performance of microservices applications running on Azure Kubernetes Service (AKS) with:

- A. Azure Monitor
- B. Azure App Insights
- C. Azure Sentinel
- D. Microsoft Defender for Cloud

**Correct answer: B. Azure App Insights**

### Explanation

Azure Application Insights monitors the health and performance of applications, including microservices running on AKS, by collecting application telemetry and tracking dependencies.

### Why the other answers are incorrect

- **A. Azure Monitor:** Provides comprehensive infrastructure and application monitoring. Application Insights is a feature of Azure Monitor and is the more specific answer for application performance monitoring.
- **C. Azure Sentinel:** Now called Microsoft Sentinel, it is a SIEM and SOAR solution for detecting, investigating and responding to security threats rather than monitoring application performance.
- **D. Microsoft Defender for Cloud:** Focuses on cloud security posture, vulnerability assessment and workload protection rather than application performance monitoring.

### Key concept to remember

| Monitoring tool | Main purpose |
|---|---|
| Azure Monitor | Comprehensive resource and application monitoring |
| Container Insights | Kubernetes clusters, nodes and containers |
| Application Insights | Application health and performance |
| Log Analytics | Log analysis using KQL |
| Microsoft Sentinel | Security threat detection and response |
| Microsoft Defender for Cloud | Cloud security and workload protection |

Application Insights provides application performance monitoring (APM), including request response times, exceptions, failure rates, dependency tracking and distributed tracing.

**Comparison with question 025:** For AKS cluster health and availability, choose Azure Monitor (Container Insights). For microservices application health and performance, choose Application Insights. Application Insights belongs to Azure Monitor, so both are related, but the former is more specific here.

**Exam keywords:** Microservices, application performance, APM, application telemetry, distributed tracing.

**Brochure reference:** Chapter 12

---

## Question 044 — Azure Blob Storage

You need to store unstructured data, such as images, video files, social media posts on Azure Storage. Which type of Azure Storage is optimized for storage of large amounts of unstructured data?

- A. Table Storage
- B. Queue Storage
- C. Disk Storage
- D. Blob Storage

**Correct answer: D. Blob Storage**

### Explanation

Azure Blob Storage is optimized for storing large amounts of unstructured data, such as images, videos, documents and social media content.

### Why the other answers are incorrect

- **A. Table Storage:** Provides NoSQL storage for structured, non-relational data organized into entities and properties. It is not optimized for storing large multimedia files.
- **B. Queue Storage:** Stores messages for asynchronous communication between application components. It is not designed for storing images or videos.
- **C. Disk Storage:** Provides block-level storage for Azure Virtual Machines, including operating system disks and data disks. It is not primarily designed for large-scale object storage.

### Key concept to remember

| Storage service | Main purpose |
|---|---|
| Blob Storage | Unstructured object storage |
| Table Storage | NoSQL structured data |
| Queue Storage | Asynchronous messages |
| Disk Storage | Virtual machine disks |
| Azure Files | Managed network file shares |

BLOB (Binary Large Object) refers to an object containing data such as multimedia files, documents or backups.

Azure Blob Storage supports different access tiers (Hot, Cool, Cold and Archive) to optimize costs according to data access frequency.

**Exam keywords:** Unstructured data, object storage, multimedia files, massive storage capacity, access tiers.

**Brochure reference:** Chapter 7

---

## Question 045 — Azure Advisor

Contoso IT has deployed a group of Azure VMs for hosting production. They want best practices recommendations for high availability of their VM resources. Will the Azure Advisor tool provide recommendations for these existing resources?

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

Azure Advisor analyzes existing Azure resources and provides personalized best-practice recommendations, including recommendations to improve the high availability and reliability of virtual machines.

### Why the other answers are incorrect

- **B. NO:** Azure Advisor is specifically designed to analyze deployed Azure resources and identify opportunities for improvement. It can recommend changes to existing virtual machine configurations to improve reliability and reduce the risk of downtime.

### Key concept to remember

Azure Advisor provides recommendations across five categories:

| Category | Purpose |
|---|---|
| Reliability | Improve availability and resilience |
| Security | Improve resource security |
| Performance | Optimize resource performance |
| Cost | Reduce unnecessary Azure expenses |
| Operational Excellence | Improve resource management and operational efficiency |

| Service | Main purpose |
|---|---|
| Azure Advisor | Personalized best-practice recommendations |
| Azure Monitor | Collect and analyze metrics and logs |
| Azure Service Health | Report Azure service incidents and planned maintenance |
| Azure Resource Health | Report the health of individual resources |
| Azure Policy | Enforce configuration and compliance requirements |

Azure Advisor analyzes existing resources and recommends improvements. It does not automatically implement all recommended changes.

**Exam keywords:** Best practices, personalized recommendations, existing resources, high availability, reliability, optimization.

**Brochure reference:** Chapter 12

---

## Question 046 — Azure Application Insights

The Contoso IT Operations team needs to monitor their customer-facing web apps for performance anomalies. Which Azure service will best fulfill this need?

- A. Azure WebJobs
- B. Azure Application Insights
- C. Azure Automation
- D. Azure Sentinel

**Correct answer: B. Azure Application Insights**

### Explanation

Azure Application Insights monitors application performance and can automatically detect anomalies, such as unusual response times, increased failure rates and application errors.

### Why the other answers are incorrect

- **A. Azure WebJobs:** Executes background tasks and scripts within Azure App Service. It is not designed to monitor application performance or detect anomalies.
- **C. Azure Automation:** Automates IT operations, administrative tasks and infrastructure management through runbooks. It is not an application performance monitoring solution.
- **D. Azure Sentinel:** Now called Microsoft Sentinel, it provides security threat detection, investigation and response rather than application performance monitoring.

### Key concept to remember

Application Insights is an Application Performance Monitoring (APM) feature of Azure Monitor.

| Monitoring capability | Purpose |
|---|---|
| Response times | Identify slow application requests |
| Failure rates | Detect unsuccessful requests |
| Exception tracking | Identify application errors |
| Dependency tracking | Monitor external services and databases |
| Smart Detection | Automatically identify abnormal application behavior |
| Availability tests | Verify application accessibility |

| Service | Main purpose |
|---|---|
| Azure Monitor | Comprehensive resource monitoring |
| Application Insights | Application performance and anomalies |
| Log Analytics | Log queries and analysis using KQL |
| Microsoft Sentinel | Security threat detection |
| Azure Advisor | Best-practice recommendations |

The decisive clues are **customer-facing web apps** and **performance anomalies**.

**Exam keywords:** APM, performance anomalies, application telemetry, Smart Detection, response times, exceptions.

**Brochure reference:** Chapter 12

---

## Question 047 — Azure Automation

You need to automate responses to some alerts from Azure Monitor. Which service supports automating responses and corrective actions in this scenario?

- A. Power Automate
- B. Azure Logic Apps
- C. Azure Web Jobs
- D. Azure Automation

**Correct answer: D. Azure Automation**

### Explanation

Azure Automation can execute runbooks in response to Azure Monitor alerts, automating corrective actions and reducing manual intervention.

### Why the other answers are incorrect

- **A. Power Automate:** Primarily designed for business process automation rather than infrastructure remediation.
- **B. Azure Logic Apps:** Can also respond to Azure Monitor alerts through action groups and execute automated workflows. However, Azure Automation is more specifically suited to IT operations and infrastructure corrective actions.
- **C. Azure Web Jobs:** Executes background tasks and scripts within Azure App Service rather than providing a dedicated infrastructure remediation service.

### Key concept to remember

| Azure service | Main purpose |
|---|---|
| Azure Monitor | Monitoring resources and generating alerts |
| Azure Automation | Automated IT operations and corrective actions |
| Azure Logic Apps | Workflow automation and system integration |
| Azure Functions | Serverless code execution |
| Power Automate | Business process automation |

Azure Automation uses **runbooks**, which contain scripts or automation instructions written using languages such as PowerShell or Python.

Example: Azure Monitor detects a problem → an alert triggers an action group → Azure Automation executes a runbook → the runbook restarts a virtual machine.

**Exam nuance:** Both Azure Automation and Azure Logic Apps can respond to Azure Monitor alerts. Azure Automation is the expected answer when the emphasis is on IT operations and corrective actions, although the wording is not entirely unambiguous.

**Exam keywords:** Runbooks, automated remediation, corrective actions, Azure Monitor alerts, IT operations.

**Brochure reference:** Chapter 11

---

## Question 048 — Azure Monitor

The Contoso IT Operations team needs to aggregate events from a large number of resources hosted in Azure for correlation, alerting, and reporting. Which Azure service would you use to centrally collect, store, and act on events?

- A. Azure App Insights
- B. Azure Monitor
- C. Azure Data Lake
- D. Azure Event Hub

**Correct answer: B. Azure Monitor**

### Explanation

Azure Monitor centrally collects, stores and analyzes telemetry from multiple Azure resources, enabling event correlation, alerting and reporting.

### Why the other answers are incorrect

- **A. Azure App Insights:** Focuses on application performance monitoring, including response times, exceptions and dependencies. It is a feature of Azure Monitor rather than the broader centralized monitoring solution.
- **C. Azure Data Lake:** Provides scalable storage for large amounts of data used in analytics. It does not directly provide integrated resource monitoring, alerting and automated responses.
- **D. Azure Event Hub:** Designed for high-throughput event ingestion and real-time data streaming. It does not independently provide the comprehensive monitoring, correlation and alerting capabilities of Azure Monitor.

### Key concept to remember

| Azure Monitor component | Main purpose |
|---|---|
| Metrics | Collect numerical performance measurements |
| Log Analytics | Query and correlate logs using KQL |
| Application Insights | Monitor application performance |
| Alerts | Detect problems and trigger notifications |
| Action Groups | Execute configured responses |
| Workbooks | Visualize data and create reports |

Azure Monitor is the comprehensive monitoring platform that brings these capabilities together. Log Analytics workspaces provide centralized log storage and Log Analytics enables querying and correlation.

**Exam keywords:** Centralized monitoring, event correlation, telemetry, alerting, reporting, metrics and logs.

**Brochure reference:** Chapter 12

---

## Question 049 — Azure Monitor Alerts

You need to alert on service failures in your Azure services, such as web app instances hosted in App Service, and Azure VMs that stop running for any reason. Which tool should you use?

- A. Azure App Insights
- B. Azure Log Analytics
- C. Azure Monitor
- D. Microsoft Defender for Cloud

**Correct answer: C. Azure Monitor**

### Explanation

Azure Monitor allows administrators to configure alerts that detect service failures, resource availability issues and unexpected changes in the operational state of Azure resources.

### Why the other answers are incorrect

- **A. Azure App Insights:** Focuses on application performance, availability, exceptions and dependencies. It is not the comprehensive solution for monitoring both virtual machines and Azure App Service resources.
- **B. Azure Log Analytics:** Allows administrators to query and analyze collected logs using KQL. Although these queries can be used in alert rules, Azure Monitor provides the broader alerting functionality.
- **D. Microsoft Defender for Cloud:** Focuses on security posture, vulnerability assessment and workload protection rather than general resource availability and operational failures.

### Key concept to remember

| Azure Monitor component | Main purpose |
|---|---|
| Alert Rules | Detect specified conditions or failures |
| Action Groups | Send notifications or trigger automated actions |
| Metrics | Monitor numerical performance indicators |
| Log Analytics | Query and analyze logs |
| Application Insights | Monitor application performance |
| Resource Health | Report the health of individual Azure resources |

Azure Monitor alerts can use metrics, logs and Activity Log events to detect different types of failures. Appropriate alert rules must be configured for the desired failure scenarios.

**Exam distinction:** Application Insights focuses on application-level monitoring, whereas Azure Monitor provides centralized monitoring and alerting across different resource types.

**Exam keywords:** Service failures, resource availability, alert rules, action groups, centralized monitoring.

**Brochure reference:** Chapter 12

---

## Question 050 — Microsoft Defender for Cloud

You can find recommendations for security best practices security configuration for Azure Kubernetes Service (AKS) with:

- A. Azure Monitor
- B. Azure App Insights
- C. Microsoft Sentinel
- D. Microsoft Defender for Cloud

**Correct answer: D. Microsoft Defender for Cloud**

### Explanation

Microsoft Defender for Cloud assesses AKS security configurations and provides recommendations to improve their security posture.

### Why the other answers are incorrect

- **A. Azure Monitor:** Monitors resource health, availability and performance through metrics and logs rather than primarily providing security configuration recommendations.
- **B. Azure App Insights:** Focuses on application performance, response times, exceptions and dependencies.
- **C. Microsoft Sentinel:** Provides security threat detection, investigation and automated incident response through SIEM and SOAR capabilities rather than primarily assessing AKS security configurations against best practices.

### Key concept to remember

| Service | Main purpose |
|---|---|
| Azure Monitor | Resource health and performance monitoring |
| Application Insights | Application performance monitoring |
| Microsoft Sentinel | Security threat detection and incident response |
| Microsoft Defender for Cloud | Security posture, recommendations and workload protection |

**Comparison with previous AKS questions:**

| Question | Requirement | Correct service |
|---|---|---|
| 025 | Cluster health and availability | Azure Monitor |
| 043 | Microservices performance | Application Insights |
| 050 | Security best practices | Defender for Cloud |

Microsoft Defender for Cloud provides Cloud Security Posture Management (CSPM) and workload protection capabilities. Defender for Containers provides additional security capabilities for Kubernetes environments.

**Exam keywords:** Security recommendations, security posture, best practices, AKS, vulnerability assessment, CSPM.

**Brochure reference:** Chapter 8

---

## Question 051 — Azure Virtual Networks

Azure VMs in different virtual networks can communicate by default

- A. TRUE
- B. FALSE

**Correct answer: B. FALSE**

### Explanation

Azure Virtual Networks (VNets) are isolated from each other by default. Additional connectivity must be configured for private communication between VMs in different VNets.

### Why the other answer is incorrect

- **A. TRUE:** VMs in different VNets cannot communicate privately by default, even if they share a subscription, resource group or region. A connectivity solution such as Virtual Network Peering or VPN Gateway must be configured.

### Key concept to remember

| Scenario | Private communication |
|---|---|
| VMs in the same subnet | Allowed by default |
| VMs in different subnets of the same VNet | Allowed by default |
| VMs in different VNets | Not allowed by default |
| VMs in peered VNets | Allowed with appropriate peering and security configuration |

Virtual Network Peering connects VNets privately through Microsoft's backbone network without requiring traffic to traverse the public Internet. Network Security Groups (NSGs) and other security configurations can restrict communication even when connectivity exists.

**Exam keywords:** VNet isolation, Virtual Network Peering, private connectivity, network communication.

**Brochure reference:** Chapter 6

---

## Question 052 — Windows Hello for Business

Which Microsoft solution provides support for passwordless authentication on Windows 10 and 11 systems?

- A. Entra ID Conditional Access
- B. Microsoft Authenticator
- C. Windows Hello for Business
- D. Microsoft Purview

**Correct answer: C. Windows Hello for Business**

### Explanation

Windows Hello for Business provides passwordless authentication on Windows 10 and Windows 11 using biometrics or a device-specific PIN combined with cryptographic credentials.

### Why the other answers are incorrect

- **A. Entra ID Conditional Access:** Enforces access policies based on conditions such as user identity, location, device compliance and sign-in risk. It is not itself a passwordless authentication method.
- **B. Microsoft Authenticator:** Supports MFA and passwordless authentication using a mobile device. However, Windows Hello for Business is specifically designed for authentication on Windows devices.
- **D. Microsoft Purview:** Focuses on data governance, information protection, classification and regulatory compliance rather than user authentication.

### Key concept to remember

| Microsoft solution | Main purpose |
|---|---|
| Windows Hello for Business | Passwordless authentication on Windows devices |
| Microsoft Authenticator | Mobile-based MFA and passwordless authentication |
| FIDO2 security keys | Passwordless authentication using security keys |
| Conditional Access | Enforcing access conditions and requirements |
| Microsoft Purview | Data protection and compliance |

Windows Hello for Business supports facial recognition, fingerprint recognition and device-specific PINs. Unlike a traditional password, the PIN is tied to a specific device and is not transmitted to the authentication server.

**Exam distinction:** Windows Hello for Business and Microsoft Authenticator both support passwordless authentication, but the decisive clue here is **Windows 10 and Windows 11 systems**.

**Exam keywords:** Passwordless authentication, biometrics, PIN, Windows 10/11, cryptographic credentials.

**Brochure reference:** Chapter 8

---

## Question 053 — Network Security Groups (NSGs)

You have deployed an Azure VM hosting a line-of-business web application. You need to provide access to the application over the Internet via HTTP/S. You add a security rule to the Network Security Group (NSG) to allow inbound traffic from the Internet. Does this solution meet the requirement?

- A. YES
- B. NO

**Expected answer: A. YES**

### Explanation

An NSG can allow inbound HTTP and HTTPS traffic on TCP ports 80 and 443, provided the VM already has public connectivity.

### Why the other answer is incorrect

- **B. NO:** NSGs support inbound rules allowing Internet traffic. However, NO is defensible if the VM lacks a public endpoint or the application is not configured to accept the traffic. The question does not specify these prerequisites.

### Key concept to remember

| Protocol | Default port |
|---|---:|
| HTTP | 80 |
| HTTPS | 443 |
| SSH | 22 |
| RDP | 3389 |

NSGs filter inbound and outbound traffic based on source, destination, port, protocol and priority. They can be associated with subnets or network interfaces.

An NSG does not provide a public IP address, configure a web server or open the guest OS firewall. Public connectivity, appropriate security rules and a listening application are all required. The expected answer assumes these other prerequisites are already met; otherwise the NSG rule alone is insufficient.

**Exam keywords:** NSG, inbound traffic, security rules, HTTP/HTTPS, TCP ports, network filtering.

**Brochure reference:** Chapter 6

---

## Question 054 — Azure Firewall

Contoso IT has deployed multiple Azure VM across 15 virtual networks. How can you most securely limit inbound traffic and protect these VMs from unwanted inbound requests? (choose the best answer)

- A. Create a network security group (NSG)
- B. Deploy an Azure Firewall
- C. Deploy an Azure Load Balancer
- D. Deploy a virtual network gateway

**Expected answer: B. Deploy an Azure Firewall**

### Explanation

Azure Firewall provides centralized network security and advanced traffic filtering across multiple virtual networks when connectivity and routing are appropriately configured.

### Why the other answers are incorrect

- **A. Create a network security group (NSG):** Filters inbound and outbound traffic by IP address, port and protocol. NSGs can protect VMs, but Azure Firewall offers more comprehensive centralized protection across multiple networks.
- **C. Deploy an Azure Load Balancer:** Distributes traffic across resources to improve availability and scalability rather than providing comprehensive firewall protection.
- **D. Deploy a virtual network gateway:** Establishes connectivity between networks, rather than providing centralized traffic filtering.

### Key concept to remember

| Feature | NSG | Azure Firewall |
|---|---|---|
| Stateful network filtering | Yes | Yes |
| Application-level filtering | No | Yes |
| Threat intelligence filtering | No | Supported |
| Centralized firewall protection | No | Yes |
| Applied to | Subnets or network interfaces | Configured network traffic paths |

Basic inbound and outbound filtering points to NSGs; advanced centralized network protection across multiple VNets points to Azure Firewall. Both can be combined in a defense-in-depth architecture. Azure Firewall does not automatically protect every VNet merely by being deployed: appropriate connectivity and routing are required. NSGs are also a valid way to restrict inbound traffic, but the scale and security emphasis make Azure Firewall the expected best answer.

**Exam keywords:** Centralized security, multiple virtual networks, inbound traffic, advanced filtering, threat intelligence.

**Brochure reference:** Chapter 6

---

## Question 055 — Azure Policy

You need to define and enforce corporate standards for new and existing Azure resource deployments in all of Contoso's Azure subscriptions. What should you use to meet this objective?

- A. Azure Policy
- B. Microsoft Defender for Cloud
- C. Microsoft Sentinel
- D. Azure Advisor

**Correct answer: A. Azure Policy**

### Explanation

Azure Policy defines and enforces corporate standards, evaluates existing resources for compliance and can prevent non-compliant deployments.

### Why the other answers are incorrect

- **B. Microsoft Defender for Cloud:** Assesses security posture and provides security recommendations and regulatory compliance assessments, but Azure Policy is the primary service for enforcing general resource configuration standards.
- **C. Microsoft Sentinel:** Provides security threat detection, investigation and incident response through SIEM and SOAR capabilities, rather than enforcing deployment standards.
- **D. Azure Advisor:** Provides personalized best-practice recommendations for existing resources but does not enforce mandatory configurations.

### Key concept to remember

Assign Azure Policy at management group level to apply standards across descendant subscriptions, subject to exclusions. Policies can also be assigned at subscription and resource group scopes.

| Azure Policy effect | Purpose |
|---|---|
| Deny | Prevent non-compliant deployments |
| Audit | Identify non-compliant resources |
| Modify | Modify supported resource properties |
| DeployIfNotExists | Deploy required configurations or related resources |

Examples include restricting allowed regions, requiring tags, limiting VM sizes and requiring secure configurations. Existing non-compliant resources are not automatically corrected by every policy; remediation tasks may be required.

| Service | Main purpose |
|---|---|
| Azure Policy | Enforce resource configuration standards |
| Azure RBAC | Control who can perform actions |
| Azure Advisor | Recommend improvements |
| Resource Locks | Prevent accidental deletion or modification |
| Defender for Cloud | Improve security posture |

**Exam keywords:** Corporate standards, governance, compliance, enforce, existing and new resources, policy inheritance.

**Brochure reference:** Chapter 10

---

## Question 056 — Microsoft Entra ID Protection

Tailspin Toys relies heavily on Entra ID for cloud identity. They want to more effectively protect their identities from external threats. Which service should they choose?

- A. Azure Identity Protection
- B. Microsoft Defender for Endpoint
- C. Azure DDoS
- D. Microsoft Information Protection

**Correct answer: A. Azure Identity Protection**

### Explanation

Azure Identity Protection, now Microsoft Entra ID Protection, detects identity-related risks and enables automated responses to compromised accounts and suspicious sign-ins.

### Why the other answers are incorrect

- **B. Microsoft Defender for Endpoint:** Protects endpoint devices against malware, vulnerabilities and other threats rather than primarily detecting compromised Entra ID identities.
- **C. Azure DDoS:** Protects network resources against Distributed Denial-of-Service attacks, not compromised user credentials.
- **D. Microsoft Information Protection:** Classifies, labels and protects sensitive information through capabilities now included in Microsoft Purview, rather than detecting identity risks.

### Key concept to remember

| Risk type | Description |
|---|---|
| User risk | Probability that a user's identity has been compromised |
| Sign-in risk | Probability that an authentication request is unauthorized |

Entra ID Protection detects risks such as leaked credentials and suspicious sign-ins. Risk-based Conditional Access policies can require MFA, secure password changes or block access, depending on the configuration.

| Service | Main purpose |
|---|---|
| Entra ID Protection | Detect identity-related risks |
| Conditional Access | Enforce access decisions based on conditions and risks |
| Defender for Endpoint | Protect endpoint devices |
| Azure DDoS Protection | Protect against network flooding attacks |
| Microsoft Purview | Protect sensitive information |

Full Entra ID Protection capabilities and risk-based Conditional Access policies require Microsoft Entra ID P2.

**Exam keywords:** Identity protection, compromised credentials, risky users, risky sign-ins, identity threats, risk-based authentication.

**Brochure reference:** Chapter 8

---

## Question 057 — Azure Virtual Network Gateway

In a Site-to-Site VPN, the____ is the cross-premises gateway that connects your Azure Virtual Network with your on-premises VPN appliances

- A. Azure Application Gateway
- B. Azure Virtual Network Gateway
- C. Local Network Gateway
- D. Private Endpoint

**Correct answer: B. Azure Virtual Network Gateway**

### Explanation

An Azure Virtual Network Gateway configured as a VPN gateway establishes an encrypted Site-to-Site VPN connection between an Azure Virtual Network and an on-premises VPN device.

### Why the other answers are incorrect

- **A. Azure Application Gateway:** Provides application-level load balancing for HTTP and HTTPS traffic. It does not establish Site-to-Site VPN connections.
- **C. Local Network Gateway:** Represents the on-premises network in Azure, including the VPN device's public IP address or hostname and network address ranges. It does not itself establish the VPN tunnel.
- **D. Private Endpoint:** Provides private access to supported services through a private IP address within a virtual network. It does not connect entire on-premises networks to Azure.

### Key concept to remember

| Component | Main purpose |
|---|---|
| Virtual Network Gateway | Azure-side gateway establishing connectivity |
| Local Network Gateway | Represents the remote on-premises network configuration |
| On-premises VPN device | Physical or virtual VPN appliance |
| Application Gateway | HTTP/HTTPS load balancing |
| Private Endpoint | Private access to a specific service |

A Site-to-Site VPN connects the on-premises VPN device to the Azure VPN gateway through an encrypted IPsec/IKE tunnel over the public Internet.

A Virtual Network Gateway can be configured for VPN or ExpressRoute connectivity. In this scenario, the gateway type is VPN. The Local Network Gateway is a configuration resource, not an actual VPN appliance.

**Exam keywords:** Site-to-Site VPN, cross-premises connectivity, Virtual Network Gateway, Local Network Gateway, IPsec/IKE.

**Brochure reference:** Chapter 6

---

## Question 058 — Azure Resource Locks

You need to prevent accidental deletion of Azure resources in your subscription. Which feature will meet this requirement? (choose the best answer)

- A. RBAC
- B. Resource Locks
- C. Security groups
- D. Azure policies

**Correct answer: B. Resource Locks**

### Explanation

Azure Resource Locks prevent accidental deletion or modification of Azure resources, even when users have sufficient RBAC permissions to perform these operations.

### Why the other answers are incorrect

- **A. RBAC:** Controls which users can access Azure resources and which actions they can perform. Users with sufficient permissions could still accidentally delete resources.
- **C. Security groups:** Organize users into groups to simplify access and permission management. They do not directly prevent accidental resource deletion.
- **D. Azure policies:** Enforce corporate configuration standards and evaluate resource compliance. Resource Locks are the dedicated feature for preventing accidental deletion or modification.

### Key concept to remember

| Lock type | Read | Modify | Delete |
|---|---|---|---|
| CanNotDelete | Yes | Yes | No |
| ReadOnly | Yes | No | No |

Resource Locks can be applied at subscription, resource group or individual resource level. Locks are inherited by resources within the locked scope.

| Feature | Main purpose |
|---|---|
| Azure RBAC | Control who can perform actions |
| Azure Policy | Enforce resource configuration standards |
| Resource Locks | Prevent accidental deletion or modification |

Resource Locks apply to management-plane operations, not data-plane operations. Authorized users must remove the applicable lock before performing a prohibited management operation.

**Exam keywords:** Accidental deletion, resource protection, CanNotDelete, ReadOnly, lock inheritance.

**Brochure reference:** Chapter 10

---

## Question 059 — Azure Policy

You are responsible for creating Azure resources at Contoso using ARM templates. You need to ensure Azure resources are only created in approved regions. What should you use to enforce this requirement

- A. Azure locks
- B. Azure Policy
- C. Azure Blueprint
- D. Microsoft Defender for Cloud

**Correct answer: B. Azure Policy**

### Explanation

Azure Policy allows organizations to restrict resource deployments to approved Azure regions using the built-in **Allowed locations** policy and the Deny effect.

### Why the other answers are incorrect

- **A. Azure locks:** Prevent accidental deletion or modification of existing resources. They cannot restrict the geographical regions where resources are deployed.
- **C. Azure Blueprint:** Designed to standardize environment deployments by combining policies, role assignments and ARM templates. However, Azure Policy is the actual mechanism that enforces location restrictions.
- **D. Microsoft Defender for Cloud:** Assesses security posture, identifies vulnerabilities and provides security recommendations. It is not the dedicated service for enforcing allowed deployment regions.

### Key concept to remember

| Feature | Main purpose |
|---|---|
| Azure Policy | Enforce resource configuration standards |
| ARM Templates | Automate consistent resource deployments |
| Azure RBAC | Control who can perform actions |
| Resource Locks | Prevent accidental deletion or modification |
| Defender for Cloud | Improve cloud security posture |

Common Azure Policy use cases include restricting allowed regions, enforcing resource tags, restricting VM sizes and requiring secure configurations.

Azure Policy applies regardless of the deployment method: Azure Portal, Azure CLI, PowerShell, ARM templates or Bicep. For example, a policy allowing Switzerland North and West Europe can deny deployments in East US for applicable resource types.

**Exam keywords:** Approved regions, allowed locations, corporate standards, governance, compliance, Deny effect.

**Brochure reference:** Chapter 10

---

## Question 060 — Azure RBAC and Permission Inheritance

Contoso IT assigns permissions at the resource group level for all resources deployed to Azure. Will resources in the resource group inherit permissions assigned to the resource group?

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

Azure RBAC permissions assigned at the resource group level are inherited by the resources within that resource group, simplifying access management.

### Why the other answer is incorrect

- **B. NO:** Azure RBAC follows a hierarchical scope model. Role assignments at a higher scope are inherited by lower scopes, so permissions assigned to a resource group also apply to its resources without requiring individual role assignments.

### Key concept to remember

| RBAC assignment scope | Permissions apply to |
|---|---|
| Management Group | Descendant subscriptions and resources |
| Subscription | All resource groups and resources within it |
| Resource Group | All resources within the group |
| Resource | The specific resource |

**Example:** A user assigned the Contributor role at resource group level can manage resources within that group without a separate role assignment for each resource, subject to applicable restrictions.

Permission inheritance works downwards, not upwards. Permissions assigned to an individual resource do not automatically grant access to its parent resource group.

The principle of least privilege recommends assigning only the necessary permissions at the narrowest appropriate scope.

**Exam keywords:** Azure RBAC, permission inheritance, role assignments, scope, resource hierarchy, least privilege.

**Brochure reference:** Chapter 4

---

## Question 061 — Hybrid Identity Protection

Contoso has implemented a hybrid, synchronized identity model, consisting of on-premises Active Directory and Entra ID. They want to more effectively protect their on-premises identities from external threats. Which service should they choose?

- A. Azure Identity Protection
- B. Microsoft Defender for Endpoint
- C. Azure DDoS
- D. Microsoft Information Protection

**Correct answer according to the quiz: B. Microsoft Defender for Endpoint**

### Explanation

Microsoft Defender for Endpoint protects endpoint devices, including supported on-premises servers, against threats through detection, investigation and response. The quiz marks B as correct. However, Microsoft Defender for Identity is the more appropriate service specifically for on-premises Active Directory identity threats, and is missing from the choices.

### Why the other answers are incorrect

- **A. Azure Identity Protection:** Now called Microsoft Entra ID Protection. Detects cloud identity risks and suspicious sign-ins, including those involving synchronized identities, rather than specifically monitoring on-premises Active Directory threats.
- **C. Azure DDoS:** Protects network resources against distributed denial-of-service attacks, not compromised identities.
- **D. Microsoft Information Protection:** Classifies and protects sensitive information through labels, encryption and access restrictions rather than detecting identity threats.

### Key concept to remember

| Service | Main purpose |
|---|---|
| Microsoft Entra ID Protection | Cloud identity risk detection |
| Microsoft Defender for Identity | Active Directory identity threat detection |
| Microsoft Defender for Endpoint | Endpoint protection |
| Microsoft Defender for Cloud | Cloud security posture and workload protection |
| Microsoft Purview | Sensitive information protection |
| Azure DDoS Protection | Protection against network flooding attacks |

Entra ID Protection detects risky users and sign-ins, including those involving synchronized identities. Defender for Identity detects threats such as lateral movement and attacks targeting Active Directory.

**Exam nuance:** B is the expected answer confirmed by the quiz correction screenshot. For protecting on-premises Active Directory identities specifically, remember Microsoft Defender for Identity, which is not offered in this question.

**Exam keywords:** Hybrid identity, synchronized identities, Active Directory, identity threats, identity protection.

**Brochure reference:** Chapter 8

---

## Question 062 — Microsoft Entra Conditional Access

You need to implement multi-factor authentication for your Entra ID users. However, you only want to prompt for an additional authentication factor when users are not in a trusted location on an unmanaged device. Which feature should you implement? (choose the best answer)

- A. Microsoft Purview
- B. Identity Protection
- C. Conditional Access
- D. Privileged Identity Management

**Correct answer: C. Conditional Access**

### Explanation

Microsoft Entra Conditional Access allows organizations to require multi-factor authentication (MFA) based on specific conditions, such as user location and device management status.

### Why the other answers are incorrect

- **A. Microsoft Purview:** Focuses on data governance, information protection, classification and regulatory compliance. It does not control authentication requirements based on location or device status.
- **B. Identity Protection:** Detects identity-related risks, such as compromised credentials and suspicious sign-ins. It integrates with Conditional Access, which enforces contextual authentication requirements.
- **D. Privileged Identity Management (PIM):** Provides just-in-time and time-limited access to privileged roles rather than enforcing contextual MFA requirements for general users.

### Key concept to remember

Conditional Access uses an **If-Then** approach to enforce access requirements.

| Conditional Access signal | Example |
|---|---|
| User identity | Specific users or groups |
| Location | Trusted IP addresses or countries |
| Device status | Managed or compliant devices |
| Application | Application being accessed |
| Sign-in risk | Suspicious authentication attempt |
| User risk | Potentially compromised identity |

Conditional Access can block access, require MFA or require a compliant device. For this scenario, a policy can target untrusted locations and unmanaged devices, requiring MFA when both conditions apply. Other applicable policies may independently require MFA.

| Feature | Main purpose |
|---|---|
| Conditional Access | Enforce contextual access requirements |
| Identity Protection | Detect identity-related risks |
| MFA | Require multiple authentication factors |
| PIM | Manage privileged access |
| Microsoft Purview | Protect sensitive information |

**Licensing:** Conditional Access requires Microsoft Entra ID P1 or higher. Risk-based Conditional Access requires P2.

**Exam keywords:** Conditional Access, contextual MFA, trusted locations, unmanaged devices, If-Then policies.

**Brochure reference:** Chapter 8

---

## Question 063 — Microsoft Entra Conditional Access

The Contoso Security team has implemented a new security policy. When users connect from an outside corporate offices, they must be prompted for MFA. Which feature will you implement?

- A. Entra ID Privileged Identity Management
- B. One Time Passwords (OTP)
- C. Entra ID Identity Protection
- D. Entra ID Conditional Access

**Correct answer: D. Entra ID Conditional Access**

### Explanation

Microsoft Entra Conditional Access allows organizations to require multi-factor authentication (MFA) when users sign in from outside trusted corporate locations.

### Why the other answers are incorrect

- **A. Entra ID Privileged Identity Management:** Provides just-in-time and time-limited access to privileged roles rather than enforcing location-based authentication requirements.
- **B. One Time Passwords (OTP):** Provides temporary authentication codes that can be used as an additional authentication factor, but does not determine when additional authentication is required.
- **C. Entra ID Identity Protection:** Detects identity-related risks, such as compromised credentials and suspicious sign-ins. Conditional Access enforces MFA based on location.

### Key concept to remember

| Feature | Main purpose |
|---|---|
| Conditional Access | Determine when additional authentication is required |
| MFA | Verify identity using multiple authentication factors |
| OTP | Provide a temporary authentication code |
| Identity Protection | Detect identity-related risks |
| PIM | Manage privileged administrative access |

Conditional Access supports **Named Locations**, which allow administrators to define locations using public IP address ranges or geographical locations. Corporate network IP ranges can be marked as trusted and excluded from a policy requiring MFA outside the office. Other applicable policies may still require MFA inside the office.

**Comparison with question 062:** Both questions involve enforcing MFA based on specific conditions rather than requiring it for every sign-in.

**Licensing:** Microsoft Entra ID P1 or higher is required for Conditional Access.

**Exam keywords:** Trusted locations, corporate network, contextual MFA, Named Locations, Conditional Access.

**Brochure reference:** Chapter 8

---

## Question 064 — Microsoft Authenticator

You need to support OATH tokens (one-time password) as a second authentication factor for Entra ID. What Microsoft solution enables use of OATH tokens for Entra ID and other identity providers?

- A. Entra ID Identity Protection
- B. Microsoft Authenticator
- C. Conditional Access
- D. Entra ID Multi-Factor Authentication

**Correct answer: B. Microsoft Authenticator**

### Explanation

Microsoft Authenticator supports OATH-based time-based one-time passwords (TOTP) for Microsoft Entra ID and other compatible identity providers.

### Why the other answers are incorrect

- **A. Entra ID Identity Protection:** Detects identity-related risks, such as compromised credentials and suspicious sign-ins. It does not generate OATH authentication codes.
- **C. Conditional Access:** Determines when additional authentication is required based on conditions such as location, device status and identity risk. It does not generate one-time passwords.
- **D. Entra ID Multi-Factor Authentication:** Supports OATH tokens within Microsoft Entra ID, but Microsoft Authenticator is the specific application that generates OATH codes for Entra ID and other compatible identity providers.

### Key concept to remember

| Authentication method | Description |
|---|---|
| TOTP | Generates temporary authentication codes, typically renewed every 30 seconds |
| Push notifications | Approve authentication requests |
| Passwordless authentication | Authenticate without a traditional password |
| Third-party accounts | Generate TOTP codes for other compatible identity providers |

| Term | Meaning |
|---|---|
| OATH | Initiative for Open Authentication |
| OTP | One-Time Password |
| TOTP | Time-Based One-Time Password |
| HOTP | HMAC-Based One-Time Password |
| MFA | Multi-Factor Authentication |

**Exam distinction:**

- Generate one-time authentication codes: Microsoft Authenticator.
- Require multiple authentication factors: Entra ID MFA.
- Determine when MFA is required: Conditional Access.
- Detect compromised identities: Identity Protection.

The decisive clue is **Entra ID and other identity providers**.

**Exam keywords:** OATH tokens, OTP, TOTP, software tokens, Microsoft Authenticator, MFA.

**Brochure reference:** Chapter 8

---

## Question 065 — Microsoft Defender for Cloud

The Contoso Legal Department has asked Contoso IT to verify whether the Contoso's Azure environment meets regulatory requirements. Which service should you use to answer this question?

- A. Azure Advisor
- B. Microsoft Defender for Cloud
- C. Microsoft Purview
- D. Azure Policy

**Correct answer: B. Microsoft Defender for Cloud**

### Explanation

Microsoft Defender for Cloud provides a Regulatory Compliance dashboard that assesses Azure resources against regulatory requirements and security standards, identifying compliance gaps.

### Why the other answers are incorrect

- **A. Azure Advisor:** Provides personalized recommendations for cost, reliability, security, performance and operational excellence. It is not the dedicated tool for assessing regulatory compliance.
- **C. Microsoft Purview:** Focuses on data governance, sensitive information protection and data-related compliance rather than infrastructure-wide security compliance assessments.
- **D. Azure Policy:** Enforces resource configuration standards and evaluates resource compliance. Defender for Cloud uses Azure Policy for many assessments but provides the dedicated Regulatory Compliance dashboard.

### Key concept to remember

| Service | Main purpose |
|---|---|
| Microsoft Defender for Cloud | Assess cloud security and regulatory compliance |
| Azure Policy | Enforce resource configuration standards |
| Microsoft Purview | Data governance and information protection |
| Azure Advisor | Best-practice recommendations |
| Service Trust Portal | Access Microsoft's compliance reports and audit documentation |

The Regulatory Compliance dashboard helps identify failed assessments against standards such as ISO 27001, PCI DSS and NIST frameworks, depending on enabled standards and plans. It provides remediation recommendations, but passing automated assessments does not guarantee full legal or regulatory compliance.

**Exam distinction:** Assess your Azure environment against regulatory requirements: Defender for Cloud. Enforce mandatory resource configurations: Azure Policy. Verify Microsoft's own compliance certifications: Service Trust Portal. Classify and protect sensitive data: Microsoft Purview.

**Exam keywords:** Regulatory compliance, security standards, compliance dashboard, security assessments, CSPM.

**Brochure reference:** Chapter 8

---

## Question 066 — Zero Trust

What are the three foundational principles of Zero Trust?

- A. 1) Verify explicitly 2) Use least privilege access 3) Assume breach
- B. 1) Verify explicitly 2) Use defense in depth 3) Assume breach
- C. 1) Verify explicitly 2) Trust but verify 3) Assume breach
- D. 1) Verify explicitly 2) Use least privilege access 3) Trust must be earned

**Correct answer: A. 1) Verify explicitly 2) Use least privilege access 3) Assume breach**

### Explanation

Zero Trust explicitly verifies access requests, grants only necessary permissions and assumes that a security breach may already exist.

### Why the other answers are incorrect

- **B.** Defense in Depth is a complementary strategy based on multiple layers of security, not one of the three foundational Zero Trust principles.
- **C.** Trust but verify implies initial trust, whereas Zero Trust rejects implicit trust and evaluates access requests using available signals.
- **D.** The first two principles are correct, but the third official principle is Assume breach, not Trust must be earned.

### Key concept to remember

| Zero Trust principle | Purpose | Examples |
|---|---|---|
| Verify explicitly | Authenticate and authorize using available identity, device, location and risk signals | MFA, Conditional Access |
| Use least privilege access | Grant only necessary permissions, using just-in-time and just-enough access | Azure RBAC, Privileged Identity Management |
| Assume breach | Minimize the impact of potential attacks and detect threats | Network segmentation, encryption, monitoring, Defender for Cloud |

Zero Trust rejects implicit trust, while Defense in Depth protects resources using multiple security layers. These strategies are complementary, not mutually exclusive.

**Exam keywords:** Verify explicitly, least privilege, assume breach, never trust implicitly, Zero Trust.

**Brochure reference:** Chapter 8

---

## Question 067 — Azure Arc

Which service extends Azure management to supported servers running on-premises and in other clouds?

- A. Azure Advisor
- B. Azure Arc
- C. Azure Files
- D. Azure DNS

**Correct answer: B. Azure Arc**

### Explanation

Arc extends Azure management beyond Azure. Advisor recommends improvements; Files provides shares; DNS hosts DNS zones.

### Key concept to remember

Arc extends Azure management beyond Azure.

**Brochure reference:** Chapter 11

---

## Question 068 — Microsoft Entra ID and Hybrid Identity

Your company is planning to host services in Azure. You want to leverage identities in Entra ID, but still need to support on-premises identities in Active Directory. Can you support single sign-on (SSO) and multi-factor authentication (MFA) for both on-premises and cloud with Entra ID?

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

Microsoft Entra ID supports hybrid identity integration with on-premises Active Directory, enabling SSO and MFA for cloud and supported on-premises applications.

### Why the other answer is incorrect

- **B. NO:** Entra ID is not limited to cloud-only identities. Microsoft Entra Connect integrates on-premises Active Directory identities with Entra ID, enabling centralized authentication for supported applications.

### Key concept to remember

| Feature | Main purpose |
|---|---|
| Active Directory (AD DS) | On-premises identity and domain management |
| Microsoft Entra ID | Cloud identity and access management |
| Microsoft Entra Connect | Integrate and synchronize on-premises identities |
| Single Sign-On (SSO) | Access multiple applications with one authentication session |
| Multi-Factor Authentication (MFA) | Require multiple authentication factors |
| Conditional Access | Enforce contextual access requirements |
| Microsoft Entra Application Proxy | Provide secure access to supported on-premises web applications |

Hybrid identity enables users to access on-premises and cloud resources using a common identity. Identity synchronization alone does not automatically enable MFA for every on-premises application or traditional Active Directory login; appropriate authentication integration and configuration are required.

**Exam keywords:** Hybrid identity, identity synchronization, Entra Connect, Active Directory, SSO, MFA.

**Brochure reference:** Chapter 8

---

## Question 069 — Microsoft Entra ID Security Groups

You need to configure access to Office 365 resources for users at Contoso. To group users for assignment of permissions, which of the following options would you use?

- A. Microsoft 365 group
- B. Resource group
- C. Security group
- D. Management group

**Correct answer: C. Security group**

### Explanation

Security groups allow administrators to group users and assign access permissions collectively rather than individually.

### Why the other answers are incorrect

- **A. Microsoft 365 group:** Primarily designed for collaboration and access to shared resources such as Outlook mailboxes, SharePoint sites and Teams. Although it also grants access to shared resources, a security group is the best answer for general permission assignments.
- **B. Resource group:** Organizes Azure resources such as virtual machines and storage accounts, not user identities.
- **D. Management group:** Organizes Azure subscriptions for governance and access management at scale, rather than grouping users.

### Key concept to remember

| Group type | Main purpose |
|---|---|
| Security group | Group users for access and permission management |
| Microsoft 365 group | Collaboration and shared Microsoft 365 resources |
| Resource group | Organize Azure resources |
| Management group | Organize Azure subscriptions |

Security groups simplify access management and support least privilege when appropriate permissions are assigned. Microsoft 365 groups also grant access to their associated collaboration resources, but general permission assignment is the key clue in this question.

**Exam keywords:** User groups, permission assignments, access management, security groups, Microsoft Entra ID.

**Brochure reference:** Chapter 8

---

## Question 070 — Authentication

Implementing Azure MFA (multi-factor authentication) will ensure we know who the user is who they claim to be. This is an example of:

- A. Authorization
- B. Authentication
- C. Integrity
- D. Confidentiality

**Correct answer: B. Authentication**

### Explanation

Multi-Factor Authentication (MFA) verifies a user's identity by requiring two or more authentication factors, increasing confidence that the user is who they claim to be.

### Why the other answers are incorrect

- **A. Authorization:** Determines which resources an authenticated user can access and which actions they are permitted to perform. It does not verify identity.
- **C. Integrity:** Ensures that data remains accurate and protected against unauthorized modification. It is not identity verification.
- **D. Confidentiality:** Ensures that sensitive information is accessible only to authorized individuals. Authentication contributes to confidentiality but is a different concept.

### Key concept to remember

| Security concept | Main purpose |
|---|---|
| Authentication | Verify identity (Who are you?) |
| Authorization | Determine permissions (What can you do?) |
| Confidentiality | Prevent unauthorized disclosure |
| Integrity | Prevent unauthorized data modification |
| Availability | Ensure resources remain accessible when needed |

The three authentication factor categories are something you know (password or PIN), something you have (phone or security key), and something you are (fingerprint or facial recognition). MFA requires factors from at least two different categories; two passwords do not constitute MFA.

Confidentiality, Integrity and Availability form the CIA Triad, a foundational information security model.

**Exam distinction:** MFA is an authentication mechanism, whereas Azure RBAC is an authorization mechanism.

**Exam keywords:** Identity verification, authentication factors, MFA, authorization, RBAC, CIA Triad.

**Brochure reference:** Chapter 8

---

## Question 071 — Azure File Sync

You need to ensure on-premises file shares and Azure Files remain in sync in both directions, regardless of where the file was changed. Which tool or service would you choose? (choose the best answer)

- A. AzCopy
- B. Azure Storage Explorer
- C. Azure File Sync
- D. Azure Data Box

**Correct answer: C. Azure File Sync**

### Explanation

Azure File Sync provides bidirectional synchronization between on-premises Windows Server file shares and Azure Files, allowing changes made on either side to be synchronized.

### Why the other answers are incorrect

- **A. AzCopy:** A command-line utility used to copy and synchronize data with Azure Storage. It does not provide continuous bidirectional synchronization between on-premises file servers and Azure Files.
- **B. Azure Storage Explorer:** A graphical application used to manage Azure Storage resources, upload files and download data. It does not provide automatic bidirectional file synchronization.
- **D. Azure Data Box:** A physical data transfer solution designed to migrate large amounts of data to or from Azure. It is not designed for ongoing file synchronization.

### Key concept to remember

| Tool or service | Main purpose |
|---|---|
| Azure File Sync | Continuous bidirectional file synchronization |
| AzCopy | Command-line data transfer |
| Azure Storage Explorer | Graphical storage management |
| Azure Data Box | Large-scale offline data transfer |
| Azure Files | Fully managed cloud file shares |

Azure File Sync also supports **Cloud Tiering**, which allows frequently accessed files to remain cached locally while less frequently accessed file content is stored in Azure.

**Important:** Synchronization is not necessarily instantaneous, particularly when changes are made directly to the Azure file share.

**Exam distinction:** Azure Files provides the cloud file share, whereas Azure File Sync keeps on-premises Windows Server file shares synchronized with it.

**Exam keywords:** Bidirectional synchronization, hybrid storage, Windows Server, file shares, Cloud Tiering.

**Precision:** Direct changes in the Azure file share may wait for cloud change detection (normally every 24 hours); bidirectional synchronization is not instantaneous.

**Brochure reference:** Chapter 7

---

## Question 072 — Conditional Access and Identity Protection

Contoso's Security team wants to implement selective use of multi-factor authentication (MFA) based on multiple factors related to the authentication request, such as device health and sign-in risk. Which services should they implement?

- A. Conditional Access and Identity Protection
- B. Identity Protection and Entitlement Management
- C. Multi-Factor Authentication (MFA) and Identity Protection
- D. Windows Hello for Business and Conditional Access

**Correct answer: A. Conditional Access and Identity Protection**

### Explanation

Microsoft Entra ID Protection detects identity-related risks, while Conditional Access evaluates signals such as sign-in risk and device compliance to determine whether MFA is required.

### Why the other answers are incorrect

- **B. Identity Protection and Entitlement Management:** Identity Protection detects identity-related risks, but Entitlement Management manages access packages, access requests and access lifecycles. It does not enforce contextual MFA requirements.
- **C. Multi-Factor Authentication (MFA) and Identity Protection:** MFA provides additional identity verification, and Identity Protection detects risks. However, Conditional Access is needed to enforce MFA based on multiple contextual signals, including device compliance.
- **D. Windows Hello for Business and Conditional Access:** Windows Hello for Business provides passwordless authentication on Windows devices. It does not provide the identity risk detection capabilities of Identity Protection.

### Key concept to remember

| Feature | Main purpose |
|---|---|
| Conditional Access | Evaluate conditions and enforce access requirements |
| Identity Protection | Detect risky users and risky sign-ins |
| MFA | Verify identity using multiple authentication factors |
| Microsoft Intune | Manage devices and evaluate device compliance |
| Entitlement Management | Manage access packages and access lifecycles |
| Windows Hello for Business | Provide passwordless authentication |

Conditional Access combines signals such as device compliance, user location and sign-in risk to enforce policies that can require MFA, block access or grant access subject to applicable requirements. Identity Protection supplies identity risk signals.

**Exam distinction:** Conditional Access determines when MFA is required; Identity Protection detects identity and sign-in risks; MFA performs additional identity verification; Intune evaluates device compliance.

**Licensing:** Conditional Access requires Microsoft Entra ID P1 or higher. Risk-based Conditional Access requires Microsoft Entra ID P2.

**Exam keywords:** Risk-based MFA, Conditional Access, Identity Protection, device compliance, sign-in risk, contextual authentication.

**Brochure reference:** Chapter 8

---

## Question 073 — Azure Tags

Contoso has deployed resources across multiple Azure regions for multiple business units. They have a requirement to generate cost and chargeback reporting to track the Azure costs to be charged back to each business unit. Which Azure feature should they use to simplify this task?

- A. Tags
- B. Resource Locks
- C. Resource Groups
- D. Management Groups

**Correct answer: A. Tags**

### Explanation

Azure Tags allow organizations to categorize resources by business unit, department or cost center, simplifying cost reporting and chargeback using Azure Cost Management.

### Why the other answers are incorrect

- **B. Resource Locks:** Prevent accidental deletion or modification of Azure resources. They do not categorize resources or facilitate cost reporting.
- **C. Resource Groups:** Organize Azure resources into logical containers. Although costs can be analyzed by resource group, tags provide greater flexibility for tracking business units across multiple resource groups, subscriptions and regions.
- **D. Management Groups:** Organize Azure subscriptions to simplify governance, policy assignments and access management. They are not specifically designed to categorize individual resources by business unit.

### Key concept to remember

Azure Tags are metadata represented by key-value pairs that can be associated with Azure resources.

| Tag key | Tag value |
|---|---|
| Department | Finance |
| CostCenter | CC-001 |
| Environment | Production |
| Project | CustomerPortal |
| Owner | IT Operations |

| Azure feature | Main purpose |
|---|---|
| Tags | Categorize resources and facilitate cost allocation |
| Cost Management | Analyze and monitor Azure spending |
| Azure Policy | Enforce mandatory tags |
| Resource Groups | Organize Azure resources |
| Management Groups | Organize Azure subscriptions |
| Resource Locks | Prevent accidental deletion or modification |

**Chargeback** is the process of allocating and charging cloud costs to the business units responsible for those expenses. Cost Management can group supported cost records by tags.

Tags are not automatically inherited from resource groups or subscriptions by default. Azure Policy can be used to enforce or implement resource tag inheritance.

**Exam keywords:** Tags, metadata, key-value pairs, cost allocation, chargeback, cost centers, business units.

**Brochure reference:** Chapter 9

---

## Question 074 — Azure Service Health

Which service provides personalized notifications about Azure platform outages and planned maintenance affecting your subscriptions?

- A. Azure Monitor
- B. Azure Advisor
- C. Azure Service Health
- D. Azure Policy

**Correct answer: C. Azure Service Health**

### Explanation

Service Health reports relevant platform incidents and maintenance. Monitor collects telemetry; Advisor recommends improvements; Policy governs resource configurations.

### Key concept to remember

Service Health reports relevant platform incidents and maintenance.

**Brochure reference:** Chapter 12

---

## Question 075 — Authorization

Using role based access control (RBAC) in Azure, we can determine which resources and services a user has access to. This is an example of:

- A. Authorization
- B. Authentication
- C. Integrity
- D. Confidentiality

**Correct answer: A. Authorization**

### Explanation

Azure Role-Based Access Control (RBAC) is an authorization mechanism that determines which Azure resources users can access and which actions they are permitted to perform.

### Why the other answers are incorrect

- **B. Authentication:** Verifies the identity of a user, for example through passwords or multi-factor authentication (MFA). It does not determine which resources the user is permitted to access.
- **C. Integrity:** Ensures that data remains accurate, consistent and protected against unauthorized modification. Although RBAC can contribute to data integrity by restricting modification permissions, its primary purpose is authorization.
- **D. Confidentiality:** Ensures that sensitive information is accessible only to authorized individuals. RBAC contributes to confidentiality by restricting access, but the process of assigning permissions is called authorization.

### Key concept to remember

Authentication answers **Who are you?** Authorization answers **What are you allowed to do?**

Azure RBAC built-in roles:

| Role | Permissions |
|---|---|
| Owner | Manage resources and assign access permissions |
| Contributor | Manage resources but cannot assign Azure RBAC roles |
| Reader | View resources without modifying them |
| User Access Administrator | Manage access permissions to Azure resources |

An Azure RBAC role assignment consists of three elements: a security principal, a role definition and a scope. Assign permissions at the narrowest necessary scope to follow the principle of least privilege.

| Security concept | Main purpose |
|---|---|
| Authentication | Verify identity |
| Authorization | Determine access permissions |
| Confidentiality | Prevent unauthorized disclosure |
| Integrity | Prevent unauthorized modification |
| Availability | Ensure resources remain accessible |

**Comparison with question 070:** MFA is an authentication mechanism, whereas Azure RBAC is an authorization mechanism.

**Exam keywords:** Authorization, RBAC, roles, permissions, access control, least privilege, scope.

**Brochure reference:** Chapter 8

---

## Question 076 — Azure Sovereign Regions

Azure China and Azure Government are examples of:

- A. Private clouds
- B. Sovereign regions
- C. Azure geographies
- D. Management groups

**Correct answer: B. Sovereign regions**

### Explanation

Azure China and Azure Government are sovereign cloud environments isolated from global Azure to meet specific regulatory, legal and data sovereignty requirements.

### Why the other answers are incorrect

- **A. Private clouds:** A private cloud is dedicated to a single organization. Azure China and Azure Government serve multiple eligible customers within separate cloud environments.
- **C. Azure geographies:** Geographical markets containing one or more Azure regions, designed to address data residency and compliance requirements. Sovereign regions are distinguished by their isolation from global Azure.
- **D. Management groups:** Organize Azure subscriptions for governance, policy assignments and access management. They are unrelated to sovereign cloud infrastructure.

### Key concept to remember

Azure Government serves eligible US government customers and partners. Azure China is operated by 21Vianet in China. Both are separate from global Azure.

| Concept | Main purpose |
|---|---|
| Sovereign regions | Meet specific national and regulatory requirements through isolated cloud environments |
| Azure geography | Address geographical data residency requirements |
| Azure region | Group datacenters connected through a low-latency network |
| Availability zone | Protect against datacenter-level failures |
| Private cloud | Provide infrastructure dedicated to one organization |
| Management group | Organize Azure subscriptions |

Sovereign clouds may have different service availability, endpoints, access requirements and operational arrangements compared with global Azure.

**Exam distinction:** Sovereign regions are isolated from global Azure, but this does not make them private clouds.

**Exam keywords:** Sovereign regions, Azure China, Azure Government, 21Vianet, data sovereignty, regulatory compliance, isolated cloud environments.

**Brochure reference:** Chapter 4

---

## Question 077 — Azure Resource Locks

You need to ensure no one (including administrators) can create additional resources in a Azure resource group. What will you do to achieve this objective?

- A. Azure Policy
- B. Role based access control (RBAC)
- C. Resource locks
- D. Microsoft Defender for Cloud

**Correct answer: C. Resource locks**

### Explanation

Applying a ReadOnly resource lock at the resource group level prevents creation, modification and deletion of resources through the management plane while the lock remains in place, including for administrators.

### Why the other answers are incorrect

- **A. Azure Policy:** Enforces configuration standards and can deny resource creation with appropriate policies. However, a ReadOnly lock is the most direct way to make an entire resource group read-only.
- **B. Role based access control (RBAC):** Controls authorized actions. Administrators with sufficient permissions could still create resources; locks override permissions granted through RBAC.
- **D. Microsoft Defender for Cloud:** Provides security assessments, threat detection and recommendations. It does not prevent resource creation in a resource group.

### Key concept to remember

| Operation | CanNotDelete | ReadOnly |
|---|---|---|
| Read resources | Allowed | Allowed |
| Create resources within locked resource group | Allowed | Blocked |
| Modify resources | Allowed | Blocked |
| Delete resources | Blocked | Blocked |

Resource locks can be applied at subscription, resource group or resource scope and are inherited by child resources. They override RBAC permissions while in place. Users with sufficient permissions can remove locks before performing restricted operations. Locks protect management-plane operations, not necessarily data-plane operations.

| Azure feature | Main purpose |
|---|---|
| Resource Locks | Prevent unwanted resource operations |
| Azure RBAC | Determine who can perform actions |
| Azure Policy | Enforce resource configuration standards |
| Defender for Cloud | Improve security posture |

**Exam distinction:** Prevent deletion only → CanNotDelete. Prevent creation, modification and deletion within a resource group → ReadOnly.

**Exam keywords:** Resource locks, ReadOnly, CanNotDelete, inheritance, administrators, management plane.

**Brochure reference:** Chapter 10

---

## Question 078 — Defense in Depth

Which security model uses multiple protective layers so that failure of one control does not expose data?

- A. Consumption-based pricing
- B. Defense in depth
- C. Availability sets
- D. Resource tags

**Correct answer: B. Defense in depth**

### Explanation

Defense in depth layers security controls. Pricing concerns billing; availability sets improve VM resilience; tags classify resources.

### Key concept to remember

Defense in depth layers security controls.

**Brochure reference:** Chapter 8

---

## Question 079 — Private Endpoints

Which feature assigns a private IP address in a VNet to access a supported Azure PaaS service?

- A. Service endpoint
- B. Azure DNS
- C. Private endpoint
- D. ExpressRoute

**Correct answer: C. Private endpoint**

### Explanation

Private endpoints use Private Link and a private IP. Service endpoints extend subnet identity without assigning the service a private IP in the VNet; DNS resolves names; ExpressRoute provides private connectivity to Azure.

### Key concept to remember

Private endpoints use Private Link and a private IP.

**Brochure reference:** Chapter 6

---

## Question 080 — AzCopy

You need to automate movement of multiple files to a storage account. What command line tool can you use to script copying blobs or files to or from your storage account? (choose the best answer)

- A. Azure File Sync
- B. Azure Storage Explorer
- C. AzCopy
- D. Azure Data Box

**Correct answer: C. AzCopy**

### Explanation

AzCopy is a command-line utility designed to copy blobs and files to or from Azure Storage accounts. It supports scripting and automated data transfers.

### Why the other answers are incorrect

- **A. Azure File Sync:** Provides continuous bidirectional synchronization between on-premises Windows Server file shares and Azure Files. It is not a general-purpose command-line data transfer utility.
- **B. Azure Storage Explorer:** Provides a graphical user interface for managing Azure Storage resources, uploading and downloading files. AzCopy is more appropriate for scripting and automating data transfers.
- **D. Azure Data Box:** Uses physical storage devices to transfer large volumes of data to or from Azure, particularly when network bandwidth is limited. It is not a command-line utility.

### Key concept to remember

| Tool or service | Main purpose |
|---|---|
| AzCopy | Command-line data transfers |
| Azure Storage Explorer | Graphical storage management |
| Azure File Sync | Continuous bidirectional file synchronization |
| Azure Data Box | Large-scale offline data transfers |
| Azure Migrate | Assess and migrate workloads to Azure |

| Command | Purpose |
|---|---|
| `azcopy copy` | Copy files or blobs between supported locations |
| `azcopy sync` | Synchronize a destination with a source |
| `azcopy login` | Authenticate using Microsoft Entra ID |

**Example:** Upload files from a local directory to an Azure Blob Storage container.

```powershell
azcopy copy "C:\Documents\*" "https://account.blob.core.windows.net/container" --recursive=true
```

Appropriate authentication and storage permissions are required.

**Exam distinction:** Command-line utility, scripts and automated transfers = AzCopy; graphical interface = Azure Storage Explorer; continuous bidirectional synchronization = Azure File Sync; physical devices and limited network bandwidth = Azure Data Box.

AzCopy supports synchronization operations, but it is not a continuous bidirectional synchronization service like Azure File Sync.

**Exam keywords:** AzCopy, CLI, scripting, automated data transfers, Blob Storage, Azure Files.

**Brochure reference:** Chapter 7

---

## Question 081 — Locally Redundant Storage (LRS)

Which Azure storage redundancy option would you select for development workloads where minimizing expense is the highest priority?

- A. Zone Redundant Storage (ZRS)
- B. Geo-Redundant Storage (GRS)
- C. Geo-Zone Redundant Storage (GZRS)
- D. Locally Redundant Storage (LRS)

**Correct answer: D. Locally Redundant Storage (LRS)**

### Explanation

LRS is the least expensive Azure Storage redundancy option, making it suitable for development workloads where minimizing costs is the highest priority.

### Why the other answers are incorrect

- **A. Zone Redundant Storage (ZRS):** Replicates data synchronously across three availability zones in the primary region. It protects against zone failures but costs more than LRS.
- **B. Geo-Redundant Storage (GRS):** Replicates data locally in the primary region and asynchronously to a secondary region. It provides regional disaster protection at additional cost.
- **C. Geo-Zone Redundant Storage (GZRS):** Combines zone redundancy in the primary region with asynchronous replication to a secondary region. It provides greater resilience but costs more than LRS.

### Key concept to remember

| Redundancy | Copies | Annual durability (at least) | Replication |
|---|---:|---:|---|
| LRS | 3 | 11 nines | One physical location |
| ZRS | 3 | 12 nines | Three availability zones |
| GRS | 6 | 16 nines | Two regions, local redundancy |
| GZRS | 6 | 16 nines | Two regions, zone redundancy in primary region |

**Exam distinction:** Minimum cost = LRS; availability zone failure protection = ZRS; regional disaster protection = GRS; combined zone and geographical redundancy = GZRS; read access to secondary region = RA-GRS or RA-GZRS.

LRS protects against individual hardware failures but does not guarantee protection against loss of an entire datacenter. Storage redundancy is not a substitute for backups. Geo-replication is asynchronous, so recent writes may be lost during a regional disaster.

**Exam keywords:** Minimum expense, development workloads, local replication, storage redundancy, LRS.

**Brochure reference:** Chapter 7

---

## Question 082 — Azure Virtual Machine Scale Sets

Contoso needs Azure capacity to support spikes in request traffic to their load-balanced web farm during the holiday shopping season. A consultant recommends deploying the website to a virtual machine scale set in Azure. Will this meet the requirement?

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

Azure Virtual Machine Scale Sets (VMSS) can automatically increase or decrease the number of VM instances based on demand, making them suitable for seasonal traffic spikes.

### Why the other answer is incorrect

- **B. NO:** Virtual Machine Scale Sets are designed to manage and scale groups of virtual machines. When autoscaling is configured, additional instances can be deployed during high demand and removed when traffic decreases, without manually deploying each VM.

### Key concept to remember

Azure Virtual Machine Scale Sets support horizontal scaling and elasticity. A load balancer distributes traffic across available instances. For example, a web farm could scale from two to six VMs during the holiday season and return to two afterward.

| Scaling operation | Description |
|---|---|
| Scale out | Add more VM instances |
| Scale in | Remove VM instances |
| Scale up | Increase CPU, RAM or capacity of a VM |
| Scale down | Decrease CPU, RAM or capacity of a VM |

| Azure service | Main purpose |
|---|---|
| Virtual Machine Scale Sets | Manage and scale groups of VMs |
| Azure Load Balancer | Distribute network traffic across instances |
| Availability Sets | Protect against hardware and maintenance-related failures |
| Availability Zones | Protect against datacenter-level failures when workloads span zones |
| Azure Monitor | Collect metrics and monitor resource utilization |

Autoscaling can be configured using metrics such as CPU utilization or predefined schedules.

**Exam distinction:** Scalability = ability to change capacity; elasticity = adjusting capacity according to changing demand; load balancing = distributing traffic across available instances.

**Exam keywords:** VM Scale Sets, VMSS, autoscaling, seasonal demand, traffic spikes, horizontal scaling, elasticity.

**Brochure reference:** Chapter 5

---

## Question 083 — Azure Table Storage

Which type of Azure storage stores NoSQL data in Azure, including a schemaless key/attribute store?

- A. Queue Storage
- B. Table Storage
- C. Blob Storage
- D. File Storage

**Correct answer: B. Table Storage**

### Explanation

Azure Table Storage is a NoSQL service providing a schemaless key/attribute store. Entities in the same table can have different sets of properties.

### Why the other answers are incorrect

- **A. Queue Storage:** Stores messages for asynchronous communication between application components, not NoSQL entities.
- **C. Blob Storage:** Stores unstructured object data such as images, videos and backups, rather than providing a key/attribute database model.
- **D. File Storage:** Provides managed file shares through protocols such as SMB and NFS, rather than NoSQL data storage.

### Key concept to remember

Azure Table Storage uses a flexible, non-relational data model. Each entity is uniquely identified by the combination of PartitionKey and RowKey. Entities in the same table may have different properties. For example, one customer entity may contain a City property while another contains Email and Age properties. Unlike relational SQL databases, Table Storage does not natively support relational joins. Azure Cosmos DB for Table also supports the table data model, with additional capabilities such as global distribution.

| Azure Storage type | Main purpose |
|---|---|
| Table Storage | Schemaless NoSQL data |
| Blob Storage | Unstructured object data |
| Queue Storage | Asynchronous messages |
| Azure Files | Managed file shares |
| Disk Storage | Virtual machine disks |

**Exam distinction:** Schemaless, non-relational, key/attribute storage = Azure Table Storage.

**Exam keywords:** NoSQL, schemaless, key/attribute store, entities, properties, PartitionKey, RowKey.

**Brochure reference:** Chapter 7

---

## Question 084 — Microsoft Defender for Cloud

You need to identify deviations from Microsoft security best practices in your Azure cloud infrastructure. Which service should you use?

- A. Azure Advisor
- B. Microsoft Defender for Cloud
- C. Azure Monitor
- D. Azure Key Vault

**Correct answer: B. Microsoft Defender for Cloud**

### Explanation

Microsoft Defender for Cloud continuously assesses cloud resources, identifies deviations from security best practices and provides recommendations to improve security posture.

### Why the other answers are incorrect

- **A. Azure Advisor:** Provides general optimization recommendations across security, reliability, cost, performance and operational excellence. Defender for Cloud is the dedicated cloud security posture assessment solution.
- **C. Azure Monitor:** Collects metrics, logs and telemetry to monitor resource health, availability and performance.
- **D. Azure Key Vault:** Securely stores and manages secrets, encryption keys and certificates rather than assessing infrastructure security posture.

### Key concept to remember

Defender for Cloud provides security recommendations, Secure Score and regulatory compliance assessments. Its capabilities include Cloud Security Posture Management (CSPM), which identifies misconfigurations, and Cloud Workload Protection Platform (CWPP), which detects threats and protects workloads. Some capabilities require paid plans.

| Service | Main purpose |
|---|---|
| Microsoft Defender for Cloud | Security posture, recommendations and workload protection |
| Microsoft Sentinel | Security event analysis and incident response (SIEM/SOAR) |
| Azure Advisor | General resource optimization recommendations |
| Azure Monitor | Resource health, metrics, logs and alerts |
| Azure Policy | Enforce configuration and compliance standards |
| Azure Key Vault | Protect secrets, keys and certificates |

**Exam distinction:** Identify security misconfigurations = Defender for Cloud; enforce configuration standards = Azure Policy; analyze security incidents = Microsoft Sentinel; store secrets = Azure Key Vault.

**Exam keywords:** Security best practices, security posture, misconfigurations, Secure Score, CSPM, security recommendations.

**Brochure reference:** Chapter 8

---

## Question 085 — Regulatory Compliance

Contoso IT is planning to migrate all on-premises data to Azure. The Legal Department has asked for verification that Azure complies with Contoso's regulatory obligations, such as HIPAA and PCI DSS. Which Azure service can be used to monitor for regulatory compliance?

- A. Azure App Insights
- B. Azure Advisor
- C. Azure Monitor
- D. Microsoft Defender for Cloud

**Correct answer: D. Microsoft Defender for Cloud**

### Explanation

Microsoft Defender for Cloud provides a Regulatory Compliance dashboard that assesses cloud resources against regulatory standards such as HIPAA and PCI DSS, identifies compliance gaps and provides remediation recommendations.

### Why the other answers are incorrect

- **A. Azure App Insights:** Monitors application performance, availability, exceptions and request failures. It does not assess cloud infrastructure against regulatory compliance standards.
- **B. Azure Advisor:** Provides general recommendations across cost, security, reliability, performance and operational excellence, rather than dedicated regulatory compliance assessments.
- **C. Azure Monitor:** Collects metrics, logs and telemetry and generates alerts. Its data can support compliance investigations, but it is not the dedicated regulatory compliance assessment service.

### Key concept to remember

Defender for Cloud assesses supported resources against assigned regulatory standards and identifies compliance gaps. Some controls require manual assessment and some capabilities require paid plans. HIPAA concerns US healthcare information, PCI DSS concerns payment card data, and ISO 27001 concerns information security management.

| Service | Main purpose |
|---|---|
| Microsoft Defender for Cloud | Assess cloud security and regulatory compliance |
| Service Trust Portal | Access Microsoft's compliance certifications and audit reports |
| Azure Policy | Evaluate and enforce resource configuration standards |
| Microsoft Purview | Data governance, information protection and compliance management |
| Azure Advisor | General resource optimization recommendations |
| Azure Monitor | Metrics, logs and operational alerts |

Microsoft's compliance certifications do not automatically make customer workloads compliant. Customers remain responsible for their configurations, data and applicable regulatory obligations under the shared responsibility model.

**Exam distinction:** Monitor workload regulatory compliance = Defender for Cloud; verify Microsoft's certifications and audit reports = Service Trust Portal; enforce configuration standards = Azure Policy.

**Exam keywords:** Regulatory compliance, HIPAA, PCI DSS, compliance dashboard, security posture, compliance assessments.

**Brochure reference:** Chapter 8

---

## Question 086 — Azure Cloud Shell

Which tool provides an authenticated browser-based Bash or PowerShell terminal for managing Azure resources?

- A. Azure Cloud Shell
- B. Azure Advisor
- C. Azure Service Health
- D. Azure Files

**Correct answer: A. Azure Cloud Shell**

### Explanation

Cloud Shell provides the browser terminal. Advisor recommends changes; Service Health reports incidents; Files provides shares.

### Key concept to remember

Cloud Shell provides the browser terminal.

**Brochure reference:** Chapter 11

---

## Question 087 — Azure Reservations

As part of a migration of on-premises VM workloads to Azure VMs, Contoso wants to minimize costs. Since the VMs will be running in Azure for an extended period of time (years), what option should they consider to reduce hosting costs?

- A. Azure Cost Management
- B. Azure Reservations
- C. Azure Advisor
- D. VM Scale Sets

**Correct answer: B. Azure Reservations**

### Explanation

Azure Reservations reduce costs for eligible Azure resources through a one-year or three-year commitment. They are particularly suitable for long-running workloads with predictable resource requirements.

### Why the other answers are incorrect

- **A. Azure Cost Management:** Tracks expenditure, forecasts costs and manages budgets, but does not directly provide reservation discounts.
- **C. Azure Advisor:** Recommends cost-saving opportunities, including reservations, but Azure Reservations provides the actual discounted pricing.
- **D. VM Scale Sets:** Manage and scale groups of VMs according to demand when autoscaling is configured. They can reduce unnecessary consumption but do not provide long-term commitment discounts.

### Key concept to remember

| Pricing model | Best suited for |
|---|---|
| Pay-as-you-go | Short-term or unpredictable workloads |
| Azure Reservations | Stable, predictable, long-running workloads |
| Azure Savings Plan for Compute | Flexible long-term compute spending commitments |
| Azure Spot VMs | Interruptible workloads that tolerate eviction |
| Azure Hybrid Benefit | Customers with eligible existing software licenses |

Reservations can be paid upfront or monthly. The commitment remains applicable even if eligible usage is insufficient to fully utilize the reservation. VM reservation discounts generally cover compute costs, not additional storage or networking expenses. A reservation discount does not itself guarantee VM capacity.

**Exam distinction:** Predictable workloads running for years = Azure Reservations; flexible compute spending commitment = Azure Savings Plan; track spending and budgets = Cost Management; recommend savings = Advisor.

**Exam keywords:** Long-term workloads, predictable usage, one-year commitment, three-year commitment, reserved instances, cost optimization.

**Brochure reference:** Chapter 9

---

## Question 088 — Azure VPN Gateway

A ____ is a virtual network gateway that sends encrypted traffic between an Azure VNET and an on-premises location over the Internet

- A. App gateway
- B. Web proxy
- C. VPN gateway
- D. Private endpoint

**Correct answer: C. VPN gateway**

### Explanation

Azure VPN Gateway sends encrypted traffic between an Azure virtual network and an on-premises location over the public Internet.

### Why the other answers are incorrect

- **A. App gateway:** Azure Application Gateway is a Layer 7 HTTP/HTTPS load balancer. It does not establish VPN tunnels between on-premises networks and Azure.
- **B. Web proxy:** Acts as an intermediary between clients and web servers, forwarding or filtering requests rather than establishing network-to-network VPN tunnels.
- **D. Private endpoint:** Provides private IP access to supported Azure services within a virtual network. It does not establish a VPN connection to on-premises infrastructure.

### Key concept to remember

| Service | Main purpose |
|---|---|
| VPN Gateway | Encrypted network connections over the Internet |
| ExpressRoute | Private connectivity without traversing the public Internet |
| Application Gateway | Layer 7 HTTP/HTTPS load balancing |
| Azure Load Balancer | Layer 4 TCP/UDP load balancing |
| Private Endpoint | Private access to supported Azure services |
| Local Network Gateway | Represents the remote network and VPN device configuration |

Site-to-Site VPN connects an on-premises network to Azure using an encrypted IPsec tunnel. Point-to-Site VPN connects an individual client device to Azure. VNet-to-VNet VPN connects Azure virtual networks using VPN gateways.

**Exam distinction:** Encrypted connection over the public Internet = VPN Gateway; private connectivity = ExpressRoute; web traffic distribution = Application Gateway; private IP access to supported services = Private Endpoint.

**Exam keywords:** VPN Gateway, encrypted traffic, IPsec, public Internet, hybrid cloud, Site-to-Site VPN, virtual network gateway.

**Brochure reference:** Chapter 6

---

## Question 089 — Azure Advisor

Contoso IT Operations has been tasked with providing recommendations on how to reducing cost of running Azure VMs. Which service should they use to gather recommendations?

- A. Microsoft Defender for Cloud
- B. Azure Advisor
- C. Azure Monitor
- D. Azure App Insights

**Correct answer: B. Azure Advisor**

### Explanation

Azure Advisor analyzes existing Azure resources and provides personalized cost optimization recommendations, including resizing underutilized VMs and purchasing Azure Reservations.

### Why the other answers are incorrect

- **A. Microsoft Defender for Cloud:** Focuses on cloud security posture, regulatory compliance and workload protection rather than cost optimization.
- **C. Azure Monitor:** Collects metrics, logs and telemetry to monitor resource utilization, health and performance. Advisor provides actionable cost optimization recommendations.
- **D. Azure App Insights:** Monitors application performance, response times, exceptions and availability rather than VM hosting cost optimization.

### Key concept to remember

Azure Advisor provides recommendations in five categories: cost, security, reliability, performance and operational excellence. Cost recommendations may include resizing or shutting down underutilized VMs, purchasing reservations and considering savings plans. Recommendations do not automatically implement every suggested change.

| Azure feature | Main purpose |
|---|---|
| Azure Advisor | Recommend cost optimizations |
| Azure Pricing Calculator | Estimate costs before deployment |
| Azure Cost Management | Analyze spending, forecasts and budgets |
| Azure Reservations | Reduce costs through long-term commitments |
| Azure Tags | Categorize resources for cost allocation |
| Azure Monitor | Monitor resource utilization and performance |

**Exam distinction:** Recommend improvements = Azure Advisor; track spending = Azure Cost Management; estimate planned deployment costs = Azure Pricing Calculator; monitor technical performance = Azure Monitor.

**Exam keywords:** Cost optimization, recommendations, underutilized VMs, rightsizing, Azure Advisor, best practices.

**Brochure reference:** Chapter 9

---

## Question 090 — Azure Cost Management

Contoso is planning to move several on-premises services to Azure PaaS and IaaS solutions. The CIO has asked for a tool to estimate the cost of hosting these resources in Azure. Tom suggests Azure Cost Management to estimate costs prior to migration. Does Tom's solution meet the solution criteria?

- A. YES
- B. NO

**Correct answer: B. NO**

### Explanation

Azure Cost Management monitors, analyzes and forecasts Azure expenditure. Azure Pricing Calculator is the appropriate tool for estimating the cost of planned resources before migration.

### Why the other answer is incorrect

- **A. YES:** Cost Management provides cost analysis, budgets, alerts and forecasts, but is not the appropriate tool for estimating a new deployment based on planned resource configurations.

### Key concept to remember

| Azure tool | Main purpose |
|---|---|
| Azure Pricing Calculator | Estimate costs before deployment |
| Azure Cost Management | Analyze spending, budgets and forecasts |
| Azure Advisor | Recommend cost optimizations |
| Azure Reservations | Reduce costs through long-term commitments |
| Azure TCO Calculator (legacy) | Compare on-premises and cloud infrastructure costs |

**Exam distinction:** Estimate costs prior to migration = Azure Pricing Calculator; track expenditure and configure budgets = Azure Cost Management; obtain cost-saving recommendations = Azure Advisor.

**Exam trap:** Forecasting expenditure based on existing usage is different from estimating the cost of a planned deployment.

**Exam keywords:** Prior to migration, estimated costs, planned resources, Pricing Calculator, Cost Management, budgets, forecasts.

**Brochure reference:** Chapter 9

---

## Question 091 — Azure Resource Groups

To manage service lifecycle with more granularity, Contoso cloud architects have designed a model that involves a large number of resource groups. Will Contoso incur additional costs for the resources groups?

- A. YES
- B. NO

**Correct answer: B. NO**

### Explanation

Azure Resource Groups are logical containers used to organize and manage Azure resources. Creating resource groups does not incur additional charges. Customers pay for billable resources and services deployed within them.

### Why the other answer is incorrect

- **A. YES:** Creating additional resource groups does not directly increase Azure expenditure. Resources deployed within them may incur charges.

### Key concept to remember

| Azure component | Direct cost |
|---|---|
| Management Groups | Free |
| Subscriptions | No inherent container fee |
| Resource Groups | Free |
| Virtual Machines | Billable |
| Storage Accounts | Usage-based charges |
| Azure SQL Database | Billable |

A resource belongs to only one resource group at a time. A resource group can contain resources in different regions. Resources sharing a management lifecycle should generally be grouped together. Deleting a resource group deletes its contained resources, subject to applicable protections. Azure RBAC, Azure Policy and resource locks can be applied at resource group scope.

**Exam distinction:** Management Groups organize subscriptions; subscriptions establish billing and management boundaries; Resource Groups organize resources; Tags categorize resources for cost reporting.

**Exam trap:** Creating 100 resource groups does not inherently cost more than creating one resource group containing the same resources.

**Exam keywords:** Resource groups, logical containers, resource lifecycle, no additional cost, Azure resource hierarchy.

**Brochure reference:** Chapter 4

---

## Question 092 — Azure Availability Zones

You plan to deploy several Azure VMs. The applications running on these VMs should remain available if a single Azure datacenter fails. You opt to deploy VMs to multiple availability zones. Does your solution meet the solution criteria?

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

Azure Availability Zones are physically separate locations within an Azure region, with independent power, cooling and networking. Deploying redundant VMs across zones helps protect applications against datacenter-level failures.

### Why the other answer is incorrect

- **B. NO:** Availability Zones are designed to protect against datacenter-level failures. With appropriate application redundancy and traffic distribution, unaffected instances can continue serving requests.

### Key concept to remember

| Azure feature | Main purpose |
|---|---|
| Availability Sets | Protect against hardware and maintenance-related failures |
| Availability Zones | Protect against datacenter-level failures |
| Multi-region deployment | Protect against regional failures |
| VM Scale Sets | Manage and scale groups of VMs |
| Azure Load Balancer | Distribute traffic across healthy instances |

Availability Zones are connected through high-speed, low-latency networks.

**Important:** Deploying VMs across zones does not automatically guarantee application availability. Application redundancy, data replication and appropriate traffic routing must also be configured.

**Exam distinction:** Hardware failure or planned maintenance = Availability Sets; datacenter failure = Availability Zones; regional failure = multi-region deployment; increased traffic demand = VM Scale Sets.

**Exam keywords:** Availability Zones, datacenter failure, high availability, fault tolerance, physical isolation, redundancy.

**Brochure reference:** Chapter 4

---

## Question 093 — Azure Migrate

Which service helps discover, assess and migrate on-premises workloads to Azure?

- A. Azure Monitor
- B. Azure Migrate
- C. Azure DNS
- D. Azure Policy

**Correct answer: B. Azure Migrate**

### Explanation

Azure Migrate supports migration assessment and execution. Monitor observes telemetry; DNS resolves names; Policy governs configurations.

### Key concept to remember

Azure Migrate supports migration assessment and execution.

**Brochure reference:** Chapter 7

---

## Question 094 — Azure App Service

Azure App Service supports which of the following application type(s)?

- A. Web apps
- B. Mobile apps
- C. API apps
- D. All the above

**Correct answer: D. All the above**

### Explanation

Azure App Service is a fully managed Platform as a Service (PaaS) that supports hosting web applications, REST APIs and mobile application backends without managing the underlying infrastructure.

### Why the other answers are incomplete

- **A. Web apps:** Supported, including applications built with ASP.NET Core, Java, Node.js and Python.
- **B. Mobile apps:** Supported through hosting backend services for mobile applications.
- **C. API apps:** Supported, including REST APIs consumed by other applications.

### Key concept to remember

| Azure service | Main purpose |
|---|---|
| Azure App Service | Host web applications, APIs and mobile backends |
| Azure Functions | Execute event-driven serverless code |
| Azure Logic Apps | Automate workflows and integrations |
| Azure Virtual Machines | Host applications with operating system control |
| Azure Kubernetes Service | Orchestrate containerized applications |
| Azure Container Apps | Run containerized applications on a managed platform |

App Service supports HTTPS/TLS, custom domains, built-in authentication, CI/CD, scaling and deployment slots (depending on the hosting plan and configuration).

**Important:** App Service hosts mobile application backends, not the native application installed on a smartphone.

**Exam distinction:** Managed web and API hosting = App Service; event-driven serverless code = Functions; full operating system control = Virtual Machines; Kubernetes orchestration = AKS.

**Exam keywords:** App Service, PaaS, web apps, mobile backends, API apps, managed hosting.

**Brochure reference:** Chapter 5

---

## Question 095 — Azure DNS

Which service hosts public DNS domains and private DNS zones in Azure?

- A. Azure Firewall
- B. Azure DNS
- C. Azure VPN Gateway
- D. Azure Advisor

**Correct answer: B. Azure DNS**

### Explanation

Azure DNS hosts DNS zones. Firewall filters traffic; VPN Gateway connects networks; Advisor provides recommendations.

### Key concept to remember

Azure DNS hosts DNS zones.

**Brochure reference:** Chapter 6

---

## Question 096 — Pay-As-You-Go (PAYG)

Tailspin Toys uses a pay-as-you-go (PAYG) subscription in Azure. PAYG generally provides lowest cost over time, but least flexibility in terms of shifting consumption to new services.

- A. TRUE
- B. FALSE

**Correct answer: B. FALSE**

### Explanation

PAYG provides high flexibility without a long-term commitment. Customers pay for billable consumption. Reservations can reduce costs for predictable, long-running workloads.

### Why the other answer is incorrect

- **A. TRUE:** The statement reverses the usual trade-off between flexibility and long-term discounts. PAYG generally has higher unit prices than commitment-based pricing.

### Key concept to remember

| Pricing model | Commitment | Best suited for |
|---|---|---|
| Pay-as-you-go | None | Unpredictable or short-lived workloads |
| Azure Reservations | Typically 1 or 3 years | Predictable workloads |
| Azure Savings Plan for Compute | 1 or 3 years | Flexible eligible compute usage |
| Azure Spot VMs | No long-term commitment | Interruptible workloads |
| Azure Hybrid Benefit | Eligible software licenses | Reducing licensing costs |

**Important:** PAYG may be cheaper for short-lived or infrequently used resources. Commitment discounts are most useful when the commitment is sufficiently utilized.

**Exam distinction:** Maximum flexibility without commitment = PAYG; predictable long-term workloads = Reservations; flexible compute spending commitment = Savings Plan; interruptible workloads = Spot VMs.

**Exam keywords:** PAYG, flexibility, consumption-based pricing, long-term commitment, reservations, cost optimization.

**Brochure reference:** Chapter 9

---

## Question 097 — Azure Container Instances (ACI)

Azure Container Instances enable running containers without host servers to manage.

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

Azure Container Instances (ACI) runs containers without requiring customers to provision or manage host servers or virtual machines. Microsoft manages the underlying infrastructure.

### Why the other answer is incorrect

- **B. NO:** ACI is specifically designed to run containers without managing servers or a Kubernetes orchestration platform.

### Key concept to remember

| Azure service | Main purpose |
|---|---|
| Azure Container Instances (ACI) | Run containers without managing servers |
| Azure Kubernetes Service (AKS) | Managed Kubernetes orchestration |
| Azure Container Apps (ACA) | Serverless containerized applications and microservices |
| Azure Container Registry (ACR) | Store and manage container images |
| Azure Virtual Machines | Run containers with greater infrastructure control |

ACI supports rapid deployment, Linux and Windows containers, and per-second billing based on allocated resources and execution duration. It is suitable for isolated tasks, batch processing and simple containerized workloads.

**Important:** Serverless means customers do not manage the underlying servers, not that physical servers do not exist.

**Exam distinction:** No host management = ACI; Kubernetes orchestration = AKS; serverless microservices and automatic scaling = Container Apps; container image storage = ACR.

**Exam keywords:** ACI, containers, serverless, managed infrastructure, no host management, rapid deployment.

**Brochure reference:** Chapter 5

---

## Question 098 — Azure Container Instances and Elastic Bursting

Azure Container Instances enable elastic bursting for Azure Kubernetes Service.

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

Azure Container Instances (ACI) supports elastic bursting for Azure Kubernetes Service (AKS) through virtual nodes. Eligible pods can run on ACI without provisioning additional VM-based cluster nodes.

### Why the other answer is incorrect

- **B. NO:** AKS can integrate with ACI through virtual nodes to provide additional container capacity on demand.

### Key concept to remember

| Service or feature | Main purpose |
|---|---|
| Azure Container Instances | Run containers without managing host servers |
| Azure Kubernetes Service | Kubernetes container orchestration |
| AKS Virtual Nodes | Extend AKS capacity through ACI |
| Azure Container Apps | Serverless applications and microservices |
| Azure Container Registry | Store container images |
| AKS Cluster Autoscaler | Adjust the number of VM-based cluster nodes |

Elastic bursting helps accommodate workload spikes rapidly without provisioning additional VM-based nodes for eligible workloads.

**Important:** Virtual nodes must be configured and workloads must meet the integration's compatibility requirements.

**Exam distinction:** No host management = ACI; Kubernetes orchestration = AKS; elastic bursting from AKS to ACI = Virtual Nodes; scaling VM-based cluster nodes = Cluster Autoscaler.

**Exam keywords:** ACI, AKS, elastic bursting, virtual nodes, on-demand capacity, serverless containers.

**Brochure reference:** Chapter 5

---

## Question 099 — Azure Virtual Network and Subnet Communication

Azure VMs in different subnets in the same virtual network can communicate by default.

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

Azure VMs in different subnets within the same virtual network (VNet) can communicate by default using private IP addresses. Azure provides system routes between subnets.

### Why the other answer is incorrect

- **B. NO:** Subnets within a VNet are not isolated from one another by default. Network Security Groups (NSGs) can restrict traffic between them.

### Key concept to remember

| Scenario | Private communication by default |
|---|---|
| Same subnet | Yes |
| Different subnets in the same VNet | Yes |
| Different VNets | No |
| Peered VNets | Yes, subject to security rules |
| On-premises network and Azure VNet | No, requires connectivity |

| Feature | Main purpose |
|---|---|
| VNet | Provide an isolated virtual network |
| Subnet | Divide a VNet into smaller network segments |
| NSG | Allow or deny inbound and outbound traffic |
| VNet Peering | Connect separate VNets |
| VPN Gateway | Establish encrypted network connections |
| ExpressRoute | Provide private connectivity to Azure |

**Important:** NSGs, custom routes and operating system firewalls can restrict communication within the same VNet.

**Exam distinction:** Same VNet = communication allowed by default; different VNets = additional connectivity required; filter traffic = NSG; connect separate VNets = VNet Peering.

**Exam trap:** A subnet does not automatically create a security isolation boundary.

**Exam keywords:** VNet, subnets, private IP addresses, system routes, NSG, VNet Peering, default communication.

**Brochure reference:** Chapter 6

---

## Question 100 — Azure DDoS Protection

Azure DDoS Protection offers enhanced IP Protection and Network Protection tiers in addition to built-in infrastructure protection. Is this correct?

- A. YES
- B. NO

**Correct answer: A. YES**

### Explanation

Azure provides baseline infrastructure protection and two enhanced tiers. NO is incorrect under current terminology; Basic and Standard are historical names.

### Key concept to remember

Azure provides baseline infrastructure protection and two enhanced tiers.

**Brochure reference:** Chapter 6
