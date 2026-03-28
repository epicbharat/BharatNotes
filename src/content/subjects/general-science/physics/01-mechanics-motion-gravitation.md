---
layout: topic.njk
title: "Mechanics, Motion & Gravitation"
subject: general-science
parent_topic: "Physics"
parent_topic_url: "/subjects/general-science/physics/"
gs_papers:
  - gs3
syllabus_topic: "General Science"
description: "UPSC notes on mechanics — Newton's laws of motion, friction, circular motion, gravitation, Kepler's laws, satellites, orbital mechanics, and everyday physics applications."
sub_chapter: 1
date: 2026-03-27
foundation: true
prelims: true
mains: true
tags:
  - general-science
---

## Overview

Mechanics is the most frequently tested physics topic in UPSC Prelims. Questions typically focus on conceptual understanding — why objects behave the way they do — rather than numerical problem-solving. This chapter covers Newton's laws, friction, gravitation, satellites, and simple machines with exam-relevant facts and common "gotcha" points.

---

## Newton's Laws of Motion

| Law | Statement | Formula | Everyday Example |
|-----|-----------|---------|------------------|
| **First Law (Inertia)** | A body at rest stays at rest, and a body in uniform motion continues in a straight line, unless acted upon by an external force | No formula — qualitative law | Passengers lurch forward when a bus brakes suddenly (body tends to maintain its state of motion) |
| **Second Law (Force)** | The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the force | **F = ma** (force = mass x acceleration) | A cricket ball hit harder accelerates more; pushing a heavier trolley requires more force for the same acceleration |
| **Third Law (Action–Reaction)** | For every action, there is an equal and opposite reaction; forces always occur in pairs acting on different bodies | **F(AB) = -F(BA)** | Rocket propulsion — exhaust gases push down, rocket moves up; walking — foot pushes ground backward, ground pushes foot forward |

**Exam tip:** Newton's First Law is also called the Law of Inertia. Inertia depends solely on mass — a heavier object has greater inertia. The First Law is a special case of the Second Law (when F = 0, a = 0).

### Real-World Applications of Newton's Laws

| Application | Law at Work | Explanation |
|-------------|-------------|-------------|
| **Seatbelts in cars** | First Law (Inertia) | When a car stops suddenly, the passenger's body tends to continue moving forward due to inertia. The seatbelt provides the external force needed to decelerate the passenger along with the car, preventing injury |
| **Rocket propulsion** | Third Law (Action–Reaction) | Hot exhaust gases are expelled backward at high speed (action). The rocket experiences an equal and opposite thrust forward (reaction). This works even in the vacuum of space — no air is needed to "push against" |
| **Recoil of a gun** | Third Law | The bullet moves forward (action) while the gun pushes backward against the shooter's shoulder (reaction). The gun recoils less because it has greater mass (F = ma — same force, more mass, less acceleration) |
| **Catching a cricket ball** | Second Law | A fielder pulls hands back while catching to increase the time over which momentum changes, thereby reducing the force on the hands (impulse = F x t = change in momentum) |

---

## Types of Motion

| Type | Description | Key Feature | Example |
|------|-------------|-------------|---------|
| **Linear (Rectilinear)** | Motion along a straight line | Displacement is along one axis | A car on a straight highway; free fall of an object |
| **Circular** | Motion along a circular path at constant speed | Requires **centripetal force** directed toward the centre; velocity direction changes continuously | Moon orbiting Earth; vehicle turning on a curved road |
| **Projectile** | Motion under gravity with an initial horizontal velocity | Path is a **parabola**; horizontal and vertical motions are independent | A ball thrown at an angle; a bullet fired horizontally |
| **Oscillatory (Vibratory)** | Repetitive back-and-forth motion about a mean position | Has a **time period** and **frequency** | Pendulum of a clock; vibrating tuning fork |

**Exam tip:** In circular motion, speed may be constant but velocity is not (direction changes) — hence it is an accelerated motion. UPSC has tested this distinction.

---

## Friction

| Type | Description | Magnitude | Example |
|------|-------------|-----------|---------|
| **Static friction** | Friction that prevents a body from starting to move; self-adjusting up to a maximum value | Highest (f_s = mu_s x N) | A heavy box on the floor that does not slide when pushed gently |
| **Kinetic (Sliding) friction** | Friction acting on a body already in motion | Less than static friction | A box sliding across the floor |
| **Rolling friction** | Friction when a body rolls over a surface | Least of the three types | A ball rolling on the ground; wheels on a road |

| Concept | Detail |
|---------|--------|
| **Coefficient of friction (mu)** | Dimensionless ratio of friction force to normal force; depends on surface nature, not on contact area |
| **Why rolling friction is least** | Deformation at contact point is minimal compared to sliding — this is why wheels were a revolutionary invention |
| **Friction is necessary** | Walking, writing, braking, and gripping all require friction; without it, motion control is impossible |
| **Reducing friction** | Lubrication (oil, grease), ball bearings, polishing surfaces, streamlining (for air resistance) |

**Exam tip:** Friction does NOT depend on the area of contact — only on the nature of surfaces and the normal force. This is a frequently tested misconception.

---

## Work, Energy & Power

| Concept | Definition | SI Unit | Formula |
|---------|-----------|---------|---------|
| **Work** | Product of force and displacement in the direction of force | Joule (J) | W = F x d x cos(theta) |
| **Energy** | Capacity to do work | Joule (J) | Various forms (see below) |
| **Power** | Rate of doing work | Watt (W); 1 W = 1 J/s | P = W/t |

| Energy Type | Description | Formula |
|-------------|-------------|---------|
| **Kinetic Energy** | Energy of a body in motion | KE = (1/2)mv^2 |
| **Potential Energy (Gravitational)** | Energy due to position/height above a reference | PE = mgh |
| **Conservation of Energy** | Energy can neither be created nor destroyed — only transformed from one form to another | Total energy remains constant in an isolated system |

| Unit Conversions | Value |
|-----------------|-------|
| **1 horsepower (HP)** | **746 watts** |
| **1 calorie** | **4.186 joules** |
| **1 kilowatt-hour (kWh)** | **3.6 x 10^6 joules** (the "unit" in electricity bills) |

**Exam tip:** When a ball is thrown upward, KE converts to PE during ascent and PE converts back to KE during descent — total mechanical energy stays constant (ignoring air resistance). UPSC often asks about energy transformations in everyday scenarios.

---

## Gravitation

| Concept | Detail |
|---------|--------|
| **Newton's Law of Universal Gravitation** | Every particle attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them: **F = G(m1 x m2)/r^2** |
| **Gravitational Constant (G)** | **6.674 x 10^-11 N m^2 kg^-2** — a universal constant; same everywhere in the universe; first measured by **Henry Cavendish in 1798** |
| **Acceleration due to gravity (g)** | **9.8 m/s^2** (standard value: 9.80665 m/s^2) — varies with location on Earth |

### g vs G — A Classic UPSC Comparison

| Property | g (acceleration due to gravity) | G (gravitational constant) |
|----------|--------------------------------|---------------------------|
| **Nature** | Acceleration (vector) | Universal constant (scalar) |
| **Value** | 9.8 m/s^2 (varies by location) | 6.674 x 10^-11 N m^2 kg^-2 (constant everywhere) |
| **SI Unit** | m/s^2 | N m^2 kg^-2 |
| **Depends on** | Mass and radius of the planet | Nothing — it is a universal constant |

### Variation of g

| Factor | Effect on g | Explanation |
|--------|-------------|-------------|
| **Altitude (above surface)** | **Decreases** | g decreases as distance from Earth's centre increases; g' = g(1 - 2h/R) for small heights |
| **Depth (below surface)** | **Decreases** | g becomes zero at Earth's centre; g' = g(1 - d/R) |
| **Latitude (poles vs equator)** | **Maximum at poles, minimum at equator** | Earth's rotation produces outward centrifugal effect; also, Earth is flattened at poles (smaller radius) |
| **Earth's rotation** | **Reduces effective g at equator** | Centrifugal component is maximum at equator; variation up to ~0.3% |

**Exam tip:** g is zero at the centre of the Earth (depth effect) but never zero at any altitude above the surface — it only approaches zero at infinity. UPSC has tested the difference between weightlessness in orbit (free fall, not zero gravity) and true zero gravity.

---

## Kepler's Laws of Planetary Motion

Johannes Kepler formulated these laws based on Tycho Brahe's astronomical observations. The first two laws were published in **1609** and the third in **1618**.

| Law | Name | Statement |
|-----|------|-----------|
| **First Law** | Law of Orbits | All planets move in **elliptical orbits** with the Sun at one of the two foci |
| **Second Law** | Law of Areas | A line joining a planet to the Sun sweeps out **equal areas in equal intervals of time** — planet moves faster when closer to the Sun (perihelion) and slower when farther (aphelion) |
| **Third Law** | Law of Periods | The square of the orbital period is proportional to the cube of the semi-major axis: **T^2 is proportional to a^3** |

**Exam tip:** Kepler's Second Law explains why Earth moves fastest in January (perihelion, ~147 million km from Sun) and slowest in July (aphelion, ~152 million km). Newton later showed that Kepler's laws are consequences of the law of gravitation.

---

## Satellites & Orbital Mechanics

| Concept | Detail |
|---------|--------|
| **Orbital velocity (near Earth)** | **~7.9 km/s** (about 28,000 km/h); formula: v = sqrt(GM/R) |
| **Escape velocity (Earth)** | **11.2 km/s** (~40,320 km/h); velocity needed to escape Earth's gravitational pull entirely; formula: v_e = sqrt(2GM/R) = sqrt(2) x orbital velocity |
| **Relationship** | Escape velocity = sqrt(2) x orbital velocity — a favourite UPSC fact |

### Escape Velocity Across Celestial Bodies

Escape velocity depends on the mass and radius of the body — larger, denser bodies have higher escape velocity. This determines which gases an atmosphere can retain.

| Body | Escape Velocity | Significance |
|------|----------------|--------------|
| **Moon** | **2.4 km/s** | Too low to retain an atmosphere — gas molecules at lunar temperatures exceed this speed and escape into space |
| **Mars** | **5.0 km/s** | Retains only a thin CO2 atmosphere; most lighter gases have escaped over billions of years |
| **Earth** | **11.2 km/s** | Retains N2, O2, CO2 but not hydrogen or helium in significant amounts |
| **Jupiter** | **59.5 km/s** | Retains even the lightest gases (hydrogen, helium) — hence it is a gas giant |

| Orbit Type | Altitude | Period | Key Use |
|------------|----------|--------|---------|
| **Low Earth Orbit (LEO)** | 200–2,000 km | ~90–120 minutes | ISS (~408 km), Earth observation, remote sensing |
| **Polar/Sun-synchronous Orbit** | ~600–800 km | ~96–100 minutes | Weather satellites, Earth mapping; passes over poles; ISRO's Cartosat, Resourcesat series |
| **Geostationary Orbit (GEO)** | **35,786 km** above equator | **24 hours** (matches Earth's rotation) | Communication satellites, weather monitoring (INSAT series); appears stationary from Earth |

| Concept | Detail |
|---------|--------|
| **Weightlessness in orbit** | Astronauts in the ISS experience weightlessness not because gravity is absent — gravity at 408 km altitude is about **89% of surface gravity**. They are in continuous **free fall** along with the station |
| **Geostationary conditions** | Must be in the **equatorial plane**, at exactly 35,786 km altitude, with zero orbital inclination and circular orbit |

**Exam tip:** Escape velocity depends on the mass and radius of the planet, NOT on the mass of the escaping object. A feather and a rocket need the same escape velocity (ignoring air resistance).

---

## Simple Machines

| Machine | Principle | Mechanical Advantage (MA) | Example |
|---------|-----------|--------------------------|---------|
| **Lever** | Rigid bar rotating about a fulcrum; effort x effort arm = load x load arm | MA = Load / Effort = Effort arm / Load arm | Scissors (Class 1), nutcracker (Class 2), tweezers (Class 3) |
| **Pulley** | Wheel with a grooved rim for a rope; changes direction or magnitude of force | Single fixed pulley: MA = 1 (changes direction only); movable pulley: MA = 2 | Flagpole (fixed), crane (compound) |
| **Inclined plane** | A flat surface tilted at an angle; reduces effort needed by increasing distance | MA = Length of slope / Height | Ramp for loading goods, screw (a wrapped inclined plane), mountain roads with switchbacks |
| **Wheel and axle** | A larger wheel attached to a smaller axle; force applied at wheel is magnified at axle | MA = Radius of wheel / Radius of axle | Steering wheel, doorknob, screwdriver |

**Exam tip:** No machine can have efficiency of 100% in practice — energy is always lost to friction. Mechanical advantage tells how much a machine multiplies force, not energy.

---

## Bernoulli's Principle & Fluid Dynamics

Bernoulli's principle states that in a steadily flowing fluid, an increase in velocity occurs simultaneously with a decrease in pressure. The equation (for incompressible, non-viscous flow along a streamline) is:

**P + (1/2)ρv^2 + ρgh = constant**

where P = pressure, ρ = fluid density, v = velocity, g = acceleration due to gravity, h = height.

| Application | How Bernoulli's Principle Applies |
|-------------|----------------------------------|
| **Airplane lift** | The curved upper surface of a wing forces air to travel faster over the top than the bottom. Faster air means lower pressure above the wing and higher pressure below — the pressure difference creates an upward lift force |
| **Swing bowling (cricket)** | The bowler keeps one side of the ball smooth and the other rough, with the seam angled at 15°–25°. Air flows smoothly over the smooth side but becomes turbulent past the rough/seam side. The difference in airflow speed creates a pressure imbalance, causing the ball to swing laterally |
| **Venturi meter** | A constriction in a pipe increases fluid velocity and lowers pressure at the narrow section. Measuring the pressure difference allows calculation of flow rate |
| **Atomiser / perfume sprayer** | Fast-moving air over the tube opening reduces pressure, drawing liquid up from the container and dispersing it as a fine spray |

**Exam tip:** Bernoulli's principle applies only to ideal (non-viscous, incompressible) fluids in streamline (laminar) flow. It is essentially a statement of conservation of energy for flowing fluids.

---

## Pressure & Buoyancy

| Concept | Statement | Formula | Application |
|---------|-----------|---------|-------------|
| **Pressure** | Force applied per unit area | P = F/A; SI unit: **Pascal (Pa)** = 1 N/m^2 | A sharp knife cuts better — same force, smaller area, greater pressure |
| **Pascal's Law** | A change in pressure applied to an enclosed incompressible fluid at rest is transmitted **equally and undiminished** to all points in the fluid | P1 = P2 everywhere in the fluid | Hydraulic brakes, hydraulic lift, hydraulic press |
| **Archimedes' Principle** | A body immersed in a fluid experiences an upward buoyant force **equal to the weight of fluid displaced** | Buoyant force = weight of displaced fluid = rho x V x g | Ships float (displace water equal to their weight), hydrometer measures liquid density, submarines use ballast tanks |
| **Atmospheric pressure** | Weight of air column above a surface; standard value: **1 atm = 101,325 Pa = 760 mm Hg** | Measured by **barometer** (invented by **Torricelli, 1643**) | Decreases with altitude — water boils below 100 degrees C at high altitudes; suction cups work due to atmospheric pressure |

**Exam tip:** Hydraulic systems work because liquids are nearly incompressible. Pascal's Law applies only to fluids at rest (hydrostatics), not to fluids in motion.

---

## UPSC Relevance

### Prelims Focus Areas

| Focus Area | What UPSC Tests |
|------------|-----------------|
| **Newton's Laws** | Conceptual questions — why seatbelts work (inertia), how rockets propel (action-reaction), why heavier objects need more force (F = ma) |
| **Friction** | Misconceptions — friction is independent of contact area; static friction is greater than kinetic; rolling friction is least |
| **Gravitation** | g vs G comparison; variation of g with altitude/depth/latitude; weightlessness is free fall, not zero gravity |
| **Satellites** | Geostationary altitude (35,786 km), escape velocity (11.2 km/s), orbital velocity relationship with escape velocity |
| **Pressure & fluids** | Pascal's law applications (hydraulics), Archimedes' principle (flotation), atmospheric pressure and its effects at altitude |
| **Bernoulli's principle** | How airplane wings generate lift, why cricket balls swing, Venturi effect in fluid flow measurement |
| **Escape velocity** | Comparison across celestial bodies; why Moon has no atmosphere; relationship with orbital velocity (v_e = sqrt(2) x v_orbital) |

### Mains / Essay Focus Areas

| Focus Area | How It Appears |
|------------|----------------|
| **Space technology** | GS3 — India's satellite programme (INSAT, IRS series), launch vehicles (PSLV for polar orbits, GSLV for geostationary) |
| **Science & society** | Essay — how fundamental physics (Newton's laws, gravitation) underpins modern technology, transportation, and infrastructure |
| **Everyday physics** | GS3 — application-based questions on hydraulic systems, mechanical advantage in construction, pressure in aviation |

---

## Vocabulary

### Momentum
- **Pronunciation:** /moʊˈmɛntəm/
- **Definition:** The product of a body's mass and velocity, representing the quantity of motion possessed by the moving body.
- **Origin:** From Latin *momentum*, a contraction of *movimentum*, from *movēre* ("to move") + *-mentum* (noun-forming suffix).

### Inertia
- **Pronunciation:** /ɪnˈɜːʃə/
- **Definition:** The property of matter by which a body remains at rest or continues in uniform motion in a straight line unless acted upon by an external force.
- **Origin:** From Latin *inertia* ("lack of skill, inactivity"), from *iners* ("idle, sluggish"), from *in-* ("not") + *ars* ("skill, art").

### Gravitation
- **Pronunciation:** /ˌɡrævɪˈteɪʃən/
- **Definition:** The fundamental force of mutual attraction between all bodies that have mass, proportional to the product of their masses and inversely proportional to the square of the distance between them.
- **Origin:** From Latin *gravitātiōnem*, from *gravitās* ("weight, heaviness"), from *gravis* ("heavy").

---

## Key Terms

### Newton's Laws
- **Pronunciation:** /ˈnjuːtənz lɔːz/
- **Definition:** Three fundamental laws of classical mechanics formulated by Sir Isaac Newton in 1687: First Law (Law of Inertia) -- a body remains at rest or in uniform motion unless acted upon by an external force; Second Law (Law of Force and Acceleration) -- the rate of change of momentum is proportional to the applied force (F = ma); Third Law (Law of Action and Reaction) -- for every action, there is an equal and opposite reaction. These three laws form the foundation of classical mechanics and are valid for objects moving at speeds much less than the speed of light.
- **Context:** Published by Sir Isaac Newton (1643-1727) in his monumental work *Philosophiae Naturalis Principia Mathematica* (Mathematical Principles of Natural Philosophy) in 1687, considered one of the most important works in the history of science. The laws were later superseded at very high speeds by Einstein's Special Relativity (1905) and at atomic scales by quantum mechanics, but remain accurate and practically applicable for everyday and engineering purposes, including satellite orbital mechanics and rocket propulsion.
- **UPSC Relevance:** GS3 (General Science). Prelims tests conceptual understanding through everyday applications -- why seatbelts work and passengers lurch forward when a bus brakes suddenly (First Law, inertia), how rockets propel in the vacuum of space (Third Law, exhaust gases push backward, rocket moves forward), why a cricket ball hit harder travels farther (Second Law, F = ma). Focus on real-world applications rather than mathematical derivations. Mains may link Newton's laws to ISRO's launch vehicle technology, satellite orbital mechanics, and the physics of disaster preparedness (building stability, vehicle safety).

### Escape Velocity
- **Pronunciation:** /ɪˈskeɪp vəˈlɒsɪti/
- **Definition:** The minimum speed an object must reach to break free from a celestial body's gravitational field without any further propulsion, independent of the escaping object's own mass. It depends only on the mass and radius of the celestial body being escaped from. For Earth, escape velocity is approximately 11.2 km/s (about 40,320 km/h); for the Moon it is only 2.4 km/s (explaining why the Moon cannot retain an atmosphere); for Jupiter it is 59.5 km/s. The relationship with orbital velocity is: escape velocity = square root of 2 times orbital velocity.
- **Context:** The concept was developed in the context of orbital mechanics; the mathematical relationship (v_e = sqrt(2GM/R)) derives from equating kinetic energy to gravitational potential energy. Escape velocity is crucial for understanding why certain celestial bodies retain atmospheres (sufficient gravity to prevent gas molecules from reaching escape velocity) and why others do not (the Moon, Mars partially). For ISRO missions, launch vehicles must achieve or exceed escape velocity to send spacecraft on interplanetary trajectories -- Mangalyaan (2013) was placed in a Mars Transfer Orbit after achieving Earth escape velocity.
- **UPSC Relevance:** GS3 (General Science / Space Technology). Prelims frequently tests the value for Earth (11.2 km/s), comparison across celestial bodies (Moon: 2.4 km/s, Mars: 5.0 km/s, Jupiter: 59.5 km/s), why the Moon has no atmosphere (escape velocity too low to retain gas molecules at lunar temperatures), and the relationship with orbital velocity (v_e = sqrt(2) x v_orbital). Key fact: escape velocity does NOT depend on the mass of the escaping object -- a rocket and a tennis ball need the same speed. Mains connects to ISRO's launch vehicle capabilities and interplanetary mission design.

---

*Sources: NCERT Physics (Class 11 and 12), NASA — Orbits and Kepler's Laws (science.nasa.gov), NASA — Bernoulli's Principle (nasa.gov), ESA — Types of Orbits (esa.int), NASA Planetary Fact Sheet (nssdc.gsfc.nasa.gov), Wikipedia — Gravitational Constant, Geostationary Orbit, Escape Velocity, Bernoulli's Principle, Britannica — Pascal's Principle, Kepler's Laws of Planetary Motion, Escape Velocity.*
