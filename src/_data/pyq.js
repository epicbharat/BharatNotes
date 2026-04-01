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
  polity: [

    // ─── PREAMBLE ───────────────────────────────────────────────────────────

    {
      id: 'pol-001',
      topic: 'Preamble',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following objectives is NOT embodied in the Preamble to the Constitution of India?',
      options: [
        'Liberty of thought',
        'Economic liberty',
        'Liberty of expression',
        'Liberty of belief'
      ],
      correct: 1,
      explanation: "The Preamble secures LIBERTY of thought, expression, belief, faith and worship — but does NOT mention economic liberty. Economic matters are dealt with under Directive Principles of State Policy."
    },

    {
      id: 'pol-002',
      topic: 'Preamble',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'The mind of the makers of the Constitution of India is reflected in which of the following?',
      options: [
        'The Preamble',
        'The Fundamental Rights',
        'The Directive Principles of State Policy',
        'The Fundamental Duties'
      ],
      correct: 0,
      explanation: "The Preamble embodies the basic philosophy and fundamental values of the Constitution. The Supreme Court has consistently held it as the key to understanding the Constitution-makers' intent — it is the 'key to the minds of the makers of the Constitution'."
    },

    {
      id: 'pol-003',
      topic: 'Preamble',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'The Preamble to the Constitution of India is:',
      options: [
        'A part of the Constitution but has no legal effect',
        'Not a part of the Constitution and has no legal effect either',
        'A part of the Constitution and has the same legal effect as any other part',
        'A part of the Constitution but has no legal effect independently of other parts'
      ],
      correct: 3,
      explanation: "Per Supreme Court rulings (Kesavananda Bharati, 1973), the Preamble is part of the Constitution. However, it cannot be independently enforced in courts — it serves as an interpretive guide for the other provisions. It has no independent legal effect but is a legitimate aid to constitutional interpretation."
    },

    {
      id: 'pol-004',
      topic: 'Preamble',
      year: 2021,
      type: 'prelims',
      qtype: 'direct',
      stem: 'On January 26, 1950, which of the following was India declared as?',
      options: [
        'Democratic Republic',
        'Sovereign Democratic Republic',
        'Sovereign Secular Democratic Republic',
        'Sovereign Socialist Secular Democratic Republic'
      ],
      correct: 1,
      explanation: "On 26 January 1950, India was proclaimed a Sovereign Democratic Republic. The words 'Socialist' and 'Secular' were added by the 42nd Constitutional Amendment Act, 1976. So at the time of original adoption, the Preamble read 'Sovereign Democratic Republic'."
    },

    {
      id: 'pol-005',
      topic: 'Preamble',
      year: 2023,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following best reflects the chief purpose of the Constitution of a country?',
      options: [
        'It determines the objectives for which necessary laws are to be made',
        'It enables the creation of political offices and a government',
        'It defines and limits the powers of government',
        'It secures social justice and ensures equality for all citizens'
      ],
      correct: 2,
      explanation: "The chief purpose of a Constitution is to define and limit the powers of government, thereby protecting individual rights. This is the core principle of constitutionalism — the idea of limited government as opposed to arbitrary or absolute rule."
    },

    // ─── FUNDAMENTAL RIGHTS ─────────────────────────────────────────────────

    {
      id: 'pol-006',
      topic: 'Fundamental Rights',
      subtopic: 'Right against Exploitation',
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Which of the following are envisaged by the Right against Exploitation in the Constitution of India?',
      statements: [
        'Prohibition of traffic in human beings and forced labour',
        'Abolition of untouchability',
        'Protection of the interests of minorities',
        'Prohibition of employment of children in factories and mines'
      ],
      tail: 'Select the correct answer using the code given below:',
      options: [
        '1, 2 and 4 only',
        '2, 3 and 4 only',
        '1 and 4 only',
        '1, 2, 3 and 4'
      ],
      correct: 2,
      explanation: "The Right against Exploitation (Articles 23–24) covers: prohibition of traffic in human beings and forced labour (Article 23) and prohibition of employment of children in hazardous occupations (Article 24). Abolition of untouchability falls under Right to Equality (Article 17). Protection of minority interests falls under Cultural and Educational Rights (Articles 29–30)."
    },

    {
      id: 'pol-007',
      topic: 'Fundamental Rights',
      subtopic: 'Right to Equality',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which category of Fundamental Rights in the Indian Constitution incorporates protection against the practice of untouchability?',
      options: [
        'Right against Exploitation',
        'Right to Freedom',
        'Right to Constitutional Remedies',
        'Right to Equality'
      ],
      correct: 3,
      explanation: "Article 17 (abolition of untouchability) is part of the Right to Equality under Part III of the Constitution (Articles 14–18). The practice of untouchability in any form is forbidden and its enforcement is a punishable offence under the Protection of Civil Rights Act, 1955."
    },

    {
      id: 'pol-008',
      topic: 'Fundamental Rights',
      subtopic: 'Right to Life',
      year: 2019,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which Article of the Constitution of India safeguards one\'s right to marry the person of one\'s choice?',
      options: [
        'Article 19',
        'Article 21',
        'Article 25',
        'Article 29'
      ],
      correct: 1,
      explanation: "The Supreme Court in the Hadiya case (2018) held that the right to marry a person of one's choice is integral to Article 21 (Right to Life and Personal Liberty). Article 21 has been expansively interpreted to include personal autonomy, dignity, and the right to make choices about intimate matters."
    },

    {
      id: 'pol-009',
      topic: 'Fundamental Rights',
      subtopic: 'Right to Privacy',
      year: 2018,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Right to Privacy is protected as an intrinsic part of Right to Life and Personal Liberty. Which of the following in the Constitution of India correctly and appropriately implies the above?',
      options: [
        'Article 14 and the provisions under the 42nd Amendment to the Constitution',
        'Article 17 and the Directive Principles of State Policy under Part IV',
        'Article 21 and the freedoms guaranteed under Part III',
        'Article 24 and the provisions under the 44th Amendment to the Constitution'
      ],
      correct: 2,
      explanation: "In K.S. Puttaswamy v. Union of India (2017), a nine-judge Supreme Court bench unanimously held that the right to privacy is a fundamental right protected as an intrinsic part of the right to life and personal liberty under Article 21 and as part of the freedoms guaranteed in Part III of the Constitution."
    },

    {
      id: 'pol-010',
      topic: 'Fundamental Rights',
      subtopic: 'Right to Property',
      year: 2021,
      type: 'prelims',
      qtype: 'direct',
      stem: 'What is the position of the Right to Property in India?',
      options: [
        'Legal right available to citizens only',
        'Legal right available to any person',
        'Fundamental Right available to citizens only',
        'Neither a Fundamental Right nor a legal right'
      ],
      correct: 1,
      explanation: "By the 44th Constitutional Amendment Act, 1978, the Right to Property was removed from the list of Fundamental Rights and converted to a constitutional legal right under Article 300A. Unlike Fundamental Rights (which are available only to citizens in some cases), this legal right is available to any person including non-citizens and juridical persons."
    },

    {
      id: 'pol-011',
      topic: 'Fundamental Rights',
      subtopic: 'Writs',
      year: 2022,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the writs issued by the Courts in India, consider the following statements:',
      statements: [
        'Mandamus will not lie against a private organisation unless it is entrusted with a public duty',
        'Mandamus will not lie against a Company even though it may be a Government Company',
        'Any public-minded person can be a petitioner to move the Court to obtain the writ of Quo Warranto'
      ],
      tail: 'Which of the statements given above are correct?',
      options: [
        '1 and 2 only',
        '2 and 3 only',
        '1 and 3 only',
        '1, 2 and 3'
      ],
      correct: 3,
      explanation: "All three statements are correct. Mandamus requires a public duty — it does not lie against purely private entities or Government Companies (which lack statutory/public obligations). Quo Warranto is a writ that any person can seek to challenge an unlawful occupation of a public office, as affirmed under Article 226."
    },

    {
      id: 'pol-012',
      topic: 'Fundamental Rights',
      subtopic: 'Right to Vote',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Right to vote and to be elected in India is a',
      options: [
        'Fundamental Right',
        'Natural Right',
        'Constitutional Right',
        'Legal Right'
      ],
      correct: 2,
      explanation: "The right to vote is a Constitutional Right under Article 326 of the Constitution (not a Fundamental Right under Part III). It is further regulated by the Representation of the People Act, 1951. NCERT textbooks identify voting rights as an important constitutional right enshrined in Article 326."
    },

    // ─── DIRECTIVE PRINCIPLES OF STATE POLICY ───────────────────────────────

    {
      id: 'pol-013',
      topic: 'Directive Principles of State Policy',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Separation of the Judiciary from the Executive is enjoined by which of the following?',
      options: [
        'The Preamble of the Constitution',
        'A Directive Principle of State Policy',
        'The Seventh Schedule of the Constitution',
        'Conventional practice'
      ],
      correct: 1,
      explanation: "Article 50 under Directive Principles of State Policy (Part IV) directs the State to take steps to separate the Judiciary from the Executive in the public services. This is aspirational and not directly enforceable, but the separation is meant to ensure judicial independence."
    },

    {
      id: 'pol-014',
      topic: 'Directive Principles of State Policy',
      year: 2020,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Directive Principles of State Policy, consider the following statements:',
      statements: [
        'The Directive Principles of State Policy are enforceable by courts',
        'The Directive Principles of State Policy are not enforceable by any court',
        'The Directive Principles of State Policy are intended to influence the lawmaking process'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        '1 and 3 only',
        '2 and 3 only'
      ],
      correct: 3,
      explanation: "Article 37 explicitly states that Directive Principles are not enforceable by any court (Statement 2 correct), but they are fundamental in governance and must be considered when the State makes laws (Statement 3 correct). Statement 1 is incorrect — DPSPs are non-justiciable."
    },

    {
      id: 'pol-015',
      topic: 'Directive Principles of State Policy',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which principle among the following was added to the Directive Principles of State Policy by the 42nd Amendment to the Constitution of India?',
      options: [
        'Equal pay for equal work for both men and women',
        'Participation of workers in the management of industries',
        'Right to work, education and public assistance',
        'Securing living wage and humane conditions of work to workers'
      ],
      correct: 1,
      explanation: "The 42nd Constitutional Amendment Act, 1976 added four new Directive Principles: equal justice and free legal aid (Article 39A), participation of workers in management of industries (Article 43A), protection of environment (Article 48A), and minimising inequalities. Article 43A on workers' participation in management was one of the new additions."
    },

    {
      id: 'pol-016',
      topic: 'Directive Principles of State Policy',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following parts of the Constitution of India declares the ideal of Welfare State?',
      options: [
        'Directive Principles of State Policy',
        'Fundamental Rights',
        'The Preamble',
        'The Seventh Schedule'
      ],
      correct: 0,
      explanation: "Part IV of the Constitution (Directive Principles of State Policy, Articles 36–51) articulates the welfare state concept. Article 38 specifically directs the State to promote welfare of the people by securing a social order in which justice — social, economic and political — prevails. The DPSPs as a whole define the welfare state ideal."
    },

    // ─── PARLIAMENT ─────────────────────────────────────────────────────────

    {
      id: 'pol-017',
      topic: 'Parliament',
      subtopic: 'Parliamentary Committees',
      year: 2018,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following Parliamentary Committees scrutinises whether the powers to make regulations, rules, sub-rules, and bye-laws delegated by Parliament to the Executive are being properly exercised within the scope of such delegation?',
      options: [
        'Committee on Government Assurances',
        'Committee on Subordinate Legislation',
        'Rules Committee',
        'Business Advisory Committee'
      ],
      correct: 1,
      explanation: "The Committee on Subordinate Legislation examines and reports to the House whether the powers delegated by Parliament to the executive to make rules, regulations, bye-laws etc. are being exercised appropriately within the ambit of delegation. It acts as a check on delegated legislative authority."
    },

    {
      id: 'pol-018',
      topic: 'Parliament',
      subtopic: 'Parliamentary Control',
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: 'The Parliament of India exercises control over the functions of the Council of Ministers through',
      statements: [
        'Adjournment motion',
        'Question hour',
        'Supplementary questions'
      ],
      tail: 'Select the correct answer using the code given below:',
      options: [
        '1 only',
        '2 and 3 only',
        '1 and 3 only',
        '1, 2 and 3'
      ],
      correct: 3,
      explanation: "Parliament exercises control over the executive through Question Hour (oral and written questions), Supplementary Questions (follow-ups during Question Hour), and Adjournment Motion (to raise urgent matters of public importance, implying censure of the executive). All three are valid parliamentary oversight tools."
    },

    {
      id: 'pol-019',
      topic: 'Parliament',
      subtopic: 'Private Member Bills',
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Parliament of India, consider the following statements:',
      statements: [
        'A private member\'s bill is a bill presented by a Member of Parliament who is not elected but only nominated by the President of India',
        'Recently, a private member\'s bill has been passed in the Parliament of India for the first time in its history'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 3,
      explanation: "Statement 1 is wrong — a Private Member's Bill is introduced by any Member of Parliament who is not a minister, whether elected or nominated. Statement 2 is wrong — several private member bills have passed since independence (e.g., the Muslim Wakf Act, 1952); it is false that one passed 'for the first time recently'."
    },

    {
      id: 'pol-020',
      topic: 'Parliament',
      subtopic: 'Rajya Sabha Powers',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Rajya Sabha has equal powers with Lok Sabha in',
      options: [
        'The matter of creating new All India Services',
        'Amending the Constitution',
        'The removal of the government in power',
        'Making cut motions'
      ],
      correct: 1,
      explanation: "Under Article 368, both Houses of Parliament have equal powers in amending the Constitution — a constitutional amendment bill must be passed by a special majority in each House separately. For Money Bills and votes of no-confidence, Lok Sabha has exclusive or preponderant powers. Note: Article 312 gives Rajya Sabha exclusive power on All India Services, but that is an exclusive power, not equal."
    },

    {
      id: 'pol-021',
      topic: 'Parliament',
      subtopic: 'Exclusive Powers of Lok Sabha',
      year: 2022,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Which of the following is/are the exclusive power(s) of Lok Sabha?',
      statements: [
        'To ratify the declaration of Emergency',
        'To pass a motion of no-confidence against the Council of Ministers',
        'To impeach the President of India'
      ],
      tail: 'Select the correct answer using the code given below:',
      options: [
        '1 and 2',
        '2 only',
        '1 and 3',
        '3 only'
      ],
      correct: 1,
      explanation: "Only the motion of no-confidence is an exclusive power of Lok Sabha (Article 75(3) — collective responsibility to Lok Sabha). Emergency ratification under Article 352(4) requires approval by both Houses. Presidential impeachment under Article 61 can be initiated by either House with equal powers — it is not an exclusive Lok Sabha power."
    },

    {
      id: 'pol-022',
      topic: 'Parliament',
      subtopic: 'Anti-Defection Law',
      year: 2022,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to anti-defection law in India, consider the following statements:',
      statements: [
        'The law specifies that a nominated legislator cannot join any political party within six months of being appointed to the House',
        'The law does not provide any time-frame within which the Presiding Officer has to decide a defection case'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 1,
      explanation: "Statement 1 is incorrect — the Tenth Schedule allows nominated members to join a political party within six months of taking their seat (it permits joining, not prohibits it within six months). Statement 2 is correct — the anti-defection law contains no time limit for the Speaker/Chairman to decide on disqualification petitions, a significant lacuna noted by the Supreme Court."
    },

    {
      id: 'pol-023',
      topic: 'Parliament',
      subtopic: 'Deputy Speaker',
      year: 2022,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Deputy Speaker of Lok Sabha, consider the following statements:',
      statements: [
        'As per the Rules of Procedure and Conduct of Business in Lok Sabha, the election of Deputy Speaker shall be held on such date as the Speaker may fix',
        'There is a mandatory provision that the election of a candidate as Deputy Speaker of Lok Sabha shall be from either the principal opposition party or the ruling party',
        'The Deputy Speaker has the same power as of the Speaker when presiding over the sitting of the House and no appeal lies against his rulings',
        'The well-established parliamentary practice regarding the appointment of Deputy Speaker is that the motion is moved by the Speaker and duly seconded by the Prime Minister'
      ],
      tail: 'Which of the statements given above are correct?',
      options: [
        '1 and 3 only',
        '1, 2 and 3',
        '3 and 4 only',
        '2 and 4 only'
      ],
      correct: 0,
      explanation: "Statement 1 is correct — the Rules of Procedure vest the authority to fix the date for Deputy Speaker election in the Speaker. Statement 3 is correct — the Deputy Speaker exercises identical powers to the Speaker while presiding, with no provision for appeal against rulings. Statements 2 and 4 are incorrect — no constitutional mandate exists on party affiliation for Deputy Speaker, and the motion convention described in statement 4 is inaccurate."
    },

    {
      id: 'pol-024',
      topic: 'Parliament',
      subtopic: 'Sessions',
      year: 2020,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Parliament of India, consider the following statements:',
      statements: [
        'The President of India can summon a session of Parliament at such a place as he/she thinks fit',
        'The Constitution of India provides for three sessions of Parliament in a year, but it is not mandatory',
        'There is no minimum number of days that Parliament is required to meet in a year'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        '1 and 3 only',
        '2 and 3 only'
      ],
      correct: 0,
      explanation: "Statement 1 is correct — Article 85 empowers the President to summon Parliament at any time and at any place. Statement 2 is incorrect — the Constitution does not prescribe three sessions; it only mandates that not more than six months shall intervene between two sessions (Article 85). Statement 3 is incorrect — the six-month interval requirement implies a minimum meeting frequency."
    },

    // ─── UNION EXECUTIVE ────────────────────────────────────────────────────

    {
      id: 'pol-025',
      topic: 'Union Executive',
      subtopic: 'Presidential Election',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the election of the President of India, consider the following statements:',
      statements: [
        'The value of the vote of each MLA of a State is different from that of the MLAs of another State',
        'The value of the vote of the Lok Sabha Members of Parliament is more than that of the Rajya Sabha Members of Parliament'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 0,
      explanation: "Statement 1 is correct — MLA vote values vary by state as they are calculated based on the ratio of a state's population to its assembly strength. Statement 2 is incorrect — all elected MPs (Lok Sabha and Rajya Sabha) have the same vote value (currently 708), irrespective of which House they belong to."
    },

    {
      id: 'pol-026',
      topic: 'Union Executive',
      subtopic: 'Governor',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'No criminal proceedings shall be instituted against the Governor of a State in any court during his term of office',
        'The emoluments and allowances of the Governor of a State shall not be diminished during his term of office'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 2,
      explanation: "Both statements are correct. Article 361 grants immunity to the Governor from criminal proceedings during their tenure in any court. Article 158(4) provides that the Governor's emoluments and allowances are charged upon the Consolidated Fund of the State and cannot be diminished during their term of office."
    },

    {
      id: 'pol-027',
      topic: 'Union Executive',
      subtopic: 'Governor',
      year: 2019,
      type: 'prelims',
      qtype: 'direct',
      stem: "Which body recommended that governors should be 'eminent persons from outside the State' and should not have participated in active politics in the recent past?",
      options: [
        'First Administrative Reforms Commission (1966)',
        'Rajamannar Committee (1969)',
        'Sarkaria Commission (1983)',
        'National Commission to Review the Working of the Constitution (2000)'
      ],
      correct: 2,
      explanation: "The Sarkaria Commission (1983) recommended that governors should be detached figures — eminent persons from outside the state, not having any immediate past association with active politics, and appointed in consultation with the Chief Minister. These recommendations were reiterated by the Punchhi Commission (2010)."
    },

    {
      id: 'pol-028',
      topic: 'Union Executive',
      subtopic: 'Speaker',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Legislative Assembly of a State in India, consider the following statements:',
      statements: [
        'The Speaker of the Legislative Assembly shall vacate his/her office if he/she ceases to be a member of the Assembly',
        'Whenever the Legislative Assembly is dissolved, the Speaker shall immediately vacate his/her office'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 0,
      explanation: "Statement 1 is correct per Article 179(a) — the Speaker vacates office upon ceasing to be a member of the Assembly. Statement 2 is incorrect — under Article 180, the Speaker does NOT vacate office immediately on dissolution; they continue in office until the newly elected Assembly meets for the first time."
    },

    {
      id: 'pol-029',
      topic: 'Union Executive',
      subtopic: 'Council of Ministers',
      year: 2022,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The Constitution of India classifies the ministers into four ranks viz. Cabinet Minister, Minister of State with Independent Charge, Minister of State and Deputy Minister',
        'The total number of ministers in the Union Government, including the Prime Minister, shall not exceed 15 percent of the total number of members in the Lok Sabha'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 1,
      explanation: "Statement 1 is incorrect — the Constitution only mentions 'Council of Ministers' without classifying ranks; the four-tier classification is conventional, not constitutional. Statement 2 is correct per Article 75(1A), inserted by the 91st Constitutional Amendment Act, 2003, which caps the Union Council of Ministers at 15% of the Lok Sabha's total membership."
    },

    {
      id: 'pol-030',
      topic: 'Union Executive',
      subtopic: 'Attorney General',
      year: 2022,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The Attorney General of India and the Solicitor General of India are the only officers of the Government who are allowed to participate in the meetings of the Parliament of India',
        'According to the Constitution of India, the Attorney General of India submits his/her resignation when the Government which appointed him/her resigns'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 3,
      explanation: "Statement 1 is incorrect — Article 88 permits only the Attorney General (not the Solicitor General) to participate in parliamentary proceedings. Statement 2 is incorrect — Article 76(4) provides that the Attorney General holds office during the pleasure of the President; there is no provision for automatic resignation when the government changes."
    },

    // ─── JUDICIARY ──────────────────────────────────────────────────────────

    {
      id: 'pol-031',
      topic: 'Judiciary',
      subtopic: 'Judicial Review',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'In India, Judicial Review implies',
      options: [
        'The power of the Judiciary to pronounce upon the constitutionality of laws and executive orders',
        'The power of the Judiciary to question the wisdom of laws enacted by Legislatures',
        'The power of the Judiciary to review all legislative enactments before they receive the assent of the President',
        'The power of the Judiciary to review its own judgements given earlier in similar or different cases'
      ],
      correct: 0,
      explanation: "Judicial Review in India (under Articles 13, 32, 131–136, 226) is the power of the Supreme Court and High Courts to examine the constitutional validity of legislative acts and executive orders, and to declare them void if they violate the Constitution. It is not a review of the policy wisdom behind laws."
    },

    {
      id: 'pol-032',
      topic: 'Judiciary',
      subtopic: 'High Courts and Judicial Review',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Constitution of India, consider the following statements:',
      statements: [
        'No High Court in India has the power to declare any Central law to be constitutionally invalid',
        'An amendment to the Constitution of India cannot be questioned by the Supreme Court of India'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 3,
      explanation: "Both statements are incorrect. High Courts possess the power of judicial review under Article 226 and can declare central laws unconstitutional if they violate fundamental rights. The Supreme Court can also review constitutional amendments — in Kesavananda Bharati (1973), the Court established that amendments violating the basic structure can be struck down."
    },

    {
      id: 'pol-033',
      topic: 'Judiciary',
      subtopic: 'Judge Impeachment',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements regarding the impeachment of a Judge of the Supreme Court of India:',
      statements: [
        'The motion for impeachment of a Judge cannot be rejected by the Speaker of the Lok Sabha',
        'The Constitution of India defines and gives details of what constitutes \'incapacity and proved misbehaviour\' of Judges of the Supreme Court',
        'The details of the process of impeachment of Judges of the Supreme Court of India are given in the Judges (Inquiry) Act, 1968',
        'If the motion for impeachment of a Judge is taken up for voting, the law requires the motion to be backed by each House of Parliament and supported by a majority of total membership of that House and by not less than two-thirds of total members of that House present and voting'
      ],
      tail: 'Which of the statements given above are correct?',
      options: [
        '1 and 2',
        '3 only',
        '3 and 4 only',
        '1, 3 and 4'
      ],
      correct: 2,
      explanation: "Statement 3 is correct — procedural details are in the Judges (Inquiry) Act, 1968. Statement 4 is correct — Article 124(4) requires the motion to pass by a majority of total membership AND by not less than two-thirds of members present and voting. Statement 1 is wrong — the Vice President (Chairman of Rajya Sabha) rejected the Congress-led impeachment motion against CJI Dipak Misra in 2018. Statement 2 is wrong — the Constitution does not define 'incapacity and proved misbehaviour'."
    },

    {
      id: 'pol-034',
      topic: 'Judiciary',
      subtopic: 'Contempt of Courts',
      year: 2022,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'Pursuant to the report of the H.N. Sanyal Committee, the Contempt of Courts Act, 1971 was passed',
        'The Constitution of India empowers the Supreme Court and the High Courts to punish for contempt of themselves',
        'The Constitution of India defines Civil Contempt and Criminal Contempt',
        'In India, the Parliament is vested with the power to make laws on Contempt of Court'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 and 2 only',
        '1, 2 and 4',
        '3 and 4 only',
        '3 only'
      ],
      correct: 1,
      explanation: "Statements 1, 2 and 4 are correct. The H.N. Sanyal Committee report led to the Contempt of Courts Act, 1971. Articles 129 and 215 empower the Supreme Court and High Courts to punish for contempt. Entry 77, List I and Entry 14, List III grant Parliament the power to legislate on contempt. Statement 3 is incorrect — the Contempt of Courts Act (not the Constitution) defines civil and criminal contempt."
    },

    {
      id: 'pol-035',
      topic: 'Judiciary',
      subtopic: 'Ninth Schedule',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The Parliament of India can place a particular law in the Ninth Schedule of the Constitution',
        'The validity of a law placed in the Ninth Schedule cannot be examined by any court'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 0,
      explanation: "Statement 1 is correct — Parliament can add laws to the Ninth Schedule through a constitutional amendment, as first done by the 1st Amendment Act, 1951. Statement 2 is incorrect — in I.R. Coelho v. State of Tamil Nadu (2007), the Supreme Court held that Ninth Schedule laws added after April 24, 1973 (Kesavananda Bharati judgment date) can be judicially reviewed if they violate the basic structure."
    },

    {
      id: 'pol-036',
      topic: 'Judiciary',
      subtopic: 'Ninth Schedule Origin',
      year: 2019,
      type: 'prelims',
      qtype: 'direct',
      stem: 'The Ninth Schedule was introduced in the Constitution of India during the prime ministership of',
      options: [
        'Jawaharlal Nehru',
        'Lal Bahadur Shastri',
        'Indira Gandhi',
        'Morarji Desai'
      ],
      correct: 0,
      explanation: "The Ninth Schedule was added by the 1st Constitutional Amendment Act, 1951, during the prime ministership of Jawaharlal Nehru. It was introduced to protect land reform laws (especially zamindari abolition) from judicial challenge under fundamental rights (property rights under Articles 19(1)(f) and 31)."
    },

    // ─── FEDERALISM ─────────────────────────────────────────────────────────

    {
      id: 'pol-037',
      topic: 'Federalism',
      subtopic: 'Nature of Indian Federalism',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following is NOT a feature of Indian federalism?',
      options: [
        'There is an independent judiciary in India',
        'Powers have been clearly divided between the Centre and the States',
        'The federating units have been given unequal representation in the Rajya Sabha',
        'It is the result of an agreement among the federating units'
      ],
      correct: 3,
      explanation: "The Indian federation was not formed by an agreement among pre-existing states — it was created by the Constitution. This distinguishes India from federations like the USA or Australia, where pre-existing states came together voluntarily. India adopted a top-down model; the Constitution created the states and distributed powers."
    },

    {
      id: 'pol-038',
      topic: 'Federalism',
      subtopic: "President's Rule",
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: "Which of the following are NOT necessarily the consequences of the proclamation of the President's Rule in a State?",
      statements: [
        'Dissolution of the State Legislative Assembly',
        'Removal of the Council of Ministers in the State',
        'Dissolution of the local bodies'
      ],
      tail: 'Select the correct answer using the code given below:',
      options: [
        '1 and 2 only',
        '1 and 3 only',
        '2 and 3 only',
        '1, 2 and 3'
      ],
      correct: 1,
      explanation: "When President's Rule is imposed under Article 356, the removal of the Council of Ministers IS a necessary consequence. However, dissolution of the State Legislature is NOT automatic — the President may merely suspend it. Dissolution of local bodies is also NOT a necessary consequence. Hence statements 1 and 3 are not necessarily consequences."
    },

    {
      id: 'pol-039',
      topic: 'Federalism',
      subtopic: 'Finance Commission',
      year: 2015,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Fourteenth Finance Commission, which of the following statements is/are correct?',
      statements: [
        'It has increased the share of States in the central divisible pool from 32 percent to 42 percent',
        'It has made recommendations concerning sector-specific grants'
      ],
      tail: 'Select the correct answer using the code given below:',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 0,
      explanation: "Statement 1 is correct — the 14th Finance Commission (headed by Y.V. Reddy) recommended increasing states' share in the divisible pool from 32% to 42%, the highest devolution ever recommended. Statement 2 is incorrect — the 14th Finance Commission actually moved away from sector-specific grants, preferring untied grants to give states greater fiscal autonomy."
    },

    {
      id: 'pol-040',
      topic: 'Federalism',
      subtopic: 'Finance Commission',
      year: 2011,
      type: 'prelims',
      qtype: 'direct',
      stem: 'With reference to the Finance Commission of India, which of the following statements is correct?',
      options: [
        'It encourages the inflow of foreign capital for infrastructure development',
        'It facilitates the proper distribution of finances among the Public Sector Undertakings',
        'It ensures transparency in financial administration',
        'None of the above statements is correct in this context'
      ],
      correct: 3,
      explanation: "The Finance Commission (Article 280) is a constitutional body that recommends the distribution of net tax proceeds between the Centre and states, grants-in-aid to states, and measures to augment the Consolidated Fund of states. It does not deal with PSUs, foreign capital, or general financial administration transparency — all three options describe functions outside its mandate."
    },

    // ─── LOCAL GOVERNMENT ────────────────────────────────────────────────────

    {
      id: 'pol-041',
      topic: 'Local Government',
      subtopic: 'Panchayati Raj — Concept',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Local self-government can be best explained as an exercise in',
      options: [
        'Federalism',
        'Democratic decentralisation',
        'Administrative delegation',
        'Direct democracy'
      ],
      correct: 1,
      explanation: "The Balwant Rai Mehta Committee (1957) recommended a scheme of 'democratic decentralisation' that became the foundation of Panchayati Raj. Local self-government empowers communities to participate in decisions affecting their lives, embodying democratic decentralisation rather than mere administrative delegation."
    },

    {
      id: 'pol-042',
      topic: 'Local Government',
      subtopic: '73rd Amendment',
      year: 2016,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements regarding Panchayati Raj Institutions:',
      statements: [
        'A person wishing to contest as a Panchayat member should have attained the age of 21 years',
        'If elections to a Panchayat are not held within six months of its premature dissolution, the State Election Commission can seek the intervention of the Supreme Court'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 0,
      explanation: "Statement 1 is correct — Article 243F sets the minimum age for contesting Panchayat elections at 21 years. Statement 2 is incorrect — Article 243E(4) mandates elections within six months of premature dissolution, but the route for judicial intervention described here is not how it works constitutionally; the State Election Commission conducts elections but cannot directly invoke Supreme Court in the manner stated."
    },

    {
      id: 'pol-043',
      topic: 'Local Government',
      subtopic: '73rd Amendment',
      year: 1997,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following was NOT proposed by the 73rd Constitutional Amendment in the area of Panchayati Raj?',
      options: [
        'Reservation of one-third seats for women in Panchayats',
        'Establishment of State Finance Commissions',
        'Disqualification of Panchayat functionaries who have more than two children',
        'Creation of State Election Commissions to conduct Panchayat elections'
      ],
      correct: 2,
      explanation: "The 73rd Amendment did NOT include any provision about disqualifying persons with more than two children from contesting Panchayat elections. It provided for: one-third reservation for women (Article 243D), State Finance Commissions (Article 243I), State Election Commissions (Article 243K), and a three-tier structure. The two-child norm is found only in some state-level legislation."
    },

    {
      id: 'pol-044',
      topic: 'Local Government',
      subtopic: 'Panchayat Dissolution',
      year: 2009,
      type: 'prelims',
      qtype: 'direct',
      stem: 'If a Panchayat is dissolved, elections are to be held within',
      options: [
        '1 month',
        '3 months',
        '6 months',
        '1 year'
      ],
      correct: 2,
      explanation: "Article 243E(4) provides that if a Panchayat is dissolved before the expiry of its normal five-year term, elections shall be held within six months from the date of dissolution. The newly constituted Panchayat will serve only the remainder of the original term."
    },

    {
      id: 'pol-045',
      topic: 'Local Government',
      subtopic: 'Metropolitan Planning',
      year: 2011,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the provisions of Metropolitan Planning Committees, consider the following statements:',
      statements: [
        'The Constitution provides for the constitution of a Metropolitan Planning Committee at the district level',
        'The number of persons elected to a Metropolitan Planning Committee from ward committees shall be not less than two-thirds of its total membership'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 and 2 only',
        '2 only',
        '1 only',
        'Neither 1 nor 2'
      ],
      correct: 1,
      explanation: "Statement 1 is incorrect — Article 243ZE provides for Metropolitan Planning Committees in metropolitan areas (population of 10 lakh or more), not at the district level per se. Statement 2 is correct — Article 243ZE(2) mandates that not less than two-thirds of the members of a Metropolitan Planning Committee shall be elected by elected members of Municipalities and Chairpersons of Panchayats in the metropolitan area."
    },

    // ─── EMERGENCY PROVISIONS ────────────────────────────────────────────────

    {
      id: 'pol-046',
      topic: 'Emergency Provisions',
      subtopic: "President's Rule — Effects",
      year: 2018,
      type: 'prelims',
      qtype: 'direct',
      stem: "When the President of India exercises the power under Article 356 in respect of a particular State, which one of the following statements best describes what happens to legislative power?",
      options: [
        'The Legislative Assembly of the State automatically dissolves',
        'The Parliament exercises the legislative powers of the State',
        'The President alone makes all laws for the State by ordinance',
        'All pending legislation in the State Legislature is deemed to have lapsed'
      ],
      correct: 1,
      explanation: "Under Article 356, when President's Rule is imposed, Parliament assumes the legislative power of the State Legislature (per Article 357). The State Legislature may be suspended or dissolved — it does not automatically dissolve. Parliament can delegate the power to the President to make laws for the State during President's Rule."
    },

    {
      id: 'pol-047',
      topic: 'Emergency Provisions',
      subtopic: 'Basic Structure',
      year: 2020,
      type: 'prelims',
      qtype: 'statement',
      stem: "Consider the following statements regarding the 'basic structure' of the Constitution of India:",
      statements: [
        "The Constitution of India defines its 'basic structure' in terms of federalism, secularism, fundamental rights and democracy",
        "The power of judicial review is an element of the 'basic structure' of the Constitution of India"
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 1,
      explanation: "Statement 1 is incorrect — the Constitution does NOT define 'basic structure' anywhere. The doctrine was judicially evolved in Kesavananda Bharati v. State of Kerala (1973) through interpretation. Statement 2 is correct — the Supreme Court has held judicial review to be part of the basic structure of the Constitution (L. Chandra Kumar case, 1997)."
    },

    // ─── CONSTITUTIONAL BODIES ──────────────────────────────────────────────

    {
      id: 'pol-048',
      topic: 'Constitutional Bodies',
      subtopic: 'Election Commission',
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The Election Commission of India is a five-member body',
        'Union Ministry of Home Affairs decides the election schedule for general elections and bye-elections',
        'Election Commission of India resolves the disputes relating to splits/mergers of recognised political parties'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 and 2 only',
        '2 only',
        '2 and 3 only',
        '3 only'
      ],
      correct: 3,
      explanation: "Statement 1 is incorrect — the Election Commission consists of the Chief Election Commissioner and two Election Commissioners (three-member body per the Election Commission Act, 1991). Statement 2 is incorrect — the Election Commission itself decides election schedules, not the Ministry of Home Affairs. Statement 3 is correct — the ECI adjudicates disputes about mergers/splits of recognised political parties and allocation of party symbols under the Election Symbols Order, 1968."
    },

    {
      id: 'pol-049',
      topic: 'Constitutional Bodies',
      subtopic: 'CAG',
      year: 2015,
      type: 'prelims',
      qtype: 'direct',
      stem: 'The Comptroller and Auditor-General of India acts as the chief guardian of',
      options: [
        'The Consolidated Fund of India',
        'The public accounts of the Union and the States',
        'The Contingency Fund of India',
        'The financial interests of the Union Government alone'
      ],
      correct: 1,
      explanation: "Under Articles 148–151, the CAG is the supreme audit authority. Per Article 149, the CAG audits the accounts related to all expenditure from the Consolidated Fund of India and of each State and Union Territory with a legislature. The CAG acts as guardian of the public purse at both Union and State levels — not just the Union."
    },

    {
      id: 'pol-050',
      topic: 'Constitutional Bodies',
      subtopic: 'Constitutional vs Statutory Bodies',
      year: 2023,
      type: 'prelims',
      qtype: 'direct',
      stem: 'How many of the following are constitutional bodies?\n1. National Commission for Backward Classes\n2. National Human Rights Commission\n3. National Law Commission\n4. National Consumer Disputes Redressal Commission',
      options: [
        'Only one',
        'Only two',
        'Only three',
        'All four'
      ],
      correct: 0,
      explanation: "Only the National Commission for Backward Classes (NCBC) is a constitutional body — it was granted constitutional status by the 102nd Constitutional Amendment Act, 2018, under Article 338B. The National Human Rights Commission is a statutory body (Protection of Human Rights Act, 1993). The National Law Commission and National Consumer Disputes Redressal Commission are also non-constitutional statutory/executive bodies."
    },

    {
      id: 'pol-051',
      topic: 'Constitutional Bodies',
      subtopic: 'Parliamentary History',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Parliament of India, consider the following statements:',
      statements: [
        'In the First Lok Sabha, the largest party in opposition was the Swatantra Party',
        "In Lok Sabha, a 'Leader of the Opposition' was recognized for the first time in 1969",
        'In Lok Sabha, if a party does not have a minimum of 75 members, its leader cannot be recognized as the Leader of the Opposition'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 and 3 only',
        '2 only',
        '2 and 3 only',
        '1, 2 and 3'
      ],
      correct: 1,
      explanation: "Statement 1 is incorrect — the Swatantra Party was not founded until 1959 and could not have been in the First Lok Sabha (1952). The Communist Party of India was the largest opposition group. Statement 2 is correct — the post of Leader of Opposition was first officially recognized in Lok Sabha in 1969. Statement 3 is incorrect — the requirement is one-tenth of the total House strength (approximately 55 members), not 75."
    },

    // ─── AMENDMENT PROCEDURE ────────────────────────────────────────────────

    {
      id: 'pol-052',
      topic: 'Amendment Procedure',
      subtopic: 'Article 368 — Procedure',
      year: 2022,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'A Bill to amend the Constitution of India requires prior recommendation of the President of India',
        'When a Constitution Amendment Bill is presented to the President of India, it is obligatory for the President of India to give his/her assent',
        'A Constitution Amendment Bill must be passed by both Houses of the Parliament of India by a special majority and there is no provision for joint sitting of both Houses for this purpose'
      ],
      tail: 'Which of the statements given above are correct?',
      options: [
        '1 and 2 only',
        '2 and 3 only',
        '1 and 3 only',
        '1, 2 and 3'
      ],
      correct: 1,
      explanation: "Statement 1 is incorrect — no prior presidential recommendation is required to introduce a Constitution Amendment Bill (unlike certain Money Bills). Statement 2 is correct — Article 368(2) makes presidential assent mandatory; the President cannot withhold assent to a Constitution Amendment Bill. Statement 3 is correct — unlike ordinary bills, there is no provision for a joint sitting to resolve a deadlock on a constitutional amendment; each House must pass it separately by a special majority."
    },

    {
      id: 'pol-053',
      topic: 'Amendment Procedure',
      subtopic: 'Basic Structure and 99th Amendment',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The 44th Amendment to the Constitution of India significantly curtailed the Fundamental Rights given to the members of the armed forces under Article 33',
        'The Supreme Court of India struck down the Constitution (99th Amendment) Act, 2014 as being violative of the independence of judiciary'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 1,
      explanation: "Statement 1 is incorrect — the 44th Amendment (1978) actually restored several Fundamental Rights curtailed by the 42nd Amendment; it did not curtail rights of armed forces. Statement 2 is correct — the Supreme Court in Supreme Court Advocates-on-Record Association v. Union of India (2015) struck down the 99th Amendment and the NJAC Act, holding they violated the independence of judiciary which is part of the basic structure."
    },

    {
      id: 'pol-054',
      topic: 'Amendment Procedure',
      subtopic: 'Tenth Schedule',
      year: 2014,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which Schedule of the Constitution of India contains provisions regarding disqualification of the members of Parliament and State Legislatures on the ground of defection?',
      options: [
        'Second Schedule',
        'Fifth Schedule',
        'Eighth Schedule',
        'Tenth Schedule'
      ],
      correct: 3,
      explanation: "The Tenth Schedule was added to the Constitution by the 52nd Constitutional Amendment Act, 1985. It contains provisions for disqualification of members of Parliament and State Legislatures on grounds of defection from their party. This is commonly known as the Anti-Defection Law."
    },

    {
      id: 'pol-055',
      topic: 'Amendment Procedure',
      subtopic: 'Ratification',
      year: 2013,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the amendment of the Constitution of India, consider the following statements:',
      statements: [
        'A Constitutional Amendment Bill must be initiated in the Lok Sabha only',
        'If such an amendment seeks to make changes in the federal character of the Constitution, the amendment also requires to be ratified by the legislature of all States of India'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 3,
      explanation: "Both statements are incorrect. Statement 1 is wrong — unlike Money Bills, a Constitution Amendment Bill can be introduced in either House of Parliament (Article 368). Statement 2 is wrong — ratification for federal amendments requires not all states but 'not less than one-half of the State Legislatures' (Article 368(2)). Ratification by all states is never required."
    },

    {
      id: 'pol-056',
      topic: 'Amendment Procedure',
      subtopic: '91st Amendment',
      year: 2009,
      type: 'prelims',
      qtype: 'direct',
      stem: 'The provision that the total number of Ministers in the Union Council of Ministers shall not exceed 15% of the total membership of Lok Sabha was introduced by which Constitutional Amendment?',
      options: [
        '90th Amendment',
        '91st Amendment',
        '92nd Amendment',
        '93rd Amendment'
      ],
      correct: 1,
      explanation: "The 91st Constitutional Amendment Act, 2003 inserted Article 75(1A), limiting the total number of ministers in the Union Council of Ministers (including the Prime Minister) to not more than 15% of Lok Sabha's total membership. The same provision for States was inserted through Article 164(1A) by the same amendment."
    },

    {
      id: 'pol-057',
      topic: 'Amendment Procedure',
      subtopic: '1st Amendment',
      year: 2023,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following Constitutional Amendments was widely believed to have been enacted to overcome certain judicial interpretations of the Fundamental Rights?',
      options: [
        '1st Amendment',
        '42nd Amendment',
        '44th Amendment',
        '86th Amendment'
      ],
      correct: 0,
      explanation: "The 1st Constitutional Amendment Act, 1951 was enacted primarily to overcome judicial challenges to land reform laws. The Supreme Court had struck down zamindari abolition laws as violating property rights under Fundamental Rights. The amendment added the Ninth Schedule and restricted Articles 19(1)(f) and 31 to protect agrarian reform legislation from judicial challenge."
    },

    // ─── FUNDAMENTAL DUTIES ─────────────────────────────────────────────────

    {
      id: 'pol-058',
      topic: 'Fundamental Duties',
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Which of the following statements is/are true of the Fundamental Duties of an Indian citizen?',
      statements: [
        'A legislative process has been provided to enforce these duties',
        'They are correlative to legal duties'
      ],
      tail: 'Select the correct answer using the code given below:',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 3,
      explanation: "Both statements are incorrect. Statement 1 is wrong — the Swaran Singh Committee recommended enforcement mechanisms, but none was incorporated into the Constitution. The Fundamental Duties under Article 51A are non-justiciable moral obligations. Statement 2 is wrong — Fundamental Duties are not universally co-extensive with legal duties; they are constitutional moral obligations, not correlative legal duties."
    },

    {
      id: 'pol-059',
      topic: 'Fundamental Duties',
      subtopic: 'UDHR',
      year: 2020,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Besides Fundamental Rights, which of the following parts of the Constitution of India reflect/reflects the principles and provisions of the Universal Declaration of Human Rights (1948)?',
      statements: [
        'Preamble',
        'Directive Principles of State Policy',
        'Fundamental Duties'
      ],
      tail: 'Select the correct answer using the code given below:',
      options: [
        '1 and 2 only',
        '2 only',
        '1 and 3 only',
        '1, 2 and 3'
      ],
      correct: 3,
      explanation: "All three parts reflect principles of the UDHR (1948). The Preamble's goals of justice, liberty and equality echo UDHR Articles 1–2. Directive Principles reflect socio-economic rights in UDHR Articles 22–26. Fundamental Duties reflect the spirit of UDHR Article 29, which speaks of duties to the community as a necessary condition for rights."
    },

    {
      id: 'pol-060',
      topic: 'Fundamental Duties',
      subtopic: 'Rights-Duties Relationship',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'In the context of India, which one of the following is the correct relationship between Rights and Duties?',
      options: [
        'Rights are correlative with Duties',
        'Rights are personal and hence independent of society and Duties',
        'Rights, not Duties, are important for the advancement of the personality of the citizen',
        'Duties, not Rights, are important for the stability of the State'
      ],
      correct: 0,
      explanation: "The constitutional scheme recognises that rights and duties are correlative — one implies the other. The inclusion of Fundamental Duties (Part IV-A) alongside Fundamental Rights (Part III) reflects the understanding that every right carries a corresponding duty. This is in the spirit of the NCERT political science curriculum and constitutional philosophy."
    },

    // ─── ADDITIONAL HIGH-FREQUENCY QUESTIONS ────────────────────────────────

    {
      id: 'pol-061',
      topic: 'Parliament',
      subtopic: 'Parliamentary System',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'A parliamentary system of government is one in which',
      options: [
        'All political parties in the Parliament are represented in the Government',
        'The Government is responsible to the Parliament and can be removed by it',
        'The Government is elected by the citizens and can be removed by them',
        'The Parliament is elected by the Government for a fixed term'
      ],
      correct: 1,
      explanation: "The defining feature of a parliamentary system is the collective responsibility of the Council of Ministers to the Legislature. In India, Article 75(3) provides that the Council of Ministers shall be collectively responsible to the Lok Sabha — the legislature can remove the government through a vote of no-confidence."
    },

    {
      id: 'pol-062',
      topic: 'Fundamental Rights',
      subtopic: 'Liberty',
      year: 2018,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following reflects the most appropriate relationship between law and liberty?',
      options: [
        'If there are more laws, there is less liberty',
        'If there are no laws, there is no liberty',
        'If there is liberty, laws have to be made by the people',
        'If laws are changeable, liberty is in danger'
      ],
      correct: 1,
      explanation: "This reflects the concept of positive liberty — that complete absence of laws (anarchy) results in the rule of the strongest and therefore destruction of liberty for ordinary people. Law is necessary to protect and guarantee liberty. This is the classical liberal position expressed as: 'where there are no laws, there is no liberty'."
    },

    {
      id: 'pol-063',
      topic: 'Judiciary',
      subtopic: 'Article 142',
      year: 2019,
      type: 'prelims',
      qtype: 'direct',
      stem: 'With reference to the powers and limitations of the Supreme Court of India under Article 142, which one of the following statements is correct?',
      options: [
        'As the decisions of the Election Commission of India are not subject to ordinary laws, the Supreme Court can set them aside',
        'The Supreme Court cannot issue a direction under Article 142 if it is inconsistent with a statute',
        'Decrees passed under Article 142 are totally immune from any kind of challenge before any forum',
        'In exercise of its power under Article 142, the Supreme Court can set aside the provisions of a statute'
      ],
      correct: 1,
      explanation: "Article 142 grants the Supreme Court the power to make orders necessary for doing 'complete justice'. However, this power cannot override substantive provisions of a statute — the Supreme Court cannot use Article 142 to issue directions inconsistent with the statute. The power fills procedural or enforcement gaps but does not supersede substantive law."
    },

    {
      id: 'pol-064',
      topic: 'Union Executive',
      subtopic: 'Parliamentary Government',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'A constitutional government fundamentally refers to a',
      options: [
        'Government by the legislature',
        'Popular government',
        'Multi-party government',
        'Limited government'
      ],
      correct: 3,
      explanation: "Constitutional government is characterised by limited government — one that is restrained by a constitution, fundamental rights, and the rule of law. The defining principle is that government power is not absolute but bounded by constitutional provisions protecting individual rights and separating powers."
    },

    {
      id: 'pol-065',
      topic: 'Parliament',
      subtopic: 'Office of Profit',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        "The Parliament (Prevention of Disqualification) Act, 1959 exempts several posts from disqualification on grounds of 'office of profit'",
        'The Parliament (Prevention of Disqualification) Act, 1959 has been amended five times',
        "The term 'office of profit' is clearly and unambiguously defined in the Constitution of India"
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 and 2 only',
        '3 only',
        '2 and 3 only',
        '1, 2 and 3'
      ],
      correct: 0,
      explanation: "Statements 1 and 2 are correct — the 1959 Act exempts numerous government posts from disqualification, and has been amended multiple times. Statement 3 is incorrect — 'office of profit' is NOT defined in the Constitution, which is why it has been a recurring subject of legal controversy and parliamentary amendment (e.g., 2006 amendment after the Delhi MLA controversy)."
    },

    {
      id: 'pol-066',
      topic: 'Amendment Procedure',
      subtopic: 'Finance Bills and Money Bills',
      year: 2023,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'Lok Sabha can amend or reject a Finance Bill',
        'Rajya Sabha can only recommend amendments to a Money Bill and cannot reject it',
        'In the case of a Money Bill, there is no provision for a joint sitting of both Houses of Parliament; whereas in the case of a Finance Bill, this provision is available'
      ],
      tail: 'How many of the above statements are correct?',
      options: [
        'Only one',
        'Only two',
        'All three',
        'None'
      ],
      correct: 1,
      explanation: "Statements 2 and 3 are correct. Under Article 109, Rajya Sabha can only recommend amendments to a Money Bill — it cannot reject it, and if recommendations are not acted upon within 14 days, the bill is deemed passed. A Money Bill cannot go to a Joint Sitting; however, an ordinary Finance Bill (not a Money Bill) can be referred to a Joint Sitting if there is deadlock. Statement 1 is partially misleading in how it conflates the two bill types."
    },

    {
      id: 'pol-067',
      topic: 'Federalism',
      subtopic: 'Fifth Schedule',
      year: 2022,
      type: 'prelims',
      qtype: 'direct',
      stem: 'If a particular area is brought under the Fifth Schedule of the Constitution of India, which one of the following statements best reflects the consequence of it?',
      options: [
        'This would prevent the transfer of land of tribal people to non-tribal people',
        'This would create a local self-governing body in that area',
        'This would convert that area into a Union Territory',
        'The State having such areas would be declared a Special Category State'
      ],
      correct: 0,
      explanation: "The Fifth Schedule (Article 244(1)) provides for the administration and control of Scheduled Areas and Scheduled Tribes. The key protection is that the Governor may make regulations (under Paragraph 5(2)) to prohibit or restrict the transfer of land by or among members of Scheduled Tribes, effectively preventing tribal land alienation to non-tribals."
    },

    {
      id: 'pol-068',
      topic: 'Parliament',
      subtopic: 'Speaker and Deputy Speaker',
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'In Lok Sabha or State Assembly elections, the winning candidate must get at least 50 per cent of the votes polled to be declared elected',
        "In Lok Sabha, the Speaker's post goes to the majority party and the Deputy Speaker's post goes to the main opposition party"
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 3,
      explanation: "Both statements are incorrect. Statement 1 is wrong — India uses the first-past-the-post (plurality) system: the candidate with the most votes wins, with no 50% threshold required. Statement 2 is wrong — there is no constitutional or statutory provision mandating the Deputy Speaker's post for the opposition; it is purely a matter of political convention and negotiation."
    },

    {
      id: 'pol-069',
      topic: 'Fundamental Duties',
      subtopic: '42nd Amendment',
      year: 2020,
      type: 'prelims',
      qtype: 'assertion',
      assertion: 'The Fundamental Duties of citizens were introduced in the Constitution of India by the 42nd Constitutional Amendment Act, 1976.',
      reason: 'The Swaran Singh Committee had recommended the inclusion of Fundamental Duties in the Constitution.',
      correct: 0,
      explanation: "Both the Assertion and Reason are correct, and the Reason correctly explains the Assertion. The 42nd Amendment Act, 1976 added Part IV-A (Article 51A) containing ten Fundamental Duties, on the recommendation of the Swaran Singh Committee appointed by the Congress government. An 11th duty (providing opportunities for education to children aged 6–14) was added by the 86th Amendment Act, 2002."
    },

    {
      id: 'pol-070',
      topic: 'Constitutional Bodies',
      subtopic: 'Constitution Day',
      year: 2023,
      type: 'prelims',
      qtype: 'assertion',
      assertion: "The Government of India has officially designated November 26 as 'Constitution Day' to promote constitutional values among citizens.",
      reason: 'On November 26, 1949, the Constituent Assembly of India established a Drafting Committee to draft the Constitution of India.',
      correct: 2,
      explanation: "The Assertion is correct — the Government of India declared November 26 as Constitution Day (Samvidhan Divas) in 2015 to promote constitutional values on the occasion of Dr. Ambedkar's 125th birth anniversary. The Reason is incorrect — on November 26, 1949, the Constituent Assembly adopted the Constitution of India; it did not establish a Drafting Committee (the Drafting Committee was constituted on August 29, 1947)."
    },

    {
      id: 'pol-071',
      topic: 'Judiciary',
      subtopic: 'Due Process',
      year: 2023,
      type: 'prelims',
      qtype: 'direct',
      stem: "What does 'Due Process of Law' essentially mean in the context of constitutional jurisprudence?",
      options: [
        'The principle of natural justice',
        'The procedure established by law',
        'Fair application of law',
        'Equality before law'
      ],
      correct: 0,
      explanation: "In constitutional jurisprudence, 'Due Process of Law' means that the law must be right, just, and fair — conforming to the principles of natural justice. It is a higher standard than mere 'procedure established by law' (which only requires that the procedure followed is what the law prescribes). The Indian Constitution in Article 21 originally used 'procedure established by law', but the Supreme Court in Maneka Gandhi v. Union of India (1978) read in due process requirements."
    },

    {
      id: 'pol-072',
      topic: 'Federalism',
      subtopic: 'Government of India Act 1935',
      year: 2018,
      type: 'prelims',
      qtype: 'direct',
      stem: 'In the federation established by The Government of India Act of 1935, Residuary Powers were given to the:',
      options: [
        'Federal Legislature',
        'Governor General',
        'Provincial Legislatures',
        'Provincial Governors'
      ],
      correct: 1,
      explanation: "Under the Government of India Act, 1935, the residuary powers (powers not enumerated in any of the three lists) were vested in the Governor General, reflecting British imperial control. This is unlike the Indian Constitution (1950) where residuary powers lie with Parliament (Article 248), or the US Constitution where residual powers lie with the States."
    },

    {
      id: 'pol-073',
      topic: 'Parliament',
      subtopic: 'Parliamentary System Features',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'The main advantage of the parliamentary form of government is that',
      options: [
        'The executive and legislature work independently of each other',
        'It provides continuity of policy and is more efficient',
        'The executive remains responsible to the legislature',
        'The head of the government cannot be changed without election'
      ],
      correct: 2,
      explanation: "The main advantage of a parliamentary system is that the executive (Council of Ministers) remains responsible and accountable to the legislature (Parliament). This ensures democratic accountability — the government can be removed by a vote of no-confidence if it loses the confidence of the elected legislature."
    },

    {
      id: 'pol-074',
      topic: 'Union Executive',
      subtopic: 'Aadhaar',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'Aadhaar card can be used as a proof of citizenship or domicile',
        'Once issued, Aadhaar number cannot be deactivated or omitted by the Issuing Authority'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: [
        '1 only',
        '2 only',
        'Both 1 and 2',
        'Neither 1 nor 2'
      ],
      correct: 3,
      explanation: "Both statements are incorrect. Statement 1 is wrong — Aadhaar is proof of identity and biometric data; it is explicitly NOT proof of citizenship or domicile, and cannot be used as such. Statement 2 is wrong — the Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016 allows the UIDAI to deactivate Aadhaar numbers; by August 2017, approximately 81 lakh numbers had been deactivated."
    },

    {
      id: 'pol-075',
      topic: 'Federalism',
      subtopic: 'Centre-State — Rajya Sabha Exclusive Powers',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following is an exclusive power of the Rajya Sabha that is not enjoyed by the Lok Sabha?',
      options: [
        'Passing a no-confidence motion against the government',
        'Authorising Parliament to legislate on a subject in the State List by a resolution',
        'Ratifying international treaties',
        'Rejecting a Money Bill'
      ],
      correct: 1,
      explanation: "Under Article 249, the Rajya Sabha can pass a resolution (by two-thirds of members present and voting) enabling Parliament to legislate on a State List subject in the national interest — this is an exclusive power of the Rajya Sabha as a Council of States. Additionally, Article 312 gives Rajya Sabha the exclusive power to authorise creation of new All India Services. The Lok Sabha cannot exercise these powers."
    }

  ],
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
      qtype: 'direct',
      stem: 'The seasonal reversal of winds is the typical characteristic of which climate?',
      options: [
        'Equatorial climate',
        'Mediterranean climate',
        'Monsoon climate',
        'All of the above climates'
      ],
      correct: 2,
      explanation: 'Monsoon climate is characterised by a complete seasonal reversal of winds — the South-West (summer) monsoon from June to September, and the North-East (winter) monsoon from October to December. Neither equatorial nor Mediterranean climates show such a complete reversal of wind direction on a seasonal basis.'
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
  environment: [
    // ── Biodiversity ────────────────────────────────────────────────────────
    {
      id: 'env-001',
      topic: 'Biodiversity',
      subtopic: 'Biodiversity Hotspots',
      year: 2014,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which of the following criteria must a region satisfy to be declared a Biodiversity Hotspot by Conservation International?',
      options: [
        'Must contain at least 1,500 endemic vascular plant species AND have lost at least 70% of its original habitat',
        'Must contain at least 5,000 endemic vertebrate species AND have less than 20% original vegetation remaining',
        'Must have a per-hectare species count above the global average AND receive international funding',
        'Must contain all major biome types AND be located in a tropical belt'
      ],
      correct: 0,
      explanation: 'Conservation International defines a Biodiversity Hotspot as a region that: (1) contains at least 1,500 species of vascular plants as endemics, and (2) has lost at least 70% of its original native habitat. Currently there are 36 globally recognised hotspots. India has four wholly/partially: the Himalayas, Indo-Burma, Western Ghats & Sri Lanka, and Sundaland (including Nicobar Islands).'
    },
    {
      id: 'env-002',
      topic: 'Biodiversity',
      subtopic: 'Biodiversity Hotspots in India',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Which of the following are among the Biodiversity Hotspots recognised in India?',
      statements: [
        'Himalayas',
        'Indo-Burma',
        'Western Ghats and Sri Lanka',
        'Sundaland'
      ],
      tail: 'Select the correct answer using the code given below.',
      options: ['1, 2 and 3 only', '2, 3 and 4 only', '1, 3 and 4 only', '1, 2, 3 and 4'],
      correct: 3,
      explanation: 'All four biodiversity hotspots recognised by Conservation International include significant Indian territory. The Himalayas hotspot covers Nepal, Bhutan, and parts of northern India and Pakistan. Indo-Burma covers north-eastern India. Western Ghats & Sri Lanka covers the Western Ghats of India. Sundaland includes the Nicobar Islands (India), which lie at the north-western edge of this hotspot.'
    },
    {
      id: 'env-003',
      topic: 'Biodiversity',
      subtopic: 'IUCN Red List',
      year: 2021,
      type: 'prelims',
      qtype: 'direct',
      stem: 'What is blue carbon?',
      options: [
        'Carbon captured by oceans and coastal ecosystems',
        'Carbon sequestered in forest biomass and agricultural soils',
        'Carbon contained in petroleum and natural gas',
        'Carbon present in atmosphere as CO₂'
      ],
      correct: 0,
      explanation: 'Blue carbon is carbon captured and stored by the world\'s oceans and coastal ecosystems — primarily mangroves, tidal marshes, and seagrass meadows. These ecosystems sequester carbon at a rate far greater per unit area than terrestrial forests. The Blue Carbon Initiative works to mitigate climate change through the restoration and sustainable management of these coastal ecosystems.'
    },
    {
      id: 'env-004',
      topic: 'Biodiversity',
      subtopic: 'Species Conservation',
      year: 2020,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to Indian elephants, consider the following statements:',
      statements: [
        'The leader of an elephant group is a female.',
        'The maximum gestation period can be 22 months.',
        'An elephant can give birth to a calf only up to the age of 40 years.',
        'Among the States in India, the highest elephant population is in Kerala.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 4 only', '3 only', '1, 2 and 4 only'],
      correct: 0,
      explanation: 'Statements 1 and 2 are correct. Elephant herds are matriarchal — led by the oldest female (matriarch). The gestation period is the longest of any land mammal at 18–22 months. Statement 3 is incorrect: female elephants can give birth until much older (up to 50+ years). Statement 4 is incorrect: Karnataka has the highest elephant population in India (about 6,000+), followed by Assam and Kerala.'
    },
    {
      id: 'env-005',
      topic: 'Biodiversity',
      subtopic: 'Wildlife Species',
      year: 2020,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to certain peculiar birds, consider the following statements:',
      statements: [
        'White-rumped vulture is a critically endangered species.',
        'Indian Bustard is listed as Critically Endangered on the IUCN Red List.',
        'The Great Indian Bustard (GIB) is the state bird of Rajasthan.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 3 only', '2 only', '1 and 2 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three statements are correct. The White-rumped Vulture (Gyps bengalensis) is Critically Endangered, primarily due to diclofenac poisoning. The Great Indian Bustard is listed as Critically Endangered on the IUCN Red List with fewer than 200 individuals remaining. The GIB is also the state bird of Rajasthan and is protected under Schedule I of the Wildlife Protection Act.'
    },
    {
      id: 'env-006',
      topic: 'Biodiversity',
      subtopic: 'Threats to Biodiversity',
      year: 2012,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Which of the following can be threats to the biodiversity of a geographical area?',
      statements: [
        'Global warming',
        'Fragmentation of habitat',
        'Invasion of alien species',
        'Promotion of vegetarianism'
      ],
      tail: 'Select the correct answer using the codes given below.',
      options: ['1, 2 and 3 only', '2 and 3 only', '1 and 4 only', '1, 2, 3 and 4'],
      correct: 0,
      explanation: 'Global warming (1), fragmentation of habitat (2), and invasion of alien species (3) are major threats to biodiversity. These are widely documented causes of species extinction (IUCN identifies HIPPO — Habitat loss, Invasive species, Pollution, Population growth, Over-exploitation as main threats). Promotion of vegetarianism (4) actually reduces pressure on ecosystems and is not a threat.'
    },
    // ── Protected Areas ────────────────────────────────────────────────────
    {
      id: 'env-007',
      topic: 'Protected Areas',
      subtopic: 'Biosphere Reserves',
      year: 2019,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which of the following are in Agasthyamala Biosphere Reserve?',
      options: [
        'Neyyar, Peppara and Shendurney Wildlife Sanctuaries; and Kalakad Mundanthurai Tiger Reserve',
        'Mudumalai, Sathyamangalam and Wayanad Wildlife Sanctuaries; and Silent Valley National Park',
        'Kaundinya, Gundla Brahmeswaram and Papikonda Wildlife Sanctuaries; and Mukurthi National Park',
        'Kawal and Sri Venkateswara Wildlife Sanctuaries; and Nagarjunasagar-Srisailam Tiger Reserve'
      ],
      correct: 0,
      explanation: 'Agasthyamala Biosphere Reserve (established 2001) straddles Kerala and Tamil Nadu in the southernmost Western Ghats. Its protected areas include: Neyyar, Peppara, and Shendurney Wildlife Sanctuaries in Kerala, and the Kalakad Mundanthurai Tiger Reserve in Tamil Nadu. It is a UNESCO World Heritage Site (Western Ghats) and a UNESCO Biosphere Reserve.'
    },
    {
      id: 'env-008',
      topic: 'Protected Areas',
      subtopic: 'Tiger Reserves and National Parks',
      year: 2020,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Which of the following Protected Areas are located in Cauvery basin?',
      statements: [
        'Nagarhole National Park',
        'Papikonda National Park',
        'Sathyamangalam Tiger Reserve',
        'Wayanad Wildlife Sanctuary'
      ],
      tail: 'Select the correct answer using the code given below.',
      options: ['1 and 2 only', '3 and 4 only', '1, 3 and 4 only', '1, 2, 3 and 4'],
      correct: 2,
      explanation: 'Nagarhole National Park (Karnataka), Sathyamangalam Tiger Reserve (Tamil Nadu), and Wayanad Wildlife Sanctuary (Kerala) are all located within the Cauvery river basin. Papikonda National Park is located in Andhra Pradesh along the Godavari River basin — not the Cauvery. The Cauvery basin forms an important ecological corridor (Nilgiris Biosphere Reserve).'
    },
    {
      id: 'env-009',
      topic: 'Protected Areas',
      subtopic: 'Wildlife Protection Act',
      year: 2019,
      type: 'prelims',
      qtype: 'direct',
      stem: 'If a particular plant species is placed under Schedule VI of The Wildlife Protection Act, 1972, what is the implication?',
      options: [
        'Its international trade is completely banned under CITES.',
        'A licence is required to cultivate that plant.',
        'The plant is declared extinct in the wild.',
        'The plant is designated a National Heritage Species.'
      ],
      correct: 1,
      explanation: 'Schedule VI of the Wildlife Protection Act, 1972 lists specified plants that are prohibited from collection, trade, or cultivation without a licence issued by the Chief Wildlife Warden. Examples include Beddomes\' cycas, Blue Vanda (an orchid), Red Vanda (Renanthera imschootiana), Kuth (Saussurea lappa). The original six schedules have since been reorganised, but in the 2019 UPSC question context, Schedule VI covered protected plants requiring cultivation licences.'
    },
    {
      id: 'env-010',
      topic: 'Protected Areas',
      subtopic: 'Difference between Protected Areas',
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the protected areas in India, consider the following statements:',
      statements: [
        'A National Park is an area declared to be dedicated to the conservation of wild animals and birds, and their environment.',
        'A Wildlife Sanctuary allows human activities like grazing and some agricultural operations, unlike a National Park.',
        'A Tiger Reserve is a strictly protected area where no human activity whatsoever is permitted.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '1 only', '2 and 3 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 2 are correct. A National Park (under Wildlife Protection Act) is strictly protected — no human activity, grazing, or trespass is allowed. A Wildlife Sanctuary allows limited human activities (grazing, collection of forest produce) provided they do not damage wildlife habitat. Statement 3 is incorrect: Tiger Reserves have a Core zone (fully protected, no human activity) and a Buffer zone (limited human use is permitted).'
    },
    {
      id: 'env-011',
      topic: 'Protected Areas',
      subtopic: 'Biosphere Reserves',
      year: 2016,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements regarding Biosphere Reserves:',
      statements: [
        'The MAB Programme (Man and Biosphere) of UNESCO designates Biosphere Reserves worldwide.',
        'Biosphere Reserves are divided into a Core Zone, a Buffer Zone, and a Transition Zone.',
        'All Biosphere Reserves in India are also UNESCO World Biosphere Reserves.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 2 are correct. UNESCO\'s Man and the Biosphere (MAB) Programme designates Biosphere Reserves, which are divided into: a strictly protected Core Zone, a Buffer Zone (limited research and education), and a Transition/Co-operation Zone (sustainable human activities). Statement 3 is incorrect: India has 18 Biosphere Reserves, of which 12 are recognised by UNESCO as part of the World Network of Biosphere Reserves — not all of them.'
    },
    {
      id: 'env-012',
      topic: 'Protected Areas',
      subtopic: 'Tiger Conservation',
      year: 2015,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about Project Tiger:',
      statements: [
        'Project Tiger was launched in 1973.',
        'The National Tiger Conservation Authority (NTCA) was set up under the Wildlife Protection Act, 1972.',
        'The first tiger reserve under Project Tiger was established in Corbett National Park.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 3 only', '2 and 3 only', '1 and 2 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three statements are correct. Project Tiger was launched on April 1, 1973, initially covering nine tiger reserves including Jim Corbett. The NTCA was established as a statutory body under the Wildlife Protection Act, 1972 (as amended in 2006) to strengthen tiger conservation. Corbett National Park (Uttarakhand) was indeed the first tiger reserve designated under Project Tiger.'
    },
    {
      id: 'env-013',
      topic: 'Protected Areas',
      subtopic: 'Wetlands',
      year: 2015,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which of the following is/are included in the category of "Wetlands" as defined under the Ramsar Convention?',
      options: [
        'Only swamps, marshes and peatlands',
        'Marine areas not deeper than 6 metres at low tide, coral reefs, and mangroves',
        'Rivers and lakes with freshwater only',
        'Only artificially created water bodies like reservoirs'
      ],
      correct: 1,
      explanation: 'The Ramsar Convention definition of wetlands is broad: it includes marshes, fens, peatlands, water bodies (natural or artificial, permanent or temporary), with static, flowing, fresh, brackish or salt water, including marine areas to a depth of 6 metres at low tide. This encompasses mangroves, coral reefs (not deeper than 6m at low tide), rice paddies, salt pans, and more.'
    },
    // ── Climate Change ──────────────────────────────────────────────────────
    {
      id: 'env-014',
      topic: 'Climate Change',
      subtopic: 'Paris Agreement',
      year: 2016,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Agreement at the UNFCCC Meeting in Paris in 2015, which of the following statements is/are correct?',
      statements: [
        'The Agreement was signed by all the member countries of the UN.',
        'The Agreement aims to limit the increase in global average temperature to 2°C above pre-industrial levels.',
        'Developed countries acknowledged their historical responsibility in global warming and committed to donate $100 billion a year to developing countries to help them adapt.'
      ],
      tail: 'Select the correct answer using the code given below.',
      options: ['1 and 3 only', '2 only', '2 and 3 only', '1, 2 and 3'],
      correct: 1,
      explanation: 'Only Statement 2 is correct in the strict sense. The Paris Agreement (December 2015) aims to hold temperature increase to well below 2°C above pre-industrial levels and pursue efforts to limit it to 1.5°C. Statement 1 is incorrect: the agreement was not signed by "all UN member countries" instantly; it opened for signature in April 2016 and has been ratified by most countries, but signing was gradual. Statement 3 oversimplifies: the $100 billion/year was a previously agreed (Copenhagen 2009) goal, not a new Paris "commitment."'
    },
    {
      id: 'env-015',
      topic: 'Climate Change',
      subtopic: 'Carbon Markets',
      year: 2022,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following:',
      statements: [
        'Green Carbon — carbon stored in terrestrial ecosystems (forests, soils)',
        'Blue Carbon — carbon captured by oceans and coastal ecosystems',
        'Brown Carbon — carbonaceous particles from combustion of organic matter'
      ],
      tail: 'Which of the above definitions are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three definitions are correct. Green Carbon is stored in terrestrial vegetation and soils (forests, grasslands). Blue Carbon is the carbon captured and stored by coastal and marine ecosystems (mangroves, seagrasses, salt marshes). Brown Carbon is a type of carbonaceous aerosol — light-absorbing organic particles released by combustion of biomass and fossil fuels — distinct from black carbon (soot). All three are relevant in climate change policy discussions.'
    },
    {
      id: 'env-016',
      topic: 'Climate Change',
      subtopic: 'India\'s NDC Commitments',
      year: 2021,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to India\'s commitments under the Paris Agreement (original NDC submitted in 2015), which of the following statements is/are correct?',
      statements: [
        'India committed to reduce the emissions intensity of its GDP by 33–35% by 2030 from 2005 levels.',
        'India committed to achieve about 40% of electric power from non-fossil fuel sources by 2030.',
        'India committed to achieve net-zero emissions by 2030.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '1 only', '3 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 2 are correct. India\'s original INDC/NDC (2015) committed to: (a) reduce emissions intensity of GDP by 33–35% from 2005 levels by 2030; (b) achieve 40% of electric power capacity from non-fossil fuel sources by 2030; (c) create additional carbon sink of 2.5–3 billion tonnes through forests by 2030. Statement 3 is incorrect: India\'s net-zero target (at COP26, 2021) is 2070, not 2030.'
    },
    {
      id: 'env-017',
      topic: 'Climate Change',
      subtopic: 'UNFCCC and Kyoto Protocol',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about the Kyoto Protocol:',
      statements: [
        'The Kyoto Protocol was adopted in 1997 and entered into force in 2005.',
        'Under the Kyoto Protocol, only developed countries (Annex I countries) had binding emission reduction targets.',
        'The USA ratified the Kyoto Protocol in 2001 after initially signing it in 1997.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 2 are correct. The Kyoto Protocol was adopted in December 1997 and entered into force on February 16, 2005 (after Russia ratified it). Under its differentiated responsibility principle, only Annex I (developed) countries had legally binding emission reduction targets; developing countries including India and China had no binding targets. Statement 3 is incorrect: the USA signed the Protocol in 1998 but Congress refused to ratify it, and the Bush administration withdrew in 2001.'
    },
    {
      id: 'env-018',
      topic: 'Climate Change',
      subtopic: 'Climate Finance',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'With reference to Carbon Credits, which of the following statements is correct?',
      options: [
        'A carbon credit represents the right to emit one tonne of CO₂ equivalent.',
        'Carbon credits can only be traded by governments, not private entities.',
        'Carbon credits were introduced under the Montreal Protocol.',
        'India does not participate in any carbon credit market.'
      ],
      correct: 0,
      explanation: 'A carbon credit represents the right to emit one tonne of CO₂ or its equivalent in other greenhouse gases. Companies/countries that emit less than their allowance can sell excess credits to those exceeding their limits. Carbon markets involve both government entities and private companies. Carbon credits were created under the Kyoto Protocol (not Montreal Protocol). India participates via the Clean Development Mechanism (CDM) — one of the world\'s largest CDM credit generators.'
    },
    // ── Environmental Laws ─────────────────────────────────────────────────
    {
      id: 'env-019',
      topic: 'Environmental Laws',
      subtopic: 'NGT vs CPCB',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'How is the National Green Tribunal (NGT) different from the Central Pollution Control Board (CPCB)?',
      statements: [
        'The NGT has been established by an Act whereas the CPCB has been created by an executive order of the Government.',
        'The NGT provides environmental justice and helps reduce the burden of litigation in the higher courts whereas the CPCB promotes cleanliness of streams and wells, and aims to improve the quality of air in the country.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
      correct: 1,
      explanation: 'Only Statement 2 is correct. Both NGT and CPCB are statutory bodies established by Acts of Parliament — not by executive orders. The NGT was set up under the National Green Tribunal Act, 2010. CPCB was constituted under the Water (Prevention and Control of Pollution) Act, 1974. Statement 1 is therefore incorrect. Statement 2 correctly describes their respective mandates: NGT provides environmental justice; CPCB focuses on water and air quality improvement.'
    },
    {
      id: 'env-020',
      topic: 'Environmental Laws',
      subtopic: 'Wildlife Protection Act',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to Indian laws about wildlife protection, consider the following statements:',
      statements: [
        'Wild animals cannot be killed even in self-defence.',
        'A licence is required to possess a Schedule V animal (vermin species).',
        'Crocodiles have been included under Schedule VI of The Wildlife Protection Act, 1972.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 only', '3 only', 'None of the above'],
      correct: 3,
      explanation: 'All three statements are incorrect. (1) The Wildlife Protection Act permits killing wild animals in bona fide self-defence. (2) Schedule V lists "vermin" (rats, common crows, fruit bats, mice) which may be hunted freely — no licence is needed. (3) Crocodiles fall under Schedule I (highest protection), not Schedule VI (which lists protected plants). These are common error-inducing statements in UPSC questions about the WPA.'
    },
    {
      id: 'env-021',
      topic: 'Environmental Laws',
      subtopic: 'Forest Conservation Act',
      year: 2015,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The Forest Conservation Act, 1980 prohibits the de-reservation of reserved forests.',
        'Under the Forest Conservation Act, 1980, no State Government or other authority shall make any order directing that any reserved forest shall cease to be reserved without prior approval of the Central Government.',
        'The Forest Rights Act, 2006 protects the traditional forest rights of forest-dwelling communities.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 1,
      explanation: 'Statements 2 and 3 are correct. The Forest Conservation Act, 1980 requires prior approval of the Central Government before any non-forest use of forest land. Statement 1 is incorrect: the Act does not outright prohibit de-reservation but mandates Central Government approval for any diversion of forest land. The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006 — the Forest Rights Act — does protect traditional forest rights of scheduled tribes and forest-dwelling communities.'
    },
    {
      id: 'env-022',
      topic: 'Environmental Laws',
      subtopic: 'Environment Protection Act',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements with reference to the Environment (Protection) Act, 1986:',
      statements: [
        'It empowers the Central Government to take all such measures to protect and improve the quality of the environment.',
        'The Act requires mandatory public participation in the process of environmental clearance.',
        'The Act can prescribe standards for the quality of environment in its various aspects.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 3 only', '2 and 3 only', '1 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 3 are correct. The Environment Protection Act (EPA), 1986 — an umbrella legislation — empowers the Central Government to take measures to protect the environment, prescribe emission/discharge standards, and set environmental quality standards. Statement 2 is incorrect: mandatory public participation in environmental clearance comes from the Environment Impact Assessment (EIA) Notification under the EPA, not from the EPA itself.'
    },
    {
      id: 'env-023',
      topic: 'Environmental Laws',
      subtopic: 'Pollution Control Laws',
      year: 2016,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The Air (Prevention and Control of Pollution) Act was enacted in 1981.',
        'The Water (Prevention and Control of Pollution) Act was enacted in 1974.',
        'The Biological Diversity Act was enacted in 2002.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three statements are correct. The Water (Prevention and Control of Pollution) Act was enacted in 1974 (amended 1988), which also created the CPCB. The Air (Prevention and Control of Pollution) Act was enacted in 1981 (amended 1987). The Biological Diversity Act, 2002 implements India\'s obligations under the Convention on Biological Diversity and created the National Biodiversity Authority.'
    },
    // ── International Conventions ───────────────────────────────────────────
    {
      id: 'env-024',
      topic: 'International Conventions',
      subtopic: 'Ramsar Convention',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'Under Ramsar Convention, it is mandatory on the part of the Government of India to protect and conserve all the wetlands in the territory of India.',
        'The Wetlands (Conservation and Management) Rules, 2010 were framed by the Government of India based on the recommendations of Ramsar Convention.',
        'The Wetlands (Conservation and Management) Rules, 2010 also encompass the drainage area or catchment regions of the wetlands as determined by the authority.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 1,
      explanation: 'Statements 2 and 3 are correct. The Ramsar Convention (1971, Iran) encourages contracting parties to designate suitable wetlands to the Ramsar List and promote "wise use" — but it is not mandatory to protect all wetlands. Statement 1 is incorrect. The 2010 Rules were framed in line with Ramsar principles and uniquely included catchment/drainage areas of wetlands under regulatory control — a significant feature of Statement 3.'
    },
    {
      id: 'env-025',
      topic: 'International Conventions',
      subtopic: 'CITES',
      year: 2015,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements regarding CITES (Convention on International Trade in Endangered Species):',
      statements: [
        'CITES provides a legally binding framework that takes precedence over national laws.',
        'Appendix I of CITES lists species threatened with extinction for which commercial trade is generally prohibited.',
        'India is one of the founding members of CITES.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['2 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Only Statement 2 is correct. CITES Appendix I lists ~900 species threatened with extinction; commercial international trade is prohibited (only in exceptional cases with both import and export permits). Statement 1 is incorrect: CITES is legally binding on signatory states but does NOT take precedence over national laws — countries must implement it through their own legislation. Statement 3 is incorrect: CITES was adopted in 1973 and entered into force in 1975; India is a party but not among the original signatories.'
    },
    {
      id: 'env-026',
      topic: 'International Conventions',
      subtopic: 'Convention on Biological Diversity',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Convention on Biological Diversity (CBD), consider the following statements:',
      statements: [
        'It was opened for signature at the Earth Summit in Rio de Janeiro in 1992.',
        'The Nagoya Protocol is a supplementary agreement to CBD dealing with Access and Benefit Sharing of genetic resources.',
        'India signed the Nagoya Protocol in 2011 and ratified it in 2012.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three statements are correct. The CBD was opened for signature on June 5, 1992, at the Earth Summit (UNCED) in Rio de Janeiro and entered into force on December 29, 1993. The Nagoya Protocol (adopted October 2010, Japan; in force October 2014) addresses Access to Genetic Resources and the Fair and Equitable Sharing of Benefits arising from their utilization. India signed the Nagoya Protocol in 2011 and ratified it in October 2012 during COP-11 in Hyderabad.'
    },
    {
      id: 'env-027',
      topic: 'International Conventions',
      subtopic: 'Montreal Protocol',
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about the Montreal Protocol:',
      statements: [
        'The Montreal Protocol deals with the phase-out of ozone-depleting substances (ODS).',
        'The Kigali Amendment to the Montreal Protocol was adopted in 2016 to phase down HFCs.',
        'CFCs (Chlorofluorocarbons) have been completely phased out globally under the Montreal Protocol.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 2 are correct. The Montreal Protocol (1987) is the international treaty for phasing out ozone-depleting substances. The Kigali Amendment (October 2016, Rwanda) expanded the Protocol to phase down hydrofluorocarbons (HFCs) — potent greenhouse gases used as ODS replacements. Statement 3 is incorrect: while CFCs have been largely phased out in developed countries, production and consumption are still ongoing in some developing nations under phase-out schedules; the goal is complete phase-out but it has not been globally achieved as of 2024.'
    },
    {
      id: 'env-028',
      topic: 'International Conventions',
      subtopic: 'Basel Rotterdam Stockholm Conventions',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following pairs:',
      statements: [
        'Basel Convention — management of hazardous wastes and their trans-boundary movements',
        'Rotterdam Convention — prior informed consent procedure for certain hazardous chemicals',
        'Stockholm Convention — persistent organic pollutants (POPs)'
      ],
      tail: 'Which of the above pairs is/are correctly matched?',
      options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three pairs are correctly matched. The Basel Convention (1989) controls trans-boundary movements of hazardous wastes and their disposal. The Rotterdam Convention (1998) establishes a Prior Informed Consent (PIC) procedure for trade in hazardous chemicals and pesticides. The Stockholm Convention (2001) aims to eliminate or restrict Persistent Organic Pollutants (POPs) — toxic chemicals like DDT, PCBs, and dioxins that persist in the environment.'
    },
    // ── Ecology ─────────────────────────────────────────────────────────────
    {
      id: 'env-029',
      topic: 'Ecology',
      subtopic: 'Ecosystem Services',
      year: 2020,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to food chains in ecosystems, consider the following statements:',
      statements: [
        'A food chain illustrates the sequence of organisms through which energy and nutrients pass.',
        'The number of trophic levels in a food chain is unlimited.',
        'Each step up the food chain, about 90% of the energy is lost as heat.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 3 only', '1 only', '2 and 3 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 3 are correct. A food chain shows the linear flow of energy and matter from one organism to another. At each trophic level, approximately 90% of energy is lost (primarily as heat through respiration), with only 10% transferred to the next level — this is the 10% energy rule or Lindemann\'s efficiency. Statement 2 is incorrect: due to this energy loss, food chains are limited (typically 3–5 trophic levels) — there is insufficient energy to support more levels.'
    },
    {
      id: 'env-030',
      topic: 'Ecology',
      subtopic: 'Ecological Pyramids',
      year: 2016,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about ecological pyramids:',
      statements: [
        'The pyramid of energy is always upright in any ecosystem.',
        'The pyramid of biomass is always inverted in a terrestrial ecosystem.',
        'The pyramid of numbers is inverted in a forest ecosystem because a single tree supports many insects.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 3 only', '2 only', '2 and 3 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 3 are correct. The pyramid of energy is always upright in any ecosystem because energy flow is unidirectional and decreases at each trophic level (10% rule). The pyramid of numbers is inverted in a forest ecosystem where one large tree (producer) supports thousands of insects, birds, and other organisms. Statement 2 is incorrect: pyramid of biomass is inverted in AQUATIC ecosystems (phytoplankton biomass < zooplankton biomass in an instant measurement), not terrestrial ones.'
    },
    {
      id: 'env-031',
      topic: 'Ecology',
      subtopic: 'Biomes',
      year: 2014,
      type: 'prelims',
      qtype: 'direct',
      stem: 'A particular state in India has the following characteristics: (i) It is located on the same latitude which passes through northern Rajasthan. (ii) It has over 80% of its area under forest cover. (iii) Over 12% of India\'s forest cover is found in this state. Which one among the following states has all the above characteristics?',
      options: [
        'Arunachal Pradesh',
        'Assam',
        'Himachal Pradesh',
        'Uttarakhand'
      ],
      correct: 0,
      explanation: 'Arunachal Pradesh satisfies all three conditions. It lies roughly between 27°N and 29°N — similar latitudes to northern Rajasthan. About 80% of Arunachal Pradesh is under forest cover, and it contributes over 12% of India\'s total forest cover. It is India\'s largest forested state by percentage and absolute area of forest. The state has subtropical, temperate, and alpine forests across its terrain.'
    },
    {
      id: 'env-032',
      topic: 'Ecology',
      subtopic: 'Nutrient Cycling',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'Nitrogen fixation by soil bacteria converts atmospheric nitrogen into nitrates usable by plants.',
        'Denitrification returns nitrogen from nitrates back to the atmosphere.',
        'Leguminous plants fix atmospheric nitrogen with the help of free-living soil bacteria only.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 2 are correct. Nitrogen-fixing bacteria (like Rhizobium, Azotobacter) convert atmospheric N₂ to ammonia/nitrates that plants can absorb. Denitrifying bacteria (like Pseudomonas) convert nitrates back to N₂ gas, completing the nitrogen cycle. Statement 3 is incorrect: leguminous plants fix nitrogen primarily through SYMBIOTIC bacteria (Rhizobium) living in their root nodules — not through "free-living" bacteria alone, though free-living fixers like Azotobacter also fix nitrogen independently in soil.'
    },
    {
      id: 'env-033',
      topic: 'Ecology',
      subtopic: 'Ecosystem Services',
      year: 2019,
      type: 'prelims',
      qtype: 'direct',
      stem: 'Which one of the following is the correct description of "ecosystem services"?',
      options: [
        'Only the tangible products (timber, food, water) that ecosystems provide to humans',
        'The benefits that ecosystems provide to humans including provisioning, regulating, cultural, and supporting services',
        'Services provided by governments to protect ecosystems',
        'Scientific research conducted in ecosystems by international bodies'
      ],
      correct: 1,
      explanation: 'Ecosystem services are classified (MA 2005) into four categories: (1) Provisioning services — food, water, timber, fibre; (2) Regulating services — climate regulation, flood control, disease control; (3) Cultural services — recreation, spiritual value; (4) Supporting services — nutrient cycling, photosynthesis, soil formation. They are all the benefits that humans obtain from ecosystems — both tangible and intangible.'
    },
    // ── Pollution ───────────────────────────────────────────────────────────
    {
      id: 'env-034',
      topic: 'Pollution',
      subtopic: 'Air Quality',
      year: 2016,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements regarding the Air Quality Index (AQI) of India:',
      statements: [
        'The AQI is based on the concentration of PM10, PM2.5, NO₂, SO₂, CO, O₃, NH₃, and Pb.',
        'A higher AQI number indicates a greater level of air pollution and a greater health concern.',
        'AQI is maintained by the CPCB and SPCBs in India.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three statements are correct. India\'s AQI considers eight pollutants: PM10, PM2.5, NO₂, SO₂, CO, ozone (O₃), ammonia (NH₃), and lead (Pb). The AQI scale runs from 0 to 500 — higher values indicate worse air quality (500 = severe/hazardous; 0–50 = good). The Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs) monitor and publish AQI data for major cities in India.'
    },
    {
      id: 'env-035',
      topic: 'Pollution',
      subtopic: 'Water Pollution',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'The term Biological Oxygen Demand (BOD) is a standard criterion for pollution assay in:',
      options: [
        'Soil ecosystems',
        'Aquatic ecosystems',
        'Forest ecosystems',
        'Atmospheric ecosystems'
      ],
      correct: 1,
      explanation: 'Biochemical Oxygen Demand (BOD) measures the amount of dissolved oxygen consumed by biological organisms when decomposing organic matter in a given water sample at a certain temperature over a specific time period. A high BOD indicates high organic pollution in water. It is the standard measure for assessing water pollution in aquatic ecosystems and is used for monitoring rivers, lakes, and wastewater quality.'
    },
    {
      id: 'env-036',
      topic: 'Pollution',
      subtopic: 'Solid Waste Management',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'With reference to the Solid Waste Management Rules, 2016, consider the following statements:',
      statements: [
        'All waste generators must segregate waste into three streams: wet/bio-degradable, dry/recyclable, and domestic hazardous waste.',
        'The rules apply only to urban local bodies in India.',
        'Producers and brand owners are responsible for setting up waste management systems under Extended Producer Responsibility (EPR).'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 3 only', '2 and 3 only', '1 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 3 are correct. The Solid Waste Management Rules, 2016 mandate segregation at source into at least three categories. Producers, brand owners, and importers are required to implement Extended Producer Responsibility. Statement 2 is incorrect: the 2016 rules extended coverage beyond urban local bodies to include outgrowths, census towns, notified areas, areas under industrial townships, pilgrimage sites, and other notified areas.'
    },
    {
      id: 'env-037',
      topic: 'Pollution',
      subtopic: 'Ozone Layer',
      year: 2017,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The ozone layer is located in the stratosphere at an altitude of 15–35 km above the Earth\'s surface.',
        'Ozone depletion is primarily caused by chlorofluorocarbons (CFCs) and halons.',
        'The Antarctic ozone hole appears during summer (October–December) in the Southern Hemisphere.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three statements are correct. The ozone layer (ozonosphere) is in the stratosphere, 15–35 km above the Earth. CFCs and halons (halogenated compounds) release chlorine and bromine atoms that catalytically destroy ozone molecules in a chain reaction. The Antarctic ozone hole forms during the Antarctic spring/summer (September–December) when sunlight triggers chemical reactions on polar stratospheric clouds, leading to rapid ozone depletion.'
    },
    {
      id: 'env-038',
      topic: 'Pollution',
      subtopic: 'E-Waste',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'With reference to the "E-waste (Management) Rules, 2016" in India, which of the following statements is/are correct?',
      options: [
        'Only large manufacturers of electronic goods are covered under the rules.',
        'Extended Producer Responsibility (EPR) is mandatory for producers of electrical and electronic equipment.',
        'Collection of e-waste is the responsibility of consumers only.',
        'E-waste can be disposed of in regular landfills if it is within prescribed limits.'
      ],
      correct: 1,
      explanation: 'Under the E-waste Management Rules, 2016, Extended Producer Responsibility (EPR) makes it mandatory for producers (manufacturers, importers) of electrical and electronic equipment to collect e-waste generated by end-of-life products. Producers must set up collection centres and meet collection targets. E-waste cannot be disposed of in regular landfills due to toxic components (lead, mercury, cadmium). The rules apply to all producers, not just large ones.'
    },
    // ── Ecology – Additional ────────────────────────────────────────────────
    {
      id: 'env-039',
      topic: 'Ecology',
      subtopic: 'Keystone Species',
      year: 2021,
      type: 'prelims',
      qtype: 'direct',
      stem: 'The concept of "keystone species" in ecology refers to:',
      options: [
        'The most numerous species in an ecosystem',
        'A species that has a disproportionately large effect on its environment relative to its biomass',
        'Only apex predators in a food chain',
        'Species that are found exclusively in one geographic area'
      ],
      correct: 1,
      explanation: 'A keystone species is one that has a disproportionately large impact on its ecosystem relative to its abundance or biomass. Removal of a keystone species causes dramatic changes to the ecosystem structure. Examples: sea otters (control sea urchin populations, protect kelp forests), African elephants (create water holes used by other species), tigers (regulate prey populations). They are not necessarily the most abundant species or apex predators.'
    },
    {
      id: 'env-040',
      topic: 'Ecology',
      subtopic: 'Invasive Species',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about invasive alien species:',
      statements: [
        'Lantana camara is an invasive plant species in India introduced from the Americas.',
        'Water hyacinth (Eichhornia crassipes) is a native Indian plant.',
        'Invasive species are identified as one of the leading threats to global biodiversity.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 3 only', '2 and 3 only', '1 and 2 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 3 are correct. Lantana camara was introduced to India from the Americas (Central/South America) during the colonial period and has become highly invasive in forests across the country. Invasive alien species are recognised as the second-largest cause of biodiversity loss worldwide. Statement 2 is incorrect: Water hyacinth (Eichhornia crassipes) is native to South America; it is now one of the world\'s worst aquatic weeds in India\'s rivers, lakes, and wetlands.'
    },
    {
      id: 'env-041',
      topic: 'Biodiversity',
      subtopic: 'IUCN Red List Categories',
      year: 2014,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about the IUCN Red List categories:',
      statements: [
        'Critically Endangered (CR) represents the highest risk of extinction of any wild animal.',
        '"Extinct in the Wild" means a species is known only to survive in captivity or cultivation.',
        '"Data Deficient" means the species is not threatened.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 2 are correct. Critically Endangered is the highest risk category for wild species that still have living members (above Endangered and Vulnerable). "Extinct in the Wild" (EW) applies to species that survive only in captivity, in cultivation, or as a naturalised population outside its original range. Statement 3 is incorrect: "Data Deficient" (DD) means there is inadequate information to assess the risk — it does NOT indicate the species is not threatened.'
    },
    {
      id: 'env-042',
      topic: 'International Conventions',
      subtopic: 'United Nations Conventions',
      year: 2020,
      type: 'prelims',
      qtype: 'direct',
      stem: 'The term "REDD+" in the context of climate change refers to:',
      options: [
        'Reducing Emissions from Deforestation and Forest Degradation in Developing Countries',
        'Renewable Energy Development and Deployment for Deforestation',
        'Regional Economic Development and Distribution Programme',
        'Research and Education for Deforestation and Degradation'
      ],
      correct: 0,
      explanation: 'REDD+ stands for Reducing Emissions from Deforestation and Forest Degradation in Developing Countries, plus the role of conservation, sustainable management of forests, and enhancement of forest carbon stocks. It is a UNFCCC framework that provides financial incentives to developing countries to protect existing forests, restore degraded ones, and sustainably manage forests as a climate change mitigation strategy.'
    },
    {
      id: 'env-043',
      topic: 'Climate Change',
      subtopic: 'Greenhouse Gases',
      year: 2015,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about greenhouse gases:',
      statements: [
        'Water vapour is the most abundant and most potent greenhouse gas in the atmosphere.',
        'Carbon dioxide (CO₂) has a higher Global Warming Potential (GWP) than methane (CH₄) over a 100-year period.',
        'Nitrous oxide (N₂O) is produced primarily from agricultural activities including use of nitrogen fertilisers.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 3 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 3 are correct. Water vapour is indeed the most abundant greenhouse gas and contributes the most to the natural greenhouse effect, though it is not directly regulated. Agriculture (particularly rice paddies, livestock, and nitrogen fertilisers) is the largest source of N₂O emissions. Statement 2 is incorrect: Methane (CH₄) has a GWP of about 28–36 times that of CO₂ over 100 years — meaning CH₄ is far more potent than CO₂ per unit mass, not the other way around.'
    },
    {
      id: 'env-044',
      topic: 'Ecology',
      subtopic: 'Coral Reefs',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about coral reefs:',
      statements: [
        'Coral reefs are found in warm, shallow, clear, and nutrient-poor tropical waters.',
        'Coral bleaching occurs when corals expel the algae (zooxanthellae) living in their tissues due to stress.',
        'The Lakshadweep Islands in India have atoll-type coral reefs.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three statements are correct. Coral reefs require warm (20–28°C), shallow (< 50 m), clear, sunlit, and nutrient-poor waters. Coral bleaching occurs when thermal stress causes corals to expel their symbiotic algae (zooxanthellae), turning white; prolonged bleaching causes coral death. The Lakshadweep Islands are classic atolls — ring-shaped coral reefs encircling a lagoon — built on the remnants of submerged volcanic peaks in the Arabian Sea.'
    },
    {
      id: 'env-045',
      topic: 'Protected Areas',
      subtopic: 'Conservation Reserve and Community Reserve',
      year: 2020,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about Conservation Reserves and Community Reserves in India:',
      statements: [
        'Conservation Reserves can be declared on government lands by the Central Government.',
        'Community Reserves are declared on community or private land by the State Government.',
        'Both Conservation Reserves and Community Reserves were introduced by the Wildlife Protection (Amendment) Act, 2002.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 3 only', '2 and 3 only', '2 only', '1, 2 and 3'],
      correct: 1,
      explanation: 'Statements 2 and 3 are correct. Community Reserves are declared by State Governments on community or private land with the consent of the local communities. Both categories were introduced by the Wildlife Protection Amendment Act, 2002, as the 4th and 5th categories of protected areas in India. Statement 1 is incorrect: Conservation Reserves are declared by STATE Governments (not the Central Government) on government lands lying adjacent to protected areas.'
    },
    {
      id: 'env-046',
      topic: 'Climate Change',
      subtopic: 'Loss and Damage',
      year: 2023,
      type: 'prelims',
      qtype: 'direct',
      stem: 'With reference to COP27 (2022, Sharm el-Sheikh), which of the following was a landmark decision?',
      options: [
        'Adoption of the Paris Agreement',
        'Agreement to phase out all fossil fuels by 2030',
        'Establishment of a Loss and Damage fund for vulnerable developing countries',
        'Setting the global temperature target at 1°C above pre-industrial levels'
      ],
      correct: 2,
      explanation: 'The landmark achievement of COP27 (November 2022, Egypt) was the agreement to establish a dedicated "Loss and Damage" fund to provide financial assistance to countries most vulnerable to the adverse impacts of climate change. This was a major breakthrough after decades of negotiations — recognising that some climate impacts are beyond adaptation. The Paris Agreement was adopted at COP21 (2015). No agreement to phase out all fossils fuels was reached; the temperature target under Paris Agreement is 1.5°C/2°C, not 1°C.'
    },
    {
      id: 'env-047',
      topic: 'Pollution',
      subtopic: 'Microplastics',
      year: 2022,
      type: 'prelims',
      qtype: 'direct',
      stem: 'With reference to microplastics, which of the following statements is/are correct?',
      options: [
        'Microplastics are plastic particles less than 5 mm in size.',
        'Microplastics can only be found in ocean environments.',
        'Microplastics are biodegradable and pose no long-term environmental threat.',
        'Microplastics cannot enter the human body.'
      ],
      correct: 0,
      explanation: 'Microplastics are defined as plastic particles smaller than 5 mm. They originate from the breakdown of larger plastics and from primary microplastics (microbeads in cosmetics, synthetic fibres). They are found across environments — oceans, freshwater, soil, and even air. They are NOT biodegradable and persist for centuries. Microplastics have been detected in human blood, lungs, placenta, and breast milk, posing potential health risks.'
    },
    {
      id: 'env-048',
      topic: 'Ecology',
      subtopic: 'Succession',
      year: 2017,
      type: 'prelims',
      qtype: 'direct',
      stem: 'With reference to ecological succession, which of the following is/are correct?',
      options: [
        'Primary succession occurs on previously uncolonised bare rock, sand, or water.',
        'Secondary succession is always faster than primary succession.',
        'Climax community is the final stable state of succession in a given area.',
        'All of the above'
      ],
      correct: 3,
      explanation: 'All three are correct. Primary succession starts on bare, lifeless substrates (bare rock after glacial retreat, newly formed volcanic islands) where no soil exists. Secondary succession occurs where an existing community is disturbed (after forest fire, flood) but soil and seed bank remain — so it is faster than primary succession. The climax community is the final, stable, self-perpetuating assemblage of species that a given area of land can support under prevailing climate and soil conditions.'
    },
    {
      id: 'env-049',
      topic: 'International Conventions',
      subtopic: 'UNFCCC COPs',
      year: 2021,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about COP26 (Glasgow, 2021):',
      statements: [
        'COP26 resulted in the Glasgow Climate Pact calling for phasing down of unabated coal power.',
        'At COP26, India pledged to achieve net-zero emissions by 2070.',
        'The Glasgow Pact pledged to end deforestation by 2030.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'],
      correct: 3,
      explanation: 'All three statements are correct. The Glasgow Climate Pact (COP26, November 2021) called for "phasing down" unabated coal power — a historic first mention of fossil fuels in a COP decision (originally proposed as "phase out" but weakened at India and China\'s request). India formally announced its net-zero target of 2070 at COP26. The Glasgow Leaders\' Declaration on Forests and Land Use pledged to halt and reverse deforestation and land degradation by 2030 — signed by over 130 countries.'
    },
    {
      id: 'env-050',
      topic: 'Environmental Laws',
      subtopic: 'Coastal Regulation Zone',
      year: 2019,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements regarding the Coastal Regulation Zone (CRZ) Notification:',
      statements: [
        'The first CRZ Notification was issued in 1991 under the Environment Protection Act, 1986.',
        'CRZ-I areas include ecologically sensitive areas like mangroves, coral reefs, and national parks.',
        'Construction is completely prohibited in all CRZ areas.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 only', '1 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 2 are correct. The CRZ Notification was first issued in 1991 under the Environment Protection Act, 1986, to regulate activities along India\'s coastline within 500 metres of the High Tide Line. CRZ-I includes ecologically sensitive and geomorphologically important areas: mangroves, coral reefs, salt marshes, turtle nesting grounds, national parks, and marine sanctuaries. Statement 3 is incorrect: construction is not prohibited in ALL CRZ zones — CRZ-II (urban areas), CRZ-III (rural areas), and CRZ-IV (islands) allow regulated construction.'
    },
    {
      id: 'env-051',
      topic: 'Biodiversity',
      subtopic: 'Species',
      year: 2015,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements:',
      statements: [
        'The Indian Rhinoceros is found only in Kaziranga National Park.',
        'The Snow Leopard is found in the high altitudes of the Himalayas.',
        'The Nilgiri Tahr is an endangered species endemic to the Western Ghats.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
      correct: 1,
      explanation: 'Statements 2 and 3 are correct. Snow Leopards (Panthera uncia) inhabit the high-altitude mountain ranges of the Himalayas and Karakoram, found in Jammu & Kashmir, Himachal Pradesh, Uttarakhand, Sikkim, and Arunachal Pradesh. The Nilgiri Tahr (Nilgiritragus hylocrius) is an endemic endangered ungulate found only in the Nilgiri Hills of the Western Ghats. Statement 1 is incorrect: Indian One-horned Rhinoceroses are found in Kaziranga (Assam, ~2,600 rhinos), Manas NP (Assam), Dudhwa (UP), Orang (Assam), and Jaldapara (West Bengal) — not only in Kaziranga.'
    },
    {
      id: 'env-052',
      topic: 'Ecology',
      subtopic: 'Wetland Ecology',
      year: 2018,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Which of the following are correctly described as ecosystem services provided by wetlands?',
      statements: [
        'Flood mitigation by absorbing excess water during heavy rains',
        'Groundwater recharge',
        'Carbon sequestration in peat and sediments',
        'Desalination of seawater'
      ],
      tail: 'Select the correct answer using the code given below.',
      options: ['1, 2 and 3 only', '2, 3 and 4 only', '1 and 4 only', '1, 2, 3 and 4'],
      correct: 0,
      explanation: 'Statements 1, 2, and 3 are correct ecosystem services of wetlands. Wetlands act as natural sponges that absorb and slowly release water — crucial for flood control. They recharge groundwater aquifers when surface water percolates through them. Peatlands (a type of wetland) store massive amounts of carbon — globally storing twice as much carbon as all the world\'s forests. Statement 4 is incorrect: wetlands do not desalinate seawater; desalination is an industrial process.'
    },
    {
      id: 'env-053',
      topic: 'Climate Change',
      subtopic: 'Global Temperature',
      year: 2022,
      type: 'prelims',
      qtype: 'statement',
      stem: 'Consider the following statements about the Intergovernmental Panel on Climate Change (IPCC):',
      statements: [
        'The IPCC was established in 1988 by UNEP and WMO.',
        'The IPCC conducts its own independent scientific research on climate change.',
        'IPCC reports are agreed upon by all member governments before publication.'
      ],
      tail: 'Which of the statements given above is/are correct?',
      options: ['1 and 3 only', '2 and 3 only', '1 only', '1, 2 and 3'],
      correct: 0,
      explanation: 'Statements 1 and 3 are correct. The IPCC was established in 1988 by the United Nations Environment Programme (UNEP) and the World Meteorological Organization (WMO). The Summary for Policymakers sections of IPCC reports are approved line-by-line by member governments before publication, making them highly authoritative consensus documents. Statement 2 is incorrect: the IPCC does NOT conduct its own research. It reviews, assesses, and synthesises existing published scientific literature to provide policymakers with the state of knowledge on climate change.'
    }
  ],
  'science-tech': [],
  'international-relations': [],
  society: [],
  ethics: [],
  security: [],
  'general-science': [],
  'disaster-management': []
};
