---
layout: topic.njk
title: "Quantum Computing & Telecommunications — 5G, 6G, Quantum Supremacy & Digital India"
subject: science-tech
parent_topic: "Science & Technology"
parent_topic_url: /subjects/science-tech/science-technology/
sub_chapter: 8
gs_papers: [gs3]
syllabus_topic: "Science & Technology"
description: "UPSC notes on quantum computing and telecommunications — qubits, quantum supremacy, 5G rollout, 6G vision, spectrum allocation, BharatNet, digital infrastructure."
date: 2026-03-28
foundation: true
prelims: true
mains: true
tags: [science-tech, sub-topic]
---

## Quantum Computing — Fundamentals

Quantum computing harnesses the principles of **quantum mechanics** to process information in fundamentally different ways from classical computers. While classical computers use bits (0 or 1), quantum computers use **qubits** that can exist in superposition of both states simultaneously.

### Key Quantum Concepts

| Concept | Explanation |
|---------|------------|
| **Qubit** | Quantum bit — the basic unit of quantum information; can be 0, 1, or a superposition of both |
| **Superposition** | A qubit exists in multiple states simultaneously until measured; enables parallel computation |
| **Entanglement** | Two qubits become correlated such that the state of one instantly determines the state of the other, regardless of distance (Einstein called it "spooky action at a distance") |
| **Quantum interference** | Probability amplitudes of qubits can constructively or destructively interfere, used to amplify correct answers and cancel wrong ones |
| **Decoherence** | Loss of quantum properties due to environmental interaction — the main challenge in building stable quantum computers |
| **Quantum gate** | Operations that manipulate qubits (analogous to logic gates in classical computers) — e.g., Hadamard gate, CNOT gate |

> **For Prelims:** A qubit differs from a classical bit because it can exist in superposition. Entanglement is a uniquely quantum phenomenon with no classical analogue. These two properties together give quantum computers their exponential advantage for specific problems.

### Types of Quantum Computing Platforms

| Platform | How It Works | Key Players |
|----------|-------------|------------|
| **Superconducting qubits** | Tiny circuits cooled to near absolute zero (~15 millikelvin); electrical currents flow in superposition | Google (Sycamore, Willow), IBM (Eagle, Heron) |
| **Trapped ion** | Individual ions held in electromagnetic traps; qubit states are energy levels of the ion | IonQ, Quantinuum (Honeywell) |
| **Photonic** | Qubits encoded in photons (particles of light); operate at room temperature | Xanadu, PsiQuantum |
| **Topological** | Uses exotic quasiparticles called anyons for inherently error-resistant qubits | Microsoft (Majorana chip, 2025) |
| **Neutral atom** | Individual atoms held by laser tweezers; scalable architecture | Atom Computing, QuEra |

---

## Quantum Supremacy and Key Milestones

**Quantum supremacy** (also called "quantum advantage") refers to the point where a quantum computer performs a specific task that is practically impossible for any classical computer.

### Google Sycamore (October 2019)

| Feature | Detail |
|---------|--------|
| **Processor** | Sycamore — 54-qubit design (53 functional qubits + 86 couplers) |
| **Qubit type** | Transmon superconducting qubits at 5-7 GHz |
| **Task** | Random Circuit Sampling (RCS) — sampling output of a random quantum circuit |
| **Result** | Completed in **200 seconds** what Google estimated would take the world's fastest supercomputer **~10,000 years** |
| **Published** | *Nature*, 23 October 2019 |
| **Controversy** | IBM argued its classical supercomputer could do the task in 2.5 days, not 10,000 years; Chinese researchers later also challenged the claim |

### Google Willow (December 2024)

| Feature | Detail |
|---------|--------|
| **Processor** | Willow — **105-qubit** superconducting chip |
| **Breakthrough** | First demonstration of quantum error correction **below the threshold** — a 30-year-old challenge finally solved |
| **Error correction** | Tested 3x3, 5x5, and 7x7 grids of encoded qubits; each increase in size **halved the error rate** (error suppression factor of 2.14) |
| **Performance** | Completed an RCS computation in under 5 minutes that would take the fastest supercomputer **10 septillion years** (10^25 years) |
| **Significance** | Proves that scaling up qubits can actually reduce errors, making large-scale quantum computing feasible |

> **For Mains:** The progression from Sycamore (2019) to Willow (2024) demonstrates that quantum computing is moving from proof-of-concept to practical error correction. Discuss how this impacts India's quantum strategy and the urgency of the National Quantum Mission.

### Other Global Milestones

| Milestone | Year | Detail |
|-----------|------|--------|
| **IBM Eagle** | 2021 | 127-qubit processor |
| **IBM Osprey** | 2022 | 433-qubit processor |
| **IBM Condor** | 2023 | 1,121-qubit processor |
| **IBM Heron** | 2023 | 133-qubit processor optimised for error mitigation |
| **Microsoft Majorana 1** | 2025 | First topological qubit chip — potentially more stable |
| **China — Jiuzhang** | 2020 | Photonic quantum computer; claimed supremacy for boson sampling |
| **China — Zuchongzhi** | 2021 | 66-qubit superconducting processor |

---

## India's National Quantum Mission (NQM)

The Union Cabinet approved the **National Quantum Mission** on **19 April 2023** at a total cost of **Rs 6,003.65 crore** for the period 2023-24 to 2030-31.

| Feature | Detail |
|---------|--------|
| **Approved** | 19 April 2023 by Union Cabinet |
| **Cost** | Rs 6,003.65 crore (~USD 730 million) over 8 years |
| **Nodal ministry** | Department of Science & Technology (DST) |
| **Objective** | Seed, nurture, and scale up R&D; create a vibrant quantum technology ecosystem |
| **Global peers** | India joins the US, China, France, Finland, and Austria as the sixth nation with a dedicated quantum mission |

### Key Deliverables of NQM

| Deliverable | Timeline |
|------------|----------|
| Intermediate-scale quantum computers with **50-1000 physical qubits** | Within 8 years (by 2031) |
| Satellite-based secure quantum communications over **2,000 km** within India | By 2031 |
| Inter-city **Quantum Key Distribution (QKD)** network over 2,000 km | By 2031 |
| Multi-node quantum networks with quantum memories | By 2031 |
| Magnetometers with high sensitivity for precision timing, navigation, and communication | By 2031 |
| Development of quantum materials — superconductors, novel semiconductor structures | Ongoing |

### Thematic Hubs (T-Hubs)

Four Thematic Hubs will be established in top academic and research institutions focusing on:

1. **Quantum Computing** — building quantum processors and algorithms
2. **Quantum Communication** — QKD, quantum internet, satellite-based quantum links
3. **Quantum Sensing & Metrology** — ultra-precise measurements for defence and navigation
4. **Quantum Materials & Devices** — superconductors, topological materials, single-photon sources

> **Prelims Fact:** India's NQM was approved in April 2023 with an outlay of Rs 6,003.65 crore over 8 years. It aims to develop quantum computers with 50-1000 qubits and quantum communication over 2,000 km.

---

## Applications of Quantum Computing

| Application Area | How Quantum Computing Helps |
|-----------------|---------------------------|
| **Cryptography** | Quantum computers can break RSA/ECC encryption (Shor's algorithm); also enables quantum-safe encryption (post-quantum cryptography) and QKD |
| **Drug discovery** | Simulating molecular interactions to design drugs faster — potential to reduce drug development from decades to years |
| **Optimisation** | Logistics, supply chain, traffic management, financial portfolio optimisation — NP-hard problems where quantum algorithms offer speedup |
| **Materials science** | Designing new catalysts, superconductors, batteries at the molecular level |
| **Artificial intelligence** | Quantum machine learning algorithms for faster training of models |
| **Climate modelling** | More accurate simulation of complex climate systems |
| **Defence** | Secure communications, submarine detection via quantum sensors, missile trajectory optimisation |

> **For Mains:** Quantum computing threatens existing encryption standards (RSA-2048 could be broken by a sufficiently large quantum computer using Shor's algorithm). Discuss the implications for India's digital infrastructure, banking, and defence — and the need for post-quantum cryptography migration.

---

## Telecommunications — 5G in India

### 5G Technology Overview

| Feature | Detail |
|---------|--------|
| **Generation** | Fifth generation of mobile network technology |
| **Spectrum bands** | Low band (600-900 MHz), Mid band (3.3-3.67 GHz), High band/mmWave (26 GHz) |
| **Peak speed** | Up to 10 Gbps (theoretical); real-world 5-10x faster than 4G |
| **Latency** | 1-4 milliseconds (vs 30-50 ms for 4G) |
| **Key technologies** | Massive MIMO, beamforming, network slicing, small cells |
| **Deployment types** | Standalone (SA) — full 5G core; Non-Standalone (NSA) — 5G radio on 4G core |

### India's 5G Spectrum Auction (2022)

| Feature | Detail |
|---------|--------|
| **Date** | 26 July - 1 August 2022 |
| **Total bids** | **Rs 1,50,173 crore** (~USD 19 billion) — India's largest-ever spectrum auction |
| **Spectrum sold** | 51.2 GHz out of 72 GHz offered (~71%) |
| **Bands auctioned** | Low (600, 700, 800, 900, 1800, 2100, 2300, 2500 MHz), Mid (3300 MHz), High (26 GHz) |
| **Reliance Jio** | Largest spender — over Rs 88,000 crore; only bidder for 700 MHz band |
| **Bharti Airtel** | ~Rs 43,000 crore; acquired 26 GHz spectrum (19,800 MHz) |
| **Vodafone Idea** | ~Rs 18,800 crore |
| **Adani Data Networks** | ~Rs 212 crore (26 GHz for private networks) |

### 5G Rollout Status (as of 2025-26)

| Operator | Key Details |
|----------|------------|
| **Reliance Jio** | Standalone (SA) 5G from the start; ~210 million 5G subscribers; sole holder of 700 MHz band (superior indoor coverage); dominant in Fixed Wireless Access (FWA) with 10.2 million AirFiber subscribers |
| **Bharti Airtel** | Non-Standalone (NSA) initially, migrating to SA; ~153 million 5G subscribers; leads in 5G download speed benchmarks |
| **Vodafone Idea** | Launched 5G commercially in March 2025 starting with Mumbai; expanded to Delhi, Bengaluru, and other cities; burdened by Rs 45,000 crore AGR dues |
| **BSNL** | Completed trials on 3.6 GHz and 700 MHz; using indigenous 4G/5G tech stack; commercial 5G launch planned |

> **Key stat:** India's 5G coverage reached 7,000+ towns by mid-2025, with ~42% penetration for both Jio and Airtel. Industry capex grew from Rs 38,900 crore (2019-20) to Rs 59,300 crore (2024-25) for 4G/5G rollout.

### 5G Applications for India

| Application | UPSC Relevance |
|------------|---------------|
| **Smart agriculture** | IoT sensors for precision farming, soil monitoring, drone-based spraying |
| **Telemedicine** | Remote surgery, real-time diagnostics in rural areas — bridging healthcare divide |
| **Smart cities** | Traffic management, intelligent street lighting, waste management |
| **Industry 4.0** | Private 5G networks for factories, robotics, automated quality control |
| **Education** | AR/VR-based immersive learning; virtual labs for rural schools |
| **Disaster management** | Early warning systems, real-time communication during floods/earthquakes |

---

## 6G — India's Vision and Preparedness

### Bharat 6G Vision

| Feature | Detail |
|---------|--------|
| **Released** | 22 March 2023 by the Government of India |
| **Objective** | Position India as a frontline contributor in design, development, and deployment of 6G by **2030** |
| **Goal** | Make India a leading global supplier of intellectual property, products, and affordable telecom solutions |
| **Target year** | Full 6G deployment by 2030, aligned with Viksit Bharat 2047 |

### Bharat 6G Alliance (B6GA)

| Feature | Detail |
|---------|--------|
| **Launched** | 3 July 2023 by the Minister of Communications |
| **Nature** | Industry-led, government-facilitated collaborative platform |
| **Members** | Over 80 member organisations (as of July 2025) — companies, academia, research institutions, SDOs |
| **Working groups** | Seven groups covering Spectrum, Technology, Applications, Green & Sustainability, Use Cases, and more |
| **Testbeds** | 6G THz Testbed and Advanced Optical Communication Testbed funded by the government |

### International MoUs Signed by B6GA

| Partner | Country/Region |
|---------|---------------|
| NextG Alliance | USA |
| 6G IA | Europe |
| 6G Flagship, Oulu University | Finland |
| 6G Forum | South Korea |
| XGMF | Japan |
| NGMN Alliance | Global |
| European Space Agency (ESA) | Europe |
| 6G Brasil | Brazil |

### 6G Technology Features (Expected)

| Feature | 5G | 6G (Expected) |
|---------|----|----|
| **Peak speed** | 10 Gbps | 1 Tbps |
| **Latency** | 1 ms | Sub-0.1 ms (microsecond range) |
| **Spectrum** | Sub-6 GHz + mmWave (26/28 GHz) | THz bands (100 GHz - 10 THz) |
| **Key tech** | Massive MIMO, beamforming | AI-native networks, holographic MIMO, reconfigurable intelligent surfaces (RIS) |
| **Energy** | Moderate efficiency | Green by design — energy-harvesting networks |
| **Coverage** | Terrestrial | Integrated satellite-terrestrial (non-terrestrial networks) |

> **For Mains:** India's proactive approach to 6G — launching the Bharat 6G Vision and Alliance before 6G standards are finalised — is a strategic departure from the 3G/4G era when India was a late adopter. Discuss how early R&D participation can reduce technology dependence and create export opportunities in telecom equipment.

---

## Telecom Policy and Regulatory Framework

### Key Institutions

| Institution | Role |
|------------|------|
| **Department of Telecommunications (DoT)** | Policy-making, licensing, spectrum management |
| **TRAI (Telecom Regulatory Authority of India)** | Tariff regulation, quality of service, competition, spectrum recommendations |
| **TDSAT** | Telecom Disputes Settlement and Appellate Tribunal — adjudicates disputes |
| **WPC (Wireless Planning and Coordination)** | Spectrum allocation, frequency coordination |

### Spectrum Allocation in India

| Method | Detail |
|--------|--------|
| **Auction** | Primary method since 2010; highest bidder gets spectrum for 20 years |
| **Administrative allocation** | For defence, ISRO, railways, BSNL (limited cases) |
| **Satellite spectrum** | TRAI recommended administrative allocation for satellite spectrum in 2025; Jio advocated auction (controversy ongoing) |

> **Spectrum debate (2025):** TRAI recommended administrative allocation for satellite spectrum, aligning with global practice (ITU-based coordination). However, Reliance Jio argued that satellite spectrum should be auctioned like terrestrial spectrum to ensure a level playing field. This is a critical policy question as Starlink, OneWeb, and Amazon Kuiper prepare to enter India.

### Telecommunications Act, 2023

| Feature | Detail |
|---------|--------|
| **Replaces** | Indian Telegraph Act, 1885 and Indian Wireless Telegraphy Act, 1933 |
| **Key provisions** | Spectrum assignment via auction or administrative allocation; right of way for telecom infrastructure; user protection measures; Sanchar Suraksha (telecom security) |
| **Spectrum reform** | Allows spectrum sharing, trading, leasing, and surrender |
| **Right of way** | Simplified process for laying cables and installing towers |

---

## BharatNet — Connecting Rural India

### Project Overview

| Feature | Detail |
|---------|--------|
| **Objective** | Connect all ~2.5 lakh Gram Panchayats (GPs) with broadband via optical fibre cable (OFC) |
| **Implementing agency** | Bharat Broadband Network Limited (BBNL), now merged with BSNL |
| **Funding** | Universal Service Obligation Fund (USOF), now renamed **Digital Bharat Nidhi** |

### Progress (as of March 2025)

| Metric | Status |
|--------|--------|
| **GPs service-ready** | **2,18,347** Gram Panchayats (out of ~2.5 lakh target) |
| **OFC laid** | 6,92,676 km of optical fibre cable |
| **Total OFC route length** | 42.13 lakh route km |
| **FTTH connections** | 12,81,564 Fibre-to-the-Home connections commissioned |
| **Wi-Fi hotspots** | 1,04,574 Wi-Fi hotspots installed for last-mile connectivity |

### Amended BharatNet Programme (ABP)

| Feature | Detail |
|---------|--------|
| **Approved** | August 2023 |
| **Cost** | Rs 1,39,579 crore |
| **Improvement** | Addresses shortcomings of earlier phases — better last-mile connectivity, FTTH focus |
| **Challenge** | BharatNet has missed four major deadlines (2014, 2015, 2019, 2023) and is likely to miss the 2025 target as well |

> **For Mains:** BharatNet is critical for bridging the digital divide but has been plagued by delays and underutilisation. Discuss the challenges (right of way, terrain, maintenance) and suggest how the PPP model and convergence with 5G can improve outcomes.

---

## Universal Service Obligation Fund (USOF) / Digital Bharat Nidhi

| Feature | Detail |
|---------|--------|
| **Established** | Statutory status via Indian Telegraph (Amendment) Act, 2003; operational since 1 April 2002 |
| **Renamed** | **Digital Bharat Nidhi** under Telecommunications Act, 2023 |
| **Source** | Universal Access Levy (UAL) — 5% of Adjusted Gross Revenue (AGR) of telecom operators |
| **Purpose** | Subsidise telecom services in rural, remote, and commercially unviable areas |
| **Key projects** | BharatNet, 4G saturation in uncovered villages (via BSNL), mobile tower installation in LWE areas, NE connectivity |

> **Prelims Fact:** USOF was given statutory status in 2003 and renamed Digital Bharat Nidhi in 2023. It is funded by a 5% UAL levied on telecom operators' AGR.

---

## Satellite Internet in India

### Current Landscape (2025-26)

| Operator | Status |
|----------|--------|
| **Eutelsat OneWeb** | Licensed; India's first licensed satellite broadband operator (joint venture with Bharti); LEO constellation |
| **Jio Satellite Communications (Jio-SES JV)** | Licensed; joint venture between Reliance Jio and SES (Luxembourg); MEO + GEO constellation |
| **SpaceX Starlink** | Received licence in June 2025; still needs trial spectrum and national security compliance; cannot begin full commercial operations yet |
| **Amazon Kuiper** | Applied for licence; yet to receive clearance |

### ISRO Satellite Broadband

| Feature | Detail |
|---------|--------|
| **Fleet** | 19 communication satellites including GSAT-11, GSAT-19, GSAT-29, GSAT-N2 |
| **GSAT-N2** | Launched November 2024 via SpaceX; 48 Gbps throughput; supports satellite internet services |
| **Technology** | High-Throughput Satellites (HTS) with spot-beam technology for faster speeds and higher capacity |
| **Usage** | Remote connectivity, defence networks, disaster management, telemedicine |

### Spectrum Allocation Controversy

| Issue | Detail |
|-------|--------|
| **TRAI recommendation** | Administrative allocation for satellite spectrum (May 2025) — aligned with global practice and ITU framework |
| **Jio's position** | Satellite spectrum should be auctioned like terrestrial spectrum — level playing field argument |
| **Starlink/OneWeb position** | Administrative allocation — global norm, as satellite spectrum is coordinated internationally |
| **Government decision** | Pending — will shape the competitive dynamics of satellite internet in India |

> **For Mains:** Satellite internet can bridge the last-mile connectivity gap where terrestrial networks (fibre, mobile towers) are economically unviable — remote Himalayan villages, island territories, disaster zones. Discuss the regulatory challenges of integrating satellite and terrestrial networks.

---

## Digital Divide and Inclusion

### Key Statistics

| Metric | Detail |
|--------|--------|
| **Internet subscribers** | ~950 million (as of 2025), but urban-rural gap persists |
| **Rural broadband** | Significantly lower penetration than urban areas despite BharatNet |
| **Gender digital divide** | Women are 36% less likely than men to use mobile internet in India (GSMA 2024) |
| **Affordability** | India has among the cheapest mobile data globally (~Rs 10/GB) but device affordability remains a barrier |

### Government Initiatives for Digital Inclusion

| Initiative | Detail |
|-----------|--------|
| **Digital India** | Flagship programme (2015) — digital infrastructure, e-governance, digital literacy |
| **PM-WANI** | Public Wi-Fi access network; uses Public Data Offices (PDOs) for last-mile Wi-Fi |
| **CSC (Common Service Centres)** | Over 5 lakh centres in rural areas providing digital services |
| **PMGDISHA** | Pradhan Mantri Gramin Digital Saksharta Abhiyan — digital literacy for 6 crore rural households |
| **Aadhaar + UPI** | Digital identity + payments stack enabling financial inclusion |
| **ONDC** | Open Network for Digital Commerce — democratising e-commerce |

---

## Exam Strategy

### Prelims Focus Areas

- Qubit vs classical bit; superposition and entanglement definitions
- Google Sycamore (53 qubits, 2019) and Willow (105 qubits, 2024) milestones
- National Quantum Mission: cost (Rs 6,003.65 crore), year (2023), objectives
- 5G spectrum bands (low, mid, high); 2022 auction value (Rs 1.5 lakh crore)
- BharatNet: target GPs, OFC laid, Digital Bharat Nidhi
- USOF statutory status (2003), renamed Digital Bharat Nidhi (2023)
- Bharat 6G Alliance (launched July 2023), target year 2030
- TRAI vs DoT roles; Telecommunications Act, 2023

### Mains Answer Frameworks

**Q: "Quantum computing has the potential to disrupt existing cybersecurity frameworks. Discuss the implications and India's preparedness."**

Structure:
1. How quantum computers threaten encryption (Shor's algorithm, RSA vulnerability)
2. India's NQM — quantum communication and QKD targets
3. Post-quantum cryptography migration needs
4. Geopolitical dimension — US-China quantum race; India's positioning
5. Way forward — standards development, workforce, industry-academia collaboration

**Q: "Critically evaluate India's 5G rollout and its socio-economic impact."**

Structure:
1. Rollout achievements — coverage, speed, subscribers
2. Spectrum allocation and investment
3. Applications — agriculture, health, education, smart cities
4. Challenges — digital divide, affordability, rural coverage, Vi's financial distress
5. 6G preparedness and Bharat 6G Alliance
6. Way forward — PPP, BharatNet convergence, inclusive access
