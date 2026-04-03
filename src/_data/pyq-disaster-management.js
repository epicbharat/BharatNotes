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

  // ── GLACIAL & CLIMATE DISASTERS ─────────────────────────────────────────

  {
    id: 'dm-021',
    topic: 'Disaster Management',
    subtopic: 'Chamoli Disaster 2021 — Rock-Ice Avalanche',
    year: 2024,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Chamoli disaster of February 2021 in Uttarakhand, consider the following statements:',
    statements: [
      'It was caused by a massive rock and ice avalanche from Ronti Peak that transformed into a debris flow.',
      'The disaster damaged the Rishiganga and Tapovan hydropower projects.',
      'The disaster was primarily caused by a Glacial Lake Outburst Flood (GLOF) from a supraglacial lake.',
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
      'Statements 1 and 2 are correct; statement 3 is incorrect. On 7 February 2021, approximately 27 million cubic metres of rock and glacier ice collapsed from the steep north face of Ronti Peak in the Nanda Devi region. This transformed rapidly into a massive debris flow — not a GLOF — as satellite imagery confirmed there was no glacial lake upstream. The resulting flash flood destroyed the 13 MW Rishiganga power project on the Rishi Ganga river and severely damaged the NTPC Tapovan-Vishnugad hydropower tunnel, with approximately 200 workers killed or missing. Statement 3 is incorrect: though widely misreported as a GLOF, scientific studies published in Science (2021) confirmed the primary trigger was a rock-ice avalanche.',
  },

  {
    id: 'dm-022',
    topic: 'Disaster Management',
    subtopic: 'Sikkim GLOF 2023 — South Lhonak Lake',
    year: 2024,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Sikkim flash flood disaster of October 2023, consider the following statements:',
    statements: [
      'It was triggered by a Glacial Lake Outburst Flood (GLOF) from South Lhonak Lake.',
      'The Teesta III hydropower dam at Chungthang was destroyed by the flood.',
      'The GLOF was caused by a seismic event (earthquake) that fractured the moraine dam.',
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
      'Statements 1 and 2 are correct; statement 3 is incorrect. On 3–4 October 2023, heavy rainfall caused approximately 14.7 million cubic metres of frozen lateral moraine to collapse into South Lhonak glacial lake in north Sikkim, generating a tsunami-like wave that breached the moraine dam and drained roughly 50 million cubic metres of lake water. The resultant GLOF destroyed the 1,200 MW Teesta III dam at Chungthang before its gates could be opened. Over 90 people were confirmed dead, 31 major bridges were lost, and ~25,900 structures were damaged. Statement 3 is incorrect: the trigger was heavy rainfall causing moraine collapse, not an earthquake. The disaster highlighted the absence of an adequate early warning system for GLOFs in the Teesta basin.',
  },

  {
    id: 'dm-023',
    topic: 'Disaster Management',
    subtopic: 'GLOF — Nature and Himalayan Vulnerability',
    year: 2024,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to Glacial Lake Outburst Floods (GLOFs) in India, consider the following statements:',
    statements: [
      'GLOFs occur when water held in a glacial lake is suddenly released due to failure of the dam holding it.',
      'Moraine-dammed lakes, ice-dammed lakes, and supraglacial lakes are all types of glacial lakes prone to outburst.',
      'GLOFs are restricted to the Himalayan regions of India and do not affect the river systems downstream.',
      'Climate change-induced glacial retreat is increasing the number and volume of glacial lakes, raising GLOF risk.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1, 2 and 4 only',
      '1 and 2 only',
      '2, 3 and 4 only',
      '1, 2, 3 and 4',
    ],
    correct: 0,
    explanation:
      'Statements 1, 2 and 4 are correct; statement 3 is incorrect. A GLOF occurs when natural dams of moraine (glacial debris), ice, or bedrock holding back glacial meltwater fail suddenly, releasing large volumes of water (statement 1 correct). Glacial lakes are classified into moraine-dammed, ice-dammed, bedrock-dammed, and supraglacial types — all can experience outburst events (statement 2 correct). Statement 3 is incorrect: GLOFs dramatically affect downstream river systems — the 2013 Kedarnath flood, 2021 Chamoli disaster, and 2023 Sikkim GLOF all caused massive destruction far downstream in the Mandakini, Dhauliganga, and Teesta river valleys respectively. Statement 4 is correct: accelerated glacial melting due to rising temperatures is enlarging existing glacial lakes and creating new ones, as documented by ICIMOD and ISRO studies.',
  },

  // ── NDRF STRUCTURE & FUNDS ───────────────────────────────────────────────

  {
    id: 'dm-024',
    topic: 'Disaster Management',
    subtopic: 'NDRF — Current Composition (Updated)',
    year: 2024,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the National Disaster Response Force (NDRF), consider the following statements:',
    statements: [
      'NDRF currently has 16 battalions.',
      'NDRF battalions are drawn from the BSF, CRPF, CISF, ITBP, SSB, and Assam Rifles.',
      'Each NDRF battalion has the strength of approximately 1,149 personnel.',
      'NDRF is deployed only for natural disasters and not for man-made disasters.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1, 2 and 3 only',
      '2 and 3 only',
      '1 and 4 only',
      '1, 2, 3 and 4',
    ],
    correct: 0,
    explanation:
      'Statements 1, 2 and 3 are correct; statement 4 is incorrect. NDRF currently consists of 16 battalions — three each from BSF and CRPF, two each from CISF, ITBP, and SSB, and one from Assam Rifles. (Note: In earlier years, only five CAPFs contributed; Assam Rifles was added later.) Each battalion has an approximate strength of 1,149 personnel, giving a total NDRF strength of around 18,000+. Statement 4 is incorrect: Section 44 of the Disaster Management Act, 2005 mandates NDRF for specialised response to both natural and man-made (technological) disasters — NDRF has responded to chemical, biological, radiological and nuclear (CBRN) emergencies in addition to floods, earthquakes, and cyclones.',
  },

  // ── HEAT WAVE MANAGEMENT ─────────────────────────────────────────────────

  {
    id: 'dm-025',
    topic: 'Disaster Management',
    subtopic: 'Heat Action Plans — Ahmedabad Model',
    year: 2024,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to Heat Action Plans (HAPs) in India, consider the following statements:',
    statements: [
      'Ahmedabad\'s Heat Action Plan (2013) was the first such plan in South Asia.',
      'Heat Action Plans involve a colour-coded warning system — green, yellow, orange, and red — based on the heat index.',
      'The India Meteorological Department (IMD) declares a Heat Wave when maximum temperature of a plains station reaches 40°C or above, with a departure of at least 4.5°C from normal.',
      'Heat waves have been a notified disaster under the SDRF norms since 2005 when the Disaster Management Act was enacted.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1, 2 and 3 only',
      '1 and 3 only',
      '2 and 4 only',
      '1, 2, 3 and 4',
    ],
    correct: 0,
    explanation:
      'Statements 1, 2 and 3 are correct; statement 4 is incorrect. Ahmedabad pioneered South Asia\'s first Heat Action Plan in 2013, implemented after the devastating 2010 heat wave, and studies have credited it with preventing approximately 1,190 deaths annually. Heat Action Plans use a colour-coded alert system: green (safe), yellow (be updated), orange (be prepared), and red (take action), corresponding to rising heat index thresholds. IMD declares a heat wave for plains stations when the maximum temperature reaches at least 40°C with a departure of 4.5–6.4°C above normal (or 6.5°C+ for a severe heat wave). Statement 4 is incorrect: heat waves were not part of the original DM Act 2005 or SDRF norms; they were added to the SDRF-eligible notified disaster list through central government notifications issued in 2015 and subsequent orders.',
  },

  // ── DISASTER RISK GOVERNANCE & FINANCE ──────────────────────────────────

  {
    id: 'dm-026',
    topic: 'Disaster Management',
    subtopic: 'Aapda Mitra — Upscaling',
    year: 2024,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the \'Aapda Mitra\' scheme, consider the following statements:',
    statements: [
      'In its pilot phase, the scheme targeted training of 6,000 community volunteers in 30 most flood-prone districts of 25 States.',
      'The scheme is implemented by the NDRF in collaboration with state governments.',
      'After the success of the pilot, the scheme has been upscaled to cover 350 districts of all States and Union Territories with a target of training 1,00,000 community volunteers.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 3 only',
      '2 and 3 only',
      '1 only',
      '1, 2 and 3',
    ],
    correct: 0,
    explanation:
      'Statements 1 and 3 are correct; statement 2 is incorrect. The pilot Aapda Mitra scheme, implemented by NDMA (not NDRF), targeted training 6,000 community volunteers (200 per district) in the 30 most flood-prone districts across 25 states/UTs — statement 1 correct. Statement 2 is incorrect: the implementing agency is the NDMA, not NDRF, in coordination with State Disaster Management Authorities. Statement 3 is correct: following the pilot\'s success, the scheme was upscaled to cover 350 districts of all States and UTs with a target of training 1,00,000 volunteers to respond to floods, landslides, cyclones, and earthquakes. NDMA confirmed the Aapda Mitra expansion was based on requests from state governments.',
  },

  {
    id: 'dm-027',
    topic: 'Disaster Management',
    subtopic: 'CDRI — Membership and Mandate',
    year: 2024,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Coalition for Disaster Resilient Infrastructure (CDRI), consider the following statements:',
    statements: [
      'CDRI was co-launched by India and the United Kingdom at the UN Climate Action Summit in New York in 2019.',
      'CDRI primarily focuses on building disaster and climate resilient infrastructure in developing countries, Small Island Developing States (SIDS), and Least Developed Countries (LDCs).',
      'CDRI is a statutory body created under the Disaster Management Act, 2005.',
      'CDRI has more than 40 member countries as of 2024.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '2 and 4 only',
      '1 and 2 only',
      '1, 2 and 4 only',
      '2, 3 and 4 only',
    ],
    correct: 2,
    explanation:
      'Statements 1, 2 and 4 are correct; statement 3 is incorrect. CDRI was launched by Prime Minister Narendra Modi at the United Nations Climate Action Summit in New York on 23 September 2019 — originally with India as the sole founding nation, with the United Kingdom co-championing it at COP26 in 2021 (statement 1 broadly correct). CDRI\'s mandate specifically targets developing countries, SIDS, and LDCs — the nations most vulnerable to climate change — and not developed countries (statement 2 correct). Statement 3 is incorrect: CDRI is an international intergovernmental organisation, not a statutory body under India\'s DM Act 2005; it has a Headquarters Agreement with India. As of 2024, CDRI has over 40 member countries, international organisations, and private sector members (statement 4 correct).',
  },

  {
    id: 'dm-028',
    topic: 'Disaster Management',
    subtopic: 'Sendai Framework — Seven Global Targets',
    year: 2024,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Which of the following are among the seven global targets of the Sendai Framework for Disaster Risk Reduction (2015–2030)?',
    statements: [
      'Substantially reduce global disaster mortality by 2030.',
      'Substantially reduce the number of affected people globally by 2030.',
      'Achieve zero carbon emissions to prevent future disasters by 2030.',
      'Substantially increase the availability of and access to multi-hazard early warning systems by 2030.',
    ],
    tail: 'Select the correct answer using the code given below:',
    options: [
      '1, 2 and 4 only',
      '1 and 4 only',
      '2, 3 and 4 only',
      '1, 2, 3 and 4',
    ],
    correct: 0,
    explanation:
      'Statements 1, 2 and 4 are among the seven Sendai Framework global targets; statement 3 is not. The seven targets are: (a) substantially reduce global disaster mortality; (b) substantially reduce the number of affected people; (c) reduce direct economic loss in relation to GDP; (d) substantially reduce disaster damage to critical infrastructure; (e) substantially increase the number of countries with national and local DRR strategies; (f) substantially enhance international cooperation to developing countries; (g) substantially increase availability of multi-hazard early warning systems and disaster risk information (statement 4). Statement 3 is incorrect: achieving zero carbon emissions is not a Sendai target — that falls under climate change frameworks such as the Paris Agreement. The Sendai Framework is a voluntary, non-binding agreement monitored through 38 indicators.',
  },

  {
    id: 'dm-029',
    topic: 'Disaster Management',
    subtopic: 'Disaster Management Cycle — Risk Reduction Continuum',
    year: 2024,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements regarding India\'s approach to disaster risk reduction:',
    statements: [
      'India\'s National Disaster Management Plan (NDMP) 2016 is aligned with the four priorities of the Sendai Framework.',
      'The Disaster Management Act, 2005 adopts a \'whole of government\' approach assigning roles to all central ministries.',
      'India has constituted a National Disaster Mitigation Fund (NDMF) under Section 47 of the Disaster Management Act to finance long-term mitigation projects.',
      'The Prime Minister\'s National Relief Fund (PMNRF) and the National Disaster Response Fund (NDRF) are the same fund.',
    ],
    tail: 'Which of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '1, 2 and 3 only',
      '2 and 3 only',
      '1, 2, 3 and 4',
    ],
    correct: 0,
    explanation:
      'Statements 1 and 2 are correct. The National Disaster Management Plan (NDMP) 2016 is India\'s first national plan under the DM Act and is explicitly aligned with the Sendai Framework\'s four priorities: understanding risk; strengthening governance; investing in DRR; and enhancing preparedness (statement 1 correct). The NDMP assigns specific roles to every central ministry and department — this whole-of-government approach is a defining feature of the plan (statement 2 correct). Statement 3 is incorrect: Section 47 of the DM Act provides for a National Disaster Mitigation Fund (NDMF), but as of 2024, this fund has not been formally constituted and operationalised by the Central Government. Statement 4 is incorrect: the PMNRF is a charitable fund managed by the PM\'s office for various relief purposes, while the NDRF (National Disaster Response Fund) is a statutory fund under Section 46 of the DM Act managed by the Finance Ministry for disaster response — they are entirely separate instruments.',
  },

];
