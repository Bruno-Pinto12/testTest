# AZ-900 Chapter Practice Questions

Practice questions for each chapter of the
[AZ-900 Knowledge Brochure](BROCHURE_AZ-900.md). Read a chapter, then answer
its questions here. Click **Answer** to reveal the solution and a short
explanation.

> **Note:** These questions were written for revision based on the brochure.
> They are **not** official Microsoft questions and are **not** taken from
> real exams. The real exam may use different wording and formats.

## Contents

- [1. Cloud computing](#1-cloud-computing)
- [2. Benefits of cloud services](#2-benefits-of-cloud-services)
- [3. Cloud service types](#3-cloud-service-types)
- [4. Core architecture](#4-core-architecture)
- [5. Compute](#5-compute)
- [6. Networking](#6-networking)
- [7. Storage](#7-storage)
- [8. Identity, access, and security](#8-identity-access-and-security)
- [9. Cost management](#9-cost-management)
- [10. Governance and compliance](#10-governance-and-compliance)
- [11. Managing and deploying resources](#11-managing-and-deploying-resources)
- [12. Monitoring](#12-monitoring)
- [Final mixed review](#final-mixed-review)

---

## 1. Cloud computing

Brochure chapter: [1. Cloud computing](BROCHURE_AZ-900.md#1-cloud-computing)

**Q1.1** In the shared responsibility model, which item is **always** the
customer's responsibility, whatever the service type?

- A. Physical hosts
- B. Operating system
- C. Information and data
- D. Physical network

<details><summary>Answer</summary>

**C.** Data, devices, and accounts/identities always stay with the customer.
Physical items are always the provider's.

</details>

**Q1.2** True or false: in SaaS, the cloud provider is responsible for the
customer's user accounts.

<details><summary>Answer</summary>

**False.** Accounts and identities always remain the customer's
responsibility.

</details>

**Q1.3** A company wants to keep sensitive data in its own datacenter and use
Azure for a public website. Which cloud model is this?

- A. Public cloud
- B. Private cloud
- C. Hybrid cloud
- D. Multi-cloud

<details><summary>Answer</summary>

**C. Hybrid cloud.** It combines private infrastructure with the public cloud.

</details>

**Q1.4** Which cloud model requires **no** up-front hardware purchase by the
customer?

- A. Public cloud
- B. Private cloud on-premises
- C. Both

<details><summary>Answer</summary>

**A. Public cloud.** An on-premises private cloud requires buying and
maintaining hardware.

</details>

**Q1.5** Buying servers for a new datacenter is an example of which type of
expense?

<details><summary>Answer</summary>

**CapEx (capital expenditure).** Up-front spending on physical infrastructure.

</details>

**Q1.6** Which statement best describes the consumption-based model?

- A. Pay a fixed amount every year whatever you use
- B. Pay only for the resources you use, with no up-front cost
- C. Buy hardware once and use it for free afterward

<details><summary>Answer</summary>

**B.** Cloud is mainly OpEx: pay-as-you-go, stop paying when you stop using.

</details>

**Q1.7** Which service lets you manage on-premises servers and Kubernetes
clusters running in another cloud from Azure?

<details><summary>Answer</summary>

**Azure Arc.** It extends Azure management to resources outside Azure.

</details>

**Q1.8** True or false: a private cloud must always be located in the
organization's own building.

<details><summary>Answer</summary>

**False.** It can be hosted by a third party, as long as it is dedicated to a
single organization.

</details>

---

## 2. Benefits of cloud services

Brochure chapter:
[2. Benefits of cloud services](BROCHURE_AZ-900.md#2-benefits-of-cloud-services)

**Q2.1** An application automatically adds VMs during peak hours and removes
them at night. Which benefit is this?

- A. High availability
- B. Elasticity
- C. Reliability
- D. Governance

<details><summary>Answer</summary>

**B. Elasticity.** Resources grow and shrink automatically with demand.

</details>

**Q2.2** Increasing the CPU and RAM of an existing VM is called:

- A. Horizontal scaling (scale out)
- B. Vertical scaling (scale up)

<details><summary>Answer</summary>

**B. Vertical scaling.** Horizontal scaling adds more instances.

</details>

**Q2.3** Adding three more VMs behind a load balancer is called:

<details><summary>Answer</summary>

**Horizontal scaling (scale out).**

</details>

**Q2.4** Which term describes a system's ability to recover from failures and
continue working?

<details><summary>Answer</summary>

**Reliability.** Availability is about staying accessible; reliability is
about recovering from failure.

</details>

**Q2.5** What does an SLA describe?

- A. The price of a service
- B. Microsoft's formal commitment for uptime and connectivity
- C. The list of regions where a service exists

<details><summary>Answer</summary>

**B.**

</details>

**Q2.6** You combine two services, each with a 99.9% SLA. Is the composite SLA
higher or lower than 99.9%?

<details><summary>Answer</summary>

**Lower.** SLAs are multiplied: 0.999 x 0.999 = about 99.8%.

</details>

**Q2.7** Using the Azure portal, CLI, and templates to manage resources is an
example of:

- A. Manageability **of** the cloud
- B. Manageability **in** the cloud

<details><summary>Answer</summary>

**B. In the cloud** = the ways you manage. **Of** the cloud = autoscaling,
monitoring, automatic replacement of failed resources.

</details>

**Q2.8** Which benefit lets an organization enforce standards using templates
and policies?

<details><summary>Answer</summary>

**Governance.**

</details>

---

## 3. Cloud service types

Brochure chapter:
[3. Cloud service types](BROCHURE_AZ-900.md#3-cloud-service-types)

**Q3.1** A company wants to migrate its servers to Azure with no code changes
and full control of the operating system. Which service type fits?

<details><summary>Answer</summary>

**IaaS** (Azure Virtual Machines). Typical lift-and-shift.

</details>

**Q3.2** Developers want to deploy a web app without managing the operating
system or patches. Which service type fits best?

<details><summary>Answer</summary>

**PaaS** (for example Azure App Service).

</details>

**Q3.3** Microsoft 365 is an example of which service type?

<details><summary>Answer</summary>

**SaaS.**

</details>

**Q3.4** SQL Server installed on an Azure VM is:

- A. IaaS
- B. PaaS
- C. SaaS

<details><summary>Answer</summary>

**A. IaaS.** A VM is always IaaS. Azure SQL Database would be PaaS.

</details>

**Q3.5** In which service type does the customer have the **most**
management responsibility?

<details><summary>Answer</summary>

**IaaS.** Responsibility decreases from IaaS to PaaS to SaaS.

</details>

**Q3.6** Which Azure service is serverless and runs code only when it is
triggered by an event?

<details><summary>Answer</summary>

**Azure Functions.**

</details>

**Q3.7** True or false: with serverless computing, you typically pay only when
your code runs.

<details><summary>Answer</summary>

**True.**

</details>

**Q3.8** In SaaS, what does the customer still manage?

<details><summary>Answer</summary>

**Their data, users/accounts, and configuration.**

</details>

---

## 4. Core architecture

Brochure chapter:
[4. Core architecture](BROCHURE_AZ-900.md#4-core-architecture)

**Q4.1** What is an availability zone?

- A. A group of regions in the same country
- B. One or more physically separate datacenters inside a region, with
  independent power, cooling, and networking
- C. A logical container for resources

<details><summary>Answer</summary>

**B.**

</details>

**Q4.2** A region that supports availability zones has at least how many zones?

<details><summary>Answer</summary>

**Three.**

</details>

**Q4.3** Which feature mainly protects against the failure of an **entire
region**?

- A. Availability zones
- B. Region pairs
- C. Resource groups

<details><summary>Answer</summary>

**B. Region pairs.** Zones protect against a datacenter failure inside a
region.

</details>

**Q4.4** Azure Government is an example of:

<details><summary>Answer</summary>

**A sovereign region.** Isolated instance of Azure for legal or compliance
needs.

</details>

**Q4.5** Put these in order from top to bottom: resource group, management
group, resource, subscription.

<details><summary>Answer</summary>

**Management group -> Subscription -> Resource group -> Resource.**

</details>

**Q4.6** Which level is the main unit of **billing**?

<details><summary>Answer</summary>

**Subscription.**

</details>

**Q4.7** True or false: a resource can belong to two resource groups at the
same time.

<details><summary>Answer</summary>

**False.** A resource belongs to exactly one resource group. It can be moved
to another one.

</details>

**Q4.8** What happens to the resources when you delete a resource group?

<details><summary>Answer</summary>

**They are all deleted.**

</details>

**Q4.9** True or false: resource groups can be nested inside other resource
groups.

<details><summary>Answer</summary>

**False.**

</details>

**Q4.10** A policy is assigned to a management group. Does it apply to the
subscriptions under it?

<details><summary>Answer</summary>

**Yes.** Settings applied at a higher level are inherited by lower levels.

</details>

---

## 5. Compute

Brochure chapter: [5. Compute](BROCHURE_AZ-900.md#5-compute)

**Q5.1** You need many identical VMs that scale automatically with demand.
Which service fits?

<details><summary>Answer</summary>

**Virtual Machine Scale Sets.**

</details>

**Q5.2** Availability sets spread VMs across which two kinds of domains?

<details><summary>Answer</summary>

**Fault domains** (power/network rack) and **update domains** (maintenance).

</details>

**Q5.3** Employees need to access a Windows desktop and apps from any device.
Which service fits?

<details><summary>Answer</summary>

**Azure Virtual Desktop.**

</details>

**Q5.4** Which statement about containers is correct?

- A. Containers include a full operating system each
- B. Containers virtualize the operating system and are lightweight
- C. Containers are slower to start than VMs

<details><summary>Answer</summary>

**B.** VMs virtualize hardware; containers share the host OS kernel.

</details>

**Q5.5** You need to run one container quickly without managing servers or an
orchestrator. Which service fits best?

<details><summary>Answer</summary>

**Azure Container Instances.**

</details>

**Q5.6** You must orchestrate hundreds of containers. Which service fits?

<details><summary>Answer</summary>

**Azure Kubernetes Service (AKS).**

</details>

**Q5.7** Which service hosts web apps, REST APIs, and mobile back ends as PaaS?

<details><summary>Answer</summary>

**Azure App Service.**

</details>

**Q5.8** A file uploaded to storage must trigger a small piece of code. Which
service fits best?

<details><summary>Answer</summary>

**Azure Functions** (event-driven, serverless).

</details>

---

## 6. Networking

Brochure chapter: [6. Networking](BROCHURE_AZ-900.md#6-networking)

**Q6.1** What is used to divide a virtual network into IP address ranges?

<details><summary>Answer</summary>

**Subnets.**

</details>

**Q6.2** Which feature connects two VNets privately over the Microsoft
backbone?

<details><summary>Answer</summary>

**VNet peering.**

</details>

**Q6.3** Which resource filters inbound and outbound traffic with allow/deny
rules on subnets or network interfaces?

<details><summary>Answer</summary>

**Network security group (NSG).**

</details>

**Q6.4** A company needs a connection to Azure that does **not** travel over
the public internet. Which service fits?

- A. VPN Gateway
- B. ExpressRoute
- C. VNet peering

<details><summary>Answer</summary>

**B. ExpressRoute.** VPN Gateway uses an encrypted tunnel over the internet.

</details>

**Q6.5** A remote employee must connect their laptop securely to an Azure VNet.
Which VPN type is this?

<details><summary>Answer</summary>

**Point-to-site VPN** (VPN Gateway).

</details>

**Q6.6** An office network must connect to an Azure VNet through an encrypted
tunnel over the internet. Which VPN type is this?

<details><summary>Answer</summary>

**Site-to-site VPN** (VPN Gateway).

</details>

**Q6.7** You want an Azure SQL Database to be reachable through a private IP
address inside your VNet. What should you use?

<details><summary>Answer</summary>

**A private endpoint** (Azure Private Link).

</details>

**Q6.8** Which service hosts your DNS domains in Azure?

<details><summary>Answer</summary>

**Azure DNS.**

</details>

---

## 7. Storage

Brochure chapter: [7. Storage](BROCHURE_AZ-900.md#7-storage)

**Q7.1** Which storage service is best for images, videos, and backups
(unstructured data)?

<details><summary>Answer</summary>

**Blob Storage.**

</details>

**Q7.2** You want to replace an on-premises file server with fully managed SMB
file shares. Which service fits?

<details><summary>Answer</summary>

**Azure Files.**

</details>

**Q7.3** Which storage service is used to pass messages between application
components?

<details><summary>Answer</summary>

**Queue Storage.**

</details>

**Q7.4** Data is almost never read and must be stored at the lowest cost. A
retrieval delay of several hours is acceptable. Which tier fits?

<details><summary>Answer</summary>

**Archive.** It is offline and must be rehydrated before reading.

</details>

**Q7.5** What are the minimum storage periods for the Cool, Cold, and Archive
tiers?

<details><summary>Answer</summary>

**30, 90, and 180 days.**

</details>

**Q7.6** Which redundancy option keeps three copies across three availability
zones in one region?

- A. LRS
- B. ZRS
- C. GRS

<details><summary>Answer</summary>

**B. ZRS.**

</details>

**Q7.7** Which redundancy option protects against both a datacenter failure
and a region failure?

<details><summary>Answer</summary>

**GZRS** (or RA-GZRS for read access to the secondary).

</details>

**Q7.8** What does "RA" mean in RA-GRS?

<details><summary>Answer</summary>

**Read access** to the data in the secondary region at any time.

</details>

**Q7.9** A company must move 200 TB to Azure but has a slow internet
connection. Which tool fits?

<details><summary>Answer</summary>

**Azure Data Box** (physical device shipped to Microsoft).

</details>

**Q7.10** Which command-line tool copies files to and from storage accounts?

<details><summary>Answer</summary>

**AzCopy.**

</details>

---

## 8. Identity, access, and security

Brochure chapter:
[8. Identity, access, and security](BROCHURE_AZ-900.md#8-identity-access-and-security)

**Q8.1** What is the difference between authentication and authorization?

<details><summary>Answer</summary>

**Authentication** proves **who** you are. **Authorization** decides **what**
you can do.

</details>

**Q8.2** What is Microsoft's cloud identity and access service called?

<details><summary>Answer</summary>

**Microsoft Entra ID** (formerly Azure Active Directory).

</details>

**Q8.3** A password plus a code from a phone app is an example of:

<details><summary>Answer</summary>

**Multifactor authentication (MFA):** something you know + something you
have.

</details>

**Q8.4** Users must complete MFA only when signing in from outside the
company network. Which feature fits?

<details><summary>Answer</summary>

**Conditional Access.**

</details>

**Q8.5** Partners from another company must access your apps with their own
work accounts. Which feature fits?

<details><summary>Answer</summary>

**External identities (B2B collaboration).**

</details>

**Q8.6** Which built-in role can manage resources but **cannot** grant access
to others?

- A. Owner
- B. Contributor
- C. Reader

<details><summary>Answer</summary>

**B. Contributor.**

</details>

**Q8.7** What are the three principles of Zero Trust?

<details><summary>Answer</summary>

**Verify explicitly, use least privilege access, assume breach.**

</details>

**Q8.8** Which is the innermost layer of defense in depth?

<details><summary>Answer</summary>

**Data.** The outermost layer is physical security.

</details>

**Q8.9** Which service provides security posture management and threat
protection across Azure, hybrid, and multi-cloud?

<details><summary>Answer</summary>

**Microsoft Defender for Cloud.**

</details>

**Q8.10** Which service provides managed domain join, Group Policy, and LDAP
without running your own domain controllers?

<details><summary>Answer</summary>

**Microsoft Entra Domain Services.**

</details>

---

## 9. Cost management

Brochure chapter: [9. Cost management](BROCHURE_AZ-900.md#9-cost-management)

**Q9.1** Which data transfer is usually free: inbound or outbound?

<details><summary>Answer</summary>

**Inbound.** Outbound data transfer is usually charged.

</details>

**Q9.2** You want to estimate the monthly cost of a new solution **before**
deploying it. Which tool fits?

<details><summary>Answer</summary>

**Pricing calculator.**

</details>

**Q9.3** You want to analyze actual spending and get an alert when spending
reaches 80% of a budget. Which tool fits?

<details><summary>Answer</summary>

**Microsoft Cost Management** (budgets and alerts).

</details>

**Q9.4** How can you group resources by cost center for cost reports?

<details><summary>Answer</summary>

**Tags** (name/value pairs, for example `CostCenter = Finance`).

</details>

**Q9.5** A company already owns Windows Server licenses and wants to reuse them
in Azure. Which benefit applies?

<details><summary>Answer</summary>

**Azure Hybrid Benefit.**

</details>

**Q9.6** A VM will run continuously for three years. Which purchase option
gives a large discount?

<details><summary>Answer</summary>

**Azure Reservations** (1- or 3-year commitment). A savings plan for compute
is another commitment-based option.

</details>

**Q9.7** Which VMs are cheap because they use spare capacity but can be
evicted at any time?

<details><summary>Answer</summary>

**Spot VMs.**

</details>

**Q9.8** What is the current status of the TCO calculator, according to the
official Microsoft Learn lesson?

<details><summary>Answer</summary>

**It has been retired.** Historically it compared on-premises costs with
Azure costs.

</details>

**Q9.9** Name three factors that affect Azure costs.

<details><summary>Answer</summary>

Any three of: **resource type and size, consumption, region, bandwidth
(outbound traffic), purchase model, licensing, Marketplace services.**

</details>

---

## 10. Governance and compliance

Brochure chapter:
[10. Governance and compliance](BROCHURE_AZ-900.md#10-governance-and-compliance)

**Q10.1** Resources may only be created in the West Europe region. Which
service enforces this?

- A. Azure RBAC
- B. Azure Policy
- C. Resource lock

<details><summary>Answer</summary>

**B. Azure Policy.** RBAC controls who can act; Policy controls what is
allowed.

</details>

**Q10.2** What is a group of policies managed together called?

<details><summary>Answer</summary>

**A policy initiative.**

</details>

**Q10.3** A resource must be modifiable but must never be deleted by mistake.
Which lock fits?

<details><summary>Answer</summary>

**CanNotDelete (Delete) lock.**

</details>

**Q10.4** With a ReadOnly lock, can you modify or delete the resource?

<details><summary>Answer</summary>

**Neither.** You can only read it.

</details>

**Q10.5** True or false: a user with the Owner role can delete a locked
resource without removing the lock.

<details><summary>Answer</summary>

**False.** The lock must be removed first, even by an Owner.

</details>

**Q10.6** Which service helps discover, classify, and govern data across
environments?

<details><summary>Answer</summary>

**Microsoft Purview.**

</details>

**Q10.7** Where can you download Microsoft's audit reports and compliance
documents?

<details><summary>Answer</summary>

**Service Trust Portal.**

</details>

**Q10.8** True or false: a policy assigned to a subscription applies to the
resource groups in that subscription.

<details><summary>Answer</summary>

**True.** Policies are inherited by child scopes.

</details>

---

## 11. Managing and deploying resources

Brochure chapter:
[11. Managing and deploying resources](BROCHURE_AZ-900.md#11-managing-and-deploying-resources)

**Q11.1** Which tool is a browser-based shell that supports Bash and
PowerShell and is already authenticated?

<details><summary>Answer</summary>

**Azure Cloud Shell.**

</details>

**Q11.2** Which cross-platform command-line tool uses commands starting with
`az`?

<details><summary>Answer</summary>

**Azure CLI.**

</details>

**Q11.3** Which layer receives and processes every request, whether it comes
from the portal, CLI, PowerShell, or an SDK?

<details><summary>Answer</summary>

**Azure Resource Manager (ARM).**

</details>

**Q11.4** What is infrastructure as code?

<details><summary>Answer</summary>

**Describing infrastructure in files** so it can be deployed the same way
every time, instead of manual clicks.

</details>

**Q11.5** ARM templates are written in which format?

<details><summary>Answer</summary>

**JSON.**

</details>

**Q11.6** Which simpler language compiles to ARM templates?

<details><summary>Answer</summary>

**Bicep.**

</details>

**Q11.7** Give two benefits of ARM templates.

<details><summary>Answer</summary>

Any two of: **declarative, repeatable, orchestrated, modular,
source-controlled.**

</details>

**Q11.8** Which tool lets you check and manage resources from a phone?

<details><summary>Answer</summary>

**Azure mobile app.**

</details>

---

## 12. Monitoring

Brochure chapter: [12. Monitoring](BROCHURE_AZ-900.md#12-monitoring)

**Q12.1** Which service gives personalized recommendations on reliability,
security, performance, cost, and operational excellence?

<details><summary>Answer</summary>

**Azure Advisor.**

</details>

**Q12.2** You want to know whether an Azure outage is affecting the services
and regions you use. Which service fits?

<details><summary>Answer</summary>

**Azure Service Health.**

</details>

**Q12.3** Which Service Health component shows the health of **your
individual** resources?

- A. Azure status
- B. Service Health
- C. Resource Health

<details><summary>Answer</summary>

**C. Resource Health.**

</details>

**Q12.4** Which component gives a global view of all Azure services in all
regions?

<details><summary>Answer</summary>

**Azure status.**

</details>

**Q12.5** Which service collects metrics and logs from Azure and on-premises
resources?

<details><summary>Answer</summary>

**Azure Monitor.**

</details>

**Q12.6** Where do you write KQL queries on collected log data?

<details><summary>Answer</summary>

**Log Analytics.**

</details>

**Q12.7** You want to be notified when CPU usage stays above 90%. What do you
configure?

<details><summary>Answer</summary>

**An Azure Monitor alert.**

</details>

**Q12.8** Which service monitors the performance and usage of web
applications?

<details><summary>Answer</summary>

**Application Insights.**

</details>

---

## Final mixed review

Questions that mix several chapters, like scenario questions.

**M1** Match each need with a service: (a) restrict allowed VM sizes,
(b) give a user read-only access, (c) prevent deletion of a storage account.

<details><summary>Answer</summary>

(a) **Azure Policy**, (b) **Azure RBAC (Reader)**, (c) **Resource lock
(CanNotDelete)**.

</details>

**M2** Match each need with a tool: (a) estimate future costs, (b) track
current costs, (c) get cost-saving recommendations.

<details><summary>Answer</summary>

(a) **Pricing calculator**, (b) **Microsoft Cost Management**, (c) **Azure
Advisor**.

</details>

**M3** Which pair protects against a datacenter failure: availability zones
and ZRS, or region pairs and GRS?

<details><summary>Answer</summary>

**Availability zones and ZRS.** Region pairs and GRS protect against a region
failure.

</details>

**M4** A web app is moved from a VM to Azure App Service. How does the
customer's responsibility change?

<details><summary>Answer</summary>

**It decreases.** The move is from IaaS to PaaS, so Microsoft now manages the
OS and runtime.

</details>

**M5** Is this statement correct? "Azure Service Health gives
recommendations to reduce costs."

<details><summary>Answer</summary>

**No.** Recommendations come from **Azure Advisor**. Service Health reports
Azure outages and maintenance.

</details>

**M6** A company wants a private, dedicated connection from its datacenter to
Azure and wants to manage its on-premises servers from the Azure portal.
Which two services fit?

<details><summary>Answer</summary>

**ExpressRoute** (private connection) and **Azure Arc** (management of
non-Azure servers).

</details>
