// Fact-checked & expanded — Economy (eco-001 to eco-065)
// Verified via WebSearch: rbi.org.in, pib.gov.in, prsindia.org, wto.org, worldbank.org, sebi.gov.in
// Date: April 2026

module.exports = [
  // ── National Income ──────────────────────────────────────────────────────
  {
    id: 'eco-001',
    topic: 'National Income',
    year: 2014,
    type: 'prelims',
    qtype: 'direct',
    stem: 'Increase in absolute and per capita real GNP do not connote a higher level of economic development, if',
    options: [
      'Industrial output fails to keep pace with agricultural output',
      'Agricultural output fails to keep pace with industrial output',
      'Poverty and unemployment increase',
      'Imports grow faster than exports'
    ],
    correct: 2,
    explanation: 'Economic development is a broader concept than mere GNP growth — it requires reduction in poverty, unemployment, and inequality alongside increases in national income. GNP growth can reflect income gains concentrated among a small elite while the majority remain poor and unemployed, meaning growth has not been inclusive. If poverty and unemployment increase simultaneously with rising GNP, the benefits of growth are not percolating to the population, and this does not constitute true development. Options A and B relate to structural composition of growth and are not directly linked to the development–growth distinction. Option D (imports exceeding exports) affects the trade balance but does not by itself negate development. UPSC tests the Amartya Sen/HDI-framework distinction: growth (quantitative) versus development (qualitative, multidimensional).'
  },
  {
    id: 'eco-002',
    topic: 'National Income',
    year: 2016,
    type: 'prelims',
    qtype: 'direct',
    stem: 'Which of the following constitute Capital Account in India\'s Balance of Payments?',
    options: [
      'Foreign Loans, Foreign Direct Investment, Portfolio Investment and Banking Capital',
      'Foreign Loans, Foreign Direct Investment, Private Remittances and Tourism',
      'Foreign Direct Investment, Portfolio Investment and Trade Balance',
      'Private Remittances, Portfolio Investment and Banking Capital'
    ],
    correct: 0,
    explanation: 'India\'s Capital Account in the Balance of Payments (BoP) includes Foreign Loans (ECBs, NRI deposits), Foreign Direct Investment (FDI), Foreign Portfolio Investment (FPI), and Banking Capital (cross-border flows in bank assets and liabilities). Private remittances and tourism receipts are classified under the Current Account (transfers sub-account and invisibles respectively), making Option B incorrect. The Trade Balance (exports minus imports of goods) is the Current Account\'s merchandise component, not a Capital Account item — ruling out Option C. Option D mixes a Current Account item (private remittances) with Capital Account items. The distinction between Capital and Current Accounts is a frequently tested UPSC concept; capital flows involve changes in ownership of foreign assets/liabilities, while current flows do not.'
  },
  {
    id: 'eco-003',
    topic: 'National Income',
    year: 2020,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Indian economy, consider the following statements:',
    statements: [
      'An increase in the Nominal Effective Exchange Rate (NEER) indicates the appreciation of the rupee.',
      'An increase in the Real Effective Exchange Rate (REER) indicates an improvement in trade competitiveness.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 0,
    explanation: 'NEER is the weighted average of bilateral nominal exchange rates of the rupee against a basket of currencies of major trading partners — an increase in NEER means the rupee has appreciated in nominal terms against this basket, making Statement 1 correct. REER adjusts NEER by the relative price levels (inflation differentials) between India and its trading partners — an increase in REER indicates that Indian goods have become relatively more expensive compared to trading partners, which represents a loss in trade competitiveness, not an improvement — making Statement 2 incorrect. India\'s REER above 100 (its base value) signals overvaluation, which hurts exports by making them costlier in global markets. RBI publishes both NEER and REER indices for 6-currency and 36-currency baskets. UPSC frequently tests this reversal: higher REER = lower competitiveness, a counterintuitive result that candidates often get wrong.'
  },
  {
    id: 'eco-004',
    topic: 'National Income',
    year: 2021,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'In India, credit rating agencies are regulated by the Reserve Bank of India.',
      'The rating agency popularly known as ICRA is a public limited company.',
      'Brickwork Ratings is an Indian credit rating agency.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correct: 1,
    explanation: 'Credit rating agencies in India are regulated by SEBI (Securities and Exchange Board of India) under the SEBI (Credit Rating Agencies) Regulations, 1999 — not by RBI — making Statement 1 incorrect. ICRA Limited (formerly Investment Information and Credit Rating Agency of India) is a public limited company listed on both BSE and NSE, making Statement 2 correct. Brickwork Ratings India Pvt. Ltd. is a registered credit rating agency in India, established in 2007 and promoted by Canara Bank, and is registered with SEBI — making Statement 3 correct. Currently, there are seven SEBI-registered credit rating agencies in India: CRISIL, ICRA, CARE, India Ratings, Brickwork, SMERA, and Infomerics. The distinction between SEBI regulation (capital market instruments) and RBI oversight (banks) is a commonly tested UPSC point.'
  },
  {
    id: 'eco-005',
    topic: 'National Income',
    year: 2023,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'India accounts for 3.5% of global export of goods.',
      'Many local companies and joint ventures in India have become global players.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 1,
    explanation: 'According to WTO\'s World Trade Statistical Review 2023, India\'s share in global merchandise exports was approximately 1.8% in 2022, significantly below the 3.5% figure stated in Statement 1 — making it incorrect. India ranked 18th in merchandise exports globally in 2023, with a target to raise its share but not yet reaching even 2.5%. Statement 2 is broadly correct: Indian companies such as Tata Group, Infosys, Wipro, Sun Pharmaceutical, Bajaj Auto, and various JVs have established significant global footprints in software, pharmaceuticals, automotive, and other sectors. India\'s services exports (4.4% of global total in 2022) are notably higher than its goods export share. UPSC 2023 tested data literacy — candidates must distinguish between India\'s stronger services export share and the lower goods export share.'
  },
  // ── Budget & Fiscal Policy ────────────────────────────────────────────────
  {
    id: 'eco-006',
    topic: 'Budget',
    year: 2015,
    type: 'prelims',
    qtype: 'direct',
    stem: 'Which one of the following is likely to be the most inflationary in its effect?',
    options: [
      'Repayment of public debt',
      'Borrowing from the public to finance a budget deficit',
      'Borrowing from banks to finance a budget deficit',
      'Creation of new money to finance a budget deficit'
    ],
    correct: 3,
    explanation: 'Creation of new money to finance a budget deficit — known as monetisation of the deficit or "money financing" — directly increases the money supply without any corresponding increase in the supply of goods and services, producing the highest inflationary effect. When the government borrows from the public (Option B), it transfers purchasing power from savers to the government with no net addition to total money supply, making it the least inflationary option. Borrowing from banks (Option C) can be inflationary if banks expand credit, but the effect is less direct than direct money creation. Repayment of public debt (Option A) actually reduces government spending, having a slightly contractionary or neutral effect. The ranking of inflationary impact (highest to lowest) is: D > C > B > A, a standard macroeconomic question on deficit financing methods.'
  },
  {
    id: 'eco-007',
    topic: 'Budget',
    year: 2017,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'The Fiscal Responsibility and Budget Management (FRBM) Review Committee Report has recommended a debt-to-GDP ratio of 60% for the General (Central and State) Government by 2023.',
      'The Central Government has a debt-to-GDP ratio of 50% and all State Governments taken together have a debt-to-GDP ratio of 25% at present.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 0,
    explanation: 'The N.K. Singh Committee (FRBM Review Committee, 2017) recommended a combined General Government debt-to-GDP ratio of 60% by FY2023, comprising 40% for the Central Government and 20% for State Governments combined — this is consistent with fiscal rule norms followed in most countries and Statement 1 is correct. Statement 2 presents incorrect specific ratios: at the time (2017), the Central Government\'s debt-to-GDP was closer to 45-48% and the combined state government debt was around 22-24% of GDP, not the figures stated. The FRBM Review also recommended using debt as the primary fiscal anchor (replacing the fiscal deficit target) and proposed an escape clause for deviations during natural disasters or national security emergencies. The NK Singh Committee report is a standard reference in UPSC economy questions on fiscal consolidation.'
  },
  {
    id: 'eco-008',
    topic: 'Budget',
    year: 2017,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following actions by the Government:',
    statements: [
      'Cutting the tax rates',
      'Increasing the government spending',
      'Abolishing the subsidies'
    ],
    tail: 'In the context of economic recession, which of the above actions can be considered a part of the "fiscal stimulus" package?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correct: 0,
    explanation: 'Fiscal stimulus refers to expansionary fiscal policy measures designed to boost aggregate demand during an economic downturn or recession. Cutting tax rates (Action 1) leaves more disposable income with households and businesses, boosting consumption and investment demand. Increasing government spending (Action 2) directly injects demand into the economy through public expenditure on infrastructure, services, and transfers. Abolishing subsidies (Action 3) reduces household income and purchasing power, functioning as a contractionary measure that reduces aggregate demand — it is the opposite of stimulus and hence not part of a stimulus package. The 2008-09 Global Financial Crisis fiscal stimulus in India included tax cuts and increased government spending on infrastructure (NREGA, PMGSY), illustrating the practical application. UPSC tests the distinction between expansionary (stimulus) and contractionary fiscal tools.'
  },
  {
    id: 'eco-009',
    topic: 'Budget',
    year: 2016,
    type: 'prelims',
    qtype: 'direct',
    stem: 'The terms "Marginal Standing Facility Rate" and "Net Demand and Time Liabilities", sometimes appearing in news, are used in relation to',
    options: [
      'Banking operations',
      'Communication networking',
      'Military strategies',
      'Supply and demand of agricultural products'
    ],
    correct: 0,
    explanation: 'The Marginal Standing Facility (MSF) Rate is the interest rate at which scheduled commercial banks can borrow overnight funds from RBI by pledging government securities, acting as an emergency liquidity window set 25 basis points above the repo rate. Net Demand and Time Liabilities (NDTL) is the sum of a bank\'s demand liabilities (savings accounts, current accounts, demand certificates of deposit) and time liabilities (fixed deposits, recurring deposits) — it is the base on which CRR (Cash Reserve Ratio) and SLR (Statutory Liquidity Ratio) are calculated. Both are core monetary policy and banking regulation concepts administered by RBI under the RBI Act, 1934 and the Banking Regulation Act, 1949. The MSF was introduced by RBI in its 2011-12 monetary policy as part of the new Liquidity Adjustment Facility (LAF) framework. UPSC tests these banking terminology questions to distinguish candidates with deep monetary policy knowledge.'
  },
  {
    id: 'eco-010',
    topic: 'Budget',
    year: 2018,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'The primary deficit = Fiscal deficit − Interest payments.',
      'A revenue deficit means total revenue expenditure exceeds total revenue receipts.',
      'Zero primary deficit means the government has to borrow only to meet interest payments on existing debt.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correct: 3,
    explanation: 'All three are correct standard definitions of fiscal deficit concepts. Primary Deficit = Fiscal Deficit − Net Interest Payments; it shows the gap between government expenditure (excluding interest) and receipts, indicating how much the government needs to borrow for current operations beyond servicing past debt (Statement 1 correct). Revenue Deficit = Total Revenue Expenditure − Total Revenue Receipts; a positive revenue deficit means the government must borrow even to meet its routine, non-capital expenditure — a sign of fiscal stress (Statement 2 correct). Zero primary deficit means Primary Deficit = 0, so Fiscal Deficit = Net Interest Payments; the government only borrows to pay interest on its accumulated debt and not for fresh spending, which is considered a healthier fiscal position (Statement 3 correct). These three deficits — revenue, fiscal, and primary — form the "trilogy of deficits" and are fundamental FRBM Act (2003) compliance metrics. India targets reducing the fiscal deficit to 4.5% of GDP by FY2025-26 as per the revised FRBM glide path.'
  },
  {
    id: 'eco-011',
    topic: 'Budget',
    year: 2022,
    type: 'prelims',
    qtype: 'direct',
    stem: 'With reference to "Sovereign Green Bonds" in India, which of the following statements is correct?',
    options: [
      'The proceeds will be used only for funding renewable energy projects.',
      'The government will issue these bonds in foreign currency only.',
      'The proceeds will be deployed in public sector projects to reduce the carbon intensity of the economy.',
      'The bonds will be issued only to foreign institutional investors.'
    ],
    correct: 2,
    explanation: 'India\'s Sovereign Green Bonds were announced in Union Budget 2022-23 and the framework was approved in November 2022; the proceeds are earmarked for public sector projects that reduce the carbon intensity of the economy — explicitly Option C. The eligible project categories are broader than just renewable energy (Option A being wrong): they include sustainable water and waste management, energy efficiency, green buildings, climate change adaptation, and biodiversity conservation. The bonds have been issued in Indian Rupees, not exclusively in foreign currency (Option B wrong), with the first tranche of ₹8,000 crore issued on 25 January 2023 and a second tranche in February 2023. Both domestic and foreign investors can participate — they are not restricted to FIIs (Option D wrong). India became one of the few emerging markets to issue Sovereign Green Bonds in its own currency, reducing exchange rate risk for the government.'
  },
  {
    id: 'eco-012',
    topic: 'Budget',
    year: 2022,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'The "Vivad se Vishwas" scheme was launched to reduce direct tax litigation.',
      'Under this scheme, taxpayers must pay the disputed tax amount in full along with full interest and penalty to settle disputes.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 0,
    explanation: 'The Direct Tax Vivad se Vishwas (DTVSV) Act, 2020 was enacted on 17 March 2020 to reduce the massive backlog of direct tax litigation pending before appellate forums including ITAT, High Courts, and the Supreme Court — Statement 1 is correct. Under the scheme, taxpayers were required to pay only the disputed tax amount — interest and penalty were fully waived if payment was made by 31 March 2020, and only a partial additional amount was applicable for late payments — making Statement 2 incorrect (the scheme does not require payment of full interest and penalty). The scheme covered disputes pending as of 31 January 2020, and the deadline was extended multiple times up to March 2021. A new DTVSV Scheme 2024 was also launched for disputes arising after 31 January 2020. This type of tax amnesty scheme is examined in UPSC as a direct tax policy instrument to reduce litigation-related revenue uncertainty.'
  },
  // ── Banking & Monetary Policy ─────────────────────────────────────────────
  {
    id: 'eco-013',
    topic: 'Banking',
    year: 2015,
    type: 'prelims',
    qtype: 'direct',
    stem: 'When the Reserve Bank of India reduces the Statutory Liquidity Ratio by 50 basis points, which of the following is likely to happen?',
    options: [
      'India\'s GDP growth rate increases drastically',
      'Foreign Institutional Investors may bring more capital into our country',
      'Scheduled Commercial Banks may cut their lending rates',
      'It may drastically reduce the liquidity to the banking system'
    ],
    correct: 2,
    explanation: 'Statutory Liquidity Ratio (SLR) is the proportion of NDTL (Net Demand and Time Liabilities) that banks must maintain in liquid assets like government securities; when RBI reduces SLR, banks are required to hold less in mandatory liquid assets, freeing up more funds for lending. With greater lendable resources available, competition among banks to deploy funds can lead banks to reduce lending rates, making credit cheaper for borrowers (Option C correct). Option D is incorrect — reducing SLR increases, not reduces, the liquidity available to the banking system for lending. Option A (drastic GDP growth) is an overstatement; monetary easing has gradual transmission effects. Option B (FII inflows) is not a direct or primary consequence of SLR reduction — FII flows are driven more by interest rate differentials, exchange rate expectations, and global risk appetite. SLR was 18% as of early 2026, having been reduced substantially from its peak of 38.5% in the 1990s.'
  },
  {
    id: 'eco-014',
    topic: 'Banking',
    year: 2016,
    type: 'prelims',
    qtype: 'direct',
    stem: 'What is the purpose of the Marginal Cost of Funds based Lending Rate (MCLR) announced by RBI?',
    options: [
      'These are measures to enhance liquidity in the banking system',
      'To bring more transparency in the process of fixing interest rates on advances by banks',
      'To help small borrowers get loans at a cheaper rate of interest',
      'These are guidelines related to the size of loans to various sectors of the economy'
    ],
    correct: 1,
    explanation: 'RBI introduced the MCLR framework from 1 April 2016 to replace the earlier Base Rate system, with the primary purpose of making the lending rate determination process more transparent and ensuring faster transmission of monetary policy changes to actual loan rates. Under the Base Rate system, banks had wide discretion in setting lending rates, leading to slow and incomplete transmission of RBI\'s repo rate cuts to borrowers; MCLR standardised the methodology using the marginal (not average) cost of funds. Studies show that during the MCLR regime, a 100 basis point repo rate change resulted in 26-47 basis points transmission to lending rates, compared to only 11-19 basis points under the Base Rate regime — a significant improvement. MCLR is not a liquidity measure (Option A), not specifically targeting small borrowers (Option C, though they benefit), and not about loan size sectoral guidelines (Option D). From October 2019, RBI further mandated that most new retail and MSME loans be linked to external benchmarks (repo rate), superseding MCLR for new loans.'
  },
  {
    id: 'eco-015',
    topic: 'Banking',
    year: 2019,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Indian economy, consider the following statements:',
    statements: [
      'Monetary Policy Committee (MPC) decides the repo rate.',
      'Government of India sets the inflation target for MPC.',
      'In India, RBI is the lender of last resort to the commercial banks.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'],
    correct: 3,
    explanation: 'All three statements are correct. The Monetary Policy Committee (MPC), constituted under Section 45ZB of the amended RBI Act, 1934 (amended by Finance Act 2016), decides the policy repo rate by majority vote — the Governor has a casting vote in case of a tie (Statement 1 correct). The Central Government of India, in consultation with RBI, sets the inflation target — currently 4% CPI (±2% band) notified for the period April 2021 to March 2026, and renewed for April 2026 to March 2031 (Statement 2 correct). RBI acts as the lender of last resort (LOLR) to scheduled commercial banks, providing emergency liquidity support against collateral to prevent bank failures and systemic crises — this is a classical central banking function (Statement 3 correct). A key UPSC distinction: the MPC decides the repo rate, but the inflation target itself is set by the government — the two institutions have distinct but complementary roles in India\'s inflation targeting framework.'
  },
  {
    id: 'eco-016',
    topic: 'Banking',
    year: 2017,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements about the Monetary Policy Committee (MPC):',
    statements: [
      'The MPC consists of six members — three from the RBI and three nominated by the Central Government.',
      'The RBI Governor is the ex-officio Chairperson of the MPC.',
      'The MPC decides the policy interest rates to maintain price stability.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correct: 3,
    explanation: 'All three statements are correct as per Section 45ZB of the RBI Act, 1934 as amended by the Finance Act 2016. The MPC has six members: three from RBI (the Governor as ex-officio Chair, the Deputy Governor in charge of monetary policy, and one RBI-nominated officer) and three external members appointed by the Central Government from experts in economics, banking, or finance for a 4-year non-renewable term (Statement 1 correct). The RBI Governor is the ex-officio Chairperson of the MPC with a casting vote in case of a tie (Statement 2 correct). The MPC\'s primary mandate is to maintain price stability (CPI inflation at 4% ±2%) while keeping in mind the objective of growth — it achieves this by deciding the policy repo rate (Statement 3 correct). The MPC meets at least four times a year, and its decisions are taken by majority vote of members present and voting. UPSC 2017 tested this newly established institution immediately after its constitution in 2016.'
  },
  {
    id: 'eco-017',
    topic: 'Banking',
    year: 2019,
    type: 'prelims',
    qtype: 'direct',
    stem: 'With reference to the Indian economy, what is/are the purpose/purposes of "Statutory Reserve Requirements"?',
    options: [
      'To enable the Central Bank to control the amount of advances the banks can create',
      'To make the people\'s deposits with banks safe and liquid',
      'To prevent commercial banks from making excessive profits',
      'To force banks to have sufficient vault cash for day-to-day requirements'
    ],
    correct: 0,
    explanation: 'Statutory Reserve Requirements — comprising the Cash Reserve Ratio (CRR) and Statutory Liquidity Ratio (SLR) — are monetary policy instruments that enable RBI to control the credit-creation capacity of banks and thereby regulate the money supply and credit in the economy (Option A correct). By mandating that banks hold a portion of their NDTL in the form of cash with RBI (CRR) or liquid government securities (SLR), RBI can contract or expand the credit multiplier — raising reserves contracts credit; lowering them expands it. Option B (protecting deposits) is a purpose served by deposit insurance (DICGC), not statutory reserves. Option C (preventing excessive profits) is not a stated objective of CRR/SLR. Option D (vault cash requirements) is addressed by the CRR component but is a narrow description that misses the primary macroeconomic purpose of monetary control. Current CRR is 4% and SLR is 18% (as of early 2026).'
  },
  {
    id: 'eco-018',
    topic: 'Banking',
    year: 2020,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Indian economy, consider the following statements:',
    statements: [
      'Commercial Paper is a short-term unsecured promissory note.',
      'Certificate of Deposit is a long-term instrument issued by the Reserve Bank of India.',
      'Call Money is a short-term finance used for interbank transactions.',
      'Treasury Bills are issued by the Government of India to meet its long-term fiscal needs.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '1 and 3 only', '2, 3 and 4 only', '1, 2, 3 and 4'],
    correct: 1,
    explanation: 'Commercial Paper (CP) is a short-term (7 days to 1 year maturity) unsecured money market instrument in the form of a promissory note issued by corporates to meet short-term working capital needs — Statement 1 is correct. Certificate of Deposit (CD) is issued by scheduled commercial banks and select all-India financial institutions (not by RBI), and is a short-term instrument (7 days to 1 year for banks; 1-3 years for FIs) — Statement 2 is doubly incorrect (wrong issuer, wrong tenure). Call Money is overnight (1 day) to 14-day interbank lending in the money market, used by banks to manage short-term liquidity — Statement 3 is correct. Treasury Bills are short-term government securities with maturities of 91 days, 182 days, and 364 days — they are used to meet the government\'s short-term fiscal needs, not long-term — Statement 4 is incorrect. Long-term government borrowing is done through dated securities (G-secs). Hence 1 and 3 only.'
  },
  {
    id: 'eco-019',
    topic: 'Banking',
    year: 2021,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the "money multiplier" in an economy, which of the following statements is/are correct?',
    statements: [
      'Money multiplier increases with the decrease in the Cash Reserve Ratio.',
      'Money multiplier is the ratio between the reserve money and the broad money.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 0,
    explanation: 'The money multiplier (m) = 1 / reserve ratio (r); as CRR decreases, the reserve ratio falls, making the multiplier larger — banks can lend a greater multiple of their reserves, expanding broad money (M3) — Statement 1 is correct. Statement 2 has the ratio inverted: the money multiplier = Broad Money (M3) / Reserve Money (M0 or High-powered money), not the other way around — Statement 2 is incorrect as stated. Reserve Money (M0) is the RBI\'s balance sheet liability (currency in circulation + bank reserves with RBI); Broad Money (M3) includes M0 plus bank deposits. The credit multiplier mechanism is how central banks amplify or contract liquidity through reserve requirements. India\'s money multiplier has generally ranged between 5-6 in recent years, meaning every ₹1 of reserve money supports approximately ₹5-6 of broad money. UPSC 2021 tested this conceptual distinction about the direction of the ratio.'
  },
  {
    id: 'eco-020',
    topic: 'Banking',
    year: 2022,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Indian economy, consider the following statements:',
    statements: [
      'If the inflation is too high, RBI is likely to buy government bonds.',
      'If the rupee is rapidly depreciating, RBI is likely to sell dollars in the market.',
      'If interest rates in the USA rise, it can attract capital flows out of India.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correct: 1,
    explanation: 'Statement 1 is incorrect: to curb high inflation, RBI conducts Open Market Operations (OMO) by selling government bonds — this absorbs excess liquidity from the system, pushing up interest rates and reducing inflationary pressure; buying bonds would inject liquidity, worsening inflation. Statement 2 is correct: when the rupee depreciates rapidly, RBI intervenes in forex markets by selling US dollars (from its foreign exchange reserves) to increase dollar supply, thereby supporting the rupee. Statement 3 is correct: higher US Federal Reserve interest rates make US assets more attractive relative to Indian assets — global capital (especially "hot money"/carry trade flows) moves out of India to the US seeking higher returns, putting downward pressure on the rupee and Indian financial markets. This was vividly illustrated in 2022 when the Fed\'s aggressive rate hikes caused significant FPI outflows from India. Hence 2 and 3 only.'
  },
  {
    id: 'eco-021',
    topic: 'Banking',
    year: 2018,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to Non-Performing Assets of the banking sector, consider the following statements:',
    statements: [
      'A loan granted for a short duration crop is classified as NPA if interest and/or principal is overdue for two crop seasons.',
      'A loan granted for a long duration crop is classified as NPA if interest and/or principal is overdue for one crop season.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 2,
    explanation: 'Both statements correctly reflect RBI\'s prudential norms for income recognition and asset classification in agricultural advances. For short-duration crops (crop season up to one year), a loan is classified as NPA if principal or interest remains overdue for two crop seasons — recognising that farmers may face a poor season but recover in the next one (Statement 1 correct). For long-duration crops (crop season exceeding one year, such as sugarcane or certain plantation crops), the NPA threshold is one crop season, since recovery periods are longer (Statement 2 correct). These agricultural NPA norms are a deliberate deviation from the standard 90-day overdue rule applied to other loans, reflecting the seasonal and weather-dependent nature of farm incomes. RBI\'s Master Circular on Income Recognition, Asset Classification and Provisioning Pertaining to Advances provides these specific agricultural NPA definitions. UPSC tests the two-season vs. one-season distinction as a data point candidates can easily mix up.'
  },
  {
    id: 'eco-022',
    topic: 'Banking',
    year: 2023,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'The Central Bank Digital Currency (CBDC) is the digital form of currency notes issued by the Reserve Bank of India.',
      'CBDC can be held by individuals and businesses and it is equivalent to holding physical cash.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 2,
    explanation: 'Both statements are correct. The Digital Rupee (e₹), India\'s CBDC, is the digital equivalent of sovereign currency — it is a digital token representing legal tender issued by RBI (Statement 1 correct), as confirmed in RBI\'s Concept Note on CBDC (October 2022) and the PIB press release marking its launch. The e₹-R (Retail CBDC, launched 1 December 2022) can be held by individuals in digital wallets and used for transactions, while e₹-W (Wholesale CBDC, launched 1 November 2022) is for financial institutions; both are equivalent in value to physical currency on a 1:1 basis and do not earn interest (Statement 2 correct). Unlike bank deposits, CBDC is a direct liability of the central bank, not the commercial bank, making it equivalent to holding physical cash in terms of credit risk. India\'s CBDC is distributed through commercial banks (intermediated model) rather than directly by RBI. UPSC 2023 tested this newly launched instrument, and both statements align with RBI\'s official CBDC framework.'
  },
  // ── Inflation ─────────────────────────────────────────────────────────────
  {
    id: 'eco-023',
    topic: 'Inflation',
    year: 2020,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'The weightage of Food in Consumer Price Index (CPI) is higher than that in Wholesale Price Index (WPI).',
      'The WPI does not capture changes in the prices of services, which CPI does.',
      'The Reserve Bank of India has now adopted WPI as its key measure of inflation and to decide on changing the key policy rates.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correct: 0,
    explanation: 'Food items carry approximately 45.86% weight in the combined CPI (base year 2011-12) versus approximately 24.38% in the WPI (base year 2011-12) — making Statement 1 correct and reflecting that the CPI better tracks the consumption basket of households whose expenditure is dominated by food. The WPI covers only goods (primary articles, fuel and power, manufactured products) at the wholesale stage and does not include any services; the CPI covers both goods and services including education, health, transport, and housing, making it a more comprehensive cost-of-living measure (Statement 2 correct). Statement 3 is incorrect: following the Urjit Patel Committee recommendations (2014), RBI formally adopted the Consumer Price Index (CPI-Combined) as the nominal anchor for monetary policy from April 2014 onwards, replacing WPI — RBI now targets CPI inflation at 4% (±2%). Hence 1 and 2 only.'
  },
  {
    id: 'eco-024',
    topic: 'Inflation',
    year: 2015,
    type: 'prelims',
    qtype: 'direct',
    stem: 'If the interest rate is decreased in an economy, it will',
    options: [
      'Decrease the consumption expenditure in the economy',
      'Increase the tax collection of the Government',
      'Increase the investment expenditure in the economy',
      'Increase the total savings in the economy'
    ],
    correct: 2,
    explanation: 'A decrease in interest rates lowers the cost of borrowing, making investment more attractive for firms — cheaper loans encourage businesses to borrow and invest in capital goods, machinery, and expansion, thereby increasing investment expenditure in the economy (Option C correct). Lower interest rates also reduce the return on savings, incentivising households to save less and consume more rather than to save more (making Option D incorrect). Lower rates do not directly reduce consumption — in fact they tend to increase consumption by boosting disposable income through EMI reductions and the wealth effect (making Option A incorrect). Tax collection (Option B) is indirectly affected only if growth increases taxable income, but this is not the immediate primary effect of a rate cut. The Keynesian investment-savings framework underpins this question: interest rate cuts shift investment demand upward along the IS curve, boosting aggregate demand.'
  },
  {
    id: 'eco-025',
    topic: 'Inflation',
    year: 2016,
    type: 'prelims',
    qtype: 'direct',
    stem: 'The Reserve Bank of India\'s directives relating to "Differentiated Bank Licences" aim at',
    options: [
      'Preventing mergers of small regional rural banks',
      'Allowing various categories of banks to perform only specific functions',
      'Promoting financial inclusion',
      'Both allowing specific functions and promoting financial inclusion'
    ],
    correct: 3,
    explanation: 'RBI\'s Differentiated Bank Licence framework (2015) simultaneously serves two objectives: functional specialisation and financial inclusion. Payment Banks can receive deposits (up to ₹2 lakh) and provide payment services but cannot lend, while Small Finance Banks can accept deposits and lend to underserved segments such as small farmers, micro industries, and migrant workers — both represent specialised, limited banking functions (fulfilling Option B). These differentiated banks were designed to bring unbanked and underbanked populations into the formal financial system by offering suitable, simplified products (fulfilling Option C). Since both objectives are served simultaneously, Option D ("Both") is the correct answer. This framework emerged from the Nachiket Mor Committee (2013) recommendations on financial inclusion. The differentiated bank model contrasts with universal banks (SBI, HDFC, etc.) which perform all banking functions. UPSC tested whether candidates recognise the dual-purpose design of this policy.'
  },
  {
    id: 'eco-026',
    topic: 'Inflation',
    year: 2023,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the "Consumer Price Index" (CPI) in India, consider the following statements:',
    statements: [
      'The National Statistical Office (NSO) compiles the CPI for rural and urban areas separately.',
      'The base year for the current CPI series in India is 2011-12.',
      'CPI is compiled on a monthly basis.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correct: 3,
    explanation: 'All three statements are correct. The National Statistical Office (NSO), under the Ministry of Statistics and Programme Implementation (MoSPI), compiles and publishes the CPI-Rural (CPI-R), CPI-Urban (CPI-U), and CPI-Combined (CPI-C) indices separately — enabling analysis of inflation across different population segments (Statement 1 correct). The current CPI series was introduced in January 2011 with the base year 2011-12 = 100, replacing the earlier series with 2004-05 as the base year (Statement 2 correct). CPI data is compiled and released on a monthly basis — NSO releases the monthly CPI data typically around the 12th of the following month (Statement 3 correct). The CPI-Combined serves as the benchmark for RBI\'s inflation targeting (4% ±2%). The prior CPI series (CPI-IW, CPI-AL, CPI-RL) were compiled by Labour Bureau and the earlier series lacked urban-rural decomposition of this granularity.'
  },
  // ── Taxation ──────────────────────────────────────────────────────────────
  {
    id: 'eco-027',
    topic: 'Taxation',
    year: 2017,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Goods and Services Tax (GST), consider the following statements:',
    statements: [
      'It will replace multiple taxes collected by multiple authorities and will thus create a single market in India.',
      'It will subsume certain taxes levied by State Governments.',
      'It is a destination-based tax.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correct: 3,
    explanation: 'All three statements are correct. GST, implemented from 1 July 2017 under the 101st Constitutional Amendment Act (2016), replaced a web of central and state indirect taxes — including Central Excise, Service Tax, VAT, Entry Tax, Entertainment Tax, Octroi, and Luxury Tax — eliminating the cascading tax-on-tax effect and creating a unified national market (Statement 1 correct). It subsumed several state-level taxes including State VAT, entertainment tax (except by local bodies), entry tax, luxury tax, and purchase tax (Statement 2 correct). GST is a destination/consumption-based tax — the revenue from SGST accrues to the state where goods/services are finally consumed, not where they originate — a fundamental shift from the origin-based VAT system (Statement 3 correct). India uses a dual GST structure: CGST (Central) + SGST (State) for intra-state; IGST for inter-state transactions. The GST Council (Article 279A) governs rate-setting and exemptions.'
  },
  {
    id: 'eco-028',
    topic: 'Taxation',
    year: 2018,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Which of the following are exempted from levy under GST?',
    statements: [
      'Cereal grains, hulled',
      'Chicken eggs, cooked',
      'Fish processed and canned',
      'Newspapers containing advertising material'
    ],
    tail: 'Select the correct answer using the code given below:',
    options: ['1, 2 and 4 only', '2 and 3 only', '1, 3 and 4 only', '1, 2, 3 and 4'],
    correct: 0,
    explanation: 'Under GST, cereal grains in hulled form (unpackaged/unbranded) are exempt from GST (nil-rated) — Statement 1 is exempt. Cooked chicken eggs are also nil-rated/exempt under GST — Statement 2 is exempt. Fish processed and canned, however, attracts 5% GST as a value-added processed food product; only fresh or chilled fish is exempt — Statement 3 is not exempt. Newspapers, including those carrying advertising material, are exempt from GST (though the advertising slots themselves attract 5% GST) — Statement 4 is exempt. Hence items 1, 2, and 4 are exempt but item 3 (processed/canned fish) is not, making the answer "1, 2 and 4 only." UPSC 2018 tested detailed knowledge of the GST exemption schedule — the key distinction is that processing transforms exempt goods (fresh fish) into taxable goods (canned fish), representing value addition.'
  },
  {
    id: 'eco-029',
    topic: 'Taxation',
    year: 2016,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Goods and Services Tax (GST) Council, which of the following statements is/are correct?',
    statements: [
      'It shall consist of the Union Finance Minister as the Chairperson.',
      'It shall make recommendations to the Union and States on tax rates, exemptions, and thresholds.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 2,
    explanation: 'Both statements correctly describe the GST Council as established under Article 279A of the Constitution (inserted by the 101st Constitutional Amendment Act, 2016). The Union Finance Minister is the Chairperson; the Union Minister of State (Finance/Revenue) and the Finance/Taxation Minister of each State are members (Statement 1 correct). The GST Council makes recommendations to the Union and the States on goods and services to be taxed or exempted, GST rates and rate bands, threshold turnover limits, principles governing place of supply, special provisions for certain states, and other related matters (Statement 2 correct). Decisions in the GST Council require a three-fourths majority of members present and voting, with the Centre having one-third of total votes and all states together having two-thirds. The Council is a joint democratic decision-making body representing India\'s cooperative federalism in taxation. UPSC 2016 asked this before GST was formally implemented (it was launched in 2017).'
  },
  {
    id: 'eco-030',
    topic: 'Taxation',
    year: 2019,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following taxes:',
    statements: [
      'Corporation tax',
      'Customs duty',
      'Wealth tax',
      'Excise duty'
    ],
    tail: 'Which of the above are direct taxes?',
    options: ['1 and 3 only', '2 and 4 only', '1, 2 and 3 only', '1, 2, 3 and 4'],
    correct: 0,
    explanation: 'Direct taxes are levied directly on the income or wealth of the taxpayer, who bears the burden without passing it on to others. Corporation tax (levied on corporate profits) and Wealth tax (levied on net wealth of individuals — abolished from FY2015-16, replaced by a surcharge, but historically a direct tax) are both direct taxes — Options 1 and 3 are correct. Customs duty is an indirect tax levied on the value of imported or exported goods; the incidence falls on the consumer through higher prices. Excise duty is an indirect tax on domestically produced goods; the burden is passed on to buyers. Hence only Corporation tax (1) and Wealth tax (3) are direct taxes — "1 and 3 only" is the answer. The distinction between direct and indirect taxes hinges on the concept of tax incidence (who ultimately bears the economic burden): direct taxes cannot be shifted; indirect taxes typically can.'
  },
  {
    id: 'eco-031',
    topic: 'Taxation',
    year: 2014,
    type: 'prelims',
    qtype: 'direct',
    stem: 'Which one of the following is not a feature of "Value Added Tax"?',
    options: [
      'It is a multi-point destination-based system of taxation',
      'It is a tax levied on value added at each stage of production',
      'It avoids double taxation',
      'The tax burden ultimately falls on the consumer'
    ],
    correct: 0,
    explanation: 'Value Added Tax (VAT) as implemented in India before GST was an origin-based multi-point tax, not a destination-based one — the "destination-based" principle was a hallmark of GST (from 2017), not VAT. The description in Option A applies to GST, not VAT, making it the NOT-a-feature of VAT. VAT is indeed a multi-point tax levied on value added at each stage of production/distribution through the input tax credit mechanism (Option B correct feature). The input tax credit mechanism in VAT prevents tax cascading (double taxation), as tax is paid only on the value added at each stage (Option C correct feature). VAT is an indirect tax whose burden is ultimately borne by the final consumer through the price (Option D correct feature). India\'s state-level VAT (replaced by GST in 2017) was origin-based: revenue accrued to the producing/originating state rather than the consuming state — a major deficiency that GST\'s destination principle corrected.'
  },
  // ── Agriculture ───────────────────────────────────────────────────────────
  {
    id: 'eco-032',
    topic: 'Agriculture',
    year: 2016,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to \'Pradhan Mantri Fasal Bima Yojana\', consider the following statements:',
    statements: [
      'Under this scheme, farmers will have to pay a uniform premium of two percent for any crop they cultivate in any season of the year.',
      'This scheme covers post-harvest losses arising out of cyclones and unseasonal rains.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 1,
    explanation: 'Statement 1 is incorrect: the premium is not uniform across all seasons — farmers pay a maximum of 2% for Kharif food and oilseed crops, 1.5% for Rabi food and oilseed crops, and up to 5% for annual commercial and horticultural crops; the remaining actuarial premium is borne by state and central governments in a 50:50 ratio (90:10 for North-Eastern states). Statement 2 is correct: PMFBY (launched January 2016, replacing NAIS and MNAIS) provides comprehensive coverage of the crop cycle from pre-sowing to post-harvest, including coverage for post-harvest losses caused by cyclones and unseasonal rains — farmers can claim for losses in the field after harvest for up to 14 days. The scheme is administered by the Ministry of Agriculture and Farmers\' Welfare through empanelled insurance companies. PMFBY is a significant agricultural risk management tool, with premium subsidies making it accessible to small and marginal farmers. Hence 2 only.'
  },
  {
    id: 'eco-033',
    topic: 'Agriculture',
    year: 2019,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Minimum Support Price (MSP) in India, consider the following statements:',
    statements: [
      'MSP is announced by the central government for 25 crops every year.',
      'MSP is fixed at a level which ensures that the market prices will never rise above MSP.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 3,
    explanation: 'Both statements are incorrect. MSP is recommended by the Commission for Agricultural Costs and Prices (CACP) for 23 commodities comprising 7 cereals, 5 pulses, 7 oilseeds, and 4 commercial crops (including sugarcane under FRP); the Cabinet Committee on Economic Affairs (CCEA) approves it — the figure of 25 in Statement 1 is incorrect. Statement 2 fundamentally mischaracterises MSP: it is a minimum floor price — a price below which the government commits to procure from farmers — and does not cap or prevent market prices from rising above it. In fact, market prices frequently exceed MSP during good-demand or low-production periods, which is desirable. MSP is meant to protect farmers from price crashes, not to suppress prices. The CACP bases MSP recommendations on A2+FL cost (actual paid-out costs plus imputed family labour) and the government aims to fix it at at least 1.5 times A2+FL cost as per budget announcements. Hence neither statement is correct.'
  },
  {
    id: 'eco-034',
    topic: 'Agriculture',
    year: 2020,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Under the Kisan Credit Card scheme, short-term credit support is given to farmers for which of the following purposes?',
    statements: [
      'Working capital for maintenance of farm assets',
      'Purchase of combine harvesters, tractors and mini trucks',
      'Consumption requirements of farm households',
      'Post-harvest expenses',
      'Construction of family house and setting up of village cold storage facility'
    ],
    tail: 'Select the correct answer using the code given below:',
    options: ['1, 2 and 5 only', '1, 3 and 4 only', '2, 3, 4 and 5 only', '1, 2, 3, 4 and 5'],
    correct: 1,
    explanation: 'The Kisan Credit Card (KCC) scheme, originally launched in 1998-99 and revamped in 2012, provides short-term credit for: working capital for maintenance of farm assets and allied activities (Statement 1 correct), consumption requirements of farm households including education, medical and marriage expenses (Statement 3 correct), and post-harvest expenses including produce storage and marketing costs (Statement 4 correct). Purchase of combine harvesters, tractors, and mini trucks (Statement 2) constitutes long-term investment/term credit and is not covered under KCC\'s short-term credit component — though allied term credit can be extended separately. Construction of family houses (Statement 5) is not covered under KCC; cold storage construction is a capital investment beyond KCC\'s scope. KCC credit limits are based on scale of finance for the crop plus a component for post-harvest/household consumption (10%) and farm asset maintenance (20%). Hence 1, 3 and 4 only.'
  },
  {
    id: 'eco-035',
    topic: 'Agriculture',
    year: 2021,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to PM-KISAN scheme, consider the following statements:',
    statements: [
      'Only small and marginal farmers are eligible for the scheme.',
      'The scheme provides income support of ₹6,000 per year in three equal instalments.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 1,
    explanation: 'Statement 1 is incorrect: PM-KISAN (Pradhan Mantri Kisan Samman Nidhi) was initially restricted to small and marginal landholding farmers (up to 2 hectares) when launched on 24 February 2019, but was universalised in June 2019 to cover all landholding farmer families irrespective of the size of their landholding, reaching approximately 14.5 crore farmers. Statement 2 is correct: ₹6,000 per year is provided in three equal instalments of ₹2,000 each, transferred directly to the bank accounts of beneficiary farmers through DBT (Direct Benefit Transfer). The scheme is fully funded by the Central Government. Exclusion categories include income-tax payers, government employees, professionals, and constitutional post holders. PM-KISAN is a significant agricultural income support programme; as of 2026, multiple instalments have been released. The scheme tests whether UPSC candidates know the June 2019 universalisation revision. Hence 2 only.'
  },
  {
    id: 'eco-036',
    topic: 'Agriculture',
    year: 2018,
    type: 'prelims',
    qtype: 'direct',
    stem: 'What is the purpose of \'e-NAM\' in India?',
    options: [
      'To provide an online platform for trading of agricultural commodities across India',
      'To provide online loans to farmers through NABARD',
      'To enable digital payments to farmers for crop insurance claims',
      'To provide weather data and advisories to farmers online'
    ],
    correct: 0,
    explanation: 'e-NAM (Electronic National Agriculture Market) is a pan-India electronic trading portal launched on 14 April 2016 under the Ministry of Agriculture and Farmers\' Welfare, implemented by SFAC (Small Farmers\' Agribusiness Consortium). It networks existing APMC (Agriculture Produce Market Committee) mandis across India to create a unified national market for agricultural commodities, enabling farmers to sell to buyers across state boundaries through transparent online auctions (Option A correct). As of 2024, over 1,389 mandis across 23 states and 4 UTs are integrated, with 1.77 crore farmers and 2.53 lakh traders registered. e-NAM provides transparent price discovery, reduces intermediary exploitation, and enables e-payment settlement directly to farmers\' accounts. It does not provide loans (Option B — that is NABARD\'s function), crop insurance payments (Option C — that is PMFBY), or weather advisories (Option D — that is Megha-Tropiques/ICAR functions).'
  },
  {
    id: 'eco-037',
    topic: 'Agriculture',
    year: 2020,
    type: 'prelims',
    qtype: 'direct',
    stem: 'What is the purpose of \'Zero Budget Natural Farming (ZBNF)\'?',
    options: [
      'To eliminate cost of cultivation through government-subsidised chemical-free farming',
      'To bring down cost of cultivation to near-zero through use of locally available resources',
      'To provide zero-interest credit to farmers',
      'To encourage contract farming with zero premium crop insurance'
    ],
    correct: 1,
    explanation: 'Zero Budget Natural Farming (ZBNF), developed and promoted by Subhash Palekar, aims to reduce the cost of cultivation to near zero by using locally available, farm-sourced inputs — primarily cow dung, cow urine, jaggery, and pulse flour — to prepare natural preparations such as Jeevamrutha (fermented microbial culture), Bijamrutha (seed treatment), Jivano (microbial solution), and Ghananjeevamrutha, avoiding all externally purchased chemical fertilisers and pesticides (Option B correct). The key is that farmers do not need to borrow money for inputs since all inputs come from the farm itself, particularly one desi cow per 30 acres. Option A is incorrect: ZBNF is not government-subsidised chemical-free farming — it is a farmer-driven model with no external subsidies. Option C (zero-interest credit) and Option D (zero-premium insurance/contract farming) are entirely different concepts. ZBNF was highlighted in India\'s Union Budget 2019-20 for promotion across states, though its claims have been debated by agricultural scientists.'
  },
  // ── Industry ──────────────────────────────────────────────────────────────
  {
    id: 'eco-038',
    topic: 'Industry',
    year: 2016,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements about the National Manufacturing Policy (NMP) 2011:',
    statements: [
      'It aims to increase the share of manufacturing in GDP to 25% by 2022.',
      'It envisages creation of National Investment and Manufacturing Zones (NIMZs).',
      'It targets creation of 100 million additional jobs by 2022.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correct: 3,
    explanation: 'All three statements are correct objectives of the National Manufacturing Policy (NMP) 2011, announced by the Government of India through the Ministry of Commerce and Industry. The NMP targeted increasing manufacturing\'s share of GDP from about 15-16% to 25% by 2022 (Statement 1 correct). It proposed the creation of National Investment and Manufacturing Zones (NIMZs) — large, integrated industrial townships with world-class infrastructure, skill development facilities, and administrative ease — as greenfield manufacturing hubs (Statement 2 correct). The NMP targeted creating 100 million additional jobs in manufacturing by 2022, recognising the sector\'s role in absorbing India\'s large labour force (Statement 3 correct). By 2022, the targets were largely unmet due to structural challenges — manufacturing\'s GDP share remained around 17-18%. The NMP (2011) framework preceded Make in India (2014) and the Production Linked Incentive (PLI) schemes (2020), which built on its objectives with more specific incentive structures.'
  },
  {
    id: 'eco-039',
    topic: 'Industry',
    year: 2020,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to \'Make in India\' initiative, consider the following statements:',
    statements: [
      'It was launched in September 2014 to transform India into a global manufacturing hub.',
      'Under this initiative, FDI was increased to 100% through the automatic route in all sectors.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 0,
    explanation: 'Statement 1 is correct: Make in India was launched by Prime Minister Narendra Modi on 25 September 2014 with the aim of transforming India into a global manufacturing destination across 25 key sectors, boosting FDI, and creating employment. Statement 2 is incorrect: FDI was not opened to 100% automatic route in all sectors — sensitive sectors including defence, print media, broadcasting, atomic energy, railways (certain categories), and pharmaceuticals continued to face FDI caps or government approval requirements. For example, defence FDI was raised to 49% (automatic) in 2014 and later to 74% (automatic) in 2020; print media remains capped at 26%. Make in India significantly liberalised FDI across many sectors but never universalised the 100% automatic route for all sectors. UPSC 2020 tested this common misconception that Make in India equals unrestricted 100% FDI — the actual policy has sector-specific caps maintained on national interest grounds. Hence 1 only.'
  },
  {
    id: 'eco-040',
    topic: 'Industry',
    year: 2022,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the Production Linked Incentive (PLI) scheme, consider the following statements:',
    statements: [
      'The PLI scheme provides incentives to manufacturers based on incremental sales from a base year.',
      'The scheme is applicable only to foreign companies investing in India.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 only'],
    correct: 0,
    explanation: 'Statement 1 is correct: the PLI scheme provides financial incentives — typically ranging from 4% to 6% of the value of eligible products — calculated on incremental production or sales above a defined base year threshold, incentivising scale-up rather than simply rewarding existing production capacity. Statement 2 is incorrect: PLI is not restricted to foreign companies — it is explicitly designed to benefit both domestic Indian manufacturers and foreign companies establishing manufacturing units in India, with the dual goal of boosting domestic production and attracting international investment. The PLI scheme covers 14 strategic sectors including mobile phones, pharmaceuticals, automobiles, textiles, specialty steel, drones, and solar PV modules, with a total outlay of approximately ₹1.97 lakh crore. As of 2024, PLI has attracted investments from domestic leaders like Tata, Mahindra, and Sun Pharma as well as foreign firms. Hence 1 only.'
  },
  {
    id: 'eco-041',
    topic: 'Industry',
    year: 2022,
    type: 'prelims',
    qtype: 'direct',
    stem: 'With reference to India, "Gig Workers" refers to whom?',
    options: [
      'Workers employed in the informal sector on daily wages',
      'Workers who work in flexible, non-traditional arrangements, often via digital platforms',
      'Migrant workers who move between states seasonally',
      'Workers below poverty line in rural areas'
    ],
    correct: 1,
    explanation: 'Gig workers are defined under Section 2(35) of the Code on Social Security, 2020 as persons who "perform work or participate in a work arrangement and earn from such activities outside of traditional employer-employee relationships." They typically work through digital aggregator platforms such as Ola, Uber, Zomato, Swiggy, Urban Company, and similar apps, in flexible, temporary, or freelance arrangements (Option B correct). They differ from informal daily-wage workers (Option A) who have no platform intermediation, seasonal migrants (Option C) whose defining characteristic is inter-state mobility, and BPL rural workers (Option D) whose defining characteristic is income level. India is estimated to have over 7.7 million gig workers as of recent estimates, with the number expected to grow to 23.5 million by 2029-30. The Code on Social Security 2020 provides the first formal legal recognition of gig workers and mandates aggregators to contribute to social security funds for them.'
  },
  // ── International Trade ───────────────────────────────────────────────────
  {
    id: 'eco-042',
    topic: 'International Trade',
    year: 2020,
    type: 'prelims',
    qtype: 'direct',
    stem: 'With reference to Foreign Direct Investment in India, which one of the following is considered its major characteristic?',
    options: [
      'It is the investment through capital instruments by a person resident outside India in an unlisted Indian company.',
      'It is a short-term investment that can be sold quickly on the stock exchange.',
      'It is an investment by a non-resident in any listed or unlisted company in any sector.',
      'It is an investment where the foreign investor holds at least 10% of the equity or voting rights of the investee company.'
    ],
    correct: 3,
    explanation: 'The defining characteristic of FDI — as recognised by both IMF guidelines and India\'s regulatory framework under FEMA 1999 (Foreign Exchange Management Act) and the NDI Rules 2019 — is that the foreign investor acquires 10% or more of the equity or voting rights of the investee company, conferring a "lasting interest" and a degree of management influence (Option D correct). This 10% threshold distinguishes FDI from Foreign Portfolio Investment (FPI), where a non-resident holds less than 10% of equity — FPI is characterised by short-term, tradeable investments without management involvement (making Option B the description of FPI, not FDI). Option A is partially correct but too narrow — FDI can also occur in listed companies (above 10% threshold). Option C is overbroad — investment in any company at any stake is not necessarily FDI. The 10% threshold for management influence is the standard IMF/OECD Benchmark Definition of FDI and is tested in UPSC as the key distinction between FDI and FPI.'
  },
  {
    id: 'eco-043',
    topic: 'International Trade',
    year: 2017,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'The Trade-Related Investment Measures (TRIMS) agreement under WTO prohibits measures inconsistent with GATT Articles on national treatment and quantitative restrictions.',
      'The TRIMS agreement applies to investment measures related to trade in goods only.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 2,
    explanation: 'Both statements are correct. Article 2 of the TRIMs Agreement explicitly states that no WTO member shall apply any TRIM that is inconsistent with the provisions of GATT Article III (national treatment — non-discriminatory treatment of domestic and imported goods) or Article XI (general elimination of quantitative restrictions on imports and exports) — Statement 1 is correct. The TRIMs Agreement, negotiated during the Uruguay Round and effective from 1 January 1995, explicitly applies only to trade in goods and does not cover services trade or investment in services (which is separately governed by GATS/GATT) — Statement 2 is correct. Common examples of prohibited TRIMs include local content requirements (requiring a minimum percentage of locally sourced inputs) and trade balancing requirements (linking imports to export performance). India has faced TRIMs disputes, particularly regarding domestic content requirements in solar energy and pharmaceutical sectors. Hence both are correct.'
  },
  {
    id: 'eco-044',
    topic: 'International Trade',
    year: 2018,
    type: 'prelims',
    qtype: 'direct',
    stem: 'Which of the following best describes the term "Import Cover", sometimes seen in the news?',
    options: [
      'It is the number of months of imports that can be paid for by a country\'s international reserves.',
      'It is the ratio of the value of imports to the value of exports over a period of time.',
      'It is the maximum volume of imports that an economy can absorb.',
      'It is the total tax paid on imports by a country in a given time period.'
    ],
    correct: 0,
    explanation: 'Import Cover (also called months of import coverage) measures how many months of a country\'s imports can be financed by its current foreign exchange reserves — it is calculated as: Foreign Exchange Reserves ÷ Monthly Import Bill (Option A correct). It is a key external vulnerability indicator: the IMF recommends that countries maintain a minimum of three months of import cover as an adequate reserve buffer. India typically maintains a significantly higher buffer — around 9-11 months of import cover in recent years — demonstrating strong external sector resilience. Option B describes the Trade Deficit ratio, not Import Cover. Option C describes import absorptive capacity, which is not a standard economic indicator. Option D describes customs duty collection, entirely unrelated to Import Cover. As of late 2024, India\'s foreign exchange reserves were approximately $700 billion, providing comfortable import coverage. UPSC tests this because Import Cover appears frequently in RBI\'s currency management and external sector commentary.'
  },
  {
    id: 'eco-045',
    topic: 'International Trade',
    year: 2016,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the \'Logistics Performance Index\', consider the following statements:',
    statements: [
      'It measures the trade and transport related logistics performance of a country.',
      'It is published by the World Economic Forum.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 0,
    explanation: 'The Logistics Performance Index (LPI) measures a country\'s logistics environment and competitiveness across six dimensions: customs efficiency, infrastructure quality, ease of arranging international shipments, logistics services quality and competence, tracking and tracing capability, and timeliness of delivery — Statement 1 is correct. The LPI is published biennially by the World Bank (not the World Economic Forum — Statement 2 is incorrect); the WEF publishes the Global Competitiveness Index and other reports. India ranked 38 out of 139 countries in the LPI 2023, improving from rank 54 in 2014 — a 16-place improvement attributed to PM GatiShakti National Master Plan, National Logistics Policy (2022), and the Unified Logistics Interface Platform (ULIP). The LPI is used by governments and businesses to benchmark logistics performance and identify areas for trade facilitation improvement. Statement 2\'s error (WEF vs World Bank) is the classic UPSC trap in report-publisher questions. Hence 1 only.'
  },
  {
    id: 'eco-046',
    topic: 'International Trade',
    year: 2021,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'The Global Financial Stability Report is prepared by the International Monetary Fund.',
      'The International Labour Organization prepares the World Employment and Social Outlook Report.',
      'The World Economic Outlook is prepared by the World Trade Organization.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correct: 0,
    explanation: 'The Global Financial Stability Report (GFSR) is published twice yearly by the IMF, providing comprehensive analysis of global financial markets, systemic risks, and vulnerabilities — Statement 1 is correct. The World Employment and Social Outlook (WESO) report is published by the International Labour Organization (ILO), covering global employment trends, wages, working conditions, and social protection — Statement 2 is correct. The World Economic Outlook (WEO) is published twice yearly by the IMF (not the WTO) — Statement 3 is incorrect; the WTO publishes the World Trade Report and Global Trade Statistics, not the WEO. This question tests candidates\' knowledge of which international organisation publishes which flagship report — a commonly examined but frequently confused area in UPSC. The IMF publishes GFSR, WEO, and Fiscal Monitor; the ILO publishes WESO; and the WTO publishes trade-specific reports. Hence 1 and 2 only.'
  },
  {
    id: 'eco-047',
    topic: 'International Trade',
    year: 2022,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'India has the highest number of Geographical Indication (GI) tags in the world.',
      'GI tags can be given to both agricultural and non-agricultural products in India.',
      'GI protection in India is governed by the Geographical Indications of Goods (Registration and Protection) Act, 1999.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correct: 1,
    explanation: 'Statement 1 is incorrect: India does not have the highest number of GI tags globally. According to WIPO\'s IP Facts and Figures 2024, China leads with approximately 9,785 GIs in force, followed by Germany (7,586) and Hungary (7,290); India had approximately 530-605 GIs registered as of 2024, placing it well behind the global leaders. Statement 2 is correct: the Geographical Indications of Goods (Registration and Protection) Act, 1999 provides GI protection for agricultural goods, natural goods, and manufactured goods — including handicrafts, textiles, food products, and artisanal items. Statement 3 is correct: GI protection in India is indeed governed by this Act (No. 48 of 1999), administered by the Controller General of Patents, Designs and Trade Marks under the Ministry of Commerce. Darjeeling Tea (2004) was India\'s first GI-registered product. The Act aligns with TRIPS Agreement obligations under WTO. Hence 2 and 3 only.'
  },
  // ── Financial Inclusion ───────────────────────────────────────────────────
  {
    id: 'eco-048',
    topic: 'Financial Inclusion',
    year: 2015,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to \'Pradhan Mantri Jan-Dhan Yojana (PMJDY)\', consider the following statements:',
    statements: [
      'Overdraft facility up to ₹10,000 will be allowed only to those account holders who have linked their accounts with Aadhaar.',
      'One Life Insurance Policy of ₹30,000 will be provided to those who opened the account between 15 August 2014 and 26 January 2015.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 1,
    explanation: 'Statement 1 is not accurately stated: the overdraft facility under PMJDY (initially ₹5,000, later doubled to ₹10,000) requires multiple eligibility conditions — minimum 6 months of satisfactory account operation and banking history, and meeting the bank\'s creditworthiness criteria — Aadhaar linkage alone is not the sole qualifying criterion. Statement 2 is correct: PMJDY was launched on 28 August 2014 (announced by PM on 15 August 2014 from Red Fort), and eligible beneficiaries who opened accounts between 15 August 2014 and 26 January 2015 received a ₹30,000 life insurance cover in addition to the RuPay card\'s ₹1 lakh accident insurance. PMJDY is India\'s flagship financial inclusion scheme, having opened over 53 crore accounts by 2024 and channelled DBT transfers totalling lakhs of crores. The scheme, implemented under the Ministry of Finance, transformed India\'s banking landscape. Hence 2 only.'
  },
  {
    id: 'eco-049',
    topic: 'Financial Inclusion',
    year: 2016,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'Pradhan Mantri Mudra Yojana is aimed at bringing small entrepreneurs into the formal financial system.',
      'Pradhan Mantri Jan-Dhan Yojana is aimed at promoting savings among the poor people of India.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 2,
    explanation: 'Both statements are broadly correct. Pradhan Mantri Mudra Yojana (PMMY), launched on 8 April 2015, provides collateral-free loans of up to ₹10 lakh (under three categories — Shishu up to ₹50,000; Kishore ₹50,001-5 lakh; Tarun ₹5-10 lakh) to non-corporate, non-farm micro and small enterprises, thereby bringing informal/unorganised sector entrepreneurs into the formal credit system through the Micro Units Development and Refinance Agency (MUDRA) — Statement 1 is broadly correct. PMJDY\'s primary objective is comprehensive financial inclusion — providing bank accounts to unbanked households to enable savings, remittances, credit, insurance, and pension access; promoting savings among the poor is a core component of this financial inclusion mandate — Statement 2 is broadly correct. Both schemes are pillars of India\'s Jan Dhan-Aadhaar-Mobile (JAM) trinity framework for direct benefit transfers and financial empowerment. UPSC tested the characterisation of both schemes in 2016.'
  },
  {
    id: 'eco-050',
    topic: 'Financial Inclusion',
    year: 2018,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'Pradhan Mantri Suraksha Bima Yojana (PMSBY) provides accidental death and total disability cover of ₹2 lakh.',
      'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) provides a life cover of ₹2 lakh payable on death due to any reason.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 2,
    explanation: 'Both statements are correct as per the official scheme parameters at the time of the question. PMSBY (Pradhan Mantri Suraksha Bima Yojana), launched on 1 June 2015, is an accidental insurance scheme covering death or full disability at ₹2 lakh and partial disability at ₹1 lakh, with an annual premium of ₹12 (revised from the original ₹20 in 2022) — Statement 1 is correct. PMJJBY (Pradhan Mantri Jeevan Jyoti Bima Yojana), also launched in 2015, provides term life insurance of ₹2 lakh payable for death from any cause — natural, accidental, or otherwise — at an annual premium of ₹330 (revised from ₹436) — Statement 2 is correct. Both schemes are available to savings bank account holders aged 18-70 (PMSBY) and 18-50 (PMJJBY) through auto-debit from linked accounts. These three schemes — PMJDY (banking), PMSBY (accident insurance), and PMJJBY (life insurance) — together constitute the Jan Suraksha Yojana tripod for social security. Hence both are correct.'
  },
  {
    id: 'eco-051',
    topic: 'Financial Inclusion',
    year: 2019,
    type: 'prelims',
    qtype: 'direct',
    stem: 'Which of the following is NOT the purpose of the "Stand Up India Scheme"?',
    options: [
      'Facilitating bank loans between ₹10 lakh and ₹1 crore to SC/ST borrowers',
      'Facilitating bank loans to at least one woman borrower per bank branch',
      'Providing subsidised loans to backward regions of India',
      'Supporting greenfield enterprise creation by SC/ST and women entrepreneurs'
    ],
    correct: 2,
    explanation: 'Stand Up India, launched on 5 April 2016 by the Department of Financial Services under the Ministry of Finance, facilitates composite bank loans of ₹10 lakh to ₹1 crore to at least one SC/ST borrower and at least one woman borrower per bank branch for setting up greenfield enterprises in manufacturing, trading, services, or agri-allied activities (Options A, B, D are all correct purposes). Option C — providing subsidised loans specifically to backward regions — is NOT a stated purpose of Stand Up India; the scheme targets borrowers by community (SC/ST) and gender (women), not by geography, and the loans are not subsidised (they carry market-based interest rates). Region-specific subsidised credit is served by other schemes such as PMEGP, NABARD schemes, or NER-specific programmes. The implementing agency is SIDBI, with the credit guarantee support from CGFSIL (Credit Guarantee Fund Scheme for Stand Up India Loans). Hence Option C is not a purpose.'
  },
  {
    id: 'eco-052',
    topic: 'Financial Inclusion',
    year: 2020,
    type: 'prelims',
    qtype: 'direct',
    stem: 'Which one of the following is the purpose of \'Atal Pension Yojana\'?',
    options: [
      'It aims at securing the interests of poor labourers in the unorganised sector.',
      'It aims at providing pension to all people in urban areas.',
      'It aims at securing the interests of all organised sector employees.',
      'It aims at encouraging savings among the rich and middle class.'
    ],
    correct: 0,
    explanation: 'Atal Pension Yojana (APY), launched with effect from 1 June 2015 under the Ministry of Finance and administered by PFRDA (Pension Fund Regulatory and Development Authority), was specifically designed to provide social security to workers in the unorganised/informal sector who lack formal pension coverage — Option A is correct. APY provides a guaranteed minimum monthly pension of ₹1,000 to ₹5,000 after age 60 depending on the contribution amount and entry age. The Central Government provided a co-contribution of 50% of the subscriber\'s contribution (up to ₹1,000 per year) for those who enrolled between June 2015 and March 2016 and were not income-tax payers. Option B (all urban people) is incorrect — it targets the unorganised sector; urban location is incidental. Option C (organised sector) is wrong — EPF/EPS covers the organised sector. Option D (rich/middle class) is wrong — APY explicitly targets low-income workers lacking formal pension. APY has been extended till FY2030-31; however, income-tax payers were excluded from new enrolments from October 2022.'
  },
  // ── Infrastructure ────────────────────────────────────────────────────────
  {
    id: 'eco-053',
    topic: 'Infrastructure',
    year: 2019,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the "UDAN" scheme of the Aviation Ministry, which of the following statements is/are correct?',
    statements: [
      'The objective is to make flying affordable for the common citizens of small towns.',
      'Airport Authority of India and State Governments shall provide Viability Gap Funding for airlines under the scheme.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 2,
    explanation: 'Both statements are correct. UDAN (Ude Desh Ka Aam Naagrik — "Let the Common Citizen Fly"), launched on 21 October 2016 under the National Civil Aviation Policy (NCAP) 2016 by the Ministry of Civil Aviation, aims to make air travel affordable for ordinary citizens of smaller cities, towns, and remote regions by connecting unserved and underserved airports at capped fares (approximately ₹2,500 for 1-hour flight) — Statement 1 is correct. Viability Gap Funding (VGF) to airlines operating on these low-traffic, financially unviable routes is provided jointly by the Central Government (80%), Airport Authority of India, and State Governments (20% — 10% for hilly/NE states) through signed MoUs — Statement 2 is correct. The nodal agency is AAI (Airports Authority of India). As of 2025, UDAN has connected over 90 airports and the scheme has witnessed multiple phases (UDAN 1.0 through 5.0), progressively expanding regional air connectivity. Hence both statements are correct.'
  },
  {
    id: 'eco-054',
    topic: 'Infrastructure',
    year: 2020,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements:',
    statements: [
      'The Dedicated Freight Corridor (DFC) project aims at improving freight traffic to reduce load on the passenger train network.',
      'The Eastern DFC connects Ludhiana to Dankuni while the Western DFC connects Jawaharlal Nehru Port to Dadri.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 2,
    explanation: 'Both statements are correct. The Dedicated Freight Corridors (DFCs), operated by DFCCIL (Dedicated Freight Corridor Corporation of India Limited) under the Ministry of Railways, separate freight from passenger traffic on separate rail lines — reducing congestion on the existing mixed-use network, increasing freight train speeds from ~25 km/h to 70+ km/h, and enabling passenger trains to run faster without freight interference (Statement 1 correct). The Eastern DFC runs approximately 1,875 km from Ludhiana (Punjab) through UP and Bihar to Dankuni (West Bengal), carrying primarily coal and agricultural cargo. The Western DFC runs approximately 1,504 km from Jawaharlal Nehru Port Terminal (JNPT, Navi Mumbai) to Dadri (Greater Noida, Uttar Pradesh), primarily carrying container traffic (Statement 2 correct). A 46 km link connects the two corridors at Khurja-Dadri. The DFC project is partly funded by World Bank (EDFC) and JICA — Japan International Cooperation Agency (WDFC). Hence both are correct.'
  },
  {
    id: 'eco-055',
    topic: 'Infrastructure',
    year: 2016,
    type: 'prelims',
    qtype: 'direct',
    stem: 'The minimum quantity of gold that can be deposited under the \'Gold Monetization Scheme\' is',
    options: [
      '10 grams',
      '30 grams',
      '50 grams',
      '100 grams'
    ],
    correct: 1,
    explanation: 'The Gold Monetization Scheme (GMS), launched by the Government of India in November 2015 (replacing the earlier Gold Deposit Scheme 1999 and Gold Metal Loan Scheme), sets the minimum deposit at 30 grams of raw gold (of any purity — coins, bars, jewellery) — making Option B correct. Deposits can be made at Collection and Purity Testing Centres (CPTCs) accredited by the Bureau of Indian Standards. The scheme offers interest-bearing short-term bank deposits (1-3 years at 2.25% per annum), and medium-term (5-7 years) and long-term (12-15 years) government deposits. Banks can lend or sell the deposited gold to jewellers or auction houses, thereby mobilising India\'s estimated 25,000+ tonnes of household gold (the largest private gold hoard in the world). The scheme aims to reduce India\'s dependence on gold imports (India is the world\'s second largest gold consumer) and curb the current account deficit. The minimum 30-gram threshold was specifically set to make the scheme accessible while ensuring operational viability for testing centres.'
  },
  // ── Five Year Plans & NITI Aayog ──────────────────────────────────────────
  {
    id: 'eco-056',
    topic: 'Five Year Plans & NITI Aayog',
    year: 2015,
    type: 'prelims',
    qtype: 'direct',
    stem: 'The Government of India has established NITI Aayog to replace the',
    options: [
      'Human Rights Commission',
      'Finance Commission',
      'Law Commission',
      'Planning Commission'
    ],
    correct: 3,
    explanation: 'NITI Aayog (National Institution for Transforming India) was established on 1 January 2015 by a Cabinet resolution, replacing the Planning Commission which had existed since 15 March 1950 (originally constituted under PM Jawaharlal Nehru). The Planning Commission was dissolved because its top-down, centralised planning model was seen as unsuitable for a liberalised, market economy and incompatible with India\'s federal structure where states have distinct development needs. NITI Aayog serves as a policy think tank rather than a fund-allocating body — it cannot directly allocate funds to states (a key distinction from the Planning Commission which had plan fund allocation powers). The Prime Minister is the ex-officio Chairperson; unlike the Planning Commission\'s Deputy Chairman (a Cabinet-rank position), NITI Aayog has a Vice-Chairperson of lower rank. The Finance Commission (Option B) and Law Commission (Option C) were never merged with or replaced by NITI Aayog, and both continue to exist as separate constitutional/statutory bodies.'
  },
  {
    id: 'eco-057',
    topic: 'Five Year Plans & NITI Aayog',
    year: 2014,
    type: 'prelims',
    qtype: 'direct',
    stem: 'Which of the following is the theme of the Twelfth Five-Year Plan (2012–2017)?',
    options: [
      'Inclusive Growth',
      'Faster, More Inclusive and Sustainable Growth',
      'Growth with Social Justice and Equity',
      'Faster and More Inclusive Growth'
    ],
    correct: 1,
    explanation: 'The 12th Five-Year Plan (2012–2017) had the official theme "Faster, More Inclusive and Sustainable Growth" — the addition of "Sustainable" distinguishing it from the 11th Plan\'s theme. The 11th Five-Year Plan (2007-2012) had the theme "Faster and More Inclusive Growth" (Option D), which the 12th Plan built upon by adding the environmental sustainability dimension. The 10th Plan (2002-2007) focused on "Growth with Equity," and earlier plans emphasised different economic transformation objectives. The 12th Plan targeted an average GDP growth of 8% per annum, with sub-targets for poverty reduction, education, health, and sustainability. It was India\'s last Five-Year Plan — the Planning Commission was dissolved in January 2015, and from 2017-18, India moved to three-year Action Plans, seven-year strategies, and fifteen-year visions under NITI Aayog. The "Sustainable" addition in the 12th Plan reflected post-climate-change-awareness thinking integrated into development planning.'
  },
  {
    id: 'eco-058',
    topic: 'Five Year Plans & NITI Aayog',
    year: 2016,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the \'Financial Stability and Development Council (FSDC)\', consider the following statements:',
    statements: [
      'It is an organ of NITI Aayog.',
      'It is headed by the Union Finance Minister.',
      'It monitors macroprudential supervision of the economy.'
    ],
    tail: 'Which of the statements given above are correct?',
    options: ['1 and 2 only', '3 only', '2 and 3 only', '1, 2 and 3'],
    correct: 2,
    explanation: 'FSDC (Financial Stability and Development Council) is not an organ of NITI Aayog — Statement 1 is incorrect. The FSDC was set up by a Cabinet decision in December 2010 under the Ministry of Finance as a non-statutory apex-level body, chaired by the Union Finance Minister (Statement 2 correct). Its members include the RBI Governor, SEBI Chairman, IRDA Chairman, PFRDA Chairman, Finance Secretary, Secretary (Financial Services), and Chief Economic Adviser. The FSDC was created to institutionalise the mechanism for maintaining financial stability, financial sector development, inter-regulatory coordination, and macroprudential supervision of the economy including oversight of large financial conglomerates (Statement 3 correct). The idea for FSDC was first mooted by the Raghuram Rajan Committee (2008) on financial sector reforms. Since FSDC is a non-statutory body under the Finance Ministry — not under NITI Aayog — Statement 1 is clearly wrong. Hence 2 and 3 only.'
  },
  {
    id: 'eco-059',
    topic: 'Five Year Plans & NITI Aayog',
    year: 2017,
    type: 'prelims',
    qtype: 'statement',
    stem: 'With reference to the \'National Investment and Infrastructure Fund (NIIF)\', which of the following statements is/are correct?',
    statements: [
      'It is an organ of NITI Aayog.',
      'It has a corpus of ₹4,00,000 crore at present.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 3,
    explanation: 'Both statements are incorrect. NIIF (National Investment and Infrastructure Fund) is not an organ of NITI Aayog — it is registered with SEBI as a Category II Alternative Investment Fund under the Ministry of Finance (Department of Economic Affairs), with the Government of India as a 49% anchor investor — Statement 1 is incorrect. NIIF\'s initial corpus target was ₹20,000 crore from the government plus ₹20,000 crore expected from private/institutional investors (total target approximately ₹40,000 crore), not ₹4,00,000 crore as stated in Statement 2 which inflates the figure by a factor of 10. NIIF operates three fund-of-funds: Master Fund (infrastructure equity), Fund of Funds (growth-oriented sectors), and Strategic Opportunities Fund. It has attracted international institutional investors including Singapore\'s GIC, Abu Dhabi Investment Authority, and Ontario Teachers\' Pension Plan. The purpose is to provide long-term capital to infrastructure and productive sectors of India. Hence neither statement is correct.'
  },
  {
    id: 'eco-060',
    topic: 'Five Year Plans & NITI Aayog',
    year: 2018,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements about NITI Aayog:',
    statements: [
      'NITI Aayog can allocate funds directly to the State Governments.',
      'NITI Aayog provides policy recommendations and serves as a think tank for the Union Government.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 1,
    explanation: 'NITI Aayog does NOT have the power to allocate funds to states — this is a critical and frequently tested distinction from the Planning Commission, which had Gross Budgetary Support (plan funds) allocation power. Fund allocation to states is done by the Finance Ministry (Finance Commission devolution, centrally sponsored scheme grants) and line ministries — Statement 1 is incorrect. NITI Aayog functions as a policy think tank, providing strategic advice, designing programmes, monitoring government schemes, and making recommendations on economic and governance reforms to the Central Government — Statement 2 is correct. It also facilitates cooperative federalism through the Governing Council (including all Chief Ministers and Lt. Governors), preparing economic strategy documents (India@75, India@100 visions), and monitoring Aspirational Districts programme. The abolition of plan fund allocation authority was a deliberate design choice to transform NITI Aayog into a non-interfering advisory body, giving states greater spending autonomy under Finance Commission devolution. Hence 2 only.'
  },
  {
    id: 'eco-061',
    topic: 'Five Year Plans & NITI Aayog',
    year: 2019,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Consider the following statements about the \'Aspirational Districts Programme\':',
    statements: [
      'It is implemented by the Ministry of Rural Development.',
      'It focuses on 112 least developed districts across India.'
    ],
    tail: 'Which of the statements given above is/are correct?',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    correct: 1,
    explanation: 'The Aspirational Districts Programme (ADP), launched in January 2018, is monitored by NITI Aayog — not the Ministry of Rural Development — with district-level implementation supported by Central Government officers and State Governments (Statement 1 is incorrect). NITI Aayog ranks districts monthly on the "Champions of Change" dashboard based on 49 Key Performance Indicators across five themes: Health & Nutrition, Education, Agriculture & Water Resources, Financial Inclusion & Skill Development, and Infrastructure. The programme covers exactly 112 of India\'s most under-developed districts selected based on composite scores of lagging indicators (Statement 2 is correct). These districts are spread across 28 states. The programme operates on a "Convergence, Collaboration, Competition" framework with Central Prabhari Officers assigned to each district. The Aspirational Districts Programme was later expanded to include an Aspirational Blocks Programme (2023) covering 500 blocks. Hence 2 only.'
  },
  {
    id: 'eco-062',
    topic: 'Five Year Plans & NITI Aayog',
    year: 2019,
    type: 'prelims',
    qtype: 'statement',
    stem: 'Which of the following is/are the objective/objectives of the "Atal Innovation Mission"?',
    statements: [
      'Establishment of world-class Innovation Hubs and Grand Challenges for India',
      'Promotion of a network of world-class incubators and accelerators',
      'Providing innovation and entrepreneurship exposure to school students through Atal Tinkering Labs'
    ],
    tail: 'Select the correct answer using the code given below:',
    options: ['1 only', '2 only', '3 only', '1, 2 and 3'],
    correct: 3,
    explanation: 'All three are correct objectives of the Atal Innovation Mission (AIM), established under NITI Aayog in 2016 as the government\'s flagship initiative to promote innovation and entrepreneurship. Objective 1 — Innovation Hubs and Grand Challenges: AIM creates Atal New India Challenges (ANIC) and Sectoral Innovation Launchpads for strategic sectors like agriculture, health, and energy to solve national problems at scale. Objective 2 — World-class incubators: AIM establishes Atal Incubation Centres (AICs) at universities, institutions, and corporates — 72+ operational AICs have incubated over 3,500 startups, creating more than 32,000 jobs. Objective 3 — School-level tinkering: Atal Tinkering Labs (ATLs) in schools (10,000+ established in 35 states and UTs) provide students access to 3D printers, robotics kits, and STEM equipment to develop problem-solving and innovation mindsets. All three represent distinct pillars of AIM\'s multi-level innovation ecosystem architecture. Hence 1, 2 and 3.'
  },
  {
    id: 'eco-063',
    topic: 'Agriculture',
    year: 2017,
    type: 'prelims',
    qtype: 'direct',
    stem: 'With reference to the \'National Investment and Infrastructure Fund (NIIF)\', which is/are considered as its objective(s)?',
    options: [
      'To act as a Social Venture Fund for the government sector',
      'To create a fund of funds with the government as the anchor investor',
      'To provide long-term capital to infrastructure and other productive sectors',
      'Both to create a fund of funds and to provide long-term capital to infrastructure'
    ],
    correct: 3,
    explanation: 'NIIF (established August 2015, registered with SEBI as a Category II Alternative Investment Fund in December 2015) has two core objectives that are both correct: it is structured as a fund-of-funds with the Government of India as the 49% anchor investor attracting domestic and foreign institutional capital (Option B correct), and its purpose is to provide long-term equity, debt, and hybrid capital to infrastructure and productive sectors of India including roads, ports, airports, power, and logistics (Option C correct). Since both B and C are objectives, "Both" (Option D) is the most complete and correct answer. Option A — acting as a Social Venture Fund — is incorrect; NIIF is a commercial infrastructure investment fund, not a social impact fund. NIIF operates three distinct funds targeting different risk-return profiles: the Master Fund (core infrastructure), Fund of Funds, and Strategic Opportunities Fund. It has raised capital from sovereign wealth funds, pension funds, and development finance institutions globally.'
  },
  {
    id: 'eco-064',
    topic: 'Banking',
    year: 2014,
    type: 'prelims',
    qtype: 'direct',
    stem: 'Which of the following is the most likely consequence of implementing the "Inflation Targeting" framework in India?',
    options: [
      'The exchange rates will become more stable.',
      'The currency will be appreciated permanently.',
      'GDP growth will not be significantly affected.',
      'India will become a developed economy in a shorter period.'
    ],
    correct: 0,
    explanation: 'Credible inflation targeting provides a stable and predictable nominal anchor — by committing to and maintaining low, stable CPI inflation, the central bank reduces macroeconomic uncertainty, anchors inflation expectations, and improves confidence in the domestic currency, all of which contribute to exchange rate stability (Option A correct). Research on countries that adopted inflation targeting frameworks shows improved exchange rate stability as a consistent outcome, since currency volatility is often driven by inflation uncertainty and unpredictable monetary policy. Option B (permanent currency appreciation) is incorrect — inflation targeting stabilises but does not permanently appreciate currency; exchange rates fluctuate with many other factors. Option C (no effect on GDP) is too dismissive — credible monetary policy has significant growth implications through lower risk premiums and improved credit environment. Option D (becoming developed economy faster) is an extreme overstatement of inflation targeting\'s scope. India formally adopted the flexible inflation targeting framework in May 2016 (4% CPI ±2%); the framework was extended to March 2031 in 2026.'
  },
  {
    id: 'eco-065',
    topic: 'International Trade',
    year: 2019,
    type: 'prelims',
    qtype: 'direct',
    stem: 'With reference to the "Atal Innovation Mission", which one of the following best describes its location under the Government of India?',
    options: [
      'Under the Ministry of Science and Technology',
      'Under the Ministry of Human Resource Development',
      'Under NITI Aayog',
      'Under the Ministry of Commerce and Industry'
    ],
    correct: 2,
    explanation: 'The Atal Innovation Mission (AIM) was established in 2016 under NITI Aayog (National Institution for Transforming India) — not under any ministry — making Option C correct. Its location under NITI Aayog reflects its role as a cross-sectoral, whole-of-government initiative requiring coordination across ministries of Education (for ATLs), DPIIT (for startups), Science & Technology (for research), and others — a cross-cutting mandate suited to NITI Aayog\'s advisory role. Option A (Ministry of Science and Technology) administers CSIR, DBT, and DST-funded research but not AIM. Option B (Ministry of Human Resource Development — now Ministry of Education) administers AICTE, UGC, and NIF but not AIM directly (though ATLs are in schools under Ministry of Education\'s administrative domain). Option D (Ministry of Commerce and Industry) administers Make in India and Startup India but not AIM. UPSC tested this in 2019 as a Ministry/Institution attribution question — AIM\'s placement under NITI Aayog is a commonly confused fact since its activities span education and science domains.'
  }
];
