import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import MobileMenu from "@/components/MobileMenu";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import JsonLd from "@/components/JsonLd";
import { therapyDetails, otherServices, slugify } from "@/lib/data";
import { serif, devanagari, gujarati } from "@/lib/fonts";
import { breadcrumbJsonLd, therapyCatalogJsonLd, OG_IMAGE } from "@/lib/seo";

const description =
  "Classical Panchakarma and specialised therapies at Sankalp Ayurved — Shirodhara, Nasya, Basti, Cupping, Agnikarma and more, each tailored to your constitution.";

export const metadata: Metadata = {
  title: "Treatments & Therapies",
  description,
  alternates: { canonical: "/treatments" },
  openGraph: {
    type: "website",
    url: "/treatments",
    title: "Treatments & Therapies at Sankalp Ayurved Clinic",
    description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treatments & Therapies at Sankalp Ayurved Clinic",
    description,
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Treatments & Therapies", path: "/treatments" },
]);

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={therapyCatalogJsonLd} />
      <Nav active="/treatments" />
      <MobileMenu />
      <main>
        <PageHero
          kicker="पञ्चकर्म चिकित्सा"
          title="Treatments & Therapies"
          subtitle="Classical Panchakarma and specialised therapies for old and stubborn ailments — each tailored to your constitution."
          image="/clinic/therapy-room.jpg"
          height="64vh"
          minHeight={460}
          overlay="linear-gradient(rgba(28,40,31,.55),rgba(28,40,31,.8))"
        />

        {/* Intro strip */}
        <section style={{ padding: "clamp(60px,9vh,110px) 6vw", textAlign: "center", background: "var(--cream)" }}>
          <div data-reveal style={{ maxWidth: "64ch", margin: "0 auto" }}>
            <div style={{ fontSize: 12, letterSpacing: ".28em", color: "var(--gold-brown)", marginBottom: 20 }}>
              FROM THE ROOTS OF AYURVEDA
            </div>
            <p
              style={{
                fontFamily: serif,
                fontStyle: "italic",
                fontSize: "clamp(24px,3.2vw,38px)",
                lineHeight: 1.4,
                color: "var(--green)",
                margin: 0,
              }}
            >
              Every therapy at Sankalp uses authentic, proven Ayurvedic medicines — administered by
              classical methods in a pure, natural setting.
            </p>
            <p
              style={{
                fontFamily: gujarati,
                fontSize: "clamp(16px,2vw,22px)",
                lineHeight: 1.5,
                color: "var(--sage)",
                margin: "16px 0 0",
              }}
            >
              સંકલ્પની દરેક ચિકિત્સામાં અસલ, પ્રમાણિત આયુર્વેદિક ઔષધો વપરાય છે — શુદ્ધ, કુદરતી વાતાવરણમાં શાસ્ત્રીય પદ્ધતિથી.
            </p>
          </div>
        </section>

        {/* Detailed therapy rows */}
        <section style={{ padding: "0 6vw clamp(70px,10vh,130px)" }}>
          {therapyDetails.map((t, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={t.name}
                id={slugify(t.name)}
                data-reveal
                className="therapy-row anchor-target"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "clamp(36px,5vw,80px)",
                  alignItems: "center",
                  padding: "clamp(48px,7vh,90px) 0",
                  borderBottom: i < therapyDetails.length - 1 ? "1px solid rgba(46,64,52,.12)" : undefined,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "clamp(320px,38vw,460px)",
                    borderRadius: 8,
                    overflow: "hidden",
                    boxShadow: "0 26px 60px -30px rgba(30,45,35,.5)",
                    order: flip ? 2 : 1,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: [
                        ...(t.localImage ? [`url('${t.localImage}')`] : []),
                        `url(https://images.unsplash.com/photo-${t.image}?auto=format&fit=crop&w=1000&q=80)`,
                      ].join(","),
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: "#3A5140",
                    }}
                  />
                </div>
                <div style={{ order: flip ? 1 : 2 }}>
                  <div style={{ fontFamily: devanagari, fontSize: 18, color: "var(--gold-deep)", marginBottom: 10 }}>
                    {t.sanskrit}
                  </div>
                  <h3
                    style={{
                      fontFamily: serif,
                      fontWeight: 500,
                      fontSize: "clamp(30px,3.6vw,46px)",
                      color: "var(--green)",
                      margin: 0,
                    }}
                  >
                    {t.name} <span style={{ fontFamily: gujarati, fontSize: "clamp(20px,2.4vw,30px)", opacity: 0.7 }}>/ {t.name_gu}</span>
                  </h3>
                  <p
                    style={{
                      fontWeight: 300,
                      fontSize: "clamp(15px,1.2vw,17px)",
                      lineHeight: 1.8,
                      color: "#4A5646",
                      maxWidth: "48ch",
                      margin: "18px 0 4px",
                    }}
                  >
                    {t.desc}
                  </p>
                  <p
                    style={{
                      fontFamily: gujarati,
                      fontWeight: 300,
                      fontSize: "clamp(14px,1.1vw,16px)",
                      lineHeight: 1.7,
                      color: "#6B7A65",
                      maxWidth: "48ch",
                      margin: "0 0 22px",
                    }}
                  >
                    {t.desc_gu}
                  </p>
                  <div style={{ fontSize: 11, letterSpacing: ".2em", color: "var(--sage)", marginBottom: 6 }}>
                    INDICATED FOR / ઉપયોગી
                  </div>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, columns: 2, columnGap: 32 }}>
                    {t.uses.map((u, j) => (
                      <li
                        key={u}
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 10,
                          fontWeight: 300,
                          fontSize: 15,
                          color: "#4A5646",
                          padding: "6px 0",
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "var(--gold-deep)",
                            flex: "0 0 auto",
                            position: "relative",
                            top: -2,
                          }}
                        />
                        <span>
                          {u} <span style={{ fontFamily: gujarati, fontSize: 13, color: "#6B7A65" }}>/ {t.uses_gu[j]}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </section>

        {/* Other services */}
        <section style={{ padding: "clamp(70px,10vh,130px) 6vw", background: "var(--green)", color: "var(--cream)" }}>
          <div data-reveal style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, letterSpacing: ".28em", color: "var(--gold)", marginBottom: 18 }}>
              ALSO OFFERED
            </div>
            <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: "clamp(30px,4vw,50px)", margin: 0 }}>
              Specialised care &amp; wellness
            </h2>
            <p style={{ fontFamily: gujarati, fontSize: "clamp(16px,1.8vw,20px)", color: "var(--gold)", margin: "8px 0 0", opacity: 0.8 }}>
              વિશેષ સંભાળ અને સ્વાસ્થ્ય
            </p>
          </div>
          <div className="grid-4">
            {otherServices.map((s) => (
              <div
                key={s.name}
                id={slugify(s.name)}
                data-reveal
                className="anchor-target"
                style={{ border: "1px solid rgba(216,199,154,.25)", borderRadius: 8, padding: 28 }}
              >
                <div style={{ fontFamily: serif, fontSize: 24, marginBottom: 4 }}>
                  {s.name} <span style={{ fontFamily: gujarati, fontSize: 18, opacity: 0.7 }}>/ {s.name_gu}</span>
                </div>
                <p style={{ fontWeight: 300, fontSize: 14, lineHeight: 1.6, opacity: 0.82, margin: "4px 0 0" }}>
                  {s.blurb}
                </p>
                <p style={{ fontFamily: gujarati, fontWeight: 300, fontSize: 13, lineHeight: 1.5, opacity: 0.6, margin: "2px 0 0" }}>
                  {s.blurb_gu}
                </p>
              </div>
            ))}
          </div>
          <div
            data-reveal
            style={{
              marginTop: 44,
              textAlign: "center",
              fontFamily: "var(--font-mukta-vaani), sans-serif",
              fontSize: 15,
              color: "var(--gold)",
            }}
          >
            રક્તમોક્ષણ · કિડની સ્ટોન · મસા · ચામડીના રોગ · સ્ત્રીરોગ
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "clamp(80px,12vh,140px) 6vw", textAlign: "center", background: "var(--cream-2)" }}>
          <div data-reveal>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 500,
                fontSize: "clamp(32px,4.4vw,54px)",
                color: "var(--green)",
                margin: 0,
              }}
            >
              Not sure which therapy suits you?
            </h2>
            <p
              style={{
                fontWeight: 300,
                fontSize: "clamp(16px,1.3vw,18px)",
                color: "#54513F",
                maxWidth: "48ch",
                margin: "20px auto 0",
              }}
            >
              Dr. Ashish will assess your constitution and recommend the right treatment path.
            </p>
            <p
              style={{
                fontFamily: gujarati,
                fontWeight: 300,
                fontSize: "clamp(14px,1.1vw,16px)",
                color: "#7A7760",
                maxWidth: "48ch",
                margin: "8px auto 0",
              }}
            >
              ડૉ. આશિષ તમારી પ્રકૃતિનું મૂલ્યાંકન કરશે અને યોગ્ય ચિકિત્સા માર્ગ સૂચવશે.
            </p>
            <Link
              href="/booking"
              style={{
                display: "inline-block",
                marginTop: 34,
                background: "var(--green)",
                color: "var(--cream)",
                fontWeight: 600,
                fontSize: 15,
                padding: "16px 36px",
                borderRadius: 999,
              }}
            >
              Book a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
