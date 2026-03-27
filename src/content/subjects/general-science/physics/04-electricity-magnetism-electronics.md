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
| **Natural magnets** | Magnetite (lodestone, Fe₃O₄) — first known magnetic material |
| **Artificial magnets** | Made from steel, alnico, or ferrite; can be bar, horseshoe, or cylindrical shaped |
| **Properties** | Like poles repel, unlike poles attract; a freely suspended magnet aligns roughly north-south |
| **Magnetic field** | Region around a magnet where its influence is felt; represented by field lines (from North to South outside the magnet) |

### Earth's Magnetism

| Element | Detail |
|---------|--------|
| **Magnetic poles** | Earth behaves as a giant magnet; the geographic North Pole is near the **magnetic South Pole** and vice versa |
| **Magnetic declination** | Angle between geographic north (true north) and magnetic north at a location; varies from place to place and over time |
| **Magnetic inclination (dip)** | Angle that the Earth's magnetic field makes with the horizontal; **0 degrees at magnetic equator**, **90 degrees at magnetic poles** |
| **Compass** | A magnetised needle that aligns with the horizontal component of Earth's magnetic field; points to magnetic north, not true north |

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
| **Examples** | Fans, mixers, pumps, electric vehicles | Power plants (thermal, hydro, wind, nuclear), dynamo on a bicycle |

### Transformer

| Feature | Detail |
|---------|--------|
| **Function** | Changes AC voltage levels using electromagnetic induction; **does not work with DC** |
| **Step-up** | Increases voltage (more turns in secondary coil); used at power stations to transmit power at high voltage (reduces transmission losses) |
| **Step-down** | Decreases voltage (fewer turns in secondary coil); used near homes to reduce voltage to safe levels (230 V in India) |
| **Relation** | V_s / V_p = N_s / N_p (voltage ratio equals turns ratio) |
| **Key fact** | Power transmission at **high voltage and low current** reduces I²R losses in transmission lines |

---

## Semiconductors

| Feature | Detail |
|---------|--------|
| **Definition** | Materials with conductivity between conductors and insulators; conductivity increases with temperature (opposite of metals) |
| **Key materials** | **Silicon** (band gap 1.17 eV) and **Germanium** (band gap 0.74 eV); silicon dominates modern electronics |
| **Doping** | Adding impurities to change conductivity — **n-type** (extra electrons, e.g., phosphorus in silicon) and **p-type** (electron holes, e.g., boron in silicon) |

### Semiconductor Devices

| Device | Detail |
|--------|--------|
| **p-n Junction Diode** | Allows current in one direction only (forward bias); used as a rectifier to convert AC to DC; silicon diode has a forward voltage drop of ~0.6–0.7 V |
| **LED (Light Emitting Diode)** | Emits light when forward-biased; energy-efficient; colour depends on the semiconductor material and band gap |
| **Transistor** | Has 3 layers (NPN or PNP) and 3 terminals (emitter, base, collector); used as an amplifier and a switch; foundation of all digital electronics |
| **Integrated Circuit (IC)** | Thousands to billions of transistors on a single chip; invented by **Jack Kilby** (Texas Instruments, **1958**; Nobel Prize in Physics, **2000**) and **Robert Noyce** (Fairchild Semiconductor) independently |
| **Solar cell** | p-n junction that converts sunlight directly into electricity (photovoltaic effect); made from silicon |

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
- Transformer works only with AC; step-up for transmission, step-down for distribution
- Silicon band gap 1.17 eV; germanium 0.74 eV; diode forward voltage ~0.7 V
- IC invented by Jack Kilby (1958, Nobel 2000) and Robert Noyce
- Superconductor: zero resistance below Tc; Meissner effect (1933); first superconductor — mercury (Onnes, 1911)

### Mains Focus Areas
- Role of semiconductor industry in India's economic growth — India Semiconductor Mission
- Superconductors and Maglev technology — potential for Indian railways
- Renewable energy: solar cells (photovoltaic effect) and India's solar energy targets
- Smart grids, power transmission efficiency, and reducing AT&C losses
- Electronics manufacturing and Atmanirbhar Bharat — semiconductor fabs in India

---

*Sources: NCERT Physics (Class 10 & 12), Britannica — Ohm's Law, Wikipedia — Faraday's Law of Induction, Wikipedia — Superconductivity & Meissner Effect, NobelPrize.org — Jack Kilby (2000), NCEI/NOAA — Earth's Magnetism*
