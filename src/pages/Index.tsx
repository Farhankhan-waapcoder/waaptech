import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ShieldCheck, Rocket, Headset } from "lucide-react";
import SEO from "@/components/seo/SEO";
import { lazy, Suspense } from "react";
const AnimatedNodes = lazy(() => import("@/components/hero/AnimatedNodes"));
import Counter from "@/components/ui/counter";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import Reveal from "@/components/ui/reveal";

const Index = () => {
  const orgStructured = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WaapTech',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    logo: '/favicon.ico',
    sameAs: [
      'https://www.linkedin.com/',
      'https://twitter.com/',
      'https://facebook.com/',
      'https://instagram.com/'
    ]
  };

  return (
    <div>
      <SEO
        title="WaapTech — AI-Powered Web, Mobile & Fintech Solutions"
        description="WaapTech builds AI-enabled web, mobile and fintech platforms with secure payment integrations, predictive analytics and conversational AI. Get a free consultation."
        structuredData={orgStructured}
      />

      <section className="relative overflow-hidden smooth">
        <div className="container mx-auto grid gap-6 py-20 md:grid-cols-2 md:py-28">
          <div className="relative z-10 space-y-6">
            <Reveal durationMs={1600}>
              <h1 className="font-heading text-4xl font-semibold md:text-6xl">
                Transforming Ideas into <span className="text-gradient-brand">Intelligent Digital Solutions</span>
              </h1>
            </Reveal>
            <Reveal delayMs={200} durationMs={1600}>
              <p className="text-lg text-muted-foreground md:text-xl">
                WaapTech builds AI-enabled web, mobile and fintech platforms that automate workflows, reduce risk, and accelerate growth.
              </p>
            </Reveal>
            <Reveal delayMs={400} durationMs={1600}>
              <div className="flex flex-wrap gap-3">
                <a href="/contact"><Button variant="hero" size="lg">Get a Free Consultation →</Button></a>
                <a href="#services"><Button variant="outline" size="lg">Explore Services →</Button></a>
              </div>
            </Reveal>
          </div>
          <div className="relative">
            <Suspense fallback={<div className="absolute inset-0" />}> 
              <AnimatedNodes />
            </Suspense>
            <div className="mx-auto h-72 w-72 rounded-full bg-gradient-brand blur-2xl opacity-30 md:h-96 md:w-96" />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { Icon: Brain, title: 'AI-first engineering', desc: 'Faster, smarter digital experiences.' },
            { Icon: ShieldCheck, title: 'Secure fintech', desc: 'BBPS, DMT, AePS, Payments with fraud defense.' },
            { Icon: Rocket, title: 'Built to scale', desc: 'Web & mobile engineered for growth.' },
            { Icon: Headset, title: '24/7 support', desc: 'Human + AI-assisted managed services.' },
          ].map(({Icon, title, desc}, i) => (
            <Reveal key={i} delayMs={i * 180} durationMs={1200}>
              <Card className="h-full card-hover">
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <Icon className="text-primary" />
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <ServicesSection id="services" />
      <AboutSection id="about" />
      <CaseStudiesSection id="case-studies" />

      <section className="container mx-auto py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <Reveal durationMs={1400}>
          <div className="rounded-lg border bg-card p-6 text-center shadow-sm card-hover">
            <div className="font-heading text-3xl">
              <Counter value={500} suffix="+" />
            </div>
            <div className="mt-1 text-sm text-muted-foreground">AI-enabled projects</div>
          </div>
          </Reveal>
          <Reveal delayMs={160} durationMs={1400}>
          <div className="rounded-lg border bg-card p-6 text-center shadow-sm card-hover">
            <div className="font-heading text-3xl">
              <Counter value={1200} suffix="+" />
            </div>
            <div className="mt-1 text-sm text-muted-foreground">Fintech integrations</div>
          </div>
          </Reveal>
          <Reveal delayMs={320} durationMs={1400}>
          <div className="rounded-lg border bg-card p-6 text-center shadow-sm card-hover">
            <div className="font-heading text-3xl">
              <Counter value={600} suffix="+" />
            </div>
            <div className="mt-1 text-sm text-muted-foreground">Satisfied clients</div>
          </div>
          </Reveal>
          <Reveal delayMs={480} durationMs={1400}>
          <div className="rounded-lg border bg-card p-6 text-center shadow-sm card-hover">
            <div className="font-heading text-3xl">
              <Counter value={50} suffix="%" />
            </div>
            <div className="mt-1 text-sm text-muted-foreground">Faster delivery with AI</div>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-16">
        <h2 className="font-heading text-2xl md:text-3xl">What clients say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            '“WaapTech’s AI payment safeguard reduced fraud and improved throughput.” — KIKPAY Solution',
            '“Recommendation engine boosted sales and improved customer retention.” — PAYNIDI PRO',
            '“Professional team, fast delivery, excellent post-launch support.” — AZZUNIQUE',
          ].map((t, i) => (
            <Reveal key={i} delayMs={i * 220} durationMs={1200}>
              <blockquote className="rounded-lg border bg-card p-6 text-sm text-muted-foreground card-hover">
                {t}
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
