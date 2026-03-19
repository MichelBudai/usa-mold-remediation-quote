import stateMetadataJson from "../data/state_metadata.json";

interface StateMetadata {
  cityCount: number;
  pctPre1980: number | null;
  avgMedianYear: number | null;
  avgHomeownership: number | null;
  topCities: { name: string; population: number }[];
}

const stateMetadataMap = stateMetadataJson as Record<string, StateMetadata>;

export interface StatePageContent {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSub: string;
  trustBullets: string[];
  intro: { h2: string; paragraphs: string[]; ctaText: string };
  why: { h2: string; points: { h3: string; text: string }[] };
  services: { h2: string; intro: string; items: { slug: any; title: string; description: string; costRange: string }[] };
  cityIntro: { h2: string; paragraph: string; ctaText: string };
  faq: { h2: string; items: { q: string; a: string }[] };
  closing: { h2: string; text: string; ctaText: string };
  internalLinks: { otherStatesLabel: string; viewAllStatesLabel: string; otherServicesLabel: string };
}

const SERVICE_DESCRIPTIONS: Record<string, { description: string; costRange: string }> = {
  "mold-remediation-quote":   { description: "Complete mold remediation — containment, HEPA removal, antimicrobial treatment, and clearance testing. IICRC S520-certified contractors. Insurance documentation included.", costRange: "$500 – $30,000+" },
  "mold-inspection-quote":    { description: "Professional mold inspection with moisture mapping and air quality testing. Identifies hidden mold behind walls and under floors. Written report with photos. IICRC-certified inspectors.", costRange: "FREE – $400" },
  "mold-testing-quote":       { description: "Certified mold testing — air sampling, surface swabs, and bulk samples sent to accredited labs. Identifies mold species and spore counts. Required for insurance claims and real estate transactions.", costRange: "$200 – $600" },
  "black-mold-removal-quote": { description: "Stachybotrys (black mold) removal requires specialized containment and full PPE. IICRC S520 protocol — negative air pressure, HEPA filtration, and post-remediation clearance testing.", costRange: "$1,500 – $15,000" },
  "attic-mold-removal-quote": { description: "Attic mold from roof leaks, poor ventilation, or bathroom exhaust venting. Complete removal including HEPA vacuuming, antimicrobial treatment, and ventilation correction to prevent recurrence.", costRange: "$1,000 – $6,000" },
  "crawl-space-mold-quote":   { description: "Crawl space mold from moisture intrusion, standing water, or inadequate vapor barriers. Removal, antimicrobial treatment, and encapsulation to prevent recurrence. IICRC-certified contractors.", costRange: "$500 – $5,000" },
  "mold-damage-repair-quote": { description: "Repair and rebuild after mold remediation — drywall replacement, framing repair, insulation, and finish work. Licensed contractors restore affected areas to pre-mold condition.", costRange: "$500 – $20,000" },
  "emergency-mold-removal":   { description: "Emergency mold response for health symptoms, visible black mold growth, or post-water-damage mold. IICRC-certified contractors available 24/7 with same-day assessment.", costRange: "$500 – $15,000+" },
};

const LABELS: Record<string, string> = {
  "mold-remediation-quote":   "Mold Remediation Quote",
  "mold-inspection-quote":    "Free Mold Inspection",
  "mold-testing-quote":       "Mold Testing Quote",
  "black-mold-removal-quote": "Black Mold Removal Quote",
  "attic-mold-removal-quote": "Attic Mold Removal Quote",
  "crawl-space-mold-quote":   "Crawl Space Mold Quote",
  "mold-damage-repair-quote": "Mold Damage Repair Quote",
  "emergency-mold-removal":   "Emergency Mold Removal",
};

const STATE_CONTEXT: Record<string, { risk: string; climate: string; permit: string; insurance: string }> = {
  alabama:          { risk: "hurricane water damage, high humidity, crawl space moisture", climate: "hot humid subtropical", permit: "No state permit required. Local building permits for repairs.", insurance: "Most AL policies cover sudden mold from covered water damage." },
  alaska:           { risk: "condensation from extreme cold, ice dam roof leaks, poor ventilation", climate: "cold with high indoor humidity risk", permit: "Local permits vary.", insurance: "Mold from sudden water damage covered by most AK policies." },
  arizona:          { risk: "monsoon water intrusion, AC condensation, flat roof leaks", climate: "arid with monsoon moisture spikes", permit: "Local permits required for repairs.", insurance: "Sudden water damage mold covered. Flood mold requires NFIP." },
  arkansas:         { risk: "tornado water damage, high humidity, crawl space moisture", climate: "hot humid with severe storms", permit: "Local permits vary.", insurance: "Sudden mold from covered events covered by most AR policies." },
  california:       { risk: "atmospheric river flooding, plumbing failures, coastal fog moisture", climate: "varied coastal to inland", permit: "CDPH guidelines. Local permits for all repairs.", insurance: "Many CA policies exclude mold. Check endorsements carefully." },
  colorado:         { risk: "snowmelt roof leaks, basement moisture, HVAC condensation", climate: "semi-arid with cold winters", permit: "Local permits required.", insurance: "Sudden water damage mold typically covered." },
  connecticut:      { risk: "nor'easter roof damage, basement water, high coastal humidity", climate: "humid continental", permit: "Local permits required.", insurance: "Most CT policies cover sudden water damage mold." },
  delaware:         { risk: "coastal humidity, storm surge, basement flooding", climate: "humid subtropical coast", permit: "Local permits required.", insurance: "Coastal flood mold requires NFIP. Sudden damage covered." },
  florida:          { risk: "hurricane flooding, year-round humidity, AC condensation, roof leaks", climate: "subtropical — highest mold risk in US", permit: "FREC regulations. Local permits required.", insurance: "FL policies vary widely. Many exclude or limit mold coverage." },
  georgia:          { risk: "tropical storm flooding, high humidity, crawl space moisture", climate: "humid subtropical", permit: "Local permits required.", insurance: "Sudden water damage mold covered by most GA policies." },
  hawaii:           { risk: "tropical humidity, trade wind condensation, volcanic fog", climate: "tropical — year-round mold risk", permit: "DOH guidelines. Local permits required.", insurance: "Mold coverage varies. Check policy endorsements." },
  idaho:            { risk: "snowmelt basement flooding, pipe bursts, poor ventilation", climate: "semi-arid with cold winters", permit: "Local permits vary.", insurance: "Sudden water damage mold typically covered." },
  illinois:         { risk: "basement flooding, polar vortex pipe bursts, high summer humidity", climate: "humid continental", permit: "IDPH guidelines. Local permits required.", insurance: "Most IL policies cover sudden water damage mold." },
  indiana:          { risk: "basement flooding, tornado water damage, high humidity", climate: "humid continental", permit: "Local permits required.", insurance: "Sudden water damage mold covered by most IN policies." },
  iowa:             { risk: "spring flooding, high humidity, basement moisture", climate: "humid continental", permit: "Local permits vary.", insurance: "Sudden water damage mold typically covered." },
  kansas:           { risk: "tornado water damage, basement flooding, humidity", climate: "humid continental with severe storms", permit: "Local permits vary.", insurance: "Sudden mold from covered events typically covered." },
  kentucky:         { risk: "ice storm pipe bursts, basement flooding, crawl space moisture", climate: "humid subtropical transitional", permit: "Local permits required.", insurance: "Sudden water damage mold covered by most KY policies." },
  louisiana:        { risk: "hurricane flooding, year-round high humidity, standing water", climate: "subtropical — very high mold risk", permit: "LDH guidelines. Local permits required.", insurance: "Flood mold requires NFIP. Many LA policies limit mold." },
  maine:            { risk: "ice dam roof leaks, basement moisture, frost heave", climate: "humid continental cold", permit: "Local permits vary.", insurance: "Sudden water damage mold typically covered." },
  maryland:         { risk: "nor'easter flooding, basement water, coastal humidity", climate: "humid subtropical transitional", permit: "MDE guidelines. Local permits required.", insurance: "Most MD policies cover sudden water damage mold." },
  massachusetts:    { risk: "nor'easter roof damage, basement flooding, coastal humidity", climate: "humid continental", permit: "MDPH guidelines. Local permits required.", insurance: "Most MA policies cover sudden water damage mold." },
  michigan:         { risk: "lake-effect moisture, basement flooding, ice dam leaks", climate: "humid continental with lake effect", permit: "MDHHS guidelines. Local permits required.", insurance: "Sudden water damage mold covered by most MI policies." },
  minnesota:        { risk: "ice dam roof leaks, spring flooding, basement moisture", climate: "humid continental cold", permit: "MDH guidelines. Local permits required.", insurance: "Sudden water damage mold typically covered." },
  mississippi:      { risk: "hurricane flooding, high humidity, crawl space moisture", climate: "subtropical — high mold risk", permit: "Local permits vary.", insurance: "Flood mold requires NFIP. Sudden damage covered." },
  missouri:         { risk: "tornado flooding, basement moisture, high humidity", climate: "humid continental", permit: "Local permits required.", insurance: "Sudden water damage mold typically covered." },
  montana:          { risk: "snowmelt flooding, basement moisture, pipe bursts", climate: "semi-arid continental", permit: "Local permits vary.", insurance: "Sudden water damage mold typically covered." },
  nebraska:         { risk: "tornado flooding, spring snowmelt, basement moisture", climate: "humid continental", permit: "Local permits vary.", insurance: "Sudden water damage mold typically covered." },
  nevada:           { risk: "monsoon water intrusion, AC condensation, plumbing failures", climate: "arid desert", permit: "Local permits required.", insurance: "Sudden water damage mold typically covered." },
  "new-hampshire":  { risk: "ice dam roof leaks, basement flooding, coastal humidity", climate: "humid continental cold", permit: "Local permits vary.", insurance: "Sudden water damage mold typically covered." },
  "new-jersey":     { risk: "nor'easter flooding, Sandy-era damage, coastal humidity", climate: "humid subtropical transitional", permit: "NJDOH guidelines. Local permits required.", insurance: "Most NJ policies cover sudden water damage mold." },
  "new-mexico":     { risk: "monsoon water intrusion, flat roof leaks, AC condensation", climate: "semi-arid with monsoon", permit: "Local permits vary.", insurance: "Sudden water damage mold typically covered." },
  "new-york":       { risk: "nor'easter flooding, basement water, high humidity", climate: "humid continental to subtropical NYC", permit: "NYC DOB strict. Upstate varies.", insurance: "Most NY policies cover sudden water damage mold." },
  "north-carolina": { risk: "hurricane flooding, high humidity, crawl space moisture", climate: "humid subtropical", permit: "Local permits required.", insurance: "Flood mold requires NFIP. Sudden damage covered." },
  "north-dakota":   { risk: "spring flooding, basement moisture, ice dam leaks", climate: "humid continental cold", permit: "Local permits vary.", insurance: "Sudden water damage mold typically covered." },
  ohio:             { risk: "basement flooding, lake-effect moisture, high humidity", climate: "humid continental", permit: "ODH guidelines. Local permits required.", insurance: "Most OH policies cover sudden water damage mold." },
  oklahoma:         { risk: "tornado flooding, basement moisture, severe storm water", climate: "humid subtropical with severe storms", permit: "Local permits vary.", insurance: "Sudden mold from covered events typically covered." },
  oregon:           { risk: "atmospheric river flooding, persistent rain moisture, roof leaks", climate: "oceanic with heavy rainfall", permit: "OHA guidelines. Local permits required.", insurance: "Most OR policies cover sudden water damage mold." },
  pennsylvania:     { risk: "nor'easter flooding, basement water, aging housing moisture", climate: "humid continental", permit: "PADOH guidelines. Local permits required.", insurance: "Most PA policies cover sudden water damage mold." },
  "rhode-island":   { risk: "nor'easter coastal flooding, basement moisture, humidity", climate: "humid continental coastal", permit: "RIDOH guidelines. Local permits required.", insurance: "Most RI policies cover sudden water damage mold." },
  "south-carolina": { risk: "hurricane flooding, high humidity, crawl space moisture", climate: "humid subtropical", permit: "Local permits required.", insurance: "Flood mold requires NFIP. Sudden damage covered." },
  "south-dakota":   { risk: "spring flooding, ice dam leaks, basement moisture", climate: "humid continental semi-arid", permit: "Local permits vary.", insurance: "Sudden water damage mold typically covered." },
  tennessee:        { risk: "tornado flooding, high humidity, crawl space moisture", climate: "humid subtropical transitional", permit: "TDOH guidelines. Local permits vary.", insurance: "Most TN policies cover sudden water damage mold." },
  texas:            { risk: "hurricane flooding, tropical rain, AC condensation, plumbing failures", climate: "varied — subtropical coast to semi-arid west", permit: "TDSHS guidelines. Local permits required.", insurance: "TX policies vary. Many limit mold. Check endorsements." },
  utah:             { risk: "snowmelt flooding, pipe bursts, basement moisture", climate: "semi-arid continental", permit: "Local permits required.", insurance: "Sudden water damage mold typically covered." },
  vermont:          { risk: "ice dam roof leaks, spring flooding, basement moisture", climate: "humid continental cold", permit: "Local permits vary.", insurance: "Sudden water damage mold typically covered." },
  virginia:         { risk: "nor'easter flooding, hurricane rainfall, basement moisture", climate: "humid subtropical transitional", permit: "VDH guidelines. Local permits required.", insurance: "Most VA policies cover sudden water damage mold." },
  washington:       { risk: "atmospheric river flooding, persistent moisture, basement water", climate: "oceanic — highest mold risk in northwest", permit: "DOH guidelines. Local permits required.", insurance: "Most WA policies cover sudden water damage mold." },
  "west-virginia":  { risk: "river flooding, basement moisture, crawl space humidity", climate: "humid continental mountainous", permit: "Local permits vary.", insurance: "Sudden water damage mold typically covered." },
  wisconsin:        { risk: "basement flooding, ice dam leaks, lake-effect moisture", climate: "humid continental", permit: "WDHS guidelines. Local permits required.", insurance: "Most WI policies cover sudden water damage mold." },
  wyoming:          { risk: "snowmelt flooding, pipe bursts, basement moisture", climate: "semi-arid continental", permit: "Local permits vary.", insurance: "Sudden water damage mold typically covered." },
};

const DEFAULT_CTX = {
  risk: "water damage, high humidity, poor ventilation",
  climate: "varied climate with mold risk",
  permit: "Local permits required for all mold repairs.",
  insurance: "Most homeowner policies cover mold from sudden water damage.",
};

export function getStatePageContent(
  serviceSlug: string,
  serviceLabel: string,
  stateName: string,
  stateAbbr: string,
  stateSlug: string
): StatePageContent {
  const serviceLower = serviceLabel.toLowerCase().replace(/\s*quote\s*$/i, "").trim();
  const stateMeta = stateMetadataMap[stateSlug] ?? null;
  const ctx = STATE_CONTEXT[stateSlug] ?? DEFAULT_CTX;
  const topCityNames = stateMeta?.topCities.slice(0, 3).map((c) => c.name).join(", ") ?? "";
  const pctPre1980 = stateMeta?.pctPre1980;

  const slugs = [
    "mold-remediation-quote", "mold-inspection-quote", "mold-testing-quote",
    "black-mold-removal-quote", "attic-mold-removal-quote", "crawl-space-mold-quote",
    "mold-damage-repair-quote", "emergency-mold-removal",
  ];

  return {
    metaTitle: `${serviceLabel} in ${stateName} | Licensed Contractors by City | Free Quote`,
    metaDescription: `Get free ${serviceLower} quotes in ${stateName}. IICRC S520-certified contractors near you. ${ctx.risk}. Compare estimates by city — no obligation. Call now.`,
    heroTitle: `Free ${serviceLabel} in ${stateName} — IICRC S520 Certified`,
    heroSub: `Connect with licensed ${stateName} mold remediation contractors in your city. ${ctx.climate}. Free, no-obligation estimate. Same-day assessment available.`,
    trustBullets: [
      `IICRC S520-certified contractors in ${stateAbbr}`,
      "Free estimate, no obligation",
      "Same-day assessment available",
      "Insurance documentation included",
    ],
    intro: {
      h2: `Get a Free ${serviceLabel} from a${/^[AEIOU]/i.test(stateName) ? "n" : ""} ${stateName}-Licensed Mold Contractor`,
      paragraphs: [
        `Mold in ${stateName} homes is driven by: ${ctx.risk}. ${ctx.climate} creates conditions where mold can grow in as little as 24–48 hours after water exposure.`,
        `${ctx.insurance}`,
        ...(pctPre1980 ? [`${pctPre1980}% of ${stateName} homes have a median build year before 1980 — older construction with less vapor barriers, less ventilation, and more aging plumbing increases mold risk significantly.`] : []),
        `A free inspection from an IICRC S520-certified ${stateName} contractor identifies the extent, type, and source of mold — and gives you an accurate remediation quote before you spend a dollar.`,
      ],
      ctaText: "Select Your City Below",
    },
    why: {
      h2: `Why ${stateName} Homeowners Get a Mold Quote First`,
      points: [
        {
          h3: `${stateName} Mold Risks Are Real`,
          text: `${stateName} mold risks: ${ctx.risk}. ${ctx.climate}. A $500 mold inspection catches a problem early — before it becomes a $15,000 remediation and $50,000 health and legal liability.`,
        },
        {
          h3: `Insurance Documentation Matters in ${stateName}`,
          text: `${ctx.insurance} An IICRC S520-certified contractor provides the documentation — air quality reports, moisture maps, and clearance test results — that insurance adjusters require for a full payout.`,
        },
        {
          h3: `${stateName} Permits and Regulations`,
          text: `${ctx.permit} A licensed ${stateName} mold contractor handles all permit requirements and regulatory compliance — protecting you from liability if the home is sold or rented.`,
        },
      ],
    },
    services: {
      h2: `Mold Remediation Services Available Across ${stateName}`,
      intro: `Select your ${stateName} city below for a local quote on any mold service.`,
      items: slugs.map((slug) => {
        const { description, costRange } = SERVICE_DESCRIPTIONS[slug] ?? { description: `IICRC-certified ${stateName} contractors for ${slug}.`, costRange: "Get a free quote" };
        return { slug, title: `${LABELS[slug] ?? slug} — ${stateName}`, description, costRange };
      }),
    },
    cityIntro: {
      h2: `Find a Mold Remediation Contractor in Your ${stateName} City`,
      paragraph: `IICRC S520-certified mold remediation contractors are available in ${stateMeta?.cityCount ?? "hundreds of"} ${stateName} cities${topCityNames ? `, including ${topCityNames}` : ""}. Select your city for a free local estimate.`,
      ctaText: "Select Your City",
    },
    faq: {
      h2: `${stateName} Mold Remediation FAQ`,
      items: [
        { q: `How much does mold remediation cost in ${stateName}?`, a: `Mold remediation in ${stateName} typically costs $500–$6,000 for small areas and $6,000–$30,000+ for extensive contamination. Cost depends on affected area, mold type, and materials involved. A free inspection gives you an accurate quote.` },
        { q: `Is mold covered by homeowner insurance in ${stateName}?`, a: `${ctx.insurance} An IICRC-certified contractor documents all findings for your insurance claim.` },
        { q: `How do I know if I have black mold in ${stateName}?`, a: `Black mold (Stachybotrys) cannot be identified by color alone — lab testing is required. Signs include musty odor, visible dark growth after water damage, and respiratory symptoms. A certified mold test confirms the species.` },
        { q: `How long does mold remediation take in ${stateName}?`, a: `Small area remediation (bathroom, closet) takes 1–2 days. Extensive whole-home remediation takes 3–7 days. Post-remediation clearance testing takes an additional 1–2 days.` },
        { q: `Can I stay in my ${stateName} home during mold remediation?`, a: `For small, contained areas — possibly. For extensive mold or black mold (Stachybotrys) remediation, most contractors recommend temporary relocation during the project. Your contractor advises based on the specific situation.` },
      ],
    },
    closing: {
      h2: `Find a Licensed Mold Remediation Contractor in Your ${stateName} City`,
      text: `Don't let mold spread. Select your city, connect with an IICRC S520-certified contractor, and get a free estimate with insurance documentation included. No forms. No wait. No obligation.`,
      ctaText: `Select Your ${stateName} City`,
    },
    internalLinks: {
      otherStatesLabel: "Mold remediation quotes in other states",
      viewAllStatesLabel: "View All States",
      otherServicesLabel: `Other mold services in ${stateName}`,
    },
  };
}
