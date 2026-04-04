---
layout: topic.njk
title: "Digital Ethics — Privacy, Surveillance & AI Governance"
gs_paper: gs4
syllabus_topic: "Ethics and Human Interface"
description: "Digital ethics for UPSC GS4: Right to Privacy (Puttaswamy 2017), DPDP Act 2023, Aadhaar ethical concerns, mass surveillance, algorithmic bias, AI in public service, facial recognition ethics, and GDPR comparison."
sub_chapter: 27
date: 2026-04-04
tags:
  - gs4
  - ethics
  - digital-ethics
  - privacy
  - surveillance
  - AI-governance
---

## Introduction

The digital revolution has multiplied the state's capacity to gather, process, and act upon personal data at a scale and speed unimaginable in the pre-internet era. This expansion of state power intersects with fundamental rights in ways that demand rigorous ethical scrutiny. Digital ethics addresses not only privacy but also algorithmic fairness, the ethics of artificial intelligence in governance, and the social consequences of pervasive surveillance. For UPSC GS4, this is an applied ethics domain — abstract principles must be tested against concrete technology deployments.

---

## Right to Privacy: The Puttaswamy Judgment, 2017

In *Justice K.S. Puttaswamy (Retd.) v. Union of India*, decided on 24 August 2017, a nine-judge bench of the Supreme Court unanimously held that the **right to privacy is a fundamental right** protected under Articles 14, 19, and 21 of the Constitution of India.

The bench comprised Justices J.S. Khehar (CJI), J. Chelameswar, S.A. Bobde, R.K. Agrawal, R.F. Nariman, A.M. Sapre, D.Y. Chandrachud, S.K. Kaul, and S.A. Nazeer. A nine-judge bench was constituted because earlier benches of six and eight judges had held that privacy was not a fundamental right — the larger bench was needed to authoritatively settle the question.

**Key holdings:**
- Privacy is an intrinsic part of the right to life and personal liberty under Article 21.
- Privacy encompasses bodily integrity, personal autonomy, informational self-determination, and the right to make intimate personal choices.
- Any state encroachment on the right to privacy must satisfy a three-pronged test: (1) **legality** — it must be grounded in law; (2) **necessity** — it must serve a legitimate state objective; (3) **proportionality** — the means must be rationally connected to and not excessive for the objective.

The Puttaswamy test establishes the constitutional benchmark against which all data collection, surveillance, and digital governance measures must be evaluated.

---

## Digital Personal Data Protection Act, 2023

The Digital Personal Data Protection (DPDP) Act received the assent of the President of India on **11 August 2023**, becoming the first dedicated data protection legislation in India.

### Core Concepts

**Data Principal:** The individual whose personal data is being processed. Data principals have rights to: (i) obtain information about how their data is processed; (ii) seek correction and erasure of personal data; (iii) nominate another person to exercise their rights in the event of death or incapacity; and (iv) seek grievance redressal.

**Data Fiduciary:** Any person, company, or government entity that determines the purpose and means of processing personal data. Data fiduciaries must maintain accuracy, ensure security, delete data once its purpose is met, and report breaches to both the Data Protection Board and affected individuals within a specified period.

**Significant Data Fiduciary (SDF):** Entities designated by the government based on volume and sensitivity of data processed. SDFs must appoint a Data Protection Officer (DPO) based in India and conduct regular data protection impact assessments.

**Consent and Legitimate Use:** Processing of personal data requires consent from the data principal. Consent is not required for "legitimate uses" including: voluntary data provision for a specified purpose, government service delivery, medical emergencies, and employment purposes.

**Data Protection Board of India:** An adjudicatory body established under the Act to hear complaints and impose penalties for non-compliance. Penalties can reach up to ₹250 crore per instance of non-compliance.

### Ethical Concerns with the DPDP Act

- **Government exemptions:** The Act allows the central government to exempt any government instrumentality from its provisions — raising concerns that state surveillance agencies are insulated from accountability.
- **Weak consent architecture:** "Deemed consent" and legitimate use exceptions are broad, potentially allowing processing without meaningful individual choice.
- **No data localisation mandate:** Unlike earlier draft Bills, DPDP 2023 does not require data to be stored only within India, with cross-border transfers governed by government notification rather than statutory criteria.
- **Dilution of children's protections:** The Act bans behavioural tracking and targeted advertising targeting children but relies on self-declaration of age by data fiduciaries.

### GDPR Comparison

| Dimension | DPDP Act 2023 (India) | GDPR (EU, 2018) |
|---|---|---|
| Scope | Digital personal data | All personal data (digital + non-digital) |
| Data Principal Rights | Information, correction, erasure, nomination, grievance | Access, portability, erasure, objection, automated decision-making |
| Government exemptions | Broad, by notification | Narrow, defined in statute |
| Independent regulator | Data Protection Board (government-appointed) | Independent Data Protection Authorities (DPAs) |
| Max penalty | ₹250 crore per breach | €20 million or 4% of global turnover |
| Data localisation | Not mandated | No general mandate; sector-specific |

---

## Aadhaar and Ethical Concerns

Aadhaar — the world's largest biometric identity programme with over 1.3 billion enrolments — raises ethical concerns that cut across privacy, inclusion, and coercion:

- **Surveillance infrastructure:** A centralised biometric database creates a single point of failure and a potential mass surveillance instrument if misused.
- **Exclusion harms:** Documented cases of denial of food rations and social security benefits to genuine beneficiaries due to biometric authentication failures — authentication errors can constitute denial of subsistence rights.
- **Forced consent:** Despite the Supreme Court's ruling in *Puttaswamy II (Aadhaar judgment)* (2018) that Aadhaar cannot be made mandatory for private entities, linkage pressures persist.

From a **deontological standpoint**, compelling individuals to submit biometric data as a condition of receiving state entitlements treats persons as means to administrative efficiency rather than as ends. From a **consequentialist view**, the efficiency gains (plugging leakages, direct benefit transfers) must be weighed against exclusion harms to the most vulnerable.

---

## Mass Surveillance Ethics

Mass surveillance — the monitoring of entire populations rather than targeted individuals suspected of wrongdoing — raises fundamental questions about the relationship between state power and individual freedom.

**Arguments in favour:**
- Counter-terrorism and national security imperatives (consequentialist reasoning)
- Crime prevention through deterrence
- Improved emergency response

**Arguments against:**
- **Chilling effect on free speech and assembly:** When people know they are watched, they self-censor lawful expression — surveillance thus suppresses democracy without a single act of censorship.
- **Power asymmetry:** Surveillance without accountability concentrates power in the hands of the state without reciprocal transparency.
- **Presumption of guilt:** Mass surveillance treats all citizens as potential suspects, inverting the presumption of innocence.
- **Proportionality failure:** Surveillance of entire populations fails the Puttaswamy proportionality test because it goes far beyond what is necessary to achieve any specific security objective.

India does not yet have a comprehensive surveillance oversight law. The Supreme Court has noted this gap, and the absence of a legislative framework for interception and monitoring remains a significant rule-of-law concern.

---

## Algorithmic Bias and Discrimination

AI systems used in public administration — for welfare targeting, credit scoring, predictive policing, or court bail recommendations — can replicate and amplify historical social biases if trained on historically biased data.

**Concrete examples:**
- Facial recognition systems have documented higher error rates for women and people with darker skin tones, raising concerns about discriminatory policing.
- Predictive policing algorithms trained on past arrest data tend to over-police already over-policed communities, creating a feedback loop.
- Automated welfare eligibility systems may systematically disadvantage communities with less formal documentation.

**Ethical frameworks:**
- **Deontological:** Citizens have a right to be judged by law, not by algorithmic probability scores. Automated adverse decisions without human review and appeal violate procedural justice.
- **Consequentialist:** If algorithmic errors cause denial of benefits or wrongful arrest at scale, aggregate harm exceeds any efficiency gain.
- **Virtue ethics:** A just administration should be designed to treat each person with equal dignity — algorithmic shortcuts that reduce persons to risk scores are incompatible with this standard.

---

## Ethics of AI in Public Service

### Facial Recognition in Governance

Indian police forces have deployed facial recognition technology for crowd surveillance, event security, and tracking of persons of interest. The Delhi Police's use of facial recognition for identifying protestors has drawn criticism on both accuracy and civil liberties grounds.

Key ethical questions:
- **Accuracy:** No publicly disclosed error rate data for Indian government deployments — citizens cannot hold agencies accountable for misidentifications.
- **Due process:** Should a match on a facial recognition system constitute sufficient grounds for detention?
- **Scope creep:** Technology deployed for one purpose (finding missing persons) has been applied to others (tracking protestors) without democratic authorisation.

### Predictive Policing

Systems that use historical data to predict where crime will occur or who might commit crimes raise similar concerns. The ethical problem is circular: if police patrol high-crime areas because an algorithm says they will be high-crime areas, they will make more arrests there — confirming the prediction regardless of actual crime patterns.

---

## Social Media Ethics and Public Servants

For civil servants, social media creates specific ethical risks: disclosure of confidential information, statements that compromise neutrality, and conduct unbecoming of public office. The Central Civil Services (Conduct) Rules, 1964 apply to digital conduct — a public servant who publicly criticises government policy on social media may violate Rule 9 (Criticism of Government) even if speaking truthfully.

The ethical tension is between the right to free expression (Article 19) and the duty of neutrality and confidentiality that the office demands.

---

## PYQ Relevance

Digital ethics questions have grown significantly in recent years:

- 2019: "Personal data protection is the need of the hour." Discuss ethical and governance dimensions.
- 2021: Case study on a government officer who discovers mass surveillance data is being misused — tests conflict between institutional loyalty and public interest duty.
- 2022: "Algorithmic governance raises concerns about fairness and accountability." Critically examine.
- 2023: Ethical dimensions of AI in public administration; facial recognition and right to privacy.

---

## Exam Strategy

**Framework pairing:** Privacy ethics questions are best answered by pairing the constitutional framework (Puttaswamy three-pronged test) with an ethical framework (deontological rights vs. consequentialist security balance). This shows both legal awareness and philosophical depth.

**Key terms to use:** data principal, data fiduciary, proportionality, informational self-determination, chilling effect, algorithmic accountability, procedural justice, DPDP Act, Puttaswamy test.

**Case study approach:** For digital ethics case studies, always identify: (1) what data is collected, (2) who has access, (3) what oversight exists, (4) who bears the risk of misuse, and (5) whether proportionality is satisfied.

**Avoid:** Treating surveillance as inherently good (security) or inherently bad (privacy). UPSC rewards balanced analysis that shows conditions under which surveillance is justified and when it crosses ethical boundaries.

**Cross-link:** For current affairs on DPDP Rules notifications, AI governance policy, and surveillance controversies, see [Ujiyari.com](https://ujiyari.com).
