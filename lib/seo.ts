import { CONTACT, therapyDetails, otherServices } from "./data";

/**
 * Canonical origin for every absolute URL the site emits (canonicals, sitemap,
 * Open Graph, JSON-LD). Override with NEXT_PUBLIC_SITE_URL when the custom
 * domain goes live — nothing else needs to change.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sankalpayurveda-weld.vercel.app"
).replace(/\/+$/, "");

export const SITE_NAME = "Sankalp Ayurved Clinic";

export const SITE_DESCRIPTION =
  "Authentic Panchakarma therapies in a pure, natural setting — rooted in 5,000 years of Ayurvedic wisdom, at Sankalp Ayurved Clinic, Upera, Ta. Unjha, Dist. Mehsana. Consult Dr. Ashish J. Prajapati (B.A.M.S).";

export const OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Sankalp Ayurved Clinic, Upera — Unjha, Gujarat",
};

const MAPS_URL = "https://maps.google.com/?q=Upera%20Unjha%20Mehsana%20Gujarat";

const CLINIC_ID = `${SITE_URL}/#clinic`;
const DOCTOR_ID = `${SITE_URL}/#doctor`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Site-wide knowledge graph: the clinic (a LocalBusiness/MedicalClinic), the
 * physician, and the website, cross-referenced by @id. Rendered once in the
 * root layout. Review/rating markup is deliberately omitted: the testimonials
 * are Google reviews, and Google's guidelines exclude third-party and
 * self-serving LocalBusiness reviews from rich results.
 */
export const siteGraphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": CLINIC_ID,
      name: SITE_NAME,
      alternateName: "संकल्प आयुर्वेद",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/og.jpg`,
      logo: `${SITE_URL}/icon.svg`,
      telephone: `+91${CONTACT.phonePrimary.tel}`,
      email: CONTACT.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nr. Bus Stop, Upera Village",
        addressLocality: "Unjha",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      hasMap: MAPS_URL,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      currenciesAccepted: "INR",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: `+91${CONTACT.phonePrimary.tel}`,
          contactType: "appointments",
          availableLanguage: ["Gujarati", "Hindi", "English"],
        },
        {
          "@type": "ContactPoint",
          telephone: `+91${CONTACT.phoneSecondary.tel}`,
          contactType: "appointments",
          url: `https://wa.me/${CONTACT.whatsapp}`,
          availableLanguage: ["Gujarati", "Hindi", "English"],
        },
      ],
      founder: { "@id": DOCTOR_ID },
      employee: { "@id": DOCTOR_ID },
      availableService: [
        ...therapyDetails.map((t) => ({
          "@type": "MedicalTherapy",
          name: t.name,
          alternateName: t.sanskrit,
          description: t.desc,
        })),
        ...otherServices.map((s) => ({
          "@type": "MedicalTherapy",
          name: s.name,
          description: s.blurb,
        })),
      ],
    },
    {
      "@type": "Physician",
      "@id": DOCTOR_ID,
      name: "Dr. Ashish J. Prajapati",
      honorificPrefix: "Dr.",
      honorificSuffix: "B.A.M.S",
      jobTitle: "Ayurveda Physician",
      description:
        "Ayurveda physician (B.A.M.S, reg. GB-I 14594) practising classical Panchakarma at Sankalp Ayurved Clinic, Unjha.",
      url: `${SITE_URL}/about`,
      worksFor: { "@id": CLINIC_ID },
      knowsLanguage: ["Gujarati", "Hindi", "English"],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en",
      publisher: { "@id": CLINIC_ID },
    },
  ],
};

/** BreadcrumbList for a subpage; items run from the home page to the current page. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Detailed therapy catalog for the treatments page. */
export const therapyCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Treatments & Therapies at Sankalp Ayurved Clinic",
  itemListElement: therapyDetails.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "MedicalTherapy",
      name: t.name,
      alternateName: t.sanskrit,
      description: t.desc,
      url: `${SITE_URL}/treatments`,
      relevantSpecialty: { "@type": "MedicalSpecialty", name: "Ayurveda" },
      provider: { "@id": CLINIC_ID },
    },
  })),
};
