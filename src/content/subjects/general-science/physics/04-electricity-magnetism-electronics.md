---
layout: topic.njk
title: "Electricity, Magnetism & Electronics"
subject: general-science
parent_topic: "Physics"
parent_topic_url: "/subjects/general-science/physics/"
gs_papers:
  - gs3
syllabus_topic: "General Science"
description: "UPSC notes on electricity and magnetism — Ohm's law, circuits, electromagnetic induction, transformers, motors, generators, semiconductors, superconductors, and basic electronics."
sub_chapter: 4
date: 2026-03-27
foundation: true
prelims: true
mains: true
tags:
  - general-science
---

## Overview

Electricity, magnetism, and electronics underpin modern civilisation — from household wiring to semiconductors that power every digital device. UPSC Prelims regularly tests concepts like Ohm's law, electromagnetic induction, Fleming's rules, and semiconductor basics. This topic covers core principles, safety devices, and technology applications relevant to the exam.

---

## Electric Current

| Feature | Detail |
|---------|--------|
| **Definition** | Flow of electric charge (electrons) through a conductor; measured in **Amperes (A)** |
| **Direction** | Conventional current flows from positive to negative terminal; electron flow is in the opposite direction |
| **Ohm's Law** | **V = IR** — Voltage (V) equals Current (I) multiplied by Resistance (R); formulated by Georg Simon Ohm in 1827 |
| **Resistance** | Opposition to current flow; measured in **Ohms (Ω)**; depends on material, length, cross-sectional area, and temperature |

### Conductors, Insulators & Resistors

| Category | Detail | Examples |
|----------|--------|----------|
| **Conductors** | Very low resistance — allow current to flow freely | Copper, aluminium, silver, gold, iron |
| **Insulators** | Very high resistance (tens of MΩ or more) — block current flow | Rubber, glass, wood, plastic, porcelain |
| **Semiconductors** | Resistance between conductors and insulators; conductivity can be controlled | Silicon, germanium |
| **Resistors** | Components that provide specific resistance in a circuit; colour-coded bands indicate resistance value | Carbon resistors, wire-wound resistors |

### Series vs Parallel Circuits

| Feature | Series | Parallel |
|---------|--------|----------|
| **Current** | Same through all components | Divides among branches |
| **Voltage** | Divides among components | Same across all branches |
| **Total resistance** | R_total = R₁ + R₂ + R₃ ... (increases) | 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ ... (decreases) |
| **Household use** | Decorative lights (one fails, all go off) | Household appliances (one fails, others work) |

---

## Electric Power & Household Safety

| Feature | Detail |
|---------|--------|
| **Electric power** | P = VI = I²R = V²/R; measured in **Watts (W)** |
| **Unit of energy** | **Kilowatt-hour (kWh)** — 1 kWh = 1 unit of electricity; the "unit" on your electricity bill |
| **Household supply** | India uses **230 V AC at 50 Hz** (single-phase domestic supply) |

### Safety Devices

| Device | Working Principle | Purpose |
|--------|------------------|---------|
| **Fuse** | Thin wire that **melts and breaks** the circuit when current exceeds the rated value | Protects appliances from overcurrent |
| **MCB (Miniature Circuit Breaker)** | Uses a bimetallic strip (thermal trip for overload) and solenoid (magnetic trip for short circuit) to automatically switch off | Replaces fuses — faster, reusable, more sensitive |
| **Earthing (Grounding)** | Third wire connected to a metal plate buried in the ground; diverts leakage current safely to earth | Prevents electric shock if an appliance develops a fault |
| **RCCB / ELCB** | Detects difference between live and neutral current (earth leakage) and trips the circuit | Protects humans from electric shock — MCBs alone do not provide this protection |

---

## Magnetism

| Feature | Detail |
|---------|--------|
| **Natural magnets** | Magnetite (lodestone, Fe₃O₄) — first known magnetic material; used by ancient mariners for navigation |
| **Artificial magnets** | Made from steel, alnico, or ferrite; can be bar, horseshoe, or cylindrical shaped |
| **Electromagnets** | Temporary magnets created by passing electric current through a coil wound around a soft iron core; strength depends on current and number of turns; used in electric bells, cranes, MRI machines |
| **Properties** | Like poles repel, unlike poles attract; a freely suspended magnet aligns roughly north-south |
| **Magnetic field** | Region around a magnet where its influence is felt; represented by field lines (from North to South outside the magnet) |

### Earth's Magnetism

| Element | Detail |
|---------|--------|
| **Magnetic poles** | Earth behaves as a giant magnet; the geographic North Pole is near the **magnetic South Pole** and vice versa |
| **Magnetic declination** | Angle between geographic north (true north) and magnetic north at a location; varies from place to place and over time |
| **Magnetic inclination (dip)** | Angle that the Earth's magnetic field makes with the horizontal; **0 degrees at magnetic equator**, **90 degrees at magnetic poles** |
| **Horizontal component** | The component of Earth's magnetic field parallel to the surface; strongest at the magnetic equator (where dip = 0°) and zero at the magnetic poles (where dip = 90°); compass needles respond only to this component |
| **Compass** | A magnetised needle that aligns with the horizontal component of Earth's magnetic field; points to magnetic north, not true north |

### Van Allen Radiation Belts

Charged particles from the Sun (solar wind) are trapped by Earth's magnetic field, forming two doughnut-shaped zones called the **Van Allen radiation belts**, discovered by **James Van Allen** using data from the **Explorer 1** satellite in **1958**.

| Belt | Altitude | Composition | Detail |
|------|----------|-------------|--------|
| **Inner belt** | ~1,000–12,000 km | Mainly high-energy **protons** (>100 MeV) | Protons produced from cosmic ray collisions with the upper atmosphere; relatively stable |
| **Outer belt** | ~13,000–60,000 km | Mainly high-energy **electrons** (0.1–10 MeV) | Electrons injected from the geomagnetic tail during solar storms; more variable and dynamic |

Particles spiral along magnetic field lines and bounce between the poles — as they approach a pole, the increasing field density reflects them back, trapping them in the belts. The Van Allen belts pose a radiation hazard to satellites and crewed spacecraft; missions beyond low Earth orbit (e.g., Apollo, Artemis) must minimise transit time through them.

---

## Electromagnetic Induction

| Feature | Detail |
|---------|--------|
| **Discovered by** | **Michael Faraday** in **1831** (independently by Joseph Henry around the same time) |
| **Faraday's Law** | A changing magnetic flux through a circuit induces an electromotive force (EMF); the induced EMF is proportional to the rate of change of magnetic flux |
| **Lenz's Law** | The direction of the induced current is such that it **opposes** the change in magnetic flux that caused it (conservation of energy) — formulated by **Emil Lenz in 1834** |
| **Applications** | Generators, transformers, induction cooktops, wireless charging, metal detectors, electric guitar pickups |

---

## Electric Motor & Generator

| Feature | Electric Motor | Electric Generator |
|---------|---------------|-------------------|
| **Function** | Converts **electrical energy → mechanical energy** | Converts **mechanical energy → electrical energy** |
| **Principle** | A current-carrying conductor in a magnetic field experiences a force | A conductor moving in a magnetic field induces an EMF (Faraday's law) |
| **Fleming's Rule** | **Left-Hand Rule** — thumb (force/motion), forefinger (magnetic field), middle finger (current) | **Right-Hand Rule** — thumb (motion), forefinger (field), middle finger (induced current) |
| **AC vs DC type** | AC motors (induction motor — invented by Nikola Tesla) are simpler and need less maintenance; DC motors allow precise speed control | AC generators (alternators) produce most grid electricity; DC generators (dynamos) used in smaller applications |
| **Examples** | Fans, mixers, pumps, electric vehicles | Power plants (thermal, hydro, wind, nuclear), dynamo on a bicycle |

### AC vs DC — Comparison

| Feature | AC (Alternating Current) | DC (Direct Current) |
|---------|--------------------------|---------------------|
| **Direction of flow** | Reverses direction periodically (sinusoidal wave) | Flows in one direction only, at constant voltage |
| **Frequency** | 50 Hz in India (60 Hz in USA) | Zero (steady state) |
| **Voltage transformation** | Easily stepped up or down using transformers | Cannot be transformed using a simple transformer; requires electronic converters |
| **Transmission** | Efficient over long distances at high voltage (low I²R losses) | Historically limited to short distances; modern HVDC lines used for ultra-long distances and undersea cables |
| **Generation** | Most power plants generate AC | Solar panels and batteries produce DC natively |
| **Safety** | More dangerous at same voltage (causes muscle contraction) | Relatively less dangerous at low voltage |
| **Key proponent** | Nikola Tesla and George Westinghouse | Thomas Edison |
| **Use today** | Grid power supply, household appliances, industrial machinery | Electronics, batteries, electric vehicles, solar energy systems |

### Transformer

| Feature | Detail |
|---------|--------|
| **Function** | Changes AC voltage levels using electromagnetic induction; **does not work with DC** |
| **Step-up** | Increases voltage (more turns in secondary coil); used at power stations to transmit power at high voltage (reduces transmission losses) |
| **Step-down** | Decreases voltage (fewer turns in secondary coil); used near homes to reduce voltage to safe levels (230 V in India) |
| **Relation** | V_s / V_p = N_s / N_p (voltage ratio equals turns ratio) |
| **Key fact** | Power transmission at **high voltage and low current** reduces I²R losses in transmission lines |

### Power Transmission in India

| Feature | Detail |
|---------|--------|
| **Grid voltage levels** | India's national grid uses **220 kV, 400 kV, and 765 kV AC** for bulk power transfer, plus **±500 kV and ±800 kV HVDC** corridors for ultra-long-distance transmission |
| **Why high voltage?** | Doubling the transmission voltage reduces current by half and I²R losses by 75% for the same power — this is why power leaves generating stations at 400–765 kV and is stepped down near consumers |
| **AT&C losses** | Aggregate Technical & Commercial losses were **~16% in 2023–24** at the distribution level; these include technical line losses plus commercial losses (theft, billing inefficiency); government target is to bring AT&C losses below 12% |
| **HVDC advantage** | High Voltage Direct Current is more efficient than AC for distances above ~600 km and for undersea cables — India uses ±800 kV HVDC corridors to move power from generation-rich states to demand centres |

---

## Semiconductors

| Feature | Detail |
|---------|--------|
| **Definition** | Materials with conductivity between conductors and insulators; conductivity increases with temperature (opposite of metals) |
| **Key materials** | **Silicon** (band gap 1.12 eV) and **Germanium** (band gap 0.74 eV); silicon dominates modern electronics |
| **Doping** | Adding impurities to change conductivity — **n-type** (extra electrons, e.g., phosphorus in silicon) and **p-type** (electron holes, e.g., boron in silicon) |

### Semiconductor Devices

| Device | Detail |
|--------|--------|
| **p-n Junction Diode** | Allows current in one direction only (forward bias); used as a rectifier to convert AC to DC; silicon diode has a forward voltage drop of ~0.6–0.7 V |
| **LED (Light Emitting Diode)** | Emits light when forward-biased; energy-efficient; colour depends on the semiconductor material and band gap. The **blue LED** — invented using gallium nitride (GaN) — was the key breakthrough; it enabled white LED lighting (blue LED + yellow phosphor). **Isamu Akasaki, Hiroshi Amano, and Shuji Nakamura** won the **Nobel Prize in Physics (2014)** for this invention |
| **Transistor** | Has 3 layers (NPN or PNP) and 3 terminals (emitter, base, collector); used as an amplifier and a switch; foundation of all digital electronics |
| **Integrated Circuit (IC)** | Thousands to billions of transistors on a single chip; invented by **Jack Kilby** (Texas Instruments, **1958**; Nobel Prize in Physics, **2000**) and **Robert Noyce** (Fairchild Semiconductor) independently |
| **Solar cell** | p-n junction that converts sunlight directly into electricity (photovoltaic effect); silicon cells dominate ~95% of the market; theoretical max efficiency for single-junction silicon ~29% (Shockley-Queisser limit). India targets **500 GW of non-fossil-fuel electricity capacity by 2030** (COP26 pledge), with solar expected to account for ~300 GW; installed solar capacity crossed **129 GW by October 2025** |
| **Microprocessor** | An IC that contains the entire CPU on a single chip; processes instructions in computers, phones, and embedded systems |

### Semiconductor Devices — Applications Table

| Device | Key Application | How It Works |
|--------|----------------|--------------|
| **Diode** | Rectifier (AC to DC conversion) | Allows current in one direction only (forward bias); blocks in reverse bias |
| **LED** | Energy-efficient lighting, displays, indicators | Emits light when electrons recombine with holes in forward bias; colour depends on band gap of material |
| **Photodiode** | Light sensors, optical communication | Generates current when light falls on the p-n junction (reverse of LED) |
| **Solar cell** | Renewable electricity generation | Large-area p-n junction; photovoltaic effect converts sunlight to DC electricity |
| **Transistor** | Amplifiers, digital switches, logic gates | Small base current controls large collector current; basis of all digital electronics |
| **IC (Chip)** | Computers, smartphones, all digital devices | Billions of transistors on a single silicon chip; enables miniaturisation |

### India Semiconductor Mission (ISM)

| Feature | Detail |
|---------|--------|
| **Launched** | December 2021, under the Ministry of Electronics and Information Technology (MeitY) |
| **Fiscal support** | Incentive framework of **Rs 76,000 crore**, offering up to 50% fiscal support for semiconductor fabs, compound semiconductor units, and ATMP (Assembly, Testing, Marking & Packaging) facilities |
| **ISM 2.0** | Announced in **Union Budget 2026–27** — shifts focus from ecosystem creation to ecosystem consolidation; targets semiconductor equipment and materials manufacturing in India, and development of full-stack Indian semiconductor IP |
| **Key project** | **Tata Electronics fab at Dholera, Gujarat** — India's first semiconductor fabrication plant; 300 mm wafer fab in partnership with PSMC (Taiwan); investment of ~Rs 91,000 crore; 28 nm to 110 nm process nodes; operations expected from 2026 |
| **Projects approved** | As of December 2025, **10 projects** with total investment of **Rs 1.60 lakh crore** approved across 6 states — covering silicon fabs, compound semiconductor fabs, and advanced packaging facilities |
| **Strategic goal** | India aims to design and manufacture chips for 70–75% of domestic applications by 2029 |

---

## Nuclear Energy

| Feature | Nuclear Fission | Nuclear Fusion |
|---------|----------------|----------------|
| **Process** | Splitting a heavy nucleus (e.g., Uranium-235) into two lighter nuclei | Combining two light nuclei (e.g., hydrogen isotopes deuterium and tritium) into a heavier nucleus |
| **Energy released** | Large — about 200 MeV per fission event | Even larger — about 17.6 MeV per fusion event, but per kg of fuel, fusion yields ~4 times more energy than fission |
| **Fuel** | Uranium-235, Plutonium-239 | Deuterium, Tritium (hydrogen isotopes) |
| **Natural example** | Radioactive decay of heavy elements | The Sun and all stars are powered by fusion (core temperature ~15 million °C) |
| **Current use** | Commercial nuclear power plants worldwide | Not yet commercially viable; experimental reactors (e.g., ITER in France) |
| **Waste** | Produces long-lived radioactive waste | Produces minimal radioactive waste; no long-lived high-level waste |
| **Chain reaction** | Self-sustaining chain reaction (each fission releases neutrons that trigger more fissions); controlled in reactors using control rods | Requires extreme temperature and pressure to initiate; difficult to sustain |

### India's Three-Stage Nuclear Programme

Formulated by **Homi Jehangir Bhabha** in the 1950s to achieve energy independence, given that India has only ~1-2% of global uranium reserves but ~25% of global thorium reserves.

| Stage | Reactor Type | Fuel | Purpose |
|-------|-------------|------|---------|
| **Stage I** | Pressurised Heavy Water Reactor (PHWR) | Natural uranium (U-238 + U-235) | Generate electricity; produce Plutonium-239 as by-product |
| **Stage II** | Fast Breeder Reactor (FBR) | Plutonium-239 (from Stage I) + Uranium-238 | Breed more fissile material than consumed; multiply fuel supply 65-128 times |
| **Stage III** | Thorium-based Breeder Reactor | Thorium-232 → Uranium-233 | Utilise India's vast thorium reserves for long-term energy security |

India's **Prototype Fast Breeder Reactor (PFBR)** at Kalpakkam, Tamil Nadu (500 MW, sodium-cooled) marks the transition to Stage II. Full-scale thorium utilisation (Stage III) is expected only after 2050.

### Key Nuclear Power Plants in India

| Plant | Location | Reactor Type | Notable Fact |
|-------|----------|-------------|--------------|
| **Tarapur (TAPS)** | Maharashtra | BWR + PHWR | First nuclear power station in India (1969) |
| **Rawatbhata (RAPS)** | Rajasthan | PHWR | Rajasthan-7 (700 MW) connected to grid in 2025 |
| **Kalpakkam (MAPS)** | Tamil Nadu | PHWR | Also hosts the PFBR (Fast Breeder Reactor) and IGCAR |
| **Kudankulam (KKNPP)** | Tamil Nadu | VVER (PWR) | Largest nuclear plant in India; Russian-designed reactors |
| **Kaiga (KGS)** | Karnataka | PHWR | Fully indigenous design |
| **Kakrapar (KAPS)** | Gujarat | PHWR | First 700 MW indigenous PHWR (Kakrapar-3) commissioned here |
| **Narora (NAPS)** | Uttar Pradesh | PHWR | Demonstrates India's indigenous PHWR capability |

---

## Superconductors

| Feature | Detail |
|---------|--------|
| **Definition** | Materials that exhibit **zero electrical resistance** below a characteristic **critical temperature (Tc)** |
| **Meissner effect** | A superconductor **expels all magnetic flux** from its interior when cooled below Tc — discovered by Walther Meissner and Robert Ochsenfeld in **1933**; this causes magnetic levitation |
| **Conventional superconductors** | Critical temperatures typically below 30 K (e.g., mercury Tc = 4.2 K — first superconductor, discovered by Heike Kamerlingh Onnes in **1911**) |
| **High-temperature superconductors** | Tc above 30 K; e.g., YBCO (Y-Ba-Cu-O) with Tc ~90 K — can be cooled with liquid nitrogen (77 K) instead of expensive liquid helium |
| **Applications** | MRI scanners (strong magnetic fields), **Maglev trains** (magnetic levitation), particle accelerators (CERN's LHC), lossless power transmission cables, quantum computing |

---

## UPSC Relevance

### Prelims Focus Areas
- Ohm's Law: V = IR; unit of resistance is Ohm (Ω)
- Series vs parallel circuits — household appliances use parallel wiring
- India's household supply: 230 V AC, 50 Hz
- Fuse melts to break circuit; MCB trips automatically and is reusable
- Faraday's law (1831) — changing magnetic flux induces EMF; Lenz's law — induced current opposes the change
- Fleming's Left-Hand Rule for motors, Right-Hand Rule for generators
- AC can be transformed (step-up/step-down); DC cannot be transformed using a simple transformer
- Transformer works only with AC; step-up for transmission, step-down for distribution
- Silicon band gap 1.12 eV; germanium 0.74 eV; diode forward voltage ~0.7 V
- IC invented by Jack Kilby (1958, Nobel 2000) and Robert Noyce
- Nuclear fission = splitting heavy nucleus; fusion = combining light nuclei; Sun runs on fusion
- India's 3-stage nuclear programme: PHWR → Fast Breeder → Thorium breeder (Homi Bhabha)
- PFBR at Kalpakkam (500 MW); Kudankulam is India's largest nuclear plant (VVER reactors)
- Superconductor: zero resistance below Tc; Meissner effect (1933); first superconductor — mercury (Onnes, 1911)
- Van Allen radiation belts: inner belt (protons, 1,000–12,000 km), outer belt (electrons, 13,000–60,000 km); discovered 1958 (Explorer 1)
- Blue LED — gallium nitride; Nobel Prize 2014 (Akasaki, Amano, Nakamura); enabled white LED lighting
- India's power grid uses 220 kV, 400 kV, 765 kV AC and ±800 kV HVDC for long-distance bulk transfer
- AT&C losses ~16% (2023–24); include both technical losses and commercial losses (theft, billing gaps)

### Mains Focus Areas
- Role of semiconductor industry in India's economic growth — India Semiconductor Mission
- India's three-stage nuclear programme and thorium utilisation — energy security implications
- Superconductors and Maglev technology — potential for Indian railways
- Renewable energy: solar cells (photovoltaic effect) and India's solar energy targets
- Smart grids, power transmission efficiency, and reducing AT&C losses
- Electronics manufacturing and Atmanirbhar Bharat — semiconductor fabs in India
- Nuclear safety and waste management challenges; civil nuclear agreements
- India Semiconductor Mission: Rs 76,000 crore incentive; Tata fab at Dholera (Rs 91,000 crore); ISM 2.0 announced in Budget 2026–27
- India's 500 GW non-fossil-fuel capacity target by 2030 — solar expected to contribute ~300 GW; crossed 129 GW by October 2025
- Van Allen belts and space weather — implications for satellite communication, GPS accuracy, and space missions

---

## Vocabulary

### Semiconductor
- **Pronunciation:** /ˌsɛmikənˈdʌktər/
- **Definition:** A material whose electrical conductivity lies between that of a conductor and an insulator, and which increases with temperature and the addition of impurities (doping).
- **Origin:** From *semi-* (half, from Latin *sēmi-*) + *conductor* (from Latin *condūcere*, to lead together); earliest known use in the 1830s.

### Diode
- **Pronunciation:** /ˈdaɪ.oʊd/
- **Definition:** A two-terminal electronic component that allows electric current to flow in one direction only, used chiefly as a rectifier to convert alternating current to direct current.
- **Origin:** Coined in 1919 by William Henry Eccles from Greek *di-* (two) + *hodos* (way, passage).

### Capacitor
- **Pronunciation:** /kəˈpæsɪtər/
- **Definition:** A passive electronic component that stores electrical energy in an electric field between two conductive plates separated by a dielectric material.
- **Origin:** From *capacity* + *-or*; the term replaced the older word *condenser* (coined by Alessandro Volta in 1782) following a recommendation in the 1926 British Standard Glossary of Terms in Electrical Engineering.

---

## Key Terms

### Ohm's Law
- **Pronunciation:** /oʊmz lɔː/
- **Definition:** A fundamental law of electrical circuits stating that the current (I) through a conductor is directly proportional to the voltage (V) across it and inversely proportional to its resistance (R), expressed as V = IR, provided temperature and other physical conditions remain constant. The SI unit of resistance is the ohm (symbol: omega), where 1 ohm = 1 volt per ampere. Materials that obey Ohm's Law are called "ohmic" conductors (e.g., metals at constant temperature); those that do not (e.g., diodes, transistors) are "non-ohmic."
- **Context:** Named after German physicist Georg Simon Ohm (1789-1854), who published the relationship in his 1827 treatise *Die galvanische Kette, mathematisch bearbeitet* (The Galvanic Circuit Investigated Mathematically). Key related concepts: in a series circuit, total resistance = R1 + R2 + R3 (current is the same through all components, voltage divides); in a parallel circuit, 1/R_total = 1/R1 + 1/R2 + 1/R3 (voltage is the same across all components, current divides). Household appliances are wired in parallel so each operates at full voltage (220V in India) and failure of one device does not affect others.
- **UPSC Relevance:** GS3 (General Science). Prelims tests V = IR and conceptual applications -- series vs parallel circuits (household wiring is parallel), why a 100W bulb glows brighter than a 60W bulb (lower resistance draws more current at same voltage), the unit of resistance (ohm), and power formula (P = V x I = V²/R = I²R). Know the practical application: India's household supply is 220V AC at 50 Hz; electric power (P = VI) determines your electricity bill (measured in kWh). Focus on conceptual understanding and everyday applications rather than numerical calculations. Mains may link to India's electricity distribution losses (~15-20%), smart meters, and power sector reforms.

### Electromagnetic Induction
- **Pronunciation:** /ɪˌlɛktrəʊmæɡˈnɛtɪk ɪnˈdʌkʃən/
- **Definition:** The production of an electromotive force (EMF) and hence an electric current across an electrical conductor caused by a changing magnetic flux through it. Faraday's Law states that the induced EMF is proportional to the rate of change of magnetic flux; Lenz's Law states that the direction of the induced current opposes the change that caused it (conservation of energy). This phenomenon is the operating principle behind electric generators (converting mechanical to electrical energy), transformers (stepping voltage up or down), induction cooktops, and wireless charging.
- **Context:** Discovered independently by Michael Faraday (England) on 29 August 1831 and Joseph Henry (USA) in 1832; later formalised mathematically by James Clerk Maxwell as part of Maxwell's Equations. Fleming's rules help determine directions: Right-Hand Rule for generators (mechanical motion to current), Left-Hand Rule for motors (current to motion). Key distinction: transformers work ONLY with AC (alternating current) because only a changing current produces changing magnetic flux -- this is why DC (direct current) cannot be directly stepped up/down by transformers, and why AC won the "War of Currents" (Nikola Tesla/Westinghouse vs Thomas Edison) for power transmission. India's national grid transmits power at high voltages (400 kV, 765 kV) using step-up transformers to reduce transmission losses (P_loss = I²R; higher voltage means lower current for same power, hence lower losses).
- **UPSC Relevance:** GS3 (General Science / Science & Technology / Energy). Prelims tests Faraday's law (1831), Lenz's law (opposes change), Fleming's Left-Hand (motor) and Right-Hand (generator) Rules, and why transformers work only with AC (changing flux required). Know that India transmits power at high voltage (400-765 kV) to minimise losses, then steps it down for distribution (11 kV) and household use (220V). Mains connects to power transmission efficiency (India's T&D losses ~15-20%), smart grids, India's renewable energy integration challenges (solar/wind produce DC, needs inverters), wireless charging technology, and induction cooking as a clean energy alternative to LPG.

---

*Sources: NCERT Physics (Class 10 & 12), Britannica — Ohm's Law, Wikipedia — Faraday's Law of Induction, Wikipedia — Superconductivity & Meissner Effect, NobelPrize.org — Jack Kilby (2000) & Nobel Prize in Physics 2014, NCEI/NOAA — Earth's Magnetism, Wikipedia — Van Allen Radiation Belt, US DOE — Fission vs Fusion, Wikipedia — India's Three-Stage Nuclear Power Programme, World Nuclear Association — Nuclear Power in India, US DOE — War of Currents (AC vs DC), US DOE — Solar Photovoltaic Cell Basics, PIB — India Semiconductor Mission 2.0, PIB — India's Solar Capacity, Invest India — Semiconductor Opportunity*
