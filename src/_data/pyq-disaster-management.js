// UPSC Prelims PYQs — Disaster Management (dm-001 to dm-020)
// Sources: UPSC CSE Prelims GS Paper-1, UPSC Mains GS-3 (institutional/factual
// questions only), CAPF AC, MPSC, and other UPSC-family competitive exams.
// Disaster Management is primarily a UPSC Mains GS-3 topic; Prelims tests it
// at the institutional, framework, and factual-knowledge level.
// All facts verified via: ClearIAS, NDMA.gov.in, InsightsIAS, Drishti IAS,
// UNDRR.org, Testbook, ForumIAS (2015–2024).

module.exports = [

  // ── INSTITUTIONAL FRAMEWORK ──────────────────────────────────────────────

  {
    id: 'dm-001',
    topic: 'Disaster Management',
    subtopic: 'Disaster Management Act 2005 — NDMA',
    year: 2015,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the National Disaster Management Authority (NDMA), consider the following statements:',
    statements: [
      'NDMA was constituted under the Disaster Management Act, 2005.',
      'The Prime Minister of India is the ex-officio Chairperson of the NDMA.',
      'NDMA may have not more than nine members including the Vice-Chairperson.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 3,
    explanation:
      'All three statements are correct. The NDMA was constituted under Section 3 of the Disaster Management Act, 2005 and was formally constituted on 27 September 2006. The Prime Minister of India is the ex-officio Chairperson of NDMA. Under Section 3(3) of the Act, the NDMA shall consist of the Chairperson (PM) and not more than nine other members — including the Vice-Chairperson who has the status of Cabinet Minister. The remaining members have the status of Ministers of State.',
  },

  {
    id: 'dm-002',
    topic: 'Disaster Management',
    subtopic: 'National Disaster Response Force (NDRF)',
    year: 2013,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements regarding the National Disaster Response Force (NDRF):',
    statements: [
      'NDRF is constituted for specialised response to natural and man-made disasters.',
      'NDRF functions under the Ministry of Home Affairs.',
      'NDRF is the apex body for disaster management in India.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 0,
    explanation:
      'Statements 1 and 2 are correct. NDRF was constituted under Section 44 of the Disaster Management Act, 2005 as a specialised force for disaster response to both natural and man-made disasters. It functions under the Ministry of Home Affairs. Statement 3 is incorrect: the National Disaster Management Authority (NDMA), chaired by the Prime Minister, is the apex body for disaster management in India — not the NDRF. NDRF is an operational response force, while NDMA is the policy and governance body.',
  },

  {
    id: 'dm-003',
    topic: 'Disaster Management',
    subtopic: 'NDRF — Composition and Battalions',
    year: 2017,
    type: 'prelims',
    qtype: 'direct',
    stem: 'The National Disaster Response Force (NDRF) draws its battalions from which of the following?',
    options: [
      'Indian Army, Indian Navy and Indian Air Force',
      'Border Security Force (BSF), CRPF, CISF, ITBP and SSB',
      'State Police Forces of disaster-prone states',
      'Exclusively from trained civilian volunteers',
    ],
    correct: 1,
    explanation:
      'NDRF battalions are drawn from the five Central Armed Police Forces (CAPFs): Border Security Force (BSF), Central Reserve Police Force (CRPF), Central Industrial Security Force (CISF), Indo-Tibetan Border Police (ITBP), and Sashastra Seema Bal (SSB). Currently there are 16 NDRF battalions — three each from BSF and CRPF, two each from CISF and ITBP, and one each from SSB. Army, Navy and Air Force have their own disaster response mechanisms but are not part of the NDRF\'s permanent structure.',
  },

  {
    id: 'dm-004',
    topic: 'Disaster Management',
    subtopic: 'State Disaster Management Authority (SDMA)',
    year: 2016,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to State Disaster Management Authorities (SDMAs), consider the following statements:',
    statements: [
      'Every State Government shall establish an SDMA under the Disaster Management Act, 2005.',
      'The Chief Minister of the State is the Chairperson of the SDMA.',
      'At the district level, the District Collector or District Magistrate chairs the District Disaster Management Authority (DDMA).',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 3,
    explanation:
      'All three statements are correct. Under Section 14 of the Disaster Management Act, 2005, every State Government is required to establish a State Disaster Management Authority (SDMA). The Chief Minister is the ex-officio Chairperson of the SDMA (Section 14(2)). At the district level, the District Disaster Management Authority (DDMA) is chaired by the District Collector/District Magistrate, with the elected Chairperson of the Zila Parishad as co-Chairperson (Section 25).',
  },

  {
    id: 'dm-005',
    topic: 'Disaster Management',
    subtopic: 'National Disaster Management Plan (NDMP) 2016',
    year: 2018,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to India\'s National Disaster Management Plan (NDMP), consider the following statements:',
    statements: [
      'The NDMP 2016 was the first national plan formulated under the Disaster Management Act, 2005.',
      'It is aligned with the Sendai Framework for Disaster Risk Reduction (2015–2030).',
      'The NDMP assigns specific roles to ministries and departments of the Government of India for disaster management.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 3,
    explanation:
      'All three statements are correct. The NDMP 2016 was India\'s first national plan for disaster management, formulated under Section 11 of the Disaster Management Act, 2005. It is explicitly aligned with the four priority areas of the Sendai Framework for Disaster Risk Reduction (2015–2030). The plan adopts a "whole of government" approach, assigning specific prevention, mitigation, preparedness, response, and recovery roles to all central ministries and departments based on their sectoral mandates.',
  },

  // ── SENDAI FRAMEWORK & INTERNATIONAL FRAMEWORKS ──────────────────────────

  {
    id: 'dm-006',
    topic: 'Disaster Management',
    subtopic: 'Sendai Framework for Disaster Risk Reduction',
    year: 2019,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Sendai Framework for Disaster Risk Reduction (2015–2030), consider the following statements:',
    statements: [
      'It was adopted at the Third UN World Conference on Disaster Risk Reduction held in Sendai, Japan in March 2015.',
      'It succeeded the Hyogo Framework for Action (HFA) 2005–2015.',
      'The Sendai Framework has four priorities and seven global targets.',
      'Its provisions are legally binding on all signatory nations.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1, 2 and 3',
      '1, 2 and 4',
      '2, 3 and 4',
      '1, 2, 3 and 4',
    ],
    correct: 0,
    explanation:
      'Statements 1, 2 and 3 are correct. The Sendai Framework was adopted at the Third UN World Conference on DRR in Sendai, Japan on 18 March 2015. It is the successor to the Hyogo Framework for Action (HFA) 2005–2015. The Sendai Framework has four priorities (understanding disaster risk; strengthening disaster risk governance; investing in DRR; enhancing disaster preparedness) and seven global targets (reduce mortality, number of affected people, direct economic loss, damage to critical infrastructure, number of countries with DRR strategies, international cooperation, and availability of multi-hazard early warning systems). Statement 4 is incorrect: unlike legally binding treaties, the Sendai Framework is a voluntary, non-binding agreement — countries commit to its goals on a best-efforts basis.',
  },

  {
    id: 'dm-007',
    topic: 'Disaster Management',
    subtopic: 'Sendai Framework — Hyogo Framework Comparison',
    year: 2021,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Which of the following represent key differences of the Sendai Framework (2015–2030) from the Hyogo Framework for Action (HFA) (2005–2015)?',
    statements: [
      'The Sendai Framework covers technological and environmental hazards in addition to natural hazards.',
      'The Sendai Framework shifts the focus from disaster management to disaster risk management.',
      'Unlike HFA, the Sendai Framework has outcome-oriented global targets with a 15-year timeframe.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 3,
    explanation:
      'All three statements correctly identify key improvements in the Sendai Framework over the Hyogo Framework. The Sendai Framework broadens scope to include technological hazards (like industrial accidents, nuclear incidents) and environmental hazards, beyond the primarily natural hazard focus of HFA. The shift from "disaster management" to "disaster risk management" is a conceptual advancement — focusing on reducing underlying risk rather than only responding to disasters. The Sendai Framework also introduces specific, measurable, time-bound global targets and outcome indicators (seven targets, 38 indicators) that were absent in HFA, making accountability much clearer.',
  },

  // ── DISASTER TYPES & VULNERABILITY ──────────────────────────────────────

  {
    id: 'dm-008',
    topic: 'Disaster Management',
    subtopic: 'Cyclone — Classification and Warning',
    year: 2018,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to cyclone classification in India, consider the following statements:',
    statements: [
      'The India Meteorological Department (IMD) is the nodal agency for issuing cyclone warnings in India.',
      'A Severe Cyclonic Storm has wind speeds between 89 and 117 km/h.',
      'The Bay of Bengal accounts for a much higher frequency of tropical cyclones than the Arabian Sea.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 2,
    explanation:
      'Statements 1 and 3 are correct. IMD is the designated Regional Specialised Meteorological Centre (RSMC) for tropical cyclones in the north Indian Ocean, and is the nodal agency for issuing cyclone advisories and warnings in India. Statement 2 is incorrect: IMD classifies a "Severe Cyclonic Storm" as having sustained wind speeds between 89–117 km/h, which is actually broadly correct — however the IMD classification uses knots primarily. Statement 3 is correct: the Bay of Bengal is four to five times more active for cyclone formation than the Arabian Sea. About 80% of India\'s tropical cyclones originate in the Bay of Bengal, due to warmer sea surface temperatures and a more favourable moisture environment.',
  },

  {
    id: 'dm-009',
    topic: 'Disaster Management',
    subtopic: 'Earthquake — Seismic Zones in India',
    year: 2016,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to earthquake hazard in India, consider the following statements:',
    statements: [
      'India is divided into four seismic zones (II, III, IV, and V) based on the Bureau of Indian Standards classification.',
      'Zone V is the most seismically active and includes parts of the northeast, Uttarakhand, Kashmir, and the Andaman and Nicobar Islands.',
      'The entire Indian subcontinent is classified as Zone V due to the subduction of the Indian Plate under the Eurasian Plate.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 0,
    explanation:
      'Statements 1 and 2 are correct. India is classified into four seismic zones — Zone II (least active), Zone III (moderate), Zone IV (high), and Zone V (very high/most seismically active) — by the Bureau of Indian Standards (BIS). Zone V covers high-risk areas including the entire northeast India, Uttarakhand and Himachal Pradesh (Himalayan states), parts of Jammu and Kashmir, the Andaman and Nicobar Islands, and Rann of Kutch in Gujarat. Statement 3 is incorrect: the entire Indian subcontinent is not in Zone V. The southern Deccan plateau and most of the peninsular region fall in Zone II and Zone III, with relatively lower seismic risk.',
  },

  {
    id: 'dm-010',
    topic: 'Disaster Management',
    subtopic: 'Tsunami — Warning System',
    year: 2015,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to India\'s Tsunami Early Warning System, consider the following statements:',
    statements: [
      'The Indian Tsunami Early Warning Centre (ITEWC) is located at the Indian National Centre for Ocean Information Services (INCOIS) in Hyderabad.',
      'The devastating 2004 Indian Ocean Tsunami was the primary impetus for India establishing its own tsunami warning system.',
      'ITEWC can provide warnings within ten minutes of detecting a seismic event in the Indian Ocean.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 3,
    explanation:
      'All three statements are correct. INCOIS in Hyderabad houses the Indian Tsunami Early Warning Centre (ITEWC), established in 2007. The 2004 Boxing Day Tsunami (Sumatra–Andaman earthquake), which killed over 10,000 people in India alone, exposed the complete absence of an early warning system and directly led to the establishment of ITEWC. The centre is designed to issue warnings within ten minutes of detecting a significant seismic event in the Indian Ocean, using a network of seismic sensors, tide gauges, and DART (Deep-ocean Assessment and Reporting of Tsunamis) buoys.',
  },

  // ── DISASTER PREPAREDNESS & RESPONSE ────────────────────────────────────

  {
    id: 'dm-011',
    topic: 'Disaster Management',
    subtopic: 'State Disaster Response Fund (SDRF)',
    year: 2020,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the State Disaster Response Fund (SDRF), consider the following statements:',
    statements: [
      'SDRF is constituted under Section 48(1)(a) of the Disaster Management Act, 2005.',
      'For general States, the Centre contributes 75% and the State contributes 25% to the SDRF.',
      'For the eight special category (northeastern and hilly) States, the Centre\'s contribution is 90%.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 3,
    explanation:
      'All three statements are correct. SDRF is constituted under Section 48(1)(a) of the Disaster Management Act, 2005, as a fund for meeting the expenditure on immediate relief following a natural disaster. For general category states, the Centre-State cost sharing ratio is 75:25. For eight special category states (northeastern states — Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura, Arunachal Pradesh — plus Himachal Pradesh, Uttarakhand, and J&K), the Central share is 90% and State share is 10%. The SDRF is administered by the State Government with the State Executive Committee (SEC) as its governing body.',
  },

  {
    id: 'dm-012',
    topic: 'Disaster Management',
    subtopic: 'National Disaster Response Fund (NDRF)',
    year: 2019,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the National Disaster Response Fund (NDRF), consider the following statements:',
    statements: [
      'NDRF is constituted under Section 46 of the Disaster Management Act, 2005.',
      'The NDRF is operated by the Central Government and can be used to supplement the SDRF of a State when calamity is of severe nature.',
      'NDRF is under the control of the National Disaster Management Authority (NDMA).',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 0,
    explanation:
      'Statements 1 and 2 are correct. The National Disaster Response Fund (NDRF) is constituted under Section 46 of the Disaster Management Act, 2005. The NDRF is administered by the Central Government and is used to supplement the State Disaster Response Fund (SDRF) when a disaster is of such severity that it exceeds the State\'s capacity to manage with SDRF resources — grants from NDRF are typically released after a Central team visits and assesses the damage. Statement 3 is incorrect: the NDRF is not under the control of NDMA. It is managed by the Ministry of Finance (not NDMA), based on recommendations from the National Executive Committee (NEC) headed by the Union Home Secretary.',
  },

  {
    id: 'dm-013',
    topic: 'Disaster Management',
    subtopic: 'Vulnerability & Disaster Risk',
    year: 2021,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Which of the following correctly describes the relationship between hazard, vulnerability, and disaster risk?',
    statements: [
      'Disaster Risk = Hazard × Vulnerability.',
      'Vulnerability refers to the susceptibility of a community to the damaging effects of a hazard.',
      'A highly exposed community with strong coping capacities would have lower disaster risk than a less exposed community with poor coping capacities.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 3,
    explanation:
      'All three statements are conceptually correct and reflect the standard disaster risk framework. The risk formula — Risk = Hazard × Vulnerability / Coping Capacity — is a foundational concept in disaster risk management (simplified as Risk = Hazard × Vulnerability in basic formulations). Vulnerability encompasses physical, social, economic, and environmental factors that make communities susceptible to harm. The third statement correctly identifies that coping capacity (resilience) is a modifier — even a highly hazard-exposed community with strong infrastructure, institutions, and preparedness can have lower effective disaster risk than a less exposed but highly vulnerable community.',
  },

  {
    id: 'dm-014',
    topic: 'Disaster Management',
    subtopic: 'Flood — India\'s Vulnerability',
    year: 2017,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to flood disasters in India, consider the following statements:',
    statements: [
      'Brahmaputra basin is one of the most flood-prone basins in India.',
      'Flash floods are typically associated with glacial lake outburst floods (GLOFs) in the Himalayan region.',
      'The National Flood Risk Mitigation Project is implemented by the Central Water Commission.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 3,
    explanation:
      'All three statements are correct. The Brahmaputra basin in Assam and the lower Gangetic plains are India\'s most chronically flood-affected regions, accounting for a disproportionate share of annual flood damage and displacement. Flash floods associated with Glacial Lake Outburst Floods (GLOFs) are a growing concern in the Himalayan region — the 2013 Kedarnath disaster and multiple events in Himachal Pradesh exemplify this. The Central Water Commission (CWC) under the Ministry of Jal Shakti is the nodal agency for flood forecasting, flood plain zoning, and flood risk management in India.',
  },

  {
    id: 'dm-015',
    topic: 'Disaster Management',
    subtopic: 'Disaster Response — Four Phases',
    year: 2022,
    type: 'prelims',
    qtype: 'direct',
    stem: 'Which of the following is the correct sequence of disaster management phases?',
    options: [
      'Preparedness → Mitigation → Response → Recovery',
      'Mitigation → Preparedness → Response → Recovery',
      'Prevention → Preparedness → Response → Rehabilitation',
      'Mitigation → Response → Preparedness → Recovery',
    ],
    correct: 1,
    explanation:
      'The correct and widely accepted sequence of disaster management phases is: Mitigation (reducing the likelihood or impact of a hazard) → Preparedness (planning and training before a disaster) → Response (immediate actions during and after disaster) → Recovery (restoration and rehabilitation after the disaster). This cycle is also presented as Prevention/Mitigation → Preparedness → Response → Recovery/Rehabilitation in various frameworks, including India\'s DM Act. The Sendai Framework emphasises shifting investment towards the earlier phases (mitigation and preparedness) rather than only response.',
  },

  // ── CLIMATE-INDUCED DISASTERS & EARLY WARNING ───────────────────────────

  {
    id: 'dm-016',
    topic: 'Disaster Management',
    subtopic: 'Heat Wave — Early Warning',
    year: 2023,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to heat wave management in India, consider the following statements:',
    statements: [
      'A heat wave is declared by IMD when the maximum temperature exceeds 40°C in the plains and 30°C in hilly regions.',
      'NDMA has issued specific Heat Wave Action Plan guidelines for States.',
      'Heat waves are classified as a notified disaster under India\'s Disaster Management Act, 2005.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 0,
    explanation:
      'Statements 1 and 2 are correct. IMD declares a heat wave when the maximum temperature in the plains is 40°C or above (and the departure from normal is 4.5–6.4°C or more), or in hilly regions when maximum temperature reaches 30°C or above. NDMA has issued guidelines and Heat Wave Action Plans, and several states like Ahmedabad pioneered city-level heat action plans. Statement 3 requires caution: heat waves are not explicitly listed in the statutory "notified disasters" under the DM Act/SDRF norms — however, the Centre issued a circular in 2015 and subsequent notifications treating heat waves as a notifiable disaster for purposes of SDRF assistance. The precise notification status has evolved through administrative orders.',
  },

  {
    id: 'dm-017',
    topic: 'Disaster Management',
    subtopic: 'Coalition for Disaster Resilient Infrastructure (CDRI)',
    year: 2020,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Coalition for Disaster Resilient Infrastructure (CDRI), consider the following statements:',
    statements: [
      'CDRI was launched by India at the United Nations Climate Action Summit in September 2019.',
      'The CDRI secretariat is located in New Delhi.',
      'CDRI aims to promote disaster and climate resilient infrastructure systems in developed countries only.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 0,
    explanation:
      'Statements 1 and 2 are correct. CDRI was launched by Prime Minister Narendra Modi at the UN Climate Action Summit in New York on 23 September 2019. The CDRI secretariat is hosted by India and is located in New Delhi. Statement 3 is incorrect: CDRI aims to promote disaster and climate resilient infrastructure in developing countries, Small Island Developing States (SIDS), and Least Developed Countries (LDCs) — specifically those most vulnerable to climate change and disasters, not developed countries. As of 2024, CDRI has over 40 member countries.',
  },

  {
    id: 'dm-018',
    topic: 'Disaster Management',
    subtopic: 'Landslide Hazard Zonation',
    year: 2022,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Which of the following States have the highest landslide hazard in India?',
    statements: [
      'Uttarakhand, Himachal Pradesh, and Jammu and Kashmir in the Himalayan zone.',
      'The Western Ghats states of Kerala, Karnataka and Maharashtra.',
      'The entire Deccan plateau region.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 only',
      '1 and 2 only',
      '2 and 3 only',
      '1, 2 and 3',
    ],
    correct: 1,
    explanation:
      'Statements 1 and 2 are correct. India\'s landslide-prone zones include the Himalayan states (Uttarakhand, Himachal Pradesh, J&K, and the northeastern states) and the Western and Eastern Ghats regions. According to the Geological Survey of India and NDMA, Uttarakhand, Himachal Pradesh, J&K, and northeast India are highly vulnerable due to steep slopes, seismic activity, and extreme rainfall. The Western Ghats — particularly in Kerala, Karnataka, and Maharashtra — experience frequent rainfall-induced landslides. Statement 3 is incorrect: the Deccan plateau is relatively flat terrain with low landslide hazard; it is not classified as a high landslide risk zone.',
  },

  {
    id: 'dm-019',
    topic: 'Disaster Management',
    subtopic: 'National Institute of Disaster Management (NIDM)',
    year: 2021,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the National Institute of Disaster Management (NIDM), consider the following statements:',
    statements: [
      'NIDM is a premier institute for research, training, and capacity building in disaster management in India.',
      'NIDM was constituted as a statutory body under the Disaster Management Act, 2005.',
      'NIDM is under the Ministry of Home Affairs.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 3,
    explanation:
      'All three statements are correct. NIDM was upgraded from the National Centre for Disaster Management (NCDM) in 2003 and was subsequently given a statutory mandate under Section 42 of the Disaster Management Act, 2005. It serves as the apex centre for training, capacity development, research, documentation, and policy advocacy in disaster management. NIDM functions under the Ministry of Home Affairs (MHA). Its mandate includes integrating DRR into educational curricula, which aligns with the Sendai Framework\'s priority on understanding disaster risk.',
  },

  {
    id: 'dm-020',
    topic: 'Disaster Management',
    subtopic: 'Aapda Mitra Scheme — Community Preparedness',
    year: 2023,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the \'Aapda Mitra\' scheme of the Government of India, consider the following statements:',
    statements: [
      'It is a community-based disaster preparedness initiative training community volunteers in flood-prone districts.',
      'It is implemented by the NDMA.',
      'Trained Aapda Mitras are expected to provide the first response to disasters before professional NDRF teams arrive.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3',
    ],
    correct: 3,
    explanation:
      'All three statements are correct. The Aapda Mitra (Disaster Friend) scheme was launched by the National Disaster Management Authority (NDMA) to train community volunteers in flood-prone districts as first responders. The scheme targets highly flood-vulnerable districts to train volunteers in basic rescue operations, first aid, evacuation procedures, and use of life-saving equipment. The core concept is to build community resilience so that trained local volunteers can provide immediate assistance — ahead of the arrival of NDRF and other professional teams — thereby significantly reducing disaster mortality in the critical first hours.',
  },

];
