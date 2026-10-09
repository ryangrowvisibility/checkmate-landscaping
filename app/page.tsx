import Reveal from "./Reveal";

const PHONE_DISPLAY = "(519) 732-6885";
const PHONE_TEL = "tel:+15197326885";
const PHONE_SMS = "sms:+15197326885";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=CheckMate%20Landscaping&query_place_id=ChIJWbPn4Nl-XIkRK9aTyMfPkKM";

const AREAS = ["Brantford", "Brant County", "Surrounding communities"];

type IconName =
  | "phone" | "star" | "check" | "clock" | "pin" | "mower" | "sprout" | "roll" | "patio" | "snow" | "building"
  | "message" | "user" | "zap" | "eye" | "plus" | "arrow" | "quote";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.85,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "phone":
      return <svg {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>;
    case "star":
      return <svg {...p} fill="currentColor" stroke="none"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" /></svg>;
    case "check":
      return <svg {...p}><path d="M20 6 9 17l-5-5" /></svg>;
    case "clock":
      return <svg {...p}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
    case "pin":
      return <svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    case "mower":
      return <svg {...p}><path d="M3 21h18" /><path d="M6 21v-3M10 21v-5M14 21v-4M18 21v-6" /><path d="M4 18c1-4 3-6 4-7M12 16c0-3 1-6 3-8M16 17c1-3 3-5 5-6" /></svg>;
    case "sprout":
      return <svg {...p}><path d="M12 21V11" /><path d="M12 11c0-4-3-6-7-6 0 4 3 6 7 6z" /><path d="M12 13c0-3 2.5-5 6-5 0 3-2.5 5-6 5z" /></svg>;
    case "roll":
      return <svg {...p}><ellipse cx="7" cy="12" rx="3" ry="6" /><path d="M7 6h12v12H7" /><path d="M10 9h9M10 12h9M10 15h9" /></svg>;
    case "patio":
      return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h7v12M10 9V3M10 15h11M15 15V3M15 9h6" /></svg>;
    case "snow":
      return <svg {...p}><path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9" /></svg>;
    case "building":
      return <svg {...p}><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></svg>;
    case "message":
      return <svg {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
    case "user":
      return <svg {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>;
    case "zap":
      return <svg {...p}><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>;
    case "eye":
      return <svg {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>;
    case "plus":
      return <svg {...p}><path d="M12 5v14M5 12h14" /></svg>;
    case "arrow":
      return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "quote":
      return <svg {...p} fill="currentColor" stroke="none"><path d="M9.5 6C6.5 6.8 4 9.5 4 13.5V18h6v-6H7c0-2 1.2-3.6 3-4.2zM19.5 6c-3 .8-5.5 3.5-5.5 7.5V18h6v-6h-3c0-2 1.2-3.6 3-4.2z" /></svg>;
  }
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" className={className} />
      ))}
    </span>
  );
}

const SERVICES: { icon: IconName; title: string; body: string; tag?: string }[] = [
  {
    icon: "mower",
    title: "Lawn Care",
    body: "Regular lawn maintenance for Brantford homes: mowing, trimming and a tidy finish on every visit. Set it up once and stop worrying about the yard for the season.",
    tag: "Most requested",
  },
  {
    icon: "sprout",
    title: "Aeration & Fertilizing",
    body: "Seasonal core aeration and fertilizer applications that let water and nutrients reach the roots. It is the simplest way to get a thicker, greener lawn that holds up through summer.",
  },
  {
    icon: "roll",
    title: "Sod Installation",
    body: "Fresh sod for new builds or lawns that are too thin to save. We prepare the ground properly before laying it, so the new grass roots in instead of drying out at the seams.",
  },
  {
    icon: "patio",
    title: "Patio Design & Installation",
    body: "Patios planned around how you actually use your backyard, then built to last. Call or text for a free quote and Easton will come out to talk through the layout with you.",
  },
  {
    icon: "snow",
    title: "Snow Removal",
    body: "Winter snow clearing so you are not shovelling before work. Customers describe the service as very reliable and responsive when the snow keeps coming.",
  },
  {
    icon: "building",
    title: "Commercial Properties",
    body: "Lawn care and property maintenance for business owners too. One customer trusts Easton with both his home and his business properties.",
  },
];

const REVIEWS = [
  {
    name: "Chris",
    job: "Home and business properties",
    text: "Easton did outstanding work at my home and at my businesses. He is professional, punctual and careful with every detail.",
    featured: true,
  },
  { name: "Lisa D.", job: "Winter snow removal", text: "We hired Easton for snow removal and could not be happier. Very reliable and very responsive." },
  { name: "Jim B.", job: "Landscaping", text: "Thrilled with the work. His attention to the small details made the whole result stellar." },
  { name: "Stevie K.", job: "Lawn care", text: "Very responsive and reliable." },
  { name: "Stephen H.", job: "Lawn service", text: "Top-notch service. Highly recommended." },
];

const STEPS = [
  { title: "Call or text", body: "Reach Easton at (519) 732-6885. A quick text with your address and what you need is perfect." },
  { title: "Free quote", body: "Easton looks at the property and gives you a clear price, with no cost and no pressure." },
  { title: "We get to work", body: "Lawn visits go on a regular schedule. Sod and patio jobs get a start date you can plan around." },
  { title: "Check the details", body: "Before we leave, we walk the job and make sure the edges, cleanup and finish are right." },
];

const FAQS = [
  {
    q: "Are quotes really free?",
    a: "Yes. Call or text (519) 732-6885 and Easton will give you a free quote for lawn care, sod, patios or snow removal.",
  },
  {
    q: "What areas do you serve?",
    a: "Brantford and the surrounding area. If you are nearby and not sure whether you are in range, send a text with your address and we will let you know.",
  },
  {
    q: "Do you work with businesses as well as homeowners?",
    a: "Yes. We look after commercial properties too, and some customers use us for both their home and their business.",
  },
  {
    q: "Do you offer snow removal in the winter?",
    a: "Yes. Our snow removal customers specifically mention how reliable and responsive the service is. It is worth getting on the list before the first big storm.",
  },
  {
    q: "When is the best time to aerate or lay sod?",
    a: "Spring and early fall are usually best for aeration, fertilizing and new sod because the ground is cool and moist. Call and we will suggest timing for your lawn.",
  },
  {
    q: "Can I text instead of calling?",
    a: "Absolutely. Texting is often the fastest way to reach us while we are on a job. Send your name, address and what you need, and we will get back to you.",
  },
  {
    q: "What time do you start?",
    a: "We open at 8 a.m. Calls and texts that come in while we are working get answered as soon as we can.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "CheckMate Landscaping",
  description:
    "Lawn care, aeration, fertilizing, sod installation, patio design and installation, snow removal and commercial property maintenance in Brantford, Ontario.",
  telephone: "+1-519-732-6885",
  address: { "@type": "PostalAddress", addressLocality: "Brantford", addressRegion: "ON", addressCountry: "CA" },
  areaServed: [{ "@type": "City", name: "Brantford" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "6" },
  founder: { "@type": "Person", name: "Easton" },
  sameAs: [MAPS_URL],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping services",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
  },
};

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="CheckMate Landscaping, back to top">
      <span className={`grid h-10 w-10 place-items-center rounded-full ${light ? "bg-white text-brand-deep" : "bg-brand text-white"}`} aria-hidden="true">
        <Icon name="check" className="h-6 w-6" />
      </span>
      <span className={`font-heading text-[1.3rem] font-extrabold leading-none tracking-tight ${light ? "text-white" : "text-brand-deep"}`}>
        CheckMate<span className={light ? "text-white/75" : "text-brand"}> Landscaping</span>
      </span>
    </a>
  );
}

export default function Home() {
  const featured = REVIEWS.find((r) => r.featured)!;
  const rest = REVIEWS.filter((r) => !r.featured);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-6">
          <Wordmark />
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold text-muted lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About Easton</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={PHONE_TEL} className="hidden items-center gap-2 font-heading text-lg font-bold text-brand-deep hover:text-brand md:flex">
              <Icon name="phone" className="h-5 w-5 text-brand" /> {PHONE_DISPLAY}
            </a>
            <a href={PHONE_TEL} className="btn hidden h-12 items-center rounded-full bg-cta px-6 font-bold text-cta-ink hover:bg-cta-hover md:inline-flex">
              Free Quote
            </a>
            <a href={PHONE_TEL} aria-label={`Call CheckMate Landscaping at ${PHONE_DISPLAY}`} className="btn grid h-11 w-11 place-items-center rounded-full bg-cta text-cta-ink md:hidden">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-12 md:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="hero-in">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-cta/35 px-4 py-1.5 font-semibold text-brand-deep">
                <Icon name="message" className="h-4 w-4" /> Call or text today for your free quote
              </p>
              <h1 className="text-[clamp(2.3rem,5.2vw,3.75rem)] text-brand-deep">
                Lawn Care, Sod &amp; Patios in Brantford, Ontario
              </h1>
              <p className="mt-5 max-w-[56ch] text-lg text-muted md:text-xl">
                Mowing, aeration, fertilizing, new sod, custom patios and winter snow removal for homes and businesses. Easton handles your property himself and sweats the small details.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={PHONE_TEL} className="btn inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-cta px-7 text-lg font-bold text-cta-ink shadow-[0_10px_24px_-12px_oklch(0.6_0.16_80/0.9)] hover:bg-cta-hover">
                  <Icon name="phone" className="h-5 w-5" /> Call {PHONE_DISPLAY}
                </a>
                <a href={PHONE_SMS} className="btn inline-flex h-14 items-center justify-center gap-2.5 rounded-full border-2 border-brand-deep bg-white px-7 text-lg font-bold text-brand-deep hover:bg-brand-soft">
                  <Icon name="message" className="h-5 w-5" /> Text Easton
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-semibold">
                <span className="flex items-center gap-2"><Stars /> 5.0</span>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline decoration-brand/40 underline-offset-4 hover:text-brand">6 Google reviews</a>
                <span className="flex items-center gap-1.5"><Icon name="check" className="h-5 w-5 text-brand" /> Free quotes</span>
                <span className="flex items-center gap-1.5"><Icon name="check" className="h-5 w-5 text-brand" /> Homes &amp; businesses</span>
              </div>
            </div>

            <div className="hero-in [animation-delay:100ms]">
              <div className="rounded-3xl bg-brand-deep p-7 text-white md:p-8">
                <p className="font-heading text-xl font-bold">Quick facts</p>
                <ul className="mt-5 space-y-4">
                  {[
                    { icon: "user" as IconName, t: "Owner-operated", s: "Easton does the work and answers the phone" },
                    { icon: "clock" as IconName, t: "Opens 8 a.m.", s: "Calls and texts answered as soon as we can" },
                    { icon: "pin" as IconName, t: "Brantford & area", s: "Residential and commercial properties" },
                    { icon: "snow" as IconName, t: "Year-round", s: "Lawn and patios in summer, snow in winter" },
                  ].map((f) => (
                    <li key={f.t} className="flex gap-3.5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/12 text-cta">
                        <Icon name={f.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-bold">{f.t}</span>
                        <span className="block text-[0.98rem] text-white/80">{f.s}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl bg-white/10 p-5">
                  <Stars className="h-4 w-4" />
                  <p className="mt-2 text-[1.02rem]">&ldquo;Professional, punctual and careful with every detail.&rdquo;</p>
                  <p className="mt-1.5 text-[0.95rem] text-white/75">Chris, home and business properties</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why Brantford trusts CheckMate" className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, top: "5.0 Google rating", sub: "Every review is five stars" },
              { icon: "message" as IconName, top: "Free quotes", sub: "Call or text, no obligation" },
              { icon: "eye" as IconName, top: "Detail-focused", sub: "The thing customers mention most" },
              { icon: "zap" as IconName, top: "Responsive", sub: "Reliable replies, even in a storm" },
            ].map((t) => (
              <div key={t.top} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading font-bold leading-tight text-brand-deep">{t.top}</p>
                  <p className="text-[0.95rem] text-muted">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Reveal className="max-w-[60ch]">
              <p className="font-semibold text-brand">Services</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.7rem)] text-brand-deep">Everything your yard needs, all year</h2>
              <p className="mt-4 text-muted">
                From weekly lawn care to a brand-new patio, one local crew covers the whole property. When the grass stops growing, the same team keeps your driveway clear of snow.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title}>
                  <article className={`card flex h-full flex-col rounded-3xl p-7 ${i === 0 ? "bg-brand-soft ring-2 ring-brand" : "bg-surface ring-1 ring-line"}`}>
                    <div className="flex items-center justify-between">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${i === 0 ? "bg-brand text-white" : "bg-brand-soft text-brand"}`}>
                        <Icon name={s.icon} />
                      </span>
                      {s.tag && <span className="rounded-full bg-cta px-3 py-1 text-sm font-bold text-cta-ink">{s.tag}</span>}
                    </div>
                    <h3 className="mt-5 text-[1.35rem] text-brand-deep">{s.title}</h3>
                    <p className="mt-3 flex-1 text-[1.02rem] text-muted">{s.body}</p>
                    <a href={PHONE_TEL} className="mt-5 inline-flex items-center gap-2 font-bold text-brand hover:text-brand-deep">
                      Call about this <Icon name="arrow" className="h-4 w-4" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-warm py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-semibold text-brand">Reviews</p>
                <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.7rem)] text-brand-deep">Rated 5.0 from 6 Google reviews</h2>
                <p className="mt-3 max-w-[58ch] text-muted">
                  Every review so far is five stars. Customers keep coming back to the same three things: Easton is reliable, he answers quickly, and he notices the small details other crews miss.
                </p>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn inline-flex h-12 shrink-0 items-center gap-2 rounded-full border-2 border-brand-deep bg-white px-6 font-bold text-brand-deep hover:bg-brand-soft">
                Read all reviews on Google <Icon name="arrow" className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal className="mt-12">
              <figure className="grid gap-6 rounded-3xl bg-brand p-8 text-white md:grid-cols-[auto_1fr] md:p-10">
                <Icon name="quote" className="h-12 w-12 text-cta" />
                <div>
                  <blockquote className="font-heading text-[clamp(1.35rem,2.4vw,1.8rem)] font-bold leading-snug">
                    &ldquo;{featured.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 flex flex-wrap items-center gap-3 text-white/85">
                    <Stars className="h-4 w-4" /> <span className="font-semibold text-white">{featured.name}</span> · {featured.job} · Google review
                  </figcaption>
                </div>
              </figure>
            </Reveal>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {rest.map((r) => (
                <Reveal key={r.name}>
                  <figure className="card flex h-full flex-col rounded-3xl bg-surface p-6 ring-1 ring-line">
                    <Stars className="h-[18px] w-[18px]" />
                    <blockquote className="mt-3 flex-1 text-[1.04rem] text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                    <figcaption className="mt-4 border-t border-line pt-3">
                      <span className="block font-bold text-brand-deep">{r.name}</span>
                      <span className="block text-[0.92rem] text-muted">{r.job}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <p className="font-semibold text-brand">About Easton</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.7rem)] text-brand-deep">A Brantford landscaper who checks the details twice</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>
                  CheckMate Landscaping is Easton&apos;s business. He looks after lawns, lays sod, designs and builds patios, and clears snow for homeowners and business owners across Brantford and the surrounding area.
                </p>
                <p>
                  The name says it plainly: before a job is called finished, it gets checked. Customers notice. Jim said it was the attention to the small details that made his result stellar, and Chris trusts Easton with his home and his businesses because he is careful with every one of them.
                </p>
                <p>
                  When you call or text, you reach Easton directly. There is no office to go through and no waiting a week to hear back, which is why reviewers keep using the same two words: reliable and responsive.
                </p>
              </div>
            </Reveal>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "eye" as IconName, t: "Small details, done right", b: "Clean edges, tidy cleanup and the finishing touches that make the whole yard look better." },
                { icon: "clock" as IconName, t: "On time", b: "Punctual is one of the first words customers use to describe Easton." },
                { icon: "zap" as IconName, t: "Quick replies", b: "Call or text and hear back fast, including in the middle of a snowstorm." },
                { icon: "building" as IconName, t: "Homes and businesses", b: "The same care on a front lawn or a commercial property." },
              ].map((d) => (
                <Reveal key={d.t}>
                  <div className="h-full rounded-3xl bg-tint p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-white">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-[1.15rem] text-brand-deep">{d.t}</h3>
                    <p className="mt-2 text-[1rem] text-muted">{d.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-brand-soft py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Reveal className="max-w-[60ch]">
              <p className="font-semibold text-brand">How it works</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.7rem)] text-brand-deep">Getting a quote takes one text</h2>
            </Reveal>
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <Reveal key={s.title}>
                  <li className="relative h-full rounded-3xl bg-surface p-6 ring-1 ring-line">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-cta font-heading text-lg font-extrabold text-cta-ink">{i + 1}</span>
                    <h3 className="mt-4 text-[1.2rem] text-brand-deep">{s.title}</h3>
                    <p className="mt-2 text-[1rem] text-muted">{s.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <Reveal>
              <p className="font-semibold text-brand">Service area</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.7rem)] text-brand-deep">Serving Brantford and the surrounding area</h2>
              <p className="mt-4 text-muted">
                We are based in Brantford and work across the city and nearby communities. Not sure if you are in range? Text your address to {PHONE_DISPLAY} and we will tell you right away.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {AREAS.map((a, i) => (
                  <li key={a} className={`flex items-center gap-1.5 rounded-full px-4 py-2 font-semibold ${i === 0 ? "bg-brand text-white" : "bg-tint text-brand-deep"}`}>
                    <Icon name="pin" className="h-4 w-4" /> {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-3xl ring-1 ring-line">
                <iframe
                  title="Map of Brantford, Ontario"
                  src="https://maps.google.com/maps?q=Brantford%2C%20Ontario&z=11&output=embed"
                  className="h-[360px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <Reveal>
              <p className="font-semibold text-brand">FAQ</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.7rem)] text-brand-deep">Good questions to ask a landscaper</h2>
            </Reveal>
            <div className="mt-10 space-y-3">
              {FAQS.map((f) => (
                <details key={f.q} className="rounded-3xl bg-surface ring-1 ring-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-heading text-[1.15rem] font-bold text-brand-deep">
                    {f.q}
                    <span className="chev grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                      <Icon name="plus" className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6 md:py-20">
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)]">Ready for a better yard? Call or text Easton at {PHONE_DISPLAY}</h2>
              <p className="mt-3 text-lg text-white/80">Free quotes on lawn care, sod, patios and snow removal. We open at 8 a.m.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a href={PHONE_TEL} className="btn inline-flex h-16 items-center gap-3 rounded-full bg-cta px-8 text-xl font-bold text-cta-ink hover:bg-cta-hover">
                <Icon name="phone" className="h-6 w-6" /> Call Now
              </a>
              <a href={PHONE_SMS} className="btn inline-flex h-16 items-center gap-3 rounded-full border-2 border-white/70 px-8 text-xl font-bold text-white hover:bg-white/10">
                <Icon name="message" className="h-6 w-6" /> Text
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <Wordmark />
            <p className="mt-4 max-w-[46ch] text-[1rem] text-muted">
              Lawn care, aeration, fertilizing, sod, patios, snow removal and commercial property maintenance in Brantford, Ontario.
            </p>
          </div>
          <div>
            <h3 className="text-lg text-brand-deep">Contact</h3>
            <ul className="mt-3 space-y-2 text-[1rem] text-muted">
              <li><a href={PHONE_TEL} className="font-bold text-ink hover:text-brand">{PHONE_DISPLAY}</a></li>
              <li><a href={PHONE_SMS} className="hover:text-brand">Text for a free quote</a></li>
              <li>Opens 8 a.m.</li>
              <li>Brantford, Ontario</li>
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google Maps</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-brand-deep">Services</h3>
            <ul className="mt-3 space-y-2 text-[1rem] text-muted">
              {SERVICES.map((s) => <li key={s.title}>{s.title}</li>)}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1200px] border-t border-line px-5 pt-6 text-[0.92rem] text-muted md:px-6">
          © {new Date().getFullYear()} CheckMate Landscaping · Brantford, Ontario
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
        <a href={PHONE_TEL} className="btn flex h-12 items-center justify-center gap-2 rounded-full bg-cta font-bold text-cta-ink">
          <Icon name="phone" className="h-5 w-5" /> Call
        </a>
        <a href={PHONE_SMS} className="btn flex h-12 items-center justify-center gap-2 rounded-full border-2 border-brand-deep font-bold text-brand-deep">
          <Icon name="message" className="h-5 w-5" /> Text
        </a>
      </div>
    </>
  );
}
