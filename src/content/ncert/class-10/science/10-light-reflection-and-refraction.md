---
layout: ncert-chapter.njk
title: "Light — Reflection and Refraction"
description: "Reflection (concave/convex mirrors), refraction (Snell's Law), total internal reflection (optical fibres, BharatNet), lenses, and power of lenses — Class 10 Science Ch10 enriched for UPSC GS3."
ncert_class: 10
book: "Science"
book_slug: science
chapter: 10
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
  - optics
  - technology
---

> **Note:** This chapter was removed from the NCERT curriculum in the 2022 rationalization. Retained here as optics — mirrors, lenses, total internal reflection — underlies fibre optic communications, solar concentrators, telescopes, and cameras — key GS3 science & technology topics.

**Why this chapter matters for UPSC:** Optics is not abstract physics — it is the science behind India's digital connectivity (optical fibre in BharatNet), space telescopes (JWST, ISRO's CARTOSAT), medical instruments (endoscopy), and renewable energy (parabolic solar concentrators in CSP plants). GS3 questions on science and technology regularly require understanding of why these technologies work.

---

## PART 1 — Quick Reference Tables

### Spherical Mirrors — Image Formation Summary

| Mirror Type | Object Position | Image Type | Image Properties | Application |
|-------------|----------------|-----------|-----------------|------------|
| **Concave** | Beyond C | Real, inverted | Diminished | — |
| **Concave** | At C | Real, inverted | Same size | — |
| **Concave** | Between C and F | Real, inverted | Magnified | Projectors |
| **Concave** | At F | Real | At infinity | Torch/headlight reflectors |
| **Concave** | Inside F (between F and P) | Virtual, erect | Magnified | Dentist's mirror, shaving mirror |
| **Convex** | Anywhere | Virtual, erect | Diminished | Rear-view mirrors, security mirrors |

### Refraction and Total Internal Reflection

| Concept | Description | Key Formula | Application |
|---------|-----------|------------|------------|
| **Snell's Law** | Relationship between angles at interface | n₁ sin θ₁ = n₂ sin θ₂ | All refraction calculations |
| **Refractive index (n)** | How much medium slows light | n = c/v (c = speed in vacuum; v = speed in medium) | Material identification |
| **Critical angle** | Angle above which TIR occurs | sin θ_c = n₂/n₁ (light going dense→less dense) | Optical fibre design |
| **TIR** | Complete internal reflection; no refracted ray | Must exceed critical angle | Optical fibres, diamond brilliance, mirages |

### Lenses — Summary

| Lens Type | Focal Length | Power | Image (object beyond F) | Corrects |
|-----------|-------------|-------|------------------------|---------|
| **Convex (converging)** | Positive (+) | Positive (+D) | Real, inverted | Hypermetropia (farsightedness) |
| **Concave (diverging)** | Negative (−) | Negative (−D) | Virtual, erect, diminished | Myopia (nearsightedness) |

---

## PART 2 — Detailed Notes

### 1. Reflection of Light

**Laws of Reflection:**
1. The angle of incidence (i) equals the angle of reflection (r): ∠i = ∠r
2. The incident ray, reflected ray, and the normal to the surface at the point of incidence all lie in the same plane.

**Types of reflection:**
- **Regular (specular) reflection:** Smooth, polished surface (mirror) — parallel rays reflect as parallel rays → clear image.
- **Diffuse reflection:** Rough surface — parallel rays reflect in many directions → no image but illuminates the area. This is how we see most objects (walls, paper, skin).

### 2. Spherical Mirrors

::: ncert-box--key-term
**Key terms for spherical mirrors:**
- **Pole (P):** Centre of the mirror's reflecting surface.
- **Centre of curvature (C):** Centre of the sphere of which the mirror is a part.
- **Radius of curvature (R):** Distance from P to C.
- **Principal focus (F):** Point where rays parallel to the principal axis converge (concave) or appear to diverge from (convex) after reflection.
- **Focal length (f):** Distance from P to F. Relationship: **f = R/2**
- **Mirror formula:** 1/v + 1/u = 1/f (where v = image distance, u = object distance)
- **Magnification:** m = −v/u (negative → real inverted image; positive → virtual erect image)
:::

**Concave mirror (converging mirror):** Reflecting surface curves inward. Used where a large, real, or magnified image is needed.

**Convex mirror (diverging mirror):** Reflecting surface curves outward. Always produces a virtual, erect, diminished image regardless of object position. The key advantage: **wider field of view** — a single convex mirror can show a larger area than a flat mirror.

::: ncert-box--upsc-connect
**UPSC GS3 — Renewable Energy / Science & Technology:**

**Parabolic solar concentrators (CSP — Concentrated Solar Power):** Use parabolic concave mirrors to focus sunlight onto a receiver tube at the focal line. The concentrated heat generates steam → drives turbine → generates electricity. India's CSP plants:
- **Rajasthan (Jodhpur region):** Highest solar insolation in India.
- NTPC and private players operate CSP plants.
- India's solar capacity: ~143.6 GW total (March 2025), though CSP remains a small fraction — most is photovoltaic (PV). CSP has the advantage of thermal storage (heat stored in molten salt → power at night).
- India's 500 GW renewable target by 2030 includes CSP as a technology option.
:::

### 3. Refraction of Light

When light passes from one medium to another, it changes speed — this causes it to bend at the interface. This bending is **refraction**.

**Rules:**
- Light going from less dense (lower n) to more dense (higher n) medium: bends **toward** the normal (speed decreases).
- Light going from more dense to less dense medium: bends **away from** the normal (speed increases).
- If light hits the interface at exactly 90° (perpendicular/along the normal): no bending.

**Snell's Law:** n₁ sin θ₁ = n₂ sin θ₂

**Refractive indices (approximate):**
- Air: 1.0003 (≈ 1)
- Water: 1.33
- Glass: 1.5
- Diamond: 2.42 (highest among common materials → exceptional TIR)

### 4. Total Internal Reflection (TIR)

::: ncert-box--key-term
**Total Internal Reflection (TIR)** occurs when:
1. Light travels from a **denser** medium to a **less dense** medium (e.g., glass to air).
2. The angle of incidence exceeds the **critical angle** (θ_c).

Above the critical angle, 100% of light is reflected back into the denser medium — no refracted ray exits. This is unlike partial reflection at other angles.

**Critical angle for glass-air interface:** ~42° (glass n = 1.5; sin θ_c = 1/1.5 → θ_c ≈ 42°)
**Critical angle for diamond-air:** ~24° (diamond n = 2.42) — very small critical angle means most light entering a diamond undergoes TIR multiple times → brilliant sparkle.
:::

::: ncert-box--upsc-connect
**UPSC GS3 — Digital Infrastructure / Communications:**

**Optical fibre cables** exploit TIR. A glass fibre (core, n ≈ 1.5) is surrounded by cladding (lower n). Light signals entering the fibre at a shallow angle undergo repeated total internal reflection along the length of the fibre with virtually no loss. Key facts:
- Optical fibres carry data as pulses of light at nearly the speed of light.
- Bandwidth: far higher than copper cables — a single fibre can carry millions of phone calls simultaneously.
- **BharatNet:** India's flagship programme to connect ~6 lakh gram panchayats with high-speed broadband using optical fibre. Phase I and II completed significant portions; Phase III (Bharat Broadband Network Limited — BBNL, now merged into BSNL) aims for universal rural connectivity. Critical for Digital India, e-governance, telemedicine, and online education in rural areas.
- **Endoscopy in medicine:** Optical fibres carry light into the body and transmit images back — gastroscopy, colonoscopy, laparoscopy — without major surgery.

**Mirage:** In deserts, the air near the hot ground has lower refractive index than cooler air above. Light from a distant object (e.g., sky) traveling downward gradually bends (refraction) as it enters progressively less dense air layers near the ground — until the angle exceeds the critical angle → TIR. The light is reflected upward and reaches our eye appearing to come from the ground, like a water reflection. We see a "puddle" that is actually an inverted image of the sky.
:::

### 5. Lenses

A lens is a transparent medium bounded by two curved surfaces (usually spherical).

::: ncert-box--key-term
**Lens formula:** 1/v − 1/u = 1/f

**Power of a lens:** P = 1/f (where f is in metres). Unit: **Dioptre (D)**
- Convex lens: positive power (converging)
- Concave lens: negative power (diverging)
- Combined lenses: P_total = P₁ + P₂ + P₃ + ...

This additive property of power is why spectacle prescriptions are written in dioptres — the optometrist simply adds powers of individual lens components.
:::

**Corrective lenses and vision defects:**
- **Myopia (nearsightedness):** Corrected with a **concave lens** (negative power/dioptre).
- **Hypermetropia (farsightedness):** Corrected with a **convex lens** (positive power/dioptre).

### 6. Space Telescopes and ISRO's Optical Satellites

::: ncert-box--upsc-connect
**UPSC GS3 — Space Technology:**

**James Webb Space Telescope (JWST):** Launched December 2021, positioned at the L2 Lagrange point (~1.5 million km from Earth). Uses 18 gold-coated beryllium mirror segments forming a 6.5m primary mirror. Gold coating maximises reflectivity in infrared wavelengths. JWST observes the universe in infrared — can see through dust clouds, observe the earliest galaxies, and study exoplanet atmospheres. Not a UPSC distraction — it represents the pinnacle of optical engineering and international scientific collaboration.

**ISRO's optical Earth observation satellites:** CARTOSAT-3 (launched 2019) achieves 0.25m resolution — can distinguish objects 25 cm across from space. Used for: urban planning, disaster management, border surveillance, agricultural assessment. RESOURCESAT and RISAT series complement optical imagery with multispectral and radar imaging.

**Laser technology:** Laser (Light Amplification by Stimulated Emission of Radiation) produces coherent, monochromatic, collimated light. Applications: LIDAR (Light Detection and Ranging) in archaeology (mapping hidden temples under forest canopy — used at Angkor Wat), topographic mapping, autonomous vehicles; laser-guided munitions (precision strike capability); LASIK eye surgery (reshapes cornea to correct vision).
:::

---

## Exam Strategy

**Prelims traps:**
- **Concave mirror focal length is negative** (by sign convention); **convex mirror focal length is positive** — the opposite of what intuition might suggest for a "converging" mirror.
- **Convex mirror always** gives virtual, erect, diminished image — regardless of object distance.
- **Optical fibre uses TIR** — the light stays in the denser medium; this is NOT the same as refraction.
- **Power of lens:** concave = negative dioptre; convex = positive dioptre. A spectacle prescription of "−2.5 D" means a concave lens for myopia correction.
- **Refractive index of diamond (2.42)** — highest among common solids — is why diamonds sparkle so intensely.
- The **mirage** is caused by TIR in air layers of different temperatures, not by reflection from hot ground.

---

## Previous Year Questions

**Prelims:**
1. Which of the following correctly explains why optical fibre cables can transmit data over long distances with minimal signal loss?<br>
   (a) Refraction causes light to speed up in the glass core<br>
   (b) The glass core has a lower refractive index than the cladding<br>
   **(c) Total internal reflection keeps light within the denser glass core**<br>
   (d) Diffuse reflection within the fibre amplifies the signal

2. With reference to solar energy technology, a parabolic trough solar concentrator uses which optical principle?<br>
   (a) Refraction through a convex lens<br>
   **(b) Reflection from a curved concave surface to focus sunlight at a focal line**<br>
   (c) Total internal reflection in glass tubes<br>
   (d) Diffuse reflection to heat a wide collector area

**Mains:**
1. "BharatNet is as much a triumph of physics as it is of policy." Explain the scientific principle underlying optical fibre communication and assess the progress and challenges of the BharatNet project in bridging India's digital divide. (CSE Mains 2023, GS Paper 3, 15 marks)
