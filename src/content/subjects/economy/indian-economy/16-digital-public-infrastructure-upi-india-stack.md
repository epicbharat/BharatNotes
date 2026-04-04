---
layout: topic.njk
title: "Digital Public Infrastructure — UPI, India Stack, ONDC & CBDC"
subject: economy
gs_papers:
  - gs3
syllabus_topic: "Digital Economy"
description: "UPSC notes on Digital Public Infrastructure (DPI) — India Stack (Aadhaar, UPI, DigiLocker), UPI statistics, ONDC (Open Network for Digital Commerce), Account Aggregator framework, CBDC (e-Rupee), India's G20 DPI presidency initiative."
chapter: 37
sub_chapter: 37
date: 2026-03-29
tags:
  - economy
parent_topic_url: /subjects/economy/indian-economy/
---

## Introduction

India has built one of the world's most sophisticated **Digital Public Infrastructure (DPI)** ecosystems — a set of open, interoperable, shared digital rails that underpin financial inclusion, identity verification, and e-commerce at population scale. From Aadhaar's 1.44 billion enrolments to UPI's 21+ billion monthly transactions (January 2026), India's DPI has become a global model. The G20 New Delhi Declaration (2023) explicitly endorsed DPI as a development tool, with India leading the initiative. This is a high-relevance topic for UPSC GS Paper III (Technology, Economic Development).

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

India Stack is the collection of open APIs and digital infrastructure built by the Government of India and NPCI that enables developers and institutions to build services at scale.

| Layer | Component | Purpose |
|---|---|---|
| **Presence-less** | Aadhaar | Digital identity; biometric authentication without physical documents |
| **Cashless** | UPI, IMPS | Real-time digital payments |
| **Paperless** | DigiLocker, eSign | Digital document storage and electronic signatures |
| **Consent** | Account Aggregator (AA) | Controlled sharing of financial data with explicit user consent |

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
**Launched:** April 2016

### How UPI Works

UPI is a real-time payment system that allows Person-to-Person (P2P) and Person-to-Merchant (P2M) transactions 24x7x365 via:
- Virtual Payment Address (VPA / UPI ID: e.g., name@bank)
- Mobile number linked to bank account
- QR code scan

Multiple bank accounts can be linked to a single UPI app. Settlement happens in real-time through IMPS (Immediate Payment Service) infrastructure.

### Key UPI Statistics (Verified)

| Metric | Figure |
|---|---|
| Monthly transactions (January 2026) | 21.7 billion (all-time high at time of report) |
| Monthly transactions (December 2025) | 21.63 billion |
| Full year 2025 volume | 228.3 billion transactions |
| Full year 2025 value | ₹299.7 lakh crore |
| Year-on-year volume growth (2024→2025) | 32.5% |
| Daily average transactions (Feb 2026) | 743 million per day |

### UPI Variants

| Variant | Feature | Target Segment |
|---|---|---|
| UPI 123PAY | IVR/feature phone-based UPI without internet | Rural/non-smartphone users |
| UPI Lite | On-device wallet for small offline transactions (up to ₹500 per transaction) | Low-value, high-frequency transactions |
| UPI One World | For foreign visitors — prepaid wallets without Indian bank account | Inbound tourism, G20 delegates |
| UPI Credit Line | Access credit lines (overdraft/credit cards) via UPI | Formal credit access |

### International UPI

UPI has been extended to cross-border payments:
- Accepted in Singapore, UAE, France, UK, Nepal, Bhutan, Sri Lanka, Mauritius, and others
- **RuPay** debit/credit cards accepted in multiple countries
- **Project Nexus (BIS):** Linking India's UPI with payment systems of Singapore, Malaysia, Philippines, Thailand

---

## DigiLocker: Paperless Documents

**Launched:** 2015 by Ministry of Electronics and Information Technology (MeitY)

**Key statistics (2025):**
- **Registered users:** Over 57 crore (570 million) as of August 2025
- **Documents issued:** Over 990 crore (9.9 billion) documents
- **Active issuers:** 1,936

**What DigiLocker does:**
- Stores government-issued documents (driving licence, vehicle registration, academic certificates, Aadhaar card, PAN card, insurance) in cloud
- Documents have the same legal validity as originals under the IT Act
- Used for DigiYatra (face-recognition airport boarding) and FASTag-linked vehicle verification

**Integration with governance:**
- Court cases where DigiLocker documents accepted as evidence
- School admissions, job applications, bank KYC — paperless processes enabled

---

## Account Aggregator (AA) Framework

**Regulator:** Reserve Bank of India (RBI) — Master Direction issued 2016; operationalised from 2021

**What it does:**
AA is a consent-based financial data sharing system. A citizen can authorise their financial data (bank statements, mutual fund holdings, insurance policies, tax data) to be shared with any Financial Information User (FIU — e.g., a lender, insurer) via an RBI-licensed Account Aggregator.

**Key statistics (December 2025):**
- **Financial Information Providers (FIPs) and Users (FIUs) live:** 126 institutions
- **Financial accounts enabled for AA sharing:** Over 2.61 billion
- **Licensed Account Aggregators:** 17 companies (e.g., OneMoney, CAMSfinserv, Perfios AA, Finvu)

**Why it matters:**
- Enables **cash-flow-based lending** to MSMEs and individuals who lack collateral
- Eliminates the need to share physical bank statements — reduces fraud
- Foundation for **Open Credit Enablement Network (OCEN):** GST invoice-based, AA-linked lending for small businesses

---

## ONDC: Open Network for Digital Commerce

**Full form:** Open Network for Digital Commerce
**Nature:** Section 8 (not-for-profit) company under the Department for Promotion of Industry and Internal Trade (DPIIT)
**First order delivered:** April 29, 2022 (Bangalore)
**Beta launch:** September 2022

### What Problem Does ONDC Solve?

Traditional e-commerce (Amazon, Flipkart) operates as **closed platforms** — sellers must list on each platform separately; platforms control discovery, pricing, and logistics. ONDC creates an **open, interoperable network** where:
- Any buyer app can discover any seller on any seller app
- Like how email works — you can send from Gmail to Yahoo; ONDC makes e-commerce similarly interoperable

### ONDC Ecosystem (Early Investors)

Punjab National Bank, State Bank of India, ICICI Bank, Axis Bank, Kotak Mahindra Bank, SIDBI among early promoters.

**Significance for inclusion:**
- Small kirana stores and local artisans can sell online without listing on Amazon or Flipkart
- Reduces platform dependency and commissions
- Integrated with GSTN for tax compliance

---

## CBDC: Central Bank Digital Currency (e-Rupee)

**Issuer:** Reserve Bank of India

### Pilot Timeline

| Segment | Launch Date | Initial Partners |
|---|---|---|
| Wholesale (e₹-W) | November 1, 2022 | Government securities settlement |
| Retail (e₹-R) | December 1, 2022 | SBI, ICICI Bank, Yes Bank, IDFC First Bank |

### Design Features

- **Token-based:** Represents a legal tender token, not an account balance — closer to digital cash
- **Denominations:** Same as existing paper currency denominations
- **Transactions:** P2P and P2M via QR codes
- **Tiered anonymity:** Small transactions have greater privacy; large transactions have full KYC
- **Offline capability:** Being developed for areas with poor internet connectivity

### CBDC vs UPI vs Cash

| Dimension | Cash | UPI | CBDC (e-Rupee) |
|---|---|---|---|
| Issued by | RBI | Bank (deposits) | RBI |
| Counterparty risk | None | Bank failure risk | None |
| Anonymity | High | Low | Medium |
| Programmability | No | Limited | Yes (potentially) |
| Settlement | Immediate | Near-immediate | Immediate |

### Use Cases Being Piloted

- Programmable payments (e.g., government subsidies that can only be spent on specific goods)
- Cross-border settlements (RBI-CBUAE linkage)
- Financial inclusion (offline CBDC for rural areas)

---

## Open Credit Enablement Network (OCEN)

**Purpose:** Democratise credit access for MSMEs
**Mechanism:**
1. Borrower shares GST invoice/Account Aggregator data with a lender
2. Lender assesses creditworthiness based on cash flows (not collateral)
3. Loan disbursed digitally; repayment monitored through AA

**Significance:** 63 million MSMEs in India — most lack collateral but have documented cash flows via GSTN. OCEN bridges this gap.

---

## India's G20 DPI Framework (2023)

During India's G20 Presidency (2023), the **G20 Framework for Systems of DPI** was adopted:
- Endorsed by all G20 nations in New Delhi Declaration (September 2023)
- Estimates: DPI could create **$1.25 trillion** in economic value across Low and Middle Income Countries (LMICs) by 2030
- India shared its DPI (Aadhaar, UPI, DigiLocker) as open-source models — "India Stack" offered globally
- **Modular Open Source Identity Platform (MOSIP):** India's open-source identity platform deployed in 12+ countries

**Countries adopting India-style DPI elements:**
- UPI-like systems: Singapore (PayNow), Brazil (PIX)
- Digital ID: Philippines, Ethiopia (MOSIP-based)
- G2P payment rails: Togo, Morocco

---

## Data Privacy and Regulatory Framework

### Digital Personal Data Protection Act (DPDP Act), 2023

Key provisions relevant to DPI:
- **Consent requirement:** Data fiduciaries must obtain explicit consent before processing personal data
- **Data minimisation:** Collect only what is necessary
- **Right to erasure:** Citizens can request deletion of their data
- **Data Protection Board:** Adjudicatory body for complaints

**Tension with Aadhaar:** Aadhaar's centralised biometric database raises concerns under DPDP Act — ongoing regulatory dialogue.

### FATF and Virtual Digital Assets

- India is a FATF member; amended PMLA (Prevention of Money Laundering Act) in 2023 to bring Virtual Digital Assets (VDAs — crypto assets) and exchanges under anti-money laundering regulations
- VDA exchanges must register with FIU-IND and follow KYC/AML norms

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

---

## Previous Year Questions (PYQs)

### Prelims

1. Consider the following statements about UPI (Unified Payments Interface):
   (1) It is operated by the National Payments Corporation of India.
   (2) It was launched in 2016.
   (3) It settles transactions in real time using RTGS infrastructure.
   Which of the statements given above are correct?
   **(a) 1 and 2 only** (b) 2 and 3 only (c) 1 and 3 only (d) 1, 2 and 3

2. "Account Aggregator" framework in India is regulated by: **(a) Reserve Bank of India** (b) SEBI (c) IRDAI (d) NPCI

3. Which of the following is the regulatory framework under which CBDC (e-Rupee) is issued in India?
   (a) FEMA, 1999
   **(b) Reserve Bank of India Act, 1934 (as amended)**
   (c) Payment and Settlement Systems Act, 2007
   (d) Companies Act, 2013

4. ONDC (Open Network for Digital Commerce) was incorporated under which ministry's initiative?
   **(a) Department for Promotion of Industry and Internal Trade (DPIIT)**
   (b) Ministry of Electronics and Information Technology
   (c) Ministry of Finance
   (d) Ministry of Commerce and Industry

### Mains

1. **[GS3 2023]** India's Digital Public Infrastructure has transformed financial inclusion. Discuss how Aadhaar, UPI, and Account Aggregator together constitute a "consent-based data economy." What are the key challenges?

2. **[GS3 2022]** Evaluate the significance of the Unified Payments Interface (UPI) in transforming India's digital payment ecosystem. How has it contributed to financial inclusion?

3. **[GS3 2021]** What is Digital Public Infrastructure? How does India's experience with Aadhaar and UPI offer lessons for developing countries?

---

## Exam Strategy

**High-frequency UPSC themes from this chapter:**

- **India Stack layers** — Prelims MCQs test which component belongs to which layer (Presence/Cashless/Paperless/Consent)
- **UPI statistics** — UPSC Mains essays and GS3 answers benefit from current data (21+ billion monthly transactions, 2025)
- **CBDC launch dates** — Wholesale (November 2022) vs Retail (December 1, 2022) distinction
- **Account Aggregator** — RBI-regulated; 2.61 billion accounts enabled; data sharing without revealing underlying data to AA itself
- **ONDC** — distinguish from UPI; it is an e-commerce network, not a payments network
- **G20 DPI Framework** — India's global contribution; $1.25 trillion opportunity estimate

**For Mains (GS3 answer writing):**
- Structure: DPI concept → India Stack → specific component → impact → challenges → way forward
- Link DPI to **financial inclusion** (Jan Dhan-Aadhaar-Mobile / JAM Trinity), **MSME credit** (OCEN), and **governance** (DBT — Direct Benefit Transfer via Aadhaar-seeded accounts)
- Use the phrase "consent-based data economy" — it captures AA's distinctive architecture

**JAM Trinity linkage (must know for Mains):**
- **J**an Dhan (bank account) + **A**adhaar (identity) + **M**obile (phone) = JAM Trinity
- DPI is the technological superstructure built on the JAM foundation
- ₹7+ lakh crore in DBT transfers between 2014 and 2024 — directly linked to JAM

**Common mistakes to avoid:**
- UPI is not the same as BHIM — BHIM is one app that uses UPI; UPI is the underlying protocol
- NPCI ≠ RBI — NPCI operates UPI; RBI issues CBDC
- ONDC is not a government app — it is a network protocol standard (like HTTP for the internet)
