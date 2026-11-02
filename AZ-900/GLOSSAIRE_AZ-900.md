# AZ-900 — Glossaire de préparation à Microsoft Azure Fundamentals

Ce dossier est exclusivement réservé à la préparation de l'examen **AZ-900** :
glossaires, notes, exercices, ressources et révisions liés à Azure Fundamentals.
Les documents Scrum et les préparations à d'autres examens n'y ont pas leur place.

Ce glossaire présente les termes anglais à reconnaître à l'examen et leur
explication en français. Il vise les trois grands domaines d'Azure Fundamentals :
concepts du cloud, architecture et services Azure, gestion et gouvernance.
Les exemples et définitions sont des explications pédagogiques originales,
pas des questions officielles ni une reproduction de l'examen.

**Repère de rédaction : novembre 2026.** Le guide Microsoft Learn n'a pas pu être
consulté en direct pendant la rédaction. Ce document ne garantit donc pas une
correspondance exhaustive avec la dernière révision du programme 2026.
Le [guide officiel AZ-900](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900)
reste la référence pour les compétences évaluées, les changements et leur date
d'entrée en vigueur. Les services cités comme compléments servent à comprendre
les distinctions ; leur présence ici ne signifie pas qu'ils sont tous exigés.

## Sommaire

1. [Concepts du cloud](#1-concepts-du-cloud)
2. [Architecture et organisation Azure](#2-architecture-et-organisation-azure)
3. [Calcul et hébergement](#3-calcul-et-hébergement)
4. [Réseau](#4-réseau)
5. [Stockage et migration](#5-stockage-et-migration)
6. [Identité, accès et sécurité](#6-identité-accès-et-sécurité)
7. [Coûts et engagements de service](#7-coûts-et-engagements-de-service)
8. [Gouvernance et conformité](#8-gouvernance-et-conformité)
9. [Déploiement et administration](#9-déploiement-et-administration)
10. [Supervision](#10-supervision)
11. [Compléments de reconnaissance](#11-compléments-de-reconnaissance)
12. [Distinctions à maîtriser](#12-distinctions-à-maîtriser)
13. [Autoévaluation et sources](#13-autoévaluation-et-sources)

## 1. Concepts du cloud

| Terme anglais / acronyme | Définition et point à retenir |
|---|---|
| Cloud computing | Fourniture à la demande de ressources informatiques par un réseau, généralement avec une facturation liée à l'utilisation. |
| On-premises | Infrastructure hébergée dans les locaux de l'organisation ou dans un environnement qu'elle exploite elle-même. |
| Public cloud | Cloud exploité par un fournisseur pour plusieurs clients. « Public » ne signifie pas que les données des clients sont publiques. |
| Private cloud | Environnement cloud réservé à une seule organisation, hébergé sur site ou chez un prestataire. |
| Hybrid cloud | Combinaison coordonnée de ressources de cloud public et de cloud privé ou sur site. |
| Multicloud | Utilisation de plusieurs fournisseurs cloud. Ce n'est pas un synonyme de cloud hybride. |
| Shared responsibility model | Répartition des responsabilités entre fournisseur et client. Elle dépend du service ; le client reste notamment responsable de ses données et de la configuration de ses accès. |
| Infrastructure as a Service — IaaS | Le fournisseur gère l'infrastructure physique ; le client gère notamment le système d'exploitation, les applications et leurs configurations. Exemple : Azure Virtual Machines. |
| Platform as a Service — PaaS | Le fournisseur gère aussi la plateforme d'exécution. Le client se concentre sur son application, ses données et sa configuration. Exemple : Azure App Service. |
| Software as a Service — SaaS | Application prête à l'emploi exploitée par le fournisseur. Le client conserve des responsabilités sur les utilisateurs, les données et les paramètres. Exemple : Microsoft 365. |
| Serverless | Modèle où le fournisseur prend en charge les serveurs et une grande partie de la capacité d'exécution. Il existe toujours des serveurs ; la tarification dépend du service et du plan. |
| Consumption-based model | Modèle économique dans lequel la facture dépend de ressources consommées ou provisionnées. |
| Pay-as-you-go | Paiement à l'usage, sans engagement de réservation à long terme. Une ressource inactive peut néanmoins rester facturable. |
| Capital expenditure — CapEx | Dépense d'investissement initiale, par exemple l'achat de serveurs. |
| Operational expenditure — OpEx | Dépense d'exploitation, par exemple une facture mensuelle de services cloud. |
| High availability — HA | Conception visant à maintenir un service disponible malgré certaines pannes. Elle nécessite des choix d'architecture adaptés. |
| Scalability | Capacité à adapter les ressources à l'évolution de la demande. |
| Vertical scaling / scale up / scale down | Augmenter ou réduire la puissance d'une instance : processeur, mémoire, etc. |
| Horizontal scaling / scale out / scale in | Ajouter ou retirer des instances. |
| Elasticity | Adaptation dynamique de la capacité à la demande, notamment à la hausse comme à la baisse. |
| Autoscaling | Mécanisme d'ajustement automatique des ressources selon des règles ou des signaux. |
| Reliability | Capacité d'un système à fonctionner comme prévu et à se rétablir après une défaillance. |
| Resiliency | Capacité à résister aux perturbations et à retrouver un fonctionnement acceptable. |
| Fault tolerance | Capacité à poursuivre le fonctionnement malgré la défaillance de certains composants. |
| Disaster recovery — DR | Organisation de la reprise après un sinistre majeur. Ne se limite pas à conserver une sauvegarde. |
| Backup / restore | Copie de données et opération permettant de les récupérer. Une réplication n'est pas une sauvegarde indépendante. |
| Recovery Point Objective — RPO | Perte de données maximale acceptable, exprimée en durée. |
| Recovery Time Objective — RTO | Durée cible maximale pour rétablir un service après une interruption. |
| Predictability | Possibilité d'anticiper performances et coûts grâce aux mesures, aux choix de capacité et aux outils de gestion. |
| Agility | Capacité à provisionner et adapter rapidement un environnement. |
| Manageability | Capacité à administrer les ressources, leur configuration et leur exploitation à l'aide d'outils et d'automatisation. |

## 2. Architecture et organisation Azure

| Terme anglais / acronyme | Définition et point à retenir |
|---|---|
| Datacenter | Installation physique contenant serveurs, équipements réseau, alimentation et refroidissement. |
| Azure region | Zone géographique contenant un ou plusieurs centres de données reliés par un réseau à faible latence. |
| Region pair | Association de certaines régions Azure. Toutes les régions ne sont pas appariées ; une paire ne réplique pas automatiquement toutes les ressources. |
| Availability Zone — AZ | Groupe d'un ou plusieurs centres de données physiquement séparés au sein d'une région, avec alimentation, refroidissement et réseau indépendants. |
| Zonal resource | Ressource déployée dans une zone de disponibilité précise. |
| Zone-redundant resource | Ressource ou service réparti entre plusieurs zones, selon les capacités et la configuration du service. |
| Sovereign region | Région isolée répondant à des exigences particulières de souveraineté ou de réglementation, par exemple certains environnements gouvernementaux. |
| Geography | Périmètre géographique Azure regroupant des régions, associé notamment à des considérations de résidence des données. |
| Data residency | Lieu où les données sont stockées ou traitées. Les garanties précises dépendent du service et de sa configuration. |
| Azure resource | Élément administrable dans Azure : machine virtuelle, réseau virtuel, compte de stockage, etc. |
| Resource group — RG | Conteneur logique de ressources partageant souvent un cycle de vie. Une ressource appartient à un seul groupe de ressources à un instant donné. |
| Resource group location | Région où sont conservées les métadonnées du groupe ; ses ressources peuvent être situées dans d'autres régions. |
| Subscription | Périmètre de gestion, de facturation et de limites de service contenant des groupes de ressources. Les accès restent contrôlés par les rôles. |
| Management group | Niveau permettant d'organiser plusieurs abonnements et d'y appliquer des règles ou des accès hérités. |
| Resource hierarchy | Hiérarchie de gestion : groupes d'administration → abonnements → groupes de ressources → ressources. |
| Microsoft Entra tenant / directory | Instance de Microsoft Entra ID contenant les identités d'une organisation. Un tenant peut être associé à plusieurs abonnements Azure. |
| Scope | Périmètre d'application d'un rôle, d'une stratégie ou d'une autre configuration. |
| Inheritance | Transmission de certaines règles ou attributions depuis un périmètre parent vers ses descendants. |
| Resource provider | Fournisseur d'un type de ressources Azure, par exemple `Microsoft.Compute`. |
| Azure Resource Manager — ARM | Couche de gestion utilisée pour créer, configurer et supprimer les ressources Azure. À ne pas confondre avec une architecture de processeur. |

## 3. Calcul et hébergement

| Terme anglais / acronyme | Définition et point à retenir |
|---|---|
| Compute | Ressources exécutant du code : machines virtuelles, conteneurs, fonctions et services d'hébergement. |
| Azure Virtual Machines — VM | Machines virtuelles IaaS. Le client administre notamment le système invité et les logiciels installés. |
| VM size | Choix de ressources d'une VM : processeurs, mémoire et capacités associées. Influence performances et prix. |
| VM image | Modèle utilisé pour créer une VM avec un système d'exploitation et éventuellement des logiciels préinstallés. |
| Virtual Machine Scale Sets — VMSS | Groupes de machines virtuelles permettant de gérer et de dimensionner plusieurs instances. |
| Availability set | Regroupement de VM réparties entre domaines de panne et de mise à jour. Ce n'est pas une répartition entre régions ou zones. |
| Fault domain | Ensemble d'équipements partageant un risque de panne commun, par exemple alimentation ou commutateur réseau. |
| Update domain | Groupe de VM pouvant être concernées ensemble par une maintenance planifiée dans un groupe à haute disponibilité. |
| Azure Virtual Desktop — AVD | Service permettant de fournir des bureaux et applications Windows à distance. |
| Azure App Service | Plateforme managée pour héberger notamment des applications web et des API sans administrer directement le système des serveurs. |
| App Service plan | Détermine les ressources de calcul et fonctionnalités associées aux applications hébergées. |
| Container | Unité d'exécution regroupant application et dépendances ; les conteneurs partagent généralement le noyau du système hôte. |
| Container image | Modèle immuable à partir duquel des conteneurs sont démarrés. |
| Azure Container Instances — ACI | Exécution de conteneurs sans gérer directement de machines virtuelles ni de cluster d'orchestration. |
| Azure Container Apps | Plateforme managée pour applications conteneurisées, avec notamment mise à l'échelle et scénarios pilotés par événements. |
| Azure Kubernetes Service — AKS | Service Kubernetes managé pour orchestrer des conteneurs. Le client conserve des responsabilités sur les charges de travail et la configuration du cluster. |
| Kubernetes / orchestration | Gestion automatisée du déploiement, du placement et du cycle de vie de conteneurs. |
| Azure Functions | Exécution de fonctions déclenchées par des événements ; le dimensionnement et la facturation dépendent du plan d'hébergement. |
| Trigger | Événement déclenchant une exécution, par exemple un appel HTTP, un message ou une planification. |
| Hosting option | Choix entre VM, conteneurs, application web managée ou fonctions selon le contrôle, les dépendances et le mode d'exécution nécessaires. |

## 4. Réseau

| Terme anglais / acronyme | Définition et point à retenir |
|---|---|
| Azure Virtual Network — VNet | Réseau privé logique dans Azure permettant la communication entre ressources et vers d'autres réseaux. |
| Subnet | Sous-réseau découpant l'espace d'adressage d'un VNet. |
| IP address | Adresse identifiant une interface ou un point de terminaison sur un réseau. |
| Private IP address | Adresse utilisée dans un réseau privé ; elle n'est pas directement routable sur Internet. |
| Public IP address | Adresse publiquement routable. Son existence ne signifie pas que tous les accès sont autorisés. |
| Public endpoint | Point d'accès à un service par une adresse publique, avec des restrictions possibles selon le service. |
| Private endpoint / Azure Private Link | Interface privée dans un VNet donnant accès à un service compatible via une adresse IP privée. |
| Service endpoint | Extension de l'identité d'un sous-réseau vers certains services Azure ; ne crée pas une adresse IP privée pour le service. |
| VNet peering | Connexion entre réseaux virtuels utilisant le réseau Microsoft. Le peering n'est pas transitif par défaut. |
| Virtual private network — VPN | Tunnel chiffré traversant généralement un réseau public. |
| Azure VPN Gateway | Passerelle Azure pour établir des connexions VPN avec un réseau sur site ou des clients distants. |
| Site-to-site — S2S | Connexion VPN entre deux réseaux, typiquement le réseau de l'entreprise et un VNet. |
| Point-to-site — P2S | Connexion VPN entre un poste individuel et un réseau Azure. |
| Azure ExpressRoute | Connectivité privée vers Microsoft via un fournisseur de connectivité ; ne passe pas par l'Internet public. Le chiffrement n'est pas implicite. |
| Domain Name System — DNS | Système de résolution des noms de domaine en informations telles que des adresses IP. |
| Azure DNS | Service d'hébergement de zones DNS ; l'hébergement DNS n'équivaut pas à l'achat d'un nom de domaine. |
| Network Security Group — NSG | Règles autorisant ou refusant des flux entrants et sortants au niveau d'un sous-réseau ou d'une interface réseau. |
| Azure Firewall | Pare-feu réseau managé permettant de centraliser le filtrage des flux. |
| Azure DDoS Protection | Protection contre certaines attaques par déni de service distribué ; les capacités et couvertures dépendent de l'offre. |
| Azure Bastion | Accès RDP/SSH aux VM via un service managé, sans imposer d'adresse IP publique sur les VM cibles. |
| Load balancing | Répartition des connexions ou requêtes entre plusieurs instances pour répartir la charge et améliorer la disponibilité. |
| Latency / bandwidth | Latence : délai de communication. Bande passante : capacité de transfert. Les deux ne sont pas interchangeables. |

## 5. Stockage et migration

| Terme anglais / acronyme | Définition et point à retenir |
|---|---|
| Storage account | Ressource Azure contenant des services de stockage, avec des choix de région, de performance, de redondance et de sécurité. |
| Object storage | Stockage d'objets accessibles par identifiant ou URL, adapté notamment aux fichiers non structurés. |
| Azure Blob Storage | Stockage d'objets pour documents, images, vidéos, sauvegardes et autres données non structurées. |
| Blob container | Regroupement de blobs dans un compte de stockage. À distinguer d'un conteneur applicatif. |
| Azure Files | Partages de fichiers managés accessibles notamment via SMB ou NFS, selon le type de partage. |
| Azure Queue Storage | Stockage de messages permettant de découpler des composants applicatifs. |
| Azure Table Storage | Stockage NoSQL de données structurées non relationnelles sous forme de clés et de propriétés. |
| Azure Managed Disks | Volumes de stockage par blocs gérés par Azure et utilisés notamment par les VM. |
| Structured / semi-structured / unstructured data | Données à schéma organisé, données à structure souple comme JSON, et contenus sans schéma tabulaire imposé comme images ou vidéos. |
| Hot tier | Niveau d'accès Blob destiné aux données fréquemment consultées. |
| Cool tier | Niveau destiné aux données moins fréquemment consultées ; stockage généralement moins cher et accès plus coûteux que Hot. |
| Cold tier | Niveau en ligne pour des données rarement consultées, avec des compromis de coûts différents de Cool. Disponibilité selon la configuration. |
| Archive tier | Niveau hors ligne pour conservation longue ; nécessite une réhydratation avant lecture et ne convient pas à l'accès immédiat. |
| Rehydration | Remise de données archivées dans un niveau accessible en ligne ; peut prendre du temps et entraîner des coûts. |
| Minimum retention / early deletion charge | Certains niveaux imposent une durée minimale de facturation ; suppression ou changement trop tôt peut entraîner des frais. |
| Lifecycle management | Règles automatisant le changement de niveau ou la suppression des données selon des conditions. |
| Redundancy | Conservation de plusieurs copies pour résister à des pannes ; ne protège pas à elle seule contre toutes les suppressions ou corruptions logiques. |
| Locally redundant storage — LRS | Trois copies synchrones dans un seul centre de données de la région principale. |
| Zone-redundant storage — ZRS | Copies synchrones réparties sur trois zones de disponibilité de la région principale. |
| Geo-redundant storage — GRS | Réplication locale dans la région principale et réplication asynchrone vers une région secondaire, où les copies sont localement redondantes. |
| Geo-zone-redundant storage — GZRS | Redondance par zones dans la région principale, plus réplication asynchrone vers une région secondaire. |
| Read-access GRS / GZRS — RA-GRS / RA-GZRS | Ajoute la lecture des données dans la région secondaire ; celles-ci peuvent être en retard sur la région principale. |
| Failover | Basculement vers une infrastructure ou une région de secours. La prise en charge et les conséquences dépendent du service. |
| AzCopy | Outil en ligne de commande pour copier des données vers, depuis ou entre des stockages Azure compatibles. |
| Azure Storage Explorer | Application graphique permettant d'explorer et de gérer des ressources de stockage. |
| Azure File Sync | Synchronisation de partages Azure Files avec des serveurs Windows pour des scénarios hybrides. |
| Cloud tiering | Fonction d'Azure File Sync permettant de conserver localement les fichiers les plus utiles et de récupérer les autres depuis Azure à la demande. |
| Azure Migrate | Ensemble d'outils pour découvrir, évaluer et migrer des charges de travail vers Azure. |
| Azure Data Box | Solution de transfert hors ligne par appareil physique pour de gros volumes de données. |
| Encryption at rest | Chiffrement des données stockées. Ne remplace pas le contrôle des accès. |
| Encryption in transit | Protection des données pendant les communications, par exemple avec TLS. |
| Shared access signature — SAS | Autorisation déléguée et limitée pour accéder à certaines ressources de stockage. Une URL SAS doit être protégée comme un secret. |

## 6. Identité, accès et sécurité

| Terme anglais / acronyme | Définition et point à retenir |
|---|---|
| Microsoft Entra ID | Service cloud de gestion des identités et des accès, anciennement Azure Active Directory / Azure AD. |
| Active Directory Domain Services — AD DS | Service d'annuaire de domaine traditionnel, notamment pour Windows Server. Ce n'est pas Microsoft Entra ID. |
| Microsoft Entra Domain Services | Service managé de domaine compatible avec des fonctions comme la jonction au domaine, LDAP, Kerberos et NTLM. |
| Identity | Représentation d'un utilisateur, d'une application ou d'une charge de travail. |
| Authentication — AuthN | Vérification de l'identité : « Qui êtes-vous ? » |
| Authorization — AuthZ | Détermination des actions autorisées : « Que pouvez-vous faire ? » |
| Single sign-on — SSO | Possibilité d'accéder à plusieurs applications après une authentification, selon leur intégration et les règles appliquées. |
| Multifactor authentication — MFA | Authentification utilisant plusieurs catégories de facteurs : connaissance, possession ou caractéristique personnelle. Deux mots de passe ne constituent pas deux catégories. |
| Passwordless authentication | Authentification sans mot de passe, par exemple avec une clé de sécurité ou Windows Hello for Business. |
| Conditional Access | Stratégies évaluant des signaux comme l'utilisateur, l'appareil ou la localisation pour imposer des conditions d'accès. Certaines fonctions nécessitent des licences adaptées. |
| External identities | Gestion d'accès pour des personnes externes, par exemple des partenaires invités. |
| Business-to-business — B2B collaboration | Collaboration permettant notamment à des utilisateurs invités d'accéder à des ressources d'une organisation. |
| Azure role-based access control — Azure RBAC | Autorisation sur les ressources Azure au moyen d'attributions de rôles à un périmètre donné. |
| Role definition | Ensemble de permissions décrivant ce qu'un rôle permet de faire. |
| Role assignment | Association d'un principal de sécurité, d'un rôle et d'un périmètre. |
| Security principal | Identité à laquelle on peut attribuer des autorisations : utilisateur, groupe, principal de service ou identité managée. |
| Owner | Rôle Azure donnant un contrôle étendu des ressources et permettant d'attribuer des rôles. |
| Contributor | Rôle permettant de gérer les ressources, mais pas d'attribuer des rôles Azure RBAC. |
| Reader | Rôle permettant de consulter les ressources sans les modifier ; n'accorde pas automatiquement la lecture de toutes les données qu'elles contiennent. |
| Control plane / data plane | Plan de contrôle : administration de la ressource. Plan de données : accès aux données ou opérations du service. Les autorisations peuvent être distinctes. |
| Microsoft Entra roles | Rôles d'administration de l'annuaire, distincts des rôles Azure RBAC sur les ressources. |
| Least privilege | Attribution du minimum de permissions nécessaire, au bon périmètre et pour la durée utile. |
| Zero Trust | Principes : vérifier explicitement, appliquer le moindre privilège et supposer une compromission. Le réseau interne n'est pas considéré comme sûr par défaut. |
| Defense in depth | Superposition de protections : sécurité physique, identité, périmètre, réseau, calcul, application et données. |
| Managed identity | Identité gérée par Azure permettant à une ressource de s'authentifier sans stocker elle-même un secret ; les permissions doivent toujours être attribuées. |
| Service principal | Identité d'application utilisée pour s'authentifier et accéder à des ressources dans un tenant. |
| Azure Key Vault | Service de gestion sécurisée des secrets, clés et certificats. |
| Secret / key / certificate | Secret : donnée confidentielle comme un mot de passe. Clé : matériel cryptographique. Certificat : association d'une identité à une clé publique. |
| Microsoft Defender for Cloud | Outil de gestion de la posture de sécurité et de protection des charges de travail ; certaines protections sont payantes. |
| Security posture | État global des configurations et contrôles de sécurité d'un environnement. |
| Secure score | Indicateur aidant à prioriser des améliorations de sécurité ; un bon score ne garantit pas l'absence de vulnérabilité. |

## 7. Coûts et engagements de service

| Terme anglais / acronyme | Définition et point à retenir |
|---|---|
| Pricing calculator | Outil d'estimation du coût d'une configuration Azure avant son déploiement. Ce n'est pas une facture garantie. |
| Total cost of ownership — TCO | Coût global d'une solution incluant infrastructure, exploitation, licences, maintenance et autres dépenses pertinentes. |
| TCO calculator | Outil Microsoft historiquement utilisé pour comparer les coûts sur site et Azure. Vérifier sa disponibilité actuelle ; comprendre surtout le concept de coût total. |
| Microsoft Cost Management | Outils de suivi, d'analyse, d'affectation et d'optimisation des coûts. L'accès aux fonctions dépend du type de compte et des permissions. |
| Cost analysis | Exploration des dépenses par période, service, abonnement, groupe de ressources ou autres dimensions disponibles. |
| Budget | Objectif de dépenses avec alertes. Un budget ne bloque pas automatiquement les ressources à son dépassement. |
| Cost alert | Notification associée à un seuil de coût réel ou prévisionnel, selon la configuration. |
| Forecast | Projection de dépenses basée sur les données et tendances disponibles. |
| Cost factors | La région, le service, le niveau, la capacité, l'utilisation, les licences et les transferts de données peuvent modifier le prix. |
| Egress / ingress | Transfert sortant / entrant. Les tarifs dépendent du service et du trajet ; ne pas supposer que tous les transferts sont gratuits. |
| Reservation / reserved capacity | Engagement pour une capacité ou un usage éligible sur une durée donnée, pouvant réduire le prix par rapport au paiement à l'usage. |
| Azure savings plan for compute | Engagement de dépense horaire sur une durée donnée pour certains usages de calcul éligibles. Diffère d'une réservation ciblée. |
| Azure Spot Virtual Machines | Utilisation de capacité disponible à prix réduit ; les VM peuvent être évincées. À réserver aux charges tolérant les interruptions. |
| Azure Hybrid Benefit | Avantage tarifaire pour réutiliser certaines licences admissibles, sous conditions. |
| Deallocation | Libération des ressources de calcul d'une VM arrêtée et désallouée. Des disques, adresses ou autres ressources peuvent rester facturés. |
| Quota / service limit | Limite de ressources ou d'utilisation applicable à un périmètre. Ce n'est pas un plafond budgétaire. |
| Service-level agreement — SLA | Engagement contractuel d'un service, avec conditions, exclusions et éventuellement crédits de service. |
| Availability percentage | Proportion de disponibilité sur une période définie. Une disponibilité élevée n'équivaut pas à zéro interruption. |
| Composite SLA | Disponibilité combinée de composants. Pour des dépendances en série supposées indépendantes, une estimation peut multiplier leurs disponibilités ; l'architecture et les conditions réelles restent déterminantes. |
| Preview / general availability — GA | Préversion / disponibilité générale. Les garanties, le support et les conditions de production d'une préversion peuvent différer. |

## 8. Gouvernance et conformité

| Terme anglais / acronyme | Définition et point à retenir |
|---|---|
| Governance | Règles et mécanismes permettant de maîtriser l'utilisation, les risques, les coûts et la conformité d'un environnement. |
| Azure Policy | Évaluation et application de règles sur les ressources, par exemple limiter les régions autorisées ou imposer certaines configurations. |
| Policy definition | Règle décrivant une condition et un effet à appliquer. |
| Policy assignment | Application d'une stratégie à un périmètre ; exemptions et paramètres peuvent modifier son application. |
| Initiative | Ensemble de définitions de stratégies regroupées pour un objectif commun. |
| Audit / deny / modify / deployIfNotExists | Exemples d'effets : signaler une non-conformité, bloquer une opération, modifier certaines propriétés ou déployer une configuration manquante selon les conditions prévues. |
| Compliance | Respect d'exigences. Une certification du fournisseur ne rend pas automatiquement l'application du client conforme. |
| Remediation | Correction de ressources non conformes ; certaines stratégies nécessitent une tâche et des permissions adaptées. |
| Resource lock | Protection contre certaines modifications ou suppressions sur le plan de contrôle ; ne remplace ni RBAC ni une sauvegarde. |
| CanNotDelete lock | Autorise généralement lecture et modification, mais bloque la suppression au périmètre concerné. |
| ReadOnly lock | Autorise généralement la lecture et bloque les opérations de contrôle modifiant la ressource ; peut gêner certaines opérations annexes. |
| Tag | Paire clé-valeur pour organiser les ressources, par exemple `Environment=Study`. Les balises ne sont pas automatiquement héritées sans mécanisme supplémentaire. |
| Microsoft Purview | Ensemble de solutions de gouvernance, de découverte, de protection et de conformité des données ; les fonctions dépendent de la solution utilisée. |
| Data classification | Identification et catégorisation des données selon leur contenu et leur sensibilité. |
| Service Trust Portal | Portail Microsoft donnant accès à des informations de confiance, rapports et documents de conformité ; certains accès nécessitent une authentification. |
| Regulatory requirement | Exigence issue d'une réglementation. Le choix d'une région ou d'un service ne suffit pas, à lui seul, à la satisfaire. |

## 9. Déploiement et administration

| Terme anglais / acronyme | Définition et point à retenir |
|---|---|
| Azure portal | Interface web graphique pour consulter et administrer Azure. |
| Azure Cloud Shell | Environnement de commande accessible depuis un navigateur, avec Bash ou PowerShell et des outils Azure. Les ressources créées restent facturables. |
| Azure CLI | Outil multiplateforme de commande Azure, utilisant notamment la syntaxe `az`. |
| Azure PowerShell | Modules PowerShell pour administrer Azure, notamment avec les commandes du module `Az`. |
| Infrastructure as Code — IaC | Définition de l'infrastructure dans des fichiers versionnables pour rendre les déploiements reproductibles et vérifiables. |
| ARM template | Description déclarative de ressources Azure en JSON, déployée par Azure Resource Manager. |
| Bicep | Langage déclaratif simplifiant l'écriture d'infrastructure Azure et compilé en modèles ARM. |
| Declarative / imperative | Déclaratif : décrire l'état souhaité. Impératif : décrire une suite d'étapes pour y parvenir. |
| Idempotence | Propriété permettant de répéter une opération sans produire des changements supplémentaires une fois l'état souhaité atteint. |
| Deployment | Application d'une configuration pour créer ou modifier des ressources. |
| Azure Arc | Extension de capacités de gestion Azure à certaines ressources hors Azure, sur site ou dans d'autres clouds. |

## 10. Supervision

| Terme anglais / acronyme | Définition et point à retenir |
|---|---|
| Azure Monitor | Plateforme de collecte, d'analyse et d'exploitation de la télémétrie des applications et de l'infrastructure. |
| Metrics | Mesures numériques horodatées, par exemple le pourcentage d'utilisation du processeur. |
| Logs | Enregistrements d'événements ou d'observations permettant une analyse détaillée. |
| Log Analytics | Outil d'interrogation et d'analyse des journaux dans Azure Monitor. |
| Log Analytics workspace | Espace de collecte et de gestion de journaux, avec paramètres d'accès et de conservation. |
| Kusto Query Language — KQL | Langage de requête utilisé notamment pour analyser les journaux. Au niveau Fundamentals, savoir surtout à quoi il sert. |
| Application Insights | Fonction d'observabilité applicative d'Azure Monitor : requêtes, dépendances, erreurs et performances. |
| Alert rule | Règle déclenchant une alerte sur une condition de métrique, de journal ou d'activité. |
| Action group | Ensemble de notifications et d'actions réutilisable par des alertes Azure Monitor. |
| Activity Log | Journal des événements du plan de contrôle, comme la création d'une ressource ; ce n'est pas le journal complet des accès aux données. |
| Azure Service Health | Informations personnalisées sur des incidents de services Azure, des maintenances et des avis concernant l'environnement du client. |
| Azure Resource Health | État de santé d'une ressource précise et informations sur certains événements de disponibilité. |
| Azure Status | Vue publique générale de l'état des services Azure ; moins personnalisée que Service Health. |
| Azure Advisor | Recommandations pour améliorer notamment coûts, fiabilité, performances, sécurité et excellence opérationnelle. Ne corrige pas automatiquement tout. |

## 11. Compléments de reconnaissance

Ces notions donnent du contexte à certains exemples et supports vidéo.
Leur profondeur d'étude doit rester proportionnée au guide officiel en vigueur :
AZ-900 n'est pas un examen d'administration, de développement ou de spécialisation.

| Terme anglais / acronyme | Définition et point à retenir |
|---|---|
| Azure SQL Database | Base relationnelle managée ; exemple de PaaS. |
| Azure Cosmos DB | Service de base de données distribuée, avec plusieurs modèles et interfaces selon l'offre. |
| Azure Database for PostgreSQL | Service managé de base de données PostgreSQL ; autre exemple de PaaS. |
| Azure Logic Apps | Création de workflows et d'intégrations à partir de déclencheurs et d'actions. |
| Azure Container Registry — ACR | Registre destiné au stockage et à la distribution d'images de conteneurs et d'artefacts compatibles. |
| Azure Load Balancer | Répartition de trafic réseau de couche 4, notamment TCP et UDP. |
| Azure Application Gateway | Répartition de trafic web de couche 7, avec options de pare-feu d'applications web. |
| Azure Front Door | Point d'entrée mondial pour applications web avec routage, accélération et fonctions de sécurité selon l'offre. |
| Web Application Firewall — WAF | Protection HTTP/HTTPS contre certaines attaques web ; ne remplace pas un pare-feu réseau généraliste. |
| Microsoft Sentinel | Solution de gestion des informations et événements de sécurité et d'orchestration des réponses : SIEM/SOAR. |
| Azure Backup | Service de sauvegarde et de restauration pour des ressources prises en charge. |
| Azure Site Recovery | Service de réplication et de reprise après sinistre pour des scénarios pris en charge. |
| Azure Well-Architected Framework | Recommandations de conception autour de la fiabilité, la sécurité, l'optimisation des coûts, l'excellence opérationnelle et l'efficacité des performances. |

## 12. Distinctions à maîtriser

| Si l'énoncé parle de… | Penser à… | Ne pas confondre avec… |
|---|---|---|
| Administrer le système d'exploitation | VM / IaaS | App Service / PaaS |
| Héberger une application sans gérer son OS | App Service / PaaS | SaaS prêt à l'emploi |
| Exécuter du code déclenché par un événement | Azure Functions | Une obligation d'avoir un coût nul hors exécution |
| Ajouter des instances | Scale out | Scale up : augmenter la puissance |
| Résister à la perte d'un centre de données dans une région | Architecture utilisant des zones de disponibilité | Un groupe de ressources |
| Reprendre après un sinistre régional | Stratégie de reprise adaptée et ressources dans une autre région | Une paire de régions sans configuration |
| Organiser plusieurs abonnements | Management groups | Resource groups |
| Vérifier une identité | Authentication | Authorization |
| Autoriser un utilisateur à gérer une ressource | Azure RBAC | Azure Policy |
| Interdire le déploiement dans certaines régions | Azure Policy | Une balise ou un budget |
| Empêcher une suppression accidentelle | Verrou CanNotDelete | Une sauvegarde permettant une restauration |
| Identifier un centre de coûts | Tags | Héritage automatique des balises |
| Estimer une future configuration | Pricing calculator | Cost analysis des dépenses observées |
| Alerter sur un dépassement de dépenses | Budget et alertes | Coupure automatique de l'abonnement |
| Stocker des objets | Blob Storage | Azure Files : partages de fichiers |
| Accéder immédiatement à un blob rarement lu | Niveau en ligne adapté, par exemple Cool ou Cold | Archive : réhydratation nécessaire |
| Lire la copie géographique secondaire du stockage | RA-GRS ou RA-GZRS | GRS ou GZRS sans accès en lecture secondaire |
| Accéder à un service via une IP privée dans un VNet | Private endpoint | Service endpoint |
| Connecter un site par tunnel chiffré sur Internet | VPN Gateway | ExpressRoute : connexion privée, chiffrement non implicite |
| Recevoir des recommandations d'optimisation | Azure Advisor | Azure Monitor : télémétrie et alertes |
| Consulter un incident Azure affectant ses services | Service Health | Resource Health : ressource particulière |
| Rechercher des erreurs et lenteurs applicatives | Application Insights | Service Trust Portal : documents de confiance |
| Gérer des ressources hors Azure depuis Azure | Azure Arc | Azure Migrate : évaluer et migrer |
| Déplacer beaucoup de données sans transfert réseau | Azure Data Box | AzCopy : transfert en ligne |

## 13. Autoévaluation et sources

### Méthode de révision

Pour chaque terme, savoir donner une définition courte, un exemple et une
différence avec le service ou concept le plus proche. Se concentrer sur le
choix d'une solution et la compréhension des responsabilités, pas sur la
mémorisation de commandes, de prix exacts ou de détails d'implémentation.

### Checklist

- [ ] Expliquer cloud public, privé, hybride et multicloud.
- [ ] Comparer IaaS, PaaS et SaaS avec les responsabilités du client.
- [ ] Distinguer disponibilité, élasticité, scalabilité, sauvegarde et reprise.
- [ ] Expliquer régions, zones et hiérarchie des ressources.
- [ ] Choisir entre VM, conteneurs, App Service et Functions.
- [ ] Expliquer VNet, sous-réseau, peering, VPN, ExpressRoute et endpoints.
- [ ] Comparer les services, niveaux d'accès et redondances du stockage.
- [ ] Choisir entre AzCopy, Storage Explorer, File Sync, Migrate et Data Box.
- [ ] Distinguer authentification, autorisation, MFA, SSO et accès conditionnel.
- [ ] Expliquer RBAC, moindre privilège, Zero Trust et défense en profondeur.
- [ ] Distinguer Policy, verrous, balises et outils de conformité.
- [ ] Comparer estimation, suivi, budgets et optimisation des coûts.
- [ ] Reconnaître portail, Cloud Shell, CLI, PowerShell, ARM, Bicep et Arc.
- [ ] Distinguer Advisor, Monitor, Service Health et Resource Health.
- [ ] Comparer cette checklist à chaque objectif du guide officiel actuel.

### Ressources officielles

- [Guide d'étude AZ-900 et modifications du programme](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900)
- [Certification Azure Fundamentals et accès à l'évaluation pratique](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/)
- [Microsoft Learn — Describe cloud concepts](https://learn.microsoft.com/en-us/training/paths/describe-cloud-compute/)
- [Microsoft Learn — Describe Azure architecture and services](https://learn.microsoft.com/en-us/training/paths/describe-azure-architecture-services/)
- [Microsoft Learn — Describe Azure management and governance](https://learn.microsoft.com/en-us/training/paths/describe-azure-management-governance/)
- [Documentation Azure](https://learn.microsoft.com/en-us/azure/)

En cas de différence entre une ancienne vidéo, ce glossaire et le programme
officiel actuel, privilégier le guide d'étude et la documentation Microsoft.
