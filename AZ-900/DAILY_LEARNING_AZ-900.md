# AZ-900 - Learn a Little Every Day

## Your timeline

**Start:** November 4, 2026. **Exam:** December 16, 2026.

The recommended route is **21 days**, finishing the first learning cycle on
**November 24**. Aim for 60-75 minutes a day. There is also a more demanding
14-day route finishing on November 17. These are preparation targets, not
guarantees of readiness or passing. Use the remaining weeks for spaced review
and weak areas rather than postponing new learning until December.

This is a beginner-friendly course, not just a reading schedule. Each day has
a short lesson, a practical example, recall questions, and an answer check.
No Azure subscription, paid resources, programming, or deployments are required.
Paper diagrams and spoken explanations are enough for the exercises here.

**Source status, November 4, 2026:** this course organizes the repository's
[study guide](Guide_revision_AZ-900.md) and [glossary](GLOSSARY_AZ-900.md).
The local guide is a secondary, AI-generated reference. The current official
exam blueprint has not been independently retrieved and verified in this
environment. This document does not confirm its date, domain weights, complete
objective list, or change log. The [official Microsoft study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900)
remains the authority. Product examples and supporting terms are not automatically
explicit exam objectives.

## How to study each day

| Time | Activity |
|---|---|
| 10 minutes | Without notes, recall yesterday's lesson and revisit one topic from three or seven days ago, when available. |
| 25 minutes | Read today's lesson. Use its glossary link only when a term needs clarification. |
| 15 minutes | Work through the example and answer both recall questions before opening the answers. |
| 10 minutes | Explain the topic aloud and write one mistake or uncertainty in the review log. |
| Optional 15 minutes | Read the matching study-guide section or practise a new scenario. |

Mark a day complete only when you can explain the main distinction without
reading. If you miss a day, use the next session to catch up; do not skip a whole
topic to preserve a date. If two lessons feel too heavy together, keep the
21-day route. There is still a buffer before the exam.

## Daily progress

The dates below belong to the recommended 21-day route.

| Done | Day | Date in 2026 | Focus |
|---|---|---|---|
| [ ] | 1 | November 4 | [Cloud models and spending](#day-1---cloud-models-and-spending) |
| [ ] | 2 | November 5 | [Service models and responsibility](#day-2---service-models-and-responsibility) |
| [ ] | 3 | November 6 | [Cloud benefits and resilience](#day-3---cloud-benefits-and-resilience) |
| [ ] | 4 | November 7 | [Azure architecture and hierarchy](#day-4---azure-architecture-and-hierarchy) |
| [ ] | 5 | November 8 | [Virtual machines and availability](#day-5---virtual-machines-and-availability) |
| [ ] | 6 | November 9 | [Applications, containers, and functions](#day-6---applications-containers-and-functions) |
| [ ] | 7 | November 10 | [First checkpoint](#day-7---first-checkpoint) |
| [ ] | 8 | November 11 | [Virtual networks and DNS](#day-8---virtual-networks-and-dns) |
| [ ] | 9 | November 12 | [Connections and endpoints](#day-9---connections-and-endpoints) |
| [ ] | 10 | November 13 | [Storage services and tiers](#day-10---storage-services-and-tiers) |
| [ ] | 11 | November 14 | [Storage redundancy](#day-11---storage-redundancy) |
| [ ] | 12 | November 15 | [Transfer and migration](#day-12---transfer-and-migration) |
| [ ] | 13 | November 16 | [Identity and authentication](#day-13---identity-and-authentication) |
| [ ] | 14 | November 17 | [Second checkpoint](#day-14---second-checkpoint) |
| [ ] | 15 | November 18 | [Permissions and security](#day-15---permissions-and-security) |
| [ ] | 16 | November 19 | [Cost management](#day-16---cost-management) |
| [ ] | 17 | November 20 | [Governance and compliance](#day-17---governance-and-compliance) |
| [ ] | 18 | November 21 | [Deployment and administration](#day-18---deployment-and-administration) |
| [ ] | 19 | November 22 | [Monitoring and health](#day-19---monitoring-and-health) |
| [ ] | 20 | November 23 | [Mixed scenarios and gap repair](#day-20---mixed-scenarios-and-gap-repair) |
| [ ] | 21 | November 24 | [Readiness review](#day-21---readiness-review) |

## Week 1 - Understand the cloud before memorizing services

### Day 1 - Cloud models and spending

**Learn:** cloud computing delivers resources on demand over a network.
Self-service provisioning, pooled infrastructure, network access, metered usage,
and rapid capacity changes avoid waiting for every physical purchase.
**Public cloud** uses a provider's shared platform with customer isolation;
it does not make customer data public. **Private cloud** is dedicated to one
organization. **Hybrid cloud** integrates on-premises/private infrastructure
with public cloud. **Multicloud** uses more than one cloud provider.

**CapEx** means upfront assets such as servers. **OpEx** means ongoing operating
spending. Consumption pricing can charge for allocated capacity, storage,
requests, or transfers; idle resources are not necessarily free.

**Example:** a retailer keeps a legacy warehouse system locally and connects
it to an Azure storefront. This is hybrid. Adding another public cloud would
also make the environment multicloud.

**Recall:** 1. Is a public-cloud database automatically public?
2. Is an unused but provisioned VM necessarily free?

<details>
<summary>Check your answers</summary>

1. No. Public cloud describes the provider model; access still needs controls.
2. No. Allocated resources can be billable even without useful work.

</details>

**Reference:** [Cloud concepts](GLOSSARY_AZ-900.md#1-cloud-concepts).

### Day 2 - Service models and responsibility

**Learn:** with **IaaS**, Microsoft manages physical infrastructure while you
manage the guest OS and installed applications. With **PaaS**, the provider
also manages the platform and underlying OS; you manage your code, data, and
configuration. With **SaaS**, you use a complete application and still manage
your users, data handling, and access choices.

Think of a ladder: VM -> managed web application -> finished business software.
Moving up reduces infrastructure administration; it does not eliminate customer
responsibility. On-premises, your organization also operates the physical layer.

**Example:** choose a VM for a legacy program requiring OS administration,
App Service for custom web code without guest OS management, and Microsoft 365
for a ready-to-use productivity application.

**Recall:** 1. Who patches the guest OS of an Azure VM?
2. Does SaaS remove the need to manage user access?

<details>
<summary>Check your answers</summary>

1. The customer; an Azure VM is IaaS.
2. No. The provider operates the software, but the customer still manages access
   and how its data is used.

</details>

**Exercise:** draw a responsibility table with rows for hardware, OS,
application code, data, and access; compare on-premises, IaaS, PaaS, and SaaS.
**Reference:** [Shared responsibility](GLOSSARY_AZ-900.md#shared-responsibility-quick-comparison).

### Day 3 - Cloud benefits and resilience

**Learn:** **high availability** keeps a service accessible despite certain
failures. **Scalability** is the ability to change capacity: scale up/down
changes instance size; scale out/in changes instance count. **Elasticity**
matches capacity to demand, often through autoscaling.

**Reliability** includes operating correctly and recovering. **Backup** creates
recoverable copies; **disaster recovery** restores a service after major
disruption. Replication alone is not protection against every deletion.
Predictability improves cost/performance planning; agility speeds change.
Manageability, security, and governance help operate resources consistently,
but require suitable customer choices.

**Example:** adding web instances during a sale is scaling out. Restoring deleted
data from a backup is recovery, not scaling. Two instances in one failure area
do not guarantee regional disaster protection.

**Recall:** 1. Adding RAM is scale up or scale out?
2. Why is copying data to another region not always a backup?

<details>
<summary>Check your answers</summary>

1. Scale up: the existing instance becomes larger.
2. Replication can also copy logical errors or deletions; recoverable historical
   copies and recovery procedures solve a different problem.

</details>

**Reference:** [Cloud benefits and recovery terms](GLOSSARY_AZ-900.md#1-cloud-concepts).

### Day 4 - Azure architecture and hierarchy

**Learn:** a **datacenter** is a physical facility. A **region** contains one or
more datacenters connected through low-latency networking. **Availability zones**
are separate datacenter groupings within a region, with independent power,
cooling, and networking. A service must support an appropriate deployment to
benefit from multiple zones. Some regions are paired; pairing is not automatic
workload replication. Sovereign environments address particular government or
regulatory needs.

The resource hierarchy is **management groups -> subscriptions -> resource
groups -> resources**. A tenant is an identity boundary, not a subscription.
A resource group is a logical lifecycle container; its metadata location does
not force every contained resource into that region.

**Example:** use a management group to apply governance across several
subscriptions, not an availability zone or resource group.

**Recall:** 1. Does a resource group protect against a datacenter outage?
2. Where would you organize multiple subscriptions?

<details>
<summary>Check your answers</summary>

1. No. It is an organizational container, not physical redundancy.
2. In management groups, which support inherited governance and access.

</details>

**Reference:** [Azure architecture](GLOSSARY_AZ-900.md#2-azure-architecture-and-resource-organization).

### Day 5 - Virtual machines and availability

**Learn:** a VM provides guest OS control. Its **image** is a starting template;
its **size/SKU** affects capacity and cost. Supporting resources include an OS
disk, optional data disks, a network interface, a VNet/subnet, IP configuration,
and suitable access controls. Public IPs are not required on every VM.

**Virtual Machine Scale Sets** manage groups of VM instances and support scaling.
**Availability sets** distribute instances across fault domains and update
domains to reduce correlated hardware or maintenance impact. They are not
availability zones. **Azure Virtual Desktop** delivers remote Windows desktops
and applications rather than ordinary web hosting.

**Example:** a legacy app needs custom OS software: choose a VM. A growing fleet
of similar VMs suggests scale sets; remote employee desktops suggest AVD.

**Recall:** 1. Does an availability set automatically spread VMs across regions?
2. Which service manages and scales a VM fleet?

<details>
<summary>Check your answers</summary>

1. No. Fault/update domain separation is not multi-region deployment.
2. Virtual Machine Scale Sets; availability sets address placement, not fleet scaling.

</details>

**Reference:** [Compute](GLOSSARY_AZ-900.md#3-compute-and-application-hosting).

### Day 6 - Applications, containers, and functions

**Learn:** **App Service** hosts web apps and APIs without direct guest OS
administration; an App Service plan determines available compute/capabilities.
**Containers** package application code and dependencies and generally share
the host kernel. A container image is a template for running containers.

**ACI** runs containers without managing an orchestration cluster.
**Container Apps** provides managed application hosting with event-driven
scaling. **AKS** provides managed Kubernetes orchestration, with continuing
customer workload/configuration duties. **Functions** runs event-triggered code:
HTTP calls, timers, messages, or storage events. Serverless still uses servers;
execution, scaling, and billing depend on the plan.

**Example:** host a website in App Service, process uploaded images with
Functions, and choose AKS when Kubernetes orchestration is a requirement.

**Recall:** 1. Must a timer-triggered task run on a customer-managed VM?
2. Is AKS the simplest answer whenever the word "container" appears?

<details>
<summary>Check your answers</summary>

1. No. Functions can run timer-triggered code without direct server management.
2. No. ACI or Container Apps may fit better when cluster orchestration is unnecessary.

</details>

**Reference:** [Hosting options](GLOSSARY_AZ-900.md#3-compute-and-application-hosting).

### Day 7 - First checkpoint

**Learn by retrieval:** without notes, draw the Azure resource hierarchy and
the shared responsibility table. Then explain five pairs: public/private,
IaaS/PaaS, scale up/out, availability/recovery, and availability set/zone.
Revisit days 1-6 only after attempting the explanations.

**Example exercise:** design a small online shop on paper. Explain why its
custom website could use App Service, when its legacy component might need a
VM, and how extra instances could handle demand. State what your diagram does
not yet explain about networking, data protection, or permissions.

**Recall:** 1. Can an organization retain security duties while using PaaS?
2. Does deploying one VM in Azure guarantee high availability?

<details>
<summary>Check your answers</summary>

1. Yes: data, identities, access, code, and configuration still need management.
2. No. Availability requires a suitable design, not just a cloud location.

</details>

**Checkpoint:** mark each previous day green (explain and apply), amber
(recognize but confuse), or red (cannot explain). Repair red topics first.
These colors are study aids, not Microsoft scoring categories.

## Week 2 - Connect, store, move, and identify

### Day 8 - Virtual networks and DNS

**Learn:** a **VNet** is a logical private network; **subnets** divide its address
space. IP addresses identify interfaces or endpoints. CIDR, such as
`10.0.0.0/16`, describes an address range; advanced subnet arithmetic is not the
goal here. **NSGs** allow or deny inbound/outbound traffic at subnet or NIC scope.
They are not application permissions.

**VNet peering** connects VNets through Microsoft's network; it is not
automatically transitive. **DNS** resolves names into records such as IP
addresses. Azure DNS hosts zones: public zones support public resolution;
private zones resolve names for linked VNets according to configuration.
DNS hosting does not buy a domain or authorize network access.

**Example:** NSG rules can filter a VM's incoming traffic; a private DNS zone
can resolve an internal name. Neither grants a user Azure management permissions.

**Recall:** 1. If A peers with B and B with C, is A automatically connected to C?
2. Is DNS a web hosting service?

<details>
<summary>Check your answers</summary>

1. No. Peering is not transitive by default.
2. No. Name resolution and hosting an application are different functions.

</details>

**Reference:** [Networking](GLOSSARY_AZ-900.md#4-networking).

### Day 9 - Connections and endpoints

**Learn:** **VPN Gateway** supports encrypted tunnels, commonly over the public
internet. Site-to-site connects networks; point-to-site connects an individual
client; VNet-to-VNet VPN connects Azure networks through gateways.
**ExpressRoute** uses private connectivity through a provider rather than the
public internet; private does not automatically mean end-to-end encrypted.

A **public endpoint** uses a public address but can still restrict access.
A **private endpoint** creates a private VNet IP for a supported service through
Private Link. A **service endpoint** extends a subnet's identity to a supported
service without giving that service a private VNet IP.

**Example:** connect a small office with an internet VPN. Choose ExpressRoute
when provider-based private connectivity is required. Use a private endpoint
when a supported PaaS service needs a private address in your VNet.

**Recall:** 1. Does a private endpoint replace authentication?
2. Which option is an encrypted internet tunnel: VPN or ExpressRoute?

<details>
<summary>Check your answers</summary>

1. No. Private connectivity does not replace identity and authorization controls.
2. VPN. ExpressRoute is private connectivity, not implicitly end-to-end encryption.

</details>

**Reference:** [Connections and endpoints](GLOSSARY_AZ-900.md#4-networking).

### Day 10 - Storage services and tiers

**Learn:** **Blob Storage** holds objects such as images; **Azure Files** provides
managed SMB/NFS shares; **Queue Storage** holds messages; **Table Storage** holds
nonrelational entities; **Managed Disks** provide VM block storage.
Structured data follows a defined schema, semi-structured data includes formats
such as JSON, and unstructured data includes images or videos.

A storage account provides a namespace and configuration. Standard GPv2 and
premium account types support different services/performance/redundancy choices.
**Hot, Cool, and Cold** are online blob tiers with different storage/access
cost trade-offs. **Archive** is offline and requires rehydration before normal
reading. Minimum billable durations and early deletion charges can apply.

**Example:** place website images in Blob Storage and shared team files in
Azure Files. Choose an online tier for rarely used files that must open quickly.

**Recall:** 1. Is Archive appropriate for immediate retrieval?
2. Is a blob container the same as an application container?

<details>
<summary>Check your answers</summary>

1. No. Rehydration takes time; choose a suitable online tier.
2. No. One groups stored objects; the other runs packaged application code.

</details>

**Reference:** [Storage](GLOSSARY_AZ-900.md#5-storage-and-migration).

### Day 11 - Storage redundancy

**Learn:** **LRS** keeps synchronous copies in one datacenter in the primary
region. **ZRS** distributes synchronous copies across three availability zones
in that region. **GRS** combines a locally redundant primary with asynchronous
replication to a secondary region. **GZRS** uses a zone-redundant primary plus
asynchronous replication to a secondary region.

**RA-GRS** and **RA-GZRS** add read access to the secondary region. Asynchronous
replication can lag: failover may involve data loss. Geographic redundancy
does not independently provide historical recovery from every logical mistake.

**Example:** if regional recovery is needed, LRS alone is insufficient. If
reading the secondary copy before failover is a requirement, notice the
**RA** part rather than choosing ordinary GRS by name.

**Recall:** 1. Does ZRS replicate into a second region?
2. Can geo-replication guarantee zero data loss after primary-region failure?

<details>
<summary>Check your answers</summary>

1. No. Its copies are across zones in one region.
2. No. Replication to the secondary is asynchronous and can lag.

</details>

**Exercise:** draw the primary and secondary regions for all six options.
**Reference:** [Storage redundancy](GLOSSARY_AZ-900.md#5-storage-and-migration).

### Day 12 - Transfer and migration

**Learn:** **AzCopy** is a command-line copying utility; **Storage Explorer**
is a graphical management tool. **Azure File Sync** synchronizes Azure Files
with Windows servers; cloud tiering keeps frequently used content locally and
fetches other files when needed.

**Azure Migrate** helps discover, assess, and migrate workloads. **Data Box**
uses a physical device for bulk transfer when network movement is impractical.
Assessing servers, synchronizing file shares, and shipping data are different
tasks. Lifecycle rules can move or delete blobs based on conditions. A shared
access signature (SAS) grants limited delegated storage access; protect its URL
as a secret.

**Example:** assess an office's servers with Migrate, ship a large initial
dataset with Data Box, and synchronize a Windows file server using File Sync.

**Recall:** 1. Which utility fits a scripted storage copy?
2. Does Data Box decide which VM sizes a migrated application needs?

<details>
<summary>Check your answers</summary>

1. AzCopy; Storage Explorer is the graphical alternative.
2. No. Physical data transport is not workload discovery or assessment.

</details>

**Reference:** [Migration and transfer](GLOSSARY_AZ-900.md#5-storage-and-migration).

### Day 13 - Identity and authentication

**Learn:** **Microsoft Entra ID** manages cloud identities and application access;
it was formerly Azure AD. Traditional **AD DS** is not the same service.
**Entra Domain Services** provides managed domain capabilities such as domain
join, LDAP, Kerberos, and NTLM for compatible workloads; recognize Group Policy
as domain configuration, not Azure Policy.

**Authentication** proves identity; **authorization** determines allowed actions.
**SSO** reduces repeated sign-ins across integrated apps. **MFA** combines factor
categories: knowledge, possession, and inherence. Passwordless methods include
security keys and Windows Hello for Business. External identities support
partners, guests, and customer scenarios. **Conditional Access** evaluates
signals and can require MFA or a compliant device; licensing can matter.

**Example:** a partner signs in to collaborate. A Conditional Access policy may
require MFA, but resource permissions must still be assigned separately.

**Recall:** 1. Are two passwords two MFA factor categories?
2. Which managed service supports a legacy application requiring LDAP?

<details>
<summary>Check your answers</summary>

1. No. Both are knowledge factors.
2. Entra Domain Services, not Entra ID alone.

</details>

**Reference:** [Identity](GLOSSARY_AZ-900.md#6-identity-access-and-security).

### Day 14 - Second checkpoint

**Learn by retrieval:** redraw a VNet with subnets, a private endpoint, and an
office connection. Explain where DNS, network filtering, and identity checks
apply. Recreate your six-option storage redundancy diagram without notes.

**Example exercise:** an organization needs shared Windows files, immediate
retrieval, partner sign-in, and an encrypted office connection over the internet.
Explain Azure Files, an online storage choice, external identities with suitable
access controls, and VPN Gateway. Do not select Archive just because data is
rarely accessed.

**Recall:** 1. What is the distinction between File Sync and Data Box?
2. Does successful sign-in mean a guest may delete any resource?

<details>
<summary>Check your answers</summary>

1. File Sync synchronizes file shares; Data Box transports bulk data physically.
2. No. Authentication does not grant unrestricted authorization.

</details>

**Checkpoint:** revisit red/amber topics from days 8-13 and one weak topic from
week 1. In the 21-day route, this is a progress check, not the end of preparation:
costs, governance, deployment, and monitoring are still ahead.

## Week 3 - Control, operate, and combine your knowledge

### Day 15 - Permissions and security

**Learn:** an **Azure RBAC** assignment combines a security principal, role
definition, and scope. **Reader** views resources; **Contributor** manages
resources but does not grant Azure RBAC access; **Owner** also assigns roles;
**User Access Administrator** manages access without general resource
administration. Assignments can inherit down the resource hierarchy.

Azure roles differ from Entra directory roles, and management-plane permissions
do not automatically grant all data access. **Least privilege** grants only the
needed access. **Zero Trust** means verify explicitly, use least privilege, and
assume breach. **Defense in depth** layers physical, identity, perimeter, network,
compute, application, and data controls. **Defender for Cloud** supports security
posture management and workload protection; some plans are paid.

**Example:** give an auditor Reader rather than Owner. Use Defender for Cloud
to identify security improvements, not as a substitute for access decisions.

**Recall:** 1. Which of Contributor and Owner can assign Azure RBAC roles?
2. Does being inside the corporate network automatically establish trust?

<details>
<summary>Check your answers</summary>

1. Owner. Contributor alone does not grant role-assignment permission.
2. No. Zero Trust requires explicit verification rather than location-based trust.

</details>

**Reference:** [Access and security](GLOSSARY_AZ-900.md#6-identity-access-and-security).

### Day 16 - Cost management

**Learn:** cost depends on service, size/tier, duration, region, licensing,
storage, operations, and network transfers. **Ingress** means inbound traffic;
**egress** means outbound. Check the actual pricing path rather than assuming
all traffic is free. The **Pricing calculator** estimates a proposed deployment;
**Cost Management** analyzes actual/forecast spending. **Budgets** trigger
notifications, not automatic shutdown. **Tags** help allocate costs but are not
security boundaries or automatically inherited.

Rightsizing, deallocation, reservations, savings plans, Spot capacity, and
eligible Hybrid Benefit licenses can reduce costs under different conditions.
Deallocated VM compute stops being allocated, but disks can remain billable.
**TCO** includes the broader ownership cost. The former **TCO calculator is
retired**, as documented in the glossary's official Learn source; do not follow
the local guide's outdated tool description.

**Example:** estimate a new app with the calculator, analyze its actual bill
in Cost Management, and use tags to group spending by team.

**Recall:** 1. Will a budget by itself stop an overspending VM?
2. Is Spot suitable for a workload that cannot tolerate eviction?

<details>
<summary>Check your answers</summary>

1. No. It alerts; a shutdown would require a separate mechanism.
2. No. Spot uses spare capacity and Azure can evict it.

</details>

**Reference:** [Costs and TCO correction](GLOSSARY_AZ-900.md#7-cost-management-and-service-commitments).

### Day 17 - Governance and compliance

**Learn:** **Azure Policy** evaluates/enforces resource configuration rules:
approved regions, required settings, or tags. A definition describes the rule;
an assignment applies it at a scope; an initiative groups definitions.
Recognize audit, deny, modify, and deployIfNotExists. Remediation can require
permissions and a separate task.

**Resource locks** guard management operations: **CanNotDelete** allows changes
but blocks deletion; **ReadOnly** blocks management changes and can affect some
operations that appear read-like. Locks can inherit, can be removed by authorized
users, and are not backups or universal data-plane protection.
**Purview** supports data discovery, governance, protection, and compliance.
The **Service Trust Portal** provides trust/compliance reports; provider
certifications do not automatically make your application compliant.

**Example:** RBAC gives a developer deployment permission; Policy can still
deny a VM in an unapproved region. A lock solves accidental deletion instead.

**Recall:** 1. Which tool restricts deployment regions: tags, RBAC, or Policy?
2. Which tool helps discover and classify sensitive data?

<details>
<summary>Check your answers</summary>

1. Policy. Tags label resources; RBAC determines identity permissions.
2. Purview; resource locks protect management operations, not data classification.

</details>

**Reference:** [Governance](GLOSSARY_AZ-900.md#8-governance-and-compliance).

### Day 18 - Deployment and administration

**Learn:** the **portal** is a graphical interface. **Azure CLI** uses `az`
commands; **Azure PowerShell** uses PowerShell modules/cmdlets. **Cloud Shell**
is a hosted Bash/PowerShell environment for using tools, not a rival management
API. Resources created through it can incur charges.

**ARM** is Azure's management/deployment layer. **ARM templates** are declarative
JSON definitions; **Bicep** is a concise language that compiles into ARM templates.
**IaC** makes infrastructure versionable, reviewable, and repeatable.
Declarative files describe desired state; imperative instructions describe steps.
Idempotence means repeating an operation need not cause extra changes once
the desired state is reached. **Arc** extends supported Azure management to
resources on-premises or in other clouds; it does not automatically migrate them.

**Example:** review a Bicep file before deploying the same architecture into
test and production. Use Arc to manage a supported server that remains on-premises.

**Recall:** 1. Is Cloud Shell the same thing as Azure CLI?
2. How do ARM and an ARM template differ?

<details>
<summary>Check your answers</summary>

1. No. Cloud Shell is an environment in which CLI or PowerShell can run.
2. ARM is the management layer; a template describes resources to deploy through it.

</details>

**Reference:** [Deployment](GLOSSARY_AZ-900.md#9-deployment-and-administration).

### Day 19 - Monitoring and health

**Learn:** **Advisor** recommends improvements in cost, security, reliability,
performance, and operational excellence. **Service Health** provides personalized
service incidents, maintenance, and advisories. **Resource Health** concerns one
resource; **Azure Status** is a broader public status view.

**Monitor** collects, analyzes, and acts on telemetry. **Metrics** are numerical
time series; **logs** are detailed records. **Log Analytics** queries logs in
workspaces, commonly using KQL. **Alert rules** evaluate conditions; **action
groups** define notifications/actions. **Application Insights** investigates
application requests, dependencies, failures, and performance. Dashboards and
workbooks visualize data; the Activity Log records control-plane events, not
every data access.

**Example:** investigate a slow API with Application Insights. Check relevant
provider incidents in Service Health. Ask Advisor for optimization recommendations.

**Recall:** 1. Which tool queries detailed logs?
2. Is Advisor the central platform for collecting CPU measurements?

<details>
<summary>Check your answers</summary>

1. Log Analytics. KQL is the query language, not a separate monitoring platform.
2. No. Azure Monitor handles telemetry; Advisor provides recommendations.

</details>

**Reference:** [Monitoring](GLOSSARY_AZ-900.md#10-monitoring).

### Day 20 - Mixed scenarios and gap repair

**Learn by application:** separate each scenario into compute, network, storage,
identity, governance, cost, and monitoring needs. Choose the simplest fitting
service and reject the closest alternative for a concrete reason.

**Example exercise:** a shop needs a managed website, product pictures, private
storage connectivity, deployment only in approved regions, view-only auditors,
monthly spending alerts, and slow-request diagnosis. Before reading the answers,
name one suitable service/control for each requirement and explain why it fits.

**Recall:** 1. Which seven choices fit that shop?
2. Why can Policy and RBAC both matter to the same deployment?

<details>
<summary>Check your answers</summary>

1. App Service; Blob Storage; a supported private endpoint; Azure Policy; RBAC
   Reader at the appropriate scope; Cost Management budgets/alerts; Application
   Insights. Authentication and network configuration must still be correct.
2. RBAC checks the identity's permission; Policy checks the resource's configuration.
   Passing one check does not bypass the other.

</details>

**Repair:** pick your three most frequent mistakes, reread the relevant days,
and explain a new example for each. Skim supporting recognition material only
after repairing the main groups.

### Day 21 - Readiness review

**Learn by checking gaps:** open the official study guide in your browser and
compare each applicable objective with the map below. Read its date and change
log. If it is inaccessible, explicitly leave the scope check pending; local
completion is not official coverage verification.

Use the official practice assessment linked from the
[Azure Fundamentals certification page](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/).
Attempt it without notes, then classify mistakes by concept and explain each
alternative. Allow 60-90 minutes today, splitting assessment and review into
two sessions if needed; the suggested time is not an official exam duration.

**Recall:** 1. Does repeating familiar practice answers prove readiness?
2. What should you do when you recognize a term but cannot choose its use case?

<details>
<summary>Check your answers</summary>

1. No. Use fresh reasoning and varied scenarios; memorized letters are misleading.
2. Mark it amber/red, revisit its lesson, and explain it against its nearest alternative.

</details>

**Personal readiness target:** every main group is green, no major unresolved
misconception remains, and you can explain unfamiliar scenarios without notes.
Practice results are indicators, not Microsoft's scaled exam score or a pass
guarantee. If you are not ready, the consolidation period is time for repairs.

## Coverage map for the local study materials

These are the 11 groups used by the local guide, **not a freshly verified
official objective-by-objective map**.

| Topic group | Learning days |
|---|---|
| Cloud computing | 1-2, 6 |
| Benefits of cloud services | 3 |
| Cloud service types | 2, 6 |
| Core Azure architecture | 4 |
| Compute and networking | 5-6, 8-9 |
| Storage and migration | 10-12 |
| Identity, access, and security | 13, 15 |
| Cost management | 16 |
| Governance and compliance | 17 |
| Management and deployment | 18 |
| Monitoring | 19 |

Days 7 and 14 consolidate earlier lessons; days 20-21 combine all groups.

## Optional supporting recognition

Use [glossary sections 11-12](GLOSSARY_AZ-900.md#11-ai-machine-learning-iot-and-edge)
and relevant glossary entries when these appear in examples. These topics are
**not confirmed here as separately named current exam objectives**. Recognize
their purposes; do not delay core study for implementation detail.

| Supporting theme | What to recognize |
|---|---|
| Recovery and commitments | RPO = acceptable data loss in time; RTO = restoration-time target. SLA = contractual commitment with conditions, not zero downtime. Backup and Site Recovery have different recovery roles. |
| Storage details | Account naming/endpoints, Data Lake Storage Gen2, retention and lifecycle rules; understand rather than memorize every product limit. |
| Network/security examples | Firewall, DDoS Protection, Bastion, Load Balancer, Application Gateway, Front Door, WAF; distinguish network filtering, routing, and web protection. |
| Secrets and application identities | Key Vault stores secrets/keys/certificates; managed identities reduce stored credentials but still need permissions. Encryption at rest differs from in transit. Sentinel is SIEM/SOAR, not Defender for Cloud. |
| Data and automation examples | SQL Database, Cosmos DB, PostgreSQL, Logic Apps, Container Registry; Terraform is third-party IaC, not a reason to memorize syntax. |
| AI, ML, and IoT | Prebuilt AI services versus custom ML; generative AI and Azure OpenAI; IoT Hub messaging and edge processing. Check names and lifecycles, including IoT Central, before new use. |
| Efficient design | Rightsizing, resource utilization, sustainability, and Well-Architected pillars; cloud use is not automatically efficient. |

## Faster option - 14 days

Choose this only if you can sustain **90-120 minutes a day**, including recall.
Cover the same lessons in the order below; do not stop after the first two
weeks of the standard route, which would omit management and governance.
When a lesson number appears here, ignore its date in the standard calendar.

| Date in 2026 | Complete lessons |
|---|---|
| November 4 | 1 and 2 |
| November 5 | 3 and 4 |
| November 6 | 5 and 6 |
| November 7 | 7 and repair weak topics |
| November 8 | 8 and 9 |
| November 9 | 10 and 11 |
| November 10 | 12 and 13 |
| November 11 | 14 and repair weak topics |
| November 12 | 15 |
| November 13 | 16 and 17 |
| November 14 | 18 |
| November 15 | 19 |
| November 16 | 20 |
| November 17 | 21 |

If paired lessons are not sticking, switch to one lesson per day and finish by
November 24 or shortly afterward. If you finish on November 17, use
November 18-24 for 20-30 minutes of rotating recall across all groups and repair
any red/amber topics before the consolidation schedule below.

## Keep the knowledge until December 16

After the first cycle, use **20-30 minutes most days**, with up to 60 minutes
for an assessment and its review. These are retrieval sessions, not full rereads.
If a main group is still red, replace the planned session with that lesson.
The final week prioritizes accuracy, logistics, and rest over cramming.

| Done | Date in 2026 | Review task |
|---|---|---|
| [ ] | November 25 | Recall cloud models, service types, and shared responsibility. |
| [ ] | November 26 | Redraw regions/zones and the resource hierarchy. |
| [ ] | November 27 | Choose hosting services for three different applications. |
| [ ] | November 28 | Explain peering, DNS, VPN, ExpressRoute, and endpoints. |
| [ ] | November 29 | Recreate storage services, tiers, and redundancy comparisons. |
| [ ] | November 30 | Compare identity, authentication, authorization, and RBAC roles. |
| [ ] | December 1 | Review costs, Policy, locks, deployment tools, and monitoring. |
| [ ] | December 2 | Attempt a practice assessment without notes; review mistakes separately if needed. |
| [ ] | December 3 | Repair the weakest topic from yesterday with new examples. |
| [ ] | December 4 | Repair the next weak topic and revisit it without notes. |
| [ ] | December 5 | Explain ten confusing service pairs from the glossary. |
| [ ] | December 6 | Solve a mixed shop/office migration scenario on paper. |
| [ ] | December 7 | Recheck the official study-guide date and change log; address any scope changes. |
| [ ] | December 8 | Review every remaining red/amber topic and verify progress. |
| [ ] | December 9 | Complete a final practice assessment and explain errors, not just scores. |
| [ ] | December 10 | Repair recurring misconceptions from that assessment. |
| [ ] | December 11 | Review costs, governance, access scopes, and lock limitations. |
| [ ] | December 12 | Review networking, storage, and recovery distinctions. |
| [ ] | December 13 | Explain compute choices, identity, and monitoring without notes. |
| [ ] | December 14 | Confirm booking time/time zone, identification, and current delivery/check-in requirements; try the exam sandbox. |
| [ ] | December 15 | Do a short light recall session, prepare exam materials, and rest. |
| [ ] | December 16 | Follow the provider's check-in instructions; avoid last-minute heavy study. |

For the exam interface, use the [Microsoft exam sandbox](https://aka.ms/examdemo).
Confirm current logistics on the certification/booking pages rather than
assuming question count, duration, or local check-in rules.

## Your review log

Record a mistake as a concept to repair, not just a question number.
Add rows as needed. Revisit a repaired topic roughly one, three, and seven days
later; if that falls after the exam, review it earlier instead.

| Date | Topic | My misconception | Correct distinction | Next review | Status |
|---|---|---|---|---|---|
| Example | Governance | I thought Contributor bypassed region rules. | RBAC grants actions; Policy can still deny the configuration. | Next day | Amber |
| | | | | | |

## Completion checklist

- [ ] I completed all 21 lessons, using either schedule.
- [ ] I can explain all 11 main topic groups without notes.
- [ ] I can choose services in unfamiliar scenarios and reject close alternatives.
- [ ] I repaired recurring mistakes and revisited them after a delay.
- [ ] I checked the current official exam scope, or explicitly recorded that this remains pending.
- [ ] I used legitimate practice resources; none of these original exercises are official exam questions.
- [ ] I understand practice scores and a completed plan do not guarantee a pass.
- [ ] I confirmed the December 16 exam arrangements and have a realistic rest plan.
