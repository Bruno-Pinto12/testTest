# AZ-900 — Guide complet de révision

> **Certification :** Microsoft Certified: Azure Fundamentals  
> **Langue du document :** français  
> **Référentiel pris en compte :** compétences mesurées depuis le **20 juillet 2026**  
> **Dernière vérification du contenu officiel :** 2 novembre 2026  
> **Source de référence :** [Guide d’étude officiel AZ-900 — Microsoft Learn](https://learn.microsoft.com/fr-fr/credentials/certifications/resources/study-guides/az-900)

Ce document est un support de révision structuré pour comprendre les notions, reconnaître les services Azure et choisir la bonne réponse dans les scénarios de l’examen. Il ne remplace pas le guide Microsoft : le référentiel peut évoluer. Vérifie toujours la version applicable à la date de ton examen.

---

## Sommaire

1. [L’examen AZ-900](#1-lexamen-az-900)
2. [Domaine 1 — Concepts du cloud (25–30 %)](#2-domaine-1--concepts-du-cloud-2530-)
3. [Domaine 2 — Architecture et services Azure (35–40 %)](#3-domaine-2--architecture-et-services-azure-3540-)
   - [Architecture et organisation Azure](#31-architecture-et-organisation-azure)
   - [Calcul et hébergement](#32-calcul-et-hébergement)
   - [Réseau](#33-réseau)
   - [Stockage et migration](#34-stockage-et-migration)
   - [Identité, accès et sécurité](#35-identité-accès-et-sécurité)
4. [Domaine 3 — Gestion et gouvernance Azure (30–35 %)](#4-domaine-3--gestion-et-gouvernance-azure-3035-)
   - [Coûts](#41-coûts)
   - [Gouvernance et conformité](#42-gouvernance-et-conformité)
   - [Gestion et déploiement](#43-gestion-et-déploiement)
   - [Supervision](#44-supervision)
5. [Tableaux comparatifs à mémoriser](#5-tableaux-comparatifs-à-mémoriser)
6. [Reconnaître le bon service dans un scénario](#6-reconnaître-le-bon-service-dans-un-scénario)
7. [Questions d’auto-évaluation corrigées](#7-questions-dauto-évaluation-corrigées)
8. [Checklist de préparation](#8-checklist-de-préparation)
9. [Ressources officielles](#9-ressources-officielles)
10. [Glossaire](#10-glossaire)

---

# 1. L’examen AZ-900

## 1.1 Objectif

L’AZ-900 valide une compréhension **fondamentale** du cloud computing et de Microsoft Azure. Il faut savoir expliquer les concepts, reconnaître les services, comprendre leurs usages et sélectionner le service adapté à une situation simple.

Ce n’est pas un examen d’administration avancée ni un examen de programmation. Il n’est normalement pas nécessaire de savoir construire une architecture complexe ou mémoriser des commandes détaillées. En revanche, il faut connaître le rôle des services, leurs différences et leurs principaux cas d’utilisation.

## 1.2 Répartition officielle des compétences

| Domaine | Pondération | Priorité de révision |
|---|---:|---|
| Concepts du cloud | 25–30 % | Responsabilité partagée, modèles cloud, avantages, IaaS/PaaS/SaaS, serverless |
| Architecture et services Azure | 35–40 % | Régions, ressources, calcul, réseau, stockage, identité et sécurité |
| Gestion et gouvernance Azure | 30–35 % | Coûts, Policy, verrous, outils de gestion, ARM, Advisor, Service Health, Monitor |

**Conséquence pour les révisions :** ne te concentre pas uniquement sur les services techniques. La gouvernance, les coûts et la supervision représentent ensemble une part importante de l’examen.

## 1.3 Score et préparation à l’environnement

- Microsoft indique qu’un score de **700 ou plus** est nécessaire pour réussir.
- Le nombre de questions, leur forme, la durée et les modalités pratiques peuvent changer : vérifie la page de l’examen au moment de la réservation.
- Les questions peuvent présenter des scénarios, des choix multiples, des associations ou d’autres formats. Lis attentivement les contraintes du scénario.
- Microsoft précise que la plupart des questions portent sur les fonctionnalités en disponibilité générale (*General Availability*, GA). Des fonctionnalités en préversion peuvent aussi être mentionnées lorsqu’elles sont couramment utilisées.
- La version anglaise est généralement mise à jour avant les versions localisées. Microsoft indique que les versions traduites sont souvent actualisées environ huit semaines plus tard, sans garantie absolue.

## 1.4 Méthode pour répondre aux scénarios

1. Repère le besoin principal : calcul, stockage, réseau, identité, coûts, gouvernance ou supervision.
2. Identifie la contrainte déterminante : contrôle du système d’exploitation, haute disponibilité, accès privé, données rarement consultées, conformité, etc.
3. Élimine les services qui ne répondent pas directement à cette contrainte.
4. Distingue les services proches : **Azure Advisor ≠ Azure Monitor**, **Azure Policy ≠ RBAC**, **VPN Gateway ≠ ExpressRoute**, **Blob ≠ Files**, **Entra ID ≠ Entra Domain Services**.
5. Méfie-toi des mots absolus comme « toujours », « automatiquement », « uniquement » et « garantit ».

---

# 2. Domaine 1 — Concepts du cloud (25–30 %)

## 2.1 Qu’est-ce que le cloud computing ?

Le *cloud computing* consiste à fournir des ressources informatiques à la demande via un réseau, généralement Internet : serveurs, stockage, bases de données, réseau, logiciels, puissance de calcul ou services applicatifs.

Au lieu d’acheter et d’entretenir toute l’infrastructure dans ses propres locaux, une organisation consomme des ressources auprès d’un fournisseur cloud comme Microsoft Azure.

### Caractéristiques essentielles

- **À la demande :** les ressources peuvent être créées ou supprimées selon les besoins.
- **Accès réseau :** les services sont accessibles via Internet ou des connexions privées.
- **Mutualisation :** le fournisseur partage ses infrastructures entre plusieurs clients tout en isolant leurs environnements.
- **Élasticité :** les ressources peuvent augmenter ou diminuer rapidement.
- **Facturation à l’usage :** la consommation est mesurée et facturée selon le service et le modèle tarifaire.

### Dépenses : CapEx et OpEx

| Notion | Définition | Exemple |
|---|---|---|
| **CapEx** (*Capital Expenditure*) | Dépense d’investissement initiale pour acheter un actif durable | Acheter des serveurs, des disques et du matériel réseau |
| **OpEx** (*Operational Expenditure*) | Dépenses opérationnelles liées à l’utilisation et à l’exploitation | Payer mensuellement des machines virtuelles et du stockage cloud |

Le cloud permet généralement de réduire les investissements matériels initiaux et de transférer une partie des dépenses vers un modèle opérationnel. Cela ne signifie pas que le cloud est toujours moins cher : il faut contrôler la consommation et dimensionner correctement les services.

## 2.2 Modèles de déploiement cloud

| Modèle | Description | Cas d’utilisation typique |
|---|---|---|
| **Cloud public** | Infrastructure d’un fournisseur cloud, partagée entre plusieurs clients avec isolation logique. Le fournisseur exploite les centres de données. | Démarrer rapidement, bénéficier de services managés, absorber des pics de charge. |
| **Cloud privé** | Infrastructure réservée à une seule organisation, hébergée dans ses locaux ou chez un prestataire. | Besoin de contrôle spécifique, contraintes réglementaires ou systèmes à conserver dans un environnement dédié. |
| **Cloud hybride** | Combinaison d’un environnement privé/local et d’un cloud public, avec interconnexion et intégration. | Conserver certaines données ou applications sur site tout en utilisant Azure pour d’autres charges. |

**À retenir :** le cloud hybride n’est pas simplement « avoir deux fournisseurs cloud ». Il désigne généralement la combinaison d’un environnement privé ou local avec un cloud public.

### Exemples de choix

- Une entreprise veut lancer rapidement une application web sans acheter de serveurs : **cloud public**.
- Une organisation doit garder une partie de ses systèmes dans son propre centre de données tout en utilisant Azure pour absorber les pics : **cloud hybride**.
- Une organisation exige une infrastructure exclusivement dédiée : **cloud privé**.

## 2.3 Modèle basé sur la consommation

Dans un modèle basé sur la consommation (*consumption-based model*), le client paie en fonction des ressources réellement utilisées ou provisionnées selon les règles du service.

Avantages :

- éviter d’acheter une capacité maximale à l’avance ;
- augmenter ou réduire la consommation selon la demande ;
- mesurer les coûts par service, période ou ressource ;
- expérimenter sans devoir acheter une infrastructure complète.

Attention : une ressource laissée active peut continuer à générer des coûts même si personne ne l’utilise. Une machine virtuelle arrêtée depuis le système d’exploitation peut, selon son état et ses ressources associées, continuer à facturer certains éléments. Il faut comprendre ce qui est facturé : calcul, disques, réseau, stockage, licences, etc.

### Modèles tarifaires à reconnaître

- **Paiement à l’utilisation (*pay-as-you-go*) :** paiement selon la consommation, sans engagement long terme obligatoire.
- **Réservation / engagement :** réduction possible en échange d’un engagement de durée ou de consommation sur des ressources éligibles.
- **Capacité Spot :** utilisation de capacité Azure disponible à prix réduit, mais susceptible d’être interrompue par Azure. À réserver aux charges tolérant une interruption.
- **Tarification fixe ou par utilisateur :** certains services SaaS ou certaines offres utilisent un abonnement ou une licence plutôt qu’une facturation purement à la seconde.

Ne confonds pas « modèle basé sur la consommation » et « tout est facturé à la seconde ». Les unités et règles de facturation dépendent du service.

## 2.4 Modèle de responsabilité partagée

La sécurité et l’exploitation sont partagées entre Microsoft et le client. La responsabilité du fournisseur augmente lorsque l’on passe de l’IaaS au PaaS puis au SaaS. **Le client reste toujours responsable de ses données et de la manière dont il gère les accès à celles-ci.**

| Élément | Sur site | IaaS | PaaS | SaaS |
|---|---|---|---|---|
| Centre de données physique | Client | Microsoft | Microsoft | Microsoft |
| Réseau physique et hôtes | Client | Microsoft | Microsoft | Microsoft |
| Système d’exploitation | Client | Client | Microsoft | Microsoft |
| Middleware et runtime | Client | Client | Microsoft | Microsoft |
| Application | Client | Client | Client (application déployée) | Microsoft (application fournie) |
| Données et configuration des accès | Client | Client | Client | Responsabilité partagée, le client reste responsable de ses données et usages |

Cette représentation est volontairement simplifiée : les responsabilités exactes dépendent du service et de sa configuration.

**Raccourci de mémorisation :**

- **IaaS :** Microsoft gère l’infrastructure physique ; tu gères notamment l’OS et ce que tu installes dessus.
- **PaaS :** Microsoft gère aussi la plateforme et le système ; tu déploies et gères ton application et tes données.
- **SaaS :** Microsoft fournit l’application prête à l’emploi ; tu gères surtout les utilisateurs, les accès, les données et la configuration côté client.

## 2.5 Avantages du cloud

### Haute disponibilité (*High Availability*)

Capacité d’un service à rester accessible avec peu d’interruption. Elle peut être améliorée par la redondance, la réplication, la répartition de charge et l’utilisation de zones ou régions distinctes.

### Scalabilité (*Scalability*)

Capacité à adapter les ressources à une charge plus importante ou plus faible.

- **Scalabilité verticale (*scale up / scale down*) :** augmenter ou réduire la puissance d’une ressource existante (CPU, RAM, taille de VM).
- **Scalabilité horizontale (*scale out / scale in*) :** ajouter ou retirer des instances (plusieurs VMs ou instances applicatives).

### Élasticité (*Elasticity*)

Capacité d’ajuster rapidement et parfois automatiquement les ressources en fonction de la demande. La scalabilité décrit la capacité à changer d’échelle ; l’élasticité insiste sur l’adaptation à la variation de la charge.

### Fiabilité (*Reliability*)

Capacité d’un système à fonctionner correctement et à se rétablir en cas de défaillance. Les régions, zones de disponibilité, sauvegardes et stratégies de reprise contribuent à la fiabilité.

### Prévisibilité (*Predictability*)

Possibilité de mieux anticiper les performances et les coûts grâce aux outils de mesure, aux engagements de service, aux tests et à la gestion des coûts. Le cloud facilite cette prévisibilité, mais ne garantit pas des coûts ou performances fixes sans configuration appropriée.

### Sécurité et gouvernance

Le fournisseur investit dans la sécurité physique, les infrastructures et les outils. Le client conserve des responsabilités concernant les identités, les accès, les données, les configurations et les applications selon le modèle utilisé.

### Facilité de gestion (*Manageability*)

Le cloud permet de gérer des ressources avec des interfaces graphiques, des scripts, des API, l’automatisation, la supervision, la mise à l’échelle et l’infrastructure en tant que code.

## 2.6 Types de services cloud : IaaS, PaaS et SaaS

| Type | Ce que fournit le fournisseur | Ce que le client gère principalement | Exemples Azure / Microsoft |
|---|---|---|---|
| **IaaS** — Infrastructure as a Service | Machines virtuelles, stockage, réseau et infrastructure sous-jacente | OS, mises à jour OS, logiciels, applications, données et configuration de sécurité | Azure Virtual Machines, Azure Virtual Network, Azure Disk Storage |
| **PaaS** — Platform as a Service | Infrastructure, OS et environnement d’exécution ou plateforme managée | Application déployée, données et configuration | Azure App Service, Azure SQL Database, Azure Functions, Azure Storage |
| **SaaS** — Software as a Service | Application complète accessible comme un service | Utilisateurs, données, droits, paramètres et usage | Microsoft 365, Dynamics 365 |

### Quel modèle choisir ?

- Besoin de contrôler l’OS, installer des composants spécifiques ou migrer une application ancienne sans la transformer : **IaaS**.
- Besoin de déployer du code sans gérer les serveurs et les mises à jour de l’OS : **PaaS**.
- Besoin d’utiliser directement une application prête à l’emploi : **SaaS**.

Plus le service est managé, moins le client administre l’infrastructure, mais moins il contrôle les couches basses.

## 2.7 Serverless

Le modèle *serverless* permet d’exécuter du code ou des services sans gérer directement les serveurs. Les serveurs existent toujours : leur provisionnement et une grande partie de leur gestion sont pris en charge par le fournisseur.

Caractéristiques :

- exécution souvent déclenchée par un événement ;
- mise à l’échelle gérée par la plateforme ;
- facturation généralement liée à l’exécution ou à la consommation ;
- pas de gestion directe du système d’exploitation ou des serveurs sous-jacents.

**Exemple principal : Azure Functions.** Une fonction peut s’exécuter lorsqu’un fichier est déposé, qu’un message arrive dans une file ou qu’une requête HTTP est reçue.

Ne confonds pas serverless et absence totale d’administration : il faut toujours gérer le code, les identités, les autorisations, les données, les limites et la configuration.

---

# 3. Domaine 2 — Architecture et services Azure (35–40 %)

C’est le domaine le plus pondéré. Il faut surtout comprendre les rôles des composants et savoir les distinguer.

## 3.1 Architecture et organisation Azure

### 3.1.1 Centres de données (*Datacenters*)

Les ressources Azure sont hébergées dans des centres de données physiques exploités par Microsoft. Ceux-ci regroupent les serveurs, le stockage, les équipements réseau, l’alimentation électrique, le refroidissement et les dispositifs de sécurité physique.

### 3.1.2 Régions Azure (*Regions*)

Une région Azure est une zone géographique contenant un ou plusieurs centres de données interconnectés via un réseau à faible latence.

Le choix d’une région peut dépendre de :

- la proximité des utilisateurs ;
- la résidence et la souveraineté des données ;
- la disponibilité des services et fonctionnalités ;
- les exigences réglementaires ;
- le prix et la latence.

Une région ne garantit pas que chaque service Azure y est disponible. Il faut vérifier la disponibilité régionale du service concerné.

### 3.1.3 Paires de régions (*Region Pairs*)

Certaines régions Azure sont associées à une autre région de la même zone géographique. Historiquement, cette association apporte des avantages pour la reprise après sinistre, la réplication et certaines séquences de mises à jour.

À connaître :

- les deux régions sont géographiquement séparées ;
- la paire peut contribuer à la continuité d’activité et à la reprise après sinistre ;
- tous les services ne répliquent pas automatiquement les données entre régions ;
- une application doit être conçue et configurée pour utiliser une région secondaire lorsque c’est nécessaire ;
- certaines régions n’ont pas de paire.

**Piège :** avoir une paire de régions ne signifie pas que toutes tes ressources sont automatiquement sauvegardées ou répliquées vers la région partenaire.

### 3.1.4 Régions souveraines (*Sovereign Regions*)

Régions ou environnements cloud spécifiques conçus pour répondre à des exigences particulières de souveraineté, de conformité, de résidence des données ou d’accès réglementé. Ils peuvent être séparés du cloud public Azure standard.

### 3.1.5 Zones de disponibilité (*Availability Zones*)

Une zone de disponibilité est un emplacement physique distinct au sein d’une région Azure. Chaque zone dispose d’une infrastructure indépendante, notamment alimentation, refroidissement et réseau.

Objectif : protéger une application contre la défaillance d’un centre de données ou d’une zone, à condition que l’architecture utilise réellement plusieurs zones.

À distinguer :

- **Zone de disponibilité :** protection contre une panne localisée dans une région.
- **Région secondaire :** protection potentielle contre une panne affectant toute une région.

Un service doit prendre en charge les zones dans la région choisie pour pouvoir en bénéficier.

### 3.1.6 Ressources, groupes de ressources, abonnements et groupes d’administration

Une **ressource Azure** est une instance d’un service : machine virtuelle, base de données, compte de stockage, réseau virtuel, etc.

Un **groupe de ressources (*Resource Group*)** est un conteneur logique qui regroupe des ressources liées à une solution, un projet ou un cycle de vie. Il permet notamment de gérer les accès, les stratégies, les déploiements et la suppression des ressources de manière organisée.

Un **abonnement (*Subscription*)** constitue une limite de gestion et de facturation. Il permet d’organiser les ressources, de suivre les coûts, d’appliquer des quotas et de contrôler les accès.

Un **groupe d’administration (*Management Group*)** permet de gérer plusieurs abonnements à grande échelle. Les stratégies et autorisations peuvent être héritées par les abonnements descendants.

### Hiérarchie à mémoriser

```text
Locataire Microsoft Entra (Tenant)
└── Groupe d’administration (Management Group)
    └── Abonnement (Subscription)
        └── Groupe de ressources (Resource Group)
            └── Ressource (Resource)
```

Points importants :

- un locataire peut contenir plusieurs groupes d’administration et abonnements ;
- un groupe d’administration peut contenir d’autres groupes d’administration ou des abonnements ;
- un abonnement contient des groupes de ressources ;
- un groupe de ressources appartient à un seul abonnement ;
- une ressource appartient à un groupe de ressources, même si certaines ressources peuvent être déplacées dans les limites et conditions prévues par Azure ;
- supprimer un groupe de ressources supprime les ressources qu’il contient : attention aux dépendances et à la production.

**À ne pas confondre :** le groupe de ressources est un conteneur logique, pas un dossier physique ni une zone géographique.

## 3.2 Calcul et hébergement

### 3.2.1 Machines virtuelles Azure (*Azure Virtual Machines*)

Une machine virtuelle est un ordinateur virtuel hébergé dans Azure. C’est un service **IaaS**.

Utilisations :

- héberger un serveur Windows ou Linux ;
- exécuter une application qui exige un contrôle de l’OS ;
- migrer une application existante ;
- installer des logiciels ou composants spécifiques.

Le client reste responsable de nombreuses tâches : OS invité, correctifs, configuration, logiciels, comptes, sécurité de l’application et données.

#### Ressources nécessaires à une VM

- **Image :** modèle de système d’exploitation utilisé pour créer la VM.
- **Taille (*Size/SKU*) :** nombre de vCPU, RAM, performances réseau et autres caractéristiques.
- **Disque OS :** disque contenant le système d’exploitation.
- **Disques de données :** stockage supplémentaire pour les fichiers et applications.
- **Interface réseau (NIC) :** connexion de la VM à un réseau virtuel.
- **Réseau virtuel et sous-réseau :** réseau logique dans lequel la VM est placée.
- **Adresse IP :** privée et éventuellement publique, selon le besoin.
- **Groupe de sécurité réseau (NSG) :** règles de filtrage du trafic réseau.

Une adresse IP publique n’est pas obligatoire pour chaque VM.

### 3.2.2 Groupes de machines virtuelles identiques (*Virtual Machine Scale Sets*)

Permettent de déployer et gérer un ensemble de machines virtuelles identiques ou très similaires. Ils facilitent :

- la mise à l’échelle horizontale ;
- l’ajout ou la suppression d’instances ;
- la gestion centralisée d’un parc de VMs ;
- la répartition de charge et la haute disponibilité selon la configuration.

**Scénario typique :** une application web doit ajouter automatiquement des instances lorsque le trafic augmente.

### 3.2.3 Groupes à haute disponibilité (*Availability Sets*)

Organisent des machines virtuelles pour réduire le risque qu’une panne ou une maintenance planifiée affecte toutes les instances en même temps.

Deux notions :

- **Domaines de défaillance (*Fault Domains*) :** séparent les VMs selon des groupes d’infrastructure physique partageant notamment alimentation et réseau.
- **Domaines de mise à jour (*Update Domains*) :** organisent les groupes de VMs pouvant être redémarrés lors des opérations de maintenance planifiée.

**Différence importante :** Availability Sets et Availability Zones ne sont pas la même chose. Les Availability Sets répartissent les VMs dans des domaines au sein d’un centre de données ; les Availability Zones utilisent des emplacements physiques séparés dans une région.

### 3.2.4 Azure Virtual Desktop (AVD)

Service de virtualisation de postes de travail et d’applications. Les utilisateurs accèdent à un environnement Windows hébergé dans Azure depuis différents appareils.

Cas d’utilisation :

- postes de travail virtuels pour employés ;
- accès distant sécurisé ;
- environnements de travail standardisés ;
- besoin de centraliser les bureaux et applications.

À ne pas confondre avec une VM classique destinée à héberger un serveur applicatif.

### 3.2.5 Conteneurs

Un conteneur regroupe une application et ses dépendances dans une unité portable et isolée. Il partage le noyau du système hôte, contrairement à une VM qui virtualise un système d’exploitation complet.

Avantages : démarrage rapide, portabilité, densité, cohérence entre environnements et déploiement simplifié.

Services associés :

- **Azure Container Instances (ACI) :** exécuter rapidement des conteneurs sans gérer de machines virtuelles ni orchestrateur Kubernetes.
- **Azure Kubernetes Service (AKS) :** service Kubernetes managé pour orchestrer des conteneurs à grande échelle (déploiement, réseau, mise à l’échelle, disponibilité).
- **Azure Container Apps :** plateforme managée adaptée aux applications conteneurisées et microservices, avec mise à l’échelle gérée et capacités serverless.

### 3.2.6 Azure App Service

Service PaaS pour héberger des applications web, des API et certains backends sans gérer directement les machines virtuelles ou le système d’exploitation sous-jacent.

Cas d’utilisation :

- application ASP.NET, Node.js, Java, Python, etc. ;
- API web ;
- site web métier ;
- déploiement et mise à l’échelle d’une application web.

**À reconnaître :** « Je veux publier un site web ou une API sans administrer les serveurs » → Azure App Service.

### 3.2.7 Azure Functions

Service de calcul serverless permettant d’exécuter du code à la suite d’un déclencheur (*trigger*) : requête HTTP, minuteur, message, événement ou changement de fichier.

Cas d’utilisation : traitement ponctuel, automatisation, intégration entre services, tâches pilotées par événements.

### Comparatif calcul

| Besoin | Service à envisager | Pourquoi |
|---|---|---|
| Contrôler le système d’exploitation et installer des logiciels | Azure Virtual Machines | IaaS avec contrôle de la VM |
| Ajouter/retirer automatiquement des VMs | Virtual Machine Scale Sets | Gestion d’un parc d’instances |
| Répartir des VMs entre domaines de panne et de mise à jour | Availability Sets | Réduction du risque de panne commune |
| Résister à la panne d’un centre de données dans une région | Availability Zones | Séparation physique des zones |
| Héberger un site web ou une API sans gérer l’OS | Azure App Service | PaaS applicatif |
| Exécuter une fonction à l’arrivée d’un événement | Azure Functions | Serverless / événementiel |
| Lancer simplement un conteneur | Azure Container Instances | Exécution simple sans orchestrateur |
| Orchestrer de nombreux conteneurs Kubernetes | Azure Kubernetes Service | Kubernetes managé |
| Fournir des bureaux Windows à distance | Azure Virtual Desktop | Environnements de bureau virtualisés |

## 3.3 Réseau

### 3.3.1 Réseau virtuel Azure (*Virtual Network / VNet*)

Un VNet est un réseau privé logique dans Azure. Il permet aux ressources Azure de communiquer entre elles, avec Internet (selon la configuration) et avec des réseaux locaux.

Il définit un espace d’adressage IP privé, généralement en notation CIDR, par exemple `10.0.0.0/16`.

### 3.3.2 Sous-réseau (*Subnet*)

Un sous-réseau divise un VNet en segments IP. Il permet d’organiser les ressources par rôle ou niveau de sécurité.

Exemple :

```text
VNet 10.0.0.0/16
├── Subnet-Web      10.0.1.0/24
├── Subnet-App      10.0.2.0/24
└── Subnet-Database 10.0.3.0/24
```

### 3.3.3 Appairage de réseaux virtuels (*VNet Peering*)

Permet de connecter deux réseaux virtuels Azure afin que leurs ressources communiquent via le réseau Microsoft, avec une faible latence.

À retenir :

- les VNets peuvent être dans des régions différentes (peering global) ;
- le trafic reste sur le réseau Microsoft ;
- le peering n’est pas transitif par défaut : si A est appairé à B et B à C, cela ne signifie pas automatiquement que A communique avec C ;
- les plages d’adresses IP ne doivent pas se chevaucher pour établir un peering classique.

### 3.3.4 Azure DNS

Service d’hébergement et de résolution DNS pour les noms de domaine. Il permet de gérer des zones DNS publiques et privées.

- **DNS public :** résolution de noms accessibles publiquement.
- **DNS privé :** résolution de noms dans un ou plusieurs réseaux virtuels selon la configuration.

DNS traduit un nom (par exemple `app.exemple.ch`) en information réseau, notamment une adresse IP. DNS n’est pas un service d’hébergement web.

### 3.3.5 Passerelle VPN Azure (*VPN Gateway*)

Permet de créer des connexions chiffrées à travers Internet entre Azure et d’autres réseaux.

Scénarios :

- **Site-to-Site :** connexion entre un réseau local et un VNet Azure.
- **Point-to-Site :** connexion d’un poste individuel au réseau Azure.
- **VNet-to-VNet :** connexion entre réseaux virtuels.

Le trafic utilise Internet comme réseau de transport, mais le tunnel VPN est chiffré.

### 3.3.6 ExpressRoute

Permet une connexion privée dédiée entre un réseau local et les services Microsoft via un fournisseur de connectivité. Le trafic ne passe pas par Internet public.

À choisir lorsque l’organisation exige une connectivité privée, une latence plus prévisible, une bande passante adaptée ou une connectivité d’entreprise.

**VPN Gateway vs ExpressRoute :**

- VPN Gateway : tunnel chiffré utilisant Internet.
- ExpressRoute : connexion privée via un fournisseur, sans transit par Internet public.

### 3.3.7 Points de terminaison publics et privés

- **Point de terminaison public (*Public Endpoint*) :** service accessible via une adresse ou un nom public. L’accès peut être limité par des règles réseau, pare-feu ou contrôles d’identité.
- **Point de terminaison privé (*Private Endpoint*) :** interface réseau privée dans un VNet qui utilise une adresse IP privée pour accéder à un service Azure via Azure Private Link. Le service peut ainsi être atteint sans exposer le trafic au réseau Internet public.

**Scénario :** une base de données Azure ne doit être accessible que depuis le réseau privé de l’entreprise → envisager un Private Endpoint.

## 3.4 Stockage et migration

### 3.4.1 Compte de stockage Azure (*Storage Account*)

Un compte de stockage fournit un espace de noms unique et des services de stockage Azure. Le type standard généraliste v2 (*Standard general-purpose v2*) est le choix courant pour de nombreux scénarios : il prend notamment en charge les objets Blob, les fichiers, les files d’attente et les tables.

Les caractéristiques du compte déterminent notamment les services pris en charge, les performances, les options de redondance et les coûts.

### 3.4.2 Types de stockage Azure

| Service | Type de données / usage | Exemple concret |
|---|---|---|
| **Blob Storage** | Stockage d’objets, souvent pour données non structurées | Images, vidéos, documents, sauvegardes, fichiers de logs |
| **Azure Data Lake Storage Gen2** | Stockage de données analytiques à grande échelle, construit sur Blob avec espace de noms hiérarchique | Data lakes, traitement analytique |
| **Azure Files** | Partages de fichiers managés accessibles via SMB et, selon l’offre, NFS | Répertoire partagé utilisé par plusieurs serveurs ou postes |
| **Queue Storage** | Files de messages simples pour découpler des composants | Une application dépose une tâche qu’un worker traitera ensuite |
| **Table Storage** | Stockage NoSQL clé/attribut, sans schéma relationnel classique | Données structurées simples indexées par clés |
| **Managed Disks** | Disques de blocs pour machines virtuelles | Disque système ou disque de données d’une VM |

**Différence Blob / Files :**

- Blob : stocker des objets/fichiers comme objets, accessibles via API/HTTP(S).
- Files : fournir un partage de fichiers managé pouvant être monté comme un partage réseau.

### 3.4.3 Niveaux d’accès des Blob (*Access Tiers*)

Les niveaux optimisent le rapport entre coût de stockage et coût d’accès. Ils dépendent de la fréquence d’utilisation et du délai de récupération acceptable.

| Niveau | Utilisation | Coût de stockage | Coût d’accès / récupération | Disponibilité des données |
|---|---|---|---|---|
| **Hot** | Données consultées fréquemment | Plus élevé | Plus faible | En ligne, accès rapide |
| **Cool** | Données peu consultées | Plus faible que Hot | Plus élevé | En ligne, accès en millisecondes |
| **Cold** | Données rarement consultées, mais qui doivent rester récupérables rapidement | Encore plus faible | Plus élevé | En ligne, accès en millisecondes |
| **Archive** | Conservation longue durée, consultation très rare | Le plus faible | Le plus élevé | Hors ligne ; réhydratation nécessaire, délai pouvant atteindre des heures |

Durées minimales typiques à connaître pour les comptes généralistes v2 : Cool 30 jours, Cold 90 jours, Archive 180 jours. Des frais peuvent s’appliquer en cas de suppression ou de changement de niveau avant la fin de la période minimale. Les détails dépendent du type de compte et de l’offre.

**Piège :** Archive n’est pas adapté à des données qui doivent être lues immédiatement. Il faut réhydrater l’objet avant de le lire.

### 3.4.4 Options de redondance

La redondance conserve plusieurs copies des données afin de résister à certaines défaillances.

| Option | Signification | Où sont les copies ? | À retenir |
|---|---|---|---|
| **LRS** | Locally Redundant Storage | Plusieurs copies synchrones dans un même centre de données de la région primaire | Protection locale ; pas de protection contre la perte complète du centre de données |
| **ZRS** | Zone-Redundant Storage | Copies synchrones réparties dans plusieurs zones de disponibilité de la région primaire | Protection contre la panne d’une zone |
| **GRS** | Geo-Redundant Storage | Copies dans la région primaire et réplication asynchrone vers une région secondaire | Protection géographique ; lecture secondaire non disponible par défaut |
| **RA-GRS** | Read-Access Geo-Redundant Storage | Comme GRS, avec accès en lecture à la région secondaire | Lecture possible sur la région secondaire |
| **GZRS** | Geo-Zone-Redundant Storage | ZRS dans la région primaire + réplication géographique asynchrone vers une région secondaire | Protection zone + région |
| **RA-GZRS** | Read-Access Geo-Zone-Redundant Storage | Comme GZRS, avec lecture de la région secondaire | Protection zone + région et accès en lecture secondaire |

**Mnémotechnique :**

- **L** = Local ; **Z** = Zones ; **G** = Geo (autre région) ; **RA** = Read Access (lecture sur la région secondaire).
- ZRS réplique dans plusieurs zones de la région primaire.
- GRS réplique vers une région secondaire, mais n’offre pas à lui seul l’accès en lecture à cette copie.

Attention : la réplication géographique est généralement asynchrone. Il peut donc exister un délai entre l’écriture primaire et la copie secondaire. La redondance ne remplace pas une sauvegarde contre la suppression ou la corruption logique.

### 3.4.5 Outils pour déplacer ou synchroniser des fichiers

| Outil | Rôle principal | Quand le choisir ? |
|---|---|---|
| **AzCopy** | Outil en ligne de commande pour copier des données vers, depuis ou entre comptes Azure Storage | Transfert scriptable ou automatisé de gros volumes de fichiers |
| **Azure Storage Explorer** | Interface graphique pour explorer et gérer les données Azure Storage | Administration manuelle de Blob, Files, Queues et autres ressources prises en charge |
| **Azure File Sync** | Synchronise un serveur Windows local avec un partage Azure Files ; permet notamment le cloud tiering | Conserver un cache local tout en centralisant les fichiers dans Azure |

### 3.4.6 Migration : Azure Migrate et Azure Data Box

- **Azure Migrate :** ensemble d’outils et de services pour découvrir, évaluer et migrer des environnements locaux vers Azure, notamment serveurs, applications, bases de données et charges de travail selon les outils utilisés.
- **Azure Data Box :** famille d’équipements physiques permettant de transférer de grandes quantités de données vers ou depuis Azure lorsque le transfert réseau serait trop lent, trop coûteux ou difficile. Les données sont copiées sur l’appareil puis l’appareil est expédié à Microsoft.

**Scénario :** migration de plusieurs serveurs locaux vers Azure → Azure Migrate.  
**Scénario :** transfert initial de dizaines ou centaines de téraoctets avec une connectivité Internet insuffisante → Azure Data Box.

## 3.5 Identité, accès et sécurité

### 3.5.1 Microsoft Entra ID

Microsoft Entra ID (anciennement Azure Active Directory / Azure AD) est le service cloud de gestion des identités et des accès de Microsoft.

Il permet notamment :

- gérer les utilisateurs, groupes et applications ;
- authentifier les utilisateurs ;
- proposer le Single Sign-On (SSO) ;
- appliquer la MFA ;
- mettre en place l’accès conditionnel ;
- gérer les identités externes et les accès aux applications.

**Important :** Entra ID est un service d’identité cloud. Ce n’est pas simplement un contrôleur de domaine Active Directory traditionnel déplacé dans Azure.

### 3.5.2 Microsoft Entra Domain Services

Fournit des services de domaine managés compatibles avec des technologies Windows classiques, notamment :

- jonction de machines à un domaine ;
- authentification Kerberos et NTLM ;
- LDAP ;
- stratégies de groupe (Group Policy).

Le service évite à l’organisation de déployer et maintenir elle-même des contrôleurs de domaine dans certains scénarios. Microsoft gère les contrôleurs de domaine sous-jacents.

### Entra ID vs Entra Domain Services

| Entra ID | Entra Domain Services |
|---|---|
| Identité cloud, authentification et accès aux applications | Domaine managé avec protocoles et fonctions AD DS traditionnels |
| SSO, MFA, Conditional Access, applications cloud | LDAP, Kerberos, NTLM, jonction au domaine, GPO |
| Adapté aux applications modernes et cloud | Adapté aux applications qui nécessitent encore des fonctions de domaine classiques |

### 3.5.3 Authentification et autorisation

- **Authentification (*Authentication*) :** vérifier qui est l’utilisateur ou le service.
- **Autorisation (*Authorization*) :** déterminer ce que cette identité a le droit de faire.

Exemple : se connecter avec son compte Microsoft est une authentification ; pouvoir lire une base de données ou supprimer une VM est une question d’autorisation.

### 3.5.4 SSO — Single Sign-On

L’authentification unique permet à un utilisateur de se connecter une fois et d’accéder ensuite à plusieurs applications sans devoir saisir à nouveau ses identifiants à chaque fois, dans les limites de la session et des politiques de sécurité.

### 3.5.5 MFA — Multifactor Authentication

L’authentification multifacteur demande au moins deux facteurs issus de catégories différentes :

- **Quelque chose que l’on connaît :** mot de passe, code secret.
- **Quelque chose que l’on possède :** téléphone, clé de sécurité, jeton.
- **Quelque chose que l’on est :** empreinte digitale, reconnaissance faciale.

Deux mots de passe ne constituent pas deux facteurs différents. Un mot de passe + une validation sur un téléphone correspond à deux catégories.

### 3.5.6 Authentification sans mot de passe (*Passwordless*)

Méthodes qui permettent de s’authentifier sans saisir de mot de passe classique, par exemple avec des clés de sécurité FIDO2, des passkeys, Windows Hello ou certaines méthodes Microsoft Authenticator.

Objectif : réduire les risques liés aux mots de passe volés, réutilisés ou hameçonnés.

### 3.5.7 Identités externes (*External Identities*)

Permettent à des personnes extérieures à l’organisation (partenaires, fournisseurs, clients) d’accéder de manière contrôlée à certaines ressources ou applications.

Exemple : une entreprise invite un partenaire dans son environnement pour collaborer sans devoir lui créer et maintenir un compte interne classique.

Microsoft Entra External ID couvre les scénarios d’identités externes, notamment la collaboration B2B et les expériences d’identité destinées aux clients selon la configuration et l’offre utilisées.

### 3.5.8 Accès conditionnel (*Conditional Access*)

Microsoft Entra Conditional Access applique des décisions d’accès selon des signaux et conditions.

Exemples de signaux :

- identité de l’utilisateur ou appartenance à un groupe ;
- application ou ressource demandée ;
- emplacement géographique ou adresse IP ;
- état ou conformité de l’appareil ;
- niveau de risque de connexion ou de l’utilisateur.

Actions possibles :

- autoriser l’accès ;
- bloquer l’accès ;
- exiger la MFA ;
- exiger un appareil conforme ou géré ;
- imposer d’autres contrôles.

**Exemple :** exiger la MFA lorsqu’un utilisateur se connecte depuis un emplacement inhabituel.

Conditional Access n’est pas une simple liste blanche IP : il permet de combiner plusieurs signaux et contrôles.

### 3.5.9 Azure RBAC — Role-Based Access Control

Azure RBAC définit **qui peut faire quoi, sur quelle ressource et à quel niveau**.

Une affectation de rôle se compose notamment de :

- une identité (utilisateur, groupe, principal de service ou identité managée) ;
- un rôle ;
- une portée (*scope*) : groupe d’administration, abonnement, groupe de ressources ou ressource.

Rôles intégrés importants :

| Rôle | Droits principaux |
|---|---|
| **Owner** | Gestion complète des ressources et possibilité d’attribuer des rôles d’accès |
| **Contributor** | Peut créer et gérer les ressources, mais ne peut pas attribuer des rôles d’accès via ce rôle |
| **Reader** | Peut consulter les ressources, sans les modifier |
| **User Access Administrator** | Peut gérer l’accès des utilisateurs aux ressources |

**Principe du moindre privilège :** donner uniquement les droits nécessaires, au niveau de portée le plus restreint possible.

**À retenir :**

- RBAC répond à la question : « Qui peut effectuer quelle action ? »
- Une stratégie Azure Policy répond plutôt à : « Quelles configurations ou ressources sont autorisées ou exigées ? »

### 3.5.10 Zero Trust — Confiance zéro

Principe de sécurité selon lequel aucune identité, aucun appareil, réseau ou emplacement ne doit être considéré comme fiable par défaut.

Les trois principes à mémoriser :

1. **Vérifier explicitement** (*Verify explicitly*) : vérifier l’identité, le contexte et les signaux disponibles.
2. **Utiliser le moindre privilège** (*Use least privilege access*) : donner uniquement les droits nécessaires.
3. **Supposer une compromission** (*Assume breach*) : limiter les dégâts potentiels et concevoir les défenses en profondeur.

Le Zero Trust ne signifie pas « bloquer tout le monde » ; il signifie vérifier chaque accès selon le contexte.

### 3.5.11 Défense en profondeur (*Defense in Depth*)

Approche qui superpose plusieurs couches de sécurité afin qu’une seule défaillance ne compromette pas tout le système.

Couches typiques :

1. sécurité physique ;
2. identité et accès ;
3. périmètre ;
4. réseau ;
5. calcul / hôtes ;
6. applications ;
7. données.

Exemple : même si un attaquant franchit une protection réseau, les contrôles d’identité, les permissions applicatives et le chiffrement des données peuvent encore limiter son accès.

### 3.5.12 Microsoft Defender for Cloud

Service de sécurité destiné à améliorer la posture de sécurité des environnements cloud et hybrides.

Il permet notamment :

- d’évaluer la configuration de sécurité ;
- de présenter des recommandations ;
- de calculer un score de sécurité (*Secure Score*) ;
- d’identifier certaines menaces et d’activer des protections pour les charges de travail selon les plans utilisés.

**À distinguer :** Defender for Cloud est centré sur la posture et la protection des ressources cloud/hybrides. Azure Monitor collecte et analyse la télémétrie opérationnelle ; ces services peuvent fonctionner ensemble.

---

# 4. Domaine 3 — Gestion et gouvernance Azure (30–35 %)

## 4.1 Coûts

### 4.1.1 Facteurs influençant les coûts

Les coûts Azure dépendent notamment de :

- **Type de ressource :** VM, base de données, stockage, service applicatif, etc.
- **Taille / SKU :** CPU, RAM, performance, niveau de service.
- **Région :** les prix peuvent varier selon l’emplacement.
- **Durée d’utilisation :** temps pendant lequel une ressource est facturée.
- **Volume de stockage :** quantité de données conservées.
- **Niveau de stockage :** Hot, Cool, Cold ou Archive.
- **Redondance :** LRS, ZRS, GRS, etc. Les options plus résilientes peuvent coûter davantage.
- **Transactions et opérations :** lecture, écriture, requêtes, opérations sur les objets.
- **Transfert de données :** les transferts sortants (*egress*) peuvent être facturés ; les règles dépendent du scénario.
- **Licences et options supplémentaires :** logiciels, support, sauvegarde, sécurité, etc.

### 4.1.2 Calculatrice de prix Azure (*Pricing Calculator*)

Outil en ligne permettant d’estimer le coût d’une solution avant sa mise en production.

On choisit les services, la région, les tailles, les quantités, la durée et les options afin d’obtenir une estimation.

À utiliser pour répondre à : « Combien pourrait coûter cette nouvelle architecture dans Azure ? »

Les résultats sont des estimations, pas une garantie du montant réel de la facture. Les prix peuvent dépendre des contrats, remises et consommations réelles.

### 4.1.3 Calculatrice du coût total de possession (*TCO Calculator*)

Permet de comparer le coût estimé d’une infrastructure locale avec celui d’une solution Azure. Elle aide à évaluer l’intérêt économique d’une migration vers le cloud.

**Différence à mémoriser :**

- **Pricing Calculator :** estimer le coût d’une solution Azure envisagée.
- **TCO Calculator :** comparer les coûts d’une infrastructure existante avec une migration vers Azure.

### 4.1.4 Microsoft Cost Management

Outils de suivi, d’analyse et de contrôle des dépenses Azure.

Fonctionnalités à reconnaître :

- analyser les coûts par période, service, abonnement, groupe de ressources ou tag ;
- suivre les tendances et les dépenses ;
- définir des budgets ;
- configurer des alertes lorsque certains seuils sont atteints ;
- identifier des opportunités d’optimisation.

**Attention :** un budget et une alerte servent à suivre les dépenses et à prévenir. Un budget ne coupe pas automatiquement les ressources lorsqu’il est dépassé, sauf automatisation supplémentaire configurée séparément.

### 4.1.5 Balises (*Tags*)

Les tags sont des paires clé-valeur ajoutées aux ressources pour faciliter leur organisation, leur recherche et l’analyse des coûts.

Exemples :

```text
Environment = Production
Department  = Finance
Owner       = Team-ERP
CostCenter  = CC-100
Project     = MigrationBC
```

Utilités :

- regrouper les coûts par projet ou département ;
- identifier le propriétaire d’une ressource ;
- distinguer production, test et développement ;
- faciliter les rapports et l’automatisation.

Les tags ne constituent pas à eux seuls un mécanisme de sécurité ou une autorisation. Ils ne sont pas nécessairement hérités automatiquement par toutes les ressources : des stratégies peuvent être mises en place pour imposer ou propager des tags.

## 4.2 Gouvernance et conformité

### 4.2.1 Microsoft Purview

Microsoft Purview est une famille de solutions de gouvernance, de conformité et de gestion des données.

Dans le contexte des fondamentaux Azure, retiens notamment :

- découvrir et cartographier les données ;
- inventorier et cataloguer les sources de données ;
- classifier les données, y compris les données sensibles ;
- améliorer la gouvernance, la compréhension et la traçabilité des données ;
- aider les organisations à gérer leurs exigences de conformité et de protection des données selon les solutions utilisées.

**Idée clé :** Purview concerne la gouvernance et la visibilité sur les données. Il ne remplace pas RBAC ni Azure Policy.

### 4.2.2 Azure Policy

Azure Policy permet de définir et d’appliquer des règles de gouvernance sur les ressources Azure afin de respecter des standards organisationnels ou réglementaires.

Exemples :

- autoriser uniquement certaines régions ;
- imposer une convention de tags ;
- empêcher la création de ressources d’un type non autorisé ;
- exiger une configuration particulière ;
- auditer les ressources qui ne respectent pas une règle.

Une stratégie peut notamment :

- **Audit :** détecter et signaler une configuration non conforme ;
- **Deny :** refuser la création ou la modification non conforme ;
- **Modify / Append :** modifier ou compléter certaines propriétés prises en charge ;
- **DeployIfNotExists :** déployer une ressource ou configuration complémentaire lorsqu’elle manque, avec les conditions et autorisations nécessaires.

Les stratégies peuvent être regroupées dans une initiative (*Initiative*) afin d’appliquer un ensemble de règles.

### 4.2.3 Azure Policy vs RBAC

| Azure Policy | Azure RBAC |
|---|---|
| Contrôle la conformité et les configurations des ressources | Contrôle les permissions des identités |
| « Cette ressource doit être dans une région autorisée » | « Cet utilisateur peut créer une VM » |
| Peut auditer ou refuser des déploiements non conformes | Accorde ou refuse des actions selon un rôle et une portée |

Un utilisateur peut avoir le rôle Contributor mais rester incapable de créer une ressource interdite par Azure Policy.

### 4.2.4 Verrous de ressources (*Resource Locks*)

Les verrous protègent les ressources contre certaines suppressions ou modifications accidentelles. Ils peuvent être appliqués à une ressource, un groupe de ressources ou un abonnement, et sont hérités par les ressources descendantes.

Deux types fondamentaux :

| Verrou | Effet |
|---|---|
| **CanNotDelete** | La ressource peut être lue et modifiée, mais pas supprimée tant que le verrou est présent. |
| **ReadOnly** | La ressource ne peut pas être modifiée ni supprimée via les opérations de gestion concernées. |

**Attention :** même un propriétaire ou un administrateur doit retirer le verrou avant d’effectuer une opération bloquée. Un verrou n’est pas une sauvegarde et ne protège pas contre toutes les formes de perte de données.

### 4.2.5 Microsoft Purview vs Azure Policy vs Resource Locks

- **Purview :** gouvernance, découverte, classification et visibilité sur les données.
- **Azure Policy :** règles de conformité et de configuration des ressources.
- **Resource Locks :** protection contre la suppression ou la modification accidentelle.

## 4.3 Gestion et déploiement

### 4.3.1 Portail Azure (*Azure Portal*)

Interface web graphique permettant de créer, configurer, surveiller et gérer les ressources Azure.

C’est une interface de gestion, pas un service d’hébergement. Les opérations effectuées dans le portail passent par les mécanismes Azure sous-jacents, notamment Azure Resource Manager pour les opérations de gestion des ressources.

### 4.3.2 Azure Cloud Shell

Terminal accessible depuis un navigateur et intégré au portail Azure. Il fournit un environnement préconfiguré et authentifié pour exécuter des commandes Azure.

Deux environnements courants :

- **Bash** ;
- **PowerShell**.

Il permet d’utiliser Azure CLI ou Azure PowerShell sans devoir installer et configurer immédiatement les outils sur son ordinateur local. Un stockage associé peut être utilisé pour conserver des fichiers entre sessions.

### 4.3.3 Azure CLI

Interface en ligne de commande multiplateforme permettant de gérer Azure avec des commandes commençant généralement par `az`.

Exemple :

```bash
az group list
az vm list --output table
```

Utile pour les scripts, l’automatisation et les tâches répétitives.

### 4.3.4 Azure PowerShell

Ensemble de modules PowerShell pour administrer Azure avec des cmdlets, généralement préfixées par `Get-Az`, `New-Az`, `Set-Az`, `Remove-Az`, etc.

Exemple :

```powershell
Get-AzResourceGroup
Get-AzVM
```

### CLI vs PowerShell vs Cloud Shell

| Outil | Description |
|---|---|
| **Azure CLI** | Outil en ligne de commande utilisant la syntaxe `az`; multiplateforme |
| **Azure PowerShell** | Modules et cmdlets PowerShell pour gérer Azure |
| **Cloud Shell** | Environnement de terminal hébergé dans le cloud, proposant Bash ou PowerShell et des outils préinstallés |
| **Portail Azure** | Interface graphique web |

Cloud Shell n’est pas une alternative à CLI ou PowerShell : il permet précisément de les utiliser dans un environnement hébergé.

### 4.3.5 Azure Arc

Azure Arc étend les capacités de gestion Azure à des ressources situées en dehors d’Azure : environnements locaux, autres clouds et environnements hybrides.

Selon les scénarios, Arc permet de représenter et gérer depuis Azure des serveurs, clusters Kubernetes et autres ressources prises en charge, puis d’appliquer des pratiques de gouvernance, d’inventaire et de gestion cohérentes.

**À retenir :** Azure Arc ne signifie pas que les serveurs locaux sont déplacés physiquement dans Azure. Il fournit une couche de gestion et de gouvernance pour des ressources qui restent à leur emplacement.

### 4.3.6 Infrastructure as Code (IaC)

L’infrastructure en tant que code consiste à décrire l’infrastructure souhaitée dans des fichiers de définition plutôt que de configurer chaque ressource manuellement.

Avantages :

- déploiements reproductibles ;
- standardisation des environnements ;
- versionnement des configurations ;
- revue des changements ;
- automatisation et intégration dans des pipelines ;
- réduction des erreurs manuelles.

Exemples d’outils et langages : ARM templates, Bicep, Terraform.

### 4.3.7 Azure Resource Manager (ARM)

Azure Resource Manager est la couche de gestion et de déploiement des ressources Azure. Il reçoit les demandes de gestion, contrôle les autorisations, applique les stratégies, orchestre les déploiements et gère les dépendances entre ressources.

Les opérations du portail Azure, de CLI, de PowerShell et des outils IaC utilisent les mécanismes de gestion Azure.

### 4.3.8 Modèles ARM (*ARM Templates*)

Les modèles ARM sont des fichiers déclaratifs, au format JSON, qui décrivent les ressources Azure à déployer et leur configuration.

Un modèle peut décrire plusieurs ressources et leurs dépendances. On peut le réutiliser pour déployer de manière cohérente plusieurs environnements.

**Déclaratif :** on décrit l’état souhaité ; le système détermine les opérations nécessaires pour atteindre cet état.

Bicep est un langage plus concis et lisible permettant de décrire des déploiements Azure, puis de produire des modèles ARM.

## 4.4 Supervision

### 4.4.1 Azure Advisor

Service de recommandations personnalisées qui analyse les ressources Azure et propose des améliorations.

Catégories classiques de recommandations :

- fiabilité ;
- sécurité ;
- performances ;
- coûts ;
- excellence opérationnelle.

Exemples : identifier une VM sous-utilisée, recommander une optimisation de coût ou signaler une configuration à améliorer.

**À retenir :** Advisor recommande des améliorations ; il ne remplace pas l’outil central de collecte et d’analyse de télémétrie.

### 4.4.2 Azure Service Health

Fournit des informations personnalisées sur l’état des services Azure susceptibles d’affecter les ressources ou abonnements de l’organisation.

Il informe notamment sur :

- incidents Azure en cours ;
- maintenance planifiée ;
- avis de santé des services ;
- problèmes susceptibles d’avoir un impact sur les ressources de l’abonnement.

Différences utiles :

| Service | Question à laquelle il répond |
|---|---|
| **Azure Status** | « Azure rencontre-t-il un problème global connu ? » |
| **Azure Service Health** | « Quels événements Azure peuvent affecter mes services et abonnements ? » |
| **Azure Resource Health** | « Quel est l’état de santé de cette ressource Azure précise ? » |

### 4.4.3 Azure Monitor

Service central de supervision et d’observabilité des environnements Azure et hybrides. Il collecte, analyse et permet d’exploiter des données de télémétrie : métriques, journaux, traces et événements.

Il aide à suivre la disponibilité, les performances et le comportement des ressources et applications.

#### Métriques (*Metrics*)

Valeurs numériques mesurées au cours du temps : utilisation CPU, mémoire disponible selon la source, nombre de requêtes, latence, débit, etc.

Elles sont adaptées aux graphiques et aux alertes sur des seuils ou tendances.

#### Journaux (*Logs*)

Enregistrements d’événements et de données de diagnostic. Ils permettent des analyses plus détaillées et des recherches sur les événements.

#### Log Analytics

Outil d’analyse des journaux Azure Monitor. Les données sont stockées dans un espace de travail Log Analytics (*Log Analytics Workspace*) et peuvent être interrogées avec le langage Kusto Query Language (**KQL**).

À retenir : Log Analytics sert à interroger et analyser les logs ; ce n’est pas le nom de l’ensemble du service de supervision.

#### Azure Monitor Alerts

Permet de créer des alertes lorsque des conditions sont remplies : seuil de métrique dépassé, résultat d’une requête de journal, état ou événement particulier.

Les alertes peuvent déclencher des groupes d’actions (*Action Groups*) : notification par e-mail, SMS, webhook ou action d’automatisation prise en charge.

#### Application Insights

Fonctionnalité d’Azure Monitor orientée supervision des applications (*Application Performance Monitoring*, APM).

Elle collecte notamment :

- requêtes entrantes ;
- temps de réponse ;
- exceptions ;
- appels aux dépendances (base de données, API, services externes) ;
- traces et télémétrie applicative.

**Scénario :** une application web est lente et tu veux identifier quelles requêtes, dépendances ou exceptions posent problème → Application Insights.

### 4.4.4 Les outils de supervision à ne pas confondre

| Outil | Rôle principal | Exemple de question |
|---|---|---|
| Azure Advisor | Recommandations d’optimisation | Comment améliorer la sécurité, le coût ou les performances ? |
| Azure Service Health | Incidents et maintenance Azure affectant l’abonnement | Une panne Azure affecte-t-elle mes ressources ? |
| Azure Monitor | Collecte et analyse de télémétrie | Comment se comportent mes ressources ? |
| Log Analytics | Analyse des logs avec KQL | Quels événements se sont produits ? |
| Azure Monitor Alerts | Notifications basées sur des conditions | Comment être averti lorsqu’un seuil est dépassé ? |
| Application Insights | Supervision des applications | Pourquoi mon API est-elle lente ou en erreur ? |

---

# 5. Tableaux comparatifs à mémoriser

## 5.1 Les distinctions les plus importantes

| À comparer | Premier élément | Second élément |
|---|---|---|
| IaaS / PaaS | Contrôle élevé, gestion de l’OS par le client | Plateforme et OS gérés par le fournisseur |
| PaaS / SaaS | Le client déploie son application | Le fournisseur fournit l’application prête à l’emploi |
| VM / Conteneur | Virtualise un système complet | Isole une application et ses dépendances, partage le noyau hôte |
| VM Scale Sets / Availability Sets | Gérer un groupe d’instances et la mise à l’échelle | Répartir des VMs entre domaines de panne et de mise à jour |
| Availability Sets / Availability Zones | Domaines logiques de panne et de mise à jour | Centres de données/implantations physiquement séparés |
| VPN Gateway / ExpressRoute | Tunnel chiffré via Internet | Connectivité privée via un fournisseur |
| Public Endpoint / Private Endpoint | Accès via une adresse publique | Accès via une IP privée dans un VNet |
| Blob / Files | Stockage d’objets | Partage de fichiers managé |
| Azure Migrate / Data Box | Découverte, évaluation et migration de charges de travail | Transfert physique de grands volumes de données |
| Entra ID / Entra Domain Services | Identité cloud et accès aux applications | Fonctions de domaine traditionnelles managées |
| MFA / SSO | Plusieurs facteurs d’authentification | Une connexion pour accéder à plusieurs applications |
| RBAC / Policy | Droits des identités | Conformité et configuration des ressources |
| Policy / Locks | Règles de conformité | Protection contre modification/suppression |
| Pricing Calculator / TCO | Estimer une solution Azure | Comparer local et Azure |
| Advisor / Monitor | Recommandations | Collecte et analyse de télémétrie |
| Service Health / Resource Health | Incidents Azure pouvant affecter l’abonnement | Santé d’une ressource précise |

## 5.2 La hiérarchie de gouvernance

| Niveau | Fonction |
|---|---|
| Locataire (Tenant) | Frontière d’identité Microsoft Entra |
| Groupe d’administration | Gouverner plusieurs abonnements |
| Abonnement | Facturation, quotas et organisation des ressources |
| Groupe de ressources | Regrouper des ressources liées |
| Ressource | Instance concrète d’un service Azure |

## 5.3 Résilience et disponibilité

| Besoin | Mécanisme à connaître |
|---|---|
| Éviter qu’une mise à jour interrompe toutes les VMs d’un groupe | Update Domains / Availability Sets |
| Éviter qu’une panne matérielle localisée touche toutes les VMs d’un groupe | Fault Domains / Availability Sets |
| Résister à la perte d’une zone dans une région | Availability Zones / ZRS selon le service |
| Résister à la perte d’une région | Architecture multi-région / GRS ou GZRS selon le besoin |
| Garder un accès en lecture à la copie de stockage secondaire | RA-GRS ou RA-GZRS |

---

# 6. Reconnaître le bon service dans un scénario

| Le scénario indique… | Pense à… |
|---|---|
| « Je veux héberger une application web sans gérer le système d’exploitation. » | Azure App Service (PaaS) |
| « Je dois installer un logiciel spécifique sur Windows Server. » | Azure Virtual Machines (IaaS) |
| « Le code doit s’exécuter quand un fichier arrive dans un stockage. » | Azure Functions |
| « Je dois orchestrer des conteneurs Kubernetes. » | Azure Kubernetes Service (AKS) |
| « Je veux exécuter un conteneur sans gérer Kubernetes. » | Azure Container Instances ou Azure Container Apps selon le scénario |
| « Je dois augmenter automatiquement le nombre de VMs. » | Virtual Machine Scale Sets |
| « Je dois proposer des bureaux Windows accessibles à distance. » | Azure Virtual Desktop |
| « Deux réseaux virtuels Azure doivent communiquer. » | VNet Peering |
| « Un site local doit se connecter à Azure par un tunnel chiffré via Internet. » | VPN Gateway Site-to-Site |
| « Une entreprise exige une connexion privée dédiée vers Azure. » | ExpressRoute |
| « Un service PaaS doit être accessible par une IP privée dans mon VNet. » | Private Endpoint / Private Link |
| « Je dois héberger une zone DNS publique ou privée. » | Azure DNS |
| « Je dois stocker des images, vidéos ou documents comme objets. » | Azure Blob Storage |
| « Plusieurs machines doivent accéder à un partage réseau de fichiers. » | Azure Files |
| « Je dois découpler des composants en plaçant des messages dans une file. » | Azure Queue Storage |
| « Je dois conserver des blobs très rarement consultés et accepter un délai de récupération. » | Archive tier |
| « Je dois conserver les données dans plusieurs zones d’une même région. » | ZRS |
| « Je veux une copie géographique et un accès en lecture sur la copie secondaire. » | RA-GRS ou RA-GZRS selon le besoin |
| « Je veux synchroniser un serveur de fichiers local avec Azure Files. » | Azure File Sync |
| « Je dois copier des objets vers Azure Storage en ligne de commande. » | AzCopy |
| « Je veux explorer les comptes de stockage avec une interface graphique. » | Azure Storage Explorer |
| « Je dois inventorier et migrer mes serveurs locaux. » | Azure Migrate |
| « Je dois transférer un très gros volume de données sans dépendre d’Internet. » | Azure Data Box |
| « Je veux centraliser les utilisateurs et le SSO cloud. » | Microsoft Entra ID |
| « Une application nécessite LDAP, Kerberos ou des stratégies de groupe. » | Microsoft Entra Domain Services |
| « Je veux exiger la MFA selon l’emplacement ou le risque de connexion. » | Conditional Access |
| « Je veux limiter les actions possibles d’un utilisateur sur une ressource. » | Azure RBAC |
| « Je veux interdire le déploiement dans certaines régions. » | Azure Policy |
| « Je veux empêcher la suppression accidentelle d’une base de données. » | Resource Lock — CanNotDelete |
| « Je veux cataloguer et classifier les données sensibles. » | Microsoft Purview |
| « Je veux connaître le coût estimé d’une architecture Azure. » | Pricing Calculator |
| « Je veux comparer le coût local et le coût Azure. » | TCO Calculator |
| « Je veux analyser les dépenses et définir des budgets. » | Microsoft Cost Management |
| « Je veux appliquer des règles de tags ou de régions autorisées. » | Azure Policy |
| « Je veux gérer des serveurs locaux depuis Azure. » | Azure Arc |
| « Je veux déployer une infrastructure de façon répétable depuis des fichiers. » | IaC / ARM templates / Bicep |
| « Je veux des recommandations pour réduire les coûts ou améliorer la sécurité. » | Azure Advisor |
| « Je veux savoir si une maintenance ou panne Azure affecte mon abonnement. » | Azure Service Health |
| « Je veux suivre CPU, métriques, journaux et alertes. » | Azure Monitor |
| « Je veux interroger les logs avec KQL. » | Log Analytics |
| « Je veux analyser les erreurs et les dépendances d’une API. » | Application Insights |

---

# 7. Questions d’auto-évaluation corrigées

Essaie de répondre avant de lire la correction. Les questions ci-dessous sont originales et destinées à tester les notions de ce guide ; elles ne sont pas des questions officielles divulguées par Microsoft.

## Questions

### Q1
Une entreprise veut déployer une application métier, mais ne souhaite pas gérer les mises à jour du système d’exploitation des serveurs. Elle veut garder la responsabilité de son code applicatif. Quel modèle convient le mieux ?

A. IaaS  
B. PaaS  
C. SaaS  
D. Cloud privé

### Q2
Qui est principalement responsable de la gestion du système d’exploitation d’une machine virtuelle Azure ?

A. Microsoft  
B. Le client  
C. Le fournisseur Internet  
D. Microsoft Entra ID

### Q3
Une application doit augmenter automatiquement le nombre de machines virtuelles lorsqu’il y a davantage d’utilisateurs. Quel service est le plus adapté ?

A. Azure Virtual Machine Scale Sets  
B. Azure Policy  
C. Azure DNS  
D. Azure Data Box

### Q4
Quelle option permet de connecter deux VNets Azure avec une faible latence sur le réseau Microsoft ?

A. Azure Files  
B. VNet Peering  
C. Azure Advisor  
D. Microsoft Purview

### Q5
Une entreprise veut établir une connexion chiffrée entre son réseau local et Azure en utilisant Internet. Quel service choisir ?

A. ExpressRoute  
B. Azure VPN Gateway  
C. Azure DNS  
D. Azure Monitor

### Q6
Une entreprise exige une connectivité privée dédiée entre son site et Azure, sans passer par Internet public. Quel service convient ?

A. VPN Gateway  
B. ExpressRoute  
C. Public Endpoint  
D. Application Insights

### Q7
Quel stockage convient le mieux pour des images et des vidéos stockées comme objets ?

A. Azure Queue Storage  
B. Azure Blob Storage  
C. Azure Files  
D. Azure DNS

### Q8
Une application doit accéder à un partage de fichiers SMB managé dans Azure. Quel service choisir ?

A. Azure Files  
B. Blob Storage  
C. Table Storage  
D. Queue Storage

### Q9
Quel niveau de stockage Blob est adapté à des données consultées très rarement, pour lesquelles un délai de récupération de plusieurs heures est acceptable ?

A. Hot  
B. Cool  
C. Cold  
D. Archive

### Q10
Quelle redondance conserve des copies synchrones réparties dans plusieurs zones d’une région Azure ?

A. LRS  
B. ZRS  
C. GRS  
D. RA-GRS

### Q11
Que signifie le préfixe `RA` dans RA-GRS ?

A. Réplication automatique  
B. Accès en lecture à la région secondaire  
C. Région réservée  
D. Accès administrateur

### Q12
Quel outil permet de découvrir, évaluer et migrer des serveurs locaux vers Azure ?

A. Azure Migrate  
B. Azure Data Box  
C. Azure Advisor  
D. Azure Files

### Q13
Quel service est adapté au transfert physique d’un très grand volume de données vers Azure lorsque le réseau n’est pas assez rapide ?

A. Azure Monitor  
B. Azure Data Box  
C. Azure Policy  
D. Entra ID

### Q14
Une application nécessite LDAP et Kerberos. Quel service est le plus pertinent ?

A. Microsoft Entra ID seul  
B. Microsoft Entra Domain Services  
C. Azure Advisor  
D. Azure Cost Management

### Q15
Quel mécanisme peut exiger la MFA lorsqu’une connexion provient d’un emplacement inhabituel ?

A. Azure RBAC  
B. Azure Policy  
C. Microsoft Entra Conditional Access  
D. Resource Lock

### Q16
Quel rôle Azure permet de consulter les ressources sans les modifier ?

A. Owner  
B. Contributor  
C. Reader  
D. User Access Administrator

### Q17
Un utilisateur possède Contributor, mais ne peut pas créer une ressource dans une région interdite par l’organisation. Quel mécanisme peut expliquer ce comportement ?

A. Azure Policy  
B. Azure Files  
C. Azure Advisor  
D. Azure Monitor

### Q18
Quel verrou permet d’empêcher la suppression d’une ressource tout en autorisant sa modification ?

A. ReadOnly  
B. CanNotDelete  
C. Deny  
D. Owner

### Q19
Quel outil permet d’estimer le coût futur d’une nouvelle architecture Azure ?

A. TCO Calculator  
B. Pricing Calculator  
C. Azure Service Health  
D. Azure Arc

### Q20
Quel outil permet de comparer le coût d’une infrastructure locale avec celui d’une solution Azure ?

A. Pricing Calculator  
B. TCO Calculator  
C. Azure Monitor  
D. Azure CLI

### Q21
Quel outil permet d’analyser les coûts et de définir des budgets ?

A. Microsoft Cost Management  
B. Microsoft Entra ID  
C. Application Insights  
D. Azure DNS

### Q22
Une organisation souhaite cataloguer ses sources de données et classifier des données sensibles. Quel service doit-elle étudier ?

A. Microsoft Purview  
B. Azure VPN Gateway  
C. Virtual Machine Scale Sets  
D. Azure Functions

### Q23
Quel service étend la gestion Azure aux serveurs locaux et aux environnements multicloud ?

A. Azure Arc  
B. Azure Files  
C. Azure DNS  
D. Availability Sets

### Q24
Quel service fournit des recommandations personnalisées pour améliorer le coût, la sécurité et les performances ?

A. Azure Monitor  
B. Azure Advisor  
C. Azure Service Health  
D. Azure Data Box

### Q25
Une entreprise souhaite savoir si une maintenance Azure planifiée risque d’affecter ses ressources. Quel outil consulter ?

A. Azure Service Health  
B. Application Insights  
C. Azure Policy  
D. Azure Storage Explorer

### Q26
Quel service centralise les métriques et les journaux des ressources Azure ?

A. Azure Monitor  
B. Azure Advisor  
C. Azure Migrate  
D. Microsoft Purview

### Q27
Quel outil permet d’interroger les journaux dans un espace de travail avec KQL ?

A. Azure Pricing Calculator  
B. Log Analytics  
C. Azure DNS  
D. Azure Virtual Desktop

### Q28
Une API web renvoie des erreurs et répond lentement. L’équipe veut examiner les requêtes, exceptions et dépendances. Quel service choisir ?

A. Application Insights  
B. Azure Data Box  
C. Azure Policy  
D. Azure Files

### Q29
Dans la hiérarchie Azure, quel élément se trouve directement au-dessus des groupes de ressources ?

A. Région  
B. Abonnement  
C. Zone de disponibilité  
D. Centre de données

### Q30
Quel énoncé décrit le mieux le principe Zero Trust ?

A. Tout utilisateur connecté au réseau interne est fiable.  
B. Seuls les postes externes doivent être authentifiés.  
C. Vérifier explicitement, appliquer le moindre privilège et supposer une compromission.  
D. Désactiver toutes les connexions distantes.

## Corrigé expliqué

| Question | Réponse | Explication |
|---:|:---:|---|
| 1 | B | PaaS permet de déployer son application sans gérer le système d’exploitation. |
| 2 | B | En IaaS, le client gère l’OS invité de la VM. |
| 3 | A | VM Scale Sets gère un ensemble de VMs et la mise à l’échelle horizontale. |
| 4 | B | VNet Peering connecte les réseaux virtuels Azure. |
| 5 | B | VPN Gateway crée un tunnel chiffré via Internet. |
| 6 | B | ExpressRoute fournit une connectivité privée dédiée via un fournisseur. |
| 7 | B | Blob Storage est le stockage d’objets. |
| 8 | A | Azure Files fournit des partages de fichiers managés, notamment SMB. |
| 9 | D | Archive est destiné aux données rarement consultées et nécessite une réhydratation. |
| 10 | B | ZRS répartit les copies dans plusieurs zones de la région primaire. |
| 11 | B | RA signifie Read Access : lecture autorisée dans la région secondaire. |
| 12 | A | Azure Migrate sert à découvrir, évaluer et migrer des charges de travail. |
| 13 | B | Data Box utilise un appareil physique pour transférer de gros volumes. |
| 14 | B | Entra Domain Services fournit notamment LDAP et Kerberos managés. |
| 15 | C | Conditional Access applique des conditions et contrôles, dont la MFA. |
| 16 | C | Reader permet de consulter sans modifier. |
| 17 | A | Azure Policy peut interdire des configurations ou régions non conformes. |
| 18 | B | CanNotDelete interdit la suppression, mais autorise les modifications. |
| 19 | B | Pricing Calculator estime le coût d’une solution Azure. |
| 20 | B | TCO Calculator compare l’infrastructure locale et Azure. |
| 21 | A | Cost Management analyse les dépenses et permet de définir des budgets. |
| 22 | A | Purview concerne la gouvernance, le catalogage et la classification des données. |
| 23 | A | Azure Arc étend la gestion Azure aux environnements hybrides et multicloud. |
| 24 | B | Advisor fournit des recommandations d’optimisation. |
| 25 | A | Service Health signale les incidents et maintenances qui peuvent affecter l’abonnement. |
| 26 | A | Azure Monitor est le service central de supervision. |
| 27 | B | Log Analytics permet d’analyser les logs avec KQL. |
| 28 | A | Application Insights fournit de la télémétrie applicative et APM. |
| 29 | B | Les groupes de ressources sont contenus dans un abonnement. |
| 30 | C | Ce sont les trois principes fondamentaux du Zero Trust. |

### Évaluation indicative

- **27–30 bonnes réponses :** très bonne maîtrise des notions de ce guide ; passe aux évaluations Microsoft et vérifie les points faibles.
- **23–26 :** bonne base, mais révise les distinctions entre services.
- **18–22 :** retravaille les tableaux comparatifs et les scénarios.
- **Moins de 18 :** reprends les domaines un par un avant de multiplier les examens blancs.

Ce résultat est un repère pédagogique, pas une conversion officielle vers le score Microsoft.

---

# 8. Checklist de préparation

Coche chaque point lorsque tu peux l’expliquer sans regarder le document et reconnaître un scénario qui l’utilise.

## Concepts du cloud

- [ ] Expliquer le cloud computing et le modèle basé sur la consommation.
- [ ] Distinguer CapEx et OpEx.
- [ ] Comparer cloud public, privé et hybride.
- [ ] Expliquer les responsabilités Microsoft/client en IaaS, PaaS et SaaS.
- [ ] Expliquer haute disponibilité, scalabilité verticale/horizontale, élasticité et fiabilité.
- [ ] Choisir entre IaaS, PaaS, SaaS et serverless selon un besoin.

## Architecture Azure

- [ ] Distinguer centre de données, région, paire de régions et zone de disponibilité.
- [ ] Expliquer les régions souveraines.
- [ ] Réciter la hiérarchie Tenant → Management Group → Subscription → Resource Group → Resource.
- [ ] Expliquer le rôle d’un groupe de ressources et d’un abonnement.

## Calcul et réseau

- [ ] Comparer VM, conteneur et fonction.
- [ ] Distinguer App Service, Functions, ACI, AKS et Virtual Machines.
- [ ] Expliquer VM Scale Sets, Availability Sets, Fault Domains et Update Domains.
- [ ] Expliquer Azure Virtual Desktop.
- [ ] Expliquer VNet, sous-réseau et VNet Peering.
- [ ] Distinguer VPN Gateway et ExpressRoute.
- [ ] Distinguer endpoints publics et privés.
- [ ] Expliquer Azure DNS.

## Stockage et migration

- [ ] Distinguer Blob, Files, Queue, Table, Data Lake et Managed Disks.
- [ ] Choisir Hot, Cool, Cold ou Archive.
- [ ] Distinguer LRS, ZRS, GRS, RA-GRS, GZRS et RA-GZRS.
- [ ] Distinguer AzCopy, Storage Explorer et Azure File Sync.
- [ ] Distinguer Azure Migrate et Azure Data Box.

## Identité et sécurité

- [ ] Distinguer authentification et autorisation.
- [ ] Distinguer Entra ID et Entra Domain Services.
- [ ] Expliquer SSO, MFA, passwordless et identités externes.
- [ ] Expliquer Conditional Access.
- [ ] Expliquer RBAC, les rôles Owner/Contributor/Reader et les niveaux de portée.
- [ ] Expliquer Zero Trust et Defense in Depth.
- [ ] Expliquer le rôle de Defender for Cloud.

## Gestion et gouvernance

- [ ] Identifier les facteurs qui influencent le coût Azure.
- [ ] Distinguer Pricing Calculator, TCO Calculator et Cost Management.
- [ ] Expliquer l’usage des tags.
- [ ] Expliquer Microsoft Purview.
- [ ] Distinguer Azure Policy, RBAC et Resource Locks.
- [ ] Distinguer CanNotDelete et ReadOnly.
- [ ] Distinguer Portal, Cloud Shell, CLI et PowerShell.
- [ ] Expliquer Azure Arc, IaC, ARM et ARM templates.
- [ ] Distinguer Advisor, Service Health, Monitor, Log Analytics, Alerts et Application Insights.

---

# 9. Ressources officielles

Commence par le guide d’examen, puis suis les trois parcours Microsoft Learn qui couvrent les domaines mesurés. Le quatrième parcours de la série propose des projets guidés pour pratiquer.

| Ressource | Utilité | Lien |
|---|---|---|
| Guide officiel AZ-900 | Référentiel, pondérations et compétences mesurées | [Microsoft Learn — Study guide AZ-900](https://learn.microsoft.com/fr-fr/credentials/certifications/resources/study-guides/az-900) |
| Détails de la certification | Niveau, examen, réservation et informations pratiques | [Microsoft Certified: Azure Fundamentals](https://learn.microsoft.com/fr-fr/credentials/certifications/azure-fundamentals/) |
| Parcours 1 — Concepts cloud | Cloud computing, responsabilité partagée, avantages et modèles de service | [Microsoft Learn — Concepts cloud](https://learn.microsoft.com/fr-fr/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/) |
| Parcours 2 — Architecture et services | Architecture, calcul, réseau, stockage, identité et sécurité | [Microsoft Learn — Architecture et services Azure](https://learn.microsoft.com/fr-fr/training/paths/azure-fundamentals-describe-azure-architecture-services/) |
| Parcours 3 — Gestion et gouvernance | Coûts, conformité, outils de gestion et supervision | [Microsoft Learn — Gestion et gouvernance](https://learn.microsoft.com/fr-fr/training/paths/describe-azure-management-governance/) |
| Évaluation pratique | Vérifier le niveau et repérer les lacunes | [Practice Assessment AZ-900](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/practice/assessment?assessment-type=practice&assessmentId=23) |
| Bac à sable de l’examen | Se familiariser avec l’interface et les formats de question | [Exam Sandbox](https://aka.ms/examdemo) |
| Calculatrice de prix | Estimer une solution Azure | [Azure Pricing Calculator](https://azure.microsoft.com/pricing/calculator/) |
| Documentation Azure | Documentation produit complète | [Azure documentation](https://learn.microsoft.com/fr-fr/azure/) |

### Ordre de révision conseillé

1. Lire une première fois les trois domaines de ce document pour comprendre la carte générale.
2. Suivre les trois parcours Microsoft Learn dans l’ordre.
3. Revoir les tableaux comparatifs et les scénarios de ce document.
4. Faire l’évaluation pratique Microsoft sans aide.
5. Reprendre chaque erreur et noter pourquoi les autres options ne conviennent pas.
6. Refaire l’évaluation jusqu’à être à l’aise avec les notions, pas seulement avec les réponses mémorisées.
7. Utiliser le bac à sable pour découvrir les formats de questions.
8. Vérifier le référentiel et les modalités pratiques quelques jours avant l’examen.

---

# 10. Glossaire

| Terme | Définition courte |
|---|---|
| **Availability** | Disponibilité d’un service, c’est-à-dire sa capacité à être accessible. |
| **Availability Set** | Organisation de VMs utilisant des domaines de panne et de mise à jour. |
| **Availability Zone** | Emplacement physique distinct dans une région Azure. |
| **CapEx** | Dépense d’investissement initiale. |
| **Cloud hybride** | Combinaison d’un environnement privé/local et d’un cloud public. |
| **Cloud public** | Cloud fourni sur une infrastructure mutualisée par un fournisseur. |
| **Cloud privé** | Infrastructure cloud dédiée à une seule organisation. |
| **Cold** | Niveau Blob en ligne pour données rarement consultées. |
| **Conditional Access** | Politiques d’accès basées sur des signaux et conditions. |
| **Container** | Unité isolée contenant une application et ses dépendances. |
| **Defense in Depth** | Superposition de plusieurs couches de sécurité. |
| **Elasticity** | Adaptation rapide des ressources à la variation de la demande. |
| **Endpoint** | Point d’accès réseau à un service. |
| **ExpressRoute** | Connexion privée dédiée entre un réseau et les services Microsoft. |
| **Fault Domain** | Groupe d’infrastructure partageant des composants physiques susceptibles de tomber en panne ensemble. |
| **Hot** | Niveau Blob adapté aux accès fréquents. |
| **IaaS** | Infrastructure as a Service. |
| **IaC** | Infrastructure as Code ; infrastructure définie dans des fichiers. |
| **KQL** | Kusto Query Language, langage de requête utilisé notamment dans Log Analytics. |
| **LRS** | Locally Redundant Storage. |
| **MFA** | Multifactor Authentication. |
| **NSG** | Network Security Group, règles de filtrage réseau. |
| **OpEx** | Dépenses opérationnelles. |
| **PaaS** | Platform as a Service. |
| **Private Endpoint** | Interface réseau privée permettant d’accéder à un service via une IP privée. |
| **RBAC** | Role-Based Access Control. |
| **Region** | Zone géographique contenant un ou plusieurs centres de données Azure. |
| **Resource Group** | Conteneur logique de ressources Azure. |
| **SaaS** | Software as a Service. |
| **Scale out / in** | Ajouter ou retirer des instances. |
| **Scale up / down** | Augmenter ou diminuer la puissance d’une instance. |
| **Serverless** | Exécution de code ou services sans gérer directement les serveurs. |
| **SKU** | Référence ou niveau de capacité d’un service/produit. |
| **SSO** | Single Sign-On, authentification unique. |
| **Subscription** | Abonnement Azure servant notamment à la facturation et à l’organisation. |
| **Tenant** | Locataire Microsoft Entra, frontière d’identité. |
| **Update Domain** | Groupe d’instances pouvant être redémarrées lors d’une maintenance planifiée. |
| **VNet** | Virtual Network, réseau privé virtuel Azure. |
| **ZRS** | Zone-Redundant Storage. |

---

## Note finale

Ce guide couvre les compétences listées dans le référentiel AZ-900 en vigueur au **20 juillet 2026**. Il privilégie la compréhension et les distinctions entre services plutôt que la mémorisation de paramètres techniques susceptibles de changer. Pour les détails de disponibilité régionale, de tarification, de fonctionnalités et de modalités d’examen, consulte les pages Microsoft Learn liées ci-dessus.
