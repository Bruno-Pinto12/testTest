# AZ-900 Practice Questions — V4

Independent study material. Immediate feedback; not an official exam.

---

## Question 101 — Private cloud

A research institute needs cloud infrastructure dedicated to itself. A third-party provider will operate the hardware in its own datacenter. Which cloud model meets the requirement?

- A. Multicloud
- B. Public cloud
- C. Hybrid cloud
- D. Private cloud

**Correct answer: D. Private cloud**

### Explanation

Dedication to one organization defines a private cloud, regardless of the hosting location.

### Why the other answers are incorrect

- **A. Multicloud:** This means using multiple cloud providers.
- **B. Public cloud:** The underlying infrastructure is shared across customers.
- **C. Hybrid cloud:** This would require integration of public and private environments.

### Key concept to remember

Private cloud does not require ownership of the physical datacenter.

**Brochure reference:** Chapter 1

---

## Question 102 — Shared responsibility

For each statement about public cloud, select Yes or No:

1. Customers must secure the physical hosts of Azure public cloud services.
2. Customers have no responsibility for their own data in SaaS.
3. The provider is always responsible for guest OS patching.

**Correct answer:** No / No / No

### Explanation

Physical infrastructure is the provider's responsibility, data remains the customer's, and guest OS patching depends on the service model.

### Item-by-item correction

- **1. No:** The provider, not the customer, secures public-cloud physical hosts.
- **2. No:** Data remains a customer responsibility even in SaaS.
- **3. No:** Guest OS patching depends on the service model; IaaS customers manage it.

### Key concept to remember

Physical infrastructure is always provider-managed in public cloud; other responsibilities depend on service type.

**Brochure reference:** Chapter 1

---

## Question 103 — Hybrid cloud

A hospital keeps a dedicated private cloud for clinical records and uses Azure for a connected public-facing appointment system. Which model describes this integrated environment?

- A. Multicloud
- B. Public cloud
- C. Private cloud
- D. Hybrid cloud

**Correct answer: D. Hybrid cloud**

### Explanation

The private cloud and public cloud are used together.

### Why the other answers are incorrect

- **A. Multicloud:** Using a private cloud and one public provider does not by itself mean multiple public providers.
- **B. Public cloud:** This ignores the private cloud component.
- **C. Private cloud:** This ignores the Azure public cloud component.

### Key concept to remember

Hybrid describes integration of private and public environments, not simply ownership of hardware.

**Brochure reference:** Chapter 1

---

## Question 104 — Consumption-based billing

Which TWO characteristics are associated with a consumption-based cloud model?

1. No need to buy physical servers upfront.
2. Usage or provisioned capacity affects charges.
3. All services have a fixed monthly fee.
4. Every stopped resource is free.

**Correct answer:** 1 and 2

### Explanation

Consumption pricing avoids upfront hardware purchases and ties charges to billable usage or capacity.

### Item-by-item correction

- **1. Correct:** Cloud infrastructure is rented rather than bought upfront.
- **2. Correct:** Usage and allocated capacity are common billing meters.
- **3. Incorrect:** Fixed monthly pricing is not a universal characteristic.
- **4. Incorrect:** Allocated compute, disks and other retained resources can still incur charges.

### Key concept to remember

Pay for billable usage, not necessarily only active execution; retained or allocated resources may be billed.

**Brochure reference:** Chapter 1

---

## Question 105 — Multicloud

A media company uses Azure for analytics and another public cloud provider for content delivery. It has no private cloud. Which term best describes its strategy?

- A. Multicloud
- B. Private cloud
- C. Sovereign cloud
- D. Hybrid cloud

**Correct answer: A. Multicloud**

### Explanation

It uses more than one public cloud provider.

### Why the other answers are incorrect

- **B. Private cloud:** Resources are not dedicated private cloud infrastructure.
- **C. Sovereign cloud:** No isolated regulatory cloud environment is required.
- **D. Hybrid cloud:** No integrated private cloud is described.

### Key concept to remember

Multicloud describes provider diversity; hybrid describes public/private integration.

**Brochure reference:** Chapter 1

---

## Question 106 — Capital expenditure

Purchasing a physical server for a company-owned datacenter is an example of _____.

- A. Operational expenditure (OpEx)
- B. Consumption-based billing
- C. Capital expenditure (CapEx)
- D. Elasticity

**Correct answer: C. Capital expenditure (CapEx)**

### Explanation

The purchase is an upfront infrastructure investment.

### Why the other answers are incorrect

- **A. Operational expenditure (OpEx):** This generally refers to ongoing operating costs.
- **B. Consumption-based billing:** This charges for usage or allocated capacity rather than buying the hardware.
- **D. Elasticity:** This is adjustment of capacity to demand.

### Key concept to remember

CapEx and OpEx describe different spending models; operating a private datacenter can also incur OpEx.

**Brochure reference:** Chapter 1

---

## Question 107 — Spot pricing

A research job can be interrupted and restarted from checkpoints. The team accepts eviction to obtain discounted spare VM capacity. Which option fits?

- A. Azure Reservations
- B. Azure Spot Virtual Machines
- C. Azure Hybrid Benefit
- D. Pay-as-you-go at standard rates

**Correct answer: B. Azure Spot Virtual Machines**

### Explanation

Spot capacity is discounted but can be evicted.

### Why the other answers are incorrect

- **A. Azure Reservations:** Reservations discount eligible committed usage, not specifically evictable spare capacity.
- **C. Azure Hybrid Benefit:** This uses eligible existing software licenses.
- **D. Pay-as-you-go at standard rates:** This does not specifically use discounted spare capacity.

### Key concept to remember

Use Spot for interruption-tolerant workloads, not for workloads that must run continuously.

**Brochure reference:** Chapter 1

---

## Question 108 — Savings plan

A company wants a one-year hourly compute spending commitment but expects its eligible compute usage to shift between different services. Which option is most appropriate?

- A. Azure savings plan for compute
- B. Azure Hybrid Benefit
- C. Azure Spot VMs
- D. Azure Reservations

**Correct answer: A. Azure savings plan for compute**

### Explanation

It discounts eligible compute usage against an hourly spending commitment.

### Why the other answers are incorrect

- **B. Azure Hybrid Benefit:** It relies on eligible licenses.
- **C. Azure Spot VMs:** Spare capacity may be evicted and is not an hourly spending commitment.
- **D. Azure Reservations:** Reservations are more targeted to eligible reserved usage rather than a flexible hourly spend commitment.

### Key concept to remember

Savings plans trade a spending commitment for discounts; reservations target eligible usage more specifically.

**Brochure reference:** Chapter 1

---

## Question 109 — Serverless

Select Yes or No for each statement:

1. Serverless still runs on physical servers.
2. Customers must patch the host OS in a managed serverless service.
3. Charges depend on the service and hosting plan.

**Correct answer:** Yes / No / Yes

### Explanation

The provider manages underlying servers and the pricing model depends on the offering.

### Item-by-item correction

- **1. Yes:** Serverless abstracts physical servers rather than eliminating them.
- **2. No:** The managed serverless provider handles the host OS.
- **3. Yes:** Billing depends on the offering and selected hosting plan.

### Key concept to remember

Serverless is an infrastructure management abstraction, not a promise that all executions are free.

**Brochure reference:** Chapter 1

---

## Question 110 — Public cloud use case

A startup needs to launch a service quickly, has no datacenter, and does not want to buy hardware. It has no dedicated infrastructure requirement. Which cloud model is the best starting point?

- A. On-premises infrastructure
- B. Public cloud
- C. Hybrid cloud
- D. Private cloud

**Correct answer: B. Public cloud**

### Explanation

Provider infrastructure enables rapid provisioning without purchasing hardware.

### Why the other answers are incorrect

- **A. On-premises infrastructure:** It would require operating infrastructure the startup does not have.
- **C. Hybrid cloud:** There is no existing private cloud to integrate.
- **D. Private cloud:** Dedicated infrastructure is not required by the scenario.

### Key concept to remember

Choose public cloud when rapid provisioning and avoiding hardware ownership are priorities.

**Brochure reference:** Chapter 1

---

## Question 111 — Vertical scaling

A database VM has insufficient memory. You change its size from 8 GB RAM to 32 GB RAM without increasing the VM count. Which scaling approach is this?

- A. Disaster recovery
- B. Scale out
- C. Scale up
- D. Scale in

**Correct answer: C. Scale up**

### Explanation

Increasing capacity of an existing instance is vertical scaling.

### Why the other answers are incorrect

- **A. Disaster recovery:** Restores services after major disruption.
- **B. Scale out:** Adds more instances.
- **D. Scale in:** Removes instances.

### Key concept to remember

Vertical scaling changes instance size; horizontal scaling changes instance count.

**Brochure reference:** Chapter 2

---

## Question 112 — Scale in

A website has ten instances after a promotion. Demand returns to normal and autoscaling removes six instances. Which operation occurs?

- A. Scale up
- B. Scale in
- C. Scale down
- D. Scale out

**Correct answer: B. Scale in**

### Explanation

Horizontal capacity is reduced by removing instances.

### Why the other answers are incorrect

- **A. Scale up:** Increases capacity of one instance.
- **C. Scale down:** Reduces the size of an existing instance.
- **D. Scale out:** Adds instances rather than removing them.

### Key concept to remember

Scale in/out changes instance count; scale up/down changes instance size.

**Brochure reference:** Chapter 2

---

## Question 113 — Availability and reliability

Match requirements:

1. Minimize service downtime.
2. Restore service after a regional catastrophe.
3. Keep operating when an individual component fails.

**Choices:** Disaster recovery; Fault tolerance; High availability

**Correct answer:** 1 High availability; 2 Disaster recovery; 3 Fault tolerance

### Explanation

Each term corresponds to the stated operational goal.

### Correct associations

- **Minimize service downtime.** → High availability
- **Restore service after a regional catastrophe.** → Disaster recovery
- **Keep operating when an individual component fails. Which mapping is correct?** → Fault tolerance

### Key concept to remember

High availability reduces downtime; fault tolerance withstands failures; disaster recovery restores service after major disruption.

**Brochure reference:** Chapter 2

---

## Question 114 — Recovery point objective

A company can tolerate losing at most 15 minutes of transaction data after a disaster. Which objective is it defining?

- A. Scale-in threshold
- B. Recovery Point Objective (RPO)
- C. Recovery Time Objective (RTO)
- D. Service-level agreement (SLA)

**Correct answer: B. Recovery Point Objective (RPO)**

### Explanation

RPO describes the acceptable data loss measured in time.

### Why the other answers are incorrect

- **A. Scale-in threshold:** A scaling rule controls instance capacity.
- **C. Recovery Time Objective (RTO):** RTO is the target time to restore service.
- **D. Service-level agreement (SLA):** An SLA is a service commitment, not this recovery objective.

### Key concept to remember

RPO = how much data loss; RTO = how long recovery may take.

**Brochure reference:** Chapter 2

---

## Question 115 — Recovery time objective

A business requires a service to be restored within four hours following a major outage. Which concept describes this target?

- A. Elasticity
- B. Fault domain
- C. Recovery Time Objective (RTO)
- D. Recovery Point Objective (RPO)

**Correct answer: C. Recovery Time Objective (RTO)**

### Explanation

It specifies the target maximum restoration time.

### Why the other answers are incorrect

- **A. Elasticity:** Capacity adjustment to workload demand.
- **B. Fault domain:** A physical failure boundary for infrastructure.
- **D. Recovery Point Objective (RPO):** It specifies acceptable data loss.

### Key concept to remember

RTO measures time to restore operation, not data lost.

**Brochure reference:** Chapter 2

---

## Question 116 — Reliability

Select Yes or No for each statement:

1. A backup alone guarantees uninterrupted availability.
2. Redundant components necessarily eliminate every possible outage.
3. A regional recovery plan can require failover procedures.

**Correct answer:** No / No / Yes

### Explanation

Backups support recovery, while redundancy and configured failover address different availability risks.

### Item-by-item correction

- **1. No:** Backups enable recovery rather than uninterrupted operation.
- **2. No:** Redundancy reduces risks but does not eliminate every outage.
- **3. Yes:** Regional disaster recovery can require failover and restoration procedures.

### Key concept to remember

Backup, availability and disaster recovery are complementary, not interchangeable.

**Brochure reference:** Chapter 2

---

## Question 117 — Predictability

A team uses monitoring and capacity planning to maintain expected response times under changing load. Which cloud benefit is most directly illustrated?

- A. Data residency
- B. Performance predictability
- C. Cost predictability
- D. Sovereignty

**Correct answer: B. Performance predictability**

### Explanation

Monitoring and capacity planning help anticipate and manage performance.

### Why the other answers are incorrect

- **A. Data residency:** This concerns where data is stored or processed.
- **C. Cost predictability:** This concerns estimating and controlling spending.
- **D. Sovereignty:** This concerns legal or regulatory control over an environment.

### Key concept to remember

Predictability applies to both performance and cost; identify the measure in the scenario.

**Brochure reference:** Chapter 2

---

## Question 118 — Manageability of cloud

A service automatically replaces failed instances and adjusts its capacity based on workload. Which benefit is most directly illustrated?

- A. Manageability of the cloud
- B. Capital expenditure
- C. Manageability in the cloud
- D. Data sovereignty

**Correct answer: A. Manageability of the cloud**

### Explanation

Cloud platform capabilities automate the operation of resources.

### Why the other answers are incorrect

- **B. Capital expenditure:** This is an upfront spending model.
- **C. Manageability in the cloud:** This refers to the tools people use to manage resources.
- **D. Data sovereignty:** This relates to legal and regulatory isolation.

### Key concept to remember

Manageability of the cloud refers to built-in automation; manageability in the cloud refers to management interfaces and tools.

**Brochure reference:** Chapter 2

---

## Question 119 — Cloud governance

Which TWO capabilities directly help enforce consistent cloud governance?

1. Policies restricting permitted configurations.
2. Repeatable infrastructure templates.
3. Increasing a VM's RAM.
4. Buying an external hard drive.

**Correct answer:** 1 and 2

### Explanation

Policies enforce rules and templates support consistent deployments.

### Item-by-item correction

- **1. Correct:** Azure Policy can restrict or audit resource configuration.
- **2. Correct:** Declarative templates support repeatable, standardized deployments.
- **3. Incorrect:** Changing VM capacity is a scaling operation, not a governance control.
- **4. Incorrect:** Buying physical storage is not a cloud governance control.

### Key concept to remember

Governance controls how resources are configured and used; scalability addresses capacity.

**Brochure reference:** Chapter 2

---

## Question 120 — SLA and availability

Select Yes or No for each:

1. An SLA guarantees that no outage can ever occur.
2. Deploying any Azure resource guarantees 100% uptime.
3. Application architecture has no effect on overall availability.

**Correct answer:** No / No / No

### Explanation

An SLA has contractual conditions, uptime is not guaranteed to be perfect, and architecture matters.

### Item-by-item correction

- **1. No:** An SLA is a defined service commitment, not an absolute guarantee of zero outages.
- **2. No:** Availability varies by service, configuration and architecture.
- **3. No:** Application architecture, redundancy and dependencies affect end-to-end availability.

### Key concept to remember

An SLA is not identical to measured application uptime; dependencies and redundancy matter.

**Brochure reference:** Chapter 2

---

## Question 121 — IaaS guest responsibility

A company runs a third-party product on an Azure VM. The vendor requires custom kernel settings and installation of its own OS agent. Which service model provides the required control?

- A. SaaS
- B. Serverless function
- C. IaaS
- D. PaaS

**Correct answer: C. IaaS**

### Explanation

Virtual machines provide guest OS control and customer-managed software.

### Why the other answers are incorrect

- **A. SaaS:** The provider supplies a complete application.
- **B. Serverless function:** It abstracts server and host OS management.
- **D. PaaS:** The underlying OS is managed by the provider.

### Key concept to remember

Use IaaS for OS-level control, accepting responsibility for the guest OS.

**Brochure reference:** Chapter 3

---

## Question 122 — IaaS responsibilities

Which TWO tasks remain the customer's responsibility for an Azure IaaS VM?

1. Patching the guest OS.
2. Configuring the installed application.
3. Replacing failed physical host disks.
4. Maintaining datacenter cooling.

**Correct answer:** 1 and 2

### Explanation

The customer manages the guest OS and application configuration.

### Item-by-item correction

- **1. Correct:** IaaS customers administer the guest OS.
- **2. Correct:** IaaS customers manage installed applications.
- **3. Incorrect:** Microsoft maintains the physical host hardware.
- **4. Incorrect:** Datacenter facilities are provider-managed.

### Key concept to remember

IaaS moves physical infrastructure management to the provider, not guest OS administration.

**Brochure reference:** Chapter 3

---

## Question 123 — PaaS development

A development team wants to deploy its own REST API and use a managed relational database, without maintaining either underlying operating system. Which service model should it favor?

- A. SaaS
- B. IaaS
- C. Private cloud
- D. PaaS

**Correct answer: D. PaaS**

### Explanation

Managed application and database platforms abstract the operating systems.

### Why the other answers are incorrect

- **A. SaaS:** A ready-made application would not provide the required custom application hosting.
- **B. IaaS:** The team would retain guest OS responsibility.
- **C. Private cloud:** This is a deployment model, not a responsibility model.

### Key concept to remember

PaaS lets teams focus on code and data instead of server and OS maintenance.

**Brochure reference:** Chapter 3

---

## Question 124 — SaaS responsibilities

Select Yes or No for each statement for Microsoft 365:

1. The customer manages account access.
2. Microsoft manages application updates.
3. The customer patches Microsoft's physical hosts.

**Correct answer:** Yes / Yes / No

### Explanation

Customer access remains customer-managed, while the provider operates the application and physical hosts.

### Item-by-item correction

- **1. Yes:** The customer remains responsible for account access.
- **2. Yes:** Microsoft operates and updates the SaaS application.
- **3. No:** The physical hosts are managed and patched by Microsoft.

### Key concept to remember

SaaS minimizes customer infrastructure responsibilities but does not remove responsibility for data and access.

**Brochure reference:** Chapter 3

---

## Question 125 — Service models

Match each requirement:

1. Use a ready-made collaboration application.
2. Deploy custom code to a managed runtime.
3. Install a custom operating system on a virtual machine.

**Choices:** IaaS; PaaS; SaaS

**Correct answer:** 1 SaaS; 2 PaaS; 3 IaaS

### Explanation

The requirements map to decreasing provider abstraction and increasing customer control.

### Correct associations

- **Use a ready-made collaboration application.** → SaaS
- **Deploy custom code to a managed runtime.** → PaaS
- **Install a custom operating system on a virtual machine.** → IaaS

### Key concept to remember

Select service models by the level of customer control and management responsibility.

**Brochure reference:** Chapter 3

---

## Question 126 — Serverless use case

A small application must run a short calculation each time a message arrives. The team does not want a continuously managed server. Which compute model is the best fit?

- A. Dedicated IaaS VM
- B. Event-driven serverless compute
- C. Private cloud infrastructure
- D. SaaS collaboration software

**Correct answer: B. Event-driven serverless compute**

### Explanation

A function can run on a trigger using provider-managed infrastructure.

### Why the other answers are incorrect

- **A. Dedicated IaaS VM:** This requires greater server management.
- **C. Private cloud infrastructure:** This does not directly provide event-triggered execution.
- **D. SaaS collaboration software:** It does not run the team's custom calculation.

### Key concept to remember

Serverless functions are suitable for intermittent, event-driven code; costs depend on the plan.

**Brochure reference:** Chapter 3

---

## Question 127 — Cloud responsibility comparison

Select Yes or No:

1. Moving from IaaS to PaaS increases customer responsibility for guest OS patching.
2. Moving to SaaS removes all customer responsibility for data.
3. Microsoft operates physical infrastructure in all three public cloud service models.

**Correct answer:** No / No / Yes

### Explanation

Provider responsibilities expand with managed services, but customers retain data responsibilities.

### Item-by-item correction

- **1. No:** Moving to PaaS normally reduces customer guest OS maintenance.
- **2. No:** SaaS customers still manage their data and access.
- **3. Yes:** Microsoft operates the physical infrastructure for public-cloud IaaS, PaaS and SaaS.

### Key concept to remember

Greater abstraction reduces operational burden without eliminating customer security duties.

**Brochure reference:** Chapter 3

---

## Question 128 — Service model selection

A team is moving an existing Windows application without changing its code. The application requires administrative access to install a proprietary Windows service. Which hosting approach is appropriate?

- A. Microsoft 365 (SaaS)
- B. Azure Virtual Machines (IaaS)
- C. Azure App Service (PaaS)
- D. Azure Functions

**Correct answer: B. Azure Virtual Machines (IaaS)**

### Explanation

They permit installation of the required guest OS service.

### Why the other answers are incorrect

- **A. Microsoft 365 (SaaS):** It is a ready-to-use productivity suite.
- **C. Azure App Service (PaaS):** It abstracts the underlying OS and is not intended for arbitrary OS-level services.
- **D. Azure Functions:** It runs triggered code rather than arbitrary Windows services.

### Key concept to remember

Lift-and-shift applications with OS dependencies often require IaaS.

**Brochure reference:** Chapter 3

---

## Question 129 — Azure hierarchy

Arrange these scopes from broadest to narrowest: resource, subscription, management group, resource group.

1. Management group
2. Resource
3. Resource group
4. Subscription

**Correct answer:** Management group → Subscription → Resource group → Resource

### Explanation

This is Azure's resource management hierarchy.

### Correct order

1. Management group
2. Subscription
3. Resource group
4. Resource

### Key concept to remember

Scope inheritance follows management group, subscription, resource group, resource.

**Brochure reference:** Chapter 4

---

## Question 130 — Resource organization

Select Yes or No:

1. Resource groups are direct children of subscriptions.
2. A resource belongs to one resource group at a time.
3. A subscription can contain multiple resource groups.

**Correct answer:** Yes / Yes / Yes

### Explanation

Resource groups are not nested, resources belong to one group, and subscriptions contain groups.

### Item-by-item correction

- **1. Yes:** A resource group is a child of a subscription.
- **2. Yes:** A resource belongs to one resource group at a time.
- **3. Yes:** A subscription can contain multiple resource groups.

### Key concept to remember

A resource group is a logical lifecycle container, not a nested folder hierarchy.

**Brochure reference:** Chapter 4

---

## Question 131 — Region pairing

A company deploys one VM in an Azure region that has a region pair. It assumes Azure automatically creates a copy of the VM in the paired region. Is the assumption correct?

- A. No
- B. Yes

**Correct answer: A. No**

### Explanation

Region pairing does not automatically replicate arbitrary workloads.

### Why the other answers are incorrect

- **B. Yes:** Cross-region replication must be configured using appropriate services and architecture.

### Key concept to remember

Region pairing is not itself a disaster recovery solution.

**Brochure reference:** Chapter 4

---

## Question 132 — Sovereign cloud

A government agency requires a cloud environment isolated from global Azure to satisfy specific eligibility and regulatory requirements. Which architectural concept meets this need?

- A. Sovereign cloud environment
- B. Resource group
- C. Availability set
- D. Region pair

**Correct answer: A. Sovereign cloud environment**

### Explanation

Sovereign offerings provide isolated cloud environments for specific requirements.

### Why the other answers are incorrect

- **B. Resource group:** This is a logical resource container.
- **C. Availability set:** This distributes VMs across fault and update domains.
- **D. Region pair:** This is a regional resiliency association, not sovereign isolation.

### Key concept to remember

Sovereign clouds are distinct from ordinary geographic regions and private clouds.

**Brochure reference:** Chapter 4

---

## Question 133 — Availability zones

Which TWO properties characterize availability zones?

1. Separate locations within a region.
2. Independent power, cooling and networking.
3. Automatic replication of every VM to another region.
4. Billing boundaries.

**Correct answer:** 1 and 2

### Explanation

Zones provide physical separation and independent supporting infrastructure.

### Item-by-item correction

- **1. Correct:** Zones are physically separate locations within one region.
- **2. Correct:** Zones have independent power, cooling and networking.
- **3. Incorrect:** Zone deployment does not automatically create a regional VM replica.
- **4. Incorrect:** Subscriptions are billing and management scopes; zones are physical infrastructure boundaries.

### Key concept to remember

Zones address failures within a region; regional disaster recovery requires cross-region design.

**Brochure reference:** Chapter 4

---

## Question 134 — Resource lifecycle

A development project has a temporary database, VM and network used only by that project. The team wants to remove them together at project completion. Which arrangement is most appropriate?

- A. Place every resource in a separate tenant
- B. Place the related resources in one resource group
- C. Assign a Reader role to every resource
- D. Create a separate Azure region for the project

**Correct answer: B. Place the related resources in one resource group**

### Explanation

A common lifecycle makes resource-group management and deletion convenient.

### Why the other answers are incorrect

- **A. Place every resource in a separate tenant:** Tenants organize identities, not individual project cleanup.
- **C. Assign a Reader role to every resource:** Reader provides viewing permissions, not lifecycle grouping.
- **D. Create a separate Azure region for the project:** Customers do not create Azure regions.

### Key concept to remember

Group resources that share a lifecycle; deleting a group can delete all its resources, subject to protections.

**Brochure reference:** Chapter 4

---

## Question 135 — Resource hierarchy and billing

Select Yes or No:

1. One Entra tenant can be associated with multiple subscriptions.
2. A subscription can trust two Entra tenants simultaneously.
3. Azure RBAC assignments at subscription scope can apply to child resources.

**Correct answer:** Yes / No / Yes

### Explanation

A tenant can support multiple subscriptions, each trusts one tenant at a time, and scoped RBAC is inherited.

### Item-by-item correction

- **1. Yes:** A Microsoft Entra tenant can be associated with multiple subscriptions.
- **2. No:** Each subscription trusts one tenant at a time.
- **3. Yes:** RBAC assignments at subscription scope can inherit down to child resources.

### Key concept to remember

Directory identity and Azure resource hierarchy are related but distinct.

**Brochure reference:** Chapter 4

---

## Question 136 — Azure Virtual Desktop

A company wants employees to access centrally hosted Windows desktops and business applications from their personal devices. Which service is designed for this purpose?

- A. Azure Functions
- B. Azure App Service
- C. Azure Virtual Desktop
- D. Azure Container Instances

**Correct answer: C. Azure Virtual Desktop**

### Explanation

It delivers virtual desktops and applications remotely.

### Why the other answers are incorrect

- **A. Azure Functions:** It executes event-driven code.
- **B. Azure App Service:** It hosts web apps and APIs.
- **D. Azure Container Instances:** It runs containers without managing hosts.

### Key concept to remember

Remote Windows desktops or published desktop applications point to Azure Virtual Desktop.

**Brochure reference:** Chapter 5

---

## Question 137 — VM resources

Which TWO resources are normally needed for a persistent Azure VM with a guest OS?

1. Managed OS disk.
2. Network interface connected to a subnet.
3. Public IP address in every case.
4. Kubernetes cluster.

**Correct answer:** 1 and 2

### Explanation

The VM needs OS storage and virtual network connectivity.

### Item-by-item correction

- **1. Correct:** A persistent VM requires OS storage, normally a managed OS disk.
- **2. Correct:** A standard Azure VM uses a NIC attached to a subnet.
- **3. Incorrect:** Private-only VMs need no public IP.
- **4. Incorrect:** A Kubernetes cluster is not required for ordinary VMs.

### Key concept to remember

VMs need OS and network resources; public exposure is optional.

**Brochure reference:** Chapter 5

---

## Question 138 — Container Apps

A team wants to deploy multiple containerized microservices with managed scaling but does not need direct Kubernetes cluster administration. Which managed hosting option is most appropriate?

- A. Azure Container Registry
- B. Azure Container Apps
- C. Azure Virtual Machines
- D. Azure Virtual Desktop

**Correct answer: B. Azure Container Apps**

### Explanation

It provides managed containerized application hosting and scaling without direct cluster administration.

### Why the other answers are incorrect

- **A. Azure Container Registry:** It stores images rather than runs application workloads.
- **C. Azure Virtual Machines:** The team would manage the guest OS and container runtime.
- **D. Azure Virtual Desktop:** It delivers remote desktops and applications.

### Key concept to remember

Container Apps fits managed serverless-style microservices; AKS fits Kubernetes orchestration needs.

**Brochure reference:** Chapter 5

---

## Question 139 — Compute options

Match the requirements:

1. Kubernetes orchestration.
2. Run a short container task without managing a cluster.
3. Full guest OS control.

**Choices:** ACI; AKS; Azure VMs

**Correct answer:** 1 AKS; 2 ACI; 3 Azure VMs

### Explanation

AKS orchestrates containers, ACI runs containers without managing a cluster, and VMs provide OS control.

### Correct associations

- **Kubernetes orchestration.** → AKS
- **Run a short container task without managing a cluster.** → ACI
- **Full guest OS control.** → Azure VMs

### Key concept to remember

Different compute services offer different levels of abstraction and orchestration.

**Brochure reference:** Chapter 5

---

## Question 140 — Containers and VMs

Select Yes or No:

1. Every container requires its own separate guest OS.
2. A VM never has a guest operating system.
3. Every container requires a dedicated physical server.

**Correct answer:** No / No / No

### Explanation

Containers share the host kernel, VMs run guest OSs, and containers do not each require a physical server.

### Item-by-item correction

- **1. No:** Containers generally share a host OS kernel rather than requiring a separate guest OS.
- **2. No:** A VM normally runs its own guest OS.
- **3. No:** Multiple containers can run on shared physical or virtual hosts.

### Key concept to remember

Containers package application dependencies; virtual machines virtualize hardware and provide a guest OS.

**Brochure reference:** Chapter 5

---

## Question 141 — VM deallocation

A development VM is deallocated using Azure management tools. Its managed OS disk is retained. Which charge can still apply?

- A. Managed disk storage charges
- B. VM compute charges for the deallocated instance
- C. A Kubernetes cluster management fee
- D. A mandatory resource group fee

**Correct answer: A. Managed disk storage charges**

### Explanation

Deallocation releases VM compute allocation but retained storage remains billable.

### Why the other answers are incorrect

- **B. VM compute charges for the deallocated instance:** Deallocation stops normal VM compute charges.
- **C. A Kubernetes cluster management fee:** No cluster is described.
- **D. A mandatory resource group fee:** Resource groups do not have a direct charge.

### Key concept to remember

Deallocation stops VM compute billing, not every cost associated with the VM.

**Brochure reference:** Chapter 5

---

## Question 142 — VM availability

An application uses two identical VMs. The team needs to reduce the chance both undergo planned host maintenance at the same time. Which construct directly addresses this within an availability set?

- A. Subnets
- B. Management groups
- C. Fault domains
- D. Update domains

**Correct answer: D. Update domains**

### Explanation

VMs in distinct update domains can be maintained at different times.

### Why the other answers are incorrect

- **A. Subnets:** These segment virtual network address space.
- **B. Management groups:** These organize subscriptions.
- **C. Fault domains:** These separate common hardware failure boundaries.

### Key concept to remember

Update domains concern planned maintenance; fault domains concern shared infrastructure failures.

**Brochure reference:** Chapter 5

---

## Question 143 — Virtual network peering

Two existing VNets in different Azure regions must communicate using private IP addresses over Microsoft's backbone. The address ranges do not overlap. Which feature should be configured?

- A. Azure Load Balancer
- B. Azure DNS
- C. Virtual network peering
- D. A resource lock

**Correct answer: C. Virtual network peering**

### Explanation

Global VNet peering provides private connectivity between supported VNets across regions.

### Why the other answers are incorrect

- **A. Azure Load Balancer:** It distributes traffic to backend instances.
- **B. Azure DNS:** It resolves names but does not establish network connectivity.
- **D. A resource lock:** It protects management operations, not network paths.

### Key concept to remember

Peering connects VNets; name resolution and security rules remain separate concerns.

**Brochure reference:** Chapter 6

---

## Question 144 — Point-to-site VPN

A consultant working from home must securely connect one laptop to an Azure VNet over the Internet. Which connection type is appropriate?

- A. Site-to-site VPN
- B. Private endpoint
- C. Point-to-site VPN
- D. ExpressRoute

**Correct answer: C. Point-to-site VPN**

### Explanation

It connects an individual client device to an Azure network.

### Why the other answers are incorrect

- **A. Site-to-site VPN:** It connects networks rather than individual remote clients.
- **B. Private endpoint:** It provides private access to a supported service, not a remote-client tunnel.
- **D. ExpressRoute:** It provides private enterprise connectivity via a provider.

### Key concept to remember

Point-to-site = individual client; site-to-site = network to network.

**Brochure reference:** Chapter 6

---

## Question 145 — ExpressRoute and VPN

Select Yes or No:

1. ExpressRoute bypasses the public Internet.
2. ExpressRoute does not automatically encrypt all traffic.
3. Site-to-site VPN uses an encrypted tunnel.

**Correct answer:** Yes / Yes / Yes

### Explanation

ExpressRoute is private connectivity, not implicit encryption; VPN encrypts traffic.

### Item-by-item correction

- **1. Yes:** ExpressRoute avoids the public Internet for the private connection.
- **2. Yes:** ExpressRoute is not automatically end-to-end encrypted.
- **3. Yes:** Site-to-site VPN uses an encrypted tunnel.

### Key concept to remember

Private connectivity and encrypted connectivity are different properties.

**Brochure reference:** Chapter 6

---

## Question 146 — Endpoints

Match each description:

1. Access a supported Azure service using a private IP in your VNet.
2. Extend subnet identity to a supported service using its public endpoint.
3. Access a service through its public address, subject to controls.

**Choices:** Private endpoint; Public endpoint; Service endpoint

**Correct answer:** 1 Private endpoint; 2 Service endpoint; 3 Public endpoint

### Explanation

The mapping distinguishes private IP access, subnet identity, and public addressing.

### Correct associations

- **Access a supported Azure service using a private IP in your VNet.** → Private endpoint
- **Extend subnet identity to a supported service using its public endpoint.** → Service endpoint
- **Access a service through its public address, subject to controls.** → Public endpoint

### Key concept to remember

Private endpoints use Private Link and a private IP; service endpoints retain the service's public endpoint.

**Brochure reference:** Chapter 6

---

## Question 147 — Azure DNS

A company owns a domain name and wants Azure to host its public DNS records. Which service should be used?

- A. Azure Virtual Desktop
- B. Azure Firewall
- C. Azure VPN Gateway
- D. Azure DNS

**Correct answer: D. Azure DNS**

### Explanation

It hosts DNS zones and records.

### Why the other answers are incorrect

- **A. Azure Virtual Desktop:** It delivers remote desktops.
- **B. Azure Firewall:** It filters network traffic.
- **C. Azure VPN Gateway:** It establishes encrypted network connectivity.

### Key concept to remember

Azure DNS hosts records; it does not by itself register a domain or grant network access.

**Brochure reference:** Chapter 6

---

## Question 148 — Network security groups

Which TWO statements about NSGs are correct?

1. They filter inbound and outbound traffic.
2. They can be associated with subnets or network interfaces.
3. They automatically assign public IP addresses.
4. They provide DNS hosting.

**Correct answer:** 1 and 2

### Explanation

NSGs filter traffic at subnet or NIC scope.

### Item-by-item correction

- **1. Correct:** NSG rules filter inbound and outbound network traffic.
- **2. Correct:** NSGs can be associated with a subnet or a NIC.
- **3. Incorrect:** Public IP addresses are separately provisioned resources.
- **4. Incorrect:** DNS hosting is handled by DNS services.

### Key concept to remember

NSGs control traffic, not addressing, DNS, or network connectivity.

**Brochure reference:** Chapter 6

---

## Question 149 — Subnet isolation

A VNet contains a frontend subnet and a database subnet. The team wants to allow database connections only from the frontend subnet. Which feature directly provides subnet-level traffic filtering?

- A. VNet peering
- B. Network Security Group
- C. Azure DNS
- D. Resource groups

**Correct answer: B. Network Security Group**

### Explanation

An NSG can allow or deny traffic based on source, destination, ports and protocol.

### Why the other answers are incorrect

- **A. VNet peering:** It connects separate networks rather than enforcing subnet access rules.
- **C. Azure DNS:** It resolves names.
- **D. Resource groups:** They organize resources but do not isolate network traffic.

### Key concept to remember

Subnets do not automatically isolate traffic; NSGs can enforce segmentation.

**Brochure reference:** Chapter 6

---

## Question 150 — Read-access geo redundancy

A storage workload requires copies in two regions and read access to the secondary region before a failover. Zone redundancy is not required. Which option is the most direct fit?

- A. RA-GRS
- B. ZRS
- C. GRS
- D. LRS

**Correct answer: A. RA-GRS**

### Explanation

It provides geographically replicated storage with a readable secondary endpoint.

### Why the other answers are incorrect

- **B. ZRS:** It replicates within one region only.
- **C. GRS:** It does not provide normal secondary read access without failover.
- **D. LRS:** It replicates within one physical location.

### Key concept to remember

The RA prefix indicates read access to the secondary region; geo replication is asynchronous.

**Brochure reference:** Chapter 7

---

## Question 151 — ZRS

A workload must remain resilient to the loss of one availability zone, but all storage copies must remain in the same region. Which redundancy option meets the requirement?

- A. LRS
- B. GRS
- C. ZRS
- D. GZRS

**Correct answer: C. ZRS**

### Explanation

It replicates data synchronously across availability zones in one region.

### Why the other answers are incorrect

- **A. LRS:** Copies are kept within one physical location.
- **B. GRS:** It replicates to a secondary region.
- **D. GZRS:** It includes replication to a secondary region.

### Key concept to remember

ZRS is the within-region, multi-zone option; GRS and GZRS include a second region.

**Brochure reference:** Chapter 7

---

## Question 152 — Storage redundancy behavior

Select Yes or No:

1. LRS stores copies in multiple Azure regions.
2. Geo-replication is asynchronous.
3. Storage replication alone guarantees recovery of accidentally deleted data.

**Correct answer:** No / Yes / No

### Explanation

LRS has three local copies, geo-replication can lag, and replication is not an independent backup.

### Item-by-item correction

- **1. No:** LRS stores three copies in one primary-region physical location.
- **2. Yes:** Geo-replication to the secondary region is asynchronous.
- **3. No:** Replication can replicate deletion; independent recovery protection is needed.

### Key concept to remember

Durability, backup and failover solve different problems.

**Brochure reference:** Chapter 7

---

## Question 153 — Cold tier

A company reads compliance files only a few times per year. The files must remain immediately accessible and will be retained for at least 90 days. Which of Hot, Cool, Cold and Archive typically offers the lowest storage cost while meeting immediate access?

- A. Hot
- B. Archive
- C. Cold
- D. Cool

**Correct answer: C. Cold**

### Explanation

Cold is an online tier with lower storage cost than Hot and Cool.

### Why the other answers are incorrect

- **A. Hot:** Optimized for frequent access, with higher storage cost.
- **B. Archive:** Archived data needs rehydration before normal reading.
- **D. Cool:** Online but generally higher storage cost than Cold.

### Key concept to remember

Hot, Cool and Cold are online tiers; Archive is offline.

**Brochure reference:** Chapter 7

---

## Question 154 — Archive rehydration

Before an archived blob can be read normally, it must be moved to an online tier. This process is called _____.

- A. Deallocation
- B. Peering
- C. Rehydration
- D. Geo-replication

**Correct answer: C. Rehydration**

### Explanation

It makes archived data available for normal reading.

### Why the other answers are incorrect

- **A. Deallocation:** Releases VM compute capacity.
- **B. Peering:** Connects virtual networks.
- **D. Geo-replication:** Copies data to another region.

### Key concept to remember

Archive saves storage costs but introduces retrieval time and costs.

**Brochure reference:** Chapter 7

---

## Question 155 — Data Box

An organization must transfer hundreds of terabytes to Azure. Its internet bandwidth is too limited to complete the transfer in time. Which service is designed for offline bulk data movement?

- A. Azure Data Box
- B. Azure DNS
- C. Azure File Sync
- D. Azure Storage Explorer

**Correct answer: A. Azure Data Box**

### Explanation

It uses physical devices for bulk transfer when network transfer is impractical.

### Why the other answers are incorrect

- **B. Azure DNS:** It hosts DNS zones.
- **C. Azure File Sync:** It synchronizes file shares over a network.
- **D. Azure Storage Explorer:** It is a graphical online storage tool.

### Key concept to remember

Choose Data Box for large datasets when available network bandwidth is insufficient.

**Brochure reference:** Chapter 7

---

## Question 156 — Storage Explorer

An administrator needs a graphical desktop tool to browse storage containers and manually upload or download blobs. Which tool should be used?

- A. Azure Storage Explorer
- B. Azure Migrate
- C. AzCopy
- D. Azure File Sync

**Correct answer: A. Azure Storage Explorer**

### Explanation

It provides a graphical interface for Azure Storage management.

### Why the other answers are incorrect

- **B. Azure Migrate:** It discovers, assesses and migrates workloads.
- **C. AzCopy:** It is a command-line transfer utility.
- **D. Azure File Sync:** It synchronizes Windows file servers with Azure Files.

### Key concept to remember

Storage Explorer is graphical; AzCopy is scripted; File Sync is ongoing hybrid synchronization.

**Brochure reference:** Chapter 7

---

## Question 157 — Storage accounts

Which TWO statements are true?

1. A general-purpose v2 account supports common storage services such as blobs, queues, tables and files.
2. Premium account offerings are optimized for particular workloads.
3. Every account type supports every redundancy option.
4. Storage account names never need to be unique.

**Correct answer:** 1 and 2

### Explanation

GPv2 supports common storage services, and premium offerings target specific performance needs.

### Item-by-item correction

- **1. Correct:** GPv2 supports Blob, File, Queue and Table storage.
- **2. Correct:** Premium account types are designed for specific performance needs.
- **3. Incorrect:** Redundancy support varies by account type and region.
- **4. Incorrect:** Storage account names must be globally unique in the Azure namespace.

### Key concept to remember

Storage account type affects supported services, performance and redundancy.

**Brochure reference:** Chapter 7

---

## Question 158 — Customer identities

An online retailer needs self-service sign-up and sign-in for thousands of shoppers using a customer-facing web application. Which capability is designed for this audience?

- A. Microsoft Entra Domain Services
- B. Azure RBAC
- C. Microsoft Entra External ID customer identities
- D. B2B collaboration

**Correct answer: C. Microsoft Entra External ID customer identities**

### Explanation

Customer identity capabilities support external consumer authentication journeys.

### Why the other answers are incorrect

- **A. Microsoft Entra Domain Services:** It provides managed traditional domain protocols.
- **B. Azure RBAC:** It authorizes actions on Azure resources, not consumer sign-up.
- **D. B2B collaboration:** It primarily enables business guests and partner collaboration.

### Key concept to remember

Distinguish customer-facing identity from workforce and business guest collaboration.

**Brochure reference:** Chapter 8

---

## Question 159 — B2B direct connect

Two partner companies configure cross-tenant trust so their users can collaborate in a supported Microsoft Teams shared channel without ordinary guest invitations. Which feature fits?

- A. B2B collaboration
- B. Azure RBAC
- C. Entra Domain Services
- D. B2B direct connect

**Correct answer: D. B2B direct connect**

### Explanation

It supports configured cross-tenant collaboration for Teams shared channels.

### Why the other answers are incorrect

- **A. B2B collaboration:** Ordinary guest collaboration generally uses an external guest object.
- **B. Azure RBAC:** It grants permissions on Azure resources.
- **C. Entra Domain Services:** It provides managed traditional domain services.

### Key concept to remember

B2B direct connect and B2B collaboration address different external collaboration patterns.

**Brochure reference:** Chapter 8

---

## Question 160 — Guest permissions

Select Yes or No:

1. A B2B guest must always create a new local account in the host tenant.
2. Inviting a guest automatically grants access to all Azure resources.
3. The host organization controls authorization to its resources.

**Correct answer:** No / No / Yes

### Explanation

Guest identity and resource permissions are separate.

### Item-by-item correction

- **1. No:** B2B guests can typically authenticate with an existing identity.
- **2. No:** Invitation alone does not grant access to all resources.
- **3. Yes:** The host organization controls authorization to its resources.

### Key concept to remember

B2B provides authentication and collaboration; resource authorization still requires appropriate permissions.

**Brochure reference:** Chapter 8

---

## Question 161 — MFA factors

Which TWO combinations use different authentication factor categories?

1. Password and hardware security key.
2. Password and PIN.
3. Fingerprint and possession of a registered phone.
4. Two different passwords.

**Correct answer:** 1 and 3

### Explanation

Knowledge plus possession, and inherence plus possession, use different categories.

### Item-by-item correction

- **1. Correct:** A password is knowledge; a security key is possession.
- **2. Incorrect:** Passwords and PINs are both knowledge factors.
- **3. Correct:** A fingerprint is inherence; verified phone possession is a possession factor.
- **4. Incorrect:** Two passwords belong to the same knowledge category.

### Key concept to remember

MFA uses multiple factor categories: knowledge, possession and inherence.

**Brochure reference:** Chapter 8

---

## Question 162 — Single sign-on

Employees authenticate once and then access several integrated business applications without repeatedly entering credentials, subject to access policies. What capability is illustrated?

- A. Microsoft Purview
- B. Single sign-on (SSO)
- C. Azure RBAC
- D. Resource locks

**Correct answer: B. Single sign-on (SSO)**

### Explanation

One authentication session can be used across integrated applications.

### Why the other answers are incorrect

- **A. Microsoft Purview:** It governs and protects data.
- **C. Azure RBAC:** It determines permissions, not the sign-in experience.
- **D. Resource locks:** They prevent certain resource operations.

### Key concept to remember

SSO improves sign-in convenience; MFA and Conditional Access can still apply.

**Brochure reference:** Chapter 8

---

## Question 163 — Least privilege role

A helpdesk employee needs to inspect the configuration of Azure VMs in a resource group without making changes or granting access. Which built-in role should be assigned at that scope?

- A. User Access Administrator
- B. Reader
- C. Contributor
- D. Owner

**Correct answer: B. Reader**

### Explanation

It grants read-only management-plane access.

### Why the other answers are incorrect

- **A. User Access Administrator:** It manages access permissions rather than merely viewing resources.
- **C. Contributor:** It allows resource modification.
- **D. Owner:** It allows broad management and access assignment.

### Key concept to remember

Choose the narrowest sufficient role and scope; Reader does not grant all data-plane access.

**Brochure reference:** Chapter 8

---

## Question 164 — Contributor role

A deployment engineer must create and modify Azure resources but must not assign Azure RBAC roles. Which built-in role best meets the requirement?

- A. User Access Administrator
- B. Reader
- C. Contributor
- D. Owner

**Correct answer: C. Contributor**

### Explanation

It manages resources but cannot assign Azure RBAC roles through that role.

### Why the other answers are incorrect

- **A. User Access Administrator:** It manages user access instead of general resource deployment.
- **B. Reader:** It cannot create or modify resources.
- **D. Owner:** It can grant access to others.

### Key concept to remember

Contributor manages resources; Owner also manages access.

**Brochure reference:** Chapter 8

---

## Question 165 — Identity services

Match requirements:

1. Managed LDAP and Kerberos for a legacy workload.
2. Cloud identity and sign-in for employees.
3. Require MFA when a device is noncompliant.

**Choices:** Conditional Access; Entra Domain Services; Entra ID

**Correct answer:** 1 Entra Domain Services; 2 Entra ID; 3 Conditional Access

### Explanation

Managed domain protocols, cloud identity and contextual policies are distinct capabilities.

### Correct associations

- **Managed LDAP and Kerberos for a legacy workload.** → Entra Domain Services
- **Cloud identity and sign-in for employees.** → Entra ID
- **Require MFA when a device is noncompliant.** → Conditional Access

### Key concept to remember

Identify whether the need is directory protocols, cloud identity, or conditional authentication.

**Brochure reference:** Chapter 8

---

## Question 166 — Defense in depth

Arrange the following defense-in-depth layers from outermost to innermost: Data, Network, Physical security, Application.

1. Application
2. Data
3. Network
4. Physical security

**Correct answer:** Physical security → Network → Application → Data

### Explanation

Physical controls are outermost, followed by network and application controls, with data at the center.

### Correct order

1. Physical security
2. Network
3. Application
4. Data

### Key concept to remember

Defense in depth protects data through multiple independent security layers.

**Brochure reference:** Chapter 8

---

## Question 167 — Azure cost factors

Which TWO choices can change the estimated cost of an otherwise identical Azure VM deployment?

1. Azure region.
2. VM size.
3. The name of its resource group alone.
4. The alphabetical order of tags.

**Correct answer:** 1 and 2

### Explanation

Region-specific rates and resource capacity can affect price.

### Item-by-item correction

- **1. Correct:** Prices can vary between Azure regions.
- **2. Correct:** A VM size determines compute capacity and price.
- **3. Incorrect:** Naming a resource group does not directly change resource prices.
- **4. Incorrect:** Tag ordering does not change resource prices.

### Key concept to remember

Region, service type, capacity, consumption, licensing and network transfers can affect costs.

**Brochure reference:** Chapter 9

---

## Question 168 — Azure Hybrid Benefit

An organization has eligible existing Windows Server licenses and wants to reduce licensing costs when moving supported workloads to Azure. Which option should it evaluate?

- A. Azure Policy
- B. Azure Spot VMs
- C. Azure Hybrid Benefit
- D. Azure Pricing Calculator

**Correct answer: C. Azure Hybrid Benefit**

### Explanation

Eligible existing licenses can be used under applicable licensing terms.

### Why the other answers are incorrect

- **A. Azure Policy:** It enforces configuration rules, not licensing discounts.
- **B. Azure Spot VMs:** They discount spare compute capacity and may be evicted.
- **D. Azure Pricing Calculator:** It estimates costs but does not provide the licensing benefit.

### Key concept to remember

Hybrid Benefit is a licensing benefit; reservations and savings plans are consumption commitments.

**Brochure reference:** Chapter 9

---

## Question 169 — Budget alerts

Select Yes or No:

1. Cost Management can alert when actual or forecast spending exceeds a configured threshold.
2. Creating a budget automatically stops all Azure resources at the threshold.
3. A budget can help track spending.

**Correct answer:** Yes / No / Yes

### Explanation

Budgets monitor costs and generate alerts but are not automatic spending caps.

### Item-by-item correction

- **1. Yes:** Budget alerts can notify on actual or forecast threshold crossings.
- **2. No:** Budget creation alone does not stop resources automatically.
- **3. Yes:** Budgets help monitor spending.

### Key concept to remember

An Azure budget is a monitoring and alerting tool, not a hard spending limit.

**Brochure reference:** Chapter 9

---

## Question 170 — Forecast spending

A finance team wants to examine this month's actual expenditure and project the end-of-month cost based on existing usage. Which tool is most appropriate?

- A. Azure Pricing Calculator
- B. Microsoft Cost Management
- C. Azure Advisor
- D. Azure Monitor

**Correct answer: B. Microsoft Cost Management**

### Explanation

It analyzes actual costs and forecasts expenditure from available usage data.

### Why the other answers are incorrect

- **A. Azure Pricing Calculator:** It estimates a planned deployment from input assumptions.
- **C. Azure Advisor:** It recommends improvements but is not the main cost reporting tool.
- **D. Azure Monitor:** It collects operational telemetry, not the main billing analysis.

### Key concept to remember

Cost Management tracks and forecasts actual cloud spending; Pricing Calculator estimates planned configurations.

**Brochure reference:** Chapter 9

---

## Question 171 — Reservations versus spot

A production database workload is stable and will run continuously for three years. It cannot tolerate eviction. Which option can reduce eligible compute charges without relying on spare capacity?

- A. Azure Reservations
- B. Resource locks
- C. Azure Spot VMs
- D. Azure Tags

**Correct answer: A. Azure Reservations**

### Explanation

Reservations provide discounted eligible committed usage and do not rely on evictable Spot capacity.

### Why the other answers are incorrect

- **B. Resource locks:** They protect management operations, not compute pricing.
- **C. Azure Spot VMs:** They may be evicted, violating the workload requirement.
- **D. Azure Tags:** They help organize cost reports but do not discount usage.

### Key concept to remember

Commitment-based pricing fits predictable workloads; Spot fits interruptible workloads.

**Brochure reference:** Chapter 9

---

## Question 172 — Cost optimization tools

Match each requirement:

1. Estimate the monthly price of a proposed deployment.
2. Investigate yesterday's actual spending.
3. Receive recommendations to resize an underused VM.

**Choices:** Azure Advisor; Cost Management; Pricing Calculator

**Correct answer:** 1 Pricing Calculator; 2 Cost Management; 3 Azure Advisor

### Explanation

The tools address planning, actual spending analysis and optimization recommendations respectively.

### Correct associations

- **Estimate the monthly price of a proposed deployment.** → Pricing Calculator
- **Investigate yesterday's actual spending.** → Cost Management
- **Receive recommendations to resize an underused VM.** → Azure Advisor

### Key concept to remember

Before deployment: calculator. Actual expenditure: Cost Management. Optimization advice: Advisor.

**Brochure reference:** Chapter 9

---

## Question 173 — Data transfer costs

A company compares hosting a media service in two regions. The service sends substantial data to Internet users. Which additional factor should be considered when estimating costs?

- A. Number of resource group names
- B. Number of management group levels
- C. Number of tag characters
- D. Outbound data transfer charges

**Correct answer: D. Outbound data transfer charges**

### Explanation

Egress may generate charges depending on the service and network path.

### Why the other answers are incorrect

- **A. Number of resource group names:** Names do not directly incur charges.
- **B. Number of management group levels:** Hierarchy depth is not an Internet data transfer pricing factor.
- **C. Number of tag characters:** Tag length does not determine network transfer prices.

### Key concept to remember

Consider egress as well as compute and storage; not every data transfer is priced the same way.

**Brochure reference:** Chapter 9

---

## Question 174 — Commitment pricing

Select Yes or No:

1. Reservations discount every Azure charge, including unrelated network traffic.
2. A savings plan requires no spending commitment.
3. A commitment guarantees that all storage and networking charges are covered.

**Correct answer:** No / No / No

### Explanation

Commitments can discount eligible usage but do not universally cover unrelated charges.

### Item-by-item correction

- **1. No:** Reservations discount eligible usage rather than every charge.
- **2. No:** Savings plans require an hourly spending commitment.
- **3. No:** Unrelated storage and networking charges are not universally covered.

### Key concept to remember

Understand what usage qualifies for a discount rather than assuming a commitment covers the whole bill.

**Brochure reference:** Chapter 9

---

## Question 175 — Cost reduction after testing

A team finishes testing an Azure VM and wants to stop its regular compute charges while retaining its OS disk for later use. What should it do?

- A. Add a cost-center tag
- B. Deallocate the VM
- C. Create a budget alert
- D. Apply a CanNotDelete lock

**Correct answer: B. Deallocate the VM**

### Explanation

Deallocation releases the compute allocation while disks can remain.

### Why the other answers are incorrect

- **A. Add a cost-center tag:** Tags categorize expenditure; they do not stop compute billing.
- **C. Create a budget alert:** It monitors spending without automatically releasing compute.
- **D. Apply a CanNotDelete lock:** It prevents deletion, not compute charges.

### Key concept to remember

Deallocation and deletion are different; retained storage may remain billable.

**Brochure reference:** Chapter 9

---

## Question 176 — Policy initiative

An organization must apply a set of ten related resource configuration policies as one compliance package. Which Azure Policy feature meets this need?

- A. Azure RBAC role
- B. Resource lock
- C. Resource group
- D. Policy initiative

**Correct answer: D. Policy initiative**

### Explanation

An initiative groups policy definitions for coordinated assignment and compliance evaluation.

### Why the other answers are incorrect

- **A. Azure RBAC role:** It groups permissions, not resource configuration rules.
- **B. Resource lock:** It protects operations from accidental change or deletion.
- **C. Resource group:** It groups resources, not policy definitions.

### Key concept to remember

An initiative combines multiple policy definitions into one logical governance package.

**Brochure reference:** Chapter 10

---

## Question 177 — Policy effects

A team wants to identify existing resources that violate a new configuration standard, without immediately blocking deployments. Which policy effect is appropriate for reporting noncompliance?

- A. Contributor
- B. Audit
- C. ReadOnly
- D. Deny

**Correct answer: B. Audit**

### Explanation

Audit records noncompliance without the Deny effect blocking the resource operation.

### Why the other answers are incorrect

- **A. Contributor:** This is an RBAC role, not a policy effect.
- **C. ReadOnly:** This is a resource lock type, not the requested policy effect.
- **D. Deny:** It blocks applicable noncompliant requests.

### Key concept to remember

Audit evaluates and reports; Deny enforces by blocking noncompliant requests.

**Brochure reference:** Chapter 10

---

## Question 178 — Tag enforcement

An organization requires every newly deployed supported resource to have a CostCenter tag. Which service can enforce this requirement?

- A. Azure Advisor
- B. Azure Policy
- C. Azure RBAC Reader
- D. Azure Tags alone

**Correct answer: B. Azure Policy**

### Explanation

A policy can require the tag and deny noncompliant deployments.

### Why the other answers are incorrect

- **A. Azure Advisor:** It offers recommendations, not mandatory enforcement.
- **C. Azure RBAC Reader:** Reader controls access, not resource property requirements.
- **D. Azure Tags alone:** Tags provide metadata but do not enforce their own presence.

### Key concept to remember

Tags describe resources; Policy can enforce required tags.

**Brochure reference:** Chapter 10

---

## Question 179 — Tag inheritance

Select Yes or No:

1. Tags can help categorize costs by project.
2. Resource group tags are not automatically inherited by resources by default.
3. Azure Policy can implement tag inheritance for supported resources.

**Correct answer:** Yes / Yes / Yes

### Explanation

Tags are useful metadata, but resource tag inheritance is not automatic and can be implemented by policy.

### Item-by-item correction

- **1. Yes:** Tags can help allocate costs by project.
- **2. Yes:** Resource tags do not automatically inherit resource-group tags by default.
- **3. Yes:** Azure Policy can implement tag inheritance for supported resources.

### Key concept to remember

Do not confuse inherited RBAC and policy assignments with resource metadata inheritance.

**Brochure reference:** Chapter 10

---

## Question 180 — Resource lock selection

Administrators must be able to change a storage account's configuration but must not accidentally delete the account. Which lock type should be applied?

- A. ReadOnly
- B. Azure tag
- C. CanNotDelete
- D. Reader role

**Correct answer: C. CanNotDelete**

### Explanation

It permits management changes but blocks deletion while the lock remains.

### Why the other answers are incorrect

- **A. ReadOnly:** It also blocks management changes, exceeding the requirement.
- **B. Azure tag:** Metadata does not prevent deletion.
- **D. Reader role:** It prevents changes for that user and is not a resource-level safeguard.

### Key concept to remember

CanNotDelete allows modifications; ReadOnly blocks modifications and deletion at the protected management scope.

**Brochure reference:** Chapter 10

---

## Question 181 — Resource lock scope

Select Yes or No:

1. Owners are exempt from all management-plane locks.
2. A user with permission to remove the lock can remove it.
3. A resource lock always prevents deletion of individual blobs inside a storage account.

**Correct answer:** No / Yes / No

### Explanation

Locks override applicable management operations, can be removed by authorized users, and do not generally protect data-plane operations.

### Item-by-item correction

- **1. No:** Management-plane locks can affect Owners as well as other users.
- **2. Yes:** A user with the required permission can remove a lock.
- **3. No:** Resource locks apply to management-plane operations and do not generally prevent blob data-plane deletion.

### Key concept to remember

Resource locks protect management-plane operations, not every action on stored data.

**Brochure reference:** Chapter 10

---

## Question 182 — Service Trust Portal

An auditor asks for Microsoft's own third-party audit reports and compliance documentation about Azure. Which resource should the auditor consult?

- A. Service Trust Portal
- B. Microsoft Defender for Cloud
- C. Azure Policy
- D. Azure Monitor

**Correct answer: A. Service Trust Portal**

### Explanation

It provides Microsoft compliance reports, audits and security documentation.

### Why the other answers are incorrect

- **B. Microsoft Defender for Cloud:** It assesses the customer's cloud security posture and regulatory controls.
- **C. Azure Policy:** It evaluates resource configurations.
- **D. Azure Monitor:** It collects operational telemetry.

### Key concept to remember

Service Trust Portal provides evidence about Microsoft's services; it does not certify your specific workload.

**Brochure reference:** Chapter 10

---

## Question 183 — Microsoft Purview

A company needs to discover and classify sensitive data across its data estate so that it can understand where confidential information is stored. Which solution addresses this governance requirement?

- A. Microsoft Entra Domain Services
- B. Microsoft Purview
- C. Azure Resource Health
- D. Azure VM Scale Sets

**Correct answer: B. Microsoft Purview**

### Explanation

It provides data discovery, classification and governance capabilities.

### Why the other answers are incorrect

- **A. Microsoft Entra Domain Services:** It provides managed domain services.
- **C. Azure Resource Health:** It reports the health of individual Azure resources.
- **D. Azure VM Scale Sets:** They manage and scale VM instances.

### Key concept to remember

Purview addresses data governance and protection, not resource uptime or compute scaling.

**Brochure reference:** Chapter 10

---

## Question 184 — Governance controls

Match each requirement:

1. Allow a user to view resource configuration only.
2. Require resources to use approved regions.
3. Prevent accidental resource deletion.

**Choices:** Azure Policy; Azure RBAC Reader; CanNotDelete lock

**Correct answer:** 1 Azure RBAC Reader; 2 Azure Policy; 3 CanNotDelete lock

### Explanation

Each feature meets the specific permission, configuration or protection requirement.

### Correct associations

- **Allow a user to view resource configuration only.** → Azure RBAC Reader
- **Require resources to use approved regions.** → Azure Policy
- **Prevent accidental resource deletion.** → CanNotDelete lock

### Key concept to remember

RBAC controls who; Policy controls allowed configurations; locks protect resource operations.

**Brochure reference:** Chapter 10

---

## Question 185 — Azure PowerShell

A Windows administrator already writes PowerShell scripts and wants to manage Azure resources using cmdlets such as Get-AzVM. Which tool should be used?

- A. Azure Storage Explorer
- B. Azure PowerShell
- C. Azure CLI
- D. Azure Resource Health

**Correct answer: B. Azure PowerShell**

### Explanation

The Az PowerShell modules provide Azure management cmdlets.

### Why the other answers are incorrect

- **A. Azure Storage Explorer:** It is a graphical storage management tool.
- **C. Azure CLI:** It uses az commands rather than PowerShell cmdlets.
- **D. Azure Resource Health:** It provides resource health information.

### Key concept to remember

Azure PowerShell uses cmdlets; Azure CLI uses az commands and can run from different shells.

**Brochure reference:** Chapter 11

---

## Question 186 — Azure CLI

An engineer wants to automate Azure resource management using az commands from a Linux terminal. Which tool provides these commands?

- A. Bicep
- B. Azure PowerShell
- C. Azure CLI
- D. Azure Portal

**Correct answer: C. Azure CLI**

### Explanation

It is the cross-platform command-line interface using az commands.

### Why the other answers are incorrect

- **A. Bicep:** It declares infrastructure rather than providing the az command interface.
- **B. Azure PowerShell:** It uses Az PowerShell cmdlets.
- **D. Azure Portal:** It is a browser graphical interface.

### Key concept to remember

Azure CLI is cross-platform; Cloud Shell can provide an authenticated environment for it.

**Brochure reference:** Chapter 11

---

## Question 187 — Cloud Shell

Which TWO statements about Azure Cloud Shell are correct?

1. It is accessible through a browser.
2. It supports Bash and PowerShell.
3. It is required for every Azure deployment.
4. All resources deployed from Cloud Shell are free.

**Correct answer:** 1 and 2

### Explanation

Cloud Shell provides an authenticated browser-based Bash or PowerShell environment.

### Item-by-item correction

- **1. Correct:** Cloud Shell is available through a browser.
- **2. Correct:** Cloud Shell offers Bash and PowerShell.
- **3. Incorrect:** Azure also supports other deployment interfaces and tools.
- **4. Incorrect:** Resources incur their normal charges regardless of management interface.

### Key concept to remember

Cloud Shell is a convenient management environment, not a special free resource pricing model.

**Brochure reference:** Chapter 11

---

## Question 188 — Bicep

A team wants to define infrastructure declaratively using Azure-native, concise syntax that compiles into ARM template JSON. Which language should it use?

- A. KQL
- B. Bicep
- C. Azure PowerShell
- D. Azure CLI

**Correct answer: B. Bicep**

### Explanation

Bicep is a declarative Azure infrastructure language that compiles to ARM templates.

### Why the other answers are incorrect

- **A. KQL:** It queries log data.
- **C. Azure PowerShell:** It provides management cmdlets, not this declarative language.
- **D. Azure CLI:** It runs management commands rather than being a declarative template language.

### Key concept to remember

Bicep and ARM templates both support Infrastructure as Code.

**Brochure reference:** Chapter 11

---

## Question 189 — Infrastructure as Code

Select Yes or No:

1. ARM templates use JSON.
2. Bicep can describe desired infrastructure state.
3. Infrastructure as Code supports repeatable deployments.

**Correct answer:** Yes / Yes / Yes

### Explanation

Declarative templates support consistent and repeatable deployments.

### Item-by-item correction

- **1. Yes:** ARM templates use JSON.
- **2. Yes:** Bicep is a declarative language for describing infrastructure.
- **3. Yes:** Infrastructure as Code supports consistent, repeatable deployments.

### Key concept to remember

IaC makes infrastructure definitions reviewable, repeatable and source-controllable.

**Brochure reference:** Chapter 11

---

## Question 190 — Azure Resource Manager

A developer submits a request from the Azure portal to create a resource group. Which Azure layer handles resource-management requests from the portal, CLI, PowerShell and ARM templates?

- A. Azure Resource Manager (ARM)
- B. Azure Monitor
- C. Azure Storage Explorer
- D. Microsoft Entra Domain Services

**Correct answer: A. Azure Resource Manager (ARM)**

### Explanation

ARM is the deployment and management control plane for Azure resources.

### Why the other answers are incorrect

- **B. Azure Monitor:** It collects and analyzes telemetry.
- **C. Azure Storage Explorer:** It manages storage through a graphical client.
- **D. Microsoft Entra Domain Services:** It provides managed domain protocols.

### Key concept to remember

ARM is the common resource management layer; ARM templates are one way to describe deployments.

**Brochure reference:** Chapter 11

---

## Question 191 — Azure Arc

A company keeps supported Linux servers in its datacenter and in another cloud. It wants centralized Azure-based management without first migrating those machines. Which solution should it use?

- A. Azure Data Box
- B. Azure Migrate
- C. Azure File Sync
- D. Azure Arc

**Correct answer: D. Azure Arc**

### Explanation

It extends supported Azure management capabilities to non-Azure resources.

### Why the other answers are incorrect

- **A. Azure Data Box:** It transfers large datasets using physical devices.
- **B. Azure Migrate:** It assesses and migrates workloads to Azure.
- **C. Azure File Sync:** It synchronizes file shares.

### Key concept to remember

Arc manages resources where they already run; Migrate helps move workloads to Azure.

**Brochure reference:** Chapter 11

---

## Question 192 — Management interfaces

Match each requirement:

1. Graphical administration in a browser.
2. Manage resources from a phone.
3. Authenticated browser terminal with Bash or PowerShell.

**Choices:** Azure Cloud Shell; Azure mobile app; Azure portal

**Correct answer:** 1 Azure portal; 2 Azure mobile app; 3 Azure Cloud Shell

### Explanation

Each interface matches the requested device or interaction style.

### Correct associations

- **Graphical administration in a browser.** → Azure portal
- **Manage resources from a phone.** → Azure mobile app
- **Authenticated browser terminal with Bash or PowerShell.** → Azure Cloud Shell

### Key concept to remember

Choose the management interface according to graphical, mobile or terminal requirements.

**Brochure reference:** Chapter 11

---

## Question 193 — Azure Resource Health

One virtual machine is unexpectedly unavailable. You want Azure's health assessment for that specific VM and possible platform-related causes. Which feature should you inspect?

- A. Azure Pricing Calculator
- B. Azure Service Health
- C. Azure Resource Health
- D. Azure Advisor

**Correct answer: C. Azure Resource Health**

### Explanation

It provides health information for individual Azure resources.

### Why the other answers are incorrect

- **A. Azure Pricing Calculator:** It estimates planned costs.
- **B. Azure Service Health:** It focuses on Azure service incidents and advisories affecting subscriptions.
- **D. Azure Advisor:** It provides optimization recommendations.

### Key concept to remember

Resource Health is resource-specific; Service Health is subscription-relevant platform health.

**Brochure reference:** Chapter 12

---

## Question 194 — Azure Status

A company is considering a region where it has no subscriptions deployed. It wants the public global overview of Azure platform availability. Which view is best suited?

- A. Azure Resource Health
- B. Application Insights
- C. Azure Service Health
- D. Azure Status

**Correct answer: D. Azure Status**

### Explanation

It provides a public broad view of Azure service status by region.

### Why the other answers are incorrect

- **A. Azure Resource Health:** It focuses on an individual deployed resource.
- **B. Application Insights:** It monitors instrumented applications.
- **C. Azure Service Health:** It provides personalized information for services and regions relevant to your subscriptions.

### Key concept to remember

Status is public and global; Service Health is personalized; Resource Health is individual.

**Brochure reference:** Chapter 12

---

## Question 195 — Azure health tools

Match each requirement:

1. Public global platform status.
2. Planned Azure maintenance affecting your subscription.
3. Health of a particular storage account.

**Choices:** Azure Status; Resource Health; Service Health

**Correct answer:** 1 Azure Status; 2 Service Health; 3 Resource Health

### Explanation

The tools correspond to global, personalized service and individual resource scopes.

### Correct associations

- **Public global platform status.** → Azure Status
- **Planned Azure maintenance affecting your subscription.** → Service Health
- **Health of a particular storage account.** → Resource Health

### Key concept to remember

Remember the three health scopes: global platform, affected services, individual resources.

**Brochure reference:** Chapter 12

---

## Question 196 — Azure Monitor metrics

An administrator needs a numerical time series showing the CPU percentage of a virtual machine over the last hour. Which telemetry type is most directly suited?

- A. Metrics
- B. Resource tags
- C. Logs
- D. Azure Policy definitions

**Correct answer: A. Metrics**

### Explanation

Metrics are timestamped numerical measurements such as CPU utilization.

### Why the other answers are incorrect

- **B. Resource tags:** They provide metadata, not CPU time-series telemetry.
- **C. Logs:** Logs contain event records and diagnostic information; metrics are the direct numerical time-series representation here.
- **D. Azure Policy definitions:** They describe governance rules.

### Key concept to remember

Metrics measure values over time; logs provide richer event and diagnostic records.

**Brochure reference:** Chapter 12

---

## Question 197 — Log Analytics and KQL

An operations engineer wants to write a query that filters Azure Monitor log records by error type and groups results by resource. Which tool should be used?

- A. Log Analytics
- B. Azure Advisor
- C. Azure Pricing Calculator
- D. Azure Service Health

**Correct answer: A. Log Analytics**

### Explanation

It provides a KQL query experience for analyzing collected logs.

### Why the other answers are incorrect

- **B. Azure Advisor:** It supplies best-practice recommendations.
- **C. Azure Pricing Calculator:** It estimates costs.
- **D. Azure Service Health:** It reports platform incidents and advisories.

### Key concept to remember

Log Analytics queries Azure Monitor logs using KQL.

**Brochure reference:** Chapter 12

---

## Question 198 — Alert action groups

An existing Azure Monitor alert rule detects CPU utilization above a threshold. The team wants the rule to send email notifications and trigger an automated response. Which feature defines those responses?

- A. Resource group
- B. Azure Policy initiative
- C. Log Analytics workspace
- D. Action group

**Correct answer: D. Action group**

### Explanation

It defines reusable notification and action configurations associated with alerts.

### Why the other answers are incorrect

- **A. Resource group:** It organizes Azure resources.
- **B. Azure Policy initiative:** It groups governance policy definitions.
- **C. Log Analytics workspace:** It stores and organizes collected logs.

### Key concept to remember

An alert rule defines when to trigger; an action group defines what happens in response.

**Brochure reference:** Chapter 12

---

## Question 199 — Application Insights

Which TWO measurements are most directly associated with Application Insights for an instrumented web app?

1. Request response times.
2. Failed requests and exceptions.
3. The Azure subscription billing invoice total.
4. The allowed deployment region policy.

**Correct answer:** 1 and 2

### Explanation

Application Insights focuses on application requests, failures and performance telemetry.

### Item-by-item correction

- **1. Correct:** Request duration is application performance telemetry.
- **2. Correct:** Failed requests and exceptions are application health telemetry.
- **3. Incorrect:** Invoice totals belong to cost and billing tools.
- **4. Incorrect:** Deployment-region restrictions belong to governance policies.

### Key concept to remember

Application Insights is a specialized Azure Monitor capability for application performance and behavior.

**Brochure reference:** Chapter 12

---

## Question 200 — Azure Advisor

Select Yes or No:

1. Azure Advisor recommends improvements to deployed resources.
2. It provides recommendations for cost and reliability.
3. It automatically implements every recommendation without user action.

**Correct answer:** Yes / Yes / No

### Explanation

Advisor identifies improvement opportunities but does not automatically apply every change.

### Item-by-item correction

- **1. Yes:** Advisor analyzes deployed resources; Pricing Calculator estimates proposed deployment costs.
- **2. Yes:** Advisor includes cost and reliability recommendations.
- **3. No:** Advisor recommendations are not all applied automatically.

### Key concept to remember

Advisor recommends; Azure Policy enforces; Azure Monitor observes and alerts.

**Brochure reference:** Chapter 12
