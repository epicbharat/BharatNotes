---
layout: topic.njk
title: "Emerging Technologies in Security — AI Surveillance, Facial Recognition & Cyber Warfare"
subject: security
gs_papers:
  - gs3
syllabus_topic: "Internal Security"
description: "UPSC notes on emerging technology threats and tools in internal security — AI-based surveillance, facial recognition controversy, deepfakes, autonomous weapons, cyber warfare, and regulatory gaps."
sub_chapter: 18
chapter: 18
parent_topic: "Internal Security"
parent_topic_url: "/subjects/security/internal-security/"
date: 2026-03-29
foundation: false
prelims: true
mains: true
tags:
  - security
---

Emerging technologies are transforming the landscape of internal security in a dual sense: they provide powerful tools for surveillance, crime detection, and counterterrorism, while simultaneously creating new threat vectors through cyber warfare, deepfakes, and autonomous weapons. For UPSC aspirants, this intersection of technology and security is an increasingly examined theme in GS3, demanding both factual familiarity with systems like CCTNS and NCIIPC, and the analytical ability to weigh civil liberties against security imperatives.

---

## AI-Based Surveillance Infrastructure in India

### Crime and Criminal Tracking Network & Systems (CCTNS)

**CCTNS** is the Ministry of Home Affairs' flagship initiative for digitising police station records and creating an integrated database of criminal information across approximately **15,000 police stations** nationally. Managed by the National Crime Records Bureau (NCRB), CCTNS enables:

- Digital FIR registration and management
- Criminal records search across state boundaries
- Integration with courts and prisons (the broader Integrated Criminal Justice System — ICJS)
- Data analytics for crime pattern detection

The **National Automated Fingerprint Identification System (NAFIS)** functions as the biometric backbone, enabling fingerprint matching against criminal databases. States like Maharashtra have developed the **Automated Multi-modal Biometric Identification System (AMBIS)**, integrating CCTNS with facial recognition, fingerprint, and iris databases.

### Facial Recognition Technology (FRT) — Deployment and Controversy

India has witnessed rapid and largely unregulated deployment of Facial Recognition Technology:

| System | State / Agency | Purpose |
|--------|---------------|---------|
| AFRS (Automated Facial Recognition System) | Delhi Police | Identifying missing persons, criminals |
| FaceTagr | Tamil Nadu Police | Real-time surveillance |
| Punjab Artificial Intelligence System (PAIS) | Punjab Police | Crime prevention |
| TSCOP + CCTNS | Telangana | Integrated policing |
| AMBIS | Maharashtra | Multi-modal biometric identification |

**Delhi Police's use of FRT in protests** has drawn significant civil liberties concern — the system was deployed to identify individuals from footage of public demonstrations, raising questions about chilling effects on lawful assembly.

**Digi Yatra** (Ministry of Civil Aviation) uses FRT for paperless airport boarding — passengers are verified at check-in, security, and boarding gates using facial biometrics. However, a January 2024 survey found **29% of passengers were enrolled without their knowledge**, with airport staff allegedly capturing face data non-consensually. The Civil Aviation Minister confirmed in December 2024 that the system is voluntary, but critics note that the near-universal deployment at terminal gates at IGI Airport (Delhi) and Kempegowda Airport (Bengaluru) makes opting out operationally difficult.

### Civil Liberties vs Security Debate

The **Puttaswamy judgment (2017)** — *Justice K.S. Puttaswamy vs Union of India* — established **privacy as a fundamental right** under Article 21. This creates a constitutional constraint on mass surveillance. Key concerns include:

- Facial recognition systems have higher **error rates for people of colour and women**, risking wrongful identification
- Absence of a dedicated **legal framework** regulating FRT use by police
- Data stored with private entities (Digi Yatra Foundation) is not subject to RTI
- The **Digital Personal Data Protection (DPDP) Act, 2023** creates a framework for data protection but its application to state surveillance remains contested

---

## Deepfakes as an Emerging Security Threat

**Deepfakes** — synthetic audio-visual content generated using AI (typically Generative Adversarial Networks / GANs) — pose novel threats:

- **Election manipulation**: Fake videos of political leaders making inflammatory statements can be rapidly disseminated before fact-checking. India's 2024 General Election saw documented cases of deepfake campaign content.
- **Disinformation in conflict zones**: Fabricated footage of security incidents can incite communal violence.
- **Identity fraud**: Deepfake voice and video can bypass KYC systems and enable financial crime.
- **Reputational attacks**: Deepfakes targeting public officials, journalists, or activists.

Regulatory response remains nascent. The IT (Intermediary Guidelines) Amendment Rules require platforms to act on deepfake takedown requests, but proactive detection obligations are limited.

---

## Lethal Autonomous Weapons Systems (LAWS)

**LAWS** (also called "killer robots") are weapon systems that can independently identify and engage targets without meaningful human control. Key developments:

- **UN GGE (Group of Governmental Experts)** under the Convention on Certain Conventional Weapons (CCW) has discussed LAWS since 2014.
- In **December 2024**, the UN General Assembly adopted a resolution on LAWS with **166 votes in favour, 3 opposed** (Belarus, DPRK, Russia), and 15 abstentions. India voted in favour.
- The UN Secretary-General and the International Committee of the Red Cross have called for a legally binding treaty by 2026.

**India's position** on LAWS has evolved: India historically preferred the GGE forum and opposed premature binding instruments, recognising that autonomous precision systems reduce human error. However, India supported the December 2024 UNGA resolution, signalling movement toward multilateral regulation.

The ethical core of the LAWS debate is **meaningful human control**: international humanitarian law (IHL) requires distinction between combatants and civilians, proportionality, and accountability — requirements that autonomous systems may be unable to satisfy.

---

## AI in Counterterrorism and Intelligence

Artificial intelligence is increasingly integrated into counterterrorism:

- **Pattern recognition**: Analysing bulk communications metadata to identify networks of interest
- **Social media monitoring**: NLP-based tools to detect radicalisation indicators in online content
- **Predictive policing**: Algorithms that forecast crime hotspots or identify individuals at risk of criminal activity — widely used in the US, being piloted in Indian cities, and controversial for encoding existing biases
- **Image and video analytics**: Automated processing of CCTV footage, drone imagery, and satellite data for border surveillance

Predictive policing raises concerns about **pre-crime surveillance** — targeting individuals not for acts committed but for statistically predicted behaviour, disproportionately affecting marginalised communities.

---

## Cyber Warfare: State-Sponsored Threats to India

### APT Groups Targeting India

India has been a persistent target of **Advanced Persistent Threat (APT) groups**, particularly state-linked actors:

- **APT36** (Pakistan-linked, also called Transparent Tribe): Targets Indian defence, government, and educational institutions using spear-phishing and malware campaigns.
- **Chinese cyber actors**: Have targeted Indian government networks, particularly following border tensions. The 2020 border standoff correlated with increased cyber intrusion attempts against Indian power grid infrastructure.

### Critical Infrastructure Vulnerabilities

The **2020 Mumbai power outage** (October 12, 2020) was investigated by Maharashtra Cyber and linked by cybersecurity researchers at Recorded Future to possible Chinese APT activity targeting **SCADA systems** (Supervisory Control and Data Acquisition) at power distribution centres. The government did not formally attribute the incident.

Sectors at risk:
- **Power grid** (SCADA systems)
- **Banking and financial systems** (SWIFT network, core banking)
- **Telecom infrastructure**
- **Defence and space systems**

---

## Institutional Framework for Cyber Security

### NCIIPC (National Critical Information Infrastructure Protection Centre)

Established under **Section 70A of the IT Act**, NCIIPC is the national nodal agency for protecting **Critical Information Infrastructure (CII)**. It:
- Provides threat intelligence, alerts, and advisories to critical sector entities
- Works with sector-specific Computer Security Incident Response Teams (CSIRTs) established in finance, telecom, and power sectors
- Released the **National Cyber Security Reference Framework (NCRF 2024)** — guidelines shared with over 100 critical sector entities

### CERT-In

The **Indian Computer Emergency Response Team (CERT-In)** under the Ministry of Electronics and IT handles incident reporting, security audits, and advisories. CERT-In conducted over **9,700 cybersecurity audits** in 2024-25 through 200 empanelled cybersecurity organisations.

### National Cyber Security Strategy

India's **National Cyber Security Strategy** (NCSS) has been under development; the NCRF 2024 provides an interim framework while the comprehensive strategy is being finalised. The absence of a published NCSS — unlike the US, UK, and Australia — is considered a **governance gap** in India's cyber defence architecture.

---

## Balancing Surveillance with Privacy: The Regulatory Gap

The central challenge for India's security-technology interface is the **absence of a comprehensive surveillance law**. Current legal instruments (IT Act 2000, Telegraph Act 1885 for interception) predate the AI surveillance era. The DPDP Act 2023 provides data protection rights but contains **state security exemptions** that critics argue could be used to exempt surveillance operations from oversight.

Key reform recommendations:
1. **Dedicated FRT regulation** with mandatory accuracy standards, non-consensual use prohibition, and judicial oversight for law enforcement use
2. **Surveillance reform legislation** with parliamentary oversight mechanisms
3. **Data localisation and retention limits** for biometric databases
4. **Algorithmic accountability** requirements for predictive policing tools
5. **LAWS policy**: Formalise India's position in support of multilateral regulation ensuring meaningful human control

The security-privacy balance is not a zero-sum tradeoff — well-designed legal frameworks with judicial oversight can enable effective surveillance while protecting constitutional rights. The Puttaswamy proportionality test (legality, legitimate aim, proportionality, procedural safeguard) provides the constitutional benchmark against which all surveillance tools must be evaluated.

---

## Key Terms

| Term | Meaning |
|------|---------|
| **CCTNS** | Crime and Criminal Tracking Network & Systems — national police digitisation project |
| **NAFIS** | National Automated Fingerprint Identification System |
| **AFRS** | Automated Facial Recognition System (Delhi Police) |
| **LAWS** | Lethal Autonomous Weapons Systems |
| **APT** | Advanced Persistent Threat — a sophisticated, prolonged cyber attack, often state-sponsored |
| **SCADA** | Supervisory Control and Data Acquisition — industrial control systems for critical infrastructure |
| **NCIIPC** | National Critical Information Infrastructure Protection Centre |
| **CERT-In** | Indian Computer Emergency Response Team |
| **GAN** | Generative Adversarial Network — AI architecture used to create deepfakes |
| **GGE** | Group of Governmental Experts — UN expert body discussing LAWS |
| **NCRF** | National Cyber Security Reference Framework (2024) |
