import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ShieldCheck, Rocket, Headset } from "lucide-react";
import SEO from "@/components/seo/SEO";
import AnimatedNodes from "@/components/hero/AnimatedNodes";

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

      <section className="relative overflow-hidden">
        <div className="container mx-auto grid gap-6 py-20 md:grid-cols-2 md:py-28">
          <div className="relative z-10 space-y-6">
            <h1 className="font-heading text-4xl font-semibold md:text-6xl animate-enter">
              Transforming Ideas into <span className="text-gradient-brand">Intelligent Digital Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              WaapTech builds AI-enabled web, mobile and fintech platforms that automate workflows, reduce risk, and accelerate growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/contact"><Button variant="hero" size="lg">Get a Free Consultation →</Button></a>
              <a href="/services"><Button variant="outline" size="lg">Explore Services →</Button></a>
            </div>
          </div>
          <div className="relative">
            <AnimatedNodes />
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
            <Card key={i} className="h-full">
              <CardContent className="flex h-full flex-col gap-3 p-6">
                <Icon className="text-primary" />
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { stat: '500+', label: 'AI-enabled projects' },
            { stat: '1,200+', label: 'Fintech integrations' },
            { stat: '600+', label: 'Satisfied clients' },
            { stat: '50%', label: 'Faster delivery with AI' },
          ].map((s, i) => (
            <div key={i} className="rounded-lg border bg-card p-6 text-center shadow-sm">
              <div className="font-heading text-3xl">{s.stat}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
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
            <blockquote key={i} className="rounded-lg border bg-card p-6 text-sm text-muted-foreground">
              {t}
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
