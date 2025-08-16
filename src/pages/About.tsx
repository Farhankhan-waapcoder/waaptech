import SEO from "@/components/seo/SEO";
import Reveal from "@/components/ui/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  PenTool,
  Code,
  CloudUpload,
  TrendingUp,
  Users,
  Target,
  Eye,
  ShieldCheck,
  Zap,
} from "lucide-react";

const coreValues = [
  { Icon: Users, text: "Customer-first engineering" },
  { Icon: ShieldCheck, text: "Ethical AI & data privacy" },
  { Icon: Zap, text: "Continuous innovation" },
  { Icon: Users, text: "Transparent delivery and support" },
];

const processSteps = [
  { Icon: Search, title: "Discover", desc: "requirements, stakeholders, feasibility" },
  { Icon: PenTool, title: "Design", desc: "UX, architecture, prototype" },
  { Icon: Code, title: "Build", desc: "agile sprints, automated testing" },
  { Icon: CloudUpload, title: "Deploy", desc: "CI/CD, MLOps, secure rollout" },
  { Icon: TrendingUp, title: "Optimize", desc: "analytics, A/B testing, model retraining" },
];

const About = () => {
  return (
    <main>
      <SEO
        title="About WaapTech — Intelligent Digital Solutions"
        description="WaapTech is an AI-first technology company based in Lucknow delivering secure, scalable and impactful products."
        path="/about"
      />

      <section className="container mx-auto py-12 md:py-16">
        <Reveal delayMs={120} durationMs={900}>
          <h1 className="font-heading text-3xl md:text-4xl">
            From Code to Intelligence — We Build Smarter Digital Futures
          </h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            WaapTech is an AI-first technology company based in Lucknow, India. We combine deep engineering expertise with modern AI capabilities to build products that are secure, scalable and impactful.
          </p>
        </Reveal>
      </section>

      <section className="container mx-auto grid gap-6 py-8 md:grid-cols-2">
        <Reveal delayMs={160} durationMs={1000}>
          <Card className="group transform-gpu transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
            <CardContent className="p-6 flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-heading text-2xl text-foreground">Mission</h2>
                <p className="mt-2 text-muted-foreground">To empower businesses with intelligent, automated and future-ready digital solutions.</p>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delayMs={320} durationMs={1000}>
          <Card className="group transform-gpu transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
            <CardContent className="p-6 flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Eye className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-heading text-2xl text-foreground">Vision</h2>
                <p className="mt-2 text-muted-foreground">To be the trusted AI technology partner for enterprises and startups across the globe.</p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <section className="container mx-auto py-8">
        <h2 className="font-heading text-2xl">Core Values</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {coreValues.map((v, i) => {
            const Icon = v.Icon;
            return (
              <Reveal key={i} delayMs={i * 120} durationMs={900}>
                <Card className="group transform-gpu transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="text-foreground">{v.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h2 className="font-heading text-2xl">Our Process</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-5">
          {processSteps.map((s, i) => {
            const Icon = s.Icon;
            return (
              <Reveal key={s.title} delayMs={i * 100} durationMs={900}>
                <Card className="group transform-gpu transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-4 text-sm flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                    <div>
                      <strong className="block mb-1 text-foreground">{s.title}</strong>
                      <span className="text-muted-foreground">{s.desc}</span>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto py-8">
        <Reveal delayMs={200} durationMs={900}>
          <Card className="group transform-gpu transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
            <CardContent className="p-6 flex gap-4 items-start">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-heading text-2xl text-foreground">Team & Capabilities</h2>
                <p className="mt-2 max-w-3xl text-muted-foreground">
                  A team of product managers, AI/ML engineers, backend & frontend developers, QA, DevOps and UX designers — backed by fintech and payments domain experts.
                </p>

                <div className="mt-6">
                  <a href="/contact" aria-label="Contact WaapTech">
                    <Button className="transform transition duration-300 hover:-translate-y-1">
                      Let's talk about your project
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </main>
  );
};

export default About;
