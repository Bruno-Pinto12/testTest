# AZ-900 Study Glossary — Aligned with the Knowledge Brochure (2026)

**Reference document:** `AZ900_Brochure_Verification_Ultime_2026.md` (12 chapters). This glossary follows the brochure’s chapter order and definitions. It is a companion reference, not an independent replacement for the brochure.

**Exam scope:** Microsoft AZ-900 study guide, skills measured as of July 20, 2026. The 2024 Exam Cram video provides background; the brochure and current Microsoft documentation take precedence.

## Contents

1. [Cloud computing](#1-cloud-computing)
2. [Benefits of cloud services](#2-benefits-of-cloud-services)
3. [Cloud service types](#3-cloud-service-types)
4. [Core architecture](#4-core-architecture)
5. [Compute](#5-compute)
6. [Networking](#6-networking)
7. [Storage](#7-storage)
8. [Identity, access, and security](#8-identity-access-and-security)
9. [Cost management](#9-cost-management)
10. [Governance and compliance](#10-governance-and-compliance)
11. [Managing and deploying resources](#11-managing-and-deploying-resources)
12. [Monitoring](#12-monitoring)

The sections below contain **definitions**, not a second course. For detailed explanations, examples and exam traps, consult the corresponding brochure chapter.

## 1. Cloud computing

| Term | Definition and exam distinction |
| --- | --- |
| Cloud computing | On-demand delivery of computing services over a network, typically with usage-related pricing. |
| On-premises | Infrastructure operated in an organization's own facilities or an environment it manages. |
| Public cloud | Cloud infrastructure operated by a provider for multiple customers. Customer data is not automatically public. Useful for rapid provisioning without purchasing physical servers. |
| Private cloud | Cloud infrastructure dedicated to one organization, hosted on-premises or by a provider. Useful when dedicated infrastructure and control are required. |
| Hybrid cloud | An integrated combination of public-cloud and private-cloud or on-premises resources. Useful for keeping some workloads locally while extending into Azure. |
| Multicloud | Use of more than one cloud provider. Not the same as hybrid cloud. |
| Shared responsibility model | Division of security and operational duties between provider and customer. Responsibilities vary by service model; customers remain responsible for their data, identities, and access configuration. |
| Consumption-based model | Charges depend on consumed or provisioned resources instead of purchasing all infrastructure upfront. |
| Pay-as-you-go | Usage-based pricing without a long-term reservation commitment. Idle provisioned resources may still incur charges. |
| Capital expenditure - CapEx | Upfront investment, such as purchasing physical servers. |
| Operational expenditure - OpEx | Ongoing operating expense, such as a monthly cloud bill. |
| Economies of scale | Large cloud providers spread infrastructure and operating costs across many customers; this can reduce per-unit costs. |
| Geographic distribution | Ability to deploy resources in multiple regions to serve users closer to them and support resilience strategies. |
| Service availability vs SLA | Availability is actual service uptime; an SLA is a contractual commitment under defined terms, not a promise of zero downtime. |
| Area | On-premises | IaaS | PaaS | SaaS |
| Physical datacenter, hosts, and physical network | Customer | Provider | Provider | Provider |
| Guest operating system | Customer | Customer | Provider | Provider |
| Application operation and platform | Customer | Customer | Shared: customer code and configuration, provider platform | Provider application; customer usage and settings |
| Customer data, identities, and access choices | Customer | Customer | Customer | Customer |
| Pricing options vs deployment models | Pay-as-you-go, reservations, savings plans, and Spot are billing options; public, private, and hybrid are deployment models. |

## 2. Benefits of cloud services

| Term | Definition and exam distinction |
| --- | --- |
| High availability - HA | Designing a service to remain available despite certain failures. Requires suitable architecture, not just deployment to Azure. |
| Scalability | Ability to adjust resources as demand changes. |
| Vertical scaling / scale up / scale down | Increasing or decreasing the capacity of an instance, such as CPU or memory. |
| Horizontal scaling / scale out / scale in | Adding or removing instances. |
| Elasticity | Dynamically matching capacity to changing demand, including reducing capacity when demand falls. |
| Autoscaling | Automatic capacity adjustment based on rules, schedules, or signals. |
| Reliability | Ability to operate as intended and recover from failures. |
| Resiliency | Ability to withstand disruption and return to an acceptable operating state. |
| Fault tolerance | Ability to continue operating when components fail. |
| Disaster recovery - DR | Processes and architecture for recovering after a major disruption. More than simply keeping a backup. |
| Backup / restore | Creating recoverable copies and using them to recover data. Replication alone is not an independent backup. |
| Recovery Point Objective - RPO | Maximum acceptable data loss expressed as a time interval. |
| Recovery Time Objective - RTO | Target maximum time to restore service after an interruption. |
| Predictability | Ability to anticipate performance and spending through measurement, capacity choices, and management tools. |
| Agility | Ability to provision and adapt resources quickly. |
| Manageability | Managing resources and their operation through tools, automation, configuration, and monitoring. |
| Cloud security | Provider capabilities and customer controls that protect workloads. Moving to the cloud does not remove customer security responsibilities. |
| Sustainability | Reducing unnecessary resource consumption through efficient architecture and operation. Cloud use is not automatically sustainable. |
| Rightsizing | Matching resource capacity to actual requirements instead of overprovisioning. Helps cost efficiency and sustainability. |
| Resource utilization | How much provisioned capacity is actually used. Improve it through consolidation, scaling, and shutting down unused environments. |
| Service-level agreement (SLA) | Contractual availability commitment, not a promise of zero downtime. |
| Composite SLA | Estimated combined availability of dependent components; depends on architecture and assumptions. |

## 3. Cloud service types

| Term | Definition and exam distinction |
| --- | --- |
| Infrastructure as a Service - IaaS | Provider manages physical infrastructure; customer manages the guest OS, applications, and configurations. Azure VMs are an example. Useful when OS-level control is required. |
| Platform as a Service - PaaS | Provider also manages the application platform and underlying OS. Customer manages application code, data, and relevant configuration. Azure App Service is an example. |
| Software as a Service - SaaS | Ready-to-use application operated by a provider. Customer still manages users, data, and settings. Microsoft 365 is an example. |
| Serverless | Provider manages servers and much of execution capacity. Servers still exist; scaling and billing depend on the service and hosting plan. |
| IaaS vs PaaS vs SaaS | IaaS gives guest OS control; PaaS manages the platform; SaaS provides a ready-to-use application. |

## 4. Core architecture

| Term | Definition and exam distinction |
| --- | --- |
| Datacenter | Physical facility containing servers, networking, power, and cooling. |
| Azure region | Geographic area containing one or more datacenters connected through a low-latency network. |
| Region pair | Association between certain Azure regions. Not every region is paired, and pairing does not automatically replicate all resources. |
| Availability Zone - AZ | Physically separate group of one or more datacenters within a region, with independent power, cooling, and networking. |
| Zonal resource | Resource deployed into a particular availability zone. |
| Zone-redundant resource | Resource or service distributed across zones, subject to service capabilities and configuration. |
| Sovereign region | Region or cloud environment isolated to meet specific sovereignty or regulatory requirements, such as certain government environments. |
| Geography | Geographic boundary grouping Azure regions, relevant to data-residency considerations. |
| Data residency | Where data is stored or processed. Specific commitments depend on the service and configuration. |
| Azure resource | Manageable item such as a VM, virtual network, or storage account. |
| Resource group - RG | Logical container for resources, often sharing a lifecycle. A resource belongs to one resource group at a time; resource groups cannot be nested. |
| Resource group location | Region holding the group's metadata. Resources in the group can be in different regions. |
| Subscription | Management, billing, and service-limit boundary containing resource groups. Access is still governed by permissions. |
| Management group | Scope for organizing subscriptions and applying inherited policies and access assignments. |
| Resource hierarchy | Management groups -> subscriptions -> resource groups -> resources. |
| Microsoft Entra tenant / directory | Organization's instance of Microsoft Entra ID. One tenant can be associated with multiple Azure subscriptions. |
| Scope | Boundary at which permissions, policies, or other controls apply. |
| Inheritance | Application of certain parent-scope assignments or rules to child scopes. |
| Resource provider | Provider of an Azure resource type, such as `Microsoft.Compute`. |
| Azure Resource Manager - ARM | Azure's management layer for creating, updating, and deleting resources. Not a reference to a processor architecture here. |
| Control plane | Management operations such as creating a VM or updating its configuration, commonly via Azure Resource Manager. |
| Azure resource move | Some resources can move between resource groups or subscriptions, subject to service-specific limitations and validation. |
| Region selection | Choice affecting latency, data residency, service availability, resiliency design, and price. |
| Azure VMware Solution | Runs supported VMware workloads on Azure infrastructure. |
| Resource move limitation | Many resources can move between groups or subscriptions, but some resource types/configurations cannot. |
| Scope inheritance | Applicable RBAC and Policy assignments can inherit; tags and arbitrary settings do not automatically inherit. |

## 5. Compute

| Term | Definition and exam distinction |
| --- | --- |
| Compute | Resources that execute workloads, including VMs, containers, and functions. |
| Azure Virtual Machines - VMs | IaaS machines where the customer manages the guest OS and installed software. |
| VM size | VM CPU, memory, and related capacity choices; affects performance and cost. |
| Stock keeping unit - SKU | Product or service variant identifying a particular offering, size, or tier. In Azure, SKU choices can affect capacity, features, availability, and price. |
| VM image | Template containing an OS and possibly preinstalled software used to create VMs. |
| VM supporting resources | Typically includes disks, a network interface, a VNet and subnet, and suitable access controls. A public IP is not always required. |
| VM deployment prerequisites | Choose a subscription, resource group, region, image, VM size (vCPU/RAM), OS disk, and networking. Public IP is optional. |
| Zonal VM | A VM placed in a particular availability zone; use suitable multi-zone architecture for zone-failure resilience. |
| Operating system disk / data disk | Disk containing the guest OS / additional disk for application data. |
| Network interface - NIC | Connects a VM to a virtual network and holds IP configuration. |
| Virtual Machine Scale Sets - VMSS | Groups of VMs that support coordinated deployment, management, and scaling. |
| Availability set | VM grouping that separates instances across fault and update domains. Not a distribution across regions or availability zones. |
| Fault domain | Components sharing a potential failure source, such as a power supply or network switch. |
| Update domain | Group of VMs that may undergo planned maintenance together in an availability set. |
| Azure Virtual Desktop - AVD | Service for delivering Windows desktops and applications remotely. |
| Azure App Service / Web Apps | Managed platform for hosting web applications and APIs without directly administering the underlying server OS. |
| App Service plan | Defines compute resources and available capabilities for hosted applications. |
| Container | Application execution unit packaging code and dependencies; containers generally share the host OS kernel. |
| Container image | Template used to create running containers. |
| Azure Container Instances - ACI | Runs containers without directly managing VMs or an orchestration cluster. |
| Azure Container Apps | Managed platform for containerized applications, including event-driven scaling scenarios. |
| Azure Kubernetes Service - AKS | Managed Kubernetes service for container orchestration. Customers retain workload and cluster-configuration responsibilities. |
| Kubernetes / orchestration | Automated deployment, placement, scaling, and lifecycle management of containers. |
| Azure Functions | Runs functions triggered by events; scaling, execution limits, and pricing depend on the hosting plan. |
| Trigger | Event starting an execution, such as an HTTP request, message, or schedule. |
| Hosting option | Choice among VMs, containers, managed web hosting, and functions based on control, dependencies, and execution requirements. |
| Availability zone vs availability set | Zone separates physical datacenter locations; set separates VMs by fault/update domains. |
| Public IP (VM) | Optional VM resource; a VM can operate with private networking only. |
| Azure Functions vs App Service | Functions focuses on event-triggered code; App Service hosts managed web applications and APIs. |

## 6. Networking

| Term | Definition and exam distinction |
| --- | --- |
| Azure Virtual Network - VNet | Logical private network in Azure connecting resources and other networks. |
| Subnet | Subdivision of a VNet's address space. |
| Classless Inter-Domain Routing - CIDR | Notation for an IP address range, such as `10.0.0.0/16`. The prefix length indicates the network portion; detailed subnet calculation is not the focus here. |
| IP address | Network address identifying an interface or endpoint. |
| Private IP address | Address used within private networks, not directly routable on the public internet. |
| Public IP address | Publicly routable address. Its existence does not automatically authorize access. |
| Public endpoint | Service access point using a public address; access restrictions may still apply. |
| Private endpoint / Azure Private Link | Private endpoint creates a network interface with a private VNet IP to reach a supported service through Private Link. |
| Service endpoint | Extends a subnet's identity to supported Azure services; does not assign the service a private IP in the VNet. |
| VNet peering | Connects VNets using Microsoft's network. Peering is not transitive by default. |
| Virtual private network - VPN | Encrypted tunnel, generally over a public network. |
| Azure VPN Gateway | Azure gateway for VPN connections to on-premises networks or individual clients. |
| Site-to-site - S2S | VPN connection between networks, such as an office network and an Azure VNet. |
| Point-to-site - P2S | VPN connection from an individual client to an Azure network. |
| VNet-to-VNet VPN | VPN gateway connection between Azure virtual networks. Distinct from VNet peering, which does not require VPN gateways. |
| Azure ExpressRoute | Private connectivity to Microsoft through a connectivity provider, bypassing the public internet. Encryption is not implicit. |
| VPN Gateway vs ExpressRoute | VPN Gateway uses encrypted tunnels, commonly over the internet; ExpressRoute provides private connectivity through a provider and does not automatically encrypt traffic. |
| VNet peering vs VPN | Peering connects Azure VNets through the Microsoft network without a VPN gateway; VPN connections use gateway-based encrypted tunnels. |
| Domain Name System - DNS | Resolves domain names into records such as IP addresses. |
| Azure DNS | Hosts DNS zones. DNS hosting is not the same as registering or buying a domain name. |
| Public DNS zone / Azure Private DNS zone | Public zones publish records for public DNS resolution; private zones resolve names within linked VNets according to their configuration. DNS resolution alone does not grant network access. |
| Network Security Group - NSG | Rules allowing or denying inbound and outbound traffic at subnet or NIC scope. |
| Azure Firewall | Managed network firewall for centralized traffic filtering. |
| Azure DDoS Protection | Protection against distributed denial-of-service attacks; coverage and capabilities depend on the offering. |
| Azure Bastion | Managed RDP/SSH access to VMs without requiring public IP addresses on the target VMs. |
| Load balancing | Distributes traffic across instances to spread load and improve availability. |
| Latency / bandwidth | Latency is communication delay; bandwidth is transfer capacity. They are different measurements. |
| Private endpoint vs service endpoint | Private endpoint assigns a private VNet IP for supported service access; service endpoint extends subnet identity without creating a service private IP. |
| VNet peering transitivity | VNet peering does not automatically provide transitive connectivity between multiple VNets. |

## 7. Storage

| Term | Definition and exam distinction |
| --- | --- |
| Storage account | Azure resource providing a namespace and configuration for storage services, including region, redundancy, performance, and security options. |
| Standard general-purpose v2 - GPv2 | General-purpose account supporting blobs, queues, tables, and Azure Files. A common starting point for standard storage scenarios. |
| Premium block blobs account | Account optimized for block and append blobs requiring high transaction rates or consistently low latency. |
| Premium file shares account | Account for high-performance Azure Files scenarios, including supported SMB and NFS shares. |
| Premium page blobs account | Account for premium page blobs. Account types do not all support the same services or redundancy choices. |
| Storage account name | Globally unique Azure namespace; 3-24 characters using lowercase letters and numbers. |
| Storage service endpoint | Service-specific address, for example `https://<account>.blob.core.windows.net` in the public Azure cloud. |
| Object storage | Stores objects addressed by identifiers or URLs, useful for unstructured content. |
| Azure Blob Storage | Object storage for documents, images, videos, backups, and other unstructured data. |
| Blob container | Groups blobs within a storage account. Not an application container. |
| Azure Data Lake Storage Gen2 | Data-lake capabilities built on Blob Storage, including a hierarchical namespace for analytics workloads. |
| Azure Files | Managed file shares using protocols such as SMB or NFS, depending on share type. |
| Server Message Block - SMB / Network File System - NFS | Network file-sharing protocols; support depends on the storage offering and configuration. |
| Azure Queue Storage | Message storage for decoupling application components. |
| Azure Table Storage | NoSQL storage for structured, nonrelational entities with keys and properties. |
| Azure Managed Disks | Managed block-storage volumes used by Azure VMs. |
| Structured / semi-structured / unstructured data | Fixed-schema data, flexible structured data such as JSON, and content such as images or videos without a fixed tabular schema. |
| Hot tier | Online Blob access tier for frequently accessed data. |
| Cool tier | Online tier for less frequently accessed data, generally trading lower storage cost for higher access cost than Hot. |
| Cold tier | Online tier for rarely accessed data, with different cost trade-offs from Cool; availability depends on configuration. |
| Archive tier | Offline tier for long-term retention; requires rehydration before normal reading. Not appropriate for immediate retrieval. |
| Rehydration | Moving archived data into an online tier so it can be read; takes time and may incur costs. |
| Minimum retention / early deletion charge | Some tiers have minimum billable durations; early deletion or tier changes can incur charges. |
| Lifecycle management | Rules that automatically change tiers or delete data when conditions are met. |
| Redundancy | Multiple copies protecting against specified failures. Does not independently protect against all logical deletion or corruption. |
| Locally redundant storage - LRS | Three synchronous copies in one datacenter in the primary region. |
| Zone-redundant storage - ZRS | Synchronous copies across three availability zones in the primary region. |
| Geo-redundant storage - GRS | Local redundancy in the primary region and asynchronous replication to a locally redundant secondary region. |
| Geo-zone-redundant storage - GZRS | Zone redundancy in the primary region plus asynchronous replication to a secondary region. |
| Read-access GRS / GZRS - RA-GRS / RA-GZRS | Adds read access to the secondary region; its data can lag behind the primary. |
| Failover | Switching to a recovery instance or region. Support, recovery steps, and possible data loss depend on the service. |
| AzCopy | Command-line utility for copying data to, from, or between supported Azure storage resources. |
| Azure Storage Explorer | Graphical application for browsing and managing storage resources. |
| Azure File Sync | Synchronizes Azure Files shares with Windows servers for hybrid file-storage scenarios. |
| Cloud tiering | Azure File Sync capability that keeps frequently used files locally and retrieves other files from Azure on demand. |
| Azure Migrate | Tools for discovering, assessing, and migrating workloads to Azure. |
| Azure Data Box | Physical-device-based offline transfer for large data volumes. |
| Online vs offline migration | AzCopy transfers supported data online; Data Box is a physical-device option when large transfers over a network are impractical. |
| Standard vs Premium storage | Standard suits common cost-sensitive workloads; Premium offerings target supported workloads requiring higher throughput or lower latency. Availability depends on account type. |
| Storage encryption at rest | Azure Storage encrypts data at rest by default; customers still configure identity, access, and network restrictions. |
| Storage replication vs backup | Replication increases durability against certain failures; independent backup/versioning is needed for many deletion and corruption recovery scenarios. |
| Shared access signature - SAS | Delegated, limited authorization to storage resources. Protect a SAS URL as a secret. |
| Cool/Cold minimum retention | Early-deletion billing depends on tier, account type and configuration; do not assume one rule fits every account. |
| Replication vs failover | Geo-replication stores secondary copies; application failover and access require suitable design and supported recovery procedures. |

## 8. Identity, access, and security

| Term | Definition and exam distinction |
| --- | --- |
| Microsoft Entra ID | Cloud identity and access management service, formerly Azure Active Directory / Azure AD. |
| Active Directory Domain Services - AD DS | Traditional domain directory service associated with Windows Server. Not the same service as Microsoft Entra ID. |
| Microsoft Entra Domain Services | Managed domain services supporting capabilities such as domain join, LDAP, Kerberos, and NTLM. |
| Group Policy / Group Policy Object - GPO | Domain-based configuration rules for users and computers, supported in appropriate Microsoft Entra Domain Services scenarios. Not the same as Azure Policy on Azure resources. |
| Identity | Representation of a user, application, or workload. |
| Authentication - AuthN | Verifying identity: "Who are you?" |
| Authorization - AuthZ | Determining allowed actions: "What can you do?" |
| Single sign-on - SSO | Access to multiple integrated applications after signing in, subject to access policies. |
| Multifactor authentication - MFA | Uses multiple factor categories: something known, possessed, or inherent to the user. Two passwords are not two categories. |
| Passwordless authentication | Authentication without a password, such as a security key or Windows Hello for Business. |
| Passkey / FIDO2 security key | Public-key-based authentication credentials used in passwordless sign-in. A passkey can be device-bound or synchronized depending on the implementation; a security key is a physical authenticator. |
| Conditional Access | Policies evaluating signals such as user, device, and location to impose access requirements. Features may require appropriate licenses. |
| External identities | Access management for people outside the organization, including partners, suppliers, and customers. Collaboration and customer sign-in scenarios depend on the Microsoft Entra External ID offering and configuration. |
| Business-to-business - B2B collaboration | Collaboration model allowing external users to access an organization's resources, commonly as guests. |
| Microsoft Entra External ID | Microsoft identity capabilities for external people, including business collaboration and customer-facing sign-in scenarios. |
| B2B guest user | External partner represented by a guest object in the host tenant; typically signs in using an existing identity and needs explicit resource or app permissions. |
| Cross-tenant access settings | Microsoft Entra settings that govern inbound and outbound B2B collaboration and direct-connect access between organizations. |
| B2B direct connect | Cross-organization access model supporting Teams shared channels with configured cross-tenant trust; unlike normal B2B guest collaboration, it does not create the typical guest object in the resource tenant. |
| Customer identities / External ID for customers | Authentication and self-service sign-up for customers of external-facing apps; different from inviting business guests. |
| Azure AD B2C (legacy offering) | Older customer identity product; do not assume it is interchangeable with current Entra External ID offerings or B2B guest access. |
| B2B vs customer sign-in | Supplier accessing company resources -> B2B collaboration. Shoppers signing into a customer app -> customer identities. |
| Guest access | Access granted to an external identity; permissions must still be assigned appropriately. |
| Azure role-based access control - Azure RBAC | Authorization to Azure resources through role assignments at a defined scope. |
| Conditional Access vs Azure RBAC | Conditional Access determines conditions for sign-in (for example MFA); Azure RBAC determines permitted Azure resource operations. |
| Microsoft Entra roles vs Azure RBAC | Directory roles administer identity settings and users; Azure RBAC roles authorize Azure resource management or data operations at a scope. |
| Role definition | Collection of permissions describing what a role allows. |
| Role assignment | Association of a security principal, role definition, and scope. |
| Security principal | Identity that can receive permissions, such as a user, group, service principal, or managed identity. |
| Owner | Azure role with broad resource-management rights and permission to assign Azure roles. |
| Contributor | Can manage resources but cannot assign Azure RBAC roles. |
| Reader | Can view resources without changing them; does not automatically grant access to all data stored inside them. |
| User Access Administrator | Built-in Azure role for managing user access to Azure resources, including role assignments at its scope. It does not by itself grant general resource-management permissions like Contributor. |
| Control plane / data plane | Resource administration / service data operations. Permissions for the two can be separate. |
| Microsoft Entra roles | Directory-administration roles, distinct from Azure RBAC roles on resources. |
| Least privilege | Grant only necessary permissions at the appropriate scope and for the necessary duration. |
| Zero Trust | Verify explicitly, use least privilege, and assume breach. Internal network location is not automatic proof of trust. |
| Defense in depth | Layered protection across physical security, identity, perimeter, network, compute, applications, and data. |
| Managed identity | Azure-managed identity for authenticating without storing application credentials. Access permissions must still be granted. |
| Service principal | Application identity used to authenticate and access resources within a tenant. |
| Encryption at rest | Protecting stored data cryptographically. Does not replace access control. |
| Encryption in transit | Protecting data during communication, for example with TLS. |
| Encryption key | Cryptographic material used for encryption and related operations. |
| Microsoft-managed / customer-managed keys | Keys managed by the service provider / keys whose lifecycle and access the customer controls through supported integrations. |
| Azure Key Vault | Service for securely managing secrets, keys, and certificates. |
| Secret / certificate | Confidential value such as a password / digital credential binding an identity to a public key. |
| Microsoft Defender for Cloud | Cloud security posture management and workload protection. Some protection plans are paid. |
| Security posture | Overall state of an environment's security configurations and controls. |
| Secure score | Indicator helping prioritize security improvements; not a guarantee of security. |
| Microsoft Entra B2B direct connect | Cross-tenant collaboration for supported Teams shared channels, without a normal guest object in the resource tenant. |
| B2B collaboration guest | External partner normally uses an existing identity and is represented as a guest in the host directory; permissions must be granted. |
| Microsoft Entra External ID customer identities | Customer sign-up and sign-in for external-facing applications; distinct from B2B guest collaboration. |
| B2B vs B2C | B2B serves business partners/guests; customer identity services serve customers of applications. |

## 9. Cost management

| Term | Definition and exam distinction |
| --- | --- |
| Pricing calculator | Estimates the cost of a planned Azure configuration. Not a guaranteed invoice. |
| Total cost of ownership - TCO | Overall solution cost, including infrastructure, licensing, operation, maintenance, and relevant indirect costs. |
| TCO calculator - retired | Former tool for comparing on-premises and Azure costs. The reviewed Learn pricing lesson explicitly states that it has been retired. TCO remains a useful concept; use the Pricing calculator for Azure estimates. |
| Microsoft Cost Management | Tools for analyzing, allocating, monitoring, and optimizing spending; capabilities depend on account type and permissions. |
| Cost analysis | Examination of costs by time period, service, subscription, resource group, and other available dimensions. |
| Budget | Spending target with alerts. Exceeding it does not automatically shut down resources. |
| Cost alert | Notification based on configured actual or forecast spending thresholds. |
| Forecast | Projection based on available spending data and trends. |
| Cost factors | Service, region, tier, capacity, consumption, licensing, and data transfers can affect cost. |
| Egress / ingress | Outbound / inbound transfer. Pricing depends on service and traffic path; do not assume all transfers are free. |
| Reservation / reserved capacity | Commitment covering eligible usage or capacity over a term, potentially reducing cost relative to pay-as-you-go. |
| Azure savings plan for compute | Hourly spending commitment over a term for eligible compute usage; different from a targeted reservation. |
| Azure Spot Virtual Machines | Discounted spare capacity that Azure can evict. Appropriate for interruption-tolerant workloads, not guaranteed availability. |
| Reservation vs savings plan | Reservations apply to eligible specified resource usage; savings plans apply a monetary hourly commitment across eligible compute usage. |
| Cost budget vs quota | Budget sends spending alerts; a service quota limits resource capacity or usage and is not a spending cap. |
| Azure Hybrid Benefit | Licensing benefit for reusing eligible licenses under applicable conditions. |
| Deallocation | Releases a VM's compute allocation. Disks and other retained resources can remain billable. Shutting down inside the guest OS may not deallocate it. |
| Quota / service limit | Resource or usage limit at a scope. Not a financial spending cap. |
| Service-level agreement - SLA | Contractual service commitment with conditions, exclusions, and potentially service credits. |
| Availability percentage | Proportion of availability over a defined period. High availability does not mean zero downtime. |
| Composite SLA | Combined availability of dependencies. Multiplying percentages is an estimate for independent serial dependencies; real architecture and contractual terms matter. |
| Preview / general availability - GA | Pre-release / generally released service status. Support, production suitability, and guarantees may differ. |
| Reservations vs savings plans | Reservations apply to eligible reserved usage; savings plans use an hourly eligible-compute spending commitment. |
| Budget vs quota | Budget warns about spending; quota limits resource quantities, not financial charges. |

## 10. Governance and compliance

| Term | Definition and exam distinction |
| --- | --- |
| Governance | Rules and mechanisms controlling resource use, risk, cost, and compliance. Cloud tools help apply consistent standards at scale, but the customer must define and configure those standards. |
| Azure Policy | Evaluates and enforces resource rules, such as allowed deployment regions or required configurations. |
| Policy definition | Condition and effect describing a governance rule. |
| Policy assignment | Application of a policy at a scope, with parameters and possible exemptions. |
| Initiative | Group of policy definitions supporting a common objective. |
| Audit / deny / modify / deployIfNotExists | Example effects: report noncompliance, block operations, change supported properties, or deploy missing configurations under specified conditions. |
| Compliance | Meeting applicable requirements. A provider certification does not automatically make a customer's application compliant. |
| Remediation | Correcting noncompliant resources; some policy effects require a remediation task and appropriate permissions. |
| Resource lock | Protects certain control-plane operations against accidental changes or deletion. Not a substitute for RBAC or backup. |
| CanNotDelete lock | Generally allows reading and modification but blocks deletion within its scope. |
| ReadOnly lock | Generally allows reads and blocks control-plane changes; can also affect some seemingly read-oriented operations using modification APIs. |
| Tag | Key-value metadata such as `Environment=Study` for organization and cost allocation. Tags are not automatically inherited without an additional mechanism. |
| Azure Policy vs Azure RBAC | Policy evaluates or enforces resource compliance; RBAC controls who can perform permitted actions. |
| Policy vs lock | Policy evaluates allowed configurations or operations; locks prevent certain management-plane changes or deletion. |
| Lock and data-plane operations | Resource locks primarily restrict management-plane operations; they generally do not prevent direct data-plane operations. |
| Microsoft Purview | Solutions for data discovery, governance, protection, and compliance; capabilities depend on the specific solution. |
| Data classification | Categorizing data by content and sensitivity. |
| Service Trust Portal | Microsoft portal for trust information and compliance reports; some documents require authentication or acceptance of terms. |
| Regulatory requirement | Obligation imposed by regulation. Choosing a region or certified service alone does not satisfy every obligation. |
| Resource locks and data plane | Locks primarily restrict management-plane operations and do not generally block data-plane access. |
| Tags and inheritance | Tags are metadata and do not automatically inherit from resource groups without another mechanism. |

## 11. Managing and deploying resources

| Term | Definition and exam distinction |
| --- | --- |
| Azure portal | Browser-based graphical interface for managing Azure. |
| Azure Cloud Shell | Browser-accessible command environment with Bash or PowerShell and Azure tools. Resources created through it can incur charges. |
| Azure CLI | Cross-platform command-line tool using commands such as `az`. |
| Azure PowerShell | PowerShell modules for Azure management, including the `Az` modules. |
| Infrastructure as Code - IaC | Infrastructure defined in versionable files for repeatable, reviewable deployments. |
| ARM template | Declarative JSON resource definition deployed through Azure Resource Manager. |
| Bicep | Declarative language for Azure infrastructure that compiles into ARM templates. |
| Terraform | Third-party declarative IaC tool using providers, including an Azure provider, to manage infrastructure. Supporting recognition term, not a claim that Terraform syntax is an AZ-900 objective. |
| Declarative / imperative | Describing the desired state / describing a sequence of steps. |
| Idempotence | Repeating an operation does not cause additional changes once the desired state is reached. |
| Deployment | Applying configuration to create or update resources. |
| Azure Arc | Extends supported Azure management capabilities to resources outside Azure, including on-premises and other clouds. |
| Azure mobile app | Mobile interface for selected Azure monitoring and management tasks. |
| ARM vs Bicep | ARM is the Azure resource management control plane; Bicep is a declarative language compiled to ARM templates. |
| Cloud Shell vs local CLI | Cloud Shell provides Azure tools in a browser-based shell; CLI and PowerShell can also run locally with appropriate authentication. |
| Azure Resource Manager control plane | ARM manages resource deployment/configuration; service data-plane requests are distinct. |
| ARM templates vs Bicep | ARM templates are declarative JSON; Bicep is a concise declarative language compiled to ARM templates. |
| Azure Cloud Shell setup | Authenticated browser shell with Bash or PowerShell; initial setup may depend on configuration. |

## 12. Monitoring

| Term | Definition and exam distinction |
| --- | --- |
| Azure Monitor | Platform for collecting, analyzing, and acting on application and infrastructure telemetry. |
| Metrics | Timestamped numerical measurements, such as CPU utilization. |
| Logs | Event or observation records supporting detailed analysis. |
| Log Analytics | Tool for querying and analyzing logs in Azure Monitor. |
| Log Analytics workspace | Scope for collecting and managing logs, including access and retention settings. |
| Kusto Query Language - KQL | Query language used for log analysis. At Fundamentals level, focus on recognizing its purpose. |
| Application Insights | Application observability capabilities within Azure Monitor, including requests, dependencies, failures, and performance. |
| Alert rule | Condition triggering an alert from metrics, logs, or activity. |
| Action group | Reusable collection of alert notifications and actions. |
| Activity Log | Control-plane event log, such as resource creation; not a complete log of data access. |
| Azure Service Health | Personalized information about Azure service incidents, planned maintenance, and advisories affecting your environment. |
| Azure Resource Health | Availability and health information about a particular resource. |
| Azure Status | Public, general Azure service-status view, less personalized than Service Health. |
| Azure Advisor | Recommendations across reliability, security, performance, operational excellence, and cost. Does not automatically implement every recommendation. |
| Metrics vs logs | Metrics are numeric time-series measurements; logs capture detailed events and observations for investigation. |
| Service Health vs Resource Health | Service Health reports platform incidents relevant to your services/subscriptions; Resource Health reports the condition of an individual resource. |
| Azure Status vs Service Health | Azure Status is a public high-level status page; Service Health gives personalized impact information. |
| Advisor vs Monitor | Advisor recommends improvements; Monitor collects telemetry, queries data and triggers alerts. |

## Appendix A. Optional supporting topics (not all explicit exam objectives)

### AI, ML, IoT and edge

| Term | Meaning |
| --- | --- |
| Artificial intelligence - AI | Broad category of capabilities for tasks such as language understanding, vision, and content generation. |
| Azure AI services | Prebuilt AI capabilities exposed through APIs for scenarios such as language, speech, vision, and document processing. |
| Azure OpenAI Service | Azure service for accessing models supporting generative AI scenarios such as chat and content generation, with Azure security and governance integrations. |
| Generative AI | Produces content such as text or images based on prompts and context. |
| Agentic AI pattern | Application pattern combining a model, instructions, context, and tools for multistep goals. Not a separate compute category. |
| Machine learning - ML | Building models from data to make predictions or identify patterns. |
| Azure Machine Learning | Service for custom model development, training, experimentation, deployment, and lifecycle management. |
| Internet of Things - IoT | Connected devices that collect data and interact with services. |
| Telemetry | Measurements and events emitted by devices, applications, or infrastructure. |
| Azure IoT Hub | Secure bidirectional communication between cloud services and IoT devices. |
| Azure IoT Central | SaaS-oriented IoT application platform described in the reviewed lesson; check current lifecycle and availability before choosing it for a new project. |
| Edge computing / Azure IoT Edge | Processing near devices or data sources; IoT Edge extends cloud workloads to compatible edge devices. |

### Other recognition terms

| Term | Meaning |
| --- | --- |
| Azure SQL Database | Managed relational database; an example of PaaS. |
| Azure Cosmos DB | Distributed database service supporting different models and interfaces depending on the offering. |
| Azure Database for PostgreSQL | Managed PostgreSQL database service; another PaaS example. |
| Azure Logic Apps | Workflow and integration service using triggers and actions. |
| Azure Container Registry - ACR | Registry for container images and supported artifacts. |
| Azure Load Balancer | Layer 4 traffic distribution, including TCP and UDP. |
| Azure Application Gateway | Layer 7 web traffic routing with optional web application firewall capabilities. |
| Azure Front Door | Global web entry point with routing, acceleration, and security capabilities depending on the offering. |
| Web Application Firewall - WAF | Protection against certain HTTP/HTTPS application attacks; not a general-purpose network firewall. |
| Microsoft Sentinel | Security information and event management and security orchestration, automation, and response: SIEM/SOAR. |
| Azure Backup | Backup and recovery service for supported resources. |
| Azure Site Recovery | Replication and disaster-recovery orchestration for supported workloads. |
| Azure Well-Architected Framework | Design guidance across reliability, security, cost optimization, operational excellence, and performance efficiency. |

## Appendix B. Scenario recognition and revision checklist

| If a scenario asks for... | Think of... | Do not confuse it with... |
|---|---|---|
| Control over the guest OS | VM / IaaS | App Service / PaaS |
| Hosting custom web code without managing the OS | App Service / PaaS | Ready-to-use SaaS |
| Event-triggered function execution | Azure Functions | Guaranteed zero cost while idle on every plan |
| More instances | Scale out | Scale up: a larger instance |
| Datacenter-failure resilience within one region | Appropriate zone-based architecture | A resource group |
| Recovery from a regional disaster | A configured cross-region recovery strategy | Region pairing alone |
| Organizing multiple subscriptions | Management groups | Resource groups |
| Proving identity | Authentication | Authorization |
| Inviting an external consultant to access a company resource | B2B collaboration | Customer identities for public-facing applications |
| Collaborating in a Teams shared channel across organizations | B2B direct connect | Ordinary B2B guest invitation |
| Allowing customers to sign up for an online shop | Entra External ID customer identities | B2B collaboration |
| Requiring MFA for risky sign-ins | Conditional Access | Azure RBAC role assignment |
| Granting resource-management permissions | Azure RBAC | Azure Policy |
| Managing Azure role assignments without general resource administration | User Access Administrator | Contributor: manages resources but cannot assign roles through that role |
| Configuring domain users and computers | Group Policy | Azure Policy: Azure resource governance |
| Restricting deployment regions | Azure Policy | Tags or budgets |
| Preventing accidental resource deletion | CanNotDelete lock | A recoverable backup |
| Allocating spending to a team | Tags and cost analysis | Automatic tag inheritance |
| Estimating a future deployment | Pricing calculator | Analysis of actual spending |
| Notifying a spending threshold | Budget and alerts | Automatic subscription shutdown |
| Object storage | Blob Storage | Azure Files: shared files |
| Immediate reading of infrequently used blobs | Suitable online tier, such as Cool or Cold | Archive: rehydration required |
| Reading the geo-replicated secondary copy | RA-GRS or RA-GZRS | GRS or GZRS without read access |
| Accessing a service through a private VNet IP | Private endpoint | Service endpoint |
| Encrypted connectivity over the internet | VPN Gateway | ExpressRoute: private, not implicitly encrypted |
| Optimization recommendations | Azure Advisor | Azure Monitor: telemetry and alerts |
| A service incident affecting your environment | Service Health | Resource Health: a specific resource |
| Application failures and slow requests | Application Insights | Service Trust Portal: compliance documents |
| Managing supported resources outside Azure | Azure Arc | Azure Migrate: assessment and migration |
| Offline bulk data transfer | Azure Data Box | AzCopy: online transfer |
| Running VMs with fault/update domain separation | Availability set | Scale set: scaling and fleet management |
| A workload needing zone failure resilience | Appropriate multi-zone deployment | Assuming a single zonal VM is zone-redundant |
| Inspecting CPU utilization or alert thresholds | Azure Monitor metrics and alerts | Azure Advisor recommendations |
| Preventing an accidental resource deletion | CanNotDelete lock | Azure Policy or backup alone |
| Prebuilt language or vision capabilities | Azure AI services | Custom model training in Azure Machine Learning |
| Device-to-cloud messaging | Azure IoT Hub | General-purpose web hosting |
| Reducing unused capacity | Rightsizing, scaling in, and deallocation | Assuming cloud use is inherently efficient |

### Revision checklist

- [ ] Compare public, private, hybrid, and multicloud models and use cases.
- [ ] Explain consumption pricing, CapEx, OpEx, and shared responsibility.
- [ ] Compare IaaS, PaaS, and SaaS with examples and customer duties.
- [ ] Distinguish availability, scalability, elasticity, backup, and recovery.
- [ ] Explain predictability, manageability, security, and sustainability.
- [ ] Explain regions, region pairs, zones, and the resource hierarchy.
- [ ] Compare VMs, scale sets, availability sets, containers, and Functions.
- [ ] Identify VM supporting resources and application-hosting options.
- [ ] Explain VNets, subnets, peering, endpoints, VPN, ExpressRoute, and DNS.
- [ ] Compare storage services, account types, access tiers, and redundancy.
- [ ] Choose between AzCopy, Storage Explorer, File Sync, Migrate, and Data Box.
- [ ] Explain Entra directory services, external identities, SSO, MFA, and Conditional Access.
- [ ] Distinguish B2B collaboration, B2B direct connect, customer identities, guest objects, and cross-tenant access settings.
- [ ] Distinguish authentication, authorization, Azure RBAC, and directory roles.
- [ ] Explain Zero Trust, defense in depth, encryption, key management, and Defender for Cloud.
- [ ] Distinguish cost estimates, cost analysis, budgets, and optimization commitments.
- [ ] Explain Policy, locks, tags, Purview, and the Service Trust Portal.
- [ ] Recognize portal, Cloud Shell, CLI, PowerShell, ARM templates, IaC, and Arc.
- [ ] Distinguish Advisor, Monitor, Log Analytics, alerts, Application Insights, and Service Health.
- [ ] Recognize AI services, custom ML, IoT, and edge categories in the Learn material.
- [ ] Cross-check this checklist against every objective in the live exam study guide.

## Appendix C. Sources and alignment notes

- **Primary content reference:** `AZ900_Brochure_Verification_Ultime_2026.md` — 12 chapters, Quick memory sheets, supporting topics and final scenarios.
- [Microsoft AZ-900 official study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900)
- [Microsoft Entra B2B collaboration](https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b)
- [Microsoft Entra B2B direct connect](https://learn.microsoft.com/en-us/entra/external-id/b2b-direct-connect-overview)
- [Azure Storage redundancy](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy)
- [Azure Blob access tiers](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview)
- [Azure resource locks](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources)

**Alignment rule:** The brochure is the primary study material. Optional supplementary terms in this glossary should not be treated as guaranteed exam objectives.
