---
layout: topic.njk
title: "Digital Public Infrastructure, Fintech & Digital Economy — UPI, India Stack, ONDC, CBDC & e-Rupee"
subject: economy
gs_papers:
  - gs3
syllabus_topic: "Digital Economy"
description: "UPSC notes on Digital Public Infrastructure (DPI) — India Stack (Aadhaar, UPI, DigiLocker), UPI statistics, ONDC (Open Network for Digital Commerce), Account Aggregator framework, CBDC (e-Rupee), JAM trinity, cryptocurrency regulation, fintech ecosystem, RBI digital lending guidelines, DPDP Act 2023."
chapter: 37
sub_chapter: 16
date: 2026-03-29
tags:
  - economy
parent_topic_url: /subjects/economy/indian-economy/
---

## Introduction

India has built one of the world's most sophisticated **Digital Public Infrastructure (DPI)** ecosystems — a set of open, interoperable, shared digital rails that underpin financial inclusion, identity verification, and e-commerce at population scale. From Aadhaar's 1.44 billion enrolments to UPI's 21+ billion monthly transactions (January 2026), India's DPI has become a global model. The International Monetary Fund (IMF) recognised UPI as the world's largest retail fast-payment system by transaction volume in June 2025, accounting for approximately 49% of global real-time payment transactions. The G20 New Delhi Declaration (2023) explicitly endorsed DPI as a development tool, with India leading the initiative. This is a high-relevance topic for UPSC GS Paper III (Technology, Economic Development).

---

## What is Digital Public Infrastructure (DPI)?

DPI refers to foundational digital systems built on open standards that:
- Are **interoperable** — multiple private/public actors can plug in
- Are **inclusive** — accessible to all citizens regardless of economic status
- Operate as **shared rails** — like roads, but for data and transactions
- Enable **innovation at the edges** — private actors build services on top

**Three-layer DPI model (UN/World Bank framework):**
1. **Identity** — digital ID systems (e.g., Aadhaar)
2. **Payments** — real-time retail payment systems (e.g., UPI)
3. **Data exchange** — consent-based data sharing (e.g., Account Aggregator)

---

## India Stack: The Four Layers

India Stack is the collection of open APIs and digital infrastructure built by the Government of India and NPCI that enables developers and institutions to build services at scale. The term was coined by iSPIRT (Indian Software Product Industry Round Table).

| Layer | Component | Purpose | Scale |
|---|---|---|---|
| **Identity (Presence-less)** | Aadhaar (UIDAI) | Digital identity; biometric authentication without physical documents | 1.4 billion+ enrolments |
| **Cashless (Payments)** | UPI, BBPS, AePS | Real-time interoperable digital payments | 228+ billion transactions in CY2025 |
| **Paperless (Documents)** | DigiLocker, eSign | Digital document storage and electronic signatures | 67.63 crore users (March 2026); 950+ crore documents |
| **Consent (Data)** | Account Aggregator (AA) | Controlled sharing of financial data with explicit user consent | 2.61 billion accounts enabled |
| **Health** | ABDM (Ayushman Bharat Digital Mission) | Digital health records, health IDs | Rolled out from 2021 |

### Why India Stack Matters for UPSC

India Stack is a frequent topic in both Prelims (factual questions on Aadhaar, UPI, DigiLocker) and Mains (essays on digital governance, financial inclusion, DPI as a global model). As of February 2026, India has signed agreements with 23 countries to share its DPI model.

---

## Aadhaar: The Identity Foundation

**Administered by:** Unique Identification Authority of India (UIDAI), established under the Aadhaar Act 2016

**Key statistics (2025):**
- **Total enrolments:** Over 1.44 billion (approximately 99% of India's adult population)
- **Authentication transactions:** 221 crore (2.21 billion) in August 2025 alone — a 10% increase over August 2024
- **Registered enrolment stations:** 2,39,413

**How Aadhaar works:**
- Stores biometric data (fingerprints, iris scans) and demographic data (name, address, date of birth)
- Issues a 12-digit unique number
- **Authentication API:** Any authorised entity can verify whether a person is who they claim to be
- **e-KYC:** Digital Know-Your-Customer using Aadhaar authentication — eliminates paper-based KYC

**Policy debates:**
- **Privacy:** Supreme Court in *Justice K.S. Puttaswamy vs Union of India* (2018) upheld Aadhaar's constitutional validity while restricting its use by private entities
- **Exclusion errors:** Biometric failures (elderly, manual labourers) have caused denial of welfare benefits
- **Data security:** Centralised biometric database — potential for mass surveillance

---

## UPI: Unified Payments Interface

**Operator:** National Payments Corporation of India (NPCI)
**Launched:** 11 April 2016

### How UPI Works

UPI is a real-time payment system that allows Person-to-Person (P2P) and Person-to-Merchant (P2M) transactions 24x7x365 via:
- Virtual Payment Address (VPA / UPI ID: e.g., name@bank)
- Mobile number linked to bank account
- QR code scan

Multiple bank accounts can be linked to a single UPI app. Settlement happens in real-time through IMPS (Immediate Payment Service) infrastructure. As of 2024, UPI had approximately 491 million users and 65 million merchants.

### Key UPI Statistics

| Metric | Figure |
|---|---|
| Monthly transactions (January 2026) | 21.7 billion (all-time high) |
| Monthly transactions (December 2025) | 21.63 billion |
| Full year 2025 volume | 228.3 billion transactions |
| Full year 2025 value | ₹299.7 lakh crore |
| Year-on-year volume growth (2024→2025) | 32.5% |
| Daily average transactions (Feb 2026) | 743 million per day |

### UPI Transaction Data (Year-wise)

| Year | Volume (Billion Transactions) | Value (Lakh Crore Rs) |
|---|---|---|
| 2020 | 22.3 | 41.0 |
| 2021 | 38.7 | 71.5 |
| 2022 | 74.0 | 125.9 |
| 2023 | 117.6 | 182.8 |
| 2024 | 172.2 | 246.8 |
| 2025 | 228.3 | 299.7 |

### UPI Market Share

PhonePe and Google Pay together dominate approximately 85% of UPI transactions, with Paytm, CRED, and other apps sharing the remaining market.

### UPI Variants

| Variant | Feature | Target Segment |
|---|---|---|
| UPI 123PAY | IVR/feature phone-based UPI without internet | Rural/non-smartphone users |
| UPI Lite | On-device wallet for small offline transactions (up to ₹500 per transaction) | Low-value, high-frequency transactions |
| UPI One World | For foreign visitors — prepaid wallets without Indian bank account | Inbound tourism, G20 delegates |
| UPI Credit Line | Access credit lines (overdraft/credit cards) via UPI | Formal credit access |

### International UPI

UPI has been extended to cross-border payments:

| Country | Integration Partner | Status |
|---|---|---|
| Singapore | PayNow | Live; 8,000+ merchants |
| UAE | NIOPAY | Live |
| France | — | First European country; live at Eiffel Tower, Galeries Lafayette (July 2024) |
| Sri Lanka | LankaPay, Dialog | Live at tourist zones |
| Bhutan | Royal Monetary Authority | Live |
| Nepal | Nepal Rastra Bank | Live |
| Mauritius | MauCAS | Live |
| Qatar | — | Live |

Cross-border UPI transaction volumes grew over 20 times — from 37,060 in FY24 to over 7,55,000 in FY25. **Project Nexus (BIS):** Links India's UPI with payment systems of Singapore, Malaysia, Philippines, Thailand.

---

## Other Digital Payment Systems

### RuPay

RuPay is India's indigenous card payment network launched by NPCI in 2012. It operates as a domestic alternative to Visa and Mastercard, with significantly lower merchant discount rates. RuPay cards are issued under the Pradhan Mantri Jan Dhan Yojana (PMJDY), making them the backbone of financial inclusion through debit cards.

### BHIM (Bharat Interface for Money)

Launched in December 2016, BHIM is a UPI-based payment app developed by NPCI. It was designed to promote digital payments among first-time users, especially in rural and semi-urban areas. Note: BHIM is one app that uses UPI; UPI is the underlying protocol.

### AePS (Aadhaar-enabled Payment System)

AePS allows Aadhaar-linked bank account holders to perform basic banking transactions — cash withdrawal, balance inquiry, fund transfer — through a micro-ATM using biometric authentication. It is especially significant for last-mile financial inclusion in areas without ATMs or bank branches.

### NETC FASTag

The National Electronic Toll Collection (NETC) system enables automatic toll payments through FASTags. FASTag was made mandatory for all vehicles from 15 February 2021, significantly reducing waiting times at toll plazas and improving highway logistics.

### BBPS (Bharat Bill Payment System)

An interoperable bill payment system operated by NPCI, allowing consumers to pay utility bills, insurance premiums, loan EMIs, and other recurring payments through a single platform.

---

## DigiLocker: Paperless Documents

**Launched:** 2015 by Ministry of Electronics and Information Technology (MeitY)

**Key statistics (2025–26):**
- **Registered users:** Over 67.63 crore (March 2026)
- **Documents issued:** Over 950 crore documents
- **Active issuers:** 1,936+

**What DigiLocker does:**
- Stores government-issued documents (driving licence, vehicle registration, academic certificates, Aadhaar card, PAN card, insurance) in cloud
- Documents have the same legal validity as originals under the IT Act
- Used for DigiYatra (face-recognition airport boarding) and FASTag-linked vehicle verification

**Integration with governance:**
- Court cases where DigiLocker documents accepted as evidence
- School admissions, job applications, bank KYC — paperless processes enabled

---

## Account Aggregator (AA) Framework

**Regulator:** Reserve Bank of India (RBI) — Master Direction issued 2016; operationalised from September 2021
**Self-regulatory body:** Sahamati (industry collective)

**What it does:**
Account Aggregators (AAs) are a new class of NBFCs licensed by the RBI. They facilitate consent-based sharing of financial data between Financial Information Providers (FIPs — banks, insurance companies, mutual funds) and Financial Information Users (FIUs — lenders, wealth managers).

**Key features:**
- **Consent-based:** No data moves without explicit, informed, revocable consent of the customer
- **Data blind:** AAs cannot read, store, or use the data they transfer — they are merely a pipeline
- **Interoperable:** Any FIP can share data with any FIU through any AA

**Key statistics (early 2026):**
- **Financial Information Providers (FIPs) and Users (FIUs) live:** 126 institutions
- **Financial accounts enabled for AA sharing:** Over 2.61 billion
- **Licensed Account Aggregators:** 17 companies (e.g., OneMoney, CAMSfinserv, Perfios AA, Finvu)
- **Individuals consented:** Approximately 70 million, with ~10 million new consents monthly

**Why it matters:**
- Enables **cash-flow-based lending** to MSMEs and individuals who lack collateral
- Eliminates the need to share physical bank statements — reduces fraud
- Foundation for **Open Credit Enablement Network (OCEN):** GST invoice-based, AA-linked lending for small businesses

---

## ONDC: Open Network for Digital Commerce

**Full form:** Open Network for Digital Commerce
**Nature:** Section 8 (not-for-profit) company under the Department for Promotion of Industry and Internal Trade (DPIIT)
**Incorporated:** December 2021
**Protocol:** Based on Beckn Protocol — open-sourced, platform-agnostic
**Pilot launch:** 29 April 2022 (five cities: Delhi NCR, Bhopal, Bengaluru, Shillong, Coimbatore)
**Public beta:** 30 September 2022 (Bangalore Urban)
**Founding members:** Quality Council of India, Protean eGov Technologies Ltd

### What Problem Does ONDC Solve?

Traditional e-commerce (Amazon, Flipkart) operates as **closed platforms** — sellers must list on each platform separately; platforms control discovery, pricing, and logistics. ONDC creates an **open, interoperable network** where any buyer app can discover any seller on any seller app — like how email works across Gmail and Yahoo.

### ONDC vs Traditional Platforms

| Feature | Traditional Platforms | ONDC |
|---|---|---|
| **Architecture** | Closed, proprietary ecosystem | Open, interoperable network |
| **Seller access** | Must register on each platform separately | Register once, discoverable across all ONDC apps |
| **Buyer apps** | Platform-specific (Amazon app, Flipkart app) | Multiple buyer-side apps (Paytm, Magicpin, etc.) |
| **Commission** | High platform fees (15–40%) | Lower network charges |
| **Data ownership** | Platform owns customer data | Seller retains customer data |

**Significance for inclusion:** Small kirana stores and local artisans can sell online without listing on Amazon or Flipkart. Reduces platform dependency and commissions. Integrated with GSTN for tax compliance. Domains covered: retail (grocery, food), mobility (ride-hailing), logistics, hospitality, healthcare, and financial services.

---

## CBDC: Central Bank Digital Currency (e-Rupee)

**Issuer:** Reserve Bank of India

A Central Bank Digital Currency (CBDC) is a digital form of fiat money issued by the central bank. Unlike cryptocurrency, a CBDC is legal tender, backed by the sovereign, and has the same value as physical currency.

### Pilot Timeline

| Segment | Name | Launch Date | Use Case |
|---|---|---|---|
| Wholesale (e₹-W) | Digital Rupee — Wholesale | 1 November 2022 | Settlement of secondary market transactions in government securities |
| Retail (e₹-R) | Digital Rupee — Retail | 1 December 2022 | Person-to-person and person-to-merchant payments |

### Retail CBDC (e₹-R) Details

- **Technology:** Based on blockchain (distributed ledger technology)
- **Form:** Digital tokens in the same denominations as physical currency
- **Pilot banks (Phase 1):** SBI, ICICI Bank, Yes Bank, IDFC First Bank
- **Pilot banks (Phase 2):** Bank of Baroda, Union Bank of India, HDFC Bank, Kotak Mahindra Bank
- **Initial cities:** Mumbai, New Delhi, Bengaluru, Bhubaneswar, Chandigarh
- **Milestone:** RBI achieved 1 million daily transactions on retail CBDC on 27 December 2023

### CBDC vs Cryptocurrency vs UPI

| Parameter | CBDC (e₹) | Cryptocurrency | UPI |
|---|---|---|---|
| **Issuer** | RBI (Central Bank) | Decentralized (no issuer) | NPCI (facilitator); banks settle |
| **Legal tender** | Yes | No (not legal tender in India) | Transfers existing legal tender |
| **Backing** | Sovereign guarantee | Market-determined value | Bank deposits |
| **Volatility** | None (1 e₹ = 1 Rs) | High | None |
| **Technology** | Blockchain-based | Blockchain-based | Centralised payment rails |
| **Anonymity** | Limited (managed by RBI) | Pseudo-anonymous | KYC-linked |
| **Programmability** | Yes (potentially) | Limited | Limited |

### CBDC Use Cases Being Piloted

- Programmable payments (e.g., government subsidies that can only be spent on specific goods)
- Cross-border settlements (RBI-CBUAE linkage)
- Financial inclusion (offline CBDC for rural areas)

---

## Open Credit Enablement Network (OCEN)

**Purpose:** Democratise credit access for MSMEs (63 million MSMEs in India — most lack collateral but have documented cash flows via GSTN)

**Mechanism:**
1. Borrower shares GST invoice/Account Aggregator data with a lender
2. Lender assesses creditworthiness based on cash flows (not collateral)
3. Loan disbursed digitally; repayment monitored through AA

---

## JAM Trinity — Jan Dhan, Aadhaar, Mobile

The JAM trinity is the convergence of three pillars that underpin India's financial inclusion and direct benefit transfer architecture:

| Pillar | Details | Scale (2024) |
|---|---|---|
| **Jan Dhan** | Pradhan Mantri Jan Dhan Yojana (PMJDY) — zero-balance bank accounts | 54+ crore accounts; Rs 2.39 lakh crore total deposits; 55.6% women account holders; 66.6% in rural/semi-urban areas |
| **Aadhaar** | 12-digit unique biometric identity | 141 crore+ enrolments |
| **Mobile** | Mobile phone connectivity | 119 crore+ subscribers (66.1 crore urban, 52.7 crore rural) |

### Impact on Direct Benefit Transfers (DBT)

The JAM trinity powers the Direct Benefit Transfer (DBT) mechanism:
- Integrated **1,206 welfare schemes** as of FY 2024-25
- Transferred Rs **6.7 lakh crore** in FY 2024-25 alone
- Eliminated ghost beneficiaries and middlemen, with estimated cumulative savings of over Rs 3.48 lakh crore (government claim)
- ₹7+ lakh crore in DBT transfers between 2014 and 2024

**How DBT Works:**
1. Beneficiary's Aadhaar is seeded with their Jan Dhan bank account
2. Government transfers the benefit amount directly into the linked bank account
3. Beneficiary receives SMS notification on mobile
4. Cash can be withdrawn via AePS (micro-ATM) using biometric authentication

**DPI is the technological superstructure built on the JAM foundation.**

---

## India's G20 DPI Framework (2023)

During India's G20 Presidency (2023), the **G20 Framework for Systems of DPI** was adopted:
- Endorsed by all G20 nations in New Delhi Declaration (September 2023)
- Estimates: DPI could create **$1.25 trillion** in economic value across Low and Middle Income Countries (LMICs) by 2030
- India shared its DPI (Aadhaar, UPI, DigiLocker) as open-source models — "India Stack" offered globally
- **Modular Open Source Identity Platform (MOSIP):** India's open-source identity platform deployed in 12+ countries
- India has signed agreements with 23 countries to share its DPI model (as of February 2026)

**Countries adopting India-style DPI elements:**
- UPI-like systems: Singapore (PayNow), Brazil (PIX), Ghana (GhIPSS), Nigeria (eNaira)
- Digital ID: Philippines, Ethiopia (MOSIP-based), Bangladesh (Aadhaar-inspired)
- G2P payment rails: Togo, Morocco

---

## Cryptocurrency Regulation in India

### Timeline of Key Developments

| Year | Event |
|---|---|
| 2013 | RBI issues first caution against virtual currencies |
| 2018 | RBI circular prohibits regulated entities from dealing with crypto exchanges |
| 2020 | **Internet and Mobile Association of India v. RBI** — Supreme Court quashes the RBI ban, holding the absolute prohibition was a "disproportionate measure" |
| 2022 | **Union Budget 2022-23** introduces: 30% flat tax on Virtual Digital Assets (VDAs) under Section 115BBH; 1% TDS on transfers under Section 194S; no set-off of losses against other income |
| 2023 | Crypto exchanges and service providers brought under PMLA; must register with FIU-IND and comply with AML/KYC norms |
| 2026 | No comprehensive crypto regulation bill enacted; crypto remains "taxed but unregulated" |

### India's Position at G20

During India's G20 presidency (2023), India pushed for a coordinated global framework for crypto regulation. The G20 New Delhi Leaders' Declaration endorsed the IMF-FSB Synthesis Paper, recommending a comprehensive regulatory approach rather than an outright ban.

---

## RBI Digital Lending Guidelines (2022)

On 2 September 2022, the RBI issued comprehensive guidelines to regulate the digital lending ecosystem, based on the recommendations of a Working Group on Digital Lending (November 2021).

| Area | Requirement |
|---|---|
| **Disbursement** | All loan amounts must be disbursed directly into the borrower's bank account — no pass-through or pool accounts of Lending Service Providers (LSPs) |
| **Key Fact Statement (KFS)** | Borrowers must receive a standardized KFS before signing, containing APR, all fees, recovery mechanism, and cooling-off period |
| **Data privacy** | LSPs cannot access mobile phone data beyond what is essential; only three categories of data permitted — name, contact details, and KYC information |
| **Grievance redressal** | Regulated Entities (REs) and LSPs must appoint a nodal grievance redressal officer |
| **Credit reporting** | All digital loans must be reported to credit bureaus |
| **First Loss Default Guarantee (FLDG)** | Capped at 5% of the loan portfolio |
| **Cooling-off period** | Borrowers have a look-up period to exit the loan without penalty |

These guidelines brought the unregulated fintech lending space under RBI oversight, addressing concerns about predatory lending, usurious interest rates, coercive recovery practices, and misuse of personal data.

---

## Data Privacy and Regulatory Framework

### Digital Personal Data Protection Act (DPDP Act), 2023

The DPDP Act received Presidential assent on 11 August 2023. It establishes a comprehensive framework for digital personal data protection in India.

| Feature | Provision |
|---|---|
| **Applicability** | All digital personal data processed within India; also applies to processing outside India if related to offering goods/services to individuals in India |
| **Consent** | Personal data may be processed only for a lawful purpose upon consent; consent may not be required for "legitimate uses" (voluntary sharing, State services) |
| **Data Fiduciary obligations** | Maintain accuracy, keep data secure, delete data once purpose is met |
| **Significant Data Fiduciaries** | Must appoint a Data Protection Officer and an independent data auditor |
| **Rights of Data Principals** | Right to information, correction, erasure, and grievance redressal |
| **Children's data** | Verifiable parental/guardian consent required; behavioral monitoring and targeted advertising directed at children are banned |
| **Penalties** | Up to Rs 250 crore for non-compliance; up to Rs 200 crore for failure to notify breaches or breach of child-related obligations |
| **Data Protection Board** | Established under Section 18 to adjudicate complaints and disputes |

**Tension with Aadhaar:** Aadhaar's centralised biometric database raises concerns under DPDP Act — ongoing regulatory dialogue.

### FATF and Virtual Digital Assets

India is a FATF member; amended PMLA (Prevention of Money Laundering Act) in 2023 to bring Virtual Digital Assets (VDAs — crypto assets) and exchanges under anti-money laundering regulations. VDA exchanges must register with FIU-IND and follow KYC/AML norms.

---

## Fintech Ecosystem Overview

India's fintech ecosystem spans multiple verticals:

| Vertical | Key Players/Platforms | Regulatory Framework |
|---|---|---|
| **Payments** | PhonePe, Google Pay, Paytm, CRED | RBI; NPCI |
| **Digital lending** | KreditBee, MoneyTap, Navi | RBI Digital Lending Guidelines 2022 |
| **Insurance (Insurtech)** | Digit, Acko, PolicyBazaar | IRDAI |
| **Wealth management** | Zerodha, Groww, Kuvera | SEBI |
| **Neo-banking** | Fi, Jupiter, Niyo | RBI (through partner banks) |
| **Embedded finance** | BaaS (Banking-as-a-Service) providers | RBI |

---

## Challenges to India's DPI

| Challenge | Detail |
|---|---|
| Digital divide | 700+ million internet users but ~900 million mobile connections — rural-urban gap; gender gap (women's internet access 40% lower than men) |
| Data privacy | DPDP Act 2023 — rules still being framed; Aadhaar biometric data centralisation risks |
| Cybersecurity | UPI fraud, phishing, SIM-swap attacks growing — RBI reported 6.94 lakh cyber fraud cases in FY24 |
| Interoperability gaps | ONDC still early-stage; UPI merchant adoption uneven in rural areas |
| Algorithmic exclusion | AA credit scoring may perpetuate existing inequalities |
| CBDC adoption | Low retail uptake of e-Rupee — behavioural barriers, limited merchant acceptance |
| Predatory lending | Fintech lending apps — addressed partly by RBI Digital Lending Guidelines 2022 |

---

## Exam Strategy

**High-frequency UPSC themes from this chapter:**

- **India Stack layers** — Prelims MCQs test which component belongs to which layer (Identity/Payments/Data/Health)
- **UPI statistics** — 21+ billion monthly transactions, 228.3 billion for full year 2025
- **CBDC launch dates** — Wholesale (1 November 2022) vs Retail (1 December 2022) distinction; 1 million daily transaction milestone (27 December 2023)
- **Account Aggregator** — RBI-regulated NBFC; 2.61 billion accounts enabled; data blind (AA cannot read the data)
- **ONDC** — distinguish from UPI; it is an e-commerce network, not a payments network; based on Beckn Protocol
- **G20 DPI Framework** — India's global contribution; $1.25 trillion opportunity estimate; 23 countries signed agreements
- **JAM Trinity** — Jan Dhan + Aadhaar + Mobile; 1,206 schemes; Rs 6.7 lakh crore DBT in FY25
- **DPDP Act 2023** — penalties up to Rs 250 crore; Data Protection Board; children's data protections

**For Mains (GS3 answer writing):**
- Structure: DPI concept → India Stack → specific component → impact → challenges → way forward
- Link DPI to **financial inclusion** (JAM Trinity), **MSME credit** (OCEN), and **governance** (DBT via Aadhaar-seeded accounts)
- Use the phrase "consent-based data economy" — it captures AA's distinctive architecture
- Common Mains questions:
  - "India's Digital Public Infrastructure has become a model for the Global South." Discuss with reference to India Stack and UPI.
  - Critically examine the regulatory challenges posed by cryptocurrencies in India.
  - How has the JAM trinity transformed the delivery of government welfare schemes?
  - Evaluate the impact of the DPDP Act, 2023 on the fintech ecosystem in India.

**Common mistakes to avoid:**
- UPI is not the same as BHIM — BHIM is one app that uses UPI; UPI is the underlying protocol
- NPCI ≠ RBI — NPCI operates UPI; RBI issues CBDC
- ONDC is not a government app — it is a network protocol standard (like HTTP for the internet)
- CBDC is not cryptocurrency — CBDC is sovereign-issued legal tender; crypto is decentralised and not legal tender in India
