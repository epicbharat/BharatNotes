---
layout: topic.njk
title: "Semiconductors, Diodes, Transistors & Logic Gates — Electronics for UPSC"
subject: general-science
parent_topic: "Physics"
parent_topic_url: "/subjects/general-science/physics/"
gs_papers:
  - gs3
syllabus_topic: "General Science"
description: "UPSC notes on semiconductors — intrinsic and extrinsic, p-n junction diode, rectifiers, LED, photodiode, solar cell, transistor (NPN/PNP), logic gates (AND, OR, NOT, NAND, NOR), Boolean algebra, applications in everyday devices and India's semiconductor policy."
sub_chapter: 10
date: 2026-03-29
foundation: true
prelims: true
mains: false
tags:
  - general-science
---

**Semiconductors** are the foundation of modern electronics — from the smartphone in your pocket to India's ambitions of becoming a global chip manufacturing hub. For UPSC, this topic appears in Science and Technology questions, particularly in Prelims, and increasingly in GS3 questions on India's technology policy.

## What is a Semiconductor?

A semiconductor is a material whose electrical conductivity lies between that of a **conductor** (like copper) and an **insulator** (like rubber). The most important semiconductor materials are:

| Material | Band Gap | Use |
|---|---|---|
| Silicon (Si) | 1.12 eV | Most widely used — computer chips, solar cells |
| Germanium (Ge) | 0.67 eV | Older devices; some high-frequency applications |
| Gallium Arsenide (GaAs) | 1.42 eV | LEDs (infrared), laser diodes, solar cells |
| Indium Gallium Nitride (InGaN) | Variable | Blue/white LEDs |

The **band gap** is the energy difference between the valence band (where electrons are bound) and the conduction band (where electrons move freely). Smaller band gap = easier to conduct; too small = always a conductor.

## Intrinsic and Extrinsic Semiconductors

**Intrinsic semiconductor:** Pure semiconductor (e.g., pure silicon). At room temperature, some electrons gain enough energy to jump to the conduction band, leaving behind **holes** (positive charge carriers). Equal numbers of electrons and holes are generated.

**Extrinsic semiconductor:** Pure semiconductor doped with tiny amounts of impurity atoms to dramatically increase conductivity.

| Type | Dopant | Majority Carriers | Example Dopants |
|---|---|---|---|
| **N-type** | Pentavalent (5 valence electrons) | Electrons (negative) | Phosphorus, Arsenic, Antimony |
| **P-type** | Trivalent (3 valence electrons) | Holes (positive) | Boron, Aluminium, Gallium |

In **N-type**, the extra electron from the pentavalent dopant is loosely bound and easily donated to the conduction band. In **P-type**, the missing electron creates a hole that acts as a positive charge carrier.

## P-N Junction and Diode

When P-type and N-type semiconductors are joined, a **P-N junction** forms. At the junction:
- Electrons from N-side diffuse to P-side; holes from P-side diffuse to N-side
- This creates a **depletion region** (zone depleted of free charge carriers) with a built-in electric field opposing further diffusion

**Forward bias:** Positive terminal connected to P-side, negative to N-side — reduces depletion region, allows current to flow above a threshold voltage (~0.7V for silicon).

**Reverse bias:** Positive terminal to N-side — widens depletion region, blocks current (only tiny leakage current flows). At very high reverse voltage, **breakdown** occurs.

### Types of Diodes

| Diode | Working Principle | Key Applications |
|---|---|---|
| **Rectifier diode** | Allows current in one direction only | AC to DC conversion (half-wave, full-wave rectifiers) |
| **Zener diode** | Operates in reverse breakdown region at fixed voltage | Voltage regulation, reference voltage circuits |
| **LED (Light Emitting Diode)** | Forward-biased electrons recombine with holes, releasing photons | Lighting, indicators, displays |
| **Photodiode** | Reverse-biased; incident light creates electron-hole pairs (photocurrent) | Light sensors, optical fibre receivers, remote controls |
| **Solar cell** | P-N junction without external bias; light generates current (photovoltaic effect) | Solar energy conversion |

**LED colour depends on band gap:**
- GaAs: infrared (TV remotes)
- GaP: red/green
- InGaN: blue (1990s breakthrough by Nakamura — Nobel Prize 2014); combining blue LED with phosphor coating produces **white light** for general lighting

**Solar cell efficiency:** Commercial silicon solar cells achieve 15–22% efficiency. The UJALA scheme and Street Lighting National Programme (SLNP) have replaced conventional streetlights with LEDs — as of 2025, more than **1.34 crore LED streetlights** installed, saving over 9,001 million units of electricity annually.

## Transistors

A **transistor** is a three-terminal semiconductor device used as a switch or amplifier.

| Terminal | Function |
|---|---|
| **Emitter (E)** | Emits majority carriers; heavily doped |
| **Base (B)** | Controls current flow; very thin, lightly doped |
| **Collector (C)** | Collects majority carriers; moderately doped |

### NPN vs PNP

| Type | Structure | Current direction | Use |
|---|---|---|---|
| **NPN** | N-P-N | Conventional current: Collector → Emitter | More common; faster switching |
| **PNP** | P-N-P | Conventional current: Emitter → Collector | Complement to NPN |

**Transistor as a switch:** In digital circuits, the transistor operates between two states:
- **Saturation region:** Base current is high; transistor is fully "ON" — acts as a closed switch
- **Cut-off region:** Base current is zero; transistor is fully "OFF" — acts as an open switch

**Transistor as an amplifier:** A small base current controls a much larger collector current. The ratio is the **current gain (β or hFE)** — typically 50–300 for BJTs.

**BJT vs MOSFET:**

| Parameter | BJT (Bipolar Junction Transistor) | MOSFET (Metal Oxide Semiconductor FET) |
|---|---|---|
| Control | Current-controlled (base current) | Voltage-controlled (gate voltage) |
| Power consumption | Higher | Lower (key for ICs) |
| Speed | Moderate | Very high |
| Use | Amplifiers, analog circuits | Logic gates, microprocessors, power electronics |

Modern microprocessors use **billions of MOSFETs** — the Intel 4004 (1971, the first commercial microprocessor) had 2,300 transistors; contemporary chips (Apple M-series, Intel Core Ultra) contain over 100 billion transistors. This exponential growth was predicted by **Moore's Law** — the observation that transistor count on a chip approximately doubles every two years (Gordon Moore, 1965).

## Logic Gates

Logic gates are the building blocks of digital circuits. They perform **Boolean algebra** operations on binary inputs (0 = LOW, 1 = HIGH).

### Basic Logic Gates

| Gate | Symbol Logic | Rule | Truth Table Summary |
|---|---|---|---|
| **AND** | A · B | Output is 1 only when ALL inputs are 1 | 1,1→1; all others→0 |
| **OR** | A + B | Output is 1 when ANY input is 1 | 0,0→0; all others→1 |
| **NOT** | Ā | Output is complement of input | 1→0; 0→1 |
| **NAND** | NOT(A · B) | AND followed by NOT | 1,1→0; all others→1 |
| **NOR** | NOT(A + B) | OR followed by NOT | 0,0→1; all others→0 |
| **XOR** | A ⊕ B | Output 1 when inputs are different | 0,1→1; 1,0→1; others→0 |
| **XNOR** | NOT(A ⊕ B) | Output 1 when inputs are same | 0,0→1; 1,1→1; others→0 |

### Universal Gates: NAND and NOR

**NAND and NOR gates** are called **universal gates** because any logic circuit (AND, OR, NOT, or complex combinations) can be built using only NAND gates, or only NOR gates. This is practically important because:
- Chip manufacturers can simplify fabrication by using only one type of gate
- NAND-based ICs (like CMOS 7400 series) are standard building blocks

**Example:** NOT gate from NAND: connect both inputs of a NAND gate to the same input signal → output is complement.

### Half Adder and Full Adder

A **half adder** adds two single bits: produces a Sum (XOR of inputs) and a Carry (AND of inputs). A **full adder** adds three bits (two inputs + carry-in) — the basis of arithmetic units in all processors.

## Applications in Everyday Devices

| Device | Semiconductor Component | Function |
|---|---|---|
| Smartphone | Billions of MOSFETs on application processor | Computing, memory, display control |
| Solar panel | Silicon P-N junction | Converts sunlight to electricity |
| TV remote | GaAs LED (IR) | Transmits infrared signals |
| UPS/Inverter | Power MOSFETs/IGBTs | Converts DC battery to AC power |
| LED bulb | InGaN LEDs | Efficient white light generation |
| Digital thermometer | Thermistor (semiconductor) | Temperature-dependent resistance |
| Barcode scanner | Photodiode array | Reads reflected light patterns |

## India's Semiconductor Mission

India imports ~$38 billion worth of semiconductors annually (2023 figure; projected to grow as electronics manufacturing expands). To reduce this dependence and build domestic capability:

**India Semiconductor Mission (ISM):** Launched December 2021 under the Ministry of Electronics and IT (MeitY); backed by a **₹76,000 crore incentive corpus**. Provides up to 50% of project cost for semiconductor fabs and display fabs.

**Major approved projects under ISM:**

| Company | Location | Type | Investment |
|---|---|---|---|
| **Micron Technology** | Sanand, Gujarat | ATMP (Assembly, Test, Mark, Pack) | ₹22,516 crore |
| **Tata Electronics + PSMC (Taiwan)** | Dholera, Gujarat | Semiconductor fab (28nm and above) | ₹91,000 crore |
| **Tata Semiconductor Assembly and Test (TSAT)** | Morigaon, Assam | ATMP facility | ₹27,000 crore |
| **CG Power + Renesas (Japan)** | Sanand, Gujarat | Semiconductor OSAT facility | ₹7,600 crore |

Micron's Sanand facility was the **first major semiconductor investment** approved under ISM (June 2023) — India's first commercial semiconductor ATMP plant.

**Design Linked Incentive (DLI) scheme:** Supports semiconductor chip design startups with financial incentives and infrastructure — targeting India's strength in chip design (many Indian engineers work in chip design globally).

**Strategic importance:** Semiconductors are critical to defence electronics, 5G infrastructure, electric vehicles, and AI hardware. India's semiconductor ambitions are also driven by supply chain de-risking post-COVID (when global chip shortage hit auto and electronics industries hard).

## Exam Strategy

**For Prelims:**
- Distinguish N-type (pentavalent dopant, electrons majority) from P-type (trivalent dopant, holes majority)
- Zener diode → voltage regulation; LED → forward biased, emits light; Photodiode → reverse biased, detects light
- NAND and NOR are universal gates — can build all other gates
- Moore's Law — transistor count doubles every ~2 years
- India Semiconductor Mission — ₹76,000 crore; Micron in Sanand (first ATMP); Tata in Dholera (fab) and Morigaon (ATMP)
- UJALA/SLNP — 1.34 crore LED streetlights installed; 50% electricity saving

**For Mains (GS3):**
- India's semiconductor policy: why it matters, what has been achieved, challenges (talent, water, supply chain ecosystem)
- Solar cell technology: how semiconductors enable renewable energy; efficiency improvements
- Digital India and chip self-sufficiency: strategic and economic arguments

## Previous Year Questions (PYQs)

### Prelims

1. With reference to LED (Light Emitting Diode), which of the following statements is/are correct? (UPSC 2016) — *LED is a forward-biased P-N junction that emits light when electrons recombine with holes*
2. Which of the following is a universal logic gate? (a) AND (b) OR (c) NAND (d) XOR — *Answer: NAND (also NOR)*
3. Consider the following statements about India Semiconductor Mission: The ISM was constituted under MeitY with a corpus of ₹76,000 crore. (UPSC-style question)
4. The UJALA scheme relates to: — *Distribution of energy-efficient LED bulbs at subsidised prices*

### Mains

1. What are semiconductors? Explain the difference between intrinsic and extrinsic semiconductors. Discuss India's policy initiatives to develop a domestic semiconductor ecosystem. (GS3, 250 words)
2. "India's dependence on semiconductor imports is a strategic vulnerability." Critically examine the India Semiconductor Mission as a response to this challenge. (GS3, 250 words)
