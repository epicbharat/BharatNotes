---
layout: ncert-chapter.njk
title: "Motion"
description: "Distance vs displacement, speed vs velocity, acceleration, equations of motion, uniform circular motion, graphical analysis, and UPSC GS3 connections to ISRO satellites, orbital mechanics, and space missions — Class IX Science Ch8."
ncert_class: 9
book: "Science"
book_slug: science
chapter: 8
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
  - space-technology
  - isro
---

> **Note:** This chapter was removed from the NCERT curriculum in the 2022 rationalization. Retained here as concepts of motion, velocity, acceleration, and Newton's laws underpin understanding of space launch vehicles, transport systems, projectile motion, and satellite orbits — GS3 science & technology.

Motion is the foundation of all physical science. For UPSC, this chapter is the gateway to understanding satellite orbits (ISRO's PSLV/GSLV/LVM3), escape velocity, Chandrayaan-3's lunar trajectory, and Gaganyaan's orbital mechanics. GS3 repeatedly tests space technology — and every question on orbital velocity, geostationary orbits, and remote sensing satellites traces back to these basic laws of motion.

---

## PART 1 — Quick Reference Tables

### Scalars vs Vectors in Motion

| Quantity | Type | Definition | Unit | Key Point |
|----------|------|-----------|------|-----------|
| **Distance** | Scalar | Total path length covered | metre (m) | Always positive; can only increase |
| **Displacement** | Vector | Shortest straight-line distance from start to end point, with direction | metre (m) | Can be zero (round trip), positive, or negative |
| **Speed** | Scalar | Distance covered per unit time | m/s | Has no direction; average speed = total distance / total time |
| **Velocity** | Vector | Displacement per unit time | m/s | Has direction; can be negative; average velocity = total displacement / total time |
| **Acceleration** | Vector | Rate of change of velocity | m/s² | Positive = speeding up; negative (deceleration) = slowing down |

### Equations of Motion (Uniform Acceleration)

| Equation | Variables | Used When |
|---------|-----------|----------|
| **v = u + at** | v, u, a, t | Displacement not needed |
| **s = ut + ½at²** | s, u, a, t | Final velocity not needed |
| **v² = u² + 2as** | v, u, a, s | Time not needed |

*u = initial velocity; v = final velocity; a = acceleration; s = displacement; t = time*

### Satellite Orbit Types — UPSC Quick Reference

| Orbit | Altitude | Period | Key Use | Indian Satellites |
|-------|---------|--------|---------|------------------|
| **LEO (Low Earth Orbit)** | 200–2,000 km | ~90–120 minutes | Remote sensing, ISS | RESOURCESAT-2A, CARTOSAT-3 |
| **MEO (Medium Earth Orbit)** | 2,000–35,786 km | Hours | Navigation (GPS, NavIC) | IRNSS/NavIC constellation |
| **GEO (Geostationary)** | 35,786 km | 24 hours (appears stationary) | Communication, Weather | INSAT-3D, GSAT-30 |

---

## PART 2 — Detailed Notes

### 1. Distance and Displacement

**Distance** is the total length of the path travelled by an object. It is a scalar quantity — it has magnitude only, no direction. A person walking 4 km east then 3 km west has covered a distance of 7 km.

**Displacement** is the shortest straight-line distance from the initial position to the final position, measured with direction. For the same person, displacement = 1 km east (4 − 3 = 1 km net in the eastward direction). If a person runs a 400 m circular track and returns to start, displacement = 0, but distance = 400 m.

::: ncert-box--key-term
**Displacement** is a vector quantity. It can be zero even when distance is not. This distinction is critical for graphical problems and orbital calculations. For a satellite completing one full orbit, displacement = 0 but distance = circumference of orbit (2πr).
:::

### 2. Speed and Velocity

**Speed** = Distance / Time. It is a scalar — always positive. A car travelling 60 km in 1 hour has a speed of 60 km/h.

**Velocity** = Displacement / Time. It is a vector — magnitude and direction. If the car returns 60 km in 1 hour, its average velocity = 0, even though average speed = 60 km/h.

**Uniform motion:** Equal distances in equal time intervals → constant speed, zero acceleration.
**Non-uniform motion:** Unequal distances in equal intervals → changing speed → acceleration present.

### 3. Acceleration

Acceleration = Rate of change of velocity = (v − u) / t.

- **Positive acceleration:** Velocity increasing (car speeding up).
- **Negative acceleration (deceleration/retardation):** Velocity decreasing (car braking). Deceleration = magnitude of negative acceleration.
- **Zero acceleration:** Constant velocity (uniform motion).

::: ncert-box--explainer
**Why does negative acceleration matter for UPSC?** A launch vehicle like PSLV during stage separation momentarily decelerates before the next stage fires. Retro-rockets on landers (Chandrayaan-3's Vikram lander) produce precisely calculated negative acceleration to slow descent to near-zero velocity at touchdown — this is why the landing algorithm is called "20 minutes of terror."
:::

### 4. Equations of Motion

The three equations of motion apply to objects under **uniform (constant) acceleration** in a straight line.

1. **v = u + at** — velocity after time t
2. **s = ut + ½at²** — displacement after time t
3. **v² = u² + 2as** — velocity after displacement s (time-independent)

**Worked example (satellite re-entry context):** A spacecraft enters the atmosphere at 7.8 km/s (u) and decelerates at 50 m/s². Using v = u + at, one can calculate velocity after any given time of deceleration.

**Free fall** is a special case: a = g = 9.8 m/s² (downward). Equations become:
- v = u + gt; h = ut + ½gt²; v² = u² + 2gh (taking downward as positive)

### 5. Graphical Representation of Motion

**Distance-Time Graph:**
- Straight line with positive slope → uniform speed (slope = speed)
- Horizontal line → at rest (zero speed)
- Curved line (slope increasing) → accelerating motion

**Velocity-Time Graph:**
- Straight horizontal line → uniform velocity, zero acceleration
- Straight line with positive slope → uniform acceleration (slope = acceleration)
- **Area under velocity-time graph = displacement** — this is a key examiner tool

::: ncert-box--key-term
**Slope of distance-time graph = speed.** **Slope of velocity-time graph = acceleration.** **Area under velocity-time graph = displacement.** These three relationships are the most tested graphical concepts in motion problems.
:::

### 6. Uniform Circular Motion

An object moving in a circle at **constant speed** is in **uniform circular motion**. Although speed is constant, velocity is NOT — because direction continuously changes. Since velocity changes, there IS acceleration — called **centripetal acceleration**, directed toward the centre of the circle.

Examples:
- Planets orbiting the Sun (approximately circular orbits)
- Satellites in circular orbit around Earth
- Washing machine spin cycle
- A car turning at constant speed on a curved road

::: ncert-box--upsc-connect
**UPSC GS3 — Orbital Mechanics and ISRO:**

**Orbital velocity** of a satellite = √(GM/r), where G = gravitational constant, M = Earth's mass, r = distance from Earth's centre. At greater orbital height, both orbital velocity and orbital period change.

**Geostationary orbit (GEO):** At exactly 35,786 km altitude, orbital period = 24 hours — matching Earth's rotation. The satellite appears stationary relative to Earth's surface. This makes it ideal for:
- **Communication satellites** — fixed ground antenna pointing (INSAT-3D, GSAT-30)
- **Weather satellites** — continuous view of same region (INSAT-3DR — provides cloud imagery used in cyclone tracking)

**Low Earth Orbit (LEO):** 200–2,000 km altitude; orbital period ~90 minutes. Used for:
- **Remote sensing** — RESOURCESAT-2A (crop monitoring, land use), CARTOSAT-3 (defence imaging, urban planning)
- **International Space Station** — orbits at ~408 km
- **OneWeb constellation** — launched on ISRO's LVM3 rocket

**Escape velocity:** ~11.2 km/s from Earth's surface. Minimum velocity for an object to permanently escape Earth's gravity. Chandrayaan-3 was launched by LVM3 and accelerated past escape velocity to reach lunar transfer orbit.

**Chandrayaan-3 (August 23, 2023):** Vikram lander soft-landed near the lunar South Pole — India became the 4th nation to soft-land on the Moon, and the 1st to reach the South Pole region. The landing involved precise retro-propulsion (deceleration) to bring velocity from ~1.68 km/s to near zero at touchdown.

**Gaganyaan:** India's first crewed spaceflight programme. Target altitude ~400 km LEO. Uses LVM3. Mission involves controlled orbital insertion — direct application of orbital velocity calculations.
:::

### 7. Speed of Light — A Motion Constant

Speed of light in vacuum: c = 3 × 10⁸ m/s (approximately 3,00,000 km/s). This is the cosmic speed limit — no object with mass can reach or exceed it. Relevant for:
- Communication delays with deep-space probes (Chandrayaan-3 signal delay: ~1.28 seconds one-way)
- ISRO's deep space network communication
- GPS satellites — signal travel time calculations require relativistic corrections

---

## Exam Strategy

**Prelims traps:**
- Distance and speed are **scalars** (no direction); displacement and velocity are **vectors** (have direction)
- A body moving in a circle at constant speed has **non-zero acceleration** (centripetal) — examiners often test this
- Geostationary orbit altitude = **35,786 km** (often given as ~36,000 km); orbital period = **24 hours** — not 12
- Escape velocity from Earth = **~11.2 km/s** — not to be confused with orbital velocity (~7.9 km/s at surface)
- LEO period ≈ **90 minutes**; GEO period = **24 hours** (24, not 12 — Earth rotates once in 24 hours, not 12)
- Chandrayaan-3 landed **August 23, 2023** — India was the **4th** country to soft-land on Moon (USSR, USA, China were first three)
- RESOURCESAT and CARTOSAT are in **LEO**, not GEO; INSAT/GSAT are in **GEO**

**Mains linkages:**
- Orbital mechanics → satellite applications → ISRO's commercial launches (OneWeb on LVM3 → foreign exchange earnings)
- Chandrayaan-3 → South Pole science (water ice → future lunar base → Artemis Accords → India's position)
- Gaganyaan → human spaceflight → spin-off technologies (life support, materials science)

---

## Previous Year Questions

**Prelims:**
1. Which of the following statements about geostationary satellites is correct?<br>
   (a) They orbit at an altitude of 10,000 km<br>
   (b) They complete one orbit in 12 hours<br>
   **(c) They appear stationary relative to a fixed point on Earth's surface**<br>
   (d) They are used exclusively for military surveillance

2. Chandrayaan-3's Vikram lander touched down near the lunar South Pole in August 2023. With this achievement, India became the how-manyth country to achieve a soft landing on the Moon?<br>
   (a) Second<br>
   (b) Third<br>
   **(c) Fourth**<br>
   (d) Fifth

**Mains:**
1. Discuss the significance of Low Earth Orbit (LEO) versus Geostationary Orbit (GEO) in India's space programme. How have ISRO's remote sensing satellites contributed to natural resource management? (CSE Mains 2022, GS Paper 3, 15 marks)
