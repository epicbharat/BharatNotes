---
layout: topic.njk
title: "Telemedicine & Digital Health — eSanjeevani, ABDM, ABHA & CoWIN"
subject: science-tech
gs_papers:
  - gs3
syllabus_topic: "Science & Technology"
description: "UPSC notes on Telemedicine Practice Guidelines 2020, eSanjeevani platform (43+ crore consultations), Ayushman Bharat Digital Mission (ABDM), ABHA Health ID (72+ crore created), National Health Stack, CoWIN lessons for digital public infrastructure."
chapter: 24
sub_chapter: 13
date: 2026-04-04
tags:
  - science-tech
parent_topic_url: /subjects/science-tech/science-technology/
---

## Introduction

India's healthcare system faces a fundamental challenge: a severe shortage of doctors (doctor-patient ratio of ~1:834 against WHO's recommended 1:1000, though quality and distribution are the deeper problem), with healthcare infrastructure concentrated in urban areas while 65% of the population lives in rural or semi-urban areas. **Telemedicine** — the delivery of health services using telecommunications technology — and India's broader **digital health ecosystem** offer transformative solutions to this access gap. The COVID-19 pandemic dramatically accelerated India's telemedicine adoption, and the frameworks created during 2020–2024 now constitute a global benchmark for low-and-middle-income country digital health systems.

---

## 1. Telemedicine Practice Guidelines 2020

### Background and Notification

The **Telemedicine Practice Guidelines, 2020** were released on **25 March 2020** — just one day after the national COVID-19 lockdown was announced. They were prepared by the **Board of Governors, Medical Council of India (MCI)** in partnership with **NITI Aayog**, and issued under the **Indian Medical Council Act, 1956** (now replaced by the National Medical Commission Act, 2020).

This was India's first legally recognised framework for telemedicine — until 2020, telemedicine existed in a regulatory grey zone.

### Key Provisions

| Feature | Details |
|---------|---------|
| **Who can practise** | Only Registered Medical Practitioners (RMPs) registered with State Medical Councils / National Medical Commission (NMC) |
| **Communication modes** | Text (WhatsApp, SMS), audio (phone), video — all legitimate; mode determines what can be prescribed |
| **Patient identification** | Both doctor and patient must know each other's identity; doctor must display registration number |
| **Consent** | Patient-initiated consultation implies consent; first-time consultation requires explicit consent |
| **Prescription rules** | Three categories of medicines: **List O** (over-the-counter; can be prescribed via any mode), **List A** (prescription drugs; requires audio/video for first consultation), **List B** (specialist drugs; video consultation mandatory) |
| **Excluded** | Remote surgeries, clinical trials, research; excludes hardware/software standards |
| **Training** | All RMPs must complete mandatory online telemedicine course administered by NMC/MCI within 3 years of notification |

### Significance

- Provided legal certainty for the first time — enabling private telehealth platforms (Practo, Apollo Telehealth, mFine, etc.) to operate within a defined framework
- Enabled eSanjeevani's explosive growth during COVID-19 lockdowns
- The guidelines were among the most comprehensive telemedicine regulations issued by any country at the time

---

## 2. eSanjeevani — India's National Telemedicine Platform

**eSanjeevani** is the world's largest government-operated telemedicine service, developed by the **Centre for Development of Advanced Computing (C-DAC), Mohali** under the Ministry of Health and Family Welfare.

### Two Service Models

| Model | Description | Use Case |
|-------|------------|---------|
| **eSanjeevani AB-HWC (Provider-to-Provider)** | Spoke-hub model: health workers at Ayushman Bharat-Health and Wellness Centres (HWCs) connect patients to specialist doctors at hub hospitals | Rural patients access specialists without travelling to district/city hospitals |
| **eSanjeevani OPD (Patient-to-Provider)** | Patients directly consult doctors via mobile/desktop from home; no need to visit health facility | Urban and semi-urban home consultations; COVID-era homebound patients |

### Key Statistics (Verified Data)

| Metric | Figure |
|--------|--------|
| **Total teleconsultations (as of November 2025)** | Over **43 crore** (430 million) |
| **Health facilities as spokes** | 1,31,147 |
| **Hub facilities** | 16,849 |
| **Online OPDs** | 681 |
| **Healthcare providers registered** | 2,30,235+ (doctors, specialists, healthcare workers) |
| **Coverage** | All 28 states + 8 Union Territories |
| **Launch** | 2019 (scaled massively from 2020 during COVID) |

eSanjeevani is cited by WHO and World Bank as a global model for government-operated telemedicine at scale.

---

## 3. Ayushman Bharat Digital Mission (ABDM)

The **Ayushman Bharat Digital Mission (ABDM)** — launched on **27 September 2021** by PM Modi on National Health Authority — is the overarching digital health ecosystem creating the foundational infrastructure for India's digital health.

### ABDM Vision

Create an interoperable digital health ecosystem where every citizen has a unique health ID, all health records are accessible wherever treatment is sought, and health service providers are registered on a national registry — enabling continuous, coordinated healthcare across institutions.

### Core Building Blocks of ABDM

| Block | Description |
|-------|------------|
| **ABHA (Ayushman Bharat Health Account)** | Unique 14-digit Health ID for every citizen; links all health records; voluntary |
| **Healthcare Professionals Registry (HPR)** | National registry of all doctors, nurses, and allied health workers with verified credentials |
| **Health Facility Registry (HFR)** | National registry of all public and private health facilities (hospitals, clinics, labs, pharmacies) |
| **Health Information Exchange and Consent Manager (HIE-CM)** | Framework for patient-controlled sharing of health records across facilities |
| **Unified Health Interface (UHI)** | Open protocol (like UPI for health) for patients to discover and interact with health services |

### ABHA — Ayushman Bharat Health Account

| Feature | Details |
|---------|---------|
| **ABHA numbers created** | **72.25 crore (722.5 million)** as of **31 December 2024** |
| **Linked health records** | 47.12 crore (471.2 million) health records linked to ABHA |
| **Integration** | Linked with eSanjeevani, CoWIN vaccination records, Ayushman Bharat PM-JAY insurance |
| **Voluntary** | ABHA creation is voluntary; not mandatory for accessing health services |

---

## 4. National Health Stack — Technical Architecture

The **National Health Stack (NHS)** is the technology framework underpinning ABDM — a set of open APIs, standards, and infrastructure that any health service provider can build upon.

| Layer | Component |
|-------|----------|
| **Identity layer** | ABHA (Health ID) — the unique patient identifier |
| **Consent layer** | Personal Health Records (PHR) app; patient consents before records are shared |
| **Exchange layer** | HIE framework — FHIR (Fast Healthcare Interoperability Resources) standard for data exchange |
| **Claims layer** | Health Claims Exchange (HCX) — for insurance claim processing; reduces paperwork and fraud |
| **Discovery layer** | Unified Health Interface (UHI) — open network for health service discovery |

The architecture follows the same **DPI (Digital Public Infrastructure)** model as India Stack (Aadhaar + UPI + DigiLocker) — open, interoperable, government-designed but privately operated at scale.

---

## 5. CoWIN — Lessons for Digital Public Infrastructure

**CoWIN** (Co-Win — COVID-19 Vaccine Intelligence Network) was India's real-time vaccination management system developed by the Ministry of Health and Family Welfare.

| Feature | Achievement |
|---------|------------|
| **Total vaccinations managed** | Over **220 crore (2.2 billion) vaccine doses** recorded |
| **Certificates issued** | Digital vaccination certificates (verifiable QR codes) issued to all vaccinated individuals |
| **Integration** | Vaccination records linked to ABHA Health ID |
| **Global recognition** | CoWIN model shared with several countries; India co-hosted the "CoWIN Global Conclave" (2021) to help countries adopt the platform |

**Lessons from CoWIN:**
1. **DPI at scale works:** India vaccinated 220 crore doses using a domestically built tech platform — proving India's capacity to manage world-scale health tech operations
2. **Verifiable credentials:** QR-coded certificates enabled cross-border travel and vaccine verification
3. **Equity challenge:** Digital-first approach initially excluded those without smartphones or internet; demand-side digital divide remains a challenge for inclusive health tech
4. **Open source value:** Releasing CoWIN as open source allowed states and even other nations to adapt it

---

## 6. Challenges in India's Digital Health Ecosystem

| Challenge | Detail |
|-----------|--------|
| **Digital divide** | Only ~56% of Indians have internet access; rural health facilities often lack reliable connectivity |
| **Data privacy** | Health data is sensitive; Digital Personal Data Protection Act 2023 governs consent-based data use; ABDM consent framework must be made robust |
| **Interoperability** | Legacy hospital management systems (HMIS) use proprietary formats; transition to FHIR standards is slow |
| **Cybersecurity** | AIIMS Delhi ransomware attack (November 2022) exposed vulnerabilities in hospital IT; 5 TB of patient data affected |
| **Doctor shortage** | Telemedicine cannot substitute for physical examination in complex cases; rural areas need physical infrastructure too |
| **Health records quality** | Many consultations are episodic; longitudinal health records require consistent use of ABHA across all consultations |

---

## Exam Strategy

**For Prelims:**
- Telemedicine Practice Guidelines 2020: released **25 March 2020**; prepared by **MCI Board of Governors + NITI Aayog**
- eSanjeevani: over **43 crore consultations** (November 2025); developed by **C-DAC, Mohali**; two models: **Provider-to-Provider + Patient-to-Provider**
- ABDM launched: **27 September 2021**
- ABHA: **14-digit** Health ID; **72.25 crore** created (December 2024)
- ABHA linked health records: **47.12 crore**
- CoWIN: managed **220 crore+ vaccine doses**
- AIIMS Delhi cyber attack: **November 2022**
- UHI = Unified Health Interface (like UPI but for health services discovery)
- HCX = Health Claims Exchange (insurance claim processing)

**For Mains (GS Paper 3):**
- Frame digital health answers around: **legal framework (Telemedicine Guidelines 2020) + platform (eSanjeevani) + ecosystem (ABDM/ABHA) + data architecture (National Health Stack) + challenges (divide, privacy, security)**
- ABDM as DPI: "India is building the 'India Stack for Health' — ABHA (identity) + HIE (data exchange) + UHI (service discovery) + HCX (insurance) mirrors the pattern of Aadhaar + UPI + DigiLocker"
- CoWIN lesson: "Government-built open digital public infrastructure can outperform private platforms in scale and reach when designed with inclusivity in mind" — but also highlight digital equity gaps
- AIIMS ransomware attack: critical infrastructure in health must have mandatory cybersecurity standards — link to India's National Cybersecurity Policy
- Telemedicine's limitation: cannot replace hands-on physical examination; safeguards (List A/B prescription rules) in the 2020 guidelines address this
