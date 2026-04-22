/**
 * PharmaMastery RN — Question Banks
 * pharmamastery_questions.js
 *
 * 540 questions across 9 modules (45 rapid_fire + 15 bridge_check each)
 * Three-axis NCLEX tagging: nclex (Client Needs), process (Nursing Process), cognitive (Bloom's)
 * Answer options equalized in length — no giveaways
 * Designed for randomized selection with variant cycling
 */

const QUESTION_BANKS = {
  "M0": {
    "rapid_fire": [
      {
        "q": "Which pharmacokinetic phase describes how a drug moves from its site of administration into the bloodstream?",
        "opts": [
          "Absorption is the movement of a drug from the administration site into the bloodstream",
          "Distribution moves a drug through tissues after it enters the blood",
          "Metabolism chemically transforms a drug in the liver before distribution",
          "Excretion removes a drug from the body primarily through the kidneys"
        ],
        "correct": 0,
        "cat": "Classification",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "ADME: Absorption is entry into circulation. Distribution is movement to tissues. Metabolism is chemical transformation. Excretion is elimination from the body."
      },
      {
        "q": "A patient receives a medication via a transdermal patch. Which pharmacokinetic phase is most affected by the condition of their skin?",
        "opts": [
          "Distribution is impaired because skin inflammation changes protein binding",
          "Absorption is affected because the drug must pass through intact dermis to reach capillaries",
          "Metabolism is altered because the skin converts the drug to its active form",
          "Excretion is slowed because sweat glands compete with drug entry"
        ],
        "correct": 1,
        "cat": "Classification",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Transdermal delivery relies on passive diffusion through the skin into dermal capillaries — this is absorption. Skin integrity (burns, rashes, excessive moisture) directly affects the rate and extent of drug absorption."
      },
      {
        "q": "An IM injection of a water-soluble antibiotic reaches peak blood levels faster than a depot oil-based injection. Which pharmacokinetic principle explains this?",
        "opts": [
          "Water-soluble drugs distribute to tissues more efficiently than oil-based formulations",
          "Water-soluble drugs are excreted more slowly, allowing levels to build up quickly",
          "Water-soluble drugs are absorbed from the injection site more rapidly than oil-based depots",
          "Oil-based drugs undergo first-pass metabolism whereas water-soluble drugs do not"
        ],
        "correct": 2,
        "cat": "Classification",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Absorption rate from an IM site depends on drug solubility in interstitial fluid and local blood flow. Water-soluble drugs dissolve quickly and enter capillaries rapidly. Oil-based depot formulations form a reservoir that releases drug slowly over days to weeks."
      },
      {
        "q": "A drug with a narrow therapeutic index means:",
        "opts": [
          "It produces therapeutic effects only in patients with a narrow weight range",
          "It is approved for a limited number of specific clinical indications only",
          "It can only be administered through a narrow-gauge intravenous catheter",
          "The difference between the effective dose and the toxic dose is dangerously small"
        ],
        "correct": 3,
        "cat": "Mechanism",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Comprehension",
        "rationale": "Narrow therapeutic index drugs (digoxin, lithium, warfarin, phenytoin) have little margin between therapeutic and toxic levels — small dosing errors can cause toxicity or treatment failure."
      },
      {
        "q": "A nurse checks a digoxin level of 2.3 ng/mL (therapeutic range 0.5-2.0 ng/mL). The patient reports nausea and visual disturbances. Which concept best explains why this small elevation above range is clinically significant?",
        "opts": [
          "Digoxin has a narrow therapeutic index, meaning even slight supratherapeutic levels cause toxicity",
          "Digoxin toxicity is caused by drug interactions rather than by elevated serum levels",
          "Digoxin has a wide therapeutic index, so levels above range rarely cause symptoms",
          "Visual disturbances indicate an allergic reaction unrelated to the serum drug level"
        ],
        "correct": 0,
        "cat": "Mechanism",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Digoxin's narrow therapeutic index means the toxic level (>2.0) is very close to the therapeutic range (0.5-2.0). A level of 2.3 — only 0.3 above maximum — already produces classic toxicity symptoms: nausea, visual changes, and dysrhythmias."
      },
      {
        "q": "A pharmacy student asks why phenytoin levels are checked routinely but ibuprofen levels are not. Which pharmacologic principle provides the best answer?",
        "opts": [
          "Ibuprofen is metabolized too rapidly for serum levels to be clinically meaningful",
          "Phenytoin has a narrow therapeutic index requiring close monitoring; ibuprofen has a wide margin of safety",
          "Ibuprofen serum assays are unavailable in most clinical laboratories nationwide",
          "Phenytoin is always given intravenously, which mandates monitoring of blood levels"
        ],
        "correct": 1,
        "cat": "Mechanism",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Phenytoin has a narrow therapeutic index (10-20 mcg/mL) and exhibits zero-order kinetics at therapeutic doses, making toxicity easy to reach. Ibuprofen has a wide margin between effective and toxic doses, so routine drug-level monitoring is unnecessary."
      },
      {
        "q": "A patient has severe liver failure. Which pharmacokinetic process is most likely to be impaired?",
        "opts": [
          "Absorption from the gastrointestinal tract into the portal circulation",
          "Renal excretion of water-soluble drug metabolites via the kidneys",
          "Hepatic metabolism including Phase I oxidation and Phase II conjugation reactions",
          "Protein binding via albumin only, without any effect on drug clearance"
        ],
        "correct": 2,
        "cat": "Special Populations",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Most drugs undergo hepatic metabolism (Phase I and II reactions). Liver failure slows this process — drugs accumulate to higher levels and stay in the body longer, increasing toxicity risk."
      },
      {
        "q": "A cirrhosis patient is prescribed a benzodiazepine for anxiety. The provider selects lorazepam over diazepam. Which pharmacokinetic rationale supports this choice?",
        "opts": [
          "Diazepam undergoes Phase II metabolism only, which fails earlier than Phase I in liver disease",
          "Diazepam is renally cleared and therefore unaffected by hepatic impairment in most patients",
          "Lorazepam has a longer half-life, allowing less frequent dosing in cirrhosis populations",
          "Lorazepam undergoes only Phase II glucuronidation, which is preserved longer in liver disease"
        ],
        "correct": 3,
        "cat": "Special Populations",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Diazepam requires Phase I oxidation (CYP-dependent), which is significantly impaired in cirrhosis. Lorazepam undergoes Phase II glucuronidation, which is relatively preserved until late-stage liver disease. This makes lorazepam safer in hepatic impairment."
      },
      {
        "q": "A patient with hepatic encephalopathy receives a standard dose of morphine. The nurse notices prolonged sedation lasting 12 hours. Which pharmacokinetic explanation is most likely?",
        "opts": [
          "Hepatic metabolism of morphine is severely impaired, causing drug accumulation and prolonged effects",
          "Morphine absorption is enhanced in liver failure due to increased gut motility",
          "Renal excretion of morphine is reduced because liver failure causes concurrent kidney injury",
          "Morphine protein binding increases in liver failure, trapping the drug in the vascular space"
        ],
        "correct": 0,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Morphine undergoes extensive hepatic metabolism (glucuronidation). In severe liver failure, metabolism is impaired — the drug and its active metabolites accumulate, producing prolonged and intensified sedation, respiratory depression, and risk of hepatic encephalopathy worsening."
      },
      {
        "q": "Which of the 10 Rights of Medication Administration requires you to document immediately after giving a drug?",
        "opts": [
          "Right drug ensures the correct medication is selected from the dispensing system",
          "Right documentation requires recording administration immediately after the dose is given",
          "Right time verifies the medication is given within the accepted scheduling window",
          "Right route confirms the drug is delivered via the prescribed administration pathway"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Knowledge",
        "rationale": "The Right Documentation right requires documentation immediately after administration — not before, and not delegated. Documenting before giving creates a dangerous gap if the dose is not actually given."
      },
      {
        "q": "A nurse documents a medication as 'given' in the MAR before walking to the patient's room. The patient then refuses the medication. Which medication administration right was violated?",
        "opts": [
          "Right patient was violated because the nurse did not verify identity before documenting",
          "Right assessment was violated because the nurse failed to check vitals before administration",
          "Right documentation was violated because the medication was charted before actual administration",
          "Right dose was violated because the documentation reflected an incorrect amount delivered"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "SECE-SIC",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Documenting before administration violates the Right Documentation — the record now falsely shows a medication was given when it was not. This creates a legal and safety issue: another nurse might assume the dose was given and skip a needed reassessment."
      },
      {
        "q": "A float nurse administers insulin to a patient without scanning the barcode on the patient's wristband. Which medication administration right is most directly compromised?",
        "opts": [
          "Right time is compromised because barcode scanning checks the scheduled administration window",
          "Right drug is compromised because barcode scanning primarily verifies the medication name",
          "Right dose is compromised because barcode scanning calculates the correct insulin units",
          "Right patient is compromised because barcode scanning verifies the patient's identity at bedside"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Barcode scanning at the bedside is the primary technology safeguard for Right Patient verification. Skipping the scan removes the last barrier against wrong-patient errors — especially dangerous with high-alert medications like insulin."
      },
      {
        "q": "A drug with high first-pass metabolism is given orally versus IV. Which route will require a higher dose to achieve the same systemic effect?",
        "opts": [
          "Oral will require a higher dose because significant drug is destroyed before reaching circulation",
          "Both will require identical doses regardless of the administration route chosen",
          "IV will require a higher dose to compensate for rapid systemic distribution",
          "The route does not affect the dosing because bioavailability is constant across all routes"
        ],
        "correct": 0,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "High first-pass metabolism means significant drug is destroyed in the gut wall and liver before reaching systemic circulation. The oral dose must be higher than IV to compensate for this loss. Example: propranolol, morphine."
      },
      {
        "q": "Oral morphine 30 mg produces a similar analgesic effect to IV morphine 10 mg. Which pharmacokinetic concept explains the 3:1 dose ratio between routes?",
        "opts": [
          "Morphine distributes more slowly after oral administration, requiring a larger bolus dose",
          "Morphine undergoes extensive first-pass hepatic metabolism, so approximately two-thirds of the oral dose is lost before reaching systemic circulation",
          "IV morphine binds to opioid receptors with greater affinity than oral morphine at the same concentration",
          "Oral morphine is converted to inactive metabolites in the stomach by gastric acid degradation"
        ],
        "correct": 1,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Morphine has roughly 30% oral bioavailability due to extensive first-pass metabolism in the liver. About two-thirds of the oral dose is metabolized before reaching systemic circulation, requiring approximately 3 times the IV dose to achieve equivalent analgesia."
      },
      {
        "q": "A provider switches a patient from IV nitroglycerin to an oral nitrate. The nurse notes the oral dose is substantially higher. A student asks why. What is the correct explanation?",
        "opts": [
          "The GI tract degrades nitrates through enzymatic hydrolysis before they can be absorbed completely",
          "Oral nitrates are less potent at the receptor level and require higher concentrations to activate",
          "Oral nitrates undergo extensive first-pass metabolism in the liver, so higher doses compensate for presystemic drug loss",
          "Oral nitrates have a longer duration of action, so the higher dose accounts for the extended time frame"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Analysis",
        "cognitive": "Comprehension",
        "rationale": "Nitroglycerin has very low oral bioavailability (<1%) due to nearly complete first-pass hepatic metabolism. Sublingual and IV routes bypass first-pass. Oral nitrate formulations (isosorbide mononitrate) are designed with higher doses and different chemical structures to survive hepatic extraction."
      },
      {
        "q": "A pharmacodynamic drug interaction occurs when:",
        "opts": [
          "One drug changes the gastrointestinal absorption of another drug substantially",
          "One drug inhibits the CYP450 hepatic metabolism of another drug significantly",
          "One drug changes the renal tubular clearance of another drug in the kidneys",
          "Two drugs act on the same receptor system or physiologic pathway simultaneously"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Comprehension",
        "rationale": "Pharmacodynamic interactions involve additive, synergistic, or antagonistic effects at the pharmacologic target — not changes in drug levels. Example: opioids + benzodiazepines = synergistic CNS/respiratory depression."
      },
      {
        "q": "A patient taking lisinopril for hypertension is started on spironolactone for heart failure. Both drugs independently raise potassium. What type of drug interaction is this?",
        "opts": [
          "This is a pharmacodynamic interaction because both drugs independently reduce aldosterone-mediated potassium excretion",
          "This is a pharmaceutical incompatibility because the two drugs cannot be mixed in solution together",
          "This is a pharmacokinetic interaction because both drugs affect renal tubular potassium transport",
          "This is a displacement interaction because spironolactone displaces lisinopril from plasma protein binding sites"
        ],
        "correct": 0,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Both drugs reduce potassium excretion through different mechanisms (ACE-I reduces aldosterone production; spironolactone blocks the aldosterone receptor). The result is additive potassium retention — a pharmacodynamic interaction affecting the same physiologic endpoint."
      },
      {
        "q": "A post-surgical patient receives both ketorolac (NSAID) and enoxaparin (LMWH). The nurse is concerned about increased bleeding risk. Which interaction type best describes this concern?",
        "opts": [
          "Pharmacokinetic — ketorolac inhibits the hepatic metabolism of enoxaparin significantly",
          "Pharmacodynamic — both drugs impair hemostasis through different mechanisms and the bleeding risk is additive",
          "Pharmaceutical — the two drugs are chemically incompatible when administered at the same injection site",
          "Absorptive — ketorolac alters GI absorption of enoxaparin when given at overlapping time intervals"
        ],
        "correct": 1,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Ketorolac inhibits platelet aggregation via COX-1 inhibition. Enoxaparin inhibits Factor Xa. Both impair hemostasis through independent mechanisms — the combined effect on bleeding risk is additive (pharmacodynamic interaction), not related to changes in drug levels."
      },
      {
        "q": "CrCl (creatinine clearance) is used in nursing practice primarily to:",
        "opts": [
          "Assess hepatic drug metabolism capacity and determine liver dosing adjustments",
          "Determine whether a drug can safely be given via the oral administration route",
          "Adjust doses of renally cleared drugs to prevent accumulation and potential toxicity",
          "Predict whether a drug will cause gastrointestinal side effects in a particular patient"
        ],
        "correct": 2,
        "cat": "Special Populations",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "CrCl estimates the kidney's ability to filter drugs. Drugs primarily eliminated renally accumulate when CrCl is low — doses must be reduced or intervals extended. Examples: metformin, gabapentin, enoxaparin, atenolol."
      },
      {
        "q": "A 78-year-old patient has a serum creatinine of 1.1 mg/dL but a CrCl of only 42 mL/min (calculated by Cockcroft-Gault). Why might the serum creatinine alone be misleading in this patient?",
        "opts": [
          "The Cockcroft-Gault formula overestimates renal impairment in patients older than seventy-five years",
          "Elderly patients have increased hepatic creatinine production that falsely elevates the serum creatinine level",
          "Serum creatinine is only accurate in patients under age 65 due to changes in renal tubular secretion",
          "Elderly patients produce less creatinine due to decreased muscle mass, so serum creatinine underestimates renal impairment"
        ],
        "correct": 3,
        "cat": "Special Populations",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Older adults have decreased muscle mass → less creatinine production → serum creatinine may appear normal even with significantly reduced GFR. CrCl (Cockcroft-Gault) or eGFR accounts for age, weight, and sex, providing a more accurate picture of renal function for drug dosing."
      },
      {
        "q": "Gabapentin is prescribed for neuropathic pain. The patient's CrCl is 22 mL/min. The standard dose is 300 mg TID. What adjustment is required?",
        "opts": [
          "The dose must be significantly reduced and interval extended because gabapentin is entirely renally cleared",
          "No adjustment is needed because gabapentin is primarily metabolized by the liver before excretion",
          "The dose should be doubled to overcome the reduced renal elimination and maintain therapeutic levels",
          "Switch to a hepatically cleared alternative because gabapentin is contraindicated below CrCl of thirty"
        ],
        "correct": 0,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Gabapentin is 100% renally eliminated unchanged. At CrCl <30 mL/min, standard TID dosing causes significant accumulation — sedation, ataxia, and respiratory depression can occur. Typical adjustment: 300 mg once daily or every other day at CrCl 15-29 mL/min."
      },
      {
        "q": "A drug antagonist is best described as:",
        "opts": [
          "A drug that produces a partial response when it binds to and activates a receptor",
          "A drug that binds a receptor and produces no intrinsic effect but blocks agonist binding",
          "A drug that binds a receptor and produces the maximum possible physiologic response",
          "A drug that increases the number and sensitivity of receptors on the cell surface"
        ],
        "correct": 1,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "An antagonist occupies the receptor without activating it, preventing the agonist from binding. Example: naloxone is a pure opioid antagonist — it blocks mu receptors without producing analgesia, reversing opioid effects."
      },
      {
        "q": "A patient in the emergency department received naloxone for opioid overdose. Within 2 minutes, the patient is alert and in severe pain. This response demonstrates which pharmacologic principle?",
        "opts": [
          "Naloxone is a partial agonist that replaces the opioid at the mu receptor with a weaker signal",
          "Naloxone blocks kappa receptors selectively while leaving mu receptor binding completely unchanged",
          "Naloxone is a pure antagonist that displaces the opioid from mu receptors without producing any analgesia",
          "Naloxone is a full agonist that overstimulates mu receptors, causing a paradoxical pain response"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Naloxone has high affinity for mu receptors but zero intrinsic activity — it displaces opioids without providing any analgesic effect. The sudden reversal of analgesia explains why patients wake up in acute pain. This also reverses respiratory depression, the primary therapeutic goal."
      },
      {
        "q": "Flumazenil is administered to reverse midazolam sedation. The patient re-sedates 45 minutes later. What explains this clinical scenario?",
        "opts": [
          "Flumazenil causes paradoxical sedation when the initial reversal effect wears off after forty-five minutes",
          "Flumazenil is a GABA agonist whose sedative effects emerge after the initial stimulant phase passes",
          "Midazolam has active metabolites that are resistant to antagonism by flumazenil in all clinical situations",
          "Flumazenil is a competitive antagonist with a shorter half-life than midazolam, so the benzodiazepine re-occupies receptors"
        ],
        "correct": 3,
        "cat": "Mechanism",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Flumazenil (t½ ~1 hr) has a shorter duration than midazolam (t½ ~3 hrs). As flumazenil is cleared, midazolam molecules re-occupy GABA-A receptors and sedation returns. Patients must be monitored for re-sedation, and repeat doses of flumazenil may be needed."
      },
      {
        "q": "Which route of administration has 100% bioavailability by definition?",
        "opts": [
          "Intravenous administration delivers drug directly into the bloodstream with complete bioavailability",
          "Intramuscular injection delivers drug into well-perfused muscle tissue for rapid systemic absorption",
          "Sublingual administration bypasses the GI tract and provides near-complete drug absorption",
          "Transdermal patches provide sustained absorption through the skin with predictable blood levels"
        ],
        "correct": 0,
        "cat": "Classification",
        "nclex": "PI-PharmaParenteral",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "IV administration delivers drug directly into systemic circulation, bypassing all absorption barriers — bioavailability is always 100%. All other routes have variable bioavailability due to absorption barriers or first-pass effects."
      },
      {
        "q": "A pharmacist calculates that a drug has 45% oral bioavailability. What does this mean clinically for dose conversion from IV to oral?",
        "opts": [
          "The oral dose should be approximately 45% lower than the IV dose to avoid toxicity",
          "The oral dose must be more than double the IV dose to achieve equivalent systemic drug exposure",
          "The oral and IV doses should be identical because bioavailability does not affect dosing decisions",
          "The oral dose should be 45% of the IV dose to maintain the same plasma concentration levels"
        ],
        "correct": 1,
        "cat": "Classification",
        "nclex": "PI-PharmaParenteral",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "If only 45% of an oral dose reaches systemic circulation, the oral dose must be roughly 2.2 times the IV dose to match the same drug exposure. For example, if IV dose is 100 mg, oral dose would need to be approximately 222 mg (100/0.45)."
      },
      {
        "q": "A nurse is converting a patient from IV vancomycin to oral vancomycin for a C. difficile infection. The physician states oral vancomycin is preferred. Why is bioavailability actually advantageous here?",
        "opts": [
          "Oral vancomycin has high bioavailability, delivering more drug to the bloodstream than the IV form",
          "Oral vancomycin is absorbed systemically and then secreted back into the gut lumen at higher concentrations",
          "Oral vancomycin has negligible systemic absorption, keeping high concentrations in the GI lumen where C. difficile resides",
          "Oral and IV vancomycin have equivalent bioavailability, so either route treats C. difficile equally well"
        ],
        "correct": 2,
        "cat": "Classification",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Oral vancomycin is poorly absorbed (<5% bioavailability) — this is actually the goal for C. difficile treatment. The drug stays in the GI tract at high concentrations where the infection lives. IV vancomycin does not achieve adequate gut luminal concentrations for C. difficile."
      },
      {
        "q": "Before administering any medication, the nurse's first step should be:",
        "opts": [
          "Administer the medication first then check the chart to confirm the order is correct",
          "Prepare the medication at the medication dispensing station for the scheduled dose",
          "Ask the patient whether they want to receive the medication at this scheduled time",
          "Verify the medication against the patient's MAR and check for documented allergies"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "SECE-SIC",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "The MAR reconciliation and allergy check is the first step — confirm the Right Patient, Right Drug, Right Dose, Right Route, Right Time, and absence of contraindications before any preparation begins."
      },
      {
        "q": "A nurse pulls metoprolol from the Pyxis for a patient. Before administering, the nurse notes the patient's heart rate is 52 bpm. What is the most appropriate next action?",
        "opts": [
          "Hold the medication and notify the provider because the heart rate is below the safe threshold",
          "Give half the dose to provide partial therapeutic benefit without worsening bradycardia significantly",
          "Administer the dose because the MAR shows it is currently due for administration",
          "Document that the drug was given and recheck the heart rate in two hours after administration"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Pre-administration assessment is a critical step. Metoprolol is a beta-blocker — hold parameters typically require holding the dose for HR <60 bpm. At HR 52, administering could worsen bradycardia. Hold the dose, notify the provider, and document the clinical reasoning."
      },
      {
        "q": "A new graduate nurse is about to give IV potassium chloride. The experienced nurse asks, 'What did you check first?' Which response indicates the best practice?",
        "opts": [
          "I verified the IV site is patent and selected an appropriate infusion pump for delivery",
          "I confirmed the order on the MAR, checked allergies, verified the dose and concentration, and confirmed the infusion rate",
          "I asked the patient if they have ever received potassium chloride intravenously before today",
          "I checked the expiration date on the potassium chloride bag before spiking it for infusion"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "For a high-alert medication like IV KCl, the first step is comprehensive MAR verification: right patient, right drug, right dose, right concentration, right route, right rate, and allergy check. KCl concentration and rate errors are potentially fatal — these checks come before any physical preparation."
      },
      {
        "q": "A drug is described as having a half-life of 4 hours. Approximately how long does it take to reach steady state with regular dosing?",
        "opts": [
          "4 hours after the very first dose is administered to the patient",
          "8 hours after two consecutive doses have been given at regular intervals",
          "16 hours, which represents 4 half-lives of consistent dosing at regular intervals",
          "96 hours, which represents a full day of continuous intravenous drug infusion"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Steady state is reached after approximately 4-5 half-lives of consistent dosing. For a drug with a 4-hour half-life: 4 × 4 = 16 hours. This is when drug input and elimination are in balance."
      },
      {
        "q": "Amiodarone has a half-life of 40-55 days. A nurse asks when the drug will reach steady state with daily dosing. What is the correct answer?",
        "opts": [
          "Steady state is never achieved with amiodarone due to its extensive tissue accumulation properties",
          "Within the first week of therapy because loading doses accelerate equilibrium substantially",
          "Within 24-48 hours because cardiac drugs reach steady state faster than other drug classes",
          "Approximately 160-220 days (4-5 half-lives) without a loading dose strategy in place"
        ],
        "correct": 3,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Steady state requires 4-5 half-lives regardless of the drug. For amiodarone (t½ 40-55 days), that is 160-275 days — approximately 6-9 months. This is why loading doses are used: they rapidly achieve therapeutic levels while waiting for the slow accumulation to reach equilibrium."
      },
      {
        "q": "A patient has been taking a medication with a 12-hour half-life every 12 hours for 3 days. The provider asks if the drug has reached steady state. What is the nurse's best response?",
        "opts": [
          "Yes — after approximately 48-60 hours (4-5 half-lives at 12 hours each), the drug has reached steady state",
          "No — it takes at least 7 days for any drug to reach steady state regardless of the half-life value",
          "Yes — the drug reached steady state after the second dose was administered at 24 hours",
          "No — steady state requires at least 10 half-lives, meaning this drug needs 120 hours of regular dosing"
        ],
        "correct": 0,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Steady state = 4-5 half-lives. A 12-hour half-life × 4-5 = 48-60 hours (2-2.5 days). After 3 days (72 hours) of regular dosing, the drug has reached steady state. Drug input and elimination are now balanced at each dosing interval."
      },
      {
        "q": "A patient refuses their scheduled medication. What is the correct nursing action?",
        "opts": [
          "Crush the medication and mix it in food without informing the patient of its presence",
          "Document the refusal in the chart and notify the prescribing provider of the patient's decision",
          "Administer the medication anyway because patient safety always overrides patient preferences",
          "Simply skip the dose without documenting or notifying anyone about the patient's refusal"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "SECE-MC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Patients have the right to refuse medications (autonomy). The nurse must document the refusal, notify the prescriber, educate the patient about consequences, and continue to monitor — never covertly administer medication."
      },
      {
        "q": "A patient with schizophrenia refuses their antipsychotic medication. The patient is currently calm and oriented. What is the nurse's priority action?",
        "opts": [
          "Administer the medication intramuscularly since the patient has a psychiatric diagnosis requiring treatment",
          "Obtain a court order immediately to administer the medication against the patient's stated wishes",
          "Explore the reason for refusal, educate about consequences, document the refusal, and notify the provider",
          "Wait until the patient falls asleep and administer the medication to avoid a confrontational situation"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "SECE-MC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "A competent, calm patient has the right to refuse any medication — psychiatric diagnosis does not negate this right. The nurse should explore the reason (side effects, beliefs), educate about consequences, document, and notify the provider. Involuntary administration requires imminent danger criteria and legal authorization."
      },
      {
        "q": "A patient refuses a scheduled anticoagulant after a hip replacement. The nurse is concerned about DVT risk. After educating the patient, what must the nurse document?",
        "opts": [
          "Document only that the dose was held due to a nursing assessment finding warranting omission",
          "Document that the patient was noncompliant and that no further education will be attempted today",
          "Document only the refusal and move on to the next patient's scheduled medications immediately",
          "Document the patient's refusal, the education provided about DVT risk, provider notification, and ongoing monitoring plan"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "SECE-MC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Complete documentation protects both the patient and the nurse. Record: the refusal, education provided (DVT/PE risk), patient's stated reason if given, provider notification and response, and the plan for continued monitoring. Avoid judgmental language like 'noncompliant.'"
      },
      {
        "q": "Which statement best describes the difference between a drug's generic name and brand name?",
        "opts": [
          "The generic name is the active ingredient name while brand names are proprietary manufacturer trademarks",
          "Generic and brand drugs are always bioequivalent in every measurable pharmacologic parameter",
          "Brand name drugs are always safer than generics because they undergo more extensive clinical testing",
          "Generic names can only be used after the original patent protection has fully expired"
        ],
        "correct": 0,
        "cat": "Classification",
        "nclex": "SECE-SIC",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Generic name = nonproprietary chemical name (e.g., metoprolol). Brand name = manufacturer's proprietary name (e.g., Toprol XL). Multiple brands can share one generic. Generic equivalents must meet FDA bioequivalence standards."
      },
      {
        "q": "A patient says, 'My doctor prescribed Lipitor but the pharmacy gave me atorvastatin. Is this a different drug?' What is the best nursing response?",
        "opts": [
          "They are different medications and you should contact your physician to clarify the prescription order",
          "Atorvastatin is the generic name for Lipitor — they contain the same active ingredient and meet FDA equivalency standards",
          "The pharmacy may have made a dispensing error and you should return the medication for verification",
          "Atorvastatin is a newer, improved version of Lipitor with better efficacy and fewer side effects overall"
        ],
        "correct": 1,
        "cat": "Classification",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Atorvastatin is the generic (nonproprietary) name; Lipitor is the brand name. FDA requires generic equivalents to demonstrate bioequivalence. Educating patients about generic vs. brand prevents unnecessary confusion and medication non-adherence."
      },
      {
        "q": "A nursing student notices that metoprolol tartrate and metoprolol succinate have different dosing schedules despite sharing the same generic name. What explains this difference?",
        "opts": [
          "They are entirely different drugs with different mechanisms of action at the beta receptor level",
          "Metoprolol succinate is a newer generation beta-blocker with improved receptor selectivity over tartrate",
          "They contain the same active drug but different salt forms affect release kinetics — tartrate is immediate-release and succinate is extended-release",
          "The dosing difference is manufacturer preference and either form can be dosed interchangeably in practice"
        ],
        "correct": 2,
        "cat": "Classification",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Metoprolol tartrate (Lopressor) is immediate-release, dosed BID-TID. Metoprolol succinate (Toprol XL) is extended-release, dosed once daily. Same active drug, different formulations. Never crush or split the succinate (XL) form — dose dumping can cause severe hypotension and bradycardia."
      },
      {
        "q": "A drug order reads: 'morphine 0.1 mg/kg IV q4h PRN pain.' The patient weighs 70 kg. What is the correct dose?",
        "opts": [
          "0.1 mg is the correct dose regardless of the patient's weight in this clinical situation",
          "70 mg is calculated by multiplying the weight by one milligram per kilogram dose conversion",
          "0.7 mg is calculated by multiplying 0.1 mg by a weight conversion factor of seven",
          "7 mg is calculated correctly as 0.1 mg/kg multiplied by the patient's weight of 70 kilograms"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Weight-based dose calculation: 0.1 mg/kg × 70 kg = 7 mg. Always confirm the calculated dose is within the standard dose range before administration."
      },
      {
        "q": "Enoxaparin 1 mg/kg subcutaneous q12h is ordered for DVT treatment. The patient weighs 92 kg. What dose should the nurse administer?",
        "opts": [
          "92 mg because the weight-based calculation is 1 mg/kg times 92 kg for treatment dosing",
          "1 mg because the order specifies 1 mg per kilogram and only the per-kilogram amount is given",
          "46 mg because the treatment dose is divided by two for each individual injection given subcutaneously",
          "100 mg because enoxaparin is capped at 100 mg per dose for all patients regardless of weight"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Weight-based calculation: 1 mg/kg × 92 kg = 92 mg SubQ q12h. There is no standard cap at 100 mg for treatment doses (though some institutions may have policies for morbid obesity). Always verify the calculated dose falls within expected therapeutic ranges."
      },
      {
        "q": "A pediatric patient weighing 22 kg is ordered amoxicillin 25 mg/kg/day divided into 3 doses. What is each individual dose?",
        "opts": [
          "550 mg per dose because the total daily dose is divided equally between three administration times",
          "183 mg per dose calculated as 25 mg/kg times 22 kg divided by 3 equal doses throughout the day",
          "25 mg per dose because the mg/kg value represents the individual dose for each administration",
          "75 mg per dose because the daily dose of 25 mg is multiplied by 3 doses given throughout the day"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Total daily dose: 25 mg/kg × 22 kg = 550 mg/day. Divided into 3 doses: 550/3 ≈ 183 mg per dose. Pediatric dosing is weight-based and requires careful calculation. Always verify against maximum adult doses and institutional references."
      },
      {
        "q": "Which best describes a pharmacokinetic drug interaction?",
        "opts": [
          "Two drugs cause additive blood pressure lowering through different vascular mechanisms",
          "Two drugs compete for binding at the same receptor site on the target cell surface",
          "One drug reduces the renal clearance of another drug, raising its blood level significantly",
          "One drug acts as a physiologic antagonist and reverses the clinical effect of another drug"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Comprehension",
        "rationale": "Pharmacokinetic interactions affect ADME — absorption, distribution, metabolism, or excretion — changing the blood level of a drug. Example: probenecid reduces renal excretion of penicillin, raising penicillin levels."
      },
      {
        "q": "A patient on warfarin begins taking cholestyramine for hyperlipidemia. The next INR drops below therapeutic range. What type of interaction occurred?",
        "opts": [
          "Pharmacodynamic — cholestyramine antagonizes warfarin at the vitamin K receptor in the liver",
          "Idiosyncratic — this unpredictable reaction is unrelated to either drug's known mechanism of action",
          "Pharmaceutical — the two drugs are chemically incompatible when present in the stomach together",
          "Pharmacokinetic — cholestyramine binds warfarin in the GI tract, reducing its absorption significantly"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Cholestyramine is a bile acid sequestrant that binds many drugs in the GI lumen, preventing their absorption. This is a pharmacokinetic interaction at the absorption phase. Warfarin levels drop → INR falls below therapeutic. Solution: separate administration by 4-6 hours."
      },
      {
        "q": "Grapefruit juice is known to increase the blood levels of many medications. Which pharmacokinetic mechanism is responsible for this interaction?",
        "opts": [
          "Grapefruit juice inhibits intestinal CYP3A4 enzymes, reducing presystemic metabolism and increasing drug absorption",
          "Grapefruit juice increases renal tubular reabsorption of drugs by altering urine pH substantially",
          "Grapefruit juice acts as a competitive antagonist at hepatic drug receptors, slowing elimination rates",
          "Grapefruit juice increases gastric acid secretion, which enhances the dissolution of oral tablet formulations"
        ],
        "correct": 0,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Grapefruit juice contains furanocoumarins that irreversibly inhibit CYP3A4 in the intestinal wall. Drugs normally metabolized during first-pass through the gut wall (statins, calcium channel blockers, some immunosuppressants) enter the blood at higher-than-expected levels, increasing toxicity risk."
      }
    ],
    "bridge_check": [
      {
        "q": "You know that renal clearance matters for drug dosing. Which combination of drugs from later modules will BOTH require dose reduction in CKD?",
        "opts": [
          "Metformin and enoxaparin are both renally cleared and require dose reduction when CrCl is reduced",
          "Warfarin and diltiazem are both hepatically metabolized and unaffected by kidney function changes",
          "Atorvastatin and amiodarone are both hepatically metabolized and do not require renal dose adjustment",
          "Morphine and atorvastatin are primarily cleared by the liver and do not accumulate in renal failure"
        ],
        "correct": 0,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Metformin is renally cleared and carries a BBW for lactic acidosis in renal impairment. Enoxaparin (LMWH) accumulates in CKD, increasing bleeding risk. Both require dose reduction or avoidance when CrCl is low."
      },
      {
        "q": "A patient with CKD Stage 4 (CrCl 18 mL/min) is prescribed gabapentin and metformin. What is the common pharmacokinetic concern for both drugs?",
        "opts": [
          "Both drugs are hepatically metabolized and require liver function monitoring in CKD patients",
          "Both drugs are entirely renally eliminated and will accumulate to dangerous levels without significant dose reduction",
          "Both drugs are protein-bound and CKD alters albumin levels, increasing the free fraction of each drug",
          "Both drugs require therapeutic drug monitoring via serum trough levels to guide dosing in CKD patients"
        ],
        "correct": 1,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Gabapentin is 100% renally excreted unchanged. Metformin is renally cleared and carries a BBW for lactic acidosis when CrCl is low. Both will accumulate dangerously in CKD Stage 4 — gabapentin requires major dose reduction and metformin is generally contraindicated at CrCl <30."
      },
      {
        "q": "A nurse reviews the medication list of a patient admitted with acute kidney injury: vancomycin, enoxaparin, and lisinopril. Which foundational pharmacokinetic principle requires the nurse to flag all three drugs?",
        "opts": [
          "All three drugs have narrow therapeutic indices that are unrelated to renal function but require monitoring",
          "All three drugs undergo hepatic first-pass metabolism that is enhanced during acute kidney injury states",
          "All three drugs are renally cleared or renally affected — accumulation risk increases significantly as kidney function declines",
          "All three drugs compete for the same renal transporter, creating a triple pharmacokinetic interaction at the tubular level"
        ],
        "correct": 2,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Vancomycin is renally cleared and nephrotoxic. Enoxaparin accumulates in renal failure, increasing bleeding. Lisinopril further reduces GFR in AKI. All three require reassessment — the M0 principle of renal clearance connects to drugs across multiple modules."
      },
      {
        "q": "First-pass metabolism is why oral morphine requires a much higher dose than IV morphine to achieve the same effect. Which other drug from the cardiovascular module shares this property of extensive hepatic first-pass metabolism?",
        "opts": [
          "Lisinopril is not significantly hepatically metabolized and is excreted largely unchanged by the kidneys",
          "Apixaban has moderate hepatic metabolism but does not exhibit significant first-pass extraction differences",
          "Furosemide is primarily renally eliminated and does not undergo clinically significant first-pass hepatic metabolism",
          "Propranolol has extensive hepatic first-pass extraction resulting in only 25-40% oral bioavailability"
        ],
        "correct": 3,
        "cat": "Bridge",
        "nclex": "PI-PharmaParenteral",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Propranolol has 25-40% oral bioavailability due to extensive hepatic first-pass extraction. Lisinopril is not significantly metabolized (excreted unchanged). This is why propranolol oral doses are much larger than IV doses."
      },
      {
        "q": "A nursing student asks why sublingual nitroglycerin works within minutes while oral nitrates require much higher doses. Which M0 pharmacokinetic principle explains this clinical difference?",
        "opts": [
          "Sublingual administration bypasses hepatic first-pass metabolism, delivering nearly all the drug to systemic circulation",
          "Sublingual nitroglycerin has a different chemical structure that makes it more potent at vascular receptors",
          "Oral nitrates are destroyed by gastric acid before they can be absorbed from the intestinal lumen",
          "Sublingual administration delivers drug directly to coronary arteries through the sublingual vasculature"
        ],
        "correct": 0,
        "cat": "Bridge",
        "nclex": "PI-PharmaParenteral",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Nitroglycerin has nearly 0% oral bioavailability due to extensive first-pass metabolism. Sublingual absorption delivers drug directly into the systemic venous circulation via the sublingual veins, bypassing the portal system and liver. This M0 first-pass concept explains the route-dependent dosing across cardiovascular drugs."
      },
      {
        "q": "A patient is switched from IV metoprolol 5 mg to oral metoprolol tartrate 50 mg. A student notes the oral dose is 10 times higher. Which concept from M0 Foundations explains this ratio?",
        "opts": [
          "Oral medications must be dosed higher because gastric acid degrades a significant portion of the drug",
          "Metoprolol undergoes significant hepatic first-pass metabolism, so a much higher oral dose is needed for equivalent effect",
          "The oral formulation contains inactive binders that reduce the effective amount of drug available for absorption",
          "IV metoprolol is more potent at the receptor level because the drug reaches receptors in a more concentrated form"
        ],
        "correct": 1,
        "cat": "Bridge",
        "nclex": "PI-PharmaParenteral",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Metoprolol has approximately 50% oral bioavailability due to first-pass metabolism. The IV-to-oral conversion ratio (~1:10 for tartrate) accounts for this loss. This is a direct application of the M0 first-pass metabolism concept to cardiovascular drug dosing."
      },
      {
        "q": "A drug with a narrow therapeutic index requires more frequent monitoring. Which drug from the M4 Neuro/Psych module is the clearest example of this principle?",
        "opts": [
          "Sertraline has a wide therapeutic margin and does not require routine serum level monitoring in practice",
          "Naloxone is an opioid antagonist used for acute reversal and is not dosed for chronic therapeutic levels",
          "Lithium has one of the narrowest therapeutic indices in practice, requiring frequent serum level monitoring",
          "Diazepam has a relatively wide therapeutic range compared to other drugs requiring level-based dosing adjustments"
        ],
        "correct": 2,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Lithium has one of the narrowest therapeutic indices in clinical practice (0.6-1.2 mEq/L). Small increases cause toxicity. It is entirely renally cleared — dehydration, low sodium diet, or renal impairment can push levels to toxic range quickly."
      },
      {
        "q": "Digoxin, warfarin, and phenytoin all require therapeutic drug monitoring. What shared M0 concept makes monitoring essential for all three drugs?",
        "opts": [
          "All three drugs are primarily renally eliminated and accumulate when kidney function declines significantly",
          "All three drugs are CYP3A4 substrates and share the same metabolic pathway for hepatic clearance",
          "All three drugs demonstrate first-order elimination kinetics that make blood levels highly unpredictable",
          "All three drugs have narrow therapeutic indices where small changes in blood levels can cause toxicity or treatment failure"
        ],
        "correct": 3,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "The narrow therapeutic index is the unifying concept. Digoxin (0.5-2.0 ng/mL), warfarin (INR 2-3), and phenytoin (10-20 mcg/mL) all have small margins between efficacy and toxicity. This M0 principle drives monitoring requirements across every module."
      },
      {
        "q": "An M0 Foundations concept states that drugs reaching steady state takes 4-5 half-lives. Why is this particularly dangerous for amiodarone when starting therapy?",
        "opts": [
          "Amiodarone has a 40-55 day half-life, meaning toxic steady-state levels may not manifest for months after therapy begins",
          "Amiodarone does not follow standard pharmacokinetic principles and reaches steady state unpredictably",
          "Amiodarone reaches steady state in 24 hours but its effects are delayed due to slow tissue penetration",
          "Amiodarone has a 2-hour half-life so steady state is reached before monitoring can be initiated"
        ],
        "correct": 0,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Amiodarone's half-life of 40-55 days means steady state without loading doses would take 160-275 days. Drug continues to accumulate in tissues (lung, liver, thyroid) for months. Toxicities (pulmonary fibrosis, thyroid dysfunction, hepatotoxicity) may not appear until tissue saturation occurs well into therapy."
      },
      {
        "q": "You learned that IV drugs have 100% bioavailability. For which clinical situation does the IV route have an additional pharmacokinetic advantage over oral furosemide?",
        "opts": [
          "IV furosemide has no clinical advantage over oral furosemide in heart failure management situations",
          "In acute pulmonary edema, IV furosemide begins working in 5 minutes versus 30-60 minutes for oral administration",
          "IV furosemide has lower ototoxicity risk than oral furosemide due to more gradual cochlear drug exposure",
          "IV furosemide is always stronger because it bypasses the kidney's filtration and acts on tubules directly"
        ],
        "correct": 1,
        "cat": "Bridge",
        "nclex": "PI-PharmaParenteral",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "IV furosemide acts within 5 minutes (vs 30-60 min oral) and produces immediate venodilation that reduces preload before diuresis even begins. In acute pulmonary edema, this speed difference is clinically critical."
      },
      {
        "q": "A patient with severe nausea and vomiting needs an antiemetic. The oral route is not viable. How does the M0 bioavailability principle guide route selection in this scenario?",
        "opts": [
          "Oral bioavailability is not affected by vomiting because absorption occurs in the small intestine",
          "Rectal administration should be used because it provides higher bioavailability than any parenteral route",
          "IV or IM routes guarantee drug delivery because they bypass the GI tract entirely, ensuring 100% or near-complete bioavailability",
          "Sublingual administration is ineffective during vomiting because salivation reduces drug contact time with mucosa"
        ],
        "correct": 2,
        "cat": "Bridge",
        "nclex": "PI-PharmaParenteral",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Vomiting prevents reliable oral absorption. IV provides 100% bioavailability; IM provides near-complete absorption from muscle tissue. This M0 concept (route affects bioavailability) drives clinical route selection when the oral route is compromised."
      },
      {
        "q": "A patient in cardiogenic shock has poor peripheral perfusion. Why might subcutaneous heparin be unreliable in this patient, and what does the M0 bioavailability concept suggest?",
        "opts": [
          "Subcutaneous heparin is always reliable regardless of perfusion status because it bypasses first-pass metabolism",
          "Subcutaneous heparin is contraindicated in shock because it causes local tissue necrosis at the injection site",
          "Cardiogenic shock increases subcutaneous absorption due to sympathetic vasoconstriction concentrating the drug locally",
          "Poor perfusion reduces subcutaneous absorption, making drug delivery unpredictable — IV heparin ensures 100% bioavailability"
        ],
        "correct": 3,
        "cat": "Bridge",
        "nclex": "PI-PharmaParenteral",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Subcutaneous absorption depends on local blood flow. In shock, peripheral vasoconstriction dramatically reduces perfusion to subcutaneous tissue — drug absorption becomes unreliable. IV administration bypasses this entirely with 100% bioavailability and predictable drug levels."
      },
      {
        "q": "A pharmacodynamic interaction is occurring when a patient takes an opioid and a benzodiazepine together. What is the result and which module will this appear in?",
        "opts": [
          "Both drugs independently cause CNS and respiratory depression — the combined synergistic effect carries a Black Box Warning in M4",
          "The benzodiazepine reduces opioid absorption through a pharmacokinetic interaction covered in the M4 module",
          "The opioid blocks benzodiazepine metabolism through CYP inhibition — this interaction is covered in the M6 module",
          "No clinically significant interaction exists between opioid and benzodiazepine drug classes in practice"
        ],
        "correct": 0,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Opioids and benzodiazepines both depress CNS and respiratory drive through different mechanisms (mu receptor vs GABA-A receptor). Combined, the effect is synergistic — risk of fatal respiratory depression is dramatically higher. This combination carries an FDA Black Box Warning."
      },
      {
        "q": "A patient takes gabapentin for neuropathy and is prescribed an opioid for post-surgical pain. Both cause CNS depression. Applying M0 pharmacodynamic interaction principles, what risk must the nurse monitor?",
        "opts": [
          "The risk is pharmacokinetic — gabapentin inhibits opioid metabolism leading to drug accumulation",
          "The risk is pharmacodynamic — both drugs independently cause sedation and respiratory depression, creating additive CNS depression",
          "Gabapentin is a stimulant at higher doses and will counteract the opioid's sedative effects in this patient",
          "No interaction exists because gabapentin is not classified as a controlled substance by the DEA"
        ],
        "correct": 1,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Gabapentin causes CNS depression (sedation, dizziness) through calcium channel modulation. Opioids cause CNS/respiratory depression through mu receptor activation. Together, the CNS depressant effects are additive — enhanced sedation and respiratory depression risk. FDA has issued warnings about this combination."
      },
      {
        "q": "An elderly patient takes an anticholinergic bladder medication and is started on diphenhydramine for allergies. Using M0 interaction principles, what type of interaction is occurring?",
        "opts": [
          "This is a pharmacokinetic interaction because diphenhydramine inhibits the metabolism of the bladder medication",
          "No significant interaction occurs because the drugs target different organ systems and have different indications",
          "This is a pharmacodynamic interaction because both drugs block muscarinic receptors, causing additive anticholinergic toxicity",
          "This is a displacement interaction because diphenhydramine displaces the bladder drug from protein binding sites"
        ],
        "correct": 2,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Both drugs are anticholinergic — they block muscarinic receptors in different tissues but the systemic effects are additive: confusion, urinary retention, constipation, dry mouth, blurred vision, tachycardia. In elderly patients, this anticholinergic burden is particularly dangerous (falls, delirium). This is a classic pharmacodynamic interaction."
      }
    ]
  },
  "M1": {
    "rapid_fire": [
      {
        "q": "Lisinopril causes a dry cough in 10-15% of patients. What is the precise mechanism?",
        "opts": [
          "ACE also breaks down bradykinin — inhibition causes bradykinin to accumulate and irritate airways",
          "Angiotensin II accumulates in bronchial tissue and directly irritates airway nerve receptors",
          "Direct mast cell activation by the drug triggers histamine release in the bronchial mucosa",
          "Beta-1 receptor stimulation in bronchial tissue causes reflex bronchoconstriction and persistent cough"
        ],
        "correct": 0,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "ACE simultaneously converts angiotensin I to angiotensin II AND degrades bradykinin. ACE inhibition raises bradykinin levels in the respiratory tract, causing the characteristic dry, persistent cough. ARBs do not inhibit ACE and therefore do not cause cough."
      },
      {
        "q": "A patient develops a persistent dry cough on enalapril. The provider switches to losartan (an ARB). Why should the cough resolve?",
        "opts": [
          "Losartan directly suppresses the cough center in the medulla, eliminating the cough reflex pathway",
          "Losartan blocks the angiotensin II receptor without inhibiting ACE, so bradykinin does not accumulate in airways",
          "Losartan has intrinsic bronchodilator properties that counteract any cough-producing mechanism in the lungs",
          "Losartan is metabolized to an active metabolite that suppresses airway inflammation and reduces cough"
        ],
        "correct": 1,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "ARBs block the AT1 receptor downstream — they do not inhibit ACE enzyme activity. Because ACE continues to degrade bradykinin normally, there is no bradykinin accumulation. The cough resolves in most patients within 1-4 weeks of switching."
      },
      {
        "q": "A patient on ramipril reports that their cough started 3 weeks after beginning the medication. They want to know if the cough will go away on its own. What is the best nursing response?",
        "opts": [
          "The cough typically resolves within a few days as your body adjusts to the medication's effects",
          "The cough is unrelated to ramipril and is likely caused by a respiratory infection requiring antibiotics",
          "The cough is caused by bradykinin accumulation and usually persists as long as you take an ACE inhibitor",
          "The cough indicates an allergic reaction and you should stop the medication immediately today"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "ACE inhibitor cough is a class effect caused by bradykinin accumulation — it does not resolve with continued use. It typically starts within 1-6 weeks of initiation and resolves within 1-4 weeks of discontinuation. If cough is intolerable, switching to an ARB is the standard approach."
      },
      {
        "q": "A patient develops facial swelling and throat tightness 3 weeks after starting lisinopril. What is your FIRST action?",
        "opts": [
          "Switch to a higher dose to push through the initial adjustment period and ensure therapeutic effect",
          "Reduce the dose by half and observe the patient closely for improvement over the next hour",
          "Administer diphenhydramine 50 mg IV and continue the current ACE inhibitor therapy as prescribed",
          "Stop lisinopril immediately — this is angioedema, a potential airway emergency requiring immediate action"
        ],
        "correct": 3,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Angioedema from ACE inhibitors is life-threatening if the airway is involved. Stop the drug immediately, remain at bedside, notify provider, prepare for airway management."
      },
      {
        "q": "A patient with a documented history of ACE inhibitor-induced angioedema is being prescribed an antihypertensive. Which drug class carries a cross-reactivity risk?",
        "opts": [
          "ARBs carry a small but documented cross-reactivity risk for angioedema in patients with prior ACE inhibitor angioedema",
          "Thiazide diuretics carry an equivalent angioedema risk because they affect the same renin-angiotensin pathway",
          "Calcium channel blockers carry a moderate risk of angioedema in patients with prior ACE inhibitor reactions",
          "Beta-blockers carry a significant angioedema risk due to their effects on bradykinin degradation pathways"
        ],
        "correct": 0,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "ARBs have a small (1-5%) cross-reactivity risk for angioedema in patients with prior ACE-inhibitor angioedema. While the mechanism is primarily bradykinin-mediated (and ARBs don't affect bradykinin directly), some patients still develop angioedema on ARBs. Close monitoring during initiation is required."
      },
      {
        "q": "A patient on lisinopril presents to the ED with tongue swelling and difficulty swallowing. Epinephrine is administered but the swelling does not fully resolve. Why might standard anaphylaxis treatment be less effective?",
        "opts": [
          "Lisinopril blocks epinephrine receptors, preventing the expected vasoconstrictive and bronchodilatory response",
          "ACE inhibitor angioedema is bradykinin-mediated, not histamine-mediated — epinephrine and antihistamines have limited efficacy",
          "The angioedema has progressed beyond the point where any pharmacologic intervention can reverse the swelling",
          "ACE inhibitor angioedema only responds to fresh frozen plasma, which replaces the depleted angiotensin converting enzyme"
        ],
        "correct": 1,
        "cat": "Black Box Warning",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Analysis",
        "rationale": "ACE inhibitor angioedema is mediated by bradykinin and substance P — not by histamine or IgE. Standard anaphylaxis treatment (epinephrine, antihistamines, steroids) targets histamine pathways and may be less effective. Icatibant (bradykinin B2 receptor antagonist) or C1 esterase inhibitor concentrate may be considered."
      },
      {
        "q": "Metoprolol succinate (Toprol XL) is listed in the heart failure medication orders for a newly admitted patient with acute decompensated heart failure. What do you do?",
        "opts": [
          "Administer as ordered — beta-blockers are evidence-based first-line therapy in all forms of heart failure",
          "Switch to carvedilol for better dual alpha and beta receptor coverage during the acute decompensation phase",
          "Question the order — beta-blockers are used in stable chronic HF but should be held in acute decompensation",
          "Double the dose for faster achievement of the target dose that provides maximum mortality reduction benefit"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Beta-blockers are indicated for stable chronic HFrEF to reduce mortality. In acute decompensated heart failure, the negative inotropy worsens the acute state. They should be held during decompensation, then restarted once stable."
      },
      {
        "q": "A patient with stable chronic HFrEF has been on carvedilol 6.25 mg BID for 2 weeks. The provider wants to increase the dose. What timing principle should guide beta-blocker titration in heart failure?",
        "opts": [
          "Double the dose every 3 days until the target dose is reached to minimize the overall titration period",
          "Increase the dose immediately because delays in reaching target dose worsen heart failure long-term outcomes",
          "Increase the dose only when the patient reports subjective improvement in exercise tolerance and energy levels",
          "Wait at least 2 weeks between dose increases to allow the heart to adapt to increased beta-blockade gradually"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Beta-blockers in HF must be started at the lowest dose and titrated slowly — increase no more than every 2 weeks. The failing heart is dependent on sympathetic stimulation; removing it too quickly can cause decompensation. 'Start low, go slow' is the cardinal rule."
      },
      {
        "q": "A heart failure patient on metoprolol succinate 100 mg daily is admitted with pneumonia and tachycardia (HR 112). Should the beta-blocker be continued?",
        "opts": [
          "Continue the current dose — abrupt discontinuation of beta-blockers can cause rebound tachycardia and ischemia",
          "Increase the dose to control the tachycardia because infection-related heart rate elevation is dangerous",
          "Discontinue immediately — tachycardia indicates the drug is not working effectively in this patient",
          "Switch to a calcium channel blocker because beta-blockers are contraindicated during any acute infection"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Abrupt beta-blocker discontinuation carries a BBW for rebound sympathetic activation — angina, MI, and arrhythmias can result. In acute illness, the dose may be temporarily reduced but should not be stopped. Treat the underlying cause (infection) while maintaining beta-blockade."
      },
      {
        "q": "A patient on warfarin for atrial fibrillation has their amiodarone increased. Their INR jumps from 2.4 to 4.8. Why?",
        "opts": [
          "Amiodarone raises vitamin K levels which paradoxically reduces clotting factor synthesis in the liver",
          "Amiodarone inhibits CYP2C9, slowing warfarin metabolism — warfarin accumulates and anticoagulant effect increases",
          "Amiodarone increases warfarin absorption from the GI tract by enhancing intestinal blood flow significantly",
          "No pharmacologic relationship exists — the INR rise is coincidental and unrelated to the dose change"
        ],
        "correct": 1,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Amiodarone is a potent inhibitor of CYP2C9. Less metabolism = warfarin accumulates = INR rises. Warfarin dose must be reduced by 30-50% and INR monitored more frequently."
      },
      {
        "q": "A patient stable on warfarin (INR 2.5) begins a 2-week course of fluconazole for a yeast infection. What should the nurse anticipate?",
        "opts": [
          "INR will decrease because fluconazole induces hepatic enzymes that accelerate warfarin clearance from the body",
          "No effect on warfarin levels because antifungals and anticoagulants do not share metabolic pathways",
          "INR will likely increase significantly because fluconazole inhibits CYP2C9 and CYP3A4, slowing warfarin metabolism",
          "Warfarin will reduce fluconazole effectiveness by competing for absorption in the gastrointestinal tract"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Fluconazole is a strong CYP2C9 and moderate CYP3A4 inhibitor. It dramatically slows warfarin metabolism — INR can rise significantly within days. The warfarin dose typically needs to be reduced during the antifungal course, with more frequent INR monitoring."
      },
      {
        "q": "A patient on warfarin starts taking large amounts of vitamin K-rich foods (kale, spinach, broccoli) as part of a new diet. Their INR drops from 2.8 to 1.4. What pharmacologic principle explains this change?",
        "opts": [
          "Vitamin K-rich foods increase hepatic blood flow, accelerating warfarin metabolism through enhanced CYP activity",
          "Dietary fiber in these vegetables binds warfarin in the gut, preventing absorption and reducing blood levels",
          "Green vegetables contain chlorophyll that chemically degrades warfarin in the stomach before absorption can occur",
          "Increased vitamin K intake provides more substrate for clotting factor synthesis, directly opposing warfarin's anticoagulant effect"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "HPM",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Warfarin inhibits vitamin K epoxide reductase, blocking the recycling of vitamin K needed for clotting factor synthesis. Increasing dietary vitamin K provides more substrate, overwhelming warfarin's inhibition. Patients should maintain consistent vitamin K intake — not avoid it, but keep it steady."
      },
      {
        "q": "Which anticoagulant is the ONLY appropriate oral choice for a patient with a mechanical mitral heart valve?",
        "opts": [
          "Warfarin is the only approved oral anticoagulant for mechanical heart valves based on current clinical evidence",
          "Rivaroxaban offers once-daily dosing convenience for long-term mechanical valve anticoagulation therapy",
          "Dabigatran was studied in the RE-ALIGN trial and showed promise for mechanical valve patients initially",
          "Apixaban provides reliable anticoagulation with less monitoring than traditional anticoagulant options"
        ],
        "correct": 0,
        "cat": "Indications",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Knowledge",
        "rationale": "The RE-ALIGN trial showed that dabigatran caused significantly more thromboembolic events and bleeding compared to warfarin in patients with mechanical valves. All DOACs are contraindicated. Warfarin (INR target 2.5-3.5 for mechanical mitral valve) is the only approved oral option."
      },
      {
        "q": "A patient with a mechanical aortic valve asks why they cannot switch from warfarin to apixaban, since their friend with AFib takes it. What is the best explanation?",
        "opts": [
          "Apixaban is less effective than warfarin for all cardiovascular indications requiring chronic anticoagulation",
          "Apixaban has not been tested in mechanical valve patients — clinical trials showed DOACs cause more clots and bleeding with mechanical valves",
          "Apixaban interacts with the titanium components of mechanical valves, reducing its anticoagulant effectiveness",
          "Apixaban costs significantly more than warfarin, which is the primary reason it is not used for valves"
        ],
        "correct": 1,
        "cat": "Indications",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "The RE-ALIGN trial with dabigatran in mechanical valve patients was stopped early due to increased thromboembolism and bleeding. No DOAC has been proven safe or effective in mechanical valves. The pathophysiology of valve thrombosis differs from AFib thrombosis — contact activation on the prosthetic surface requires warfarin's broader coagulation cascade inhibition."
      },
      {
        "q": "A patient with a bioprosthetic (tissue) aortic valve and atrial fibrillation asks if they can use a DOAC instead of warfarin. How does this differ from a mechanical valve?",
        "opts": [
          "Bioprosthetic valves never require any anticoagulation regardless of the patient's underlying cardiac rhythm",
          "Bioprosthetic valves require the same anticoagulation strategy as mechanical valves in all clinical situations",
          "DOACs may be appropriate for bioprosthetic valve patients with AFib after the initial postoperative period, unlike mechanical valves",
          "DOACs are contraindicated in all valve replacement patients whether the valve is mechanical or bioprosthetic"
        ],
        "correct": 2,
        "cat": "Indications",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Unlike mechanical valves, bioprosthetic valves may allow DOAC use for concurrent AFib after the initial 3-6 month postoperative period (during which warfarin is typically used). Recent trials suggest DOACs are non-inferior to warfarin in this specific population — a key distinction from the absolute mechanical valve contraindication."
      },
      {
        "q": "Apixaban is prescribed for AFib. The patient is 82 years old, weighs 52 kg, and has a serum creatinine of 1.6 mg/dL. Should the standard dose of 5 mg BID be adjusted?",
        "opts": [
          "No adjustment needed — DOACs never require dose adjustment regardless of patient characteristics",
          "Discontinue apixaban — a serum creatinine of 1.6 contraindicates all DOACs in every clinical scenario",
          "Increase to 10 mg BID in the elderly because age-related changes reduce apixaban absorption significantly",
          "Yes — reduce to 2.5 mg BID because two of three dose reduction criteria are met (age ≥80 and weight ≤60 kg)"
        ],
        "correct": 3,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Apixaban dose reduction: reduce to 2.5 mg BID if ≥2 of 3 criteria: age ≥80, weight ≤60 kg, SCr ≥1.5 mg/dL. This patient meets 2 of 3 (age 82 and weight 52 kg) — dose reduction is required."
      },
      {
        "q": "A 76-year-old patient weighing 88 kg with a serum creatinine of 1.8 mg/dL is on apixaban for AFib. Should the dose be reduced?",
        "opts": [
          "No — only one of three criteria is met (SCr ≥1.5); at least two must be present to trigger dose reduction",
          "No — apixaban dose reduction is only based on CrCl calculation, not on individual patient characteristic criteria",
          "Yes — any patient over age 75 requires automatic dose reduction of apixaban for bleeding prevention",
          "Yes — the elevated creatinine alone meets criteria for dose reduction in all patients on apixaban"
        ],
        "correct": 0,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Only 1 of 3 criteria is met (SCr 1.8 ≥1.5). Age 76 does not meet the ≥80 threshold. Weight 88 kg does not meet ≤60 kg. Two or more criteria must be present — standard dose 5 mg BID should be maintained. Inappropriate dose reduction increases stroke risk."
      },
      {
        "q": "An 85-year-old woman weighing 48 kg with a serum creatinine of 1.7 mg/dL is prescribed apixaban 5 mg BID. What should the nurse do?",
        "opts": [
          "Administer as prescribed because the dose is within the standard range for atrial fibrillation treatment",
          "Question the order — all three dose reduction criteria are met and the dose should be 2.5 mg BID to prevent bleeding",
          "Contact the pharmacy to confirm the dose is appropriate because only one reduction criterion is present",
          "Increase the dose because this patient's low body weight will result in subtherapeutic drug levels at standard dosing"
        ],
        "correct": 1,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "All 3 criteria are met: age 85 (≥80), weight 48 kg (≤60 kg), SCr 1.7 (≥1.5). This patient requires 2.5 mg BID. Administering 5 mg BID puts this patient at significantly elevated bleeding risk. The nurse should question the order and confirm with the provider."
      },
      {
        "q": "A patient takes nitroglycerin SL for angina. Their spouse mentions they also take sildenafil (Viagra) for erectile dysfunction. What is your priority?",
        "opts": [
          "The combination is safe if both medications are taken at the lowest available doses together",
          "Reduce the nitroglycerin dose by half and continue with careful blood pressure monitoring every hour",
          "This is an absolute contraindication — concurrent PDE-5 inhibitors and nitrates can cause profound fatal hypotension",
          "Monitor blood pressure closely and proceed cautiously with both medications as currently prescribed"
        ],
        "correct": 2,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Both nitrates and PDE-5 inhibitors enhance the cGMP vasodilation pathway. The resulting hypotension can be profound and fatal. This is an absolute contraindication — no dose adjustment makes it safe."
      },
      {
        "q": "A patient in the ED with chest pain is about to receive sublingual nitroglycerin. He states he took tadalafil (Cialis) yesterday. What is the critical concern?",
        "opts": [
          "Tadalafil has a short half-life so yesterday's dose has been completely eliminated from his system by now",
          "One dose of nitroglycerin is safe; the interaction only occurs with sustained nitrate infusion therapy",
          "The interaction only occurs with sildenafil, not with tadalafil or other PDE-5 inhibitor medications",
          "Tadalafil has a 17.5-hour half-life — the drug is still active, and nitrate administration could cause severe refractory hypotension"
        ],
        "correct": 3,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Tadalafil (Cialis) has a notably long half-life (~17.5 hours). Nitrates should be withheld for at least 48 hours after tadalafil use (vs 24 hours for sildenafil). The drug is still present and active — nitrate administration risks profound, refractory hypotension."
      },
      {
        "q": "A nurse calls the provider because a patient with stable angina also has a prescription for sildenafil from another physician. The provider says to continue both medications with monitoring. What is the nurse's responsibility?",
        "opts": [
          "Refuse to administer and escalate — this is an absolute contraindication, and the nurse has a duty to advocate for patient safety",
          "Follow the provider's order because the prescriber has ultimate authority over medication decisions",
          "Administer the nitroglycerin only and hold the sildenafil until the next scheduled dose is due",
          "Give both medications but keep the patient supine for 30 minutes to prevent orthostatic blood pressure drops"
        ],
        "correct": 0,
        "cat": "Contraindications",
        "nclex": "SECE-MC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Nitrate + PDE-5 inhibitor is an absolute contraindication — no clinical judgment or monitoring makes it safe. The nurse has a professional and legal obligation to refuse to administer and escalate through the chain of command. Following an unsafe order does not protect the nurse from liability."
      },
      {
        "q": "Atorvastatin 80 mg is prescribed for a patient who was just started on clarithromycin for a respiratory infection. What is your nursing concern?",
        "opts": [
          "No concern — these drug classes work on entirely different systems and do not interact pharmacologically",
          "Clarithromycin inhibits CYP3A4, raising atorvastatin levels — significantly increased risk of myopathy and rhabdomyolysis",
          "Atorvastatin reduces clarithromycin effectiveness by inducing hepatic enzymes that accelerate its metabolism",
          "The combination causes additive QT prolongation but has no effect on statin metabolism or muscle toxicity"
        ],
        "correct": 1,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Atorvastatin is metabolized by CYP3A4. Clarithromycin is a strong CYP3A4 inhibitor — it dramatically raises statin blood levels and increases myopathy and rhabdomyolysis risk."
      },
      {
        "q": "A patient on simvastatin is started on diltiazem for rate control in atrial fibrillation. What interaction must the nurse anticipate?",
        "opts": [
          "Diltiazem reduces simvastatin absorption by decreasing GI motility and delaying gastric emptying time",
          "The combination is contraindicated because both drugs cause QT prolongation through different cardiac mechanisms",
          "Diltiazem inhibits CYP3A4, increasing simvastatin levels — the simvastatin dose may need to be reduced or capped",
          "Simvastatin induces CYP3A4, reducing diltiazem effectiveness and requiring higher calcium channel blocker doses"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Diltiazem is a moderate CYP3A4 inhibitor. Simvastatin dose should not exceed 10 mg daily when combined with diltiazem per FDA labeling. Higher statin levels increase myopathy and rhabdomyolysis risk. This is one of the most common cardiology drug interactions."
      },
      {
        "q": "A patient reports new-onset muscle pain, dark urine, and weakness 2 weeks after starting atorvastatin with a concurrent macrolide antibiotic. What is the priority nursing action?",
        "opts": [
          "Switch to a different statin because the muscle pain indicates an allergy specific to atorvastatin only",
          "Reassure the patient that mild muscle aches are a common statin side effect that resolves spontaneously",
          "Recommend increased fluid intake and continue both medications until the antibiotic course is completed",
          "Hold the statin and notify the provider immediately — dark urine with muscle pain suggests rhabdomyolysis requiring urgent CK and renal function testing"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Dark urine + muscle pain + weakness = classic rhabdomyolysis presentation. CYP3A4 inhibition by macrolides raised atorvastatin levels → skeletal muscle breakdown → myoglobin release → dark urine (myoglobinuria). This can cause acute kidney injury. Hold the statin, check CK and BMP urgently, and hydrate aggressively."
      },
      {
        "q": "Amiodarone is stopped after 18 months due to pulmonary toxicity. How long must the patient be monitored for residual drug effects?",
        "opts": [
          "Months of monitoring is necessary — amiodarone's half-life is 40-55 days with tissue accumulation persisting long after discontinuation",
          "2 weeks of monitoring is adequate as the drug will have cleared after approximately 4 standard half-lives",
          "48 hours is sufficient because standard drug clearance occurs within two to three half-lives typically",
          "1 week is the standard monitoring period, consistent with most cardiac drugs following discontinuation of therapy"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Comprehension",
        "rationale": "Amiodarone has an extraordinarily long half-life (40-55 days) and accumulates in lipid-rich tissues. Drug effects and toxicity continue for months after stopping."
      },
      {
        "q": "A patient on amiodarone for 2 years reports new fatigue, weight gain, and cold intolerance. Which amiodarone toxicity does this presentation suggest?",
        "opts": [
          "Pulmonary toxicity presenting with systemic symptoms rather than the typical respiratory complaints",
          "Thyroid toxicity — amiodarone contains iodine and can cause both hypothyroidism and hyperthyroidism in patients",
          "Hepatotoxicity presenting with metabolic symptoms due to impaired hepatic synthetic function",
          "Corneal microdeposits causing visual strain that leads to fatigue and nonspecific systemic complaints"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Amiodarone is 37% iodine by weight. It can cause hypothyroidism (the presentation here: fatigue, weight gain, cold intolerance) or hyperthyroidism. Thyroid function tests (TSH, free T4) must be monitored every 6 months during therapy and for months after discontinuation."
      },
      {
        "q": "A patient on amiodarone has baseline pulmonary function tests (PFTs) ordered. Why is this important before starting long-term therapy?",
        "opts": [
          "PFTs predict whether amiodarone will be effective for the patient's specific type of cardiac arrhythmia",
          "Amiodarone is contraindicated if PFTs show any pre-existing abnormality regardless of the underlying cause",
          "Baseline PFTs allow detection of amiodarone-induced pulmonary toxicity by comparison with future test results over time",
          "PFTs determine the appropriate amiodarone dose based on the patient's lung capacity measurements"
        ],
        "correct": 2,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "Amiodarone pulmonary toxicity (pneumonitis, fibrosis) occurs in 2-17% of patients and can be fatal. Baseline PFTs and chest X-ray establish a reference point. Subsequent monitoring (PFTs, chest imaging) every 3-12 months allows early detection of decline before irreversible fibrosis develops."
      },
      {
        "q": "Which assessment is MOST critical before administering each dose of digoxin?",
        "opts": [
          "Temperature checked to rule out infection that could alter digoxin metabolism or distribution",
          "Blood pressure measured in both arms to detect any significant asymmetry between readings",
          "Respiratory rate monitored for one full minute to assess for any signs of pulmonary congestion",
          "Apical pulse counted for one full minute to detect bradycardia or irregular rhythm patterns"
        ],
        "correct": 3,
        "cat": "Monitoring",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Digoxin slows AV conduction — bradycardia is both an expected effect and a sign of toxicity. The apical pulse must be counted for a full minute before each dose. Hold if <60 bpm in adults."
      },
      {
        "q": "A nurse counts an apical pulse of 56 bpm before a scheduled digoxin dose. The patient is asymptomatic. What is the correct action?",
        "opts": [
          "Hold the dose and notify the provider — heart rate below 60 bpm requires holding digoxin per standard protocol",
          "Give half the dose to provide partial benefit while reducing the risk of further heart rate depression",
          "Administer the dose — 56 bpm is within the normal adult resting heart rate range for most patients",
          "Recheck the pulse in 15 minutes and administer the dose if the rate increases above 56 by that time"
        ],
        "correct": 0,
        "cat": "Monitoring",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Standard digoxin hold parameters: hold for apical HR <60 bpm in adults. Even though the patient is asymptomatic, 56 bpm is below threshold. Notify the provider, document the held dose and the rationale, and await further orders."
      },
      {
        "q": "A patient on digoxin has a potassium level of 3.2 mEq/L. The digoxin level is 1.8 ng/mL (within therapeutic range). Should the nurse be concerned?",
        "opts": [
          "No — the digoxin level is therapeutic, so toxicity is not a clinical concern at this time",
          "Yes — hypokalemia increases myocardial sensitivity to digoxin, and toxicity can occur even at therapeutic drug levels",
          "No — potassium does not affect digoxin pharmacodynamics and only influences the drug's renal clearance rate",
          "Yes — but only if the patient is also taking a beta-blocker, which further sensitizes cardiac tissue to digoxin"
        ],
        "correct": 1,
        "cat": "Monitoring",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Digoxin and potassium compete for binding at the Na/K-ATPase pump on cardiac myocytes. When potassium is low, more digoxin binds → enhanced effect → toxicity at normal drug levels. K+ must be maintained ≥3.5 mEq/L. This is why concurrent furosemide use is particularly dangerous."
      },
      {
        "q": "A patient on furosemide and digoxin has a potassium of 3.1 mEq/L and reports nausea and seeing yellow halos around lights. What is happening?",
        "opts": [
          "Normal expected effect of diuretic therapy — continue monitoring without any medication changes at this time",
          "Furosemide toxicity is occurring — stop furosemide only and continue digoxin therapy as currently ordered",
          "Digoxin toxicity precipitated by furosemide-induced hypokalemia — hold digoxin, replace potassium, and notify the provider",
          "ACE inhibitor side effect — check if the patient is also on lisinopril and hold that medication if confirmed"
        ],
        "correct": 2,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Classic digoxin toxicity: nausea, yellow-green visual disturbances. Furosemide caused hypokalemia (K+ 3.1), which increases myocardial sensitivity to digoxin — toxicity occurs even at therapeutic drug levels."
      },
      {
        "q": "A patient on both digoxin and hydrochlorothiazide presents with a new-onset irregular heart rhythm and complaints of blurred vision. Potassium is 2.9 mEq/L. What is the nursing priority?",
        "opts": [
          "Administer the next scheduled digoxin dose because the arrhythmia indicates subtherapeutic drug levels",
          "Increase the hydrochlorothiazide dose to improve fluid balance and restore normal cardiac conduction patterns",
          "Administer calcium gluconate to stabilize the cardiac membrane against the effects of the low potassium level",
          "Hold digoxin, obtain a stat digoxin level, replace potassium aggressively, and notify the provider of suspected toxicity"
        ],
        "correct": 3,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Arrhythmias + visual changes + hypokalemia (K+ 2.9) in a patient on digoxin = digoxin toxicity until proven otherwise. Thiazide-induced hypokalemia is the precipitant. Priority: hold digoxin, check level, replace K+ (and Mg2+), continuous cardiac monitoring. Digoxin Fab fragments (Digibind) may be needed for severe toxicity."
      },
      {
        "q": "A nurse is developing a care plan for a patient on digoxin and furosemide. Which preventive intervention is MOST important to include?",
        "opts": [
          "Ensure potassium levels are monitored regularly and potassium supplementation is given to prevent hypokalemia-induced digoxin toxicity",
          "Monitor hepatic function tests monthly because both drugs are metabolized by the liver before renal excretion",
          "Administer digoxin on an empty stomach to maximize absorption and maintain consistent therapeutic blood levels",
          "Schedule both medications at the same time each day to improve patient adherence to the regimen"
        ],
        "correct": 0,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "The most important preventive measure in the furosemide-digoxin combination is maintaining potassium ≥3.5 mEq/L. Furosemide causes K+ loss; low K+ potentiates digoxin toxicity. Proactive K+ monitoring and supplementation (KCl, K-sparing diuretic, or dietary intake) prevents this dangerous interaction."
      },
      {
        "q": "A patient's warfarin INR goal is 2.0-3.0 for atrial fibrillation. Today's INR is 4.9 and the patient has no bleeding signs. What is the appropriate action?",
        "opts": [
          "Give the scheduled warfarin dose — an INR of 4.9 is only slightly elevated above the therapeutic range",
          "Hold warfarin, assess for bleeding, and notify the provider — oral vitamin K1 may be required per protocol",
          "Administer 4-factor PCC (Kcentra) immediately to rapidly reverse the elevated INR to therapeutic range",
          "Double-check the INR with a repeat laboratory draw only and continue warfarin dosing in the interim"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "INR 4.9 is supratherapeutic. For INR >4 without significant bleeding: hold warfarin, assess for any bleeding, notify provider. Oral vitamin K1 1-2.5 mg may be given. 4-factor PCC is reserved for active major bleeding."
      },
      {
        "q": "A patient on warfarin presents with an INR of 8.2, epistaxis, and blood in the stool. What is the priority intervention?",
        "opts": [
          "Hold warfarin and administer oral vitamin K1 5 mg — the bleeding is minor and will self-resolve with vitamin K alone",
          "Observe for 24 hours because warfarin has a long half-life and the INR will self-correct within one day",
          "Administer IV vitamin K and consider 4-factor PCC — active bleeding with severely elevated INR requires urgent reversal",
          "Administer protamine sulfate to reverse the warfarin effect and control the active bleeding immediately"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "INR 8.2 with active bleeding (epistaxis, GI bleed) is a medical emergency. IV vitamin K (10 mg slow infusion) begins working in 6-12 hours. 4-factor PCC (Kcentra) provides immediate factor replacement for urgent reversal. Protamine reverses heparin, not warfarin. FFP is an alternative if PCC is unavailable."
      },
      {
        "q": "A patient on warfarin has an INR of 3.4 and no bleeding. The target range is 2.0-3.0. What is the most appropriate nursing action?",
        "opts": [
          "Double the next warfarin dose to bring the INR back down to the target range more quickly",
          "Administer vitamin K1 immediately because any INR above 3.0 requires pharmacologic reversal treatment",
          "Continue the current warfarin dose — INR fluctuations of 0.4 above range are clinically insignificant and normal",
          "Hold warfarin for one dose and recheck the INR the next day — the INR is only slightly above the therapeutic range"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "INR 3.4 is only mildly supratherapeutic. Standard approach: hold 1-2 doses, recheck INR, and resume at a slightly reduced dose. Vitamin K is typically reserved for INR >4.5 or active bleeding. Doubling the dose would worsen the elevation — warfarin blocks clotting factors, it does not lower INR."
      },
      {
        "q": "Heparin-induced thrombocytopenia (HIT) is suspected on day 7 of heparin therapy. Platelets have dropped from 220 to 84. What is the MOST important nursing action?",
        "opts": [
          "Stop ALL heparin immediately including flushes, notify the provider, and anticipate starting a direct thrombin inhibitor",
          "Order a platelet transfusion to correct the thrombocytopenia count back to the normal reference range",
          "Switch to LMWH (enoxaparin) — it has a lower HIT risk and can safely substitute for unfractionated heparin",
          "Continue heparin therapy but reduce the dose to minimize the immune-mediated platelet consumption rate"
        ],
        "correct": 0,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "HIT is immune-mediated and prothrombotic. All heparin products must be stopped immediately (including flushes, coated catheters). A direct thrombin inhibitor (argatroban or bivalirudin) is started. LMWH cross-reacts with HIT antibodies."
      },
      {
        "q": "A patient developed HIT during a previous hospitalization. They are now admitted for DVT treatment. Which anticoagulant class can safely be used?",
        "opts": [
          "Low-molecular-weight heparin at reduced doses because it has lower cross-reactivity with HIT antibodies than UFH",
          "Direct thrombin inhibitors (argatroban) or fondaparinux — both avoid the heparin-PF4 complex that triggers HIT",
          "Unfractionated heparin with concurrent platelet monitoring every 6 hours to detect early signs of recurrence",
          "Warfarin monotherapy initiated immediately because it does not involve any heparin-like molecular structures"
        ],
        "correct": 1,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "With documented HIT history, ALL heparin products (UFH and LMWH) are contraindicated due to cross-reactivity. Argatroban (direct thrombin inhibitor) or fondaparinux (selective Factor Xa inhibitor that does not bind PF4) are safe alternatives. Warfarin should never be started alone in HIT — it causes paradoxical thrombosis by depleting Protein C."
      },
      {
        "q": "On day 6 of heparin therapy, a patient's platelet count drops by 55% from baseline. The nurse suspects HIT. Why is the timing significant?",
        "opts": [
          "HIT typically presents within the first 24 hours of heparin exposure as an immediate hypersensitivity reaction",
          "Platelet drops occurring after day 5 are always due to sepsis-related consumption rather than drug-induced mechanisms",
          "HIT characteristically develops 5-10 days after heparin initiation, consistent with the time needed for antibody formation",
          "HIT only occurs after 30 days or more of continuous heparin infusion as a late-onset immune phenomenon"
        ],
        "correct": 2,
        "cat": "Black Box Warning",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "Type II HIT (the clinically significant form) typically develops 5-10 days after heparin initiation — time required for IgG antibodies against heparin-PF4 complexes to form. A platelet drop >50% from baseline during this window is highly suspicious. Patients with prior HIT can develop rapid-onset HIT within hours of re-exposure."
      },
      {
        "q": "Norepinephrine (Levophed) is being infused peripherally. The nurse notices the IV site is swollen, cool, and pale. What is the priority action?",
        "opts": [
          "Slow the infusion rate by 50% and continue monitoring the site every 15 minutes for further changes",
          "Switch to a smaller gauge needle and restart the infusion at a different peripheral site on the same extremity",
          "Flush the line with 10 mL of normal saline to clear any obstruction and then resume the infusion",
          "Stop the infusion immediately — extravasation of vasopressors causes tissue necrosis; prepare phentolamine for local injection"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Norepinephrine extravasation causes intense local vasoconstriction → tissue ischemia and necrosis. Stop immediately. The antidote is phentolamine (alpha blocker) injected locally. Central venous access is required for vasopressors."
      },
      {
        "q": "Phentolamine is the antidote for vasopressor extravasation. What is its mechanism of action at the extravasation site?",
        "opts": [
          "Phentolamine is an alpha-adrenergic antagonist that blocks the vasoconstrictive effect of the extravasated norepinephrine",
          "Phentolamine is a direct vasodilator that relaxes vascular smooth muscle through nitric oxide release locally",
          "Phentolamine is a calcium channel blocker that prevents smooth muscle contraction in the affected blood vessels",
          "Phentolamine is a beta-agonist that stimulates vasodilation by activating beta-2 receptors in the vascular endothelium"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Norepinephrine causes tissue necrosis via alpha-1 receptor-mediated vasoconstriction. Phentolamine is a non-selective alpha blocker — when injected locally into the extravasation site, it competitively blocks alpha receptors, reversing vasoconstriction and restoring blood flow to prevent tissue death."
      },
      {
        "q": "A nurse is administering dopamine through a peripheral IV while awaiting central line placement. What is the MOST important nursing action during peripheral infusion?",
        "opts": [
          "Titrate the infusion to maintain a mean arterial pressure above 65 mmHg as ordered by the provider",
          "Assess the IV site at least every 30 minutes for signs of extravasation including swelling, pallor, and coolness",
          "Administer prophylactic phentolamine at the IV site every hour to prevent potential vasopressor extravasation injury",
          "Apply a warm compress to the IV site continuously to promote vasodilation and reduce the risk of tissue damage"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Peripheral vasopressor infusion is a last resort. Frequent site assessment (every 30 minutes or per protocol) is critical — early detection of extravasation allows immediate intervention (stop infusion, phentolamine injection) before necrosis occurs. Central line placement should be expedited."
      },
      {
        "q": "Which of the following is a Black Box Warning for metoprolol succinate (Toprol XL)?",
        "opts": [
          "Risk of hypertensive crisis if a single scheduled dose is missed during chronic therapy management",
          "Hepatotoxicity requiring monthly liver function test monitoring throughout the entire duration of therapy",
          "Abrupt discontinuation may exacerbate angina and precipitate myocardial infarction in cardiac patients",
          "Increased risk of new-onset diabetes mellitus developing with chronic long-term beta-blocker therapy use"
        ],
        "correct": 2,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Beta-blockers carry a BBW for abrupt discontinuation — sudden stopping causes rebound adrenergic stimulation, leading to angina, MI, and arrhythmias. Taper over 1-2 weeks when discontinuing."
      },
      {
        "q": "A patient on atenolol 100 mg daily tells the nurse they stopped taking it 2 days ago because they ran out of refills. What is the nurse's immediate concern?",
        "opts": [
          "The patient needs to restart at a higher dose to compensate for the two missed days of beta-blocker therapy",
          "The patient may experience GI upset from abrupt withdrawal but cardiovascular risk is minimal overall",
          "The patient will develop bradycardia from the residual drug effect that persists for several days after stopping",
          "Abrupt cessation of beta-blockers can cause rebound tachycardia, hypertension, angina, and increased risk of myocardial infarction"
        ],
        "correct": 3,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Abrupt beta-blocker cessation causes upregulation and supersensitivity of beta-adrenergic receptors → rebound sympathetic surge. This can trigger unstable angina, hypertensive crisis, acute MI, and fatal arrhythmias. The nurse should notify the provider urgently and facilitate immediate prescription refill."
      },
      {
        "q": "A surgeon wants to stop a patient's metoprolol preoperatively to 'simplify the medication list.' What evidence-based recommendation should the nurse communicate?",
        "opts": [
          "Beta-blockers should be continued perioperatively — abrupt withdrawal increases the risk of perioperative cardiac events significantly",
          "Beta-blockers should be held for 24 hours before surgery and then restarted immediately after the procedure ends",
          "Beta-blockers should always be discontinued before surgery to prevent intraoperative hypotension and bradycardia",
          "The decision to continue or stop beta-blockers has no impact on perioperative cardiovascular outcomes in any patient"
        ],
        "correct": 0,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "ACC/AHA guidelines recommend continuing beta-blockers perioperatively in patients already on them. Abrupt withdrawal in the perioperative period — when sympathetic tone is already elevated from surgical stress — significantly increases the risk of MI, arrhythmias, and cardiac death."
      }
    ],
    "bridge_check": [
      {
        "q": "You've mastered that ACE inhibitors are renoprotective in CKD. Your renal module patient has CKD Stage 3 and their creatinine rises from 1.4 to 1.7 after starting lisinopril. What do you do?",
        "opts": [
          "This rise (21%) is within the acceptable range — up to 30% is expected as the drug reduces intraglomerular pressure",
          "Switch to an ARB to avoid the renal hemodynamic effect that all ACE inhibitors exert on the glomerular vessels",
          "Double the lisinopril dose to overcome the apparent renal resistance and achieve better blood pressure control",
          "Stop lisinopril immediately — this creatinine rise proves that the drug is damaging the kidneys directly"
        ],
        "correct": 0,
        "cat": "Bridge M1→M2",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "ACE inhibitors reduce efferent arteriolar tone → lower intraglomerular pressure → modest creatinine rise. Up to 30% rise is acceptable and reflects the drug working. Rises >50% should prompt reassessment."
      },
      {
        "q": "A patient with diabetic nephropathy is started on lisinopril. Labs show potassium rising from 4.8 to 5.4 mEq/L. What is the connection between ACE inhibitor therapy and this electrolyte change?",
        "opts": [
          "ACE inhibitors cause direct renal tubular potassium secretion that raises serum levels independently of aldosterone",
          "ACE inhibitors reduce aldosterone production, decreasing potassium excretion — this effect is enhanced in patients with CKD",
          "ACE inhibitors increase potassium absorption from the GI tract by altering intestinal membrane permeability to electrolytes",
          "The potassium rise is unrelated to lisinopril and is caused by the progression of diabetic nephropathy affecting tubular function"
        ],
        "correct": 1,
        "cat": "Bridge M1→M2",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "ACE inhibitors reduce angiotensin II → less aldosterone → decreased K+ excretion in the collecting duct. In CKD, the kidney already has impaired K+ excretion. Combined, hyperkalemia risk is substantial. Monitor K+ closely, especially when ACE-I is combined with K+-sparing diuretics or in CKD."
      },
      {
        "q": "A heart failure patient takes lisinopril and is started on an NSAID for arthritis pain. Their creatinine jumps from 1.2 to 2.4 mg/dL within a week. What mechanism explains this acute kidney injury?",
        "opts": [
          "The creatinine rise is caused by NSAID-induced rhabdomyolysis releasing creatine kinase that cross-reacts with the creatinine assay",
          "NSAIDs and ACE inhibitors both cause direct nephrotoxicity through tubular cell damage when used together",
          "NSAIDs inhibit prostaglandin-mediated afferent arteriolar dilation while ACE inhibitors dilate the efferent arteriole — both reduce glomerular perfusion pressure simultaneously",
          "ACE inhibitors increase NSAID absorption, leading to supratherapeutic NSAID levels that are directly toxic to the renal tubular cells"
        ],
        "correct": 2,
        "cat": "Bridge M1→M2",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "NSAIDs block prostaglandin-mediated afferent arteriolar dilation. ACE inhibitors block angiotensin II-mediated efferent arteriolar constriction. Together, both ends of the glomerulus are dilated — perfusion pressure drops → GFR falls → acute kidney injury. This is the classic 'triple whammy' (add a diuretic for the third hit)."
      },
      {
        "q": "A COPD patient with newly diagnosed heart failure is being started on metoprolol. What respiratory concern must you communicate to the provider?",
        "opts": [
          "Metoprolol causes respiratory alkalosis in COPD patients by stimulating the central respiratory drive centers",
          "Metoprolol is absolutely contraindicated in any patient with any form of lung disease or respiratory compromise",
          "COPD has no clinically significant interaction with beta-blockers at any dose or formulation whatsoever",
          "At higher doses, cardioselective beta-1 blockade is lost and beta-2 blockade can worsen bronchospasm in susceptible patients"
        ],
        "correct": 3,
        "cat": "Bridge M1→M3",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Cardioselective beta-1 blockers are generally preferred in obstructive lung disease. However, at higher doses, beta-1 selectivity diminishes — beta-2 blockade can worsen bronchospasm. Start low, titrate carefully, monitor respiratory status."
      },
      {
        "q": "A patient with asthma and heart failure needs a beta-blocker. The provider selects bisoprolol over carvedilol. What pharmacologic rationale supports this choice?",
        "opts": [
          "Bisoprolol is highly beta-1 selective, minimizing beta-2 bronchial blockade — carvedilol is non-selective and blocks both beta-1 and beta-2 receptors",
          "Bisoprolol has intrinsic sympathomimetic activity that provides mild bronchodilation at therapeutic doses",
          "Carvedilol causes more bradycardia than bisoprolol, which is the primary concern in asthmatic patients",
          "Bisoprolol has a shorter half-life, reducing the duration of any bronchospastic episode if one occurs"
        ],
        "correct": 0,
        "cat": "Bridge M1→M3",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Bisoprolol is one of the most beta-1 selective agents available. Carvedilol blocks beta-1, beta-2, AND alpha-1 receptors — its beta-2 blockade makes it higher risk for bronchospasm in asthma/COPD. When a beta-blocker is essential in obstructive airway disease, highly selective agents (bisoprolol, nebivolol) are preferred."
      },
      {
        "q": "A patient on metoprolol for heart failure experiences an acute COPD exacerbation requiring nebulized albuterol. What pharmacodynamic interaction must the nurse anticipate?",
        "opts": [
          "Albuterol will enhance metoprolol's blood pressure-lowering effect through synergistic vasodilation mechanisms",
          "Metoprolol may reduce albuterol's bronchodilating effectiveness by partially blocking the beta-2 receptors albuterol targets",
          "Albuterol will increase metoprolol's heart rate-lowering effect by activating vagal tone reflexively",
          "Metoprolol will increase albuterol's tremor and tachycardia side effects through additive beta receptor stimulation"
        ],
        "correct": 1,
        "cat": "Bridge M1→M3",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Albuterol is a beta-2 agonist (bronchodilator). Metoprolol, while beta-1 selective, has some beta-2 blocking activity — especially at higher doses. This can partially antagonize albuterol's bronchodilatory effect. The patient may need higher albuterol doses or the provider may need to adjust the beta-blocker during the exacerbation."
      },
      {
        "q": "Your patient takes atorvastatin and is started on fluconazole for a fungal infection. What interaction must you anticipate?",
        "opts": [
          "No interaction exists — statins and antifungals work on completely different pharmacologic systems in the body",
          "Atorvastatin reduces fluconazole effectiveness by inducing the hepatic enzymes responsible for antifungal metabolism",
          "Fluconazole inhibits CYP3A4 — atorvastatin levels rise significantly, increasing myopathy and rhabdomyolysis risk",
          "The combination causes additive hepatotoxicity only, without any effect on statin blood levels or muscle toxicity"
        ],
        "correct": 2,
        "cat": "Bridge M1→M7",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Fluconazole is a moderate-strong CYP3A4 inhibitor. Atorvastatin is metabolized by CYP3A4. The combination raises statin exposure — myopathy risk increases."
      },
      {
        "q": "A patient on atorvastatin is being treated with itraconazole for a toenail fungal infection. The pharmacist recommends temporarily switching to pravastatin. What is the pharmacokinetic rationale?",
        "opts": [
          "Pravastatin is more potent than atorvastatin and requires lower doses that are safer with concurrent antifungals",
          "Itraconazole only interacts with atorvastatin's inactive metabolites, so switching to pravastatin is a convenience measure",
          "Pravastatin has a shorter half-life, reducing the window during which the drug interaction can cause muscle toxicity",
          "Pravastatin is not significantly metabolized by CYP3A4, avoiding the dangerous interaction with itraconazole that atorvastatin has"
        ],
        "correct": 3,
        "cat": "Bridge M1→M7",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Pravastatin is not a CYP3A4 substrate — it undergoes minimal hepatic metabolism. Itraconazole (strong CYP3A4 inhibitor) will not raise pravastatin levels the way it raises atorvastatin or simvastatin levels. This is a clinically important statin-selection strategy when CYP3A4 inhibitors are needed."
      },
      {
        "q": "A patient on simvastatin develops a fever and is started on erythromycin. Three days later, the patient reports severe muscle pain and cola-colored urine. What is the likely diagnosis and mechanism?",
        "opts": [
          "Statin-induced rhabdomyolysis precipitated by erythromycin's CYP3A4 inhibition, leading to dangerously elevated simvastatin levels",
          "Viral myositis caused by the underlying infection, unrelated to either medication the patient is currently taking",
          "Erythromycin-induced renal failure causing simvastatin accumulation due to impaired drug excretion by the kidneys",
          "An allergic reaction to the combination of simvastatin and erythromycin manifesting as an immune-mediated myopathy"
        ],
        "correct": 0,
        "cat": "Bridge M1→M7",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Erythromycin is a strong CYP3A4 inhibitor. Simvastatin is a CYP3A4 substrate with high first-pass extraction. The combination dramatically raises simvastatin levels → rhabdomyolysis (muscle breakdown → myoglobin → cola-colored urine → AKI). This interaction spans CV and ID modules and requires immediate statin discontinuation, aggressive hydration, and CK/renal monitoring."
      },
      {
        "q": "A patient on warfarin for AFib is started on metronidazole for a GI infection. Their next INR is 5.6. Which pharmacokinetic mechanism explains this?",
        "opts": [
          "Metronidazole increases vitamin K production in the gut flora, paradoxically reducing clotting factor levels",
          "Metronidazole inhibits CYP2C9, slowing warfarin metabolism — the same mechanism as the amiodarone interaction",
          "Metronidazole displaces warfarin from albumin protein binding sites, increasing the free active drug fraction",
          "Metronidazole causes direct platelet inhibition that compounds the anticoagulant effect of warfarin therapy"
        ],
        "correct": 1,
        "cat": "Bridge M1→M7",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Metronidazole inhibits CYP2C9, the primary enzyme metabolizing S-warfarin. Same pathway as amiodarone. Warfarin accumulates, INR rises. Requires monitoring and likely temporary warfarin dose reduction."
      },
      {
        "q": "A patient stable on warfarin (INR 2.6) completes a 14-day course of rifampin for latent tuberculosis. One week after stopping rifampin, their INR is 1.2. What happened?",
        "opts": [
          "Rifampin directly binds and inactivates warfarin molecules in the bloodstream, reducing the effective drug concentration",
          "Rifampin increases vitamin K absorption from the diet, opposing warfarin's mechanism of action on clotting factor synthesis",
          "Rifampin is a potent CYP inducer — it increased warfarin metabolism during therapy, and the enzyme induction persists for days to weeks after stopping",
          "The patient likely became non-adherent to warfarin during the tuberculosis treatment course and needs to be counseled"
        ],
        "correct": 2,
        "cat": "Bridge M1→M7",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Rifampin is one of the most potent CYP enzyme inducers known (CYP2C9, CYP3A4, and others). It dramatically accelerates warfarin metabolism → subtherapeutic INR. Enzyme induction persists 1-2 weeks after rifampin is stopped as induced enzyme levels slowly decline. Warfarin dose adjustments are needed both during and after rifampin courses."
      },
      {
        "q": "A patient on warfarin is prescribed trimethoprim-sulfamethoxazole (Bactrim) for a urinary tract infection. What warfarin interaction should the nurse anticipate?",
        "opts": [
          "Trimethoprim activates vitamin K-dependent clotting factor synthesis, opposing the anticoagulant effect of warfarin",
          "Bactrim decreases warfarin absorption by altering gut pH and reducing intestinal motility significantly",
          "Bactrim displaces warfarin from tissue binding sites, reducing the drug's anticoagulant effectiveness overall",
          "Sulfamethoxazole inhibits CYP2C9, increasing warfarin levels — INR monitoring must be intensified during the antibiotic course"
        ],
        "correct": 3,
        "cat": "Bridge M1→M7",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Sulfamethoxazole is a CYP2C9 inhibitor — it slows warfarin metabolism, raising drug levels and INR. This is the same mechanism as amiodarone and metronidazole. INR should be checked within 3-5 days of starting Bactrim, and warfarin dose may need temporary reduction."
      },
      {
        "q": "Your patient with HFrEF takes metoprolol, lisinopril, and spironolactone — the evidence-based neurohormonal blockade triple therapy. Potassium is now 5.7 mEq/L. What is the priority clinical concern and action?",
        "opts": [
          "Both lisinopril and spironolactone independently retain potassium — combined hyperkalemia is dangerous and requires provider notification",
          "Only spironolactone causes hyperkalemia — hold it alone and continue lisinopril at the same dose without changes",
          "The potassium is mildly elevated but expected with this drug combination — no action is needed at this time",
          "Give calcium gluconate immediately for cardiac membrane protection before any other interventions are initiated"
        ],
        "correct": 0,
        "cat": "Bridge M1→M2",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "ACE inhibitors reduce aldosterone → K+ retention. Spironolactone blocks aldosterone → K+ retention. Together, hyperkalemia risk is substantial. K+ >5.5 requires provider notification and assessment for cardiac effects."
      },
      {
        "q": "A patient on sacubitril/valsartan (Entresto) and spironolactone for HFrEF has a potassium level of 5.9 mEq/L. What additional electrolyte concern bridges the cardiovascular and renal modules?",
        "opts": [
          "Hyponatremia from excessive diuresis is the primary additional electrolyte concern with this drug combination",
          "Hyperkalemia from dual RAAS blockade (ARB component) plus aldosterone antagonism — ECG monitoring and urgent K+ management are critical",
          "Hypocalcemia from spironolactone-induced renal calcium wasting is the most dangerous secondary electrolyte abnormality",
          "Hypermagnesemia from reduced renal magnesium excretion caused by both medications acting on the distal nephron"
        ],
        "correct": 1,
        "cat": "Bridge M1→M2",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Sacubitril/valsartan (ARNI) contains valsartan (ARB), which reduces aldosterone similarly to ACE inhibitors. Combined with spironolactone, two potassium-retaining mechanisms stack. K+ 5.9 is dangerous — risk of fatal arrhythmias. Stat ECG, consider calcium gluconate, sodium polystyrene sulfonate (Kayexalate) or patiromer (Veltassa), and hold one or both agents."
      },
      {
        "q": "An HFrEF patient on lisinopril, spironolactone, and furosemide has a potassium of 4.2 mEq/L. Why is the potassium normal despite two potassium-retaining drugs?",
        "opts": [
          "The patient is likely non-adherent to spironolactone, which is why the expected hyperkalemia has not developed",
          "Lisinopril and spironolactone do not significantly affect potassium levels when used together at therapeutic doses",
          "Furosemide causes potassium loss at the loop of Henle, counterbalancing the potassium retention from lisinopril and spironolactone",
          "Normal dietary potassium intake dilutes the effect of potassium-retaining medications to produce a normal serum level"
        ],
        "correct": 2,
        "cat": "Bridge M1→M2",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "This is the pharmacodynamic balance in HF triple therapy. Furosemide (loop diuretic) wastes potassium. Lisinopril and spironolactone both retain potassium. When balanced correctly, K+ remains normal. This is why the combination works clinically — but the balance is delicate and requires regular K+ monitoring to detect shifts."
      }
    ]
  },
  "M2": {
    "rapid_fire": [
      {
        "q": "Furosemide is ordered IV for a patient in acute pulmonary edema. What happens in the first 5 minutes BEFORE diuresis begins?",
        "opts": [
          "Immediate venodilation occurs, reducing preload and relieving pulmonary congestion before diuresis starts",
          "Kidney function improves rapidly from enhanced renal perfusion mediated by direct tubular drug effects",
          "Pulmonary vascular pressure rises temporarily due to the initial fluid shift into the pulmonary vasculature",
          "Nothing — furosemide takes 30-60 minutes to produce any detectable hemodynamic or clinical effect intravenously"
        ],
        "correct": 0,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "IV furosemide produces immediate venodilation within minutes — this reduces preload and pulmonary capillary wedge pressure before diuresis begins."
      },
      {
        "q": "A patient with acute pulmonary edema receives IV furosemide. The nurse notes improved oxygen saturation within 10 minutes, but urine output has not yet increased. What explains this early improvement?",
        "opts": [
          "The furosemide has already reached the kidneys and begun producing diuresis that is not yet measurable",
          "IV furosemide causes immediate venodilation that reduces pulmonary congestion independently of its diuretic effect",
          "The oxygen saturation improvement is caused by the supplemental oxygen, not by the furosemide administration",
          "Furosemide directly relaxes bronchial smooth muscle, improving airflow and gas exchange before diuresis occurs"
        ],
        "correct": 1,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "IV furosemide's venodilatory effect occurs within 5 minutes — before any diuresis. Venodilation reduces venous return (preload) → less pulmonary capillary congestion → improved gas exchange → better SpO2. This pre-diuretic benefit is a major reason IV furosemide is the drug of choice in acute pulmonary edema."
      },
      {
        "q": "A nurse is preparing to administer IV furosemide to a patient in acute heart failure. The order says to infuse 80 mg over 2 minutes. Why is the rate specification important?",
        "opts": [
          "Faster infusion rates reduce the diuretic effect because the drug is cleared by the kidneys before it can act",
          "Rapid IV furosemide infusion causes hypoglycemia by stimulating pancreatic insulin release from beta cells",
          "Rapid IV push of high-dose furosemide increases the risk of ototoxicity — slower infusion rates reduce cochlear damage",
          "The rate specification is a standard nursing convention but has no pharmacologic significance for furosemide safety"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Rapid IV furosemide administration (especially at high doses >80 mg) increases ototoxicity risk. The recommended maximum rate is 4 mg/min for doses >120 mg. Ototoxicity from rapid infusion damages cochlear hair cells — risk is compounded by concurrent aminoglycosides or renal impairment."
      },
      {
        "q": "A patient is on furosemide chronically and is also prescribed digoxin for heart failure. Which electrolyte level requires the most vigilant monitoring and why?",
        "opts": [
          "Sodium — furosemide depletes sodium which increases digoxin binding at the cardiac sodium-potassium pump",
          "Magnesium — hypomagnesemia causes digoxin to be less effective by reducing receptor binding affinity",
          "Calcium — hypocalcemia from furosemide potentiates the arrhythmogenic effects of digoxin on cardiac conduction",
          "Potassium — hypokalemia from furosemide dramatically increases myocardial sensitivity to digoxin toxicity"
        ],
        "correct": 3,
        "cat": "Monitoring",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Hypokalemia is critical. Furosemide causes potassium loss. Low K+ increases digoxin binding to Na/K-ATPase — toxicity can occur even at therapeutic digoxin levels. Maintain K+ ≥3.5 mEq/L."
      },
      {
        "q": "A patient on chronic furosemide develops muscle cramps, weakness, and an irregular heart rhythm. Labs show K+ 2.8 mEq/L and Mg2+ 1.2 mg/dL. Why must BOTH electrolytes be corrected?",
        "opts": [
          "Magnesium depletion causes renal potassium wasting — hypokalemia is refractory to correction until magnesium is repleted",
          "Both electrolytes must be corrected simultaneously because they share the same renal transport mechanism for excretion",
          "Low calcium is the actual cause of the symptoms and correcting magnesium will raise calcium levels indirectly",
          "Magnesium is needed for potassium absorption from the gastrointestinal tract into the bloodstream only"
        ],
        "correct": 0,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Magnesium is required for the ROMK channel in the distal nephron to retain potassium. When Mg2+ is low, the kidney wastes K+ regardless of supplementation. Hypokalemia will be refractory until Mg2+ is corrected first. Loop diuretics deplete both — always check and replace both together."
      },
      {
        "q": "A patient on furosemide 40 mg BID and potassium chloride 20 mEq daily has a K+ level of 3.3 mEq/L. What nursing action is most appropriate?",
        "opts": [
          "Continue the current regimen because potassium supplementation is already in place and the level is only slightly low",
          "Notify the provider — the potassium supplementation is insufficient to offset furosemide-induced losses and the dose needs to be increased",
          "Discontinue furosemide because any degree of hypokalemia indicates the diuretic dose is too high for this patient",
          "Increase dietary potassium intake only and discontinue the potassium chloride supplement to reduce pill burden"
        ],
        "correct": 1,
        "cat": "Monitoring",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "K+ 3.3 despite supplementation indicates the current replacement is inadequate for the degree of furosemide-induced loss. The nurse should notify the provider — options include increasing KCl supplementation, adding a potassium-sparing diuretic, or reassessing the furosemide dose."
      },
      {
        "q": "An order reads: 'Potassium chloride 40 mEq IV push stat.' What is your response?",
        "opts": [
          "Administer as ordered — stat orders from the provider override all normal safety precautions and protocols",
          "Administer the full 40 mEq slowly over 10 minutes via peripheral IV without dilution as a modified approach",
          "Contact the provider — IV potassium must never be given as a push; it must be diluted and infused via pump",
          "Give 20 mEq now by IV push and 20 mEq in 1 hour as a reasonable compromise for the stat order"
        ],
        "correct": 2,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Undiluted IV potassium push can cause immediate fatal cardiac arrest. KCl must always be diluted and infused via pump — maximum 10-20 mEq/hr peripherally."
      },
      {
        "q": "A nurse is infusing KCl 20 mEq in 100 mL NS through a peripheral IV. The patient reports burning and pain at the IV site. What is the appropriate nursing action?",
        "opts": [
          "Switch to IV push potassium to complete the dose more quickly and reduce the duration of site discomfort",
          "This is a normal expected sensation — reassure the patient and continue the infusion at the current rate",
          "Discontinue the potassium infusion permanently because site pain always indicates extravasation has occurred",
          "Slow the infusion rate and consider further dilution — concentrated KCl causes venous irritation and pain peripherally"
        ],
        "correct": 3,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Peripheral KCl infusion commonly causes venous irritation and burning due to the concentration. Actions: slow the rate, dilute further (e.g., 20 mEq in 250 mL instead of 100 mL), consider warm compresses, or use a larger vein. Central line administration avoids this issue. Never switch to IV push — this is a never-event."
      },
      {
        "q": "A patient with K+ 2.4 mEq/L and ECG changes (U waves, flattened T waves) is ordered IV KCl replacement. What is the maximum safe peripheral infusion rate?",
        "opts": [
          "10-20 mEq/hr through a peripheral IV with cardiac monitoring — central line needed for faster rates exceeding this limit",
          "5 mEq/hr is the absolute maximum peripheral rate regardless of the severity of the hypokalemia or ECG changes",
          "There is no maximum rate — the infusion speed should be based solely on the severity of the patient's symptoms",
          "40 mEq/hr through a peripheral IV is the maximum safe rate for severe symptomatic hypokalemia correction"
        ],
        "correct": 0,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Knowledge",
        "rationale": "Maximum peripheral KCl infusion rate: 10-20 mEq/hr (varies by institution). Concentrations should not exceed 40 mEq/L peripherally. For rates exceeding 10-20 mEq/hr, a central line with continuous cardiac monitoring is required. Even in severe hypokalemia, exceeding safe rates risks fatal arrhythmias."
      },
      {
        "q": "Spironolactone is added to a patient's regimen of lisinopril and furosemide for HFrEF. Which lab change is the most dangerous potential consequence?",
        "opts": [
          "Hyponatremia from two diuretics working together on different segments of the renal nephron simultaneously",
          "Hyperkalemia — both lisinopril and spironolactone retain potassium through independent mechanisms and the combined risk is substantial",
          "Metabolic alkalosis from the dual diuretic therapy affecting acid-base balance through bicarbonate retention",
          "Hypocalcemia from combined renal effects of the two diuretic agents on tubular calcium reabsorption pathways"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Spironolactone retains potassium by blocking aldosterone. Lisinopril reduces aldosterone production. Both independently raise K+ — combined, severe hyperkalemia can develop."
      },
      {
        "q": "A patient on spironolactone develops painful breast swelling (gynecomastia). What is the mechanism of this adverse effect?",
        "opts": [
          "Spironolactone directly stimulates estrogen production in the adrenal glands through enzyme induction pathways",
          "Spironolactone causes prolactin elevation through dopamine receptor blockade in the anterior pituitary gland",
          "Spironolactone has anti-androgenic properties — it blocks androgen receptors and inhibits testosterone synthesis, shifting the hormonal balance",
          "Gynecomastia is caused by the potassium-retaining effect of spironolactone altering hormonal feedback loops systemically"
        ],
        "correct": 2,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "Spironolactone is a non-selective mineralocorticoid receptor antagonist — it also blocks androgen receptors and inhibits testosterone biosynthesis. This shifts the androgen/estrogen balance → gynecomastia in up to 10% of male patients. Eplerenone is more selective for mineralocorticoid receptors and has lower gynecomastia risk."
      },
      {
        "q": "A patient on lisinopril, spironolactone, and trimethoprim-sulfamethoxazole (Bactrim) for a UTI develops K+ of 6.8 mEq/L. Why is this triple combination so dangerous?",
        "opts": [
          "All three drugs are nephrotoxic and the combined kidney damage prevents potassium excretion entirely",
          "Bactrim causes metabolic acidosis that shifts intracellular potassium into the extracellular space where it is measured",
          "The three drugs compete for renal tubular secretion, causing all of them to accumulate to toxic blood levels simultaneously",
          "Three independent potassium-retaining mechanisms are stacked — ACE inhibitor, aldosterone antagonist, and trimethoprim's ENaC blockade"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Lisinopril reduces aldosterone → K+ retention. Spironolactone blocks aldosterone receptor → K+ retention. Trimethoprim blocks ENaC in the distal nephron → K+ retention. Three independent mechanisms stack → life-threatening hyperkalemia. This triple combination should be avoided or used only with very close K+ monitoring."
      },
      {
        "q": "A patient with CKD Stage 3 (CrCl 28 mL/min) is prescribed enoxaparin (Lovenox) for VTE treatment at the standard 1 mg/kg q12h dose. What concern must you raise?",
        "opts": [
          "At CrCl <30, enoxaparin accumulates significantly due to reduced renal clearance — dose must be reduced to once daily",
          "Double the dose to ensure therapeutic anti-Xa levels are maintained despite the reduced renal clearance in this patient",
          "No concern exists — enoxaparin is hepatically metabolized and completely unaffected by kidney disease at any stage",
          "Enoxaparin is contraindicated in all patients with any stage of CKD — substitute unfractionated heparin immediately"
        ],
        "correct": 0,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Enoxaparin is primarily renally eliminated. At CrCl <30 mL/min, dose should be reduced to 1 mg/kg once daily for treatment. UFH is an alternative since its clearance does not depend on renal function."
      },
      {
        "q": "A patient with CrCl of 25 mL/min receives standard-dose enoxaparin 1 mg/kg q12h for 5 days. Anti-Xa levels come back at 1.8 IU/mL (target 0.5-1.0). What has occurred?",
        "opts": [
          "The lab result is a false elevation caused by the interaction between enoxaparin and the assay reagents used",
          "Drug accumulation from impaired renal clearance has led to dangerously supratherapeutic anticoagulation and high bleeding risk",
          "The elevated anti-Xa level indicates therapeutic resistance and the dose should be further increased to achieve better outcomes",
          "Anti-Xa monitoring is unreliable in CKD patients and should not be used to guide enoxaparin dosing decisions"
        ],
        "correct": 1,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "At CrCl 25 mL/min, enoxaparin accumulates with standard BID dosing — the anti-Xa level of 1.8 (nearly double the therapeutic range) confirms dangerous accumulation. This patient is at very high bleeding risk. The dose should have been reduced to once daily, or UFH used instead."
      },
      {
        "q": "An obese patient (130 kg) with CrCl 45 mL/min needs anticoagulation for DVT. The provider orders enoxaparin 1 mg/kg q12h based on actual body weight. What dosing concerns must the nurse consider?",
        "opts": [
          "Use ideal body weight for dosing because enoxaparin distributes only into lean tissue, not adipose tissue mass",
          "Enoxaparin cannot be used in obese patients regardless of renal function and unfractionated heparin is always required",
          "Use actual body weight for dosing but consider anti-Xa level monitoring since both obesity and moderate CKD affect drug handling",
          "Cap the enoxaparin dose at 100 mg regardless of body weight because higher doses cause predictable toxicity in all patients"
        ],
        "correct": 2,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Current evidence supports actual body weight dosing for enoxaparin, even in obesity. However, anti-Xa monitoring is recommended in extremes of weight (>150 kg or <50 kg) and in moderate CKD (CrCl 30-50) to confirm appropriate drug levels. Both factors (obesity and CKD) affect enoxaparin pharmacokinetics."
      },
      {
        "q": "Mannitol is ordered for a patient with elevated intracranial pressure (ICP). You notice white crystals in the bag. What do you do?",
        "opts": [
          "Administer immediately — crystals indicate a high concentration which is more effective for reducing ICP quickly",
          "Dilute the bag with an equal volume of sterile water and administer without warming to dissolve the visible crystals",
          "Discard the bag entirely and request a new one — crystallized mannitol can never be safely reconstituted for clinical use",
          "Do not administer as is — warm the bag in warm water and shake to redissolve crystals before use with an in-line filter"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Mannitol crystallizes at lower temperatures — warming in a water bath and shaking redissolves crystals. An in-line 0.22-micron filter catches residual microcrystals. A Foley catheter is also required for monitoring expected large urine output."
      },
      {
        "q": "A patient receiving mannitol for cerebral edema has a serum osmolality of 320 mOsm/kg (normal 275-295). The next dose is due. What is the nurse's priority action?",
        "opts": [
          "Hold the dose and notify the provider — serum osmolality above 320 increases the risk of renal failure from mannitol therapy",
          "Administer the dose as scheduled because mannitol works by increasing osmolality beyond the normal physiologic range",
          "Increase the mannitol dose to achieve even higher osmolality for maximum ICP reduction effectiveness",
          "Administer the dose with additional IV fluids to dilute the high osmolality and prevent kidney damage"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Serum osmolality >320 mOsm/kg is the threshold above which mannitol poses significant nephrotoxicity risk. The osmotic gradient can damage renal tubules. Hold mannitol, notify the provider, and recheck osmolality. An osmolar gap >10 mOsm/kg also suggests mannitol accumulation."
      },
      {
        "q": "A nurse is preparing to administer mannitol 20% for elevated ICP. Which essential assessments must be completed before and during the infusion?",
        "opts": [
          "Check serum glucose and hemoglobin A1c because mannitol can cause severe hyperglycemia through osmotic stress",
          "Check serum osmolality, electrolytes, renal function, and urine output — monitor neurological status and vital signs continuously",
          "Check liver function tests and coagulation studies because mannitol causes hepatotoxicity at high osmolality levels",
          "Check pulmonary function tests because mannitol can trigger severe bronchospasm in patients with reactive airway disease"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Before mannitol: baseline serum osmolality, BMP (electrolytes, BUN, creatinine), neuro assessment. During infusion: monitor urine output (Foley catheter required), repeat osmolality checks (hold if >320), electrolytes (mannitol can cause hyponatremia or hyperkalemia initially), and ongoing neurological assessments."
      },
      {
        "q": "Which statement about the onset difference between furosemide oral vs IV is MOST clinically relevant in acute heart failure?",
        "opts": [
          "Oral onset is 5 minutes and IV onset is 60 minutes, making oral the preferred route for acute management",
          "There is no clinically meaningful difference between routes in terms of onset or effectiveness in heart failure",
          "IV onset is 5 minutes vs 30-60 minutes oral — in acute pulmonary edema this time difference is critical for stability",
          "Both routes have the same bioavailability and onset of action in all clinical situations including acute heart failure"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "In heart failure, gut edema impairs oral absorption. IV furosemide: 5 min onset vs oral: 30-60 min. This difference is critical in acute pulmonary edema."
      },
      {
        "q": "A patient with acute decompensated heart failure is receiving oral furosemide 80 mg BID at home but is now admitted with worsening dyspnea. Why might switching to IV furosemide improve the response?",
        "opts": [
          "IV furosemide is a stronger formulation with higher receptor binding affinity at the loop of Henle than oral",
          "Oral furosemide is inactivated by hepatic first-pass metabolism that is enhanced during acute heart failure decompensation",
          "The oral formulation contains inactive binders that reduce the effective drug amount reaching the kidneys in HF",
          "Gut wall edema from HF congestion reduces oral bioavailability — IV bypasses absorption barriers and delivers the drug directly"
        ],
        "correct": 3,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "In decompensated HF, splanchnic congestion causes intestinal wall edema — oral drug absorption becomes erratic and significantly reduced. IV furosemide bypasses this entirely (100% bioavailability), ensuring predictable and rapid drug delivery. Oral-to-IV dose conversion is typically 2:1 (oral 80 mg ≈ IV 40 mg)."
      },
      {
        "q": "A patient admitted with acute HF receives IV furosemide 40 mg and produces 2 liters of urine in 4 hours. They are now clinically improved and the provider orders conversion to oral furosemide. What dose conversion principle applies?",
        "opts": [
          "The oral dose should be approximately double the IV dose to account for the reduced bioavailability of oral furosemide",
          "The oral dose should be identical to the IV dose because both routes produce the same degree of diuresis",
          "The oral dose should be half the IV dose because oral furosemide has a longer duration of action than the IV form",
          "Oral furosemide should not be used in heart failure patients and the IV route must be maintained throughout hospitalization"
        ],
        "correct": 0,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Oral furosemide bioavailability is approximately 50% (range 10-100%, highly variable). General conversion: oral dose ≈ 2× IV dose. So IV 40 mg ≈ oral 80 mg. However, bioavailability improves as congestion resolves and gut edema decreases, so individual response must guide dose titration."
      },
      {
        "q": "A patient on hydrochlorothiazide reports new joint pain and swelling of the first metatarsophalangeal joint (big toe). Which drug effect best explains this?",
        "opts": [
          "Hydrochlorothiazide causes direct joint inflammation as a dose-dependent pharmacologic side effect of the drug",
          "Thiazides raise uric acid levels by competing with urate excretion in the renal tubule — this can precipitate acute gout",
          "The patient is having an allergic reaction to the sulfonamide component of hydrochlorothiazide causing joint inflammation",
          "Thiazides cause calcium pyrophosphate crystal deposition in joints leading to pseudogout flares in susceptible patients"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Thiazides competitively inhibit uric acid secretion in the proximal tubule, causing hyperuricemia → gout flare in susceptible patients."
      },
      {
        "q": "A patient with a history of gout is started on chlorthalidone for resistant hypertension. What preventive strategy should the nurse discuss with the provider?",
        "opts": [
          "No preventive strategy is needed because chlorthalidone is a different drug class than hydrochlorothiazide",
          "Increasing dietary purine intake will counteract the uric acid elevation caused by the thiazide-type diuretic",
          "Concurrent prophylactic allopurinol or colchicine may be needed because thiazide-type diuretics raise uric acid and can trigger gout flares",
          "Chlorthalidone should be taken with food to prevent the hyperuricemia that occurs when it is taken on an empty stomach"
        ],
        "correct": 2,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Chlorthalidone (thiazide-like diuretic) causes hyperuricemia through the same mechanism as HCTZ — competition with urate secretion in the proximal tubule. In patients with gout history, preventive measures (allopurinol, febuxostat, or colchicine prophylaxis) should be discussed before starting the diuretic."
      },
      {
        "q": "A patient on HCTZ has elevated uric acid but has never had a gout attack. Should the HCTZ be discontinued?",
        "opts": [
          "Yes — elevated uric acid always requires immediate discontinuation of the causative medication to prevent joint damage",
          "No — because uric acid levels normalize spontaneously within weeks as the body adapts to chronic thiazide diuretic therapy",
          "Yes — all patients with drug-induced hyperuricemia should be switched to a loop diuretic which does not affect uric acid levels",
          "No — asymptomatic hyperuricemia alone does not require treatment or drug discontinuation; monitor and educate about gout symptoms"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Asymptomatic hyperuricemia does not require treatment. The benefits of HCTZ for blood pressure control typically outweigh the risk of potential gout. Educate the patient about gout symptoms (acute monoarticular joint pain, redness, swelling) and advise prompt reporting. Treat gout only if clinical attacks develop."
      },
      {
        "q": "Magnesium sulfate is being infused for preeclampsia. The patient's respiratory rate is 10 breaths/min, DTRs are absent, and urine output is 18 mL/hr. What is your immediate action?",
        "opts": [
          "Stop the magnesium infusion immediately and administer calcium gluconate 1 g IV — this is magnesium toxicity",
          "Increase the infusion rate — these clinical findings are expected therapeutic effects of magnesium sulfate treatment",
          "Administer a loop diuretic to increase urine output and enhance magnesium excretion through the kidneys",
          "Reduce the infusion rate by 50% and continue monitoring every 30 minutes for any further clinical changes"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Signs of magnesium toxicity: RR <12, absent DTRs, oliguria. Stop infusion immediately. Calcium gluconate is the antidote."
      },
      {
        "q": "A nurse is monitoring a patient on a magnesium sulfate infusion for preeclampsia. Which finding would warrant continuing the infusion without dose adjustment?",
        "opts": [
          "Respiratory rate of 10 breaths/min with shallow breathing pattern observed during assessment",
          "Urine output of 45 mL/hr with present deep tendon reflexes and respiratory rate of 16 breaths/min",
          "Absent patellar reflexes with serum magnesium level of 8 mEq/L obtained from recent laboratory draw",
          "Serum magnesium level of 12 mEq/L with drowsiness and slurred speech noted during neurological assessment"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Safe magnesium infusion parameters: RR ≥12/min, DTRs present (at least 1+), urine output ≥30 mL/hr. This patient (RR 16, DTRs present, UO 45 mL/hr) meets all safety criteria. The other options describe toxicity findings requiring immediate intervention."
      },
      {
        "q": "A patient on magnesium sulfate for preeclampsia seizure prophylaxis also receives nifedipine for blood pressure control. What interaction must the nurse monitor?",
        "opts": [
          "Nifedipine antagonizes magnesium's seizure prophylaxis effect by lowering the seizure threshold significantly",
          "Nifedipine accelerates magnesium excretion through enhanced renal clearance, reducing magnesium's anticonvulsant effectiveness",
          "Both magnesium and nifedipine cause smooth muscle relaxation — the combination can cause profound hypotension and neuromuscular blockade",
          "Magnesium blocks nifedipine absorption in the GI tract, requiring IV administration of the calcium channel blocker"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Magnesium is a physiologic calcium antagonist. Nifedipine is a calcium channel blocker. Together, calcium-dependent processes (muscle contraction, vascular tone) are doubly inhibited → risk of severe hypotension, profound neuromuscular weakness, and cardiac depression. Close monitoring of blood pressure and neuromuscular function is essential."
      },
      {
        "q": "A patient with end-stage renal disease (ESRD) on hemodialysis is ordered allopurinol for gout. What is the key nursing consideration?",
        "opts": [
          "Use the full standard dose but monitor uric acid levels weekly to guide therapy and prevent over-suppression",
          "No adjustment is needed — allopurinol is completely hepatically metabolized and not affected by renal function status",
          "Allopurinol should be avoided completely — gout cannot be safely treated in patients with end-stage renal disease",
          "Dose reduction is required — allopurinol and its active metabolite oxypurinol both accumulate in renal failure significantly"
        ],
        "correct": 3,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Oxypurinol (active metabolite) is renally cleared and accumulates in renal impairment — risk of hypersensitivity syndrome and bone marrow suppression increases. Significant dose reduction required in ESRD."
      },
      {
        "q": "Febuxostat is prescribed instead of allopurinol for a patient with CKD Stage 4 and gout. What pharmacokinetic advantage does febuxostat have in this population?",
        "opts": [
          "Febuxostat is primarily hepatically metabolized, so dose adjustments for renal impairment are minimal compared to allopurinol",
          "Febuxostat is primarily renally eliminated but has a wider therapeutic index than allopurinol in renal impairment",
          "Febuxostat directly protects the kidneys from uric acid crystal deposition through an independent nephroprotective mechanism",
          "Febuxostat has a shorter half-life than allopurinol, reducing accumulation risk regardless of the route of elimination"
        ],
        "correct": 0,
        "cat": "Special Populations",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Febuxostat is primarily hepatically metabolized — dose adjustment is not required for mild-moderate CKD (though caution is still advised in severe impairment). This is a significant advantage over allopurinol/oxypurinol, which accumulate dangerously in renal failure."
      },
      {
        "q": "A patient with CKD Stage 3 is started on allopurinol 100 mg daily for gout. Two weeks later they develop a rash, fever, and elevated liver enzymes. What is the suspected adverse reaction?",
        "opts": [
          "A common, self-limiting drug eruption that resolves with continued therapy and dose titration over several weeks",
          "Allopurinol hypersensitivity syndrome — a serious, potentially fatal reaction associated with renal impairment and excessive starting doses",
          "A typical allergic contact dermatitis from the tablet coating that requires switching to a different manufacturer's product",
          "Drug-induced lupus from allopurinol, which resolves completely within days of discontinuing the medication"
        ],
        "correct": 1,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Allopurinol hypersensitivity syndrome (AHS) presents with rash (can progress to SJS/TEN), fever, eosinophilia, and hepatitis. Risk factors: CKD (oxypurinol accumulation), HLA-B*5801 positivity, and high starting doses. Start at 100 mg (or lower in CKD) and titrate slowly. Screen high-risk populations (Southeast Asian, African American) for HLA-B*5801 before starting."
      },
      {
        "q": "Which monitoring parameter is MOST specific for detecting furosemide ototoxicity early?",
        "opts": [
          "Serum drug levels — furosemide trough levels accurately predict the onset of cochlear damage in all patients",
          "Audiogram performed at every scheduled furosemide dose to objectively track hearing changes over time",
          "Patient-reported tinnitus or high-frequency hearing changes — often the earliest subjective clinical warning sign",
          "Serum potassium — hypokalemia triggers ototoxicity by sensitizing cochlear hair cells to loop diuretic damage"
        ],
        "correct": 2,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Furosemide ototoxicity presents as tinnitus and high-frequency hearing loss — often reversible if caught early. Risk is higher with IV bolus, high doses, concurrent aminoglycosides, or renal impairment."
      },
      {
        "q": "A patient on IV furosemide and IV gentamicin for sepsis with heart failure reports new ringing in the ears. What is the clinical significance of this symptom?",
        "opts": [
          "Tinnitus is a common stress response in hospitalized patients and is unrelated to the current medication regimen",
          "Gentamicin causes nephrotoxicity rather than ototoxicity, so the tinnitus must be attributed to furosemide alone",
          "Tinnitus only occurs with oral furosemide and is not associated with the intravenous formulation of the drug",
          "Both furosemide and gentamicin are independently ototoxic — the combination synergistically increases the risk of permanent hearing loss"
        ],
        "correct": 3,
        "cat": "Monitoring",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Furosemide causes ototoxicity via strial cell damage. Gentamicin causes ototoxicity via cochlear hair cell destruction (free radicals). The combination is synergistically ototoxic. Tinnitus is the early warning sign — notify the provider immediately. Consider dose reduction, slower furosemide infusion, or alternative agents."
      },
      {
        "q": "What nursing interventions can reduce the risk of furosemide-induced ototoxicity in a patient requiring high-dose IV diuresis?",
        "opts": [
          "Infuse furosemide at a rate not exceeding 4 mg/min, avoid concurrent ototoxic drugs when possible, and monitor for tinnitus",
          "Administer furosemide by rapid IV push to minimize the total duration of drug exposure to the cochlear tissues",
          "Pretreat with corticosteroids before each furosemide dose to protect cochlear hair cells from drug-induced damage",
          "Administer furosemide exclusively at night when cochlear blood flow is reduced and drug delivery to the ear is minimal"
        ],
        "correct": 0,
        "cat": "Monitoring",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Ototoxicity risk reduction: infuse at ≤4 mg/min for high doses, avoid concurrent aminoglycosides when possible, monitor renal function (impairment increases risk), and assess for tinnitus/hearing changes. Continuous furosemide infusion may be safer than large bolus doses in high-risk patients."
      },
      {
        "q": "The expected daily urine output target for a patient receiving IV furosemide for acute heart failure exacerbation is:",
        "opts": [
          "200-400 mL/day — aggressive diuresis always worsens renal function and must be avoided in acute heart failure",
          "500-1000 mL negative fluid balance per day is typically targeted, balancing decongestion with renal perfusion preservation",
          "Greater than 5 liters per day — maximum diuresis is always the goal to remove all excess fluid as rapidly as possible",
          "Equal to fluid intake — the goal is strict euvolemia maintenance only without any net negative fluid balance"
        ],
        "correct": 1,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Comprehension",
        "rationale": "Target: 0.5-1 L net negative fluid balance/day. Too aggressive diuresis causes pre-renal azotemia, electrolyte depletion, and hemodynamic instability. Daily weights, I&O, BMP, and BP guide titration."
      },
      {
        "q": "A patient on IV furosemide for acute HF has lost 3 kg (approximately 3 liters) in 24 hours. BUN has risen from 22 to 38 mg/dL and creatinine from 1.0 to 1.4 mg/dL. What does this indicate?",
        "opts": [
          "The diuresis is proceeding optimally and the BUN/creatinine changes are expected and clinically insignificant",
          "The creatinine rise indicates intrinsic renal damage from furosemide nephrotoxicity requiring immediate drug discontinuation",
          "Overly aggressive diuresis has caused pre-renal azotemia — the furosemide rate should be reduced and volume status reassessed",
          "BUN elevation without creatinine change would indicate pre-renal azotemia; the creatinine rise confirms tubular necrosis"
        ],
        "correct": 2,
        "cat": "Monitoring",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "3 L fluid loss in 24 hours exceeds the typical 0.5-1 L/day target. Rising BUN disproportionate to creatinine (BUN:Cr ratio >20:1) suggests pre-renal azotemia from volume depletion. Slow the diuresis rate, reassess volume status, and check orthostatics. The goal is decongestion without compromising renal perfusion."
      },
      {
        "q": "A patient with HF is on IV furosemide but urine output has decreased to 200 mL in the past 8 hours despite adequate dosing. What is this phenomenon called and what is the next step?",
        "opts": [
          "This is expected tachyphylaxis — continue the same dose and the response will return within 24 to 48 hours spontaneously",
          "This indicates acute tubular necrosis from furosemide, requiring immediate discontinuation and nephrology consultation",
          "The decreased output indicates that the patient is euvolemic and no further diuresis is clinically indicated or necessary",
          "This is diuretic resistance — consider increasing the dose, adding a thiazide for sequential nephron blockade, or switching to continuous infusion"
        ],
        "correct": 3,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Diuretic resistance occurs when the kidney adapts to loop diuretic exposure — distal tubule hypertrophy increases sodium reabsorption downstream. Strategies: increase dose, add thiazide diuretic (metolazone) for sequential nephron blockade, convert to continuous infusion, or correct hypoalbuminemia. Assessment must first confirm the patient is still volume overloaded."
      },
      {
        "q": "Lithium is prescribed for a patient. They call reporting diarrhea and vomiting for 2 days. What is your primary concern?",
        "opts": [
          "Dehydration reduces renal clearance of lithium — toxicity risk is high; assess for confusion, ataxia, and worsening tremor",
          "GI side effects are expected with lithium therapy — reassure the patient and continue the medication as prescribed",
          "The GI symptoms indicate that lithium is not at therapeutic levels and the dose should be increased to achieve efficacy",
          "Increase oral fluid intake only and recheck the lithium level at the next regularly scheduled appointment in one week"
        ],
        "correct": 0,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Lithium is 100% renally cleared. Dehydration from vomiting/diarrhea reduces GFR → lithium accumulates. Sodium depletion also increases proximal tubular lithium reabsorption. This is an emergency requiring level measurement and likely holding the drug."
      },
      {
        "q": "A patient on lithium is started on hydrochlorothiazide for newly diagnosed hypertension. Three weeks later, the patient develops coarse tremor and confusion. Lithium level is 2.1 mEq/L. What drug interaction caused this toxicity?",
        "opts": [
          "Hydrochlorothiazide directly inhibits lithium metabolism in the liver, causing accumulation of the parent drug",
          "Thiazide-induced sodium depletion triggers compensatory proximal tubular sodium and lithium reabsorption, reducing lithium excretion",
          "Hydrochlorothiazide increases lithium absorption from the GI tract by altering intestinal pH and membrane permeability",
          "Thiazides displace lithium from protein binding sites, increasing the free fraction of lithium in the bloodstream"
        ],
        "correct": 1,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Thiazides cause sodium depletion → the kidney compensates by increasing proximal tubular sodium reabsorption. Lithium is reabsorbed along with sodium (same transporter) → less lithium excreted → levels rise to toxic range. This is one of the highest-yield renal-psych bridge interactions."
      },
      {
        "q": "A patient on lithium is planning to start a low-sodium diet for blood pressure management. What counseling must the nurse provide?",
        "opts": [
          "A low-sodium diet will reduce lithium side effects by decreasing the drug's renal absorption in the proximal tubule",
          "A low-sodium diet has no effect on lithium levels because lithium and sodium use different renal transport mechanisms",
          "A low-sodium diet causes the kidney to reabsorb more sodium and lithium together — lithium levels may rise to toxic range",
          "A low-sodium diet will lower lithium levels by increasing urine volume and enhancing lithium excretion at the loop of Henle"
        ],
        "correct": 2,
        "cat": "Bridge",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Lithium and sodium are reabsorbed together in the proximal tubule. A low-sodium diet triggers compensatory sodium (and lithium) reabsorption → lithium levels rise. Patients on lithium should maintain consistent sodium intake. Sudden changes in either direction (high or low sodium) can destabilize lithium levels."
      },
      {
        "q": "A patient on thiazide diuretics is also taking lithium for bipolar disorder. Their lithium level jumps from 0.8 to 1.9 mEq/L. The most likely explanation is:",
        "opts": [
          "Thiazides increase lithium absorption from the gastrointestinal tract by enhancing intestinal permeability to cations",
          "No interaction exists between these drug classes — the rise is from medication non-adherence or dietary changes",
          "Thiazides directly inhibit lithium metabolism by competitive inhibition of the same hepatic enzyme pathway",
          "Thiazides cause sodium depletion — the kidney reabsorbs more sodium and lithium together in the proximal tubule"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Thiazide-induced sodium depletion triggers proximal tubular sodium reabsorption. Lithium is reabsorbed alongside sodium — less excreted, levels rise. This can cause toxicity even without dose changes."
      },
      {
        "q": "Which diuretic would be the SAFEST choice for a patient on lithium who requires treatment for fluid overload?",
        "opts": [
          "Loop diuretics (furosemide) have a somewhat lower risk of lithium interaction than thiazides, but still require lithium level monitoring",
          "Hydrochlorothiazide is safest because it causes less sodium depletion than loop diuretics at standard doses",
          "Spironolactone is the safest because potassium-sparing diuretics have no effect on lithium handling whatsoever",
          "Acetazolamide is safest because carbonic anhydrase inhibitors enhance lithium excretion rather than causing retention"
        ],
        "correct": 0,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Loop diuretics (furosemide) have a somewhat lower risk of lithium interaction than thiazides because they act at the loop of Henle (not the proximal tubule where lithium is primarily reabsorbed). However, any diuretic that causes sodium and volume depletion can raise lithium levels — monitoring is essential regardless of the diuretic chosen."
      },
      {
        "q": "An elderly patient on lithium and HCTZ is admitted with heat exhaustion after working outdoors. Lithium level is 2.4 mEq/L. What three factors converged to cause this toxicity?",
        "opts": [
          "High dietary sodium, increased water intake, and enhanced hepatic lithium metabolism from heat stress combined",
          "Thiazide-induced sodium depletion, dehydration from heat exposure, and reduced GFR from hypovolemia all decreased lithium clearance",
          "Increased lithium absorption from heat-enhanced GI motility, thiazide-induced alkalosis, and sweat-related lithium loss converged",
          "Heat-induced hepatic enzyme inhibition, thiazide-mediated protein binding displacement, and reduced oral intake contributed"
        ],
        "correct": 1,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Three lithium-retaining factors converged: (1) HCTZ caused sodium depletion → compensatory proximal lithium reabsorption, (2) heat/sweating caused dehydration → reduced GFR → less lithium filtered, (3) hypovolemia further reduced renal perfusion. This is a classic multi-hit scenario in geriatric pharmacology."
      },
      {
        "q": "What is the significance of the daily weight measurement in a patient with heart failure receiving diuretic therapy?",
        "opts": [
          "Daily weights monitor nutritional status and caloric intake to prevent cachexia during heart failure treatment",
          "Daily weights monitor lower extremity edema only and do not reflect overall body fluid status or central congestion",
          "1 kg of weight change approximates 1 L of fluid — daily weights are the most sensitive practical method for tracking fluid balance",
          "Daily weights evaluate whether the patient is maintaining an adequate exercise regimen during cardiac rehabilitation"
        ],
        "correct": 2,
        "cat": "Patient Education",
        "nclex": "HPM",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "1 kg weight change ≈ 1 L fluid. Patients weigh daily (same time, same scale, same clothing). Report >2 lb gain in 1 day or >5 lb in 1 week."
      },
      {
        "q": "A heart failure patient reports a 4-pound weight gain over the past 2 days with no change in diet. What should the nurse advise?",
        "opts": [
          "This is normal weight fluctuation and does not require any clinical intervention or provider notification",
          "Reduce sodium intake only and reweigh in one week to determine whether the weight gain persists or resolves",
          "Increase physical activity to burn additional calories and reduce the weight gain back to the baseline measurement",
          "Contact the provider — a 4-pound gain in 2 days likely represents approximately 2 liters of fluid retention indicating worsening heart failure"
        ],
        "correct": 3,
        "cat": "Patient Education",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "A gain of >2 lbs in 1 day or >5 lbs in 1 week triggers provider notification in HF patients. 4 lbs in 2 days = approximately 2 L fluid retention. This could indicate worsening HF, medication non-adherence, dietary sodium excess, or progression of disease. Early intervention prevents hospitalization."
      },
      {
        "q": "A nurse is educating a heart failure patient about daily weight monitoring before discharge. Which instructions are essential for accurate self-monitoring?",
        "opts": [
          "Weigh yourself every morning after voiding, before eating, wearing similar clothing, on the same scale — record and report gains exceeding thresholds",
          "Weigh yourself at different times throughout the day and average the readings for the most accurate daily weight",
          "Weigh yourself only when you feel short of breath or notice increased swelling in your feet and ankles",
          "Weigh yourself weekly at your physician's office using their calibrated medical-grade scale for the most reliable measurement"
        ],
        "correct": 0,
        "cat": "Patient Education",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Consistent technique ensures meaningful comparisons: same time (morning), after voiding, before eating/drinking, similar clothing, same scale. Record daily. Report >2 lb/day or >5 lb/week gain to the provider. This simple self-monitoring prevents ~50% of HF readmissions when followed consistently."
      }
    ],
    "bridge_check": [
      {
        "q": "A patient on both furosemide and aminoglycosides (gentamicin) for a severe infection. Why is this combination particularly concerning from a monitoring perspective?",
        "opts": [
          "Both furosemide and aminoglycosides are independently ototoxic — the combination significantly increases permanent hearing loss risk",
          "Both drugs are hepatically metabolized and the combined hepatotoxicity risk is the primary clinical concern",
          "The combination causes severe hyperkalemia by blocking potassium secretion at two different nephron segments simultaneously",
          "Furosemide blocks aminoglycoside renal elimination — blood levels rise to supratherapeutic and nephrotoxic concentrations"
        ],
        "correct": 0,
        "cat": "Bridge M2→M7",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Furosemide: ototoxicity via strial cell damage. Aminoglycosides: ototoxicity via cochlear hair cell destruction. The combination is synergistically ototoxic — permanent high-frequency hearing loss can occur."
      },
      {
        "q": "A patient on IV furosemide for heart failure develops an infection requiring IV vancomycin. What renal monitoring bridge concept connects these two drugs?",
        "opts": [
          "Both drugs are hepatotoxic and require liver function test monitoring during concurrent administration therapy",
          "Furosemide-induced volume depletion reduces renal perfusion, potentially worsening vancomycin nephrotoxicity and impairing drug clearance",
          "Vancomycin inhibits furosemide's diuretic effect by blocking the Na-K-2Cl cotransporter at the loop of Henle",
          "Furosemide displaces vancomycin from protein binding sites, increasing the free fraction and risk of toxicity"
        ],
        "correct": 1,
        "cat": "Bridge M2→M7",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Vancomycin is renally cleared and nephrotoxic. Furosemide-induced volume depletion → reduced renal perfusion → decreased vancomycin clearance → accumulation → further nephrotoxicity. This dangerous cycle requires careful fluid balance management, vancomycin AUC/MIC monitoring, and renal function tracking."
      },
      {
        "q": "A patient is receiving IV furosemide for pulmonary edema and IV tobramycin for hospital-acquired pneumonia. What TWO organ toxicities must the nurse monitor for with this drug combination?",
        "opts": [
          "Hepatotoxicity and cardiotoxicity are the primary concerns with combined loop diuretic and aminoglycoside therapy",
          "Neurotoxicity and dermatologic toxicity are the most clinically significant adverse effects of this drug combination",
          "Ototoxicity and nephrotoxicity — both drugs independently cause each of these toxicities and the risks are additive to synergistic",
          "Pulmonary toxicity and hematologic toxicity require monitoring because both drugs suppress bone marrow function"
        ],
        "correct": 2,
        "cat": "Bridge M2→M7",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Both furosemide and aminoglycosides cause ototoxicity (different mechanisms, synergistic effect) AND nephrotoxicity. Loop diuretics can worsen aminoglycoside nephrotoxicity by causing volume depletion. Monitor: tinnitus/hearing changes, BUN/Cr, aminoglycoside levels, urine output, and electrolytes."
      },
      {
        "q": "Metformin is held when a patient with diabetes is admitted with acute heart failure and requires IV furosemide. Why is metformin being held in this clinical context?",
        "opts": [
          "Furosemide reduces metformin gastrointestinal absorption by altering gut motility and intestinal blood flow patterns",
          "Metformin reduces the diuretic effectiveness of furosemide by blocking its action at the Na-K-2Cl cotransporter",
          "The two drugs are renally cleared and compete for the same tubular secretion mechanism, causing mutual accumulation",
          "Acute illness with hemodynamic instability and reduced renal perfusion raises lactic acidosis risk from metformin accumulation"
        ],
        "correct": 3,
        "cat": "Bridge M2→M5",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Metformin's BBW is lactic acidosis in tissue hypoxia or impaired renal clearance. Acute HF reduces cardiac output → tissue hypoperfusion → lactic acid accumulation + AKI risk = metformin must be held."
      },
      {
        "q": "A diabetic patient on metformin is scheduled for a CT scan with IV contrast dye. Metformin is held 48 hours before and after the procedure. What is the renal pharmacology rationale?",
        "opts": [
          "IV contrast can cause contrast-induced nephropathy — reduced renal function impairs metformin clearance, raising lactic acidosis risk",
          "IV contrast directly reacts with metformin in the bloodstream, forming a toxic compound that damages renal tubular cells",
          "Metformin interferes with the quality of contrast-enhanced imaging by altering tissue density measurements artificially",
          "IV contrast displaces metformin from albumin binding sites, causing a sudden spike in free drug levels and acute toxicity"
        ],
        "correct": 0,
        "cat": "Bridge M2→M5",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "IV contrast can cause contrast-induced nephropathy (CIN). If renal function declines, metformin cannot be adequately cleared → accumulation → lactic acidosis. Metformin is held before and after contrast, then resumed only after confirming renal function has returned to baseline (typically check SCr at 48 hours)."
      },
      {
        "q": "A patient with diabetes is admitted with septic shock requiring vasopressors. They take metformin 1000 mg BID at home. Should metformin be continued during the acute illness?",
        "opts": [
          "Yes — metformin should be continued at the home dose to maintain glucose control during the physiologic stress of sepsis",
          "No — septic shock causes tissue hypoperfusion and potential AKI, both of which dramatically increase metformin-associated lactic acidosis risk",
          "Yes — but reduce the dose by 50% because vasopressors will improve renal perfusion and maintain some metformin clearance",
          "No — but only because the patient cannot take oral medications in shock, not because of any pharmacologic safety concern"
        ],
        "correct": 1,
        "cat": "Bridge M2→M5",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Septic shock = tissue hypoperfusion + potential organ dysfunction. Metformin inhibits hepatic lactate metabolism and is renally cleared. In shock: (1) tissues produce excess lactate, (2) the liver cannot clear lactate (impaired by metformin), (3) kidneys cannot clear metformin. This triple hit makes lactic acidosis nearly inevitable. Hold metformin until hemodynamically stable with confirmed renal function."
      },
      {
        "q": "SGLT-2 inhibitors (empagliflozin) have a dual benefit in patients with both heart failure and CKD. How do the cardiovascular and renal modules connect for this drug?",
        "opts": [
          "SGLT-2 inhibitors completely replace the need for loop diuretics in all HF patients with concurrent CKD",
          "SGLT-2 inhibitors cause sodium retention which benefits both heart failure and CKD through volume expansion mechanisms",
          "SGLT-2 inhibitors reduce intraglomerular pressure (renoprotective) AND cause osmotic glucosuria that reduces preload (HF benefit)",
          "SGLT-2 inhibitors are safe to use without restrictions in all CKD stages regardless of the degree of renal impairment"
        ],
        "correct": 2,
        "cat": "Bridge M1→M2→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "SGLT-2 inhibitors are approved for HFrEF and CKD independent of diabetes. They reduce glucose and sodium reabsorption → osmotic diuresis → preload reduction (HF benefit) and reduce intraglomerular pressure (renal benefit)."
      },
      {
        "q": "A patient with HFrEF, CKD Stage 3, and type 2 diabetes is started on dapagliflozin. What urologic adverse effect must the nurse educate the patient about?",
        "opts": [
          "Dapagliflozin causes urinary retention by relaxing the detrusor muscle of the bladder, requiring catheterization",
          "Dapagliflozin causes hematuria as a direct toxic effect on the bladder epithelium requiring cystoscopy evaluation",
          "Dapagliflozin causes nephrolithiasis by increasing urinary calcium and oxalate excretion through the proximal tubule",
          "Increased glucose in the urine creates a favorable environment for bacterial and fungal growth — genital mycotic infections and UTIs are more common"
        ],
        "correct": 3,
        "cat": "Bridge M1→M2→M5",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "SGLT-2 inhibitors cause glucosuria by design — glucose-rich urine promotes microbial growth. Genital mycotic infections (candidiasis) occur in 5-10% of patients. UTI risk is also increased. Teach patients: maintain perineal hygiene, report symptoms early (itching, discharge, dysuria). This is a trade-off for the significant CV and renal benefits."
      },
      {
        "q": "A patient with type 2 diabetes on empagliflozin is admitted with a glucose of 180 mg/dL but has a metabolic acidosis with elevated ketones. What is this condition and why is it atypical?",
        "opts": [
          "This is euglycemic DKA — SGLT-2 inhibitors can cause ketoacidosis at near-normal glucose levels by shifting metabolism toward fat oxidation",
          "This is typical diabetic ketoacidosis (DKA) and should be managed with standard insulin and fluid resuscitation protocols",
          "This is lactic acidosis from empagliflozin, which inhibits mitochondrial function similarly to metformin's mechanism of action",
          "This is a laboratory error because ketoacidosis cannot occur with glucose levels below 250 mg/dL in any clinical scenario"
        ],
        "correct": 0,
        "cat": "Bridge M1→M2→M5",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Euglycemic DKA is a unique SGLT-2 inhibitor risk. The drug causes glucosuria → lower blood glucose → less insulin secretion → increased lipolysis and ketogenesis. The glucose may be only mildly elevated (under 250), making the diagnosis easy to miss. Risk increases with illness, surgery, fasting, or reduced insulin doses. Hold SGLT-2 inhibitors during acute illness or perioperatively."
      },
      {
        "q": "After 2 weeks of vancomycin therapy, a patient develops rising creatinine and trough levels above target. Why is this a bridge concept connecting your renal and infectious disease modules?",
        "opts": [
          "Vancomycin causes GFR reduction only through a direct allergic mechanism that is unrelated to drug level accumulation",
          "Vancomycin is renally cleared and nephrotoxic — as renal function declines, drug accumulates, which further damages kidneys in a vicious cycle",
          "Renal impairment has no measurable effect on vancomycin levels because the drug is primarily eliminated through hepatic metabolism",
          "High vancomycin trough levels improve therapeutic efficacy and should be maintained despite the creatinine elevation observed"
        ],
        "correct": 1,
        "cat": "Bridge M2→M7",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Vancomycin is renally eliminated AND nephrotoxic. Rising SCr → less clearance → higher troughs → more nephrotoxicity. AUC/MIC-guided dosing and dose adjustment based on renal function are essential."
      },
      {
        "q": "A patient on vancomycin and piperacillin-tazobactam (Zosyn) develops AKI with creatinine rising from 0.9 to 2.1 mg/dL. What is known about this specific antibiotic combination?",
        "opts": [
          "Piperacillin-tazobactam is nephroprotective and reduces vancomycin nephrotoxicity compared to using vancomycin alone",
          "The AKI is caused by piperacillin-tazobactam alone and vancomycin is not contributing to the renal injury in this scenario",
          "The vancomycin-piperacillin/tazobactam combination has a higher nephrotoxicity rate than vancomycin with other beta-lactams — close renal monitoring is essential",
          "The creatinine rise is an artifact — piperacillin interferes with the creatinine assay, causing falsely elevated readings"
        ],
        "correct": 2,
        "cat": "Bridge M2→M7",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Multiple studies show that vancomycin + piperacillin-tazobactam has a significantly higher AKI rate (approximately 2-3x) compared to vancomycin + cefepime or vancomycin + meropenem. While some debate exists about whether piperacillin interferes with creatinine secretion (causing artifactual rises), the clinical practice recommendation is to monitor renal function closely and consider alternative beta-lactams."
      },
      {
        "q": "A patient with CKD Stage 4 (CrCl 20 mL/min) needs vancomycin for an MRSA infection. How should vancomycin dosing be adjusted?",
        "opts": [
          "Use the standard dose and frequency because vancomycin's renal clearance is not clinically significant at any GFR level",
          "Vancomycin is absolutely contraindicated in CKD Stage 4 and an alternative antibiotic must be selected for this patient",
          "Increase the dose to overcome the poor tissue penetration that occurs in patients with advanced chronic kidney disease",
          "Extend the dosing interval significantly and use AUC/MIC-guided monitoring — the drug's renal clearance is severely reduced in CKD Stage 4"
        ],
        "correct": 3,
        "cat": "Bridge M2→M7",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "At CrCl 20, vancomycin clearance is dramatically reduced. The loading dose remains the same (based on weight), but maintenance doses are given at extended intervals (e.g., every 48-96 hours instead of q8-12h). AUC/MIC-guided dosing with frequent level monitoring is essential to maintain efficacy while minimizing nephrotoxicity."
      },
      {
        "q": "A patient takes spironolactone for HFrEF. They also take lisinopril and are now started on trimethoprim-sulfamethoxazole (Bactrim) for a UTI. What hyperkalemia risk must you flag?",
        "opts": [
          "Trimethoprim blocks potassium secretion in the distal nephron — combined with an ACE inhibitor and spironolactone, three K+-retaining mechanisms stack",
          "No additional risk exists — antibiotics do not affect potassium homeostasis or renal potassium handling in any way",
          "The combination causes hypokalemia rather than hyperkalemia — monitor potassium levels and replace as clinically needed",
          "Sulfamethoxazole raises potassium through a hepatic mechanism that is independent of renal potassium handling pathways"
        ],
        "correct": 0,
        "cat": "Bridge M2→M7",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Three independent K+-retaining mechanisms: lisinopril (reduced aldosterone), spironolactone (aldosterone receptor blockade), trimethoprim (ENaC blockade). Severe hyperkalemia risk."
      },
      {
        "q": "A patient on an ACE inhibitor and spironolactone is started on an NSAID for arthritis. What effect does the NSAID have on potassium, and why does this bridge the renal and cardiovascular modules?",
        "opts": [
          "NSAIDs cause hypokalemia by enhancing renal potassium secretion through prostaglandin-mediated mechanisms in the collecting duct",
          "NSAIDs reduce renal prostaglandin synthesis, decreasing GFR and potassium excretion — adding a third K+-retaining mechanism to the existing two",
          "NSAIDs have no effect on potassium homeostasis and the interaction concern is limited to sodium and water retention only",
          "NSAIDs increase aldosterone levels, which paradoxically promotes potassium excretion and actually reduces hyperkalemia risk"
        ],
        "correct": 1,
        "cat": "Bridge M2→M7",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "NSAIDs inhibit prostaglandin synthesis → reduced renal blood flow → decreased GFR → decreased potassium excretion. Combined with ACE-inhibitor (less aldosterone) and spironolactone (aldosterone blockade), this is the classic 'triple whammy' for hyperkalemia AND acute kidney injury. Avoid this combination whenever possible."
      },
      {
        "q": "A heart failure patient on lisinopril, spironolactone, and furosemide develops an acute illness requiring IV fluids. The covering physician orders normal saline with 20 mEq KCl per liter. What concern must the nurse raise?",
        "opts": [
          "Normal saline is contraindicated in heart failure patients because the sodium load will worsen fluid overload immediately",
          "The KCl concentration of 20 mEq/L is too high for peripheral IV infusion and will cause immediate venous irritation and pain",
          "The KCl supplementation may be unnecessary and dangerous — this patient is on two K+-retaining drugs and may not need additional potassium",
          "IV fluid administration in heart failure always requires furosemide to be infused simultaneously to prevent volume overload"
        ],
        "correct": 2,
        "cat": "Bridge M2→M7",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Patients on ACE inhibitors + spironolactone are already at high risk for hyperkalemia. Adding KCl to IV fluids without checking the current K+ level could push an already elevated potassium to dangerous levels. Always check the most recent K+ before supplementing, especially in patients on multiple K+-retaining medications."
      }
    ]
  },
  "M3": {
    "rapid_fire": [
      {
        "q": "A patient asks why they have two different inhalers — albuterol and fluticasone. What is the most accurate explanation?",
        "opts": [
          "Albuterol is a rescue bronchodilator for acute symptoms. Fluticasone is a controller that prevents inflammation over time. Both are needed for persistent asthma.",
          "Both do the same thing — use whichever is more convenient",
          "Fluticasone is the stronger version of albuterol",
          "Albuterol prevents attacks; fluticasone treats them when they happen"
        ],
        "correct": 0,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "SABA (albuterol) = rescue — fast onset (5 min), short duration (4-6 hrs). ICS (fluticasone) = controller — reduces airway inflammation over days to weeks. Both are needed in persistent asthma."
      },
      {
        "q": "A parent reports their child only uses fluticasone during asthma flares and skips it when feeling well. What is the priority teaching point?",
        "opts": [
          "Fluticasone works best when used intermittently during symptom episodes",
          "Controller inhalers must be used daily regardless of symptoms to suppress chronic airway inflammation",
          "Skipping doses of fluticasone saves it for when it is truly needed",
          "The child should double the dose on days they have symptoms instead"
        ],
        "correct": 1,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "ICS controllers work by suppressing chronic airway inflammation. Stopping when asymptomatic allows inflammation to return and increases exacerbation risk. Consistent daily use is essential."
      },
      {
        "q": "An ED patient with acute bronchospasm asks if they can use their fluticasone inhaler instead of albuterol because they forgot their rescue inhaler. What is the correct response?",
        "opts": [
          "Fluticasone can substitute for albuterol in mild exacerbations if used at double dose",
          "Using fluticasone during an acute attack will worsen bronchospasm through rebound inflammation",
          "Fluticasone has no bronchodilating effect and cannot relieve acute bronchospasm — a SABA is required",
          "Fluticasone is equally effective as albuterol when administered via nebulizer"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "ICS modulate gene transcription to reduce inflammation over days to weeks. They have zero direct bronchodilating action. Only a SABA provides the immediate smooth-muscle relaxation needed in acute bronchospasm."
      },
      {
        "q": "A patient uses their albuterol MDI without a spacer. What is the consequence and nursing recommendation?",
        "opts": [
          "No difference — spacers are optional devices",
          "Spacers are only for children — adults do not need them",
          "Spacers reduce the dose — avoid them for better effect",
          "Without a spacer, timing of actuation and inhalation is critical — most patients do it incorrectly and only 10-20% of drug reaches the lungs. A valved holding chamber (spacer) significantly improves lung deposition."
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "MDI technique requires precise coordination. Spacers create a holding chamber, improving lung deposition from ~10-20% to 30-40%. Recommended for all patients, especially those with impaired coordination."
      },
      {
        "q": "A nurse observes a COPD patient actuating their MDI, pausing for 5 seconds, then inhaling rapidly. Which error is most significant?",
        "opts": [
          "The delay between actuation and inhalation allows drug to settle out of suspension; inhalation should be slow and deep beginning at the moment of actuation",
          "The patient should have exhaled through the MDI first to prime it",
          "Rapid inhalation is correct because it creates more turbulence for better deposition",
          "The pause has no effect on drug delivery as long as inhalation occurs within 10 seconds"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "MDI particles settle quickly after actuation. A delay means most drug deposits in the spacer or oropharynx. Inhalation should be slow and deep, starting simultaneously with actuation or using a spacer to remove the timing requirement."
      },
      {
        "q": "An elderly patient with arthritis cannot generate enough hand strength to actuate an MDI. Which alternative device is most appropriate?",
        "opts": [
          "A dry powder inhaler requiring forceful inhalation to disperse the drug",
          "A breath-actuated MDI or nebulizer, which eliminates the need for manual actuation coordination",
          "A larger MDI canister that delivers more drug per actuation attempt",
          "An MDI with the mouthpiece removed so the patient can inhale passively"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Breath-actuated MDIs fire automatically on inhalation, removing the hand-strength requirement. Nebulizers deliver aerosolized drug via passive breathing. Both are appropriate alternatives for patients with limited dexterity."
      },
      {
        "q": "Montelukast carries a Black Box Warning issued in 2020. What is the specific concern?",
        "opts": [
          "Risk of fatal asthma attacks if used without an ICS",
          "Severe anaphylaxis on first dose",
          "Serious neuropsychiatric events including suicidal ideation, depression, hallucinations, nightmares, aggression — particularly in children and adolescents",
          "Irreversible airway remodeling with long-term use"
        ],
        "correct": 2,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "FDA added a BBW in 2020 for montelukast due to post-marketing reports of serious neuropsychiatric events: suicidal thinking, depression, anxiety, aggression, hallucinations. Benefits may not outweigh risks for mild indications like allergic rhinitis."
      },
      {
        "q": "A 10-year-old on montelukast for mild persistent asthma is brought in by a parent reporting new-onset nightmares and aggressive behavior at school. What is the nurse's priority action?",
        "opts": [
          "Reassure the parent that behavioral changes are typical in this age group and unrelated to medication",
          "Add a low-dose benzodiazepine at bedtime to manage the nightmares",
          "Recommend reducing the montelukast dose by half to see if symptoms improve",
          "Notify the provider immediately — these symptoms match the BBW for neuropsychiatric events and warrant drug discontinuation evaluation"
        ],
        "correct": 3,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Nightmares and aggression in a child on montelukast are classic BBW neuropsychiatric events. The nurse must notify the provider urgently. Montelukast should be reconsidered, and an alternative controller (ICS, LABA/ICS) substituted."
      },
      {
        "q": "A provider prescribes montelukast as first-line therapy for a patient with mild seasonal allergic rhinitis and no asthma. What concern should the nurse raise?",
        "opts": [
          "The FDA recommends against using montelukast for allergic rhinitis given the BBW for neuropsychiatric events — risks may outweigh benefits when safer alternatives exist",
          "Montelukast is only FDA-approved for asthma, not allergic rhinitis",
          "Montelukast must be combined with an ICS for allergic rhinitis to be effective",
          "Allergic rhinitis requires at least two leukotriene modifiers for adequate symptom control"
        ],
        "correct": 0,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "FDA guidance following the 2020 BBW recommends reserving montelukast for patients whose asthma is not adequately controlled by other therapies. For allergic rhinitis alone, intranasal corticosteroids and antihistamines are safer first-line options."
      },
      {
        "q": "A COPD patient is started on tiotropium (Spiriva). They are also taking oxybutynin for overactive bladder. What drug interaction must you address?",
        "opts": [
          "No interaction — different drug classes and indications",
          "Both are anticholinergic — additive effects include urinary retention, constipation, confusion (especially in elderly), and elevated intraocular pressure",
          "Tiotropium reduces oxybutynin effectiveness",
          "The combination requires INR monitoring"
        ],
        "correct": 1,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Tiotropium (inhaled anticholinergic) plus oxybutynin (oral anticholinergic) = additive anticholinergic burden. Risks include urinary retention, constipation, dry mouth, confusion, and narrow-angle glaucoma worsening, especially in elderly patients."
      },
      {
        "q": "An 82-year-old COPD patient on tiotropium and ipratropium presents with acute confusion, dry mouth, and tachycardia. Which assessment finding is most consistent with the medication profile?",
        "opts": [
          "Serotonin syndrome from inadvertent SSRI interaction with the inhalers",
          "Sympathomimetic crisis from excessive beta-2 agonist use",
          "Anticholinergic toxicity from the additive muscarinic blockade of two inhaled anticholinergics",
          "Theophylline toxicity causing CNS excitation and cardiac irritability"
        ],
        "correct": 2,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Tiotropium (LAMA) and ipratropium (SAMA) are both muscarinic antagonists. Using both simultaneously doubles anticholinergic exposure. The classic toxidrome — confusion, dry mouth, tachycardia, urinary retention — is predictable and preventable. Duplicate anticholinergic inhalers should be avoided."
      },
      {
        "q": "A nurse is reviewing the medication list of a 75-year-old patient on tiotropium, diphenhydramine, and amitriptyline. Which nursing action is most appropriate?",
        "opts": [
          "Continue all medications as prescribed since each addresses a different condition",
          "Hold the tiotropium since inhaled medications contribute least to systemic anticholinergic burden",
          "Discontinue the diphenhydramine independently since it is available over the counter",
          "Notify the provider about the high anticholinergic burden — three anticholinergic agents together significantly increase risk of delirium, falls, and urinary retention in older adults"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "The Beers Criteria highlights high anticholinergic burden in older adults. Three concurrent anticholinergic medications substantially increase risk of delirium, falls, constipation, and urinary retention. The nurse should notify the provider for medication reconciliation."
      },
      {
        "q": "A patient with asthma is prescribed propranolol for migraines. What is the critical concern?",
        "opts": [
          "Propranolol is a non-selective beta-blocker — beta-2 blockade in bronchial tissue can cause bronchoconstriction, directly opposing albuterol's rescue effect and potentially triggering a severe asthma attack",
          "Propranolol causes excessive bronchodilation when combined with inhalers",
          "Propranolol has no effect on airways",
          "Propranolol enhances fluticasone effectiveness"
        ],
        "correct": 0,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Non-selective beta-blockers (propranolol, carvedilol, labetalol) block beta-2 receptors in bronchial smooth muscle causing bronchoconstriction. In asthma patients, this can trigger severe, life-threatening bronchospasm. Even timolol eye drops have caused fatal bronchospasm in asthma."
      },
      {
        "q": "A patient with moderate persistent asthma is prescribed timolol eye drops for glaucoma. The patient states, 'Eye drops can't affect my lungs.' What is the correct nursing response?",
        "opts": [
          "The patient is correct — topical ophthalmic medications do not reach systemic circulation",
          "Timolol eye drops are absorbed systemically through nasolacrimal drainage and can cause beta-2 blockade in the lungs, potentially triggering severe bronchospasm in asthma patients",
          "Timolol eye drops only affect cardiac beta-1 receptors, not pulmonary beta-2 receptors",
          "Ophthalmic beta-blockers are safe in asthma because the dose is too small to have systemic effects"
        ],
        "correct": 1,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Timolol eye drops drain through the nasolacrimal duct into the nasal mucosa, reaching systemic circulation without hepatic first-pass metabolism. Enough systemic beta-blockade can occur to trigger fatal bronchospasm in asthma patients. Punctal occlusion can reduce but not eliminate systemic absorption."
      },
      {
        "q": "An asthmatic patient requires a beta-blocker for rate control in new-onset atrial fibrillation. Which beta-blocker selection is safest?",
        "opts": [
          "Propranolol, because its short half-life allows rapid clearance if bronchospasm occurs",
          "Carvedilol, because its alpha-blocking properties offset bronchoconstrictive effects",
          "Metoprolol at the lowest effective dose — cardioselective beta-1 blockers have less beta-2 airway blockade, though respiratory monitoring is still required",
          "Labetalol, because combined alpha and beta blockade provides balanced hemodynamic effects"
        ],
        "correct": 2,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Cardioselective beta-1 blockers (metoprolol, atenolol, bisoprolol) have less beta-2 airway effect than non-selective agents. They are preferred when beta-blockade is required in asthma. Selectivity is dose-dependent — use the lowest effective dose and monitor peak flow and respiratory status closely."
      },
      {
        "q": "Oral prednisone is prescribed for an acute asthma exacerbation. The patient asks if they can stop when they feel better in 2 days. What is your response?",
        "opts": [
          "Yes — stopping early is safer and reduces side effects",
          "Stop when peak flow returns to 80% of personal best",
          "The patient can self-adjust based on symptoms",
          "No — the full prescribed course must be completed to prevent relapse. Short courses (5-7 days) do not require tapering, but must be completed."
        ],
        "correct": 3,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Systemic corticosteroids for acute asthma exacerbation require the full course. Short courses (5-7 days) typically do not require tapering. Longer courses (>2 weeks) do require tapering to allow adrenal axis recovery."
      },
      {
        "q": "A patient has been on daily prednisone 30 mg for 3 weeks for a severe asthma exacerbation. The provider writes to discontinue the prednisone abruptly. What is the nurse's concern?",
        "opts": [
          "Supraphysiologic corticosteroid use for more than 2 weeks suppresses the HPA axis — abrupt discontinuation risks adrenal crisis with hypotension, fatigue, and cardiovascular collapse",
          "Three weeks is too short to cause adrenal suppression, so abrupt discontinuation is safe",
          "Prednisone at 30 mg is a low dose that does not require tapering regardless of duration",
          "The nurse should add an inhaled corticosteroid before stopping prednisone to bridge the transition"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Courses of systemic corticosteroids exceeding 2-3 weeks at supraphysiologic doses suppress the HPA axis. The adrenal glands need gradual dose reduction to resume cortisol production. Abrupt discontinuation can cause adrenal crisis — a medical emergency."
      },
      {
        "q": "A hospitalized asthma patient received IV methylprednisolone for 48 hours. The provider transitions to a 5-day oral prednisone burst. The patient asks if tapering is necessary after this short course. What is the correct response?",
        "opts": [
          "Any steroid course, regardless of length, requires at least a 2-week taper to prevent rebound inflammation",
          "A 5-day oral burst following a brief IV course does not require tapering because the total duration is too short for significant HPA axis suppression",
          "Tapering is only necessary if the patient had symptoms of adrenal suppression during treatment",
          "The oral burst should be extended to 14 days with a taper for maximal anti-inflammatory benefit"
        ],
        "correct": 1,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Short systemic corticosteroid courses (5-7 days) do not cause clinically significant HPA axis suppression. Tapering is unnecessary and the full course should be completed as prescribed. Tapering becomes necessary when total systemic steroid exposure exceeds approximately 2-3 weeks."
      },
      {
        "q": "What is the primary reason fluticasone (an ICS) must NOT be used as a rescue medication during an acute asthma attack?",
        "opts": [
          "It causes paradoxical bronchoconstriction in acute attacks",
          "Fluticasone is too expensive for acute use",
          "ICS have no bronchodilating effect — they suppress inflammation over days to weeks. In an acute attack, bronchodilation (SABA) is needed immediately.",
          "The dose required for rescue therapy causes adrenal suppression"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "Fluticasone modifies gene transcription to reduce inflammatory mediators — this takes days to weeks. It has no direct bronchodilating effect. Only a SABA provides immediate smooth muscle relaxation in an acute attack."
      },
      {
        "q": "A nursing student asks why ICS take so long to work compared to albuterol. Which pharmacologic explanation is most accurate?",
        "opts": [
          "ICS must accumulate in lung tissue over weeks before reaching therapeutic concentrations",
          "ICS require hepatic activation before becoming pharmacologically active in the lungs",
          "ICS are poorly absorbed through the airway epithelium and need repeated dosing to penetrate",
          "ICS bind intracellular glucocorticoid receptors and alter gene transcription — this protein-synthesis-dependent mechanism requires days to weeks, whereas albuterol directly stimulates cell-surface beta-2 receptors within minutes"
        ],
        "correct": 3,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "ICS work through intracellular genomic mechanisms — they bind nuclear receptors, alter mRNA transcription, and reduce inflammatory protein synthesis. This takes days to weeks. Beta-2 agonists bind cell-surface G-protein-coupled receptors and activate adenylyl cyclase within seconds to minutes."
      },
      {
        "q": "A patient asks, 'If my controller inhaler prevents inflammation, why do I still need a rescue inhaler?' Which response demonstrates the best understanding of asthma pharmacotherapy?",
        "opts": [
          "Even with optimal controller therapy, breakthrough bronchospasm can occur from triggers — a SABA provides rapid smooth muscle relaxation that controllers cannot deliver",
          "Controller inhalers eventually eliminate the need for rescue inhalers once asthma is fully controlled",
          "Rescue inhalers are only needed because controller inhalers take 24 hours to start working each day",
          "Controller inhalers prevent inflammation while rescue inhalers treat the underlying allergic component"
        ],
        "correct": 0,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Controller therapy reduces but does not eliminate breakthrough bronchospasm from environmental triggers, exercise, or viral illness. A SABA provides acute bronchodilation within 5 minutes through direct beta-2 agonism — a mechanism ICS cannot replicate."
      },
      {
        "q": "A patient using a fluticasone/salmeterol combination inhaler (Advair) develops white patches in the oropharynx with a sore throat. What is the likely cause and treatment?",
        "opts": [
          "This is a side effect of salmeterol — no treatment needed",
          "Oral candidiasis (thrush) from inhaled corticosteroid deposition in the mouth. Treat with an antifungal. Reinforce mouth-rinsing technique after every dose.",
          "Throat irritation from the dry powder inhaler — switch to an MDI",
          "A normal immune response to the medication — observe only"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Inhaled corticosteroids deposited in the oropharynx suppress local immunity, allowing Candida overgrowth (thrush). Treatment: antifungal (nystatin or fluconazole). Prevention: rinse mouth with water and spit after every ICS dose. A spacer also reduces oropharyngeal deposition."
      },
      {
        "q": "A nurse is educating a patient newly started on beclomethasone (QVAR) MDI. Which instruction is most important for preventing oropharyngeal complications?",
        "opts": [
          "Swallow a glass of water after each dose to wash the medication into the stomach",
          "Gargle with an antiseptic mouthwash before each dose to prevent infection",
          "Rinse the mouth thoroughly with water and spit after each dose to remove deposited corticosteroid from the oropharynx",
          "Brush the teeth immediately after each dose to remove medication residue"
        ],
        "correct": 2,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Rinsing and spitting removes ICS particles deposited in the mouth and throat, reducing the risk of oropharyngeal candidiasis and dysphonia. Swallowing the rinse water does not help — the goal is to remove the drug from mucosal surfaces. Using a spacer with the MDI further reduces oropharyngeal deposition."
      },
      {
        "q": "A patient on high-dose fluticasone reports progressive hoarseness over the past month. What is the most likely cause?",
        "opts": [
          "Vocal cord paralysis from ICS-induced nerve damage requiring urgent ENT referral",
          "Bacterial laryngitis requiring a course of oral antibiotics before continuing the ICS",
          "Allergic laryngeal edema indicating anaphylaxis to the inhaler propellant",
          "Dysphonia from local corticosteroid deposition on the vocal cords causing mucosal irritation and myopathy of the laryngeal muscles"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Dysphonia (hoarseness) from ICS is caused by local corticosteroid deposition on the vocal cords, producing mucosal irritation and steroid myopathy of the laryngeal muscles. Management includes using a spacer, rinsing after use, and potentially reducing ICS dose or switching formulations."
      },
      {
        "q": "Salmeterol (Serevent) is prescribed as the only inhaler for a patient with asthma. Why is this concerning?",
        "opts": [
          "LABAs must never be used as monotherapy in asthma — Black Box Warning for increased asthma-related deaths. Must always be combined with an ICS.",
          "LABA monotherapy is appropriate for mild persistent asthma",
          "Salmeterol causes too many side effects without a spacer",
          "LABA monotherapy is only concerning in children, not adults"
        ],
        "correct": 0,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Analysis",
        "cognitive": "Knowledge",
        "rationale": "The SMART trial showed increased asthma-related deaths with LABA monotherapy. FDA issued a BBW: LABAs must not be used for asthma without a concurrent ICS. Combination inhalers (Advair, Symbicort, Breo) ensure the ICS is always present."
      },
      {
        "q": "A provider orders formoterol (a LABA) added to the regimen of a patient already on low-dose budesonide ICS for persistent asthma. The nurse notes the LABA BBW. Is this order appropriate?",
        "opts": [
          "No — the BBW prohibits LABA use in any asthma patient regardless of concurrent therapy",
          "Yes — the BBW applies to LABA monotherapy only. Adding a LABA to an existing ICS is guideline-recommended step-up therapy for uncontrolled persistent asthma.",
          "Only if the LABA and ICS are delivered from the same combination inhaler device",
          "The LABA should be used only as needed for rescue, not scheduled, when combined with an ICS"
        ],
        "correct": 1,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "The LABA BBW specifically warns against monotherapy without an ICS. LABA plus ICS combination therapy is guideline-recommended step-up therapy (GINA Step 3-4). Combination inhalers improve adherence, but separate inhalers are acceptable if the patient reliably uses the ICS."
      },
      {
        "q": "A patient with COPD is prescribed salmeterol as monotherapy. The nurse recalls the LABA BBW for asthma. Does this BBW apply to COPD patients?",
        "opts": [
          "Yes — the LABA BBW applies equally to asthma and COPD, prohibiting monotherapy in both",
          "The BBW only applies if the COPD patient has a concurrent asthma diagnosis",
          "No — the LABA BBW is specific to asthma. LABA monotherapy is an accepted treatment option in COPD without the same mortality concern.",
          "LABA monotherapy in COPD requires concurrent oral corticosteroids instead of an ICS"
        ],
        "correct": 2,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "The LABA BBW applies specifically to asthma, not COPD. In COPD, LABA monotherapy (salmeterol, formoterol, indacaterol) is an accepted treatment per GOLD guidelines. The pathophysiology of increased asthma deaths with LABA monotherapy is not replicated in COPD trials."
      },
      {
        "q": "A patient is transferred from the ICU after an acute severe asthma exacerbation. They received IV magnesium sulfate during the attack. What was the mechanism of this treatment?",
        "opts": [
          "Magnesium reduces histamine release from mast cells",
          "Magnesium inhibits leukotriene synthesis",
          "Magnesium increases steroid effectiveness in the lungs",
          "Magnesium acts as a calcium channel blocker causing bronchodilation by relaxing smooth muscle"
        ],
        "correct": 3,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "Magnesium sulfate causes bronchodilation through calcium channel antagonism in bronchial smooth muscle — muscle contraction requires intracellular calcium. IV magnesium (1-2 g) is an adjunct in severe exacerbations not responding to SABA and systemic steroids."
      },
      {
        "q": "During a severe asthma exacerbation, IV magnesium sulfate is ordered after albuterol and systemic steroids have failed to adequately relieve bronchospasm. What monitoring is most critical during the infusion?",
        "opts": [
          "Blood pressure and deep tendon reflexes — magnesium can cause hypotension and neuromuscular depression at supratherapeutic levels",
          "Hepatic function panels every 2 hours during the magnesium infusion",
          "Urine output only — magnesium is exclusively cleared by the kidneys",
          "Blood glucose — magnesium sulfate causes significant hyperglycemia"
        ],
        "correct": 0,
        "cat": "Monitoring",
        "nclex": "PI-PharmaParenteral",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "IV magnesium can cause hypotension through vasodilation and neuromuscular depression. Monitor blood pressure, deep tendon reflexes (loss of patellar reflex = early sign of toxicity), respiratory rate, and cardiac rhythm. Calcium gluconate is the reversal agent for magnesium toxicity."
      },
      {
        "q": "A nurse questions why IV magnesium sulfate was ordered for a patient with status asthmaticus who has a normal serum magnesium level. What is the correct rationale?",
        "opts": [
          "The order is incorrect — IV magnesium should only be given when serum levels are low",
          "IV magnesium for acute bronchospasm is used at pharmacologic doses for its smooth muscle relaxation effect, independent of the patient's baseline magnesium level",
          "Serum magnesium levels are unreliable, so supplementation is given empirically in all ICU patients",
          "IV magnesium is only used in asthma to prevent cardiac arrhythmias from high-dose albuterol"
        ],
        "correct": 1,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Therapeutic IV magnesium for bronchospasm uses pharmacologic doses that exceed normal physiologic levels. The calcium-antagonism mechanism causes bronchial smooth muscle relaxation regardless of the patient's baseline magnesium status. This is distinct from magnesium replacement for hypomagnesemia."
      },
      {
        "q": "When should a patient use their rescue albuterol inhaler in relation to their fluticasone controller inhaler, if both are due at the same time?",
        "opts": [
          "Fluticasone first — get the steroid in before the bronchodilator",
          "Take them simultaneously for synergistic effect",
          "Albuterol first — bronchodilating first opens airways and maximizes subsequent steroid deposition in deeper airways",
          "It does not matter — sequence has no clinical significance"
        ],
        "correct": 2,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Use the SABA first. Albuterol causes bronchodilation within 5 minutes, opening airways so subsequent ICS particles deposit deeper into the respiratory tree. Wait 1-2 minutes between inhalers."
      },
      {
        "q": "A patient with COPD uses both ipratropium (Atrovent) and albuterol via separate MDIs. They ask if the order matters. What is the best guidance?",
        "opts": [
          "Ipratropium should always be used first because anticholinergics take longer to work",
          "The drugs should be taken at least 4 hours apart to avoid pharmacodynamic antagonism",
          "Both should be used simultaneously by holding one in each hand and inhaling from both",
          "Albuterol should be used first to open airways rapidly, allowing subsequent ipratropium to penetrate deeper into the bronchial tree"
        ],
        "correct": 3,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Albuterol's faster onset (5 minutes vs 15-30 minutes for ipratropium) opens airways first, allowing ipratropium better access to muscarinic receptors in deeper airways. However, combination nebulizer solutions (DuoNeb) deliver both simultaneously, which is also acceptable."
      },
      {
        "q": "A patient is prescribed albuterol PRN and twice-daily budesonide/formoterol (Symbicort). The patient asks if they should use albuterol before the Symbicort. What is the correct teaching?",
        "opts": [
          "Symbicort already contains a LABA (formoterol) that provides bronchodilation — use albuterol for rescue only, and Symbicort on its scheduled twice-daily basis",
          "Always use albuterol 15 minutes before Symbicort to ensure airways are maximally open",
          "Use albuterol after Symbicort because the ICS component needs to be deposited first",
          "Never use albuterol on the same day as Symbicort because two beta-2 agonists cause cardiac toxicity"
        ],
        "correct": 0,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Combination inhalers with a LABA (formoterol) already provide bronchodilation. Routine pre-dosing with albuterol is unnecessary. Albuterol remains available PRN for breakthrough symptoms. Using two beta-2 agonists routinely increases tremor and tachycardia risk without clear benefit."
      },
      {
        "q": "A patient with COPD on tiotropium is admitted with acute urinary retention. Which recent medication change is the most likely cause?",
        "opts": [
          "Tiotropium is not anticholinergic and could not cause this",
          "Tiotropium, as a muscarinic antagonist, blocks M3 receptors in the bladder detrusor — urinary retention is a known anticholinergic adverse effect, especially in men with BPH",
          "COPD inhalers cause bladder inflammation leading to retention",
          "This is an unrelated urologic event"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Tiotropium blocks muscarinic receptors. M3 receptors in the bladder detrusor contract to initiate micturition — blockade relaxes the detrusor, causing urinary retention. Risk is highest in men with BPH and in the elderly."
      },
      {
        "q": "A COPD patient on tiotropium presents with sudden severe eye pain, visual halos, and a red eye after inadvertently spraying the Spiriva HandiHaler powder into their eye. What complication has likely occurred?",
        "opts": [
          "Corneal abrasion from the dry powder particles requiring irrigation only",
          "Chemical conjunctivitis from the lactose carrier in the dry powder formulation",
          "Acute angle-closure glaucoma — anticholinergic mydriasis from direct ocular exposure blocked aqueous humor drainage, causing a rapid rise in intraocular pressure",
          "Allergic keratoconjunctivitis from the tiotropium requiring topical antihistamines"
        ],
        "correct": 2,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Anticholinergic medications cause mydriasis (pupil dilation). Direct ocular exposure to tiotropium can dilate the pupil sufficiently to block aqueous humor outflow in susceptible eyes, precipitating acute angle-closure glaucoma. This is an ophthalmologic emergency requiring immediate treatment."
      },
      {
        "q": "An elderly male patient on tiotropium, tamsulosin, and finasteride for concurrent COPD and BPH reports worsening urinary hesitancy. Which medication adjustment should the nurse anticipate?",
        "opts": [
          "Increase tamsulosin dose to overcome the anticholinergic urinary retention effect",
          "Add an additional anticholinergic bladder medication to fully relax the detrusor",
          "Discontinue finasteride because it antagonizes tiotropium's beneficial effects on the prostate",
          "Consider switching tiotropium to an alternative bronchodilator with less anticholinergic bladder effect, such as a LABA, while maintaining the BPH medications"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Tiotropium's anticholinergic effect on the bladder detrusor directly opposes BPH management goals. In a patient with symptomatic BPH despite alpha-blocker therapy, switching to a LABA (salmeterol, formoterol) that provides bronchodilation without anticholinergic bladder effects may resolve the conflict."
      },
      {
        "q": "Oral prednisone is started at a dose of 40 mg daily for 10 days. The patient has type 2 diabetes. What specific monitoring is required?",
        "opts": [
          "Blood glucose monitoring should be increased — systemic corticosteroids cause significant hyperglycemia, often requiring insulin supplementation in diabetic patients",
          "No additional monitoring — prednisone does not affect blood glucose",
          "Monitor for hypoglycemia — prednisone enhances insulin secretion",
          "Only monitor A1C — corticosteroids affect long-term glycemic control only"
        ],
        "correct": 0,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Systemic corticosteroids cause dose-dependent hyperglycemia by increasing hepatic gluconeogenesis and reducing peripheral glucose utilization. In diabetic patients, glucose may rise dramatically — typically peaking in the afternoon with morning dosing. Insulin adjustment is usually needed."
      },
      {
        "q": "A non-diabetic patient receives dexamethasone 8 mg IV daily for 3 days for cerebral edema. Their point-of-care glucose reads 285 mg/dL. The nurse is surprised because the patient has no diabetes history. What is the correct interpretation?",
        "opts": [
          "This glucose level indicates the patient had undiagnosed diabetes before the dexamethasone was started",
          "Steroid-induced hyperglycemia can occur in any patient — dexamethasone is a potent glucocorticoid that causes significant insulin resistance and hepatic gluconeogenesis even in non-diabetic patients",
          "The glucose reading is likely a lab error since non-diabetic patients cannot reach 285 mg/dL",
          "Dexamethasone only affects glucose in patients taking concurrent diabetic medications"
        ],
        "correct": 1,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Steroid-induced hyperglycemia occurs in diabetic and non-diabetic patients. High-potency glucocorticoids like dexamethasone are particularly likely to cause significant glucose elevation. Management includes glucose monitoring at least QID and often insulin coverage. Glucose typically normalizes after steroids are discontinued."
      },
      {
        "q": "A diabetic patient on metformin and glipizide is started on prednisone 60 mg daily for a COPD exacerbation. Their fasting glucose rises from 130 to 340 mg/dL. What pharmacologic adjustment is most appropriate?",
        "opts": [
          "Double the glipizide dose to match the increased insulin resistance from prednisone",
          "Switch metformin to a thiazolidinedione for better insulin-sensitizing coverage",
          "Initiate or increase insulin therapy — oral agents alone are typically insufficient to manage steroid-induced hyperglycemia at high corticosteroid doses",
          "Add an SGLT-2 inhibitor because it provides glucose-independent insulin resistance reduction"
        ],
        "correct": 2,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "High-dose systemic corticosteroids cause insulin resistance that overwhelms oral agent capacity. Insulin is the most effective and titratable option. Basal insulin adjustments and supplemental rapid-acting doses are typically needed. Oral agents alone rarely control steroid-induced hyperglycemia at prednisone doses above 20 mg/day."
      },
      {
        "q": "Which inhaler device requires the patient to generate their own forceful inhalation to break up and disperse the drug?",
        "opts": [
          "MDI (metered-dose inhaler) — propellant drives the drug",
          "Soft-mist inhaler — mechanical pump drives the mist",
          "Nebulizer — compressed air or ultrasound does the work",
          "DPI (dry powder inhaler) — patient's own breath-actuation disperses the powder"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "SECE-SIC",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "DPIs (Spiriva HandiHaler, Advair Diskus) require strong, fast inhalation to create turbulent airflow that disperses drug. No spacer is needed or effective. Patients with very low peak inspiratory flow may need a nebulizer or MDI+spacer."
      },
      {
        "q": "A patient with severe COPD exacerbation has a peak inspiratory flow rate of 20 L/min. The nurse has orders for tiotropium via HandiHaler (DPI). What is the appropriate action?",
        "opts": [
          "Request an alternative delivery method — the patient's inspiratory flow is insufficient to disperse powder from a DPI; a nebulizer or MDI with spacer is needed",
          "Administer the DPI as ordered — peak inspiratory flow does not affect drug delivery from DPIs",
          "Have the patient take two rapid inhalations instead of one to compensate for reduced flow",
          "Crush the DPI capsule and place the powder directly on the tongue for sublingual absorption"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "DPIs require a minimum peak inspiratory flow (typically 30-60 L/min depending on device resistance) to deaggregate the powder. At 20 L/min, the patient cannot generate adequate flow. A nebulizer or MDI with spacer bypasses this requirement by delivering pre-aerosolized drug."
      },
      {
        "q": "A nurse is teaching a patient about their new Respimat soft-mist inhaler. How does this device differ from a traditional MDI?",
        "opts": [
          "The Respimat uses a propellant identical to MDIs but delivers a finer mist",
          "The Respimat uses a spring-powered mechanism to create a slow-moving mist, producing longer aerosol duration that reduces the need for precise inhalation timing",
          "The Respimat requires a spacer just like a traditional MDI for optimal drug delivery",
          "The Respimat is a type of DPI that uses liquid medication instead of dry powder"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "The Respimat soft-mist inhaler uses mechanical energy (spring) rather than propellant to generate a slow-moving aerosol cloud that lasts about 1.5 seconds — 4x longer than an MDI puff. This extended duration reduces coordination requirements and improves lung deposition without a spacer."
      },
      {
        "q": "A patient on omalizumab (Xolair) for severe allergic asthma asks when they will know if it is working. What is the correct response?",
        "opts": [
          "You should feel improvement within 24 hours",
          "No measurable effect — biologics work silently without noticeable benefit",
          "Response typically occurs over 12-16 weeks — it is a biologic that reduces IgE-mediated inflammation progressively",
          "If no improvement after 2 doses, it has failed"
        ],
        "correct": 2,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Omalizumab (anti-IgE monoclonal antibody) reduces free IgE, decreasing mast cell activation. Response is assessed after 12-16 weeks. Requires subcutaneous administration every 2-4 weeks with 30-60 minute post-injection anaphylaxis monitoring."
      },
      {
        "q": "After receiving their first injection of omalizumab, a patient develops urticaria, throat tightness, and hypotension 20 minutes later. What is the nurse's immediate priority?",
        "opts": [
          "Administer diphenhydramine orally and observe for 30 more minutes",
          "Notify the provider and document the allergic reaction for future dose modification",
          "Apply ice to the injection site and administer acetaminophen for presumed local reaction",
          "Initiate anaphylaxis protocol — administer IM epinephrine, call rapid response, and prepare for airway management. Omalizumab carries a BBW for anaphylaxis."
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Omalizumab carries a risk of anaphylaxis (BBW). Urticaria, throat tightness, and hypotension constitute anaphylaxis — IM epinephrine is the first-line treatment. This is why omalizumab must be administered in a healthcare setting with a post-injection observation period of 30-60 minutes."
      },
      {
        "q": "A patient with severe eosinophilic asthma on high-dose ICS/LABA is started on mepolizumab (Nucala), an anti-IL-5 biologic. What is the nurse's critical teaching point about their current inhalers?",
        "opts": [
          "The patient must continue all controller medications — biologics are add-on therapy, and abruptly stopping ICS/LABA can trigger a severe exacerbation",
          "The patient should stop their ICS/LABA once the biologic is started because it replaces controller therapy",
          "The ICS dose should be doubled when starting a biologic to provide synergistic anti-inflammatory coverage",
          "The LABA component should be discontinued, but the ICS should continue at the same dose"
        ],
        "correct": 0,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Biologics for severe asthma are add-on therapies, not replacements. Abruptly stopping ICS/LABA when starting a biologic removes bronchodilation and inflammation control that the biologic cannot provide acutely. Dose reduction of controllers may be attempted later under provider guidance once the biologic demonstrates efficacy over 12-16 weeks."
      }
    ],
    "bridge_check": [
      {
        "q": "A patient with asthma is started on a cardioselective beta-blocker (metoprolol) for newly diagnosed hypertension. Why is 'cardioselective' important in this patient?",
        "opts": [
          "Cardioselective beta-blockers have no effect on airways whatsoever",
          "At standard therapeutic doses, cardioselective agents (metoprolol, atenolol) preferentially block cardiac beta-1 receptors with less beta-2 airway blockade than non-selective agents — safer but not risk-free. Monitor respiratory status.",
          "Cardioselective agents enhance albuterol effectiveness",
          "There is no difference in airway effects between selective and non-selective beta-blockers"
        ],
        "correct": 1,
        "cat": "Bridge M1→M3",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Beta-1 selectivity is dose-dependent — at higher doses, selectivity decreases. In mild-moderate asthma, carefully selected cardioselective agents can be used when cardiovascular benefit outweighs risk. Start low, titrate slowly, monitor peak flow."
      },
      {
        "q": "A patient with well-controlled asthma on ICS/LABA requires urgent rate control for atrial fibrillation with RVR. The provider orders IV esmolol. Why is esmolol a reasonable choice despite the asthma diagnosis?",
        "opts": [
          "Esmolol is not a beta-blocker, so it has no effect on airways",
          "Esmolol's IV route bypasses the lungs entirely, eliminating any airway risk",
          "Esmolol is cardioselective (beta-1) with an ultra-short half-life of 9 minutes — if bronchospasm occurs, the effect dissipates rapidly after stopping the infusion",
          "Esmolol selectively blocks beta-3 receptors, which have no presence in bronchial tissue"
        ],
        "correct": 2,
        "cat": "Bridge M1→M3",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Esmolol's beta-1 selectivity reduces (but does not eliminate) beta-2 airway effects. Its ultra-short half-life (9 minutes) means any adverse effect resolves within minutes of stopping the infusion — providing a safety margin that longer-acting agents cannot offer in asthmatic patients."
      },
      {
        "q": "A patient with COPD (not asthma) and heart failure is prescribed carvedilol. The nurse notes carvedilol is a non-selective beta-blocker. Should this order be questioned?",
        "opts": [
          "Yes — non-selective beta-blockers are always contraindicated in any obstructive lung disease",
          "Carvedilol should be replaced with propranolol because it has fewer pulmonary effects",
          "No concern — COPD patients are immune to beta-2 blockade effects in the airways",
          "Carvedilol is evidence-based for HFrEF and has been shown to be tolerated in COPD patients — COPD is not an absolute contraindication to non-selective beta-blockers, unlike asthma. Monitor respiratory status closely."
        ],
        "correct": 3,
        "cat": "Bridge M1→M3",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "COPD (unlike asthma) does not have the same degree of airway hyperreactivity. Major trials (COPERNICUS, COMET) enrolled COPD patients on carvedilol with acceptable outcomes. The mortality benefit of carvedilol in HFrEF generally outweighs the modest respiratory risk in COPD. Monitor spirometry and symptoms."
      },
      {
        "q": "An asthma patient's prednisone burst (5-day course) causes blood glucose of 320 mg/dL. They are not diabetic at baseline. What do you do?",
        "opts": [
          "Notify provider — steroid-induced hyperglycemia requires treatment (often insulin while on steroids) to prevent DKA or hyperosmolar syndrome, even in non-diabetic patients",
          "Ignore — transient hyperglycemia from steroids is harmless and always resolves",
          "Start metformin for steroid-induced hyperglycemia",
          "Reduce the prednisone dose to half to lower blood glucose"
        ],
        "correct": 0,
        "cat": "Bridge M3→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Systemic corticosteroids cause dose-dependent hyperglycemia that can reach DKA-level glucose even in previously non-diabetic patients. Requires treatment — typically insulin. Metformin is inappropriate for acute hyperglycemia management."
      },
      {
        "q": "A hospitalized patient with no diabetes history is receiving dexamethasone for brain metastases. Glucose values have been 250-350 mg/dL for three consecutive days. The provider orders an insulin sliding scale. Why might this be insufficient?",
        "opts": [
          "Sliding scale insulin is always sufficient for steroid-induced hyperglycemia regardless of severity",
          "A sliding scale only reacts to elevated glucose after it occurs — scheduled basal insulin with mealtime coverage provides proactive glycemic control to prevent sustained hyperglycemia",
          "Sliding scale insulin cannot be used with dexamethasone due to a pharmacokinetic interaction",
          "The patient needs oral hypoglycemics rather than insulin for steroid-induced hyperglycemia"
        ],
        "correct": 1,
        "cat": "Bridge M3→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Sliding scale insulin is reactive — it corrects hyperglycemia after it occurs. Steroid-induced hyperglycemia is predictable and persistent, peaking in the afternoon with morning steroids. Scheduled basal insulin (often NPH timed to steroid peak) with rapid-acting coverage provides better glycemic control."
      },
      {
        "q": "A patient with well-controlled T2DM on metformin and sitagliptin is admitted for an asthma exacerbation. After receiving IV methylprednisolone, their glucose rises to 410 mg/dL. What does this bridge between respiratory and endocrine modules teach?",
        "opts": [
          "Methylprednisolone has no effect on glucose because it is given intravenously rather than orally",
          "The elevated glucose indicates metformin and sitagliptin should be permanently discontinued",
          "Systemic corticosteroids overwhelm the glucose-lowering capacity of oral diabetes medications — insulin is required because the degree of insulin resistance from high-dose steroids exceeds what metformin and sitagliptin can counteract",
          "Oral diabetes medications should be doubled during steroid therapy to match the increased insulin resistance"
        ],
        "correct": 2,
        "cat": "Bridge M3→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "High-dose systemic corticosteroids create insulin resistance that oral agents cannot overcome. Insulin is the appropriate treatment for acute steroid-induced hyperglycemia. Oral agents are continued (unless contraindicated) but supplemented with insulin until steroids are tapered."
      },
      {
        "q": "A patient with severe COPD and concurrent heart failure is prescribed both tiotropium and furosemide. Why might furosemide make COPD management more challenging?",
        "opts": [
          "Furosemide directly increases airway resistance",
          "The two drugs have a direct pharmacokinetic interaction",
          "Furosemide reduces bronchodilator absorption from inhalers",
          "Furosemide causes metabolic alkalosis through H+ and Cl- loss — in COPD patients with chronic CO2 retention and compensatory bicarbonate elevation, adding metabolic alkalosis further blunts respiratory drive"
        ],
        "correct": 3,
        "cat": "Bridge M2→M3",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "COPD patients with chronic hypercapnia already have elevated bicarbonate (metabolic compensation). Furosemide causes metabolic alkalosis which further blunts the hypercapnic respiratory drive. This is a subtle but important bridge between renal and respiratory pharmacology."
      },
      {
        "q": "A patient with severe COPD and peripheral edema from cor pulmonale is started on spironolactone instead of furosemide. What advantage does spironolactone offer regarding acid-base balance in this COPD patient?",
        "opts": [
          "Spironolactone is a potassium-sparing diuretic that does not cause metabolic alkalosis — this preserves the COPD patient's respiratory drive that depends on CO2 sensitivity",
          "Spironolactone is more potent than furosemide and provides faster edema resolution",
          "Spironolactone directly improves pulmonary function through aldosterone receptor blockade in lung tissue",
          "Spironolactone has bronchodilating properties that complement tiotropium therapy"
        ],
        "correct": 0,
        "cat": "Bridge M2→M3",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Potassium-sparing diuretics like spironolactone do not waste H+ ions and therefore do not cause metabolic alkalosis. In COPD patients dependent on hypercapnic respiratory drive, avoiding additional alkalosis preserves ventilatory response. However, spironolactone's diuretic potency is much less than furosemide."
      },
      {
        "q": "A COPD patient on chronic furosemide has an ABG showing: pH 7.52, pCO2 48, HCO3 38. The respiratory therapist notes the patient's minute ventilation is unusually low. What is the pharmacologic explanation?",
        "opts": [
          "The ABG indicates respiratory acidosis from COPD, which is unrelated to furosemide",
          "Furosemide-induced metabolic alkalosis (elevated HCO3) has suppressed respiratory drive — the body retains CO2 to compensate, reducing minute ventilation in a patient who already has impaired CO2 clearance",
          "Furosemide directly depresses the central respiratory center in the brainstem",
          "The low minute ventilation is caused by hypokalemia-induced diaphragmatic weakness from furosemide"
        ],
        "correct": 1,
        "cat": "Bridge M2→M3",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "The ABG shows metabolic alkalosis (pH 7.52, HCO3 38) with respiratory compensation (retained CO2, pCO2 48). Furosemide-induced H+ and Cl- losses cause metabolic alkalosis. The body compensates by hypoventilating to retain CO2 — dangerous in a COPD patient with already limited ventilatory reserve."
      },
      {
        "q": "A patient on montelukast for asthma is started on sertraline for depression. What neuropsychiatric monitoring becomes more important?",
        "opts": [
          "No change — these drugs do not share adverse effects",
          "Montelukast reduces sertraline effectiveness requiring a dose increase",
          "Both montelukast (BBW) and SSRIs (BBW in young adults) can affect mood, suicidal ideation, and neuropsychiatric function — combined use requires heightened monitoring for mood changes and suicidality",
          "The combination requires ECG monitoring for QT prolongation"
        ],
        "correct": 2,
        "cat": "Bridge M3→M4",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Montelukast has a BBW for neuropsychiatric events including suicidal ideation. SSRIs carry a BBW for suicidal ideation in those ≤24. Combined, monitoring frequency for mood changes should be increased."
      },
      {
        "q": "A 16-year-old patient is taking montelukast for asthma and fluoxetine for major depressive disorder. The parent reports the teen has been increasingly withdrawn and made a comment about 'not wanting to be here anymore.' What is the nurse's priority?",
        "opts": [
          "Reassure the parent that adolescent mood swings are normal and continue current medications",
          "Discontinue both medications immediately to eliminate the pharmacologic contribution to suicidal ideation",
          "Document the concern and schedule a follow-up appointment within 2 weeks for reassessment",
          "Perform an immediate safety assessment — both montelukast and fluoxetine carry BBWs for suicidality in this age group, and the patient's statement requires urgent evaluation"
        ],
        "correct": 3,
        "cat": "Bridge M3→M4",
        "nclex": "PSI",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Any statement suggesting suicidal ideation requires immediate safety assessment, especially in a patient on two medications with BBWs for neuropsychiatric effects. The nurse must assess for a plan, intent, and means; ensure patient safety; and notify the provider urgently."
      },
      {
        "q": "A patient with asthma and OCD is on montelukast and fluvoxamine. Fluvoxamine is a potent CYP1A2 inhibitor. What pharmacokinetic concern exists with this combination?",
        "opts": [
          "Fluvoxamine inhibits CYP1A2, which partially metabolizes montelukast — this can increase montelukast levels, potentially amplifying its neuropsychiatric adverse effects",
          "Fluvoxamine reduces montelukast absorption through a GI motility interaction",
          "Montelukast induces CYP1A2, reducing fluvoxamine levels below therapeutic range",
          "CYP1A2 is not involved in the metabolism of either drug, so no interaction exists"
        ],
        "correct": 0,
        "cat": "Bridge M3→M4",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Montelukast is metabolized by CYP3A4 and CYP2C8, with some CYP1A2 involvement. Fluvoxamine's potent CYP inhibition can increase montelukast levels. Combined with the overlapping BBW neuropsychiatric concerns of both drug classes, this pharmacokinetic interaction adds another layer of risk requiring careful monitoring."
      },
      {
        "q": "Magnesium sulfate was used to treat severe acute asthma in the ICU. The patient now also has hypomagnesemia from loop diuretics. What is the connection between respiratory and renal modules here?",
        "opts": [
          "No connection — magnesium is used for asthma, not renal conditions",
          "Loop diuretics (furosemide) cause significant magnesium wasting at the loop of Henle. When magnesium is also being used therapeutically for asthma or arrhythmias, furosemide undermines repletion. Serum magnesium must be actively monitored and replaced in patients on loop diuretics.",
          "Magnesium and furosemide cancel each other out",
          "Loop diuretics are contraindicated if magnesium has been given intravenously"
        ],
        "correct": 1,
        "cat": "Bridge M2→M3",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "The NKCC2 transporter that furosemide blocks also affects Mg++ reabsorption in the thick ascending limb. Hypomagnesemia from furosemide is common and underrecognized. Concurrent therapeutic magnesium use requires more aggressive monitoring and replacement."
      },
      {
        "q": "A patient with acute asthma received IV magnesium sulfate in the ED. They are also on chronic digoxin for atrial fibrillation. Why is monitoring magnesium levels particularly important in this patient?",
        "opts": [
          "Magnesium sulfate directly inhibits digoxin absorption from the GI tract",
          "High magnesium levels from the IV dose will cause digoxin levels to rise above the therapeutic range",
          "Hypomagnesemia potentiates digoxin toxicity by increasing myocardial sensitivity to digoxin — after the therapeutic magnesium effect wears off, a drop below normal could precipitate dangerous arrhythmias",
          "Magnesium and digoxin compete for the same renal clearance pathway, causing accumulation of both"
        ],
        "correct": 2,
        "cat": "Bridge M1→M2→M3",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Magnesium and potassium depletion both increase myocardial sensitivity to digoxin. After therapeutic IV magnesium clears, if the patient becomes hypomagnesemic (especially if also on a loop diuretic), digoxin toxicity risk rises significantly. This bridges cardiovascular (digoxin), renal (electrolytes), and respiratory (asthma) modules."
      },
      {
        "q": "A patient with cor pulmonale from COPD is receiving both IV furosemide for fluid overload and nebulized albuterol for bronchospasm. Serum potassium drops to 2.8 mEq/L. What pharmacologic factors are contributing?",
        "opts": [
          "Only furosemide causes hypokalemia — albuterol has no effect on potassium levels",
          "Hypokalemia in this patient is solely from inadequate dietary potassium intake",
          "Albuterol causes hyperkalemia that offsets furosemide-induced potassium loss",
          "Both furosemide (renal K+ wasting) and albuterol (intracellular K+ shift via beta-2 stimulation) lower serum potassium through different mechanisms — the combination creates additive hypokalemia risk"
        ],
        "correct": 3,
        "cat": "Bridge M2→M3",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Furosemide wastes potassium through the NKCC2 transporter blockade. Albuterol stimulates beta-2 receptors that activate Na+/K+ ATPase, shifting potassium intracellularly. Both mechanisms lower serum potassium simultaneously. Monitor potassium closely when both drugs are used concurrently, especially with concurrent digoxin."
      }
    ]
  },
  "M4": {
    "rapid_fire": [
      {
        "q": "A patient on IV morphine has a respiratory rate of 8 and sedation score of 3 (difficult to arouse). What is the CORRECT sequence of actions?",
        "opts": [
          "Ensure airway and ventilation → administer naloxone → call provider and stay with patient",
          "Call provider → give naloxone → assess airway",
          "Give naloxone → call provider → put oxygen mask on",
          "Increase oxygen flow rate → call provider → document"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Opioid overdose management: Airway and ventilation first (stimulate, reposition, jaw thrust, BVM if needed). Then naloxone. Then provider notification while remaining with patient. Naloxone wears off before most opioids — re-sedation is common."
      },
      {
        "q": "A nurse administers naloxone 0.4 mg IV to reverse opioid-induced respiratory depression. The patient becomes agitated, vomits, and reports severe pain. What happened and what should the nurse anticipate?",
        "opts": [
          "The naloxone dose was too low and needs to be immediately repeated at a higher dose",
          "Full reversal of opioid analgesia occurred — naloxone removed all mu-receptor opioid activity, causing acute withdrawal symptoms and return of pain. Titrate future doses in 0.04 mg increments to restore ventilation without full reversal.",
          "The patient is experiencing an allergic reaction to naloxone requiring epinephrine",
          "Naloxone caused a paradoxical opioid-agonist effect that worsened the patient's pain"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Full-dose naloxone rapidly displaces all opioid from mu receptors, causing acute withdrawal (agitation, vomiting, tachycardia, diaphoresis) and complete loss of analgesia. Titrating in small increments (0.04-0.1 mg) restores respiratory drive while preserving some analgesia."
      },
      {
        "q": "A patient receives naloxone for heroin overdose in the ED. Respiratory rate improves from 6 to 16, and the patient is alert. Thirty minutes later, the patient becomes somnolent again with RR of 8. What is the explanation?",
        "opts": [
          "The heroin has been reactivated by a second metabolic phase in the liver",
          "The patient took another dose of heroin while in the ED without staff knowledge",
          "Naloxone's duration of action (60-90 minutes) is shorter than heroin's — as naloxone is metabolized, remaining heroin re-binds mu receptors, causing recurrent respiratory depression",
          "Naloxone causes delayed-onset respiratory depression as a paradoxical side effect"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Naloxone has a half-life of 60-90 minutes, while heroin's active metabolites can persist for hours. Re-sedation occurs when naloxone clears and residual opioid re-occupies mu receptors. Patients must be monitored for at least 2-4 hours; a naloxone infusion may be needed."
      },
      {
        "q": "Naloxone (Narcan) reverses a patient's opioid overdose successfully. The nurse administers 2 mg IV and the patient wakes up. Why must monitoring continue for at least 2-4 hours?",
        "opts": [
          "Naloxone causes delayed respiratory depression on its own",
          "Repeat doses of naloxone are toxic if given too soon",
          "Monitoring is only for patient comfort",
          "Naloxone's half-life (1-1.5 hours) is shorter than most opioids — as naloxone is metabolized, opioid binding resumes and the patient can re-sedate"
        ],
        "correct": 3,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Evaluation",
        "cognitive": "Comprehension",
        "rationale": "Naloxone half-life ~1-1.5 hours. Most opioids have longer durations. As naloxone clears, residual opioid re-binds mu receptors — re-sedation occurs. Patients on long-acting opioids may need naloxone infusions or repeated doses."
      },
      {
        "q": "An opioid-naive patient received a fentanyl patch (72-hour formulation) and becomes obtunded. Naloxone 0.4 mg IV is given with improvement. Why is a continuous naloxone infusion likely needed?",
        "opts": [
          "Fentanyl patches deliver drug for 72 hours — single naloxone doses cannot match this prolonged delivery, and repeated re-sedation will occur as each naloxone dose wears off",
          "A naloxone infusion is needed because fentanyl renders naloxone less effective with each repeated bolus dose",
          "Fentanyl patches release naloxone-resistant metabolites that require continuous antagonist coverage",
          "The infusion is needed to prevent fentanyl-naloxone immune complex formation that occurs with intermittent dosing"
        ],
        "correct": 0,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Transdermal fentanyl has a depot of drug in the skin that continues releasing fentanyl for many hours even after patch removal. A single naloxone bolus lasts 60-90 minutes. A continuous infusion (typically 2/3 of the effective bolus dose per hour) maintains mu-receptor blockade until the fentanyl depot is depleted."
      },
      {
        "q": "A community health nurse is training family members of a patient on chronic opioids to use intranasal naloxone (Narcan nasal spray). What is the most critical instruction about post-administration care?",
        "opts": [
          "Once naloxone is administered and the patient wakes up, they are safe and no further medical care is needed",
          "Call 911 immediately even if the patient responds — naloxone wears off in 30-90 minutes, and the patient may re-sedate. Stay with the patient and be prepared to give a second dose.",
          "Intranasal naloxone is a permanent reversal agent, so re-sedation is not a concern with this formulation",
          "Administer the entire naloxone kit (both doses simultaneously) for maximum effectiveness"
        ],
        "correct": 1,
        "cat": "Patient Education",
        "nclex": "SECE-MC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Intranasal naloxone has the same duration limitations as IV — the patient can re-sedate when it wears off. Emergency services must be activated because the patient needs ongoing monitoring. A second dose can be given in 2-3 minutes if no response to the first dose."
      },
      {
        "q": "A patient on sertraline (Zoloft) is prescribed linezolid for a hospital-acquired infection. What is the critical drug interaction?",
        "opts": [
          "Linezolid induces CYP metabolism of sertraline — reduce sertraline dose",
          "Linezolid causes sertraline to accumulate to toxic levels",
          "Linezolid has MAOI activity and can cause life-threatening serotonin syndrome when combined with SSRIs — contraindicated without washout",
          "No clinically significant interaction between these drugs"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Linezolid is a weak MAOI. SSRIs combined with MAOIs cause serotonin syndrome — hyperthermia, agitation, clonus, diaphoresis, tachycardia. Linezolid + SSRI is contraindicated requiring either sertraline discontinuation or an alternative antibiotic."
      },
      {
        "q": "A patient on fluoxetine presents with hyperthermia (40.2°C), agitation, clonus, diaphoresis, and diarrhea after starting methylene blue IV for a surgical procedure. What is the most likely diagnosis?",
        "opts": [
          "Malignant hyperthermia from the anesthetic agents used during the procedure",
          "Sepsis from a surgical wound infection presenting with atypical neurologic symptoms",
          "Neuroleptic malignant syndrome from an unrecorded antipsychotic administered during surgery",
          "Serotonin syndrome — methylene blue has potent MAOI activity and combined with fluoxetine causes excessive serotonergic stimulation"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Methylene blue is a potent MAO-A inhibitor. Combined with SSRIs, it can cause severe serotonin syndrome. The classic triad is mental status changes, autonomic instability, and neuromuscular hyperactivity (clonus). FDA issued a warning about this interaction. SSRIs should be discontinued before methylene blue administration when possible."
      },
      {
        "q": "A patient takes St. John's wort for mild depression and is prescribed tramadol for post-operative pain. What interaction should the nurse identify?",
        "opts": [
          "Both St. John's wort (serotonin reuptake inhibition) and tramadol (SNRI-like activity plus mu-agonism) increase serotonergic activity — the combination risks serotonin syndrome",
          "St. John's wort reduces tramadol's analgesic effect through CYP3A4 induction only",
          "St. John's wort and tramadol compete for opioid receptors, reducing pain control",
          "Herbal supplements do not interact with prescription medications at standard doses"
        ],
        "correct": 0,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "St. John's wort inhibits serotonin reuptake (SSRI-like). Tramadol has dual mechanisms — weak mu-agonism plus serotonin and norepinephrine reuptake inhibition. Combined serotonergic activity risks serotonin syndrome. Nurses must assess herbal supplement use during medication reconciliation."
      },
      {
        "q": "What is the most important difference between opioid-induced constipation and other opioid side effects such as nausea or sedation?",
        "opts": [
          "Constipation is mild and self-limiting — no treatment needed",
          "Constipation does NOT develop tolerance over time — it persists for the entire duration of opioid therapy and requires a proactive bowel regimen from the first dose",
          "Constipation is dose-dependent but resolves in 2-3 weeks automatically",
          "Constipation only occurs with parenteral opioid routes"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "Opioid-induced constipation does NOT develop tolerance — it persists as long as the opioid is taken. Mu receptors in the enteric nervous system remain continuously activated. A stimulant laxative (senna) ± osmotic agent is required from day 1."
      },
      {
        "q": "A patient on chronic oxycodone for cancer pain has not had a bowel movement in 5 days despite senna and docusate. The provider orders methylnaltrexone (Relistor) subcutaneously. What is the mechanism of this drug?",
        "opts": [
          "Methylnaltrexone is a stimulant laxative that directly activates colonic peristalsis through serotonin receptors",
          "Methylnaltrexone reverses all opioid effects temporarily to allow bowel movement, then analgesia returns",
          "Methylnaltrexone is a peripherally-acting mu-opioid receptor antagonist that blocks opioid effects on the GI tract without crossing the blood-brain barrier, preserving central analgesia",
          "Methylnaltrexone is an osmotic laxative that draws water into the intestinal lumen independently of opioid receptors"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Methylnaltrexone (and naloxegol, alvimopan) are peripherally-acting mu-opioid receptor antagonists (PAMORAs). They block mu receptors in the GI tract without crossing the BBB, so they relieve opioid-induced constipation without affecting central analgesia or precipitating withdrawal."
      },
      {
        "q": "A nurse is developing a care plan for a patient starting long-term opioid therapy for chronic pain. Which bowel regimen should be initiated at the time of the first opioid dose?",
        "opts": [
          "No bowel regimen is needed initially — wait until the patient reports constipation before intervening",
          "Bulk-forming laxatives (psyllium) are the first-line prophylactic agent for opioid-induced constipation",
          "High-fiber diet alone is sufficient to prevent opioid-induced constipation in most patients",
          "A stimulant laxative (senna) should be started prophylactically with the first opioid dose, with a stool softener (docusate) added as needed"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Opioid-induced constipation should be prevented, not treated reactively. Stimulant laxatives (senna) promote peristalsis against opioid-induced hypomotility. Bulk-forming agents can worsen obstruction in opioid-slowed intestines. A proactive regimen from day 1 is the standard of care."
      },
      {
        "q": "Clozapine requires enrollment in a Risk Evaluation and Mitigation Strategy (REMS) program. What specific life-threatening adverse effect drives this requirement?",
        "opts": [
          "Severe neutropenia/agranulocytosis — absolute neutrophil count (ANC) must be monitored weekly for 6 months, biweekly for 6 months, then monthly, and the pharmacy will not dispense without a current ANC on file",
          "Myocarditis — required cardiac monitoring every 3 months",
          "QT prolongation — requires weekly ECGs indefinitely",
          "Seizures — requires EEG monitoring at all doses above 300 mg"
        ],
        "correct": 0,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Clozapine causes agranulocytosis (ANC <500) in ~1% of patients. The REMS program is mandatory: ANC must be within specific windows before dispensing. Fever or sore throat on clozapine must trigger immediate ANC measurement."
      },
      {
        "q": "A patient on clozapine calls the clinic reporting a sore throat and fever of 101.5°F for two days. What is the nurse's priority action?",
        "opts": [
          "Recommend over-the-counter lozenges and antipyretics — sore throat with fever is likely viral",
          "Instruct the patient to come immediately for an urgent CBC with differential — fever and sore throat on clozapine could indicate agranulocytosis, a medical emergency",
          "Schedule a routine clinic visit within the next week to assess the sore throat",
          "Advise the patient to stop clozapine and restart it when the infection resolves"
        ],
        "correct": 1,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Fever and sore throat on clozapine must be treated as agranulocytosis until proven otherwise. Without adequate neutrophils, even minor infections can become rapidly fatal. An urgent CBC with differential is mandatory — if ANC is critically low, clozapine must be stopped and the patient may need isolation, cultures, and empiric broad-spectrum antibiotics."
      },
      {
        "q": "A patient with treatment-resistant schizophrenia has been on clozapine for 8 months with stable ANC values. The provider changes ANC monitoring from biweekly to monthly. Is this appropriate?",
        "opts": [
          "No — ANC must be monitored weekly for the entire duration of clozapine therapy regardless of stability",
          "Monthly monitoring should begin only after 2 years of stable ANC values on clozapine",
          "Yes — the REMS protocol specifies weekly monitoring for the first 6 months, biweekly for months 7-12, then monthly thereafter if ANC remains in acceptable range",
          "ANC monitoring can be discontinued entirely after 6 months if all values have been normal"
        ],
        "correct": 2,
        "cat": "Monitoring",
        "nclex": "PSI",
        "process": "Evaluation",
        "cognitive": "Knowledge",
        "rationale": "The clozapine REMS monitoring schedule is: weekly ANC for the first 6 months, biweekly for months 7-12, then monthly if ANC remains stable. At 8 months, biweekly monitoring is still required. Monthly monitoring begins after 12 months of continuous therapy with acceptable ANC values."
      },
      {
        "q": "A patient with Parkinson disease is admitted and an order is written for metoclopramide (Reglan) for nausea. What must you do before administering?",
        "opts": [
          "Administer as ordered — nausea requires treatment regardless of other diagnoses",
          "Administer with levodopa to counteract the Parkinson worsening",
          "Give a reduced dose as a compromise",
          "Question this order — metoclopramide is a dopamine antagonist that blocks D2 receptors in the CNS, significantly worsening Parkinson disease motor symptoms"
        ],
        "correct": 3,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Parkinson disease involves dopamine deficiency. Metoclopramide blocks D2 receptors, drastically worsening tremor, rigidity, and bradykinesia. Use ondansetron (serotonin mechanism, no D2 blockade) instead."
      },
      {
        "q": "A patient with Parkinson disease on levodopa/carbidopa develops nausea from the medication itself. Which antiemetic is the safest choice?",
        "opts": [
          "Ondansetron (Zofran) — a 5-HT3 receptor antagonist with no dopamine-blocking activity that will not worsen Parkinson symptoms",
          "Prochlorperazine (Compazine) — a phenothiazine antiemetic with proven nausea control",
          "Haloperidol at low dose — its antiemetic properties at sub-antipsychotic doses are safe in Parkinson disease",
          "Droperidol — its dual antiemetic and sedating properties help control nausea and agitation"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Ondansetron blocks 5-HT3 receptors in the CTZ and GI tract without any D2 antagonism. It will not oppose levodopa's dopaminergic mechanism. Prochlorperazine, haloperidol, and droperidol are all dopamine antagonists that worsen Parkinson motor symptoms."
      },
      {
        "q": "A hospitalized patient with no neurologic history receives metoclopramide 10 mg IV every 6 hours for gastroparesis for 2 weeks. The nurse notices the patient developing involuntary lip-smacking and tongue movements. What has occurred?",
        "opts": [
          "These are common, benign side effects that resolve immediately when the drug is stopped",
          "Drug-induced tardive dyskinesia — chronic dopamine D2 blockade causes hypersensitivity of D2 receptors, producing involuntary orofacial movements that may be irreversible",
          "Serotonin syndrome from metoclopramide's serotonergic activity presenting with oral dyskinesias",
          "Allergic dystonic reaction requiring diphenhydramine and continued metoclopramide therapy"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Metoclopramide carries a BBW for tardive dyskinesia. Prolonged D2 blockade (especially >12 weeks) causes receptor upregulation and hypersensitivity, producing irreversible involuntary movements. Treatment duration should be minimized. Early signs (lip smacking, tongue protrusion) require immediate drug discontinuation."
      },
      {
        "q": "What is the clinical significance of phenytoin having nonlinear (saturable) pharmacokinetics?",
        "opts": [
          "Phenytoin serum levels always increase proportionally with dose",
          "Nonlinear kinetics means more frequent dosing is needed",
          "Small dose increases at higher doses can cause disproportionately large jumps in serum levels because the metabolic enzyme becomes saturated — toxicity risk is high with dose adjustments",
          "Phenytoin levels cannot be measured accurately in the lab"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "Phenytoin undergoes hepatic metabolism via CYP2C9/2C19 — enzymes that become saturated at therapeutic levels. Small dose increases cause plasma levels to rise exponentially. Free phenytoin levels are critical in hypoalbuminemia."
      },
      {
        "q": "A patient on phenytoin 300 mg daily has a therapeutic total phenytoin level of 18 mcg/mL but a serum albumin of 2.0 g/dL. The provider orders a free phenytoin level. Why is this important?",
        "opts": [
          "Low albumin increases protein-bound phenytoin, making the total level falsely low",
          "Free phenytoin levels are only relevant in patients with concurrent renal failure, not hypoalbuminemia",
          "Albumin levels do not affect phenytoin pharmacokinetics in any clinically meaningful way",
          "Low albumin reduces protein binding — more phenytoin circulates as free (active) drug. The total level appears therapeutic, but the free fraction may be in the toxic range."
        ],
        "correct": 3,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Phenytoin is ~90% protein-bound. In hypoalbuminemia, fewer binding sites are available — more drug circulates as free (active) form. A total level of 18 mcg/mL with albumin of 2.0 may have a free level equivalent to a total of 25-30 mcg/mL in a patient with normal albumin. Free phenytoin (therapeutic: 1-2 mcg/mL) is the accurate measure."
      },
      {
        "q": "A patient on phenytoin 300 mg/day has a level of 16 mcg/mL (therapeutic range 10-20). Seizures are not fully controlled, so the provider increases the dose to 350 mg/day. The next level returns at 32 mcg/mL. What pharmacokinetic principle explains this?",
        "opts": [
          "Zero-order (saturable) kinetics — at doses near enzyme saturation, a small dose increment causes a disproportionately large rise in serum levels because the metabolic pathway cannot increase clearance proportionally",
          "The patient was non-adherent with the previous dose and is now taking all doses correctly",
          "The laboratory made an error because a 17% dose increase cannot cause a 100% level increase with normal kinetics",
          "A new drug interaction is inhibiting phenytoin metabolism, not the dose change"
        ],
        "correct": 0,
        "cat": "Mechanism",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Phenytoin transitions from first-order to zero-order kinetics as CYP2C9/2C19 approach saturation. At 300 mg, enzymes were near capacity. Adding 50 mg exceeded metabolic capacity — the excess drug accumulates because the body cannot proportionally increase clearance. This is the hallmark of nonlinear kinetics."
      },
      {
        "q": "Lithium 300 mg TID is prescribed. Which concurrent drug change is MOST likely to precipitate lithium toxicity?",
        "opts": [
          "Starting a beta-blocker for hypertension",
          "Starting hydrochlorothiazide (a thiazide diuretic)",
          "Starting atorvastatin for hyperlipidemia",
          "Starting fluticasone inhaler for asthma"
        ],
        "correct": 1,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Thiazide diuretics deplete sodium → kidney compensates by increasing Na+ reabsorption in the proximal tubule → lithium is reabsorbed alongside sodium → lithium excretion falls → levels rise. NSAIDs and ACE inhibitors also raise lithium levels."
      },
      {
        "q": "A patient on lithium 900 mg daily presents with coarse tremor, ataxia, slurred speech, and confusion. Lithium level is 2.4 mEq/L. The patient recently started ibuprofen for back pain. What is the priority nursing action?",
        "opts": [
          "Give a loading dose of sodium bicarbonate to alkalinize the urine and increase lithium excretion",
          "Administer activated charcoal to prevent further lithium absorption from the GI tract",
          "Hold lithium and ibuprofen, notify provider — these are signs of moderate-to-severe lithium toxicity likely precipitated by NSAID-reduced renal clearance. Prepare for IV hydration and possible hemodialysis.",
          "Continue lithium at reduced dose and switch from ibuprofen to naproxen, which is safer with lithium"
        ],
        "correct": 2,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Lithium level 2.4 mEq/L with neurologic symptoms = moderate-severe toxicity. NSAIDs reduce renal prostaglandin-mediated blood flow, decreasing GFR and lithium clearance. Hold both drugs, aggressive IV normal saline for renal clearance, and hemodialysis if level >2.5 or severe neurologic impairment. Charcoal does not bind lithium."
      },
      {
        "q": "A patient on stable lithium therapy is hospitalized with pneumonia and started on IV normal saline at 200 mL/hr. The next lithium level is 0.4 mEq/L (previously 0.9 mEq/L). What caused the drop?",
        "opts": [
          "The pneumonia infection directly metabolizes lithium, reducing serum levels",
          "Lithium redistributed to intracellular compartments during the acute infection",
          "The IV fluid diluted the serum sample, creating a falsely low lithium reading",
          "Aggressive IV sodium administration increases renal lithium excretion — lithium competes with sodium for proximal tubular reabsorption, and high sodium loads favor lithium elimination"
        ],
        "correct": 3,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Lithium is reabsorbed in the proximal tubule alongside sodium. When sodium delivery increases (IV NS), less lithium is reabsorbed and more is excreted. Conversely, sodium depletion (dehydration, low-salt diet, diuretics) causes lithium retention. This sodium-lithium relationship is bidirectional and clinically critical."
      },
      {
        "q": "The discontinuation syndrome from abruptly stopping sertraline is remembered with the mnemonic FINISH. What does this represent?",
        "opts": [
          "Flu-like symptoms, Insomnia, Nausea, Imbalance/dizziness, Sensory disturbances (electric shock sensations), Hyperarousal/anxiety",
          "Fever, Irritability, Nausea, Insomnia, Sweating, Headache",
          "Fatigue, Increased appetite, Nervousness, Irritability, Sadness, Hallucinations",
          "Flushing, Itching, Neuropathy, Insomnia, Sweating, Hypotension"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "SSRI discontinuation syndrome: FINISH = Flu-like symptoms, Insomnia, Nausea, Imbalance, Sensory disturbances (brain zaps), Hyperarousal. Taper over weeks to months. Fluoxetine causes the mildest discontinuation due to its long half-life."
      },
      {
        "q": "A patient abruptly stopped paroxetine 3 days ago and reports dizziness, electric shock sensations in the arms, and vivid nightmares. The patient is worried they are having a stroke. What is the nurse's assessment?",
        "opts": [
          "These symptoms require immediate neuroimaging to rule out cerebrovascular accident",
          "SSRI discontinuation syndrome — paroxetine has the shortest half-life among SSRIs and the highest incidence of withdrawal symptoms. Sensory disturbances and dizziness are characteristic, not stroke.",
          "These symptoms indicate serotonin syndrome from residual paroxetine activity and require cyproheptadine",
          "The patient is experiencing a relapse of their underlying psychiatric condition requiring dose increase"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Paroxetine has the shortest half-life of common SSRIs (~21 hours) and the highest rate of discontinuation syndrome. Electric shock sensations (brain zaps), dizziness, and vivid dreams are pathognomonic for SSRI withdrawal, not stroke. Management: reinstate paroxetine at a low dose and taper gradually, or switch to fluoxetine (long half-life) for a smoother taper."
      },
      {
        "q": "A provider is switching a patient from paroxetine to fluoxetine. The nurse notes the provider's plan is to stop paroxetine abruptly and start fluoxetine the next day. Why might this approach be clinically acceptable?",
        "opts": [
          "Abrupt paroxetine discontinuation is always dangerous regardless of what replaces it",
          "Paroxetine and fluoxetine are identical drugs with different brand names, so no transition is needed",
          "Fluoxetine has an extremely long half-life (2-6 days, active metabolite 4-16 days) — once started, it builds a sustained serotonergic effect that effectively covers the withdrawal gap from stopping paroxetine",
          "The overlap of two SSRIs creates serotonin syndrome risk that makes this approach unsafe"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Fluoxetine's active metabolite norfluoxetine has a half-life of 4-16 days — the longest of any SSRI. This creates a built-in self-taper that reduces discontinuation symptoms. Cross-switching from a short-half-life SSRI to fluoxetine is an established clinical strategy. Initial dose overlap should still be brief to minimize serotonergic excess."
      },
      {
        "q": "A patient on long-term diazepam for anxiety asks to stop taking it immediately. What is the nursing priority?",
        "opts": [
          "Approve the request — stopping sedatives is always safer than continuing",
          "Refer to psychiatry before any action — no immediate response needed",
          "Cut the dose in half immediately as a compromise",
          "Educate that abrupt benzodiazepine discontinuation after chronic use can cause life-threatening withdrawal including seizures — a tapering schedule is required"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Benzodiazepine withdrawal can be life-threatening. After chronic use, GABA-A receptor upregulation means abrupt cessation → rebound anxiety, tremor, insomnia, and potentially fatal seizures. A gradual taper (10% per week or slower) is required."
      },
      {
        "q": "A patient withdrawing from chronic benzodiazepine use develops a generalized tonic-clonic seizure. What is the pathophysiologic mechanism of this withdrawal seizure?",
        "opts": [
          "Chronic benzodiazepine use downregulates GABA-A receptors — abrupt removal of GABAergic inhibition leaves excitatory neurotransmission unopposed, lowering the seizure threshold",
          "Benzodiazepine metabolites directly activate glutamate excitatory receptors during clearance",
          "The seizure is caused by electrolyte imbalances from benzodiazepine-induced renal dysfunction",
          "Benzodiazepine withdrawal activates sympathetic norepinephrine release that triggers cortical seizure activity"
        ],
        "correct": 0,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "Chronic benzodiazepine exposure causes GABA-A receptor downregulation and compensatory upregulation of excitatory pathways. When the drug is removed, inhibitory tone is suddenly insufficient to balance excitatory neurotransmission — the resulting neuronal hyperexcitability manifests as seizures, the most dangerous withdrawal complication."
      },
      {
        "q": "A provider orders a benzodiazepine taper for a patient on lorazepam 2 mg TID for 3 years. The taper plan converts the patient to an equivalent dose of diazepam. Why is diazepam preferred for the taper?",
        "opts": [
          "Diazepam is less addictive than lorazepam, making it safer during the taper period",
          "Diazepam's long half-life (20-100 hours) and active metabolites provide smoother blood level decline between doses, reducing interdose withdrawal symptoms during the taper",
          "Diazepam does not bind GABA-A receptors as tightly as lorazepam, causing less receptor adaptation",
          "Diazepam is available in more dosage forms, allowing more precise dose reductions"
        ],
        "correct": 1,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Diazepam's long half-life (parent drug 20-100 hours, active metabolite desmethyldiazepam up to 200 hours) creates a self-tapering effect with gradual blood level decline. Short-acting benzodiazepines (lorazepam, alprazolam) have sharp peaks and troughs that make withdrawal symptoms more pronounced between doses."
      },
      {
        "q": "What is the MOST important nursing assessment before administering the next dose of levodopa/carbidopa (Sinemet) to a Parkinson patient?",
        "opts": [
          "Blood glucose — levodopa raises blood sugar",
          "Temperature — levodopa causes fever",
          "Assess for 'off' phenomenon — the time since last dose, presence of return of tremor/rigidity, and whether the dose timing has been consistently maintained",
          "Renal function — levodopa requires dose adjustment in CKD"
        ],
        "correct": 2,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Levodopa has a narrow therapeutic window. 'Off' periods occur when drug levels fall between doses. Consistent timing is critical — missing doses can precipitate severe motor dysfunction."
      },
      {
        "q": "A Parkinson patient on levodopa/carbidopa reports that their medication 'wears off' 2 hours before the next scheduled dose, with return of severe tremor and freezing. What pharmacologic strategy addresses this?",
        "opts": [
          "Increase the individual dose of levodopa/carbidopa while keeping the same interval",
          "Add an anticholinergic agent (benztropine) to fill the gap between levodopa doses",
          "Switch entirely from levodopa to a dopamine agonist, which has a longer duration of action",
          "Shorten the dosing interval or add a COMT inhibitor (entacapone) to extend levodopa's duration by blocking peripheral dopamine degradation"
        ],
        "correct": 3,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "End-of-dose wearing off is managed by extending levodopa's duration. COMT inhibitors (entacapone, tolcapone) block catechol-O-methyltransferase, preventing peripheral levodopa degradation and extending its availability for CNS conversion to dopamine. Alternatively, more frequent dosing can smooth out the effect."
      },
      {
        "q": "A Parkinson patient's family reports that the patient alternates between periods of normal movement and sudden, unpredictable 'freezing' episodes throughout the day. This is different from predictable end-of-dose wearing off. What is this phenomenon called?",
        "opts": [
          "On-off phenomenon — unpredictable fluctuations in motor function unrelated to dose timing, occurring in advanced Parkinson disease after years of levodopa therapy",
          "Tardive dyskinesia from long-term dopamine receptor stimulation",
          "Drug-drug interaction between levodopa and another undisclosed medication the patient is taking",
          "Neuroleptic malignant syndrome from excessive dopaminergic stimulation"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "The on-off phenomenon represents unpredictable motor fluctuations in advanced Parkinson disease. Unlike predictable wearing-off, these episodes occur randomly and are thought to result from progressive dopaminergic neuron loss and altered receptor sensitivity. Management is complex and may require subcutaneous apomorphine for rescue or continuous drug delivery systems."
      },
      {
        "q": "Which Black Box Warning specifically applies to SSRIs and SNRIs in patients aged 24 years or younger?",
        "opts": [
          "Cardiac arrhythmias including QTc prolongation in young adults",
          "Increased risk of suicidal thinking and behavior — monitor closely in the first weeks of treatment and with any dose changes",
          "Risk of serotonin syndrome with any antidepressant",
          "Hepatic failure requiring monthly LFT monitoring"
        ],
        "correct": 1,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "The FDA BBW on antidepressants states increased risk of suicidal thinking and behavior in children, adolescents, and young adults (≤24). Clinical monitoring is required in the first 4 weeks and with dose changes."
      },
      {
        "q": "A 19-year-old patient started on escitalopram for generalized anxiety disorder reports feeling more energetic and motivated after 1 week, but their mood remains depressed. Why does this specific clinical presentation increase suicide risk?",
        "opts": [
          "Escitalopram is not effective for anxiety, only depression, so the wrong diagnosis was made",
          "The increased energy indicates the patient was misdiagnosed and actually has bipolar disorder requiring mood stabilizer therapy",
          "Antidepressants may restore psychomotor energy before improving mood — a patient who was previously too fatigued to act on suicidal thoughts now has the energy to do so while still feeling hopeless",
          "Escitalopram causes paradoxical agitation in patients under 25 that is unrelated to the underlying depression"
        ],
        "correct": 2,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "The dangerous window occurs when antidepressants restore energy and motivation before mood improves. A suicidal patient with restored energy may now have the drive to execute a plan they were previously too fatigued to carry out. This is why close monitoring during the first weeks of SSRI therapy is critical, especially in young patients."
      },
      {
        "q": "A parent of a 14-year-old prescribed fluoxetine for major depression asks, 'If this drug can increase suicide risk, why would you prescribe it to my child?' What is the most appropriate nursing response?",
        "opts": [
          "The suicide risk only applies to adults, not adolescents, so there is no concern for your child",
          "Your child will be fine as long as they take the medication exactly as prescribed every day",
          "The BBW is outdated and no longer considered clinically relevant by most providers",
          "Untreated depression itself carries significant suicide risk — the benefits of treatment generally outweigh the risks, but close monitoring with weekly follow-up in the first month is essential to identify any worsening"
        ],
        "correct": 3,
        "cat": "Black Box Warning",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "The BBW does not mean antidepressants should be avoided — untreated depression has a higher overall suicide rate than treated depression. The BBW ensures informed consent, close monitoring (weekly visits for the first month), and caregiver education about warning signs. Fluoxetine is one of the only SSRIs with FDA approval for adolescent depression."
      },
      {
        "q": "An opioid-dependent patient who misses their prescribed morphine dose calls reporting severe anxiety, muscle aches, piloerection, diaphoresis, and diarrhea. What is occurring?",
        "opts": [
          "Opioid withdrawal syndrome — these are classic signs of physical dependence. The patient requires assessment and clinical management.",
          "Serotonin syndrome from morphine withdrawal",
          "Sympathetic rebound from beta-blocker discontinuation",
          "Benzodiazepine withdrawal with atypical presentation"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Classic opioid withdrawal: anxiety, insomnia, muscle aches, yawning, piloerection, diaphoresis, lacrimation, rhinorrhea, nausea, vomiting, diarrhea. Unlike benzo withdrawal, opioid withdrawal is extremely uncomfortable but rarely life-threatening in otherwise healthy adults."
      },
      {
        "q": "A patient in opioid withdrawal is started on clonidine 0.1 mg every 8 hours. What is the pharmacologic rationale for using an alpha-2 agonist in opioid withdrawal?",
        "opts": [
          "Clonidine directly activates mu-opioid receptors, providing partial agonist activity during withdrawal",
          "Clonidine reduces central sympathetic outflow by stimulating presynaptic alpha-2 receptors in the locus coeruleus — this counteracts the noradrenergic hyperactivity that drives withdrawal symptoms",
          "Clonidine blocks dopamine receptors that become hyperactive during opioid withdrawal",
          "Clonidine acts as a serotonin agonist that replaces the serotonergic effects lost when opioids are withdrawn"
        ],
        "correct": 1,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Opioid withdrawal causes noradrenergic storm — the locus coeruleus (primary CNS norepinephrine source) becomes hyperactive when mu-opioid inhibitory input is removed. Clonidine's alpha-2 agonism directly suppresses locus coeruleus firing, reducing tachycardia, hypertension, diaphoresis, and anxiety. It does not treat craving or prevent relapse."
      },
      {
        "q": "A nurse is comparing opioid withdrawal and alcohol/benzodiazepine withdrawal. Which statement accurately distinguishes the two?",
        "opts": [
          "Opioid withdrawal can cause seizures and death; alcohol and benzodiazepine withdrawal is uncomfortable but not life-threatening",
          "Both withdrawal syndromes are equally dangerous and require identical pharmacologic management strategies",
          "Alcohol and benzodiazepine withdrawal can cause fatal seizures and delirium tremens; opioid withdrawal is intensely uncomfortable but rarely fatal in healthy adults",
          "Opioid withdrawal requires benzodiazepine treatment; alcohol withdrawal requires opioid treatment"
        ],
        "correct": 2,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Alcohol and benzodiazepine withdrawal can be life-threatening due to seizures and delirium tremens (alcohol) from GABA-receptor downregulation. Opioid withdrawal, while extremely distressing, rarely causes death in otherwise healthy individuals. This distinction affects clinical urgency and monitoring intensity."
      },
      {
        "q": "Serotonin syndrome is a life-threatening emergency. Which combination from these drugs presents the highest serotonin syndrome risk?",
        "opts": [
          "Sertraline + atorvastatin",
          "Clozapine + propranolol",
          "Lithium + metoprolol + furosemide",
          "Sertraline + linezolid + tramadol"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Sertraline (SSRI — blocks SERT), linezolid (MAOI activity), and tramadol (SSRI/SNRI-like activity) together create maximal serotonergic excess. Classic presentation: hyperthermia, agitation, clonus, diaphoresis, tachycardia, diarrhea."
      },
      {
        "q": "A nurse must differentiate serotonin syndrome from neuroleptic malignant syndrome (NMS). Which clinical feature most reliably distinguishes serotonin syndrome?",
        "opts": [
          "Clonus and hyperreflexia — serotonin syndrome produces neuromuscular excitation, while NMS causes lead-pipe rigidity with bradyreflexia",
          "Hyperthermia — only serotonin syndrome causes elevated body temperature",
          "Altered mental status — confusion occurs only in serotonin syndrome, not NMS",
          "Elevated creatine kinase — only NMS causes rhabdomyolysis and CK elevation"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Both syndromes cause hyperthermia and altered mental status. The key differentiator is neuromuscular findings: serotonin syndrome = hyperreflexia, clonus, myoclonus (excitation). NMS = lead-pipe rigidity, bradyreflexia (rigidity). Serotonin syndrome develops rapidly (hours); NMS develops over days."
      },
      {
        "q": "The treatment for serotonin syndrome includes the medication cyproheptadine. What is the mechanism of action that makes it effective?",
        "opts": [
          "Cyproheptadine is a direct serotonin reuptake inhibitor that clears excess serotonin from the synapse",
          "Cyproheptadine is a serotonin (5-HT2A) receptor antagonist that blocks the excessive post-synaptic serotonergic stimulation driving the syndrome",
          "Cyproheptadine inhibits monoamine oxidase B selectively, redirecting serotonin metabolism to a safe pathway",
          "Cyproheptadine stimulates GABA receptors to counterbalance the excitatory serotonergic activity"
        ],
        "correct": 1,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Cyproheptadine is a nonspecific serotonin antagonist with strong 5-HT2A blocking activity. By blocking post-synaptic serotonin receptors, it directly counteracts the excessive serotonergic stimulation. It is administered orally or via NG tube. Supportive care (cooling, benzodiazepines for agitation, IV fluids) is also essential."
      },
      {
        "q": "Extended-release morphine (MS Contin) is found crushed and dissolved. Why is this a critical safety concern?",
        "opts": [
          "Crushing extended-release opioids only slightly affects their duration",
          "Crushing makes the drug more difficult to absorb",
          "Crushing destroys the extended-release matrix — the entire extended-release dose is released immediately, causing a potentially lethal opioid overdose (dose dumping)",
          "Extended-release tablets can safely be crushed for patients with swallowing difficulty"
        ],
        "correct": 2,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Extended-release opioids contain many times the usual immediate-release dose. Crushing destroys the release mechanism, causing dose dumping — the entire dose hits the bloodstream at once, causing fatal respiratory depression. Never crush, chew, break, or dissolve ER opioids."
      },
      {
        "q": "A patient with a nasogastric tube needs pain management. The provider orders MS Contin (extended-release morphine) to be crushed and administered through the NG tube. What is the nurse's response?",
        "opts": [
          "Crush and administer as ordered — the NG tube is an acceptable alternative route for extended-release opioids",
          "Administer whole through the NG tube without crushing to preserve the extended-release matrix",
          "Crush the MS Contin but dilute in 250 mL of water to slow absorption and mimic the extended-release effect",
          "Refuse the order and notify the provider — crushing MS Contin causes dose dumping and potential fatal overdose. Request an immediate-release oral morphine solution or IV morphine instead."
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Extended-release opioids must never be crushed, regardless of the reason. Dilution does not recreate the extended-release mechanism. For NG tube patients, use immediate-release liquid morphine (Roxanol) at appropriate doses or convert to IV/SC morphine. The nurse must refuse unsafe orders."
      },
      {
        "q": "A provider orders OxyContin (extended-release oxycodone) 80 mg for an opioid-naive patient with acute post-surgical pain. What makes this order dangerous?",
        "opts": [
          "Extended-release opioids at high doses (≥80 mg oxycodone) are reserved for opioid-tolerant patients only — this dose in an opioid-naive patient can cause fatal respiratory depression even without crushing",
          "OxyContin 80 mg tablets are only available in an abuse-deterrent formulation that prevents proper absorption",
          "OxyContin cannot be used for post-surgical pain because it is only FDA-approved for chronic pain",
          "The 80 mg tablet size does not exist and represents a prescribing error"
        ],
        "correct": 0,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Extended-release opioids at high doses are only for opioid-tolerant patients (defined as at least 1 week of scheduled opioid therapy). An opioid-naive patient has no tolerance and may develop fatal respiratory depression from the sustained high-level opioid exposure. The FDA BBW specifically addresses this — ER opioids are not for PRN or acute pain in opioid-naive patients."
      }
    ],
    "bridge_check": [
      {
        "q": "A patient receiving IV vancomycin for MRSA is prescribed morphine for pain. What interaction do you anticipate and how does it connect to the renal module?",
        "opts": [
          "No interaction — these drugs work on different systems",
          "Both vancomycin and morphine are renally cleared. In renal impairment, both accumulate. Morphine's active metabolite (M6G) also accumulates, causing prolonged sedation. Vancomycin troughs rise, increasing nephrotoxicity — a cycle that worsens renal function and compound drug accumulation.",
          "Morphine increases vancomycin effectiveness",
          "Vancomycin blocks opioid receptors, requiring higher morphine doses"
        ],
        "correct": 1,
        "cat": "Bridge M4→M7",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Morphine's active metabolite M6G is renally cleared — accumulates in CKD causing prolonged CNS/respiratory depression. Vancomycin is nephrotoxic and renally cleared. Both accumulate, creating a cycle of worsening renal function."
      },
      {
        "q": "A patient with Stage 3 CKD requires opioid analgesia. Why is morphine a poor choice compared to hydromorphone or fentanyl in this patient?",
        "opts": [
          "Morphine is less potent than hydromorphone and fentanyl, requiring higher doses that stress the kidneys",
          "Morphine requires dose escalation in CKD because renal impairment accelerates its hepatic metabolism",
          "Morphine produces active metabolites (M3G and M6G) that accumulate in renal impairment — M6G causes prolonged sedation and respiratory depression. Hydromorphone and fentanyl have less active renal metabolite accumulation.",
          "All opioids are equally dangerous in CKD and none should be preferred over another"
        ],
        "correct": 2,
        "cat": "Bridge M4→M2",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Morphine-6-glucuronide (M6G) is pharmacologically active and renally eliminated. In CKD, M6G accumulates and causes prolonged CNS depression that persists long after the parent drug clears. Hydromorphone has a less active metabolite (H3G), and fentanyl has inactive metabolites, making them safer choices in renal impairment."
      },
      {
        "q": "A patient on chronic vancomycin develops vancomycin-induced nephrotoxicity. Their concurrent morphine PCA suddenly causes excessive sedation despite unchanged settings. What bridging concept explains this deterioration?",
        "opts": [
          "Vancomycin directly potentiates morphine at mu-opioid receptors through an additive pharmacodynamic mechanism",
          "Morphine accelerated the vancomycin nephrotoxicity, but the sedation is unrelated to renal function changes",
          "The sedation is from vancomycin itself, not morphine — vancomycin causes CNS depression at toxic levels",
          "Vancomycin-induced renal injury reduces morphine and M6G clearance — drug and metabolite accumulate, producing escalating sedation without any dose change. Both drugs must be adjusted for the new renal function."
        ],
        "correct": 3,
        "cat": "Bridge M4→M7",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "This is a multi-organ cascade: vancomycin causes nephrotoxicity → reduced GFR → morphine and M6G accumulate → increased sedation and respiratory depression. Without recognizing the renal-opioid connection, the nurse may attribute sedation to disease progression rather than drug accumulation."
      },
      {
        "q": "Levodopa/carbidopa is being given to a Parkinson patient. A new order comes in for metoclopramide (Reglan) 10 mg IV for nausea. What should you do?",
        "opts": [
          "Do not administer metoclopramide — it is a D2 dopamine antagonist that directly opposes levodopa's mechanism and significantly worsens Parkinson motor symptoms. Notify provider and suggest ondansetron as an alternative.",
          "Administer both — nausea management is essential",
          "Reduce levodopa dose by 50% and give the metoclopramide",
          "Give metoclopramide 2 hours before levodopa to minimize the interaction"
        ],
        "correct": 0,
        "cat": "Bridge M4→M6",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Metoclopramide blocks D2 receptors — the same receptors levodopa stimulates. This can cause acute Parkinson worsening. Ondansetron (5-HT3 antagonist) is the safe antiemetic alternative."
      },
      {
        "q": "A Parkinson patient develops gastroparesis. Metoclopramide is the most effective prokinetic agent, but it is contraindicated. What alternative medication and bridging concept applies?",
        "opts": [
          "Prochlorperazine — a different dopamine antagonist antiemetic with less CNS penetration than metoclopramide",
          "Domperidone (where available) — a D2 antagonist that does not cross the blood-brain barrier significantly, providing peripheral prokinetic effect without worsening central Parkinson symptoms",
          "Haloperidol at low dose — its prokinetic effects are equivalent to metoclopramide without CNS dopamine antagonism",
          "Ondansetron — its 5-HT3 antagonism provides equivalent prokinetic effects to metoclopramide"
        ],
        "correct": 1,
        "cat": "Bridge M4→M6",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Domperidone is a peripheral D2 antagonist with poor BBB penetration, making it the prokinetic of choice in Parkinson disease. It improves GI motility without blocking central D2 receptors that levodopa is trying to stimulate. Availability varies by country. Ondansetron treats nausea but is not a prokinetic."
      },
      {
        "q": "A patient with Parkinson disease on levodopa/carbidopa is started on quetiapine for hallucinations. Why is quetiapine preferred over haloperidol for psychosis in Parkinson disease?",
        "opts": [
          "Quetiapine is a stronger antipsychotic than haloperidol with faster onset of action",
          "Quetiapine does not require the same REMS monitoring as haloperidol in Parkinson patients",
          "Quetiapine has very low D2 receptor affinity and primarily acts through 5-HT2A antagonism — this treats psychosis with minimal worsening of Parkinson motor symptoms, unlike haloperidol's strong D2 blockade",
          "Haloperidol is only effective for schizophrenia, not drug-induced psychosis in Parkinson disease"
        ],
        "correct": 2,
        "cat": "Bridge M4→M4",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Quetiapine and clozapine are the only antipsychotics considered safe in Parkinson disease due to their low D2 affinity. Haloperidol, risperidone, and olanzapine have strong D2 antagonism that worsens Parkinson motor symptoms. Pimavanserin (Nuplazid), a selective 5-HT2A inverse agonist, is FDA-approved specifically for Parkinson psychosis."
      },
      {
        "q": "A patient on sertraline for depression develops a UTI and is prescribed linezolid. What is your bridge between the psychiatric and infectious disease modules here?",
        "opts": [
          "No interaction — antibiotics and antidepressants do not cross-react",
          "Linezolid and sertraline are safe to combine if the patient is closely monitored",
          "Reduce sertraline to 50 mg and proceed with linezolid",
          "Linezolid has monoamine oxidase inhibitor (MAOI) activity. Combining with sertraline (SSRI) risks life-threatening serotonin syndrome. Must hold sertraline, wait appropriate washout, and consider an alternative antibiotic or manage sertraline discontinuation under psychiatric supervision."
        ],
        "correct": 3,
        "cat": "Bridge M4→M7",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Linezolid's MAOI activity combined with SSRI serotonin reuptake inhibition can produce fatal serotonin syndrome. Alternative antibiotics (daptomycin, vancomycin, tedizolid) should be considered."
      },
      {
        "q": "A patient on sertraline for PTSD develops MRSA bacteremia. The infectious disease team recommends linezolid as the only effective oral step-down antibiotic. What multi-step management plan bridges M4 and M7?",
        "opts": [
          "Discontinue sertraline immediately and begin linezolid after a 2-week SSRI washout period — consult psychiatry for alternative psychiatric management during the washout",
          "Continue sertraline and add linezolid — serotonin syndrome risk is theoretical only and has never occurred clinically",
          "Stop sertraline, start linezolid the same day, and restart sertraline the day after linezolid is completed",
          "Switch from sertraline to a benzodiazepine for anxiety during linezolid therapy since benzodiazepines have no MAOI interaction"
        ],
        "correct": 0,
        "cat": "Bridge M4→M7",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "SSRIs require washout before MAOI exposure. Sertraline's half-life (~26 hours) requires approximately 5 half-lives (5-7 days) for clearance; the standard recommendation is 14 days for MAOIs. Psychiatry consultation ensures safe transition and alternative mood management during the washout period."
      },
      {
        "q": "A patient on chronic phenelzine (an irreversible MAOI) for treatment-resistant depression requires emergency surgery. The anesthesiologist asks what analgesic to avoid. What is the bridge between neuropsych and surgical pharmacology?",
        "opts": [
          "Avoid propofol — it has MAOI-potentiating properties that cause serotonin excess during anesthesia",
          "Avoid meperidine (Demerol) — it has serotonergic activity that combined with MAOI therapy causes potentially fatal serotonin syndrome. Use fentanyl or morphine with careful titration instead.",
          "Avoid all opioids — MAOIs render every opioid class dangerous through universal serotonergic interaction",
          "Avoid ketamine — its NMDA antagonism combined with MAOI activity causes hypertensive crisis"
        ],
        "correct": 1,
        "cat": "Bridge M4→M7",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Meperidine is absolutely contraindicated with MAOIs due to its serotonergic activity — fatal serotonin syndrome and hyperpyrexia have been documented. Other opioids (fentanyl, morphine, hydromorphone) can be used cautiously with monitoring. Tramadol and methadone also have serotonergic properties and should be avoided with MAOIs."
      },
      {
        "q": "Morphine is used for dyspnea in a palliative care patient with end-stage COPD. The same patient takes furosemide for cor pulmonale. How do these drugs interact and what is the monitoring priority?",
        "opts": [
          "No interaction between opioids and diuretics",
          "Furosemide increases morphine excretion — higher doses required",
          "Both drugs affect respiratory drive. Furosemide causes metabolic alkalosis which blunts hypercapnic respiratory drive. Morphine causes direct respiratory depression. Combined in advanced COPD, respiratory depression risk is higher — monitor closely and titrate morphine carefully.",
          "Morphine should never be used in COPD under any circumstances"
        ],
        "correct": 2,
        "cat": "Bridge M3→M4",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "In palliative care, low-dose opioids reduce dyspnea effectively. However, in advanced COPD with impaired respiratory reserve, morphine's respiratory depression combines with furosemide-induced alkalosis blunting hypercapnic drive. Start with very low doses and monitor RR, SpO2, and comfort."
      },
      {
        "q": "A patient with COPD on home oxygen is prescribed codeine for a severe cough. Why must the nurse exercise extra caution compared to prescribing codeine for a patient with normal lungs?",
        "opts": [
          "Codeine is more hepatotoxic in COPD patients due to impaired drug metabolism from hypoxia",
          "COPD patients are allergic to codeine at higher rates than the general population",
          "Codeine interacts with supplemental oxygen to form toxic metabolites in the alveoli",
          "COPD patients have reduced respiratory reserve — even mild opioid-induced respiratory depression from codeine can cause dangerous hypercapnia and hypoxemia in patients whose baseline ventilatory capacity is already compromised"
        ],
        "correct": 3,
        "cat": "Bridge M3→M4",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "COPD patients operate near their ventilatory limit at baseline. Codeine, as an opioid, depresses respiratory drive through mu-receptor activation in the brainstem. In patients with limited respiratory reserve, even mild respiratory depression can cause clinically significant hypercapnia and hypoxemia. Use the lowest effective dose with close monitoring."
      },
      {
        "q": "A palliative care patient with end-stage COPD on morphine 2 mg PO q4h for dyspnea develops a headache and is given sumatriptan. The nurse identifies a potential concern. What is it?",
        "opts": [
          "Morphine and sumatriptan both have serotonergic properties — morphine can inhibit serotonin reuptake, and sumatriptan is a 5-HT1B/1D agonist, creating a mild serotonin syndrome risk",
          "Sumatriptan causes bronchospasm in COPD patients through beta-receptor blockade",
          "Sumatriptan reverses morphine's dyspnea benefit by stimulating respiratory drive excessively",
          "Sumatriptan and morphine compete for the same hepatic CYP3A4 enzyme, causing morphine accumulation"
        ],
        "correct": 0,
        "cat": "Bridge M3→M4",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "While the serotonin syndrome risk with this specific combination is low, morphine does have some serotonergic activity, and triptans are 5-HT agonists. The FDA has issued a communication about serotonin syndrome risk with triptans and serotonergic drugs. The nurse should monitor for serotonin syndrome symptoms: agitation, clonus, tachycardia, diaphoresis."
      },
      {
        "q": "A patient with bipolar disorder on lithium is admitted with pneumonia and started on ibuprofen for fever and pleuritis pain. Their lithium level was 0.9 mEq/L yesterday. Why is this combination dangerous?",
        "opts": [
          "NSAIDs reduce lithium absorption from the GI tract",
          "NSAIDs inhibit renal prostaglandin synthesis, reducing renal blood flow and GFR — this decreases lithium clearance, causing levels to rise into the toxic range (>1.2-1.5 mEq/L) rapidly",
          "Ibuprofen directly inhibits lithium's CNS effects",
          "No significant interaction — acetaminophen would be the same risk"
        ],
        "correct": 1,
        "cat": "Bridge M4→M7",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "NSAIDs inhibit COX → reduce prostaglandin → afferent renal arteriole constriction → reduced GFR → lithium clearance falls → lithium accumulates. Can cause toxicity within 2-3 days. Acetaminophen is the safe alternative."
      },
      {
        "q": "A patient on lithium 600 mg BID develops an acute kidney injury from contrast dye during a cardiac catheterization. Lithium level rises from 1.0 to 1.8 mEq/L. What multi-system bridge concepts are at play?",
        "opts": [
          "Contrast dye directly binds lithium in the blood, artificially elevating the measured level without true toxicity",
          "Lithium accelerated the contrast nephropathy, so the primary concern is renal failure, not lithium toxicity",
          "Contrast-induced nephropathy reduces GFR → lithium is entirely renally cleared → diminished clearance causes rapid lithium accumulation → approaching toxic levels. Both the AKI and lithium level must be managed simultaneously.",
          "The cardiac catheterization itself caused lithium redistribution from tissue to blood"
        ],
        "correct": 2,
        "cat": "Bridge M1→M2→M4",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "This bridges cardiovascular (cardiac cath), renal (contrast-induced AKI), and neuropsych (lithium). Lithium is 100% renally cleared with no hepatic metabolism. Any reduction in GFR directly increases lithium levels. Management: hold lithium, aggressive IV hydration, monitor lithium levels serially, consider hemodialysis if level >2.0 with symptoms."
      },
      {
        "q": "A patient on lithium for bipolar disorder is prescribed lisinopril for newly diagnosed hypertension. Why should the nurse anticipate a lithium dose adjustment?",
        "opts": [
          "Lisinopril induces CYP enzymes that accelerate lithium metabolism, requiring a dose increase",
          "ACE inhibitors directly bind lithium in the proximal tubule, preventing its normal excretion",
          "Lisinopril causes sodium retention that competitively inhibits lithium absorption from the GI tract",
          "ACE inhibitors reduce GFR by blocking angiotensin II-mediated efferent arteriolar constriction — this decreases lithium renal clearance and can raise lithium levels into the toxic range"
        ],
        "correct": 3,
        "cat": "Bridge M1→M4",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "ACE inhibitors reduce angiotensin II → reduced efferent arteriole constriction → decreased GFR → reduced lithium clearance. Lithium levels typically rise 25-40% when ACE inhibitors are started. Monitor lithium levels closely and reduce the lithium dose preemptively. This bridges cardiovascular (ACE inhibitors) and neuropsych (lithium) modules."
      }
    ]
  },
  "M5": {
    "rapid_fire": [
      {
        "q": "A patient is prescribed both insulin glargine (Lantus) and insulin aspart (NovoLog). What is the critical distinction in timing?",
        "opts": [
          "Glargine is basal insulin — once daily, no peak, 24h duration. Aspart is rapid-acting — given 0-15 minutes before meals, peaks in 1-3 hours. They serve completely different roles.",
          "Both are given at bedtime together",
          "Aspart is given at bedtime; glargine before each meal",
          "They are interchangeable and can be mixed in the same syringe"
        ],
        "correct": 0,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Glargine = basal: flat profile over 24 hours, given once daily regardless of meals, cannot be mixed. Aspart = rapid: onset 10-20 min, peak 1-3 hours, duration 3-5 hours — given immediately before meals."
      },
      {
        "q": "A nurse discovers that insulin glargine and insulin aspart have been drawn into the same syringe by a new graduate nurse. Why must this syringe be discarded?",
        "opts": [
          "Mixing insulins in one syringe always causes a chemical explosion that renders both inactive",
          "Glargine's acidic pH (4.0) is incompatible with other insulins — mixing alters glargine's microprecipitate formation, destroying its 24-hour duration and creating an unpredictable absorption profile",
          "Mixing any two insulins in one syringe is universally prohibited regardless of the insulin types",
          "The combined volume in a single syringe exceeds the maximum safe injection volume for subcutaneous tissue"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Insulin glargine forms microprecipitates at physiologic pH that slowly dissolve over 24 hours — this is the mechanism of its extended duration. Its acidic formulation (pH 4.0) is incompatible with other insulins. Mixing destroys this precipitation mechanism, converting glargine into an unpredictable intermediate-acting insulin. Discard and draw separately."
      },
      {
        "q": "A patient asks why they cannot just take more insulin aspart (rapid-acting) twice a day instead of adding insulin glargine (long-acting). What is the physiologic explanation?",
        "opts": [
          "Rapid-acting insulin can substitute for basal insulin if the total daily dose remains the same",
          "Rapid-acting insulin damages the pancreas when used more than three times daily",
          "The body needs continuous low-level insulin between meals and overnight to suppress hepatic glucose production — rapid-acting insulin peaks and dissipates too quickly to provide this baseline coverage",
          "Basal insulin is cheaper than rapid-acting insulin, which is the primary reason for the combination approach"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Basal insulin mimics the pancreas's continuous low-level insulin secretion that suppresses hepatic gluconeogenesis between meals. Rapid-acting insulin covers postprandial glucose spikes. Without basal coverage, hepatic glucose output remains unchecked, causing fasting and between-meal hyperglycemia."
      },
      {
        "q": "Metformin's Black Box Warning involves lactic acidosis. Which clinical situation carries the HIGHEST risk for this complication?",
        "opts": [
          "Patient with a history of mild seasonal allergies",
          "Patient with well-controlled blood pressure on an ACE inhibitor",
          "Patient taking an SSRI concurrently",
          "Patient with eGFR 24 mL/min developing acute illness with vomiting and dehydration"
        ],
        "correct": 3,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Lactic acidosis from metformin requires: (1) metformin accumulation (eGFR <30) AND (2) tissue hypoxia. Acute illness with dehydration reduces renal perfusion and GFR suddenly, causing metformin accumulation while lactic acid production rises."
      },
      {
        "q": "A patient on metformin is scheduled for coronary angiography with IV contrast. The radiologist requests that metformin be held. When should metformin be restarted?",
        "opts": [
          "Resume metformin only after confirming stable renal function (serum creatinine or eGFR) at least 48 hours after contrast administration",
          "Resume metformin immediately after the procedure once the patient is eating normally",
          "Metformin should be permanently discontinued after any contrast exposure due to irreversible renal injury risk",
          "Resume metformin 24 hours after the procedure regardless of renal function"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Contrast agents can cause AKI. If AKI develops while metformin is in the system, metformin accumulates and lactic acidosis risk rises dramatically. Standard protocol: hold metformin before contrast and restart only after confirming stable renal function 48 hours post-procedure."
      },
      {
        "q": "A diabetic patient on metformin is admitted to the ICU with sepsis and lactic acidosis. Serum lactate is 6.2 mmol/L and pH is 7.18. What is the priority pharmacologic action?",
        "opts": [
          "Continue metformin since lactic acidosis in sepsis is caused by tissue hypoperfusion, not the drug",
          "Discontinue metformin immediately — regardless of whether metformin initiated or worsened the lactic acidosis, it must be held in any patient with significant lactic acidosis because it impairs hepatic lactate clearance",
          "Double the metformin dose to improve glucose control during the acute metabolic stress of sepsis",
          "Switch from metformin to a sulfonylurea, which does not cause lactic acidosis in sepsis patients"
        ],
        "correct": 1,
        "cat": "Black Box Warning",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "In sepsis with lactic acidosis, distinguishing metformin-induced from sepsis-induced lactic acidosis is difficult and clinically irrelevant for the immediate action: stop metformin. Metformin inhibits hepatic gluconeogenesis (which clears lactate), worsening any lactic acidosis regardless of its cause. Manage the underlying sepsis and provide supportive care."
      },
      {
        "q": "A patient on levothyroxine asks if they can take it with their calcium supplement in the morning for convenience. What do you advise?",
        "opts": [
          "Yes — calcium enhances thyroid hormone absorption",
          "Only if they drink plenty of water with both",
          "No — calcium (and also iron, antacids, PPIs) significantly impairs levothyroxine absorption. Separate by at least 4 hours. Take levothyroxine on an empty stomach 30-60 minutes before breakfast.",
          "It depends on the levothyroxine brand — some are unaffected by calcium"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Calcium, iron, antacids, PPIs, and high-fiber foods all reduce levothyroxine absorption. Take on an empty stomach 30-60 minutes before food or other medications, at the same time daily."
      },
      {
        "q": "A patient on levothyroxine has been taking it with their morning coffee for years. Their TSH has been stable but the provider recently increased the dose. What interaction should the nurse address?",
        "opts": [
          "Coffee has no effect on levothyroxine pharmacokinetics at any dose",
          "The only concern with coffee is that caffeine masks hypothyroidism symptoms, not that it affects the drug",
          "Coffee enhances levothyroxine metabolism through CYP1A2 induction only at high doses",
          "Coffee reduces levothyroxine absorption by up to 30% — while the patient may have been dose-adjusted to compensate, changes in coffee intake could now cause unpredictable thyroid levels"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "SECE-SIC",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Coffee (including espresso) reduces levothyroxine absorption by approximately 30%. Some patients compensate with higher doses, but this creates instability — any change in coffee habit changes thyroid levels. The safest approach is to separate levothyroxine from coffee by at least 30-60 minutes."
      },
      {
        "q": "A hypothyroid patient on levothyroxine is started on omeprazole for GERD. After 8 weeks, their TSH rises from 2.5 to 7.8 mIU/L. What is the pharmacologic explanation?",
        "opts": [
          "Omeprazole raises gastric pH, which impairs the acid-dependent dissolution and absorption of levothyroxine tablets — less drug reaches systemic circulation, causing hypothyroid symptoms and TSH elevation",
          "Omeprazole directly accelerates levothyroxine hepatic metabolism through CYP2C19 induction",
          "Omeprazole stimulates thyroid-stimulating hormone release from the pituitary independently of thyroid hormone levels",
          "PPIs cause thyroid gland inflammation that temporarily impairs endogenous thyroid hormone production"
        ],
        "correct": 0,
        "cat": "Interactions",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Levothyroxine requires an acidic gastric environment for optimal tablet dissolution and absorption. PPIs raise gastric pH significantly. Reduced absorption leads to declining T4 levels and compensatory TSH elevation. Levothyroxine dose may need to increase while on a PPI, or a liquid/gel cap formulation that is less pH-dependent can be used."
      },
      {
        "q": "Which of the following correctly matches an insulin type with its onset time?",
        "opts": [
          "Insulin glargine (Lantus) — onset 10-20 minutes",
          "Insulin aspart (NovoLog) — onset 10-20 minutes",
          "Insulin NPH — onset 5 minutes",
          "Regular insulin — onset 10-20 minutes"
        ],
        "correct": 1,
        "cat": "Classification",
        "nclex": "HPM",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Rapid (aspart, lispro, glulisine) = 10-20 min onset. Short (regular) = 30-60 min. Intermediate (NPH) = 1-3 hours. Long (glargine, detemir) = 1-2 hours, no distinct peak."
      },
      {
        "q": "A nurse is preparing to administer insulin NPH and insulin regular in the same syringe. What is the correct drawing order and why?",
        "opts": [
          "Draw NPH first, then regular — the cloudy insulin should be drawn before the clear to prevent cross-contamination",
          "Either order is acceptable as long as the total dose is correct",
          "Draw regular (clear) first, then NPH (cloudy) — if NPH contaminates the regular insulin vial, it would alter the regular insulin's rapid onset in the vial for all future doses",
          "NPH and regular insulin cannot be mixed in the same syringe under any circumstances"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "'Clear before cloudy' — draw regular (clear) first, then NPH (cloudy). If NPH (which contains protamine that slows absorption) contaminates the regular insulin vial, it would convert the regular insulin in the vial to an intermediate-acting insulin for all future draws, affecting dose predictability."
      },
      {
        "q": "A patient receives insulin lispro (Humalog) 10 units with lunch at 12:00 PM. At what time is the patient at greatest risk for hypoglycemia?",
        "opts": [
          "12:15 PM — within the first 15 minutes after the dose",
          "The next morning — lispro accumulates overnight and peaks the following day",
          "6:00 PM — insulin lispro has a delayed peak at approximately 6 hours after injection",
          "1:00-3:00 PM — insulin lispro peaks at 1-3 hours after subcutaneous injection, creating maximum glucose-lowering effect during this window"
        ],
        "correct": 3,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Rapid-acting insulin analogs (lispro, aspart, glulisine) have onset in 10-20 minutes and peak at 1-3 hours. The greatest hypoglycemia risk occurs during peak action. The patient should have eaten an adequate meal by 12:00 PM and should be monitored for hypoglycemia symptoms between 1:00-3:00 PM."
      },
      {
        "q": "A patient on empagliflozin (Jardiance) for diabetes and heart failure develops nausea, vomiting, and blood glucose of 185 mg/dL. Serum pH is 7.21. What SGLT-2 inhibitor complication must be considered?",
        "opts": [
          "Euglycemic diabetic ketoacidosis (euDKA) — SGLT-2 inhibitors can cause DKA even with relatively normal glucose levels",
          "Lactic acidosis from impaired lactate metabolism",
          "Normal DKA — glucose 185 is actually too low to indicate DKA",
          "Hyperosmolar hyperglycemic state (HHS) with atypically low glucose"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "SGLT-2 inhibitors cause euglycemic DKA — DKA at glucose 150-250 mg/dL. Hold SGLT-2 inhibitor perioperatively, during illness, and when DKA is suspected. Test urine/blood ketones, not just glucose."
      },
      {
        "q": "A patient on dapagliflozin is scheduled for elective surgery in 3 days. The surgeon asks the nurse to provide pre-operative medication guidance. What instruction regarding dapagliflozin is most important?",
        "opts": [
          "Continue dapagliflozin up to and including the morning of surgery to maintain glucose control",
          "Hold dapagliflozin at least 3-4 days before surgery — the perioperative fasting state combined with surgical stress increases euglycemic DKA risk with SGLT-2 inhibitors",
          "Switch dapagliflozin to an equivalent dose of metformin for the perioperative period",
          "Dapagliflozin has no perioperative concerns and can be continued through the surgical period"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "FDA and anesthesia guidelines recommend holding SGLT-2 inhibitors 3-4 days before elective surgery. The combination of fasting (reduced carbohydrate intake), surgical stress (cortisol and catecholamine release), and SGLT-2-mediated glycosuria creates conditions favorable for euglycemic DKA. The long half-life of some SGLT-2 inhibitors requires this extended hold."
      },
      {
        "q": "A nurse is evaluating a patient on canagliflozin who reports frequent urinary tract infections since starting the medication. What is the pharmacologic explanation for this adverse effect?",
        "opts": [
          "Canagliflozin directly impairs the bladder's immune defense mechanisms through local tissue toxicity",
          "Canagliflozin causes urinary retention that leads to stasis and bacterial colonization",
          "SGLT-2 inhibitors cause glycosuria (glucose in the urine) — the glucose-rich urinary environment promotes bacterial and fungal growth, increasing the risk of UTIs and genital mycotic infections",
          "The UTIs are coincidental and unrelated to the SGLT-2 inhibitor mechanism of action"
        ],
        "correct": 2,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "SGLT-2 inhibitors work by blocking glucose reabsorption in the proximal tubule, causing intentional glycosuria. The glucose-rich urine creates a favorable environment for bacterial and Candida growth. Genital mycotic infections (especially vulvovaginal candidiasis) and UTIs are common class effects. Patient education should include perineal hygiene and prompt reporting of symptoms."
      },
      {
        "q": "A patient is diagnosed with primary hypothyroidism. TSH is 18 mIU/L, free T4 is low. Which drug is first-line therapy?",
        "opts": [
          "Radioactive iodine — destroys thyroid tissue",
          "Propylthiouracil (PTU) — blocks thyroid hormone synthesis",
          "Methimazole — inhibits thyroid peroxidase",
          "Levothyroxine (T4 replacement) — titrated to achieve TSH 0.5-2.5 mIU/L"
        ],
        "correct": 3,
        "cat": "Indications",
        "nclex": "HPM",
        "process": "Planning",
        "cognitive": "Knowledge",
        "rationale": "Hypothyroidism = low thyroid hormone → high TSH. Treatment: replace T4 with levothyroxine. PTU and methimazole treat hyperthyroidism. Titrate slowly with TSH monitoring every 6-8 weeks."
      },
      {
        "q": "An elderly patient with coronary artery disease is newly diagnosed with hypothyroidism (TSH 35 mIU/L). The provider starts levothyroxine at 25 mcg daily instead of the usual 1.6 mcg/kg/day full replacement dose. Why?",
        "opts": [
          "In patients with CAD, starting at a full replacement dose can abruptly increase metabolic rate, heart rate, and myocardial oxygen demand — potentially triggering angina, arrhythmia, or MI. A low starting dose with gradual titration is safer.",
          "The full dose would cause immediate thyroid storm in an elderly patient",
          "Elderly patients have reduced GI absorption that makes lower doses equally effective",
          "The lower dose is a dosing error that the nurse should question before administering"
        ],
        "correct": 0,
        "cat": "Special Populations",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Thyroid hormone increases cardiac chronotropy and inotropy by upregulating beta-adrenergic receptors. In CAD patients, a sudden increase in metabolic demand can outstrip coronary supply, causing ischemia. Start low (12.5-25 mcg/day) and increase by 12.5-25 mcg every 4-6 weeks with cardiac monitoring."
      },
      {
        "q": "A patient has been on stable levothyroxine for years. They switch from a brand-name to a generic formulation. The provider orders TSH monitoring in 6 weeks. Why is this necessary for a seemingly equivalent medication?",
        "opts": [
          "Generic levothyroxine is inferior to brand-name and will always require a higher dose",
          "Small differences in bioavailability between levothyroxine formulations (even within FDA-approved equivalence) can cause clinically significant changes in TSH — levothyroxine has a narrow therapeutic index",
          "Monitoring is unnecessary because FDA bioequivalence standards guarantee identical clinical effects",
          "The provider is being overly cautious — formulation switches never affect thyroid hormone levels"
        ],
        "correct": 1,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Levothyroxine has a narrow therapeutic index — small changes in absorbed dose affect TSH significantly. FDA allows 80-125% bioequivalence for generics, but even this range can shift a patient from euthyroid to hypo- or hyperthyroid. The recommendation is to monitor TSH 6-8 weeks after any formulation change and maintain consistency."
      },
      {
        "q": "Alendronate (Fosamax) for osteoporosis is prescribed for an outpatient. Which administration instruction is MOST critical to prevent serious adverse effects?",
        "opts": [
          "Take with food for better absorption and GI tolerance",
          "Take at bedtime to improve bone metabolism during sleep",
          "Take with a full 8 oz glass of water, remain upright for 30-60 minutes, take on an empty stomach — to prevent esophageal ulceration",
          "Can be taken with milk or calcium-rich beverages for bone benefit"
        ],
        "correct": 2,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Bisphosphonates cause severe esophageal irritation, ulceration, and stricture if they remain in the esophagus. Take on empty stomach, with a full glass of water, remain upright 30-60 minutes."
      },
      {
        "q": "A patient on alendronate for 7 years reports new-onset thigh pain without trauma. An X-ray shows a stress fracture of the femoral shaft. What bisphosphonate complication is this?",
        "opts": [
          "Osteomalacia from bisphosphonate-induced vitamin D depletion causing weakened bone matrix",
          "Septic arthritis of the hip causing referred pain to the thigh and secondary bone weakening",
          "Pathologic fracture indicating the osteoporosis has worsened despite treatment",
          "Atypical femoral fracture — paradoxically, long-term bisphosphonate use (>5 years) suppresses bone turnover so completely that microdamage accumulates, leading to stress fractures in cortical bone"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Atypical femoral fractures are a recognized complication of prolonged bisphosphonate therapy (>3-5 years). Excessive suppression of bone remodeling prevents repair of microdamage in cortical bone. Prodromal thigh pain often precedes the fracture. Drug holidays after 3-5 years of therapy are recommended for patients at low-moderate fracture risk."
      },
      {
        "q": "A patient scheduled for a dental extraction reports taking zoledronic acid IV annually for osteoporosis. What dental complication must the dentist and nurse be aware of?",
        "opts": [
          "Bisphosphonate-related osteonecrosis of the jaw (BRONJ) — bisphosphonates suppress osteoclast-mediated bone remodeling in the jaw, and invasive dental procedures can trigger non-healing bone exposure",
          "Zoledronic acid causes excessive dental bleeding requiring pre-procedure clotting factor administration",
          "Zoledronic acid causes tooth enamel dissolution requiring fluoride pretreatment before dental procedures",
          "IV bisphosphonates are contraindicated in patients who have any dental procedures planned within 5 years"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Bisphosphonate-related osteonecrosis of the jaw (BRONJ) results from suppressed jaw bone remodeling. The jaw has high bone turnover due to mechanical stress from mastication. Invasive dental procedures (extractions, implants) can expose devitalized bone that fails to heal. Risk is higher with IV bisphosphonates. Dental evaluation should occur before starting bisphosphonate therapy."
      },
      {
        "q": "A patient with type 2 diabetes, CKD Stage 4 (eGFR 22 mL/min), and heart failure asks why their endocrinologist stopped metformin and empagliflozin but kept their GLP-1 receptor agonist. What is the correct nursing explanation?",
        "opts": [
          "All three drugs should be stopped in CKD Stage 4 — the endocrinologist is wrong",
          "Metformin is held at eGFR <30 (lactic acidosis risk). SGLT-2 inhibitors lose glucose-lowering efficacy at low eGFR. GLP-1 agonists (semaglutide, liraglutide) do not depend on renal excretion for their glucose-lowering effect and are safer in moderate-severe CKD.",
          "The GLP-1 agonist was kept because it is the newest drug class",
          "Metformin and empagliflozin were replaced because they cause renal damage"
        ],
        "correct": 1,
        "cat": "Special Populations",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Drug selection in diabetic CKD: Metformin = hold at eGFR <30. SGLT-2 inhibitors = reduced glycemic benefit below eGFR 45. GLP-1 agonists act through gut and pancreatic receptors independently of renal function."
      },
      {
        "q": "A patient with T2DM and eGFR 55 mL/min is started on empagliflozin. At a follow-up visit, eGFR drops to 48 mL/min. The patient is concerned. What should the nurse explain?",
        "opts": [
          "The eGFR decline means empagliflozin is causing kidney damage and must be stopped immediately",
          "The eGFR drop is coincidental and unrelated to empagliflozin — recheck in 6 months without concern",
          "An initial eGFR dip of 3-5 mL/min is expected when starting SGLT-2 inhibitors — it reflects reduced intraglomerular pressure (hemodynamic, not structural), which is actually the renoprotective mechanism",
          "SGLT-2 inhibitors should be discontinued whenever eGFR drops below 50 mL/min"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Evaluation",
        "cognitive": "Analysis",
        "rationale": "SGLT-2 inhibitors reduce intraglomerular pressure by restoring tubuloglomerular feedback, constricting the afferent arteriole. This causes a predictable initial GFR dip (similar to ACE inhibitors). The hemodynamic effect is renoprotective long-term — landmark trials (DAPA-CKD, CREDENCE) showed reduced CKD progression despite the initial GFR dip."
      },
      {
        "q": "A patient with T2DM, NYHA Class III heart failure, and eGFR 35 mL/min is on insulin and a GLP-1 agonist. The cardiologist adds dapagliflozin. The patient asks, 'I thought SGLT-2 inhibitors don't work for glucose below eGFR 45?' Why is this prescription still appropriate?",
        "opts": [
          "The cardiologist made an error — SGLT-2 inhibitors should not be prescribed below eGFR 45 for any indication",
          "SGLT-2 inhibitors regain glycemic efficacy at very low eGFR levels through an alternative tubular mechanism",
          "The dapagliflozin is being used off-label without evidence to support its cardiac or renal benefit at this eGFR",
          "SGLT-2 inhibitors have FDA approval for heart failure and CKD progression reduction independent of glucose lowering — the cardio-renal benefits persist at lower eGFR even when the glycemic effect is diminished"
        ],
        "correct": 3,
        "cat": "Special Populations",
        "nclex": "HPM",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "SGLT-2 inhibitors have three distinct indications: glucose lowering, HFrEF, and CKD progression. While glucose-lowering efficacy declines below eGFR 45, the hemodynamic and renoprotective benefits persist. DAPA-HF and EMPEROR-Reduced trials enrolled patients at eGFR as low as 20 with positive outcomes. FDA approvals now include heart failure regardless of diabetes status."
      },
      {
        "q": "Sulfonylurea glipizide is prescribed for a 78-year-old patient with type 2 diabetes and mild renal impairment. What is the primary nursing concern?",
        "opts": [
          "Hypoglycemia — sulfonylureas stimulate insulin release regardless of glucose level. In elderly patients with renal impairment, hypoglycemia can be prolonged and severe, causing falls, confusion, and cardiac events.",
          "Cardiovascular risk — sulfonylureas cause cardiomyopathy",
          "Hyperkalemia from sulfonylurea renal effect",
          "Hepatotoxicity requiring monthly LFT monitoring"
        ],
        "correct": 0,
        "cat": "Special Populations",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Sulfonylureas stimulate insulin release regardless of glucose. In elderly patients, hypoglycemia causes falls, fractures, and cognitive impairment. Glyburide is on the Beers Criteria. Glipizide is preferred in elderly when a sulfonylurea is necessary."
      },
      {
        "q": "An 80-year-old patient on glyburide presents to the ED with confusion, diaphoresis, and a blood glucose of 38 mg/dL. After treatment with IV dextrose, glucose normalizes but then drops again 4 hours later. Why is recurrent hypoglycemia expected with glyburide in this patient?",
        "opts": [
          "The IV dextrose dose was insufficient to fully reverse the hypoglycemic episode",
          "Glyburide has an active metabolite that is renally cleared — in elderly patients with age-related renal decline, the metabolite accumulates, causing prolonged insulin secretion and recurrent hypoglycemia",
          "Glyburide induces a permanent increase in insulin secretion that cannot be reversed even after the drug clears",
          "Recurrent hypoglycemia is caused by the patient's concurrent use of ACE inhibitors, not the glyburide"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Glyburide has active metabolites with a long half-life that are renally cleared. In elderly patients with declining renal function, these metabolites accumulate, causing sustained insulin release and prolonged/recurrent hypoglycemia. This is why glyburide is on the Beers Criteria and should be avoided in the elderly. Glipizide (no active metabolites) is the preferred sulfonylurea."
      },
      {
        "q": "A patient with T2DM controlled on glipizide is admitted for elective surgery. The nurse notes the surgeon's order to continue glipizide on the morning of surgery. What concern should the nurse raise?",
        "opts": [
          "Glipizide should be continued perioperatively because surgical stress causes hyperglycemia that the sulfonylurea will help control",
          "Glipizide should be doubled on surgery day to counteract the stress hormone-induced hyperglycemia",
          "Glipizide should be held on the morning of surgery — the patient will be fasting, and a sulfonylurea that stimulates insulin release regardless of glucose level creates significant hypoglycemia risk in a fasting patient",
          "The nurse should administer glipizide with a small snack 30 minutes before surgery"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Sulfonylureas stimulate glucose-independent insulin release. In a fasting surgical patient, there is no dietary glucose to counterbalance this insulin secretion, creating significant hypoglycemia risk. Standard practice: hold sulfonylureas on the morning of surgery and manage glucose with insulin if needed."
      },
      {
        "q": "A patient with Graves' disease (hyperthyroidism) is prescribed propylthiouracil (PTU). What specific Black Box Warning must nursing be aware of?",
        "opts": [
          "Severe QT prolongation requiring ECG monitoring",
          "Cardiac arrhythmias from rapid thyroid suppression",
          "Agranulocytosis requiring ANC monitoring — same as clozapine",
          "Severe hepatotoxicity and liver failure — monitor LFTs and educate patients to report jaundice, abdominal pain, or dark urine immediately. PTU is generally reserved for first trimester of pregnancy and thyroid storm."
        ],
        "correct": 3,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "PTU carries a BBW for severe hepatotoxicity and liver failure. Methimazole is preferred for most patients. PTU is reserved for: first trimester of pregnancy (methimazole is teratogenic), thyroid storm, and methimazole intolerance."
      },
      {
        "q": "A pregnant patient with Graves' disease in her first trimester is on methimazole. The endocrinologist switches to PTU. Why is this transition clinically necessary despite PTU's hepatotoxicity BBW?",
        "opts": [
          "Methimazole crosses the placenta and causes aplasia cutis (scalp defects) and choanal/esophageal atresia in the first trimester — PTU's teratogenic risk is lower, making it the preferred agent for weeks 1-16 of gestation",
          "Methimazole is less effective than PTU during pregnancy due to altered hormone metabolism",
          "PTU has stronger antithyroid effects needed during the metabolic demands of pregnancy",
          "Methimazole causes gestational diabetes that complicates obstetric management"
        ],
        "correct": 0,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Methimazole is associated with aplasia cutis and embryopathy (choanal/esophageal atresia) when used in the first trimester. PTU has a lower teratogenic risk in early pregnancy despite its hepatotoxicity BBW. After the first trimester, many providers switch back to methimazole because PTU's hepatotoxicity risk persists while methimazole's teratogenic risk decreases."
      },
      {
        "q": "A patient on PTU for Graves' disease calls reporting new-onset jaundice, dark urine, and right upper quadrant pain. What is the nurse's immediate action?",
        "opts": [
          "Schedule a routine follow-up appointment within 1 week for LFT evaluation",
          "Instruct the patient to stop PTU immediately and seek emergency evaluation — these symptoms suggest hepatotoxicity consistent with PTU's BBW, which can progress rapidly to fulminant liver failure",
          "Reassure the patient that mild jaundice is a common, benign side effect of PTU that resolves spontaneously",
          "Recommend reducing the PTU dose by half and monitoring for symptom improvement over the next 48 hours"
        ],
        "correct": 1,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Jaundice, dark urine, and RUQ pain on PTU are red flags for hepatotoxicity — the BBW adverse effect. PTU-induced hepatotoxicity can progress rapidly to fulminant liver failure requiring transplantation. Immediate drug discontinuation and emergency LFT evaluation are mandatory. PTU should never be restarted if hepatotoxicity is confirmed."
      },
      {
        "q": "A patient on prednisone 40 mg/day for 6 weeks is being tapered off. On the last day of the taper, they report extreme fatigue, low blood pressure, and nausea. What do you suspect?",
        "opts": [
          "Drug withdrawal syndrome — unrelated to the adrenal axis",
          "Rebound inflammation from stopping the prednisone",
          "Adrenal insufficiency — prolonged supraphysiologic glucocorticoid therapy suppresses the HPA axis. Abrupt or overly rapid tapering does not give the adrenal glands time to resume cortisol production.",
          "Allergic reaction to the tapering formulation"
        ],
        "correct": 2,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Exogenous glucocorticoids suppress the HPA axis. After >3 weeks at supraphysiologic doses, the adrenals may not produce adequate cortisol when the drug is withdrawn. Treatment: stress-dose hydrocortisone."
      },
      {
        "q": "A patient who completed a prednisone taper 2 months ago develops a high fever from influenza. They become hypotensive and obtunded despite IV fluids. What endocrine emergency must be considered?",
        "opts": [
          "Thyroid storm from influenza-induced thyroid hormone release causing cardiovascular collapse",
          "Pheochromocytoma crisis with paradoxical hypotension from catecholamine depletion",
          "Diabetic ketoacidosis triggered by the infection and dehydration from high fever",
          "Adrenal crisis — the HPA axis may not have fully recovered from the prior steroid course, and the physiologic stress of acute illness demands cortisol the suppressed adrenals cannot produce"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "HPA axis recovery after prolonged corticosteroid use can take up to 12 months. During this recovery period, the adrenals may produce adequate cortisol at baseline but cannot mount the stress response needed during acute illness, surgery, or trauma. Adrenal crisis presents with hypotension, fatigue, nausea, and cardiovascular collapse. Emergency treatment: IV hydrocortisone 100 mg."
      },
      {
        "q": "A patient on chronic prednisone for rheumatoid arthritis requires emergency appendectomy. What perioperative steroid management is essential?",
        "opts": [
          "Administer stress-dose steroids (hydrocortisone 100 mg IV) before induction of anesthesia — the suppressed HPA axis cannot mount an adequate cortisol response to surgical stress, risking cardiovascular collapse",
          "Discontinue prednisone 24 hours before surgery to reduce infection risk from immunosuppression",
          "Continue the regular oral prednisone dose without modification since the patient is already on steroids",
          "Convert the oral prednisone to an equivalent dose of inhaled corticosteroid for the perioperative period"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Surgical stress normally triggers a cortisol surge of 75-150 mg/day (vs normal 15-25 mg/day). A patient on chronic exogenous steroids has a suppressed HPA axis that cannot generate this surge. Stress-dose steroids (hydrocortisone 100 mg IV pre-op, then rapid taper over 24-72 hours) provide the cortisol the adrenals cannot. Without this, perioperative cardiovascular collapse can occur."
      },
      {
        "q": "What is the therapeutic goal when monitoring levothyroxine effectiveness in primary hypothyroidism?",
        "opts": [
          "Free T4 in the upper half of normal range only",
          "TSH within the laboratory reference range (typically 0.5-4.5 mIU/L), generally targeted at 0.5-2.5 mIU/L with symptoms and free T4 taken into account",
          "T3 level alone — most sensitive marker",
          "Resolution of symptoms is sufficient — no lab monitoring needed"
        ],
        "correct": 1,
        "cat": "Monitoring",
        "nclex": "HPM",
        "process": "Evaluation",
        "cognitive": "Comprehension",
        "rationale": "TSH is the primary monitoring parameter. Recheck 6-8 weeks after any dose change. Goal typically 0.5-2.5 mIU/L, individualized. Free T4 adds information when TSH is ambiguous. Check annually once stable."
      },
      {
        "q": "A patient on levothyroxine has their TSH checked 2 weeks after a dose increase. The TSH has not changed significantly. The patient is frustrated. What should the nurse explain?",
        "opts": [
          "The dose increase was likely too small to be effective and should be doubled immediately",
          "Two weeks is adequate time for TSH equilibration — if TSH has not changed, the dose increase had no effect",
          "TSH reflects the average thyroid hormone level over weeks — it takes 6-8 weeks for TSH to fully equilibrate after a dose change. Checking TSH at 2 weeks provides an incomplete picture.",
          "TSH should be checked daily for the first month after any levothyroxine dose change"
        ],
        "correct": 2,
        "cat": "Monitoring",
        "nclex": "HPM",
        "process": "Evaluation",
        "cognitive": "Comprehension",
        "rationale": "TSH is produced by the anterior pituitary in response to circulating T4/T3 levels. Due to the long half-life of T4 (7 days) and the slow feedback loop, TSH takes 6-8 weeks to reach a new steady state after a dose change. Premature TSH measurement leads to unnecessary dose adjustments and iatrogenic thyroid dysfunction."
      },
      {
        "q": "A patient on levothyroxine has a TSH of 0.05 mIU/L (suppressed below normal) and reports palpitations, tremor, and heat intolerance. What does this indicate and what is the appropriate action?",
        "opts": [
          "The patient has developed Graves' disease that is unrelated to the levothyroxine therapy",
          "The symptoms are from levothyroxine allergy, and the patient should be switched to liothyronine (T3)",
          "A suppressed TSH with symptoms indicates the medication is working optimally and no change is needed",
          "The patient is over-replaced — the levothyroxine dose is too high, causing iatrogenic hyperthyroidism. The dose should be reduced with TSH rechecked in 6-8 weeks."
        ],
        "correct": 3,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Suppressed TSH with hyperthyroid symptoms indicates over-replacement. Excess T4 increases beta-adrenergic receptor expression and sensitivity, causing tachycardia, tremor, anxiety, and heat intolerance. Chronic over-replacement increases risks of atrial fibrillation and osteoporosis. Reduce the dose and recheck TSH in 6-8 weeks."
      },
      {
        "q": "GLP-1 receptor agonists (semaglutide, liraglutide) have a class Black Box Warning. What specific malignancy is listed?",
        "opts": [
          "Thyroid C-cell tumors (medullary thyroid carcinoma) — contraindicated in patients with personal or family history of MTC or MEN 2 syndrome",
          "Pancreatic cancer — associated with all incretin therapies",
          "Breast cancer in female patients",
          "Colorectal adenocarcinoma with long-term use"
        ],
        "correct": 0,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "GLP-1 agonists caused thyroid C-cell tumors in rodents. BBW contraindicates use in patients with personal or family history of MTC or MEN 2. Monitor for thyroid masses or hoarseness."
      },
      {
        "q": "A patient being started on semaglutide (Ozempic) for T2DM reports that their father was diagnosed with medullary thyroid carcinoma at age 45. What is the nurse's priority action?",
        "opts": [
          "Proceed with the injection as ordered — the family history does not affect the patient's medication safety",
          "Notify the provider immediately — GLP-1 agonists are absolutely contraindicated in patients with a family history of medullary thyroid carcinoma. An alternative diabetes medication must be selected.",
          "Administer semaglutide but order baseline thyroid ultrasound and calcitonin levels for monitoring",
          "Start semaglutide at half dose and monitor thyroid function monthly to detect any early tumor development"
        ],
        "correct": 1,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "The GLP-1 agonist BBW specifically lists family history of MTC as an absolute contraindication. MTC has familial patterns (MEN 2 syndrome). No dose adjustment or monitoring protocol can mitigate this risk — the drug class must be avoided entirely. Alternative agents include SGLT-2 inhibitors, DPP-4 inhibitors, or insulin."
      },
      {
        "q": "A patient on liraglutide for 6 months reports a new palpable lump in the anterior neck and progressive hoarseness. What assessment is most urgent?",
        "opts": [
          "Palpate the lump and reassure the patient that neck masses are common and usually benign",
          "Order a TSH level to evaluate whether the thyroid nodule is causing hyperthyroidism",
          "Refer for urgent thyroid ultrasound and serum calcitonin measurement — a thyroid mass with hoarseness in a patient on a GLP-1 agonist warrants evaluation for medullary thyroid carcinoma given the BBW",
          "Schedule an outpatient biopsy in 4-6 weeks to determine the nature of the thyroid mass"
        ],
        "correct": 2,
        "cat": "Black Box Warning",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "A thyroid mass with hoarseness (recurrent laryngeal nerve involvement) in a patient on a GLP-1 agonist is concerning for MTC until proven otherwise. Serum calcitonin is the primary tumor marker for MTC, and thyroid ultrasound characterizes the mass. Prompt referral is essential. Liraglutide should be held pending evaluation."
      },
      {
        "q": "Regular insulin (short-acting, Humulin R) must be given with specific meal timing. When should it be administered?",
        "opts": [
          "0-15 minutes before meals — same as rapid-acting insulin",
          "Immediately after meals based on carbohydrate content",
          "At bedtime regardless of meals",
          "30-60 minutes before meals — onset is slower than rapid-acting analogs"
        ],
        "correct": 3,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Knowledge",
        "rationale": "Regular insulin onset is 30-60 minutes vs 10-20 min for rapid-acting. If given too close to mealtime, glucose spikes before insulin works. If given too early, hypoglycemia occurs before eating."
      },
      {
        "q": "A hospitalized patient on a sliding scale with regular insulin is called to radiology for an unexpected test immediately after receiving their pre-meal insulin dose. The meal tray arrives during their absence. What is the nurse's priority concern?",
        "opts": [
          "The patient received insulin 30-60 minutes ago and has not eaten — they are at high risk for hypoglycemia when the insulin peaks at 2-4 hours. Send a carbohydrate source with the patient to radiology.",
          "The insulin dose will be wasted since it only works in the presence of simultaneous food intake",
          "Regular insulin does not peak until 6-8 hours, so there is adequate time for the patient to eat later",
          "The nurse should call radiology to cancel the test since medication timing takes priority"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Pre-meal insulin without food intake creates a dangerous mismatch — insulin will lower glucose without dietary glucose to counterbalance. The nurse must ensure the patient receives carbohydrates within the insulin's onset window. Send juice, crackers, or glucose tablets. Monitor glucose and document the situation."
      },
      {
        "q": "A patient asks why their provider switched them from regular insulin to insulin lispro for mealtime coverage. What is the primary clinical advantage of the switch?",
        "opts": [
          "Insulin lispro is more potent per unit than regular insulin, requiring smaller injection volumes",
          "Insulin lispro's faster onset (10-20 min vs 30-60 min) allows dosing at mealtimes rather than 30-60 minutes before, improving convenience and reducing the risk of pre-meal hypoglycemia",
          "Regular insulin causes more injection site reactions than insulin lispro due to its preservative formulation",
          "Insulin lispro has a longer duration of action that provides better between-meal glucose coverage"
        ],
        "correct": 1,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Rapid-acting analogs (lispro, aspart, glulisine) were engineered for faster absorption than regular insulin. The practical advantage: patients can dose at the time of eating rather than planning 30-60 minutes ahead. This improves adherence, reduces missed-meal hypoglycemia, and better matches the postprandial glucose curve."
      },
      {
        "q": "What bedside assessment is MOST important before administering any insulin dose?",
        "opts": [
          "Blood pressure — insulin can cause orthostasis",
          "Temperature — fever alters insulin sensitivity",
          "Current blood glucose level — never give insulin without knowing the glucose; hypoglycemia can be fatal",
          "Pulse — insulin affects heart rate at high doses"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Blood glucose must be measured immediately before every insulin administration. Hold if glucose is below safe threshold (typically <70-80 mg/dL) and notify provider. Never administer based on a glucose value from >30 minutes prior."
      },
      {
        "q": "A nurse checks a patient's blood glucose before the scheduled insulin dose and finds it is 62 mg/dL. The patient is alert and asymptomatic. What is the correct action?",
        "opts": [
          "Administer the insulin at a reduced dose — 62 mg/dL is only slightly below normal",
          "Skip the glucose treatment and simply hold the insulin — the patient is asymptomatic so no intervention beyond withholding is needed",
          "Document the glucose and administer the insulin since the patient is asymptomatic and does not appear hypoglycemic",
          "Hold the insulin, treat hypoglycemia with 15-20 grams of fast-acting carbohydrate, recheck glucose in 15 minutes, and notify the provider of the held dose"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Glucose of 62 mg/dL is hypoglycemia regardless of symptoms. The Rule of 15: give 15 g fast-acting carbohydrate (4 oz juice, glucose tabs), recheck in 15 minutes, repeat if still <70. Hold insulin, notify provider for dose adjustment. Asymptomatic hypoglycemia (hypoglycemia unawareness) is itself a clinical concern requiring evaluation."
      },
      {
        "q": "A patient on an insulin drip in the ICU has glucose monitored every hour. The last three values are 180, 145, and 108 mg/dL. The current insulin drip rate is 6 units/hour. What trend requires the nurse's immediate attention?",
        "opts": [
          "The glucose is declining rapidly (35-37 mg/dL per hour) — at this rate, hypoglycemia could occur within 2-3 hours. Reduce the drip rate preemptively and increase monitoring frequency.",
          "The glucose is approaching target range — no intervention is needed; continue the current rate",
          "The rate of decline is too slow — increase the insulin drip to reach target glucose faster",
          "Glucose of 108 is below the ICU target range and requires immediate dextrose bolus and drip discontinuation"
        ],
        "correct": 0,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Trend analysis is critical with insulin drips. A consistent decline of 35+ mg/dL/hour predicts hypoglycemia if the rate is maintained. ICU insulin protocols typically call for rate reduction when glucose drops more than 60-100 mg/dL from the previous value or when approaching the lower target threshold. Proactive rate adjustment prevents hypoglycemia."
      }
    ],
    "bridge_check": [
      {
        "q": "A hospitalized patient with type 2 diabetes is started on IV methylprednisolone for an acute inflammatory condition. Their blood glucose rises from 140 to 380 mg/dL. What is happening and how does this bridge to the endocrine module?",
        "opts": [
          "Methylprednisolone has no effect on blood glucose",
          "Systemic corticosteroids stimulate hepatic gluconeogenesis and cause insulin resistance — steroid-induced hyperglycemia often requires insulin management even in patients whose diabetes was previously diet-controlled or managed with oral agents",
          "This glucose rise indicates the patient's diabetes worsened from the primary illness only",
          "Methylprednisolone raises glucose by suppressing insulin secretion directly"
        ],
        "correct": 1,
        "cat": "Bridge M3→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Corticosteroids cause significant insulin resistance and increase hepatic glucose output. Glucose typically peaks in the afternoon with morning steroid dosing. Patients may need 2-3x baseline insulin doses. Sliding scale alone is usually insufficient."
      },
      {
        "q": "A patient with T1DM receiving dexamethasone for chemotherapy-induced nausea notes their insulin requirements have tripled. They are concerned their insulin pump is malfunctioning. What should the nurse explain?",
        "opts": [
          "The insulin pump is likely malfunctioning and needs troubleshooting by the manufacturer",
          "The increased insulin need indicates the patient's type 1 diabetes is worsening independently of the steroid therapy",
          "Dexamethasone is a potent glucocorticoid that causes marked insulin resistance — the tripled insulin requirement is a predictable pharmacologic effect, not a device malfunction. Insulin needs will decrease when dexamethasone is discontinued.",
          "Dexamethasone directly destroys the insulin being delivered by the pump, requiring higher programmed doses to compensate"
        ],
        "correct": 2,
        "cat": "Bridge M3→M5",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Dexamethasone is 25-30x more potent than cortisol and causes profound insulin resistance. In T1DM patients on insulin pumps, basal rates and bolus ratios often need 2-3x adjustments. This is a predictable pharmacologic effect that reverses when the steroid is discontinued. Patient education prevents unnecessary alarm."
      },
      {
        "q": "A non-diabetic patient receiving a 3-day dexamethasone protocol for croup in the pediatric unit has glucose values of 90, 105, and 130 mg/dL during treatment. Do these values require intervention?",
        "opts": [
          "Yes — any glucose above 100 mg/dL during steroid therapy in a child requires insulin coverage",
          "Immediately discontinue dexamethasone because any glucose elevation indicates developing type 1 diabetes",
          "No monitoring is needed — steroids do not affect glucose in pediatric patients",
          "These mild elevations are within the expected range for short-course low-dose steroids in a non-diabetic patient — monitor trends, but insulin is not indicated unless glucose exceeds 180-200 mg/dL consistently"
        ],
        "correct": 3,
        "cat": "Bridge M3→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Mild steroid-induced glucose elevation in non-diabetic children on short courses is common and usually self-limiting. Intervention thresholds vary by institution but generally target persistent glucose >180-200 mg/dL. Brief courses at pediatric doses rarely cause clinically significant hyperglycemia requiring insulin. Monitor trends rather than single values."
      },
      {
        "q": "Metformin is held the morning of a patient's scheduled CT scan with contrast. What is the connection between the renal module and this decision?",
        "opts": [
          "Contrast agents cause acute kidney injury in some patients — if AKI develops, metformin accumulates (renally cleared) and lactic acidosis risk increases dramatically. Standard practice is to hold metformin before contrast and restart only after confirming stable renal function 48 hours later.",
          "Contrast and metformin cancel each other's effects",
          "Metformin interferes with contrast visualization",
          "This precaution only applies if the patient already has CKD"
        ],
        "correct": 0,
        "cat": "Bridge M2→M5",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Contrast-associated AKI can reduce renal function suddenly. Metformin accumulates when kidneys fail, and lactic acidosis follows. Hold metformin, restart after confirming stable renal function 48 hours post-procedure."
      },
      {
        "q": "A patient on metformin and lisinopril undergoes cardiac catheterization with contrast. Post-procedure, serum creatinine rises from 1.0 to 2.3 mg/dL. Both medications are being held. What multi-system bridge concept connects the renal, cardiovascular, and endocrine modules?",
        "opts": [
          "Lisinopril and metformin interact directly, and removing both resolves the creatinine elevation",
          "Contrast-induced AKI reduces GFR → metformin accumulation causes lactic acidosis risk → lisinopril reduces efferent arteriolar tone, further lowering GFR in the setting of reduced renal perfusion. Both drugs must be held until renal function recovers.",
          "Only metformin needs to be held — lisinopril is renoprotective and should be continued during AKI",
          "The creatinine elevation is from rhabdomyolysis caused by the contrast agent, not AKI"
        ],
        "correct": 1,
        "cat": "Bridge M1→M2→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "This bridges three modules: contrast-induced AKI (renal), ACE inhibitor hemodynamic effects on GFR (cardiovascular), and metformin lactic acidosis risk (endocrine). ACE inhibitors reduce efferent arteriolar constriction, which can worsen GFR decline during AKI. Both drugs are held until renal recovery is confirmed."
      },
      {
        "q": "A patient with T2DM on metformin is scheduled for bariatric surgery. The surgeon orders metformin held 48 hours before surgery. The patient asks why their diabetes medication is being stopped before a surgery that is meant to improve their diabetes. What is the bridging explanation?",
        "opts": [
          "Metformin interferes with anesthetic agents used during bariatric surgery through a CYP450 interaction",
          "Metformin causes excessive bleeding during surgery by inhibiting platelet aggregation",
          "Surgery creates AKI risk from hypotension, blood loss, and anesthetic effects on renal perfusion — metformin must be cleared before any period of potential renal compromise to prevent lactic acidosis. Post-surgery, metformin may be restarted once oral intake and renal function are confirmed.",
          "Bariatric surgery permanently eliminates metformin absorption, so pre-operative discontinuation prevents post-surgical toxicity"
        ],
        "correct": 2,
        "cat": "Bridge M2→M5",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Perioperative AKI risk from hemodynamic instability, blood loss, and anesthetic-induced renal vasoconstriction means metformin could accumulate if renal function declines. Pre-operative clearance of metformin (at least 24-48 hours, depending on baseline renal function) prevents lactic acidosis if AKI occurs. This bridges surgical, renal, and endocrine pharmacology."
      },
      {
        "q": "A patient with both hypothyroidism and heart failure is taking levothyroxine and metoprolol. Levothyroxine dose is increased. What cardiovascular monitoring becomes more important?",
        "opts": [
          "INR monitoring — thyroid hormones affect warfarin metabolism",
          "Potassium level — thyroid hormone affects renal K+ handling",
          "Blood pressure — levothyroxine causes severe hypertension at high doses",
          "Heart rate and cardiac symptoms — excess thyroid hormone (from over-replacement) increases metabolic rate, heart rate, and can worsen atrial fibrillation or angina. Metoprolol may require dose adjustment."
        ],
        "correct": 3,
        "cat": "Bridge M1→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Thyroid hormone increases beta-adrenergic receptor number and sensitivity. Over-replacement can precipitate or worsen AFib, angina, and increase cardiac oxygen demand. Patients with HF or CAD should have levothyroxine titrated conservatively."
      },
      {
        "q": "A patient on warfarin for atrial fibrillation develops hypothyroidism and is started on levothyroxine. After 8 weeks, their INR increases from 2.5 to 4.2 without a warfarin dose change. What is the pharmacologic bridge between these modules?",
        "opts": [
          "Thyroid hormone increases the catabolism of vitamin K-dependent clotting factors — as levothyroxine restores euthyroid state, clotting factor turnover increases, enhancing warfarin's anticoagulant effect and raising INR",
          "Levothyroxine directly inhibits CYP2C9, slowing warfarin metabolism and causing accumulation",
          "Levothyroxine displaces warfarin from albumin binding sites, increasing free warfarin levels",
          "The INR increase is coincidental and unrelated to the levothyroxine therapy"
        ],
        "correct": 0,
        "cat": "Bridge M1→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Thyroid hormones increase the metabolic rate of vitamin K-dependent clotting factors (II, VII, IX, X). As a hypothyroid patient becomes euthyroid, these factors are degraded faster, potentiating warfarin's anticoagulant effect. Warfarin dose reduction is often needed when thyroid status changes. This bridges cardiovascular (anticoagulation) and endocrine (thyroid) pharmacology."
      },
      {
        "q": "A patient with severe hypothyroidism is prescribed digoxin for atrial fibrillation rate control. The provider starts at a lower-than-usual dose. What is the endocrine-cardiovascular bridge that justifies this approach?",
        "opts": [
          "Hypothyroidism increases renal clearance of digoxin, requiring lower doses to avoid subtherapeutic levels",
          "Hypothyroidism reduces metabolic rate and drug clearance — digoxin elimination is slower, and hypothyroid patients are more sensitive to digoxin's effects. Standard doses can produce toxic levels. As levothyroxine restores euthyroid state, digoxin dose may need upward adjustment.",
          "Hypothyroidism makes the myocardium resistant to digoxin, but starting low prevents a paradoxical hypertensive response",
          "Digoxin and levothyroxine compete for the same intracellular receptor, requiring sequential rather than concurrent dosing"
        ],
        "correct": 1,
        "cat": "Bridge M1→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Hypothyroidism reduces cardiac output, GFR, and drug clearance. Digoxin accumulates more readily, and hypothyroid hearts are more sensitive to digoxin's effects. As levothyroxine normalizes thyroid function, digoxin clearance increases and the dose may need adjustment. This requires coordinated monitoring of both TSH and digoxin levels."
      },
      {
        "q": "An SGLT-2 inhibitor (empagliflozin) is prescribed for a patient with T2DM, HFrEF, and CKD Stage 3. How does this drug connect all three conditions covered in separate modules?",
        "opts": [
          "SGLT-2 inhibitors have no renal or cardiac effects — only glucose lowering",
          "SGLT-2 inhibitors should only be used for glucose control in well-controlled CKD",
          "SGLT-2 inhibitors reduce intraglomerular pressure (renoprotective, like ACE inhibitors from M1), cause osmotic glucosuria reducing preload (beneficial in HF from M1), and lower glucose (M5) — one drug with proven outcome benefits across all three organ systems",
          "The cardiac and renal benefits of SGLT-2 inhibitors are theoretical only"
        ],
        "correct": 2,
        "cat": "Bridge M1→M2→M5",
        "nclex": "HPM",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "SGLT-2 inhibitors have FDA approvals across T2DM, HFrEF, and CKD progression. The mechanisms span cardiology, nephrology, and endocrinology — making this a true multi-system drug class with landmark trial evidence."
      },
      {
        "q": "A patient without diabetes (non-diabetic) with HFrEF is started on dapagliflozin. The patient questions why they are receiving a 'diabetes drug' when they don't have diabetes. What bridging concept should the nurse explain?",
        "opts": [
          "The provider made an error — SGLT-2 inhibitors are only indicated for patients with type 2 diabetes",
          "SGLT-2 inhibitors are only used in non-diabetic patients when they also have CKD as a co-indication",
          "The drug is being used off-label without evidence in non-diabetic heart failure patients",
          "SGLT-2 inhibitors have demonstrated mortality and hospitalization reduction in HFrEF regardless of diabetes status — the cardiac benefits are independent of glucose lowering and include reduced preload, afterload, and beneficial cardiac metabolic effects"
        ],
        "correct": 3,
        "cat": "Bridge M1→M5",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "DAPA-HF and EMPEROR-Reduced trials demonstrated that SGLT-2 inhibitors reduce cardiovascular death and HF hospitalization in HFrEF regardless of diabetes status. FDA approved dapagliflozin and empagliflozin for HFrEF independent of diabetes. The mechanism involves natriuresis/diuresis, reduced preload, and favorable myocardial energy metabolism."
      },
      {
        "q": "A patient on empagliflozin, lisinopril, and metformin develops an acute GI illness with vomiting and diarrhea. They cannot keep oral medications down. What multi-system pharmacologic concerns must the nurse address simultaneously?",
        "opts": [
          "All three medications require attention: hold empagliflozin (euglycemic DKA risk during illness/fasting), hold metformin (dehydration-induced AKI increases lactic acidosis risk), and consider holding lisinopril (dehydration plus ACE inhibition can cause AKI from impaired renal autoregulation)",
          "Only metformin needs to be held; empagliflozin and lisinopril can continue without concern",
          "Continue all medications and push IV fluids aggressively to maintain renal perfusion",
          "Only lisinopril needs to be held because ACE inhibitors are the only class affected by dehydration"
        ],
        "correct": 0,
        "cat": "Bridge M1→M2→M5",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Acute illness with volume depletion creates a perfect storm across three drug classes: SGLT-2 inhibitors (euDKA risk from fasting + continued glycosuria), metformin (AKI → lactic acidosis), and ACE inhibitors (dehydration + afferent/efferent arteriolar effects → AKI). 'Sick day rules' for diabetic patients should include guidance on holding these medications during acute illness."
      },
      {
        "q": "A patient on amiodarone for AFib develops new-onset hypothyroidism. They are started on levothyroxine. What monitoring complexity arises from this combination?",
        "opts": [
          "No complexity — amiodarone and levothyroxine do not interact",
          "Amiodarone blocks T4→T3 conversion peripherally and contains 37% iodine, causing both hypo- and hyperthyroidism. Titrating levothyroxine in a patient on amiodarone is complex — TSH may not accurately reflect clinical thyroid status. Endocrine specialist involvement is often needed.",
          "Amiodarone accelerates levothyroxine metabolism — very high doses required",
          "Levothyroxine is always contraindicated if the patient is on amiodarone"
        ],
        "correct": 1,
        "cat": "Bridge M1→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Amiodarone contains 37% iodine and inhibits deiodinase (T4→T3 conversion). This causes complex thyroid dysfunction — elevated T4, low/normal T3, altered TSH. Levothyroxine replacement in this context is complex. Regular TFT monitoring and endocrine specialist guidance are needed."
      },
      {
        "q": "A patient on amiodarone who was previously hypothyroid and on levothyroxine now presents with weight loss, tremor, and tachycardia. TSH is 0.01 mIU/L. What has likely occurred?",
        "opts": [
          "The levothyroxine dose is too high and needs to be reduced — straightforward over-replacement",
          "The patient has developed Graves' disease as a separate autoimmune condition unrelated to amiodarone",
          "Amiodarone-induced thyrotoxicosis (AIT) has developed — amiodarone's high iodine content can trigger hyperthyroidism even in a previously hypothyroid patient, creating a complex clinical scenario where thyroid-suppressing and thyroid-replacing therapy must be managed simultaneously",
          "Amiodarone toxicity is mimicking hyperthyroidism through direct cardiac stimulation rather than true thyroid dysfunction"
        ],
        "correct": 2,
        "cat": "Bridge M1→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Amiodarone-induced thyrotoxicosis (AIT) occurs in two forms: Type 1 (iodine-induced excess synthesis in underlying thyroid disease) and Type 2 (destructive thyroiditis releasing stored hormone). In a previously hypothyroid patient on levothyroxine, AIT Type 2 is most likely. Management is complex: levothyroxine is held, and treatment depends on AIT type. Cardiology and endocrinology must coordinate care."
      },
      {
        "q": "A patient with newly diagnosed atrial fibrillation and pre-existing Hashimoto's thyroiditis (on levothyroxine) is being considered for amiodarone. What pre-treatment thyroid assessment is essential, and what ongoing monitoring bridges the cardiovascular and endocrine modules?",
        "opts": [
          "No thyroid assessment is needed — amiodarone's cardiac benefits outweigh any thyroid concerns",
          "Thyroid monitoring is only needed for the first 3 months of amiodarone therapy, after which the thyroid risk resolves",
          "Only baseline TSH is needed — subsequent monitoring is unnecessary if the initial value is normal",
          "Baseline TSH, free T4, free T3, and thyroid antibodies should be obtained. Thyroid function tests must be monitored every 3-6 months while on amiodarone, as it can cause both hypothyroidism and hyperthyroidism, and pre-existing thyroid disease increases susceptibility."
        ],
        "correct": 3,
        "cat": "Bridge M1→M5",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Amiodarone's thyroid effects can emerge at any point during therapy or even months after discontinuation (due to its extremely long half-life of 40-55 days). Pre-existing thyroid disease (Hashimoto's) increases vulnerability to amiodarone's iodine load. Comprehensive baseline thyroid panel and ongoing monitoring every 3-6 months for the entire duration of therapy is standard of care."
      }
    ]
  },
  "M6": {
    "rapid_fire": [
      {
        "q": "Omeprazole (a PPI) is prescribed for a patient who also takes clopidogrel after coronary stent placement. What is the critical interaction?",
        "opts": [
          "PPIs enhance clopidogrel's hepatic conversion to its active thiol metabolite, causing excessive antiplatelet activity",
          "All PPIs equally inhibit clopidogrel activation through competitive binding at the P2Y12 receptor",
          "Omeprazole inhibits CYP2C19, reducing conversion of the clopidogrel prodrug to its active antiplatelet metabolite",
          "The interaction only becomes clinically relevant if the patient is also taking aspirin concurrently"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Clopidogrel requires CYP2C19 activation. Omeprazole inhibits CYP2C19, reducing active metabolite by ~50%. Pantoprazole has least CYP2C19 inhibition."
      },
      {
        "q": "A patient on clopidogrel after a drug-eluting stent is started on esomeprazole for GERD. P2Y12 assay shows reduced platelet inhibition. What is the most likely cause?",
        "opts": [
          "Esomeprazole inhibits CYP2C19, reducing clopidogrel conversion to its active antiplatelet form",
          "The patient developed clopidogrel antibodies that neutralize the drug's active metabolite directly",
          "Esomeprazole directly blocks the P2Y12 receptor on platelets, competing with clopidogrel binding",
          "GERD-related changes in gastric pH impair clopidogrel absorption from the duodenal mucosa"
        ],
        "correct": 0,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Esomeprazole is the S-isomer of omeprazole with potent CYP2C19 inhibition. Switch to pantoprazole or famotidine."
      },
      {
        "q": "A nurse reviews a medication list noting clopidogrel 75 mg daily and lansoprazole 30 mg daily. Which nursing action is most appropriate?",
        "opts": [
          "Administer both together since they are for different conditions with no pharmacologic overlap",
          "Increase the clopidogrel dose to 150 mg daily to overcome the known PPI drug interaction",
          "Hold the clopidogrel until the lansoprazole treatment course has been fully completed",
          "Notify the provider — lansoprazole's CYP2C19 inhibition may reduce clopidogrel efficacy"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Lansoprazole has moderate CYP2C19 inhibitory effects. Pantoprazole or H2 blocker is safer."
      },
      {
        "q": "Lactulose is prescribed for a patient with hepatic encephalopathy. The patient reports 4 soft bowel movements daily. What does this indicate?",
        "opts": [
          "This is a concerning adverse effect requiring the nurse to hold lactulose immediately",
          "This is the therapeutic target of 2-4 soft stools daily, promoting ammonia elimination",
          "The dose needs to be significantly increased to achieve full therapeutic ammonia clearance",
          "This pattern indicates lactic acidosis developing from excessive lactulose metabolism"
        ],
        "correct": 1,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Lactulose acidifies colon (NH3→NH4+, non-absorbable) and promotes 2-4 soft stools daily. Fewer = inadequate; >4-5/day = dehydration risk."
      },
      {
        "q": "A cirrhotic patient on lactulose reports only 1 bowel movement every other day. Ammonia level is 88 mcg/dL (elevated). What is the priority nursing action?",
        "opts": [
          "Document the finding as an expected variation in lactulose response between patients",
          "Notify the provider to increase the lactulose dose for adequate ammonia clearance",
          "Hold lactulose since the elevated ammonia level proves the medication is ineffective",
          "Switch from lactulose to a stimulant laxative for improved bowel movement frequency"
        ],
        "correct": 1,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Goal is 2-4 soft stools daily. One stool every other day is subtherapeutic — ammonia remains elevated. Titrate dose upward."
      },
      {
        "q": "A patient with hepatic encephalopathy on lactulose has had 8 watery stools today and reports dizziness on standing. Which electrolyte abnormality is most concerning?",
        "opts": [
          "Hypernatremia resulting from excessive oral lactulose sugar intake and osmotic shifts",
          "Hypercalcemia caused by increased intestinal calcium absorption from lactulose metabolism",
          "Hypermagnesemia from lactulose-mediated enhancement of intestinal magnesium absorption",
          "Hypokalemia from excessive diarrheal potassium losses, risking cardiac arrhythmias"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Excessive lactulose causes profuse diarrhea → dehydration, orthostatic hypotension, and severe K+ losses. Hypokalemia worsens encephalopathy and causes arrhythmias."
      },
      {
        "q": "Metoclopramide (Reglan) is used for gastroparesis. Which neurological adverse effect limits its long-term use and carries an FDA Black Box Warning?",
        "opts": [
          "Tardive dyskinesia — irreversible involuntary movements from chronic dopamine receptor blockade",
          "Serotonin syndrome occurring when combined with any class of antidepressant medication",
          "Peripheral neuropathy developing after courses exceeding 6 months of continuous therapy",
          "Parkinsonian tremors that reliably resolve within 48 hours of stopping the medication"
        ],
        "correct": 0,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Metoclopramide blocks central D2 receptors. Chronic blockade causes tardive dyskinesia. FDA BBW: do not use >12 weeks. Elderly and women at highest risk."
      },
      {
        "q": "A 72-year-old woman has been taking metoclopramide for 4 months for diabetic gastroparesis. She develops repetitive lip smacking and tongue protrusion. What should the nurse do first?",
        "opts": [
          "Reassure the patient that these involuntary movements are a temporary drug side effect",
          "Administer diphenhydramine IV to treat the acute extrapyramidal symptom presentation",
          "Hold the medication and notify the provider — these signs suggest tardive dyskinesia",
          "Increase the dose because the movements indicate inadequate dopamine receptor blockade"
        ],
        "correct": 2,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Lip smacking and tongue protrusion are classic TD. At 4 months, exceeded 12-week BBW limit. TD may be irreversible."
      },
      {
        "q": "A provider orders metoclopramide 10 mg IV for a 28-year-old postoperative patient with nausea. Which assessment is most important before administration?",
        "opts": [
          "Assess for history of depression or movement disorders — D2 blockade worsens both",
          "Verify the patient has eaten within the last 4 hours before giving the antiemetic",
          "Check the patient's renal function panel to determine if dose adjustment is needed",
          "Confirm the patient is not currently receiving any beta-blocker class medications"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Young patients are more susceptible to acute dystonic reactions. Depression history relevant because D2 blockade worsens mood."
      },
      {
        "q": "A patient with cirrhosis and ascites is started on spironolactone and furosemide. Why is this specific combination used rather than either drug alone?",
        "opts": [
          "Furosemide alone is preferred because spironolactone is contraindicated in cirrhotic patients",
          "Both drugs treat ascites primarily by reducing hepatic portal blood flow and pressure",
          "Spironolactone targets hyperaldosteronism while furosemide adds diuresis with neutral K+ balance",
          "Spironolactone alone is always sufficient — furosemide is added only for acute decompensation"
        ],
        "correct": 2,
        "cat": "Indications",
        "nclex": "PI-PharmaParenteral",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Spironolactone (100 mg) + furosemide (40 mg) 2.5:1 ratio is standard. Spironolactone addresses hyperaldosteronism; opposing K+ effects cancel out."
      },
      {
        "q": "A cirrhotic patient on spironolactone 200 mg and furosemide 80 mg daily has potassium of 5.8 mEq/L. Which medication adjustment is most appropriate?",
        "opts": [
          "Increase furosemide dose to enhance renal potassium excretion and correct hyperkalemia",
          "Reduce or hold spironolactone — hyperkalemia indicates excessive potassium-sparing effect",
          "Discontinue both diuretics permanently since the diuretic combination therapy has failed",
          "Add oral potassium supplements to prevent further dangerous electrolyte fluctuations"
        ],
        "correct": 1,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Hyperkalemia indicates spironolactone effect outpacing furosemide's K+ wasting. Reduce spironolactone first. More furosemide risks volume depletion."
      },
      {
        "q": "A nurse is monitoring a cirrhotic patient who started spironolactone and furosemide 3 days ago. Daily weight shows a 4 kg loss. What is the correct interpretation?",
        "opts": [
          "This rapid weight loss demonstrates an excellent therapeutic diuretic response",
          "The weight loss is attributable to dietary changes unrelated to the diuretic therapy",
          "Diuretic doses should be further increased to accelerate the ascites resolution process",
          "Weight loss >0.5 kg/day without edema risks intravascular depletion — notify the provider"
        ],
        "correct": 3,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Analysis",
        "rationale": "In cirrhotic ascites, diuresis >0.5 kg/day (without edema) or >1 kg/day (with edema) risks pre-renal AKI and hepatorenal syndrome."
      },
      {
        "q": "H. pylori triple therapy consists of a PPI, clarithromycin, and amoxicillin for 14 days. What is the most important compliance teaching?",
        "opts": [
          "Take the antibiotics only until symptoms improve, then discontinue the remaining pills",
          "The course can safely be shortened to 7 days if GI symptoms resolve within the first week",
          "Take the PPI separately from the antibiotics by at least 4 hours for best absorption",
          "Complete the full 14-day course — incomplete therapy causes resistance and treatment failure"
        ],
        "correct": 3,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Full course required for eradication. Non-compliance causes treatment failure. Confirm eradication 4 weeks after with urea breath test."
      },
      {
        "q": "A patient completing H. pylori triple therapy asks when they will know if treatment worked. What is the appropriate nursing response?",
        "opts": [
          "If your symptoms resolve by the end of 14 days, the H. pylori infection is cured",
          "Eradication is confirmed by urea breath test or stool antigen at least 4 weeks after therapy",
          "Blood antibody testing should be repeated immediately after finishing the antibiotic course",
          "A follow-up endoscopy with biopsy is always required within 1 week of completing treatment"
        ],
        "correct": 1,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Evaluation",
        "cognitive": "Comprehension",
        "rationale": "Symptom resolution alone doesn't confirm cure. Test at 4+ weeks. Stop PPIs 2 weeks before testing to avoid false negatives."
      },
      {
        "q": "A patient with documented severe penicillin allergy (anaphylaxis) needs H. pylori treatment. Which modification to standard triple therapy is required?",
        "opts": [
          "Administer amoxicillin with epinephrine on standby since the prior allergy may not recur",
          "Use a higher dose of clarithromycin to compensate for the missing second antibiotic agent",
          "Replace amoxicillin with metronidazole or use bismuth quadruple therapy for eradication",
          "Desensitize the patient to amoxicillin over 6 hours before beginning the triple therapy"
        ],
        "correct": 2,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Amoxicillin is a penicillin. With anaphylaxis history, use metronidazole-based triple or bismuth quadruple therapy."
      },
      {
        "q": "Ondansetron (Zofran) is given for nausea. The patient's QTc on ECG is 490 ms. What is the concern?",
        "opts": [
          "Ondansetron prolongs QT — QTc approaching 500 ms significantly increases Torsades risk",
          "No concern exists because a QTc of 490 ms is within the normal clinical limits",
          "Ondansetron causes only ventricular tachycardia through a mechanism unrelated to QT interval",
          "QTc monitoring is only clinically needed with IV ondansetron administration, not oral"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Ondansetron blocks hERG K+ channels prolonging QT. QTc >500 ms significantly elevates Torsades risk."
      },
      {
        "q": "A nurse is preparing to administer IV ondansetron 16 mg to a chemotherapy patient. Potassium is 3.1 mEq/L. What should the nurse do?",
        "opts": [
          "Administer ondansetron since potassium levels do not affect antiemetic drug efficacy",
          "Give the ondansetron concurrently with oral potassium supplements for correction",
          "Hold ondansetron and notify provider — hypokalemia potentiates QT prolongation and Torsades risk",
          "Reduce the ondansetron dose to 4 mg and proceed without any further clinical assessment"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Hypokalemia (K+ <3.5) impairs cardiac repolarization and independently prolongs QT. Correct potassium first."
      },
      {
        "q": "A patient on amiodarone for atrial fibrillation develops postoperative nausea. The provider orders ondansetron. Why should the nurse question this order?",
        "opts": [
          "Both amiodarone and ondansetron prolong QT — additive effect significantly increases Torsades risk",
          "Amiodarone and ondansetron compete for the same 5-HT3 receptor, making ondansetron ineffective",
          "Ondansetron is contraindicated in all patients with a diagnosis of atrial fibrillation",
          "Ondansetron directly reverses the antiarrhythmic membrane-stabilizing effects of amiodarone"
        ],
        "correct": 0,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Amiodarone (class III) and ondansetron both prolong QT. Additive QT prolongation increases Torsades risk significantly."
      },
      {
        "q": "Long-term PPI use (>1 year) is associated with which set of adverse effects?",
        "opts": [
          "Hepatotoxicity with elevated liver transaminases requiring periodic LFT monitoring",
          "Renal tubular acidosis with progressive metabolic alkalosis and electrolyte wasting",
          "Thrombocytopenia and neutropenia from progressive bone marrow suppression over time",
          "Hypomagnesemia, increased C. difficile risk, decreased calcium/B12 absorption, fracture risk"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Long-term PPI concerns: hypomagnesemia, C. difficile, B12 deficiency, calcium malabsorption, fractures. Use lowest dose shortest time."
      },
      {
        "q": "A 68-year-old has been on omeprazole 40 mg daily for 5 years for non-erosive GERD. Labs show magnesium of 1.2 mg/dL. What is the priority intervention?",
        "opts": [
          "Continue omeprazole because GERD requires lifelong acid suppression therapy for all patients",
          "Notify provider to discontinue or taper the PPI — chronic use caused significant hypomagnesemia",
          "Increase the omeprazole dose to improve GI mucosal absorption of dietary magnesium sources",
          "Add calcium supplements to counteract the magnesium deficiency through electrolyte rebalancing"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Mg 1.2 is severely low (normal 1.7-2.2). PPI-induced hypomagnesemia may not respond to replacement while PPI continues."
      },
      {
        "q": "A patient on long-term PPI therapy is admitted with watery diarrhea, cramping, and fever. Stool PCR is positive for C. difficile. How does the PPI contribute?",
        "opts": [
          "The PPI directly damages colonic mucosal cells, allowing C. difficile bacterial colonization",
          "Gastric acid suppression eliminates a key defense, allowing C. difficile spores to survive transit",
          "PPIs cause broad immunosuppression that predisposes to all GI infections equally in patients",
          "The PPI interacts with the patient's other antibiotics, causing secondary C. difficile overgrowth"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PSI",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Gastric acid is a barrier to ingested pathogens. PPIs raise pH above 4, allowing C. difficile spores to survive to the colon."
      },
      {
        "q": "Rifaximin (Xifaxan) is used alongside lactulose for hepatic encephalopathy. What makes rifaximin particularly appropriate?",
        "opts": [
          "It is reserved exclusively for use only when lactulose monotherapy has completely failed",
          "It directly lowers serum ammonia levels through hepatic enzyme induction in the liver",
          "It acts as a secondary osmotic laxative that works synergistically with lactulose dosing",
          "It is a non-absorbed oral antibiotic that eliminates ammonia-producing gut bacteria locally"
        ],
        "correct": 3,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Planning",
        "cognitive": "Comprehension",
        "rationale": "Rifaximin is non-absorbable (>99% stays in GI tract). Reduces ammonia-producing bacteria without systemic effects."
      },
      {
        "q": "A patient with hepatic encephalopathy stable on lactulose for 6 months presents with a second episode. Why is rifaximin added now?",
        "opts": [
          "After recurrent episodes, adding rifaximin to lactulose reduces future episodes by about 50%",
          "It is only indicated for acute treatment of individual encephalopathy episodes in the hospital",
          "It is a systemically absorbed antibiotic that treats the underlying liver disease pathology",
          "Rifaximin replaces lactulose entirely after the first documented treatment failure occurs"
        ],
        "correct": 0,
        "cat": "Indications",
        "nclex": "HPM",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "After recurrence, rifaximin + lactulose is standard. Reduces recurrence by ~50% and hospitalization rates."
      },
      {
        "q": "A nurse is teaching a patient starting rifaximin for hepatic encephalopathy prevention. The patient asks about common side effects. What is most accurate?",
        "opts": [
          "Rifaximin causes significant antibiotic-associated diarrhea similar to other broad-spectrum agents",
          "Rifaximin commonly causes severe nephrotoxicity requiring frequent serum creatinine monitoring",
          "Because it is minimally absorbed, side effects are mild — mainly peripheral edema, nausea, dizziness",
          "Rifaximin suppresses bone marrow function significantly, requiring weekly complete blood counts"
        ],
        "correct": 2,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Minimal systemic absorption (<0.4%) = favorable side effect profile. Most common: edema, nausea, dizziness."
      },
      {
        "q": "A patient taking warfarin is prescribed ciprofloxacin for a UTI. What INR monitoring is required?",
        "opts": [
          "More frequent INR monitoring — ciprofloxacin inhibits CYP1A2 and reduces gut vitamin K flora",
          "INR monitoring can safely be deferred until after the full antibiotic course is completed",
          "No change needed — fluoroquinolones have no pharmacokinetic interaction with warfarin",
          "Switch warfarin to apixaban for the duration of the entire antibiotic treatment course"
        ],
        "correct": 0,
        "cat": "Bridge",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Ciprofloxacin: CYP450 inhibition + gut flora vitamin K reduction. Check INR 3-5 days into antibiotic course."
      },
      {
        "q": "A patient on warfarin with stable INR of 2.5 starts metronidazole for C. difficile. Three days later INR is 4.8. What mechanism explains this?",
        "opts": [
          "Metronidazole causes direct hepatocellular damage that raises INR independently of warfarin",
          "The C. difficile infection itself raises INR through isolated vitamin K intestinal malabsorption",
          "Metronidazole inhibits CYP2C9, the enzyme metabolizing S-warfarin, causing warfarin accumulation",
          "Metronidazole directly activates clotting factor degradation through a warfarin-independent pathway"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Metronidazole is a CYP2C9 inhibitor. S-warfarin (more potent enantiomer) is metabolized by CYP2C9."
      },
      {
        "q": "A patient on chronic warfarin completed a 10-day amoxicillin course. INR was stable during therapy. Should monitoring continue after the antibiotic?",
        "opts": [
          "No — if INR was stable during the antibiotic course, no further monitoring is indicated",
          "Yes — gut flora takes 2-4 weeks to recover, and vitamin K synthesis may shift during recovery",
          "Only recheck INR if the patient develops visible signs of active bleeding or bruising",
          "INR monitoring should only continue if another antibiotic course is started within 30 days"
        ],
        "correct": 1,
        "cat": "Monitoring",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Gut flora recovery takes weeks. Vitamin K synthesis may fluctuate, causing INR instability. Continue weekly checks 2-4 weeks post-antibiotic."
      },
      {
        "q": "A patient receiving TPN asks why they still need omeprazole when they are not eating. What is the rationale?",
        "opts": [
          "Omeprazole prevents TPN-associated hepatic steatosis and cholestasis in NPO patients",
          "Omeprazole is routinely added to TPN as a standard nutritional supplement component",
          "Acid suppression from the PPI reduces TPN-related hyperglycemia and insulin resistance",
          "Stress ulcer prophylaxis — NPO patients still produce acid and risk stress-related GI bleeding"
        ],
        "correct": 3,
        "cat": "Indications",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Gastric acid production continues without food — often higher in critical illness. PPI prophylaxis indicated in high-risk ICU patients."
      },
      {
        "q": "A mechanically ventilated ICU patient on day 4 has no stress ulcer prophylaxis ordered. Which risk factor most strongly indicates the need?",
        "opts": [
          "The patient is currently receiving enteral nutrition through a nasogastric feeding tube",
          "The patient has a peripheral IV line for routine medication administration and hydration",
          "The patient's age exceeds 50 years, which independently mandates acid suppression therapy",
          "Mechanical ventilation exceeding 48 hours — the strongest risk factor for stress-related mucosal disease"
        ],
        "correct": 3,
        "cat": "Indications",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Mechanical ventilation >48 hours and coagulopathy are the two strongest independent risk factors for stress ulcers."
      },
      {
        "q": "An ICU patient on pantoprazole for stress ulcer prophylaxis transfers to step-down, tolerating a regular diet. What should the nurse anticipate?",
        "opts": [
          "Continue pantoprazole indefinitely since the patient experienced a critical illness episode",
          "Anticipate PPI discontinuation — prophylaxis is no longer indicated once risk factors resolve",
          "Add a second acid-suppressing agent as the patient transitions off IV PPI therapy",
          "Switch from IV to oral pantoprazole and continue for at least 6 months post-discharge"
        ],
        "correct": 1,
        "cat": "Monitoring",
        "nclex": "HPM",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Stress ulcer prophylaxis should be stopped when risk factors resolve (extubation, tolerating diet). Unnecessary PPIs increase C. difficile risk."
      },
      {
        "q": "Pantoprazole IV is ordered for acute upper GI bleeding. What is the correct administration method?",
        "opts": [
          "Rapid IV push over 1 minute — speed is essential in active GI hemorrhage management",
          "Mix with lactated Ringer's solution and infuse slowly over a 4-hour continuous period",
          "80 mg bolus over 15 minutes then 8 mg/hr infusion — requires in-line filter, NS only",
          "Pantoprazole IV is only given by the intramuscular route in emergency GI situations"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "IV pantoprazole for GI bleeding: 80 mg bolus over 15 min then 8 mg/hr x72 hours. Use 0.22 micron filter, NS only, dedicated line."
      },
      {
        "q": "A nurse preparing IV pantoprazole finds only lactated Ringer's solution available. What should the nurse do?",
        "opts": [
          "Do not use LR — pantoprazole must be reconstituted and given with 0.9% NS exclusively",
          "Mix pantoprazole with D5W as a clinically acceptable alternative to lactated Ringer's solution",
          "Use the LR solution since it is compatible with all commonly administered IV medications",
          "Request sterile water for injection since pantoprazole requires preservative-free diluent only"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Knowledge",
        "rationale": "Pantoprazole IV compatible only with 0.9% NS. LR and other solutions cause precipitation."
      },
      {
        "q": "During a continuous pantoprazole infusion, the nurse notices the IV tubing has become cloudy with visible particles. What is the most likely cause and action?",
        "opts": [
          "The cloudiness indicates a normal chemical reaction — continue the infusion as ordered",
          "Flush the line with heparin to clear the precipitate and then continue the infusion",
          "Stop the infusion — precipitate indicates drug incompatibility; restart with new line and filter",
          "Increase the infusion rate to push the particulate material through the line more quickly"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Visible precipitate is never acceptable. Pantoprazole precipitates with many drugs. Stop, discard tubing, restart fresh with dedicated line and 0.22 micron filter."
      },
      {
        "q": "A nurse is educating a patient about docusate sodium (Colace) vs bisacodyl (Dulcolax). What is the key mechanistic distinction?",
        "opts": [
          "Docusate is a stool softener (surfactant); bisacodyl is a stimulant activating myenteric neurons",
          "Docusate stimulates the myenteric plexus while bisacodyl acts as a fecal surfactant agent",
          "Both drugs work identically but bisacodyl is simply a more concentrated dosage formulation",
          "Both are stimulant laxatives that directly increase colonic peristaltic wave frequency"
        ],
        "correct": 0,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Docusate = surfactant (softens stool, no motility effect). Bisacodyl = stimulates myenteric plexus (increases motility)."
      },
      {
        "q": "A postoperative patient on opioid pain management started docusate for constipation prevention. After 3 days, no bowel movement. What is the next step?",
        "opts": [
          "Double the docusate dose since it has not yet reached its full therapeutic potential",
          "Switch to loperamide since the opioid is clearly causing excessive GI tract motility",
          "Discontinue docusate and order a cleansing enema as the only remaining treatment option",
          "Add a stimulant laxative like senna — docusate alone is often insufficient for opioid constipation"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Opioid constipation involves reduced peristalsis. Docusate softens but doesn't stimulate motility. Adding senna/bisacodyl addresses the motility component."
      },
      {
        "q": "A patient asks if they can take bisacodyl long-term for chronic constipation. What is the most appropriate nursing education?",
        "opts": [
          "Bisacodyl is completely safe for unlimited long-term daily use without any clinical concerns",
          "Long-term stimulant laxatives can cause dependence — fiber and osmotic laxatives are first-line",
          "Chronic bisacodyl leads to hepatotoxicity requiring regular liver function test monitoring",
          "Chronic bisacodyl use is only a concern when taken with proton pump inhibitor medications"
        ],
        "correct": 1,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Chronic stimulant laxative use can impair natural colonic motility. First-line: fiber, hydration, exercise, then osmotic laxatives."
      },
      {
        "q": "A patient with C. difficile infection asks about taking loperamide (Imodium) for diarrhea control. What is the correct nursing response?",
        "opts": [
          "Loperamide is safe and effectively helps reduce dangerous fluid losses in C. difficile infection",
          "Loperamide is contraindicated — it traps toxin in the colon and can precipitate toxic megacolon",
          "Loperamide is only contraindicated when the patient also has a documented concurrent fever",
          "Loperamide can be used safely at half the normal recommended dose during C. difficile treatment"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "C. difficile toxins damage mucosa. Diarrhea helps clear toxin. Loperamide traps toxin, risking toxic megacolon."
      },
      {
        "q": "A patient with confirmed Shigella dysentery is prescribed loperamide by an outside provider. What nursing action is appropriate?",
        "opts": [
          "Administer as ordered since the prescribing provider made the final clinical treatment decision",
          "Hold the loperamide only if the patient develops visible bright red blood in their stool",
          "Give the loperamide with the antibiotic simultaneously to achieve a synergistic treatment effect",
          "Question the order — antimotility agents are contraindicated in invasive bacterial diarrhea"
        ],
        "correct": 3,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Loperamide contraindicated in infectious diarrhea (C. difficile, Shigella, Salmonella, E. coli O157:H7). Prolongs toxin exposure."
      },
      {
        "q": "A patient recently discharged after C. difficile treatment develops recurrent watery diarrhea. They report taking OTC loperamide at home. What is the priority concern?",
        "opts": [
          "Recurrent diarrhea may indicate C. difficile relapse — loperamide masks symptoms dangerously",
          "The patient needs a higher dose of loperamide for adequate ongoing symptom control",
          "Loperamide withdrawal after a short course typically causes rebound diarrhea in most patients",
          "Loperamide is clinically appropriate for managing post-C. difficile residual bowel symptoms"
        ],
        "correct": 0,
        "cat": "Patient Education",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "C. difficile recurrence in ~25% of patients. Loperamide can mask symptoms and is dangerous if active infection returns."
      },
      {
        "q": "A patient starting sulfasalazine for ulcerative colitis needs baseline and ongoing monitoring. What lab tests are essential?",
        "opts": [
          "Only liver function tests are needed on an annual basis for sulfasalazine monitoring",
          "No monitoring is needed because sulfasalazine is considered a very safe medication overall",
          "CBC with differential, renal function, LFTs, and urinalysis — plus folate supplementation",
          "Only check a CBC once at baseline — no ongoing monitoring is required after initial labs"
        ],
        "correct": 2,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Sulfasalazine monitoring: CBC every 2-4 weeks initially then q3 months, LFTs, renal/UA, folate. Supplement folic acid 1 mg daily."
      },
      {
        "q": "A male patient on sulfasalazine for 6 months reports difficulty conceiving with his partner. What medication-related cause should the nurse consider?",
        "opts": [
          "Sulfasalazine causes reversible oligospermia — fertility returns 2-3 months after stopping or switching",
          "The infertility is caused solely by the 5-ASA component and switching drugs will not help",
          "Sulfasalazine causes permanent and irreversible testicular damage requiring immediate discontinuation",
          "Sulfasalazine has no documented effect on male fertility at any therapeutic dose level"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Sulfapyridine causes dose-dependent oligospermia in up to 80% of men. Reversible upon stopping or switching to mesalamine."
      },
      {
        "q": "A patient on sulfasalazine reports sore throat, fever, and mouth ulcers. Which lab test is most urgently needed?",
        "opts": [
          "Comprehensive metabolic panel to assess renal and hepatic function baseline values",
          "Urinalysis to check for crystalluria resulting from sulfasalazine renal drug excretion",
          "CBC with differential — sore throat, fever, and mouth ulcers are classic agranulocytosis signs",
          "Serum folate level to assess for deficiency-related oral mucosal symptom presentation"
        ],
        "correct": 2,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Sore throat + fever + oral ulcers = agranulocytosis until proven otherwise. Stat CBC. If ANC <500, stop sulfasalazine, initiate neutropenic precautions."
      },
      {
        "q": "Mesalamine (Asacol, Pentasa) is prescribed for mild-to-moderate UC. What advantage does mesalamine have over sulfasalazine?",
        "opts": [
          "Mesalamine is a significantly stronger anti-inflammatory agent than sulfasalazine overall",
          "Mesalamine delivers 5-ASA without sulfapyridine — eliminating sulfa-related adverse effects",
          "Mesalamine works systemically while sulfasalazine provides only topical mucosal action locally",
          "Mesalamine requires absolutely no monitoring unlike sulfasalazine therapy for IBD patients"
        ],
        "correct": 1,
        "cat": "Classification",
        "nclex": "HPM",
        "process": "Planning",
        "cognitive": "Comprehension",
        "rationale": "Sulfasalazine = 5-ASA + sulfapyridine. Sulfapyridine causes most adverse effects. Mesalamine = 5-ASA alone. Same efficacy, better tolerability."
      },
      {
        "q": "A patient with ulcerative colitis and a documented sulfa allergy asks if mesalamine is safe. What is the correct response?",
        "opts": [
          "Mesalamine contains sulfa components and is contraindicated with any sulfa allergy history",
          "All IBD medications contain sulfa components and are completely contraindicated in sulfa allergy",
          "Mesalamine and sulfasalazine are chemically identical drugs with different brand trade names",
          "Mesalamine is generally safe — it is pure 5-ASA without the sulfapyridine that triggers reactions"
        ],
        "correct": 3,
        "cat": "Classification",
        "nclex": "PSI",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Mesalamine is 5-ASA without sulfa component (sulfapyridine). Sulfa allergy patients can typically use mesalamine safely."
      },
      {
        "q": "A patient on mesalamine for UC has routine urinalysis showing proteinuria and elevated serum creatinine. What adverse effect should the nurse suspect?",
        "opts": [
          "These findings are completely unrelated to mesalamine and indicate primary renal disease only",
          "Mesalamine causes benign self-limiting proteinuria that requires no clinical follow-up action",
          "Elevated creatinine indicates the mesalamine dose is subtherapeutic and should be increased",
          "Mesalamine can cause interstitial nephritis — proteinuria and rising creatinine warrant notification"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Interstitial nephritis is rare but serious with mesalamine. Monitor renal function at baseline and periodically. Early detection prevents permanent damage."
      }
    ],
    "bridge_check": [
      {
        "q": "A patient on clopidogrel after cardiac stent placement develops GI symptoms. The cardiologist orders a PPI. Which PPI should you recommend?",
        "opts": [
          "Omeprazole — it provides the strongest acid suppression for symptomatic relief overall",
          "Pantoprazole — it has the lowest CYP2C19 inhibition, preserving clopidogrel activation",
          "Avoid all PPIs in clopidogrel patients — use only H2 receptor blockers exclusively",
          "All PPIs are pharmacologically equivalent for patients taking concurrent clopidogrel therapy"
        ],
        "correct": 1,
        "cat": "Bridge M1→M6",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Pantoprazole has least CYP2C19 inhibitory activity. H2 blockers (famotidine) are also safe alternatives."
      },
      {
        "q": "A patient on dual antiplatelet therapy (clopidogrel + aspirin) after coronary stenting develops melena. The GI team wants endoscopy. What cardiovascular concern must be addressed?",
        "opts": [
          "There is no cardiovascular concern — GI procedures are independent of cardiac drug therapy",
          "The aspirin should be stopped but clopidogrel can safely continue through any GI procedure",
          "Stopping dual antiplatelet therapy risks acute stent thrombosis — cardiology must be consulted",
          "Both antiplatelet agents should be held for a minimum of 14 days before the endoscopy"
        ],
        "correct": 2,
        "cat": "Bridge M1→M6",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Stent thrombosis can occur within hours of stopping dual antiplatelet therapy. Cardiology input mandatory to balance bleeding vs. thrombosis."
      },
      {
        "q": "A patient on warfarin for a mechanical valve develops acute upper GI bleeding. INR is 4.2. How do cardiovascular and GI priorities conflict?",
        "opts": [
          "Balance both — IV PPI for bleeding, cautious INR reversal to avoid mechanical valve thrombosis",
          "Continue warfarin at the same dose and manage GI bleeding solely with blood transfusions",
          "Warfarin should be held for a minimum of 2 weeks regardless of any valve thrombosis risk",
          "Stop warfarin permanently since the GI bleeding is more immediately dangerous than the valve"
        ],
        "correct": 0,
        "cat": "Bridge M1→M6",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Mechanical valves require lifelong anticoagulation. Over-correction risks valve thrombosis. Use cautious vitamin K, consider PCC. Cardiology + GI co-management."
      },
      {
        "q": "A cirrhotic patient on lactulose, spironolactone, and furosemide for ascites. Why does excessive lactulose become dangerous here?",
        "opts": [
          "Lactulose chemically reacts with spironolactone to cause dangerous hyperkalemia directly",
          "Lactulose blocks spironolactone absorption in the small intestine, reducing its efficacy",
          "Excess lactulose diarrhea + diuretic losses cause hyponatremia and pre-renal AKI worsening encephalopathy",
          "Diarrhea from lactulose is only concerning in non-cirrhotic patients without liver disease"
        ],
        "correct": 2,
        "cat": "Bridge M2→M6",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Lactulose target is 2-4 stools daily. Excess + diuretics = severe dehydration, hyponatremia (precipitates encephalopathy), pre-renal AKI."
      },
      {
        "q": "A cirrhotic patient on lactulose, furosemide, and spironolactone has serum sodium dropping to 126 mEq/L. Which medication adjustments should be anticipated?",
        "opts": [
          "Reduce or hold diuretics and reassess lactulose dose — combined volume depletion worsens hyponatremia",
          "Start IV hypertonic saline at a rapid correction rate to quickly normalize sodium levels",
          "Add potassium supplements and continue all current medications at their existing dose levels",
          "Increase all three medications since hyponatremia worsens ascites fluid accumulation directly"
        ],
        "correct": 0,
        "cat": "Bridge M2→M6",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Dilutional hyponatremia in cirrhosis worsened by over-diuresis and excessive lactulose. Hold/reduce diuretics, assess lactulose output, fluid restrict."
      },
      {
        "q": "A cirrhotic patient on lactulose develops AKI with creatinine rising from 1.1 to 2.8 mg/dL. They have 7 stools daily. How do hepatic and renal modules connect?",
        "opts": [
          "AKI in cirrhosis is always hepatorenal syndrome requiring octreotide and midodrine immediately",
          "Lactulose is directly nephrotoxic and should be permanently discontinued in all patients",
          "The AKI is coincidental and completely unrelated to lactulose dose or fluid status changes",
          "Excessive lactulose diarrhea caused volume depletion leading to pre-renal AKI — restore volume first"
        ],
        "correct": 3,
        "cat": "Bridge M2→M6",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Pre-renal AKI from lactulose-induced volume depletion is common and reversible. IV albumin preferred for resuscitation in cirrhosis."
      },
      {
        "q": "A patient with Parkinson disease on levodopa/carbidopa needs an antiemetic. The pharmacist suggests metoclopramide. Why must you intervene?",
        "opts": [
          "Metoclopramide is clinically appropriate — it only affects the peripheral GI tract system",
          "Metoclopramide is a central D2 antagonist — it directly opposes levodopa, worsening Parkinson's",
          "Metoclopramide and levodopa interact only at very high supratherapeutic medication doses",
          "Metoclopramide enhances levodopa absorption, providing a beneficial therapeutic interaction"
        ],
        "correct": 1,
        "cat": "Bridge M4→M6",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Metoclopramide crosses BBB and blocks D2 receptors that levodopa stimulates. Ondansetron (5-HT3 antagonist) is safe."
      },
      {
        "q": "A patient with schizophrenia on haloperidol develops gastroparesis. The GI team recommends metoclopramide. What is the critical concern?",
        "opts": [
          "Both haloperidol and metoclopramide are safe to use together in any clinical setting",
          "Both are D2 antagonists — additive blockade increases EPS, NMS, and tardive dyskinesia risk",
          "Haloperidol and metoclopramide cannot be simultaneously absorbed in the GI tract together",
          "Metoclopramide completely reverses the antipsychotic efficacy of haloperidol for schizophrenia"
        ],
        "correct": 1,
        "cat": "Bridge M4→M6",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Haloperidol + metoclopramide = additive D2 blockade. Severe EPS, NMS risk. Use domperidone or erythromycin instead."
      },
      {
        "q": "A patient on an SSRI develops severe chemotherapy nausea. The team considers prochlorperazine. What multi-module interaction must be evaluated?",
        "opts": [
          "SSRIs and prochlorperazine have absolutely no known pharmacological interaction concerns",
          "Prochlorperazine enhances SSRI efficacy and should always be co-prescribed for synergy",
          "SSRIs prevent all nausea independently, making any additional antiemetic completely unnecessary",
          "Prochlorperazine has dopamine and mild serotonergic effects — EPS and serotonin risk with SSRIs"
        ],
        "correct": 3,
        "cat": "Bridge M4→M6",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Prochlorperazine blocks D2 (EPS risk) with mild serotonergic effects. With SSRIs: combined CNS risk. Ondansetron is preferred."
      },
      {
        "q": "A patient on chronic warfarin is admitted with acute liver failure. INR rises from 2.5 to 5.8 without dose change. What explains this?",
        "opts": [
          "The liver produces clotting factors AND metabolizes warfarin — failure impairs both simultaneously",
          "The INR rise indicates worsening AFib, not any liver-related drug metabolism effects",
          "This is coincidental and entirely unrelated to the patient's liver failure presentation",
          "Warfarin is completely renally cleared — liver failure has no effect on warfarin levels"
        ],
        "correct": 0,
        "cat": "Bridge M1→M6",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Liver failure: can't make clotting factors AND can't metabolize warfarin. Double mechanism = dramatic INR elevation without dose change."
      },
      {
        "q": "A patient with compensated cirrhosis on warfarin develops an acute hepatitis flare (ALT 800). INR jumps from 2.3 to 6.1. What is the immediate priority?",
        "opts": [
          "Increase warfarin dose to maintain therapeutic anticoagulation during the acute illness episode",
          "Continue warfarin at the current dose since the elevated INR will self-correct over time",
          "Hold warfarin and assess for bleeding — acute hepatitis impaired clotting factors and drug metabolism",
          "Administer vitamin K 10 mg IV push to achieve the most rapid possible INR normalization"
        ],
        "correct": 2,
        "cat": "Bridge M1→M6",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Acute hepatitis flares reduce synthetic function (fewer factors) and metabolic function (warfarin accumulates). Hold warfarin, assess bleeding, cautious vitamin K."
      },
      {
        "q": "A patient with NAFLD/stable cirrhosis starts a statin. Two weeks later, warfarin INR increases from 2.5 to 3.9. What hepatic mechanism explains this?",
        "opts": [
          "The statin competes with warfarin for CYP enzymes — in cirrhosis, limited enzymes impair clearance",
          "Statins increase warfarin absorption from the GI tract by improving hepatic bile flow output",
          "The INR change reflects the statin improving liver function and increasing clotting factor production",
          "Statins directly antagonize vitamin K, raising INR independently of hepatic function status"
        ],
        "correct": 0,
        "cat": "Bridge M1→M6",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "In cirrhosis, CYP capacity is already reduced. Adding a statin (CYP substrate) further taxes limited enzyme pool, reducing warfarin metabolism."
      },
      {
        "q": "Long-term PPI use causes hypomagnesemia. A patient on omeprazole 3 years is starting amiodarone. Why is magnesium critically important now?",
        "opts": [
          "Magnesium has no cardiac significance for patients on antiarrhythmic drug therapy",
          "Amiodarone raises magnesium levels — the two pharmacological effects effectively cancel each other",
          "Low magnesium + amiodarone QT prolongation dramatically increases Torsades de Pointes risk",
          "Only check magnesium if the patient develops symptomatic muscle cramps or weakness"
        ],
        "correct": 2,
        "cat": "Bridge M1→M6",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Magnesium stabilizes cardiac repolarization. Hypomagnesemia + amiodarone QT prolongation = substantially elevated Torsades risk."
      },
      {
        "q": "A patient on long-term esomeprazole develops hypomagnesemia (Mg 1.0) and is also taking digoxin for HF. Why is this particularly dangerous?",
        "opts": [
          "Hypomagnesemia merely increases the volume of distribution of digoxin without clinical effect",
          "Low magnesium potentiates digoxin toxicity — enhanced Na+/K+ ATPase inhibition causes arrhythmias",
          "Digoxin corrects hypomagnesemia by enhancing renal magnesium tubular reabsorption naturally",
          "Esomeprazole directly increases digoxin absorption from the GI tract independent of magnesium"
        ],
        "correct": 1,
        "cat": "Bridge M1→M6",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Hypomagnesemia and hypokalemia potentiate digoxin toxicity. PPI-induced hypomagnesemia can cause digoxin toxicity at previously safe levels."
      },
      {
        "q": "A patient with epilepsy on phenytoin develops GERD and starts omeprazole. Two weeks later, phenytoin rises from 15 to 28 mcg/mL with nystagmus and ataxia. What happened?",
        "opts": [
          "Omeprazole increased phenytoin absorption by significantly raising the gastric pH level",
          "Phenytoin induces omeprazole metabolism, making the PPI completely therapeutically ineffective",
          "GERD itself causes phenytoin malabsorption that paradoxically raises serum drug concentration",
          "Omeprazole inhibits CYP2C19 which metabolizes phenytoin — reduced clearance causes accumulation"
        ],
        "correct": 3,
        "cat": "Bridge M4→M6",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Phenytoin is metabolized by CYP2C19/CYP2C9. Omeprazole inhibits CYP2C19. Phenytoin has narrow therapeutic index + saturable kinetics. Use pantoprazole instead."
      }
    ]
  },
  "M7": {
    "rapid_fire": [
      {
        "q": "A patient has a known severe penicillin allergy (anaphylaxis). Ceftriaxone is ordered. What is the nursing action?",
        "opts": [
          "Administer ceftriaxone — cephalosporins and penicillins are completely different drug classes",
          "Use half the standard dose with a 30-minute post-administration observation period",
          "Administer with a crash cart at bedside — no need to contact the prescribing provider",
          "Clarify with provider — cross-reactivity is ~1-2% via the shared beta-lactam ring structure"
        ],
        "correct": 3,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Cross-reactivity ~1-2%. For anaphylaxis history, alternatives may be preferred or allergist consulted."
      },
      {
        "q": "A patient reports a mild rash from amoxicillin 10 years ago. Cefazolin is ordered for surgical prophylaxis. What is the appropriate nursing action?",
        "opts": [
          "Refuse to administer and demand a non-beta-lactam antibiotic immediately for the patient",
          "Administer cefazolin with standard monitoring — remote mild rash represents low cross-reactivity risk",
          "Give a test dose of amoxicillin first to determine if the previous allergy still persists",
          "Contact the allergy specialist before administering any antibiotic regardless of the procedure"
        ],
        "correct": 1,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Remote mild rash (non-anaphylactic) has very low cross-reactivity risk with cephalosporins. Risk of withholding prophylaxis may exceed allergy risk."
      },
      {
        "q": "A patient with severe penicillin allergy needs treatment for bacterial meningitis. Ceftriaxone is first-line. The allergist is unavailable. What is most appropriate?",
        "opts": [
          "Administer ceftriaxone regardless of allergy since meningitis is immediately life-threatening now",
          "Use vancomycin alone since it provides adequate coverage for all meningitis pathogens independently",
          "Consider meropenem — carbapenems have <1% cross-reactivity with penicillin and cover meningitis",
          "Wait for the allergist to become available before starting any antimicrobial therapy at all"
        ],
        "correct": 2,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Meropenem (<1% cross-reactivity) is an alternative. Do not delay empiric therapy for life-threatening infections."
      },
      {
        "q": "Vancomycin is infused too rapidly over 20 minutes. The patient develops flushing, neck/chest erythema, and pruritus. What is this reaction and management?",
        "opts": [
          "Red Man Syndrome — a rate-related histamine release reaction. Slow infusion, give diphenhydramine.",
          "This is a sign of vancomycin serum toxicity — check the drug trough level immediately",
          "This is a Type I IgE-mediated hypersensitivity — permanently discontinue vancomycin for this patient",
          "This is anaphylaxis — administer epinephrine intramuscularly and stop vancomycin permanently"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Red Man Syndrome is rate-dependent non-immunologic histamine release. Not a true allergy. Slow infusion, antihistamine, premedicate future doses."
      },
      {
        "q": "A nurse is preparing vancomycin 1.5 g IV. What is the minimum infusion time to prevent Red Man Syndrome?",
        "opts": [
          "15 minutes — rapid infusion is acceptable for all vancomycin doses under 2 grams total",
          "60 minutes regardless of dose since the reaction is not dose-dependent in any patient",
          "90 minutes minimum — vancomycin should infuse no faster than 10 mg/min for this 1.5 g dose",
          "The infusion rate does not affect Red Man Syndrome — it is a true immunologic allergic response"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Knowledge",
        "rationale": "Vancomycin: no faster than 10 mg/min (1 g per 60 min). 1.5 g = at least 90 minutes. Some protocols use 120 min for large doses."
      },
      {
        "q": "A patient who previously experienced Red Man Syndrome now requires IV vancomycin for MRSA bacteremia. What is the correct approach?",
        "opts": [
          "Premedicate with diphenhydramine, extend infusion time, monitor — RMS is not a true allergy",
          "Switch to oral vancomycin for the bloodstream infection to avoid the IV infusion reaction",
          "Desensitize the patient using a 12-hour graded IV vancomycin desensitization protocol",
          "Vancomycin is permanently contraindicated after any episode of Red Man Syndrome occurs"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "RMS is not a true allergy. Vancomycin can be re-administered with premedication and slower rate. Oral vancomycin ineffective for bacteremia."
      },
      {
        "q": "Aminoglycoside monitoring focuses on AUC/MIC-guided dosing. What two major toxicities make monitoring essential?",
        "opts": [
          "Hepatotoxicity and cardiotoxicity requiring daily liver and cardiac function assessments",
          "Bone marrow suppression and peripheral neuropathy from direct neuronal toxicity mechanisms",
          "Seizures and QT prolongation from direct blockade of cardiac ion channel function",
          "Nephrotoxicity and ototoxicity — both concentration-related and potentially irreversible"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Aminoglycosides: nephrotoxicity (proximal tubule, usually reversible) and ototoxicity (hair cell destruction, often irreversible)."
      },
      {
        "q": "A patient on gentamicin for 10 days reports new-onset tinnitus and difficulty hearing. What is the priority nursing action?",
        "opts": [
          "Document the finding and continue gentamicin since tinnitus is a temporary reversible effect",
          "Hold gentamicin and notify provider — tinnitus is early ototoxicity that can become irreversible",
          "Reduce the gentamicin dose by half and recheck the patient's hearing in approximately one week",
          "Administer diphenhydramine for the tinnitus symptoms and continue the antibiotic as scheduled"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Tinnitus = early cochlear toxicity warning. Aminoglycoside ototoxicity is often irreversible. Immediate drug discontinuation and audiology referral."
      },
      {
        "q": "A patient with CKD (eGFR 35) requires gentamicin for a gram-negative infection. What dosing adjustment and monitoring are most critical?",
        "opts": [
          "No adjustment needed since gentamicin is primarily metabolized by hepatic CYP enzymes",
          "Extended-interval dosing with renal-adjusted frequency — aminoglycosides are renally cleared",
          "Switch to oral gentamicin formulation to reduce the risk of systemic renal drug toxicity",
          "Double the dose to overcome reduced renal drug penetration in CKD patients with low eGFR"
        ],
        "correct": 1,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Aminoglycosides almost exclusively renally cleared. In CKD, extend dosing interval (not reduce dose) to maintain peak efficacy."
      },
      {
        "q": "Fluoroquinolones have multiple Black Box Warnings. Which warning is MOST specific to this drug class?",
        "opts": [
          "Risk of C. difficile colitis during and after antibiotic therapy administration",
          "QT prolongation and serious cardiac arrhythmias including torsades de pointes",
          "Photosensitivity and severe dermatologic rash reactions requiring immediate discontinuation",
          "Tendinitis and tendon rupture — particularly Achilles tendon in elderly and steroid users"
        ],
        "correct": 3,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Tendinopathy BBW is unique to fluoroquinolones. Mechanism: inhibition of tenocyte function and collagen synthesis."
      },
      {
        "q": "A 72-year-old on prednisone 20 mg for COPD exacerbation is prescribed levofloxacin for pneumonia. What risk factor combination requires attention?",
        "opts": [
          "Age >60 plus corticosteroid use dramatically increases fluoroquinolone tendon rupture risk",
          "Prednisone prevents the tendon side effects of fluoroquinolones through anti-inflammatory mechanisms",
          "Levofloxacin is absolutely contraindicated with any concurrent corticosteroid therapy at any dose",
          "Prednisone and levofloxacin have no combined adverse effects in elderly patient populations"
        ],
        "correct": 0,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Three risk factors: age >60, concurrent corticosteroid, potentially renal impairment. Educate about tendon pain."
      },
      {
        "q": "A patient who completed ciprofloxacin 3 weeks ago reports new tingling and numbness in their feet. What is the likely cause?",
        "opts": [
          "The symptoms are entirely unrelated to the antibiotic since the course was completed weeks ago",
          "Tingling after fluoroquinolones indicates a new bacterial reinfection of the peripheral nervous system",
          "Fluoroquinolone peripheral neuropathy can occur during or after therapy and may be irreversible",
          "The patient has developed a new vitamin B12 deficiency directly caused by the antibiotic course"
        ],
        "correct": 2,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Peripheral neuropathy is a BBW for fluoroquinolones. Can manifest after therapy completion. May be irreversible."
      },
      {
        "q": "Linezolid is prescribed for VRE bacteremia. The patient also takes sertraline. What is the contraindicated interaction?",
        "opts": [
          "Linezolid has MAOI activity — combined with sertraline it causes serotonin syndrome",
          "Both drugs prolong the QT interval — cardiac rhythm monitoring is the only clinical concern",
          "No clinically significant interaction exists between linezolid and sertraline medications",
          "Linezolid inhibits CYP3A4, causing sertraline to accumulate to toxic serum levels rapidly"
        ],
        "correct": 0,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Linezolid inhibits MAO-A. SSRIs block SERT. Together: serotonin toxicity. May be fatal."
      },
      {
        "q": "A patient on duloxetine (SNRI) for diabetic neuropathy develops a wound infection requiring linezolid. The provider decides linezolid is the only option. What must occur first?",
        "opts": [
          "Continue duloxetine at a reduced dose to effectively prevent discontinuation withdrawal symptoms",
          "Start cyproheptadine prophylactically and administer both drugs simultaneously as prescribed",
          "Discontinue duloxetine and allow adequate washout — serotonergic activity creates syndrome risk",
          "Switch duloxetine to a tricyclic antidepressant since TCAs are completely safe with linezolid"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Duloxetine (SNRI) + linezolid (MAOI) = serotonin syndrome risk. TCAs are also contraindicated with MAOIs."
      },
      {
        "q": "A nurse monitors a patient who started linezolid 3 days ago after holding their SSRI. Which findings would indicate serotonin syndrome?",
        "opts": [
          "Bradycardia, hypothermia, and constricted pupils are the classic serotonin toxicity presentation",
          "Hyperthermia, agitation, clonus, diaphoresis, and diarrhea are the hallmark serotonin syndrome signs",
          "Fixed dilated pupils, absent reflexes, and flaccid paralysis suggest serotonergic excess state",
          "Peripheral edema, weight gain, and decreased urinary output indicate serotonin-mediated toxicity"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Serotonin syndrome triad: neuromuscular hyperactivity (clonus), autonomic dysfunction (hyperthermia, diaphoresis), altered mental status."
      },
      {
        "q": "Tacrolimus is prescribed after kidney transplant. The patient asks about taking St. John's Wort for depression. What is your response?",
        "opts": [
          "St. John's Wort is a natural supplement and is safe with all prescription medications",
          "It can be safely taken as long as tacrolimus levels are checked on a monthly basis",
          "Only avoid St. John's Wort within 2 hours of taking the tacrolimus dose each day",
          "Do not take it — it induces CYP3A4/P-gp, dramatically lowering tacrolimus risking rejection"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "St. John's Wort induces CYP3A4/P-gp, reducing tacrolimus 50-70%. Can cause acute rejection."
      },
      {
        "q": "A kidney transplant patient on tacrolimus reports starting a daily grapefruit juice cleanse. What is the immediate concern?",
        "opts": [
          "Grapefruit juice has no documented effect on transplant medications taken by the oral route",
          "The citric acid in grapefruit juice reduces tacrolimus absorption from the GI tract significantly",
          "Grapefruit only interacts with cyclosporine, not tacrolimus — no intervention is needed here",
          "Grapefruit inhibits intestinal CYP3A4, significantly increasing tacrolimus levels and toxicity risk"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Grapefruit inhibits intestinal CYP3A4/P-gp, increasing tacrolimus bioavailability. Narrow therapeutic index = dangerous."
      },
      {
        "q": "A transplant patient on tacrolimus is prescribed rifampin for latent tuberculosis. What is the expected pharmacokinetic outcome?",
        "opts": [
          "Rifampin has no effect on tacrolimus since they use completely different metabolic pathways",
          "Rifampin potently induces CYP3A4, dramatically lowering tacrolimus and risking organ rejection",
          "Rifampin increases tacrolimus levels through enzyme inhibition, requiring significant dose reduction",
          "Rifampin and tacrolimus compete for the same cellular receptor, reducing both drug effects equally"
        ],
        "correct": 1,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Rifampin is the most potent CYP3A4 inducer. Tacrolimus can drop below therapeutic range in 2-3 days."
      },
      {
        "q": "A liver transplant patient on tacrolimus takes clarithromycin for a respiratory infection. Trough rises from 8 to 28 ng/mL. Why?",
        "opts": [
          "Clarithromycin increases tacrolimus absorption from the GI tract through bile acid effects",
          "Clarithromycin and tacrolimus compete for the same plasma transport binding protein directly",
          "Clarithromycin strongly inhibits CYP3A4, dramatically slowing tacrolimus metabolism and clearance",
          "This level rise is expected and remains within the therapeutic range for transplant patients"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Tacrolimus target trough 5-15 ng/mL. Clarithromycin's CYP3A4 inhibition can triple levels. At 28 = nephrotoxicity risk."
      },
      {
        "q": "A transplant patient on cyclosporine develops a sinus infection. The provider orders erythromycin. What pharmacokinetic concern mirrors the tacrolimus-clarithromycin interaction?",
        "opts": [
          "Erythromycin also inhibits CYP3A4 — it will raise cyclosporine levels similarly to clarithromycin",
          "Erythromycin reduces cyclosporine levels through hepatic enzyme induction, requiring dose increase",
          "Cyclosporine is not metabolized by any CYP enzymes and is unaffected by macrolide antibiotics",
          "Erythromycin has no CYP interactions at all, unlike other macrolide antibiotic class members"
        ],
        "correct": 0,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Application",
        "rationale": "Erythromycin and clarithromycin are both CYP3A4 inhibitors. All calcineurin inhibitors are CYP3A4 substrates. Azithromycin has minimal CYP effect."
      },
      {
        "q": "A transplant patient's tacrolimus trough drops from 10 to 3.5 ng/mL over 2 weeks after starting a new medication. Which new drug most likely caused this?",
        "opts": [
          "Amlodipine — a calcium channel blocker that induces CYP3A4 enzymes in the liver significantly",
          "Fluconazole — an antifungal that inhibits CYP3A4 and reduces hepatic tacrolimus drug clearance",
          "Phenytoin — a potent CYP3A4 inducer that accelerates tacrolimus metabolism below therapeutic levels",
          "Metoprolol — a beta-blocker that competes with tacrolimus for albumin binding protein sites"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Phenytoin potently induces CYP3A4. Trough of 3.5 is subtherapeutic, risking rejection."
      },
      {
        "q": "Amphotericin B deoxycholate is ordered for invasive aspergillosis. Why is pre-infusion hydration particularly important?",
        "opts": [
          "Amphotericin causes renal vasoconstriction and tubular toxicity — saline hydration protects kidneys",
          "Hydration accelerates amphotericin distribution to the site of fungal infection in tissues",
          "Hydration prevents the QT prolongation that is associated with amphotericin B infusion therapy",
          "Hydration prevents the infusion reaction flushing associated with amphotericin B administration"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Conventional amphotericin B is nephrotoxic. Pre/post hydration with NS reduces drug concentration in renal tubules."
      },
      {
        "q": "A patient on amphotericin B deoxycholate for 5 days has potassium 2.9 mEq/L and magnesium 1.3 mg/dL. What is the mechanism?",
        "opts": [
          "Amphotericin B inhibits intestinal absorption of potassium and magnesium from dietary sources",
          "The electrolyte losses are entirely from the pre-infusion IV hydration diluting serum concentrations",
          "Amphotericin B stimulates aldosterone release, causing excessive renal potassium excretion only",
          "Amphotericin creates pores in renal tubular membranes, causing potassium and magnesium wasting"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "Amphotericin inserts into cholesterol-containing membranes. In renal tubules: creates ion channels leaking K+ and Mg++."
      },
      {
        "q": "A provider orders amphotericin B deoxycholate. The pharmacist recommends switching to liposomal (AmBisome). The patient asks why formulation matters.",
        "opts": [
          "Liposomal amphotericin has a significantly broader antifungal spectrum against resistant organisms",
          "Liposomal formulation delivers drug to fungal cells rather than kidneys — significantly less nephrotoxic",
          "The liposomal form completely eliminates the need for any premedication or clinical monitoring",
          "Liposomal amphotericin can be conveniently given orally instead of requiring IV infusion therapy"
        ],
        "correct": 1,
        "cat": "Classification",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Lipid encapsulation targets fungal membranes over mammalian membranes. Nephrotoxicity reduced 50-60%."
      },
      {
        "q": "A patient with H. pylori is prescribed triple therapy with clarithromycin. They have a penicillin allergy (rash). Amoxicillin is in the regimen. What do you do?",
        "opts": [
          "Administer all three drugs — penicillin allergy and amoxicillin are completely unrelated drugs",
          "Flag the amoxicillin — it is a penicillin-class drug. Notify provider about alternative regimens.",
          "Substitute ampicillin for amoxicillin — ampicillin is structurally different from amoxicillin entirely",
          "Give amoxicillin at a lower dose since the prior allergy was only a mild skin rash reaction"
        ],
        "correct": 1,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Amoxicillin is an aminopenicillin. Alternatives: bismuth quadruple therapy or clarithromycin triple with metronidazole."
      },
      {
        "q": "A patient with a documented penicillin allergy presents with strep pharyngitis. The provider orders amoxicillin. What is the nurse's responsibility?",
        "opts": [
          "Administer amoxicillin since strep pharyngitis overrides any allergy documentation concerns",
          "Hold the amoxicillin and substitute a fluoroquinolone without first contacting the provider",
          "Give the amoxicillin with epinephrine pre-loaded in a syringe at bedside as a precaution",
          "Clarify allergy history — determine nature and severity, as amoxicillin is a penicillin-class drug"
        ],
        "correct": 3,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Allergy history clarification is essential. Nature determines risk: mild rash may allow use, anaphylaxis requires avoidance."
      },
      {
        "q": "A nurse reviews medication reconciliation. The patient lists 'penicillin allergy — nausea.' Should this affect prescribing amoxicillin?",
        "opts": [
          "Nausea is a side effect, not a true allergy — clarify and document as intolerance, amoxicillin likely safe",
          "The patient should never receive any antibiotic in the entire penicillin drug family permanently",
          "Amoxicillin is completely safe because it is structurally different from penicillin G entirely",
          "Yes — all reported penicillin allergies are equally dangerous regardless of the reaction type"
        ],
        "correct": 0,
        "cat": "Patient Education",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "GI side effects are adverse effects, not immune-mediated allergies. Up to 90% of reported penicillin allergies are not true allergies."
      },
      {
        "q": "Vancomycin is associated with nephrotoxicity. Which concurrent drug significantly increases this risk?",
        "opts": [
          "Atorvastatin — through additive metabolic effects on the renal tubular cell membranes",
          "Metronidazole — through additive antimicrobial-induced direct renal parenchymal toxicity",
          "Piperacillin-tazobactam — epidemiological association with increased vancomycin-related AKI",
          "Ceftriaxone — because any beta-lactam addition always increases nephrotoxicity risk significantly"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Vancomycin + pip/tazo associated with significantly higher AKI rates. Cefepime may be a safer beta-lactam combination."
      },
      {
        "q": "A patient on vancomycin and pip/tazo for intra-abdominal infection has creatinine rising from 0.9 to 1.8 over 3 days. What is the priority action?",
        "opts": [
          "Notify provider — creatinine rise suggests vancomycin-related AKI potentiated by pip/tazo combination",
          "Hold only the piperacillin-tazobactam and continue vancomycin at the exact same current dose",
          "Increase IV fluid rate to flush the antibiotics through the kidneys at a faster clearance rate",
          "Continue both medications since creatinine doubling is expected with any antibiotic regimen"
        ],
        "correct": 0,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "100% creatinine rise is significant AKI. Provider notification allows regimen change (e.g., switch pip/tazo to cefepime)."
      },
      {
        "q": "An ICU patient has a vancomycin trough of 22 mcg/mL (target 15-20 for serious infections). What is the clinical concern?",
        "opts": [
          "A trough of 22 is within the acceptable therapeutic range and requires no dose adjustment",
          "Vancomycin troughs above 20 indicate the drug is no longer effective against MRSA organisms",
          "Supratherapeutic troughs >20 increase nephrotoxicity risk — reduce dose or extend interval",
          "High troughs require adding a second antibiotic to prevent development of resistance patterns"
        ],
        "correct": 2,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Troughs >20 mcg/mL increase nephrotoxicity without additional efficacy. Current guidelines favor AUC/MIC-guided dosing."
      },
      {
        "q": "Nitrofurantoin (Macrobid) is prescribed for a UTI. The patient's eGFR is 25 mL/min. Why is this problematic?",
        "opts": [
          "Nitrofurantoin is directly hepatotoxic in all patients with any degree of renal impairment",
          "eGFR <30 = ineffective urinary concentration plus systemic accumulation causing neuropathy risk",
          "Renal function does not affect nitrofurantoin dosing, efficacy, or safety in any clinical scenario",
          "Nitrofurantoin causes hyperkalemia in CKD patients through distal tubular potassium retention"
        ],
        "correct": 1,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "Nitrofurantoin requires urinary concentration for bactericidal effect. eGFR <30: subtherapeutic + neuropathy/pulmonary toxicity risk."
      },
      {
        "q": "An 80-year-old with eGFR of 42 mL/min has a UTI. Nitrofurantoin is ordered. Should the nurse question this?",
        "opts": [
          "Yes — nitrofurantoin is absolutely contraindicated in all patients over age 75 regardless",
          "No concern — eGFR of 42 is fully adequate for nitrofurantoin with no additional monitoring needed",
          "Nitrofurantoin should be switched to its IV formulation in elderly patients with borderline function",
          "While eGFR is above 30, close monitoring is warranted — elderly eGFR can fluctuate rapidly"
        ],
        "correct": 3,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "eGFR >30 allows nitrofurantoin, but elderly near the cutoff warrant monitoring. Short courses minimize risk."
      },
      {
        "q": "A patient on long-term nitrofurantoin prophylaxis develops a dry cough and dyspnea over several months. What adverse effect should the nurse suspect?",
        "opts": [
          "The symptoms are seasonal allergies completely unrelated to the nitrofurantoin prophylaxis therapy",
          "Nitrofurantoin causes reversible bronchospasm that is easily treated with inhaled bronchodilators",
          "The pulmonary symptoms indicate the UTI has systemically spread to the respiratory tract now",
          "Chronic nitrofurantoin can cause pulmonary fibrosis — insidious cough and dyspnea need evaluation"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Nitrofurantoin pulmonary toxicity: acute (reversible pneumonitis) and chronic (fibrosis, may be irreversible)."
      },
      {
        "q": "Azithromycin is prescribed for community-acquired pneumonia. What cardiac risk must be considered in patients with cardiac disease?",
        "opts": [
          "Azithromycin causes clinically significant bradycardia requiring pacemaker evaluation first",
          "Azithromycin prolongs QT, increasing fatal arrhythmia risk with baseline QT or electrolyte issues",
          "No cardiac monitoring is needed — macrolides are the safest antibiotic class for cardiac patients",
          "Azithromycin causes direct myocardial cellular damage similar to anthracycline chemotherapy agents"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "FDA 2013: azithromycin causes QT prolongation. Highest risk with existing QT prolongation, hypokalemia, concurrent QT drugs."
      },
      {
        "q": "A patient with long QT syndrome needs antibiotic treatment for atypical pneumonia. Azithromycin is first-line. What should the nurse recommend?",
        "opts": [
          "Proceed with azithromycin since congenital QT syndrome does not interact with any medications",
          "Use azithromycin at half the standard dose to proportionally reduce the cardiac arrhythmia risk",
          "Avoid azithromycin — long QT significantly increases drug-induced Torsades risk; use doxycycline",
          "Administer azithromycin IV instead of oral to bypass the QT-prolonging drug absorption effect"
        ],
        "correct": 2,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Congenital long QT = major risk factor for drug-induced Torsades. Doxycycline has no QT effect."
      },
      {
        "q": "A patient taking azithromycin is also prescribed methadone by pain management. Why is this combination concerning?",
        "opts": [
          "Both independently prolong QT — additive prolongation creates significant Torsades de Pointes risk",
          "Azithromycin reduces methadone's analgesic efficacy through hepatic CYP enzyme induction effects",
          "Methadone prevents azithromycin from reaching adequate therapeutic antibiotic blood levels",
          "Methadone and azithromycin compete for GI absorption, reducing both drug therapeutic levels"
        ],
        "correct": 0,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Methadone is one of the most QT-prolonging opioids. Combined with azithromycin's QT effect, substantial risk."
      },
      {
        "q": "Amphotericin B liposomal (AmBisome) is preferred over conventional. What is the primary clinical advantage?",
        "opts": [
          "Liposomal formulation has a broader antifungal spectrum against resistant fungal organisms",
          "The liposomal form can be given orally instead of requiring IV infusion administration",
          "Lipid encapsulation reduces nephrotoxicity while maintaining antifungal efficacy equivalently",
          "Liposomal amphotericin completely eliminates the need for any premedication or hydration"
        ],
        "correct": 2,
        "cat": "Classification",
        "nclex": "HPM",
        "process": "Planning",
        "cognitive": "Comprehension",
        "rationale": "Liposomal formulation reduces nephrotoxicity 50-60% through preferential delivery to fungal membranes."
      },
      {
        "q": "A patient on liposomal amphotericin B has creatinine rising from 1.0 to 1.6 after 7 days. The provider says this is less concerning than with conventional. Correct?",
        "opts": [
          "Yes — liposomal has reduced but not zero nephrotoxicity; mild rises are manageable with monitoring",
          "Liposomal amphotericin has absolutely zero nephrotoxicity — the creatinine rise has another cause",
          "The creatinine rise indicates the liposomal formulation is therapeutically ineffective and must change",
          "No — any creatinine rise on any formulation of amphotericin requires immediate drug discontinuation"
        ],
        "correct": 0,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "Liposomal has reduced but not zero nephrotoxicity. Mild creatinine rises may be acceptable. Continue monitoring."
      },
      {
        "q": "The ICU pharmacist recommends switching from conventional to liposomal amphotericin B due to rising creatinine. Insurance denies coverage citing cost. What clinical argument supports the switch?",
        "opts": [
          "There is no clinical difference — conventional is equally safe with adequate hydration protocols",
          "Liposomal amphotericin works faster, reducing overall treatment duration and total drug cost",
          "Conventional amphotericin requires a dedicated ICU nurse for monitoring, making it more expensive",
          "Preventing AKI avoids dialysis, prolonged ICU stay, and secondary infections — far exceeding drug cost"
        ],
        "correct": 3,
        "cat": "Classification",
        "nclex": "HPM",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "AKI from conventional amphotericin often requires dialysis and extended hospitalization. Cost of complications >> drug price difference."
      },
      {
        "q": "TMP-SMX is prescribed for a UTI. The patient takes lisinopril and spironolactone. What electrolyte concern is highest?",
        "opts": [
          "Hyponatremia from combined renal sodium wasting through multiple nephron segment mechanisms",
          "Hyperkalemia — trimethoprim blocks ENaC; combined with ACEi and K-sparing diuretic, K+ rises",
          "Hypomagnesemia from trimethoprim's direct effect on distal tubular magnesium reabsorption channels",
          "Hypocalcemia from increased urinary calcium excretion caused by trimethoprim's tubular effects"
        ],
        "correct": 1,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Trimethoprim blocks ENaC (like amiloride). Triple K+-retaining threat with ACEi + spironolactone. Monitor K+ in 3-5 days."
      },
      {
        "q": "An elderly patient on enalapril for HF is prescribed TMP-SMX for a UTI. Baseline potassium is 4.9 mEq/L. What should the nurse anticipate?",
        "opts": [
          "Potassium of 4.9 is normal — no additional monitoring is needed with TMP-SMX therapy",
          "High-normal K+ with two K+-retaining mechanisms puts patient at immediate hyperkalemia risk",
          "Enalapril should be doubled to counteract trimethoprim's potassium-related electrolyte effects",
          "TMP-SMX will lower the potassium through increased renal excretion at the collecting duct"
        ],
        "correct": 1,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Starting K+ at upper limit with ACEi + trimethoprim creates high risk. Monitor K+ at 48-72 hours."
      },
      {
        "q": "A patient on TMP-SMX develops peaked T waves on ECG and potassium of 6.2 mEq/L. What is the priority nursing action?",
        "opts": [
          "Recheck the potassium in 24 hours since it may be a spurious lab error from hemolysis",
          "Administer oral potassium binders and continue the current antibiotic course as prescribed",
          "Switch to IV TMP-SMX since the oral formulation causes more hyperkalemia than parenteral forms",
          "Notify provider immediately — K+ 6.2 with ECG changes is emergent; anticipate calcium gluconate"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "K+ 6.2 with peaked T waves = hyperkalemic emergency. IV calcium gluconate stabilizes membranes. Insulin/glucose shifts K+. Stop TMP-SMX."
      },
      {
        "q": "Daptomycin (Cubicin) is used for MRSA bacteremia. What unique monitoring parameter distinguishes it?",
        "opts": [
          "Weekly CPK levels — daptomycin can cause skeletal muscle toxicity and rhabdomyolysis",
          "Daily vancomycin trough levels since daptomycin is classified as a glycopeptide antibiotic",
          "Audiometry testing for ototoxicity similar to aminoglycoside antibiotic drug class monitoring",
          "Daily liver function tests for daptomycin-induced hepatotoxicity and cholestasis monitoring"
        ],
        "correct": 0,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Daptomycin can affect skeletal muscle membranes. CPK: baseline then weekly. Hold if CPK >10x ULN. Avoid concurrent statins."
      },
      {
        "q": "A patient on daptomycin for MRSA endocarditis is also on atorvastatin 80 mg. CPK has risen to 1,200 U/L (normal <200). What is the concern and action?",
        "opts": [
          "Elevated CPK is expected with high-dose statins alone and is not concerning during treatment",
          "Only hold the statin and continue daptomycin since the antibiotic takes clinical priority here",
          "Both cause myotoxicity — hold both drugs, notify provider, and monitor CPK and renal function",
          "The CPK elevation indicates the MRSA infection is worsening, not representing a drug-related effect"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Daptomycin + statins both cause myotoxicity. Guidelines: hold statins during daptomycin. CPK 6x ULN requires intervention."
      },
      {
        "q": "A provider considers daptomycin for a patient with MRSA pneumonia. The nurse should question this order because:",
        "opts": [
          "Daptomycin is inactivated by pulmonary surfactant — it is clinically ineffective for pneumonia",
          "Daptomycin requires intrathecal administration for all respiratory tract infections specifically",
          "Pulmonary drug levels are excessively high with daptomycin, causing direct alveolar toxicity",
          "Daptomycin is only effective against gram-negative organisms found in the pulmonary system"
        ],
        "correct": 0,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Knowledge",
        "rationale": "Pulmonary surfactant binds and inactivates daptomycin. Never use for pneumonia. Use vancomycin or linezolid for MRSA pneumonia."
      }
    ],
    "bridge_check": [
      {
        "q": "A patient on sertraline for PTSD develops MRSA bacteremia. The ID team recommends linezolid. What is the bridge between M4 and M7?",
        "opts": [
          "No bridge exists — these drugs work on completely different physiological systems",
          "Sertraline directly reduces the antimicrobial coverage of linezolid against MRSA organisms",
          "Linezolid's MAOI activity + sertraline's SSRI mechanism = serotonin syndrome — hold sertraline",
          "Linezolid and sertraline together cause agranulocytosis through additive marrow suppression"
        ],
        "correct": 2,
        "cat": "Bridge M4→M7",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Critical serotonin syndrome interaction. If linezolid essential, stop SSRI first with appropriate washout."
      },
      {
        "q": "A patient on phenelzine (MAOI) develops life-threatening MRSA. Linezolid is the only effective option. What is the dilemma?",
        "opts": [
          "Phenelzine and linezolid can be safely combined since they target different systems entirely",
          "Both inhibit MAO — extreme serotonin/catecholamine excess risk requires interdisciplinary coordination",
          "Phenelzine directly blocks linezolid's antibiotic mechanism through competitive enzyme inhibition",
          "Linezolid reverses the therapeutic antidepressant effects of phenelzine, worsening depression"
        ],
        "correct": 1,
        "cat": "Bridge M4→M7",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Double MAOI = hypertensive crisis + serotonin toxicity. Stop phenelzine, start linezolid with intensive monitoring."
      },
      {
        "q": "A patient with bipolar disorder on lithium and valproic acid develops a severe infection requiring IV TMP-SMX. What bridge concern exists?",
        "opts": [
          "TMP-SMX has no documented effect on psychiatric medication levels or renal drug clearance",
          "Valproic acid prevents TMP-SMX from achieving effective therapeutic antimicrobial concentrations",
          "Lithium enhances TMP-SMX efficacy against skin infections through direct immune modulation",
          "Trimethoprim reduces renal lithium clearance causing accumulation — monitor levels for toxicity"
        ],
        "correct": 3,
        "cat": "Bridge M4→M7",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Trimethoprim reduces renal lithium clearance by 20-40%. Monitor lithium within 3-5 days of starting TMP-SMX."
      },
      {
        "q": "A transplant patient on tacrolimus develops Candida infection requiring fluconazole. What happens to tacrolimus levels?",
        "opts": [
          "Fluconazole has no effect on tacrolimus levels regardless of the dose or duration used",
          "Fluconazole reduces tacrolimus levels through hepatic enzyme induction, requiring dose increase",
          "Only monitor tacrolimus levels after the complete fluconazole antifungal course has ended",
          "Fluconazole inhibits CYP3A4/2C19 — tacrolimus levels rise significantly. Anticipate dose reduction."
        ],
        "correct": 3,
        "cat": "Bridge M5→M7",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Fluconazole can increase tacrolimus 2-4 fold. Proactively reduce dose, check trough in 2-3 days."
      },
      {
        "q": "A heart transplant patient on cyclosporine develops esophageal candidiasis. Fluconazole is prescribed. What parallel interaction must be anticipated?",
        "opts": [
          "Cyclosporine is not affected by any azole antifungal drugs unlike the calcineurin inhibitor tacrolimus",
          "Fluconazole inhibits CYP3A4 metabolizing cyclosporine — same dose reduction and monitoring needed",
          "Cyclosporine prevents fluconazole from reaching the esophageal infection site effectively enough",
          "Fluconazole and cyclosporine have a beneficial synergistic effect on immunosuppression management"
        ],
        "correct": 1,
        "cat": "Bridge M5→M7",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Both calcineurin inhibitors are CYP3A4 substrates. Same interaction class effect with all azoles."
      },
      {
        "q": "A renal transplant patient on tacrolimus, mycophenolate, and prednisone develops PCP requiring TMP-SMX treatment doses. What is the concern?",
        "opts": [
          "TMP-SMX has no interactions with any immunosuppressive medications at treatment doses",
          "TMP-SMX enhances the immunosuppressive effect of prednisone, causing adrenal crisis directly",
          "TMP-SMX causes additive myelosuppression with mycophenolate and reduces tacrolimus clearance",
          "Mycophenolate prevents TMP-SMX from achieving effective antimicrobial drug concentrations"
        ],
        "correct": 2,
        "cat": "Bridge M5→M7",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Multiple interactions: trimethoprim reduces tacrolimus clearance, additive myelosuppression with mycophenolate, hyperkalemia risk."
      },
      {
        "q": "A patient on furosemide for HF is started on gentamicin for gram-negative bacteremia. What combined toxicity requires double monitoring?",
        "opts": [
          "Both are independently ototoxic and nephrotoxic — combined use synergistically increases risk",
          "No combined toxicity — these drugs affect entirely different organ systems with no overlap",
          "Only gentamicin causes ototoxicity — furosemide's ototoxicity is a pharmacological myth",
          "Monitor only gentamicin levels — furosemide requires no additional therapeutic drug monitoring"
        ],
        "correct": 0,
        "cat": "Bridge M2→M7",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Furosemide: strial cell ototoxicity + electrolyte wasting. Gentamicin: cochlear + tubular toxicity. Combined: synergistic."
      },
      {
        "q": "A patient with decompensated HF on IV furosemide 80 mg BID develops an MRSA wound infection. Vancomycin is ordered. What renal bridge must be monitored?",
        "opts": [
          "Furosemide and vancomycin have no overlapping renal toxicity concerns at standard doses",
          "Vancomycin and furosemide cancel each other's renal effects through opposing tubular mechanisms",
          "IV furosemide volume depletion + vancomycin nephrotoxicity compounds AKI risk — monitor closely",
          "Furosemide protects the kidneys from vancomycin toxicity by increasing renal drug clearance"
        ],
        "correct": 2,
        "cat": "Bridge M2→M7",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Aggressive diuresis reduces renal perfusion. Vancomycin in volume-depleted state = higher concentrations and nephrotoxicity."
      },
      {
        "q": "A patient with CKD Stage 3 (eGFR 38) on lisinopril develops a complicated UTI requiring aminoglycoside therapy. What multi-module risk assessment is critical?",
        "opts": [
          "CKD + ACEi-reduced renal perfusion + aminoglycoside nephrotoxicity = accelerated kidney injury risk",
          "Aminoglycosides should be given at double dose in CKD to overcome reduced renal concentration",
          "Lisinopril protects the kidneys from aminoglycoside toxicity through its renoprotective mechanism",
          "CKD and lisinopril have no impact on aminoglycoside safety or dosing considerations"
        ],
        "correct": 0,
        "cat": "Bridge M2→M7",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Triple renal risk. Extend dosing interval, monitor levels, consider holding ACEi, daily SCr."
      },
      {
        "q": "A patient with cirrhosis requires antifungal therapy for systemic candidiasis. Fluconazole is chosen. What hepatic consideration is critical?",
        "opts": [
          "Fluconazole is entirely renally cleared — liver disease does not affect its pharmacokinetics",
          "Use the standard dose unchanged — hepatic enzyme status rarely affects azole drug levels",
          "Fluconazole is the safest antifungal in cirrhosis and requires no additional monitoring whatsoever",
          "Fluconazole is hepatically metabolized and hepatotoxic — in cirrhosis, increased exposure and liver risk"
        ],
        "correct": 3,
        "cat": "Bridge M6→M7",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "In cirrhosis: reduced metabolism = higher levels + additive hepatotoxicity. Echinocandins preferred in severe liver disease."
      },
      {
        "q": "A patient with alcoholic hepatitis develops a fungal blood infection. Voriconazole is considered. What GI-hepatic bridge must be evaluated?",
        "opts": [
          "Voriconazole is safe in liver disease since it is excreted entirely unchanged in the urine",
          "Voriconazole's hepatic metabolism and hepatotoxicity make it dangerous in active hepatitis",
          "Alcoholic hepatitis only affects drug absorption rates, not hepatic drug metabolism capacity",
          "Voriconazole actually improves hepatic function through antifungal reduction of liver inflammation"
        ],
        "correct": 1,
        "cat": "Bridge M6→M7",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Voriconazole: extensive hepatic metabolism (CYP2C19, 3A4, 2C9) + hepatotoxicity. In active hepatitis: drug accumulation + additive liver injury. Echinocandins preferred."
      },
      {
        "q": "A patient on methotrexate for RA develops a UTI. The provider orders TMP-SMX. What cross-module interaction bridges immune and infectious disease?",
        "opts": [
          "Methotrexate and TMP-SMX have no overlapping mechanisms or toxicity concerns at all",
          "Both inhibit folate metabolism — additive DHFR inhibition causes severe pancytopenia and mucositis",
          "Methotrexate enhances TMP-SMX's antibiotic activity through complementary immune suppression",
          "TMP-SMX increases methotrexate's anti-inflammatory effect, which is clinically beneficial"
        ],
        "correct": 1,
        "cat": "Bridge M6→M7",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Both inhibit DHFR. Combined = severe folate depletion: pancytopenia, mucositis, hepatotoxicity. Use alternative UTI antibiotics."
      },
      {
        "q": "A diabetic patient on metformin is admitted with a severe infection requiring IV contrast CT and vancomycin. What multi-module bridge applies?",
        "opts": [
          "Metformin has no interaction with IV contrast media or vancomycin at any clinical dose",
          "Metformin prevents vancomycin from reaching adequate therapeutic levels in soft tissue sites",
          "Vancomycin increases metformin absorption from the GI tract, causing severe hypoglycemia",
          "Contrast + vancomycin nephrotoxicity compound renal risk; hold metformin for acidosis risk"
        ],
        "correct": 3,
        "cat": "Bridge M2→M7",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Triple renal risk: contrast + vancomycin + metformin accumulation in AKI → lactic acidosis. Hold metformin 48 hours around contrast."
      },
      {
        "q": "A patient with HF on digoxin and furosemide develops a systemic fungal infection requiring amphotericin B. What cardiovascular-renal-infectious disease bridge is critical?",
        "opts": [
          "Amphotericin + furosemide both waste K+/Mg++ — hypokalemia/hypomagnesemia potentiates digoxin toxicity",
          "Digoxin protects against amphotericin B nephrotoxicity through cardiac output optimization effects",
          "Furosemide increases amphotericin B renal clearance, reducing its overall antifungal effectiveness",
          "These three drugs have no overlapping toxicity concerns across any organ systems whatsoever"
        ],
        "correct": 0,
        "cat": "Bridge M1→M7",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Three-way: amphotericin (K+/Mg++ wasting) + furosemide (K+/Mg++ wasting) = potentiates digoxin toxicity. Replace electrolytes aggressively."
      },
      {
        "q": "An HIV-positive patient on a ritonavir-boosted protease inhibitor develops active TB requiring rifampin. What pharmacokinetic bridge is the primary concern?",
        "opts": [
          "Protease inhibitors prevent rifampin from reaching M. tuberculosis at the infection site",
          "Rifampin and protease inhibitors are both hepatotoxic but have no pharmacokinetic interaction",
          "Rifampin potently induces CYP3A4, reducing protease inhibitor levels and risking HIV treatment failure",
          "HIV medications should simply be held during TB treatment and restarted after completion ends"
        ],
        "correct": 2,
        "cat": "Bridge M7→M7",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Rifampin induces CYP3A4, reducing PI levels by 75-90%. Use rifabutin (weaker inducer) or integrase inhibitor-based regimen."
      }
    ]
  },
  "M8": {
    "rapid_fire": [
      {
        "q": "Doxorubicin (an anthracycline) has a lifetime cumulative dose limit. What is the primary reason?",
        "opts": [
          "Cardiotoxicity — dose-dependent cardiomyopathy from free radical damage; limit 450-550 mg/m²",
          "Hepatotoxicity — the liver cannot process repeated doses of doxorubicin over multiple cycles",
          "Peripheral neuropathy — cumulative neurotoxicity limits the total allowable drug exposure",
          "Renal toxicity — doxorubicin accumulates in the kidney tubules with repeated administration"
        ],
        "correct": 0,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Anthracycline cardiomyopathy: ROS damage cardiac mitochondria. Cardiomyocytes don't regenerate. Echo monitoring mandatory."
      },
      {
        "q": "Before doxorubicin cycle 3, echo shows EF dropped from 62% to 48%. What is the appropriate nursing action?",
        "opts": [
          "Continue treatment since the EF remains within the normal cardiac function range overall",
          "Increase the doxorubicin dose to complete treatment faster before further cardiac decline occurs",
          "Notify oncology — EF <50% or >10% decline suggests early cardiomyopathy requiring modification",
          "Schedule a repeat echo in 6 months and continue the current chemotherapy treatment regimen"
        ],
        "correct": 2,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "EF drop >10% or <50% is significant. Options: hold doxorubicin, add dexrazoxane, switch to liposomal formulation."
      },
      {
        "q": "A breast cancer patient at cumulative doxorubicin 400 mg/m² receives dexrazoxane before the next cycle. What is its purpose?",
        "opts": [
          "Dexrazoxane is an antiemetic given before anthracycline chemotherapy infusion treatments",
          "Dexrazoxane chelates iron, preventing free radical formation that causes anthracycline cardiac damage",
          "Dexrazoxane reduces doxorubicin extravasation risk during peripheral IV administration only",
          "Dexrazoxane prevents doxorubicin-induced alopecia through direct scalp follicle protection"
        ],
        "correct": 1,
        "cat": "Mechanism",
        "nclex": "PI-PharmaParenteral",
        "process": "Planning",
        "cognitive": "Comprehension",
        "rationale": "Dexrazoxane chelates iron preventing doxorubicin-iron free radical complexes. Also treats anthracycline extravasation."
      },
      {
        "q": "Filgrastim (G-CSF) is given 24 hours after chemotherapy. What is its purpose and common side effect?",
        "opts": [
          "Prevents nausea by stimulating serotonin reuptake mechanisms in the GI tract lining",
          "Treats anemia by stimulating red blood cell production within the bone marrow compartment",
          "Prevents nausea by stimulating GABA receptors in the chemoreceptor trigger zone centrally",
          "Stimulates neutrophil production to reduce neutropenia — bone pain from marrow expansion is common"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "G-CSF stimulates bone marrow neutrophil production. Given 24+ hours after chemo. Bone pain managed with acetaminophen."
      },
      {
        "q": "A patient on filgrastim reports severe lower back and pelvic bone pain rated 7/10. They fear the cancer has spread. What is the most appropriate response?",
        "opts": [
          "This pain means the filgrastim is not working correctly and should be discontinued immediately",
          "This pain likely indicates bone metastasis requiring immediate imaging studies for evaluation",
          "The filgrastim dose needs to be doubled since bone pain indicates inadequate marrow stimulation",
          "Bone pain is expected from filgrastim-induced marrow expansion — manageable with analgesics"
        ],
        "correct": 3,
        "cat": "Patient Education",
        "nclex": "SECE-SIC",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Filgrastim bone pain in 20-30%, in large marrow-containing bones. Reassure. Manage with acetaminophen or loratadine."
      },
      {
        "q": "A nurse reviews filgrastim timing. The patient received chemotherapy today at 10 AM. When should the first filgrastim dose be given?",
        "opts": [
          "Immediately after chemotherapy to maximize protection of the bone marrow cell population",
          "At least 24 hours after chemo — giving it sooner would destroy the stimulated myeloid progenitors",
          "Filgrastim timing does not matter — it can be given at any point during the chemotherapy cycle",
          "Give filgrastim 2 hours before chemotherapy for optimal priming of myeloid progenitor cells"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Knowledge",
        "rationale": "Filgrastim must be given 24+ hours after chemo. Chemo kills rapidly dividing cells including stimulated precursors."
      },
      {
        "q": "A 78-year-old's medications include amitriptyline, diphenhydramine, oxybutynin, and hydroxyzine. What principle applies?",
        "opts": [
          "These are all appropriate for elderly patients as long as doses remain at the lowest levels",
          "Only amitriptyline requires concern in elderly patients — the others are safe at any age",
          "All four are Beers Criteria potentially inappropriate — combined anticholinergic burden is dangerous",
          "Beers Criteria only applies to drugs with documented direct renal toxicity in older adults"
        ],
        "correct": 2,
        "cat": "Special Populations",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "AGS Beers Criteria: all four are potent anticholinergics. Combined burden causes delirium, falls, urinary retention."
      },
      {
        "q": "An 82-year-old nursing home resident with dementia is prescribed diphenhydramine 50 mg at bedtime for insomnia. What Beers Criteria concern should be raised?",
        "opts": [
          "Diphenhydramine is a potent Beers-listed anticholinergic — worsens cognition and increases fall risk",
          "Diphenhydramine is only inappropriate if the patient is concurrently on other anticholinergic drugs",
          "The concern is limited exclusively to daytime drowsiness, which bedtime dosing fully prevents",
          "Diphenhydramine is the safest sleep aid specifically for elderly patients with dementia conditions"
        ],
        "correct": 0,
        "cat": "Special Populations",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Diphenhydramine: strong anticholinergic. In dementia: worsens confusion, fall risk, paradoxical excitation. Use melatonin/trazodone."
      },
      {
        "q": "A geriatric patient is on metoclopramide, benztropine, and promethazine. What is the cumulative pharmacological concern?",
        "opts": [
          "These drugs treat different symptoms and can be safely combined in any patient population",
          "Only benztropine is classified as an anticholinergic — the other two are safe in elderly patients",
          "All three have anticholinergic properties — cumulative burden creates high delirium and falls risk",
          "Cumulative drug burden is only clinically concerning with more than five concurrent medications"
        ],
        "correct": 2,
        "cat": "Special Populations",
        "nclex": "PSI",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Triple anticholinergic load. All on Beers Criteria. Safer alternatives: ondansetron, cetirizine, avoid benztropine if possible."
      },
      {
        "q": "Cyclophosphamide has a unique adverse effect. What is it and how is it prevented?",
        "opts": [
          "Hemorrhagic cystitis from acrolein metabolite — prevented with hydration, mesna, and frequent voiding",
          "Lactic acidosis — prevented by holding concurrent metformin during the entire therapy course",
          "Ototoxicity — prevented with IV magnesium supplementation before each cyclophosphamide infusion",
          "Pulmonary fibrosis — prevented with N-acetylcysteine premedication before each treatment cycle"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Knowledge",
        "rationale": "Cyclophosphamide → acrolein → bladder damage. Prevention: IV hydration, mesna, frequent voiding."
      },
      {
        "q": "A patient on high-dose cyclophosphamide reports pink-tinged urine. What is the priority nursing intervention?",
        "opts": [
          "This is a normal expected side effect of cyclophosphamide requiring no clinical intervention",
          "Restrict fluids to concentrate the urine and thereby reduce ongoing bladder mucosal irritation",
          "Administer loperamide to reduce what is likely a GI source of the pink urine discoloration",
          "Notify provider — pink urine indicates early hemorrhagic cystitis; increase hydration and verify mesna"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Pink/red urine = hemorrhagic cystitis until proven otherwise. Increase hydration, verify mesna, check for clots."
      },
      {
        "q": "A nurse is preparing to administer cyclophosphamide. Mesna is ordered. What is the correct timing relationship?",
        "opts": [
          "Mesna should be given 24 hours before cyclophosphamide to prepare the bladder mucosal lining",
          "Mesna at time 0 (with cyclophosphamide), then at 4 and 8 hours after — coinciding with acrolein arrival",
          "Mesna is given once daily for 5 days following cyclophosphamide regardless of the dosing schedule",
          "Mesna is given only 12 hours after cyclophosphamide when the acrolein metabolite levels peak"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Knowledge",
        "rationale": "Mesna timing: time 0, then 4 and 8 hours. Ensures bladder mesna presence when acrolein arrives via renal excretion."
      },
      {
        "q": "Erythropoiesis-stimulating agents (epoetin alfa, darbepoetin) carry a Black Box Warning. What is the primary concern?",
        "opts": [
          "Anaphylaxis risk requiring epinephrine at bedside for every single injection administration",
          "ESAs increase thromboembolic events and may promote tumor growth — do not target Hgb >11 in cancer",
          "QT prolongation requiring continuous ECG monitoring during every ESA therapy administration",
          "Hepatotoxicity requiring monthly liver function test monitoring throughout the therapy course"
        ],
        "correct": 1,
        "cat": "Black Box Warning",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "ESA BBW: increased mortality/tumor progression, cardiovascular events when Hgb >11. Use minimum dose to avoid transfusion."
      },
      {
        "q": "A cancer patient on epoetin alfa has Hgb rising from 9.0 to 12.5 g/dL over 4 weeks. The patient feels much better. What is the concern?",
        "opts": [
          "The hemoglobin increase demonstrates excellent therapeutic response — continue the current dose",
          "The hemoglobin is still below normal range and the ESA dose should be increased further today",
          "ESA therapy can now be safely discontinued since the hemoglobin has normalized satisfactorily",
          "Hgb >11 in cancer patients on ESAs increases thromboembolic risk — dose must be reduced or held"
        ],
        "correct": 3,
        "cat": "Monitoring",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Application",
        "rationale": "ESA target: sufficient to avoid transfusion (10-11). Above 11: thromboembolic risk rises sharply. Reduce dose by 25%."
      },
      {
        "q": "A patient on darbepoetin has blood pressure rising from 128/78 to 168/98. What ESA-related adverse effect is this?",
        "opts": [
          "ESAs commonly cause hypertension through increased RBC mass and blood viscosity — monitor BP",
          "Darbepoetin only causes hypotension as a cardiovascular side effect, not hypertension elevation",
          "The hypertension indicates the patient's cancer has metastasized to the adrenal gland tissue",
          "The BP change is unrelated to ESA therapy and represents new essential hypertension diagnosis"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "ESA-induced hypertension in up to 25%. Increased RBC mass increases viscosity and peripheral resistance. May need antihypertensives."
      },
      {
        "q": "Methotrexate toxicity can be reversed by which drug, and what monitoring guides the decision?",
        "opts": [
          "N-acetylcysteine — administered based on a serum drug level nomogram similar to acetaminophen",
          "Naloxone — given if methotrexate causes respiratory depression similar to opioid overdose treatment",
          "Leucovorin (folinic acid) — given based on 24/48/72-hour methotrexate levels per rescue protocol",
          "Protamine sulfate — it reverses the anticoagulant effects of high-dose methotrexate specifically"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Knowledge",
        "rationale": "High-dose methotrexate requires leucovorin rescue. Leucovorin bypasses blocked DHFR. Levels at 24/48/72h guide dosing."
      },
      {
        "q": "A patient on high-dose methotrexate has urine pH of 5.5. Why is this concerning and what is the intervention?",
        "opts": [
          "Methotrexate crystallizes in acidic urine — maintain pH >7.0 with sodium bicarbonate and hydration",
          "Acidic urine increases methotrexate's antitumor efficacy and should be maintained therapeutically",
          "Urine pH only matters for intrathecally administered methotrexate, not intravenous formulations",
          "Acidic urine is expected during methotrexate therapy and requires no clinical intervention"
        ],
        "correct": 0,
        "cat": "Monitoring",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Methotrexate and 7-OH-methotrexate crystallize in acidic urine causing AKI. Maintain urine pH >7.0 with IV bicarb. Check pH q6h."
      },
      {
        "q": "A patient on weekly low-dose methotrexate for RA accidentally takes it daily for a week. What toxicity signs should be assessed?",
        "opts": [
          "Low-dose methotrexate has no toxicity risk whatsoever even at daily dosing for one full week",
          "Only GI symptoms such as mild nausea would occur from accidental daily methotrexate dosing",
          "Assess for pancytopenia, mucositis, hepatotoxicity, and renal impairment — daily dosing is lethal",
          "Methotrexate overdose only causes skin rash and temporary worsening of joint pain symptoms"
        ],
        "correct": 2,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Accidental daily instead of weekly MTX is a known fatal medication error. Oral ulcers (earliest sign), stat CBC, initiate leucovorin rescue."
      },
      {
        "q": "A patient about to receive chemo has platelets of 42,000/µL. Which activity instruction is MOST important?",
        "opts": [
          "Avoid strenuous exercise only — moderate physical activity is completely safe at this level",
          "Bleeding precautions: soft toothbrush, electric razor, no NSAIDs, no IM injections, fall prevention",
          "Restrict fluid intake specifically to reduce the overall risk of bleeding in thrombocytopenia",
          "No restrictions are needed until platelets fall below 10,000/µL per standard clinical guidelines"
        ],
        "correct": 1,
        "cat": "Patient Education",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "At 42,000: significant bleeding risk with trauma. <50,000 = precautions; <20,000 = spontaneous bleeding; <10,000 = transfuse."
      },
      {
        "q": "An oncology patient's platelets drop to 8,000/µL. They report headache and visual changes. What is the priority concern?",
        "opts": [
          "Headache is a common chemotherapy side effect completely unrelated to the platelet count level",
          "Administer acetaminophen for the headache pain and recheck platelet count in 24 more hours",
          "Visual changes indicate the chemotherapy is directly affecting the optic nerve, not platelets",
          "At critically low platelets, headache + visual changes may indicate intracranial hemorrhage — emergency"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Platelets <10,000 with neuro symptoms = intracranial bleeding concern. Immediate platelet transfusion, stat CT head."
      },
      {
        "q": "A nurse is drawing blood from an oncology patient with platelets of 35,000/µL. What modification to standard venipuncture is essential?",
        "opts": [
          "Use the largest gauge needle available for fastest possible blood collection efficiency",
          "No modification needed since the platelet count is above the 20,000/µL threshold level",
          "Use a tourniquet for extended time to make veins more prominent and reduce total needle sticks",
          "Apply firm pressure for at least 5 minutes — thrombocytopenic patients need prolonged hemostasis"
        ],
        "correct": 3,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Thrombocytopenic patients: 5+ minutes pressure after venipuncture. Smallest gauge needle. No IM injections. No rectal temps."
      },
      {
        "q": "Which NSAID-related pregnancy risk is most clinically significant in the third trimester?",
        "opts": [
          "Maternal hypertension from prostaglandin inhibition causing renal vasoconstriction bilaterally",
          "Premature closure of fetal ductus arteriosus — NSAIDs inhibit prostaglandins keeping DA open",
          "Fetal renal agenesis identical to the ACE inhibitor nephrotoxicity risk mechanism profile",
          "Teratogenicity causing neural tube defects specifically during the third trimester period"
        ],
        "correct": 1,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Knowledge",
        "rationale": "Fetal DA kept patent by prostaglandins. NSAIDs inhibit COX → premature DA closure → pulmonary hypertension. Contraindicated from 30 weeks."
      },
      {
        "q": "A pregnant patient at 34 weeks asks if she can take ibuprofen for back pain. What is the nurse's response?",
        "opts": [
          "Ibuprofen is safe throughout all trimesters of pregnancy at standard recommended dosing levels",
          "Ibuprofen is only dangerous in the first trimester and is completely safe in the third trimester",
          "Ibuprofen is contraindicated after 30 weeks — risks premature DA closure. Use acetaminophen instead.",
          "Take ibuprofen with food to reduce any pregnancy-related GI risk of the medication specifically"
        ],
        "correct": 2,
        "cat": "Special Populations",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "NSAIDs after 30 weeks: premature DA closure + oligohydramnios + prolonged labor. Acetaminophen is safe."
      },
      {
        "q": "A postpartum breastfeeding patient asks about taking naproxen for episiotomy pain. What should the nurse consider?",
        "opts": [
          "Ibuprofen is preferred — shorter half-life and lower milk transfer than naproxen's long half-life",
          "Naproxen is the safest NSAID for breastfeeding mothers due to its extended duration of action",
          "Neither ibuprofen nor naproxen enters breast milk at all, making both options equally safe",
          "All NSAIDs are absolutely contraindicated during any period of breastfeeding in all patients"
        ],
        "correct": 0,
        "cat": "Special Populations",
        "nclex": "PSI",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Ibuprofen: short half-life (2h), low milk transfer. Naproxen: 12-15h half-life, higher infant exposure. AAP considers ibuprofen compatible."
      },
      {
        "q": "A patient on methotrexate for RA is prescribed TMP-SMX for a UTI. What critical interaction must be identified?",
        "opts": [
          "No interaction exists — these drugs have completely different mechanisms of action",
          "Trimethoprim specifically increases methotrexate absorption from the GI tract substantially",
          "Both inhibit DHFR — additive folate depletion causes severe pancytopenia and mucositis",
          "The combination of these two drugs causes serotonin syndrome through monoamine accumulation"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Both inhibit DHFR. Combined = life-threatening folate depletion. Use alternative UTI antibiotics."
      },
      {
        "q": "A patient on methotrexate for psoriasis develops a skin infection and is prescribed dapsone (also a DHFR inhibitor). What is the concern?",
        "opts": [
          "Dapsone's DHFR activity + methotrexate = additive folate depletion with severe myelosuppression risk",
          "Dapsone prevents methotrexate from working by competing for the same cellular binding site",
          "Methotrexate enhances dapsone's antibacterial effect, making the combination beneficial overall",
          "Dapsone and methotrexate work on completely different folate pathways with no clinical overlap"
        ],
        "correct": 0,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Dapsone has weak DHFR activity. Combined with methotrexate, folate depletion increases. Monitor CBC closely."
      },
      {
        "q": "A patient on weekly methotrexate 15 mg for RA asks why they also take folic acid 1 mg daily. What is the rationale?",
        "opts": [
          "Folic acid enhances methotrexate's anti-inflammatory effect on the joints directly",
          "Folic acid is required for methotrexate absorption from the GI tract into systemic circulation",
          "Folic acid prevents teratogenic effects of methotrexate only during pregnancy periods specifically",
          "Folic acid reduces methotrexate adverse effects without significantly reducing its efficacy"
        ],
        "correct": 3,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Implementation",
        "cognitive": "Comprehension",
        "rationale": "Folic acid 1 mg daily reduces MTX adverse effects by 30-80% without impairing anti-inflammatory efficacy. Standard of care."
      },
      {
        "q": "Imatinib (Gleevec) for CML exemplifies a key oncology nursing principle. What is it?",
        "opts": [
          "Targeted therapies have absolutely no side effects and require no clinical monitoring",
          "Targeted therapies block specific molecular targets but still cause significant adverse effects",
          "Targeted therapy requires IV administration only — no oral formulations exist for any agent",
          "All cancer drugs are equally cytotoxic and managed with identical protocols universally"
        ],
        "correct": 1,
        "cat": "Classification",
        "nclex": "HPM",
        "process": "Assessment",
        "cognitive": "Comprehension",
        "rationale": "Imatinib targets BCR-ABL but still causes edema, myelosuppression, hepatotoxicity, cardiac events. Different assessment framework needed."
      },
      {
        "q": "A patient on imatinib reports periorbital edema and 5 kg weight gain over 2 weeks. What adverse effect is this and what monitoring is needed?",
        "opts": [
          "This is an allergic reaction to imatinib requiring immediate permanent discontinuation of therapy",
          "Fluid retention is a common dose-dependent imatinib effect — monitor weights and assess for effusions",
          "Periorbital edema specifically indicates nephrotic syndrome from imatinib-induced kidney damage",
          "The weight gain indicates imatinib has cured the leukemia and blood counts are normalizing now"
        ],
        "correct": 1,
        "cat": "Adverse Effects",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Imatinib fluid retention in up to 60%. Periorbital edema is characteristic. Manageable with diuretics. Severe cases may need dose reduction."
      },
      {
        "q": "A patient on imatinib reports eating grapefruit daily for breakfast. What is the pharmacokinetic concern?",
        "opts": [
          "Grapefruit has no interaction with any oral chemotherapy agents including imatinib specifically",
          "Grapefruit juice accelerates imatinib metabolism, reducing its anticancer therapeutic efficacy",
          "Grapefruit only interacts with IV chemotherapy agents, not oral medication formulations at all",
          "Grapefruit inhibits intestinal CYP3A4, increasing imatinib levels and dose-dependent toxicity risk"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Imatinib metabolized by CYP3A4. Grapefruit inhibits intestinal CYP3A4, increasing bioavailability and toxicity risk."
      },
      {
        "q": "Rituximab is infused for non-Hodgkin lymphoma. The patient develops fever, chills, rigors, and hypotension 30 minutes in. What is occurring and what is the response?",
        "opts": [
          "Infusion-related cytokine release reaction — stop infusion, treat symptoms, restart at 50% rate",
          "This is tumor lysis syndrome — begin aggressive IV hydration and allopurinol treatment immediately",
          "This is expected and requires no intervention — continue the infusion at the same current rate",
          "This is anaphylaxis — administer epinephrine and discontinue rituximab permanently for safety"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Rituximab infusion reactions in up to 77% during first infusion. Cytokine-mediated, not IgE. Stop, treat, restart at 50% rate."
      },
      {
        "q": "A patient is scheduled for their second rituximab infusion after a Grade 2 reaction during the first dose. What premedication should the nurse verify?",
        "opts": [
          "No premedication is needed since the patient tolerated the restart of the first infusion",
          "Only a corticosteroid is needed — antihistamines and antipyretics are unnecessary for second doses",
          "Verify acetaminophen, diphenhydramine, and corticosteroid premedication orders are in place",
          "Premedication with an epinephrine auto-injector is the standard protocol before all rituximab doses"
        ],
        "correct": 2,
        "cat": "Nursing Intervention",
        "nclex": "PI-PharmaParenteral",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Standard premedication: acetaminophen 650 mg, diphenhydramine 50 mg, methylprednisolone 100 mg IV. Given 30-60 min before infusion."
      },
      {
        "q": "During rituximab infusion, a patient develops sudden severe bronchospasm, urticaria, and angioedema. How does this differ from a typical infusion reaction?",
        "opts": [
          "These symptoms suggest true IgE-mediated anaphylaxis — requires epinephrine and permanent stop",
          "This is a milder form of infusion reaction that simply resolves with slowing the infusion rate",
          "The bronchospasm specifically indicates the rituximab is working effectively against the lymphoma",
          "There is no clinical difference — all rituximab reactions present with identical symptoms"
        ],
        "correct": 0,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Infusion reactions (cytokine) = fever, chills — manageable. Anaphylaxis = bronchospasm, urticaria, angioedema — requires epinephrine, no rechallenge."
      },
      {
        "q": "A patient on imatinib for CML is prescribed ketoconazole for a fungal infection. What pharmacokinetic concern must be addressed?",
        "opts": [
          "Ketoconazole reduces imatinib GI absorption — separate dosing by at least 4 hours",
          "Both drugs cause QT prolongation only — that is the sole clinical interaction concern",
          "Ketoconazole inhibits CYP3A4 — imatinib levels rise, increasing hepatotoxicity and edema",
          "Imatinib induces CYP3A4 enzymes, making ketoconazole therapeutically ineffective against fungi"
        ],
        "correct": 2,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Strong CYP3A4 inhibitors increase imatinib AUC by 40%+. Dose-dependent toxicities intensify."
      },
      {
        "q": "A CML patient on imatinib develops seizures and starts phenytoin. Two months later, CML is no longer in remission. What happened?",
        "opts": [
          "The leukemia developed resistance to imatinib through an independent genetic mutation only",
          "Phenytoin potently induces CYP3A4, dropping imatinib levels below the therapeutic threshold",
          "Imatinib was counterfeit and never actually had true anti-leukemia pharmacological activity",
          "Phenytoin directly stimulates CML blast cell growth through its anticonvulsant receptor mechanism"
        ],
        "correct": 1,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Evaluation",
        "cognitive": "Analysis",
        "rationale": "Phenytoin induces CYP3A4 reducing imatinib levels. Loss of molecular remission from a drug interaction is devastating. Use levetiracetam instead."
      },
      {
        "q": "A GIST patient on imatinib is prescribed dexamethasone for edema. What dual concern exists?",
        "opts": [
          "Dexamethasone and imatinib have no pharmacokinetic or pharmacodynamic interactions whatsoever",
          "Dexamethasone enhances imatinib's antitumor activity against GIST tumors specifically",
          "Imatinib prevents dexamethasone from exerting any anti-inflammatory or anti-edema effect at all",
          "Dexamethasone induces CYP3A4 possibly lowering imatinib — a paradoxical treatment choice"
        ],
        "correct": 3,
        "cat": "Interactions",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Dexamethasone has moderate CYP3A4-inducing activity. Using it for imatinib-induced edema may reduce imatinib levels. Use furosemide instead."
      },
      {
        "q": "A patient receives highly emetogenic chemotherapy (cisplatin). What is the standard three-drug antiemetic protocol?",
        "opts": [
          "Promethazine alone administered 30 minutes before the chemotherapy infusion begins",
          "Metoclopramide and lorazepam only — given after nausea and vomiting actually begins",
          "Diphenhydramine and famotidine as dual antiemetic coverage for all chemotherapy regimens",
          "5-HT3 antagonist + dexamethasone + NK1 antagonist — triple therapy targeting three emetic pathways"
        ],
        "correct": 3,
        "cat": "Indications",
        "nclex": "HPM",
        "process": "Planning",
        "cognitive": "Knowledge",
        "rationale": "CINV triple therapy: 5-HT3 (acute), NK1 (delayed), dexamethasone (enhances both). Olanzapine may be added as 4th agent."
      },
      {
        "q": "A patient 3 days post-cisplatin develops nausea and vomiting. Acute-phase antiemetics are discontinued. What type of CINV is this?",
        "opts": [
          "This is breakthrough emesis that cannot be pharmacologically treated after chemotherapy completes",
          "Delayed CINV occurring 24-120 hours post-chemo — NK1 antagonist aprepitant is most effective",
          "Delayed nausea only occurs with anthracyclines specifically, not with platinum-based drug agents",
          "All CINV resolves within 24 hours of chemotherapy and this represents a new GI infection"
        ],
        "correct": 1,
        "cat": "Indications",
        "nclex": "HPM",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Delayed CINV peaks 48-72 hours. Substance P/NK1 pathway drives delayed emesis. Aprepitant (days 2-3) + dexamethasone (days 2-4)."
      },
      {
        "q": "An oncology patient reports anticipatory nausea — becoming nauseated when entering the infusion center before receiving any drugs. What medication class is most effective?",
        "opts": [
          "A stronger 5-HT3 antagonist at a higher dose will prevent all anticipatory nausea episodes",
          "An NK1 antagonist given 2 hours before arriving at the infusion center will block the response",
          "Benzodiazepines like lorazepam — anticipatory nausea is a conditioned cortical response, not GI",
          "Metoclopramide given the night before the scheduled chemotherapy appointment prevents this nausea"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Anticipatory CINV is classically conditioned. 5-HT3/NK1 antagonists ineffective. Lorazepam 0.5-2 mg night before and morning of treatment."
      },
      {
        "q": "A patient with acute leukemia develops uric acid 12.8, K+ 6.8, phosphorus 7.2, calcium 6.4 within 48 hours of chemo. What is this and what is allopurinol's role?",
        "opts": [
          "Tumor lysis syndrome — allopurinol inhibits xanthine oxidase, preventing uric acid formation",
          "This is an electrolyte panel lab error — recheck all values before initiating treatment",
          "This is sepsis-related metabolic derangement — start broad-spectrum antibiotic therapy",
          "This is renal failure from direct chemotherapy nephrotoxicity — allopurinol protects kidneys"
        ],
        "correct": 0,
        "cat": "Mechanism",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "TLS: cell death releases K+, phosphorus, purines (→uric acid). Allopurinol prevents new uric acid. Rasburicase breaks down existing."
      },
      {
        "q": "An oncology patient at high TLS risk has pre-chemo uric acid of 14 mg/dL. Allopurinol is ordered. Why might rasburicase be better?",
        "opts": [
          "Rasburicase and allopurinol work through identical mechanisms with no clinical difference",
          "Rasburicase is preferred because it is significantly less expensive than allopurinol treatment",
          "Rasburicase converts existing uric acid to allantoin — allopurinol only prevents new formation",
          "Allopurinol is only effective for uric acid levels below 10 mg/dL and becomes ineffective above"
        ],
        "correct": 2,
        "cat": "Mechanism",
        "nclex": "HPM",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Allopurinol prevents formation (prophylactic). Rasburicase breaks down existing uric acid (treatment). Acts within hours. Contraindicated in G6PD deficiency."
      },
      {
        "q": "A patient with Burkitt lymphoma (high tumor burden) is about to start chemo. What TLS prophylaxis should be expected?",
        "opts": [
          "Aggressive IV hydration, allopurinol/rasburicase, electrolyte monitoring q6-8h, cardiac monitoring",
          "Only oral hydration with electrolyte beverages is needed to prevent TLS in lymphoma patients",
          "A single dose of potassium binder before chemotherapy prevents all TLS-related complications",
          "No prophylaxis needed — TLS only occurs in leukemia patients, not lymphoma patients"
        ],
        "correct": 0,
        "cat": "Nursing Intervention",
        "nclex": "PI-PhysAdapt",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Burkitt has highest TLS risk. Aggressive IV hydration (UO >200 mL/hr), allopurinol/rasburicase, frequent labs, cardiac monitoring."
      },
      {
        "q": "A hospitalized oncology patient on UFH develops platelet drop from 180,000 to 62,000/µL on day 7. What must be suspected and what is the action?",
        "opts": [
          "Expected chemotherapy thrombocytopenia — continue heparin and transfuse platelets as needed",
          "This platelet drop is too mild to be clinically concerning — recheck count in 48 hours",
          "Switch from unfractionated heparin to low-molecular-weight heparin to resolve the decline",
          "Suspect HIT — stop ALL heparin, send HIT panel, start non-heparin anticoagulant (argatroban)"
        ],
        "correct": 3,
        "cat": "Adverse Effects",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "HIT Type II: immune-mediated, day 5-10, >50% drop. Stop ALL heparin including flushes. LMWH has cross-reactivity. Use argatroban/bivalirudin."
      },
      {
        "q": "A nurse discovers heparin-coated IV flush syringes are being used on a patient diagnosed with HIT. What is the immediate action?",
        "opts": [
          "Continue using heparin flushes since they contain minimal trace amounts of heparin only",
          "Stop ALL heparin exposure immediately — even trace amounts sustain the HIT immune response",
          "Heparin flushes are unrelated to HIT since they do not enter the systemic circulation at all",
          "Switch to half-strength heparin flushes as a compromise between efficacy and safety concerns"
        ],
        "correct": 1,
        "cat": "Nursing Intervention",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "In HIT, ANY heparin exposure perpetuates the immune response. Use normal saline flushes. Notify all staff and departments."
      },
      {
        "q": "A patient with confirmed HIT develops a new DVT. The provider considers platelet transfusion. Why is this contraindicated?",
        "opts": [
          "Platelet transfusion is always the first-line treatment for any form of thrombocytopenia",
          "Transfused platelets provide substrate for HIT antibodies — fueling MORE thrombosis, not resolving it",
          "Transfused platelets are destroyed within minutes of administration and provide no clinical benefit",
          "Platelet transfusion is only contraindicated if the patient also has concurrent DIC diagnosis"
        ],
        "correct": 1,
        "cat": "Contraindications",
        "nclex": "PI-RiskReduction",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "HIT paradox: platelets consumed by thrombosis, not bleeding. Transfused platelets = more antibody targets = more thrombosis. Use non-heparin anticoagulants."
      }
    ],
    "bridge_check": [
      {
        "q": "A patient receiving doxorubicin has pre-treatment EF of 58%. After 4 cycles, EF drops to 44%. How does M1 cardiovascular knowledge inform your response?",
        "opts": [
          "EF of 44% is within normal limits and not concerning during active chemotherapy treatment",
          "Continue doxorubicin unchanged — EF monitoring is only for detecting immediately fatal events",
          "This EF drop is expected and clinically acceptable with all chemotherapy drug regimens used",
          "EF <50% = anthracycline cardiomyopathy in HFrEF territory — notify oncology, consider HF treatment"
        ],
        "correct": 3,
        "cat": "Bridge M1→M8",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Anthracycline cardiomyopathy = HFrEF pathophysiology. ACE inhibitors, beta-blockers may be initiated. Dexrazoxane for future cycles."
      },
      {
        "q": "A breast cancer patient who completed doxorubicin 5 years ago presents with new dyspnea, fatigue, and bilateral edema. Echo shows EF 30%. What is the likely connection?",
        "opts": [
          "Late-onset anthracycline cardiomyopathy can manifest years later — cancer survivors need cardiac surveillance",
          "The symptoms indicate metastatic breast cancer to the lungs causing secondary fluid overload",
          "This is unrelated to chemotherapy and represents new-onset viral cardiomyopathy exclusively",
          "Anthracycline cardiotoxicity only occurs during active treatment and never presents years later"
        ],
        "correct": 0,
        "cat": "Bridge M1→M8",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Late anthracycline cardiomyopathy can present years after treatment. Cancer survivors need lifelong cardiac surveillance. Standard HFrEF management."
      },
      {
        "q": "A patient with pre-existing HFrEF (EF 40%) on carvedilol and lisinopril is diagnosed with lymphoma requiring anthracycline-based chemo. What assessment is needed?",
        "opts": [
          "Anthracyclines are absolutely contraindicated in any patient with existing heart failure diagnosis",
          "The existing HF medications will completely protect against any anthracycline cardiac damage",
          "Existing HFrEF increases anthracycline risk — cardio-oncology consult, dexrazoxane, close EF monitoring",
          "Switch to a non-cardiotoxic chemotherapy regardless of its efficacy against the lymphoma type"
        ],
        "correct": 2,
        "cat": "Bridge M1→M8",
        "nclex": "PI-RiskReduction",
        "process": "Planning",
        "cognitive": "Analysis",
        "rationale": "Pre-existing HFrEF substantially elevates risk but doesn't absolutely contraindicate if no alternative. Cardio-oncology co-management essential."
      },
      {
        "q": "A patient with ALL is started on methotrexate. They also have mild CKD (eGFR 48). Why is this concerning?",
        "opts": [
          "Methotrexate is renally excreted — in CKD it accumulates causing mucositis and myelosuppression",
          "Simply reduce the methotrexate dose by 10% in CKD — no other precautions are required",
          "CKD actually improves methotrexate efficacy by prolonging tissue exposure time beneficially",
          "CKD has no effect on methotrexate since the drug is entirely hepatically cleared"
        ],
        "correct": 0,
        "cat": "Bridge M2→M8",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Methotrexate clearance entirely renal. CKD = accumulation → severe toxicity. Requires hydration, alkalinization, extended leucovorin."
      },
      {
        "q": "A patient on cisplatin develops AKI with creatinine rising from 1.0 to 3.2. What renal module knowledge applies?",
        "opts": [
          "Cisplatin AKI is always mild and self-resolving without any intervention needed at all",
          "Cisplatin AKI requires immediate hemodialysis regardless of the severity of the creatinine rise",
          "Cisplatin causes direct tubular toxicity — aggressive hydration, avoid nephrotoxins, replace Mg++",
          "Loop diuretics should be given aggressively to increase cisplatin clearance from the kidneys"
        ],
        "correct": 2,
        "cat": "Bridge M2→M8",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "Cisplatin is highly nephrotoxic. Prevention: pre/post NS hydration. Treatment: hydration, avoid nephrotoxins, Mg++ replacement. Consider carboplatin for future."
      },
      {
        "q": "An oncology patient on bevacizumab (VEGF inhibitor) develops proteinuria 3.5 g/day and BP 178/102. What bridges renal and oncology?",
        "opts": [
          "Bevacizumab has no renal or cardiovascular side effects since it only targets tumor vessels",
          "VEGF inhibition causes endothelial dysfunction — hypertension and proteinuria are dose-dependent effects",
          "Bevacizumab-induced proteinuria resolves spontaneously without any dose modification needed",
          "The proteinuria indicates the cancer has metastasized to the kidneys causing direct damage"
        ],
        "correct": 1,
        "cat": "Bridge M2→M8",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "VEGF maintains glomerular health. Inhibition = podocyte injury (proteinuria) + endothelial dysfunction (HTN). Monitor BP, urine protein."
      },
      {
        "q": "An elderly patient (76 yo) is on prochlorperazine for chemo nausea, amitriptyline for neuropathic pain, and diphenhydramine for sleep. What Beers Criteria bridge applies?",
        "opts": [
          "All three drugs are safe and effective in any age group for these specific indications",
          "Only prochlorperazine is on Beers Criteria — the other two are acceptable for elderly patients",
          "Beers Criteria does not apply to cancer patients regardless of their age or comorbidities",
          "All three are Beers-listed with high combined anticholinergic burden — request safer alternatives"
        ],
        "correct": 3,
        "cat": "Special Populations",
        "nclex": "PSI",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Combined anticholinergic burden. Safer: ondansetron (nausea), gabapentin (pain), melatonin (sleep)."
      },
      {
        "q": "A 79-year-old cancer patient starts oxycodone for pain. What specific geriatric considerations apply per AGS recommendations?",
        "opts": [
          "Opioids are the safest analgesics for elderly patients requiring no dose adjustment at all",
          "Elderly patients require higher opioid doses due to age-related changes in pain sensitivity",
          "Opioids are absolutely contraindicated in all patients over 75 years of age universally",
          "Start lowest dose, titrate slowly — reduced clearance, CNS sensitivity, and fall risk"
        ],
        "correct": 3,
        "cat": "Special Populations",
        "nclex": "PSI",
        "process": "Planning",
        "cognitive": "Application",
        "rationale": "Geriatric pharmacology: reduced metabolism, increased sensitivity, fall risk. Start low, go slow. Prophylactic bowel regimen mandatory."
      },
      {
        "q": "An 80-year-old cancer patient has delirium. Medications: morphine, lorazepam, diphenhydramine, haloperidol. Which review bridges oncology and geriatrics?",
        "opts": [
          "All four medications are appropriate for managing cancer-related symptoms in elderly patients",
          "All four contribute to delirium — polypharmacy cascade where each drug may treat another's side effects",
          "Delirium in cancer patients is always caused by brain metastases, never by medications",
          "Only diphenhydramine contributes to delirium — the other three are therapeutically appropriate"
        ],
        "correct": 1,
        "cat": "Special Populations",
        "nclex": "PSI",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Prescribing cascade: morphine → nausea → diphenhydramine → delirium → lorazepam → worsening → haloperidol. Simplify regimen."
      },
      {
        "q": "Cyclophosphamide for autoimmune condition is used with furosemide. What bridges M2 and M8?",
        "opts": [
          "No interaction — these drugs affect entirely different organ systems with no overlap",
          "Furosemide prevents cyclophosphamide nephrotoxicity through increased renal clearance rate",
          "Furosemide dehydration concentrates acrolein in bladder, dramatically increasing cystitis risk",
          "The combination causes synergistic bone marrow suppression through additive mechanisms"
        ],
        "correct": 2,
        "cat": "Bridge M2→M8",
        "nclex": "PI-PhysAdapt",
        "process": "Analysis",
        "cognitive": "Analysis",
        "rationale": "Acrolein bladder toxicity depends on concentration. Furosemide dehydrates → concentrated urine → concentrated acrolein."
      },
      {
        "q": "A patient on cyclophosphamide for lupus nephritis has eGFR of 32. What renal-oncology bridge concern should be identified?",
        "opts": [
          "Reduced GFR impairs metabolite excretion — increased cystitis and myelosuppression risk",
          "Cyclophosphamide should be doubled in renal impairment to overcome reduced excretion rate",
          "Renal impairment eliminates the need for mesna since less acrolein reaches the bladder",
          "Renal impairment has no effect on cyclophosphamide dosing or toxicity profile at all"
        ],
        "correct": 0,
        "cat": "Bridge M2→M8",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Cyclophosphamide metabolites are renally excreted. CKD = accumulation. Dose reduction standard. Mesna/hydration even more critical."
      },
      {
        "q": "A patient on cyclophosphamide also takes hydrochlorothiazide for hypertension. What multi-module interaction should be considered?",
        "opts": [
          "Thiazide diuretics have no interaction with any chemotherapy agents at clinical doses used",
          "HCTZ enhances cyclophosphamide's anticancer efficacy through improved drug tissue distribution",
          "HCTZ dehydration concentrates acrolein in bladder, plus rare additive myelosuppression potential",
          "Cyclophosphamide eliminates the antihypertensive effect of thiazide diuretics at standard doses"
        ],
        "correct": 2,
        "cat": "Bridge M2→M8",
        "nclex": "PI-PhysAdapt",
        "process": "Assessment",
        "cognitive": "Application",
        "rationale": "Any diuretic dehydration concentrates acrolein. HCTZ has rare marrow suppression that may add to cyclophosphamide. Ensure hydration."
      },
      {
        "q": "A cancer patient on doxorubicin needs amiodarone for AFib. What cardiovascular bridge is critical?",
        "opts": [
          "Both carry independent cardiac risks — combined cardiomyopathy and arrhythmia risk is substantially elevated",
          "Amiodarone protects against doxorubicin cardiotoxicity through its membrane stabilization effects",
          "Doxorubicin increases amiodarone metabolism, requiring significant antiarrhythmic dose increases",
          "No interaction — anti-cancer drugs and antiarrhythmics work on different organ systems entirely"
        ],
        "correct": 0,
        "cat": "Bridge M1→M8",
        "nclex": "PI-RiskReduction",
        "process": "Assessment",
        "cognitive": "Analysis",
        "rationale": "Doxorubicin: oxidative cardiomyopathy. Amiodarone: QT prolongation. Together: compounded risk. Amiodarone may also increase intracardiac doxorubicin via P-gp."
      },
      {
        "q": "A breast cancer patient on trastuzumab also takes metoprolol for AFib. Latest echo shows EF dropped from 55% to 40%. What multi-module knowledge is needed?",
        "opts": [
          "Trastuzumab has no cardiac effects since it targets HER2 receptors on cancer cells only",
          "Metoprolol is causing the EF decline and should be immediately and permanently discontinued",
          "The EF drop indicates the cancer has metastasized to the cardiac muscle tissue itself",
          "Trastuzumab causes reversible cardiotoxicity — hold drug, optimize HF meds, monitor for recovery"
        ],
        "correct": 3,
        "cat": "Bridge M1→M8",
        "nclex": "PI-PhysAdapt",
        "process": "Implementation",
        "cognitive": "Analysis",
        "rationale": "Trastuzumab cardiotoxicity is generally reversible (unlike anthracyclines). Hold trastuzumab if EF drops >16% or below 50%. Metoprolol already beneficial for HFrEF."
      },
      {
        "q": "A patient on 5-FU chemotherapy develops acute chest pain with ST changes on ECG during infusion. What CV-oncology bridge must be recognized?",
        "opts": [
          "Chest pain during chemotherapy is always anxiety-related and can be managed with reassurance",
          "5-FU causes coronary vasospasm mimicking ACS — stop infusion, ECG, nitroglycerin; rechallenge risky",
          "Continue the infusion at a slower rate since 5-FU cardiac effects are only dose-rate dependent",
          "The ST changes indicate the chemotherapy is successfully reaching cardiac tumor cells directly"
        ],
        "correct": 1,
        "cat": "Bridge M1→M8",
        "nclex": "PI-RiskReduction",
        "process": "Implementation",
        "cognitive": "Application",
        "rationale": "5-FU cardiotoxicity (2-18%): coronary vasospasm, ischemia, arrhythmias. Stop 5-FU, nitroglycerin/CCBs for vasospasm. Rechallenge has high recurrence."
      }
    ]
  }
};