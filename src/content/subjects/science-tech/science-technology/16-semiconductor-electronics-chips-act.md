---
layout: topic.njk
title: "Semiconductor Policy, Electronics & India Semiconductor Mission"
subject: science-tech
gs_papers:
  - gs3
syllabus_topic: "Science & Technology"
description: "UPSC notes on semiconductors — global chip shortage, India Semiconductor Mission, Tata Electronics-PSMC fab, Micron fab in Sanand, CHIPS Act (USA), semiconductor supply chain, critical tech diplomacy."
chapter: 20
sub_chapter: 16
date: 2026-03-29
tags:
  - science-tech
parent_topic_url: /subjects/science-tech/science-technology/
---

## What is a Semiconductor?

A **semiconductor** is a material that has electrical conductivity between that of a conductor (like copper) and an insulator (like glass). The most common semiconductor material is **silicon (Si)** — the second most abundant element in Earth's crust.

**Key properties:**
- Conductivity can be precisely controlled by adding impurities (**doping**) — a process called **doping** introduces atoms (boron for p-type, phosphorous for n-type)
- Semiconductors form the basis of **transistors**, the fundamental building block of all modern electronics
- A **silicon wafer** is a thin disc of crystalline silicon on which integrated circuits (chips) are fabricated

### Integrated Circuits and Moore's Law

An **integrated circuit (IC)** or chip combines millions (now billions) of transistors onto a single piece of silicon. The **number of transistors** that can be packed into a chip determines its processing power.

**Moore's Law** (Gordon Moore, Intel co-founder, 1965): The number of transistors on an integrated circuit doubles approximately every **two years**, while the cost per transistor halves. This has driven exponential growth in computing power and the digital economy.

Modern chips contain **billions of transistors** on a fingernail-sized piece of silicon:
- Apple M3 chip (2023): ~25 billion transistors
- NVIDIA H100 GPU (AI): ~80 billion transistors on TSMC 4nm process

As physical limits approach (individual atoms), Moore's Law is slowing — innovation has shifted to 3D stacking (chiplets), advanced packaging, and specialised architectures.

---

## Global Semiconductor Supply Chain

The semiconductor supply chain is the most **geographically concentrated** and technically complex industrial chain in the world. It has three distinct phases:

### Phase 1: Design (Fabless Model)

Companies that **only design chips**, outsourcing fabrication:
- **USA dominance:** Qualcomm, Nvidia, AMD, Apple, Broadcom, Intel, Texas Instruments
- Chip design requires **Electronic Design Automation (EDA) software** — dominated by Synopsys and Cadence (both US companies)
- USA controls EDA tools and **intellectual property (IP) cores** — a critical leverage point in the US-China tech war

### Phase 2: Fabrication (Fabs)

**Foundries** that manufacture chips to client specifications. Requires billions in capital investment and extreme precision (cleanrooms, electron beam lithography):

| Company | Country | Market Share | Node Technology (2024–25) |
|---|---|---|---|
| **TSMC** (Taiwan Semiconductor Manufacturing Company) | Taiwan | **~64% (2024); 70%+ (Q2 2025)** | 2nm, 3nm, 5nm; leading edge |
| **Samsung Foundry** | South Korea | ~10–12% | 3nm, 5nm |
| **Intel Foundry** | USA | ~2–3% | Rebuilding; 18A process |
| **GlobalFoundries** | USA/Singapore | ~7% | Mature nodes (12nm+) |
| **SMIC** | China | ~5–6% | 7nm (max, under export controls) |
| **UMC** | Taiwan | ~6% | Mature nodes |

**TSMC's dominance:** TSMC's foundry market share reached **70%+ in Q2 2025** (TrendForce data). It produces nearly all of the world's most advanced chips including Apple's iPhones, AMD processors, and NVIDIA AI chips.

### Phase 3: Assembly, Testing, Marking and Packaging (ATMP/OSAT)

After fabrication, chips are cut from wafers, packaged, tested, and marked. This phase is more labour-intensive and less capital-intensive than fabrication:
- **Southeast Asia dominant:** Malaysia, Thailand, Vietnam, the Philippines
- India is entering this phase through the ISM scheme

---

## The 2020–21 Global Chip Shortage

The global chip shortage (2020–21) exposed the fragility of the semiconductor supply chain:

**Causes:**
1. **COVID-19 disruptions:** Factory shutdowns in Malaysia, Philippines (ATMP facilities); logistics disruption
2. **Demand surge:** Remote work (laptops, webcams), gaming consoles (PS5, Xbox), smartphones — all semiconductor-heavy
3. **Automotive sector under-ordering:** Auto companies cancelled chip orders during COVID-19 (expecting demand drop); then demand recovered faster than expected
4. **Geographic concentration:** Over-dependence on Taiwan (TSMC) and South Korea (Samsung) for advanced chips
5. **Geopolitical tensions:** US-China trade war had already begun restricting flows

**Consequences:**
- Automotive production: Global auto production fell by ~7.7 million vehicles in 2021 due to chip shortage (AlixPartners estimate)
- Consumer electronics shortages; inflation
- Estimated **$500 billion+ economic loss** globally in 2021

This crisis made every major economy realise the need for domestic semiconductor capacity.

---

## US-China Technology War

The US-China semiconductor competition is the central technology-geopolitical struggle of the 21st century.

### US Actions

| Action | Year | Details |
|---|---|---|
| **Entity List — Huawei** | 2019–ongoing | Added Huawei to the Entity List; US companies cannot supply components without a licence; effectively banned from using US technology |
| **CHIPS and Science Act** | 2022 | **$52 billion** in direct subsidies for domestic chip manufacturing; additional **$200 billion** for science and R&D; created incentives for TSMC, Samsung, Intel to build US fabs |
| **Export Controls — Advanced Chips** | October 2022, updated 2023, 2025 | Banned export of advanced chips (A100, H100, H20 — NVIDIA) and chip-making equipment to China; also banned US persons from supporting China's chip industry |
| **EDA/IP controls** | 2022–ongoing | Tightening controls on EDA software export to China |

### China's Response
- **"Big Fund" (National IC Industry Investment Fund):** Massive state investments in domestic chip companies (SMIC, YMTC, CXMT)
- SMIC achieved **7nm** node (reportedly) despite restrictions, using older DUV lithography equipment
- China retaliating: **export controls on gallium (2023), germanium (2023), graphite (2023)**, and additional minerals (2024–25) — essential for chip manufacturing

### EU Chips Act (2023)

The **European Chips Act**, passed in 2023, committed **€43 billion** to build European semiconductor capacity. Goal: increase EU's global chip market share from ~9% to **20% by 2030**. TSMC is building a fab in Dresden, Germany.

---

## India Semiconductor Mission (ISM)

### Background

India launched the **India Semiconductor Mission (ISM)** in **December 2021** under the **Ministry of Electronics and Information Technology (MeitY)**. The total incentive outlay: **₹76,000 crore**.

**Rationale:**
- India's semiconductor imports grew to ~$6.5 billion (2021–22) and rising rapidly
- Electronics is one of India's largest import bills (alongside oil and gold)
- India has a large chip design talent pool but no fabrication capacity
- Geopolitical imperative: reduce dependence on Taiwan (under China threat) and South Korea

### Approved Projects Under ISM

**1. Tata Electronics-PSMC Fab — Dholera, Gujarat**

| Parameter | Detail |
|---|---|
| Partners | Tata Electronics (India) + PSMC (Powerchip Semiconductor Manufacturing Corp, Taiwan) |
| Location | Dholera Special Investment Region (DSIR), Gujarat |
| Technology node | **28nm** (mature node) |
| Investment | **₹91,526 crore (~$10.9 billion)** — India's largest greenfield semiconductor investment |
| Capacity | 50,000 wafers per month (target) |
| Products | Automotive chips, power management ICs, AI-edge processors |
| Timeline | Trial runs/process validation commenced late January 2026; full production expected 2026 |
| Significance | **India's first greenfield semiconductor fabrication plant** |

**2. Micron Technology — Sanand, Gujarat (ATMP)**

| Parameter | Detail |
|---|---|
| Company | Micron Technology (USA — NASDAQ: MU); world's 3rd largest memory chip company |
| Type | **ATMP** (Assembly, Testing, Marking and Packaging) facility — NOT a fab |
| Location | Sanand, Gujarat |
| Investment | **$2.75 billion** (Micron $825 million + 50% central govt + 20% Gujarat state) |
| Products | DRAM and NAND flash memory packaging |
| Status | Full-scale commercial production commenced **February 2026** |
| Significance | India's **first major semiconductor facility** under ISM; first US semiconductor company to set up in India |

**3. CG Power-Renesas Electronics — Sanand, Gujarat (ATMP)**

| Parameter | Detail |
|---|---|
| Partners | CG Power (India) + Renesas (Japan) + Stars Microelectronics (Thailand) |
| Type | ATMP facility |
| Investment | **$918 million** |
| Products | Microcontrollers, analog chips, SoC (system-on-chip) |

**4. Kaynes Semicon — Sanand, Gujarat (ATMP)**

| Parameter | Detail |
|---|---|
| Company | Kaynes Technology India Ltd. |
| Type | ATMP facility |
| Products | OSAT (Outsourced Semiconductor Assembly and Test) for diverse markets |

By early 2026, **10 semiconductor manufacturing projects** had been approved under ISM, with cumulative investment commitments of approximately **₹1.60 lakh crore** across six states.

---

## OSAT vs Fab — India's Current Position

This is a critical distinction for UPSC:

| Aspect | **Fab (Fabrication)** | **ATMP/OSAT (Assembly, Testing)** |
|---|---|---|
| Process | Makes chips from silicon wafers (photolithography, doping, etching) | Cuts, packages, tests finished chips |
| Capital intensity | Extremely high (TSMC 3nm fab costs $20–30 billion) | Moderate ($500M–$3B) |
| Technology | Requires cutting-edge equipment (EUV lithography) | More accessible technology |
| Skill requirement | PhDs, specialised engineers | Skilled technicians, engineers |
| India's status | Only 1 (Tata-PSMC, 28nm) in progress; not yet leading-edge | Multiple ATMP plants operational/under construction |

India is currently in the **ATMP/OSAT phase** — the downstream, less capital-intensive part of the value chain. The Tata-PSMC fab (28nm) is India's first move into fabrication, but it is not at the leading edge (TSMC's current best: 2nm).

---

## India as a Chip Design Hub

While India lacks fab capacity, it is already a major force in chip **design**:

- India is home to approximately **~20% of the world's semiconductor design engineers** (3,000–4,000 chip designers out of a global talent pool of ~20,000)
- **Major design centres in India:** Qualcomm (Hyderabad — largest R&D outside USA), Intel (Bengaluru), ARM (Bengaluru), Broadcom, Texas Instruments, Analog Devices, Nvidia
- **Applied Materials and Lam Research** (major chip equipment companies) have significant operations in India focused on manufacturing support and precision components
- India's **semiconductor design exports** are significant; the country aims to become the world's leading chip design hub

**VLSI design ecosystem:** India's engineering universities (IITs, NITs) produce large numbers of VLSI (Very Large Scale Integration) engineers. Companies like Wipro, Infosys, and HCL have semiconductor design practices.

---

## iCET — India-USA Semiconductor Cooperation

The **Initiative on Critical and Emerging Technologies (iCET)** was launched at a Modi-Biden summit in **May 2022 (Tokyo)** and formally activated in **January 2023** (NSA Ajit Doval and NSA Jake Sullivan).

**Semiconductor-specific achievements under iCET:**
- **MOU on Semiconductor Supply Chain Resiliency (March 2023):** US Commerce Secretary Raimondo and India Commerce Minister Goyal signed to establish a collaborative mechanism
- Micron's Sanand facility was a direct outcome of iCET-level discussions
- Lam Research announced plans to expand India operations for precision components
- **Minerals Security Partnership (MSP):** India joined this US-led initiative to secure critical mineral supply chains for semiconductors

India's strategy: use iCET to attract US chip companies to India, gain access to cutting-edge technology, and integrate into the US-led semiconductor supply chain as China is excluded.

---

## Critical Minerals for Semiconductors

Chips require specialised materials that are geographically concentrated:

| Material | Use in Chips | Key Producer | Risk |
|---|---|---|---|
| **Silicon** | Wafer substrate | USA, Norway, China | Low — abundant; processing expertise needed |
| **Gallium** | GaN chips, 5G, LEDs | China (~80% of global supply) | High — China imposed export controls 2023 |
| **Germanium** | Fibre optics, semiconductors | China (~60%) | High — China imposed export controls 2023 |
| **Neon gas** | Excimer lasers for lithography | Ukraine (70%+ before 2022 war) | Supply disrupted 2022 |
| **Palladium** | Chip manufacturing processes | Russia (~40%), South Africa | Sanctions risk |
| **Rare earths** | Semiconductor manufacturing equipment magnets | China (~91% refining) | High — China near-monopoly |

China's 2023 export controls on **gallium and germanium** — and 2024 controls on additional minerals — directly targeted the semiconductor supply chain of the USA and allies.

---

## India Semiconductor Mission 2.0

As of early 2026, ISM is pivoting to **ISM 2.0**, which:
- Focuses on **advanced nodes below 28nm**
- Promotes **compound semiconductors** — Silicon Carbide (SiC) and Gallium Nitride (GaN) for EV power electronics and 5G
- Strengthens the **design ecosystem** through academic-industry partnerships
- Targets India's semiconductor market to reach **$110 billion by 2030** (10% of global consumption)

---

## Previous Year Questions (PYQs)

### Prelims

1. Consider the following statements about semiconductors: (UPSC CSE pattern)
   1. Silicon is the most commonly used semiconductor material
   2. Transistors are the fundamental building blocks of semiconductor chips
   3. Semiconductor fabrication requires cleanroom conditions with extreme precision
   - **All three statements are correct**

2. The India Semiconductor Mission (ISM) was launched in:
   - December 2021, with an outlay of ₹76,000 crore

3. With reference to the CHIPS and Science Act (2022) of the USA, which of the following is correct?
   - It provides approximately $52 billion in direct subsidies for domestic semiconductor manufacturing

4. The term "OSAT" in semiconductor context refers to:
   - Outsourced Semiconductor Assembly and Test

### Mains

1. The global semiconductor industry is highly concentrated in a few countries. Examine the vulnerabilities this creates for India and critically evaluate India's Semiconductor Mission as a strategic response. (GS3 — 15 marks)

2. "The US-China technology war over semiconductors has profound implications for global supply chains and India's strategic options." Discuss with reference to the CHIPS Act, iCET, and India's semiconductor policy. (GS2/GS3 — 15 marks)

3. Distinguish between semiconductor fabrication and ATMP/OSAT operations. Where does India currently stand in the global semiconductor value chain, and what are the challenges in moving to advanced fabrication? (GS3 — 10 marks)

4. Critical minerals like gallium, germanium, and rare earth elements are essential for semiconductor manufacturing. How does China's dominance in these minerals affect global chip supply chains? What is India's strategy to address this vulnerability? (GS3 — 15 marks)

---

## Exam Strategy

**For Prelims:**
- ISM launched: **December 2021**; budget: **₹76,000 crore**; ministry: **MeitY**
- Tata-PSMC fab: **Dholera, Gujarat; 28nm; ₹91,526 crore**
- Micron facility: **Sanand, Gujarat; ATMP; $2.75 billion; commercial production February 2026**
- TSMC foundry market share: **~64% (2024)**; headquarters: **Taiwan**
- CHIPS Act (USA): **$52 billion** direct subsidies; passed **2022**
- EU Chips Act: **€43 billion**; passed **2023**
- iCET launched: **May 2022 (Tokyo)**; formally activated **January 2023**
- India has **~20% of global chip designers**

**For Mains:**
- Structure semiconductor answers as: **global supply chain geography → geopolitical risks → India's vulnerabilities → ISM response → challenges ahead**
- Key distinction: India is in **ATMP (downstream)** phase — not yet in leading-edge fabrication; Tata-PSMC is 28nm, not 2nm/3nm
- Always link ISM to: (1) import substitution (reduce electronics import bill); (2) export ambition; (3) geopolitical alignment (US-India tech partnership)
- Critical minerals → semiconductor connection: gallium, germanium, neon gas, palladium — test this linkage
- For essay/long answers: use the **design → fabrication → packaging** value chain structure consistently

**Key Distinctions:**
- Fabless companies (Qualcomm, Nvidia) vs Foundries (TSMC, Samsung) vs IDMs (Intel: both design + fab)
- Fab (chip manufacture) vs ATMP/OSAT (chip packaging/testing)
- 28nm (mature) vs 3nm/2nm (leading edge) — India currently targeting 28nm
- ISM (2021) vs ISM 2.0 (2026 focus) — compound semiconductors and advanced nodes
