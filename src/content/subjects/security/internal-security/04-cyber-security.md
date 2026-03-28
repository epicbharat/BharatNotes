---
layout: topic.njk
title: "Cyber Security — Threats, Framework & Data Protection"
subject: security
parent_topic: "Internal Security"
parent_topic_url: "/subjects/security/internal-security/"
gs_papers:
  - gs3
syllabus_topic: "Internal Security"
description: "UPSC GS3 notes on cyber security — CERT-In, NCIIPC, IT Act 2000 amendments, Digital Personal Data Protection Act 2023, cyber warfare, critical infrastructure protection, and India's cyber security architecture."
sub_chapter: 4
date: 2026-03-26
foundation: true
prelims: true
mains: true
tags:
  - security
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
| **Ransomware** | Encrypts victim's data; demands ransom for decryption key | **WannaCry (2017)** — affected 40,000+ computers in India; Andhra Pradesh police, Gujarat SWAN, banking ATMs impacted. **AIIMS Delhi (23 Nov 2022)** — 5 of 100 physical servers breached, entire e-hospital system down for 6 days, operations shifted to manual mode, ~40 million patient records compromised, Rs 200 crore ransom demanded in cryptocurrency; investigators traced the attack to a server in China, NIA registered a case under Section 66F (cyber terrorism) |
| **Phishing** | Fraudulent emails/messages to steal credentials or install malware | Targeted phishing against Indian defence personnel via fake government portals |
| **DDoS (Distributed Denial of Service)** | Overwhelms servers with traffic to make services unavailable | Attacks on Indian government websites during geopolitical tensions |
| **Advanced Persistent Threats (APTs)** | Long-term, targeted intrusions by sophisticated actors (often state-sponsored) | APT36 / Transparent Tribe (Pakistan-linked) targeting Indian defence and government entities |
| **State-Sponsored Attacks** | Cyber operations backed by nation-states for espionage, sabotage, or disruption | China-linked groups targeting Indian power grid infrastructure (2020–2021) |
| **Social Engineering** | Manipulating individuals into divulging confidential information | Honey-trapping of defence personnel via social media |
| **Supply Chain Attacks** | Compromising software/hardware vendors to infiltrate target systems | SolarWinds attack (2020) — global impact including Indian entities |

**Ransomware Trend:** Ransomware has emerged as the most disruptive cyber threat globally. India saw a **53% increase** in ransomware incidents in 2022 (CERT-In India Ransomware Report 2022). Most impacted sectors: IT/ITeS, finance, and manufacturing. Lockbit was the most commonly observed ransomware variant in India. The shift towards **Ransomware-as-a-Service (RaaS)** — where ransomware developers lease their tools to affiliates — has lowered the barrier for attackers significantly.

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
| **Indian Cyber Crime Coordination Centre (I4C)** | MHA | Scheme approved Oct 2018; inaugurated **10 Jan 2020** | National-level coordination for cyber crime. Seven components including National Cyber Crime Reporting Portal (NCRP, launched Aug 2019 at cybercrime.gov.in), National Cyber Crime Threat Analytics Unit, Cyber Crime Forensic Laboratory Ecosystem, and Joint Cyber Crime Investigation Team platform. Toll-free helpline **1930** operates 24x7 for citizen assistance |

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

Passed by Lok Sabha on **7 August 2023**, by Rajya Sabha on **9 August 2023**, and received Presidential assent on **11 August 2023** — India's first comprehensive data protection law. DPDP Rules notified in 2025. The Act replaced the earlier Section 43A of IT Act and the IT (Reasonable Security Practices) Rules, 2011 as the primary data protection framework.

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

**Cyber Security Linkage:** The DPDP Act 2023 complements the IT Act's cyber security framework by imposing **mandatory breach notification** obligations on Data Fiduciaries to the Data Protection Board. Combined with CERT-In's 6-hour incident reporting mandate (2022 Directions), India now has a **dual reporting regime** — organisations must notify both CERT-In (within 6 hours for cyber incidents) and the Data Protection Board (for personal data breaches). This overlap creates compliance challenges but also ensures that no breach goes unreported.

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

India's first dedicated cyber security policy, released by MeitY (then DeitY) — now largely outdated but remains important for Prelims. Key objectives and features:

- **Vision:** To build a secure and resilient cyber space for citizens, businesses, and government
- **Workforce target:** Create a workforce of **5 lakh cyber security professionals** through education, training, and skill development
- **24x7 mechanism:** Envisioned a national and sectoral round-the-clock mechanism for cyber threat response through NCIIPC and CERT-In
- **Sectoral CERTs:** Proposed creation of sector-specific CERTs under the umbrella coordination of CERT-In
- **Indigenous solutions:** Promote R&D for development of indigenous cyber security technologies and solutions
- **Public-Private Partnership:** Develop effective PPP models for cyber security capacity building
- **Open standards:** Encourage use of open standards to facilitate interoperability and data exchange
- **Testing and certification:** Create an assurance framework with designated agencies for testing and certification of IT products
- Reduce national vulnerability to cyber attacks
- Minimise the damage and recovery time from cyber incidents

**Limitations:** The 2013 policy lacked enforcement mechanisms, had no binding obligations, did not address offensive cyber capabilities, and set no timelines for implementation. Most of the 14 objectives remained unmet, prompting calls for a replacement strategy.

### National Cyber Security Strategy (Awaited)

A comprehensive National Cyber Security Strategy has been under preparation (Lt Gen Rajesh Pant, then National Cyber Security Coordinator, led the drafting). As of 2026, the strategy document has not been publicly released, though several components have been implemented through executive directions (such as CERT-In Directions 2022).

**Key gap:** India currently operates without a single, consolidated, and publicly available national cyber security strategy. The 2013 policy is outdated; CERT-In Directions 2022, DPDP Act 2023, and various institutional mechanisms function as **piecemeal measures** rather than a unified strategic framework. This fragmentation remains a significant vulnerability — especially as India's digital attack surface expands rapidly with Digital India, UPI, and Aadhaar.

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
- **I4C:** Inaugurated 10 Jan 2020, under MHA; 7 components; toll-free helpline **1930**; National Cyber Crime Reporting Portal launched Aug 2019
- **National Cyber Security Policy 2013:** India's first cyber security policy; target of 5 lakh professionals; now largely outdated

### Mains GS-3 Dimensions

1. **Security vs Privacy:** Balancing national security needs (Section 69 interception powers) with fundamental right to privacy (Puttaswamy, 2017)
2. **Adequacy of architecture:** Is India's fragmented cyber security structure (CERT-In under MeitY, NCIIPC under PMO, CIS under MHA, DCyA under CDS) effective, or does it need a unified Cyber Command?
3. **CERT-In 6-hour rule:** Impact on ease of doing business vs security imperatives — is 6 hours realistic for small enterprises?
4. **Cyber warfare as fifth domain:** India's preparedness for state-sponsored cyber attacks; need for offensive capabilities and cyber deterrence doctrine
5. **Data protection:** DPDP Act 2023 — strengths and weaknesses compared to GDPR; is the blacklist model adequate?
6. **Critical infrastructure vulnerability:** Lessons from AIIMS attack (Nov 2022 — servers down for 6 days, operations shifted to manual, attack traced to servers in China), power grid probing (2020–2021)
7. **Cyber crime coordination:** Role of I4C in bridging gaps between Centre and states; effectiveness of 1930 helpline and National Cyber Crime Reporting Portal in addressing citizen grievances

### Interview Angles

- Should India develop offensive cyber capabilities openly, or maintain strategic ambiguity?
- How to protect Aadhaar and UPI infrastructure — single points of failure?
- Can India balance Digital India expansion with cyber security readiness?
- Is the DPDP Act 2023 strong enough to protect citizens' data from both private companies and the State?
- The AIIMS ransomware attack (2022) exposed healthcare as critical infrastructure — should hospitals be formally designated as CII under Section 70?
- Is the National Cyber Security Policy 2013 adequate, or does India urgently need the long-awaited National Cyber Security Strategy?
- How effective is the I4C's 1930 helpline and cybercrime.gov.in portal in addressing cyber fraud at scale across states?

---

---

## Current Affairs Connect

| Current Development | UPSC Relevance | Read More |
|---------------------|----------------|-----------|
| DPDP Rules 2025 — operationalising the DPDP Act | GS-3 (Cyber Security) + GS-2 (Governance, Right to Privacy) | [Ujiyari.com — Data Protection Updates](https://ujiyari.com) |
| CERT-In Directions — compliance challenges for startups | GS-3 (Internal Security + Economy) | [Ujiyari.com — Cyber Security Current Affairs](https://ujiyari.com) |
| India-Pakistan cyber skirmishes (2025) — APT36/SideCopy escalation | GS-3 (Security Challenges, State & Non-State Actors) | [Ujiyari.com — Security Updates](https://ujiyari.com) |
| UN Convention against Cybercrime (2024) — India's role | GS-2 (International Relations) + GS-3 (Cyber Security) | [Ujiyari.com — International Relations](https://ujiyari.com) |

---

## Vocabulary

### Phishing
- **Pronunciation:** /ˈfɪʃ.ɪŋ/
- **Definition:** A form of cyber attack in which a malicious actor sends fraudulent emails, messages, or creates fake websites that impersonate trusted entities in order to trick victims into revealing sensitive information such as usernames, passwords, and credit card details.
- **Origin:** A respelling of *fishing* ("trying to find or catch"), with the *ph-* influenced by *phreaking* (fraudulent manipulation of telephone systems); the term emerged in hacker communities in the 1990s, with the earliest documented use in 1996 on the Usenet newsgroup alt.2600.

### Malware
- **Pronunciation:** /ˈmæl.weər/
- **Definition:** Software intentionally designed to damage, disrupt, or gain unauthorised access to computer systems, encompassing viruses, worms, trojans, ransomware, spyware, and other malicious programmes.
- **Origin:** A portmanteau of *malicious* + *software*; the term was first recorded in 1990 and gained widespread use during the 1990s as internet-connected computer threats proliferated.

### Troll
- **Pronunciation:** /trəʊl/
- **Definition:** In internet usage, a person who deliberately posts inflammatory, provocative, or off-topic messages in online forums, social media, or comment sections to disrupt discussions, provoke emotional responses, or manipulate public discourse.
- **Origin:** The internet sense derives from the fishing term *trolling* (dragging a baited line through water to lure fish), metaphorically describing the act of luring people into emotional reactions; first attested in online communities in the early 1990s, with the earliest Oxford English Dictionary citation from 1992.

---

## Key Terms

### CERT-In
- **Pronunciation:** /sɜːt ɪn/
- **Definition:** The Indian Computer Emergency Response Team, established on 19 January 2004 under Section 70B of the Information Technology Act, 2000, serving as the national nodal agency under the Ministry of Electronics and Information Technology (MeitY) for responding to computer security incidents, issuing threat advisories, and coordinating cybersecurity incident management across India.
- **Origin:** Established by the Government of India in 2004 under the IT Act, 2000, modelled after the original CERT Coordination Center founded at Carnegie Mellon University (USA) in 1988 following the Morris worm incident.

### IT Act 2000
- **Pronunciation:** /aɪ.tiː ækt tuː ˈθaʊ.zənd/
- **Definition:** The Information Technology Act, 2000 (Act No. 21 of 2000), India's primary legislation governing electronic commerce, digital signatures, cybercrime, and data protection, providing legal recognition for electronic transactions and establishing offences and penalties for cyber crimes.
- **Origin:** Enacted by the Parliament of India and notified on 17 October 2000, based on the UNCITRAL Model Law on Electronic Commerce (1996); significantly amended in 2008 to address emerging cyber threats, intermediary liability, and data protection.

---

*Sources: [CERT-In](https://www.cert-in.org.in), [MeitY](https://www.meity.gov.in), [DPDP Act 2023 — MeitY](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf), [PRS India](https://prsindia.org)*
