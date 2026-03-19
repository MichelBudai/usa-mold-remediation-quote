import type { CityMetadata } from "./cityMetadata";

export interface ServiceCityContent {
  meta: { title: string; description: string };
  hero: { h1: string; sub: string; trustBullets: string[]; cta: string };
  intro: { h2: string; paragraphs: string[]; cta: string };
  costEstimator: { h2: string; intro: string; ctaBelow: string };
  mainService: { h2: string; description: string; localParagraphs?: string[]; cost: string; whatAffects: string[]; cta: string };
  whyCall: { h2: string; paragraphs: string[] };
  localSignals: { h2: string; intro: string; bullets: string[] };
  eeat: { title: string; bullets: string[] };
  faq: { h2: string; items: { q: string; a: string }[] };
  closing: { h2: string; text: string; cta: string; sub: string };
  internalLinks: { otherServicesLabel: string; nearbyLabel: string; backLabel: string };
}

export type ServiceContentParams = {
  cityName: string;
  stateName: string;
  stateAbbr: string;
  nearby1: string;
  nearby2: string;
  nearby3: string;
  phone?: string;
  cityMetadata?: CityMetadata | null;
};

const PHONE = "(855) 665-3653";

function trust(stateAbbr: string, cityName: string, county?: string): string[] {
  const b = [`IICRC S520-certified in ${stateAbbr}`, "Free estimate, no obligation", "Same-day assessment available", "Insurance documentation included"];
  if (county) b.push(`Serving ${cityName} and ${county}`);
  return b;
}

function sigs(stateName: string, cityName: string, base: string[], m?: CityMetadata | null): string[] {
  const b = [...base];
  if (m?.county) b.unshift(`Serving ${cityName} and ${m.county} — IICRC S520-certified under ${stateName} requirements.`);
  if (m?.medianYearBuilt) b.push(`Many ${cityName} homes built around ${m.medianYearBuilt} have aging construction with higher mold risk — less vapor barriers, older plumbing, and inadequate ventilation.`);
  if (m?.growthSnippet) b.push(`${cityName} is ${m.growthSnippet} — home inspections and mold clearance testing are increasingly standard in real estate transactions here.`);
  return b;
}

const EEAT = [
  "This guide is written for homeowners comparing mold remediation quotes — we focus on what affects your estimate and your insurance claim.",
  "We don't charge contractors for placement. Quotes come from IICRC S520-certified contractors, not pay-to-play leads.",
  "Cost ranges reflect typical project scope. Your final quote depends on affected area, mold species, and materials involved — a free inspection gives you the exact number.",
];

// ── 1. Mold Remediation ─────────────────────────────────────────────────────
export function getMoldRemediationQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: {
      title: `Mold Remediation in ${cityName}, ${stateAbbr} | Free Quote | IICRC S520 Certified`,
      description: `Free mold remediation quote in ${cityName}, ${stateName}. IICRC S520-certified contractors. Containment, HEPA removal & clearance testing. Insurance documentation. Call now.`,
    },
    hero: {
      h1: `Mold Remediation in ${cityName}, ${stateName} — Free Quote`,
      sub: `IICRC S520-certified mold remediation contractors in ${cityName}. Safe removal, containment, clearance testing, and insurance documentation. Free estimate, no obligation.`,
      trustBullets: trust(stateAbbr, cityName, m?.county),
      cta: "Get Your Free Mold Remediation Quote — Call Now",
    },
    intro: {
      h2: `Get a Free Mold Remediation Estimate in ${cityName}, ${stateName}`,
      paragraphs: [
        `Mold remediation in ${cityName} requires a licensed, IICRC S520-certified contractor — both for health safety and for insurance claim validity. A free inspection identifies the full extent of contamination before any quote is given.`,
        `In ${cityName}, mold problems are most common after water damage events — pipe bursts, roof leaks, appliance failures, and flooding. Catching mold early prevents exponential spread into walls, flooring, and HVAC systems.`,
      ],
      cta: `Call for a Free ${cityName} Mold Remediation Quote`,
    },
    costEstimator: {
      h2: `Mold Remediation Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Mold remediation in ${cityName}: small area (bathroom, closet) $500–$2,000; medium area (one room) $2,000–$6,000; large or extensive contamination $6,000–$30,000+. Black mold (Stachybotrys) typically costs more due to additional containment requirements. Most homeowner insurance covers mold remediation from sudden water damage.`,
      ctaBelow: `Get Your Exact ${cityName} Mold Remediation Quote — Call Now`,
    },
    mainService: {
      h2: `Mold Remediation in ${cityName}, ${stateAbbr} — IICRC S520 Protocol`,
      description: `Mold remediation in ${cityName} follows IICRC S520 protocol — the insurance-accepted standard for mold removal. The process: containment setup with negative air pressure to prevent spore spread, HEPA vacuuming of all surfaces, physical removal of contaminated materials (drywall, insulation, framing), antimicrobial treatment of structural surfaces, air scrubbing with HEPA filtration, and post-remediation clearance testing to confirm the work is complete. An IICRC S520-certified ${cityName} contractor provides a written clearance report — required by insurance companies and real estate transactions.`,
      localParagraphs: [
        m?.county ? `In ${m.county}, IICRC-certified mold contractors are familiar with local building permit requirements for mold-related repairs.` : "",
        m?.medianYearBuilt ? `Many ${cityName} homes built around ${m.medianYearBuilt} have construction characteristics that create higher mold risk — less vapor barrier protection, older plumbing, and ventilation systems that may not meet current standards.` : "",
      ].filter(Boolean) as string[],
      cost: `Mold remediation in ${cityName}: $500 – $30,000+ (insurance usually covers sudden damage)`,
      whatAffects: ["Affected square footage and number of rooms", "Mold species — common vs. Stachybotrys (black mold)", "Materials affected — drywall, insulation, framing, flooring", "Source of moisture — must be corrected to prevent recurrence"],
      cta: `Get a Mold Remediation Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Call a Certified Contractor First`,
      paragraphs: [
        `Mold spreads exponentially. A small visible patch is almost always larger behind the wall. A licensed ${cityName} mold contractor uses moisture meters and thermal imaging to find the full extent before quoting — preventing surprise cost overruns mid-project.`,
        `Insurance companies require IICRC S520 documentation. DIY mold removal or unlicensed contractors produce no clearance report — meaning your insurance claim will be denied and your liability remains if health issues arise later.`,
        `Mold affects property value and disclosure obligations. In most states, known mold must be disclosed in real estate transactions. An IICRC clearance certificate confirms remediation was properly completed — protecting your sale price and legal position.`,
      ],
    },
    localSignals: {
      h2: `Mold Remediation Service Areas Near ${cityName}, ${stateName}`,
      intro: `IICRC S520-certified mold remediation contractors serving ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: sigs(stateName, cityName, [
        `IICRC S520-certified — accepted by all major insurance companies`,
        "Post-remediation clearance testing included",
        "Insurance documentation from day one",
        `Serving ${cityName} and surrounding ${stateAbbr} areas`,
      ], m),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: {
      h2: `Mold Remediation FAQ — ${cityName}, ${stateName}`,
      items: [
        { q: `How much does mold remediation cost in ${cityName}?`, a: `Mold remediation in ${cityName} costs $500–$2,000 for small areas and $6,000–$30,000+ for extensive contamination. A free inspection gives you an exact quote. Most homeowner insurance covers mold from sudden water damage.` },
        { q: `How do I find a licensed mold remediation contractor in ${cityName}?`, a: `Look for IICRC S520 certification — the industry standard accepted by all major insurance companies. A licensed ${cityName} contractor provides a written remediation plan and post-remediation clearance report.` },
        { q: `How long does mold remediation take in ${cityName}?`, a: `Small area remediation takes 1–2 days. Extensive contamination takes 3–7 days plus 1–2 days for clearance testing. Your contractor provides a timeline after the initial inspection.` },
        { q: `Can I stay in my home during mold remediation in ${cityName}?`, a: `For small contained areas, sometimes. For extensive or black mold remediation, most contractors recommend temporary relocation. Your IICRC-certified contractor advises based on your specific situation.` },
        { q: `Does homeowner insurance cover mold remediation in ${cityName}?`, a: `Most policies cover mold remediation when caused by a sudden covered water event (pipe burst, appliance failure). Gradual leaks and flooding require separate coverage. An IICRC contractor documents everything for your claim.` },
      ],
    },
    closing: {
      h2: `Get Your Free Mold Remediation Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. An IICRC S520-certified contractor serving ${cityName}, ${stateName} inspects your mold problem and gives you an honest remediation quote with full insurance documentation.`,
      cta: `Call for Your Free ${cityName} Mold Remediation Quote`,
      sub: `Call ${phone} · Available 7 days a week · Same-day assessment in ${cityName}`,
    },
    internalLinks: { otherServicesLabel: `Other mold services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 2. Mold Inspection ──────────────────────────────────────────────────────
export function getMoldInspectionQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: {
      title: `Free Mold Inspection in ${cityName}, ${stateAbbr} | Air Quality Testing | IICRC`,
      description: `Free mold inspection in ${cityName}, ${stateName}. Moisture mapping, air quality testing & written report. Finds hidden mold before it spreads. IICRC S520-certified. No obligation.`,
    },
    hero: {
      h1: `Free Mold Inspection in ${cityName}, ${stateName}`,
      sub: `IICRC S520-certified mold inspectors. Moisture mapping, air quality testing, written report with photos. Finds hidden mold in walls and floors. No obligation.`,
      trustBullets: trust(stateAbbr, cityName, m?.county),
      cta: "Schedule Your Free Mold Inspection — Call Now",
    },
    intro: {
      h2: `Get a Free Professional Mold Inspection in ${cityName}, ${stateName}`,
      paragraphs: [
        `A professional mold inspection in ${cityName} uses moisture meters, thermal imaging, and air quality sampling to find hidden mold — growing inside walls, under flooring, and in HVAC systems — before it becomes visible or causes health symptoms.`,
        `Free visual inspections from IICRC-certified contractors are available in ${cityName} with no obligation. Air quality lab testing adds $200–$400 when samples are needed.`,
      ],
      cta: `Schedule Your Free ${cityName} Mold Inspection`,
    },
    costEstimator: {
      h2: `Mold Inspection Cost — ${cityName}, ${stateName}`,
      intro: `Mold inspection in ${cityName}: free visual assessment from IICRC-certified contractors (no obligation); air quality sampling with accredited lab $200–$400; comprehensive assessment with thermal imaging $300–$600; formal mold report for real estate or insurance $200–$500.`,
      ctaBelow: `Schedule Your Free ${cityName} Mold Inspection`,
    },
    mainService: {
      h2: `Professional Mold Inspection in ${cityName}, ${stateAbbr}`,
      description: `A professional mold inspection in ${cityName} covers: visual assessment for visible mold and water staining, moisture mapping with calibrated meters to find elevated moisture behind walls and under floors, thermal imaging to detect hidden moisture, air quality sampling (spore trap samples sent to accredited lab), and a written report documenting findings, moisture readings, and recommended actions. An IICRC S520-certified inspector follows the same protocol accepted by insurance companies, real estate lenders, and courts.`,
      localParagraphs: [
        m?.county ? `In ${m.county}, mold inspection reports are commonly required for real estate transactions and insurance claims.` : "",
      ].filter(Boolean) as string[],
      cost: "FREE visual inspection — lab testing $200–$400",
      whatAffects: ["Whether air quality lab testing is required", "Number of rooms and areas to inspect", "Access to wall cavities, attic, and crawl space", "Report format needed — insurance, real estate, or personal"],
      cta: `Schedule a Mold Inspection in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `When You Need a Mold Inspection in ${cityName}`,
      paragraphs: [
        `After any water damage. Mold begins in 24–48 hours. A post-water-damage inspection within 72 hours catches mold before it spreads into structural materials and HVAC systems.`,
        `Before buying or selling a home in ${cityName}. Mold disclosure requirements vary by state — but a mold inspection protects both buyers from hidden health hazards and sellers from post-sale liability lawsuits.`,
        `If anyone in your ${cityName} home has unexplained respiratory symptoms, allergies, or headaches that improve when away from home. These are classic signs of hidden mold affecting indoor air quality.`,
      ],
    },
    localSignals: {
      h2: `Mold Inspection Service Areas Near ${cityName}, ${stateName}`,
      intro: `IICRC-certified mold inspectors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: sigs(stateName, cityName, [`IICRC S520-certified inspectors`, "Thermal imaging and moisture mapping", "Accredited lab air quality testing", `Written report for insurance, real estate, or personal use`], m),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: {
      h2: `Mold Inspection FAQ — ${cityName}`,
      items: [
        { q: `Is the mold inspection really free in ${cityName}?`, a: `Yes. A visual inspection and moisture assessment from an IICRC-certified contractor is free with no obligation. Air quality lab testing adds $200–$400 when needed.` },
        { q: `What does a mold inspection include in ${cityName}?`, a: `Visual assessment, moisture mapping, thermal imaging, optional air quality sampling, and a written report with photos and recommendations.` },
        { q: `How long does a mold inspection take in ${cityName}?`, a: `1–3 hours for a residential inspection. Lab results from air quality samples take 2–5 business days.` },
        { q: `Can mold hide inside walls without being visible in ${cityName}?`, a: `Yes. Mold grows inside wall cavities, under flooring, and in insulation where it is invisible from the surface. Moisture meters and thermal imaging find it.` },
      ],
    },
    closing: {
      h2: `Schedule Your Free Mold Inspection in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. An IICRC-certified inspector serves ${cityName}, ${stateName} — finds hidden mold and delivers a written report at no charge.`,
      cta: `Call to Schedule Your Free ${cityName} Mold Inspection`,
      sub: `Call ${phone} · Available 7 days a week`,
    },
    internalLinks: { otherServicesLabel: `Other mold services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 3. Mold Testing ─────────────────────────────────────────────────────────
export function getMoldTestingQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: {
      title: `Mold Testing in ${cityName}, ${stateAbbr} | Air Sampling & Lab Analysis | IICRC`,
      description: `Professional mold testing in ${cityName}, ${stateName}. Air sampling, surface swabs & accredited lab analysis. Identifies mold species & spore counts. Insurance & real estate reports.`,
    },
    hero: {
      h1: `Mold Testing in ${cityName}, ${stateName} — Air Sampling & Lab Analysis`,
      sub: `IICRC-certified mold testing. Air quality sampling, surface swabs, accredited lab analysis. Identifies mold species and spore counts. Insurance and real estate reports.`,
      trustBullets: trust(stateAbbr, cityName, m?.county),
      cta: "Get Your Mold Testing Quote — Call Now",
    },
    intro: {
      h2: `Professional Mold Testing in ${cityName}, ${stateName}`,
      paragraphs: [
        `Professional mold testing in ${cityName} uses accredited laboratory analysis to identify mold species, spore counts, and contamination levels — information required for insurance claims, real estate transactions, and health-related legal matters.`,
        `Air quality testing is the most accurate method — it detects mold spores even when no visible mold is present. Surface swabs and bulk samples confirm specific contamination locations.`,
      ],
      cta: `Call for Mold Testing in ${cityName}`,
    },
    costEstimator: {
      h2: `Mold Testing Cost — ${cityName}, ${stateName}`,
      intro: `Mold testing in ${cityName}: air quality sampling (spore trap) $200–$400 per sample; surface swab with lab analysis $50–$150 per sample; comprehensive testing package (multiple samples) $300–$600; post-remediation clearance testing $200–$500.`,
      ctaBelow: `Get Your Mold Testing Quote in ${cityName}`,
    },
    mainService: {
      h2: `Mold Testing in ${cityName}, ${stateAbbr} — Lab Analysis`,
      description: `Mold testing in ${cityName} involves collecting samples and sending them to an accredited laboratory for analysis. Air quality sampling (spore trap method) captures a measured volume of air and counts mold spores by type and concentration. Surface swabs identify mold species on specific surfaces. Results typically come back in 2–5 business days with a full report showing mold species, spore counts, and comparison to outdoor baseline levels. This data is essential for insurance claims, real estate disclosure, and determining whether remediation is needed.`,
      localParagraphs: [],
      cost: `Mold testing in ${cityName}: $200 – $600 (lab results in 2–5 business days)`,
      whatAffects: ["Number of samples — more samples = more accurate results", "Sample type — air, surface, or bulk", "Lab turnaround — standard vs. rush results", "Whether formal report is needed for insurance or legal use"],
      cta: `Get Mold Testing in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `When Mold Testing Is Required in ${cityName}`,
      paragraphs: [
        `Real estate transactions. Buyers in ${cityName} increasingly require mold testing before closing. A clean mold test report protects sellers from post-sale liability and gives buyers confidence.`,
        `Insurance claims. Insurance companies require certified lab results to document mold contamination levels before approving remediation claims.`,
        `After remediation. Post-remediation clearance testing is required by IICRC S520 protocol — confirming that spore counts have returned to acceptable levels before the contractor is paid in full.`,
      ],
    },
    localSignals: {
      h2: `Mold Testing Service Areas Near ${cityName}`,
      intro: `IICRC-certified mold testing contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: sigs(stateName, cityName, [`Accredited laboratory analysis`, "Air quality, surface, and bulk sampling available", "Insurance and real estate report formats", `Results in 2–5 business days`], m),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: {
      h2: `Mold Testing FAQ — ${cityName}`,
      items: [
        { q: `How much does mold testing cost in ${cityName}?`, a: `Mold testing in ${cityName} costs $200–$600 depending on number of samples and report type. Post-remediation clearance testing adds $200–$500.` },
        { q: `What does mold testing show in ${cityName}?`, a: `Lab results identify mold species, spore counts per cubic meter, and comparison to outdoor baseline levels — determining whether contamination is elevated and what remediation is needed.` },
        { q: `How long does mold testing take in ${cityName}?`, a: `Sampling takes 1–2 hours. Lab results take 2–5 business days. Rush results available in 24–48 hours for additional cost.` },
        { q: `Is mold testing required before remediation in ${cityName}?`, a: `Not always required before, but post-remediation clearance testing is required by IICRC S520 to confirm the remediation was successful.` },
      ],
    },
    closing: {
      h2: `Get Your Mold Testing Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. An IICRC-certified contractor in ${cityName} provides certified lab mold testing with full results and reports.`,
      cta: `Call for Mold Testing in ${cityName}`,
      sub: `Call ${phone} · Available 7 days a week`,
    },
    internalLinks: { otherServicesLabel: `Other mold services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 4. Black Mold Removal ───────────────────────────────────────────────────
export function getBlackMoldRemovalQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: {
      title: `Black Mold Removal in ${cityName}, ${stateAbbr} | IICRC S520 | Free Quote`,
      description: `Black mold removal in ${cityName}, ${stateName}. Stachybotrys removal requires IICRC S520 containment protocol. Licensed contractors, clearance testing, insurance documentation.`,
    },
    hero: {
      h1: `Black Mold Removal in ${cityName}, ${stateName} — IICRC S520`,
      sub: `Stachybotrys (black mold) removal requires specialized containment. IICRC S520-certified contractors in ${cityName}. Clearance testing and insurance documentation included.`,
      trustBullets: trust(stateAbbr, cityName, m?.county),
      cta: "Get Your Free Black Mold Removal Quote — Call Now",
    },
    intro: {
      h2: `Black Mold Removal in ${cityName} — Professional Containment Required`,
      paragraphs: [
        `Black mold (Stachybotrys chartarum) cannot be identified by color alone — only lab testing confirms the species. Any dark mold growth after water damage should be treated as potentially hazardous until tested.`,
        `Stachybotrys removal in ${cityName} requires negative air pressure containment, full PPE, HEPA vacuuming, affected material removal, antimicrobial treatment, and post-remediation clearance testing. Never DIY black mold removal.`,
      ],
      cta: `Call for Black Mold Removal Help in ${cityName}`,
    },
    costEstimator: {
      h2: `Black Mold Removal Cost — ${cityName}, ${stateName}`,
      intro: `Black mold removal in ${cityName}: small area (bathroom, closet) $1,500–$4,000; medium area (one room) $4,000–$8,000; extensive contamination $8,000–$15,000+. Stachybotrys removal costs more than common molds due to additional containment. Usually covered by homeowner insurance when caused by sudden water damage.`,
      ctaBelow: `Get Your Exact ${cityName} Black Mold Removal Quote`,
    },
    mainService: {
      h2: `Black Mold Removal in ${cityName}, ${stateAbbr} — Why It Requires Professionals`,
      description: `Black mold removal in ${cityName} must follow strict IICRC S520 containment protocol. Stachybotrys produces mycotoxins that can cause serious respiratory illness, neurological symptoms, and immune suppression. Disturbing black mold without proper containment releases spores and mycotoxins into the air — spreading contamination throughout your home. Licensed ${cityName} contractors set up negative air pressure containment chambers, use Level C/D PPE, remove all affected materials, treat structural surfaces with antimicrobials, and perform post-remediation clearance testing before removing containment.`,
      localParagraphs: [],
      cost: `Black mold removal in ${cityName}: $1,500 – $15,000+ (insurance usually applies)`,
      whatAffects: ["Extent of Stachybotrys growth", "Materials affected — drywall, insulation, framing", "Source of moisture that caused growth", "Whether HVAC system was contaminated"],
      cta: `Get a Black Mold Removal Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why Black Mold Removal Must Be Professional`,
      paragraphs: [
        `Mycotoxin exposure is serious. Stachybotrys produces trichothecene mycotoxins linked to respiratory illness, neurological effects, and immunosuppression. Children, elderly, and immunocompromised individuals face the greatest risk.`,
        `DIY black mold removal spreads contamination. Without proper containment, removing black mold releases billions of spores into your home's air — turning a contained problem into a whole-house contamination.`,
        `Insurance requires professional documentation. Black mold remediation claims require IICRC S520 documentation, air quality testing before and after, and a clearance certificate. DIY removal voids your claim.`,
      ],
    },
    localSignals: {
      h2: `Black Mold Removal Service Areas Near ${cityName}`,
      intro: `IICRC S520-certified black mold removal contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: sigs(stateName, cityName, [`IICRC S520-certified — Stachybotrys removal protocol`, "Negative air pressure containment", "Post-remediation clearance testing included", `Insurance documentation from day one`], m),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: {
      h2: `Black Mold Removal FAQ — ${cityName}`,
      items: [
        { q: `How much does black mold removal cost in ${cityName}?`, a: `Black mold removal costs $1,500–$15,000+ depending on extent. Stachybotrys costs more than common molds due to containment requirements. Most homeowner insurance covers removal from sudden water damage.` },
        { q: `How do I know if it's actually black mold in ${cityName}?`, a: `You cannot identify Stachybotrys by color alone — many molds appear black. Only lab testing confirms the species. An IICRC-certified contractor collects samples for accredited lab analysis.` },
        { q: `Can I remove black mold myself in ${cityName}?`, a: `No. DIY black mold removal without proper containment spreads mycotoxins and spores throughout your home. It also voids your insurance claim. Call a licensed contractor.` },
        { q: `Do I need to leave my ${cityName} home during black mold removal?`, a: `For Stachybotrys remediation, most contractors strongly recommend temporary relocation during the project. Your contractor advises based on the specific location and extent of contamination.` },
      ],
    },
    closing: {
      h2: `Get Your Free Black Mold Removal Quote in ${cityName} Today`,
      text: `Don't disturb black mold without professional help. An IICRC S520-certified contractor in ${cityName} safely removes Stachybotrys and provides clearance testing and insurance documentation.`,
      cta: `Call for Black Mold Removal in ${cityName}`,
      sub: `Call ${phone} · Available 7 days a week · Same-day assessment`,
    },
    internalLinks: { otherServicesLabel: `Other mold services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 5. Attic Mold Removal ───────────────────────────────────────────────────
export function getAtticMoldRemovalQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: {
      title: `Attic Mold Removal in ${cityName}, ${stateAbbr} | Free Quote | IICRC Certified`,
      description: `Attic mold removal in ${cityName}, ${stateName}. Caused by poor ventilation, roof leaks & bathroom exhaust issues. IICRC-certified removal + ventilation correction. Free quote.`,
    },
    hero: {
      h1: `Attic Mold Removal in ${cityName}, ${stateName} — Free Quote`,
      sub: `IICRC-certified attic mold removal. Caused by roof leaks, poor ventilation, or bathroom exhaust problems. Removal plus source correction to prevent recurrence.`,
      trustBullets: trust(stateAbbr, cityName, m?.county),
      cta: "Get Your Free Attic Mold Removal Quote — Call Now",
    },
    intro: {
      h2: `Attic Mold Removal in ${cityName} — Source Correction Included`,
      paragraphs: [
        `Attic mold in ${cityName} homes is almost always caused by a moisture source that must be corrected: roof leak, inadequate ventilation, bathroom or kitchen exhaust venting into the attic instead of outside, or insufficient insulation causing condensation.`,
        `Removing attic mold without correcting the source guarantees recurrence within 6–12 months. An IICRC-certified ${cityName} contractor identifies and corrects the source as part of the remediation.`,
      ],
      cta: `Call for Attic Mold Removal in ${cityName}`,
    },
    costEstimator: {
      h2: `Attic Mold Removal Cost — ${cityName}`,
      intro: `Attic mold removal in ${cityName}: small area $1,000–$2,500; moderate contamination $2,500–$5,000; extensive contamination requiring sheathing replacement $4,000–$10,000+. Ventilation correction adds $500–$2,000. Usually covered by homeowner insurance when caused by a covered roof event.`,
      ctaBelow: `Get Your Exact ${cityName} Attic Mold Removal Quote`,
    },
    mainService: {
      h2: `Attic Mold Removal in ${cityName}, ${stateAbbr}`,
      description: `Attic mold removal in ${cityName} includes: containment setup, HEPA vacuuming of all contaminated surfaces (rafters, sheathing, insulation), removal of contaminated insulation, antimicrobial treatment of structural wood, replacement of severely contaminated sheathing if needed, new insulation installation, and ventilation correction (adding soffit vents, ridge vents, or rerouting exhaust fans). Post-remediation clearance testing confirms the work is complete. Without correcting the ventilation or moisture source, mold will return.`,
      localParagraphs: [m?.medianYearBuilt ? `Many ${cityName} homes built around ${m.medianYearBuilt} have attic ventilation that doesn't meet current building codes — a common cause of attic mold.` : ""].filter(Boolean) as string[],
      cost: `Attic mold removal in ${cityName}: $1,000 – $10,000+`,
      whatAffects: ["Extent of contamination — rafters vs. sheathing vs. insulation", "Whether sheathing replacement is needed", "Ventilation correction required", "Attic accessibility"],
      cta: `Get an Attic Mold Removal Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why Attic Mold Needs Professional Removal in ${cityName}`,
      paragraphs: [
        `Attic mold affects structural integrity. Mold on roof sheathing and rafters weakens wood over time — eventually requiring structural repairs that cost far more than early remediation.`,
        `Attic mold spreads to living spaces. Mold spores from the attic travel into your home through gaps around light fixtures, attic hatches, and HVAC systems — affecting indoor air quality throughout the house.`,
        `Attic mold affects home sale. Attic mold is commonly found during home inspections and can kill a sale or trigger price renegotiation. An IICRC clearance certificate protects your sale.`,
      ],
    },
    localSignals: {
      h2: `Attic Mold Removal Service Areas Near ${cityName}`,
      intro: `IICRC-certified attic mold removal contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: sigs(stateName, cityName, [`IICRC S520-certified attic mold removal`, "Source correction — ventilation and exhaust routing", "New insulation installation included when needed", `Clearance testing included`], m),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: {
      h2: `Attic Mold Removal FAQ — ${cityName}`,
      items: [
        { q: `How much does attic mold removal cost in ${cityName}?`, a: `Attic mold removal costs $1,000–$10,000+ depending on extent. Ventilation correction adds $500–$2,000. Homeowner insurance covers removal when caused by a covered roof event.` },
        { q: `What causes attic mold in ${cityName} homes?`, a: `The most common causes: roof leaks, bathroom exhaust venting into the attic instead of outside, insufficient attic ventilation, and inadequate insulation causing condensation on the cold sheathing.` },
        { q: `Will attic mold come back after removal in ${cityName}?`, a: `Only if the moisture source is not corrected. An IICRC contractor identifies and corrects the source — without this step, mold returns within 6–12 months.` },
        { q: `Does homeowner insurance cover attic mold removal in ${cityName}?`, a: `If caused by a covered roof event (storm damage, ice dam), most policies cover attic mold removal. Gradual leaks and condensation issues are typically not covered.` },
      ],
    },
    closing: {
      h2: `Get Your Free Attic Mold Removal Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. An IICRC-certified contractor in ${cityName} removes attic mold and corrects the source to prevent recurrence.`,
      cta: `Call for Attic Mold Removal in ${cityName}`,
      sub: `Call ${phone} · Available 7 days a week`,
    },
    internalLinks: { otherServicesLabel: `Other mold services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 6. Crawl Space Mold ─────────────────────────────────────────────────────
export function getCrawlSpaceMoldQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: {
      title: `Crawl Space Mold Removal in ${cityName}, ${stateAbbr} | Free Quote | IICRC`,
      description: `Crawl space mold removal in ${cityName}, ${stateName}. Moisture intrusion, vapor barrier issues & standing water. IICRC-certified removal + encapsulation. Free quote.`,
    },
    hero: {
      h1: `Crawl Space Mold Removal in ${cityName}, ${stateName}`,
      sub: `IICRC-certified crawl space mold removal. Moisture intrusion, vapor barrier failure, standing water. Removal, antimicrobial treatment, and encapsulation.`,
      trustBullets: trust(stateAbbr, cityName, m?.county),
      cta: "Get Your Free Crawl Space Mold Quote — Call Now",
    },
    intro: {
      h2: `Crawl Space Mold Removal in ${cityName} — Source Correction Essential`,
      paragraphs: [
        `Crawl space mold in ${cityName} homes is caused by ground moisture vapor, standing water, plumbing leaks, or inadequate vapor barriers. The dark, humid crawl space environment is ideal for mold growth on floor joists, subfloor, and insulation.`,
        `Crawl space mold affects indoor air quality — "stack effect" draws air from the crawl space into the living areas above. IICRC-certified removal plus encapsulation stops both the mold and the moisture that causes it.`,
      ],
      cta: `Call for Crawl Space Mold Help in ${cityName}`,
    },
    costEstimator: {
      h2: `Crawl Space Mold Removal Cost — ${cityName}`,
      intro: `Crawl space mold removal in ${cityName}: basic removal and treatment $500–$2,000; removal plus new vapor barrier $1,500–$4,000; full encapsulation with dehumidifier $3,000–$8,000. Homeowner insurance covers removal when caused by a covered plumbing event.`,
      ctaBelow: `Get Your Exact ${cityName} Crawl Space Mold Quote`,
    },
    mainService: {
      h2: `Crawl Space Mold Removal in ${cityName}, ${stateAbbr}`,
      description: `Crawl space mold removal in ${cityName} includes: removal of contaminated insulation, HEPA vacuuming of floor joists and subfloor, antimicrobial treatment of all wood surfaces, new vapor barrier installation (6–20 mil polyethylene), optional full encapsulation with sealed walls and dehumidifier, and clearance testing. Full encapsulation permanently controls crawl space humidity — eliminating the moisture source that causes mold and dramatically improving indoor air quality in the living space above.`,
      localParagraphs: [m?.county ? `In ${m.county}, crawl space moisture is a common issue due to local soil conditions and groundwater levels.` : ""].filter(Boolean) as string[],
      cost: `Crawl space mold removal in ${cityName}: $500 – $8,000`,
      whatAffects: ["Extent of mold on joists, subfloor, and insulation", "Whether vapor barrier replacement is needed", "Full encapsulation vs. basic removal", "Dehumidifier installation"],
      cta: `Get a Crawl Space Mold Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why Crawl Space Mold Affects Your Whole Home in ${cityName}`,
      paragraphs: [
        `Stack effect pulls crawl space air into living spaces. Up to 50% of the air in the first floor of a home comes from the crawl space. Crawl space mold directly affects the air quality of every room above.`,
        `Floor joist damage is expensive. Mold-damaged floor joists become structurally compromised — requiring replacement that costs $5,000–$20,000+. Early crawl space mold removal prevents this outcome.`,
        `Crawl space mold affects home value and sale. Home inspectors always check crawl spaces. Visible mold can kill a sale or reduce sale price by $10,000–$30,000 more than the cost of remediation.`,
      ],
    },
    localSignals: {
      h2: `Crawl Space Mold Service Areas Near ${cityName}`,
      intro: `IICRC-certified crawl space mold contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: sigs(stateName, cityName, [`IICRC S520-certified crawl space removal`, "Vapor barrier and encapsulation options", "Dehumidifier installation available", `Clearance testing included`], m),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: {
      h2: `Crawl Space Mold FAQ — ${cityName}`,
      items: [
        { q: `How much does crawl space mold removal cost in ${cityName}?`, a: `Basic removal and treatment: $500–$2,000. With new vapor barrier: $1,500–$4,000. Full encapsulation: $3,000–$8,000. Homeowner insurance covers removal from covered plumbing events.` },
        { q: `Does crawl space mold affect indoor air quality in ${cityName}?`, a: `Yes. Stack effect draws up to 50% of first-floor air from the crawl space. Crawl space mold spores directly affect indoor air quality throughout the home.` },
        { q: `What is crawl space encapsulation in ${cityName}?`, a: `Encapsulation seals the crawl space with a heavy vapor barrier on the floor and walls, eliminating ground moisture vapor. Combined with a dehumidifier, it permanently controls humidity and prevents mold recurrence.` },
        { q: `Will crawl space mold come back in ${cityName}?`, a: `Without correcting the moisture source, yes. Encapsulation with a dehumidifier provides permanent moisture control — the most cost-effective long-term solution.` },
      ],
    },
    closing: {
      h2: `Get Your Free Crawl Space Mold Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. An IICRC-certified contractor in ${cityName} removes crawl space mold and corrects the moisture source.`,
      cta: `Call for Crawl Space Mold Help in ${cityName}`,
      sub: `Call ${phone} · Available 7 days a week`,
    },
    internalLinks: { otherServicesLabel: `Other mold services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 7. Mold Damage Repair ───────────────────────────────────────────────────
export function getMoldDamageRepairQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: {
      title: `Mold Damage Repair in ${cityName}, ${stateAbbr} | Rebuild After Mold | Free Quote`,
      description: `Mold damage repair in ${cityName}, ${stateName}. Drywall replacement, insulation, framing & finish work after mold remediation. Licensed contractors. Insurance documentation.`,
    },
    hero: {
      h1: `Mold Damage Repair in ${cityName}, ${stateName} — Rebuild After Remediation`,
      sub: `Licensed ${cityName} contractors for post-mold repair. Drywall, insulation, framing, and finish work. Restore your home to pre-mold condition with insurance documentation.`,
      trustBullets: trust(stateAbbr, cityName, m?.county),
      cta: "Get Your Free Mold Damage Repair Quote — Call Now",
    },
    intro: {
      h2: `Mold Damage Repair in ${cityName} — Restore After Remediation`,
      paragraphs: [
        `After mold remediation in ${cityName}, the removal of contaminated drywall, insulation, and flooring leaves your home needing repair and reconstruction. A licensed contractor restores affected areas to pre-mold condition.`,
        `Mold damage repair is a separate scope from remediation — and is usually covered separately by homeowner insurance. A licensed ${cityName} contractor provides itemized documentation for both claims.`,
      ],
      cta: `Call for Mold Damage Repair in ${cityName}`,
    },
    costEstimator: {
      h2: `Mold Damage Repair Cost — ${cityName}`,
      intro: `Mold damage repair in ${cityName}: minor repair (one wall, bathroom) $500–$2,000; moderate repair (one room) $2,000–$8,000; extensive reconstruction $8,000–$30,000+. Usually covered by homeowner insurance as part of the water damage claim.`,
      ctaBelow: `Get Your Exact ${cityName} Mold Damage Repair Quote`,
    },
    mainService: {
      h2: `Mold Damage Repair in ${cityName}, ${stateAbbr}`,
      description: `Mold damage repair in ${cityName} includes: new drywall installation and finishing (mud, tape, prime, paint), new insulation installation to current R-value standards, framing repair or replacement for structural wood affected by mold, flooring replacement (subfloor, underlayment, and finish flooring), trim and millwork replacement, and final painting. All work is performed after IICRC clearance testing confirms the remediation is complete. A licensed ${cityName} contractor provides itemized documentation for your insurance claim — typically covered as part of the water damage or mold damage claim.`,
      localParagraphs: [],
      cost: `Mold damage repair in ${cityName}: $500 – $30,000+`,
      whatAffects: ["Extent of material removal during remediation", "Structural framing damage requiring replacement", "Flooring type and area", "Finish quality — builder grade vs. premium"],
      cta: `Get a Mold Damage Repair Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why Use a Licensed Contractor for Mold Damage Repair`,
      paragraphs: [
        `Insurance requires licensed contractor documentation. Mold damage repair claims require permits, licensed contractor invoices, and before/after photos — DIY repairs are typically not covered.`,
        `Building permits are required for structural repairs. In most ${cityName} jurisdictions, repairs to structural framing, electrical, and plumbing exposed during remediation require building permits and inspections.`,
        `Repair quality affects future mold risk. Improper insulation installation, missing vapor barriers, and non-code ventilation in repaired areas create conditions for future mold growth. A licensed contractor installs everything correctly.`,
      ],
    },
    localSignals: {
      h2: `Mold Damage Repair Service Areas Near ${cityName}`,
      intro: `Licensed mold damage repair contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: sigs(stateName, cityName, [`Licensed and insured contractors`, "Permit coordination included", "Insurance documentation for repair claims", `Serving ${cityName} and surrounding areas`], m),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: {
      h2: `Mold Damage Repair FAQ — ${cityName}`,
      items: [
        { q: `How much does mold damage repair cost in ${cityName}?`, a: `Mold damage repair costs $500–$30,000+ depending on scope. Usually covered by homeowner insurance as part of the water or mold damage claim.` },
        { q: `Does insurance cover mold damage repair in ${cityName}?`, a: `Yes, in most cases when the original water damage was covered. A licensed contractor provides itemized documentation for your insurance adjuster.` },
        { q: `Do I need permits for mold damage repair in ${cityName}?`, a: `Yes, for any structural, electrical, or plumbing work exposed during remediation. A licensed contractor handles all permit requirements.` },
        { q: `How long does mold damage repair take in ${cityName}?`, a: `Minor repairs take 1–3 days. Extensive reconstruction takes 1–3 weeks depending on scope and material availability.` },
      ],
    },
    closing: {
      h2: `Get Your Free Mold Damage Repair Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed contractor in ${cityName} restores your home after mold remediation with full insurance documentation.`,
      cta: `Call for Mold Damage Repair in ${cityName}`,
      sub: `Call ${phone} · Available 7 days a week`,
    },
    internalLinks: { otherServicesLabel: `Other mold services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 8. Emergency Mold Removal ───────────────────────────────────────────────
export function getEmergencyMoldRemovalCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: {
      title: `Emergency Mold Removal in ${cityName}, ${stateAbbr} | Same-Day | IICRC Certified`,
      description: `Emergency mold removal in ${cityName}, ${stateName}. Same-day assessment for health symptoms, visible black mold & post-flood mold. IICRC S520-certified. Call now.`,
    },
    hero: {
      h1: `Emergency Mold Removal in ${cityName}, ${stateName} — Call Now`,
      sub: `Same-day assessment for health symptoms, visible black mold, or post-water-damage mold growth. IICRC S520-certified contractors in ${cityName}. 24/7 availability.`,
      trustBullets: trust(stateAbbr, cityName, m?.county),
      cta: "Call for Emergency Mold Removal — Now",
    },
    intro: {
      h2: `Emergency Mold Removal in ${cityName} — When to Call Now`,
      paragraphs: [
        `Call immediately if: you or family members have unexplained respiratory symptoms, headaches, or nausea that improve away from home; you see visible dark mold growth following water damage; or you detect a persistent musty odor that appeared suddenly.`,
        `IICRC-certified emergency mold contractors in ${cityName} provide same-day assessment and can begin containment immediately to stop mold spread.`,
      ],
      cta: "Call for Emergency Mold Help Now",
    },
    costEstimator: {
      h2: `Emergency Mold Removal Cost — ${cityName}`,
      intro: `Emergency mold removal in ${cityName}: emergency assessment $0–$300; containment setup (same-day) $300–$800; full remediation following emergency response $500–$15,000+. Most homeowner insurance covers sudden mold from covered water events.`,
      ctaBelow: "Call for Emergency Mold Assessment Now",
    },
    mainService: {
      h2: `Emergency Mold Removal in ${cityName}, ${stateAbbr}`,
      description: `Mold emergencies in ${cityName} include: visible black mold growth after flooding or pipe burst, occupants with unexplained health symptoms (respiratory issues, headaches, skin irritation) that improve away from home, sudden strong musty odor following water damage, or mold discovered during home sale inspection with a close deadline. An IICRC-certified emergency contractor assesses the situation same-day, sets up containment to stop spore spread, begins air scrubbing, and provides a written remediation plan with insurance documentation.`,
      localParagraphs: [],
      cost: `Emergency assessment in ${cityName}: same-day — remediation $500–$15,000+`,
      whatAffects: ["Urgency — health symptoms vs. visible growth", "Extent of visible contamination", "Whether water source is still active", "Insurance coverage and deductible"],
      cta: "Call for Emergency Mold Removal in ${cityName} Now",
    },
    whyCall: {
      h2: `When Mold Is an Emergency in ${cityName}`,
      paragraphs: [
        `Health symptoms are a medical emergency. If occupants have respiratory symptoms, neurological effects, or chronic fatigue that improve away from home, mold may be causing acute health harm. Call immediately — don't wait for lab results.`,
        `Visible mold spread following flooding. After a flooding event, mold can grow from invisible spores to visible colonies within 48 hours. Emergency containment stops exponential spread.`,
        `Real estate deadline pressure. Mold discovered during a home inspection with a closing deadline requires emergency assessment and remediation to preserve the sale. Same-day assessment and written plans available.`,
      ],
    },
    localSignals: {
      h2: `Emergency Mold Service Areas Near ${cityName}`,
      intro: `IICRC-certified emergency mold contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: sigs(stateName, cityName, [`IICRC S520-certified — same-day assessment`, "24/7 availability", "Immediate containment to stop spread", `Emergency response in ${cityName} and surrounding areas`], m),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: {
      h2: `Emergency Mold FAQ — ${cityName}`,
      items: [
        { q: `When is mold an emergency in ${cityName}?`, a: `When occupants have health symptoms, when visible mold appears rapidly after water damage, or when a real estate deadline requires immediate assessment and documentation.` },
        { q: `How fast can an emergency mold contractor respond in ${cityName}?`, a: `IICRC-certified emergency contractors typically respond within 2–4 hours for same-day assessment and containment setup.` },
        { q: `What should I do while waiting for the emergency mold contractor?`, a: `Minimize time in the affected area. Don't run fans or HVAC over visible mold — this spreads spores. Seal off the affected area with plastic sheeting if possible.` },
        { q: `Does insurance cover emergency mold removal in ${cityName}?`, a: `Most homeowner policies cover mold from sudden covered water events. An IICRC contractor documents the emergency for your insurance claim from the first assessment.` },
      ],
    },
    closing: {
      h2: `Emergency Mold Removal in ${cityName} — Call Now`,
      text: `Don't wait. An IICRC S520-certified emergency contractor in ${cityName} assesses your mold situation same-day and stops the spread immediately.`,
      cta: `Call for Emergency Mold Removal in ${cityName}`,
      sub: `Call ${phone} · 24/7 emergency availability`,
    },
    internalLinks: { otherServicesLabel: `Other mold services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── Dispatcher ─────────────────────────────────────────────────────────────
export function getServiceCityPageContent(service: string, params: ServiceContentParams): ServiceCityContent {
  const { cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone, cityMetadata } = params;
  const p = [cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone ?? PHONE, cityMetadata] as const;
  switch (service) {
    case "mold-remediation-quote":   return getMoldRemediationQuoteCityPageContent(...p);
    case "mold-inspection-quote":    return getMoldInspectionQuoteCityPageContent(...p);
    case "mold-testing-quote":       return getMoldTestingQuoteCityPageContent(...p);
    case "black-mold-removal-quote": return getBlackMoldRemovalQuoteCityPageContent(...p);
    case "attic-mold-removal-quote": return getAtticMoldRemovalQuoteCityPageContent(...p);
    case "crawl-space-mold-quote":   return getCrawlSpaceMoldQuoteCityPageContent(...p);
    case "mold-damage-repair-quote": return getMoldDamageRepairQuoteCityPageContent(...p);
    case "emergency-mold-removal":   return getEmergencyMoldRemovalCityPageContent(...p);
    default:                         return getMoldRemediationQuoteCityPageContent(...p);
  }
}
