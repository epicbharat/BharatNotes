---
layout: ncert-chapter.njk
title: "Sound"
description: "Production and propagation of sound, ultrasound, SONAR technology, infrasound, echo, noise pollution, PC&PNDT Act, and UPSC GS3 connections to submarine detection, nuclear test monitoring, and disaster early warning — Class IX Science Ch12."
ncert_class: 9
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
  - class-9
  - science
  - physics
  - sonar
  - noise-pollution
  - submarine-technology
  - nuclear-test-detection
---

> **Note:** This chapter was removed from the NCERT curriculum in the 2022 rationalization. Retained here as sound, SONAR, infrasound/ultrasound detection, and noise pollution are directly relevant to GS3 topics on submarine technology, disaster early warning, and environmental pollution.

Sound is far more than what we hear — it is the basis of submarine warfare (SONAR), nuclear test detection (CTBTO infrasound arrays), medical imaging (ultrasound/sonography), and earthquake early warning. UPSC GS3 tests submarine detection technology, India's naval power, nuclear non-proliferation (CTBT), and noise pollution policy. All trace back to the physics of this chapter.

---

## PART 1 — Quick Reference Tables

### Sound Spectrum — Frequency Ranges

| Category | Frequency Range | Sources | Uses / Threats |
|----------|----------------|---------|---------------|
| **Infrasound** | Below 20 Hz | Earthquakes, volcanic eruptions, nuclear explosions, ocean waves, elephants, whales | Disaster early warning; nuclear test detection (CTBTO); animal communication |
| **Audible sound** | 20 Hz – 20,000 Hz | Human voice, musical instruments, machinery | Communication, music, noise pollution |
| **Ultrasound** | Above 20,000 Hz | Bats, dolphins, specialized equipment | Medical imaging; industrial testing; SONAR; cleaning |

### Speed of Sound in Different Media

| Medium | Approximate Speed | Why Faster? |
|--------|-----------------|-------------|
| **Air (20°C)** | ~343 m/s | Least dense; molecules far apart |
| **Water (25°C)** | ~1,480–1,500 m/s | Denser; molecules closer; more rigid |
| **Steel** | ~5,000–6,000 m/s | Highly rigid; vibrations propagate very efficiently |
| **Vacuum** | 0 (cannot travel) | No medium; no molecules to vibrate |

*Note: Speed of sound increases with temperature (faster in warm air); and increases from gas → liquid → solid (denser, more elastic medium = faster sound)*

### Noise Levels — Decibel Reference Scale

| Source | Approximate dB | Effect |
|--------|---------------|--------|
| Rustling leaves | ~10–20 dB | Barely audible |
| Normal conversation | ~60 dB | Comfortable |
| Heavy traffic | ~80–85 dB | Prolonged exposure → hearing damage |
| Industrial machinery | ~90–100 dB | Occupational hazard; hearing protection needed |
| Rock concert | ~110–120 dB | Immediate pain risk; permanent damage possible |
| Jet engine (at 30 m) | ~140 dB | Threshold of pain; permanent hearing damage |
| Firecracker (close range) | ~140–150 dB | Explosive; can rupture eardrums |

---

## PART 2 — Detailed Notes

### 1. Production and Propagation of Sound

**Sound** is produced by **vibrating objects**. A vibrating tuning fork compresses and rarefies the air around it alternately — creating a **longitudinal wave** (compressions and rarefactions travel in the same direction as the wave propagation).

**Sound requires a medium** — it cannot travel through vacuum. On the Moon (no atmosphere), astronauts cannot communicate by voice — they use radio waves (electromagnetic waves, which do NOT require a medium). This is the fundamental difference between sound and light.

::: ncert-box--key-term
**Longitudinal wave:** Particles of the medium vibrate parallel to the direction of wave propagation. Sound waves in air are longitudinal. (Contrast with **transverse waves** — e.g., light waves, waves on a string — where particles vibrate perpendicular to wave direction.) Sound in solids can also travel as transverse waves, but in fluids (liquids, gases) only longitudinal.
:::

Sound wave properties:
- **Wavelength (λ):** Distance between two consecutive compressions (or rarefactions)
- **Frequency (f):** Number of vibrations per second; unit: Hertz (Hz)
- **Amplitude (A):** Maximum displacement of particles from their rest position; determines loudness
- **Wave speed:** v = f × λ; speed depends on medium and temperature, NOT on frequency or amplitude

### 2. Characteristics of Sound

**Loudness (Volume):**
- Determined by **amplitude** of vibration
- Measured in **decibels (dB)** — a logarithmic scale (10 dB increase = 10× the sound intensity)
- Sustained exposure to 85 dB+ → hearing damage (cochlear hair cell destruction — irreversible)

**Pitch:**
- Determined by **frequency** — higher frequency = higher pitch
- A child's voice has higher frequency (pitch) than an adult male voice
- Musical instruments are tuned by adjusting the frequency of vibration (tension of strings, length of air column)

**Quality (Timbre):**
- What distinguishes a guitar note from a piano note at the same pitch and loudness
- Determined by the waveform shape — the mix of fundamental frequency and overtones (harmonics)

### 3. Reflection of Sound — Echo and Reverberation

**Reflection of sound** follows the same laws as reflection of light: angle of incidence = angle of reflection.

**Echo:** A reflected sound that is heard distinctly separately from the original sound. For an echo to be heard, the reflecting surface must be at least **17.2 metres** away (so that reflected sound reaches the ear at least 0.1 seconds after the original — the persistence of sound in human ear is ~0.1 s).

**Reverberation:** Multiple reflections in rapid succession in an enclosed space → prolonged, lingering sound. Used beneficially in concert halls (adds richness to music — controlled reverberation); problematic in conference halls (makes speech unclear). Managed by **acoustic panels** (sound-absorbing materials on walls and ceilings).

::: ncert-box--explainer
**Acoustic design matters:** The sabine formula calculates reverberation time (RT60 — time for sound to decay by 60 dB). Concert halls are designed for RT60 ~1.8–2.2 seconds (music sounds rich); lecture halls ~0.6–0.8 seconds (speech remains clear). Poor acoustic design in India's Parliament annexe, courts, or public halls leads to communication failures — an underappreciated governance infrastructure issue.
:::

### 4. SONAR — Sound Navigation And Ranging

**SONAR** uses the principle of **echo** — emitting a sound pulse and timing the return of the reflection to determine the distance of an object.

**Distance = (Speed of sound in water × Time for echo to return) / 2**

(Divide by 2 because the sound travels to the object and back — twice the distance)

::: ncert-box--upsc-connect
**UPSC GS3 — Naval Technology, Submarine Detection, and SONAR:**

**Active SONAR:**
- Ship or submarine emits an ultrasound pulse (typically 1–100 kHz) → pulse reflects off submarines, underwater mines, sea floor, or fish shoals → detected by hydrophones → time of return → distance and direction of target
- Used by: Indian Navy surface ships, patrol aircraft (P-8I Poseidon — India acquired 12 from the US); helicopter-deployed sonobuoys; towed array sonar systems
- **Limitation:** Active sonar reveals the position of the emitting platform — submarines use it sparingly to avoid detection

**Passive SONAR:**
- Simply listens to underwater sound — does not emit anything
- Detects noise from enemy submarines (propeller cavitation noise, engine/reactor sounds, crew activity)
- Submarines are designed to be "acoustically quiet" — **anechoic tiles** (rubber coatings that absorb sonar pulses), vibration-isolated machinery, pump-jet propulsors
- India's **Scorpène class (Kalvari class)** submarines use diesel-electric propulsion; when running on battery (silent mode) — extremely quiet; very hard to detect by passive SONAR

**SONAR applications beyond submarine warfare:**
- **Ocean floor mapping (bathymetry):** Multi-beam sonar maps sea floor topography; used in: (a) **Samudrayaan mission** (India's first crewed deep sea mission — MATSYA 6000 submersible can reach 6,000 m depth); (b) **Polymetallic nodule surveys** in India's Exclusive Economic Zone (EEZ) and the Indian Ocean (India holds exploration rights to 75,000 sq km of seabed in Central Indian Ocean Basin — CIOB)
- **Fish detection:** Commercial fishing fleets use fish-finder sonars (echo sounders)
- **Pipeline and cable inspection:** Sonar surveys for undersea infrastructure

**India's maritime domain awareness (MDA):**
- **NATGRID** and **NaMPOL** for maritime information fusion
- **Information Fusion Centre for Indian Ocean Region (IFC-IOR)** at Gurugram — real-time tracking of vessels; White shipping agreements with 50+ countries
:::

### 5. Infrasound — Below Human Hearing, Above Human Detection

Infrasound (< 20 Hz) travels very long distances (thousands of kilometres) with little attenuation because low-frequency waves are not easily absorbed by the atmosphere.

**Natural sources of infrasound:**
- Earthquakes (P-waves are infrasound range)
- Volcanic eruptions (Krakatoa 1883 — infrasound heard 5,000 km away)
- Meteorite impacts
- Ocean waves and surf
- Severe thunderstorms, tornadoes

**Animals that use infrasound:**
- Elephants communicate over tens of kilometres using infrasound rumbles (20–30 Hz) — through the ground as well as air
- Blue whales communicate across ocean basins using infrasound (10–40 Hz)
- Some scientists believe birds and migrating animals use infrasound for navigation (sensing topographic infrasound patterns)

::: ncert-box--upsc-connect
**UPSC GS3 — Nuclear Test Detection and CTBTO:**

**Comprehensive Nuclear-Test-Ban Treaty (CTBT):** Adopted by UN General Assembly in 1996. Bans all nuclear explosions (military and civilian). **Has not entered into force** — requires ratification by all 44 states listed in Annex 2; 8 have not ratified: USA, China, India, Pakistan, Israel, Egypt, Iran, North Korea.

**India's position:** India has NOT signed the CTBT, arguing it is discriminatory (does not include a time-bound disarmament commitment by nuclear weapons states) and that it constrains India's right to develop its nuclear deterrent. India conducted its last nuclear tests in Pokhran in May 1998 (Pokhran-II / Operation Shakti — 5 tests including thermonuclear and fission devices).

**CTBTO International Monitoring System (IMS):** Despite CTBT not being in force, the **CTBTO Preparatory Commission** operates the IMS — a global network of 337 monitoring stations using four technologies:
1. **Seismic:** 170 stations detect underground nuclear explosions via seismic waves
2. **Infrasound:** 60 stations detect atmospheric nuclear explosions via infrasound waves
3. **Hydroacoustic:** 11 stations detect underwater nuclear explosions via T-waves (sound waves in ocean)
4. **Radionuclide:** 80 stations detect radioactive particles/gases in the atmosphere

North Korea's 2017 nuclear test (estimated ~250 kt yield) was detected by all four monitoring technologies. The infrasound stations detected the atmospheric pressure wave from the underground explosion venting.

**Disaster early warning:**
- CTBTO's IMS seismic and infrasound data shared with tsunami warning centres (Pacific Tsunami Warning Centre, INCOIS in Hyderabad — India's tsunami early warning system)
- Post-2004 Indian Ocean tsunami (December 26, 2004 — 227,000+ deaths), India established INCOIS (Indian National Centre for Ocean Information Services) as the operational hub for the Indian Ocean Tsunami Early Warning System
:::

### 6. Ultrasound — Applications

Ultrasound (> 20 kHz) is used widely because of its ability to penetrate materials and reflect from boundaries.

**Medical applications:**
- **Sonography (Ultrasonography):** 2–18 MHz sound waves; safe (no ionizing radiation); images soft tissues; used for abdominal imaging, pregnancy monitoring, cardiac (echocardiography), guided biopsies
- **Lithotripsy:** Focused ultrasound to break kidney stones (calculi) without surgery — **Extracorporeal Shock Wave Lithotripsy (ESWL)**
- **Physiotherapy:** Low-intensity ultrasound promotes tissue healing

::: ncert-box--upsc-connect
**UPSC GS2 — PC&PNDT Act and Sex-Selective Abortion:**

**Pre-Conception and Pre-Natal Diagnostic Techniques (Prohibition of Sex Selection) Act, 1994 (PC&PNDT Act):** Regulates the use of ultrasound machines and prenatal diagnostic techniques to prevent sex-selective abortions.

Key provisions:
- Ultrasound machines must be registered; clinics must maintain records of all procedures
- Sex of foetus must **not** be revealed (by the technician or doctor) — criminal offence with up to 3 years imprisonment and Rs 50,000 fine (first offence)
- Clinics must display notice: "Disclosure of sex of foetus is a punishable offence"
- Central Supervisory Board and state/UT supervisory boards oversee implementation

**Why important:** India's sex ratio at birth (SRB) remains skewed — ~898 girls per 1,000 boys (declining since 2000s but still below natural 952 girls/1,000 boys). States like Haryana, Rajasthan, UP have historically low SRB. **Beti Bachao Beti Padhao** scheme (2015) targets districts with lowest child sex ratio.

**Industrial ultrasound:**
- **Non-Destructive Testing (NDT):** Checking for cracks in metal components (aircraft fuselage, bridge cables, railway tracks) without disassembly
- **Cleaning:** Ultrasonic cleaners use cavitation (bubble formation and collapse) to clean delicate instruments (surgical instruments, jewellery, electronic components)
:::

### 7. Musical Instruments — Vibration Physics

Musical instruments produce sound through controlled vibration:

- **Stringed instruments (chordophones):** Vibrating string (sitar, veena, violin, guitar, piano). Frequency depends on: string **tension** (higher tension = higher pitch), string **length** (shorter = higher pitch), string **mass/thickness** (thinner = higher pitch). Frets on sitar/guitar change effective string length.

- **Wind instruments (aerophones):** Vibrating air column (flute, bansuri, shehnai, trumpet, oboe). Frequency depends on length of air column (open/closed holes change effective length). India's classical instruments — the bansuri (bamboo flute) and shehnai (double-reed aerophone) — are UNESCO recognized as part of intangible cultural heritage.

- **Percussion instruments (membranophones/idiophones):** Vibrating membrane (tabla, dholak, mridangam) or solid object (ghatam, kanjira). Tabla's complex tonal quality comes from the special paste (syahi — iron filings and flour) on the drumhead that creates multiple overtones; studied by physicists as a uniquely sophisticated percussion design.

### 8. Noise Pollution

Unwanted sound is **noise pollution** — a serious environmental and occupational health hazard.

**Health effects of noise pollution:**
- **Hearing damage (NIHL — Noise-Induced Hearing Loss):** Permanent at 85+ dB sustained; cochlear hair cells destroyed; irreversible
- **Cardiovascular effects:** Chronic noise exposure linked to hypertension, heart disease (via stress hormone activation — cortisol, adrenaline)
- **Psychological effects:** Sleep disturbance, anxiety, impaired concentration, reduced productivity
- **Wildlife impact:** Disrupts bird communication and navigation; affects marine mammals (SONAR controversy — naval active sonar linked to beaching of whales)

**India's noise pollution regulatory framework:**
- **Noise Pollution (Regulation and Control) Rules, 2000** — framed under the **Environment (Protection) Act, 1986**
- **Standards:** Day (6 AM – 10 PM): Residential: 55 dB; Commercial: 65 dB; Industrial: 75 dB; Silence zones (hospitals, schools, courts): 50 dB. Night: 5 dB lower in each category
- **Silence zones:** 100-metre radius around hospitals, educational institutions, and courts — no honking, no loudspeakers
- **Loudspeakers/PA systems:** Regulated; firecrackers banned between 10 PM and 6 AM (Supreme Court order, 2018)
- **Central Pollution Control Board (CPCB):** Monitors noise levels; has Noise Monitoring Network in major cities
- **Occupational Safety, Health and Working Conditions Code, 2020:** Mandates hearing protection for workers exposed to 85+ dB

---

## Exam Strategy

**Prelims traps:**
- Sound is a **longitudinal** wave (NOT transverse); it requires a medium; cannot travel in vacuum
- Speed of sound: **air < water < solid** — often reversed in trick questions
- For an echo, minimum distance = **17 metres** (not 34 m — 34 m is total path length, but distance to wall is 17 m)
- Infrasound = **below 20 Hz**; ultrasound = **above 20,000 Hz**; audible = **20 Hz to 20,000 Hz** — exact thresholds are tested
- PC&PNDT Act regulates ultrasound for **sex determination** — it does NOT ban ultrasound use itself
- CTBT — India has **NOT signed** it; last Indian tests were **May 1998 (Pokhran-II)**
- CTBTO's IMS uses **4 technologies**: seismic, infrasound, hydroacoustic, radionuclide — all four are tested
- Decibel scale is **logarithmic** — 10 dB increase = 10× intensity (not linear)

**Mains linkages:**
- SONAR → submarine technology → India's Scorpène class → Kalvari class → Project-75 / Project-75I → maritime security → IOR strategy
- Infrasound → CTBT → India's nuclear doctrine (NFU, No First Use) → non-proliferation regime → India's stand
- Noise pollution → Noise Rules 2000 → urban governance → right to peaceful environment (Article 21 jurisprudence) → firecrackers ban SC ruling

---

## Previous Year Questions

**Prelims:**
1. Which of the following technologies is used by the CTBTO's International Monitoring System to detect atmospheric nuclear explosions specifically?<br>
   (a) Seismic monitoring<br>
   **(b) Infrasound monitoring**<br>
   (c) Hydroacoustic monitoring<br>
   (d) Radionuclide monitoring

2. With reference to the PC&PNDT Act of India, which of the following statements is correct?<br>
   (a) It bans all use of ultrasound machines in India<br>
   **(b) It prohibits disclosure of the sex of the foetus and mandates registration of ultrasound clinics**<br>
   (c) It is administered by the Ministry of Women and Child Development<br>
   (d) It applies only to private hospitals and clinics, not government facilities

**Mains:**
1. Despite the PC&PNDT Act being in force for over two decades, India's sex ratio at birth remains skewed in several states. Critically analyse the reasons for the continued practice of sex-selective practices and the measures needed to address the issue. (CSE Mains 2019, GS Paper 2, 15 marks)

2. Discuss India's position on the Comprehensive Nuclear-Test-Ban Treaty (CTBT). How does India's stance reflect its broader nuclear doctrine and strategic interests? (CSE Mains 2021, GS Paper 3, 15 marks)
