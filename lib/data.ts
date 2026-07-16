// Static content for the Sankalp home page.

export type Treatment = {
  sanskrit: string;
  name: string;
  blurb: string;
  image: string;
  /** Optional clinic photo in public/clinic/. Shown on top of `image` when the
   *  file exists; falls back to `image` if it's missing (no broken image). */
  localImage?: string;
};

// Modest, authentic Ayurvedic imagery (herbs, medicated oils, vessels, clothed
// clinical shots) — no bare-body stock. To use the clinic's own photos, drop
// files into public/clinic/ and point `image` at e.g. "/clinic/therapy-room.jpg".
export const treatments: Treatment[] = [
  {
    sanskrit: "शिरोधारा",
    name: "Shirodhara",
    blurb:
      "A steady stream of warm medicated oil on the forehead — for stress, insomnia & mental clarity.",
    image:
      "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=75",
    localImage: "/clinic/therapy-room.jpg",
  },
  {
    sanskrit: "नस्य",
    name: "Nasya",
    blurb:
      "Herbal medication through the nasal passage — for sinus, migraine, allergies & hair problems.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=75",
  },
  {
    sanskrit: "बस्ति",
    name: "Basti",
    blurb:
      "Medicated enema therapy — for constipation, lower-back pain, slipped disc & Vata disorders.",
    image:
      "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=75",
  },
  {
    sanskrit: "कपिंग",
    name: "Cupping Therapy",
    blurb:
      "Vacuum-cup therapy — for spine & muscle pain, eczema and skin conditions.",
    image:
      "https://images.unsplash.com/photo-1611072172377-0cabc3addb30?auto=format&fit=crop&w=800&q=75",
  },
  {
    sanskrit: "अग्निकर्म",
    name: "Agnikarma",
    blurb:
      "Precise thermal cautery — a time-tested remedy for chronic joint & nerve pain.",
    image:
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=75",
  },
  {
    sanskrit: "अभ्यंग",
    name: "Abhyanga & Swedana",
    blurb:
      "Warm-oil massage & herbal steam — deep relaxation and detoxification.",
    image:
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=75",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  place: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "After years of back pain, the cupping and Basti therapy gave me relief no medicine ever did.",
    name: "Rameshbhai P.",
    place: "Unjha",
  },
  {
    quote:
      "My migraine attacks reduced dramatically after Nasya treatment. Truly grateful to Dr. Ashish.",
    name: "Nita Patel",
    place: "Visnagar",
  },
  {
    quote:
      "Shirodhara helped my sleep and anxiety like nothing else. A calm, caring clinic.",
    name: "Kiran Shah",
    place: "Sidhpur",
  },
  {
    quote:
      "My son's immunity improved with Suvarnaprashan. We travel from Patan every month.",
    name: "Bhavna Prajapati",
    place: "Patan",
  },
  {
    quote:
      "A chronic skin allergy cleared up within weeks. Genuine, honest Ayurvedic care.",
    name: "Mahesh Chaudhary",
    place: "Mehsana",
  },
  {
    quote:
      "Joint pain that troubled me for years is finally manageable. I recommend Sankalp to everyone.",
    name: "Savita Ben",
    place: "Vadnagar",
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
  phonePrimary: { display: "98241 22016", tel: "9824122016" },
  phoneSecondary: { display: "81601 30003", tel: "8160130003" },
  email: "ap41899@gmail.com",
  address: ["Nr. Bus Stop, Upera Village", "Ta. Unjha, Dist. Mehsana", "Gujarat, India"],
  /** Single-line address, as listed on the clinic's Google Business profile. */
  addressInline: "Nr. Bus Stop, Upera, Ta. Unjha, Dist. Mehsana",
  hours: "Mon–Sat · 9:00 AM – 7:00 PM",
};

// ===== Treatments page: detailed therapy rows =====
export type TherapyDetail = {
  name: string;
  sanskrit: string;
  image: string; // unsplash photo id
  desc: string;
  uses: string[];
  localImage?: string; // optional clinic photo (public/clinic/), with `image` as fallback
};

export const therapyDetails: TherapyDetail[] = [
  {
    name: "Shirodhara",
    sanskrit: "शिरोधारा",
    image: "1556760544-74068565f05c",
    localImage: "/clinic/therapy-room.jpg",
    desc: "A continuous stream of medicated oil or liquid poured onto the forehead, by classical Ayurvedic method.",
    uses: ["Mental stress", "Insomnia", "Blood pressure", "Neurological disorders", "Hair fall & dandruff", "Better concentration"],
  },
  {
    name: "Nasya",
    sanskrit: "नस्य",
    image: "1512290923902-8a9f81dc236c",
    desc: "Medicine administered through the nasal passage using herbs or medicated ghee/oil.",
    uses: ["Frequent colds", "Allergies", "Headache & migraine", "Sinus pain", "Hair problems", "Facial pain / paralysis", "Hoarse voice"],
  },
  {
    name: "Basti",
    sanskrit: "बस्ति",
    image: "1602928321679-560bb453f190",
    desc: "Medicated liquids or oils introduced through the rectum, tailored to disease and constitution.",
    uses: ["Constipation", "Lower-back pain", "Slipped disc", "Vata joint pains", "Headaches"],
  },
  {
    name: "Cupping Therapy",
    sanskrit: "कपिंग",
    image: "1611072172377-0cabc3addb30",
    desc: "A vacuum created on the skin with special cups to draw out stagnation and ease pain.",
    uses: ["Lower back & neck spine pain", "Muscle pain", "Eczema & fungal spots", "Facial wrinkles & loose skin"],
  },
];

export const otherServices = [
  { name: "Agnikarma", blurb: "Thermal cautery for chronic joint & nerve pain." },
  { name: "Abhyanga", blurb: "Warm medicated-oil full-body massage." },
  { name: "Swedana", blurb: "Herbal steam therapy for detox & relief." },
  { name: "Suvarnaprashan", blurb: "Immunity & intellect drops for children." },
];

// Options for the booking form's treatment select
export const bookingTreatmentOptions = [
  "Not sure — please advise",
  "Shirodhara",
  "Nasya",
  "Basti",
  "Cupping Therapy",
  "Agnikarma",
  "Abhyanga & Swedana",
  "Skin / allergy care",
  "Joint & spine (Vata)",
  "Gynecology",
  "Suvarnaprashan (children)",
];
