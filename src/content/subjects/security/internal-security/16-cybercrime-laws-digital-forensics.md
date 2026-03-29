---
layout: topic.njk
title: "Cybercrime, IT Laws & Digital Forensics — India's Legal Framework"
subject: security
parent_topic: "Internal Security"
parent_topic_url: "/subjects/security/internal-security/"
gs_papers:
  - gs3
syllabus_topic: "Internal Security"
description: "UPSC notes on cybercrime in India — IT Act 2000 sections (66, 66C, 66F, 67, 69), BNS cyber offences, types of cybercrime, digital forensics, CERT-In, I4C, National Cyber Crime Reporting Portal, dark web, cyber frauds."
sub_chapter: 16
date: 2026-03-29
foundation: false
prelims: true
mains: true
tags:
  - security
---

## Cybercrime: Definition and Context

**Cybercrime** refers to criminal activity that targets or uses a computer, computer network or networked device. With India crossing **900 million internet users** and **UPI transactions exceeding ₹200 lakh crore annually**, the digital attack surface has expanded dramatically. Cybercrime is now one of the fastest-growing categories of crime in India, with the **National Cyber Crime Reporting Portal** receiving lakhs of complaints annually.

---

## Types of Cybercrime

### Against Individuals
- **Hacking** — unauthorised access to systems/accounts
- **Identity theft** — stealing PII (Personally Identifiable Information) for fraud
- **Cyberstalking and online harassment** — using digital platforms to intimidate
- **Phishing** — deceptive emails/messages to steal credentials
- **Morphing** — digitally altering images to defame or harass
- **Sextortion** — threatening to release private images unless demands met

### Against Organisations
- **Data breach** — theft of customer/employee data (e.g., AIIMS Delhi ransomware 2022)
- **Ransomware** — encrypting data and demanding payment (e.g., WannaCry 2017)
- **Distributed Denial of Service (DDoS)** — flooding servers to make them unavailable
- **Corporate espionage** — stealing trade secrets via cyber intrusion

### Against the State
- **Cyber terrorism** — using cyberspace to threaten India's sovereignty/integrity (IT Act S.66F)
- **Critical infrastructure attacks** — power grids, banking systems, nuclear facilities
- **State-sponsored APTs (Advanced Persistent Threats)** — long-term covert infiltration by foreign state actors

### Financial Cybercrimes (High-prevalence in India)
- **UPI / payment app fraud** — fake UPI IDs, fraudulent QR codes
- **SIM swapping** — manipulating telecom provider to get victim's SIM, enabling OTP theft
- **Online investment scams** — fake trading apps, Ponzi schemes on social media
- **KYC fraud** — phishing for KYC details through fake calls/messages
- **Vishing** — voice phishing via phone calls posing as banks/government

---

## India's Legal Framework for Cybercrime

### IT Act 2000 (Key Provisions)

| Section | Offence | Penalty |
|---------|---------|---------|
| **43** | Unauthorised access, damage to computer systems | Civil compensation |
| **66** | Computer-related offences (dishonestly/fraudulently) | 3 years imprisonment / ₹5 lakh fine |
| **66A** | Sending offensive messages online | **Struck down** by SC in *Shreya Singhal v. Union of India* (2015) as unconstitutional — violated Article 19(1)(a) |
| **66C** | Identity theft (using another's password/digital signature) | 3 years / ₹1 lakh fine |
| **66D** | Cheating by personation using computer resources | 3 years / ₹1 lakh fine |
| **66E** | Violation of privacy (capturing/transmitting private images) | 3 years / ₹2 lakh fine |
| **66F** | **Cyber terrorism** — acts threatening sovereignty, integrity, security of India | Imprisonment up to **life** |
| **67** | Publishing obscene material in electronic form | 3–5 years / ₹5–10 lakh fine |
| **67A** | Publishing sexually explicit material | 5–7 years |
| **67B** | Publishing child pornography / CSAM | 5–7 years |
| **69** | Power to intercept, monitor or decrypt information | 7 years |
| **69A** | Power to block access to websites | Blocking order by Secretary, MeitY |
| **69B** | Monitoring of traffic data | — |
| **70** | Protected systems — unauthorised access | 10 years |
| **72** | Breach of confidentiality by officials | 2 years / ₹1 lakh fine |

**Section 66A** is constitutionally important: the Supreme Court struck it down in the landmark **Shreya Singhal case (2015)** because it imposed unreasonable restrictions on free speech under Article 19(1)(a) and was **vague and overbroad**.

### Bharatiya Nyaya Sanhita (BNS) 2023

The **BNS 2023** replaced the IPC (1860) and added specific provisions:
- **Section 303** — Theft including cyber theft
- **Section 318** — Cheating by impersonation, including digital impersonation
- **Section 351** — Criminal intimidation via digital means
The IT Act 2000 remains the primary legislation; BNS supplements it for offences with cyber dimensions.

### Digital Personal Data Protection (DPDP) Act 2023

- Establishes rights of **data principals** (individuals) and obligations of **data fiduciaries** (organisations handling data).
- Mandatory **data breach notification** to the **Data Protection Board of India**.
- **Significant Data Fiduciaries** face enhanced obligations.
- Penalties up to **₹250 crore** per breach.

---

## Institutional Framework

### CERT-In (Indian Computer Emergency Response Team)
- Established **19 January 2004** (inaugurated by Minister Arun Shourie).
- Functions under **Section 70B of the IT Act** and the **Ministry of Electronics and Information Technology (MeitY)**.
- India's national nodal agency for cybersecurity incident response.
- **CERT-In Directive (April 2022):** Mandates reporting of cybersecurity incidents within **6 hours** of noticing or being notified — one of the most stringent timelines globally (EU GDPR allows 72 hours).
- Directive also requires **VPN providers, cloud companies and data centres** to maintain logs for 180 days and store accurate subscriber data.

### I4C (Indian Cyber Crime Coordination Centre)
- Under the **Ministry of Home Affairs (MHA)**.
- Inaugurated **January 2020**.
- Coordinates law enforcement responses to cybercrime across states.
- Operates **National Cyber Crime Reporting Portal** (cybercrime.gov.in).
- Runs the **Cyber Suraksha helpline 1930** — dedicated to financial cyberfraud; facilitates quick freezing of fraudulently transacted funds.

### Other Bodies

| Organisation | Ministry/Body | Role |
|-------------|--------------|------|
| **CyPAD** (Cyber Prevention Awareness & Detection) | Delhi Police | Cyber investigation, training |
| **NCIIPC** (National Critical Information Infrastructure Protection Centre) | NTRO / PMO | Protects critical information infrastructure |
| **DRDO Cyber Research** | Defence | Cyber defence for armed forces |
| **RBI Cyber Cell** | RBI | Monitors payment system fraud |

---

## The Dark Web

The **dark web** is a part of the internet accessible only through specialised software — primarily the **Tor (The Onion Router) network**, which anonymises traffic by routing it through multiple encrypted nodes.

- **Surface Web** — publicly indexed (Google, etc.) — ~4% of internet
- **Deep Web** — unindexed but not illegal (banking portals, internal databases) — ~96%
- **Dark Web** — subset of deep web; anonymous and largely unregulated

The dark web hosts:
- **Illicit marketplaces** for drugs, weapons, stolen data (e.g., former Silk Road marketplace)
- **Cryptocurrency-based transactions** (Bitcoin, Monero for anonymity)
- **Stolen credential dumps**, banking data, Aadhaar/PAN data sales (a concern for India)
- **Terrorist communication and recruitment** channels
- **Ransomware-as-a-Service (RaaS)** platforms

Investigating dark web crimes requires specialised tools; agencies like CBI, ED and state cyber cells increasingly invest in dark web monitoring capabilities.

---

## Digital Forensics

**Digital forensics** is the process of identifying, collecting, preserving, examining and presenting digital evidence in a legally admissible manner.

### Key Principles

- **Locard's Exchange Principle** (adapted for cyber): every digital interaction leaves a trace — log files, metadata, access records, even deleted files can be recovered.
- **Chain of Custody** — documented, unbroken record of who handled digital evidence from seizure to courtroom; any break renders evidence inadmissible.
- **Write-blockers** — used during evidence acquisition to ensure original data is not altered.

### Investigation Challenges

| Challenge | Explanation |
|-----------|-------------|
| **Encryption** | End-to-end encrypted apps make content inaccessible even with legal orders |
| **Anonymity** | Tor, VPNs, proxy chains obscure attacker identity |
| **Cross-border jurisdiction** | Servers may be in jurisdictions unwilling to cooperate |
| **Volatile evidence** | RAM data, active network connections are lost on shutdown |
| **Volume** | Modern devices contain terabytes; AI tools needed for triage |
| **Cloud storage** | Evidence on foreign cloud servers requires MLAT process |

**MLAT (Mutual Legal Assistance Treaty)** — bilateral/multilateral treaties enabling one country to request evidence or legal assistance from another; India has MLATs with the USA, UK, EU members and others but the process can take months.

---

## Budapest Convention on Cybercrime

- The **Budapest Convention (2001)** — also called the **Convention on Cybercrime** — is the first international treaty addressing cybercrime, developed by the **Council of Europe**.
- It harmonises national laws on cybercrime and facilitates cross-border cooperation.
- **India is NOT a signatory** to the Budapest Convention.
- India's position: the Convention was drafted without adequate input from developing nations; India advocates for a **UN-based cybercrime treaty** under UNODC auspices that better reflects developing country interests.
- The **UN Ad Hoc Committee on Cybercrime** finalised a draft convention in 2024, which India supports.

---

## National Cybersecurity Strategy

India's **National Cyber Security Policy 2013** is being updated. Key elements:
- **NCS 2020 draft** — focus on securing critical infrastructure, capacity building, R&D in cybersecurity.
- **Cyber Surakshit Bharat** — awareness and capacity building for government officials.
- **NCIIPC** protects critical sectors: power, finance, transport, telecom.
- **Cyber Swachhta Kendra** (Botnet Cleaning Centre) under CERT-In — free tools to detect and remove malware.

---

## Exam Strategy

- **Section 66A struck down (Shreya Singhal 2015)** is a recurring prelims and mains topic — know the constitutional basis (Article 19(1)(a)) and the reasoning.
- **Section 66F (cyber terrorism)** — punishment extends to life imprisonment; this is the most serious IT Act offence.
- **CERT-In's 6-hour mandatory reporting rule** (2022) is a current affairs favourite. Contrast with EU GDPR's 72 hours.
- **Budapest Convention** — India not a signatory; know why, and the alternative (UN cybercrime convention).
- For Mains: Structure answers on cybercrime threats using the three-tier framework (individuals/organisations/state). Discuss the tension between encryption/privacy and law enforcement access.
- **I4C vs CERT-In** — a common confusion: CERT-In is under MeitY (technical response), I4C is under MHA (law enforcement coordination). Cybercrime.gov.in and helpline 1930 are I4C products.
- Do not confuse **Section 69A** (website blocking) with **Section 69** (interception/monitoring) — they are different powers.

---

## Previous Year Questions (PYQs)

### Prelims

- (2015) With reference to 'ICoT' (India Code of Practice in Telecommunications), what is correct? (tests knowledge of IT governance bodies)
- (2020) CERT-In is associated with which ministry? (MeitY)
- (2021) Consider the following statements about the Information Technology Act, 2000 and identify correct ones (recurring format — sections 66A, 66F tested)
- (2018) Which body is the nodal agency for cyber security in India? (CERT-In)

### Mains

- (2020, GS3) Analyse the challenges India faces in dealing with cybercrime. What institutional and legal reforms are needed? (15 marks)
- (2018, GS3) "The cyber domain has blurred the traditional distinction between war and peace." Discuss in the context of state-sponsored cyber attacks. (15 marks)
- (2022, GS3) Examine the provisions of the IT Act 2000 dealing with cyber terrorism and assess their adequacy in the current digital threat environment. (15 marks)
- (2023, GS3) Discuss the significance of India not joining the Budapest Convention and the implications for cross-border cybercrime investigation.
