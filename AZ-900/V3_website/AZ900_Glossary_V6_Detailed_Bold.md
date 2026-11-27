# AZ-900 — Detailed Exam Glossary | V6-aligned · 188 terms

**Reviewed:** November 27, 2026  
**Scope:** Microsoft Azure Fundamentals (AZ-900), skills measured from July 20, 2026.  
**Language:** English. **Entries:** 152 core/related entries + 36 optional recognition entries (grouped concepts count as one entry).

## How to use this glossary

- **Core** — vocabulary directly named in the official objectives, or principal services that illustrate those objectives (for example Azure Functions and App Service).
- **Related** — useful supporting concepts and distinctions, especially for scenario questions. Not all are individually named in the exam guide.
- **Optional** — additional services and details encountered in Classic Practice, Exam Style or the brochure; recognize their purpose, but prioritize the official objectives.

November 27 update: 11 new terms and 17 clarified definitions, aligned with the 38 Additional Practice questions. The original question references below remain valid; the new question index appears at the end. Each entry contains a single self-contained explanation of the term, its purpose and relevant technical distinctions. The definitions were rewritten using the existing V5 study material and expanded glossary; this is a clarity revision, not a new independent Microsoft documentation audit.

Read the main definition first; cover the right column and recall the purpose from the term. Use the question references to practice distinctions. This is a revision glossary, not another full course. Generic terms such as “budget”, “forecast” and “cost” are not separate entries; relevant features are explained under their Azure service. Acronyms and aliases are grouped with their principal term.

**Basis:** `AZ900_Brochure_V5_Microsoft_Reviewed.md`, the 200 entries in `AZ900_Question_Bank_V4.json`, `AZ900_Audit_Final_200_Questions.md` and the [official Microsoft AZ-900 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900). The source guide was rechecked on the review date; selected storage, ARM and identity details were checked against current Microsoft documentation. Definitions are concise original summaries, not official exam questions or quotations. Priority labels are editorial, not Microsoft ratings. The previous audit's limitations still apply; not every product statement has been independently revalidated in this glossary.

## Part A — Cloud concepts (25–30%)

### 1. Cloud computing

**Read:** Brochure V6, chapter 1 · [Microsoft Learn module](https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/)  
**Practice (original bank, chapter tags):** 2, 4, 5, 6, 9, 13, 14, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110.

| Term / acronym | Priority | What to remember |
| --- | --- | --- |
| Cloud computing | Core | Cloud computing is the **delivery of computing resources**, such as servers, storage, networking and applications, **over a network on demand**. Customers can provision and release resources **without purchasing the underlying physical equipment**, and charges depend on the chosen service and pricing model. |
| Public cloud | Core | A public cloud is a cloud environment operated by a service provider for **multiple customers** using **shared physical infrastructure**. Each customer manages its own resources and access permissions, so the term public describes the deployment model **rather than unrestricted public access** to customer data. |
| Private cloud | Core | A private cloud provides cloud infrastructure **dedicated to a single organization**, either in its own facilities or hosted by a provider. It offers greater control over dedicated infrastructure while retaining cloud capabilities such as **self-service provisioning and resource pooling**. **Virtualization alone** does not necessarily constitute a private cloud. |
| Hybrid cloud | Core | A hybrid cloud combines **public cloud services with private cloud or on-premises infrastructure** in an integrated environment. It allows an organization to **operate workloads across both environments**, keeping selected systems or data locally while using public cloud capacity and services where appropriate. |
| Shared responsibility model | Core | The shared responsibility model **divides security and operational responsibilities** between the cloud provider and the customer. Microsoft manages the **physical infrastructure**; responsibility for the operating system, applications and network configuration varies with the service model. Customers remain responsible for their **data, identities and access configuration**. |
| Consumption-based model | Core | A consumption-based model charges according to **measured billable usage**, such as storage capacity, transactions or execution duration. On suitable per-execution plans, intermittent workloads may avoid paying for idle compute between executions. Other meters charge for **allocated capacity even when idle**; consumption pricing does not imply that every cloud resource is billed only while actively processing work. |
| Pay-as-you-go | Related | Pay-as-you-go is a pricing option that charges for **billable resource usage** **without a long-term reservation commitment**. It allows customers to adjust resources as requirements change. Provisioned resources may **continue to generate charges** even when they are not actively used. |
| Capital expenditure - CapEx | Related | Capital expenditure is an **upfront investment in assets** intended to be used over an **extended period**, such as physical servers or networking equipment. An organization must commit funds and **plan capacity before** the equipment can be used, rather than paying only for ongoing consumption. |
| Operational expenditure - OpEx | Related | Operational expenditure (OpEx) is the **ongoing cost of operating a service or business**, including recurring cloud bills, electricity and datacenter cooling. Unlike CapEx, it is not primarily an upfront investment in long-lived assets. Cloud adoption can shift spending toward OpEx and variable usage charges, but **does not guarantee lower total costs**. |
| Economies of scale | Related | Economies of scale occur when the **average cost of delivering a service decreases** as the **scale of operations increases**. Cloud providers can purchase equipment in large quantities and **share datacenter operating costs** across many customers, which can reduce the cost per unit of computing capacity. |
| Serverless computing | Core | Serverless computing is a model in which the **cloud provider manages the servers** and execution environment, allowing developers to focus on **application code and configuration**. Scaling and billing depend on the hosting plan; some plans **charge for provisioned capacity**. Physical servers still exist, but the customer does not directly administer them. |
| Multicloud | Related | Multicloud describes the use of services from **more than one cloud provider**. It allows organizations to combine different providers' capabilities or distribute workloads between them. Unlike hybrid cloud, multicloud **does not necessarily involve a private or on-premises environment**. |

### 2. Benefits of cloud services

**Read:** Brochure V6, chapter 2 · [Microsoft Learn module](https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/)  
**Practice (original bank, chapter tags):** 12, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120.

| Term / acronym | Priority | What to remember |
| --- | --- | --- |
| High availability - HA | Core | High availability is the design of a system to **remain accessible and operational** despite certain **component failures or maintenance events**. It is achieved through suitable **redundancy, traffic distribution and failure recovery** mechanisms. Using Azure alone does not guarantee high availability without an appropriate architecture. |
| Scalability | Core | Scalability is the ability of a system to **change its computing capacity** to meet different workload requirements. Capacity can be adjusted **vertically by changing the size** of an instance or **horizontally by adding and removing instances**. Scaling may be manual or automatic. |
| Vertical scaling / scale up / scale down | Related | Vertical scaling changes the resources assigned to an **individual instance**, such as its CPU capacity or memory. **Scaling up increases** its capacity, while **scaling down reduces** it. The **number of instances remains unchanged**, and resizing may require a restart or other interruption. |
| Horizontal scaling / scale out / scale in | Related | Horizontal scaling changes the **number of instances** serving a workload. **Scaling out adds instances** to handle more demand, while **scaling in removes** unnecessary instances. Applications must be designed to distribute work across the available instances. |
| Elasticity | Related | Elasticity is the ability to **dynamically adjust resource capacity** in response to **fluctuating demand**, including **reducing capacity when demand decreases**. It helps avoid maintaining unnecessary resources during quiet periods. Scalability describes the broader ability to change capacity; elasticity emphasizes matching capacity to changing demand. |
| Reliability | Core | Reliability is the ability of a system to **perform its intended function consistently** and **recover from failures**. It depends on the behavior of the application and its dependencies, not only the availability of the infrastructure. **Redundancy, retry mechanisms and recovery planning** can improve reliability. |
| Fault tolerance | Related | Fault tolerance is the ability of a system to **continue operating** when one or more supported **components fail**. **Redundant components and automatic failover** can allow service to continue without requiring the failed component to be restored first. Disaster recovery instead focuses on recovering after a disruptive failure. |
| Disaster recovery - DR | Related | Disaster recovery is the combination of architecture, procedures and resources used to **restore systems after a major disruption**. It may involve **backups, geographic replication, failover** and tested recovery procedures. Recovery requirements are commonly expressed through **recovery point and recovery time objectives**. |
| Recovery Point Objective - RPO | Related | The recovery point objective defines the **maximum acceptable amount of data loss** after a disruption, measured as a **period of time**. It determines how recent the recovered data must be and influences **backup and replication frequency**. It measures acceptable data loss rather than recovery duration. |
| Recovery Time Objective - RTO | Related | The recovery time objective defines the **target maximum duration of service interruption** after a disruption. It guides the design of **recovery procedures**, standby capacity and failover mechanisms. Unlike RPO, it measures **how quickly the service must be restored** rather than how much data can be lost. |
| Predictability | Core | Predictability is the ability to **anticipate cloud performance and spending** sufficiently to plan resources and budgets. It is supported by performance monitoring, **cost estimation**, appropriate capacity choices and **pricing commitments**. It does not mean that future workload behavior or charges are guaranteed to be fixed. |
| Manageability | Core | Manageability is the ability to **operate and control cloud resources efficiently**. Manageability **of the cloud** concerns platform capabilities such as scaling, health monitoring and automated replacement; manageability **in the cloud** concerns the interfaces used to administer resources, such as the portal, CLI, PowerShell and infrastructure templates. Automation can make both deployment and ongoing operations more consistent. |
| Service-level agreement (SLA) | Related | A service-level agreement is a **contractual service commitment**, often specifying availability and eligibility for service credits. An illustrative downtime allowance is the measurement period multiplied by **(1 − availability as a decimal)**; 99.999% over 365 days corresponds to about 5.3 minutes. Actual SLA terms and exclusions vary by service and configuration. An SLA is **not a high-availability architecture** or a guarantee of zero downtime. |
| Cloud governance | Core | Cloud governance is the set of **policies, standards and oversight processes** used to ensure that cloud resources meet **organizational requirements**. It covers areas such as configuration, security, permitted deployment locations and cost organization. Governance defines **resource guardrails**, while access control determines who can perform actions. |

### 3. Cloud service types

**Read:** Brochure V6, chapter 3 · [Microsoft Learn module](https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/)  
**Practice (original bank, chapter tags):** 3, 7, 8, 10, 11, 16, 121, 122, 123, 124, 125, 126, 127, 128.

| Term / acronym | Priority | What to remember |
| --- | --- | --- |
| Infrastructure as a Service - IaaS | Core | Infrastructure as a Service provides **virtualized compute, storage and networking** resources. The provider manages the physical infrastructure, while the **customer manages the guest operating system**, installed applications, data and relevant configurations. **Azure Virtual Machines** offer this model when operating-system-level control is needed. |
| Platform as a Service - PaaS | Core | Platform as a Service provides a **managed environment** for developing, deploying and running applications. The **provider manages the physical infrastructure, operating system and application hosting platform**, while the **customer manages application code**, data and relevant settings. **Azure App Service** is a PaaS offering. |
| Software as a Service - SaaS | Core | Software as a Service provides a **complete, ready-to-use application** operated by the service provider. The **provider maintains the application** and underlying infrastructure, while the **customer manages users, access, data** and available application settings. **Microsoft 365** is a SaaS offering. |

## Part B — Azure architecture and services (35–40%)

### 4. Core architecture

**Read:** Brochure V6, chapter 4 · [Microsoft Learn module](https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/)  
**Practice (original bank, chapter tags):** 20, 23, 30, 36, 38, 40, 60, 76, 91, 92, 129, 130, 131, 132, 133, 134, 135.

| Term / acronym | Priority | What to remember |
| --- | --- | --- |
| Datacenter | Core | A datacenter is a **physical facility** that houses **computing equipment, network infrastructure, power supplies and cooling systems**. Azure organizes datacenters into geographic regions and, where supported, availability zones. A datacenter is a physical facility rather than a logical management scope. |
| Azure region | Core | An Azure region is a **geographic area** containing **one or more datacenters** connected by a **low-latency network**. Resources are deployed to supported regions based on service availability, latency, cost and data-location requirements. A region may contain multiple availability zones. |
| Region pair | Core | A region pair is an **association between certain Azure regions** that can support **geographic redundancy and disaster recovery** for specific services. **Not all Azure regions are paired**. Pairing does not automatically replicate all resources or create a disaster recovery solution for every workload. |
| Availability Zone - AZ | Core | An availability zone is a **physically separate group** of one or more datacenters **within an Azure region**, with **independent power, cooling and networking**. Distributing supported resources across zones reduces exposure to a **single-zone failure**. A resource deployed in only one zone does not automatically have cross-zone redundancy. |
| Sovereign region | Core | A sovereign region or cloud environment is designed to satisfy specific **geographic, regulatory or sovereignty requirements**. **Azure Government** and **Azure operated by 21Vianet** are environments serving particular requirements, and their service availability and operational arrangements may differ from public Azure. |
| Azure resource | Core | An Azure resource is an **individually manageable item** deployed or represented in Azure, such as a virtual machine, storage account or virtual network. Each resource has a **type, configuration and management scope** that determines how Azure Resource Manager identifies and manages it. |
| Resource group (RG) | Core | A resource group is a **logical container for related Azure resources** that can be managed together for access, deployment and lifecycle purposes. Resource-group-scoped resources belong to **one group at a time**, groups **cannot be nested**, and their resources **can span regions**. The group itself has **no fee**; deleting it generally deletes its contained resources, subject to protections. |
| Azure subscription | Core | An Azure subscription is a **management, billing and quota boundary** for Azure resources. It separates environments, costs and access, and trusts one Microsoft Entra tenant at a time; a tenant can serve multiple subscriptions. **Billing ownership, resource movement and directory association are distinct operations**. Changing the billing account need not move the resources or change their directory. |
| Management group | Core | A management group is a **hierarchical management scope** used to **organize multiple Azure subscriptions**. It enables organizations to assign applicable governance policies and access permissions centrally so that they **inherit to child scopes**. Management groups can contain subscriptions and other management groups. |
| Azure resource hierarchy / scope | Core | The Azure resource hierarchy normally organizes resources under **management groups, subscriptions and resource groups**. **Permissions and applicable policies can inherit** from higher scopes to lower ones, while **tags do not automatically inherit**. Some ARM resources are deployed directly at subscription, management-group or tenant scope rather than inside a resource group. |
| Azure resource move | Related | An Azure resource move changes the **resource group or subscription containing a supported resource** using Azure Resource Manager. Cross-subscription moves require both subscriptions to trust the same Microsoft Entra tenant and may require related resources to move together. Resource IDs can change; the operation **does not itself change the physical region or transfer billing ownership**. Support and dependencies must be checked before moving. |

### 5. Compute

**Read:** Brochure V6, chapter 5 · [Microsoft Learn module](https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/)  
**Practice (original bank, chapter tags):** 19, 33, 82, 94, 97, 98, 136, 137, 138, 139, 140, 141, 142.

| Term / acronym | Priority | What to remember |
| --- | --- | --- |
| Azure Virtual Machines - VMs | Core | Azure Virtual Machines are **IaaS compute resources** that run **operating systems and applications** on virtualized hardware. Customers choose the VM configuration and manage the **guest OS**, installed software and related settings. **Microsoft manages the physical servers** and virtualization infrastructure. |
| VM supporting resources | Core | A VM deployment requires a **compute size**, an **operating system image or disk**, and network configuration including a **network interface and virtual network/subnet**. Additional data disks, public IP addresses and network security groups depend on the workload design. A **public IP is not necessary** for private-only access. |
| Azure Virtual Machine Scale Sets (VMSS) | Core | Virtual Machine Scale Sets manage a **collection of virtual machines** with coordinated lifecycle operations. Instance counts can change through **configured autoscaling**; a supported load balancer can distribute traffic among healthy instances. Uniform orchestration uses a common VM model, while Flexible orchestration supports more varied instances. A scale set does not itself replace a firewall or content delivery service. |
| Availability set | Core | An availability set distributes VMs across **fault domains and update domains** to reduce the impact of **shared hardware failures** and **planned platform maintenance**. Deploying multiple suitable VMs in an availability set improves resilience within that arrangement. It **does not distribute VMs across availability zones** or regions. |
| Fault domain | Related | A fault domain groups infrastructure components that **share a possible source of failure**, such as **power or networking hardware**. Placing redundant VMs in **separate fault domains** reduces the chance that a single hardware failure affects all instances simultaneously. |
| Update domain | Related | An update domain is a logical group of VMs in an availability set that may undergo **planned platform maintenance together**. Distributing VMs across **multiple update domains** reduces the risk that planned updates interrupt all instances at the same time. |
| Azure Virtual Desktop - AVD | Core | Azure Virtual Desktop is a **managed desktop and application virtualization** service that delivers **Windows desktops and applications remotely** to users. It provides access to centrally hosted working environments without requiring applications or desktops to run locally on every user's device. |
| Azure App Service / Web Apps | Core | Azure App Service is a **managed PaaS platform** for hosting **web applications, REST APIs and mobile application backends**. Microsoft manages the underlying hosting infrastructure and operating system, while **customers deploy application code** and configure settings, scaling and access. It is distinct from event-triggered function execution. |
| Container | Core | A container is an **isolated application execution environment** that packages application **code and its dependencies**. Containers generally **share the underlying host OS kernel** instead of running a complete separate guest operating system. This makes them comparatively lightweight and helps applications run consistently across compatible environments. |
| Container image | Related | A container image is a **packaged template** containing the **application, dependencies and configuration** needed to create a container. Multiple container instances can be created from the same image. The image is the reusable template, while a **container is an instance** created from it. |
| Azure Container Instances - ACI | Core | Azure Container Instances **runs containers on managed infrastructure** **without requiring customers to provision VMs** or manage an orchestration cluster. It provides a straightforward way to execute containerized workloads on demand, particularly **isolated tasks or simple deployments** that do not require full Kubernetes orchestration. |
| Azure Container Apps | Core | Azure Container Apps is a managed platform for running **containerized applications and microservices** **without directly managing their underlying orchestration infrastructure**. It supports application-level features such as **managed scaling based on HTTP traffic or events**. It provides more application hosting capabilities than basic container execution. |
| Azure Functions | Core | Azure Functions is a managed compute service that **executes application code in response to triggers**, including HTTP requests, timers, queue messages and supported blob events. It supports languages including Java, C# and Python, depending on the runtime. **Triggers start execution; bindings connect to data or services**. Hosting plans determine scaling and billing; Functions is code-centric, whereas Logic Apps emphasizes connector-based workflows. |
| Stopped vs deallocated VM | Related | A **stopped but allocated** Azure VM retains its compute allocation and **continues to incur compute charges** even if the guest OS is shut down. A **deallocated VM** releases that allocation and **stops instance compute billing**. Attached **storage**, other billable resources and pricing commitments may still incur costs. |
| Microsoft Marketplace | Related | Microsoft Marketplace provides a catalog of **Microsoft and partner cloud products**, including preconfigured VM images, applications and managed solutions. A suitable VM offer can be selected from the Azure portal to deploy software without building the image manually. **Marketplace software and licensing may add costs** beyond Azure infrastructure charges; a VM-based offer still requires the applicable IaaS administration. |
| Azure VM extensions | Related | Azure VM extensions are **small software components used for post-deployment configuration and automation inside a virtual machine**. They can install monitoring agents, configure software or run scripts using supported VM agent mechanisms. An extension modifies the guest environment; it does not change VM size, provide a load balancer or remove the customer’s IaaS responsibilities. |
| Azure Functions triggers and bindings | Related | A trigger defines **the event that starts an Azure Function**, such as an HTTP request, a timer, a queue message or a supported blob event. Each function has one trigger. Optional input and output bindings provide a **declarative connection to data sources or destinations**, reducing integration code. The trigger initiates execution; bindings supply or deliver data as part of that execution. |

### 6. Networking

**Read:** Brochure V6, chapter 6 · [Microsoft Learn module](https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/)  
**Practice (original bank, chapter tags):** 31, 32, 51, 53, 54, 57, 79, 88, 95, 99, 100, 143, 144, 145, 146, 147, 148, 149.

| Term / acronym | Priority | What to remember |
| --- | --- | --- |
| Azure Virtual Network - VNet | Core | An Azure Virtual Network is a **logical private network** that connects Azure resources using configured **IP address ranges, subnets and routing**. It can also connect to **other virtual or on-premises networks** using appropriate connectivity services. Network security groups and other controls determine which traffic is permitted. |
| Subnet | Core | A subnet divides a virtual network's IP address space into **smaller address ranges** for organizing connected resources. Resources in **different subnets of the same VNet can generally communicate by default**, subject to routing and security controls. Subnets alone **do not automatically create security isolation**. |
| Public endpoint | Core | A public endpoint is an access point for a service that uses a **public IP address or publicly routable address**. Access can still require **authentication** and be restricted by **firewall rules** or network configuration. Having a public endpoint does not necessarily mean that anonymous or unrestricted access is permitted. |
| Private endpoint / Azure Private Link | Core | Azure Private Link enables **private connectivity** to supported services through a private endpoint. A private endpoint is a **network interface with a private IP address** from a customer's VNet that provides access to the target service. **DNS and public-access settings** must be configured appropriately; creating a private endpoint **does not automatically disable public access**. |
| VNet peering | Core | VNet peering **connects two Azure virtual networks** so their resources can communicate **privately using Microsoft's network** rather than the public internet. Peering relationships are **not transitive by default**, so a connection between two VNets does not automatically connect them to a third network. |
| Azure VPN Gateway | Core | Azure VPN Gateway provides **encrypted network connectivity** between an Azure VNet and other networks or individual devices. **Site-to-site and point-to-site VPNs** commonly use the public internet, while **VNet-to-VNet connections use the Azure backbone**. It provides VPN connectivity rather than a dedicated private circuit such as ExpressRoute. |
| Azure ExpressRoute | Core | Azure ExpressRoute provides **private connectivity** between an organization's network and Microsoft cloud services through a connectivity provider, **bypassing the public internet**. It can offer more predictable network performance for supported connections. Private connectivity **does not automatically mean the traffic is encrypted**. |
| Azure DNS | Core | Azure DNS is a managed service for **hosting DNS zones and records** that map domain names to network addresses or other DNS targets. It supports **name resolution** for applications and resources. Hosting DNS records is **different from registering a domain name** or distributing network traffic. |
| Network Security Group - NSG | Related | A Network Security Group contains **stateful rules** that **allow or deny inbound and outbound network traffic** based on properties such as addresses, ports and protocol. NSGs can be associated with **subnets or network interfaces**. They filter traffic but do not independently provide internet connectivity or application-layer inspection. |
| Site-to-site (S2S) VPN | Related | A site-to-site VPN establishes an **encrypted tunnel** between an **organization's network and an Azure virtual network**. It generally connects network gateways so devices on the remote network can communicate with private Azure resources, subject to routing and security controls. It **connects networks rather than individual client devices**. |
| Point-to-site (P2S) VPN | Related | A point-to-site VPN establishes an **encrypted connection** from an **individual client device** to an Azure virtual network. It allows remote users to access private Azure resources when appropriate authentication, routing and permissions are configured. Unlike site-to-site VPN, it **does not require connecting an entire remote network**. |
| Virtual network gateway / local network gateway | Related | A virtual network gateway is the **Azure-side gateway** that establishes and handles VPN connections to an Azure VNet. A **local network gateway** is an Azure configuration resource that **represents the remote VPN device and its network address ranges**. Together they describe both sides of a site-to-site VPN connection. |

### 7. Storage

**Read:** Brochure V6, chapter 7 · [Microsoft Learn module](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/)  
**Practice (original bank, chapter tags):** 17, 26, 28, 29, 34, 35, 39, 44, 71, 80, 81, 83, 93, 150, 151, 152, 153, 154, 155, 156, 157.

| Term / acronym | Priority | What to remember |
| --- | --- | --- |
| Storage account | Core | An Azure storage account is a management resource that provides a **namespace and shared configuration** for supported storage services. Its **account type** determines the available services and performance characteristics, while its settings control **region, redundancy and security**. A general-purpose v2 account supports **blobs, files, queues and tables**. |
| Azure Blob Storage | Core | Azure Blob Storage is a **managed object storage** service for large amounts of **unstructured data**, including documents, media and backups. Objects called **blobs are organized into containers** and accessed through storage APIs or supported tools. Access tiers and redundancy options allow customers to balance cost, retrieval requirements and resilience. |
| Azure Files | Core | Azure Files provides **fully managed file shares** that applications and users can access using supported file protocols such as **SMB or NFS**. It allows workloads to use shared file paths **without maintaining their own file server infrastructure**. Azure File Sync can extend supported Azure file shares to Windows Server. |
| Azure Queue Storage | Core | Azure Queue Storage stores messages that application components can **send and retrieve asynchronously**. Producers can add work to a queue without requiring a consumer to process it immediately, which helps **decouple components** and handle **fluctuating workloads**. Azure Service Bus provides richer enterprise messaging features when required. |
| Azure Table Storage | Core | Azure Table Storage is a **schemaless NoSQL key-value service** in Azure Storage. It stores entities and properties identified by PartitionKey and RowKey, without requiring a relational schema or joins. **Azure Cosmos DB for Table** supports a compatible table data model and APIs with additional database capabilities such as configurable throughput and geographic distribution; it is a different service. |
| Azure Managed Disks | Core | Azure Managed Disks are **managed block-storage volumes** used by Azure virtual machines for **operating system and data disks**. Azure handles the underlying storage infrastructure, while customers choose supported disk types, capacity and performance characteristics. They provide **persistent disk storage** rather than shared file or object storage. |
| Hot access tier | Core | The Hot access tier is an **online Blob Storage tier** intended for data accessed or modified **frequently**. It generally has a **higher storage cost per gigabyte** but **lower access charges** than cooler tiers. Total cost depends on both stored capacity and the frequency and type of operations. |
| Cool access tier | Core | The Cool access tier is an online Blob Storage tier intended for **infrequently accessed** data that must remain **readily available**. It generally reduces storage cost compared with Hot but **increases access charges**. For GPv2 block blobs, a typical **30-day minimum billable retention** period applies, and early deletion or tier changes can incur charges. |
| Cold access tier | Core | The Cold access tier is an online Blob Storage tier for **rarely accessed** data that still requires **fast retrieval**. Storage costs are generally lower and access costs higher than warmer tiers. GPv2 block blobs typically have a **90-day minimum billable retention** period. Unlike Archive, Cold **does not require rehydration** before reading. |
| Archive access tier | Core | The Archive access tier stores rarely accessed blob data **offline** at a **low storage cost per gigabyte**. Data must be **rehydrated to an online tier** before it can be read, which takes time and can incur retrieval charges. A typical **180-day minimum billable retention** period applies, making Archive suitable for long-term retention with non-urgent access. |
| Rehydration | Related | Rehydration is the process of making an **archived blob available for reading** by moving or copying its data into an **online access tier**. The operation is **not immediate** and may involve additional charges depending on the retrieval method and priority. This delay is an important limitation of Archive storage. |
| Locally redundant storage - LRS | Core | Locally redundant storage maintains **three synchronous copies** of data within **one datacenter** in the primary region. It protects against certain local hardware failures and is generally the **lowest-cost redundancy option**. It **does not protect against the loss of the entire datacenter** or primary region. |
| Zone-redundant storage - ZRS | Core | Zone-redundant storage **synchronously replicates data across three availability zones** within the **primary region**. This helps keep data accessible during the failure of a single zone where supported. ZRS **does not include geographic replication** to a secondary region. |
| Geo-redundant storage - GRS | Core | Geo-redundant storage maintains **locally redundant copies** in the primary region and **asynchronously replicates data** to a locally redundant **secondary region**. It provides protection against regional disasters, but recent writes may not yet have reached the secondary location. Ordinary GRS **does not provide direct secondary-region read access** before failover. |
| Geo-zone-redundant storage - GZRS | Core | Geo-zone-redundant storage combines **synchronous zone redundancy** in the primary region with **asynchronous replication** to a **locally redundant secondary region**. It provides resilience against primary-region zone failures and geographic disasters. Secondary copies can lag behind the primary data, and direct secondary reads require the appropriate read-access option. |
| Read-access geo-redundancy (RA-GRS / RA-GZRS) | Core | RA-GRS and RA-GZRS are **read-access variants** of geo-redundant and geo-zone-redundant storage. They allow applications to **read from the supported secondary-region endpoint** **without first failing over** the storage account. They **do not add extra replicas**, and asynchronous replication means secondary reads may return older data. |
| AzCopy | Core | AzCopy is a **command-line tool** for **transferring data** to, from and between supported Azure storage resources. It can be used in **scripts to automate** large uploads, downloads and copy operations. It is primarily a transfer utility, whereas Azure Storage Explorer provides a graphical storage management interface. |
| Azure Storage Explorer | Core | Azure Storage Explorer is a **graphical desktop application** for **browsing and managing** supported Azure storage resources. It allows users to inspect containers, file shares, queues and tables and perform operations such as uploads and downloads. Unlike AzCopy, it is primarily designed for **interactive graphical management**. |
| Azure File Sync | Core | Azure File Sync **synchronizes supported Azure file shares with Windows Server file servers in both directions**. It enables local file access while centralizing data in Azure Files, with optional **cloud tiering** to reduce local disk usage. Changes made directly in the cloud share may wait for periodic change detection, **normally 24 hours**. |
| Azure Migrate | Core | Azure Migrate provides tools to **discover, assess and migrate workloads** from existing environments to Azure. It helps identify dependencies, **evaluate readiness**, estimate resource requirements and **coordinate migration**. It focuses on workload migration rather than simply transporting large quantities of data. |
| Azure Data Box | Core | Azure Data Box transfers **large volumes of data** using a **physical storage device** supplied by Microsoft. Data is copied onto the device and transported to or from an Azure facility, **reducing reliance on lengthy network transfers**. It is a temporary data-transfer service rather than a permanent storage tier. |
| Standard general-purpose v2 (StorageV2 / GPv2) | Core | Standard general-purpose v2 is the **recommended general Azure storage account type** for most standard storage workloads. It supports **Blob Storage, Azure Files, Queue Storage and Table Storage**, with applicable access tiers and redundancy options. Specialized premium accounts offer different performance or service capabilities. |
| Premium block blob account (BlockBlobStorage) | Core | A premium block blob account is a specialized storage account optimized for **high-performance block and append blob workloads**. It is designed for applications with **low-latency storage requirements** or **high transaction rates**. It does not provide the full range of services available in a general-purpose v2 account. |
| Premium file share account (FileStorage) | Core | A premium file share account is a specialized Azure storage account for **high-performance managed file shares**. It is designed for workloads that require strong file-operation performance and supports **SMB or NFS** depending on share configuration. It is intended for **Azure Files** rather than general-purpose object, queue or table storage. |
| Premium page blob account | Core | A premium page blob account is specialized for workloads requiring **efficient random reads and writes** to ranges of data within **page blobs**. It differs from storage optimized for block blobs or file shares. Modern Azure VM operating system and data disks are normally deployed as separate **managed disk resources**. |

### 8. Identity, access, and security

**Read:** Brochure V6, chapter 8 · [Microsoft Learn module](https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/)  
**Practice (original bank, chapter tags):** 21, 42, 50, 52, 56, 61, 62, 63, 64, 65, 66, 68, 69, 70, 72, 75, 78, 84, 85, 158, 159, 160, 161, 162, 163, 164, 165, 166.

| Term / acronym | Priority | What to remember |
| --- | --- | --- |
| Microsoft Entra ID (formerly Azure AD) | Core | Microsoft Entra ID is Microsoft's **cloud identity and access management service**, **formerly called Azure Active Directory**. It provides a **directory of users, groups and applications** and supports authentication and access to integrated services. An Entra tenant is a dedicated directory instance, separate from Azure subscriptions and their resource-management permissions. |
| Microsoft Entra Domain Services | Core | Microsoft Entra Domain Services provides **managed traditional domain capabilities**, including **domain join, LDAP, Kerberos and NTLM**. It supports applications that depend on traditional Active Directory protocols **without requiring customers to deploy and maintain their own domain controllers**. It is different from ordinary Entra ID cloud authentication. |
| Authentication - AuthN | Related | Authentication is the process of **verifying that a user, device or service is the identity it claims to be**. It can use credentials such as **passwords, security keys or biometric methods**. Successful authentication establishes identity but **does not automatically grant permission** to access a resource; authorization determines the permitted actions. |
| Authorization - AuthZ | Related | Authorization is the process of determining **which resources or operations an authenticated identity is permitted to access**. It uses **permissions, roles and applicable policies** to allow or deny actions. In Azure, **RBAC provides authorization** for Azure resource operations at defined management scopes. |
| Single sign-on - SSO | Core | Single sign-on allows an identity to **authenticate once** and subsequently **access multiple integrated applications** **without repeatedly entering credentials**. It relies on a shared or trusted identity system. Application configuration and access policies can still require new authentication or additional verification under certain conditions. |
| Multifactor authentication (MFA) | Core | Multifactor authentication verifies identity using factors from **at least two distinct categories**: something the user **knows, possesses or inherently is**. Combining different factor types makes compromised passwords alone less useful to an attacker. Two passwords or two prompts from the **same factor category do not constitute MFA**. |
| Passwordless authentication | Core | Passwordless authentication verifies identity **without requiring the user to enter an account password**. It can use methods such as **passkeys, security keys or Windows Hello for Business**, which rely on alternative credentials. Passwordless authentication can still satisfy **multifactor requirements** when the method provides appropriate factors. |
| Microsoft Entra Conditional Access | Core | Microsoft Entra Conditional Access **evaluates signals** such as the user, target application, **device state, network location and risk** to make access decisions. It can **block access or require controls such as MFA** or a compliant device. Its available signals and controls depend on licensing and configuration; risk detection can be supplied by Entra ID Protection. |
| External identities | Core | External identities are identities belonging to people **outside an organization's workforce**, including **business partners, suppliers and customers**. **Microsoft Entra External ID** supports configured collaboration and customer sign-in scenarios. The appropriate setup depends on whether the user needs access to organizational resources or a customer-facing application. |
| Microsoft Entra B2B collaboration | Core | Microsoft Entra B2B collaboration allows **external users** to access an organization's applications and resources **using their existing identities**. The host tenant represents the external person with a **user object, commonly of type Guest**, and **controls their permissions** and applicable access policies. Invitation or authentication alone does not grant unrestricted access. |
| Microsoft Entra External ID for customers | Core | Microsoft Entra External ID for customers provides **identity and access management for customer-facing applications**, including **customer registration and sign-in**. It is configured for external consumer or business-customer identity experiences **rather than ordinary workforce guest collaboration**. Azure AD B2C is a separate legacy offering. |
| Azure role-based access control - Azure RBAC | Core | Azure role-based access control is an **authorization system** that grants identities **specific permissions** to Azure resources at a defined scope. A role assignment connects a **security principal, a role containing permissions, and the applicable scope**. RBAC determines who can perform actions, whereas Azure Policy governs resource configuration requirements. |
| Owner (Azure RBAC) | Related | Owner is a built-in Azure RBAC role that allows an identity to **manage resources and grant Azure RBAC access** within its assigned scope. Its permissions remain subject to applicable restrictions, including resource locks and other access controls. Owner is broader than Contributor because it includes **access-management permissions**. |
| Contributor (Azure RBAC) | Related | Contributor is a built-in Azure RBAC role that allows an identity to **create, modify and manage Azure resources** within its assigned scope. The role **does not allow the identity to assign Azure RBAC roles** to other identities. Access to service data may require additional permissions. |
| Reader (Azure RBAC) | Related | Reader is a built-in Azure RBAC role that permits **viewing Azure resource management information** **without modifying the resources**. It does not automatically grant access to data stored inside every service. Reading storage blobs or other service data can require a **separate data-plane role**. |
| Zero Trust | Core | Zero Trust is a security model that assumes **no identity, device or request is automatically trustworthy**, even inside a corporate network. Its three principles are **verify explicitly, use least privilege and assume breach**. Access decisions rely on available signals and aim to minimize permissions and the impact of compromise. |
| Defense in depth | Core | Defense in depth is a security strategy that applies **multiple independent layers of protection** across physical infrastructure, identity, perimeter, network, compute, applications and data. If one layer is bypassed or fails, **other layers can reduce the likelihood or impact of compromise**. It avoids relying on a single security control. |
| Microsoft Defender for Cloud | Core | Microsoft Defender for Cloud provides **cloud security posture management and workload protection** capabilities. It **assesses resource configurations**, identifies security weaknesses and recommends improvements; supported protection plans can also **detect threats to workloads**. Some features and plans require paid licensing or activation. |
| Role assignment | Related | A role assignment is the Azure RBAC configuration that **grants a particular role to a security principal at a specified scope**. The principal identifies **who receives access**, the role defines **permitted actions**, and the scope determines **where those permissions apply**. Applicable assignments can inherit to lower scopes. |
| User Access Administrator | Related | User Access Administrator is a built-in Azure RBAC role focused on **managing access to Azure resources**. It allows an authorized identity to **manage Azure role assignments** within its assigned scope. Its primary purpose is access administration rather than general resource deployment or application management. |

## Part C — Azure management and governance (30–35%)

### 9. Cost management

**Read:** Brochure V6, chapter 9 · [Microsoft Learn module](https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/)  
**Practice (original bank, chapter tags):** 1, 27, 73, 87, 89, 90, 96, 167, 168, 169, 170, 171, 172, 173, 174, 175.

| Term / acronym | Priority | What to remember |
| --- | --- | --- |
| Pricing calculator | Core | The Azure Pricing Calculator **estimates the expected cost** of a **planned Azure deployment** based on selected services, configurations, regions and estimated usage. It helps compare deployment options **before resources are created**. Estimates are not guaranteed invoices and may differ from actual charges. |
| Microsoft Cost Management | Core | Microsoft Cost Management provides tools for **analyzing actual Azure spending**, **forecasting costs** and allocating expenditure by relevant dimensions such as subscriptions or tags. It supports **budgets and cost alerts** to help track spending against targets. A budget or alert **does not automatically stop or deallocate resources**. |
| Azure Reservations | Related | Azure Reservations provide **discounted pricing** for eligible Azure resource usage in exchange for a **term commitment**, commonly **one or three years**. They are suited to **predictable workloads** that can make consistent use of the reservation benefit. A reservation is a billing benefit, **not a guarantee of compute capacity**; unused commitments and other resource charges may still cost money. |
| Azure savings plan for compute | Related | An Azure savings plan for compute provides **discounted eligible compute usage** in exchange for a **fixed hourly spending commitment** over **one or three years**. The benefit can apply across eligible compute resources, offering more flexibility than many resource-specific reservations. The hourly commitment **remains payable** even if the eligible usage is lower than expected. |
| Azure Spot Virtual Machines | Related | Azure Spot Virtual Machines use **spare Azure compute capacity** at **discounted prices**. Azure may **evict these VMs** when capacity is needed or applicable price conditions are met, so their availability is not guaranteed. They are suitable for **interruption-tolerant workloads** that can recover or restart when an instance is removed. |
| Azure Hybrid Benefit | Related | Azure Hybrid Benefit is a licensing benefit that allows customers to **reuse eligible existing software licenses** for supported Azure workloads under applicable licensing conditions. It can **reduce the software licensing component** of Azure charges for qualifying products such as **Windows Server or SQL Server**. Eligibility and applicable license terms must be checked. |
| Tags | Core | Tags are **key-value metadata** attached to supported Azure resources and management scopes to describe properties such as department, environment or application. They support **organization, filtering and cost allocation**. Tags do not grant access permissions and are **not automatically inherited** from parent scopes without additional configuration. |
| Azure pricing factors | Core | Azure pricing depends on the resources selected and how they are configured and used. Factors include **resource type, size, region, storage tier, licensing, pricing commitments, usage and network data transfer**. **Outbound and inter-region data transfer** can incur charges, so the total cost of a workload can extend beyond its compute charges. |
| Subscription billing ownership transfer | Related | A subscription billing ownership transfer changes **which eligible billing account is responsible for the subscription’s charges**. Supported transfers can be initiated through self-service workflows, while other combinations require additional steps or support. A billing-only transfer is distinct from moving individual resources between subscriptions or changing the subscription’s Microsoft Entra tenant; those operations can affect resource access. |

### 10. Governance and compliance

**Read:** Brochure V6, chapter 10 · [Microsoft Learn module](https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/)  
**Practice (original bank, chapter tags):** 37, 55, 58, 59, 77, 176, 177, 178, 179, 180, 181, 182, 183, 184.

| Term / acronym | Priority | What to remember |
| --- | --- | --- |
| Azure Policy | Core | Azure Policy is a **governance service that evaluates resource configuration against rules**. A policy can audit or deny noncompliant deployments, such as unapproved VM sizes or resource types, and some effects support remediation. Assignments at management group, subscription or resource group scope affect applicable resources. **Policy controls resource configuration; RBAC controls identity permissions**. A user with deployment access is still subject to applicable deny policies. |
| Policy definition | Related | A policy definition describes a **resource governance rule** in Azure Policy. It contains **conditions** specifying which resources are evaluated and an **effect** that determines the action when those conditions are met. It becomes applicable to resources through a **policy assignment**. |
| Policy assignment | Related | A policy assignment **applies a policy definition or initiative** to a **specific Azure management scope**. It specifies where resources are evaluated and may include parameter values, exclusions or exemptions as appropriate. Assignments can apply to **existing and newly deployed resources** within the applicable scope. |
| Initiative | Related | An initiative is a **collection of Azure Policy definitions** grouped together to address a **common governance objective**. It allows related requirements to be assigned and monitored as a **single unit**, simplifying consistent governance across resources. An initiative groups policies rather than RBAC roles. |
| Azure resource lock | Core | An Azure resource lock protects Azure resources from **accidental deletion or modification** through **management-plane operations**. Locks apply **even to users with Owner permissions** until someone authorized removes them. They are **not backups** and do not generally prevent changes to data inside a service through its data plane. |
| CanNotDelete (Delete) resource lock | Core | A CanNotDelete resource lock, also called Delete, **prevents management-plane deletion** of resources in its applicable scope while **allowing authorized read and modification operations**. The lock can **inherit from a parent scope** to resources beneath it. Users with permission to remove the lock can remove it before deleting the resource. |
| ReadOnly resource lock | Core | A ReadOnly resource lock **allows management-plane reads** while generally **preventing resource creation, configuration changes and deletion** within its applicable scope. It is **more restrictive than CanNotDelete**. Some operations that appear to be read-only can also be blocked if they use management-plane write or POST requests. |
| Microsoft Purview | Core | Microsoft Purview provides capabilities for **discovering, classifying, governing and protecting organizational data**, as well as supporting compliance activities. **Sensitivity labels** can classify documents and apply **persistent protection such as encryption**, depending on configuration. Its focus is data governance and information protection rather than enforcing Azure resource deployment rules. |

### 11. Managing and deploying resources

**Read:** Brochure V6, chapter 11 · [Microsoft Learn module](https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/)  
**Practice (original bank, chapter tags):** 18, 41, 47, 67, 86, 185, 186, 187, 188, 189, 190, 191, 192.

| Term / acronym | Priority | What to remember |
| --- | --- | --- |
| Azure portal | Core | The Azure portal is a **browser-based graphical interface** for **creating, configuring, monitoring and managing Azure resources**. It presents resource settings and management tools through visual pages rather than requiring command-line commands. It is available at https://portal.azure.com and uses Azure's management platform to perform operations. |
| Azure Cloud Shell | Core | Azure Cloud Shell is an **authenticated, browser-accessible terminal** with Bash and PowerShell environments and Azure management tools already available. It can be accessed from supported browsers and the Azure mobile app, so no local CLI or Az module installation is needed. **Cloud Shell hosts the tools** rather than replacing Azure CLI or Azure PowerShell. The shell host is free; applicable storage and Azure resources can still incur charges. |
| Azure CLI | Core | Azure CLI is a **cross-platform command-line tool** for creating, configuring and managing Azure resources. It uses commands beginning with `az` and supports interactive administration as well as **scripted automation**. It can be installed locally or used through **Azure Cloud Shell**. |
| Azure PowerShell | Core | Azure PowerShell provides **Az PowerShell modules and cmdlets** for managing Azure resources using PowerShell objects and scripts. Supported versions of PowerShell run on **Windows, macOS and Linux**, and the modules are also available through Cloud Shell. Azure CLI uses `az` commands rather than PowerShell cmdlet syntax; both can manage many of the same resources. |
| Infrastructure as Code - IaC | Core | Infrastructure as Code is the practice of **defining infrastructure configurations in files** rather than relying on manual deployment steps. These definitions can be **version-controlled**, reviewed and **deployed repeatedly** to create consistent environments. Azure supports declarative infrastructure deployment through **ARM templates and Bicep**. |
| ARM template | Core | An ARM template is a **declarative JSON file** that describes Azure resources and their **desired configuration** for deployment through **Azure Resource Manager**. ARM interprets the resource definitions and dependencies to perform deployment operations. Templates specify the desired infrastructure **rather than a sequence of manual or shell commands**. |
| Bicep | Related | Bicep is a **declarative language** designed to define Azure infrastructure using a **more concise syntax than ARM template JSON**. Bicep definitions are **compiled into ARM templates** and deployed through Azure Resource Manager. It is used to manage infrastructure as code, not to write application business logic. |
| Azure Arc | Core | Azure Arc **extends supported Azure management and governance capabilities** to resources located **outside Azure**, including **on-premises infrastructure and other cloud environments**. Connected resources can be represented in Azure and managed using supported services and policies. Arc **does not physically move** those resources into Azure. |
| Azure Resource Manager (ARM) | Core | Azure Resource Manager is the **Azure management and deployment control plane**. It processes authenticated requests to create, update, delete or organize resources and applies relevant access and governance controls. The portal, CLI, PowerShell, ARM templates and Bicep use this management layer. **ARM is the service; an ARM template is a declarative JSON deployment definition**. Data-plane requests, such as reading a blob, are distinct. |
| Azure mobile app | Related | The Azure mobile app is a **native iOS and Android management application** for checking Azure resource status, health and alerts and performing supported operations such as restarting a VM. It also provides access to Cloud Shell for command-line administration. It is useful for monitoring and quick actions on the move, rather than a full replacement for every Azure portal feature. |

### 12. Monitoring

**Read:** Brochure V6, chapter 12 · [Microsoft Learn module](https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/)  
**Practice (original bank, chapter tags):** 22, 25, 43, 45, 46, 48, 49, 74, 193, 194, 195, 196, 197, 198, 199, 200.

| Term / acronym | Priority | What to remember |
| --- | --- | --- |
| Azure Monitor | Core | Azure Monitor is Azure's monitoring platform for **collecting, analyzing and acting on** infrastructure and application telemetry, including **metrics, logs, traces and events**. It provides tools for visualizing performance, investigating issues and **triggering alerts or automated actions**. It is the broader monitoring platform rather than a recommendation service such as Azure Advisor. |
| Metrics | Related | Metrics are **numerical measurements collected over time** to describe the behavior, performance or health of a system. Azure Monitor can display these **time-series measurements**, aggregate them and evaluate them against alert thresholds. Metrics represent measured values, such as **CPU utilization**, rather than detailed event records. |
| Logs | Related | Logs are **recorded events or observations** that contain information about system activity, errors, requests or other operations. They can include **timestamps and contextual properties** that support searching, filtering and correlation. Unlike numerical metrics, logs provide **detailed records** for investigating what happened and why. |
| Log Analytics / Kusto Query Language (KQL) | Core | Log Analytics is a tool in Azure Monitor for **querying and analyzing collected log data**. It uses **Kusto Query Language (KQL)** to **filter, aggregate and correlate records**, often across multiple resources in a workspace. Application Insights focuses on application observability, and its telemetry can also be investigated using queries. |
| Log Analytics workspace | Related | A Log Analytics workspace is a logical environment in Azure Monitor for **collecting, storing and managing log data** from supported resources. It provides a **common scope for log queries** and configuration of settings such as **data retention and access permissions**. Multiple resources can send relevant telemetry to the same workspace. |
| Azure Monitor Application Insights | Core | Application Insights is an **application observability feature of Azure Monitor** that collects telemetry from instrumented applications. It helps investigate application performance and failures using **request rates, response times, exceptions, dependencies and related traces**. Its focus is application behavior rather than only infrastructure-level resource utilization. |
| Azure Service Health | Core | Azure Service Health provides **personalized information** about Azure **platform incidents, planned maintenance and health advisories** relevant to a **customer's subscriptions and services**. It helps customers understand whether platform events may affect their environment and can provide notifications. Azure Status gives a public overview, while Resource Health focuses on individual resources. |
| Azure Resource Health | Related | Azure Resource Health provides information about the **availability and health of a specific Azure resource**. It helps determine whether a resource is experiencing problems related to the Azure platform and supports investigation of its **health history**. It is more resource-specific than Azure Service Health. |
| Azure Advisor | Core | Azure Advisor analyzes deployed Azure resources and provides **personalized recommendations** in areas such as **reliability, security, performance, operational excellence and cost**. It identifies opportunities to improve existing configurations, but **does not automatically implement every recommendation**. Cost Management analyzes spending, while the Pricing Calculator estimates planned costs. |
| Azure Monitor alerts / action groups | Related | Azure Monitor **alert rules detect defined conditions** in supported telemetry or activity data, such as a metric exceeding a threshold. An **action group specifies notifications or automated actions** to execute **when an associated alert fires**. The alert rule determines when an issue is detected; the action group determines the configured response. |
| Azure Status | Related | Azure Status is a **public service-health page** that reports **broadly significant issues** affecting Azure services and regions. It provides a general overview **without requiring access to a particular Azure subscription**. It does not report every customer-specific incident; Azure Service Health provides more personalized information. |

## Part D — Complementary recognition terms

These entries are deliberately separate from the main objectives. They help interpret question distractors and supporting examples, not predict the exact exam content.

| Term | What to remember | Brochure chapter | Practice reference |
| --- | --- | --- | --- |
| Azure Kubernetes Service (AKS) | Azure Kubernetes Service is a **managed service for deploying and operating Kubernetes clusters** on Azure. Azure manages the **Kubernetes control plane**, while other management responsibilities depend on the chosen mode. The service supports **container scheduling, orchestration, scaling and deployment** across cluster nodes. It is intended for workloads requiring Kubernetes capabilities rather than simple standalone container execution through ACI. | 5 | Q25, Q43, Q50, Q98 |
| AKS virtual nodes / elastic bursting | AKS virtual nodes extend a Kubernetes cluster's available execution capacity by allowing **eligible pods to run on Azure Container Instances**. This supports **elastic bursting** **without directly adding conventional VM-based cluster nodes** for every workload. Virtual node integration must be configured, and not all pod features or workload types are supported. | 5 | Q98 |
| Transport Layer Security (TLS) | Transport Layer Security is a protocol that **protects network traffic in transit** through **encryption and integrity protection**, with authentication as applicable. **HTTPS uses TLS** to secure web connections. An App Service minimum TLS version of 1.2 also permits **newer supported versions**; TLS is distinct from encryption of stored data. | 5 | Q33 |
| Azure Virtual Network service endpoint | A virtual network service endpoint extends the **identity of an authorized Azure subnet** to supported Azure services through the **Microsoft network**. It allows service network-access rules to recognize that subnet while the service **continues to use its public endpoint**. Unlike a private endpoint, it **does not assign a private IP** for the service within the VNet. | 6 | Q79, Q146 |
| Azure Firewall | Azure Firewall is a **managed, stateful network firewall** that centralizes traffic inspection and filtering for connected Azure networks. Network and application rules control permitted traffic, and **destination network address translation (DNAT)** can publish supported internal services through a firewall public IP by translating incoming destinations to private IP addresses and ports. Correct routing and security configuration are still required. NSGs provide distributed subnet or NIC filtering instead. | 6 | Q54 |
| Azure Application Gateway / WAF | Azure Application Gateway is an **application-layer load-balancing** service for **HTTP and HTTPS** traffic, supporting routing decisions based on application-level information. Its optional **Web Application Firewall** helps protect web applications against common attacks such as **SQL injection and cross-site scripting**. It differs from layer-4 network load balancing. | 6 | Q54, Q88 |
| Azure DDoS Protection | Azure DDoS Protection helps mitigate **distributed denial-of-service attacks at the network and transport layers**. Azure includes infrastructure-level protection; enhanced paid tiers are **DDoS IP Protection** for individual eligible public IPs and **DDoS Network Protection** for eligible public IPs in protected VNets. Enhanced tiers provide attack metrics and mitigation capabilities, with additional benefits depending on tier. A WAF addresses application-layer attacks instead. | 6 | Q100 |
| Azure Bastion | Azure Bastion is a managed service that provides **secure RDP and SSH connectivity** to Azure virtual machines through supported connection methods. It allows administrators to access VMs **without assigning a public IP address to each target VM** or exposing its **management ports** directly to the internet. Bastion does not replace VM authentication or authorization. | 6 | Brochure E |
| Azure Load Balancer | Azure Load Balancer distributes incoming **TCP and UDP network traffic** across **healthy backend instances** at **layer 4** of the network model. It uses configured rules and **health probes** to direct traffic and improve workload availability. Unlike Application Gateway, it does not route requests based on HTTP application content. | 6 | Brochure E |
| Smart tier (Blob Storage) | The Blob Storage Smart tier **automatically transitions eligible data** among the **Hot, Cool and Cold online tiers** according to **access patterns**. It helps balance storage and access costs without requiring every tier transition to be selected manually. It is not an offline archive tier and does not replace a separate archival strategy. | 7 | Brochure 7 |
| Microsoft Entra ID Protection | Microsoft Entra ID Protection, formerly Azure AD Identity Protection, **detects risks associated with cloud identities and sign-ins**. Its risk signals can be used by configured **risk-based Conditional Access policies** to block access or require remediation and additional verification where supported. **Risk detection is distinct from enforcing access decisions**. | 8 | Q56, Q72 |
| Microsoft Entra Connect Sync | Microsoft Entra Connect Sync **synchronizes identity information from on-premises Active Directory to Microsoft Entra ID**, supporting **hybrid identity** arrangements. It helps users maintain a consistent identity across integrated on-premises and cloud services. Single sign-on and multifactor authentication depend on the configured integration and application support, **not synchronization alone**. | 8 | Q68 |
| Microsoft Entra B2B direct connect | Microsoft Entra B2B direct connect provides a **cross-tenant collaboration** arrangement between organizations for supported scenarios such as **Teams shared channels**. Users authenticate with their **home organization** under configured cross-tenant access settings. Unlike ordinary B2B collaboration, this scenario **does not require a conventional guest user object** in the resource tenant. | 8 | Q159 |
| Security group / Microsoft 365 group | **Security groups** organize identities for **collective permission assignments** to supported resources. **Microsoft 365 groups** are **primarily designed for collaboration**, providing members with access to shared Microsoft 365 resources. Both group types can grant access in supported scenarios, but they serve different principal purposes. | 8 | Q69 |
| Windows Hello for Business | Windows Hello for Business provides **passwordless authentication** on supported Windows devices through a **device-bound credential**. A locally verified **PIN or biometric gesture** unlocks the credential used to authenticate the user. The PIN is not a conventional account password transmitted to the identity provider. | 8 | Q52 |
| Microsoft Authenticator / OATH-TOTP | Microsoft Authenticator supports **sign-in approvals and time-based one-time passcodes**. Number matching requires the user to enter a number shown during the sign-in into the Authenticator approval prompt, helping reduce accidental approvals. Combined with a password, a registered-device approval can provide a distinct second factor. **OATH-TOTP** generates temporary codes; Conditional Access determines when verification is required. | 8 | Q64 |
| Microsoft Defender for Identity | Microsoft Defender for Identity is a security service focused on **detecting threats involving on-premises Active Directory** and other supported identity environments. It analyzes **identity-related activity** to identify suspicious behavior and potential account compromise. It is the identity-focused service, **distinct from Microsoft Defender for Endpoint**, which focuses on endpoint threats. | 8 | Q61 nuance |
| Microsoft Defender for Endpoint | Microsoft Defender for Endpoint provides **threat prevention, detection, investigation and response** for supported **endpoint devices and servers**. It analyzes endpoint activity to help detect malware and other security threats. Its main purpose is **endpoint security** rather than monitoring Active Directory identities, which is the focus of Defender for Identity. | 8 | Q61 nuance |
| Regulatory compliance dashboard (Defender for Cloud) | The regulatory compliance dashboard in Microsoft Defender for Cloud **evaluates applicable resource configurations** against supported technical controls from compliance standards, such as **PCI DSS or HIPAA**. It displays assessment results and helps **identify areas requiring remediation**. These technical assessments **do not certify legal compliance** or guarantee that every regulatory obligation has been met. | 8 | Q65, Q85 |
| Microsoft Entra Privileged Identity Management (PIM) | Microsoft Entra Privileged Identity Management controls and monitors **privileged role access** through mechanisms such as **eligible assignments and time-limited activation**. It helps **reduce permanent administrative privileges** by allowing authorized users to activate access when required. Additional approval, verification and auditing controls can be configured where supported. | 8 | Brochure 8 |
| Azure Key Vault | Azure Key Vault is a managed service for **securely storing and controlling access** to **secrets, cryptographic keys and certificates**. It helps applications use sensitive credentials and cryptographic material **without embedding them directly in application code**. Access to vault contents remains subject to appropriate permissions and security configuration. | 8 | Brochure E |
| Microsoft Sentinel | Microsoft Sentinel is a **security information and event management (SIEM)** and **security orchestration, automation and response (SOAR)** platform. It collects and correlates security data from supported sources to **detect threats, investigate incidents and automate response workflows**. Defender for Cloud instead focuses primarily on cloud security posture and workload protection. | 8 | Brochure 8 |
| Service Trust Portal | The Service Trust Portal provides **Microsoft compliance documentation, audit reports** and other information about Microsoft's security and privacy practices. Organizations can use these materials for **supplier assurance and compliance assessments**. It **does not evaluate whether the customer's own Azure resources are correctly configured or compliant**. | 10 | Q182 |
| Azure Automation / runbook | Azure Automation executes **administrative scripts and runbooks** to automate recurring tasks, including scheduled operations and supported alert-driven actions. The **Runbook Gallery** provides existing scripts that can be imported and reviewed rather than written from scratch; imported code must be configured, tested and published before production use. Logic Apps focuses on connector-based workflows, while Automation is oriented toward operational scripting. | 11 | Q47 |
| Azure Logic Apps | Azure Logic Apps is a managed integration service for building **automated workflows using triggers, actions and connectors**. A trigger starts a workflow, and actions perform steps such as sending an email, transforming data or calling an API. It is suited to low-code integration and orchestration; **Azure Functions executes custom code**, while Azure Automation focuses on administrative runbooks. Billing depends on the hosting plan. | 11 | Q47 |
| Power Automate | Power Automate is a **low-code automation** service for **connecting business applications** and automating recurring processes such as notifications, approvals and data transfers. It belongs to the **Microsoft Power Platform** and emphasizes **productivity and business workflows**. Azure Logic Apps provides Azure-hosted integration workflows with related capabilities. | 11 | Q15 |
| Azure Event Grid | Azure Event Grid is an **event distribution service** that routes **discrete event notifications** from **producers to interested subscribers** using an event-driven model. It enables applications to **react when an event occurs** without tightly coupling the event source to the consumer. It differs from Service Bus, which provides richer brokered enterprise messaging. | E | Q24 |
| Azure Service Bus | Azure Service Bus is a **managed enterprise messaging** service that uses **queues and topics** to **exchange messages asynchronously** between applications. It supports **reliable message delivery** and processing features, allowing producers and consumers to operate independently. Its focus is brokered messaging rather than discrete event notifications or high-volume telemetry streaming. | E | Q24 |
| Azure Event Hubs | Azure Event Hubs is a managed **event ingestion and streaming** service designed to receive **high volumes of event data**, such as **application logs or device telemetry**. Downstream applications can consume and process these streams for analytics or monitoring. It is distinct from brokered queues intended for reliable processing of individual business messages. | E | Brochure E |
| Azure IoT Hub | Azure IoT Hub is a managed service for **communication between Internet of Things devices and cloud applications**. It provides device-oriented capabilities such as **device identities, telemetry ingestion** and supported communication from the **cloud to devices**. Event Hubs is a more general-purpose high-throughput event streaming service. | E | Q24 |
| Azure SQL Database / Azure Database for MySQL | Azure SQL Database and Azure Database for MySQL are **managed relational database platforms** that reduce the need to operate database server infrastructure and patch the underlying operating system. **Customers manage their data, schemas, access** and application use. The services use **different database engines and SQL dialects**, so they are not directly interchangeable. | E | Q5, Q8, Q11 |
| Azure Cosmos DB | Azure Cosmos DB is a **managed, distributed NoSQL database** with support for multiple data models and APIs. Depending on configuration, it provides geographic replication, configurable consistency and scalable throughput. **Cosmos DB for Table** supports table-shaped entities through a Table-compatible API. Cosmos DB is not a conventional relational SQL database with tables joined by foreign keys. | E | Q8 |
| Azure Front Door / CDN | Azure Front Door is a **global HTTP(S) application delivery and routing service** operating at Microsoft edge locations. Standard and Premium support **caching eligible responses closer to users** when configured, reducing latency and requests to origin servers. It can also route traffic across origins and provide web security features. Unlike Functions, Front Door is not a general-purpose application code execution environment. | 6 | Q223, Q229 |
| Azure SQL Database active geo-replication | Active geo-replication maintains **readable secondary Azure SQL databases** from a primary database, including across Azure regions. Changes replicate asynchronously; a secondary can be promoted during failover and multiple read-only replicas are supported. **Asynchronous replication can allow data loss during forced failover**. It supports disaster recovery and read workloads, not independent writes to every replica. | E | Q212 |
| Azure Cosmos DB for Table | Azure Cosmos DB for Table is a managed **NoSQL key-value database with Azure Table-compatible APIs**. It stores table entities with flexible properties and offers additional capabilities such as scalable throughput and geographic distribution depending on configuration. Azure Table Storage uses a similar entity model but has different performance, distribution and pricing characteristics. Neither is a conventional relational database. | E | Q220 |
| Modern Lifecycle Policy | Microsoft’s Modern Lifecycle Policy provides ongoing servicing and support for eligible products while customers meet applicable requirements. For covered products with **no successor product or service**, Microsoft provides at least **12 months of advance notice before ending support**, excluding free services and preview releases. This is a product lifecycle policy, not an availability SLA or a universal retirement rule for all Microsoft services. | E | Q214 |

## Part E — High-yield distinctions

| If a scenario requires… | Choose / remember |
| --- | --- |
| Manage the guest operating system | Azure VM (IaaS) |
| Deploy a web app without guest OS administration | App Service (PaaS) |
| Run code in response to an event | Azure Functions |
| Run a container without managing its host | ACI; Container Apps for managed applications with scaling |
| Manage Kubernetes workloads | AKS (supporting) |
| Add more instances as demand grows | Scale out; VMSS with configured autoscale |
| Separate physical failure locations within a region | Availability Zones; design the workload across zones |
| Spread VMs across hardware and maintenance groups | Availability set |
| Connect two Azure virtual networks privately | VNet peering |
| Connect a branch office over the internet using encryption | Site-to-site VPN |
| Connect an individual remote client to a VNet | Point-to-site VPN |
| Private connectivity through a provider without using public internet | ExpressRoute; encryption is not implicit |
| Access a supported PaaS resource through a private VNet IP | Private endpoint; disable public access separately if required |
| Filter subnet or NIC traffic | NSG; it does not create public connectivity |
| Unstructured objects / shared files / simple queued messages / NoSQL entities | Blob / Files / Queue / Table Storage |
| Protect against a zone failure in a supported storage service | ZRS (or GZRS for geo-redundancy too) |
| Read replicated data in a secondary region | RA-GRS or RA-GZRS |
| Cheapest eligible blob storage per GB with hours of retrieval latency | Archive; total costs depend on retrieval and retention |
| Transfer large data volumes when network transfer is impractical | Azure Data Box |
| Discover and assess servers before migration | Azure Migrate |
| Command-line storage copy / GUI storage tool / hybrid Windows file share | AzCopy / Storage Explorer / File Sync |
| Verify identity / determine permissions | Authentication / authorization |
| Apply sign-in rules using user, device, location or risk signals | Conditional Access |
| Grant permission to Azure resources | Azure RBAC |
| Provide managed domain join, Kerberos and LDAP | Entra Domain Services |
| Invite an external supplier using their existing identity | Entra B2B collaboration |
| Provide customer registration and sign-in | Entra External ID for customers |
| Identify risky cloud sign-ins / AD identity threats / endpoint threats | Entra ID Protection / Defender for Identity / Defender for Endpoint |
| Assess cloud posture and protect workloads | Defender for Cloud |
| Estimate planned Azure spend | Pricing calculator |
| Analyze actual or forecast costs, configure spending alerts | Cost Management |
| Recommend cost savings for deployed resources | Azure Advisor |
| Organize costs by department | Tags |
| Restrict allowed deployment regions | Azure Policy |
| Prevent accidental resource deletion | CanNotDelete lock |
| Prevent management-plane modifications and deletion | ReadOnly lock |
| Classify and protect sensitive information | Microsoft Purview |
| Browser graphical administration / browser command line | Azure portal / Cloud Shell |
| Repeatable declarative deployment | ARM templates or Bicep (IaC) |
| Extend Azure management to resources outside Azure | Azure Arc |
| Personalized Azure platform incident information | Service Health |
| Health of one VM or resource | Resource Health |
| Query logs / investigate application latency or failures | Log Analytics (KQL) / Application Insights |
| Notify or act when a metric crosses a threshold | Azure Monitor alerts and action groups |
| Notify an app that an event happened / reliable messages / telemetry streams | Event Grid / Service Bus / Event Hubs (supporting) |

## Part F — Legacy wording and quiz traps

Do not memorize outdated product names as current offerings. These aliases help read the Classic bank.

| Older wording or trap | Current interpretation |
| --- | --- |
| Azure Active Directory (Azure AD / AAD) | Microsoft Entra ID. |
| Azure AD Domain Services | Microsoft Entra Domain Services. |
| Azure AD Identity Protection | Microsoft Entra ID Protection. |
| Azure Security Center / Azure Defender | Microsoft Defender for Cloud (current cloud security offering). |
| DDoS Basic / Standard | Historical names. Current offerings distinguish infrastructure protection, IP Protection and Network Protection. |
| Azure Blueprints | Legacy/retiring deployment-governance product. Do not prioritize it; use current ARM/Bicep and Policy concepts. |
| TCO calculator | Historical tool, not a current blueprint objective. Prioritize Pricing calculator and Cost Management. |
| Q4, Q9 | Virtualization alone is not necessarily private cloud; hybrid cloud is not guaranteed to minimize cost. |
| Q24, Q47 | Event Grid and Automation are expected quiz answers, but messaging/workflow requirements may make other services suitable. |
| Q53, Q54 | An NSG rule alone does not provide public connectivity; centralized filtering favors Azure Firewall, while NSGs can also filter traffic. |
| Q61 | The preserved quiz expects Defender for Endpoint. For threats to on-premises AD identities, Defender for Identity is the technically appropriate product; the quiz does not offer it. Do not learn the expected answer as a general rule. |
| Q69 | Security groups are the expected choice for general permission assignment; Microsoft 365 groups also grant access to their collaboration resources. |
| Q130, Q160 | Resource-group scope has exceptions; B2B users are represented by an object in the host directory. |

## References

- [Official AZ-900 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900) — exam scope, effective July 20, 2026.
- [Azure storage account types](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview) — standard and premium account distinctions.
- [Blob access tiers](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview) — Hot, Cool, Cold, Archive and Smart tier.
- [Azure Resource Manager overview](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview) — resource management, scopes and templates.
- [Entra B2B collaboration](https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b) — credentials and guest representation.
- See the technical references in the brochure V5 and the final audit for additional product documentation. Chapter links above point to the corresponding Microsoft Learn modules.

**Revision priority:** Learn Parts A–C first, then the comparison sheet. Use Part D only as recognition support and Part F to avoid learning misleading legacy answers. The brochure and quiz bank are unchanged. These definitions are also embedded in AZ900_Study_Sets_V6_3.html.


## November 27, 2026 — Additional Practice cross-reference

| Question | Primary concept |
| --- | --- |
| 201 | Azure resource move |
| 202 | Azure PowerShell |
| 203 | Azure DDoS Protection |
| 204 | Multifactor authentication (MFA) |
| 205 | Azure Logic Apps |
| 206 | Azure Policy |
| 207 | Azure Policy |
| 208 | Microsoft Marketplace |
| 209 | Service-level agreement (SLA) |
| 210 | Azure VM extensions |
| 211 | Azure Firewall |
| 212 | Azure SQL Database active geo-replication |
| 213 | Subscription billing ownership transfer |
| 214 | Modern Lifecycle Policy |
| 215 | Azure Functions triggers and bindings |
| 216 | Azure Functions |
| 217 | Tags |
| 218 | Azure mobile app |
| 219 | Azure Automation / runbook |
| 220 | Azure Cosmos DB for Table |
| 221 | Azure Virtual Machine Scale Sets (VMSS) |
| 222 | Platform as a Service - PaaS |
| 223 | Azure Front Door / CDN |
| 224 | Azure Firewall |
| 225 | Private cloud |
| 226 | Consumption-based model |
| 227 | Azure Cloud Shell |
| 228 | Azure Virtual Machine Scale Sets (VMSS) |
| 229 | Azure Functions |
| 230 | Azure Files |
| 231 | Shared responsibility model |
| 232 | Azure Service Health |
| 233 | Regulatory compliance dashboard (Defender for Cloud) |
| 234 | Archive access tier |
| 235 | Availability Zone - AZ |
| 236 | Software as a Service - SaaS |
| 237 | Elasticity |
| 238 | Hybrid cloud |

### Sources for the targeted update

- [Official AZ-900 objectives](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900)
- [Resource Manager overview](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview)
- [Resource moves](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/move-resource-group-and-subscription)
- [Billing transfers](https://learn.microsoft.com/azure/cost-management-billing/manage/subscription-transfer)
- [Marketplace VM offers](https://learn.microsoft.com/en-us/marketplace/purchase-vm-in-azure-portal)
- [VM extensions](https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/overview)
- [Functions triggers and bindings](https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings)
- [Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/overview)
- [DDoS tiers](https://learn.microsoft.com/en-us/azure/ddos-protection/ddos-protection-sku-comparison)
- [Azure Firewall traffic inspection](https://learn.microsoft.com/en-us/azure/networking/design-guide/azure-firewall)
- [Cloud Shell](https://learn.microsoft.com/en-us/azure/cloud-shell/overview)
- [Azure mobile app](https://learn.microsoft.com/en-us/azure/azure-portal/mobile-app/overview)
- [Runbook Gallery](https://learn.microsoft.com/en-us/azure/automation/automation-runbook-gallery)
- [Azure Front Door caching](https://learn.microsoft.com/en-us/azure/frontdoor/how-to-configure-caching)
- [Active geo-replication](https://learn.microsoft.com/en-us/azure/azure-sql/database/active-geo-replication-overview?view=azuresql-db)
- [Cosmos DB for Table](https://learn.microsoft.com/azure/cosmos-db/table/introduction)
- [Modern Lifecycle Policy](https://learn.microsoft.com/en-us/lifecycle/policies/modern)

- [ARM control plane and data plane](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/control-plane-and-data-plane)
- [Azure PowerShell installation](https://learn.microsoft.com/en-us/powershell/azure/install-azure-powershell)
- [VM Scale Sets overview](https://learn.microsoft.com/azure/virtual-machines/flexible-virtual-machine-scale-sets)
- [Microsoft Authenticator number matching](https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-mfa-number-match)
