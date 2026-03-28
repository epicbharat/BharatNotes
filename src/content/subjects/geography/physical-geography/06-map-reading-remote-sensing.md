---
layout: topic.njk
title: "Map Reading, Remote Sensing & GIS — Cartography, Satellite Imagery & Spatial Analysis"
subject: geography
gs_papers:
  - gs1
syllabus_topic: "Physical Geography"
parent_topic: "Physical Geography"
parent_topic_url: "/subjects/geography/physical-geography/"
description: "UPSC notes on map reading — topographical maps, Survey of India, contour interpretation, remote sensing (ISRO satellites), GIS, GPS, and spatial data applications."
sub_chapter: 6
chapter: 6
date: 2026-03-28
foundation: true
prelims: true
mains: true
tags:
  - geography
  - topic
---

## Introduction

Map reading, remote sensing, and Geographic Information Systems (GIS) form the technological backbone of modern geography. From traditional topographical sheets published by the Survey of India to satellite-based Earth observation by ISRO, these tools enable spatial analysis crucial for planning, disaster management, resource mapping, and governance. UPSC regularly tests concepts related to contour interpretation, satellite imagery, and the applications of geospatial technology.

---

## Topographical Maps

### Survey of India (SOI)

The **Survey of India**, established in 1767, is the principal mapping agency of the country and the oldest scientific department of the Government of India. It is responsible for producing and maintaining topographical maps at various scales.

### Map Series and Scales

| Series | Scale | Coverage per Sheet | Use |
|--------|-------|--------------------|-----|
| **Open Series Maps (OSM)** | 1:250,000 | Large area, less detail | General planning, overview |
| **Open Series Maps (OSM)** | 1:50,000 | Moderate area, moderate detail | Development activities, standard toposheet |
| **Open Series Maps (OSM)** | 1:25,000 | Small area, high detail | Detailed surveys, village-level planning |
| **Defence Series Maps (DSM)** | 1:50,000 and 1:250,000 | Classified | National security and defence |

### Key Features of SOI Toposheets

- **Datum and Projection:** OSM maps use WGS-84 Datum and UTM Projection; DSM maps use WGS-84 Datum and Lambert Conformal Conic (LCC) Projection
- **Numbering System:** India is divided into grids; each 1:250,000 sheet is identified by a degree sheet number, further subdivided into 1:50,000 sheets
- **National Mapping Policy 2005:** Liberalised access to OSM maps for civilians; DSM maps remain restricted with classified grid information

### Conventional Signs and Symbols

Topographical maps use standardised symbols to represent natural and man-made features:

| Category | Examples |
|----------|----------|
| **Water features** | Rivers (blue lines), lakes, wells, canals, tanks |
| **Vegetation** | Forests (green shading), scrub, orchards, plantations |
| **Relief** | Contour lines (brown), spot heights, triangulation points, bench marks |
| **Settlements** | Villages (small circles), towns (larger symbols), roads, railways |
| **Cultural features** | Temples, mosques, churches, post offices, schools |
| **Transport** | Metalled roads (red), unmetalled roads (yellow), railways (black lines with cross-marks), bridges |

---

## Contour Interpretation

Contours are imaginary lines on a map connecting points of **equal elevation** above mean sea level. The vertical distance between successive contour lines is called the **contour interval**.

### Rules of Contour Lines

1. Contour lines never cross each other (except in the rare case of an overhanging cliff)
2. Closely spaced contours indicate **steep slope**; widely spaced contours indicate **gentle slope**
3. Contour lines crossing a valley form a **V-shape** pointing upstream
4. Contour lines crossing a ridge or spur form a **V-shape** pointing downhill
5. Concentric closed contours with increasing values indicate a **hilltop**; with decreasing values, a **depression**
6. Equally spaced contours suggest a **uniform slope**

### Landform Identification from Contours

| Landform | Contour Pattern |
|----------|----------------|
| **Steep slope** | Closely spaced, nearly parallel contours |
| **Gentle slope** | Widely spaced contours |
| **Cliff** | Contours merging into a single line or extremely close together |
| **Valley** | V-shaped contours pointing upstream (towards higher elevation) |
| **Ridge/Spur** | V-shaped contours pointing downstream (towards lower elevation) |
| **Plateau** | Closely spaced contours at edges, widely spaced at the top |
| **Conical hill** | Concentric roughly circular contours |
| **Saddle/Col** | Depression between two hilltops; contours form an hourglass shape |
| **Escarpment** | Closely spaced on one side (steep), widely spaced on the other (gentle dip slope) |

---

## Remote Sensing

Remote sensing is the acquisition of information about an object or phenomenon **without making physical contact** with it, typically using electromagnetic radiation from sensors mounted on satellites or aircraft.

### Electromagnetic Spectrum in Remote Sensing

| Region | Wavelength Range | Application |
|--------|-----------------|-------------|
| **Visible** | 0.4 -- 0.7 micrometres | Land use mapping, vegetation studies |
| **Near Infrared (NIR)** | 0.7 -- 1.3 micrometres | Vegetation health, biomass estimation |
| **Short-Wave Infrared (SWIR)** | 1.3 -- 3.0 micrometres | Soil moisture, mineral mapping |
| **Thermal Infrared (TIR)** | 3 -- 14 micrometres | Surface temperature, forest fire detection |
| **Microwave** | 1 mm -- 1 m | All-weather imaging, soil moisture, surface roughness |

### Types of Sensors

| Type | Mechanism | Examples | Advantage |
|------|-----------|----------|-----------|
| **Passive sensors** | Detect naturally reflected or emitted radiation (sunlight, thermal) | Optical cameras, radiometers, spectrometers | High spatial resolution in good weather |
| **Active sensors** | Emit their own energy and record the reflected signal | SAR (Synthetic Aperture Radar), LiDAR | Works day and night, penetrates clouds |

### ISRO's Earth Observation Satellites

| Satellite Series | Type | Key Specifications | Primary Application |
|-----------------|------|-------------------|---------------------|
| **Cartosat-3** (launched 2019) | Optical (panchromatic) | 0.25 m panchromatic resolution; 1 m multispectral; Sun-synchronous orbit at ~450 km | High-resolution cartography, urban mapping, infrastructure planning |
| **Resourcesat-2/2A** | Optical (multispectral) | Carries LISS-3, LISS-4, AWiFS cameras; launch mass 1,235 kg | Agriculture, water resources, forestry, land use mapping |
| **RISAT series** (Radar Imaging) | Active (C-band SAR) | RISAT-1B (EOS-09): 1,710 kg, C-band SAR, 1 m resolution; launched May 2025 | All-weather surveillance, agriculture monitoring, disaster response |
| **RISAT-2BR1** | Active (X-band SAR) | 0.35 m resolution | Defence surveillance, high-resolution imaging |
| **Oceansat series** | Optical/Scatterometer | Ocean colour monitor, wind scatterometer | Ocean studies, fishery, weather forecasting |
| **INSAT/Kalpana** | Geostationary | VHRR payload | Weather monitoring, cyclone tracking |

> **Exam Tip:** ISRO's Cartosat-3, with 0.25 m panchromatic resolution, is among the world's highest-resolution civilian imaging satellites. RISAT satellites use SAR (active sensors) that can image through clouds, making them invaluable for monsoon-season disaster monitoring.

---

## Geographic Information System (GIS)

A **GIS** is a computer-based system for capturing, storing, analysing, and displaying geographically referenced (spatial) data. It integrates data from multiple sources into layered maps for spatial analysis.

### Key Components of GIS

| Component | Function |
|-----------|----------|
| **Hardware** | Computers, servers, GPS devices, digitisers, plotters |
| **Software** | ArcGIS, QGIS, GRASS GIS, ISRO's Bhuvan platform |
| **Data** | Spatial data (maps, satellite images) and attribute data (census, land records) |
| **People** | GIS analysts, planners, decision-makers |
| **Methods** | Procedures and workflows for data collection, analysis, and output |

### GIS Data Types

| Data Model | Description | Example |
|------------|-------------|---------|
| **Raster** | Grid of cells (pixels), each with a value; like a satellite image | Elevation models (DEM), land cover maps, temperature grids |
| **Vector** | Points, lines, and polygons representing discrete features | Wells (points), rivers (lines), district boundaries (polygons) |

### Key GIS Operations

| Operation | Description | Application |
|-----------|-------------|-------------|
| **Overlay analysis** | Combining multiple layers to identify spatial relationships | Identifying flood-prone areas by overlaying drainage, elevation, and land use layers |
| **Buffer analysis** | Creating zones of specified distance around features | Identifying settlements within 5 km of a highway |
| **Network analysis** | Finding optimal routes through a network | Emergency response routing, shortest path analysis |
| **Spatial interpolation** | Estimating values at unsampled locations from known data points | Rainfall distribution mapping from station data |
| **Terrain analysis** | Deriving slope, aspect, watershed from elevation data | Watershed delineation, landslide susceptibility mapping |

---

## GPS, GNSS, and NavIC

### Global Navigation Satellite Systems (GNSS)

| System | Country/Region | Satellites | Coverage |
|--------|---------------|------------|----------|
| **GPS** | United States | 31 operational | Global |
| **GLONASS** | Russia | 24 operational | Global |
| **Galileo** | European Union | 30 planned | Global |
| **BeiDou** | China | 45+ | Global |
| **NavIC (IRNSS)** | India | 7 (3 GEO + 4 GSO) | Regional (India + 1,500 km) |

### NavIC / IRNSS (Navigation with Indian Constellation)

| Feature | Detail |
|---------|--------|
| **Full form** | Navigation with Indian Constellation / Indian Regional Navigation Satellite System |
| **Constellation** | 7 satellites -- 3 in Geostationary Orbit (GEO) and 4 in Geosynchronous Orbit (GSO) |
| **Coverage** | Primary: India and 1,500 km around it; Extended: up to 3,000 km |
| **Accuracy** | Better than 10 m within India; better than 20 m in extended coverage |
| **Time accuracy** | 40 nanoseconds |
| **Frequencies** | L1 (1575.42 MHz), L5 (1176.45 MHz), and S-band (2498.028 MHz) |
| **Services** | Standard Positioning Service (SPS) -- open for civilians; Restricted Service (RS) -- encrypted, for authorised/military users |
| **Satellite mass** | Dry mass ~600 kg; lift-off mass ~1,425 kg |
| **Applications** | Terrestrial and marine navigation, vehicle tracking, fleet management, disaster management, mapping, geodetic surveys |

> **Exam Tip:** NavIC is India's indigenous satellite navigation system with regional (not global) coverage. It operates on three frequencies including the unique S-band. India is one of only five entities (US, Russia, EU, China, India) with an independent satellite navigation system.

---

## LiDAR and Drone Mapping

### LiDAR (Light Detection and Ranging)

LiDAR is an active remote sensing technology that uses laser pulses to measure distances and create highly accurate 3D models of the Earth's surface and objects on it.

| Feature | Detail |
|---------|--------|
| **Principle** | Emits laser pulses and measures the time taken for the reflected pulse to return |
| **Accuracy** | Centimetre-level vertical accuracy |
| **Types** | Airborne LiDAR (mounted on aircraft/drones); Terrestrial LiDAR (ground-based) |
| **Output** | Point cloud data, Digital Elevation Models (DEM), Digital Surface Models (DSM) |
| **Key advantage** | Penetrates vegetation canopy to capture ground surface beneath forests |

### Drone (UAV) Mapping

| Aspect | Detail |
|--------|--------|
| **Technology** | Unmanned Aerial Vehicles equipped with cameras, LiDAR, or multispectral sensors |
| **Resolution** | Can achieve sub-centimetre ground resolution |
| **Regulation** | Governed by DGCA (Directorate General of Civil Aviation) drone rules in India |
| **Applications** | Land surveying, construction monitoring, precision agriculture, mining volume estimation, disaster assessment |

---

## Applications of Geospatial Technology

| Application Area | How Geospatial Tools Are Used |
|-----------------|-------------------------------|
| **Disaster management** | Flood inundation mapping using SAR; cyclone tracking via INSAT; landslide vulnerability using DEM and slope analysis; earthquake damage assessment |
| **Urban planning** | 3D city models from LiDAR; land use change detection from satellite imagery; Smart Cities ICCCs using GIS dashboards |
| **Forest mapping** | Forest cover assessment (India State of Forest Report uses satellite data); biodiversity mapping; fire detection using thermal sensors |
| **Watershed management** | Delineation of watershed boundaries from DEM; soil erosion modelling; groundwater recharge zone mapping |
| **Agriculture** | Crop health monitoring using NDVI (Normalised Difference Vegetation Index); crop acreage estimation; drought assessment |
| **Mining and geology** | Mineral exploration using hyperspectral imagery; land subsidence monitoring using InSAR |
| **Defence and security** | Surveillance using high-resolution satellites (Cartosat, RISAT); border mapping; terrain analysis |
| **Climate studies** | Sea surface temperature monitoring; glacier retreat mapping; carbon stock estimation |

### India's Key Geospatial Initiatives

| Initiative | Description |
|-----------|-------------|
| **Bhuvan** | ISRO's web-based geoportal providing satellite imagery, thematic maps, and GIS services |
| **SVAMITVA Scheme** | Uses drone surveys to map rural inhabited land and provide property cards to village households |
| **National Geospatial Policy 2022** | Liberalised geospatial data access; ended requirement for prior approval for Indian companies to collect and use geospatial data |
| **MOSDAC** | Meteorological and Oceanographic Satellite Data Archival Centre for weather and ocean data |
| **VEDAS** | Visualisation of Earth observation Data and Archival System by Space Applications Centre |

---

## Map Projections (Recap for UPSC)

Every flat representation of the spherical Earth involves distortion. Key projections tested in UPSC:

| Projection | Preserves | Distorts | Use |
|-----------|----------|---------|-----|
| **Mercator** | Shape (conformal) | Area (extreme near poles) | Marine navigation; straight lines are rhumb lines |
| **Peters (Gall-Peters)** | Area (equal-area) | Shape (stretched appearance) | Showing true relative size of continents |
| **Robinson** | Neither perfectly, but balances both | Both slightly | General-purpose world maps |
| **Polar Azimuthal** | Directions from centre | Periphery distorted | Polar navigation; used in UN emblem |
| **Conical** | Shape and area in mid-latitudes | High latitudes distorted | Mapping mid-latitude regions like India |

---

## Integration of Remote Sensing, GIS, and GPS

### How the Three Technologies Work Together

In practice, remote sensing, GIS, and GPS are used as an integrated system:

1. **Data Collection:** Remote sensing satellites (e.g., Cartosat, Resourcesat) capture imagery; GPS provides precise ground coordinates for field verification
2. **Data Storage and Management:** GIS software organises satellite imagery, field data, and attribute information into layered databases
3. **Analysis:** GIS performs spatial analysis -- overlay, buffer, network, and terrain analysis -- on the collected data
4. **Output:** Maps, reports, dashboards, and alerts for decision-makers

### Case Study: Flood Management Using RS-GIS-GPS

| Stage | Technology Used | Application |
|-------|----------------|-------------|
| **Pre-flood preparedness** | GIS + DEM from LiDAR/satellite | Identify flood-prone areas; create hazard zonation maps; plan evacuation routes |
| **During flood** | SAR satellite imagery (RISAT, Sentinel-1) + GIS | Real-time flood inundation mapping through clouds; identify affected villages and infrastructure |
| **Rescue operations** | GPS + GIS | Navigate rescue teams to affected locations; track relief supply movement |
| **Post-flood assessment** | Optical satellite imagery + GIS | Damage assessment; crop loss estimation; insurance claim verification |
| **Long-term planning** | GIS + historical flood data | Design flood control structures; update flood zoning regulations; revise land use plans |

### Case Study: SVAMITVA Scheme

| Feature | Detail |
|---------|--------|
| **Full form** | Survey of Villages Abadi and Mapping with Improvised Technology in Village Areas |
| **Launched** | 24 April 2020 (National Panchayati Raj Day) |
| **Technology** | Drone surveys to create high-resolution maps of rural inhabited land (abadi areas) |
| **Output** | Property cards (Sampatti Patrak / Adhikar Abhilekh) issued to village household owners |
| **Implementing agency** | Survey of India |
| **Coverage** | All states (phased implementation); over 1.5 lakh villages surveyed by 2025 |
| **Benefits** | Legal ownership documentation; reduces property disputes; enables villagers to use property as collateral for bank loans; improves village-level planning |

---

## Exam Strategy

> **For Prelims:** Focus on factual aspects -- SOI map scales (1:50,000, 1:250,000), contour rules, active vs passive sensors, ISRO satellite names and their sensor types (Cartosat = optical, RISAT = SAR), NavIC constellation (7 satellites, regional coverage), and GIS data types (raster vs vector). Questions on map projections (Mercator distorts area, Peters preserves area) appear frequently.

> **For Mains GS-I:** Be prepared to discuss the role of remote sensing and GIS in disaster management, urban planning, or natural resource management. Draw diagrams of contour patterns for different landforms. Questions may ask about the significance of India's own satellite navigation system (NavIC) for strategic autonomy, or the application of drone technology in rural land mapping (SVAMITVA).

**Common Mains questions:**

- Discuss the role of remote sensing and GIS in disaster management in India.
- What are the advantages of active sensors over passive sensors in tropical monsoon regions?
- Explain contour interpretation with suitable diagrams for different landforms.
- How has geospatial technology contributed to rural development in India? Discuss with examples.
- Critically examine the significance of NavIC for India's strategic and civilian needs.

---

*Sources: Survey of India (surveyofindia.gov.in), ISRO (isro.gov.in), National Mapping Policy 2005, NRSC Bhuvan Portal, Wikipedia, Britannica*
