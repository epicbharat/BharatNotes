---
layout: topic.njk
title: "Fluid Mechanics & Surface Tension — Pressure, Buoyancy, Viscosity & Bernoulli's Principle"
subject: general-science
gs_papers:
  - gs3
syllabus_topic: "General Science"
parent_topic: "Physics"
parent_topic_url: "/subjects/general-science/physics/"
description: "UPSC notes on fluid mechanics — pressure, Pascal's law, hydraulic systems, Archimedes' principle, buoyancy, viscosity, surface tension, capillarity, and Bernoulli's theorem."
sub_chapter: 7
chapter: 7
date: 2026-03-28
foundation: true
prelims: true
mains: true
tags:
  - general-science
---

## Overview

Fluid mechanics is the branch of physics that studies the behaviour of fluids (liquids and gases) at rest (fluid statics) and in motion (fluid dynamics). It underpins technologies ranging from hydraulic brakes and water supply systems to airplane flight and weather prediction. For UPSC Prelims, questions frequently test Archimedes' principle, Pascal's law, Bernoulli's theorem, and everyday applications of fluid properties such as surface tension and viscosity.

> **Exam Strategy:** Focus on understanding the principles (Pascal's law, Archimedes' principle, Bernoulli's theorem) and their real-world applications. Prelims questions are typically application-based — e.g., "Why does a ship float?", "How does a hydraulic brake work?", "Why does a spinning cricket ball swing?" Tables of key concepts and formulae serve as excellent last-minute revision tools.

---

## Properties of Fluids

### Density and Specific Gravity

| Property | Definition | Formula | SI Unit |
|----------|-----------|---------|---------|
| **Density** | Mass per unit volume of a substance | ρ = m/V | kg/m³ |
| **Specific Gravity (Relative Density)** | Ratio of density of a substance to density of water at 4 °C | SG = ρ_substance / ρ_water | Dimensionless |

- Water has maximum density at 4 °C (approximately 1000 kg/m³ or 1 g/cm³)
- Objects with specific gravity less than 1 float in water; greater than 1 sink
- **Hydrometer** — instrument used to measure the specific gravity of liquids (e.g., lactometer for milk purity)

### Pressure in Fluids

| Concept | Definition | Formula |
|---------|-----------|---------|
| **Pressure** | Force exerted per unit area | P = F/A |
| **Hydrostatic Pressure** | Pressure exerted by a fluid at rest due to gravity | P = ρgh |
| **Atmospheric Pressure** | Pressure exerted by the weight of the atmosphere | 1 atm = 101,325 Pa = 760 mmHg |
| **Gauge Pressure** | Pressure measured relative to atmospheric pressure | P_gauge = P_absolute − P_atm |
| **Absolute Pressure** | Total pressure including atmospheric pressure | P_absolute = P_gauge + P_atm |

> **Key Fact:** Atmospheric pressure was first measured by Evangelista Torricelli in 1643 using a mercury barometer. Standard atmospheric pressure supports a mercury column of 760 mm (29.92 inches) at sea level and 0 °C.

- Pressure at a point in a fluid depends only on depth, density, and gravitational acceleration — not on the shape of the container (this is called the **hydrostatic paradox**)
- Pressure acts equally in all directions at a given depth in a fluid (a consequence of Pascal's law)

---

## Pascal's Law

**Statement:** A change in pressure applied to an enclosed, incompressible fluid is transmitted undiminished to every portion of the fluid and to the walls of its container.

Formulated by French mathematician **Blaise Pascal** in 1653 (published 1663).

### Applications of Pascal's Law

| Application | How It Works |
|-------------|-------------|
| **Hydraulic Press** | A small force on a small piston creates a large force on a large piston (F₂ = F₁ × A₂/A₁) |
| **Hydraulic Brakes** | Brake pedal force is transmitted through brake fluid to brake pads at all four wheels simultaneously |
| **Hydraulic Lift** | Used in car service stations to lift heavy vehicles with minimal effort |
| **Hydraulic Jack** | Portable device using Pascal's law to lift heavy loads |
| **Dentist's Chair** | Hydraulic mechanism allows smooth height adjustment |

> **Prelims Tip:** The hydraulic press does NOT violate the law of conservation of energy. The force is amplified, but the distance moved by the larger piston is proportionally smaller. Work input equals work output (in an ideal system): F₁ × d₁ = F₂ × d₂.

---

## Archimedes' Principle and Buoyancy

### Archimedes' Principle

**Statement:** When a body is wholly or partially immersed in a fluid, it experiences an upward force (buoyant force) equal to the weight of the fluid displaced by the body.

Discovered by the Greek mathematician **Archimedes of Syracuse** (c. 287–212 BCE).

**Buoyant Force:** F_b = ρ_fluid × V_displaced × g

### Conditions for Floating and Sinking

| Condition | Result |
|-----------|--------|
| Weight of object > Buoyant force (ρ_object > ρ_fluid) | Object **sinks** |
| Weight of object = Buoyant force (ρ_object = ρ_fluid) | Object **floats at any depth** (neutral buoyancy) |
| Weight of object < Buoyant force (ρ_object < ρ_fluid) | Object **floats** with part above the surface |

### Law of Flotation

A floating body displaces a weight of fluid equal to its own weight. This is why:

- A steel ship floats — the hull encloses a large volume of air, making the average density of the ship less than water
- An iron nail sinks — its density (~7,800 kg/m³) is much greater than water
- Icebergs float with about 90% submerged — because ice density (~917 kg/m³) is about 90% of seawater density (~1025 kg/m³)

### The Plimsoll Line

The **Plimsoll line** (or load line) is a marking on a ship's hull indicating the maximum depth to which the vessel may be safely immersed when loaded with cargo. Named after **Samuel Plimsoll** (1824–1898), a British MP who campaigned against overloading of cargo ships. The Merchant Shipping Act 1876 made the load line mark compulsory. The International Convention on Load Lines (1966) standardised these markings globally.

Different markings account for:

| Mark | Meaning |
|------|---------|
| **TF** | Tropical Fresh Water |
| **F** | Fresh Water |
| **T** | Tropical Sea Water |
| **S** | Summer Sea Water |
| **W** | Winter Sea Water |
| **WNA** | Winter North Atlantic |

> **Why different marks?** Seawater is denser than fresh water, and cold water is denser than warm water. A ship sits higher in denser water, so it can carry more cargo safely.

---

## Viscosity

### Definition and Concept

**Viscosity** is the internal friction of a fluid — its resistance to flow. A fluid with high viscosity (e.g., honey) flows slowly; a fluid with low viscosity (e.g., water) flows easily.

### Newton's Law of Viscosity

The shear stress between adjacent fluid layers is proportional to the velocity gradient between the layers:

**τ = η (dv/dx)**

where τ = shear stress, η = dynamic viscosity (coefficient of viscosity), dv/dx = velocity gradient.

- Fluids that obey this law are called **Newtonian fluids** (e.g., water, air, glycerine)
- Fluids that do not obey this law are **Non-Newtonian fluids** (e.g., ketchup, blood, quicksand)

### SI Unit of Viscosity

| Quantity | SI Unit | CGS Unit |
|----------|---------|----------|
| **Dynamic Viscosity (η)** | Pa·s (Pascal-second) | Poise (P); 1 Pa·s = 10 P |
| **Kinematic Viscosity (ν = η/ρ)** | m²/s | Stokes (St) |

### Stokes' Law and Terminal Velocity

**Stokes' Law** (George Gabriel Stokes, 1851): The drag force on a small sphere moving through a viscous fluid is:

**F = 6πrηv**

where r = radius of sphere, η = viscosity, v = velocity.

**Terminal Velocity:** When a sphere falls through a viscous fluid, it accelerates until the drag force plus buoyant force equals its weight. At this point, it moves at constant speed called terminal velocity:

**v_T = 2r²(ρ_s − ρ_f)g / 9η**

where ρ_s = density of sphere, ρ_f = density of fluid.

### Applications of Viscosity and Stokes' Law

| Application | Explanation |
|-------------|-------------|
| **Raindrops** | Small raindrops fall slowly (low terminal velocity) while large drops fall faster |
| **Sedimentation** | Heavier particles settle faster in water — used in water purification |
| **Cloud formation** | Tiny water droplets remain suspended due to extremely low terminal velocity |
| **Parachute** | Increases drag area, reducing terminal velocity for safe landing |
| **Oil grades** | Engine oils are graded by viscosity (e.g., SAE 10W-40) for different temperatures |

---

## Surface Tension

### Definition

**Surface tension** is the property of a liquid surface that causes it to behave like a stretched elastic membrane. It arises because molecules at the surface experience a net inward cohesive force (they are pulled inward by neighbouring molecules but have no molecules above to balance).

**SI Unit:** N/m (Newton per metre)

### Phenomena Due to Surface Tension

| Phenomenon | Explanation |
|------------|-------------|
| **Water drops are spherical** | Surface tension minimises surface area; a sphere has the least surface area for a given volume |
| **Insects walk on water** | Surface tension supports their weight (e.g., water striders) |
| **Needle floats on water** | If placed gently, a steel needle can float due to surface tension |
| **Soap bubbles** | Surface tension of the soap film holds the bubble together |
| **Mercury forms rounded droplets** | High surface tension of mercury causes it to avoid wetting surfaces |

### Capillarity

**Capillarity** (capillary action) is the rise or fall of a liquid in a narrow tube (capillary) due to the combined effect of surface tension, cohesion, and adhesion.

| Liquid–Surface Interaction | Meniscus Shape | Capillary Effect | Example |
|---------------------------|----------------|-------------------|---------|
| **Adhesion > Cohesion** | Concave (curved upward) | Liquid **rises** | Water in glass tube |
| **Cohesion > Adhesion** | Convex (curved downward) | Liquid **falls** | Mercury in glass tube |

**Applications of Capillarity:**

- Absorption of water by a towel or sponge
- Rising of oil in a lamp wick
- Movement of water from roots to leaves in plants (along with transpiration pull)
- Ink rising in blotting paper
- Groundwater movement through soil pores

### Effect of Detergents and Temperature

- **Detergents (surfactants)** reduce the surface tension of water, allowing it to spread and penetrate fabrics — this is why soapy water cleans better than plain water
- **Hot water** has lower surface tension than cold water — another reason hot water cleans better
- Adding impurities generally decreases the surface tension of water

> **Exam Tip:** The cleaning action of soap/detergent is a frequently tested concept. Soap molecules have a hydrophilic (water-attracting) head and a hydrophobic (water-repelling) tail. The tail attaches to grease/oil, while the head remains in water, forming micelles that lift dirt away from surfaces.

---

## Bernoulli's Theorem

### Statement

For an ideal, incompressible, non-viscous fluid in steady (streamline) flow, the sum of pressure energy, kinetic energy, and potential energy per unit volume remains constant along a streamline:

**P + ½ρv² + ρgh = constant**

where P = pressure, ρ = fluid density, v = velocity, g = acceleration due to gravity, h = height.

This is essentially the **law of conservation of energy** applied to fluid flow.

### Key Implication

**Where fluid velocity increases, pressure decreases** — and vice versa (for horizontal flow where h is constant).

### Applications of Bernoulli's Theorem

| Application | How Bernoulli's Principle Applies |
|-------------|----------------------------------|
| **Airplane lift** | Air flows faster over the curved upper surface of the wing (lower pressure) than below (higher pressure), creating an upward lift force |
| **Venturi meter** | Measures fluid flow rate; fluid speeds up at the constriction, pressure drops — the pressure difference indicates flow rate |
| **Atomiser / Spray gun** | High-speed air over the tube opening reduces pressure, drawing liquid up and dispersing it as a fine spray |
| **Bunsen burner** | Gas flows at high speed, reducing pressure at the air inlet, drawing air in for combustion |
| **Swing of a cricket ball** | Bowler creates differential air speed on two sides of the ball (one rough, one smooth), causing lateral movement |
| **Magnus effect** | A spinning ball curves because air velocity (and hence pressure) differs on opposite sides |
| **Blowing off roofs in storms** | High wind speed over the roof reduces pressure above; higher pressure inside pushes the roof upward |

> **Common Misconception:** Bernoulli's principle alone does not fully explain airplane lift. The Coanda effect (air following curved surfaces) and Newton's third law (downward deflection of air) also contribute. However, for UPSC purposes, the Bernoulli explanation is the standard expected answer.

---

## Reynolds Number — Laminar vs Turbulent Flow

### Types of Fluid Flow

| Type | Characteristics |
|------|----------------|
| **Laminar (Streamline) Flow** | Smooth, orderly flow in parallel layers; occurs at low velocities |
| **Turbulent Flow** | Chaotic, irregular flow with eddies and vortices; occurs at high velocities |
| **Transitional Flow** | Intermediate state between laminar and turbulent |

### Reynolds Number (Re)

A **dimensionless number** that predicts whether fluid flow will be laminar or turbulent:

**Re = ρvD / η**

where ρ = fluid density, v = flow velocity, D = characteristic length (e.g., pipe diameter), η = dynamic viscosity.

| Re Value | Flow Type |
|----------|-----------|
| Re < 2000 | Laminar flow |
| 2000 < Re < 4000 | Transitional flow |
| Re > 4000 | Turbulent flow |

> **Prelims Tip:** Reynolds number is the ratio of inertial forces to viscous forces in a fluid. A high Reynolds number means inertial forces dominate (turbulent flow); a low number means viscous forces dominate (laminar flow). It is a dimensionless quantity — it has no units.

---

## Fluid Mechanics in Daily Life and Technology

| Everyday Phenomenon | Physics Principle |
|---------------------|-------------------|
| Water rises in a straw when you suck | Atmospheric pressure pushes water up when pressure above is reduced |
| Dam walls are thicker at the base | Hydrostatic pressure increases with depth (P = ρgh) |
| Blood pressure measurement | Sphygmomanometer measures gauge pressure of blood flow |
| Deep-sea fish die at surface | Adapted to high pressure at depth; body expands at low surface pressure |
| Hydraulic brakes in vehicles | Pascal's law — pressure transmitted equally through brake fluid |
| Ships float despite being made of steel | Archimedes' principle — average density less than water |
| Water supply in multi-storey buildings | Overhead tanks use hydrostatic pressure (P = ρgh) for gravity flow |
| Airplane wings generate lift | Bernoulli's theorem — pressure differential above and below wing |
| Spinning ball curves in flight | Magnus effect (application of Bernoulli's principle) |
| Paper rises when you blow over it | Bernoulli's principle — fast air above reduces pressure |

---

## Frequently Asked Questions (Prelims Pattern)

| Question | Answer |
|----------|--------|
| What does a barometer measure? | Atmospheric pressure |
| What does a manometer measure? | Pressure of gases |
| What is the SI unit of pressure? | Pascal (Pa) = N/m² |
| Who formulated the law of fluid pressure transmission? | Blaise Pascal (1653) |
| What principle explains why ships float? | Archimedes' principle (buoyancy) |
| What is the Plimsoll line? | Maximum safe loading mark on a ship's hull |
| What does Bernoulli's theorem relate? | Pressure, velocity, and height in a flowing fluid |
| Why do roofs blow off in a storm? | Bernoulli's effect — low pressure above the roof due to high wind speed |
| What is terminal velocity? | Constant velocity attained by a falling object when drag equals weight |
| What causes capillary rise? | Surface tension and adhesion between liquid and tube wall |
| Why does a cricket ball swing? | Differential air pressure on smooth and rough sides (Bernoulli's principle) |

---

## Key Terms for Quick Revision

| Term | Meaning |
|------|---------|
| **Buoyancy** | Upward force exerted by a fluid on an immersed object, equal to the weight of fluid displaced |
| **Pascal's Law** | Pressure applied to a confined fluid is transmitted equally in all directions |
| **Archimedes' Principle** | Buoyant force on a submerged body equals the weight of the displaced fluid |
| **Bernoulli's Theorem** | In steady flow, the sum of pressure, kinetic, and potential energy per unit volume is constant along a streamline |
| **Viscosity** | Internal friction of a fluid; resistance to flow |
| **Surface Tension** | Tendency of a liquid surface to contract to the minimum area, behaving like an elastic membrane |
| **Capillarity** | Rise or fall of a liquid in a narrow tube due to surface tension and adhesion/cohesion forces |
| **Terminal Velocity** | Constant velocity reached by a falling object when drag force equals gravitational pull |
| **Reynolds Number** | Dimensionless number predicting laminar or turbulent flow (ratio of inertial to viscous forces) |
| **Stokes' Law** | Drag force on a small sphere in a viscous fluid equals 6πrηv |
| **Meniscus** | Curved surface of a liquid in a container, caused by surface tension |
| **Hydrostatic Paradox** | Pressure at a depth depends only on depth and fluid density, not container shape |
| **Venturi Effect** | Reduction in fluid pressure when it flows through a constricted section of pipe |
| **Magnus Effect** | Lateral force on a spinning object moving through a fluid, causing it to curve |

---

*Sources: Physics LibreTexts (OpenStax University Physics); Britannica; Wikipedia; NOAA (oceanservice.noaa.gov); NASA Glenn Research Center; TeachEngineering (University of Houston).*
