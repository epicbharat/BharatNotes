---
layout: topic.njk
title: "Ethics of Technology & Environment — AI Ethics, Data Ethics, Climate Justice & Bioethics"
subject: ethics
parent_topic: "Ethics, Integrity & Aptitude"
parent_topic_url: /subjects/ethics/ethics-aptitude/
sub_chapter: 28
gs_papers: [gs4]
syllabus_topic: "Ethics, Integrity & Aptitude"
description: "UPSC notes on ethics of technology and environment — AI ethics, algorithmic bias, surveillance ethics, data privacy, climate ethics, intergenerational equity, bioethics."
date: 2026-03-28
foundation: true
prelims: true
mains: true
tags: [ethics, sub-topic]
---

## Why Technology Ethics Matters for UPSC

The GS-IV paper increasingly demands that candidates engage with contemporary ethical dilemmas arising from technological advancement. Questions on AI ethics, surveillance, data privacy, climate justice, and bioethics are no longer fringe topics — they test the candidate's ability to apply classical ethical frameworks (Kantian ethics, utilitarianism, virtue ethics) to 21st-century challenges.

> **For Mains:** In GS-IV, technology ethics questions may appear as direct questions ("Discuss the ethical implications of facial recognition technology") or as case studies requiring ethical reasoning. The key is to identify the competing values at stake — security vs privacy, innovation vs precaution, economic growth vs environmental protection — and reason through them systematically.

---

## Ethics of Artificial Intelligence

### Core Ethical Concerns in AI

| Concern | Description |
|---------|-------------|
| **Bias and fairness** | AI systems can inherit and amplify biases present in training data — leading to discriminatory outcomes in hiring, lending, criminal justice, and healthcare |
| **Transparency and explainability** | Many AI systems (particularly deep learning) operate as "black boxes" — their decision-making process is opaque even to their creators |
| **Accountability** | When an AI system causes harm, who is responsible? The developer, the deployer, the user, or the AI itself? |
| **Autonomy and consent** | AI-driven personalisation and recommendation engines can manipulate human behaviour without informed consent |
| **Job displacement** | Automation threatens livelihoods, particularly for low-skilled workers — raises questions of distributive justice |
| **Safety and reliability** | AI systems in critical applications (autonomous vehicles, medical diagnosis, military) must be safe and reliable — errors can be fatal |
| **Concentration of power** | AI development is concentrated among a few large technology companies and nations, creating power asymmetries |

### The COMPAS Case — Algorithmic Bias in Criminal Justice

| Aspect | Detail |
|--------|--------|
| **What is COMPAS?** | Correctional Offender Management Profiling for Alternative Sanctions — a software tool used by US courts to assess the likelihood of a defendant reoffending (recidivism risk) |
| **Developer** | Northpointe (now Equivant) |
| **ProPublica investigation (2016)** | Analysis of over 10,000 defendants in Broward County, Florida, found that Black defendants were 77% more likely to be flagged as higher risk of future violent crime and 45% more likely to be predicted to commit any future crime — compared to white defendants |
| **False positive disparity** | Black defendants who did not reoffend were almost twice as likely to be incorrectly classified as high risk compared to white defendants who did not reoffend |
| **The fairness paradox** | Subsequent research showed that it is mathematically impossible to satisfy multiple definitions of fairness simultaneously — a system can be calibrated equally across races but still have different error rates |
| **Ethical lesson** | Algorithmic tools in high-stakes decisions (criminal sentencing, bail, parole) can systematise and entrench existing societal biases — technical accuracy alone does not guarantee ethical outcomes |

### Bias in Hiring Algorithms

Amazon's experimental AI recruiting tool (reported in 2018) was found to systematically downgrade resumes that contained the word "women's" (e.g., "women's chess club") and penalised graduates from all-women's colleges. The tool was trained on 10 years of hiring data that reflected existing gender imbalances. Amazon scrapped the tool.

> **For Mains:** When answering questions on algorithmic bias, apply the Rawlsian "veil of ignorance" framework — would the algorithm be considered fair if we did not know which group we belonged to? Also apply the Kantian categorical imperative — are individuals being treated as ends in themselves, or merely as data points for optimisation?

---

## EU AI Act — The First Comprehensive AI Regulation

| Feature | Detail |
|---------|--------|
| **Full name** | Regulation (EU) 2024/1689 — adopted in 2024 |
| **Significance** | The first comprehensive legal framework for AI regulation in the world |
| **Approach** | Risk-based — different rules for different levels of risk |

### Risk Categories Under the EU AI Act

| Risk Level | Examples | Regulatory Treatment |
|------------|---------|---------------------|
| **Unacceptable risk** | Social scoring by governments, cognitive behavioural manipulation of vulnerable persons, real-time biometric identification in public spaces (with narrow exceptions) | **Prohibited** |
| **High risk** | AI in critical infrastructure, education, employment (hiring/screening), law enforcement, migration, administration of justice | **Strict requirements** — risk assessment, data quality, documentation, transparency, human oversight, accuracy |
| **Limited risk** | Chatbots, deepfake generators | **Transparency obligations** — users must be informed they are interacting with AI |
| **Minimal/no risk** | AI-enabled video games, spam filters | **Unregulated** — the majority of current AI applications |

### Implementation Timeline

Prohibitions on unacceptable-risk systems began applying from 2 February 2025. High-risk system obligations will apply 36 months after entry into force. General-purpose AI transparency rules apply 12 months after entry into force.

> **For Mains:** India does not have a comprehensive AI regulation comparable to the EU AI Act. India has taken a principles-based approach through NITI Aayog's "Responsible AI" papers (2021). The ethical question is whether India should regulate AI proactively (precautionary principle) or allow innovation to flourish and regulate reactively. This involves balancing innovation with protection of fundamental rights.

---

## Surveillance Ethics

### The Ethical Dilemma

Surveillance technology creates a fundamental tension between two legitimate values: **state security** and **individual privacy**. The ethical question is not whether surveillance is ever justified, but under what conditions and with what safeguards.

### The Aadhaar Debate

| Ethical Dimension | Detail |
|-------------------|--------|
| **Inclusion argument** | Aadhaar enables the poorest citizens to access government services, subsidies, and financial inclusion — a utilitarian argument for the greatest good |
| **Privacy concern** | Centralised biometric database creates risks of mass surveillance, data breaches, and function creep — originally meant for welfare delivery, it has been linked to tax compliance, mobile registration, and bank accounts |
| **Supreme Court ruling** | In *K.S. Puttaswamy vs Union of India* (2018), the Court upheld Aadhaar for welfare delivery and income tax but struck down its mandatory use for mobile registration and bank accounts — applied the proportionality test |
| **Ethical framework** | The proportionality principle — the means (surveillance/data collection) must be proportionate to the end (welfare delivery vs mass profiling) |

### Pegasus Spyware Controversy

| Aspect | Detail |
|--------|--------|
| **What is Pegasus?** | A military-grade spyware developed by the Israeli company NSO Group that can infiltrate smartphones and extract messages, emails, photos, and activate cameras and microphones |
| **The revelation** | In July 2021, the "Pegasus Project" (a consortium of media organisations) alleged that over 50,000 phone numbers worldwide were targeted, including approximately 300 Indian phone numbers belonging to journalists, human rights defenders, lawyers, opposition politicians, and government officials |
| **Supreme Court response** | In October 2021, the Supreme Court ordered an independent investigation by a committee headed by retired Justice R.V. Raveendran, with a technical committee of three cybersecurity experts |
| **Technical findings** | The technical panel found "some malware" on 5 of 29 examined phones but could not conclusively confirm it was Pegasus specifically |
| **Ethical issues** | Targeted surveillance of journalists and political opponents undermines press freedom, democratic dissent, and the rule of law; even lawful surveillance requires judicial oversight and proportionality |

### Facial Recognition Technology (FRT)

| Ethical Concern | Detail |
|----------------|--------|
| **Mass surveillance** | FRT enables identification of individuals in public spaces without their knowledge or consent — a qualitative shift from targeted surveillance |
| **Accuracy disparities** | Studies have shown FRT systems have higher error rates for women and people with darker skin tones — raising concerns about discrimination |
| **Chilling effect** | Knowledge that one is being watched inhibits free expression, assembly, and dissent — the Benthamite "panopticon" effect |
| **India's use** | India has deployed FRT systems for law enforcement, railway station surveillance, and identification of missing persons — without a comprehensive legal framework governing its use |

> **For Mains:** Apply the Kantian principle of human dignity — mass surveillance treats citizens as objects of suspicion rather than autonomous agents. Apply the social contract theory — citizens consent to limited state power in exchange for protection, not unlimited monitoring. The proportionality principle (from the Puttaswamy judgment) provides the framework: legitimate aim + necessity + proportionality + safeguards.

---

## Data Ethics and Privacy

### The Digital Personal Data Protection Act (DPDP), 2023

| Feature | Detail |
|---------|--------|
| **Enacted** | 11 August 2023; Rules notified on 13 November 2025 |
| **Key concepts** | Data Principal (individual whose data is processed), Data Fiduciary (entity processing data), Consent Manager |
| **Consent requirement** | Data processing requires "free, specific, informed, unconditional and unambiguous" consent through clear affirmative action |
| **Data Fiduciary obligations** | Maintain accuracy, ensure security, delete data once purpose is fulfilled |
| **Children's data** | Verifiable parental consent required; ban on behavioural monitoring and targeted advertising directed at children |
| **Data Protection Board** | Independent body to oversee compliance, handle breaches, conduct investigations — penalties up to Rs 250 crore |
| **Right to be forgotten** | Data Principals have the right to erasure of personal data |
| **Government exemptions** | Broad exemptions for government processing "in the interest of sovereignty, integrity, security of India, public order" — this has been criticised as undermining the law's protections |

### Ethical Dimensions of Data Collection

| Dimension | Ethical Question |
|-----------|-----------------|
| **Consent** | Is "informed consent" meaningful when privacy policies are hundreds of pages long and users have no real choice? |
| **Data ownership** | Who owns personal data — the individual who generates it or the company that collects it? |
| **Data as labour** | Users create value through their data (browsing, clicks, purchases) but receive no compensation — is this exploitative? |
| **Digital divide** | Data ethics frameworks designed for connected, literate populations may not protect the most vulnerable |
| **Surveillance capitalism** | Business models based on extracting and monetising personal data transform human experience into raw material for profit — Shoshana Zuboff's concept |

> **For Mains:** The ethical tension in data protection is between innovation (which requires data) and privacy (which restricts data access). Apply John Stuart Mill's harm principle — data collection that causes no direct harm may still erode autonomy by enabling manipulation (targeted advertising, political micro-targeting). The DPDP Act's government exemptions raise the question: can a government that exempts itself from data protection genuinely protect citizens' data from private actors?

---

## Social Media Ethics

### Ethical Challenges

| Challenge | Description |
|-----------|-------------|
| **Fake news and misinformation** | Social media platforms algorithmically amplify sensational and emotionally charged content — including false information — because it drives engagement |
| **Echo chambers and filter bubbles** | Algorithms show users content that confirms their existing beliefs, reducing exposure to diverse perspectives and deepening polarisation |
| **Attention economy** | Social media platforms compete for human attention; design features (infinite scroll, notifications, variable rewards) are deliberately addictive — raising questions about manipulation |
| **Hate speech and incitement** | Social media has been linked to communal violence (Sri Lanka, Myanmar, India) — platforms struggle to moderate content in local languages |
| **Mental health impact** | Studies link excessive social media use to anxiety, depression, body image issues, and cyberbullying — particularly among adolescents |
| **Democratic manipulation** | Micro-targeted political advertising, bot networks, and coordinated inauthentic behaviour can distort democratic processes |

### Ethical Frameworks for Social Media

| Framework | Application |
|-----------|-------------|
| **Duty of care** | Platforms have a duty of care to users, particularly minors — analogous to a publisher's responsibility for content |
| **Kantian universalisability** | Would we want a world where all information platforms maximise engagement regardless of truth? The universalisation test suggests not |
| **Virtue ethics** | Platforms should cultivate virtues of honesty, moderation, and civic responsibility in their design — not exploit human psychological vulnerabilities |
| **Common good** | Information ecosystems are public goods — their degradation harms everyone, including those not on the platform |

---

## Climate Ethics

### Core Ethical Principles

| Principle | Description |
|-----------|-------------|
| **Common But Differentiated Responsibilities (CBDR)** | Enshrined in the UNFCCC — all nations share the responsibility of addressing climate change, but historically industrialised nations bear a greater responsibility because they contributed more to cumulative emissions |
| **Intergenerational equity** | The current generation has an ethical obligation to future generations to leave a liveable planet — expressed in the concept of "sustainable development" (Brundtland Report, 1987) |
| **Climate justice** | Those least responsible for climate change (developing nations, indigenous peoples, the global poor) are most vulnerable to its effects — addressing this disparity is a matter of justice |
| **Polluter pays principle** | Those who cause environmental damage should bear the costs of remediation — applied to both nations and corporations |
| **Precautionary principle** | Where there is scientific uncertainty about environmental harm, the absence of conclusive evidence should not be used as a reason to postpone preventive action |

### Key Ethical Debates in Climate

| Debate | Competing Positions |
|--------|---------------------|
| **Historical emissions vs current emissions** | Developed nations argue all major emitters must act now; developing nations argue historical responsibility must be acknowledged — India's per capita emissions are approximately one-third of the global average and one-eighth of the USA's |
| **Carbon budget allocation** | How should the remaining global carbon budget be distributed? Per capita (favours developing nations) or based on GDP/capability (favours developed nations)? |
| **Loss and damage** | Should developed nations compensate developing nations for climate impacts already occurring? The Loss and Damage Fund agreed at COP27 (2022) and operationalised at COP28 (2023) addresses this |
| **Climate migration** | Climate-induced displacement raises questions about the rights of climate refugees — currently no legal framework protects them |
| **Technology transfer** | Should clean energy technologies be shared freely with developing nations, or do patent holders have a right to profit? |

> **For Mains:** India's position on climate ethics is rooted in CBDR and per capita equity. In ethics answers, frame this as a matter of distributive justice — the benefits of industrialisation were enjoyed by the developed world, but the costs (climate change) are borne disproportionately by the developing world. This is an application of Rawls' difference principle — inequalities are justifiable only if they benefit the least advantaged.

---

## Environmental Ethics

### Schools of Environmental Thought

| School | Position | Key Thinkers |
|--------|----------|-------------|
| **Anthropocentrism** | Nature has value only insofar as it serves human needs and interests — the dominant paradigm of industrialisation | Most Western ethical traditions |
| **Biocentrism** | All living beings have inherent value — not just humans; respect for nature extends to all life forms | Albert Schweitzer ("reverence for life"), Paul Taylor |
| **Ecocentrism** | Ecosystems as wholes have intrinsic value — species, habitats, and ecological processes matter beyond individual organisms | Aldo Leopold ("land ethic") |
| **Deep ecology** | Nature has intrinsic value independent of its utility to humans; the flourishing of non-human life requires a significant decrease in human population and economic activity | Arne Naess (Norwegian philosopher, coined the term in 1973) |
| **Ecofeminism** | Environmental degradation and the oppression of women have common roots in patriarchal domination — both involve the exploitation of "the other" | Vandana Shiva, Val Plumwood |
| **Environmental pragmatism** | Rather than debating intrinsic vs instrumental value, focus on practical solutions to environmental problems through democratic deliberation | Bryan Norton |

### Animal Rights and Speciesism

| Concept | Description |
|---------|-------------|
| **Speciesism** | The assignment of different moral worth based on species membership — coined by Peter Singer; analogous to racism or sexism |
| **Utilitarianism and animals** | Peter Singer's argument — if an animal can suffer, its suffering must count equally in our moral calculations; factory farming causes immense suffering for marginal human benefit |
| **Rights-based approach** | Tom Regan argues that animals are "subjects-of-a-life" with inherent value and rights that cannot be violated regardless of consequences |
| **Indian perspective** | Indian philosophical traditions (Jainism's *ahimsa*, Buddhism's compassion for all sentient beings, Hinduism's concept of the divine in all creatures) provide deep roots for animal ethics |

> **For Mains:** Environmental ethics in UPSC typically involves applying ethical concepts to policy dilemmas — development vs conservation, tribal rights vs wildlife protection, economic growth vs pollution control. Deep ecology provides one extreme (nature above human needs); anthropocentrism provides the other (nature as resource). The UPSC-appropriate position is typically stewardship — humans as responsible custodians of nature, balancing development with conservation.

---

## Bioethics

### Key Bioethical Issues

| Issue | Ethical Dimensions |
|-------|-------------------|
| **Genetic editing (CRISPR)** | CRISPR-Cas9 technology allows precise editing of DNA. The case of He Jiankui (China, 2018), who claimed to create the first gene-edited babies (twins resistant to HIV), raised global alarm about crossing ethical red lines. The scientific community condemned the experiment; He was sentenced to 3 years in prison. Key ethical question: Should we edit the human germline (heritable changes) or only somatic cells (non-heritable)? |
| **Euthanasia and right to die** | Active euthanasia (administering lethal substance) vs passive euthanasia (withdrawing life support). In *Common Cause v Union of India* (2018), the Supreme Court of India legalised passive euthanasia and recognised the right to advance medical directives ("living will"). Active euthanasia remains illegal in India |
| **Organ transplantation** | Ethical issues: organ trafficking, presumed consent vs opt-in systems, allocation criteria (urgency vs likelihood of success), commodification of the body. India's Transplantation of Human Organs and Tissues Act (1994, amended 2011) regulates organ donation but illegal organ trade persists |
| **Surrogacy** | Commercial surrogacy — banned in India by the Surrogacy (Regulation) Act, 2021; only altruistic surrogacy by close relatives is permitted. Ethical concerns: commodification of women's bodies, exploitation of poor women, the "baby factory" problem |
| **Clinical trials** | Ethical requirements: informed consent, institutional ethics committee approval, benefit-sharing, protection of vulnerable populations. India has faced criticism for clinical trials conducted without adequate informed consent, particularly among illiterate and tribal populations |
| **Stem cell research** | Embryonic stem cell research raises the question of the moral status of the embryo. India permits regulated embryonic stem cell research under ICMR guidelines (2017) |

### The Four Principles of Biomedical Ethics (Beauchamp and Childress)

| Principle | Description |
|-----------|-------------|
| **Autonomy** | Respect for the patient's right to make informed decisions about their own body and treatment |
| **Beneficence** | Obligation to act in the patient's best interest — to do good |
| **Non-maleficence** | Obligation to not cause harm — "first, do no harm" (*primum non nocere*) |
| **Justice** | Fair distribution of healthcare resources; equitable access to treatment |

> **For Mains:** Bioethics questions in UPSC often involve the tension between autonomy and paternalism (should the state restrict individual choice for the person's own good?) or between beneficence and justice (how should scarce medical resources be allocated?). Use the four-principles framework as a structured approach to ethical analysis.

---

## Nuclear Ethics

### Ethical Dimensions of Nuclear Energy and Weapons

| Dimension | Ethical Question |
|-----------|-----------------|
| **Nuclear weapons** | Can the possession of weapons capable of destroying civilisation be morally justified? Deterrence theory argues yes (preventing war through fear); abolitionists argue the risk of catastrophe makes possession inherently immoral |
| **Nuclear energy and intergenerational justice** | Nuclear waste remains radioactive for thousands of years — imposing risks on generations yet unborn who had no say in the decision. Is this just? |
| **Nuclear energy and climate** | Nuclear power generates minimal carbon emissions — should environmental concerns override nuclear safety fears? |
| **Just war theory and nuclear weapons** | Traditional just war principles (proportionality, distinction between combatants and civilians) are impossible to satisfy with nuclear weapons — their effects are indiscriminate and disproportionate |
| **India's nuclear doctrine** | India maintains a "No First Use" policy and "credible minimum deterrence" — ethically positioned as defensive rather than aggressive |

---

## Space Ethics

### Emerging Ethical Questions

| Question | Context |
|----------|---------|
| **Space resource exploitation** | The Artemis Accords (2020) and US Commercial Space Launch Competitiveness Act (2015) allow private companies to mine asteroids and the Moon — but the Outer Space Treaty (1967) prohibits national appropriation. Is corporate exploitation of space resources consistent with the principle of "common heritage of mankind"? |
| **Space debris** | Over 36,000 tracked debris objects in Earth orbit; Kessler Syndrome (cascading collisions) could make orbits unusable. Who is responsible for cleaning up space debris? The launching state? The company? |
| **Planetary protection** | Should we protect other planets from contamination by Earth organisms? Is there an ethical obligation to preserve extraterrestrial environments? |
| **Space colonisation** | If humans colonise Mars, what governance structures should apply? Can the errors of terrestrial colonialism be avoided? |
| **Space militarisation** | India's ASAT test (Mission Shakti, 2019) demonstrated the ability to destroy satellites — raising concerns about the weaponisation of space |

---

## Key Terms for Quick Revision

| Term | Meaning |
|------|---------|
| **Algorithmic bias** | Systematic discrimination by AI systems due to biased training data, flawed design, or biased assumptions |
| **Surveillance capitalism** | Business model based on extracting and monetising personal data — coined by Shoshana Zuboff |
| **CBDR** | Common But Differentiated Responsibilities — climate justice principle enshrined in the UNFCCC |
| **Intergenerational equity** | The current generation's ethical obligation to future generations |
| **Deep ecology** | Environmental philosophy that assigns intrinsic value to nature independent of human utility — coined by Arne Naess (1973) |
| **Speciesism** | Moral discrimination based on species membership — coined by Peter Singer |
| **Precautionary principle** | Where there is risk of serious harm, the absence of scientific certainty should not delay preventive action |
| **DPDP Act** | Digital Personal Data Protection Act, 2023 — India's first comprehensive data protection law |
| **CRISPR** | Clustered Regularly Interspaced Short Palindromic Repeats — gene-editing technology |
| **Passive euthanasia** | Withdrawing life support — legalised in India by the Supreme Court in *Common Cause v Union of India* (2018) |
| **Four principles of bioethics** | Autonomy, beneficence, non-maleficence, justice (Beauchamp and Childress framework) |
| **Panopticon** | Jeremy Bentham's concept of a prison where inmates are always potentially observed — metaphor for surveillance society |

---

## Exam Strategy

> **For Mains Answer Writing:** Ethics of technology and environment questions require three elements: (1) identify the ethical dilemma (competing values), (2) apply relevant ethical frameworks (utilitarianism, Kantian ethics, virtue ethics, Rawlsian justice), and (3) propose a balanced resolution that acknowledges trade-offs. Never take an absolutist position — UPSC values nuanced, balanced ethical reasoning. Always include an Indian context or example (Aadhaar, Pegasus, DPDP Act, India's climate position) to demonstrate awareness and relevance.

> **For Case Studies:** Technology and environment case studies may present scenarios involving a government official deciding on surveillance deployment, a scientist facing pressure on genetic research, or a policymaker balancing industrial development with environmental protection. Use the four-step approach: (1) identify stakeholders, (2) identify ethical issues, (3) identify options with consequences, (4) recommend the most ethically defensible course of action.
