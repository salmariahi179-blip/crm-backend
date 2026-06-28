# 🧠 Backend Architecture Decisions - CRM Project

## 1. Contexte du projet

Ce backend a été construit progressivement pour un CRM simple (test technique), avec évolution vers une architecture scalable type SaaS.

Stack utilisée :
- NestJS (API backend)
- Prisma ORM
- PostgreSQL
- JWT Authentication

---

## 2. Framework : NestJS

Choix : NestJS

### Raisons :
- Structure imposée (modules, services, controllers)
- Adapté aux projets backend complexes
- Facile à scaler (ajout modules CRM)

### Pourquoi pas Express :
- Pas de structure native
- Trop libre → risque d’architecture incohérente

---

## 3. ORM : Prisma

Choix : Prisma

### Raisons :
- Type-safe avec TypeScript
- Migrations simples (`prisma migrate`)
- Productivité élevée pour CRUD CRM

### Alternative :
- TypeORM rejeté (plus verbeux et moins moderne)

---

## 4. Base de données : PostgreSQL

### Raisons :
- robuste et fiable
- très adapté aux relations CRM (users, opportunities)
- compatible Prisma

---

## 5. Architecture backend

Structure modulaire :

src/
  auth/
  opportunities/
  users/
  common/

### Raisons :
- séparation logique des domaines métier
- facilite extension future (tasks, deals, invoices)

---

## 6. API Design

Style : REST API

Endpoints principaux :

- GET /opportunities
- POST /opportunities
- PATCH /opportunities/:id
- DELETE /opportunities/:id

### Raisons :
- simplicité pour frontend Next.js
- standard industriel
- suffisant pour test technique

---

## 7. Authentification

Choix : JWT

### Flow :
1. Login utilisateur
2. Génération token JWT
3. Envoi dans header Authorization
4. Vérification via Guard NestJS

### Stockage côté frontend :
- localStorage (version test technique)

---

## 8. Validation des données

Choix :
- DTO + class-validator

### Raisons :
- sécurité API
- validation côté backend obligatoire
- séparation DTO / entity

---

## 9. Gestion des erreurs

Approche :
- Exception Filters NestJS

### Objectif :
- standardiser les erreurs API
- éviter réponses incohérentes

---

## 10. Sécurité

Mesures actuelles :
- hash password avec bcrypt
- JWT guard sur routes protégées
- validation des inputs DTO

Améliorations futures :
- refresh token
- rate limiting
- helmet + cors strict

---

## 11. Décisions simplifiées (volontaires)

Certaines décisions ont été simplifiées pour un test technique :

- Pas de microservices (monolith modulaire)
- Pas de RabbitMQ / queue system
- Pas de multi-tenant
- Pas de GraphQL

Objectif : rapidité + clarté + lisibilité

---

## 12. Hypothèses

- application mono-utilisateur logique (CRM simple)
- backend REST classique
- auth basique JWT
- pas de complexité enterprise complète

---

## 13. Évolutivité (vision future)

Le backend peut évoluer vers :

- microservices (auth / CRM / analytics)
- websocket temps réel (pipeline deals)
- queue system (emails, tasks)
- multi-tenant SaaS
- audit logs enterprise