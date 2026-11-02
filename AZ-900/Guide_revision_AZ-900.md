# AZ-900 — Complete Azure Fundamentals Study Guide (English)

> **Certification:** Microsoft Certified: Azure Fundamentals  
> **Exam:** AZ-900  
> **Language:** English  
> **Syllabus baseline:** Skills measured as of July 20, 2026, as identified in the source guide.  
> **Purpose:** A self-contained learning reference and a structured knowledge base for another AI tutor.  
> **Important:** Microsoft can update the exam objectives and services. Before the exam, verify the official study guide: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900

## How to use this guide

Read sections 1–4 in order, then review the comparison tables, practice scenarios, and questions. Explain each term in your own words. For every Azure service, be able to answer **what it does, when to choose it, and what it is commonly confused with**. The questions in this guide are original study questions, not actual Microsoft exam questions.

An AI tutor using this file should:
1. Treat the official Microsoft study guide as the authority for exam scope.
2. Teach one concept at a time, using clear examples and counterexamples.
3. Ask scenario-based questions, with plausible distractors, without revealing answers prematurely.
4. Explain why every wrong answer is wrong.
5. Track missed topics and revisit them with progressively harder questions.
6. Distinguish exam fundamentals from deeper implementation details.
7. Check current Microsoft documentation when a product name, pricing feature, or policy may have changed.

---

# 1. Exam overview

## 1.1 What AZ-900 tests

AZ-900 validates **foundational understanding**, not hands-on engineering expertise. You should recognize cloud concepts and major Azure services, choose appropriate solutions in simple scenarios, and understand cost, governance, identity, and monitoring principles.

### Exam domains and approximate weights

| Domain | Weight |
|---|---:|
| Describe cloud concepts | 25–30% |
| Describe Azure architecture and services | 35–40% |
| Describe Azure management and governance | 30–35% |

The exam is scored on a scaled system, with **700/1000** as the passing score. A scaled score is not necessarily a raw percentage of correct answers. Question types can include multiple choice, multiple select, matching, and scenario-based questions. Confirm current exam logistics, timing, accommodations, and language availability on the official certification page.

## 1.2 Strategy for scenario questions

Identify the main requirement: **lowest operational burden**, **full OS control**, **private connectivity**, **high availability**, **global resilience**, **identity**, **governance**, or **cost optimization**. Eliminate services that solve a different problem. Pay attention to words such as *must*, *only*, *automatically*, *least privilege*, and *without managing servers*.

---

# 2. Domain 1 — Cloud concepts (25–30%)

## 2.1 Cloud computing

Cloud computing is the on-demand delivery of computing resources (compute, networking, storage, databases, analytics, and more) over a network, typically with metered usage. Instead of purchasing and operating all infrastructure yourself, you rent managed capacity.

### Characteristics

- **On-demand self-service:** Provision resources without waiting for manual hardware procurement.
- **Broad network access:** Reach services using standard network mechanisms.
- **Resource pooling:** Providers share physical infrastructure securely across customers.
- **Rapid elasticity:** Scale capacity up and down with demand.
- **Measured service:** Usage is monitored for billing and optimization.

### Capital expenditure (CapEx) vs operational expenditure (OpEx)

| CapEx | OpEx |
|---|---|
| Up-front purchase of physical assets | Ongoing expenses for consumed services |
| Servers, networking gear, data center facilities | Cloud subscriptions, compute usage, managed services |
| Capacity must often be planned ahead | Capacity can change with demand |
| Customer bears much of infrastructure maintenance | Provider manages the underlying infrastructure |

**Exam trap:** Cloud does not eliminate all CapEx, nor does every cloud service cost exactly what you use. Some services have fixed charges, reservations, minimum commitments, or separate data transfer charges.

## 2.2 Deployment models

**Public cloud:** Cloud infrastructure offered by a provider to multiple customers; customers' logical resources are isolated. Benefits include scalability, low entry cost, and rapid deployment.

**Private cloud:** Cloud-style infrastructure dedicated to one organization, either on-premises or hosted. Provides greater direct control but often more management overhead.

**Hybrid cloud:** Combines private/on-premises environments and public cloud with integration between them. Useful for gradual migration, latency, data residency, or legacy requirements.

**Multicloud:** Uses services from more than one public cloud provider. This is different from hybrid cloud: multiple clouds do not necessarily imply on-premises infrastructure.

## 2.3 Consumption-based pricing

Cloud usage can be charged based on compute time, allocated resources, requests, stored capacity, network egress, or service-specific units. **Pay-as-you-go** is flexible but not automatically the cheapest option.

Common optimization choices:
- **Reservations / commitment-based discounts:** Lower eligible costs in exchange for a longer commitment.
- **Spot VMs:** Discounted spare compute capacity that may be evicted; appropriate for interruptible jobs.
- **Azure Hybrid Benefit:** Apply eligible existing licenses to reduce some Azure costs.
- **Right-sizing:** Select resources that match actual needs.
- **Autoscaling:** Increase or decrease capacity when demand changes.

**Important:** Pricing differs by service, region, tier, currency, and contract. Verify current details using the Azure Pricing Calculator.

## 2.4 Shared responsibility model

The provider is responsible for the **physical cloud infrastructure**; the customer is responsible for its **data, identities, access decisions, and correct configurations**. Responsibilities vary by service model.

| Responsibility | On-premises | IaaS | PaaS | SaaS |
|---|---|---|---|---|
| Physical facilities, hardware | Customer | Provider | Provider | Provider |
| Physical network and hosts | Customer | Provider | Provider | Provider |
| Guest OS and patching | Customer | Customer | Provider | Provider |
| Application/runtime platform | Customer | Customer | Shared / provider-managed platform | Provider |
| Application data and access | Customer | Customer | Customer | Customer |
| User identities and endpoint security | Customer | Customer | Customer | Customer |

This table simplifies some shared responsibilities. For example, the provider may secure a SaaS application's infrastructure, while the customer must still manage user access, classification, and data handling.

## 2.5 Cloud benefits

**High availability:** Keep services accessible despite failures, typically using redundancy and failover. **Reliability:** The ability to recover from faults and continue functioning. **Scalability:** Increase or decrease capacity. **Elasticity:** Automatically or rapidly match capacity to changing demand.

**Vertical scaling (scale up/down):** Change the size of a machine (more CPU/RAM). **Horizontal scaling (scale out/in):** Add or remove instances.

**Predictability:** Cloud tools and architectures can improve performance and cost forecasting, though they do not guarantee fixed outcomes. **Security and governance:** Centralized policies, identity controls, encryption, and monitoring can support secure operation. **Manageability:** Portal, APIs, command-line tools, and templates make resources easier to administer.

**Exam trap:** High availability is not identical to disaster recovery. Redundancy inside one region may not survive a full regional outage.

## 2.6 IaaS, PaaS, SaaS

### Infrastructure as a Service (IaaS)

Rent virtual machines, disks, and networking. You manage guest operating systems, patches, installed software, and applications. **Example:** Azure Virtual Machines. Choose when you need OS-level control or must run a legacy application.

### Platform as a Service (PaaS)

Deploy applications or databases without managing the underlying OS or platform patching. **Examples:** Azure App Service and managed database services. Choose for faster application development and lower infrastructure management burden.

### Software as a Service (SaaS)

Use a complete provider-hosted application. The provider manages the application and its infrastructure; customers still manage data, access, and usage. **Example:** Microsoft 365.

| Need | Likely model |
|---|---|
| Install custom OS-level components | IaaS |
| Host a web application without managing servers | PaaS |
| Use a finished business application | SaaS |

## 2.7 Serverless

Serverless means the provider abstracts server provisioning and capacity management. You still run code on servers, but generally do not manage those servers. **Azure Functions** executes event-driven code; it can respond to HTTP requests, timers, messages, and other triggers. Billing and scaling depend on the chosen hosting plan. Serverless does **not** mean “always free” or “no configuration.”

---

# 3. Domain 2 — Azure architecture and services (35–40%)

## 3.1 Azure physical and management architecture

### Datacenters and regions

A **datacenter** is a physical facility. An **Azure region** is a geographic area containing one or more datacenters connected by low-latency networking. Choosing a region affects latency, service availability, regulatory requirements, resilience, and pricing. Not every service or VM size is available in every region.

### Availability zones

**Availability Zones** are physically separate datacenter groupings within a region, with independent power, cooling, and networking. A zone-resilient design can tolerate a zone failure when the chosen service and deployment support it. Some services are **zonal** (pinned to a zone); others are **zone-redundant** (spread across zones).

### Region pairs

Some Azure regions are paired within a geography for certain disaster-recovery and platform considerations. Do not assume every region is paired, or that pairing automatically replicates customer resources. You must choose and configure the relevant resilience features.

### Sovereign clouds / regions

Sovereign environments support specialized regulatory, residency, or government requirements. Examples include **Azure Government** and **Azure operated by 21Vianet in China**. Their availability, endpoints, and services can differ from the global public Azure cloud.

### Resources and hierarchy

An **Azure resource** is an instance of a service, such as a VM or storage account. A **resource group** is a logical container for resources; it supports deployment, management, RBAC scopes, and lifecycle organization. A resource belongs to one resource group at a time. Resource groups have a location for metadata, but contained resources can be deployed in different regions when supported.

An **Azure subscription** is a billing and access-management boundary. **Management groups** organize subscriptions and allow governance at scale.

```text
Microsoft Entra tenant
└── Management group
    └── Management group (optional)
        └── Subscription
            └── Resource group
                ├── Virtual machine
                ├── Storage account
                └── Virtual network
```

Management groups, subscriptions, resource groups, and resources are important **Azure RBAC** and **Azure Policy** scopes. A tenant is an identity boundary; it is not interchangeable with a subscription.

## 3.2 Compute and application hosting

### Azure Virtual Machines (VMs)

IaaS virtual servers running Windows or Linux. You select the VM size and OS, and manage guest OS configuration and software. VM costs can include compute, disks, networking, and licensing. **Use for:** legacy workloads, custom software, OS control, lift-and-shift migrations.

Typical supporting resources: virtual network, subnet, network interface, IP address, network security group, managed disk, and optionally load balancing.

### Virtual Machine Scale Sets (VMSS)

Manage and scale a group of VM instances. Useful when multiple similar instances must respond to demand. Can support autoscaling and load balancing. **Different from Availability Sets:** VMSS focuses on managing and scaling fleets; Availability Sets focus on spreading VMs across fault/update domains.

### Availability Sets

Help protect groups of VMs from certain hardware failures and planned maintenance by distributing them across **fault domains** and **update domains**. They are not the same as physically separated Availability Zones and do not protect against all regional outages.

### Azure Virtual Desktop

A cloud-hosted desktop and application virtualization service. Users access remote Windows desktops or applications. Choose when employees need centrally managed virtual desktops, not when you merely need a web application.

### Containers

Package applications and dependencies into portable units. Containers share a host OS kernel rather than including a full guest OS. They are generally lightweight compared with VMs.

- **Azure Container Instances (ACI):** Run containers without managing a cluster.
- **Azure Kubernetes Service (AKS):** Managed Kubernetes control plane for orchestrating containerized workloads; customers still manage many workload and cluster configuration aspects.
- **Azure Container Apps:** Managed container application platform with event-driven scaling and less Kubernetes management exposure.

### Azure App Service

PaaS for hosting web apps, REST APIs, and application backends. Supports multiple runtimes, deployment slots, custom domains, TLS, and scaling. **Use when:** host a website/API without managing guest OS patching.

### Azure Functions

Event-driven code execution; suited to scheduled jobs, queue handlers, lightweight API endpoints, and automation. Hosting plans differ in scaling, cold-start behavior, networking, and billing.

### Compute choice table

| Requirement | Service |
|---|---|
| Full control of OS | Virtual Machines |
| Large, scalable VM fleet | Virtual Machine Scale Sets |
| Spread VMs across fault/update domains | Availability Sets |
| Remote desktops | Azure Virtual Desktop |
| Run one-off container without cluster management | Azure Container Instances |
| Kubernetes orchestration | Azure Kubernetes Service |
| Managed container apps | Azure Container Apps |
| Managed website or API | Azure App Service |
| Event-driven function | Azure Functions |

## 3.3 Networking

### Azure Virtual Network (VNet)

A logically isolated network in Azure. It allows Azure resources to communicate and can connect to on-premises networks. A VNet uses one or more IP address spaces and is divided into **subnets**.

### Subnets and network security groups

A **subnet** partitions a VNet's address space. A **Network Security Group (NSG)** contains inbound and outbound security rules that allow or deny network traffic based on attributes such as source, destination, port, and protocol. An NSG is not a full application firewall or an identity-based authorization system.

### VNet peering

Connect two Azure VNets over Microsoft's backbone. Peered networks can communicate using private IP addresses, subject to routing and security rules. **Peering is not automatically transitive.**

### Azure DNS

Host DNS zones and resolve domain names. Public DNS zones are for internet-facing DNS; private DNS zones help resolve names inside Azure private networks.

### VPN Gateway

Connect an on-premises network to Azure through an **encrypted tunnel over the public internet** (site-to-site VPN), or enable client connections (point-to-site VPN). Suitable when private dedicated connectivity is not required.

### ExpressRoute

Private connectivity between an organization and Microsoft cloud services through a connectivity provider. Traffic does not use the public internet as its normal transport path. **Exam distinction:** VPN Gateway uses an encrypted connection over the internet; ExpressRoute offers private connectivity. ExpressRoute is not automatically encrypted end-to-end merely because it is private.

### Public vs private endpoints

A **public endpoint** is accessible via a public network address subject to access controls. A **private endpoint** uses a private IP in a VNet to connect privately to a supported service using Azure Private Link. It does not make the service “on-premises.”

## 3.4 Azure storage and migration

### Storage accounts and data types

A storage account provides a namespace and management boundary for supported Azure Storage services.

| Service | Purpose | Example |
|---|---|---|
| Azure Blob Storage | Unstructured object data | Images, videos, backups, logs |
| Azure Files | Managed SMB/NFS file shares | Shared folders, lift-and-shift file shares |
| Azure Queue Storage | Asynchronous message queue | Background processing |
| Azure Table Storage | NoSQL key-attribute data | Simple structured entities |
| Azure Managed Disks | Persistent block storage for VMs | OS and data disks |

**Exam trap:** Blob storage is object storage, not a traditional mounted SMB file share. Managed disks are block storage for VMs.

### Blob access tiers

- **Hot:** Frequent access; typically higher storage cost and lower access cost.
- **Cool:** Infrequent access; lower storage cost and higher access/retrieval charges.
- **Cold:** Rare access; lower storage cost with higher retrieval-related costs and minimum retention considerations.
- **Archive:** Long-term archival; data is offline and must be rehydrated before reading. Rehydration takes time.

Exact minimum retention periods, supported account types, and fees can change; consult current documentation.

### Storage redundancy

- **LRS (Locally Redundant Storage):** Copies within a single datacenter in one region.
- **ZRS (Zone-Redundant Storage):** Replication across availability zones in one region.
- **GRS (Geo-Redundant Storage):** LRS in primary region plus asynchronous replication to a secondary region.
- **RA-GRS (Read-Access GRS):** GRS with read access to the secondary endpoint.
- **GZRS (Geo-Zone-Redundant Storage):** ZRS in primary region plus asynchronous replication to secondary region.
- **RA-GZRS:** GZRS with secondary read access.

**Remember:** Replication is not a substitute for versioning, backup, retention, or protection against accidental deletion. Geo-replication may be asynchronous, so there can be data loss during failover.

### Transfer and synchronization

**AzCopy:** Command-line tool for copying data to/from Azure Storage. **Azure Storage Explorer:** Graphical tool for browsing and managing storage. **Azure File Sync:** Synchronizes on-premises Windows Server file shares with Azure Files; supports cloud tiering. **Azure Data Box:** Physical device/service for transferring large datasets when network transfer is impractical.

### Migration

**Azure Migrate:** Discover, assess, and plan migration of on-premises servers and workloads to Azure; supports migration scenarios. **Azure Data Box:** Move bulk data physically. Do not confuse assessment/migration orchestration with the physical transfer device.

## 3.5 Identity, access, and security

### Microsoft Entra ID

Cloud identity and access management service (formerly Azure Active Directory). It supports users, groups, application identities, authentication, single sign-on, and Conditional Access. It is **not the same as traditional Active Directory Domain Services**.

### Microsoft Entra Domain Services

Provides managed domain services such as domain join, LDAP, Kerberos, and NTLM for compatible workloads, without customers operating domain controller VMs. Choose for legacy domain-dependent applications, not as the default replacement for Entra ID.

### Authentication vs authorization

**Authentication:** Prove who you are. **Authorization:** Determine what actions you may perform. **Single Sign-On (SSO):** Authenticate once to access multiple integrated applications. **Multifactor Authentication (MFA):** Require two or more independent factor types (something you know, have, or are).

**Passwordless authentication:** Methods such as FIDO2 security keys, Windows Hello for Business, and supported authenticator flows reduce dependence on passwords.

**External identities:** Collaborate with partners, guests, or external users while managing their access appropriately.

### Conditional Access

Microsoft Entra Conditional Access evaluates signals (user, location, device, application, risk, etc.) and applies access decisions or requirements such as MFA or compliant-device checks. It is an **identity access policy** capability, not a network firewall.

### Azure role-based access control (RBAC)

Azure RBAC controls **who can perform which Azure resource management actions at what scope**. A role assignment combines a security principal, role definition, and scope.

Common built-in roles:
- **Owner:** Manage resources and assign access.
- **Contributor:** Manage resources but cannot normally grant Azure RBAC access.
- **Reader:** View resources without changing them.
- **User Access Administrator:** Manage user access to Azure resources.

Scopes are inherited downward: management group → subscription → resource group → resource. Apply the **principle of least privilege**.

**Exam trap:** Azure RBAC is about access permissions; **Azure Policy** checks/enforces resource configuration rules. A user might have permission to deploy a VM but be blocked by a policy restricting regions.

### Zero Trust

Security approach built on **verify explicitly**, **use least-privilege access**, and **assume breach**. No request is automatically trusted solely because it originates inside a corporate network.

### Defense in depth

Layer security controls across physical security, identity, perimeter, network, compute, application, and data. If one layer fails, other layers reduce risk.

### Microsoft Defender for Cloud

Cloud security posture management and workload protection capabilities. Helps identify security recommendations, assess configurations, and protect supported workloads. It is not the same as Microsoft Entra ID, and it does not replace correct customer configuration.

---

# 4. Domain 3 — Azure management and governance (30–35%)

## 4.1 Cost management

### Cost factors

Costs depend on resource type, SKU/size, usage duration, region, consumption, storage capacity/tier, network egress, licensing, reservations, and support options. **Ingress** is often free for many Azure services, but do not generalize to every service and transfer path.

### Azure Pricing Calculator

Estimate projected **Azure service costs** before deployment. Useful for comparing configurations and regions.

### Total Cost of Ownership (TCO) Calculator

Estimate and compare the financial impact of on-premises infrastructure versus moving workloads to Azure, using assumptions about servers, operations, and other expenses.

### Microsoft Cost Management

Analyze actual and forecast cloud spending, allocate costs, configure budgets, and identify cost patterns. A **budget** can notify when thresholds are crossed; a budget alone does not automatically shut down resources.

### Tags

Key-value metadata attached to supported resources, resource groups, and subscriptions. Examples: `environment=production`, `department=finance`, `owner=team-a`. Tags help organization, automation, and cost reporting. Tags are **not** security boundaries and do not automatically inherit in all circumstances.

## 4.2 Governance and compliance

### Microsoft Purview

Data governance, discovery, classification, compliance, and related capabilities across supported environments. Think **understanding and governing data**, not granting VM permissions or preventing deletion of a resource.

### Azure Policy

Define and enforce rules for resource configurations. Examples: restrict deployment regions, require tags, require approved SKUs, or audit security configurations. Policies can have effects such as **Deny**, **Audit**, and **Modify** where supported. Group related definitions into **initiatives**.

### Azure Policy vs RBAC

| Azure Policy | Azure RBAC |
|---|---|
| What configurations are allowed or required? | Who can perform which actions? |
| Enforce allowed regions, required tags, standards | Give Reader, Contributor, Owner permissions |
| Evaluates resource compliance | Evaluates authorization |

### Resource locks

Protect resources against accidental management operations.
- **CanNotDelete:** Authorized users can generally modify but cannot delete the protected resource.
- **ReadOnly:** Prevents management-plane modifications; may affect operations that look like reads but require writes.

Locks apply to the management plane and can have inheritance effects; they are **not** a backup, a substitute for RBAC, or a universal block on data-plane operations.

### Governance comparison

| Requirement | Primary tool |
|---|---|
| Inventory and govern sensitive data | Microsoft Purview |
| Enforce approved deployment regions | Azure Policy |
| Prevent accidental deletion | Resource lock |
| Grant resource management permissions | Azure RBAC |
| Review security posture | Microsoft Defender for Cloud |

## 4.3 Deployment and management

### Azure portal

Web interface for creating, configuring, and monitoring Azure resources.

### Azure Cloud Shell

Browser-accessible authenticated shell environment with **Bash** and **PowerShell**. Provides commonly used Azure tools. Cloud Shell is an execution environment, not a separate management API.

### Azure CLI

Cross-platform command-line tool using `az` commands, useful in scripts and automation.

```bash
az group list --output table
az account show
```

### Azure PowerShell

PowerShell modules and cmdlets for Azure management, useful for administrators and PowerShell automation.

```powershell
Get-AzResourceGroup
Get-AzContext
```

### Azure Arc

Extend Azure management and governance capabilities to supported resources outside Azure, including on-premises and other clouds. **Azure Arc does not automatically migrate a server to Azure.**

### Infrastructure as Code (IaC)

Define infrastructure declaratively in version-controlled files rather than manually configuring every resource. Benefits include consistency, repeatability, automation, and review.

### Azure Resource Manager (ARM)

Azure's deployment and management layer for resources. It provides consistent APIs, resource grouping, access controls, and template deployments.

### ARM templates and Bicep

**ARM templates** are declarative JSON definitions of Azure resources and dependencies. **Bicep** is a concise declarative language that compiles to ARM templates. Templates support parameters, expressions, dependencies, and repeatable deployments.

**Exam distinction:** ARM is the deployment management layer; ARM templates/Bicep describe the desired infrastructure; CLI/PowerShell/portal are interfaces used to interact with Azure.

## 4.4 Monitoring and operational health

### Azure Advisor

Personalized recommendations for improving **cost, security, reliability, operational excellence, and performance**. Advisor provides recommendations; it is not the primary telemetry ingestion platform.

### Azure Service Health

Provides information about Azure service issues, planned maintenance, and health advisories relevant to your services and regions. Includes **Azure Status** for broader public service information and **Resource Health** for the health of individual resources.

### Azure Monitor

Collect, analyze, and act on telemetry from Azure and connected environments.

- **Metrics:** Numeric time-series measurements such as CPU usage and request count.
- **Logs:** Detailed event and diagnostic records.
- **Log Analytics:** Query and analyze log data, commonly using Kusto Query Language (KQL).
- **Alerts:** Notify or trigger actions when specified conditions occur.
- **Application Insights:** Application performance monitoring, including requests, dependencies, failures, and traces.
- **Dashboards / Workbooks:** Visualize operational data.

### Know the differences

| Question | Answer |
|---|---|
| “How can I lower cost and improve reliability?” | Azure Advisor |
| “Is Azure experiencing an incident in my region?” | Azure Service Health |
| “Is this particular VM healthy?” | Azure Resource Health |
| “What is the CPU utilization trend?” | Azure Monitor Metrics |
| “Search diagnostic events and run queries” | Log Analytics |
| “Why are my application requests slow?” | Application Insights |
| “Send a notification when a threshold is crossed” | Azure Monitor Alerts |

---

# 5. High-value comparisons to memorize

| Pair | Key difference |
|---|---|
| CapEx / OpEx | Up-front assets / ongoing consumption costs |
| Public / private cloud | Shared provider platform / dedicated organizational environment |
| Hybrid / multicloud | On-premises + cloud / multiple cloud providers |
| IaaS / PaaS / SaaS | Manage OS / manage app / use complete app |
| Scalability / elasticity | Ability to change capacity / respond to demand |
| Scale up / scale out | Bigger instance / more instances |
| Availability Set / Availability Zone | Fault/update domains / separate datacenter groupings |
| VM / App Service | OS control / managed web hosting |
| VMSS / AKS | VM fleet scaling / Kubernetes orchestration |
| App Service / Functions | Hosted app/API / event-driven code |
| VPN Gateway / ExpressRoute | Internet-based encrypted VPN / private connectivity |
| VNet peering / VPN | Connect Azure VNets / encrypted remote network connection |
| Blob / Files / Disks | Object / file share / block storage |
| LRS / ZRS | Local copies / cross-zone copies |
| GRS / GZRS | Geo with local primary / geo with zone-redundant primary |
| Authentication / authorization | Identity verification / permissions |
| Entra ID / Entra Domain Services | Cloud identity / managed legacy domain capabilities |
| Conditional Access / RBAC | Sign-in conditions / Azure resource permissions |
| Azure Policy / RBAC / locks | Configuration rules / permissions / deletion or write protection |
| Pricing Calculator / Cost Management | Estimate future cost / analyze spending |
| Azure Migrate / Data Box | Assess/migrate workloads / physically transfer bulk data |
| Advisor / Monitor / Service Health | Recommendations / telemetry / service incidents |
| ARM / ARM template / Bicep | Management layer / JSON IaC / concise IaC language |

## 5.1 Availability and resilience

- **Availability Zone:** Protect against a datacenter-zone failure within a region when architected appropriately.
- **Zone-redundant service:** Spread instances or data across zones, where supported.
- **Geo-redundant storage:** Replicate to a second region, generally asynchronously.
- **Backup:** Retain recoverable copies or versions to address deletion, corruption, or ransomware.
- **Disaster recovery:** Restore service after a major outage, with recovery objectives.
- **RPO (Recovery Point Objective):** Maximum acceptable data loss measured in time.
- **RTO (Recovery Time Objective):** Target time to restore service.

---

# 6. Choose the correct service: scenario drills

| Scenario | Best match | Why |
|---|---|---|
| Run a legacy application needing administrator OS access | Azure Virtual Machines | Full guest OS control |
| Scale hundreds of similar VMs | Virtual Machine Scale Sets | Fleet management and scaling |
| Host a managed ASP.NET Core web app | Azure App Service | Managed web platform |
| Execute code when a queue message arrives | Azure Functions | Event-driven compute |
| Orchestrate many microservice containers | AKS | Kubernetes orchestration |
| Run a container without operating a cluster | Azure Container Instances | Serverless-style container execution |
| Provide remote desktops to staff | Azure Virtual Desktop | Desktop virtualization |
| Connect an office over encrypted public internet | VPN Gateway | Site-to-site VPN |
| Obtain private connectivity via a provider | ExpressRoute | Private connectivity |
| Connect two Azure virtual networks | VNet peering | Private VNet connectivity |
| Resolve internal service names | Azure Private DNS | Private DNS zones |
| Restrict subnet traffic by ports and IP addresses | NSG | Network filtering |
| Give a storage service a private VNet IP | Private Endpoint | Private Link |
| Store images and backup archives | Blob Storage | Object storage |
| Provide shared SMB folders | Azure Files | Managed file shares |
| Attach persistent volumes to Azure VMs | Managed Disks | Block storage |
| Synchronize Windows file server shares with Azure | Azure File Sync | Hybrid file synchronization |
| Transfer petabytes using a shipped appliance | Azure Data Box | Offline bulk transfer |
| Assess on-premises servers before cloud migration | Azure Migrate | Discovery and assessment |
| Enforce MFA for risky sign-ins | Conditional Access | Identity-based access rules |
| Grant view-only access to a resource group | Azure RBAC Reader | Read-only management permissions |
| Restrict resources to approved regions | Azure Policy | Configuration governance |
| Stop accidental deletion of a production resource | CanNotDelete lock | Management-plane protection |
| Find sensitive data across sources | Microsoft Purview | Data governance |
| Improve cloud security posture | Defender for Cloud | Security recommendations and protection |
| Review spend by department | Cost Management + tags | Cost analysis and allocation |
| Estimate the price of a proposed deployment | Pricing Calculator | Forward-looking estimate |
| Compare on-premises costs with cloud costs | TCO Calculator | Ownership-cost comparison |
| Manage on-premises servers using Azure capabilities | Azure Arc | Hybrid/multicloud management |
| Recreate infrastructure consistently | Bicep / ARM templates | Declarative IaC |
| Get optimization recommendations | Azure Advisor | Best-practice recommendations |
| Check a regional Azure incident | Azure Service Health | Provider service health |
| Query detailed telemetry | Azure Monitor Logs / Log Analytics | Log analytics |
| Diagnose slow application requests | Application Insights | Application performance telemetry |

---

# 7. Practice questions (30) with explanations

**Instructions:** Answer without looking at the answer key. Each question has one best answer unless stated otherwise.

### Q1
A company wants to avoid buying servers and instead pay for cloud resources as they are consumed. Which financial model is emphasized?

A. CapEx  
B. OpEx  
C. Depreciation  
D. Fixed asset procurement

### Q2
Which cloud deployment model combines an on-premises datacenter with public cloud services?

A. Private only  
B. Hybrid  
C. Multicloud only  
D. SaaS

### Q3
Who is responsible for patching the guest operating system of an Azure VM?

A. Microsoft only  
B. Customer  
C. ISP  
D. Microsoft Entra ID

### Q4
A team wants to deploy a website without maintaining guest OS patches. Which model fits best?

A. IaaS  
B. PaaS  
C. Private cloud only  
D. On-premises hosting

### Q5
What does horizontal scaling mean?

A. Increasing one VM's RAM  
B. Adding more instances  
C. Moving to another region  
D. Encrypting data

### Q6
Which statement about serverless is correct?

A. No servers are used  
B. Customer manages all physical servers  
C. Infrastructure management is abstracted away  
D. It is always free

### Q7
Which Azure construct groups subscriptions for centralized governance?

A. Resource group  
B. Management group  
C. Availability Set  
D. VNet

### Q8
What is the purpose of Availability Zones?

A. Organize billing  
B. Provide physically separate datacenter groupings within a region  
C. Replace RBAC  
D. Connect offices by VPN

### Q9
A legacy app requires custom software installed at OS level. Which service is most suitable?

A. Azure Virtual Machines  
B. Microsoft 365  
C. Azure Functions  
D. Azure DNS

### Q10
Which service is intended to manage and scale a fleet of VMs?

A. Azure Files  
B. Virtual Machine Scale Sets  
C. Azure Policy  
D. Azure Advisor

### Q11
Which Azure service provides managed Kubernetes orchestration?

A. Azure App Service  
B. Azure Kubernetes Service  
C. Azure Functions  
D. Azure DNS

### Q12
Which service is best for a timer-triggered small job?

A. Azure Functions  
B. Azure Virtual Desktop  
C. ExpressRoute  
D. Azure Data Box

### Q13
Which option connects an on-premises network to Azure through an encrypted tunnel over the public internet?

A. ExpressRoute  
B. VPN Gateway  
C. Azure DNS  
D. Azure Policy

### Q14
Which option offers private connectivity to Microsoft cloud services through a connectivity provider?

A. ExpressRoute  
B. Azure Monitor  
C. Blob Storage  
D. Azure File Sync

### Q15
Which service provides a managed SMB file share?

A. Azure Blob Storage  
B. Azure Files  
C. Azure Table Storage  
D. Azure Queue Storage

### Q16
Which Blob access tier is designed for long-term offline archival?

A. Hot  
B. Cool  
C. Archive  
D. Premium SSD

### Q17
Which redundancy option replicates storage across availability zones in one region?

A. LRS  
B. ZRS  
C. GRS only  
D. RA-GRS only

### Q18
Which tool is suited to transferring a very large dataset using a physical device?

A. Azure Data Box  
B. Azure Policy  
C. Azure Advisor  
D. Entra ID

### Q19
Which service helps discover and assess on-premises workloads for migration?

A. Azure Migrate  
B. Azure DNS  
C. Azure Monitor  
D. Azure Files

### Q20
What is the difference between authentication and authorization?

A. They are identical  
B. Authentication proves identity; authorization grants permissions  
C. Authorization always happens first  
D. Authentication is only for network devices

### Q21
Which feature can require MFA based on sign-in risk or device state?

A. Conditional Access  
B. Azure Resource Locks  
C. Azure Data Box  
D. Azure Pricing Calculator

### Q22
Which Azure RBAC role generally allows viewing resources but not changing them?

A. Owner  
B. Contributor  
C. Reader  
D. User Access Administrator

### Q23
Which principle is central to Zero Trust?

A. Trust internal networks automatically  
B. Grant all users administrator access  
C. Verify explicitly and use least privilege  
D. Disable authentication for managed devices

### Q24
Which service provides cloud security posture recommendations?

A. Microsoft Defender for Cloud  
B. Azure Data Box  
C. Azure DNS  
D. Azure File Sync

### Q25
Which tool estimates the cost of a proposed Azure deployment?

A. Azure Pricing Calculator  
B. Azure Monitor  
C. Azure Resource Health  
D. Azure Arc

### Q26
Which tool helps analyze actual Azure spending and create budgets?

A. Microsoft Cost Management  
B. Azure DNS  
C. Azure Virtual Desktop  
D. Azure Functions

### Q27
A company must block deployment in unapproved regions. What should it use?

A. Azure RBAC Reader  
B. Azure Policy  
C. Azure Monitor Metrics  
D. Azure Data Box

### Q28
A production resource must not be deleted accidentally. Which protection is most directly relevant?

A. CanNotDelete resource lock  
B. Availability Set  
C. Azure Pricing Calculator  
D. VNet peering

### Q29
Which service helps manage eligible on-premises and other-cloud resources using Azure?

A. Azure Arc  
B. Azure Files  
C. Azure DNS  
D. Azure Queue Storage

### Q30
Which service is most directly used to investigate application request latency and failures?

A. Application Insights  
B. Azure Data Box  
C. Azure Policy  
D. Azure Migrate

## Answer key and explanations

| Question | Answer | Explanation |
|---|---|---|
| 1 | B | OpEx emphasizes ongoing operating costs; CapEx means buying capital assets. |
| 2 | B | Hybrid combines on-premises/private infrastructure and public cloud. |
| 3 | B | In IaaS, the customer manages and patches the guest OS. |
| 4 | B | PaaS abstracts guest OS management from the application team. |
| 5 | B | Horizontal scaling adds instances; vertical scaling enlarges one instance. |
| 6 | C | Serverless abstracts server provisioning; physical servers still exist. |
| 7 | B | Management groups provide governance across subscriptions. |
| 8 | B | Zones are separate datacenter groupings within a region. |
| 9 | A | VMs offer guest OS control. |
| 10 | B | VMSS manages and scales groups of VM instances. |
| 11 | B | AKS is Azure's managed Kubernetes service. |
| 12 | A | Functions supports timer triggers and event-driven code. |
| 13 | B | VPN Gateway supports encrypted tunnels over the internet. |
| 14 | A | ExpressRoute provides private connectivity through a provider. |
| 15 | B | Azure Files provides managed file shares. |
| 16 | C | Archive is an offline archival tier requiring rehydration. |
| 17 | B | ZRS replicates across zones in the same region. |
| 18 | A | Data Box supports physical bulk transfer. |
| 19 | A | Azure Migrate helps discover and assess migration candidates. |
| 20 | B | Authentication is identity proof; authorization is permission checking. |
| 21 | A | Conditional Access can enforce context-based sign-in controls. |
| 22 | C | Reader can view but not manage resources. |
| 23 | C | Zero Trust requires explicit verification and least privilege. |
| 24 | A | Defender for Cloud supports security posture management. |
| 25 | A | Pricing Calculator estimates future Azure costs. |
| 26 | A | Cost Management analyzes spending and budgets. |
| 27 | B | Policy can deny noncompliant deployments. |
| 28 | A | CanNotDelete protects against management-plane deletion. |
| 29 | A | Azure Arc extends Azure management beyond Azure. |
| 30 | A | Application Insights is for application performance monitoring. |

**Self-check:** If you miss a question, explain why the correct service is appropriate *and* why each distractor is not. Do not memorize the letters: regenerate questions with randomized answer order.

---

# 8. Readiness checklist

## Cloud concepts
- [ ] Explain public, private, hybrid, and multicloud.
- [ ] Distinguish CapEx from OpEx and consumption pricing.
- [ ] Explain shared responsibility for IaaS, PaaS, and SaaS.
- [ ] Distinguish scalability, elasticity, availability, and reliability.
- [ ] Explain scale up/down versus scale out/in.
- [ ] Recognize serverless workloads.

## Azure architecture
- [ ] Distinguish datacenters, regions, region pairs, and Availability Zones.
- [ ] Recognize sovereign cloud environments.
- [ ] Explain resources, resource groups, subscriptions, management groups, and tenants.
- [ ] Explain VM, VMSS, Availability Sets, AVD, containers, AKS, ACI, App Service, and Functions.
- [ ] Distinguish VNet, subnet, NSG, peering, DNS, VPN Gateway, and ExpressRoute.
- [ ] Explain public versus private endpoints.

## Storage, migration, identity, and security
- [ ] Choose Blob, Files, Queue, Table, or Managed Disks.
- [ ] Distinguish Hot, Cool, Cold, and Archive tiers.
- [ ] Compare LRS, ZRS, GRS, RA-GRS, GZRS, and RA-GZRS.
- [ ] Recognize AzCopy, Storage Explorer, File Sync, Data Box, and Migrate.
- [ ] Distinguish Entra ID from Entra Domain Services.
- [ ] Explain SSO, MFA, passwordless, external identities, and Conditional Access.
- [ ] Explain Azure RBAC roles and scopes.
- [ ] Explain Zero Trust, defense in depth, and Defender for Cloud.

## Management and governance
- [ ] Identify cost drivers, Pricing Calculator, TCO, Cost Management, and tags.
- [ ] Distinguish Purview, Policy, RBAC, and resource locks.
- [ ] Recognize portal, Cloud Shell, Azure CLI, and Azure PowerShell.
- [ ] Explain Azure Arc, IaC, ARM, ARM templates, and Bicep.
- [ ] Distinguish Advisor, Service Health, Resource Health, Azure Monitor, Log Analytics, alerts, and Application Insights.

---

# 9. Glossary

| Term | Meaning |
|---|---|
| ARM | Azure Resource Manager; resource deployment and management layer |
| Availability Set | VM placement across fault and update domains |
| Availability Zone | Physically separate datacenter grouping in a region |
| Azure Arc | Management for supported hybrid and multicloud resources |
| Azure Policy | Resource configuration compliance and enforcement |
| Azure RBAC | Authorization for Azure resource management |
| Bicep | Declarative Azure infrastructure language |
| CapEx | Capital expenditure |
| Conditional Access | Context-aware identity access policies |
| Defender for Cloud | Cloud security posture and workload protection |
| Elasticity | Ability to match capacity to changing demand |
| Entra ID | Microsoft's cloud identity and access management service |
| ExpressRoute | Private connectivity to Microsoft cloud services |
| GRS | Geo-redundant storage |
| GZRS | Geo-zone-redundant storage |
| IaaS | Infrastructure as a Service |
| IaC | Infrastructure as Code |
| LRS | Locally redundant storage |
| MFA | Multifactor authentication |
| NSG | Network Security Group |
| OpEx | Operational expenditure |
| PaaS | Platform as a Service |
| Private Endpoint | Private IP connectivity to supported Azure services |
| Resource group | Logical container for Azure resources |
| SaaS | Software as a Service |
| Serverless | Computing with abstracted infrastructure management |
| SSO | Single Sign-On |
| VNet | Azure Virtual Network |
| VPN | Virtual Private Network |
| VMSS | Virtual Machine Scale Sets |
| Zero Trust | Verify explicitly, least privilege, assume breach |
| ZRS | Zone-redundant storage |

---

# 10. Official learning resources

Use these Microsoft sources as the source of truth:

1. **AZ-900 study guide:** https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900
2. **Azure Fundamentals certification:** https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/
3. **Microsoft Learn — Azure fundamentals learning paths:** https://learn.microsoft.com/en-us/training/azure/
4. **Azure documentation:** https://learn.microsoft.com/en-us/azure/
5. **Azure Pricing Calculator:** https://azure.microsoft.com/en-us/pricing/calculator/
6. **Microsoft Learn practice assessment:** Follow the practice-assessment link from the Azure Fundamentals certification page.

**Recommended sequence:** Learn cloud concepts → architecture and services → management and governance → service comparison tables → practice questions → official practice assessment → review weak areas.

---

# 11. Coverage matrix and instructions for another AI

## 11.1 Scope and limitations

This guide is designed as a **complete foundational study reference** for the three AZ-900 domains, not as an exhaustive description of every Azure product. Some implementation details are deliberately simplified to match the fundamentals level. It is not an official Microsoft publication. Service capabilities, prices, names, and exam objectives may change.

## 11.2 Objective coverage matrix

| Official objective group | Primary sections |
|---|---|
| Describe cloud computing | 2.1 |
| Describe benefits of cloud services | 2.5 |
| Describe cloud service types | 2.4, 2.6, 2.7 |
| Describe core architectural components of Azure | 3.1 |
| Describe Azure compute and networking services | 3.2, 3.3 |
| Describe Azure storage services | 3.4 |
| Describe Azure identity, access, and security | 3.5 |
| Describe cost management in Azure | 4.1 |
| Describe features and tools for governance and compliance | 4.2 |
| Describe features and tools for managing and deploying Azure resources | 4.3 |
| Describe monitoring tools in Azure | 4.4 |

## 11.3 AI tutor operating instructions

If another AI receives this Markdown file, it should use the following rules:

**Role:** Act as an AZ-900 tutor and exam coach. Teach in English by default, or in the learner's preferred language if requested. Keep Azure service names in their official English form.

**Curriculum:** Cover all 11 objective groups from the coverage matrix. Keep a checklist of what has been taught and what the learner has demonstrated.

**Teaching:** Begin with short explanations and concrete scenarios. For each service, explain its purpose, a typical use case, its nearest alternatives, and at least one common misconception.

**Assessment:** Generate original AZ-900-style questions with a mix of straightforward recall, service-selection scenarios, and comparisons. Ask one question at a time when interactive. Do not show the answer until the learner responds. Explain every option after grading.

**Adaptive review:** Track incorrect answers, revisit weak objectives, and increase difficulty as the learner improves. Periodically mix questions from all three domains.

**Accuracy:** When the learner asks about current pricing, feature availability, product naming, or exam format, consult official Microsoft documentation. Never treat this file as proof that a time-sensitive fact is still current.

**Boundaries:** Do not claim access to actual exam questions. Do not guarantee a pass based only on practice results.

### Ready-to-use prompt

> You are my Microsoft AZ-900 tutor. Use the attached English Markdown study guide as the baseline and the current official Microsoft AZ-900 study guide as the authority for exam scope. Teach all objective groups, identify my weak areas, and quiz me one question at a time. Do not reveal the answer until I respond. After each answer, explain the correct choice and why the other options are wrong. Mix scenarios and concept questions. Keep track of my results by domain and prioritize what I need to review. Tell me when any detail should be rechecked against current Microsoft documentation.

## 11.4 Final verification before sitting the exam

1. Reopen the official AZ-900 study guide and check the current “skills measured as of” date.
2. Compare the official objective bullets against the coverage matrix above.
3. Review any new or renamed services.
4. Complete the official practice assessment and analyze missed questions.
5. Confirm exam booking requirements and identification rules on the certification site.

---

*End of AZ-900 English study guide.*
