---
layout: topic.njk
title: "Electrochemistry & Batteries — Electrolysis, Galvanic Cells, Corrosion & Modern Batteries"
subject: general-science
gs_papers:
  - gs3
syllabus_topic: "General Science"
parent_topic: "Chemistry"
parent_topic_url: "/subjects/general-science/chemistry/"
description: "UPSC notes on electrochemistry — electrolysis, galvanic cells, Faraday's laws, corrosion, batteries (lead-acid, lithium-ion, solid-state), fuel cells, and electroplating."
sub_chapter: 9
chapter: 9
date: 2026-03-29
foundation: true
prelims: true
mains: true
tags:
  - general-science
related_topics:
  - title: "Metals, Non-Metals & Alloys"
    url: "/subjects/general-science/chemistry/03-metals-nonmetals-alloys/"
    subject: "General Science"
  - title: "Industrial Chemistry & Materials"
    url: "/subjects/general-science/chemistry/06-industrial-chemistry-materials/"
    subject: "General Science"
---

## Overview

Electrochemistry is the branch of chemistry that deals with the relationship between electrical energy and chemical reactions. It underpins technologies that shape modern life — batteries that power phones and electric vehicles, electrolysis that extracts metals, fuel cells that produce clean energy, and corrosion that costs the global economy hundreds of billions annually. For UPSC, electrochemistry appears in GS3 (Science & Technology) and connects to questions on energy storage, EVs, green hydrogen, and industrial processes.

---

## Fundamentals of Electrochemistry

### Oxidation and Reduction (Redox)

| Concept | Definition | Mnemonic |
|---------|-----------|----------|
| **Oxidation** | Loss of electrons by a species | **OIL** — Oxidation Is Loss |
| **Reduction** | Gain of electrons by a species | **RIG** — Reduction Is Gain |

A **redox reaction** always involves both oxidation and reduction occurring simultaneously — one species loses electrons (is oxidised) while another gains them (is reduced).

| Term | Definition |
|------|-----------|
| **Oxidising Agent (Oxidant)** | The species that gains electrons (is itself reduced); causes oxidation of the other species |
| **Reducing Agent (Reductant)** | The species that loses electrons (is itself oxidised); causes reduction of the other species |
| **Electrode Potential** | The tendency of an electrode to gain or lose electrons; measured in volts relative to the Standard Hydrogen Electrode (SHE, defined as 0.00 V) |
| **Electrochemical Series** | A ranking of elements by their standard electrode potential; metals with more negative values (e.g., lithium, potassium) are stronger reducing agents; those with more positive values (e.g., gold, platinum) are weaker reducing agents |

> **For Prelims:** OIL RIG mnemonic for oxidation/reduction. In the electrochemical series, metals at the top (Li, K, Na) are most reactive (strongest reducing agents) and those at the bottom (Au, Pt) are least reactive.

---

## Electrochemical Cells

There are two fundamental types of electrochemical cells:

| Feature | Galvanic (Voltaic) Cell | Electrolytic Cell |
|---------|------------------------|-------------------|
| **Energy conversion** | Chemical energy → Electrical energy | Electrical energy → Chemical energy |
| **Spontaneity** | Reaction is **spontaneous** (ΔG < 0) | Reaction is **non-spontaneous** (ΔG > 0); requires external power supply |
| **Anode** | Negative terminal (oxidation occurs) | Positive terminal (oxidation occurs) |
| **Cathode** | Positive terminal (reduction occurs) | Negative terminal (reduction occurs) |
| **Example** | Daniell cell, dry cell, all batteries | Electrolysis of water, electroplating, aluminium extraction |

> **For Prelims:** In BOTH cell types — oxidation always occurs at the anode, reduction always at the cathode. The difference is in polarity and spontaneity. Galvanic = spontaneous (battery gives current); Electrolytic = non-spontaneous (needs external current).

### The Daniell Cell (Classic Galvanic Cell)

| Component | Details |
|-----------|---------|
| **Anode (Negative)** | Zinc rod dipped in ZnSO₄ solution — Zn → Zn²⁺ + 2e⁻ (oxidation) |
| **Cathode (Positive)** | Copper rod dipped in CuSO₄ solution — Cu²⁺ + 2e⁻ → Cu (reduction) |
| **Salt Bridge** | A tube filled with KCl or KNO₃ gel — maintains electrical neutrality by allowing ion flow between the two half-cells |
| **EMF (Cell Potential)** | E°cell = E°cathode − E°anode = +0.34 − (−0.76) = **+1.10 V** |
| **Net Reaction** | Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s) |

---

## Electrolysis

### Principle

Electrolysis is the process of using electrical energy to drive a **non-spontaneous** chemical reaction. An electrolyte (molten or aqueous ionic compound) is decomposed when electric current passes through it.

### Faraday's Laws of Electrolysis (1833)

| Law | Statement | Formula |
|-----|-----------|---------|
| **First Law** | The mass of substance deposited or liberated at an electrode is **directly proportional to the quantity of electricity** (charge) passed through the electrolyte | m = ZQ = ZIt (where Z = electrochemical equivalent, Q = charge in coulombs, I = current in amperes, t = time in seconds) |
| **Second Law** | When the same quantity of electricity passes through different electrolytes, the masses of substances deposited are **proportional to their chemical equivalent weights** | m₁/m₂ = E₁/E₂ (where E = equivalent weight = atomic weight / valency) |

| Constant | Value |
|----------|-------|
| **Faraday constant (F)** | **96,485 coulombs/mol** — the charge carried by one mole of electrons; one Faraday of charge deposits one equivalent weight of a substance |

> **For Prelims:** Faraday's First Law: mass deposited ∝ charge passed. Second Law: mass deposited ∝ equivalent weight. 1 Faraday = 96,485 C = charge of 1 mole of electrons.

### Industrial Applications of Electrolysis

| Application | Process | Details |
|------------|---------|---------|
| **Extraction of Aluminium (Hall-Heroult Process)** | Electrolysis of alumina (Al₂O₃) dissolved in molten cryolite (Na₃AlF₆) | Invented independently by Charles Martin Hall and Paul Heroult in **1886** (both aged 22); operates at 940–980°C; voltage 3–5 V, current up to 350,000 A; cryolite lowers the melting point of alumina from 2,072°C to ~960°C; carbon anodes consumed (produce CO₂) |
| **Electroplating** | Depositing a thin layer of metal on an object using electrolysis | Object = cathode; plating metal = anode; electrolyte = salt of the plating metal; used for corrosion protection (chrome plating), aesthetics (gold/silver plating), and wear resistance |
| **Electrorefining** | Purifying metals (especially copper) using electrolysis | Impure metal = anode; pure metal sheet = cathode; electrolyte = salt of the metal; impurities fall as "anode mud" (may contain gold, silver, platinum — valuable byproduct) |
| **Electrolysis of Water** | Splitting water into hydrogen and oxygen | 2H₂O → 2H₂ + O₂; basis of **green hydrogen** production when powered by renewable energy; PEM electrolysers and alkaline electrolysers |
| **Chlor-Alkali Process** | Electrolysis of brine (NaCl solution) | Produces chlorine (Cl₂) at anode, sodium hydroxide (NaOH) at cathode, and hydrogen (H₂); essential for chemical industry |

---

## Batteries

A battery is one or more galvanic cells connected to provide electrical energy from stored chemical energy.

### Primary Batteries (Non-rechargeable)

| Type | Chemistry | Voltage | Applications |
|------|-----------|---------|-------------|
| **Zinc-Carbon (Leclanché/Dry Cell)** | Zn anode, MnO₂ cathode, NH₄Cl paste electrolyte | 1.5 V | Torches, remote controls, clocks — cheapest, lowest performance |
| **Alkaline Battery** | Zn anode, MnO₂ cathode, KOH electrolyte | 1.5 V | Higher capacity than zinc-carbon; toys, portable devices |
| **Silver Oxide** | Zn anode, Ag₂O cathode, KOH electrolyte | 1.55 V | Watches, hearing aids, calculators — small button cells |
| **Lithium Primary** | Li anode, various cathodes (MnO₂, SOCl₂) | 3.0–3.6 V | Medical devices, military, long-shelf-life applications (10+ years) |

### Secondary Batteries (Rechargeable)

| Type | Chemistry | Voltage | Energy Density | Cycle Life | Applications |
|------|-----------|---------|---------------|------------|-------------|
| **Lead-Acid** | Pb anode, PbO₂ cathode, H₂SO₄ electrolyte | 2.0 V/cell | ~30–50 Wh/kg | 300–500 cycles | Car starter batteries, UPS, inverters — oldest rechargeable battery (Planté, 1859) |
| **Nickel-Metal Hydride (NiMH)** | Metal hydride anode, NiOOH cathode, KOH electrolyte | 1.2 V/cell | ~60–120 Wh/kg | 500–1,000 cycles | Hybrid vehicles (Toyota Prius), rechargeable AA/AAA cells |
| **Lithium-Ion (Li-ion)** | Graphite anode, lithium metal oxide cathode, organic electrolyte + Li salt | 3.2–3.7 V/cell | 120–250 Wh/kg | 1,000–5,000+ cycles | Smartphones, laptops, EVs, grid storage — dominant battery technology |

> **For Prelims:** Lead-acid = oldest rechargeable battery (1859); used in car batteries. Li-ion = dominant modern battery; used in phones, EVs, grid storage. NiMH = used in hybrid vehicles.

---

## Lithium-Ion Battery Chemistry

### How Li-Ion Batteries Work

| Phase | Process |
|-------|---------|
| **Discharging** | Lithium ions (Li⁺) move from the graphite anode through the electrolyte and separator to the cathode; electrons flow through the external circuit (anode → device → cathode), providing power |
| **Charging** | External power reverses the process — Li⁺ ions move back from cathode to anode; electrons flow through the external circuit in reverse |

### Cathode Chemistry Comparison

| Cathode Type | Chemical Formula | Energy Density | Safety | Cycle Life | Cost | Typical Use |
|-------------|-----------------|---------------|--------|-----------|------|-------------|
| **LCO (Lithium Cobalt Oxide)** | LiCoO₂ | High (~200 Wh/kg) | Low (thermal runaway at ~150°C) | 500–1,000 cycles | High (cobalt is expensive) | Smartphones, laptops |
| **NMC (Nickel Manganese Cobalt)** | LiNiMnCoO₂ | High (~200–250 Wh/kg) | Moderate | 1,000–2,500 cycles | Medium | Electric vehicles (premium/long-range), power tools |
| **LFP (Lithium Iron Phosphate)** | LiFePO₄ | Moderate (~120–160 Wh/kg) | **Excellent** (thermal runaway at ~270°C; very stable) | **3,000–8,000+ cycles** | Low (abundant, non-toxic materials) | EVs (mass market — BYD, Tesla standard range), grid storage, buses |
| **NCA (Nickel Cobalt Aluminium)** | LiNiCoAlO₂ | Very high (~250 Wh/kg) | Low-moderate | 1,000–1,500 cycles | High | Tesla (long-range models) |

> **For Mains:** LFP batteries have emerged as the dominant chemistry for mass-market EVs and grid storage due to their safety, long cycle life, and low cost (no cobalt/nickel). NMC retains the edge for premium EVs needing maximum range in a compact space. India's EV push (FAME scheme) and battery manufacturing (ACC PLI scheme) favour LFP for two-wheelers and buses.

---

## Next-Generation Batteries

| Technology | Key Innovation | Status (2025–26) | Potential |
|-----------|---------------|-------------------|-----------|
| **Solid-State Battery** | Replaces liquid electrolyte with a solid electrolyte (ceramic, polymer, or glass) — eliminates flammability risk; enables lithium metal anode for higher energy density | Pilot production by BYD, Hyundai, Honda; mass production expected ~2027–2030; targeting 400 Wh/kg (Stage 2) and 500 Wh/kg (Stage 3, by 2035) | Safer, higher energy density, faster charging; could double EV range |
| **Sodium-Ion Battery** | Uses sodium (Na⁺) instead of lithium — sodium is 1,000× more abundant than lithium and geographically widespread | Already in production; heading to vehicles in 2026; initial applications in grid storage | Cheaper, no lithium/cobalt dependency; lower energy density than Li-ion; excellent for stationary storage |
| **Lithium-Sulfur Battery** | Sulfur cathode offers theoretical energy density 5× higher than conventional Li-ion | Lab stage; targeting commercial deployment ~2030 | Lightweight; abundant sulfur; challenges with cathode degradation and cycle life |
| **Aluminium-Air Battery** | Aluminium anode reacts with oxygen from air; very high theoretical energy density (~8,100 Wh/kg) | Experimental; non-rechargeable (mechanically rechargeable by replacing aluminium anode) | Potential for EVs needing extreme range; aluminium abundant in India (bauxite) |

---

## Fuel Cells

| Feature | Details |
|---------|---------|
| **Principle** | Electrochemical device that converts the chemical energy of a fuel (hydrogen) and an oxidant (oxygen) directly into electricity, with water and heat as byproducts — essentially the reverse of electrolysis |
| **Reaction** | Anode: 2H₂ → 4H⁺ + 4e⁻; Cathode: O₂ + 4H⁺ + 4e⁻ → 2H₂O; Overall: 2H₂ + O₂ → 2H₂O + electricity + heat |
| **Key difference from batteries** | Fuel cells produce electricity continuously as long as fuel is supplied; batteries store a fixed amount of energy |

### Types of Fuel Cells

| Type | Electrolyte | Operating Temp | Efficiency | Application |
|------|-------------|---------------|------------|-------------|
| **PEM (Proton Exchange Membrane)** | Solid polymer membrane | ~60–80°C | ~40–60% | Vehicles (Toyota Mirai, Hyundai Nexo), portable power, backup power |
| **SOFC (Solid Oxide Fuel Cell)** | Solid ceramic (zirconia) | ~600–1,000°C | ~50–65% | Stationary power generation, combined heat and power (CHP) |
| **AFC (Alkaline Fuel Cell)** | Aqueous KOH | ~60–90°C | ~60–70% | NASA space missions (Apollo, Space Shuttle); very pure hydrogen required |
| **MCFC (Molten Carbonate Fuel Cell)** | Molten lithium/potassium carbonate | ~650°C | ~45–55% | Large stationary power plants |

---

## Supercapacitors

| Feature | Details |
|---------|---------|
| **Principle** | Store energy electrostatically in an electric field between two electrodes separated by an electrolyte — no chemical reaction involved (unlike batteries) |
| **Energy density** | Low (~5–10 Wh/kg) — much lower than batteries |
| **Power density** | Very high (~10,000 W/kg) — can charge/discharge in seconds |
| **Cycle life** | Virtually unlimited (>1,000,000 cycles) — no chemical degradation |
| **Applications** | Regenerative braking in EVs/metros, grid frequency regulation, camera flash, uninterruptible power supply (UPS), hybrid systems (supercapacitor + battery) |

> **For Prelims:** Supercapacitors = high power density, low energy density, unlimited cycle life. They complement batteries — batteries for sustained energy, supercapacitors for bursts of power.

---

## Corrosion

### What is Corrosion?

Corrosion is the **electrochemical degradation** of metals due to reaction with environmental agents (oxygen, water, acids, salts). It is essentially a galvanic cell formed on the metal surface.

### The Electrochemistry of Rusting (Iron)

| Step | Process |
|------|---------|
| **Anodic reaction (oxidation)** | Fe → Fe²⁺ + 2e⁻ (iron dissolves at anodic spots) |
| **Cathodic reaction (reduction)** | O₂ + 2H₂O + 4e⁻ → 4OH⁻ (oxygen is reduced at cathodic spots) |
| **Overall** | Fe²⁺ reacts with OH⁻ and O₂ to form hydrated iron(III) oxide — rust: 2Fe₂O₃·xH₂O |

### Types of Corrosion

| Type | Mechanism | Example |
|------|-----------|---------|
| **Uniform Corrosion** | Even attack over entire surface | Rusting of unprotected steel in moist air |
| **Galvanic Corrosion** | Two dissimilar metals in contact in an electrolyte — the more reactive metal corrodes preferentially | Iron pipe connected to copper pipe; iron corrodes faster |
| **Pitting Corrosion** | Localised attack creating small holes | Stainless steel in chloride-rich environments (coastal areas) |
| **Crevice Corrosion** | Corrosion in gaps/crevices where stagnant solution collects | Under gaskets, bolt heads, overlapping metal sheets |
| **Stress Corrosion Cracking** | Combined effect of tensile stress and corrosive environment | Brass in ammonia; stainless steel in chloride solutions |

### Corrosion Prevention

| Method | Principle | Example |
|--------|-----------|---------|
| **Painting/Coating** | Physical barrier prevents oxygen and moisture from reaching metal | Painted bridges, cars, structural steel |
| **Galvanising** | Coating iron/steel with zinc — zinc is more reactive and corrodes preferentially (sacrificial protection) | Galvanised iron sheets (GI sheets), pipes, nails |
| **Cathodic Protection (Sacrificial Anode)** | Attaching a more reactive metal (Zn or Mg) to the structure — the sacrificial anode corrodes instead of the structure | Underground pipelines, ship hulls, water heaters |
| **Cathodic Protection (Impressed Current)** | External DC power supply makes the structure the cathode — prevents oxidation | Large pipelines, offshore platforms |
| **Alloying** | Adding elements that form a protective oxide layer | Stainless steel (chromium forms Cr₂O₃ film); aluminium alloys |
| **Anodising** | Electrolytic process to thicken the natural oxide layer on aluminium | Aluminium window frames, cooking utensils, architectural facades |

> **For Mains:** Corrosion costs India an estimated 3–4% of GDP annually. Understanding corrosion prevention is critical for infrastructure longevity — bridges, pipelines, coastal structures, and ships. Galvanising and cathodic protection are the most asked concepts in UPSC science questions.

---

## Electrochemical Sensors

| Sensor Type | Principle | Application |
|------------|-----------|-------------|
| **Breathalyser** | Fuel cell oxidises ethanol in breath; current produced is proportional to alcohol concentration | DUI testing by traffic police |
| **Glucose Meter** | Enzyme (glucose oxidase) on electrode; glucose oxidation produces current proportional to blood sugar level | Diabetes management |
| **pH Meter** | Glass electrode measures voltage difference caused by H⁺ ion concentration | Water quality, soil analysis, food industry |
| **Gas Sensors** | Electrochemical cells that oxidise/reduce target gases (CO, O₃, H₂S) | Industrial safety, air quality monitoring |

---

## Exam Strategy

### Prelims Focus Areas
- Redox: OIL RIG; oxidation = loss of electrons; reduction = gain of electrons
- Galvanic cell = spontaneous (battery); Electrolytic cell = non-spontaneous (needs external current)
- Anode = oxidation (ALWAYS); Cathode = reduction (ALWAYS)
- Faraday's Laws: mass ∝ charge (1st); mass ∝ equivalent weight (2nd); F = 96,485 C/mol
- Hall-Heroult: aluminium extraction; cryolite lowers melting point; carbon anodes; 1886
- Li-ion: graphite anode, lithium metal oxide cathode; LFP safest, LCO highest energy density for portables
- Lead-acid: oldest rechargeable (1859); car batteries; Pb + PbO₂ + H₂SO₄
- Fuel cell: H₂ + O₂ → H₂O + electricity; PEM used in vehicles
- Galvanising: zinc coating on iron; sacrificial protection
- Supercapacitor: high power, low energy, fast charge/discharge

### Mains Focus Areas
- EV battery technology: LFP vs NMC debate; solid-state batteries as next frontier
- Green hydrogen and electrolysis: how electrochemistry enables the hydrogen economy
- Corrosion and infrastructure: economic cost; prevention methods for bridges, pipelines, coastal structures
- Next-generation batteries: sodium-ion as lithium alternative; India's battery manufacturing push (ACC PLI)
- Fuel cells vs batteries for transport: compare hydrogen fuel cell vehicles with battery EVs

---

## Vocabulary

### Electrolysis
- **Pronunciation:** /ɪˌlɛkˈtrɒlɪsɪs/
- **Definition:** The process of using an electric current to drive a non-spontaneous chemical reaction — specifically, the decomposition of an electrolyte (ionic compound in molten or aqueous form) by passing direct current through it, causing positive ions (cations) to migrate to the cathode and negative ions (anions) to migrate to the anode, where they undergo reduction and oxidation respectively.
- **Origin:** From Greek *ēlektron* (ἤλεκτρον, "amber" — from which static electricity was first observed) + *lysis* (λύσις, "loosening, breaking apart"); coined by Michael Faraday in the 1830s during his groundbreaking experiments on the relationship between electricity and chemical change.

### Galvanic Cell
- **Pronunciation:** /ɡælˈvænɪk sɛl/
- **Definition:** An electrochemical cell that converts the chemical energy of a spontaneous redox reaction into electrical energy — consisting of two half-cells, each containing an electrode immersed in an electrolyte, connected by a salt bridge (for ion flow) and an external circuit (for electron flow from anode to cathode).
- **Origin:** Named after Italian physician and physicist Luigi Galvani (1737–1798), who in 1780 discovered "animal electricity" when he observed that frog legs twitched when contacted by two different metals — a phenomenon later correctly explained by Alessandro Volta as the result of an electrochemical reaction between dissimilar metals.

### Cathode
- **Pronunciation:** /ˈkæθoʊd/
- **Definition:** The electrode at which **reduction** (gain of electrons) occurs in an electrochemical cell — in a galvanic cell (battery), the cathode is the positive terminal; in an electrolytic cell, the cathode is the negative terminal; in both cases, cations (positive ions) migrate toward the cathode.
- **Origin:** From Greek *kathodos* (κάθοδος, "way down, descent"), from *kata* ("down") + *hodos* ("way, path"); coined by Michael Faraday in 1834 on the advice of William Whewell, referring to the path that cations take "downward" to the electrode.

## Key Terms

### Lithium-Ion Battery
- **Pronunciation:** /ˈlɪθiəm ˈaɪɒn ˈbætəri/
- **Definition:** A rechargeable electrochemical cell in which lithium ions (Li⁺) shuttle between a graphite anode and a lithium metal oxide cathode through a non-aqueous electrolyte during charge and discharge cycles — offering high energy density (120–250 Wh/kg), long cycle life, and low self-discharge, making it the dominant battery technology for portable electronics, electric vehicles, and grid-scale energy storage.
- **Context:** First commercialised by Sony in 1991 based on the work of John Goodenough, M. Stanley Whittingham, and Akira Yoshino (Nobel Prize in Chemistry, 2019). Key cathode variants: LCO (phones), NMC (premium EVs), LFP (mass-market EVs, grid storage). India's ACC PLI scheme (₹18,100 crore) aims to establish 50 GWh of domestic battery manufacturing capacity.
- **UPSC Relevance:** GS3 (Science & Technology, Energy). Prelims: working principle (Li⁺ shuttle); cathode types (LFP safest, NMC highest energy density); Nobel 2019. Mains: EV transition — battery supply chain (lithium, cobalt, nickel), China's dominance, India's ACC PLI scheme, LFP vs NMC debate.

### Sacrificial Anode
- **Pronunciation:** /ˌsækrɪˈfɪʃəl ˈænoʊd/
- **Definition:** A more electrochemically reactive metal (typically zinc, magnesium, or aluminium alloy) that is deliberately attached to a less reactive metal structure (iron, steel) to provide cathodic protection — the sacrificial anode corrodes preferentially, protecting the main structure from corrosion by acting as the anode in a galvanic couple.
- **Context:** Used extensively to protect underground pipelines, ship hulls, offshore oil platforms, water heaters, and bridges. Galvanising (coating iron with zinc) is a form of sacrificial protection — even when the zinc coating is scratched, zinc continues to corrode preferentially, protecting the underlying iron.
- **UPSC Relevance:** GS3 (Science & Technology). Prelims: definition; zinc/magnesium as sacrificial anodes; galvanising. Mains: corrosion prevention in infrastructure — economic importance; comparison of prevention methods.

---

*Sources: Britannica (Faraday's laws, electrolysis, Hall-Heroult), Battery University (batteryuniversity.com — Li-ion chemistry, battery types), Wikipedia (electrochemistry, Daniell cell, fuel cells), World Nuclear Association, Nobel Prize Committee (2019 Chemistry Prize — Li-ion battery), NITI Aayog (India EV policy), pib.gov.in (ACC PLI scheme)*