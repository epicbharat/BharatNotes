---
layout: topic.njk
title: "Cybercrime, IT Laws & Digital Forensics"
subject: security
gs_papers:
  - gs3
syllabus_topic: "Internal Security"
description: "UPSC notes on cybercrime — IT Act 2000 offences (Sections 43, 65, 66, 66A struck down, 67, 69), DPDP Act 2023, CERT-In, types of cybercrime, dark web, digital forensics, cyber law enforcement, online fraud, India's cybersecurity framework."
chapter: 20
sub_chapter: 20
date: 2026-03-29
tags:
  - security
parent_topic_url: /subjects/security/internal-security/
---

## Cybercrime — Definition and Scope

**Cybercrime** refers to criminal activity that involves a computer, networked device, or network — either as a tool, target, or location of the crime. The Convention on Cybercrime (Budapest Convention, 2001) is the first international treaty on cybercrime; India is **not a signatory** to the Budapest Convention, though it participates in related discussions.

### Classification of Cybercrime

| Category | Types | Examples |
|---|---|---|
| **Crimes against individuals** | Cyberstalking, identity theft, online harassment, morphing, defamation | Fake social media profiles; doxxing |
| **Crimes against property** | Hacking, data theft, ransomware, phishing, online fraud, intellectual property theft | WannaCry ransomware (2017); UPI fraud |
| **Crimes against the state/society** | Cyberterrorism, critical infrastructure attacks, disinformation, espionage | Power grid disruption; election manipulation |
| **Crimes involving content** | Child Sexual Abuse Material (CSAM), obscenity, hate speech | Dark web CSAM marketplaces |
| **Financial cybercrimes** | Bank fraud, crypto scams, money laundering via digital channels | SIM swap; OTP fraud; investment scams |

---

## The IT Act, 2000 — India's Core Cyber Law

The **Information Technology Act, 2000 (IT Act)** is India's primary legislation governing electronic commerce, digital signatures, and cybercrime. It was significantly amended by the **IT (Amendment) Act, 2008**, which expanded cybercrime provisions.

### Key Sections

#### Section 43 — Damage to Computer Systems (Civil Liability)

Covers **unauthorised access** to a computer system, network, or database. Provides for **civil compensation** (not imprisonment) — the person who causes damage without authorisation is liable to pay compensation to the person affected.

Actions covered: accessing, downloading, introducing viruses, disrupting service, stealing data, denying access.

#### Section 65 — Tampering with Computer Source Code

**Knowingly or intentionally concealing, destroying, or altering any computer source code** (used for a computer, programme, or device) is an offence.

- **Punishment:** Imprisonment up to **3 years** or fine up to ₹2 lakh, or both
- Source code = the written instructions (programme files) that make software function

#### Section 66 — Computer-Related Offences (Hacking)

If any person **dishonestly or fraudulently** does any act referred to in Section 43 — he shall be punished with:
- **Imprisonment up to 3 years**, or
- **Fine up to ₹5 lakh**, or both

Section 66 is the **primary hacking provision** of the IT Act. It criminalises what Section 43 treats as a civil wrong when the act is done with dishonest or fraudulent intent.

#### Section 66A — Offensive Messages [STRUCK DOWN]

Section 66A, inserted by the 2008 Amendment, made it a punishable offence to send "grossly offensive," "menacing," or "false" information via electronic communication devices.

**Shreya Singhal v. Union of India (2015):** The Supreme Court **struck down Section 66A** as unconstitutional, holding that it:
- Violated **Article 19(1)(a)** — Freedom of Speech and Expression
- Was **vague and overbroad** — terms like "grossly offensive," "menacing," "annoying" had no clear definition
- Had a **chilling effect** on legitimate free speech, including political commentary and satire
- Was void *ab initio* (treated as never having existed)

**Post-Singhal problem:** Despite being declared void, Section 66A **continued to be invoked** by police in various states — the Supreme Court in 2019 directed all states to ensure its non-enforcement.

#### Section 66B — Dishonestly Receiving Stolen Computer Resource

Punishment: Up to **3 years** or fine up to ₹1 lakh, or both.

#### Section 66C — Identity Theft

Fraudulently or dishonestly using the **electronic signature, password, or any other unique identification feature** of another person.
- Punishment: Up to **3 years** + fine up to ₹1 lakh

#### Section 66D — Cheating by Personation Using Computer

Cheating by personating another person using any communication device or computer resource.
- Punishment: Up to **3 years** + fine up to ₹1 lakh

#### Section 67 — Publishing Obscene Material in Electronic Form

Publishing or transmitting **obscene material** in electronic form — covers text, images, videos.
- **First conviction:** Up to 3 years + fine up to ₹5 lakh
- **Subsequent:** Up to 5 years + fine up to ₹10 lakh

#### Section 67A — Sexually Explicit Material

Publishing or transmitting material containing **sexually explicit acts** (beyond mere obscenity).
- Punishment: Up to **5 years** (first) / 7 years (subsequent) + fine

#### Section 67B — Child Sexual Abuse Material (CSAM)

Publishing, transmitting, creating, or facilitating child pornography.
- Punishment: Up to **5 years** (first) / 7 years (subsequent) + fine
- Also requires compliance with POCSO Act, 2012 provisions

#### Section 69 — Power to Issue Directions for Interception and Monitoring

The **Central Government or State Government** may, in the interest of the sovereignty/integrity/security of India, friendly relations with foreign states, public order, or to prevent incitement of any cognisable offence, **direct interception, monitoring, or decryption of any information** through any computer resource.

Service providers are required to cooperate — failure to comply is an offence (up to 7 years imprisonment).

**Oversight mechanism:** Directions must go through a procedure — for Central government, approved by the Secretary, Ministry of Home Affairs; for state governments, by the Home Secretary. A **Review Committee** reviews interception orders.

#### Section 69A — Blocking of Websites

The Central Government may direct blocking of public access to any information on any computer resource — used to block websites/social media pages. Significant rules govern the procedure: **IT (Procedure and Safeguards for Blocking for Access of Information by Public) Rules, 2009**.

Twitter/X, for instance, has challenged blocking orders under this section.

#### Section 70 — Protected Systems

The Central Government may notify any computer resource as a **"Protected System"** — unauthorised access to protected systems carries imprisonment up to **10 years** and fine. Critical infrastructure systems (power grids, NIC, UIDAI Aadhaar) are notified under Section 70.

#### Section 72 — Breach of Confidentiality and Privacy

Any person who, having secured access to electronic records/books/correspondence under the IT Act, **discloses such information to any other person without the consent** of the person concerned — imprisonment up to 2 years or fine up to ₹1 lakh, or both.

---

## IT Act Penalties Summary Table

| Section | Offence | Punishment |
|---|---|---|
| 43 | Damage to computer systems | Civil compensation only |
| 65 | Tampering with source code | 3 years / ₹2 lakh |
| 66 | Hacking / dishonest computer-related acts | 3 years / ₹5 lakh |
| 66A | Offensive messages | **STRUCK DOWN** (Shreya Singhal 2015) |
| 66C | Identity theft | 3 years / ₹1 lakh |
| 66E | Violation of privacy (capturing/transmitting private images without consent) | 3 years / ₹2 lakh |
| 67 | Obscene material | 3–5 years / ₹5–10 lakh |
| 67B | CSAM (child pornography) | 5–7 years / fine |
| 69 | Interception/monitoring | 7 years (for non-compliance by intermediaries) |
| 70 | Unauthorised access to Protected System | 10 years / fine |
| 72 | Breach of confidentiality | 2 years / ₹1 lakh |

---

## Bharatiya Nyaya Sanhita (BNS) 2023 — Cyber-Related Provisions

The **BNS 2023** replaced the Indian Penal Code (IPC, 1860) and added specific provisions supplementing the IT Act for offences with a digital dimension:

| Section | Offence |
|---|---|
| **Section 303** | Theft — includes cyber theft and unauthorised taking of digital property |
| **Section 318** | Cheating by impersonation, including **digital impersonation** (fake identities, deepfake fraud) |
| **Section 351** | Criminal intimidation — extends to intimidation via digital/electronic means (cyberstalking, online threats) |

The IT Act 2000 remains the **primary legislation** for cybercrime; BNS supplements it for offences that have cyber dimensions but fall within traditional criminal categories (theft, cheating, intimidation).

---

## Digital Personal Data Protection Act, 2023 (DPDP Act)

The **Digital Personal Data Protection Act, 2023** received Presidential assent on **11 August 2023** — India's first comprehensive data protection law after the **Personal Data Protection Bill** failed to be enacted.

### Core Framework

| Concept | Definition |
|---|---|
| **Data Principal** | The individual to whom the personal data relates (the data *subject*) |
| **Data Fiduciary** | Person or entity who determines the purpose and means of processing personal data |
| **Data Processor** | Processes data on behalf of a Data Fiduciary |
| **Consent** | Must be free, specific, informed, unconditional, and unambiguous; signified through affirmative action |

### Key Provisions

**Data Fiduciary Obligations:**
1. Process data only for lawful purposes — with consent, or for certain "legitimate uses"
2. Maintain accuracy of personal data
3. Ensure data security
4. **Data retention limit:** Delete data when the purpose for which it was collected is complete
5. Grievance redressal mechanism for Data Principals

**Rights of Data Principals:**
1. Right to obtain information about processing
2. Right to correction and erasure of personal data
3. Right to nominate someone to exercise rights on death/incapacity
4. Right of grievance redressal

**Significant Data Fiduciaries (SDF):** The Central Government may notify entities processing large volumes of sensitive data as SDFs — they face additional obligations:
- Appoint a **Data Protection Officer (DPO)** based in India
- Appoint an **Independent Data Auditor**
- Periodic Data Protection Impact Assessments
- Restrictions on processing data of children (under 18) — verifiable parental consent

### Data Protection Board of India

An adjudicatory body established under the Act to handle complaints and impose penalties:
- **Maximum penalty:** ₹250 crore per violation (for failure to implement adequate security safeguards leading to a breach)
- Appeals lie to the **Telecommunications Disputes Settlement and Appellate Tribunal (TDSAT)**

### Cross-Border Data Transfer

Data can flow **to any country** unless the Central Government restricts transfer to specific countries on grounds of policy. This is less restrictive than the EU GDPR's adequacy requirement — a deliberate design choice to facilitate India's IT/ITES sector.

### Criticisms of DPDP Act 2023

1. **Wide exemptions for government:** State instruments processing data for national security, public order, crime prevention are largely exempt — no oversight mechanism
2. **No independent regulator:** The Data Protection Board is under the Central Government, raising concerns about independence
3. **No non-personal data provisions:** Unlike the earlier PDP Bill 2019, the DPDP Act 2023 covers only personal data
4. **Rules yet to be notified (as of 2026):** The Act's operationalisation depends on rules — delay creates uncertainty

---

## CERT-In — Indian Computer Emergency Response Team

**CERT-In** functions under the **Ministry of Electronics and Information Technology (MeitY)** under the authority of **Section 70B of the IT Act, 2000**.

| Feature | Detail |
|---|---|
| **Full name** | Indian Computer Emergency Response Team |
| **Establishment** | 2004; Section 70B of IT Act 2000 gives it statutory backing |
| **Key functions** | Collection and analysis of cyberthreat intelligence; issue alerts and advisories; incident response coordination |
| **2022 Direction** | CERT-In issued a direction requiring **mandatory reporting of cybersecurity incidents within 6 hours** — this applies to service providers, intermediaries, data centres, government entities, and body corporates |
| **Reporting portal** | incidents.cert-in.org.in |

### CERT-In 2022 Mandatory Reporting Direction

Key requirements of the April 2022 CERT-In direction (controversial):
- Cybersecurity incidents must be reported to CERT-In within **6 hours** of detection (not just occurrence)
- Service providers and intermediaries must maintain logs of all ICT systems for **180 days** (in Indian jurisdiction, even if systems are abroad)
- VPN (Virtual Private Network) providers must keep **verified customer records for 5 years** — this drove several international VPN providers to delete their India servers

Critics: Privacy advocates argued the 180-day log retention and VPN records requirement would undermine privacy. Supporters: essential for forensic traceability.

---

## NCIIPC — National Critical Information Infrastructure Protection Centre

**NCIIPC** is a unit of the **National Technical Research Organisation (NTRO)** under the PMO, designated as the **National Nodal Agency** for protecting Critical Information Infrastructure (CII) under **Section 70A of the IT Act**.

| CII Sector | Examples |
|---|---|
| Power and Energy | Power grid SCADA systems |
| Banking, Financial Services, Insurance | Core banking, SWIFT payments |
| Telecom | National telecom networks |
| Transport | Air traffic control, railways |
| Government | NIC, e-governance systems |
| Strategic/Defence | Defence research and production |

**Key concern:** India's critical infrastructure increasingly connected to the internet (OT/IT convergence) — SCADA (Supervisory Control and Data Acquisition) systems controlling power grids, water treatment plants become vulnerable. A 2020 reported cyberattack on Mumbai's power grid (attributed to a Chinese APT group by US firm Recorded Future) highlighted this vulnerability.

---

## India's Cybercrime Statistics — NCRB Data

According to the **NCRB Crime in India 2023** report:

| Metric | 2022 | 2023 |
|---|---|---|
| Total cybercrime cases | 65,893 | **86,420** |
| Growth rate | — | +31.2% |
| IT Act offences | — | Rose by 36% |
| Cheating by personation cases | 13,506 | 25,334 |
| Fraud (as % of cybercrimes) | — | 68.9% (59,526 cases) |

**Top states by cybercrime cases (2023):**
1. Karnataka — 21,889 cases
2. Telangana — 18,236 cases
3. Uttar Pradesh — 10,794 cases

**Dominant type:** Financial fraud (UPI fraud, OTP fraud, fake investment schemes, loan app fraud) accounts for the bulk of cybercrime cases, reflecting India's rapid digital payments adoption.

---

## I4C — Indian Cybercrime Coordination Centre

The **Indian Cybercrime Coordination Centre (I4C)** was inaugurated on **10 January 2020** by the Ministry of Home Affairs (MHA) to provide a framework and ecosystem for law enforcement agencies to deal with cybercrime effectively.

### Components of I4C

| Component | Function |
|---|---|
| National Cybercrime Threat Analytics Unit | Intelligence gathering and threat analysis |
| National Cybercrime Reporting Portal | cybercrime.gov.in — citizen complaint filing portal |
| National Cybercrime Training Centre | Capacity building for state police officers |
| Cybercrime Ecosystem Management Unit | Coordination with industry, academia |
| National Cybercrime Research and Innovation Centre | R&D for cybercrime detection tools |
| National Cybercrime Forensic Lab Ecosystem | Forensic support to states |
| Platform for Joint Cybercrime Investigation Team | Multi-state crime investigation support |

### Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS)

The most impactful I4C initiative — integrated with **National Helpline 1930**:
- Citizens call **1930** to report financial cyber fraud (UPI fraud, bank fraud, etc.)
- The system immediately alerts banks/payment providers to **freeze fraudulent transactions in real-time**
- I4C has saved over **₹1,100 crore** of citizen money, benefiting **4.3 lakh+ victims** in 3 years
- The 1930 helpline receives approximately **50,000 calls daily**

---

## Types of Cybercrime — Detailed Overview

### Ransomware

Malware that encrypts victim's data and demands **cryptocurrency payment** for the decryption key.

Notable examples:
- **WannaCry (2017):** Used NSA-developed EternalBlue exploit; affected 200,000+ systems in 150 countries; India impacted (Andhra Pradesh Police, banks)
- **NotPetya (2017):** Disguised as ransomware but primarily a destructive wiper; attributed to Russian military intelligence
- **REvil/Sodinokibi:** Russia-linked group that targeted Kaseya VSA (2021); JBS Foods (2021)

**India context:** AIIMS Delhi suffered a major ransomware attack in **November 2022** — five servers compromised, critical patient data encrypted; took weeks to restore.

### Phishing

Deceptive emails/messages that impersonate trusted entities (banks, UIDAI, government) to trick victims into revealing credentials or clicking malicious links.

**Spear phishing:** Targeted phishing against specific individuals or organisations (senior officials, etc.)

### Online Financial Fraud — India's Dominant Cybercrime

| Type | Mechanism |
|---|---|
| **SIM Swap Fraud** | Criminal convinces telecom to issue duplicate SIM; intercepts OTPs for banking |
| **UPI Fraud** | Fake payment requests, QR code scams (victim *sends* money thinking they're receiving) |
| **OTP Fraud** | Social engineering — victim tricked into sharing OTP sent by bank |
| **Loan App Fraud** | Predatory apps charging illegal interest; blackmail using contacts/photos |
| **Investment Scams (Pig Butchering)** | Long-term social engineering to build trust, then fraudulent investment platforms |
| **Vishing (Voice Phishing)** | Calls impersonating CBI/IT Dept/TRAI; threats of "digital arrest" |

**"Digital Arrest" Scam:** A sophisticated emerging scam where criminals impersonate law enforcement (CBI/TRAI/NARCOTIS) and keep victims on video call for days, claiming they are under "digital arrest" — extracting lakhs in payments. PM Modi warned about this in his **Mann Ki Baat (October 2024)**.

---

## The Dark Web

The **Dark Web** is a part of the internet accessible only through **anonymising networks**, primarily **Tor (The Onion Router)**, which routes traffic through multiple encrypted nodes to conceal user identity.

| Layer | Description |
|---|---|
| **Surface Web** | Indexed by search engines; publicly accessible (5–10% of internet) |
| **Deep Web** | Not indexed — databases, email inboxes, banking portals, healthcare records (majority of internet) |
| **Dark Web** | Requires Tor/I2P; anonymous; hosts both legitimate (journalists, dissidents) and criminal content |

**Dark Web criminal activities:**
- Drug markets (Silk Road predecessor model)
- Illegal weapons trading
- Sale of stolen data (credit cards, Aadhaar numbers, medical records)
- CSAM (child sexual abuse material)
- Hacking services for hire (DDoS attacks, ransomware deployment)
- Cryptocurrency mixing/tumbling for money laundering

**Cryptocurrency's role:** Bitcoin (pseudonymous, traceable) and privacy coins like **Monero** (truly anonymous) facilitate dark web transactions; blockchain analysis firms (Chainalysis, TRM Labs) are used by law enforcement to trace crypto flows.

---

## Digital Forensics

**Digital forensics** is the process of **collecting, preserving, analysing, and presenting** digital evidence in a legally admissible manner.

### Principles

1. **Locard's Exchange Principle** (adapted for cyber): Every digital interaction leaves a trace — log files, metadata, access records, timestamps, and even deleted files can be recovered. The cyber investigator's task is to identify and preserve these traces before they are overwritten or destroyed.
2. **Chain of custody:** Every person who handles evidence must be documented; evidence must not be altered — any break in the chain renders evidence inadmissible in court.
3. **Write-blockers:** Forensic copies made using hardware/software write-blockers to prevent modification of original media during acquisition.
4. **Hash values:** MD5/SHA-256 hash of original data verified against forensic copy — mathematical proof that evidence has not been tampered with.
5. **Documentation:** All forensic steps documented in a forensic report for court admissibility.

### Types of Digital Evidence

- **Computer forensics:** Hard drives, USB devices, deleted file recovery
- **Mobile device forensics:** Call logs, messages (WhatsApp, Signal), app data, GPS history
- **Network forensics:** Server logs, router traffic, email headers
- **Cloud forensics:** Data stored on cloud platforms — requires service provider cooperation and legal process (MLAT for cross-border data)

### Investigation Challenges

| Challenge | Explanation |
|-----------|-------------|
| **Encryption** | End-to-end encrypted apps make content inaccessible even with legal orders — the "going dark" problem |
| **Anonymity tools** | Tor, VPNs, proxy chains obscure attacker identity; tracing requires specialised dark web monitoring |
| **Cross-border jurisdiction** | Servers in foreign jurisdictions may be uncooperative; MLAT process can take months |
| **Volatile evidence** | RAM data, active network connections, and browser session data are lost on device shutdown — must be captured live |
| **Volume** | Modern devices contain terabytes of data; AI-based triage tools are increasingly essential |
| **Cloud storage** | Evidence on foreign cloud servers requires MLAT (Mutual Legal Assistance Treaty) or formal legal assistance requests |
| **Anti-forensic tools** | Sophisticated attackers use file wiping, timestomping, and encryption to destroy or obscure evidence |

**MLAT (Mutual Legal Assistance Treaties):** Bilateral/multilateral treaties enabling one country to formally request evidence or legal assistance from another. India has MLATs with the USA, UK, and EU members, but the process typically takes months — a major bottleneck in time-sensitive investigations.

### Legal Admissibility in India

- **Bharatiya Sakshya Adhiniyam (BSA), 2023** (replaced Indian Evidence Act, 1872): Sections on electronic records and admissibility of digital evidence
- Electronic records are admissible if a **certificate under Section 63 BSA** (formerly Section 65B IEA) is provided by the person in charge of the computer — certifying the output is from a computer that was properly operating
- **Anvar P.V. v. P.K. Basheer (2014) SC:** Made Section 65B certificate mandatory for primary admissibility of electronic evidence (later interpreted in subsequent cases)
- **Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020) SC:** Reaffirmed mandatory Section 65B certificate requirement

---

## Cyber Law Enforcement Architecture

| Agency | Ministry | Role |
|---|---|---|
| **I4C** (Indian Cybercrime Coordination Centre) | MHA | National coordination, citizen helpline 1930, CFCFRMS |
| **CBI Cybercrime Unit** | DOPT/MHA | Investigating national-level cybercrime, dark web cases |
| **State Cyber Cells** | State Home Departments | Primary investigation of most cybercrime FIRs |
| **CERT-In** | MeitY | Technical response; incident analysis; no law enforcement powers |
| **NCIIPC** | NTRO/PMO | Protecting Critical Information Infrastructure |
| **NIA** | MHA | Cyberterrorism cases |
| **Financial Intelligence Unit (FIU-IND)** | Finance Ministry | Tracking suspicious financial transactions including crypto |

---

## Budapest Convention — India's Non-Signatory Status

The **Convention on Cybercrime (Budapest Convention, 2001)** — Council of Europe's treaty — is the only binding international agreement on cybercrime. It covers substantive cybercrime law, procedural law, and international cooperation (including real-time interception and expedited preservation of data).

India is **not a signatory.** Reasons cited:
1. India was not involved in drafting — the convention was developed by Council of Europe members with a few observer nations
2. Sovereignty concerns: Real-time interception sharing with foreign agencies seen as intrusive
3. Data localisation concerns
4. India prefers multilateral forum (UN) for cybercrime treaty-making

**Ongoing UN process:** India actively participates in the **UN Ad Hoc Committee** that is negotiating a new **UN Convention on Countering the Use of Information and Communications Technologies for Criminal Purposes** (adopted January 2025) — which India supports as an alternative to Budapest.

---

## India's Cybersecurity Policy Framework

| Policy/Initiative | Year | Key Feature |
|---|---|---|
| **National Cyber Security Policy (NCSP)** | 2013 | First national policy; created the framework for CERT-In, NCIIPC; largely outdated |
| **Draft NCSP 2020** | 2020 (Draft) | Not finalised; proposed stronger supply chain security, IoT regulations, cyber awareness |
| **National Cyber Coordination Centre (NCCC)** | 2017 | Real-time monitoring of internet traffic; under CERT-In |
| **Cyber Surakshit Bharat** | 2018 | Capacity building for government officials; awareness programmes |
| **Cyber Swachhta Kendra** | 2017 | Free malware removal tools; botnet cleaning; under CERT-In/MeitY |
| **DPDP Act** | 2023 | Data protection legislation |

---

## Previous Year Questions (PYQs)

### Prelims

1. **(UPSC CSE Prelims 2022):** "With reference to CERT-In, consider the following: (1) CERT-In functions under the Ministry of IT. (2) It provides technical assistance for cybersecurity incidents. Which is/are correct?"
   - Both are correct. CERT-In functions under MeitY and provides technical cyber incident response.

2. **(UPSC CSE Prelims 2020):** "Shreya Singhal v. Union of India is related to which section of the IT Act?"
   - Section 66A — struck down for violating Article 19(1)(a).

3. **(UPSC CSE Prelims 2018):** "Which of the following is NOT a type of malware?"
   - (Based on standard type: Firmware is not malware; Ransomware, Spyware, Worm are malware.)

4. **(UPSC CSE Prelims 2017):** "The term 'Dark Net' is sometimes seen in the news. Which of the following best describes it?"
   - That part of the internet that can be accessed only with special software and used for anonymous communication.

### Mains

1. **(UPSC CSE Mains GS3 2023):** "Discuss the salient features of the Digital Personal Data Protection Act, 2023. What are the concerns with the wide exemptions provided to government bodies?" *(250 words)*

2. **(UPSC CSE Mains GS3 2020):** "Examine the role of CERT-In and I4C in India's cybersecurity framework. What are the gaps that need to be addressed?" *(200 words)*

3. **(UPSC CSE Mains GS3 2019):** "Cybercrime is emerging as a serious threat to India's internal security. Discuss the types of cybercrime that are most prevalent in India and the legal framework available to combat them." *(250 words)*

4. **(UPSC CSE Mains GS3 2016):** "What is the significance of India not being a signatory to the Budapest Convention on Cybercrime? How does this affect international cooperation in investigating cybercrimes?" *(150 words)*

---

## Exam Strategy

**For Prelims:**
- Section 66A: struck down in Shreya Singhal v. UoI (24 March 2015) — Article 19(1)(a) violation
- CERT-In: under MeitY; 6-hour mandatory reporting (2022); Section 70B IT Act
- NCIIPC: under NTRO/PMO; Section 70A IT Act; Critical Information Infrastructure
- I4C: MHA; inaugurated January 2020; 1930 helpline; CFCFRMS
- DPDP Act 2023: Presidential assent 11 August 2023; Data Protection Board; SDFs; max penalty ₹250 crore
- Budapest Convention: India NOT a signatory; preference for UN multilateral approach

**For Mains (GS3 — Internal Security):**
- Structure cybercrime answer: Definition → Types → Legal framework (IT Act sections) → Institutional framework (CERT-In, I4C, NCIIPC) → Gaps → Way forward
- DPDP Act 2023: coverage, exemptions (government), Data Protection Board, SDFs — link to privacy as FR (*Justice K.S. Puttaswamy v. UoI, 2017*)
- NCRB 2023 data: 86,420 cybercrime cases; 31.2% rise; financial fraud 68.9% — use in opening lines for impact
- Digital forensics: Section 63 BSA (formerly 65B IEA) certificate is frequently examined; Anvar P.V. and Arjun Panditrao cases on admissibility
- Budapest: India prefers UN forum — new UN Cybercrime Convention (January 2025) — show awareness of latest development
- "Digital arrest" scam as contemporary example of social engineering at scale

**Mnemonic for IT Act key sections:** **43-Civil, 65-Source, 66-Hack, 67-Obscene, 69-Intercept, 70-Protected, 72-Privacy**
