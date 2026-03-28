---
layout: topic.njk
title: "Waves, Communication Technology & Fibre Optics — Radio, Satellite, Radar & Telecom Physics"
subject: general-science
gs_papers:
  - gs3
syllabus_topic: "General Science"
parent_topic: "Physics"
parent_topic_url: "/subjects/general-science/physics/"
description: "UPSC notes on wave physics — types, properties, radio waves, satellite communication, radar, sonar, fibre optics, 5G technology, and communication systems."
sub_chapter: 8
chapter: 8
date: 2026-03-29
foundation: true
prelims: true
mains: true
tags:
  - general-science
  - topic
---

## Overview

Waves are disturbances that transfer energy from one point to another without the permanent displacement of the medium. Wave phenomena underpin virtually all modern communication technologies — from radio broadcasting and satellite TV to fibre-optic internet and 5G mobile networks. For UPSC Prelims, questions frequently test the electromagnetic spectrum, principles of radar and sonar, satellite orbits, and emerging technologies like fibre optics and Li-Fi.

> **Exam Strategy:** Focus on the electromagnetic spectrum table (wavelength ranges, uses), the difference between radar and sonar, satellite orbit types (GEO/LEO/polar), and the principle of total internal reflection in fibre optics. Application-based questions are common — e.g., "Why can't microwaves pass through walls easily?", "What principle does fibre optics use?"

---

## Types of Waves

### Classification by Medium Requirement

| Type | Medium Required? | Nature | Examples |
|------|-----------------|--------|----------|
| **Mechanical Waves** | Yes — need a material medium | Disturbance travels through particles of the medium | Sound waves, water waves, seismic waves |
| **Electromagnetic Waves** | No — can travel through vacuum | Oscillating electric and magnetic fields perpendicular to each other | Light, radio waves, X-rays, microwaves |
| **Matter Waves** | Associated with moving particles | De Broglie waves (quantum mechanics) | Electron beams |

### Classification by Particle Motion

| Type | Particle Vibration | Examples |
|------|-------------------|----------|
| **Transverse Waves** | Perpendicular to the direction of wave propagation | Light waves, waves on a string, S-waves (seismic) |
| **Longitudinal Waves** | Parallel to the direction of wave propagation | Sound waves, compression waves in a spring, P-waves (seismic) |

> **Key Fact:** Sound waves are longitudinal and require a medium — they cannot travel through a vacuum. Light waves are transverse electromagnetic waves and can travel through a vacuum at approximately 3 x 10^8 m/s.

---

## Wave Properties

| Property | Definition | Symbol | SI Unit |
|----------|-----------|--------|---------|
| **Wavelength** | Distance between two consecutive crests (or troughs) | lambda | metre (m) |
| **Frequency** | Number of complete oscillations per second | f | hertz (Hz) |
| **Amplitude** | Maximum displacement of a particle from its mean position | A | metre (m) |
| **Velocity** | Speed at which the wave propagates through the medium | v | m/s |
| **Time Period** | Time taken for one complete oscillation | T | second (s) |

**Fundamental Wave Equation:** v = f x lambda

- Frequency and wavelength are inversely proportional (for a given wave speed)
- Higher frequency = shorter wavelength = higher energy (for electromagnetic waves)

### Wave Phenomena

| Phenomenon | Description |
|-----------|-------------|
| **Reflection** | Wave bounces back from a surface (echo is reflection of sound) |
| **Refraction** | Wave changes direction when entering a different medium (bending of light in water) |
| **Diffraction** | Wave bends around obstacles or spreads through narrow openings |
| **Interference** | Two waves superpose — constructive (amplitudes add) or destructive (amplitudes cancel) |
| **Polarisation** | Restriction of wave vibrations to a single plane (only transverse waves can be polarised) |
| **Doppler Effect** | Change in observed frequency when source and observer are in relative motion |

> **Prelims Tip:** The Doppler effect explains why an ambulance siren sounds higher-pitched as it approaches and lower-pitched as it moves away. This principle is also used in Doppler radar for weather forecasting and speed guns used by traffic police.

---

## The Electromagnetic Spectrum

All electromagnetic waves travel at the speed of light (approximately 3 x 10^8 m/s) in a vacuum. They differ in wavelength and frequency.

| EM Radiation | Wavelength Range | Frequency Range | Key Uses |
|-------------|-----------------|-----------------|----------|
| **Radio Waves** | >1 mm (up to thousands of km) | <300 GHz | AM/FM radio, TV broadcasting, communication |
| **Microwaves** | 1 mm – 1 m | 300 MHz – 300 GHz | Microwave ovens, satellite communication, radar, Wi-Fi |
| **Infrared (IR)** | 700 nm – 1 mm | 300 GHz – 430 THz | Remote controls, thermal imaging, night-vision devices |
| **Visible Light** | 400 nm – 700 nm | 430 THz – 750 THz | Human vision, photography, optical instruments |
| **Ultraviolet (UV)** | 10 nm – 400 nm | 750 THz – 30 PHz | Sterilisation, vitamin D synthesis, fluorescent lamps |
| **X-rays** | 0.01 nm – 10 nm | 30 PHz – 30 EHz | Medical imaging, security scanning, crystallography |
| **Gamma Rays** | <0.01 nm | >30 EHz | Cancer treatment (radiotherapy), nuclear reactions, sterilisation |

> **Mnemonic for EM Spectrum (increasing frequency):** **R**emember **M**y **I**nstructions **V**isible **U**nder **X**-ray **G**lasses — Radio, Microwave, Infrared, Visible, Ultraviolet, X-ray, Gamma.

---

## Radio Communication

### AM vs FM Broadcasting

| Feature | AM (Amplitude Modulation) | FM (Frequency Modulation) |
|---------|--------------------------|--------------------------|
| **What is modulated** | Amplitude of carrier wave | Frequency of carrier wave |
| **Frequency Band** | 530–1710 kHz (Medium Wave) | 88–108 MHz (VHF) |
| **Range** | Long range (hundreds of km) — reflects off ionosphere | Short range (50–100 km) — line of sight |
| **Sound Quality** | Lower — susceptible to noise | Higher — resistant to noise and interference |
| **Bandwidth** | Narrow (10 kHz) | Wider (200 kHz) |
| **Use** | All India Radio (MW/SW), news broadcasts | FM radio stations, music broadcasting |

### Shortwave Radio

- Uses frequencies between 3–30 MHz (HF band)
- Can propagate over very long distances by reflecting off the ionosphere (sky wave propagation)
- Used for international broadcasting (BBC World Service, Voice of America)

---

## Satellite Communication

### How It Works

A ground station (uplink) transmits a signal to a satellite, which amplifies it using a **transponder** and retransmits it back to Earth (downlink) at a different frequency. VSAT (Very Small Aperture Terminal) systems use small dish antennas for direct satellite communication.

### Types of Satellite Orbits

| Orbit Type | Altitude | Period | Key Features | Use |
|-----------|----------|--------|--------------|-----|
| **GEO (Geostationary)** | ~35,786 km | 24 hours | Appears stationary over one point on Earth; equatorial orbit | TV broadcasting, weather monitoring (INSAT series) |
| **LEO (Low Earth Orbit)** | 160–2,000 km | ~90 minutes | Close to Earth; low latency; many satellites needed for coverage | Earth observation, Starlink internet, ISS |
| **MEO (Medium Earth Orbit)** | 2,000–35,786 km | 2–12 hours | Between LEO and GEO | GPS/NavIC navigation satellites |
| **Polar Orbit** | ~600–800 km | ~90–100 minutes | Passes over both poles; covers entire Earth surface | Remote sensing, weather satellites, mapping |
| **Sun-Synchronous Orbit** | ~600–800 km | ~90–100 minutes | Special polar orbit that maintains consistent sun angle | Consistent lighting for Earth observation imagery |

> **Key Fact:** India's INSAT series satellites are in geostationary orbit and provide telecommunications, broadcasting, meteorology, and search-and-rescue services. India's NavIC (Navigation with Indian Constellation) uses 7 satellites in GEO and geosynchronous orbits to provide regional navigation covering India and surrounding areas.

---

## Radar

**RADAR** = **Ra**dio **D**etection **A**nd **R**anging

### Principle

A radar transmitter emits short pulses of radio waves (microwaves). When these waves hit an object, they are reflected back. The radar receiver detects the reflected signal. The time delay between transmission and reception determines the distance to the object; the frequency shift (Doppler effect) reveals its speed.

### Types of Radar

| Type | Principle | Applications |
|------|----------|--------------|
| **Pulse Radar** | Measures time delay of reflected pulse | Air traffic control, ship navigation |
| **Doppler Radar** | Measures frequency shift of reflected wave to detect motion | Weather forecasting (tracking storms, rainfall), speed guns |
| **Synthetic Aperture Radar (SAR)** | Uses motion of radar antenna to create high-resolution images | Satellite imaging, terrain mapping, military reconnaissance |
| **Phased Array Radar** | Electronically steers beam without moving antenna | Military defence systems, weather monitoring |

> **Prelims Tip:** Doppler radar is used by the India Meteorological Department (IMD) for cyclone tracking and rainfall estimation. The Doppler effect causes the reflected wave frequency to shift — higher if the target approaches, lower if it recedes.

---

## Sonar

**SONAR** = **So**und **N**avigation **A**nd **R**anging

### Principle

Sonar uses sound waves (typically ultrasound) to detect and locate objects underwater. Sound travels faster in water (~1,500 m/s) than in air (~343 m/s at 20 degrees C).

### Active vs Passive Sonar

| Feature | Active Sonar | Passive Sonar |
|---------|-------------|---------------|
| **How it works** | Emits sound pulses and listens for echoes | Only listens for sounds emitted by other objects |
| **Detection** | Distance and direction of target | Direction and type of target (by acoustic signature) |
| **Advantage** | Precise distance measurement | Does not reveal the listener's position |
| **Disadvantage** | Reveals position of the user | Cannot determine exact distance |
| **Use** | Submarine detection, fish finders, ocean floor mapping, depth sounding | Military submarines tracking enemy vessels, marine research |

> **Key Fact:** Each submarine type has a unique acoustic "signature" — the pattern of sounds from its propeller, engines, and pumps — that trained sonar operators can identify. Active sonar sends a "ping" and measures the echo return time.

---

## Fibre Optics

### Principle — Total Internal Reflection

When light passes from a denser medium (glass core) to a rarer medium (cladding) at an angle greater than the **critical angle**, it is completely reflected back into the denser medium. This phenomenon — **total internal reflection** — keeps light trapped inside the optical fibre, allowing it to travel long distances with minimal signal loss.

### Structure of an Optical Fibre

An optical fibre consists of:
1. **Core** — thin glass or plastic centre through which light travels
2. **Cladding** — outer layer with lower refractive index (enables total internal reflection)
3. **Buffer coating** — protective plastic jacket

### Single-Mode vs Multimode Fibres

| Feature | Single-Mode Fibre | Multimode Fibre |
|---------|-------------------|-----------------|
| **Core diameter** | 8–10 micrometres | 50–62.5 micrometres |
| **Light path** | Single ray along the axis | Multiple rays at different angles |
| **Bandwidth** | Very high (virtually unlimited) | Lower (signal dispersion at longer distances) |
| **Distance** | Long distance (>1 km, up to 100+ km) | Short distance (<1 km, within buildings/campuses) |
| **Cost** | Higher (precision alignment needed) | Lower |
| **Use** | Telecommunications backbone, undersea cables | Data centres, local area networks |

### Advantages of Fibre Optics Over Copper

| Advantage | Explanation |
|-----------|-------------|
| **Higher bandwidth** | Can carry far more data than copper cables |
| **Lower attenuation** | Signal loss is much less over long distances |
| **No electromagnetic interference** | Light signals are immune to EMI — no crosstalk |
| **Lighter and thinner** | Easier to install in ducts and conduits |
| **More secure** | Difficult to tap without detection |
| **Non-conductive** | No risk of electric shock or sparking |

---

## 5G Technology

### What is 5G?

Fifth-generation mobile network technology offering significantly higher speed, lower latency, and greater capacity than 4G/LTE.

### Key Technologies in 5G

| Technology | Description |
|-----------|-------------|
| **mmWave (Millimetre Wave)** | Uses frequencies between 24–100 GHz; short wavelengths (1–10 mm) carry large amounts of data at multi-gigabit speeds; limited range and penetration |
| **Massive MIMO** | Uses large antenna arrays (64–256 elements) to serve multiple users simultaneously; steers signal beams towards individual users, reducing interference |
| **Network Slicing** | Creates multiple virtual networks on a single physical infrastructure — each "slice" tailored for specific needs (e.g., one for video streaming, another for autonomous vehicles) |
| **Beamforming** | Focuses signal energy in the direction of the user rather than broadcasting in all directions |
| **Small Cells** | Dense network of low-power base stations to cover short distances, especially in urban areas |

### 5G Performance Specifications

| Parameter | 5G Target |
|-----------|-----------|
| **Peak data rate** | Up to 10 Gbps (downlink) |
| **Latency** | As low as 1 millisecond |
| **Connection density** | Up to 1 million devices per square km |
| **Key use cases** | Enhanced Mobile Broadband (eMBB), Ultra-Reliable Low-Latency Communication (URLLC), Massive Machine-Type Communication (mMTC) |

> **URLLC Applications:** Autonomous vehicles, remote robotic surgery, drone control, and industrial automation all require the ultra-low latency (1 ms) and near-zero packet loss that 5G URLLC network slicing provides.

---

## Li-Fi (Light Fidelity)

### Concept

Li-Fi uses visible light for wireless data transmission. The term was coined by Professor **Harald Haas** of the University of Edinburgh during a TED talk in 2011.

### How It Works

LED light bulbs are switched on and off at extremely high speeds (imperceptible to the human eye), encoding data in the light pulses. A photodetector receives and decodes the signal.

| Feature | Li-Fi | Wi-Fi |
|---------|-------|-------|
| **Medium** | Visible light | Radio waves |
| **Speed** | Up to 100 Gbps (laboratory) | Up to 10 Gbps (Wi-Fi 6E) |
| **Range** | Limited to line of sight (within a room) | Passes through walls; wider coverage |
| **Interference** | No RF interference | Subject to RF interference |
| **Security** | High — light cannot pass through walls | Lower — radio waves can be intercepted outside |
| **Best Use** | Hospitals (no RF interference), aircraft cabins, underwater communication | General-purpose indoor/outdoor connectivity |

---

## Quantum Communication — Basics

### Principle

Quantum communication uses principles of quantum mechanics — particularly **quantum entanglement** and the **no-cloning theorem** — to create theoretically unbreakable encryption.

### Quantum Key Distribution (QKD)

QKD allows two parties to generate a shared secret key using quantum states (typically photon polarisation). Any attempt to intercept the key disturbs the quantum states, alerting the communicating parties to eavesdropping.

### Key Milestones

| Year | Milestone |
|------|-----------|
| 2016 | China launched **Micius** (Mozi) — the world's first quantum communication satellite |
| 2017 | Micius facilitated the first intercontinental quantum-secured video call between China and Austria (~7,600 km) |
| 2017 | China demonstrated satellite-to-ground QKD over ~2,500 km (Xinjiang to Xinglong) |
| 2025 | China established quantum-secure communication link with South Africa |

> **Exam Tip:** Quantum communication is significant for UPSC because it represents the future of cyber-security. India's National Quantum Mission (approved 2023) aims to develop quantum computing and communication capabilities. The key principle to remember: quantum entanglement allows "spooky action at a distance" (Einstein's phrase), and any attempt to eavesdrop on a quantum channel is detectable.

---

## Communication Systems — Summary Table

| System | Medium | Range | Key Principle | Example Use |
|--------|--------|-------|--------------|-------------|
| **AM Radio** | Radio waves (MW/SW) | Hundreds of km (sky wave) | Amplitude modulation | All India Radio |
| **FM Radio** | Radio waves (VHF) | 50–100 km (line of sight) | Frequency modulation | FM stations |
| **Television** | Radio waves (UHF/VHF) or cable | Regional / global (via satellite) | Modulation + satellite relay | Doordarshan, DTH |
| **Satellite Communication** | Microwaves | Global | Transponder relay via geostationary/LEO satellites | INSAT, GPS, Starlink |
| **Radar** | Microwaves | Hundreds of km | Reflection + Doppler shift | ATC, weather, defence |
| **Sonar** | Sound waves (ultrasound) | Underwater (km range) | Echo of sound pulses | Submarine detection, depth sounding |
| **Fibre Optics** | Light (IR/visible) | Hundreds of km (undersea cables) | Total internal reflection | Internet backbone, telecom |
| **5G** | Microwaves + mmWave | Cell-based (small cells) | Massive MIMO, beamforming, network slicing | Mobile broadband, IoT |
| **Li-Fi** | Visible light | Room-scale (line of sight) | LED modulation | Indoor high-speed, hospitals |
| **Quantum Communication** | Photons | Satellite-to-ground / fibre | Quantum entanglement, QKD | Ultra-secure encryption |

---

## Frequently Asked Questions (Prelims Pattern)

| Question | Answer |
|----------|--------|
| What type of waves are sound waves? | Longitudinal mechanical waves |
| Can sound travel through vacuum? | No — sound requires a material medium |
| What is the speed of light in vacuum? | Approximately 3 x 10^8 m/s |
| Which EM waves have the highest frequency? | Gamma rays |
| What principle does fibre optics use? | Total internal reflection |
| What does RADAR stand for? | Radio Detection And Ranging |
| What does SONAR stand for? | Sound Navigation And Ranging |
| Why does FM have better sound quality than AM? | FM is resistant to noise (amplitude variations do not affect frequency-encoded signal) |
| What orbit do geostationary satellites use? | Equatorial orbit at ~35,786 km altitude |
| What is the Doppler effect? | Change in observed frequency due to relative motion between source and observer |
| Who coined the term Li-Fi? | Harald Haas (2011) |
| Which country launched the first quantum communication satellite? | China (Micius/Mozi, 2016) |

---

## Key Terms for Quick Revision

| Term | Meaning |
|------|---------|
| **Transverse Wave** | Wave in which particles vibrate perpendicular to the direction of propagation |
| **Longitudinal Wave** | Wave in which particles vibrate parallel to the direction of propagation |
| **Electromagnetic Spectrum** | The complete range of EM radiation from radio waves to gamma rays |
| **Modulation** | Process of varying a carrier wave's properties (amplitude, frequency, or phase) to encode information |
| **Transponder** | Device on a satellite that receives, amplifies, and retransmits signals at a different frequency |
| **Geostationary Orbit** | Equatorial orbit at ~35,786 km where a satellite's orbital period matches Earth's rotation (appears stationary) |
| **Total Internal Reflection** | Complete reflection of light at a boundary when the angle of incidence exceeds the critical angle |
| **Doppler Effect** | Apparent change in frequency of a wave due to relative motion between source and observer |
| **Massive MIMO** | Multiple-input multiple-output antenna technology using large arrays to serve many users simultaneously |
| **Network Slicing** | Creating multiple virtual networks on shared physical infrastructure, each tailored for specific requirements |
| **Quantum Entanglement** | Quantum phenomenon where two particles become correlated such that the state of one instantly influences the other, regardless of distance |
| **QKD** | Quantum Key Distribution — using quantum states to generate secure encryption keys that cannot be intercepted undetected |

---

*Sources: NASA GSFC (Electromagnetic Spectrum); Wikipedia (Electromagnetic spectrum, Sonar, Li-Fi, QUESS); Britannica; Physics LibreTexts; Ericsson (Massive MIMO); NOAA (oceanservice.noaa.gov); Corning (5G technology); NFPA (fire extinguisher types).*
