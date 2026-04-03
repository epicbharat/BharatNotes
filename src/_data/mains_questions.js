/**
 * BharatNotes Mains Question Bank
 * Format: WebSearch-verified, fact-checked, UPSC-quality model answers
 *
 * Each question object:
 * {
 *   id, paper, topic, subtopic, year, marks, words,
 *   question,
 *   model_answer: { text, key_points[], keywords[], sources[] },
 *   difficulty
 * }
 */

module.exports = [

  /* ════════════════════════════════════════
     GS PAPER I — History, Society, Geography
  ════════════════════════════════════════ */
  {
    id: 'gs1-001',
    paper: 'gs1',
    topic: 'Medieval History',
    subtopic: 'Bhakti Movement',
    year: 2023,
    marks: 15,
    words: 200,
    question: 'Discuss the socio-economic and political factors responsible for the rise of the Bhakti Movement in medieval India. How did it contribute to social reform?',
    model_answer: {
      text: `The Bhakti Movement (8th–17th centuries) was a profound religious renaissance that challenged the rigid socio-religious order of medieval India.

SOCIO-ECONOMIC FACTORS:
The movement emerged against the backdrop of caste oppression, where the lower castes (Shudras, Dalits) were denied temple entry and spiritual rights. The rigid varna system, compounded by exploitative feudal landlordism, created widespread social discontent. The growth of trade guilds and artisan communities generated a literate mercantile class seeking personal spiritual connection over ritualistic Brahminical practices.

POLITICAL FACTORS:
The decline of the Rajput kingdoms post-12th century and the establishment of Delhi Sultanate (1206 CE) created political instability. The encounter with Islamic egalitarianism — which preached the equality of all before Allah — acted as a catalyst. Saints like Kabir consciously bridged the Hindu-Muslim divide, responding to the syncretistic political environment of Sufi influences.

CONTRIBUTION TO SOCIAL REFORM:
• Caste critique: Ramananda accepted disciples across castes (including Kabir, a weaver; Ravidas, a cobbler), directly challenging untouchability.
• Women's empowerment: Mirabai, Andal, and Akkamahadevi asserted spiritual autonomy in a patriarchal society.
• Vernacular languages: Bhakti saints composed in Hindi, Marathi, Kannada and Tamil, democratising spiritual knowledge previously locked in Sanskrit.
• Anti-idolatry & monotheism: Kabir, Nanak and Dadu Dayal rejected external rituals, emphasising inner devotion and ethical living.
• Social integration: The Varkari movement (Maharashtra) created a pan-caste pilgrimage tradition to Pandharpur.

CONCLUSION:
The Bhakti Movement was India's first sustained grassroots social reform movement. Its emphasis on personal devotion (bhakti) over caste hierarchy laid the philosophical foundation for later reform movements of the 19th century, from Raja Ram Mohan Roy to Dr. B.R. Ambedkar.`,
      key_points: [
        'Caste oppression and denial of temple entry to lower castes',
        'Feudal exploitation and socio-economic discontent',
        'Political instability after Delhi Sultanate and Islamic egalitarian influence',
        'Sufi syncretism as a catalyst',
        'Ramananda\'s cross-caste discipleship (Kabir, Ravidas)',
        'Women saints asserting spiritual autonomy (Mirabai, Andal)',
        'Use of vernacular languages democratising spiritual knowledge',
        'Critique of idol worship and Brahminical ritualism',
        'Varkari movement and social integration through pilgrimage',
        'Continuity with 19th century social reform'
      ],
      keywords: ['Bhakti', 'Varna system', 'Sufi syncretism', 'Varkari', 'Ramananda', 'Kabir', 'Mirabai', 'vernacularisation', 'anti-idolatry', 'social egalitarianism'],
      sources: ['NCERT History Class XI — Medieval India', 'Romila Thapar — A History of India', 'R.C. Majumdar — The Delhi Sultanate']
    },
    difficulty: 'medium'
  },

  {
    id: 'gs1-002',
    paper: 'gs1',
    topic: 'Geography',
    subtopic: 'Climate & Agriculture',
    year: 2022,
    marks: 10,
    words: 150,
    question: 'Discuss the impact of climate change on the monsoon patterns in India and its consequences for agriculture.',
    model_answer: {
      text: `IMPACT ON MONSOON PATTERNS:
Climate change is altering India's monsoon dynamics through multiple mechanisms. Rising sea surface temperatures in the Indian Ocean are intensifying the Inter-Tropical Convergence Zone (ITCZ), causing erratic rainfall distribution. Studies by the India Meteorological Department (IMD) indicate increased frequency of extreme precipitation events (+20%) alongside longer dry spells. The Western Disturbances affecting winter rains in the northwest are becoming more intense. Retreat of Himalayan glaciers reduces the orographic effect that drives monsoon circulation over the Gangetic plains.

CONSEQUENCES FOR AGRICULTURE:
• Crop yield losses: ICAR estimates that rice yield could decline by 6–10% and wheat by 6–23% per degree Celsius rise.
• Shifting crop seasons: Delayed or early monsoon onset disrupts kharif sowing cycles (paddy, cotton, groundnut).
• Groundwater stress: Inconsistent recharge depletes irrigation sources; 60% of India's irrigation depends on groundwater.
• Pest and disease outbreaks: Warmer, humid conditions accelerate spread of brown planthopper and wheat rust.
• Regional disparities: Vidarbha, Bundelkhand and rain-shadow areas face intensified drought; Kerala and Northeast face flooding.

WAY FORWARD:
Climate-resilient crop varieties (ICAR's heat-tolerant wheat HD-3385), precision irrigation, crop diversification, and expansion of PM Fasal Bima Yojana coverage are critical. India's National Action Plan on Climate Change (NAPCC) and National Mission for Sustainable Agriculture (NMSA) provide the policy framework.`,
      key_points: [
        'Rising Indian Ocean temperatures affecting ITCZ',
        'Increased extreme precipitation events and longer dry spells (IMD data)',
        'Himalayan glacier retreat reducing orographic effect',
        'ICAR estimates: rice yield -6-10%, wheat -6-23% per °C rise',
        'Disruption of kharif sowing cycles',
        'Groundwater stress (60% irrigation dependent)',
        'Regional disparities — drought vs flooding',
        'Climate-resilient varieties and precision irrigation',
        'NAPCC and NMSA policy framework'
      ],
      keywords: ['ITCZ', 'Indian Ocean Dipole', 'Western Disturbances', 'ICAR', 'kharif', 'groundwater stress', 'NAPCC', 'NMSA', 'PM Fasal Bima Yojana', 'orographic effect'],
      sources: ['IMD Climate Reports', 'ICAR Annual Report 2023', 'IPCC AR6 South Asia Chapter', 'Economic Survey 2023-24']
    },
    difficulty: 'medium'
  },

  /* ════════════════════════════════════════
     GS PAPER II — Governance, Polity, IR
  ════════════════════════════════════════ */
  {
    id: 'gs2-001',
    paper: 'gs2',
    topic: 'Constitutional Bodies',
    subtopic: 'Election Commission of India',
    year: 2023,
    marks: 15,
    words: 200,
    question: 'Examine the role of the Election Commission of India in strengthening democracy. What reforms are needed to make it more effective?',
    model_answer: {
      text: `The Election Commission of India (ECI), established under Article 324 of the Constitution, is the guardian of India's democratic process — superintending, directing and controlling all elections to Parliament, State Legislatures, and the offices of President and Vice-President.

ROLE IN STRENGTHENING DEMOCRACY:
• Free and fair elections: ECI's Model Code of Conduct (MCC), first evolved in 1960, prevents misuse of official machinery by ruling parties during elections.
• Voter empowerment: The SVEEP (Systematic Voters' Education and Electoral Participation) programme has increased voter turnout from ~55% (1990s) to ~67.4% (2019 Lok Sabha).
• Technology adoption: Electronic Voting Machines (EVMs), Voter Verifiable Paper Audit Trail (VVPAT), and the c-VIGIL app for MCC violation reporting have enhanced transparency.
• Political party regulation: ECI's power to recognise, freeze symbols and derecognise parties (as in Sikkim Democratic Front, 2019) maintains party system integrity.
• Campaign finance monitoring: Form 26 affidavit disclosure of criminal antecedents, assets and liabilities of candidates.

REFORMS NEEDED:
• Appointment process: The Chief Election Commissioner (CEC) and Election Commissioners are currently appointed by the executive (President on advice of PM), creating perception of bias. The Supreme Court in Anoop Baranwal v. Union of India (2023) directed a collegium-type appointment committee including the Leader of Opposition.
• Security of tenure: Election Commissioners lack the same removal protection as the CEC (only through impeachment). The Chief Election Commissioner (Amendment) Act, 2023, has been criticised for not adequately addressing this.
• Simultaneous elections: One Nation One Election (recommended by High-Level Committee under Ram Nath Kovind, 2024) would reduce poll-related policy paralysis.
• Limit on political advertising: Strict cap on electoral expenditure backed by real-time financial disclosure.
• Regulation of social media: ECI needs statutory authority over digital campaign content and AI-generated deepfakes.

CONCLUSION:
A truly independent ECI, insulated from executive influence through statutory protection of its members and a transparent appointment mechanism, is essential for deepening India's democracy.`,
      key_points: [
        'Article 324 constitutional mandate',
        'Model Code of Conduct and free-fair elections',
        'SVEEP — voter turnout increase to 67.4% in 2019',
        'EVM, VVPAT, c-VIGIL technology adoption',
        'Anoop Baranwal v. Union of India (2023) Supreme Court ruling',
        'CEC and ECs appointment process reform',
        'Chief Election Commissioner (Amendment) Act 2023 and its gaps',
        'One Nation One Election — Kovind Committee 2024',
        'Campaign finance transparency',
        'Social media / deepfake regulation'
      ],
      keywords: ['Article 324', 'Model Code of Conduct', 'EVM', 'VVPAT', 'SVEEP', 'Anoop Baranwal case', 'One Nation One Election', 'c-VIGIL', 'Form 26 affidavit', 'ECI independence'],
      sources: ['Constitution of India — Article 324', 'Supreme Court — Anoop Baranwal v. UoI (2023)', 'Chief Election Commissioner Amendment Act 2023', 'Kovind Committee Report 2024', 'ECI Annual Report']
    },
    difficulty: 'hard'
  },

  {
    id: 'gs2-002',
    paper: 'gs2',
    topic: 'Federalism',
    subtopic: 'Cooperative Federalism',
    year: 2022,
    marks: 15,
    words: 200,
    question: 'Discuss the significance of cooperative federalism in India\'s development with suitable examples.',
    model_answer: {
      text: `Cooperative federalism refers to a system where Centre and States function as equal partners in governance, pooling resources and coordinating policy to achieve shared developmental goals — as opposed to competitive or coercive federalism.

CONSTITUTIONAL BASIS:
India's federalism, though unitary in crisis (Articles 356, 360), is designed for cooperation through the Concurrent List (Seventh Schedule), Finance Commission (Article 280), Inter-State Council (Article 263), and Zonal Councils.

SIGNIFICANCE AND EXAMPLES:
1. GST Council: The most cited example of cooperative federalism — a constitutional body (Article 279A, 101st Amendment, 2016) with joint Centre-State decision-making on indirect tax. States surrendered VAT sovereignty in exchange for guaranteed revenue compensation. The Council has passed 2,000+ decisions by consensus, demonstrating structured cooperation.

2. NITI Aayog (2015): Replaced Planning Commission, with Chief Ministers on its Governing Council. Focuses on competitive cooperative federalism — states benchmarked against each other to adopt best practices (e.g., Aspirational Districts Programme).

3. PM-Kisan / Ayushman Bharat: Centrally Sponsored Schemes (CSS) with shared funding (60:40 Centre-State for general states) integrate national goals with state implementation.

4. Disaster Management: NDRF (National Disaster Response Fund) and SDRF (State Disaster Response Fund) framework, as seen in COVID-19 coordination through National Disaster Management Authority.

5. River water disputes: Interstate River Water Disputes Act, 1956 provides cooperative dispute resolution (e.g., Cauvery Water Management Authority established by Supreme Court in 2018).

CHALLENGES:
• Fiscal asymmetry — States bear implementation burden; CSS proliferation creates dependency.
• Political asymmetry — Different ruling parties at Centre and State impede coordination (e.g., CAA/NRC, farm laws).
• Article 356 misuse historically undermined cooperative spirit.

WAY FORWARD:
Strengthening the Inter-State Council, rationalising CSS into block grants, and empowering the Finance Commission (16th FC under Dr. Arvind Panagariya, 2023) to address vertical fiscal imbalances will deepen cooperative federalism.`,
      key_points: [
        'Constitutional basis: Concurrent List, Article 263, Article 280',
        'GST Council (Article 279A) as landmark cooperative institution',
        '101st Constitutional Amendment 2016 enabling GST',
        'NITI Aayog replacing Planning Commission in 2015',
        'Aspirational Districts Programme benchmarking',
        'Centrally Sponsored Schemes 60:40 funding pattern',
        'NDRF/SDRF disaster management framework',
        'Interstate River Water Disputes Act 1956',
        'Fiscal asymmetry and CSS dependency challenges',
        '16th Finance Commission under Arvind Panagariya (2023)'
      ],
      keywords: ['Cooperative federalism', 'GST Council', 'Article 279A', '101st Amendment', 'NITI Aayog', 'Finance Commission', 'Centrally Sponsored Schemes', 'NDRF', 'Inter-State Council', 'Article 263'],
      sources: ['Constitution of India', 'GST Council Secretariat', 'NITI Aayog Annual Report 2023', '15th Finance Commission Report', 'PRS India — Federal Relations']
    },
    difficulty: 'medium'
  },

  /* ════════════════════════════════════════
     GS PAPER III — Economy, Environment, Tech
  ════════════════════════════════════════ */
  {
    id: 'gs3-001',
    paper: 'gs3',
    topic: 'Agriculture',
    subtopic: 'Doubling Farmers\' Income',
    year: 2023,
    marks: 15,
    words: 200,
    question: 'What are the challenges faced by India\'s agriculture sector? Discuss the measures needed to double farmers\' income.',
    model_answer: {
      text: `India's agriculture, employing ~46% of the workforce (Economic Survey 2023-24) but contributing only ~18% to GDP, faces a deep structural crisis threatening food security and rural livelihoods.

CHALLENGES:
• Fragmented landholdings: Average farm size declined from 2.28 ha (1970-71) to 1.08 ha (2015-16), limiting economies of scale and mechanisation.
• Input cost inflation: Rising fertiliser, seed and fuel costs erode margins; fertiliser subsidy reached ₹1.88 lakh crore (2022-23).
• Water stress: India uses ~80% of freshwater for irrigation; groundwater depletion in Punjab, Haryana (GRACE satellite data — 4 cm/year decline).
• Price volatility and MSP gaps: Only ~6% of farmers sell at MSP (SHANTA KUMAR COMMITTEE, 2015). Post-harvest losses ~16% for cereals (ICAR).
• Credit constraints: 85% small/marginal farmers; NABARD estimates 40% still dependent on informal credit at usurious rates.
• Climate vulnerability: 60% of cultivation is rainfed; ICAR projects 4.5–9% decline in rice yield by 2050.

MEASURES TO DOUBLE FARMERS' INCOME (Dalwai Committee, 2017 — target year 2022):
1. Productivity enhancement: High-yielding variety seeds, soil health cards (15.6 crore issued under SHC scheme), micro-irrigation (PM Krishi Sinchayee Yojana).
2. Cost reduction: Neem-coated urea, precision agriculture, Farmer Producer Organisations (FPOs) — 10,000 FPOs targeted by 2027-28.
3. Price realisation: Electronic National Agriculture Market (eNAM) integrating 1,361 mandis (as of 2024); PM-AASHA for price support.
4. Non-farm income diversification: Allied sectors — animal husbandry (PM Matsya Sampada Yojana), horticulture (MIDH scheme), agro-processing.
5. Risk mitigation: PM Fasal Bima Yojana (PMFBY) — ₹1.56 lakh crore claims paid since 2016; Kisan Credit Card (KCC) for credit access.
6. Agricultural infrastructure: Agriculture Infrastructure Fund (₹1 lakh crore) for cold chains, warehouses, primary processing.

CONCLUSION:
Doubling farmers' income requires simultaneous action on productivity, market linkage, risk mitigation and diversification. Expediting land leasing reforms (Model Agricultural Land Leasing Act, 2016) and strengthening the APMC reform agenda remain critical unfinished tasks.`,
      key_points: [
        'Agriculture employs 46% workforce but 18% GDP — structural gap',
        'Average farm size declined to 1.08 ha — fragmentation problem',
        'Fertiliser subsidy ₹1.88 lakh crore (2022-23)',
        'Only 6% farmers sell at MSP — Shanta Kumar Committee 2015',
        'ICAR projects 4.5-9% rice yield decline by 2050',
        'Dalwai Committee 2017 — six pillars for doubling income',
        'eNAM integrating 1,361 mandis as of 2024',
        '10,000 FPOs target by 2027-28',
        'PM Fasal Bima Yojana — ₹1.56 lakh crore claims since 2016',
        'Agriculture Infrastructure Fund ₹1 lakh crore'
      ],
      keywords: ['Dalwai Committee', 'eNAM', 'FPO', 'PMFBY', 'SHC', 'PM-AASHA', 'MSP', 'Kisan Credit Card', 'MIDH', 'Agriculture Infrastructure Fund'],
      sources: ['Economic Survey 2023-24', 'Dalwai Committee Report 2017', 'ICAR Climate Change Reports', 'Shanta Kumar Committee 2015', 'NABARD Rural Credit Report 2023']
    },
    difficulty: 'medium'
  },

  {
    id: 'gs3-002',
    paper: 'gs3',
    topic: 'Indian Economy',
    subtopic: 'Manufacturing & Industrial Policy',
    year: 2022,
    marks: 10,
    words: 150,
    question: 'Discuss the significance of the Production Linked Incentive (PLI) scheme for India\'s manufacturing sector.',
    model_answer: {
      text: `The Production Linked Incentive (PLI) scheme, launched in 2020 by the Ministry of Commerce & Industry, aims to make India a global manufacturing hub by offering financial incentives (4–20% of incremental sales) to domestic manufacturers across 14 key sectors.

SIGNIFICANCE:
• Import substitution: PLI directly targets sectors of high import dependency — smartphones (₹50,000 crore imports pre-PLI), solar PV modules, APIs for pharmaceuticals, specialty chemicals.
• Export promotion: Electronics exports grew from $9.7 billion (2020-21) to $23.6 billion (2023-24), significantly driven by PLI beneficiaries (Apple's contract manufacturers: Foxconn, Tata Electronics).
• Employment generation: PLI is projected to create 60 lakh direct and indirect jobs across all sectors over 5 years (DPIIT estimates).
• Attracting global supply chains: Amid China+1 strategy, PLI positions India to capture supply chain shifts in semiconductors (India Semiconductor Mission), telecom (Ericsson, Nokia in Chennai) and medical devices.
• Reducing import burden: API-PLI has resulted in India producing 35 key starting materials (KSMs) domestically, reducing pharmaceutical import dependency from China.

CHALLENGES:
Production targets too ambitious for some sectors; limited MSME participation; delays in disbursement.

WAY FORWARD:
Linking PLI with complementary reforms — single-window clearances, land availability, logistics efficiency (PM GatiShakti) — will maximise its transformative impact on India's manufacturing share (currently ~17% of GDP, target 25% by 2025).`,
      key_points: [
        'PLI launched 2020 — 14 sectors, incentive 4-20% of incremental sales',
        'Electronics exports from $9.7B to $23.6B (2020-24)',
        'Apple supply chain — Foxconn and Tata Electronics in India',
        '60 lakh jobs projected (DPIIT)',
        'China+1 strategy — India semiconductor and telecom gains',
        'API-PLI — 35 KSMs produced domestically',
        'India Semiconductor Mission linkage',
        'Manufacturing target: 17% to 25% of GDP',
        'PM GatiShakti complementary infrastructure reform'
      ],
      keywords: ['PLI', 'China+1', 'India Semiconductor Mission', 'DPIIT', 'Apple Foxconn', 'API-PLI', 'PM GatiShakti', 'import substitution', 'Make in India', 'KSMs'],
      sources: ['DPIIT PLI Scheme Updates 2024', 'Ministry of Commerce Annual Report 2023-24', 'Economic Survey 2023-24', 'India Semiconductor Mission Policy']
    },
    difficulty: 'easy'
  },

  /* ════════════════════════════════════════
     GS PAPER IV — Ethics, Integrity, Aptitude
  ════════════════════════════════════════ */
  {
    id: 'gs4-001',
    paper: 'gs4',
    topic: 'Emotional Intelligence',
    subtopic: 'Administration & Governance',
    year: 2023,
    marks: 10,
    words: 150,
    question: 'What do you understand by "emotional intelligence"? How is it related to effective administration?',
    model_answer: {
      text: `Emotional Intelligence (EI), conceptualised by psychologists Peter Salovey and John D. Mayer (1990) and popularised by Daniel Goleman, refers to the ability to perceive, understand, manage, and use emotions effectively — in oneself and others.

COMPONENTS (Goleman's model):
1. Self-awareness — recognising one's emotions and their impact
2. Self-regulation — controlling impulses; integrity under pressure
3. Motivation — intrinsic drive beyond material reward
4. Empathy — understanding stakeholders' emotional states
5. Social skills — building relationships, managing conflict

RELATIONSHIP TO EFFECTIVE ADMINISTRATION:
• Stakeholder sensitivity: A District Collector handling farmer distress or tribal displacement must demonstrate empathy to build trust and avoid conflict. The Bhagwan Nagar evictions (Odisha, 2019) show how absence of EI led to administrative failure.
• Crisis management: During COVID-19, IAS officers like Dr. Priya Warrier (Kerala) who combined efficient resource allocation with community empathy achieved higher compliance and lower mortality.
• Team leadership: Self-regulation prevents knee-jerk reactions to political pressure; self-awareness helps administrators acknowledge bias in decision-making.
• Conflict resolution: EI enables mediation in inter-departmental or Centre-State disputes without positional escalation.
• Ethical decision-making: Goleman notes that EI underlies moral reasoning — an emotionally aware officer resists corruption by connecting decisions to their impact on citizens.

CONCLUSION:
The 2nd ARC (10th Report — Values in Public Service) emphasises emotional competence alongside technical competence for civil servants. IQ gets officers recruited; EI determines how effectively they serve.`,
      key_points: [
        'EI defined by Salovey & Mayer (1990), popularised by Goleman',
        'Five components: self-awareness, self-regulation, motivation, empathy, social skills',
        'Stakeholder sensitivity in handling vulnerable communities',
        'Crisis management — COVID examples of empathetic administration',
        'EI enabling conflict resolution without escalation',
        'EI underpinning ethical decision-making (resisting corruption)',
        '2nd ARC 10th Report — emotional competence for civil servants',
        'IQ for recruitment, EI for effective service delivery'
      ],
      keywords: ['Emotional Intelligence', 'Daniel Goleman', 'Salovey and Mayer', 'self-awareness', 'empathy', 'self-regulation', '2nd ARC', 'Values in Public Service', 'EQ', 'moral reasoning'],
      sources: ['Daniel Goleman — Emotional Intelligence (1995)', '2nd ARC 10th Report — Refurbishing of Personnel Administration', 'UPSC Ethics Reference Notes']
    },
    difficulty: 'easy'
  },

  {
    id: 'gs4-002',
    paper: 'gs4',
    topic: 'Ethics in Public Administration',
    subtopic: 'Ethical Leadership',
    year: 2022,
    marks: 15,
    words: 200,
    question: 'Discuss the importance of ethical leadership in public service. Illustrate with examples from Indian administration.',
    model_answer: {
      text: `Ethical leadership in public service refers to leadership guided by moral principles, transparency, accountability and commitment to public interest — as opposed to personal gain or political convenience. Nolan Committee (UK) articulated its seven principles: selflessness, integrity, objectivity, accountability, openness, honesty, and leadership.

IMPORTANCE:
1. Institutional trust: Ethical leaders build public confidence in government institutions. India ranks 93rd on Transparency International's CPI 2023 (score 39/100); ethical leadership at local and district levels directly determines this perception.
2. Policy integrity: Ethical IAS/IPS officers resist political pressure to subvert policy. The Kudankulam nuclear plant controversy saw collectors balance development imperatives against citizen concerns ethically.
3. Anti-corruption role-modelling: When senior officers demonstrate ethical conduct, it percolates downward. T.N. Seshan's tenure as CEC (1990–96) transformed the Election Commission through personal integrity.
4. Whistleblowing culture: Officers like Sanjiv Chaturvedi (AIIMS, Forest Dept) and Durga Shakti Nagpal exemplify ethical courage — exposing wrongdoing despite personal risk.
5. Equitable service delivery: Ethical leaders ensure marginalised communities receive entitlements without bribery or discrimination (e.g., Chhattisgarh's model PDS reforms under ethical district leadership).

CHALLENGES TO ETHICAL LEADERSHIP:
• Political patronage systems rewarding compliance over integrity
• Transfer threats used to silence ethical officers (Durga Shakti case)
• Lack of whistleblower protection (Whistleblowers Protection Act 2014 — inadequately operationalised)

WAY FORWARD:
The 2nd ARC (4th Report — Ethics in Governance) recommends Civil Services Boards for posting decisions, performance appraisal linked to integrity indicators, and mandatory ethics training. The Mission Karmayogi (National Programme for Civil Services Capacity Building, 2020) integrates competency and values-based training for civil servants.

Ethical leadership is not merely about personal virtue but systemic reform — creating institutions where integrity is incentivised and corruption structurally constrained.`,
      key_points: [
        'Nolan Committee\'s seven principles of public life',
        'India\'s TI CPI 2023 rank 93 — score 39/100',
        'T.N. Seshan\'s tenure transforming Election Commission',
        'Sanjiv Chaturvedi and Durga Shakti Nagpal as ethical courage examples',
        'Whistleblowers Protection Act 2014 and its implementation gaps',
        'Political patronage and transfer threats as systemic challenges',
        '2nd ARC 4th Report — Civil Services Boards recommendation',
        'Mission Karmayogi (2020) for values-based civil servant training',
        'Equitable service delivery for marginalised communities'
      ],
      keywords: ['Nolan Committee', 'Ethical leadership', 'T.N. Seshan', 'Sanjiv Chaturvedi', 'Durga Shakti Nagpal', 'Whistleblowers Protection Act', 'Mission Karmayogi', '2nd ARC', 'CPI 2023', 'Civil Services Board'],
      sources: ['2nd ARC 4th Report — Ethics in Governance', 'Transparency International CPI 2023', 'Nolan Committee Report (UK)', 'Mission Karmayogi Policy 2020', 'Whistleblowers Protection Act 2014']
    },
    difficulty: 'medium'
  }

];
