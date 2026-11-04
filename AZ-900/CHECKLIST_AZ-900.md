# AZ-900 - Topics and Subtopics Checklist

**Official verification (November 4, 2026):** The live Microsoft AZ-900 study guide was retrieved and compared with this material. The applicable skills-measured date is **July 20, 2026**, with weights **25–30% cloud concepts**, **35–40% Azure architecture and services**, and **30–35% Azure management and governance**. The official guide lists 11 objective groups. Source: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900. The TCO Calculator is **retired**: https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/3-compare-pricing-total-cost-of-ownership-calculators. This is an independently written study aid, not an official Microsoft publication.


## Scope and use

**Verified November 4, 2026** against the live official Microsoft AZ-900 guide (skills measured July 20, 2026). Sections 1–3 align with the 11 official objective groups. Detailed checklist items are teaching subtopics, not necessarily separate objectives. Section 4 is supplementary. TCO Calculator is retired and not listed as a current exam objective.

Check a box only when you can explain the concept, recognize a scenario, and distinguish nearby alternatives.

## Contents

- [1. Cloud concepts](#1-cloud-concepts)
- [2. Azure architecture and services](#2-azure-architecture-and-services)
- [3. Azure management and governance](#3-azure-management-and-governance)
- [4. Supporting and recognition material](#4-supporting-and-recognition-material)
- [5. Final readiness](#5-final-readiness)

## 1. Cloud concepts

Reference: [glossary section 1](GLOSSARY_AZ-900.md#1-cloud-concepts);
study guide section 2.

### 1.1 Describe cloud computing

- [ ] Define cloud computing and on-premises infrastructure.
- [ ] Explain on-demand self-service and rapid provisioning.
- [ ] Explain broad network access, resource pooling, and measured usage.
- [ ] Describe public cloud and suitable use cases.
- [ ] Describe private cloud and suitable use cases.
- [ ] Describe hybrid cloud and suitable use cases.
- [ ] Distinguish hybrid cloud from multicloud.
- [ ] Explain the shared responsibility model.
- [ ] Compare responsibility for physical infrastructure, OS, applications, data, identities, access, and devices across on-premises, IaaS, PaaS, and SaaS.
- [ ] Explain consumption-based pricing and pay-as-you-go.
- [ ] Distinguish consumed resources from allocated resources that can remain billable while idle.
- [ ] Compare capital expenditure (CapEx) and operational expenditure (OpEx).
- [ ] Recognize usage-based, fixed, and commitment-based pricing models.
- [ ] Explain serverless: servers still exist, and billing and scaling depend on the service and plan.

### 1.2 Describe the benefits of cloud services

- [ ] Explain high availability and why it requires suitable architecture.
- [ ] Explain scalability.
- [ ] Compare vertical scaling (up/down) and horizontal scaling (out/in).
- [ ] Distinguish elasticity from scalability.
- [ ] Explain autoscaling and demand-based capacity changes.
- [ ] Distinguish reliability, resiliency, and fault tolerance.
- [ ] Explain performance predictability and cost predictability.
- [ ] Explain agility and faster provisioning.
- [ ] Explain cloud security benefits without assuming customer responsibilities disappear.
- [ ] Explain governance benefits and consistent organizational controls.
- [ ] Explain manageability through graphical tools, APIs, scripts, and automation.
- [ ] Distinguish high availability, backup/restore, and disaster recovery.

### 1.3 Describe cloud service types

- [ ] Explain IaaS, its responsibilities, and an Azure VM use case.
- [ ] Explain PaaS, its responsibilities, and an App Service use case.
- [ ] Explain SaaS, its responsibilities, and a Microsoft 365 use case.
- [ ] Choose IaaS when guest OS control or custom system software is required.
- [ ] Choose PaaS when deploying application code without managing the underlying OS.
- [ ] Choose SaaS when using a complete provider-operated application.
- [ ] Explain why serverless is not a fourth equivalent IaaS/PaaS/SaaS service category.

## 2. Azure architecture and services

### 2.1 Describe the core architectural components of Azure

Reference: [glossary section 2](GLOSSARY_AZ-900.md#2-azure-architecture-and-resource-organization);
study guide section 3.1.

- [ ] Distinguish a datacenter, an Azure region, and a geography.
- [ ] Explain region choice: latency, service availability, price, and data residency.
- [ ] Explain availability zones and their independent infrastructure.
- [ ] Distinguish zonal and zone-redundant deployments.
- [ ] Explain region pairs without assuming every region is paired.
- [ ] Explain why region pairing does not automatically replicate workloads.
- [ ] Recognize sovereign environments, including Azure Government and Azure operated by 21Vianet.
- [ ] Distinguish sovereignty, data residency, and overall regulatory compliance.
- [ ] Define an Azure resource and give examples.
- [ ] Explain resource groups, shared lifecycle, and their non-nested structure.
- [ ] Distinguish resource group metadata location from resource locations.
- [ ] Explain subscriptions as billing, management, and service-limit boundaries.
- [ ] Explain management groups and organizing multiple subscriptions.
- [ ] Explain the management group -> subscription -> resource group -> resource hierarchy.
- [ ] Distinguish a Microsoft Entra tenant/directory from a subscription.
- [ ] Explain scopes and inheritance of applicable access or governance assignments.
- [ ] Recognize resource providers and Azure Resource Manager (ARM).

### 2.2 Describe Azure compute and networking services

References: [compute glossary](GLOSSARY_AZ-900.md#3-compute-and-application-hosting)
and [networking glossary](GLOSSARY_AZ-900.md#4-networking);
study guide sections 3.2-3.3.

#### Compute and application hosting

- [ ] Compare VMs, containers, and functions.
- [ ] Explain Azure Virtual Machines and customer guest OS responsibilities.
- [ ] Recognize VM sizes, images, and stock keeping units (SKUs).
- [ ] Identify VM supporting resources: OS/data disks, NIC, VNet, subnet, IP configuration, and access controls.
- [ ] Explain why a public IP address is not required for every VM.
- [ ] Explain Virtual Machine Scale Sets (VMSS) and fleet scaling.
- [ ] Explain availability sets, fault domains, and update domains.
- [ ] Distinguish scale sets, availability sets, and availability zones.
- [ ] Explain Azure Virtual Desktop (AVD) and remote desktop/application scenarios.
- [ ] Explain containers and container images, including shared host kernels.
- [ ] Explain Azure Container Instances (ACI).
- [ ] Explain Azure Container Apps and managed event-driven container hosting.
- [ ] Explain Azure Kubernetes Service (AKS) and container orchestration.
- [ ] Distinguish ACI, Container Apps, and AKS by management needs.
- [ ] Explain Azure App Service for web apps, APIs, and backends.
- [ ] Recognize the role of an App Service plan.
- [ ] Explain Azure Functions and event-driven execution.
- [ ] Recognize HTTP, timer, queue/message, and storage-event triggers.
- [ ] Choose VM, container, App Service, or Functions hosting for a simple scenario.

#### Networking

- [ ] Explain Azure Virtual Network (VNet), address spaces, and subnets.
- [ ] Recognize IP addresses and CIDR notation without advanced subnet calculations.
- [ ] Distinguish public and private IP addresses from access authorization.
- [ ] Explain VNet peering and its non-transitive default behavior.
- [ ] Explain VPN Gateway and encrypted network connections.
- [ ] Compare site-to-site, point-to-site, and VNet-to-VNet VPN.
- [ ] Explain ExpressRoute and connectivity through a provider.
- [ ] Compare VPN Gateway with ExpressRoute: encrypted internet tunnel versus private connectivity.
- [ ] Explain why private connectivity does not automatically imply end-to-end encryption.
- [ ] Explain DNS name resolution and Azure DNS hosting.
- [ ] Distinguish public DNS zones from Azure Private DNS zones.
- [ ] Distinguish DNS hosting from domain registration, web hosting, and network authorization.
- [ ] Compare public endpoints and private endpoints.
- [ ] Explain Private Link and a private endpoint's VNet IP address.
- [ ] Distinguish service endpoints from private endpoints.
- [ ] Explain Network Security Groups (NSGs) and subnet/NIC traffic filtering.
- [ ] Distinguish latency from bandwidth.

### 2.3 Describe Azure storage services

Reference: [glossary section 5](GLOSSARY_AZ-900.md#5-storage-and-migration);
study guide section 3.4.

#### Services, accounts, and data

- [ ] Compare object, file, and block storage.
- [ ] Distinguish structured, semi-structured, and unstructured data.
- [ ] Explain Blob Storage and blob containers.
- [ ] Distinguish a blob container from an application container.
- [ ] Explain Azure Files and SMB/NFS file shares.
- [ ] Explain Queue Storage and asynchronous messaging.
- [ ] Explain Table Storage and nonrelational entities.
- [ ] Explain Managed Disks for VM OS and data volumes.
- [ ] Recognize Data Lake Storage Gen2 and its relationship to Blob Storage.
- [ ] Explain storage accounts as namespaces and configuration boundaries.
- [ ] Compare standard general-purpose v2 and premium block blob, file share, and page blob account types.
- [ ] Recognize storage account naming requirements and service-specific endpoints.
- [ ] Explain how account type affects service, performance, and redundancy choices.

#### Access tiers and protection

- [ ] Choose Hot, Cool, Cold, or Archive based on access frequency and retrieval needs.
- [ ] Explain online tiers versus offline Archive and rehydration.
- [ ] Recognize minimum billable retention and early deletion charges.
- [ ] Explain lifecycle rules for tier changes and deletion.
- [ ] Explain LRS and local datacenter replication.
- [ ] Explain ZRS and replication across zones within a region.
- [ ] Explain GRS and asynchronous replication to a secondary region.
- [ ] Explain GZRS and its zone-redundant primary region.
- [ ] Compare RA-GRS and RA-GZRS with their non-read-access variants.
- [ ] Explain failover, replication lag, and possible data loss.
- [ ] Explain why redundancy is not a substitute for backup or deletion protection.
- [ ] Recognize shared access signatures (SAS) as limited delegated access that must be protected.

#### Transfer, synchronization, and migration

- [ ] Choose AzCopy for command-line data transfer.
- [ ] Choose Azure Storage Explorer for graphical storage management.
- [ ] Explain Azure File Sync and Windows Server file synchronization.
- [ ] Explain cloud tiering and local caching.
- [ ] Choose Azure Migrate for discovery, assessment, and workload migration.
- [ ] Choose Azure Data Box for physical bulk data transfer.
- [ ] Distinguish online copying, synchronization, migration assessment, and offline transfer.

### 2.4 Describe Azure identity, access, and security

Reference: [glossary section 6](GLOSSARY_AZ-900.md#6-identity-access-and-security);
study guide section 3.5.

#### Identity and authentication

- [ ] Explain identities and Microsoft Entra ID, formerly Azure AD.
- [ ] Distinguish Entra ID, traditional AD DS, and Microsoft Entra Domain Services.
- [ ] Recognize domain join, LDAP, Kerberos, NTLM, and Group Policy/GPO use cases.
- [ ] Distinguish authentication (identity proof) from authorization (allowed actions).
- [ ] Explain single sign-on (SSO).
- [ ] Explain multifactor authentication (MFA) and different factor categories.
- [ ] Explain why two passwords are not two authentication factors.
- [ ] Explain passwordless sign-in, passkeys/FIDO2 security keys, and Windows Hello for Business.
- [ ] Explain external identities, B2B collaboration, guest access, and customer sign-in scenarios.
- [ ] Explain Conditional Access signals and controls, including MFA and device requirements.

#### Authorization and security principles

- [ ] Explain Azure RBAC and role assignments.
- [ ] Identify the security principal, role definition, and scope in a role assignment.
- [ ] Compare Owner, Contributor, Reader, and User Access Administrator.
- [ ] Distinguish Azure RBAC roles from Microsoft Entra directory roles.
- [ ] Distinguish control-plane permissions from data-plane access.
- [ ] Apply least privilege at an appropriate scope.
- [ ] Explain the three Zero Trust principles: verify explicitly, least privilege, assume breach.
- [ ] Explain defense-in-depth layers: physical, identity, perimeter, network, compute, application, and data.
- [ ] Explain Microsoft Defender for Cloud's posture and workload protection roles.
- [ ] Recognize security posture and secure score without treating a score as a security guarantee.

## 3. Azure management and governance

### 3.1 Describe cost management in Azure

References: [glossary section 7](GLOSSARY_AZ-900.md#7-cost-management-and-service-commitments)
and [tags in section 8](GLOSSARY_AZ-900.md#8-governance-and-compliance);
study guide section 4.1.

- [ ] Identify cost factors: service, region, SKU/tier, capacity, duration, consumption, licensing, support, and data transfer.
- [ ] Distinguish ingress and egress without assuming every transfer is free.
- [ ] Use the Pricing calculator conceptually to estimate a planned Azure deployment.
- [ ] Distinguish an estimate from a guaranteed bill.
- [ ] Explain total cost of ownership (TCO), including indirect operating costs.
- [ ] Recognize the TCO calculator's historical comparison purpose and its retired status.
- [ ] Explain Microsoft Cost Management and cost analysis.
- [ ] Interpret spending by service, subscription, resource group, and tags.
- [ ] Distinguish actual costs from forecast spending.
- [ ] Explain budgets and cost alerts without assuming automatic resource shutdown.
- [ ] Use tags for organization and cost allocation, not as security boundaries.
- [ ] Explain why tags are not automatically inherited without an additional mechanism.
- [ ] Recognize reservations/reserved capacity, savings plans, Spot VMs, and Azure Hybrid Benefit.
- [ ] Explain rightsizing, autoscaling, and removing unused resources as cost controls.
- [ ] Distinguish guest OS shutdown from VM deallocation; retained disks can remain billable.
- [ ] Distinguish quotas/service limits from financial spending caps.

**Verified correction:** an older local guide describes the TCO calculator
without its retirement status. Retain the glossary's documented correction,
supported by the official Learn
[pricing lesson](https://github.com/MicrosoftDocs/learn/blob/84a72937fdd8e262449c18e5cb42920210a7b211/learn-pr/wwl-azure/describe-cost-management-azure/includes/3-compare-pricing-total-cost-of-ownership-calculators.md).
Its historical purpose, current availability, and possible exam treatment are
separate questions; this checklist does not verify the last of those.

### 3.2 Describe features and tools for governance and compliance

Reference: [glossary section 8](GLOSSARY_AZ-900.md#8-governance-and-compliance);
study guide section 4.2.

- [ ] Explain governance, compliance, and customer regulatory responsibilities.
- [ ] Explain Microsoft Purview for data discovery, governance, and protection.
- [ ] Recognize data classification and sensitivity.
- [ ] Explain Azure Policy and resource configuration standards.
- [ ] Distinguish policy definitions, assignments, and initiatives.
- [ ] Recognize audit, deny, modify, and deployIfNotExists effects at a high level.
- [ ] Explain remediation and its permission requirements.
- [ ] Compare Azure Policy, Azure RBAC, and resource locks.
- [ ] Compare CanNotDelete and ReadOnly locks.
- [ ] Explain lock inheritance and management-plane scope without assuming data-plane protection.
- [ ] Explain why locks are not backups and authorized users can remove them.
- [ ] Recognize the Service Trust Portal and compliance reports.
- [ ] Explain why provider certifications do not automatically make a workload compliant.

### 3.3 Describe features and tools for managing and deploying Azure resources

Reference: [glossary section 9](GLOSSARY_AZ-900.md#9-deployment-and-administration);
study guide section 4.3.

- [ ] Explain the Azure portal as a graphical administration interface.
- [ ] Explain Cloud Shell as a hosted Bash/PowerShell execution environment.
- [ ] Distinguish Azure CLI from Azure PowerShell.
- [ ] Recognize `az` commands and `Az` PowerShell cmdlets without memorizing syntax.
- [ ] Explain Azure Arc for supported on-premises and other-cloud resources.
- [ ] Distinguish Arc management from Migrate workload migration.
- [ ] Explain Infrastructure as Code (IaC), version control, review, and repeatability.
- [ ] Explain Azure Resource Manager (ARM) as the management/deployment layer.
- [ ] Explain ARM templates as declarative JSON resource definitions.
- [ ] Recognize template parameters, dependencies, and reusable deployments.
- [ ] Explain Bicep and its relationship to ARM templates.
- [ ] Distinguish declarative desired state from imperative steps.
- [ ] Explain idempotence at a conceptual level.
- [ ] Distinguish management interfaces, the ARM layer, and infrastructure definition files.

### 3.4 Describe monitoring tools in Azure

Reference: [glossary section 10](GLOSSARY_AZ-900.md#10-monitoring);
study guide section 4.4.

- [ ] Explain Azure Advisor and its cost, security, reliability, operational excellence, and performance recommendations.
- [ ] Explain Azure Service Health incidents, maintenance, and advisories.
- [ ] Distinguish personalized Service Health, individual Resource Health, and public Azure Status.
- [ ] Explain Azure Monitor and telemetry collection, analysis, and actions.
- [ ] Distinguish metrics, logs, traces, and events.
- [ ] Explain Log Analytics and a Log Analytics workspace.
- [ ] Recognize Kusto Query Language (KQL) without advanced query writing.
- [ ] Explain alert rules, conditions, and action groups.
- [ ] Recognize the Activity Log as control-plane events rather than all data access.
- [ ] Explain Application Insights for requests, dependencies, failures, and performance.
- [ ] Recognize dashboards and workbooks for visualizing operational data.
- [ ] Choose Advisor, Service Health, Monitor, Log Analytics, or Application Insights for a simple scenario.

## 4. Supporting and recognition material

These items extend examples in the local study materials. They are **not
confirmed as separately named current exam objectives**. Review their purpose
at recognition level after the main topics; do not treat them as requirements
for advanced Azure engineering.

### 4.1 Reliability, service commitments, and sustainability

References: [cloud concepts](GLOSSARY_AZ-900.md#1-cloud-concepts),
[service commitments](GLOSSARY_AZ-900.md#7-cost-management-and-service-commitments),
and [recognition terms](GLOSSARY_AZ-900.md#12-additional-recognition-terms).

- [ ] Distinguish recovery point objective (RPO) from recovery time objective (RTO).
- [ ] Recognize Azure Backup and Azure Site Recovery.
- [ ] Explain service-level agreements (SLAs), exclusions, and possible service credits.
- [ ] Interpret availability percentages without assuming zero downtime.
- [ ] Recognize composite SLA assumptions without treating a calculation as a contract.
- [ ] Distinguish preview from general availability (GA).
- [ ] Recognize the five Azure Well-Architected Framework pillars.
- [ ] Explain sustainability, resource utilization, and reducing wasted capacity.

### 4.2 Additional network and application services

References: [networking](GLOSSARY_AZ-900.md#4-networking)
and [recognition terms](GLOSSARY_AZ-900.md#12-additional-recognition-terms).

- [ ] Recognize Azure Firewall and centralized traffic filtering.
- [ ] Recognize Azure DDoS Protection and its offering-dependent coverage.
- [ ] Recognize Azure Bastion for RDP/SSH without public IPs on target VMs.
- [ ] Explain load balancing at a basic level.
- [ ] Distinguish Azure Load Balancer (Layer 4) from Application Gateway (Layer 7).
- [ ] Recognize Azure Front Door and global web routing.
- [ ] Recognize Web Application Firewall (WAF) versus general network filtering.
- [ ] Recognize Azure Container Registry (ACR) and image storage.
- [ ] Recognize App Service deployment slots, custom domains, and TLS as hosting features.
- [ ] Recognize Azure Logic Apps and workflow automation.

### 4.3 Application identities, secrets, and encryption

References: [identity and security](GLOSSARY_AZ-900.md#6-identity-access-and-security)
and [recognition terms](GLOSSARY_AZ-900.md#12-additional-recognition-terms).

- [ ] Distinguish service principals from managed identities.
- [ ] Explain why managed identities still need access permissions.
- [ ] Compare encryption at rest and in transit.
- [ ] Recognize encryption keys and Microsoft-managed versus customer-managed keys.
- [ ] Distinguish secrets, keys, and certificates.
- [ ] Recognize Azure Key Vault for managing secrets, keys, and certificates.
- [ ] Recognize Microsoft Sentinel as SIEM/SOAR, not the same service as Defender for Cloud.

### 4.4 Databases and alternative IaC tools

References: [recognition terms](GLOSSARY_AZ-900.md#12-additional-recognition-terms)
and [deployment](GLOSSARY_AZ-900.md#9-deployment-and-administration).

- [ ] Recognize Azure SQL Database and Azure Database for PostgreSQL as managed relational database examples.
- [ ] Recognize Azure Cosmos DB as a distributed database service.
- [ ] Recognize Terraform as third-party declarative IaC without learning its syntax for this checklist.

### 4.5 AI, machine learning, IoT, and edge

Reference: [glossary section 11](GLOSSARY_AZ-900.md#11-ai-machine-learning-iot-and-edge).

- [ ] Distinguish AI, machine learning, and generative AI.
- [ ] Recognize Azure AI services for prebuilt language, speech, vision, and document capabilities.
- [ ] Recognize Azure OpenAI Service and generative model scenarios.
- [ ] Recognize an agentic AI pattern without treating it as a new compute service category.
- [ ] Recognize Azure Machine Learning for custom model development and lifecycle management.
- [ ] Explain IoT devices and telemetry.
- [ ] Recognize Azure IoT Hub for device/cloud communication.
- [ ] Recognize Azure IoT Central while checking its lifecycle and availability before new use.
- [ ] Explain edge computing and recognize Azure IoT Edge.

## 5. Final readiness

- [ ] Explain each main topic in plain English and give a simple use case.
- [ ] Review the [glossary comparison table](GLOSSARY_AZ-900.md#13-key-distinctions-and-revision-checklist).
- [ ] Solve original service-selection scenarios and explain why alternatives do not fit.
- [ ] Track weak topics and revisit them rather than memorizing answer letters.
- [ ] Distinguish configuration-dependent behavior from general service purpose.
- [ ] Recheck current product names, availability, pricing, and lifecycle when relevant.
- [ ] Compare every current official objective with this checklist and resolve gaps.
- [ ] Confirm the applicable skills-measured date, weights, and change log in the official study guide.
- [ ] Use the official practice assessment from the [certification page](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/).
- [ ] Try the [Microsoft exam sandbox](https://aka.ms/examdemo) to learn the interface.
- [ ] Confirm exam language, booking, identification, and accommodation requirements.
- [ ] Treat checklist completion and practice results as study indicators, not a pass guarantee or official scaled score.
