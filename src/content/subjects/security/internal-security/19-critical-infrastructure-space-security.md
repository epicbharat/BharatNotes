---
layout: topic.njk
title: "Critical Infrastructure Protection & Space Security — NCIIPC, ASAT & Emerging Threats"
subject: security
gs_papers:
  - gs3
syllabus_topic: "Internal Security"
parent_topic: "Internal Security"
parent_topic_url: "/subjects/security/internal-security/"
description: "UPSC notes on critical infrastructure protection — NCIIPC, sectors, cyber-physical threats, space security (ASAT, space debris, Outer Space Treaty), and emerging security domains."
sub_chapter: 14
chapter: 14
date: 2026-03-29
foundation: true
prelims: true
mains: true
tags:
  - security
  - sub-topic
---

## Overview

Critical infrastructure -- the systems and assets so vital that their incapacitation would have a debilitating impact on national security, economy, public health, or safety -- has become a primary target in modern security threats. Cyber attacks on power grids, ransomware on hospitals, and satellite jamming represent a new frontier where traditional kinetic warfare converges with digital and space-based threats.

India's critical infrastructure spans **power, telecom, banking, transport, defence, space, and water systems**. The **National Critical Information Infrastructure Protection Centre (NCIIPC)**, established under **Section 70A of the Information Technology Act, 2000**, is the nodal agency for protecting these assets. The alleged **RedEcho cyber intrusion** targeting India's power grid infrastructure in 2020 demonstrated the severity of this threat.

**Space security** has emerged as a contested domain. India's successful **ASAT test (Mission Shakti, 27 March 2019)** demonstrated its capability to defend space assets, while the establishment of the **Defence Space Agency** in 2019 signals India's recognition of space as a warfighting domain. Simultaneously, undersea cable vulnerabilities, drone threats, and electromagnetic pulse (EMP) risks represent emerging security challenges that transcend traditional categories.

---

## Critical Infrastructure -- Definition and Sectors

### Definition

| Framework | Definition |
|-----------|-----------|
| **IT Act, 2000 (Section 70)** | Critical Information Infrastructure (CII) means "those computer resources, the incapacitation or destruction of which, shall have debilitating impact on national security, economy, public health or safety" |
| **NCIIPC** | CII includes ICT resources that support critical sectors; their disruption can cascade across interconnected systems |
| **Global perspective** | Most countries define critical infrastructure to include physical and cyber assets essential for societal functioning |

### Critical Sectors in India

| Sector | Examples of Critical Assets |
|--------|---------------------------|
| **Power and Energy** | Power generation plants (thermal, nuclear, hydro), transmission grids, Regional Load Despatch Centres (RLDCs), oil and gas pipelines |
| **Telecom** | Telecom networks, internet backbone, submarine cable landing stations, data centres |
| **Banking and Financial Services** | Core banking systems, payment gateways (UPI, NEFT, RTGS), stock exchanges, insurance networks |
| **Transport** | Railways signalling systems, air traffic control, port management, highway toll systems |
| **Defence** | Military communication networks, command and control systems, defence manufacturing systems |
| **Space** | ISRO ground stations, satellite communication systems, GPS/NavIC infrastructure |
| **Water** | Water treatment plants, dam control systems, irrigation networks with SCADA systems |
| **Government** | e-Governance platforms, Aadhaar/UIDAI systems, DigiLocker, tax administration |
| **Healthcare** | Hospital management systems, medical device networks, telemedicine infrastructure |

---

## NCIIPC -- National Critical Information Infrastructure Protection Centre

| Feature | Detail |
|---------|--------|
| **Established** | Gazette notification dated **16 January 2014** |
| **Legal basis** | **Section 70A of the Information Technology Act, 2000** (amended 2008) |
| **Nature** | A unit of the **National Technical Research Organisation (NTRO)** |
| **Reports to** | Prime Minister's Office (PMO) through NTRO |
| **Role** | Designated as the **National Nodal Agency** for Critical Information Infrastructure Protection |
| **Mandate** | Identify CII, direct protective measures, oversee compliance, coordinate national-level incident response |
| **Operations** | Maintains a **24x7 Help Desk** for incident reporting; issues advisories and alerts |
| **Coordination** | Works closely with **CERT-In** (Indian Computer Emergency Response Team) and sector-specific CERTs |

### NCIIPC Functions

| Function | Detail |
|----------|--------|
| **CII identification** | Identifies and designates critical information infrastructure across sectors in consultation with sector regulators |
| **Threat intelligence** | Monitors cyber threats targeting CII; shares intelligence with relevant stakeholders |
| **Vulnerability assessment** | Conducts audits and assessments of CII systems |
| **Incident response** | Coordinates response to cyber incidents affecting CII in collaboration with CERT-In |
| **Capacity building** | Conducts training programmes, workshops, and cyber exercises for CII operators |
| **Standards and guidelines** | Issues guidelines for protection of CII; mandates security practices |

### Related Cyber Security Bodies

| Body | Role |
|------|------|
| **CERT-In** | Indian Computer Emergency Response Team -- nodal agency for cyber security incident response (under MeitY) |
| **NCIIPC** | Specifically for Critical Information Infrastructure protection (under NTRO/PMO) |
| **Defence Cyber Agency** | Tri-service agency for military cyber operations |
| **I4C** | Indian Cyber Crime Coordination Centre (under MHA) -- coordinates cyber crime investigation |
| **Sector CERTs** | Sector-specific teams -- e.g., CERT-Fin (financial), RBI-CERT (banking) |

> **For Prelims:** NCIIPC established 16 January 2014 under Section 70A of IT Act 2000; a unit of NTRO under PMO; nodal agency for CII protection. CERT-In is the nodal agency for general cyber security incident response under MeitY. CII defined as computer resources whose incapacitation would have debilitating impact on national security, economy, public health, or safety.

---

## Threats to Critical Infrastructure

### Cyber Attacks

| Threat Type | Detail |
|-------------|--------|
| **State-sponsored attacks** | Nation-state actors targeting power grids, defence systems, and financial infrastructure for espionage, disruption, or coercion |
| **Ransomware** | Malware that encrypts systems and demands payment; AIIMS Delhi ransomware attack (November 2022) affected hospital operations for weeks |
| **Supply chain attacks** | Compromise of hardware or software supply chains to insert backdoors into critical systems |
| **APT (Advanced Persistent Threats)** | Long-term, stealthy intrusions into networks for espionage or pre-positioning for future attacks |

### Mumbai Power Grid Incident (2020)

| Feature | Detail |
|---------|--------|
| **Date** | **12 October 2020** |
| **Event** | Massive power outage across Mumbai lasting over 10 hours; hospitals switched to generators, trains halted, stock exchange disrupted |
| **Attribution** | Cybersecurity firm Recorded Future identified a China-linked threat group **RedEcho** as having planted malware in Indian power sector systems |
| **Targets identified** | At least 10 Indian power sector companies and 2 seaports; **4 of 5 Regional Load Despatch Centres** targeted |
| **Dispute** | Maharashtra's Energy Minister confirmed cyber attack; Central government attributed the outage to human error -- attribution remains contested |
| **Significance** | Demonstrated the vulnerability of India's power grid to state-sponsored cyber intrusions; highlighted the cyber-physical convergence threat |

### Other Threats

| Threat | Detail |
|--------|--------|
| **Insider threats** | Employees or contractors with access to critical systems who misuse access -- intentionally or through negligence |
| **Physical-cyber convergence** | SCADA/ICS (Industrial Control Systems) controlling physical infrastructure (dams, power plants, water treatment) are increasingly connected to networks, creating cyber-physical attack vectors |
| **Drone threats** | Drones used for surveillance, payload delivery (explosives), or disruption of airports and military installations |
| **EMP (Electromagnetic Pulse)** | Nuclear or non-nuclear EMP devices can disable electronic systems across large areas; a catastrophic threat to all networked infrastructure |

---

## Protection Framework

| Measure | Detail |
|---------|--------|
| **Air-gapped networks** | Critical systems isolated from the internet to prevent remote cyber attacks -- used in defence and nuclear infrastructure |
| **Redundancy** | Backup systems and alternative pathways to ensure continuity if primary systems are compromised |
| **Zero Trust Architecture** | Security model that assumes no user or system is trusted by default -- continuous verification required |
| **Security audits** | Regular vulnerability assessments and penetration testing of critical systems mandated by NCIIPC |
| **Incident response plans** | Pre-defined response protocols for cyber incidents affecting CII |
| **Cyber exercises** | NCIIPC and CERT-In conduct regular cyber drills simulating attacks on critical infrastructure |
| **Sector-specific regulations** | RBI cyber security framework for banks; SEBI guidelines for stock exchanges; TRAI security regulations for telecom |

---

## Space Security

### Space as a Contested Domain

| Feature | Detail |
|---------|--------|
| **Dependence on space** | Modern military operations, communications, navigation (GPS/NavIC), weather forecasting, and surveillance depend heavily on space-based assets |
| **Contested domain** | Space is no longer a sanctuary -- ASAT weapons, satellite jamming, and cyber attacks on ground stations threaten space assets |
| **Space powers** | USA, Russia, China, and **India** have demonstrated ASAT capabilities |
| **Militarisation vs weaponisation** | Militarisation (use of space for military support -- satellite reconnaissance, communication) is widespread; weaponisation (placing weapons in space or using weapons against space assets) is the emerging concern |

### Mission Shakti -- India's ASAT Test (27 March 2019)

| Feature | Detail |
|---------|--------|
| **Date** | **27 March 2019** |
| **Code name** | Mission Shakti |
| **Target** | **Microsat-R** -- a 740 kg satellite launched by ISRO on 24 January 2019 specifically to serve as the target |
| **Altitude** | Target struck at approximately **283 km** in Low Earth Orbit (LEO) |
| **Weapon** | Modified **PDV Mk-II** (ballistic missile defence interceptor) |
| **Launch site** | Integrated Test Range (ITR), Abdul Kalam Island (Wheeler Island), Odisha |
| **Interception time** | Target hit **168 seconds** after launch |
| **Significance** | India became the **4th country** (after USA, Russia, China) to successfully test an ASAT weapon |
| **Space debris** | Conducted at low altitude to ensure debris decayed rapidly; India argued minimal long-term debris generation |
| **Announced by** | Prime Minister Narendra Modi in a national address |

> **For Prelims:** Mission Shakti -- 27 March 2019; target Microsat-R at 283 km altitude; weapon PDV Mk-II; India became 4th country with ASAT capability (after USA, Russia, China); launched from Abdul Kalam Island (ITR), Odisha.

---

### Defence Space Agency (DSA)

| Feature | Detail |
|---------|--------|
| **Established** | **1 June 2019** |
| **Nature** | Tri-service agency of the Indian Armed Forces |
| **Headquarters** | **Bengaluru** |
| **Composition** | Military personnel from Army, Navy, and Air Force |
| **Mandate** | Protect Indian interests in outer space; develop space warfare strategy; deal with potential space conflicts |
| **Functions** | Space situational awareness, satellite operations for defence, space-based ISR (Intelligence, Surveillance, Reconnaissance), counter-space operations |

---

### Outer Space Treaty, 1967

| Feature | Detail |
|---------|--------|
| **Full name** | Treaty on Principles Governing the Activities of States in the Exploration and Use of Outer Space, including the Moon and Other Celestial Bodies |
| **Adopted** | 1967; entered into force **10 October 1967** |
| **Key provisions** | (1) Space exploration is free for all nations; (2) No country can claim sovereignty over outer space or celestial bodies; (3) **Nuclear weapons and WMDs prohibited** in space; (4) Moon and celestial bodies used for **peaceful purposes only**; (5) States liable for damage caused by space objects |
| **India** | Signed **March 1967**; ratified **1982** |
| **Limitation** | Does not ban conventional weapons in space or ASAT tests -- this is the legal gap that allows ASAT weapons |
| **Other space treaties** | India has signed all 5 UN space treaties; ratified 4 (not ratified the Moon Agreement, 1979) |

---

### Space Threats

| Threat | Detail |
|--------|--------|
| **ASAT weapons** | Kinetic kill vehicles (as tested by India, China, USA, Russia) that physically destroy satellites |
| **Satellite jamming** | Disrupting satellite signals (GPS, communication) through electronic interference |
| **Satellite spoofing** | Sending false signals to deceive GPS or communication receivers -- can misdirect navigation systems |
| **Cyber attacks on ground stations** | Hacking satellite control centres to commandeer or disable satellites |
| **Space debris** | Debris from ASAT tests and collisions threatens all operational satellites -- Kessler Syndrome (cascading collisions) is a long-term concern |
| **GPS dependency** | India's armed forces, aviation, shipping, and civilian navigation depend on GPS (USA) -- vulnerability if signals are jammed or spoofed; NavIC provides Indian alternative |

### India's Space Situational Awareness

| Feature | Detail |
|---------|--------|
| **Network for Space Objects Tracking and Analysis (NETRA)** | ISRO project for monitoring space debris and protecting Indian space assets |
| **ISTRAC** | ISRO Telemetry, Tracking and Command Network -- tracks Indian satellites |
| **NavIC** | Indian Regional Navigation Satellite System -- India's indigenous alternative to GPS; 7 satellites providing navigation coverage over India and surrounding region |
| **Significance** | Reduces dependence on foreign navigation systems; ensures continuity during conflict |

---

## International Space Governance and India's Position

### Key International Frameworks

| Framework | Detail |
|-----------|--------|
| **Outer Space Treaty (1967)** | Foundation treaty; prohibits WMDs in space; India ratified 1982 |
| **Rescue Agreement (1968)** | Mandates rescue and return of astronauts; return of space objects; India ratified |
| **Liability Convention (1972)** | Establishes liability for damage caused by space objects; launching state absolutely liable for ground damage; India ratified |
| **Registration Convention (1976)** | Requires registration of space objects with the UN; India ratified |
| **Moon Agreement (1979)** | Declares Moon and its resources as "common heritage of mankind"; India has **not ratified** (like most space powers) |

### India's Position on Space Governance

| Feature | Detail |
|---------|--------|
| **No First Placement** | India supports the principle of no first placement of weapons in outer space |
| **PAROS** | India supports the Prevention of an Arms Race in Outer Space (PAROS) resolution at the UN |
| **Artemis Accords** | India signed the Artemis Accords in June 2023 -- US-led framework for cooperative lunar exploration |
| **Space debris mitigation** | India follows IADC Space Debris Mitigation Guidelines; Mission Shakti conducted at low altitude to minimise debris |
| **Indian Space Policy 2023** | Liberalised space sector; IN-SPACe as regulatory body; encourages private sector participation |

---

## Undersea Cable Vulnerability

| Feature | Detail |
|---------|--------|
| **Scale** | Over **95% of international data traffic** passes through undersea fibre optic cables |
| **India's dependence** | India's internet connectivity, financial transactions, and communications heavily depend on submarine cables landing at Chennai, Mumbai, and Kochi |
| **Threats** | Sabotage (state or non-state actors cutting cables), natural damage (earthquakes, anchors, trawlers), and espionage (tapping cable traffic) |
| **Examples** | Multiple cable cuts have disrupted internet in regions worldwide; the Red Sea cable damage (2024) affected India-Europe connectivity |
| **Protection** | Cable landing stations are designated as critical infrastructure; monitoring through NCIIPC; redundancy through multiple cable routes |

---

## Drone Threats to Critical Infrastructure

| Feature | Detail |
|---------|--------|
| **Emerging threat** | Drones (UAVs) used for surveillance, payload delivery (explosives, contraband), and disruption of sensitive installations |
| **India-specific** | Drone-based attacks on Jammu Air Force Station (June 2021) -- first such attack on a military installation in India |
| **Airport disruption** | Drone sightings near airports cause shutdowns -- Gatwick (UK, 2018) demonstrated the economic impact |
| **Critical infrastructure** | Power plants, refineries, military bases, nuclear installations, and ports all vulnerable |
| **Counter-drone measures** | Anti-drone systems (detection radar, jamming, directed energy), drone regulations (DGCA), and no-drone zones around critical infrastructure |

---

## Key Terms for Quick Revision

| Term | Meaning |
|------|---------|
| **CII** | Critical Information Infrastructure -- IT Act definition: computer resources whose incapacitation has debilitating impact on national security/economy/safety |
| **NCIIPC** | National Critical Information Infrastructure Protection Centre -- under NTRO/PMO; Section 70A IT Act; established 16 January 2014 |
| **CERT-In** | Indian Computer Emergency Response Team -- nodal agency for cyber security under MeitY |
| **RedEcho** | China-linked threat group attributed with targeting India's power grid infrastructure (2020) |
| **Mission Shakti** | India's ASAT test -- 27 March 2019; target Microsat-R at 283 km; PDV Mk-II; India 4th ASAT nation |
| **DSA** | Defence Space Agency -- tri-service; established 1 June 2019; HQ Bengaluru |
| **Outer Space Treaty** | 1967; prohibits WMDs in space; peaceful use of celestial bodies; India signed 1967, ratified 1982 |
| **NavIC** | Indian Regional Navigation Satellite System -- indigenous GPS alternative; 7 satellites |
| **NETRA** | ISRO project for space situational awareness and debris tracking |
| **Kessler Syndrome** | Cascading collisions in orbit creating ever-more debris -- makes space increasingly unusable |
| **SCADA** | Supervisory Control and Data Acquisition -- systems controlling physical infrastructure (power, water, dams) |
| **EMP** | Electromagnetic Pulse -- can disable electronic systems across large areas |

---

## Exam Strategy

> **For Mains Answer Writing:** Critical infrastructure and space security questions require you to demonstrate understanding of the convergence of cyber and physical threats. For CII protection, discuss the NCIIPC framework, the Mumbai 2020 power grid incident as a case study, and the need for public-private partnership (most critical infrastructure is privately operated). For space security, trace India's journey: Mission Shakti (2019) to DSA (2019) to the broader space threat landscape. Discuss the gap in the Outer Space Treaty (no ban on conventional weapons/ASAT) and the need for a new space governance framework. Connect emerging threats -- drones, undersea cables, EMP -- to the evolving nature of warfare.

> **For Prelims:** NCIIPC (Section 70A IT Act, under NTRO/PMO, established 2014); CERT-In (under MeitY); Mission Shakti (27 March 2019, Microsat-R, 283 km, PDV Mk-II, 4th ASAT nation); DSA (1 June 2019, Bengaluru, tri-service); Outer Space Treaty 1967 (prohibits WMDs in space, India ratified 1982); NavIC (7 satellites, Indian GPS alternative); CII definition (IT Act Section 70); Jammu Air Force drone attack (June 2021).

---

## Vocabulary

### Kinetic Kill Vehicle
- **Pronunciation:** /kɪˈnɛtɪk kɪl ˈviːɪkl/
- **Definition:** A projectile that destroys its target purely through the force of impact at extremely high velocity, without using any explosive warhead -- the kinetic energy of the collision is sufficient to obliterate the target. Used in ASAT weapons and ballistic missile defence systems.
- **Origin:** From Greek *kinetikos* ("of or for putting in motion") + English *kill* + *vehicle*; the concept emerged in Cold War ballistic missile defence research (1960s-70s); operationalised in modern ASAT and missile defence systems.

### Critical Infrastructure
- **Pronunciation:** /ˈkrɪtɪkl ˈɪnfrəstrʌktʃə/
- **Definition:** The physical and cyber systems, assets, and networks so essential to a nation that their incapacitation or destruction would have a debilitating effect on national security, economic stability, public health, or public safety -- includes power grids, telecom networks, financial systems, water supply, transport, and defence installations.
- **Origin:** The term gained prominence in the United States after Presidential Decision Directive 63 (PDD-63) issued by President Clinton in 1998 on Critical Infrastructure Protection; *critical* from Latin *criticus* ("decisive, crucial") + *infrastructure* from French *infra-* ("below") + *structure* ("building").

---

*Sources: NCIIPC (nciipc.gov.in), CERT-In (cert-in.org.in), PIB (pib.gov.in), ISRO (isro.gov.in), Ministry of Defence, Recorded Future — RedEcho Report (recordedfuture.com), UNOOSA — Outer Space Treaty (unoosa.org), DGCA — Drone Regulations, IT Act 2000 (indiacode.nic.in)*
