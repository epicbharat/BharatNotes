---
layout: topic.njk
title: "Cyber Security — Threats, Framework & Data Protection"
subject: security
gs_papers:
  - gs3
syllabus_topic: "Internal Security"
description: "UPSC GS3 notes on cyber security — CERT-In, NCIIPC, IT Act 2000 amendments, Digital Personal Data Protection Act 2023, cyber warfare, critical infrastructure protection, and India's cyber security architecture."
date: 2026-03-26
foundation: true
prelims: true
mains: true
tags:
  - security
  - topic
---

## Overview

Cyber security refers to the protection of computer systems, networks, programmes, and data from unauthorised access, attack, damage, or theft. For India, it is a matter of **national security, economic stability, and individual privacy**.

India's digital ecosystem has expanded at an unprecedented pace:

- **Aadhaar:** Over 1.4 billion enrolments — the world's largest biometric identity system
- **UPI:** Processing over 14 billion transactions per month (2025), making India's digital payment infrastructure a critical national asset
- **Digital India:** Government services, defence networks, banking, power grids, and telecom increasingly depend on digital infrastructure
- **Data economy:** India is the world's second-largest internet user base (~900 million users)

A single successful cyber attack on any of these systems can disrupt governance, cripple the economy, compromise national defence, and erode citizen trust. This makes cyber security a **core internal security challenge** tested across Prelims, Mains, and Interviews.

---

## Cyber Threats — Types & Classification

| Threat Type | Description | Real-World Example |
|-------------|-------------|--------------------|
| **Malware** | Malicious software (viruses, worms, trojans) designed to damage or gain unauthorised access | Stuxnet (2010) — targeted Iran's nuclear centrifuges |
| **Ransomware** | Encrypts victim's data; demands ransom for decryption key | **WannaCry (2017)** — affected 40,000+ computers in India; Andhra Pradesh police, Gujarat SWAN, banking ATMs impacted. **AIIMS Delhi (Nov 2022)** — servers down for 6 days, ~40 million patient records compromised, Rs 200 crore ransom demanded in cryptocurrency |
| **Phishing** | Fraudulent emails/messages to steal credentials or install malware | Targeted phishing against Indian defence personnel via fake government portals |
| **DDoS (Distributed Denial of Service)** | Overwhelms servers with traffic to make services unavailable | Attacks on Indian government websites during geopolitical tensions |
| **Advanced Persistent Threats (APTs)** | Long-term, targeted intrusions by sophisticated actors (often state-sponsored) | APT36 / Transparent Tribe (Pakistan-linked) targeting Indian defence and government entities |
| **State-Sponsored Attacks** | Cyber operations backed by nation-states for espionage, sabotage, or disruption | China-linked groups targeting Indian power grid infrastructure (2020–2021) |
| **Social Engineering** | Manipulating individuals into divulging confidential information | Honey-trapping of defence personnel via social media |
| **Supply Chain Attacks** | Compromising software/hardware vendors to infiltrate target systems | SolarWinds attack (2020) — global impact including Indian entities |

> **Exam Tip:** For Mains, always classify cyber threats into **state-sponsored** (geopolitical motivation) and **non-state** (criminal/hacktivist motivation). This analytical framework strengthens your answer structure.

---

## India's Cyber Security Architecture

| Institution | Parent Body | Est. | Role |
|-------------|-------------|------|------|
| **CERT-In** (Indian Computer Emergency Response Team) | MeitY | 2004 | Nodal agency for cyber incident response; issues alerts, advisories; mandates incident reporting under Section 70B of IT Act |
| **NCIIPC** (National Critical Information Infrastructure Protection Centre) | NTRO (under PMO) | 2014 (gazette notification: 16 Jan 2014) | Designated National Nodal Agency for Critical Information Infrastructure (CII) protection under Section 70A of IT Act |
| **National Cyber Security Coordinator (NCSC)** | National Security Council Secretariat (PMO) | 2014 | Coordinates among all cyber security agencies — CERT-In, NCIIPC, Defence, MHA, MEA; ensures policy coherence |
| **Cyber and Information Security Division (CIS)** | Ministry of Home Affairs (MHA) | — | Handles cyber crime, cyber security policy from law enforcement perspective; coordinates with states |
| **Defence Cyber Agency (DCyA)** | Integrated Defence Staff (reports to CDS) | Approved 2018; operational 2019 | Tri-service agency (~1,000 personnel) for military cyber operations — both defensive and offensive capabilities |
| **Indian Cyber Crime Coordination Centre (I4C)** | MHA | 2020 | National-level coordination for cyber crime; operates National Cyber Crime Reporting Portal (cybercrime.gov.in) |

> **Remember:** CERT-In (under **MeitY**) handles cyber **incidents** and response. NCIIPC (under **NTRO/PMO**) handles **critical infrastructure** protection. These are the two most frequently confused institutions in Prelims.

---

## CERT-In Directions 2022

On **28 April 2022**, MeitY issued directions under Section 70B of the IT Act (effective 27 June 2022) — among the **strictest cyber incident reporting norms globally**:

| Requirement | Details |
|-------------|---------|
| **Mandatory Incident Reporting** | All service providers, intermediaries, data centres, body corporates, and government organisations must report cyber incidents to CERT-In **within 6 hours** of noticing or being notified |
| **Log Retention** | All entities must maintain logs of ICT systems for a **rolling period of 180 days** within Indian jurisdiction |
| **VPN Provider Obligations** | VPN providers, data centres, and cloud service providers must maintain subscriber/customer data for **5 years** (even after cancellation) — names, IPs, usage patterns |
| **Clock Synchronisation** | All service providers must synchronise their ICT system clocks to **NTP servers** of NIC or NPL (or to servers traceable to these) |
| **Virtual Asset Service Providers** | Crypto exchanges and VASP providers must maintain KYC and transaction records for **5 years** |
| **Penalty for Non-Compliance** | Up to **1 year imprisonment** or fine up to **Rs 1 lakh**, or both (Section 70B(7) of IT Act) |

**Significance:** India's 6-hour reporting window is one of the shortest globally (EU's GDPR requires 72 hours; USA has varying timelines). This reflects India's aggressive posture on cyber incident management but has raised concerns about compliance burden on startups and small businesses.

---

## Legal Framework

### A. Information Technology Act, 2000 (amended 2008)

India's primary legislation governing cyber space. Key sections relevant for UPSC:

| Section | Subject | Key Details |
|---------|---------|-------------|
| **Section 43** | Unauthorised access | Penalty for unauthorised access, download, introduction of virus — compensation up to Rs 5 crore |
| **Section 66** | Computer-related offences (hacking) | Imprisonment up to 3 years + fine up to Rs 5 lakh |
| **Section 66A** | Offensive messages through communication service | **Struck down** by Supreme Court in **Shreya Singhal v. Union of India (2015)** — held unconstitutional for being vague, overbroad, and violating Article 19(1)(a) (freedom of speech). Bench: Justices Chelameswar and Nariman |
| **Section 66F** | Cyber terrorism | Imprisonment which may extend to life |
| **Section 69** | Power to intercept, monitor, decrypt | Government can direct interception of any information through any computer resource — in the interest of sovereignty, security, public order |
| **Section 69A** | Power to block websites | Government can direct blocking of public access to any information — used for banning 321 Chinese apps (2020–2022) including TikTok, WeChat |
| **Section 70** | Protected systems (Critical Infrastructure) | Government can declare any computer resource as "protected system"; unauthorised access punishable with up to 10 years imprisonment |
| **Section 70A** | NCIIPC | Establishes the national nodal agency for CII protection |
| **Section 70B** | CERT-In | Establishes CERT-In as nodal agency for incident response |
| **Section 79** | Intermediary liability (safe harbour) | Intermediaries not liable for third-party content **if** they observe due diligence — read down (not struck down) in Shreya Singhal case |

> **Common Mistake:** Students often confuse "struck down" with "read down." Section 66A was **struck down** (declared unconstitutional and removed). Section 79 was **read down** (reinterpreted to narrow its scope but remains valid). Section 69A was **upheld** as constitutional. All three were addressed in the Shreya Singhal judgment.

### B. Digital Personal Data Protection (DPDP) Act, 2023

Passed by Parliament on **11 August 2023** — India's first comprehensive data protection law. DPDP Rules notified in 2025.

| Concept | Details |
|---------|---------|
| **Scope** | Applies to digital personal data collected online, or collected offline and subsequently digitised |
| **Data Fiduciary** | Entity that determines the purpose and means of processing personal data (equivalent to GDPR's "data controller") |
| **Data Processor** | Entity that processes data on behalf of the Data Fiduciary |
| **Data Principal** | The individual whose data is being processed (equivalent to GDPR's "data subject") |
| **Consent** | Must be free, specific, informed, unconditional, and unambiguous; can be withdrawn at any time |
| **Purpose Limitation** | Data can only be processed for the specific purpose for which consent was given |
| **Data Protection Board of India** | Adjudicatory body to hear complaints and impose penalties — quasi-judicial, digital-first (proceedings virtual by default) |
| **Penalties** | Up to **Rs 250 crore** for failure to protect against data breaches; up to Rs 200 crore for violations relating to children's data |
| **Significant Data Fiduciaries (SDF)** | Designated by government based on volume/sensitivity of data; must appoint Data Protection Officer (DPO), conduct Data Protection Impact Assessment (DPIA), appoint independent data auditor |
| **Cross-Border Data Transfer** | **Blacklist model** — data can flow to any country EXCEPT those specifically restricted by Central Government notification |
| **Exemptions** | State security, public order, research, legal proceedings; processing by the State for subsidies/benefits |

> **Key distinction:** The DPDP Act 2023 follows a **blacklist model** for cross-border data transfer — personal data can flow everywhere EXCEPT to countries specifically restricted by the government. This contrasts with the EU's GDPR **whitelist model**, where data only flows to countries with "adequate" protection. As of early 2026, no restricted countries list has been notified, meaning transfers to all countries remain permissible. This is a fundamental conceptual difference tested in Mains.

### C. IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021

| Requirement | Details |
|-------------|---------|
| **Due Diligence** | All intermediaries must publish rules, privacy policy, inform users about prohibited content |
| **Significant Social Media Intermediary (SSMI)** | Platform with **50 lakh+ registered users** in India |
| **SSMI Obligations** | Must appoint: (a) Chief Compliance Officer, (b) Nodal Contact Person, (c) Resident Grievance Officer — all must be resident in India |
| **Compliance Reports** | SSMIs must publish **monthly compliance reports** — details of complaints received, action taken, content removed proactively |
| **First Originator Traceability** | For encrypted messaging platforms — must identify the first originator of a message upon court or government order |
| **Content Removal Timelines** | Government/court-flagged content: **36 hours**; nudity/morphed photos: **24 hours** |
| **Grievance Appellate Committee** | Established under 2023 amendment — appeals against intermediary decisions |

---

## Critical Information Infrastructure (CII) Protection

**Definition (Section 70, IT Act):** "Those computer resources, the incapacitation or destruction of which shall have debilitating impact on national security, economy, public health, or safety."

**NCIIPC-Identified CII Sectors:**

1. **Power and Energy** — power grids, nuclear installations, oil and gas
2. **Banking, Financial Services, and Insurance (BFSI)** — RBI systems, NPCI (UPI backbone), stock exchanges
3. **Telecom** — undersea cables, mobile networks, internet backbone
4. **Transport** — railways, aviation (air traffic control), shipping
5. **Government** — NIC networks, Aadhaar/UIDAI systems, defence networks
6. **Strategic/Public Enterprises** — ISRO, DRDO, ordnance factories

**Key Issue:** There is no statutory, publicly available list of designated CII. NCIIPC designates CII on a **case-by-case basis** and the designations are classified. This lack of transparency has been criticised by experts who argue it creates uncertainty about compliance obligations.

---

## Cyber Warfare & State-Sponsored Threats

Cyber space is now recognised as the **fifth domain of warfare** (alongside land, sea, air, and space).

### Threat Actors Targeting India

| Threat Actor | Attribution | Key Activities |
|-------------|-------------|----------------|
| **APT36 / Transparent Tribe** | Pakistan-linked | Spear-phishing against Indian defence, government, maritime sectors using Crimson RAT |
| **SideCopy** | Sub-group of Transparent Tribe | Targets Indian critical infrastructure — railways, oil and gas, external affairs; uses AllaKore RAT |
| **China-linked APT groups** | PRC-associated | Targeted Indian power grid (2020–2021); probing of critical infrastructure during Ladakh standoff |
| **Hacktivists** | Various | Website defacement during Indo-Pak tensions; DDoS attacks on government portals |

### India's Position

- **Defence Cyber Agency (DCyA)** provides tri-service military cyber capabilities
- India has **not signed** the **Budapest Convention on Cybercrime** (Council of Europe) — India's objection: the Convention was drafted without developing country participation
- India actively participated in drafting the **UN Convention against Cybercrime** (adopted 2024) — reflects preference for a UN-led framework over Western-led Budapest Convention
- Need for **offensive cyber capabilities** — deterrence in cyber space requires ability to respond in kind
- **Cyber diplomacy** is handled by MEA; India participates in UN GGE (Group of Governmental Experts) and OEWG (Open-Ended Working Group) on cyber norms

---

## National Cyber Security Policy / Strategy

### National Cyber Security Policy, 2013

India's first dedicated cyber security policy — now largely outdated. Key features:

- Create a workforce of 5 lakh cyber security professionals
- Enable protection of information and build capabilities to prevent and respond to threats
- Reduce national vulnerability to cyber attacks
- Minimise the damage and recovery time from cyber incidents

### National Cyber Security Strategy (Awaited)

A comprehensive National Cyber Security Strategy has been under preparation (Lt Gen Rajesh Pant, then National Cyber Security Coordinator, led the drafting). As of 2026, the strategy document has not been publicly released, though several components have been implemented through executive directions (such as CERT-In Directions 2022).

---

## Important for UPSC

### Prelims Focus

- **CERT-In:** Est. 2004, under MeitY, Section 70B of IT Act, **6-hour** mandatory incident reporting (2022 Directions)
- **NCIIPC:** Est. 2014, under NTRO/PMO, Section 70A of IT Act, protects Critical Information Infrastructure
- **Section 66A:** Struck down in **Shreya Singhal v. Union of India (2015)** — violated Article 19(1)(a)
- **Section 69A:** Power to block websites — upheld as constitutional; used for banning Chinese apps (2020)
- **DPDP Act 2023:** Data Protection Board of India; penalties up to **Rs 250 crore**; blacklist model for cross-border transfer
- **IT Rules 2021:** SSMI threshold — **50 lakh+ registered users**
- **Defence Cyber Agency:** Tri-service, approved 2018, operational 2019, reports to CDS

### Mains GS-3 Dimensions

1. **Security vs Privacy:** Balancing national security needs (Section 69 interception powers) with fundamental right to privacy (Puttaswamy, 2017)
2. **Adequacy of architecture:** Is India's fragmented cyber security structure (CERT-In under MeitY, NCIIPC under PMO, CIS under MHA, DCyA under CDS) effective, or does it need a unified Cyber Command?
3. **CERT-In 6-hour rule:** Impact on ease of doing business vs security imperatives — is 6 hours realistic for small enterprises?
4. **Cyber warfare as fifth domain:** India's preparedness for state-sponsored cyber attacks; need for offensive capabilities and cyber deterrence doctrine
5. **Data protection:** DPDP Act 2023 — strengths and weaknesses compared to GDPR; is the blacklist model adequate?
6. **Critical infrastructure vulnerability:** Lessons from AIIMS attack (2022), power grid probing (2020–2021)

### Interview Angles

- Should India develop offensive cyber capabilities openly, or maintain strategic ambiguity?
- How to protect Aadhaar and UPI infrastructure — single points of failure?
- Can India balance Digital India expansion with cyber security readiness?
- Is the DPDP Act 2023 strong enough to protect citizens' data from both private companies and the State?

---

## Previous Year Questions (PYQs)

### Prelims

**Q. (UPSC 2022):** With reference to "Software as a Service (SaaS)" and "Cloud Computing," consider the following statements...
*(Questions on cyber security concepts frequently appear embedded within Science & Technology or Economy questions.)*

**Q. (UPSC 2017):** In India, it is legally mandatory for which of the following to report on cyber security incidents to the Indian Computer Emergency Response Team (CERT-In)?
1. Service providers
2. Data centres
3. Body corporate

Select the correct answer:
(a) 1 only
(b) 1 and 2 only
(c) 3 only
(d) **1, 2 and 3** ✓

**Q. (UPSC 2015):** With reference to the Indian Cyber Crime Coordination Centre (I4C)... *(Questions testing institutional knowledge of India's cyber security architecture.)*

### Mains

**Q. (UPSC 2022, GS-3):** "What are the different elements of cyber security? Keeping in mind the challenges in cyber security, examine the extent to which India has successfully developed a comprehensive National Cyber Security Strategy."

**Q. (UPSC 2021, GS-3):** "Analyse the multidimensional challenges posed by external state and non-state actors, to the internal security of India. Also discuss measures taken to combat these threats."

**Q. (UPSC 2017, GS-3):** "Discuss the potential threats of cyber-attack and the security framework to prevent it."

---

## Current Affairs Connect

| Current Development | UPSC Relevance | Read More |
|---------------------|----------------|-----------|
| DPDP Rules 2025 — operationalising the DPDP Act | GS-3 (Cyber Security) + GS-2 (Governance, Right to Privacy) | [Ujiyari.com — Data Protection Updates](https://ujiyari.com) |
| CERT-In Directions — compliance challenges for startups | GS-3 (Internal Security + Economy) | [Ujiyari.com — Cyber Security Current Affairs](https://ujiyari.com) |
| India-Pakistan cyber skirmishes (2025) — APT36/SideCopy escalation | GS-3 (Security Challenges, State & Non-State Actors) | [Ujiyari.com — Security Updates](https://ujiyari.com) |
| UN Convention against Cybercrime (2024) — India's role | GS-2 (International Relations) + GS-3 (Cyber Security) | [Ujiyari.com — International Relations](https://ujiyari.com) |

---

*Sources: [CERT-In](https://www.cert-in.org.in), [MeitY](https://www.meity.gov.in), [DPDP Act 2023 — MeitY](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf), [PRS India](https://prsindia.org)*
