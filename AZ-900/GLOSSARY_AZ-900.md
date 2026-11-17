# AZ-900 — Essential Exam Glossary (2026)

**Purpose:** A focused English-language glossary accompanying `AZ900_Brochure_Verification_Ultime_2026.md`. The 12 sections follow the brochure. Terms are prioritized by the official Microsoft AZ-900 skills measured as of July 20, 2026.

**Selection rule:** Keep named services, examinable concepts, and distinctions that help choose the right Azure solution. Exclude generic dictionary words, repetitive variants, and deep implementation details. Microsoft can assess related concepts even if they are not named individually in the blueprint.

## 1. Cloud computing

| Exam term | What to remember |
| --- | --- |
| Cloud computing | On-demand delivery of computing services over a network, typically with usage-related pricing. |
| Public cloud | Cloud infrastructure operated by a provider for multiple customers. Customer data is not automatically public. Useful for rapid provisioning without purchasing physical servers. |
| Private cloud | Cloud infrastructure dedicated to one organization, hosted on-premises or by a provider. Useful when dedicated infrastructure and control are required. |
| Hybrid cloud | An integrated combination of public-cloud and private-cloud or on-premises resources. Useful for keeping some workloads locally while extending into Azure. |
| Shared responsibility model | Division of security and operational duties between provider and customer. Responsibilities vary by service model; customers remain responsible for their data, identities, and access configuration. |
| Consumption-based model | Charges depend on consumed or provisioned resources instead of purchasing all infrastructure upfront. |
| Pay-as-you-go | Usage-based pricing without a long-term reservation commitment. Idle provisioned resources may still incur charges. |
| Capital expenditure - CapEx | Upfront investment, such as purchasing physical servers. |
| Operational expenditure - OpEx | Ongoing operating expense, such as a monthly cloud bill. |
| Economies of scale | Large cloud providers spread infrastructure and operating costs across many customers; this can reduce per-unit costs. |

## 2. Benefits of cloud services

| Exam term | What to remember |
| --- | --- |
| High availability - HA | Designing a service to remain available despite certain failures. Requires suitable architecture, not just deployment to Azure. |
| Scalability | Ability to adjust resources as demand changes. |
| Vertical scaling / scale up / scale down | Increasing or decreasing the capacity of an instance, such as CPU or memory. |
| Horizontal scaling / scale out / scale in | Adding or removing instances. |
| Elasticity | Dynamically matching capacity to changing demand, including reducing capacity when demand falls. |
| Reliability | Ability to operate as intended and recover from failures. |
| Fault tolerance | Ability to continue operating when components fail. |
| Disaster recovery - DR | Processes and architecture for recovering after a major disruption. More than simply keeping a backup. |
| Recovery Point Objective - RPO | Maximum acceptable data loss expressed as a time interval. |
| Recovery Time Objective - RTO | Target maximum time to restore service after an interruption. |
| Predictability | Ability to anticipate performance and spending through measurement, capacity choices, and management tools. |
| Manageability | Managing resources and their operation through tools, automation, configuration, and monitoring. |
| Cloud security | Provider capabilities and customer controls that protect workloads. Moving to the cloud does not remove customer security responsibilities. |

## 3. Cloud service types

| Exam term | What to remember |
| --- | --- |
| Infrastructure as a Service - IaaS | Provider manages physical infrastructure; customer manages the guest OS, applications, and configurations. Azure VMs are an example. Useful when OS-level control is required. |
| Platform as a Service - PaaS | Provider also manages the application platform and underlying OS. Customer manages application code, data, and relevant configuration. Azure App Service is an example. |
| Software as a Service - SaaS | Ready-to-use application operated by a provider. Customer still manages users, data, and settings. Microsoft 365 is an example. |
| Serverless | Provider manages servers and much of execution capacity. Servers still exist; scaling and billing depend on the service and hosting plan. |
| IaaS vs PaaS vs SaaS | IaaS gives guest OS control; PaaS manages the platform; SaaS provides a ready-to-use application. |

## 4. Core architecture

| Exam term | What to remember |
| --- | --- |
| Datacenter | Physical facility containing servers, networking, power, and cooling. |
| Azure region | Geographic area containing one or more datacenters connected through a low-latency network. |
| Region pair | Association between certain Azure regions. Not every region is paired, and pairing does not automatically replicate all resources. |
| Availability Zone - AZ | Physically separate group of one or more datacenters within a region, with independent power, cooling, and networking. |
| Sovereign region | Region or cloud environment isolated to meet specific sovereignty or regulatory requirements, such as certain government environments. |
| Geography | Geographic boundary grouping Azure regions, relevant to data-residency considerations. |
| Azure resource | Manageable item such as a VM, virtual network, or storage account. |
| Resource group - RG | Logical container for resources, often sharing a lifecycle. A resource belongs to one resource group at a time; resource groups cannot be nested. |
| Resource group location | Region holding the group's metadata. Resources in the group can be in different regions. |
| Subscription | Management, billing, and service-limit boundary containing resource groups. Access is still governed by permissions. |
| Management group | Scope for organizing subscriptions and applying inherited policies and access assignments. |
| Resource hierarchy | Management groups -> subscriptions -> resource groups -> resources. |
| Azure Resource Manager - ARM | Azure's management layer for creating, updating, and deleting resources. Not a reference to a processor architecture here. |
| Azure resource move | Some resources can move between resource groups or subscriptions, subject to service-specific limitations and validation. |

## 5. Compute

| Exam term | What to remember |
| --- | --- |
| Azure Virtual Machines - VMs | IaaS machines where the customer manages the guest OS and installed software. |
| VM size | VM CPU, memory, and related capacity choices; affects performance and cost. |
| VM supporting resources | Typically includes disks, a network interface, a VNet and subnet, and suitable access controls. A public IP is not always required. |
| Virtual Machine Scale Sets - VMSS | Groups of VMs that support coordinated deployment, management, and scaling. |
| Availability set | VM grouping that separates instances across fault and update domains. Not a distribution across regions or availability zones. |
| Fault domain | Components sharing a potential failure source, such as a power supply or network switch. |
| Update domain | Group of VMs that may undergo planned maintenance together in an availability set. |
| Azure Virtual Desktop - AVD | Service for delivering Windows desktops and applications remotely. |
| Azure App Service / Web Apps | Managed platform for hosting web applications and APIs without directly administering the underlying server OS. |
| Container | Application execution unit packaging code and dependencies; containers generally share the host OS kernel. |
| Container image | Template used to create running containers. |
| Azure Container Instances - ACI | Runs containers without directly managing VMs or an orchestration cluster. |
| Azure Container Apps | Managed platform for containerized applications, including event-driven scaling scenarios. |
| Azure Kubernetes Service - AKS | Managed Kubernetes service for container orchestration. Customers retain workload and cluster-configuration responsibilities. |
| Azure Functions | Runs functions triggered by events; scaling, execution limits, and pricing depend on the hosting plan. |
| Availability zone vs availability set | Zone separates physical datacenter locations; set separates VMs by fault/update domains. |
| Azure Functions vs App Service | Functions focuses on event-triggered code; App Service hosts managed web applications and APIs. |

## 6. Networking

| Exam term | What to remember |
| --- | --- |
| Azure Virtual Network - VNet | Logical private network in Azure connecting resources and other networks. |
| Subnet | Subdivision of a VNet's address space. |
| Public endpoint | Service access point using a public address; access restrictions may still apply. |
| Private endpoint / Azure Private Link | Private endpoint creates a network interface with a private VNet IP to reach a supported service through Private Link. |
| Service endpoint | Extends a subnet's identity to supported Azure services; does not assign the service a private IP in the VNet. |
| VNet peering | Connects VNets using Microsoft's network. Peering is not transitive by default. |
| Azure VPN Gateway | Azure gateway for VPN connections to on-premises networks or individual clients. |
| Azure ExpressRoute | Private connectivity to Microsoft through a connectivity provider, bypassing the public internet. Encryption is not implicit. |
| VNet peering vs VPN | Peering connects Azure VNets through the Microsoft network without a VPN gateway; VPN connections use gateway-based encrypted tunnels. |
| Azure DNS | Hosts DNS zones. DNS hosting is not the same as registering or buying a domain name. |
| Network Security Group - NSG | Rules allowing or denying inbound and outbound traffic at subnet or NIC scope. |
| Private endpoint vs service endpoint | Private endpoint assigns a private VNet IP for supported service access; service endpoint extends subnet identity without creating a service private IP. |
| VNet peering transitivity | VNet peering does not automatically provide transitive connectivity between multiple VNets. |

## 7. Storage

| Exam term | What to remember |
| --- | --- |
| Storage account | Azure resource providing a namespace and configuration for storage services, including region, redundancy, performance, and security options. |
| Storage account name | Globally unique Azure namespace; 3-24 characters using lowercase letters and numbers. |
| Azure Blob Storage | Object storage for documents, images, videos, backups, and other unstructured data. |
| Azure Files | Managed file shares using protocols such as SMB or NFS, depending on share type. |
| Azure Queue Storage | Message storage for decoupling application components. |
| Azure Table Storage | NoSQL storage for structured, nonrelational entities with keys and properties. |
| Azure Managed Disks | Managed block-storage volumes used by Azure VMs. |
| Hot tier | Online Blob access tier for frequently accessed data. |
| Cool tier | Online tier for less frequently accessed data, generally trading lower storage cost for higher access cost than Hot. |
| Cold tier | Online tier for rarely accessed data, with different cost trade-offs from Cool; availability depends on configuration. |
| Archive tier | Offline tier for long-term retention; requires rehydration before normal reading. Not appropriate for immediate retrieval. |
| Rehydration | Moving archived data into an online tier so it can be read; takes time and may incur costs. |
| Locally redundant storage - LRS | Three synchronous copies in one datacenter in the primary region. |
| Zone-redundant storage - ZRS | Synchronous copies across three availability zones in the primary region. |
| Geo-redundant storage - GRS | Local redundancy in the primary region and asynchronous replication to a locally redundant secondary region. |
| Geo-zone-redundant storage - GZRS | Zone redundancy in the primary region plus asynchronous replication to a secondary region. |
| Read-access GRS / GZRS - RA-GRS / RA-GZRS | Adds read access to the secondary region; its data can lag behind the primary. |
| AzCopy | Command-line utility for copying data to, from, or between supported Azure storage resources. |
| Azure Storage Explorer | Graphical application for browsing and managing storage resources. |
| Azure File Sync | Synchronizes Azure Files shares with Windows servers for hybrid file-storage scenarios. |
| Azure Migrate | Tools for discovering, assessing, and migrating workloads to Azure. |
| Azure Data Box | Physical-device-based offline transfer for large data volumes. |

## 8. Identity, access, and security

| Exam term | What to remember |
| --- | --- |
| Microsoft Entra ID | Cloud identity and access management service, formerly Azure Active Directory / Azure AD. |
| Microsoft Entra Domain Services | Managed domain services supporting capabilities such as domain join, LDAP, Kerberos, and NTLM. |
| Authentication - AuthN | Verifying identity: "Who are you?" |
| Authorization - AuthZ | Determining allowed actions: "What can you do?" |
| Single sign-on - SSO | Access to multiple integrated applications after signing in, subject to access policies. |
| Multifactor authentication - MFA | Uses multiple factor categories: something known, possessed, or inherent to the user. Two passwords are not two categories. |
| Passwordless authentication | Authentication without a password, such as a security key or Windows Hello for Business. |
| Conditional Access | Policies evaluating signals such as user, device, and location to impose access requirements. Features may require appropriate licenses. |
| External identities | Access management for people outside the organization, including partners, suppliers, and customers. Collaboration and customer sign-in scenarios depend on the Microsoft Entra External ID offering and configuration. |
| Business-to-business - B2B collaboration | Collaboration model allowing external users to access an organization's resources, commonly as guests. |
| B2B direct connect | Cross-organization access model supporting Teams shared channels with configured cross-tenant trust; unlike normal B2B guest collaboration, it does not create the typical guest object in the resource tenant. |
| Customer identities / External ID for customers | Authentication and self-service sign-up for customers of external-facing apps; different from inviting business guests. |
| Azure role-based access control - Azure RBAC | Authorization to Azure resources through role assignments at a defined scope. |
| Conditional Access vs Azure RBAC | Conditional Access determines conditions for sign-in (for example MFA); Azure RBAC determines permitted Azure resource operations. |
| Owner | Azure role with broad resource-management rights and permission to assign Azure roles. |
| Contributor | Can manage resources but cannot assign Azure RBAC roles. |
| Reader | Can view resources without changing them; does not automatically grant access to all data stored inside them. |
| Zero Trust | Verify explicitly, use least privilege, and assume breach. Internal network location is not automatic proof of trust. |
| Defense in depth | Layered protection across physical security, identity, perimeter, network, compute, applications, and data. |
| Microsoft Defender for Cloud | Cloud security posture management and workload protection. Some protection plans are paid. |
| Microsoft Entra B2B direct connect | Cross-tenant collaboration for supported Teams shared channels, without a normal guest object in the resource tenant. |
| B2B collaboration guest | External partner normally uses an existing identity and is represented as a guest in the host directory; permissions must be granted. |
| Microsoft Entra External ID customer identities | Customer sign-up and sign-in for external-facing applications; distinct from B2B guest collaboration. |

## 9. Cost management

| Exam term | What to remember |
| --- | --- |
| Pricing calculator | Estimates the cost of a planned Azure configuration. Not a guaranteed invoice. |
| Microsoft Cost Management | Tools for analyzing, allocating, monitoring, and optimizing spending; capabilities depend on account type and permissions. |
| Cost analysis | Examination of costs by time period, service, subscription, resource group, and other available dimensions. |
| Cost factors | Service, region, tier, capacity, consumption, licensing, and data transfers can affect cost. |
| Reservation / reserved capacity | Commitment covering eligible usage or capacity over a term, potentially reducing cost relative to pay-as-you-go. |
| Azure savings plan for compute | Hourly spending commitment over a term for eligible compute usage; different from a targeted reservation. |
| Azure Spot Virtual Machines | Discounted spare capacity that Azure can evict. Appropriate for interruption-tolerant workloads, not guaranteed availability. |
| Reservation vs savings plan | Reservations apply to eligible specified resource usage; savings plans apply a monetary hourly commitment across eligible compute usage. |
| Azure Hybrid Benefit | Licensing benefit for reusing eligible licenses under applicable conditions. |

## 10. Governance and compliance

| Exam term | What to remember |
| --- | --- |
| Azure Policy | Evaluates and enforces resource rules, such as allowed deployment regions or required configurations. |
| Policy definition | Condition and effect describing a governance rule. |
| Policy assignment | Application of a policy at a scope, with parameters and possible exemptions. |
| Initiative | Group of policy definitions supporting a common objective. |
| Resource lock | Protects certain control-plane operations against accidental changes or deletion. Not a substitute for RBAC or backup. |
| CanNotDelete lock | Generally allows reading and modification but blocks deletion within its scope. |
| ReadOnly lock | Generally allows reads and blocks control-plane changes; can also affect some seemingly read-oriented operations using modification APIs. |
| Tag | Key-value metadata such as `Environment=Study` for organization and cost allocation. Tags are not automatically inherited without an additional mechanism. |
| Azure Policy vs Azure RBAC | Policy evaluates or enforces resource compliance; RBAC controls who can perform permitted actions. |
| Microsoft Purview | Solutions for data discovery, governance, protection, and compliance; capabilities depend on the specific solution. |
| Service Trust Portal | Microsoft portal for trust information and compliance reports; some documents require authentication or acceptance of terms. |

## 11. Managing and deploying resources

| Exam term | What to remember |
| --- | --- |
| Azure portal | Browser-based graphical interface for managing Azure. |
| Azure Cloud Shell | Browser-accessible command environment with Bash or PowerShell and Azure tools. Resources created through it can incur charges. |
| Azure CLI | Cross-platform command-line tool using commands such as `az`. |
| Azure PowerShell | PowerShell modules for Azure management, including the `Az` modules. |
| Infrastructure as Code - IaC | Infrastructure defined in versionable files for repeatable, reviewable deployments. |
| ARM template | Declarative JSON resource definition deployed through Azure Resource Manager. |
| Bicep | Declarative language for Azure infrastructure that compiles into ARM templates. |
| Azure Arc | Extends supported Azure management capabilities to resources outside Azure, including on-premises and other clouds. |
| ARM vs Bicep | ARM is the Azure resource management control plane; Bicep is a declarative language compiled to ARM templates. |
| Azure Resource Manager control plane | ARM manages resource deployment/configuration; service data-plane requests are distinct. |
| ARM templates vs Bicep | ARM templates are declarative JSON; Bicep is a concise declarative language compiled to ARM templates. |
| Azure Cloud Shell setup | Authenticated browser shell with Bash or PowerShell; initial setup may depend on configuration. |

## 12. Monitoring

| Exam term | What to remember |
| --- | --- |
| Azure Monitor | Platform for collecting, analyzing, and acting on application and infrastructure telemetry. |
| Metrics | Timestamped numerical measurements, such as CPU utilization. |
| Logs | Event or observation records supporting detailed analysis. |
| Log Analytics | Tool for querying and analyzing logs in Azure Monitor. |
| Log Analytics workspace | Scope for collecting and managing logs, including access and retention settings. |
| Application Insights | Application observability capabilities within Azure Monitor, including requests, dependencies, failures, and performance. |
| Alert rule | Condition triggering an alert from metrics, logs, or activity. |
| Azure Service Health | Personalized information about Azure service incidents, planned maintenance, and advisories affecting your environment. |
| Azure Resource Health | Availability and health information about a particular resource. |
| Azure Advisor | Recommendations across reliability, security, performance, operational excellence, and cost. Does not automatically implement every recommendation. |
| Metrics vs logs | Metrics are numeric time-series measurements; logs capture detailed events and observations for investigation. |

## Important distinctions

| Term | Exam meaning |
| --- | --- |
| Customer identities (External ID) | Customer sign-up and sign-in for external-facing apps; distinct from inviting business partners as guests. |
| Azure Monitor alerts | Notifications or actions triggered by metric, log, or other monitored conditions. |
| Azure Resource Manager (ARM) | Azure management control plane used to deploy, update, and organize resources. |

**Cost Management note:** Azure budgets are a feature of Microsoft Cost Management, but **Budget** is not an individually named skill in the AZ-900 blueprint. Understand that Cost Management helps analyze and control spending; do not spend time memorizing budget configuration steps.

**Priority note:** Terms such as Azure IoT Hub, Azure OpenAI, Terraform, advanced networking protocols, and generic words like “forecast” are intentionally excluded from this core glossary because they are not explicit current exam objectives. They can be studied as optional context from the brochure.

**Official scope:** [Microsoft AZ-900 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900).
