// Static content for the Sankalp home page.

/**
 * Anchor id for a therapy, e.g. "Cupping Therapy" -> "cupping-therapy".
 * Used to deep-link a Home treatment card to its section on /treatments.
 */
export const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export type Treatment = {
  sanskrit: string;
  name: string;
  name_gu: string;
  blurb: string;
  blurb_gu: string;
  image: string;
  localImage?: string;
};

// Modest, authentic Ayurvedic imagery (herbs, medicated oils, vessels, clothed
// clinical shots) — no bare-body stock. To use the clinic's own photos, drop
// files into public/clinic/ and point `image` at e.g. "/clinic/therapy-room.jpg".
export const treatments: Treatment[] = [
  {
    sanskrit: "शिरोधारा",
    name: "Shirodhara",
    name_gu: "શિરોધારા",
    blurb:
      "A steady stream of warm medicated oil on the forehead — for stress, insomnia & mental clarity.",
    blurb_gu:
      "કપાળ પર ગરમ ઔષધીય તેલનો સ્થિર પ્રવાહ — તણાવ, અનિદ્રા અને માનસિક સ્પષ્ટતા માટે.",
    image:
      "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=75",
    localImage: "/clinic/shirodhara.jpg",
  },
  {
    sanskrit: "नस्य",
    name: "Nasya",
    name_gu: "નસ્ય",
    blurb:
      "Herbal medication through the nasal passage — for sinus, migraine, allergies & hair problems.",
    blurb_gu:
      "નાકના માર્ગ દ્વારા ઔષધીય ઉપચાર — સાઇનસ, આધાશીશી, એલર્જી અને વાળની સમસ્યા માટે.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=75",
  },
  {
    sanskrit: "बस्ति",
    name: "Basti",
    name_gu: "બસ્તિ",
    blurb:
      "Medicated enema therapy — for constipation, lower-back pain, slipped disc & Vata disorders.",
    blurb_gu:
      "ઔષધીય એનિમા ચિકિત્સા — કબજિયાત, કમરનો દુખાવો, સ્લિપ ડિસ્ક અને વાત વિકારો માટે.",
    image:
      "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=75",
    localImage: "/clinic/basti.jpg",
  },
  {
    sanskrit: "कपिंग",
    name: "Cupping Therapy",
    name_gu: "કપિંગ થેરાપી",
    blurb:
      "Vacuum-cup therapy — for spine & muscle pain, eczema and skin conditions.",
    blurb_gu:
      "વેક્યુમ-કપ ચિકિત્સા — કરોડરજ્જુ અને સ્નાયુના દુખાવા, ખરજવું અને ચામડીના રોગો માટે.",
    image:
      "https://images.unsplash.com/photo-1745327883389-17150e99dcf7?auto=format&fit=crop&w=800&q=75",
    localImage: "/clinic/cupping.jpg",
  },
  {
    sanskrit: "अग्निकर्म",
    name: "Agnikarma",
    name_gu: "અગ્નિકર્મ",
    blurb:
      "Precise thermal cautery — a time-tested remedy for chronic joint & nerve pain.",
    blurb_gu:
      "ચોક્કસ થર્મલ દાગ — લાંબા સમયના સાંધા અને ચેતાના દુખાવા માટે સમય-પરીક્ષિત ઉપાય.",
    image:
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=75",
    localImage: "/clinic/agnikarma.jpg",
  },
  {
    sanskrit: "अभ्यंग",
    name: "Abhyanga",
    name_gu: "અભ્યંગ",
    blurb:
      "Warm medicated-oil full-body massage — deep relaxation and detoxification.",
    blurb_gu:
      "ગરમ ઔષધીય તેલથી આખા શરીરની માલિશ — ઊંડો આરામ અને શરીરની શુદ્ધિ.",
    image:
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=75",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  source: string;
};

// Verbatim quotes from the clinic's public Google reviews.
export const testimonials: Testimonial[] = [
  {
    quote:
      "I had a great experience at Sankalp Ayurveda Hospital. I consulted Dr. Ashish Prajapati for my skin treatment, and the results are amazing. There is a noticeable improvement in my skin condition. Thank you for the excellent care!",
    name: "Heena Desai",
    source: "Google Review",
  },
  {
    quote:
      "Nice clinic to cure many skin allergies and problems, and also good consultant for good health, and it is AYURVEDIC, means no side effects.",
    name: "Usha Oza",
    source: "Google Review",
  },
  {
    quote:
      "Very carring treatment and staff, doctor kindly respond to patients.. I really liked that....👍",
    name: "Prajapati Tejal",
    source: "Google Review",
  },
  {
    quote:
      "It’s a Very Good Experience. A must visit Place for Punch-Karma. Wonderful Experience.",
    name: "Daman Patel",
    source: "Google Review",
  },
  {
    quote: "Nice place for ayurvedic treatment.",
    name: "Patel Jay",
    source: "Google Review",
  },
  {
    quote: "Good place for ayurvedic treatment.",
    name: "Valmiki Jayesh",
    source: "Google Review",
  },
];

export const doctorTags = [
  "Skin & allergies",
  "Joint & spine (Vata)",
  "Kidney stone & piles",
  "Gynecology",
  "Suvarnaprashan",
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ===== Prakriti (dosha) quiz =====
export type Dosha = "vata" | "pitta" | "kapha";

export type QuizOption = { d: Dosha; label: string; gu: string };
export type QuizQuestion = { q: string; gu: string; options: QuizOption[] };

export const quizData: QuizQuestion[] = [
  {
    q: "Which best describes your body build?",
    gu: "તમારો શારીરિક બાંધો કેવો છે?",
    options: [
      { d: "vata", label: "Thin & light — I find it hard to gain weight", gu: "પાતળો ને હલકો — વજન વધારવું અઘરું" },
      { d: "pitta", label: "Medium & moderately muscular", gu: "મધ્યમ ને સપ્રમાણ સ્નાયુબદ્ધ" },
      { d: "kapha", label: "Broad & solid — I gain weight easily", gu: "પહોળો ને મજબૂત — વજન સહેલાઈથી વધે" },
    ],
  },
  {
    q: "How is your physical strength & stamina?",
    gu: "તમારી શારીરિક શક્તિ ને ટકાઉપણું કેવું છે?",
    options: [
      { d: "vata", label: "Low — I tire quickly, energy comes in bursts", gu: "ઓછું — જલદી થાકી જાઉં, શક્તિ ટૂંકમાં" },
      { d: "pitta", label: "Moderate — strong, but I overheat easily", gu: "મધ્યમ — મજબૂત, પણ જલદી ગરમ થઈ જાઉં" },
      { d: "kapha", label: "High — steady endurance and a strong build", gu: "વધારે — સ્થિર ટકાઉપણું ને મજબૂત બાંધો" },
    ],
  },
  {
    q: "How is your appetite and digestion?",
    gu: "તમારી ભૂખ ને પાચનશક્તિ કેવી છે?",
    options: [
      { d: "vata", label: "Irregular — variable hunger, gas or bloating", gu: "અનિયમિત — ભૂખ બદલાય, ગેસ કે પેટ ફૂલવું" },
      { d: "pitta", label: "Strong & sharp — I get irritable if a meal is late", gu: "તીવ્ર — જમવાનું મોડું થાય તો ચીડ ચઢે" },
      { d: "kapha", label: "Slow but steady — I can skip meals, feel heavy after", gu: "ધીમું પણ સ્થિર — જમ્યા પછી ભારે લાગે" },
    ],
  },
  {
    q: "How do you sleep?",
    gu: "તમારી ઊંઘ કેવી છે?",
    options: [
      { d: "vata", label: "Light & easily disturbed — I wake often", gu: "હલકી ને સહેલાઈથી ખલેલ — વારંવાર જાગું" },
      { d: "pitta", label: "Sound but short — I wake if it is too hot", gu: "ગાઢ પણ ટૂંકી — ગરમી લાગે તો જાગું" },
      { d: "kapha", label: "Deep & heavy & long — hard to wake up", gu: "ઊંડી ને ભારે ને લાંબી — ઉઠવું અઘરું" },
    ],
  },
  {
    q: "Your skin tends to be…",
    gu: "તમારી ચામડી સામાન્ય રીતે…",
    options: [
      { d: "vata", label: "Dry, rough and cool", gu: "સૂકી, ખરબચડી ને ઠંડી" },
      { d: "pitta", label: "Warm & sensitive — prone to rashes or acne", gu: "ગરમ ને સંવેદનશીલ — ફોલ્લી કે ખીલ" },
      { d: "kapha", label: "Oily, thick, smooth and cool", gu: "તૈલી, જાડી, લીસી ને ઠંડી" },
    ],
  },
  {
    q: "Which weather troubles you most?",
    gu: "કયું હવામાન તમને સૌથી વધુ નડે છે?",
    options: [
      { d: "vata", label: "Cold & dry — I feel cold very easily", gu: "ઠંડી ને સૂકી — જલદી ઠંડી લાગે" },
      { d: "pitta", label: "Heat & sun — I feel hot very easily", gu: "ગરમી ને તડકો — જલદી ગરમી લાગે" },
      { d: "kapha", label: "Damp & humid — I dislike heavy moisture", gu: "ભેજ ને બફારો — ભેજવાળું ન ગમે" },
    ],
  },
  {
    q: "Under stress, you tend to feel…",
    gu: "તણાવમાં તમે સામાન્ય રીતે…",
    options: [
      { d: "vata", label: "Anxious, worried and restless", gu: "ચિંતિત, બેચેન ને અસ્થિર" },
      { d: "pitta", label: "Irritable, frustrated or quick to anger", gu: "ચીડિયા, હતાશ કે જલદી ગુસ્સો" },
      { d: "kapha", label: "Withdrawn, heavy and unmotivated", gu: "મૌન, ભારે ને ઉત્સાહ વગરના" },
    ],
  },
  {
    q: "Your memory and mental pace…",
    gu: "તમારી યાદશક્તિ ને મનની ગતિ…",
    options: [
      { d: "vata", label: "Learn fast, forget fast — quick and restless mind", gu: "જલદી શીખું, જલદી ભૂલું — ચંચળ મન" },
      { d: "pitta", label: "Sharp, focused and well organised", gu: "તીક્ષ્ણ, એકાગ્ર ને વ્યવસ્થિત" },
      { d: "kapha", label: "Slow to learn but never forget — calm and steady", gu: "ધીમે શીખું પણ ભૂલું નહીં — શાંત ને સ્થિર" },
    ],
  },
];

export type DoshaInfo = {
  name: string;
  scripts: string;
  element: string;
  accent: string;
  blurb: string;
  aggravate: string;
  therapies: string[];
};

export const doshaInfo: Record<Dosha, DoshaInfo> = {
  vata: {
    name: "Vāta · Vāyu",
    scripts: "वात · વાયુ",
    element: "Air & Ether",
    accent: "#5C6B52",
    blurb:
      "Your nature is light, quick and creative. You move, think and act fast, with bursts of energy and an adaptable, imaginative mind.",
    aggravate:
      "When Vata rises you may face dryness, gas and constipation, joint and back pain, anxiety, and light, disturbed sleep. Warm, grounding routines steady you.",
    therapies: ["Abhyanga (warm oil massage)", "Basti", "Shirodhara", "Swedana"],
  },
  pitta: {
    name: "Pitta",
    scripts: "पित्त · પિત્ત",
    element: "Fire & Water",
    accent: "#B0894E",
    blurb:
      "Your nature is sharp, focused and strong. You have a powerful digestion, clear ambition and a determined, organised mind.",
    aggravate:
      "When Pitta rises you may face acidity and heartburn, inflammation, skin rashes or acne, excess heat, and irritability. Cooling, calming care restores balance.",
    therapies: ["Virechana", "Raktamokshana (blood purification)", "Cooling Shirodhara", "Nasya"],
  },
  kapha: {
    name: "Kapha",
    scripts: "कफ · કફ",
    element: "Earth & Water",
    accent: "#2E4034",
    blurb:
      "Your nature is steady, strong and calm. You have great stamina, a solid build, deep sleep and a patient, loving temperament.",
    aggravate:
      "When Kapha rises you may face heaviness and lethargy, congestion and cough, slow digestion, water retention and weight gain. Stimulating, lightening therapies energise you.",
    therapies: ["Nasya", "Swedana (herbal steam)", "Udvartana (herbal scrub)", "Herbal detox"],
  },
};

export const CONTACT = {
  phonePrimary: { display: "81601 30003", tel: "8160130003" },
  phoneSecondary: { display: "98241 22016", tel: "9824122016" },
  /** International format (country code, no +) for wa.me chat links. */
  whatsapp: "918160130003",
  email: "ap41899@gmail.com",
  address: ["Nr. Bus Stop, Upera Village", "Ta. Unjha, Dist. Mehsana", "Gujarat, India"],
  /** Single-line address, as listed on the clinic's Google Business profile. */
  addressInline: "Nr. Bus Stop, Upera, Ta. Unjha, Dist. Mehsana",
  hours: "Mon–Sat · 9:00 AM – 7:00 PM",
};

// ===== Treatments page: detailed therapy rows =====
export type TherapyDetail = {
  name: string;
  name_gu: string;
  sanskrit: string;
  image: string;
  desc: string;
  desc_gu: string;
  uses: string[];
  uses_gu: string[];
  localImage?: string;
};

export const therapyDetails: TherapyDetail[] = [
  {
    name: "Shirodhara",
    name_gu: "શિરોધારા",
    sanskrit: "शिरोधारा",
    image: "1556760544-74068565f05c",
    localImage: "/clinic/shirodhara.jpg",
    desc: "A continuous stream of medicated oil or liquid poured onto the forehead, by classical Ayurvedic method.",
    desc_gu: "શાસ્ત્રીય આયુર્વેદિક પદ્ધતિ દ્વારા કપાળ પર ઔષધીય તેલ કે પ્રવાહીનો સતત પ્રવાહ.",
    uses: ["Mental stress", "Insomnia", "Blood pressure", "Neurological disorders", "Hair fall & dandruff", "Better concentration"],
    uses_gu: ["માનસિક તણાવ", "અનિદ્રા", "બ્લડ પ્રેશર", "ન્યુરોલોજિકલ વિકારો", "વાળ ખરવા અને ખોડો", "એકાગ્રતામાં સુધારો"],
  },
  {
    name: "Nasya",
    name_gu: "નસ્ય",
    sanskrit: "नस्य",
    image: "1512290923902-8a9f81dc236c",
    desc: "Medicine administered through the nasal passage using herbs or medicated ghee/oil.",
    desc_gu: "જડીબુટ્ટી અથવા ઔષધીય ઘી/તેલ દ્વારા નાકના માર્ગે આપવામાં આવતી દવા.",
    uses: ["Frequent colds", "Allergies", "Headache & migraine", "Sinus pain", "Hair problems", "Facial pain / paralysis", "Hoarse voice"],
    uses_gu: ["વારંવાર શરદી", "એલર્જી", "માથાનો દુખાવો અને આધાશીશી", "સાઇનસ", "વાળની સમસ્યા", "ચહેરાનો દુખાવો / લકવો", "ઘોઘરો અવાજ"],
  },
  {
    name: "Basti",
    name_gu: "બસ્તિ",
    sanskrit: "बस्ति",
    image: "1602928321679-560bb453f190",
    localImage: "/clinic/basti.jpg",
    desc: "Medicated liquids or oils introduced through the rectum, tailored to disease and constitution.",
    desc_gu: "રોગ અને પ્રકૃતિ અનુસાર ગુદામાર્ગે ઔષધીય પ્રવાહી અથવા તેલ આપવામાં આવે છે.",
    uses: ["Constipation", "Lower-back pain", "Slipped disc", "Vata joint pains", "Headaches"],
    uses_gu: ["કબજિયાત", "કમરનો દુખાવો", "સ્લિપ ડિસ્ક", "વાત સાંધાના દુખાવા", "માથાનો દુખાવો"],
  },
  {
    name: "Kati Basti",
    name_gu: "કટિ બસ્તિ",
    sanskrit: "कटि बस्ति",
    image: "1608571423902-eed4a5ad8108",
    localImage: "/clinic/kati-basti.jpg",
    desc: "An external basti: warm medicated oil is held in a dough well built over the lower back and kept for 30–45 minutes, soaking deep into the lumbar tissues. (Kati = lower back, Basti = to retain.)",
    desc_gu: "બાહ્ય બસ્તિ: કમરના ભાગ પર લોટની દીવાલ બનાવી તેમાં ગરમ ઔષધીય તેલ 30–45 મિનિટ રાખવામાં આવે છે, જે ઊંડા સ્નાયુઓમાં ઊતરે છે.",
    uses: [
      "Chronic lower-back pain",
      "Sciatica (Gridhrasi)",
      "Slipped & degenerative disc",
      "Lumbar spondylosis",
      "Muscle stiffness & spasm",
      "Soothes nerves of back & legs",
    ],
    uses_gu: [
      "લાંબા સમયનો કમરનો દુખાવો",
      "સાયટિકા (ગૃધ્રસી)",
      "સ્લિપ અને ડિજનરેટિવ ડિસ્ક",
      "લમ્બર સ્પોન્ડિલોસિસ",
      "સ્નાયુની જકડન અને ખેંચાણ",
      "પગ અને કમરની ચેતાને આરામ",
    ],
  },
  {
    name: "Janu Basti",
    name_gu: "જાનુ બસ્તિ",
    sanskrit: "जानु बस्ति",
    image: "1519824145371-296894a0daa9",
    localImage: "/clinic/janu-basti.jpg",
    desc: "The same oil-pooling method applied over the knee joint — nourishing the joint and improving its natural lubrication. (Janu = knee.)",
    desc_gu: "ઘૂંટણના સાંધા પર તેલ ભરવાની એ જ પદ્ધતિ — સાંધાને પોષણ આપે છે અને કુદરતી લુબ્રિકેશન સુધારે છે.",
    uses: [
      "Knee osteoarthritis (Sandhigata Vata)",
      "Chronic knee pain",
      "Joint stiffness & swelling",
      "Restricted knee movement",
      "Cartilage & ligament care",
      "Post-injury recovery",
    ],
    uses_gu: [
      "ઘૂંટણનો સંધિવા (સંધિગત વાત)",
      "લાંબા સમયનો ઘૂંટણનો દુખાવો",
      "સાંધાની જકડન અને સોજો",
      "ઘૂંટણની મર્યાદિત હિલચાલ",
      "કાર્ટિલેજ અને લિગામેન્ટની સંભાળ",
      "ઈજા પછીનો રિકવરી",
    ],
  },
  {
    name: "Cupping Therapy",
    name_gu: "કપિંગ થેરાપી",
    sanskrit: "कपिंग",
    image: "1745327883389-17150e99dcf7",
    localImage: "/clinic/cupping.jpg",
    desc: "A vacuum created on the skin with special cups to draw out stagnation and ease pain.",
    desc_gu: "ખાસ કપ વડે ચામડી પર વેક્યુમ બનાવી રક્તસ્થિરતા દૂર કરવી અને દુખાવો ઓછો કરવો.",
    uses: ["Lower back & neck spine pain", "Muscle pain", "Eczema & fungal spots", "Facial wrinkles & loose skin"],
    uses_gu: ["કમર અને ગરદનનો દુખાવો", "સ્નાયુનો દુખાવો", "ખરજવું અને ફંગલ ડાઘ", "ચહેરાની કરચલીઓ અને ઢીલી ચામડી"],
  },
];

export const otherServices = [
  { name: "Agnikarma", name_gu: "અગ્નિકર્મ", blurb: "Thermal cautery for chronic joint & nerve pain.", blurb_gu: "લાંબા સમયના સાંધા અને ચેતાના દુખાવા માટે થર્મલ દાગ." },
  { name: "Abhyanga", name_gu: "અભ્યંગ", blurb: "Warm medicated-oil full-body massage.", blurb_gu: "ગરમ ઔષધીય તેલથી આખા શરીરની માલિશ." },
  { name: "Swedana", name_gu: "સ્વેદન", blurb: "Herbal steam therapy for detox & relief.", blurb_gu: "ડિટોક્સ અને રાહત માટે ઔષધીય વરાળ ચિકિત્સા." },
  { name: "Suvarnaprashan", name_gu: "સુવર્ણપ્રાશન", blurb: "Immunity & intellect drops for children.", blurb_gu: "બાળકો માટે રોગપ્રતિકારકતા અને બુદ્ધિના ટીપાં." },
];

// Options for the booking form's treatment select
export const bookingTreatmentOptions = [
  "Not sure — please advise",
  "Shirodhara",
  "Nasya",
  "Basti",
  "Cupping Therapy",
  "Agnikarma",
  "Abhyanga",
  "Skin / allergy care",
  "Joint & spine (Vata)",
  "Gynecology",
  "Suvarnaprashan (children)",
];
