---
layout: topic.njk
title: "5G, 6G & Telecom Policy — Spectrum, Architecture & India's Rollout"
subject: science-tech
gs_papers:
  - gs3
syllabus_topic: "Science & Technology"
description: "UPSC notes on 5G architecture (SA vs NSA modes), spectrum bands (700 MHz, 3.3 GHz, 26 GHz), India's 5G spectrum auction (July 2022), use cases (IoT, autonomous vehicles, Industry 4.0), TRAI, National Broadband Mission, and Bharat 6G Vision 2030."
chapter: 22
sub_chapter: 22
date: 2026-04-04
tags:
  - science-tech
parent_topic_url: /subjects/science-tech/science-technology/
---

## Introduction

The fifth generation of mobile networks (5G) represents a fundamental shift from 4G — not just faster data speeds but a new communications architecture enabling ultra-low latency, massive device connectivity, and network slicing for specialised use cases. India's 5G spectrum auction in July 2022 marked a landmark in India's telecom transition. Simultaneously, the race towards **6G** (targeting deployment around 2030) has begun globally, with India articulating its "Bharat 6G Vision" as a front-line contributor rather than a consumer.

---

## 1. 5G — Core Concepts and Architecture

### What Makes 5G Different

| Parameter | 4G (LTE) | 5G |
|-----------|----------|-----|
| **Peak data rate** | ~1 Gbps | Up to 20 Gbps |
| **Latency** | 30–50 ms | < 1 ms (URLLC) |
| **Device density** | ~100,000 devices/km² | 1 million devices/km² |
| **Spectrum** | Sub-6 GHz | Sub-6 GHz + mmWave (24–100 GHz) |
| **Key capability** | Mobile broadband | Massive IoT + URLLC + eMBB |

### 5G Use Cases — The Three Pillars

| Use Case Category | Full Name | Applications |
|------------------|-----------|-------------|
| **eMBB** | Enhanced Mobile Broadband | 4K/8K streaming, AR/VR, fixed wireless access, HD video calls |
| **mMTC** | Massive Machine-Type Communications | Smart cities, smart meters, precision agriculture (billions of IoT sensors) |
| **URLLC** | Ultra-Reliable Low-Latency Communications | Autonomous vehicles, remote surgery, industrial automation, drone control |

### SA vs NSA — Deployment Modes

| Mode | Full Name | How It Works | Advantage | Disadvantage |
|------|-----------|-------------|-----------|-------------|
| **NSA** | Non-Stand Alone | 5G radio + 4G core network; 5G "layer" rides on existing 4G infrastructure | Faster, cheaper rollout | Limited 5G features; latency not fully optimised; cannot support full URLLC |
| **SA** | Stand Alone | 5G radio + full 5G core (5GC); completely native 5G network | Full 5G features; network slicing; ultra-low latency; better security | Higher infrastructure investment; longer deployment time |

**India's deployment split:**
- **Jio** deployed large-scale **SA (Stand Alone)** network using 700 MHz (low band) for rural coverage and C-band (3.5 GHz) for urban density
- **Airtel** opted for **NSA** approach on existing 4G infrastructure for faster urban rollout
- **Vodafone Idea** started NSA but with limited rollout pace

---

## 2. India's 5G Spectrum Auction — July 2022

India's landmark 5G spectrum auction ran from **26 July to 1 August 2022** (7 days, 40 rounds of bidding).

### Key Auction Data

| Parameter | Details |
|-----------|---------|
| **Auction period** | 26 July – 1 August 2022 |
| **Spectrum bands** | 700 MHz, 800 MHz, 900 MHz, 1800 MHz, 2100 MHz, 2500 MHz, 3300 MHz (C-band), 26 GHz (mmWave) |
| **Total bids** | Over ₹1.5 lakh crore |
| **Top bidder** | Reliance Jio — ₹88,078 crore; 24,740 MHz across 700 MHz, 800 MHz, 1800 MHz, 3300 MHz, 26 GHz |
| **Airtel** | ₹43,084 crore; 19,867 MHz across 900 MHz, 1800 MHz, 2100 MHz, 3300 MHz, 26 GHz |
| **Vodafone Idea** | ₹18,799 crore; 6,228 MHz across 800 MHz, 2100 MHz, 2500 MHz, 3300 MHz, 26 GHz |
| **First commercial launch** | October 2022 — Airtel launched in Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Siliguri, Nagpur, Varanasi |

### Spectrum Band Characteristics

| Band | Frequency | Characteristic | Use |
|------|-----------|---------------|-----|
| **Low band (700 MHz)** | Sub-1 GHz | Long range, deep indoor penetration | Rural coverage, national reach — Jio's SA network |
| **Mid band / C-band (3300–3600 MHz)** | Sub-6 GHz | Balance of coverage and capacity | Urban 5G — primary band for both Jio and Airtel |
| **High band / mmWave (26 GHz)** | Millimeter wave | Massive capacity, very short range (few hundred metres) | Dense urban venues — stadiums, airports, manufacturing |

---

## 3. India's 5G Use Cases — Key Government Initiatives

- **Industry 4.0:** Private 5G networks for smart factories; DPIIT promoting 5G-connected manufacturing clusters
- **Agriculture:** 5G-enabled precision farming — real-time soil sensor data, drone management, livestock tracking
- **Healthcare:** Remote surgery pilots (AIIMS + telecom operators); real-time patient monitoring from ambulances
- **Smart Cities:** Traffic management, public safety surveillance, smart utilities
- **Education:** Low-latency AR/VR learning applications for rural students via Fixed Wireless Access
- **Defence:** Secure tactical communications; drone swarm coordination

---

## 4. Telecom Regulatory Framework — TRAI and DoT

| Body | Role |
|------|------|
| **TRAI (Telecom Regulatory Authority of India)** | Recommends spectrum pricing and allocation; sets service quality benchmarks; consumer protection; established under **TRAI Act 1997** |
| **DoT (Department of Telecommunications)** | Policy formulation, spectrum management, licensing; under Ministry of Communications |
| **BSNL / MTNL** | State-owned operators; BSNL is developing indigenous 4G/5G stack with TCS and C-DOT |

**National Broadband Mission (NBM):** Launched in 2019 under DoT; aims to provide **broadband access to all villages** by 2022 (extended targets). Target: 10 Gbps connectivity to Gram Panchayats via BharatNet optical fibre.

**Telecommunications Act 2023:** India's new comprehensive telecom law (replacing the Indian Telegraph Act 1885 and Indian Wireless Telegraphy Act 1933), enacted in December 2023. Key features:
- Spectrum assigned by government (assignment vs. auction) — government retains right to assign spectrum directly for specific purposes
- Expanded scope to cover OTT communications for future regulation
- Biometric verification for SIM cards
- Emergency communications provisions

---

## 5. Bharat 6G Vision

On **23 March 2023**, Prime Minister Modi unveiled India's **"Bharat 6G Vision"** — positioning India as a front-line designer and developer of 6G technology by 2030.

| Feature | Detail |
|---------|--------|
| **Announced** | 23 March 2023 |
| **Target** | 6G commercial deployment by 2030 |
| **Phase 1** | Exploratory R&D, proof-of-concept experiments, IIT partnerships |
| **Phase 2** | Scalable implementation, IP creation, testbeds, commercialisation pathways |
| **Spectrum** | Sub-THz and THz bands being researched; India's NFAP 2025 identifies 6425–7125 MHz (Upper 6 GHz) for IMT (5G Advanced / 6G) |
| **Institutions** | IITs, C-DOT, TIFAC — research consortium framework |
| **Global context** | 6G commercial deployment expected globally: 2030 (South Korea, Japan, China, EU all have national 6G programmes) |

**6G Technology Improvements over 5G:**
- Peak data rates up to 1 Tbps (50x faster than 5G)
- Latency < 0.1 ms (10x lower than 5G)
- AI-native network (AI integrated into the network architecture, not added on top)
- Integrated sensing and communication
- Sustainable networks (energy-efficient by design)

---

## Exam Strategy

**For Prelims:**
- India's 5G spectrum auction: **26 July – 1 August 2022**; top bidder: **Reliance Jio (₹88,078 crore)**
- 5G spectrum bands auctioned: **700 MHz, 3300 MHz (C-band), 26 GHz (mmWave)** — remember at least these three
- Jio chose **SA (Stand Alone)** mode; Airtel chose **NSA (Non-Stand Alone)** mode
- Three 5G pillars: **eMBB** (enhanced broadband), **mMTC** (massive IoT), **URLLC** (ultra-low latency for autonomous vehicles / remote surgery)
- TRAI established under **TRAI Act 1997**; recommendation body (not allocator — spectrum is DoT domain)
- Bharat 6G Vision: announced **23 March 2023**; 6G target: **2030**
- Telecommunications Act: **December 2023** — replaced Indian Telegraph Act 1885

**For Mains (GS Paper 3):**
- 5G's transformative potential: frame answers around the three pillars — eMBB (consumer), mMTC (industrial/agricultural IoT), URLLC (critical infrastructure like surgery, autonomous vehicles)
- Jio's SA vs Airtel's NSA: India has both approaches running in parallel — SA is more future-proof, NSA is faster to market
- India's 6G ambition: "Bharat 6G Vision shifts India from technology importer to contributor — link to Atmanirbhar Bharat in telecom, indigenous 4G/5G stack by BSNL+TCS+C-DOT"
- Digital divide concern: 5G rollout is urban-centric; National Broadband Mission's BharatNet must extend fibre backhaul to rural areas for true inclusive connectivity
