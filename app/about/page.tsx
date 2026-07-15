import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import MobileMenu from "@/components/MobileMenu";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import DoctorPortrait from "@/components/DoctorPortrait";
import { serif, devanagari, gujarati } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "About the Clinic · Sankalp Ayurved",
  description:
    "Sankalp Ayurved Clinic — a treatment center for pure, natural healing led by Dr. Ashish J. Prajapati (B.A.M.S), treating old and stubborn diseases with classical Panchakarma.",
};

const values = [
  {
    sanskrit: "शुद्धि",
    title: "Purity",
    body: "Authentic medicines and classical methods, with no shortcuts — in a calm, clean setting.",
  },
  {
    sanskrit: "करुणा",
    title: "Compassion",
    body: "Patient-first care. Time taken to listen, understand, and treat the whole person.",
  },
  {
    sanskrit: "परम्परा",
    title: "Tradition",
    body: "5,000 years of Ayurvedic wisdom, applied with modern hygiene and diligence.",
  },
];

const specialties = [
  { title: "Panchakarma", sub: "Shirodhara · Nasya · Basti" },
  { title: "Pain care", sub: "Cupping · Agnikarma" },
  { title: "Skin & hair", sub: "Allergies · Hair fall" },
  { title: "Women & children", sub: "Gynecology · Suvarnaprashan" },
];

export default function AboutPage() {
  return (
    <>
      <Nav active="/about" />
      <MobileMenu />
      <main>
        <PageHero
          kicker="आयुर्वेदः अमृतानाम्"
          title="About the Clinic"
          image="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1700&q=80"
          height="60vh"
          minHeight={440}
        />

        {/* Story */}
        <section
          className="split split-doctor"
          style={{
            padding: "clamp(70px,11vh,140px) 6vw",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
          }}
        >
          <div data-reveal>
            <div style={{ fontSize: 12, letterSpacing: ".28em", color: "var(--gold-brown)", marginBottom: 22 }}>
              OUR PHILOSOPHY
            </div>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 500,
                fontSize: "clamp(32px,4.2vw,54px)",
                lineHeight: 1.1,
                color: "var(--green)",
                margin: 0,
              }}
            >
              A treatment center for pure, natural healing
            </h2>
            <p
              style={{
                fontWeight: 300,
                fontSize: "clamp(16px,1.3vw,18px)",
                lineHeight: 1.8,
                color: "#4A5646",
                maxWidth: "52ch",
                margin: "24px 0 0",
              }}
            >
              Sankalp Ayurved Clinic was founded on a simple conviction — that the body heals best
              when treated with authentic, proven Ayurvedic medicines in a pure and natural
              environment. We care for old and stubborn diseases that often resist conventional
              approaches, using classical Panchakarma therapies passed down through millennia.
            </p>
            <p
              style={{
                fontWeight: 300,
                fontSize: "clamp(16px,1.3vw,18px)",
                lineHeight: 1.8,
                color: "#4A5646",
                maxWidth: "52ch",
                margin: "18px 0 0",
              }}
            >
              Every patient is assessed individually. Treatment is guided by your unique constitution
              — never one-size-fits-all.
            </p>
            <div style={{ fontFamily: gujarati, fontSize: 16, color: "var(--sage)", marginTop: 26 }}>
              શુદ્ધ અને પ્રાકૃતિક વાતાવરણમાં પ્રમાણિત આયુર્વેદિક સારવાર
            </div>
          </div>
          <div
            data-reveal
            style={{
              position: "relative",
              height: "clamp(380px,44vw,560px)",
              borderRadius: "200px 200px 8px 8px",
              overflow: "hidden",
              boxShadow: "0 30px 70px -30px rgba(30,45,35,.5)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                // Clinic photo when present in public/clinic/, else the stock image.
                backgroundImage:
                  "url('/clinic/consultation.jpg'), url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#3A5140",
              }}
            />
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: "clamp(70px,10vh,130px) 6vw", background: "var(--green)", color: "var(--cream)" }}>
          <div className="grid-3-plain">
            {values.map((v) => (
              <div key={v.title} data-reveal>
                <div style={{ fontFamily: devanagari, fontSize: 22, color: "var(--gold)", marginBottom: 14 }}>
                  {v.sanskrit}
                </div>
                <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: 28, margin: "0 0 12px" }}>{v.title}</h3>
                <p style={{ fontWeight: 300, fontSize: 15, lineHeight: 1.7, opacity: 0.85, margin: 0 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Doctor */}
        <section
          className="split split-doctor"
          style={{ padding: "clamp(70px,11vh,140px) 6vw", background: "var(--cream-2)" }}
        >
          <div data-reveal style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                height: "clamp(400px,46vw,560px)",
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 30px 70px -30px rgba(60,50,20,.45)",
                background: "#3A5140",
              }}
            >
              {/* Shows public/clinic/doctor.jpg; falls back to a placeholder if absent. */}
              <DoctorPortrait />
            </div>
          </div>
          <div data-reveal>
            <div style={{ fontSize: 12, letterSpacing: ".28em", color: "var(--gold-brown)", marginBottom: 20 }}>
              YOUR PHYSICIAN
            </div>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 500,
                fontSize: "clamp(34px,4.2vw,54px)",
                color: "var(--green)",
                margin: 0,
              }}
            >
              Dr. Ashish J. Prajapati
            </h2>
            <div style={{ fontSize: 14, letterSpacing: ".06em", color: "var(--gold-deep)", marginTop: 10 }}>
              B.A.M.S · GB-I 14594 · Ayurveda Physician
            </div>
            <p
              style={{
                fontWeight: 300,
                fontSize: "clamp(16px,1.3vw,18px)",
                lineHeight: 1.8,
                color: "#54513F",
                maxWidth: "50ch",
                margin: "24px 0 0",
              }}
            >
              A qualified Ayurveda physician dedicated to reviving classical treatment for today&apos;s
              ailments. Dr. Prajapati specialises in Panchakarma, pain management, skin &amp; allergic
              conditions, and women&apos;s health — combining precise diagnosis with warm, unhurried
              care.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 34, maxWidth: 520 }}>
              {specialties.map((s) => (
                <div
                  key={s.title}
                  style={{ background: "var(--cream)", border: "1px solid #D9CFAE", borderRadius: 8, padding: 18 }}
                >
                  <div style={{ fontFamily: serif, fontSize: 20, color: "var(--green)" }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: "var(--sage)" }}>{s.sub}</div>
                </div>
              ))}
            </div>
            <Link
              href="/booking"
              style={{
                display: "inline-block",
                marginTop: 36,
                background: "var(--green)",
                color: "var(--cream)",
                fontWeight: 600,
                fontSize: 15,
                padding: "15px 32px",
                borderRadius: 999,
              }}
            >
              Book with Dr. Ashish
            </Link>
          </div>
        </section>

        {/* Shloka band */}
        <section style={{ padding: "clamp(80px,12vh,150px) 6vw", textAlign: "center", background: "var(--cream)" }}>
          <div data-reveal style={{ maxWidth: "56ch", margin: "0 auto" }}>
            <div style={{ fontFamily: devanagari, fontSize: "clamp(22px,3vw,36px)", lineHeight: 1.5, color: "var(--green)" }}>
              सर्वे भवन्तु सुखिनः
              <br />
              सर्वे सन्तु निरामयाः
            </div>
            <p
              style={{
                fontFamily: serif,
                fontStyle: "italic",
                fontSize: "clamp(18px,1.8vw,24px)",
                color: "var(--sage)",
                margin: "24px 0 0",
              }}
            >
              May all be happy, may all be free from illness.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
