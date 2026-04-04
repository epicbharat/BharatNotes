---
layout: topic.njk
title: "Space Technology & Emerging Tech in Disaster Management"
subject: disaster-management
gs_papers:
  - gs3
syllabus_topic: "Disaster Management"
description: "UPSC notes on technology in disaster management — ISRO's role (RISAT, INSAT), satellite-based early warning, GIS, drones, AI in DM, NDMA tech initiatives, Sendai Framework's tech emphasis, deep ocean mission."
chapter: 17
sub_chapter: 18
date: 2026-03-29
tags:
  - disaster-management
parent_topic_url: /subjects/disaster-management/dm-framework/
---

## Why Technology Matters in Disaster Management

The Sendai Framework for Disaster Risk Reduction (2015–2030) explicitly recognises **science, technology, and innovation** as foundational to achieving its seven global targets. Technology enables the shift from reactive disaster response to **proactive risk reduction** through:

- Early warning systems (EWS) that provide lead time for evacuation
- Remote sensing for real-time monitoring of hazards
- GIS-based hazard mapping and vulnerability assessment
- AI-powered predictive analytics for disaster modelling
- Mobile and digital platforms for community-level alerts

India's space programme, managed by **ISRO**, gives the country one of the world's most advanced satellite-based disaster management systems among developing nations.

---

## ISRO's Disaster Management Support (DMS) Programme

**NRSC (National Remote Sensing Centre), Hyderabad** is the nodal centre for satellite-based disaster management support under ISRO.

| Feature | Details |
|---------|---------|
| **NRSC full name** | National Remote Sensing Centre |
| **Location** | Hyderabad (Earth Station at Shadnagar, ~55 km from Hyderabad) |
| **Under** | ISRO / Department of Space |
| **DMS mandate** | Develop satellite-based information services for disaster mitigation, relief, and management at local, state, and national levels |
| **Key systems** | Decision Support Centre (DSC); National Database for Emergency Management (NDEM) |
| **Disasters covered** | Floods, cyclones, drought, landslides, forest fires, earthquakes, oil spills |

**NRSC provides:**
- Satellite-based damage assessment maps within 24–48 hours of a disaster
- Pre- and post-disaster comparison imagery
- Near-real-time flood inundation mapping
- Land subsidence monitoring (using SAR interferometry)

---

## Remote Sensing Satellites

### RISAT — Radar Imaging Satellites

| Satellite | Launch | Sensor | Key Feature |
|----------|--------|--------|------------|
| **RISAT-1** | 2012 | C-band SAR | India's first indigenous Synthetic Aperture Radar (SAR) satellite |
| **RISAT-2** | 2009 | X-band SAR (Israeli TECSAR-based) | 24-hour, all-weather capability |
| **RISAT-2B** | 2019 | X-band SAR | Improved resolution (0.35m); primary DM and defence satellite |
| **RISAT-2BR1** | 2019 | X-band SAR | Sub-metre resolution |

**Why SAR for disaster management:**
- SAR (Synthetic Aperture Radar) transmits its own microwave signals — does not depend on sunlight
- Penetrates **cloud cover** (critical during monsoon floods and cyclones)
- Works at **night** — 24/7 imaging
- Applications: flood mapping, landslide monitoring, oil spill detection, crop damage assessment, coastal erosion

### Earth Observation Satellites

| Satellite | Use in DM |
|----------|----------|
| **Resourcesat-2/2A** | Land cover change; agricultural drought monitoring; LISS-IV at 5.8m resolution |
| **Cartosat-3** | Sub-metre (0.25m) panchromatic; detailed damage assessment; urban flood mapping |
| **EOS-04** (RISAT-1A) | C-band SAR; agricultural monitoring; flood mapping |
| **Oceansat-3** | Ocean colour and surface winds; cyclone track monitoring |

---

## Meteorological Satellites — INSAT Series

India's **Indian National Satellite (INSAT) system** is the backbone of weather forecasting and cyclone early warning.

| Satellite | Key Features | Role in DM |
|----------|-------------|-----------|
| **INSAT-3D** | 6-channel imager + 19-channel sounder | Temperature/humidity profiling; cloud-top winds; cyclone tracking |
| **INSAT-3DR** | Improved version of 3D (2016) | Real-time severe weather monitoring; Day Night Band |
| **INSAT-3DS** | 2024 | Next-gen meteorological satellite; enhanced atmospheric sounding |
| **Kalpana-1** (METSAT-1) | 2002; geostationary | Continuous cloud imagery; cyclone monitoring |

**IMD-INSAT cyclone warning system:**
- India's **India Meteorological Department (IMD)** uses INSAT-3D/3DR data to issue cyclone warnings with **3–5 day lead time**
- IMD's track record: zero casualties from cyclone Fani (2019) and Amphan (2020) despite their intensity — due to effective early warnings
- INSAT provides **half-hourly** satellite imagery updates for cyclone tracking

**Megha-Tropiques (2011):**
- Joint ISRO–CNES (France) mission
- Studies tropical water cycle and energy exchange
- Provides data on cloud microphysics and precipitation — important for cyclone intensification forecasts
- Decommissioned March 2023 after a successful mission

---

## GIS (Geographic Information System) in Disaster Management

**GIS** integrates spatial data (satellite imagery, maps) with attribute data (population, infrastructure, land use) to enable spatial analysis for DM.

### Applications of GIS in DM

| Phase | GIS Application |
|-------|----------------|
| **Prevention/Mitigation** | Hazard mapping (flood zones, seismic zones, landslide-prone areas); risk zonation; land-use planning |
| **Preparedness** | Vulnerability maps; evacuation route planning; resource inventory (hospitals, shelters) |
| **Response** | Damage assessment; search and rescue routing; relief resource allocation |
| **Recovery** | Reconstruction planning; damage extent mapping; beneficiary identification |

**BHUVAN portal (ISRO):**
- India's national geo-portal at **bhuvan.nrsc.gov.in**
- Provides satellite imagery, thematic maps, and disaster-specific geospatial data
- Used by NDMA, SDMAs, and state governments for DM planning
- National Database for Emergency Management (NDEM) hosted on Bhuvan

**National Cyclone Risk Mitigation Project (NCRMP):**
- Uses GIS and remote sensing for cyclone risk mapping along India's 7,516 km coastline
- Identifies vulnerable coastal settlements for early warning and evacuation planning

---

## GPS / GNSS — NavIC in Disaster Management

**NavIC (Navigation with Indian Constellation)**, also called **IRNSS (Indian Regional Navigation Satellite System)**, is India's own regional satellite navigation system — analogous to GPS (USA), GLONASS (Russia), Galileo (EU), and BeiDou (China).

| Feature | Details |
|---------|---------|
| **Operational satellites** | 7 satellites (3 geostationary + 4 geosynchronous) |
| **Coverage** | India and 1,500 km surrounding region |
| **Accuracy** | <20m standard; <10m with special signal |
| **DM role** | Real-time positioning for rescue operations; location tracking of field teams; guidance for relief vehicles |

**NavIC messaging for disaster alerts:**
- The NavIC signal structure has provision to transmit **text messages** alongside navigation signals
- Used by State Disaster Management Authorities (SDMAs) to disseminate flood, cyclone, and earthquake warnings
- NavIC-compatible receivers in fishing boats provide early warnings to fishermen at sea
- When mobile phones become NavIC-compatible, disaster alerts can be sent **directly via satellite signal** without depending on telecom networks

---

## Early Warning Systems (EWS)

### IMD's Cyclone Warning System
- India now provides **3-day track and intensity forecast** for cyclones with ~90% accuracy
- **5-day outlooks** also issued
- Colour-coded warning system: Green → Yellow → Orange → Red (increasing severity)
- **Forecast improvement**: India's cyclone forecast error reduced from ~200 km (2000) to <100 km (2022) — among the best in the Asia-Pacific

### Indian Tsunami Early Warning Centre (ITEWC)
- Established by INCOIS (Indian National Centre for Ocean Information Services), Hyderabad, post-2004 tsunami
- **INCOIS** is the nodal agency for the Indian Ocean Tsunami Warning System (IOTWS)
- Issues tsunami warnings within **7–10 minutes** of an earthquake using seismological data and tide gauge networks

### Common Alerting Protocol (CAP) System — NDMA
- India's **Common Alerting Protocol (CAP)-based Integrated Alert System** is one of the world's most advanced
- Multiple dissemination channels: **SMS, Cell Broadcast, Mobile Apps, TV, Radio, Social Media, RSS Feed, Browser Notifications, Satellite**
- India has delivered over **45 billion location-based SMS alerts** since system inception
- **NDMA** coordinates CAP implementation with telecom operators and state authorities

### Cell Broadcast Technology
- **Cell Broadcast** sends a single message to all mobile devices within a defined geographical area simultaneously
- Does not require knowing individual phone numbers — geo-targeted
- Alert sounds even if phone is on silent
- NDMA launched Cell Broadcast for disaster alerts; planned for full rollout from 2023 onwards
- India has implemented Cell Broadcast through **TRAI (Telecom Regulatory Authority of India)** mandates

---

## Drone Technology (UAVs) in Disaster Management

**UAVs (Unmanned Aerial Vehicles) / Drones** have transformed disaster operations in India.

| Application | Details |
|-------------|---------|
| **Search and Rescue** | Thermal cameras on drones locate survivors under rubble or in flooded areas; crucial when access is impossible on foot |
| **Damage Assessment** | Rapid post-disaster aerial surveys; photogrammetry for 3D mapping of affected areas |
| **Relief Delivery** | Deliver medicines, food, blood in cut-off areas (mountain landslides, flood islands) |
| **Communication Relay** | Tethered UAVs as airborne communication towers in areas with destroyed infrastructure |
| **Flood Monitoring** | Real-time river level and inundation monitoring during active floods |
| **Crowd Management** | Monitor evacuation flows, identify bottlenecks |

**NDRF (National Disaster Response Force)** uses drones routinely in operations. India's **Drone Rules 2021** (amended 2022) and **PLI Scheme for Drones** (₹120 crore) boosted domestic drone production, making them more accessible for disaster operations.

**Drone Shakti scheme** — under Union Budget 2022-23 — aims to enable drone services in agriculture, disaster management, and mapping.

---

## Artificial Intelligence (AI) in Disaster Management

| Application | How AI Helps |
|-------------|-------------|
| **Flood prediction** | ML models trained on river gauge data, satellite soil moisture, and rainfall forecast data predict flood inundation 48–72 hours ahead (Google FloodHub; IMD-ISRO collaboration) |
| **Earthquake damage** | AI analyses satellite imagery to map building damage within hours of an earthquake (replacing weeks of manual survey) |
| **Cyclone intensification** | Deep learning models predict rapid intensification events that challenge traditional numerical models |
| **Landslide risk mapping** | ML models combining slope, geology, rainfall, and land use data produce probabilistic landslide risk maps |
| **Social media mining** | NLP tools mine Twitter/X, WhatsApp for crisis reports during disasters; "Digital Humanitarians" concept |
| **Resource optimisation** | AI-optimised routing of relief supplies to maximise coverage and minimise time |

**BIRAC + DST** support AI-based DM research under the National Mission for Interdisciplinary Cyber-Physical Systems (NM-ICPS).

**Google's Flood Forecasting Initiative** (FloodHub): In India, Google has deployed AI flood forecasting in partnership with CWRC (Central Water Commission); provides localised flood forecasts up to 7 days ahead for river basin communities.

---

## NDMA Technology Initiatives

| Initiative | Details |
|-----------|---------|
| **Aapda Mitra** | Training of **1 lakh community volunteers** (scaling up) in 350+ disaster-prone districts; volunteers trained in SAR, first aid, and use of basic DM technology tools |
| **Multi-Hazard Early Warning System (MHEWS)** | NDMA-led integrated EWS covering cyclones, floods, earthquakes, heat waves, and industrial accidents |
| **BHUVAN portal** | ISRO's geospatial platform; real-time hazard monitoring layers for all states |
| **National Disaster Management Information System (NDMIS)** | Integrated database of hazard profiles, resources, trained personnel |
| **Mock drills** | Annual multi-hazard drills at national and state levels |
| **Sendai Framework monitoring** | India participates in the Sendai Framework Monitor (SFM) — online tool tracking DRR progress against 38 indicators |

---

## Sendai Framework — Technology and Innovation

The **Sendai Framework for Disaster Risk Reduction 2015–2030** was adopted at the **3rd UN World Conference on DRR, Sendai, Japan, on 18 March 2015**.

### Seven Global Targets

| Target | Description |
|--------|-------------|
| A | Substantially reduce global disaster mortality by 2030 |
| B | Substantially reduce affected people globally by 2030 |
| C | Reduce direct disaster economic losses relative to GDP |
| D | Substantially reduce disaster damage to critical infrastructure |
| **E** | Substantially increase number of countries with national/local DRR strategies by **2020** |
| F | Substantially enhance international cooperation to developing countries |
| **G** | Substantially increase availability of multi-hazard **early warning systems** and disaster risk information by 2030 |

### Technology in Sendai Framework
- **Priority 1** (Understanding Disaster Risk): Emphasises use of science, technology, and data
- **Priority 4** (Enhancing Preparedness): Explicitly calls for investments in EWS and satellite-based DM
- **Sendai Seven Campaign**: Promotes specific outcomes including Target G (EWS)
- The framework promotes **open data** and **technology transfer** to developing countries

---

## International Cooperation in DM Technology

| Platform | Details |
|---------|---------|
| **UNOOSA (UN Office for Outer Space Affairs)** | Coordinates space-based disaster response; International Charter on Space and Major Disasters |
| **International Charter: Space and Major Disasters** | ISRO is a member; provides free satellite data during declared disasters worldwide |
| **Sentinel Asia** | Asia-Pacific Space Cooperation Organization; ISRO participates; rapid satellite data sharing during Asia-Pacific disasters |
| **Asian Disaster Preparedness Centre (ADPC)** | Bangkok-based; capacity building for DM tech in Asia |
| **SERVIR (NASA-USAID)** | Satellite earth observation for environmental DM decisions — India provides technical support to SERVIR hubs in neighbouring countries |
| **India-ASEAN DM cooperation** | Annual ASEAN Regional Forum (ARF) DM exercises; disaster monitoring data sharing with ASEAN |

---

## Climate Projections and Long-Term Disaster Risk Planning

**CMIP6 (Coupled Model Intercomparison Project Phase 6):**
- Latest generation of global climate models coordinated under **WCRP (World Climate Research Programme)**
- CMIP6 models project: increased frequency and intensity of extreme precipitation events over India; more intense cyclones in Arabian Sea; accelerated sea-level rise (1.5–3 m by 2100 under high-emissions scenario)
- India's **IITM (Indian Institute of Tropical Meteorology), Pune** contributes to CMIP6 through the IITM-ESM model
- These projections are used by NDMA and state governments for **long-term DRR planning** (NDMP 2019–2030)

**National Disaster Management Plan (NDMP) 2019–2030:** Aligns with Sendai Framework; incorporates climate projections for future risk planning; focuses on building resilience through technology and institutional reform.

---

## Previous Year Questions (PYQs)

### Prelims

1. With reference to the Sendai Framework for Disaster Risk Reduction 2015-2030, which of the following is correct?
   (a) It was adopted at the 2nd UN World Conference on DRR held in Tokyo
   (b) It has 7 global targets and 4 priorities for action
   (c) India has not submitted any voluntary progress reports under this framework
   (d) It applies only to natural disasters, not technological disasters
   *(UPSC CSP 2018 — adapted)*

2. The term "SAR (Synthetic Aperture Radar)" is sometimes seen in the context of:
   (a) Space-based missile early warning systems
   (b) Satellite-based all-weather earth observation and disaster monitoring
   (c) Submarine detection in Indian Ocean
   (d) Nuclear test detection
   *(UPSC CSP 2020 — adapted)*

3. NavIC (Navigation with Indian Constellation) is useful in disaster management because:
   (a) It can trigger nuclear shelter activation
   (b) It provides GPS-independent navigation and can transmit disaster alert text messages
   (c) It monitors seismic activity in real-time
   (d) It replaces INSAT satellites for weather forecasting
   *(UPSC CSP 2021 — adapted)*

4. Which of the following pairs is correctly matched?
   (a) NRSC — National Rocket Space Centre, Sriharikota
   (b) INCOIS — Indian Tsunami Early Warning Centre, Hyderabad
   (c) BHUVAN — NDMA's nationwide relief coordination portal
   (d) Aapda Mitra — Satellite distress signal programme for fishermen
   *(UPSC CSP 2022 — adapted)*

### Mains

1. "Space technology has transformed India's capacity to manage natural disasters." Examine with specific reference to ISRO's satellite systems and early warning mechanisms. *(UPSC GS3 2019)*

2. Discuss the role of Artificial Intelligence and drones in improving disaster preparedness and response in India. What are the limitations and ethical concerns associated with their deployment? *(UPSC GS3 2022)*

3. The Sendai Framework for Disaster Risk Reduction (2015–2030) lays great emphasis on technology and innovation. How is India aligning its disaster management framework with the Sendai targets? *(UPSC GS3 2020)*

---

## Exam Strategy

**For Prelims:**
- NRSC headquarters: **Hyderabad** (Earth Station at Shadnagar)
- RISAT uses **SAR** — all-weather, day/night imaging; key for flood and cyclone response
- INSAT-3D/3DR: meteorological satellites; IMD uses for cyclone tracking and weather forecasting
- NavIC: 7 satellites; India's own navigation system; can transmit DM text alerts
- Sendai Framework: adopted **18 March 2015**, **Sendai, Japan**; **4 priorities + 7 targets**
- Target G of Sendai = Multi-hazard Early Warning Systems for all by 2030
- INCOIS = Indian National Centre for Ocean Information Services; nodal for Tsunami Warning (IOTWS)
- CAP = Common Alerting Protocol; NDMA leads; 45 billion+ SMS alerts sent
- Cell Broadcast = geo-targeted alerts to all phones in an area; works on silent mode

**For Mains:**
- Structure DM-technology answers across the **DRR cycle**: prevention → preparedness → response → recovery
- Always cite specific satellites (RISAT-2B for SAR, INSAT-3D for cyclones, Cartosat-3 for damage assessment)
- Sendai Framework target linkages: EWS = Target G; Science and Tech = Priority 1; these make technology a core Sendai element
- AI flooding forecasting (Google FloodHub + CWC partnership) is a current example of private-public tech collaboration
- International data sharing (International Charter; Sentinel Asia) shows India's leadership in global DM
- Climate projections (CMIP6) linkage shows how long-term disaster risk planning uses science — a sophisticated answer point
- Drone Shakti + PLI for drones = policy enabling domestic DM technology ecosystem — link to Atmanirbhar Bharat
