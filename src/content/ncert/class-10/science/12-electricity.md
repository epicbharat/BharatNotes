---
layout: ncert-chapter.njk
title: "Electricity"
description: "Electric current, Ohm's Law, resistance, series/parallel circuits, electrical power, heating effect (fuses, MCBs) — with India's power sector data, smart grid, and RDSS scheme — Class 10 Science Ch12 enriched for UPSC GS3."
ncert_class: 10
book: "Science"
book_slug: science
chapter: 12
subject_area: Science
gs_papers:
  - gs3
gs_subject_url: /subjects/science-tech/
date: 2026-04-01
tags:
  - ncert
  - class-10
  - science
  - physics
  - energy
  - power-sector
  - infrastructure
---

> **Note:** This chapter was removed from the NCERT curriculum in the 2022 rationalization. Retained here as electrical circuits, Ohm's Law, and electrical power connect to India's power sector, smart grids, and energy efficiency — GS3 topics.

**Why this chapter matters for UPSC:** India's ~529 GW installed power capacity, the 500 GW renewable target by 2030, transmission losses (16–18%), smart grids, and the RDSS scheme are central GS3 themes. Understanding how electricity works — current, resistance, power, transmission losses — gives the scientific foundation for why these policy challenges exist and how they are being addressed.

---

## PART 1 — Quick Reference Tables

### Fundamental Electrical Quantities

| Quantity | Symbol | Unit | Formula | Meaning |
|---------|--------|------|---------|---------|
| **Charge** | Q | Coulomb (C) | — | Amount of electricity; 1 C = charge of ~6.24 × 10¹⁸ electrons |
| **Current** | I | Ampere (A) | I = Q/t | Rate of flow of charge |
| **Voltage (Potential Difference)** | V | Volt (V) | V = W/Q | Work done per unit charge |
| **Resistance** | R | Ohm (Ω) | R = V/I | Opposition to current flow |
| **Power** | P | Watt (W) | P = VI = I²R = V²/R | Rate of energy transfer |
| **Energy** | E | Joule (J) or kWh | E = Pt | Total energy transferred |

### Series vs Parallel Circuits

| Feature | Series Circuit | Parallel Circuit |
|---------|-------------|----------------|
| **Current** | Same through all components | Splits — different through each branch |
| **Voltage** | Splits across components (V = V₁ + V₂ + ...) | Same across all branches |
| **Total Resistance** | R = R₁ + R₂ + ... (always increases) | 1/R = 1/R₁ + 1/R₂ + ... (always less than smallest) |
| **Effect of one failure** | Entire circuit breaks | Other branches still work |
| **Application** | Old Christmas lights, simple switches | All household wiring, all real electrical systems |

### India's Power Sector — Key Data (2025)

| Category | Data | Notes |
|---------|------|-------|
| **Total installed capacity** | ~529 GW (March 2025) | Up from 250 GW in 2014 |
| **Thermal (coal + gas + oil)** | ~235 GW | ~44% of capacity; coal dominant |
| **Solar** | ~143.6 GW | Fastest growing; target 280 GW solar by 2030 |
| **Wind** | ~48 GW | Target 140 GW by 2030 |
| **Hydro (large)** | ~47 GW | Pumped storage growing for grid balancing |
| **Nuclear** | ~7.9 GW | 24 operating reactors; target 63 GW by 2032 |
| **Total Renewable (incl. large hydro)** | ~220 GW | ~42% of installed capacity |
| **Electricity generation** | ~1,885 billion units (FY2023–24) | — |
| **Per capita consumption** | ~1,450 kWh/year | USA: ~12,000 kWh; global avg: ~3,500 kWh |
| **Transmission losses** | ~16–18% | Target: reduce to <12% |
| **Renewable target** | 500 GW by 2030 | India's NDC commitment |

---

## PART 2 — Detailed Notes

### 1. Electric Charge and Current

**Electric current (I)** is the rate of flow of electric charge through a conductor:
**I = Q/t** (Amperes = Coulombs per second)

**Conventional current** flows from the positive terminal to the negative terminal (direction of positive charge flow). **Electron flow** is in the opposite direction — electrons (negative) flow from negative to positive terminal. This apparent contradiction is historical — Benjamin Franklin defined current direction before electrons were discovered.

**DC vs AC:**
- **DC (Direct Current):** Charges flow in one direction only. Sources: batteries, solar cells, fuel cells. Used in: electronics, EVs, mobile devices.
- **AC (Alternating Current):** Current direction reverses periodically. India's household supply: **220–230 V, 50 Hz** (frequency = 50 cycles per second). USA: 110–120 V, 60 Hz. AC is used for power transmission because voltage can be stepped up/down using transformers (DC cannot be easily transformed).

### 2. Ohm's Law and Resistance

::: ncert-box--key-term
**Ohm's Law:** The current through a conductor is directly proportional to the voltage across it (at constant temperature):
**V = IR** (Voltage = Current × Resistance)

**Resistance (R):** Opposition to the flow of current. Depends on:
- **Material:** Resistivity (ρ) — intrinsic property of material.
- **Length (L):** R ∝ L (longer wire → more resistance)
- **Cross-sectional area (A):** R ∝ 1/A (thicker wire → less resistance)
- **Temperature:** For most metals, resistance increases with temperature.

**R = ρL/A** (ρ = resistivity, measured in Ω·m)

**Key resistivity values:**
- Copper: ~1.7 × 10⁻⁸ Ω·m (very low → used in electrical wiring)
- Silver: ~1.6 × 10⁻⁸ Ω·m (lowest, but expensive)
- Nichrome: ~1.0 × 10⁻⁶ Ω·m (high → used in electric heaters, toasters)
- Silicon: ~6.4 × 10² Ω·m (semiconductor — foundation of electronics)
:::

### 3. Circuit Connections

**Series circuits:**

All components are connected end-to-end in a single loop. The same current flows through all. Voltage is divided. If one component fails (burns out), the circuit is broken and nothing works. This is why old-style Christmas tree light strings would go dark entirely when one bulb failed.

**Parallel circuits:**

Components are connected across the same two points — each has its own branch. Voltage is the same across all. Current divides. If one branch fails, others continue. This is why all household electrical appliances are connected in parallel — each operates at full 220 V, and switching off one does not affect others.

::: ncert-box--upsc-connect
**UPSC GS3 — Energy Efficiency / Infrastructure:**

The principle that **parallel resistance is always less than the smallest individual resistance** explains why:
- Adding more appliances on a circuit draws more total current (not less).
- Household circuits have a rated current limit — exceeded current triggers fuses/MCBs.
- India's distribution transformer failures (overloading) in summer months when all ACs run simultaneously — parallel loads overwhelming transformer capacity.
:::

### 4. Electrical Power and Energy

::: ncert-box--key-term
**Electrical Power:**
**P = VI = I²R = V²/R** (Watts)

**Electrical Energy:**
**E = Pt** (Joules, or kWh for practical purposes)

**1 kWh (1 unit of electricity) = 1 kW × 1 hour = 1000 W × 3600 s = 3.6 × 10⁶ Joules**

India's domestic electricity tariff: approximately ₹5–10 per kWh depending on state and consumption slab. Industrial tariff is higher. India's average tariff (all consumers) ~₹6/kWh (FY2023–24 data).

**Transmission loss formula:** Power lost in a transmission line = I²R. This is why power is transmitted at **high voltage** (step-up transformer increases V → decreases I for same power P = VI → dramatically reduces I²R losses). A 10× increase in voltage reduces transmission losses by 100×.
:::

### 5. Heating Effect of Electric Current

**Joule's Law of Heating:** H = I²Rt

Heat generated is proportional to the square of current, the resistance, and time. This principle is used in:
- **Electric heaters, geysers, electric irons, toasters, incandescent bulbs** (filament heats to ~2,700°C → glows white-hot).
- **Fuses:** A thin wire of low melting point alloy (tin-lead). When current exceeds safe limit, the fuse wire overheats and melts, breaking the circuit and protecting appliances. Must be replaced once blown.
- **MCBs (Miniature Circuit Breakers):** Modern alternative to fuses. Uses an electromagnetic or bimetallic strip mechanism to break the circuit on overcurrent. Can be reset (switched back on) without replacement. More reliable and faster response.

::: ncert-box--explainer
**Why LEDs are more efficient than incandescent bulbs:**

An incandescent bulb converts electricity into heat (via I²R in the tungsten filament) and only ~5% becomes visible light. An LED (Light Emitting Diode) converts electricity directly into light via semiconductor electroluminescence — ~90% efficiency. India's **UJALA scheme** (Unnat Jyoti by Affordable LEDs for All) distributed over 36 crore LED bulbs at subsidised prices, saving an estimated 47 billion kWh per year and reducing CO2 emissions by ~38 million tonnes annually. UJALA is a textbook GS3 example of energy efficiency policy.
:::

### 6. India's Power Sector and Smart Grid

::: ncert-box--upsc-connect
**UPSC GS3 — Energy, Infrastructure, Environment:**

**India's power sector challenges:**
1. **Transmission and distribution (T&D) losses:** ~16–18% of electricity generated is lost in transmission (resistive heating) and distribution (theft, poor infrastructure). At India's generation scale (~1,885 BU/year), this means ~300–340 BU lost annually — equivalent to the annual consumption of many medium-sized countries.

2. **PM Revamped Distribution Sector Scheme (RDSS):** Launched 2021; ₹3.03 lakh crore outlay. Aims to reduce AT&C (Aggregate Technical and Commercial) losses below 12–15%, install prepaid smart meters (25 crore meters), upgrade distribution infrastructure, and automate substations. AT&C losses = technical losses (I²R heating) + commercial losses (theft, unbilled consumption).

3. **Smart Grid:** Digital, two-way communication between utility and consumers. Features: real-time demand monitoring, automatic fault detection, demand response (consumers reduce load during peak hours in exchange for lower tariffs), integration of rooftop solar and EVs. India Smart Grid Forum (ISGF) coordinates national smart grid rollout. Smart meters are a core component — they transmit consumption data automatically (no manual reading), enable time-of-day tariffs, and detect theft.

4. **One Nation One Grid (ONOGI):** India's entire national grid is now synchronised into a single AC frequency (50 Hz) — allowing power to be transferred from surplus regions (e.g., southern states with solar surplus at noon) to deficit regions in real time. Managed by **POWERGRID Corporation of India** (a CPSE under Ministry of Power). National Load Despatch Centre (NLDC) at Delhi coordinates national dispatch.

5. **Renewable integration challenge:** Solar and wind are intermittent. As India's renewable share grows (target 500 GW by 2030), grid stability becomes critical — requires pumped storage hydro, battery storage (BESS), flexible gas plants, and demand response. This is the core electricity challenge of the energy transition.
:::

---

## Exam Strategy

**Prelims traps:**
- **Series circuit:** Total resistance is always greater than any individual resistance. **Parallel circuit:** Total resistance is always less than the smallest individual resistance.
- **India's household supply is 220–230V AC at 50 Hz** — not 110V (that is USA/Canada).
- **1 unit of electricity = 1 kWh = 3.6 × 10⁶ J** — this conversion appears in energy calculations.
- **Transmission losses = I²R** — reducing current (by raising voltage) reduces losses as the square of current. This is WHY high-voltage transmission exists.
- **Fuses break the circuit on overcurrent** (protect appliances); **earthing** provides a safe path for fault current to earth (protects the user from shock). Different functions.
- India's installed capacity (~529 GW, March 2025) vs generation: capacity is potential; actual generation is lower due to PLF (Plant Load Factor). Coal PLF ~60%; solar PLF ~22%.
- **UJALA scheme** distributed LED bulbs — do not confuse with UDAY (Ujwal DISCOM Assurance Yojana — financial restructuring of DISCOMs) or UDAAN.

---

## Previous Year Questions

**Prelims:**
1. Consider the following statements about India's electricity sector:<br>
   1. India's total installed renewable energy capacity (including large hydro) crossed 200 GW in 2024.<br>
   2. Transmission and distribution losses in India are currently less than 10%.<br>
   Which of the above statements is/are correct?<br>
   **(a) 1 only**<br>
   (b) 2 only<br>
   (c) Both 1 and 2<br>
   (d) Neither 1 nor 2

2. With reference to the UJALA scheme, which of the following is its primary objective?<br>
   (a) Solar panel installation in rural households<br>
   **(b) Promoting energy efficiency by distributing LED bulbs at subsidised rates**<br>
   (c) Providing electricity connections to Below Poverty Line households<br>
   (d) Reducing dependence on thermal power by expanding nuclear energy

**Mains:**
1. "India's energy transition to 500 GW of renewable capacity by 2030 will stress the electricity grid in ways that require fundamental changes to how power is managed." Explain the technical challenges of integrating large-scale renewable energy into the grid and evaluate the policy measures India has taken to address them. (CSE Mains 2023, GS Paper 3, 15 marks)

2. What is a smart grid? How does it differ from a conventional electricity grid? Examine its potential to reduce India's transmission and distribution losses and enable the energy transition. (CSE Mains 2021, GS Paper 3, 10 marks)
