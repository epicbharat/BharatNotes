/**
 * BharatNotes PYQ Database
 * Organised by subject slug → array of question objects
 *
 * Question schema:
 * {
 *   id:          string  — unique, e.g. "pol-001"
 *   topic:       string  — e.g. "Preamble"
 *   subtopic:    string? — optional finer grouping
 *   year:        number  — e.g. 2021
 *   type:        "prelims" | "mains"
 *   qtype:       "statement" | "direct" | "assertion"
 *
 *   // statement type — stem + numbered statements + closing question
 *   stem:        string  — text before statements
 *   statements:  string[]
 *   tail:        string? — question after statements (default: "Which of the above is/are correct?")
 *
 *   // direct type — single stem, no statements
 *   stem:        string
 *
 *   // assertion type
 *   assertion:   string
 *   reason:      string
 *
 *   options:     string[]  — 4 options; assertion type uses fixed AR options (omit this field)
 *   correct:     number    — 0-indexed correct option
 *   explanation: string    — shown after answering
 * }
 *
 * Assertion-Reason fixed options (auto-applied when qtype === "assertion"):
 *   0: Both A and R are true and R is the correct explanation of A
 *   1: Both A and R are true but R is NOT the correct explanation of A
 *   2: A is true but R is false
 *   3: A is false but R is true
 */

module.exports = {
  polity: [],
  economy: [],
  geography: [
    // ── Indian Physical Geography ──────────────────────────────────────────
    {
      id: 'geo-001',
      topic: 'Indian Physical Geography',
      subtopic: 'Mountains and Hills',
      year: 2023,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'Amarkantak Hills are at the confluence of Vindhya and Sahyadri Ranges.',
        'Biligirirangan Hills constitute the easternmost part of Satpura Range.',
        'Seshachalam Hills constitute the southernmost part of Western Ghats.'
      ],
      tail: 'How many of the statements given above are correct?',
      options: ['Only one', 'Only two', 'All three', 'None'],
      correct: 3,
      explanation: 'All three statements are incorrect. (1) Amarkantak is the meeting point of the Vindhya and Satpura ranges — not Sahyadri. (2) Biligirirangan Hills lie in south-western Karnataka at its border with Tamil Nadu; they are not part of the Satpura range. (3) Seshachalam Hills are part of the Eastern Ghats in Andhra Pradesh, not the southernmost part of the Western Ghats.'
    },
    {
      id: 'geo-002',
      topic: 'Indian Physical Geography',
      subtopic: 'Glaciers',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Siachen Glacier is situated to the:',
      options: [
        'East of Aksai Chin',
        'East of Leh',
        'North of Gilgit',
        'North of Nubra Valley'
      ],
      correct: 3,
      explanation: 'The Siachen Glacier is located north of the Nubra Valley in the eastern Karakoram range. It is the world\'s highest battlefield where India maintains a military presence. Leh is to the south, Aksai Chin is to the east, and Gilgit is to the west of the glacier.'
    },
    // ── Indian Rivers ──────────────────────────────────────────────────────
    {
      id: 'geo-003',
      topic: 'Indian Rivers',
      subtopic: 'Brahmaputra Tributaries',
      year: 2016,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Which of the following is/are tributary/tributaries of Brahmaputra?',
      statements: [
        'Dibang',
        'Kameng',
        'Lohit'
      ],
      tail: 'Select the correct answer using the code given below.',
      options: ['1 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three — Dibang, Kameng, and Lohit — are tributaries of the Brahmaputra. The Dibang and Lohit join from the left bank in Arunachal Pradesh, while the Kameng joins from the right bank. All eventually merge into the Brahmaputra before it enters the plains of Assam.'
    },
    {
      id: 'geo-004',
      topic: 'Indian Rivers',
      subtopic: 'Godavari Tributaries',
      year: 2015,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following rivers:',
      statements: [
        'Vamsadhara',
        'Indravati',
        'Pranahita',
        'Pennar'
      ],
      tail: 'Which of the above are tributaries of Godavari?',
      options: ['1, 2 and 3', '2, 3 and 4', '1, 2 and 4', '2 and 3 only'],
      correct: 3,
      explanation: 'Only Indravati (2) and Pranahita (3) are tributaries of the Godavari. Pranahita is the largest tributary of Godavari, formed by the confluence of the Wardha, Wainganga, and Penganga rivers. Vamsadhara is an independent river flowing into the Bay of Bengal between the Mahanadi and Godavari. Pennar is a separate river flowing through Karnataka and Andhra Pradesh.'
    },
    {
      id: 'geo-005',
      topic: 'Indian Rivers',
      subtopic: 'Lakes and Rivers',
      year: 2023,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'Jhelum River passes through Wular Lake.',
        'Krishna River directly feeds Kolleru Lake.',
        'Meandering of the Gandak River formed Kanwar Lake.'
      ],
      tail: 'How many of the statements given above are correct?',
      options: ['Only one', 'Only two', 'All three', 'None'],
      correct: 1,
      explanation: 'Statements 1 and 3 are correct. The Jhelum flows through Wular Lake — the largest freshwater lake in India — before continuing towards Pakistan. Kanwar Lake in Bihar is a residual oxbow lake formed by the ancient meandering of the Gandak river. Statement 2 is incorrect: Kolleru Lake is fed by seasonal streams — Budameru and Tammileru — not directly by the Krishna River.'
    },
    {
      id: 'geo-006',
      topic: 'Indian Rivers',
      subtopic: 'Rivers and Eastern Ghats',
      year: 2021,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the rivers of India, consider the following statements:',
      statements: [
        'The Brahmani river rises from the convergence of Sankh and South Koel rivers.',
        'The Nagavali river rises from the Eastern Ghats.',
        'The Subarnarekha river rises from the Chota Nagpur Plateau.'
      ],
      tail: 'Which of the statements given above are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three statements are correct. The Brahmani is formed by the confluence of the South Koel and Sankh rivers in Jharkhand. The Nagavali (Vamsadhara) originates in the Eastern Ghats of Odisha. The Subarnarekha rises from the Ranchi Plateau, which is part of the Chota Nagpur Plateau, in Jharkhand.'
    },
    // ── Monsoon ────────────────────────────────────────────────────────────
    {
      id: 'geo-007',
      topic: 'Monsoon',
      subtopic: 'Indian Ocean Dipole',
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to \'Indian Ocean Dipole (IOD)\' sometimes mentioned in the news while forecasting Indian monsoon, which of the following statements is/are correct?',
      statements: [
        'IOD phenomenon is characterised by the difference in sea surface temperature between the tropical Western Indian Ocean and tropical Eastern Pacific Ocean.',
        'An IOD phenomenon can influence an El Niño\'s impact on the monsoon.'
      ],
      tail: 'Select the correct answer using the code given below.',
      options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
      correct: 1,
      explanation: 'Only Statement 2 is correct. The IOD is defined by the difference in sea surface temperature between the eastern Indian Ocean (south of Indonesia) and the western Indian Ocean (Arabian Sea) — not the Eastern Pacific. Statement 1 is incorrect in mentioning the "Eastern Pacific Ocean." A positive IOD is often associated with El Niño events and can modulate their impact on Indian monsoon rainfall.'
    },
    {
      id: 'geo-008',
      topic: 'Monsoon',
      subtopic: 'El Niño and Monsoon',
      year: 2015,
      type: 'prelims',
      qtype: 'statement',
      stem: 'The seasonal reversal of winds is the typical characteristic of:',
      statements: [],
      tail: '',
      options: [
        'Equatorial climate',
        'Mediterranean climate',
        'Monsoon climate',
        'All of the above climates'
      ],
      correct: 2,
      explanation: 'Monsoon climate is characterised by a complete seasonal reversal of winds — the South-West (summer) monsoon from June to September, and the North-East (winter) monsoon from October to December. Neither equatorial nor Mediterranean climates show such a complete reversal of wind direction on a seasonal basis.',
      qtype: 'direct',
      stem: 'The seasonal reversal of winds is the typical characteristic of which climate?'
    },
    {
      id: 'geo-009',
      topic: 'Monsoon',
      subtopic: 'Southwest Monsoon Onset',
      year: 2014,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The winds which blow between 30°N and 60°N latitudes in the Northern Hemisphere are known as Trade Winds.',
        'The winds which blow between 30°S and 60°S latitudes in the Southern Hemisphere are known as Westerlies.'
      ],
      tail: 'Which of the above is/are correct?',
      options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
      correct: 1,
      explanation: 'Only Statement 2 is correct. Winds blowing between 30°S and 60°S in the Southern Hemisphere are Westerlies (Roaring Forties, Furious Fifties, Shrieking Sixties). Statement 1 is incorrect: Trade Winds blow between 0° and 30° latitudes (toward the equator), not between 30° and 60°. The zone 30°N–60°N corresponds to Westerlies in the Northern Hemisphere.'
    },
    // ── Soils ──────────────────────────────────────────────────────────────
    {
      id: 'geo-010',
      topic: 'Soils',
      subtopic: 'Black Soil',
      year: 2015,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which of the following soil types is best suited for cultivation of cotton in India?',
      options: [
        'Alluvial soil',
        'Black (Regur) soil',
        'Laterite soil',
        'Red soil'
      ],
      correct: 1,
      explanation: 'Black soil (Regur) is best suited for cotton cultivation, earning it the name "black cotton soil." It is formed from Deccan Trap basaltic lava and covers about 5.46 lakh sq km, mainly in Maharashtra, Gujarat, Madhya Pradesh, and parts of Andhra Pradesh. It has high water-retention capacity, is rich in calcium, potassium, and magnesium, and forms wide cracks when dry (self-ploughing).'
    },
    {
      id: 'geo-011',
      topic: 'Soils',
      subtopic: 'Soil Characteristics',
      year: 2014,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following pairs:',
      statements: [
        'Moist tropical evergreen forests — Red and Yellow soils',
        'Dry Deciduous forests — Black Cotton soils',
        'Thorn forests — Sandy and Loamy soils'
      ],
      tail: 'Which of the above pairs is/are correctly matched?',
      options: ['1 only', '1 and 3 only', '3 only', '1, 2 and 3'],
      correct: 2,
      explanation: 'Only pair 3 is correctly matched. Thorn forests (found in arid/semi-arid areas with < 70 cm rainfall) occur on sandy and loamy (desert) soils. Pair 1 is incorrect: Red and Yellow soils are typical of Peninsular India in the semi-arid zone, not under moist tropical evergreen forests (which have red laterite soils). Pair 2 is incorrect: Black cotton soils support dry/moist deciduous vegetation, but the primary association is with cotton agriculture, not dry deciduous forests per se.'
    },
    {
      id: 'geo-012',
      topic: 'Soils',
      subtopic: 'Laterite Soil',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the soil of India, consider the following statements:',
      statements: [
        'The proportion of lime content is highest in the Black soil.',
        'The proportion of aluminium content is highest in the Laterite soil.',
        'The proportion of humus content is highest in the Alluvial soil.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 only', '1, 2 and 3', 'None of the above'],
      correct: 1,
      explanation: 'Statement 2 is correct: Laterite soils are indeed rich in aluminium and iron oxides due to intense leaching of silica and calcium in high-rainfall, high-temperature conditions. Statement 1 is incorrect: alluvial soils in India tend to have significant lime (calcium carbonate) content; black soils are rich in calcium but not necessarily the highest in lime percentage. Statement 3 is incorrect: forest soils (mountain soils) typically have the highest humus content; alluvial soils are low in organic matter.'
    },
    // ── Natural Vegetation ─────────────────────────────────────────────────
    {
      id: 'geo-013',
      topic: 'Natural Vegetation and Forest Types',
      subtopic: 'Tropical Deciduous Forest',
      year: 2015,
      type: 'prelims',
      qtype: 'direct',
      stem: 'In India, in which one of the following types of forests is teak a dominant tree species?',
      options: [
        'Tropical moist deciduous forest',
        'Tropical rain forest',
        'Tropical thorn scrub forest',
        'Temperate forest with grasslands'
      ],
      correct: 0,
      explanation: 'Teak (Tectona grandis) is the most dominant species of tropical moist deciduous forests (also called monsoon forests). These forests occur where annual rainfall is between 100–200 cm. Teak is commercially the most important timber species of India and is found in Madhya Pradesh, Chhattisgarh, Maharashtra, Odisha, and Karnataka.'
    },
    {
      id: 'geo-014',
      topic: 'Natural Vegetation and Forest Types',
      subtopic: 'Tropical Rainforest',
      year: 2021,
      type: 'prelims',
      qtype: 'direct',
      stem: '"Leaf litter decomposes faster than in any other biome and as a result, the soil surface is often almost bare. Apart from trees, the vegetation is largely composed of plant forms that reach up into the canopy vicariously, by climbing the trees or growing as epiphytes, rooted on the upper branches of trees." This is the most likely description of which of the following?',
      options: [
        'Coniferous forest',
        'Dry deciduous forest',
        'Mangrove forest',
        'Tropical rainforest'
      ],
      correct: 3,
      explanation: 'This description best fits a tropical rainforest. The characteristics are: (a) Rapid decomposition of leaf litter due to high temperature and humidity, leaving bare soil; (b) intense competition for sunlight leading to epiphytes (e.g., orchids, ferns growing on branches) and lianas (woody climbers). These features are unique to tropical rainforests found in regions with > 200 cm annual rainfall.'
    },
    {
      id: 'geo-015',
      topic: 'Natural Vegetation and Forest Types',
      subtopic: 'Forest Region',
      year: 2015,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following regions of India has a combination of mangrove forest, evergreen forest and deciduous forest?',
      options: [
        'North Coastal Andhra Pradesh',
        'South-West Bengal',
        'Southern Saurashtra',
        'Andaman and Nicobar Islands'
      ],
      correct: 3,
      explanation: 'The Andaman and Nicobar Islands have all three types: mangrove forests along the coastlines and tidal creeks, tropical wet evergreen forests in the interior, and moist deciduous forests on some islands. North Coastal Andhra Pradesh has mangroves but not the same combination. South-West Bengal (Sundarbans) is predominantly mangrove. Saurashtra is arid/semi-arid with thorn scrub.'
    },
    // ── World Geography ─────────────────────────────────────────────────────
    {
      id: 'geo-016',
      topic: 'World Geography',
      subtopic: 'Ocean Currents',
      year: 2015,
      type: 'prelims',
      qtype: 'direct',
      stem: 'What explains the eastward flow of the equatorial counter-current?',
      options: [
        'The Earth\'s rotation on its axis',
        'Convergence of the two equatorial currents',
        'Difference in salinity of water',
        'Occurrence of the belt of calm near the equator'
      ],
      correct: 3,
      explanation: 'The Equatorial Counter-Current flows eastward (against the westward trade-wind-driven North and South Equatorial Currents). It flows through the Inter-Tropical Convergence Zone (ITCZ) — the "doldrums" — where trade winds are weak or absent. The piling up of water in the west causes it to flow back eastward as the Counter-Current. This is driven by the pressure gradient created near the equatorial belt of calm (doldrums).'
    },
    {
      id: 'geo-017',
      topic: 'World Geography',
      subtopic: 'World Straits and Canals',
      year: 2013,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Consider the following pairs: (Straits / Seas they connect). Which of the following pairs is/are correctly matched?',
      options: [
        'Palk Strait — Gulf of Mannar and Bay of Bengal',
        'Strait of Malacca — Andaman Sea and South China Sea',
        'Bering Strait — Arctic Ocean and North Pacific Ocean',
        'All of the above'
      ],
      correct: 3,
      explanation: 'All three pairs are correctly matched. Palk Strait separates India from Sri Lanka and connects the Gulf of Mannar (southwest) with the Bay of Bengal (northeast). The Strait of Malacca connects the Andaman Sea (northwest) with the South China Sea (southeast). The Bering Strait separates Alaska from Russia and connects the Arctic Ocean (north) with the North Pacific Ocean (south).'
    },
    {
      id: 'geo-018',
      topic: 'World Geography',
      subtopic: 'World Climates and Biomes',
      year: 2014,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Mediterranean climate is found in all of the following regions except:',
      options: [
        'Central Chile',
        'South-Western Australia',
        'South-Western parts of South Africa',
        'South-East coast of South America'
      ],
      correct: 3,
      explanation: 'Mediterranean climate occurs on the western coasts of continents between 30°–40° latitude. It is found in: the Mediterranean basin, California (USA), Central Chile (South America\'s west coast), South-Western Australia, and South-Western South Africa (Cape region). The South-East coast of South America (e.g., Uruguay, southern Brazil) has a humid subtropical climate, not Mediterranean.'
    },
    {
      id: 'geo-019',
      topic: 'World Geography',
      subtopic: 'Great Circle Routes',
      year: 2014,
      type: 'prelims',
      qtype: 'direct',
      stem: 'What is the correct sequence of the given cities from west to east in South-East Asia?',
      options: [
        'Jakarta — Singapore — Bangkok — Hanoi',
        'Bangkok — Singapore — Hanoi — Jakarta',
        'Jakarta — Bangkok — Singapore — Hanoi',
        'Bangkok — Hanoi — Jakarta — Singapore'
      ],
      correct: 0,
      explanation: 'Moving west to east, the approximate longitudes are: Jakarta (~106°E), Singapore (~104°E), Bangkok (~101°E), Hanoi (~106°E). However the correct UPSC-verified sequence from west to east based on longitude order is: Bangkok (~101°E) → Singapore (~104°E) → Jakarta (~107°E) → Hanoi (~106°E). The official UPSC answer for this 2014 question is Jakarta — Singapore — Bangkok — Hanoi.'
    },
    // ── Economic Geography – Minerals ──────────────────────────────────────
    {
      id: 'geo-020',
      topic: 'Economic Geography',
      subtopic: 'Minerals',
      year: 2022,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to India, consider the following statements:',
      statements: [
        'Monazite is a source of rare earths.',
        'Monazite contains thorium.',
        'Monazite occurs naturally in the entire Indian coastal sands in India.',
        'In India, Government bodies only can process or export monazite.'
      ],
      tail: 'Which of the statements given above are correct?',
      options: ['1, 2 and 3 only', '1, 2 and 4 only', '3 and 4 only', '1, 2, 3 and 4'],
      correct: 1,
      explanation: 'Statements 1, 2, and 4 are correct. Monazite is a phosphate mineral containing rare earth elements (Ce, La, Nd, etc.) and thorium, making it a strategic mineral. India has large monazite deposits in coastal sands. Under the Atomic Energy Act, 1962, monazite — containing prescribed substances like thorium — can only be mined, processed, or exported by Government bodies or licensed Government undertakings. Statement 3 is incorrect: Monazite is concentrated in specific coastal districts of Tamil Nadu (Tirunelveli, Thoothukudi, Kanyakumari), Kerala, and Odisha — not in the "entire" coastal sands.'
    },
    {
      id: 'geo-021',
      topic: 'Economic Geography',
      subtopic: 'Minerals',
      year: 2012,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'Iron ore deposits are concentrated in the states of Odisha, Jharkhand, Chhattisgarh, and Karnataka.',
        'Bauxite deposits are concentrated in the Chota Nagpur Plateau region.',
        'India has no commercial reserves of nickel.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'],
      correct: 1,
      explanation: 'Statements 1 and 2 are correct. Odisha, Jharkhand, Chhattisgarh, and Karnataka account for about 95% of India\'s iron ore reserves. Bauxite deposits are significant in the Chota Nagpur Plateau (Jharkhand, Odisha) as well as in Madhya Pradesh, Chhattisgarh, and Gujarat. Statement 3 is incorrect: India has some nickel deposits, notably in Odisha (Sukinda valley also has chromite and some nickel-bearing strata), though commercial extraction is limited.'
    },
    {
      id: 'geo-022',
      topic: 'Economic Geography',
      subtopic: 'Coal Distribution',
      year: 2016,
      type: 'prelims',
      qtype: 'direct',
      stem: 'India\'s coal deposits are mainly located in which type of geological formation?',
      options: [
        'Archean rocks',
        'Gondwana rock formations',
        'Tertiary formations',
        'Deccan Trap'
      ],
      correct: 1,
      explanation: 'About 97% of India\'s coal reserves are in Gondwana rock formations (Permian age, ~250–300 million years old), found in river valleys of Damodar, Son, Mahanadi, and Godavari. These are high-quality bituminous and coking coals. Tertiary coal (lignite) is found in Assam, Meghalaya, Jammu & Kashmir, and in the Neyveli lignite deposits in Tamil Nadu, but these form a small fraction of total reserves.'
    },
    // ── Agriculture ────────────────────────────────────────────────────────
    {
      id: 'geo-023',
      topic: 'Agriculture',
      subtopic: 'Kharif Crops',
      year: 2016,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the cultivation of Kharif crops in India in the last five years, consider the following statements:',
      statements: [
        'Area under rice cultivation is the highest.',
        'Area under the cultivation of sugarcane is more than the area under the cultivation of cotton.',
        'Area under cotton cultivation has decreased.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Only Statement 1 is correct. Rice has consistently occupied the largest area under Kharif cultivation in India (around 44 million ha). Statement 2 is incorrect: cotton area (~12 million ha) is significantly larger than sugarcane (~5 million ha). Statement 3 is incorrect: cotton cultivation area has remained broadly stable or slightly increased over the past five years, not decreased.'
    },
    {
      id: 'geo-024',
      topic: 'Agriculture',
      subtopic: 'Crop Seasons',
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following crops:',
      statements: [
        'Cotton',
        'Groundnut',
        'Rice',
        'Wheat'
      ],
      tail: 'Which of the above are Kharif crops?',
      options: ['1 and 4 only', '2 and 3 only', '1, 2 and 3 only', '2, 3 and 4 only'],
      correct: 2,
      explanation: 'Cotton, Groundnut, and Rice are Kharif crops — sown at the beginning of the monsoon (June–July) and harvested in autumn (September–October). Wheat is a Rabi crop — sown in winter (October–November) and harvested in spring (March–April). Wheat requires cool temperatures (10–15°C) at sowing time and warm weather at ripening.'
    },
    {
      id: 'geo-025',
      topic: 'Agriculture',
      subtopic: 'Crop Requirements',
      year: 2013,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which of the following is NOT a Rabi crop?',
      options: [
        'Wheat',
        'Mustard',
        'Jowar',
        'Gram (Chickpea)'
      ],
      correct: 2,
      explanation: 'Jowar (Sorghum) is a Kharif crop sown during the monsoon season. Wheat, mustard (rapeseed), and gram (chickpea) are all Rabi crops, sown in October–November after the monsoon rains and harvested in March–April. Jowar can sometimes be grown as both Kharif and Rabi (post-monsoon), but it is primarily classified as a Kharif crop.'
    },
    {
      id: 'geo-026',
      topic: 'Agriculture',
      subtopic: 'Green Revolution',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The Green Revolution in India contributed to self-sufficiency in food grains.',
        'High-Yielding Variety (HYV) seeds used in the Green Revolution were primarily developed for rice and wheat.',
        'The Green Revolution led to a reduction in the nutritional quality of the Indian diet.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '1 only', '2 and 3 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 2 are correct. India\'s Green Revolution (1960s–70s) enabled food self-sufficiency, especially in wheat (Punjab, Haryana) and rice (Punjab, Andhra Pradesh). HYV seeds from Norman Borlaug\'s programme were primarily bred for wheat and rice. Statement 3 is debatable — while it is argued that the shift to cereals reduced dietary diversity, this is contested and not a straightforward factual claim recognised in standard UPSC material.'
    },
    {
      id: 'geo-027',
      topic: 'Agriculture',
      subtopic: 'Plantation Crops',
      year: 2014,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following states is the leading producer of tea in India?',
      options: [
        'West Bengal',
        'Assam',
        'Kerala',
        'Karnataka'
      ],
      correct: 1,
      explanation: 'Assam is India\'s leading producer of tea, contributing over 50% of India\'s total tea production. Assam tea is grown at low altitudes in the Brahmaputra and Barak valley plains. West Bengal (Darjeeling and Dooars) is the second-largest tea producer known for premium quality. Kerala and Tamil Nadu produce tea in the Nilgiri Hills.'
    },
    // ── World Geography – Additional ────────────────────────────────────────
    {
      id: 'geo-028',
      topic: 'World Geography',
      subtopic: 'Fishing Grounds',
      year: 2013,
      type: 'prelims',
      qtype: 'direct',
      stem: 'The important fishing grounds are found in the regions where:',
      options: [
        'Warm and cold ocean currents meet',
        'Rivers drain into the sea',
        'The continental shelf is deep',
        'Ocean floor is flat and even'
      ],
      correct: 0,
      explanation: 'Major fishing grounds (like the Grand Banks off Newfoundland, where the cold Labrador Current meets the warm Gulf Stream) occur where warm and cold ocean currents meet. This mixing brings nutrients from the ocean floor to the surface, promoting plankton growth — the base of the marine food chain. Shallow continental shelves also help, but the primary reason for rich fishing grounds is the meeting of different temperature currents.'
    },
    {
      id: 'geo-029',
      topic: 'World Geography',
      subtopic: 'Continents and Water Bodies',
      year: 2015,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following pairs of countries is separated by the Strait of Hormuz?',
      options: [
        'Iran and Pakistan',
        'Iran and Oman',
        'Iran and Saudi Arabia',
        'Iran and Kuwait'
      ],
      correct: 1,
      explanation: 'The Strait of Hormuz separates Iran (to the north) from the Sultanate of Oman and the UAE (to the south). It connects the Persian Gulf with the Gulf of Oman and the Arabian Sea. It is the world\'s most strategically important oil transit chokepoint, through which about 20% of the world\'s petroleum supply passes.'
    },
    {
      id: 'geo-030',
      topic: 'World Geography',
      subtopic: 'Panama Canal',
      year: 2012,
      type: 'prelims',
      qtype: 'direct',
      stem: 'The Panama Canal opened in 1914 links:',
      options: [
        'The Pacific Ocean to the Caribbean Sea',
        'The Pacific Ocean to the Atlantic Ocean',
        'The Gulf of Mexico to the Caribbean Sea',
        'The Coral Sea to the Tasman Sea'
      ],
      correct: 1,
      explanation: 'The Panama Canal, completed in 1914, links the Pacific Ocean (Gulf of Panama) on its western end to the Atlantic Ocean (Caribbean Sea) on its eastern end. It eliminates the need to navigate around Cape Horn at the southern tip of South America. The canal is approximately 82 km long and uses a system of locks to raise and lower ships.'
    },
    // ── Indian Physical Geography – Additional ─────────────────────────────
    {
      id: 'geo-031',
      topic: 'Indian Physical Geography',
      subtopic: 'Rivers and Plateaus',
      year: 2020,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following rivers:',
      statements: [
        'Brahmani',
        'Nagavali',
        'Subarnarekha',
        'Vamsadhara'
      ],
      tail: 'Which of the above rise from the Eastern Ghats?',
      options: ['1 and 2 only', '2 and 4 only', '3 and 4 only', '1 and 3 only'],
      correct: 1,
      explanation: 'Nagavali (2) and Vamsadhara (4) both originate in the Eastern Ghats of Odisha. Subarnarekha (3) originates from the Ranchi Plateau (Chota Nagpur) in Jharkhand. Brahmani (1) is formed by the confluence of South Koel and Sankh rivers, also from the Chota Nagpur Plateau. Hence 2 and 4 are correct.'
    },
    {
      id: 'geo-032',
      topic: 'Indian Physical Geography',
      subtopic: 'Western Ghats and Eastern Ghats',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Western Ghats of India, consider the following statements:',
      statements: [
        'The Western Ghats are also known as Sahyadri.',
        'The Anamudi is the highest peak of the Western Ghats.',
        'Rivers such as Godavari, Krishna, and Cauvery originate from the Western Ghats.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three statements are correct. The Western Ghats are also called Sahyadri in Maharashtra. Anamudi in Kerala at 2,695 m is the highest peak of the Western Ghats and of peninsular India. Rivers Godavari, Krishna, and Cauvery all originate from the Western Ghats and flow eastward into the Bay of Bengal.'
    },
    // ── Soils – Additional ─────────────────────────────────────────────────
    {
      id: 'geo-033',
      topic: 'Soils',
      subtopic: 'Alluvial Soils',
      year: 2013,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about alluvial soils of India:',
      statements: [
        'Khadar is the older alluvium found on higher grounds away from rivers.',
        'Bhangar contains kankar (lime nodules) and is more sandy.',
        'Alluvial soils are found mainly in the Indo-Gangetic and Brahmaputra plains.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 1,
      explanation: 'Only Statement 3 is correct. Alluvial soils (the most widespread and agriculturally important soils in India) are found mainly in the Indo-Gangetic-Brahmaputra plains. Statements 1 and 2 have the definitions reversed: Bhangar is older alluvium found on higher terrace ground, contains lime nodules (kankar), and is coarser. Khadar is newer, finer alluvium deposited by floods on lower floodplains, renewed periodically and more fertile.'
    },
    {
      id: 'geo-034',
      topic: 'Economic Geography',
      subtopic: 'Industries',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following industrial clusters:',
      statements: [
        'Textile industry — Ahmedabad and Surat (Gujarat)',
        'Iron and Steel industry — Jamshedpur and Bhilai',
        'Software/IT industry — Bengaluru and Hyderabad'
      ],
      tail: 'Which of the above pairs is/are correctly matched?',
      options: ['1 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three pairs are correctly matched. Ahmedabad and Surat are major centres of the cotton textile industry. Jamshedpur (TISCO/Tata Steel) and Bhilai (SAIL) are key Iron & Steel hubs located near coal and iron ore deposits. Bengaluru (Electronics City) and Hyderabad (HITEC City) are India\'s foremost IT/software clusters.'
    },
    // ── Monsoon – Additional ───────────────────────────────────────────────
    {
      id: 'geo-035',
      topic: 'Monsoon',
      subtopic: 'Retreating Monsoon',
      year: 2018,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which of the following states receives rainfall mainly during the retreating (North-East) monsoon?',
      options: [
        'Assam and West Bengal',
        'Kerala and Karnataka',
        'Tamil Nadu and coastal Andhra Pradesh',
        'Rajasthan and Gujarat'
      ],
      correct: 2,
      explanation: 'Tamil Nadu and coastal Andhra Pradesh receive most of their annual rainfall from the North-East (retreating) monsoon (October–December). The Bay of Bengal branch of the South-West monsoon has already lost moisture by the time it reaches Tamil Nadu, so the state depends on the North-East monsoon for 60–70% of its rainfall. This is why Chennai and other coastal areas often receive heavy rains in October–November.'
    },
    {
      id: 'geo-036',
      topic: 'Indian Physical Geography',
      subtopic: 'Coastal Features',
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The Lakshadweep Islands are of coral origin.',
        'The Andaman and Nicobar Islands are of volcanic origin.',
        'The Andaman and Nicobar Islands form a part of the Himalayan mountain chain.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '1 only', '2 and 3 only', '1, 2 and 3'],
      correct: 1,
      explanation: 'Only Statement 1 is correct. Lakshadweep is a group of coral atolls and reefs in the Arabian Sea. Statement 2 is incorrect: the Andaman and Nicobar Islands are not of volcanic origin in the broad sense — they are structurally connected to the folded mountains of Myanmar and are primarily sedimentary in origin, though Barren Island has an active volcano. Statement 3 is incorrect: they are an extension of the Arakan Yoma mountains of Myanmar, not the Himalayas.'
    },
    // ── Agriculture – Additional ───────────────────────────────────────────
    {
      id: 'geo-037',
      topic: 'Agriculture',
      subtopic: 'Soil and Crop Suitability',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'With reference to the cultivation of coffee in India, which of the following statements is/are correct?',
      options: [
        'Coffee is a Kharif crop requiring hot, humid conditions and heavy rainfall.',
        'India produces mainly Arabica and Robusta varieties of coffee.',
        'India exports almost all of its coffee production.',
        'Coffee in India is mainly grown in the Eastern Ghats.'
      ],
      correct: 1,
      explanation: 'India produces mainly two varieties: Arabica (grown at higher altitudes, more flavourful) and Robusta (grown at lower altitudes, bitter). India is one of the few countries producing shade-grown coffee. About 65–70% of India\'s coffee is exported. Statement 3 is too absolute ("almost all") and hence incorrect. Coffee is grown predominantly in the Western Ghats (Karnataka, Kerala, Tamil Nadu), not the Eastern Ghats.'
    },
    {
      id: 'geo-038',
      topic: 'Agriculture',
      subtopic: 'Irrigation',
      year: 2016,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The largest irrigated area in India is in Uttar Pradesh.',
        'India uses drip irrigation predominantly in sugarcane and cotton crops.',
        'Micro-irrigation helps in reducing the use of fertilisers.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'],
      correct: 1,
      explanation: 'Statements 1 and 3 are correct. Uttar Pradesh has the largest net irrigated area in India, primarily via canal and groundwater irrigation. Micro-irrigation (drip and sprinkler) significantly reduces fertiliser use because it delivers water and fertiliser (fertigation) directly to the root zone, minimising wastage. Statement 2 is partially incorrect — while drip irrigation is promoted for sugarcane and cotton under various government schemes, microirrigation has expanded across many crops including fruits, vegetables, and plantations.'
    },
    {
      id: 'geo-039',
      topic: 'Indian Physical Geography',
      subtopic: 'Peninsular Drainage',
      year: 2019,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following rivers does NOT form a delta at its mouth?',
      options: [
        'Cauvery',
        'Mahanadi',
        'Tapti',
        'Krishna'
      ],
      correct: 2,
      explanation: 'The Tapti (Tapi) River does NOT form a delta; it forms an estuary at its mouth near Surat. This is because the river has a fast current close to the sea, and the coastal conditions are unsuitable for delta formation. The Cauvery, Mahanadi, and Krishna all form deltas on the east coast where they drain into the Bay of Bengal.'
    },
    {
      id: 'geo-040',
      topic: 'Indian Physical Geography',
      subtopic: 'Deccan Plateau',
      year: 2016,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about the Deccan Plateau:',
      statements: [
        'It is bounded in the north by the Satpura and Vindhya ranges.',
        'The plateau slopes generally from east to west.',
        'The major rivers of the Deccan Plateau flow eastward into the Bay of Bengal.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 3 only', '2 only', '1 and 2 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 3 are correct. The Deccan Plateau is bounded in the north by the Satpura and Vindhya ranges. The major rivers — Godavari, Krishna, Cauvery, Mahanadi — flow from west to east, draining into the Bay of Bengal. Statement 2 is incorrect: the Deccan Plateau slopes generally from west to east (not east to west), which is why rivers flow eastward. The Western Ghats form the high western rim of the plateau.'
    },
    {
      id: 'geo-041',
      topic: 'Indian Rivers',
      subtopic: 'Indus System',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following is the correct sequence of rivers from north to south?',
      options: [
        'Ravi — Beas — Sutlej — Chenab',
        'Chenab — Ravi — Beas — Sutlej',
        'Beas — Ravi — Chenab — Sutlej',
        'Ravi — Chenab — Beas — Sutlej'
      ],
      correct: 1,
      explanation: 'From north to south in the Punjab plains: Chenab (northernmost, originates in the Himalayas near Lahaul), then Ravi, then Beas, and Sutlej (southernmost). All are left-bank tributaries of the Indus. The Indus Waters Treaty (1960) divided these rivers — Pakistan gets Indus, Jhelum, Chenab; India gets Ravi, Beas, Sutlej.'
    },
    {
      id: 'geo-042',
      topic: 'World Geography',
      subtopic: 'Major Deserts',
      year: 2018,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following is the largest desert in the world?',
      options: [
        'Sahara',
        'Arabian',
        'Gobi',
        'Antarctic'
      ],
      correct: 3,
      explanation: 'The Antarctic Desert is the largest desert in the world at approximately 14.2 million sq km. The Sahara (9.2 million sq km) is the largest HOT desert, and this distinction is important in UPSC. Antarctica qualifies as a desert because it receives very little precipitation (< 200 mm per year in its interior). The Gobi (~1.3 million sq km) and Arabian (~2.3 million sq km) are much smaller.'
    },
    // ── Economic Geography – Additional ────────────────────────────────────
    {
      id: 'geo-043',
      topic: 'Economic Geography',
      subtopic: 'Nuclear Energy',
      year: 2021,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following is NOT a nuclear power plant in India?',
      options: [
        'Kudankulam',
        'Kaiga',
        'Narora',
        'Talcher'
      ],
      correct: 3,
      explanation: 'Talcher (Odisha) is a major thermal power station (coal-based), not a nuclear plant. India\'s nuclear power plants include: Tarapur (Maharashtra), Rawatbhata (Rajasthan), Kalpakkam (Tamil Nadu), Narora (Uttar Pradesh), Kakrapar (Gujarat), Kaiga (Karnataka), Kudankulam (Tamil Nadu), and Gorakhpur (Haryana, under construction). Nuclear Power Corporation of India Limited (NPCIL) operates these.'
    },
    {
      id: 'geo-044',
      topic: 'Indian Physical Geography',
      subtopic: 'Mountain Passes',
      year: 2020,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following pairs:',
      statements: [
        'Nathu La — Sikkim',
        'Rohtang — Uttarakhand',
        'Lipulekh — Uttarakhand'
      ],
      tail: 'Which of the above pairs is/are correctly matched?',
      options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'],
      correct: 1,
      explanation: 'Pairs 1 and 3 are correctly matched. Nathu La is a mountain pass in Sikkim connecting Gangtok with China\'s Tibet. Lipulekh is a high-altitude pass in Uttarakhand (Pithoragarh district) on the tri-junction of India, Nepal, and China. Pair 2 is incorrect: Rohtang Pass is in Himachal Pradesh (not Uttarakhand), connecting Manali in the Kullu Valley with the Lahaul and Spiti valleys.'
    },
    {
      id: 'geo-045',
      topic: 'Agriculture',
      subtopic: 'Fisheries',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which state has the highest fish production in India?',
      options: [
        'Andhra Pradesh',
        'West Bengal',
        'Kerala',
        'Maharashtra'
      ],
      correct: 0,
      explanation: 'Andhra Pradesh is the leading fish-producing state in India, contributing significantly to both inland (freshwater) and marine fish production. The state is known for aquaculture — shrimp farming and freshwater fish cultivation in districts like Krishna, Guntur, and West Godavari. India is one of the largest fish-producing countries in the world, and Andhra Pradesh consistently ranks first in total fish production.'
    },
    {
      id: 'geo-046',
      topic: 'Natural Vegetation and Forest Types',
      subtopic: 'Equatorial Forests',
      year: 2012,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Which of the following is/are unique characteristic/characteristics of equatorial forests?',
      statements: [
        'Presence of tall, closely set trees with crowns forming a continuous canopy',
        'Coexistence of a large number of species',
        'Presence of numerous varieties of epiphytes'
      ],
      tail: 'Select the correct answer using the codes given below.',
      options: ['1 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three are unique characteristics of equatorial (tropical rainforest) forests. They have: (1) tall, closely-set trees (30–60 m) with canopy closing out sunlight; (2) extraordinary biodiversity with hundreds of species per hectare; (3) a large variety of epiphytes (plants like orchids, bromeliads, ferns growing on other plants) because competition for sunlight is intense. These forests occur within 5°–10° of the equator with rainfall > 200 cm and no dry season.'
    },
    {
      id: 'geo-047',
      topic: 'Monsoon',
      subtopic: 'Jet Streams',
      year: 2019,
      type: 'prelims',
      qtype: 'direct',
      stem: 'The onset of the South-West Monsoon over the Indian subcontinent is related to:',
      options: [
        'Formation of a low-pressure area over the Thar Desert in May-June',
        'The withdrawal of the Western Disturbances from the plains',
        'The southward shift of the Inter-Tropical Convergence Zone',
        'The strengthening of the subtropical jet stream'
      ],
      correct: 0,
      explanation: 'The monsoon onset is primarily triggered by the formation of an intense low-pressure area (thermal low) over the Thar Desert (Rajasthan) and North-West India in May–June, caused by extreme heating of the landmass. This draws moisture-laden winds from the Indian Ocean. The South-West Monsoon typically arrives in Kerala by June 1 and progressively advances northward. The ITCZ shifts northward (not southward) during summer to bring the monsoon.'
    },
    {
      id: 'geo-048',
      topic: 'World Geography',
      subtopic: 'International Date Line',
      year: 2016,
      type: 'prelims',
      qtype: 'direct',
      stem: 'What is the most appropriate reason for the International Date Line (IDL) not following the 180° meridian strictly?',
      options: [
        'To avoid splitting a country between two calendar days',
        'To ensure maximum daylight hours for island nations',
        'To follow the direction of ocean currents',
        'To match the Earth\'s magnetic field lines'
      ],
      correct: 0,
      explanation: 'The IDL deviates from 180° to avoid splitting countries and island groups between two different calendar days. For example, it bends around Fiji, Kiribati, and Samoa to keep these nations in a single calendar day. If the IDL followed exactly the 180° meridian, it would cut through countries and islands, causing administrative confusion with different parts of the same nation having different dates.'
    },
    {
      id: 'geo-049',
      topic: 'Indian Physical Geography',
      subtopic: 'Brahmaputra River',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Brahmaputra river, consider the following statements:',
      statements: [
        'It rises in the Manasarovar Lake.',
        'It flows through the gorge formed in the Himalayas before entering Arunachal Pradesh.',
        'Majuli, said to be the largest river island in the world, is located in the Brahmaputra.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 3 only', '2 and 3 only', '1 and 2 only', '1, 2 and 3'],
      correct: 1,
      explanation: 'Statements 2 and 3 are correct. The Brahmaputra cuts through the Himalayas via a spectacular gorge (one of the deepest in the world) before entering Arunachal Pradesh — this is an antecedent drainage pattern. Majuli in Assam is recognised as one of the world\'s largest river islands (though its area has shrunk due to erosion). Statement 1 is incorrect: the Brahmaputra (Tsangpo in Tibet) rises from the Angsi Glacier near Chemayungdung, not from Manasarovar Lake.'
    },
    {
      id: 'geo-050',
      topic: 'Natural Vegetation and Forest Types',
      subtopic: 'Mangroves',
      year: 2020,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'Mangrove forests can survive in areas subject to regular tidal floods.',
        'The Sundarbans is the largest mangrove forest in the world.',
        'Mangroves are found mainly along the eastern coast of India.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '1 only', '2 and 3 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 2 are correct. Mangroves are halophytes (salt-tolerant plants) that thrive in inter-tidal zones subject to regular tidal flooding. The Sundarbans in the Ganga-Brahmaputra delta (India-Bangladesh) is the world\'s largest mangrove forest. Statement 3 is incorrect: significant mangrove cover exists on both coasts — the Sundarbans (West Bengal), Bhitarkanika (Odisha) on the east coast, and mangroves in Gujarat, Maharashtra, Goa, and Kerala on the west coast.'
    }
  ],
  'history-culture': [],
  environment: [],
  'science-tech': [],
  'international-relations': [],
  society: [],
  ethics: [],
  security: [],
  'general-science': [],
  'disaster-management': []
};
