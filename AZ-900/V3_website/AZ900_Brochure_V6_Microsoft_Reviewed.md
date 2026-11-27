# AZ-900 Knowledge Brochure V6 — Microsoft Learn alignment (November 2026)

**Exam scope:** Expanded using the January 2024 Exam Cram transcript, then checked against the Microsoft AZ-900 study guide (skills measured as of July 20, 2026) and relevant Microsoft product documentation. The current exam objectives take precedence over older video examples. This is independent study material, not an official Microsoft publication.

A concise, text-only reference to read, understand, and remember. The original 12-chapter structure is preserved, with definitions, distinctions between similar services, and practical exam scenarios. Material from the 2024 video is adapted rather than copied; the 2026 Microsoft objectives and current documentation take priority.

> **Source note:** Official exam objectives: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900. The 2024 video is a learning aid; service details can change.

> **Interactive practice:** Open `AZ900_Study_Sets_V6_7.html` in your browser: Classic Practice (100), Exam Style (100), Additional Practice (38), Mixed Practice (238). All banks are untimed with immediate corrections. The 188 flashcards support standalone review and question-linked review, prioritizing mistakes at the end of a set. Export progress before changing versions.

## Contents

- [Exam at a glance](#exam-at-a-glance)
- [Part A - Cloud concepts](#part-a---cloud-concepts)
  - [1. Cloud computing](#1-cloud-computing)
  - [2. Benefits of cloud services](#2-benefits-of-cloud-services)
  - [3. Cloud service types](#3-cloud-service-types)
- [Part B - Azure architecture and services](#part-b---azure-architecture-and-services)
  - [4. Core architecture](#4-core-architecture)
  - [5. Compute](#5-compute)
  - [6. Networking](#6-networking)
  - [7. Storage](#7-storage)
  - [8. Identity, access, and security](#8-identity-access-and-security)
- [Part C - Management and governance](#part-c---management-and-governance)
  - [9. Cost management](#9-cost-management)
  - [10. Governance and compliance](#10-governance-and-compliance)
  - [11. Managing and deploying resources](#11-managing-and-deploying-resources)
  - [12. Monitoring](#12-monitoring)
- [Part D - Quick memory sheets](#part-d---quick-memory-sheets)
- [Part E - Supporting topics (optional)](#part-e---supporting-topics-optional)
- [Objective-by-objective coverage matrix](#objective-by-objective-coverage-matrix--november-24-2026)

---

Reviewed November 24, 2026 and supplemented November 27, 2026 against the official July 20, 2026 exam objectives. Core objectives are prioritized; supporting topics are for recognition only. See the objective-by-objective coverage matrix at the end. This is a revision aid, not a guarantee of exam readiness.

## Exam at a glance

| Domain | Official weight (July 20, 2026) |
| --- | --- |
| Describe cloud concepts | 25-30% |
| Describe Azure architecture and services | 35-40% |
| Describe Azure management and governance | 30-35% |

The exam primarily tests **recognition and choice**: which service, model, or tool fits a scenario. Deep hands-on configuration is not a stated exam objective.

---

## Part A - Cloud concepts

### 1. Cloud computing

**Cloud computing** is the delivery of computing services (servers, storage,
databases, networking, software, analytics) on demand over a network, commonly the internet. Usage-based billing is common, but committed pricing and subscription models also exist.

#### Shared responsibility model

Security and management duties are split between the cloud provider and the
customer. The split depends on the service type. The table below assumes a provider-hosted public cloud service; on-premises infrastructure remains the organization’s responsibility.

| Always the provider | Always the customer | Shared or depends on model |
| --- | --- | --- |
| Physical datacenter, physical network, physical hosts | Information and data, devices, accounts and identities | Operating system, network controls, applications, identity infrastructure |

> **Remember:** The customer is **always** responsible for their data,
> devices, and accounts. The more managed the service (IaaS -> PaaS -> SaaS),
> the less the customer manages.

#### Cloud models

| Model | What it is | Key point |
| --- | --- | --- |
| Public cloud | Provider-operated infrastructure shared securely across customers | Fast provisioning and flexible pricing; some services require commitments or reserved capacity |
| Private cloud | Cloud resources dedicated to one organization (on-premises or hosted) | Greater control; hardware ownership and operation depend on the hosting arrangement |
| Hybrid cloud | Public + private cloud connected together | Keep sensitive or legacy workloads private, use public cloud for the rest |
| Multi-cloud | Using several public cloud providers | Avoid lock-in or use the best service from each provider |

- **Azure Arc** extends Azure management to servers, Kubernetes, and data
  services that run **outside Azure** (on-premises or other clouds).
- **Azure VMware Solution** runs VMware workloads natively in Azure.

**Economies of scale:** A cloud provider purchases and operates infrastructure at large scale, spreading costs across many customers. This can reduce the unit cost of computing compared with running a small private datacenter.

#### Consumption-based model

| Expense type | Meaning | Example |
| --- | --- | --- |
| CapEx (capital expenditure) | Up-front spending on physical infrastructure | Buying servers and building a datacenter |
| OpEx (operational expenditure) | Ongoing operating expenses, including consumption-based and recurring charges | Cloud VM bills, datacenter electricity and cooling |

**Pricing model comparison:** Pay-as-you-go offers flexibility without a long-term commitment. Reservations or savings plans can reduce eligible costs in exchange for a 1- or 3-year commitment. Spot VMs can be cheaper but may be evicted. These are **pricing options**, not cloud deployment models.

> **Remember:** Cloud often shifts infrastructure spending toward **OpEx** and usage-based billing. You generally pay
> for billable usage or provisioned resources. **Stopping an application or guest OS does not necessarily stop charges**; disks, reserved capacity, and allocated compute can still cost money.

**Exam traps**

- "Private cloud" does not mean "in your own building only"; it can be hosted
  by a third party but is dedicated to one organization.
- Moving to the cloud does **not** transfer responsibility for your data.

**Intermittent workloads:** A suitable per-execution plan can avoid paying for idle compute between invocations. Other plans bill allocated resources or always-ready capacity; consumption pricing is not a guarantee of zero idle charges. Hybrid cloud does not automatically reduce total cost.

### 2. Benefits of cloud services

| Benefit | Meaning in one line |
| --- | --- |
| High availability | Design and operate services to minimize downtime; an SLA states a provider's contractual availability commitment |
| Scalability | Ability to add or remove resources to handle load |
| Vertical scaling (scale up/down) | Make a resource bigger or smaller (more CPU or RAM) |
| Horizontal scaling (scale out/in) | Add or remove instances (more VMs) |
| Elasticity | Scaling happens dynamically in response to demand (often using autoscaling) |
| Reliability | Ability to recover from failures and keep working |
| Predictability (performance) | Plan and monitor expected performance; scaling and load balancing can help handle changing demand |
| Predictability (cost) | Forecast spending with tools such as the Pricing calculator and Cost Management |
| Security | Provider security controls plus customer-managed identities, data protection, configuration, and patching where applicable |
| Governance | Enforce standards and compliance with templates and policies |
| Manageability **of** the cloud | Autoscaling, monitoring, automatic replacement of failed resources |
| Manageability **in** the cloud | Ways to manage: portal, CLI, PowerShell, APIs, templates |

> **Remember:** **Scalability** = ability to change capacity. **Elasticity** = dynamically match capacity to demand, including scale-in. **Availability** = minimize interruption. **Reliability** = perform consistently and recover from failure.

**Resilience concepts (from the video)**

| Term | Exam meaning |
| --- | --- |
| Fault tolerance | A system continues operating despite some component failures |
| Disaster recovery (DR) | Restore services after a major outage; often involves backups, replication, and a recovery plan |
| High availability (HA) | Reduce service interruption through redundant components and appropriate design |
| RTO | Recovery Time Objective: target maximum time to restore service |
| RPO | Recovery Point Objective: target maximum acceptable data loss measured in time |

**Exam trap:** A backup alone does not guarantee immediate failover. Availability zones help within a region; cross-region recovery requires a suitable service configuration and recovery design.

**SLA quick facts**

An SLA is not the same as a guarantee of zero downtime. A composite availability estimate assumes a particular application design and component dependencies.

- An SLA is Microsoft's formal commitment for uptime and connectivity.
- For a 30-day month, 99.9% corresponds to about 43 minutes of potential downtime and 99.99% to about 4 minutes. Actual SLA terms, measurement periods, and exclusions vary by service.
- For a simple application where every component must be available and failures are independent, multiplying component availability percentages gives an approximate **composite availability**. Real application architecture and SLA terms may change the calculation.

**Availability calculation:** Illustrative downtime = measurement period × (1 − availability as a decimal). A 365-day year contains 525,600 minutes, so 99.999% availability corresponds to approximately 5.26 minutes of downtime. This is a mathematical illustration, not a promise of annual downtime under any particular Azure SLA. High availability is an architectural goal; SLA is a contractual commitment.

### 3. Cloud service types

| Type | You manage | Provider manages | Azure examples | Typical use |
| --- | --- | --- | --- | --- |
| IaaS | OS, runtime, apps, data, virtual network controls | Physical hardware/network, virtualization | Virtual Machines | Lift-and-shift migration, full control |
| PaaS | Apps and data | Everything up to and including OS and runtime | App Service, Azure SQL Database, Azure Functions | Develop apps without managing servers |
| SaaS | Data, users, configuration | Almost everything | Microsoft 365, Outlook, Dynamics 365 | Ready-to-use software |

> **Remember (pizza analogy):** IaaS = buy ingredients and cook at home.
> PaaS = takeaway pizza, you set the table. SaaS = eat at the restaurant.

**Serverless** abstracts server provisioning and management. Many consumption-based plans charge for execution or resource usage and scale with demand; other plans may charge for provisioned or always-ready capacity. Azure Functions and Logic Apps provide serverless capabilities; billing and scaling depend on the hosting plan. Serverless is not a separate fourth service model equivalent to IaaS, PaaS, and SaaS.

**Exam traps**

- A VM is **always IaaS**, even if it runs a database.
- Azure SQL Database is **PaaS**; SQL Server installed on a VM is **IaaS**.
- In SaaS the customer still owns **data and accounts**.

---

## Part B - Azure architecture and services

### 4. Core architecture

#### Physical infrastructure

| Term | Definition |
| --- | --- |
| Datacenter | Physical building with servers, power, cooling, and networking |
| Region | Geographic area with one or more datacenters linked by a low-latency network |
| Geography | Data-residency boundary containing one or more Azure regions (for example, a country or broader market) |
| Availability zone | Physically separate datacenter(s) inside a region with independent power, cooling, and networking |
| Region pair | Association of certain Azure regions for platform resiliency considerations; pairing does not itself replicate customer workloads |
| Sovereign region | Isolated Azure instance for legal or compliance needs (Azure Government, Azure China by 21Vianet) |

- A region that supports zones has **at least three** availability zones.
- **Zonal services** are pinned to one zone (for example a VM).
- **Zone-redundant services** are replicated automatically across zones (for
  example ZRS storage).
- Platform update sequencing and recovery priorities can depend on service and region. **Not all regions are paired**, and a region pair is not an automatic disaster-recovery solution.

> **Remember:** A multi-zone deployment or a zone-redundant service can tolerate a **zone/datacenter** failure. A single zonal resource is not automatically resilient to loss of its own zone.
> **Cross-region disaster recovery requires configured replication/failover.** A region pair alone does not protect your workload.

**Important:** Region pairs do not automatically replicate every Azure resource. Cross-region replication and failover depend on the service and chosen configuration.

#### Management hierarchy (top to bottom)

```text
Management groups
  -> Subscriptions
      -> Resource groups
          -> Resources
```

| Level | Key facts |
| --- | --- |
| Management group | Groups subscriptions; policies and access flow down; up to six levels of depth (excluding root) |
| Subscription | Unit of **billing** and an access boundary; linked to one Microsoft Entra tenant |
| Resource group | Logical container for resources that share a lifecycle; a resource belongs to **exactly one** group; groups cannot be nested |
| Resource | Any manageable item: VM, storage account, VNet, database |

- Deleting a resource group **deletes all resources** in it.
- Many resources can be moved between resource groups or subscriptions, but **not every resource type or configuration supports moving**.
- Applicable Azure RBAC assignments and Azure Policy assignments at higher scopes can affect lower scopes; **not every setting or tag is automatically inherited**.

> **Remember (top to bottom):** "**M**y **S**ubscription **R**uns **R**esources":
> Management group, Subscription, Resource group, Resource.

Resource groups themselves have no additional charge and can contain resources in different regions. Multiple subscriptions can trust the same Entra tenant; each subscription trusts one tenant at a time.

**Resource moves:** ARM supports moving eligible resources between resource groups and, when both subscriptions trust the same Microsoft Entra tenant, across subscriptions. Check resource-type support, dependencies and permissions; resource IDs may change. This is not a region migration or billing-only ownership transfer.

### 5. Compute

| Service | Model | Use it when |
| --- | --- | --- |
| Virtual Machines | IaaS | You need full OS control or lift-and-shift |
| Virtual Machine Scale Sets | IaaS | Manage a group of VMs with optional autoscaling and load balancing; Uniform uses a common VM model, while Flexible can support varied instances |
| Availability sets | IaaS feature | Spread VMs across **fault domains** (power/network rack) and **update domains** (maintenance) |
| Azure Virtual Desktop | Desktop virtualization | Users need Windows desktops and apps from anywhere |
| Azure Container Instances | Containers | Run containers without managing a Kubernetes cluster |
| Azure Container Apps | Containers (PaaS) | Serverless containers with scaling, microservices |
| Azure Kubernetes Service (AKS) | Managed Kubernetes | Orchestrate containers; AKS Automatic and Standard offer different degrees of infrastructure management |
| Azure Functions | Serverless | Event-driven code with plan-dependent scaling and billing |
| Azure App Service | PaaS | Host web apps, REST APIs, and mobile back ends |

**Resources required for an Azure VM**

| Resource | Why it is needed |
| --- | --- |
| VM size | Defines available virtual CPUs, memory, and other capabilities |
| Operating system image or existing OS disk | Provides Windows or Linux to boot |
| Managed OS disk | Stores the operating system; optional data disks store application data |
| Network interface (NIC) | Connects the VM to a subnet in a virtual network (VNet) |
| Network security group (NSG) | Optional rules to allow or deny network traffic |
| Public IP | Optional; only needed for certain direct public connectivity scenarios |

A VM must be placed in a resource group and a region. A public IP is **not** required for every VM. **Exam example:** choose a VM when you need OS-level control; choose App Service for a managed web application.

**Choosing VM availability options**

- **Availability set:** Places related VMs across fault and update domains to reduce the impact of hardware failures and planned maintenance.
- **Availability zone:** Places a supported VM in a physically separate zone within a region; multi-zone application designs can survive a zone outage.
- **Scale set:** Manages a group of VMs and supports scaling. Scaling and resilience are different goals, although a scale set can contribute to both.

**VMs vs containers**

| Virtual machine | Container |
| --- | --- |
| Virtualizes the **hardware**, includes a full OS | Virtualizes the **OS**, shares the host kernel |
| Larger, slower to start | Lightweight, starts in seconds |
| Strong isolation, full control | Portable, ideal for microservices |

> **Remember:** "Event triggers code" = **Functions**. "Web app without
> servers to manage" = **App Service**. "Remote desktop for staff" =
> **Azure Virtual Desktop**. "Many containers" = **AKS**.

**VM billing:** Stopped (allocated) VMs still incur compute charges; stopped (deallocated) VMs do not incur VM compute charges, although disks and other resources can still cost money. App Service can enforce a minimum TLS version (such as TLS 1.2); a minimum does not exclude newer versions. ACI runs containers without customer-managed hosts. AKS virtual nodes can burst eligible pods into ACI when configured. Scale sets can add instances for demand spikes when autoscale is configured; availability sets stagger updates and separate fault domains.

**Compute deployment and execution:** Microsoft Marketplace offers preconfigured VM images and partner solutions; software licenses can add charges. VM extensions automate post-deployment configuration inside the guest OS (such as installing a monitoring agent). VMSS can use configured autoscale and a supported load balancer, but these are separate capabilities. Azure Functions can execute Java, C# or Python code in response to supported triggers. A trigger starts a function (HTTP, timer, Queue Storage message or supported Blob Storage event); input/output bindings connect to data and services. Logic Apps instead orchestrates workflows with triggers, actions and managed connectors, such as sending email. These product details supplement the compute objectives.

### 6. Networking

| Service or feature | What it does |
| --- | --- |
| Virtual network (VNet) | Private network in Azure; isolation and segmentation into **subnets** |
| Subnet | Range of IP addresses inside a VNet |
| VNet peering | Connects two VNets privately over the Microsoft backbone (same or different regions) |
| Network security group (NSG) | Allow/deny rules for inbound and outbound traffic on subnets or NICs |
| Public endpoint | Publicly addressable service endpoint; actual access depends on firewall, authentication and network settings |
| Private endpoint | Network interface with a private IP in your VNet that connects to a supported service through Private Link |
| Service endpoint | Extends a VNet subnet identity to supported Azure services over the Azure backbone; unlike Private Link, it does not place a private IP for that service in your VNet |
| VPN Gateway | Encrypted connectivity: site-to-site and point-to-site typically use the internet; VNet-to-VNet VPN traffic uses the Azure backbone |
| ExpressRoute | **Private** connectivity via a provider, avoiding the public internet; encryption is not implied |
| Azure DNS | Hosts DNS domains in Azure (public or private zones) |

**Network decision example:** Two VNets need private communication = **VNet peering**. An on-premises office needs encrypted connectivity over the internet = **VPN Gateway**. A private provider circuit = **ExpressRoute**. A storage account should be accessed through a private IP inside your VNet = **Private endpoint**.

**VPN Gateway vs ExpressRoute**

| VPN Gateway | ExpressRoute |
| --- | --- |
| Encrypted; internet for typical on-premises/client VPNs | Private connection through a connectivity provider |
| Often quicker and less expensive to establish | Typically more predictable performance; actual latency and reliability depend on the circuit and design |
| Site-to-site, point-to-site, VNet-to-VNet | Enterprise, predictable, large workloads |

> **Remember:** "Not over the internet" = **ExpressRoute**.
> "Encrypted over the internet" = **VPN Gateway**.
> "Private IP for a PaaS service" = **Private endpoint**.

**Private access caveat:** Creating a private endpoint does not automatically disable a service’s public endpoint. Configure public network access separately if private-only access is required. DNS must resolve the service name to the correct private IP. Service endpoints restrict supported services to authorized subnets using the service’s public endpoint; they do not assign a private IP to the service.

**Connectivity:** Private communication is allowed by default within a VNet, including across subnets, subject to NSGs, routes and guest firewalls. Separate VNets need connectivity such as peering. Site-to-site VPN connects networks; point-to-site VPN connects individual clients. A virtual network gateway provides the Azure VPN endpoint; a local network gateway represents the on-premises VPN device and networks. An NSG allows or denies traffic but does not create public connectivity. Azure Firewall provides centralized stateful filtering across connected networks; Application Gateway provides HTTP(S) routing and optional WAF. VPN is generally suitable for a low-cost pilot; ExpressRoute provides private connectivity and often more predictable latency.

**Centralized filtering and global delivery (supporting):** Azure Firewall provides stateful network filtering in a central network such as a hub connected to spokes. DNAT (destination network address translation) can publish an internal service through the firewall’s public IP, provided routing and rules are configured. NSGs filter at subnet/NIC scope. DDoS IP Protection targets individual eligible public IPs; Network Protection operates at VNet scope for eligible public IPs. Azure Front Door Standard/Premium provides global HTTP(S) routing and configurable edge caching for eligible responses; a cache reduces origin requests but is not a script execution service.

### 7. Storage

#### Storage services

| Service | Stores | Typical use |
| --- | --- | --- |
| Blob Storage | Unstructured objects (files, images, video, backups) | Data lakes, media, backups |
| Azure Files | Fully managed file shares (SMB/NFS) | Replace on-premises file servers |
| Queue Storage | Messages | Decouple application components |
| Table Storage | NoSQL key-value data | Simple structured data |
| Disk Storage | Block-level disks for VMs | VM OS and data disks |

A **storage account** provides a unique namespace for your data and determines
the redundancy and performance options.

**Storage account reminder:** General-purpose v2 (StorageV2) is the standard account type for most Azure Storage scenarios; account type and redundancy choices affect supported features.

**Storage account options (core objective):**

| Account type | Supported data | Typical choice |
| --- | --- | --- |
| Standard general-purpose v2 (StorageV2) | Blob, Files, Queue, Table | Default for most general storage workloads |
| Premium block blobs (BlockBlobStorage) | Block and append blobs | High transaction rates and low latency |
| Premium file shares (FileStorage) | Azure Files | High-performance SMB or NFS shares |
| Premium page blobs | Page blobs | Specialized random-access workloads |

Premium accounts have service-specific feature and redundancy choices. Managed VM disks are separate managed resources; a customer-managed general-purpose storage account is not required for modern managed disks.

**Security reminder:** Azure Storage encrypts data at rest by default. Network access settings, identity-based access, and encryption options can provide additional protection.

#### Blob access tiers

| Tier | Access pattern | Minimum storage period |
| --- | --- | --- |
| Hot | Frequently accessed | None |
| Cool | Infrequent, usually kept at least 30 days | 30 days for general-purpose v2 block blobs* |
| Cold | Rarely accessed, usually kept at least 90 days | 90 days for general-purpose v2 block blobs* |
| Archive | Almost never accessed, **offline**, retrieval takes hours | 180 days |

*Early-deletion charges can apply if blobs leave Cool, Cold, or Archive before their minimum retention period; exact rules depend on the account type and feature. Archive supports only certain redundancy configurations.*

> **Remember:** Hot -> Cool -> Cold -> Archive generally trades lower storage cost for higher retrieval costs. Hot, Cool and Cold remain online; Archive is offline and must be **rehydrated** before reading.

**Additional current option:** Azure Blob Storage **Smart tier** can automatically transition eligible data among Hot, Cool, and Cold. It is not a separate offline archival tier. [Microsoft documentation](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview).

#### Redundancy options

| Option | Copies and location | Protects against |
| --- | --- | --- |
| LRS | 3 copies in **one datacenter** | Disk or rack failure |
| ZRS | 3 copies across **3 availability zones** in one region | Datacenter failure |
| GRS | LRS in primary + LRS in a **secondary region** | Durable copies in another region; write failover/access requires supported recovery procedures |
| GZRS | ZRS in primary + LRS in secondary region | Zone resilience plus durable copies in another region; recovery/failover is not automatic for every scenario |
| RA-GRS / RA-GZRS | Same copies as GRS / GZRS with **read access** to the secondary | Readable secondary endpoint for supported services; applications must explicitly use it |

> **Remember:** **L**ocal, **Z**one, **G**eo, **G**eo+**Z**one. "RA" provides a secondary read endpoint where supported; your application must be designed to use it. Geo-replication is asynchronous and can lose recent writes in a disaster.

#### Data migration and file movement

| Tool | Use |
| --- | --- |
| Azure Migrate | Hub to discover, assess, and migrate on-premises servers, databases, and apps |
| Azure Data Box | Secure physical device shipped to transfer very large datasets when network transfer is impractical; device capacity depends on the model |
| AzCopy | Command-line tool to copy files to/from storage accounts |
| Azure Storage Explorer | Graphical app to manage storage accounts |
| Azure File Sync | Syncs Azure Files with Windows file servers (on-premises cache) |

**Exam traps**

- Slow or limited internet + huge data = **Data Box**.
- Archive generally has the lowest storage price per GB for eligible blobs but **cannot be read immediately**; retrieval and early-deletion costs can make total cost higher.

**File Sync timing:** Direct changes made to the Azure file share may wait for cloud change detection, normally every 24 hours. Changes made through a synced server follow the normal sync process.

**Storage distinctions:** Table Storage is a schemaless NoSQL key/attribute store using PartitionKey and RowKey. LRS is generally the lowest-cost redundancy option; GZRS combines zone and geographic redundancy for stronger resilience. Azure File Sync synchronizes Windows Server shares with Azure Files in both directions (cloud-side changes may take time to detect). AzCopy is a command-line transfer tool; Storage Explorer is graphical; Data Box supports offline bulk migration.

### 8. Identity, access, and security

| Concept | Meaning |
| --- | --- |
| Authentication (AuthN) | Proves **who you are** |
| Authorization (AuthZ) | Decides **what you can do** |
| Microsoft Entra ID | Microsoft's cloud identity and access service (formerly Azure Active Directory) |
| Microsoft Entra Domain Services | Managed domain services (domain join, Group Policy, LDAP, Kerberos/NTLM) without running domain controllers |
| Single sign-on (SSO) | One sign-in for many applications |
| Multifactor authentication (MFA) | Two or more of: something you **know**, **have**, **are** |
| Passwordless | Sign in without a password (Windows Hello for Business, Microsoft Authenticator, FIDO2 keys) |
| Microsoft Entra External ID | Identity capabilities for external users, including business guests and customer identities |
| B2B collaboration | Invite partners, suppliers, or consultants to collaborate using their existing identities; the host organization controls access |
| B2B direct connect | Enables supported cross-organization collaboration, such as Teams shared channels, through configured cross-tenant trust without ordinary guest invitations |
| Customer identities (Microsoft Entra External ID) | Sign-up and sign-in for customers of external-facing applications; distinct from B2B collaboration. Azure AD B2C is a separate legacy product offering |
| Conditional Access | If-then policies based on signals (user, location, device, risk) to allow, block, or require MFA |
| Azure RBAC | Grants permissions by **role** at a **scope** (management group, subscription, resource group, resource) |
| Zero Trust | "Never trust, always verify": verify explicitly, least privilege, assume breach |
| Defense in depth | Multiple layers of protection so one failure does not expose data |
| Microsoft Defender for Cloud | Security posture management and threat protection for Azure, hybrid, and multi-cloud |

**Guest account detail:** With **B2B collaboration**, an invited partner usually signs in with an existing identity and is represented by a guest user object in the host directory. The host organization grants the necessary app or resource permissions; guest access is not unrestricted. **B2B direct connect** is different: it currently supports Teams shared channels and does not create the usual guest object in the resource tenant.

**External identities: choose the right scenario**

- **B2B collaboration:** A supplier needs access to your SharePoint site or Azure resources. Invite the supplier as an external user; grant only the required permissions.
- **B2B direct connect:** Two organizations collaborate in a supported Teams shared channel with configured cross-tenant access.
- **Customer identities:** A shopping application needs sign-up and sign-in for thousands of customers. Use customer-facing identity capabilities, not B2B guest collaboration.
- **Remember:** Authentication establishes identity; authorization (for example, Azure RBAC for Azure resources) determines permissions. A guest invitation does not automatically grant broad access.

**Defender for Cloud:** Helps assess cloud security posture, identify recommendations, and protect supported workloads. It does **not** replace Entra ID authentication, Azure RBAC authorization, or Conditional Access sign-in rules.

**Identity and access distinctions**

| Feature | Main purpose |
| --- | --- |
| Microsoft Entra ID | Authenticate users and manage cloud identities |
| Microsoft Entra Domain Services | Provide managed domain join, LDAP, Kerberos and Group Policy for compatible workloads |
| Conditional Access | Apply sign-in rules based on signals (for example require MFA) |
| Azure RBAC | Authorize actions on Azure resources at a defined scope |

**Common RBAC built-in roles**

| Role | Can do |
| --- | --- |
| Owner | Full access, including granting access to others |
| Contributor | Create and manage resources, but **cannot** grant access |
| Reader | View only |
| User Access Administrator | Manage user access to resources |

**Defense in depth layers (outside to inside)**

```text
Physical security -> Identity & access -> Perimeter -> Network
  -> Compute -> Application -> Data
```

> **Remember:** AuthN = **who**, AuthZ = **what**. Conditional Access =
> **if-then**. RBAC = **role + scope**. Zero Trust = **never trust, always
> verify**.

**Exam traps**

- Entra ID is **not** the same as on-premises Active Directory.
- RBAC controls **who can do what**; Azure Policy controls **what can be
  created or how it must be configured**.

---

**Additional identity and security distinctions (supporting knowledge):**

| Feature | Purpose |
|---|---|
| Entra ID Protection | Detect risky cloud identities and sign-ins; risk signals can feed Conditional Access |
| Entra Connect Sync | Synchronize on-premises AD identities with Entra ID; supports hybrid SSO designs |
| Security groups | Assign permissions collectively |
| Microsoft 365 groups | Provide shared collaboration resources |
| Windows Hello for Business | Passwordless Windows sign-in using a device-bound credential unlocked by PIN or biometrics |
| Microsoft Authenticator | Authentication approvals and time-based one-time codes (OATH TOTP), including supported third-party accounts |
| Privileged Identity Management | Time-limited privileged role activation |
| Defender for Identity | Detect threats to Active Directory identities |
| Defender for Endpoint | Endpoint and server threat detection and response |
| Microsoft Sentinel | Security analytics, SIEM and SOAR |

Hybrid MFA and SSO depend on the integration and application; they do not automatically apply to every legacy AD login. Conditional Access can require MFA based on location, device state and risk. OTP means one-time password; TOTP is time-based. Defender for Cloud provides regulatory compliance assessments (such as applicable PCI DSS or HIPAA controls), not a legal guarantee of compliance. For the preserved quiz question 61, Defender for Endpoint is the reported quiz answer, but Defender for Identity is the more directly relevant product and is absent from the options.

## Part C - Management and governance

**MFA and sign-in approvals:** A password and an approval on a registered Authenticator device can provide two distinct authentication factors. Number matching normally asks the user to enter a number displayed during sign-in, helping reduce accidental approvals. It is not a guarantee against phishing or account compromise. Conditional Access determines when additional verification is required.

### 9. Cost management

**Factors that affect cost**

- Resource type and size (SKU), consumption, and region
- Bandwidth: inbound internet transfer is generally free; outbound and inter-region transfer may incur charges depending on route, allowance and service.
- Purchase model: pay-as-you-go, reservations, savings plans, spot VMs
- Licensing: **Azure Hybrid Benefit** can apply eligible Windows Server and SQL Server licenses with qualifying subscription or active Software Assurance coverage; terms vary by product.
- Marketplace and third-party services

**Ways to save**

| Option | How it saves |
| --- | --- |
| Azure Reservations | Commit for eligible services (often 1 or 3 years) to receive discounts subject to the offering |
| Azure savings plan for compute | Commit to an hourly spend for 1 or 3 years across compute services |
| Spot VMs | Use spare capacity cheaply; can be evicted at any time |
| Azure Hybrid Benefit | Apply eligible existing licenses under applicable licensing terms |
| Autoscaling / deallocating unused compute | Reduce eligible compute charges; retained disks and other resources may still incur charges |

**Cost tools**

| Tool | Purpose |
| --- | --- |
| Pricing calculator | Estimate the cost of Azure services **before** deploying |
| Microsoft Cost Management | Analyze actual and forecast spending; create budgets, alerts, and cost reports. Budgets alone do not stop resources. |
| Tags | Labels (name/value) that group resources, for example by cost center or environment |
| TCO calculator (historical; retired) | Former on-premises vs cloud comparison tool; **not** a current exam tool to memorize |

**Cost scenario:** A team needs to estimate a new VM before deployment -> **Pricing calculator**. Finance wants current spend and budget alerts -> **Cost Management**. Management wants to categorize costs by department -> **tags**. A budget alert warns about spending but does not automatically stop all resources.

> **Remember:** Pricing calculator = **before** (estimate).
> Cost Management = **during/after** (actual/forecast spend, budgets). Tags = **group and
> report costs**.

PAYG has no long-term commitment and offers flexibility; reservations can lower unit costs for predictable usage. Pricing Calculator estimates planned deployments, Cost Management tracks and forecasts spending, and Advisor recommends optimizations to existing resources. Tags can identify application, department and cost center for chargeback.

**Billing versus deployment:** Eligible subscription billing ownership transfers can use self-service procedures, depending on account types. They change who is billed; a billing-only transfer does not move resources between subscriptions or automatically change the directory. Compare VM size or region while holding other cost parameters constant to understand the pricing impact.

### 10. Governance and compliance

| Service | Purpose |
| --- | --- |
| Azure Policy | Create and enforce rules on resource properties (for example, allowed regions or required tags); can audit or deny |
| Policy initiative | Group of policies managed together |
| Resource locks | Prevent accidental management-plane changes or deletion, depending on lock type |
| Microsoft Purview | Data governance, risk, and compliance: discover, classify, and map data across environments |
| Service Trust Portal | Microsoft's compliance reports, audits, and security documents |

**Governance example:** Use **Azure Policy** to restrict deployments to approved regions; **Azure RBAC** to grant a user Reader access; a **resource lock** to prevent accidental deletion; and **tags** to organize costs. These tools solve different problems.

**Tags caveat:** Tags are metadata used for organization and cost analysis; they do not grant access or enforce compliance. Tags are not automatically inherited by every child resource simply because they are present on a resource group. Use Azure Policy where automatic tag enforcement or inheritance is needed.

**Resource lock types**

| Lock | Read | Modify | Delete |
| --- | --- | --- | --- |
| CanNotDelete (Delete) | Yes | Yes | **No** |
| ReadOnly | Yes | **No** | **No** |

- Locks apply even to Owners for protected management operations; a user with the appropriate permissions must remove the lock before performing a blocked operation. Locks generally do not block data-plane operations.
- Locks and policies are inherited from parent scopes.

> **Remember:** Policy = **rules** for resources. RBAC = **permissions** for
> people. Locks = **protection** from deletion or change.

Purview sensitivity labels classify documents and can apply persistent encryption and access restrictions even when files travel outside the organization. A ReadOnly lock at resource group scope blocks management-plane creation and changes within that scope until an authorized user removes the lock; it does not universally block data-plane writes.

**Policy scope and effects:** Allowed VM size SKUs and allowed or denied resource types can be enforced using an appropriate Azure Policy definition and assignment. Assign at resource group scope to target that group instead of unrelated groups. An applicable deny policy can block a deployment even if RBAC permits the user to create resources. A regulatory compliance dashboard assesses supported technical controls, not legal certification.

### 11. Managing and deploying resources

| Tool | Description |
| --- | --- |
| Azure portal | Web-based graphical interface |
| Azure Cloud Shell | Browser-based, authenticated Bash or PowerShell shell; initial setup and storage requirements depend on the configuration |
| Azure CLI | Cross-platform command-line tool (`az ...` commands) |
| Azure PowerShell | PowerShell cmdlets (`New-AzVM` style) |
| Azure mobile app | Monitor and manage resources from a phone |
| Azure Arc | Manage non-Azure resources (on-premises, other clouds) as if they were in Azure |
| Azure Resource Manager (ARM) | Azure's deployment and management **control plane** for Azure resources; not every data-plane operation goes through ARM |
| Infrastructure as code (IaC) | Describe infrastructure in files instead of manual clicks |
| ARM templates | JSON files that declare resources to deploy |
| Bicep | Simpler language that compiles to ARM templates |

**Deployment decision example:** Use the **portal** for graphical administration; **Cloud Shell** for an authenticated browser terminal; **CLI/PowerShell** for scripted commands; and **ARM templates/Bicep** for repeatable declarative deployments. **ARM** is the management layer used by these tools, not a separate hosting service.

**ARM template benefits:** declarative, repeatable, orchestrated, modular,
and source-controlled.

> **Remember:** Azure resource-management tools use **Azure Resource Manager**. IaC makes deployments repeatable and reviewable, but outcomes can still depend on parameters, external state, permissions, and service availability.

Portal URL: https://portal.azure.com. Azure Automation runbooks automate administrative and corrective tasks. Azure Blueprints (Preview) is in phased retirement: new definitions and versions were blocked starting July 31, 2026; final retirement is scheduled for January 31, 2027. For new deployments, prioritize ARM/Bicep, Policy, and current tooling. Template Specs store reusable template versions; Deployment Stacks manage resources as a group (supporting knowledge).

**Administration distinctions:** Azure CLI and Az PowerShell are cross-platform; Cloud Shell provides an authenticated hosted terminal without local installation. The Azure mobile app (iOS/Android) supports resource health checks, common operations and Cloud Shell access. Azure Automation Runbook Gallery provides scripts that can be imported, reviewed, configured and tested. ARM processes management requests; ARM templates and Bicep describe desired infrastructure, rather than replacing the management plane.

### 12. Monitoring

| Service | Purpose |
| --- | --- |
| Azure Advisor | Personalized **recommendations**: reliability, security, performance, cost, operational excellence |
| Azure Service Health | Status of **Azure services** affecting you: outages, planned maintenance, health advisories |
| Azure Monitor | Collect, analyze, and act on metrics, logs, traces and events from cloud and hybrid environments |
| Log Analytics | Write and run queries (KQL) on log data collected by Azure Monitor |
| Azure Monitor alerts | Notify or act when a condition is met |
| Application Insights | Monitor the performance and usage of **web applications** |

**Monitoring example:** Use **Advisor** for improvement recommendations; **Service Health** for an Azure platform outage affecting your subscription; **Resource Health** for one VM's health; **Azure Monitor alerts** for threshold notifications; and **Application Insights** for application errors or response times.

**Metrics vs logs:** **Metrics** are numeric measurements such as CPU usage or request rate. **Logs** record richer events and diagnostic information; **Log Analytics** uses Kusto Query Language (KQL) to query supported log data. Alerts can be configured to notify or trigger actions when a condition is met.

**Service Health components**

| Component | Scope |
| --- | --- |
| Azure status | Global view of all Azure services in all regions |
| Service Health | Services and regions **you** use |
| Resource Health | Health of **your individual** resources |

> **Remember:** Advisor = **advice**. Service Health = **is Azure itself OK?**
> Monitor = **my resources' metrics and logs**. Application Insights = **my
> app**.

---

Azure Monitor includes infrastructure/container monitoring for AKS and Application Insights for instrumented application telemetry, including microservices. Action groups can invoke Automation runbooks or Logic Apps, depending on the desired corrective action or workflow. Monitor collects and correlates resource telemetry; Application Insights specializes in application requests, dependencies, exceptions and latency.

## Part D - Quick memory sheets

### Classic look-alikes

| If the question says... | The answer is usually... |
| --- | --- |
| Estimate cost before deployment | Pricing calculator |
| Track actual spending, set budgets | Microsoft Cost Management |
| Enforce allowed regions or required tags | Azure Policy |
| Give a user read-only access | Azure RBAC (Reader) |
| Prevent accidental deletion | Resource lock (Delete) |
| Require MFA from untrusted locations | Conditional Access |
| Private connection, not over the internet | ExpressRoute |
| Encrypted connection over the internet | VPN Gateway |
| Move very large datasets with slow internet | Azure Data Box |
| Rarely accessed data, lowest storage cost | Archive tier |
| Protect against datacenter failure | Availability zones / ZRS |
| Protect against region failure | Configured cross-region replication/failover; GRS/GZRS for supported storage |
| Run code when an event occurs | Azure Functions |
| Host a web app without managing servers | App Service |
| Manage on-premises servers from Azure | Azure Arc |
| Recommendations to improve your resources | Azure Advisor |
| Is there an Azure outage in my region? | Azure Service Health |
| Compliance reports from Microsoft | Service Trust Portal |
| Data classification and governance | Microsoft Purview |
| Reuse existing Windows Server licenses | Azure Hybrid Benefit |

### Numbers to remember

| Fact | Value |
| --- | --- |
| Copies in LRS / ZRS | 3 |
| Copies in GRS / GZRS | 6 (3 primary + 3 secondary) |
| Minimum availability zones in a zone-enabled region | 3 |
| Reservation and savings plan terms | 1 or 3 years |
| Cool / Cold / Archive minimum days | 30 / 90 / 180 |
| Management group depth | Up to 6 levels (excluding root) |

### One-sentence summary per group

1. **Cloud computing:** rented IT over the internet, OpEx, shared responsibility.
2. **Benefits:** available, scalable, elastic, reliable, predictable, secure, governable, manageable.
3. **Service types:** IaaS = control, PaaS = focus on code, SaaS = ready software.
4. **Architecture:** regions, zones, pairs; management group -> subscription -> resource group -> resource.
5. **Compute and networking:** VMs, containers, Functions, App Service; VNets, NSGs, VPN, ExpressRoute, DNS, private endpoints.
6. **Storage:** Blob/Files/Queue/Table/Disk, Hot to Archive tiers, LRS to GZRS redundancy, Migrate and Data Box.
7. **Identity and security:** Entra ID, SSO, MFA, Conditional Access, RBAC, Zero Trust, defense in depth, Defender for Cloud.
8. **Cost:** cost factors, Pricing calculator, Cost Management, tags, reservations.
9. **Governance:** Policy, locks, Purview, Service Trust Portal.
10. **Management tools:** portal, Cloud Shell, CLI, PowerShell, Arc, ARM, IaC (ARM templates, Bicep).
11. **Monitoring:** Advisor, Service Health, Monitor, Log Analytics, alerts, Application Insights.

---

## Part E - Supporting topics (optional)

These topics appear in training material or the revision guide for
recognition. They are **not confirmed** as explicit exam objectives.

| Term | One-line meaning |
| --- | --- |
| Azure Firewall | Managed, stateful network firewall service |
| Azure Bastion | Secure RDP/SSH to VMs through the portal, without public IPs |
| Azure Key Vault | Secure storage for secrets, keys, and certificates |
| Azure DDoS Protection | Protection against distributed denial-of-service attacks |
| Azure Load Balancer | Layer 4 traffic distribution across backend instances |
| Application Gateway | Layer 7 HTTP(S) routing and optional WAF |
| Azure Front Door | Global entry point for web apps, acceleration and WAF |
| Cosmos DB | Globally distributed NoSQL database |
| Foundry Tools (formerly Azure AI services) / Azure Machine Learning | Prebuilt AI APIs and models / build and train ML models |
| Azure IoT Hub | Connect and manage IoT devices |
| Terraform | Third-party infrastructure-as-code tool that also deploys Azure |
| Sustainability | Microsoft's efforts and tools to measure cloud carbon emissions |

For additional practice, use your separate AZ-900 glossary and checklist if available.

### Messaging and integration (supporting knowledge)

| Service | Purpose |
|---|---|
| Event Grid | Route discrete events from Azure services and custom sources to subscribers |
| Service Bus | Reliable enterprise messaging using queues and topics |
| Event Hubs | High-throughput event and telemetry ingestion |
| Logic Apps | Managed integration workflows and connectors |
| Power Automate | Business process automation, including Microsoft 365 workflows |
| Azure Automation | Administrative scripts and runbooks |

Event Grid signals that something happened; Service Bus transports business messages; Event Hubs ingests streams. DDoS protection includes built-in infrastructure protection and enhanced IP Protection and Network Protection tiers. The historical Basic/Standard names should not be memorized as current tiers.

### Additional database and lifecycle concepts (optional)

- **Azure SQL Database active geo-replication:** maintains readable secondary databases using asynchronous replication, optionally in other regions. A replica can become primary on failover; secondary copies are not independently writable, and forced failover can lose recent changes.
- **Azure Cosmos DB for Table:** managed NoSQL table entities with a Table-compatible API, scalable throughput and geographic distribution options. Azure Table Storage has a similar data model but different service characteristics.
- **Modern Lifecycle Policy:** for covered products with no successor, Microsoft provides at least 12 months’ notice before support ends, except for free services and preview releases. This is not a universal Azure product-retirement or SLA guarantee.

## Direct Microsoft references for this brochure

Official exam blueprint (rechecked November 24, 2026): [AZ-900 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900). Product documentation used for corrections: [Microsoft Entra B2B collaboration](https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b), [B2B direct connect](https://learn.microsoft.com/en-us/entra/external-id/b2b-direct-connect-overview), [Data Box](https://learn.microsoft.com/en-us/azure/databox/data-box-overview), [region pairs](https://learn.microsoft.com/en-us/azure/reliability/regions-paired).

Useful official documentation: [Blob access tiers](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview), [Azure Functions hosting options](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale), [region pairing](https://learn.microsoft.com/en-us/azure/reliability/regions-paired), and [Azure VM billing states](https://learn.microsoft.com/en-us/azure/virtual-machines/states-billing).

**Optional product notes:** Foundry Tools (formerly Azure AI services), Load Balancer and Application Gateway are supporting topics here. SKU lifecycle dates and detailed AI features are not revision priorities for the current AZ-900 blueprint.


## Final 2026 review — short scenario practice

These examples reinforce the recognition-based questions emphasized in the 2024 Exam Cram video.

| Scenario | Best starting answer | Reason |
| --- | --- | --- |
| Host a website without managing its operating system | Azure App Service | Managed web application hosting |
| Run a legacy application needing administrator access to Windows | Azure Virtual Machines | Full guest OS control |
| Run short event-triggered code | Azure Functions | Event-driven compute |
| Connect an office to Azure using an encrypted tunnel over the internet | VPN Gateway | Encrypted internet connectivity |
| Connect through a private provider circuit | ExpressRoute | Private connectivity, not automatically encrypted |
| Prevent deletion of a critical resource | Resource lock (CanNotDelete) | Blocks deletion even for Owners until removed |
| Require a particular Azure region for deployments | Azure Policy | Enforces resource configuration rules |
| Grant a colleague read-only access to a resource group | Azure RBAC Reader | Grants scoped permissions |
| Estimate spending before deployment | Azure Pricing calculator | Estimates planned costs |
| Diagnose a performance problem in a web application | Application Insights | Application telemetry |
| Invite a supplier to access shared company resources | Entra B2B collaboration | External business guest using an existing identity |
| Provide sign-in for customers of a shopping application | Entra External ID customer identities | Customer-facing authentication |
| Let two organizations work in a Teams shared channel | B2B direct connect | Supported cross-tenant collaboration |
| Restrict sign-in unless MFA is completed | Conditional Access | Sign-in policy, not Azure RBAC |
| Give an Azure storage service a private IP in your VNet | Private endpoint | Private Link access |
| Need shared company files accessible over SMB | Azure Files | Managed file shares |
| Need to copy large data to Blob Storage from a script | AzCopy | Command-line file transfer |
| Need to synchronize an on-premises Windows file server with Azure Files | Azure File Sync | Hybrid file synchronization |
| Need to keep an application running during a zone failure | Multi-zone design | Redundant instances across availability zones |
| Need to restore service after a major regional outage | Disaster recovery design | Configure suitable cross-region replication and failover |
| Find whether a single VM is unhealthy | Azure Resource Health | Individual resource health |

**What to prioritize:** understand why an answer fits a scenario, rather than memorizing product limits or the exact wording of these examples.

---

## Exam scope review (November 24, 2026)

**Review order:** The January 2024 Exam Cram transcript was used to identify useful explanations and exam scenarios. These were then checked against the Microsoft AZ-900 skills measured as of July 20, 2026; official documentation takes precedence wherever service behavior or terminology has changed.

| Official objective group | Main brochure section | Coverage |
| --- | --- | --- |
| Describe cloud computing | 1 | Covered |
| Benefits of cloud services | 2 | Covered |
| Cloud service types | 3 | Covered |
| Core architectural components | 4 | Covered |
| Compute and networking services | 5–6 | Covered |
| Storage services and migration | 7 | Covered |
| Identity, access, and security | 8 | Covered |
| Cost management | 9 | Covered |
| Governance and compliance | 10 | Covered |
| Managing and deploying resources | 11 | Covered |
| Monitoring tools | 12 | Covered |

**Corrections made in the final pass:** availability versus SLA; the limits of inherited settings and resource moves; storage geo-redundancy versus actual failover; guest B2B versus customer identities; management-plane resource locks; ARM control-plane terminology; and clearer performance predictability.

**Scope caution:** A topic being covered in this document does not guarantee that every future exam question is represented. The video dates from 2024, so its historical capacities, product names, and service lifecycle statements must not override current Microsoft documentation. Optional supporting topics are not a claim that Microsoft explicitly tests every item.

**Official references:**
- [AZ-900 skills measured (July 20, 2026)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900)
- [Microsoft Entra B2B direct connect](https://learn.microsoft.com/en-us/entra/external-id/b2b-direct-connect-overview)
- [Microsoft Entra B2B collaboration](https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b)
- [Azure Blob access tiers](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview)
- [Azure storage redundancy](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy)
- [Azure resource locks](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources)
- [Move Azure resources](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/move-resource-group-and-subscription)
- [Azure Resource Manager overview](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview)

### November 24 update sources

- [Official AZ-900 objectives, July 20, 2026](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900)
- [DDoS tier comparison](https://learn.microsoft.com/en-us/azure/ddos-protection/ddos-protection-sku-comparison)

## Objective-by-objective coverage matrix — November 24, 2026

The 57 rows below correspond to the individual objective bullets in the July 20, 2026 English exam outline, paraphrased as study topics. Coverage means the topic has an explanation in the indicated chapter; it does not certify exhaustive product knowledge or exam success.

| # | Study topic | Chapter |
| --- | --- | --- |
| 01 | Cloud computing definition | 1 |
| 02 | Responsibility split | 1 |
| 03 | Public/private/hybrid models | 1 |
| 04 | Deployment model use cases | 1 |
| 05 | Consumption billing | 1 |
| 06 | Pricing options | 1 |
| 07 | Serverless (also Ch. 3) | 1 |
| 08 | Availability and scaling | 2 |
| 09 | Reliability and predictability | 2 |
| 10 | Security and governance | 2 |
| 11 | Manageability | 2 |
| 12 | IaaS | 3 |
| 13 | PaaS | 3 |
| 14 | SaaS | 3 |
| 15 | Selecting IaaS/PaaS/SaaS for a workload | 3 |
| 16 | Regions, pairing and sovereign cloud | 4 |
| 17 | Availability zones | 4 |
| 18 | Datacenters | 4 |
| 19 | Resources and resource groups | 4 |
| 20 | Subscriptions | 4 |
| 21 | Management groups | 4 |
| 22 | Scope hierarchy | 4 |
| 23 | VMs vs containers vs functions | 5 |
| 24 | VM, VMSS, availability sets and AVD | 5 |
| 25 | VM dependencies | 5 |
| 26 | Hosting choices | 5 |
| 27 | VNet, subnets, peering, DNS, VPN and ExpressRoute | 6 |
| 28 | Public vs private endpoints | 6 |
| 29 | Blob, Files, Queue, Table and disks | 7 |
| 30 | Access tiers | 7 |
| 31 | Replication and redundancy | 7 |
| 32 | Storage account types and supported data | 7 |
| 33 | AzCopy, Explorer, File Sync | 7 |
| 34 | Migrate and Data Box | 7 |
| 35 | Entra ID and Domain Services | 8 |
| 36 | SSO, MFA and passwordless | 8 |
| 37 | External identities | 8 |
| 38 | Conditional Access | 8 |
| 39 | RBAC | 8 |
| 40 | Zero Trust | 8 |
| 41 | Layered security | 8 |
| 42 | Defender for Cloud | 8 |
| 43 | Cost drivers | 9 |
| 44 | Pricing calculator | 9 |
| 45 | Cost Management | 9 |
| 46 | Tags | 9 |
| 47 | Purview | 10 |
| 48 | Policy | 10 |
| 49 | Locks | 10 |
| 50 | Portal | 11 |
| 51 | Cloud Shell, CLI and PowerShell | 11 |
| 52 | Arc | 11 |
| 53 | IaC | 11 |
| 54 | ARM and ARM templates | 11 |
| 55 | Advisor | 12 |
| 56 | Service Health | 12 |
| 57 | Monitor, Log Analytics, alerts and Application Insights | 12 |

### Primary Microsoft Learn study resources

- [Official AZ-900 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900) — current English scope and exam updates.
- [Cloud concepts learning path](https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/)
- [Architecture and services learning path](https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/)
- [Management and governance learning path](https://learn.microsoft.com/en-us/training/paths/describe-azure-management-governance/)

### Technical references checked during this review

- Ch. 1–3: [Shared responsibility](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility), [Functions hosting and billing](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale).
- Ch. 5: [VMSS orchestration](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-orchestration-modes), [VM billing states](https://learn.microsoft.com/en-us/azure/virtual-machines/states-billing).
- Ch. 6: [Private endpoints](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview), [VPN Gateway FAQ](https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-vpn-faq).
- Ch. 7: [Storage accounts](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview), [Redundancy](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy), [Blob tiers](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview).
- Ch. 8: [Defender for Identity](https://learn.microsoft.com/en-us/defender-for-identity/what-is).
- Ch. 9: [Bandwidth pricing](https://azure.microsoft.com/en-us/pricing/details/bandwidth/), [Windows Server Hybrid Benefit](https://learn.microsoft.com/en-us/windows-server/get-started/azure-hybrid-benefit), [Budgets](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets).
- Ch. 10: [Resource locks](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources).
- Ch. 11: [Blueprints retirement](https://learn.microsoft.com/en-us/azure/governance/blueprints/blueprint-retirement).
- Ch. 12: [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview), [Service Health](https://learn.microsoft.com/en-us/azure/service-health/overview).

**Additional references for retained V4 clarifications:** [App Service minimum TLS](https://learn.microsoft.com/en-us/azure/app-service/tls-minimum-version), [File Sync deployment](https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-deployment-guide).

**Assessment advice:** Use the official Practice Assessment (Microsoft currently recommends the newer AI Skills Navigator experience, linked in the study guide) alongside this brochure and the local quiz. The quiz retains its original question 61 at the learner's request; for technical study, use Defender for Identity for on-premises AD identity threats. The local quiz score is not Microsoft's scaled exam score.

**Review limitations:** All objective bullets were mapped to the brochure, and selected product claims were checked using current Microsoft documentation. Not every sentence, SKU, region-specific capability, or licensing detail was independently revalidated. The original V4 brochure and quiz files are unchanged.


## November 27, 2026 — Additional Practice update

This targeted supplement follows the existing twelve chapters and adds details relevant to Q201–238. The official objectives remain the July 20, 2026 version. The older coverage matrix remains a record of the November 24 review; this update is not a new sentence-by-sentence audit of the entire brochure. Optional topics are supporting knowledge, not guaranteed exam objectives.

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
