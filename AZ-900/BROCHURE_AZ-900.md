# AZ-900 Knowledge Brochure - Azure Fundamentals

**Official verification (November 4, 2026):** The live Microsoft AZ-900 study guide was retrieved and compared with this material. The applicable skills-measured date is **July 20, 2026**, with weights **25–30% cloud concepts**, **35–40% Azure architecture and services**, and **30–35% Azure management and governance**. The official guide lists 11 objective groups. Source: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900. The TCO Calculator is **retired**: https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/3-compare-pricing-total-cost-of-ownership-calculators. This is an independently written study aid, not an official Microsoft publication.


A compact reference to read, learn, and remember. Each chapter gives the key
facts, a short "Remember" box, and the most common exam traps.

> **Source note:** Verified against the live official AZ-900 study guide on November 4, 2026. These explanations and questions are independent study material, not official exam items.

> **Interactive practice:** [AZ-900_PRACTICE_QUIZ.html](AZ-900_PRACTICE_QUIZ.html)
> is an exam-style quiz (practice and exam modes). Download the file and open
> it in a web browser; GitHub only shows its source code.

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

---

## Exam at a glance

| Domain | Reported weight |
| --- | --- |
| Describe cloud concepts | 25-30% |
| Describe Azure architecture and services | 35-40% |
| Describe Azure management and governance | 30-35% |

The exam tests **recognition and choice**: which service, which model, which
tool fits a scenario. It does not test deep configuration.

---

## Part A - Cloud concepts

### 1. Cloud computing

**Cloud computing** is the delivery of computing services (servers, storage,
databases, networking, software, analytics) over the internet, paid for as you
use them.

#### Shared responsibility model

Security and management duties are split between the cloud provider and the
customer. The split depends on the service type.

| Always the provider | Always the customer | Shared or depends on model |
| --- | --- | --- |
| Physical datacenter, physical network, physical hosts | Information and data, devices, accounts and identities | Operating system, network controls, applications, identity infrastructure |

> **Remember:** The customer is **always** responsible for their data,
> devices, and accounts. The more managed the service (IaaS -> PaaS -> SaaS),
> the less the customer manages.

#### Cloud models

| Model | What it is | Key point |
| --- | --- | --- |
| Public cloud | Provider-owned resources shared by many customers over the internet | No capital expense, fast scale, pay-as-you-go |
| Private cloud | Cloud resources used by one organization only (on-premises or hosted) | Maximum control, but the organization buys and maintains hardware |
| Hybrid cloud | Public + private cloud connected together | Keep sensitive or legacy workloads private, use public cloud for the rest |
| Multi-cloud | Using several public cloud providers | Avoid lock-in or use the best service from each provider |

- **Azure Arc** extends Azure management to servers, Kubernetes, and data
  services that run **outside Azure** (on-premises or other clouds).
- **Azure VMware Solution** runs VMware workloads natively in Azure.

#### Consumption-based model

| Expense type | Meaning | Example |
| --- | --- | --- |
| CapEx (capital expenditure) | Up-front spending on physical infrastructure | Buying servers and building a datacenter |
| OpEx (operational expenditure) | Spending on services as they are consumed | Paying monthly for cloud VMs |

> **Remember:** Cloud often shifts infrastructure spending toward **OpEx** and usage-based billing. You generally pay
> for billable usage or provisioned resources. **Stopping an application or guest OS does not necessarily stop charges**; disks, reserved capacity, and allocated compute can still cost money.

**Exam traps**

- "Private cloud" does not mean "in your own building only"; it can be hosted
  by a third party but is dedicated to one organization.
- Moving to the cloud does **not** transfer responsibility for your data.

> **Practice:** Open [the interactive practice quiz](AZ-900_PRACTICE_QUIZ.html).

### 2. Benefits of cloud services

| Benefit | Meaning in one line |
| --- | --- |
| High availability | The service stays up and accessible, measured by an SLA (for example 99.9%) |
| Scalability | Ability to add or remove resources to handle load |
| Vertical scaling (scale up/down) | Make a resource bigger or smaller (more CPU or RAM) |
| Horizontal scaling (scale out/in) | Add or remove instances (more VMs) |
| Elasticity | Scaling happens dynamically in response to demand (often using autoscaling) |
| Reliability | Ability to recover from failures and keep working |
| Predictability (performance) | Consistent performance through autoscaling and load balancing |
| Predictability (cost) | Forecast spending with tools such as the Pricing calculator and Cost Management |
| Security | Control over patches, configuration, and built-in security tools |
| Governance | Enforce standards and compliance with templates and policies |
| Manageability **of** the cloud | Autoscaling, monitoring, automatic replacement of failed resources |
| Manageability **in** the cloud | Ways to manage: portal, CLI, PowerShell, APIs, templates |

> **Remember:** **Scalability** = can grow. **Elasticity** = grows and shrinks
> by itself. **Availability** = stays up. **Reliability** = recovers from
> failure.

**SLA quick facts**

- An SLA is Microsoft's formal commitment for uptime and connectivity.
- 99.9% allows about 43 minutes of downtime per month; 99.99% about 4 minutes.
- Combining services multiplies their SLAs, so the **composite SLA is lower**
  than each individual SLA.

> **Practice:** Open [the interactive practice quiz](AZ-900_PRACTICE_QUIZ.html).

### 3. Cloud service types

| Type | You manage | Provider manages | Azure examples | Typical use |
| --- | --- | --- | --- | --- |
| IaaS | OS, runtime, apps, data | Hardware, network, virtualization | Virtual Machines | Lift-and-shift migration, full control |
| PaaS | Apps and data | Everything up to and including OS and runtime | App Service, Azure SQL Database, Azure Functions | Develop apps without managing servers |
| SaaS | Data, users, configuration | Almost everything | Microsoft 365, Outlook, Dynamics 365 | Ready-to-use software |

> **Remember (pizza analogy):** IaaS = buy ingredients and cook at home.
> PaaS = takeaway pizza, you set the table. SaaS = eat at the restaurant.

**Serverless** means you do not manage servers and usually pay only when code
runs. Azure Functions and Logic Apps are serverless; serverless is often treated
as a form of PaaS.

**Exam traps**

- A VM is **always IaaS**, even if it runs a database.
- Azure SQL Database is **PaaS**; SQL Server installed on a VM is **IaaS**.
- In SaaS the customer still owns **data and accounts**.

> **Practice:** Open [the interactive practice quiz](AZ-900_PRACTICE_QUIZ.html).

---

## Part B - Azure architecture and services

### 4. Core architecture

#### Physical infrastructure

| Term | Definition |
| --- | --- |
| Datacenter | Physical building with servers, power, cooling, and networking |
| Region | Geographic area with one or more datacenters linked by a low-latency network |
| Availability zone | Physically separate datacenter(s) inside a region with independent power, cooling, and networking |
| Region pair | Association of certain Azure regions for platform resiliency considerations; pairing does not itself replicate customer workloads |
| Sovereign region | Isolated Azure instance for legal or compliance needs (Azure Government, Azure China by 21Vianet) |

- A region that supports zones has **at least three** availability zones.
- **Zonal services** are pinned to one zone (for example a VM).
- **Zone-redundant services** are replicated automatically across zones (for
  example ZRS storage).
- Platform update sequencing and recovery priorities can depend on service and region. **Not all regions are paired**, and a region pair is not an automatic disaster-recovery solution.

> **Remember:** Zone = protects against a **datacenter** failure.
> **Cross-region disaster recovery requires configured replication/failover.** A region pair alone does not protect your workload.

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
- A resource can be moved between resource groups.
- Settings applied at a higher level are **inherited** by lower levels.

> **Remember (top to bottom):** "**M**y **S**ubscription **R**uns **R**esources":
> Management group, Subscription, Resource group, Resource.

> **Practice:** Open [the interactive practice quiz](AZ-900_PRACTICE_QUIZ.html).

### 5. Compute

| Service | Model | Use it when |
| --- | --- | --- |
| Virtual Machines | IaaS | You need full OS control or lift-and-shift |
| Virtual Machine Scale Sets | IaaS | You need many identical, load-balanced VMs that scale automatically |
| Availability sets | IaaS feature | Spread VMs across **fault domains** (power/network rack) and **update domains** (maintenance) |
| Azure Virtual Desktop | Desktop virtualization | Users need Windows desktops and apps from anywhere |
| Azure Container Instances | Containers (PaaS) | Run a container quickly without managing servers |
| Azure Container Apps | Containers (PaaS) | Serverless containers with scaling, microservices |
| Azure Kubernetes Service (AKS) | Container orchestration | Manage many containers at scale |
| Azure Functions | Serverless | Event-driven code that runs only when triggered |
| Azure App Service | PaaS | Host web apps, REST APIs, and mobile back ends |

**VMs vs containers**

| Virtual machine | Container |
| --- | --- |
| Virtualizes the **hardware**, includes a full OS | Virtualizes the **OS**, shares the host kernel |
| Larger, slower to start | Lightweight, starts in seconds |
| Strong isolation, full control | Portable, ideal for microservices |

> **Remember:** "Event triggers code" = **Functions**. "Web app without
> servers to manage" = **App Service**. "Remote desktop for staff" =
> **Azure Virtual Desktop**. "Many containers" = **AKS**.

> **Practice:** Open [the interactive practice quiz](AZ-900_PRACTICE_QUIZ.html).

### 6. Networking

| Service or feature | What it does |
| --- | --- |
| Virtual network (VNet) | Private network in Azure; isolation and segmentation into **subnets** |
| Subnet | Range of IP addresses inside a VNet |
| VNet peering | Connects two VNets privately over the Microsoft backbone (same or different regions) |
| Network security group (NSG) | Allow/deny rules for inbound and outbound traffic on subnets or NICs |
| Public endpoint | Reachable from the internet through a public IP address |
| Private endpoint | Gives an Azure service a **private IP** inside your VNet (Private Link) |
| VPN Gateway | **Encrypted** tunnel over the **public internet** (site-to-site, point-to-site, VNet-to-VNet) |
| ExpressRoute | **Private** dedicated connection that does **not** go over the public internet |
| Azure DNS | Hosts DNS domains in Azure (public or private zones) |

**VPN Gateway vs ExpressRoute**

| VPN Gateway | ExpressRoute |
| --- | --- |
| Uses the public internet, encrypted | Private connection through a connectivity provider |
| Quick and cheaper to set up | Higher reliability, speed, and lower latency |
| Site-to-site, point-to-site, VNet-to-VNet | Enterprise, predictable, large workloads |

> **Remember:** "Not over the internet" = **ExpressRoute**.
> "Encrypted over the internet" = **VPN Gateway**.
> "Private IP for a PaaS service" = **Private endpoint**.

> **Practice:** Open [the interactive practice quiz](AZ-900_PRACTICE_QUIZ.html).

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

#### Blob access tiers

| Tier | Access pattern | Minimum storage period |
| --- | --- | --- |
| Hot | Frequently accessed | None |
| Cool | Infrequent, stored at least 30 days | 30 days |
| Cold | Rarely accessed, stored at least 90 days | 90 days |
| Archive | Almost never accessed, **offline**, retrieval takes hours | 180 days |

> **Remember:** Hot -> Cool -> Cold -> Archive: storage gets **cheaper**,
> access gets **more expensive and slower**. Archive must be **rehydrated**
> before reading.

#### Redundancy options

| Option | Copies and location | Protects against |
| --- | --- | --- |
| LRS | 3 copies in **one datacenter** | Disk or rack failure |
| ZRS | 3 copies across **3 availability zones** in one region | Datacenter failure |
| GRS | LRS in primary + LRS in a **secondary region** | Region failure |
| GZRS | ZRS in primary + LRS in secondary region | Datacenter **and** region failure |
| RA-GRS / RA-GZRS | Same as GRS / GZRS with **read access** to the secondary | Region failure, with readable secondary |

> **Remember:** **L**ocal, **Z**one, **G**eo, **G**eo+**Z**one. "RA" = you can
> **read** the secondary copy at any time.

#### Data migration and file movement

| Tool | Use |
| --- | --- |
| Azure Migrate | Hub to discover, assess, and migrate on-premises servers, databases, and apps |
| Azure Data Box | Physical device shipped to move **very large** data offline (up to about 80 TB per device) |
| AzCopy | Command-line tool to copy files to/from storage accounts |
| Azure Storage Explorer | Graphical app to manage storage accounts |
| Azure File Sync | Syncs Azure Files with Windows file servers (on-premises cache) |

**Exam traps**

- Slow or limited internet + huge data = **Data Box**.
- Archive is the cheapest to store but **cannot be read immediately**.

> **Practice:** Open [the interactive practice quiz](AZ-900_PRACTICE_QUIZ.html).

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
| External identities (B2B / B2C) | Let partners (B2B) or customers (B2C) sign in with their own identities |
| Conditional Access | If-then policies based on signals (user, location, device, risk) to allow, block, or require MFA |
| Azure RBAC | Grants permissions by **role** at a **scope** (management group, subscription, resource group, resource) |
| Zero Trust | "Never trust, always verify": verify explicitly, least privilege, assume breach |
| Defense in depth | Multiple layers of protection so one failure does not expose data |
| Microsoft Defender for Cloud | Security posture management and threat protection for Azure, hybrid, and multi-cloud |

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

> **Practice:** Open [the interactive practice quiz](AZ-900_PRACTICE_QUIZ.html).

---

## Part C - Management and governance

### 9. Cost management

**Factors that affect cost**

- Resource type and size (SKU), consumption, and region
- Bandwidth: **inbound** data transfer is usually free; **outbound** is charged
- Purchase model: pay-as-you-go, reservations, savings plans, spot VMs
- Licensing: **Azure Hybrid Benefit** reuses existing Windows Server and SQL
  Server licenses
- Marketplace and third-party services

**Ways to save**

| Option | How it saves |
| --- | --- |
| Azure Reservations | Commit to 1 or 3 years for a resource, large discount |
| Azure savings plan for compute | Commit to an hourly spend for 1 or 3 years across compute services |
| Spot VMs | Use spare capacity cheaply; can be evicted at any time |
| Azure Hybrid Benefit | Reuse on-premises licenses |
| Autoscaling / shutting down | Pay only when resources are needed |

**Cost tools**

| Tool | Purpose |
| --- | --- |
| Pricing calculator | Estimate the cost of Azure services **before** deploying |
| Microsoft Cost Management | Analyze, monitor, and control **actual** spending; create **budgets** and alerts |
| Tags | Labels (name/value) that group resources, for example by cost center or environment |
| TCO calculator (historical) | Compared on-premises vs Azure cost; the official Learn lesson states it **has been retired** |

> **Remember:** Pricing calculator = **before** (estimate).
> Cost Management = **after** (actual spend, budgets). Tags = **group and
> report costs**.

> **Practice:** Open [the interactive practice quiz](AZ-900_PRACTICE_QUIZ.html).

### 10. Governance and compliance

| Service | Purpose |
| --- | --- |
| Azure Policy | Create and enforce rules on resource properties (for example, allowed regions or required tags); can audit or deny |
| Policy initiative | Group of policies managed together |
| Resource locks | Prevent accidental change or deletion |
| Microsoft Purview | Data governance, risk, and compliance: discover, classify, and map data across environments |
| Service Trust Portal | Microsoft's compliance reports, audits, and security documents |

**Resource lock types**

| Lock | Read | Modify | Delete |
| --- | --- | --- | --- |
| CanNotDelete (Delete) | Yes | Yes | **No** |
| ReadOnly | Yes | **No** | **No** |

- Locks apply even to Owners; the lock must be **removed** first.
- Locks and policies are inherited from parent scopes.

> **Remember:** Policy = **rules** for resources. RBAC = **permissions** for
> people. Locks = **protection** from deletion or change.

> **Practice:** Open [the interactive practice quiz](AZ-900_PRACTICE_QUIZ.html).

### 11. Managing and deploying resources

| Tool | Description |
| --- | --- |
| Azure portal | Web-based graphical interface |
| Azure Cloud Shell | Browser-based shell (Bash or PowerShell), already authenticated |
| Azure CLI | Cross-platform command-line tool (`az ...` commands) |
| Azure PowerShell | PowerShell cmdlets (`New-AzVM` style) |
| Azure mobile app | Monitor and manage resources from a phone |
| Azure Arc | Manage non-Azure resources (on-premises, other clouds) as if they were in Azure |
| Azure Resource Manager (ARM) | The deployment and management **layer** behind every Azure request |
| Infrastructure as code (IaC) | Describe infrastructure in files instead of manual clicks |
| ARM templates | JSON files that declare resources to deploy |
| Bicep | Simpler language that compiles to ARM templates |

**ARM template benefits:** declarative, repeatable, orchestrated, modular,
and source-controlled.

> **Remember:** Every tool (portal, CLI, PowerShell, SDK) goes through
> **Azure Resource Manager**. IaC = **same result every time**.

> **Practice:** Open [the interactive practice quiz](AZ-900_PRACTICE_QUIZ.html).

### 12. Monitoring

| Service | Purpose |
| --- | --- |
| Azure Advisor | Personalized **recommendations**: reliability, security, performance, cost, operational excellence |
| Azure Service Health | Status of **Azure services** affecting you: outages, planned maintenance, health advisories |
| Azure Monitor | Collect, analyze, and act on metrics and logs from Azure and on-premises |
| Log Analytics | Write and run queries (KQL) on log data collected by Azure Monitor |
| Azure Monitor alerts | Notify or act when a condition is met |
| Application Insights | Monitor the performance and usage of **web applications** |

**Service Health components**

| Component | Scope |
| --- | --- |
| Azure status | Global view of all Azure services in all regions |
| Service Health | Services and regions **you** use |
| Resource Health | Health of **your individual** resources |

> **Remember:** Advisor = **advice**. Service Health = **is Azure itself OK?**
> Monitor = **my resources' metrics and logs**. Application Insights = **my
> app**.

> **Practice:** Open [the interactive practice quiz](AZ-900_PRACTICE_QUIZ.html).

---

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
| Move 100+ TB with slow internet | Azure Data Box |
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
| Azure Load Balancer | Distributes network traffic across VMs (layer 4) |
| Application Gateway | Web traffic load balancer with routing and WAF (layer 7) |
| Azure Front Door | Global entry point for web apps, acceleration and WAF |
| Cosmos DB | Globally distributed NoSQL database |
| Azure AI services / Machine Learning | Prebuilt AI APIs / build and train ML models |
| Azure IoT Hub | Connect and manage IoT devices |
| Terraform | Third-party infrastructure-as-code tool that also deploys Azure |
| Sustainability | Microsoft's efforts and tools to measure cloud carbon emissions |

For full definitions see the [glossary](GLOSSARY_AZ-900.md); for a tick-list of
all topics see the [checklist](CHECKLIST_AZ-900.md).
