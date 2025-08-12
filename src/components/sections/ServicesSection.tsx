import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import aiDevImg from "@/assets/services/ai-dev.jpg";
import ecommerceImg from "@/assets/services/ecommerce.jpg";
import fintechImg from "@/assets/services/fintech.jpg";
import mobileImg from "@/assets/services/mobile.jpg";
import mlopsImg from "@/assets/services/mlops.jpg";
import aiSolutionsImg from "@/assets/services/ai-solutions.jpg";

type Service = {
  title: string;
  bullets: string[];
  img: string;
  alt: string;
  description?: string;
  note?: string;
  cta?: string;
};

const services: Service[] = [
  {
    title: "A. AI-Enabled Software Development",
    description: "Custom applications with embedded AI for automation, prediction, and intelligent workflows.",
    bullets: [
      "Conversational AI & Chatbots (support, sales, onboarding)",
      "Predictive analytics & forecasting",
      "Automated document processing (OCR + NLP)",
      "Intelligent workflow automation (RPA + ML)",
    ],
    cta: "Schedule a Technical Discovery",
    img: aiDevImg,
    alt: "AI-enabled software development illustration with neural nodes",
  },
  {
    title: "B. AI-Powered Web & E-commerce",
    description:
      "Modern e-commerce and portal development with personalization, recommendation engines, and smart search.",
    bullets: [
      "Product recommendation engine",
      "AI search & autosuggest",
      "Dynamic content personalization",
      "AI-driven SEO improvements",
    ],
    cta: "Build My AI Store",
    img: ecommerceImg,
    alt: "AI-powered e-commerce illustration with product grids and search",
  },
  {
    title: "C. Fintech & Payments (AI-Enhanced)",
    description:
      "Secure, compliant financial products with real-time monitoring and fraud prevention.",
    bullets: [
      "Recharge API (mobile/DTH/data)",
      "BBPS bill payments integration",
      "AePS (Aadhaar Enabled Payments)",
      "DMT (IMPS/NEFT/UPI-ready flows)",
      "PayIn / PayOut solutions and settlement automation",
    ],
    note:
      "AI advantages: anomaly detection, KYC automation, risk scoring, real-time fraud alerts",
    cta: "Discuss Fintech Integration",
    img: fintechImg,
    alt: "Fintech and payments illustration with secure transaction motifs",
  },
  {
    title: "D. Mobile App Development (iOS / Android / Flutter)",
    description:
      "Mobile products with AI personalization, voice assistants, and offline intelligence.",
    bullets: [
      "Personalized user journeys",
      "Push automation driven by ML",
      "In-app chatbots & voice control",
    ],
    cta: "Start My App Project",
    img: mobileImg,
    alt: "Mobile app development illustration with smartphones and voice waveforms",
  },
  {
    title: "E. Cloud, DevOps & MLOps",
    description:
      "Cloud-first deployments with CI/CD, scalable ML pipelines, model monitoring and governance.",
    bullets: [
      "Model deployment & monitoring (MLOps)",
      "Scalable cloud infra (AWS / GCP / Azure)",
      "Containerization & orchestration (Docker, Kubernetes)",
      "Cost optimization & autoscaling",
    ],
    cta: "Cloud & MLOps Consultation",
    img: mlopsImg,
    alt: "Cloud, DevOps and MLOps illustration with pipeline nodes",
  },
  {
    title: "F. AI Solutions — Specialized",
    bullets: [
      "Conversational AI: Multi-language chatbots with intent-based flows",
      "Computer Vision: Document extraction, image classification, surveillance analytics",
      "Predictive Analytics: Churn prediction, demand forecasting, credit-risk models",
      "RPA + AI: Automate repetitive tasks with intelligent bots",
      "Custom ML Models: Tailored models for niche business problems",
    ],
    img: aiSolutionsImg,
    alt: "Specialized AI solutions illustration with NLP and vision motifs",
  },
];

type Props = { id?: string };

const ServicesSection = ({ id }: Props) => (
  <section id={id} className="scroll-mt-24 container mx-auto py-12 md:py-16">
    <h2 className="font-heading text-3xl md:text-4xl">AI-Enabled Services</h2>
    <p className="mt-3 max-w-2xl text-muted-foreground">
      At WaapTech we deliver full-stack digital solutions — now powered with Artificial Intelligence. From idea to production, our services combine modern engineering with proven AI models to create measurable business outcomes.
    </p>

    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-2">
      {services.map((svc) => (
        <article key={svc.title} className="group">
          <Card className="h-full overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img
                src={svc.img}
                alt={svc.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </AspectRatio>
            <CardHeader>
              <CardTitle className="font-heading text-xl">{svc.title}</CardTitle>
              {svc.description ? (
                <CardDescription>{svc.description}</CardDescription>
              ) : null}
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {svc.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {svc.note ? (
                <p className="mt-3 text-xs text-muted-foreground">{svc.note}</p>
              ) : null}
            </CardContent>
            {svc.cta ? (
              <CardFooter>
                <Button variant="gradient" asChild aria-label={`${svc.title} — Contact`}>
                  <a href="/contact">{svc.cta}</a>
                </Button>
              </CardFooter>
            ) : null}
          </Card>
        </article>
      ))}
    </div>
  </section>
);

export default ServicesSection;


