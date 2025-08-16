import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ShieldCheck, Rocket, Headset } from "lucide-react";
import SEO from "@/components/seo/SEO";
import { lazy, Suspense } from "react";
const AnimatedNodes = lazy(() => import("@/components/hero/AnimatedNodes"));
import Counter from "@/components/ui/counter";
// import ServicesSection from "@/components/sections/ServicesSection";
// import AboutSection from "@/components/sections/AboutSection";
// import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import Reveal from "@/components/ui/reveal";
import Services from "./Services";
import About from "./About";
import NotFound from "./NotFound";
import Contact from "./Contact";
import CaseStudies from "./CaseStudies";
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
            <Reveal delayMs={200} durationMs={1600}>
              <h1 className="font-heading text-4xl font-semibold md:text-6xl">
                Transforming Ideas into <span className="text-gradient-brand">Intelligent Digital Solutions</span>
              </h1>
            </Reveal>
            <Reveal delayMs={400} durationMs={1600}>
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
            <Reveal key={i} delayMs={i * 180} durationMs={1600}>
              <Card className="group h-full cursor-pointer overflow-hidden border border-border/50 bg-gradient-to-br from-white/50 to-white/20 dark:from-white/10 dark:to-white/5 backdrop-blur-sm shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/30 hover:bg-gradient-to-br hover:from-white/60 hover:to-white/30 dark:hover:from-white/20 dark:hover:to-white/10">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <Icon className="relative z-10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-primary/80" />
                  </div>
                  <h3 className="font-medium text-lg text-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-105">{title}</h3>
                  <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground/80">{desc}</p>
                  <div className="mt-auto">
                    <div className="h-1 w-0 bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 group-hover:w-full" />
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <Services  />
      {/* <Section id="about" /> */}
      <About  />
      <CaseStudies />

      <section className="container mx-auto py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <Reveal durationMs={1400}>
          <div className="group cursor-pointer rounded-lg border border-border/50 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/30 dark:to-blue-900/20 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-gradient-to-br hover:from-blue-50/70 hover:to-blue-100/50 dark:hover:from-blue-950/50 dark:hover:to-blue-900/40">
            <div className="font-heading text-3xl text-blue-600 transition-all duration-300 group-hover:scale-110">
              <Counter value={500} suffix="+" />
            </div>
            <div className="mt-1 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-blue-600/80">AI-enabled projects</div>
          </div>
          </Reveal>
          <Reveal delayMs={160} durationMs={1400}>
          <div className="group cursor-pointer rounded-lg border border-border/50 bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/30 dark:to-green-900/20 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 hover:border-green-500/30 hover:bg-gradient-to-br hover:from-green-50/70 hover:to-green-100/50 dark:hover:from-green-950/50 dark:hover:to-green-900/40">
            <div className="font-heading text-3xl text-green-600 transition-all duration-300 group-hover:scale-110">
              <Counter value={1200} suffix="+" />
            </div>
            <div className="mt-1 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-green-600/80">Fintech integrations</div>
          </div>
          </Reveal>
          <Reveal delayMs={320} durationMs={1400}>
          <div className="group cursor-pointer rounded-lg border border-border/50 bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/30 dark:to-purple-900/20 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 hover:border-purple-500/30 hover:bg-gradient-to-br hover:from-purple-50/70 hover:to-purple-100/50 dark:hover:from-purple-950/50 dark:hover:to-purple-900/40">
            <div className="font-heading text-3xl text-purple-600 transition-all duration-300 group-hover:scale-110">
              <Counter value={600} suffix="+" />
            </div>
            <div className="mt-1 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-purple-600/80">Satisfied clients</div>
          </div>
          </Reveal>
          <Reveal delayMs={480} durationMs={1400}>
          <div className="group cursor-pointer rounded-lg border border-border/50 bg-gradient-to-br from-orange-50/50 to-orange-100/30 dark:from-orange-950/30 dark:to-orange-900/20 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 hover:border-orange-500/30 hover:bg-gradient-to-br hover:from-orange-50/70 hover:to-orange-100/50 dark:hover:from-orange-950/50 dark:hover:to-orange-900/40">
            <div className="font-heading text-3xl text-orange-600 transition-all duration-300 group-hover:scale-110">
              <Counter value={50} suffix="%" />
            </div>
            <div className="mt-1 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-orange-600/80">Faster delivery with AI</div>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-16">
        <h2 className="font-heading text-2xl md:text-3xl">What clients say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            '“WaapTech\'s AI payment safeguard reduced fraud and improved throughput.” — KIKPAY Solution',
            '“Recommendation engine boosted sales and improved customer retention.” — PAYNIDI PRO',
            '“Professional team, fast delivery, excellent post-launch support.” — AZZUNIQUE',
          ].map((t, i) => (
            <Reveal key={i} delayMs={i * 220} durationMs={1200}>
              <blockquote className="group cursor-pointer rounded-lg border border-border/50 bg-gradient-to-br from-white/60 to-white/30 dark:from-white/20 dark:to-white/10 p-6 text-sm text-muted-foreground shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/30 hover:bg-gradient-to-br hover:from-white/80 hover:to-white/50 dark:hover:from-white/30 dark:hover:to-white/20">
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-2xl text-primary/20 transition-all duration-300 group-hover:scale-125 group-hover:text-primary/40">"</div>
                  <span className="relative z-10 transition-all duration-300 group-hover:text-foreground/90">{t}</span>
                  <div className="absolute -bottom-2 -right-2 text-2xl text-primary/20 transition-all duration-300 group-hover:scale-125 group-hover:text-primary/40">"</div>
                </div>
                <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-primary/60 to-primary/30 transition-all duration-500 group-hover:w-full" />
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
