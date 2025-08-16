import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Reveal from "@/components/ui/reveal";
import { 
  Brain, 
  ShieldCheck, 
  Rocket, 
  Headset, 
  ShoppingCart, 
  CreditCard,
  Smartphone,
  Cloud,
  Bot,
  Eye,
  TrendingUp,
  Zap,
  Globe,
  Database,
  Lock,
  BarChart3,
  MessageSquare,
  FileText,
  Cpu,
  Network
} from "lucide-react";

const Services = () => {
  type Service = {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    icon: React.ComponentType<any>;
    gradient: string;
    cta: string;
    delay: number;
  };

  const services: Service[] = [
    {
             title: "AI-Enabled Software Development",
      subtitle: "Intelligent Applications",
      description: "Custom applications with embedded AI for automation, prediction, and intelligent workflows that transform business processes.",
      features: [
        "Conversational AI & Chatbots",
        "Predictive Analytics & Forecasting",
        "Document Processing (OCR + NLP)",
        "Intelligent Workflow Automation"
      ],
      icon: Brain,
      gradient: "from-blue-500/20 to-purple-500/20",
      cta: "Start AI Project",
      delay: 0
    },
    {
             title: "AI-Powered E-commerce",
      subtitle: "Smart Shopping Experience",
      description: "Modern e-commerce platforms with personalization, recommendation engines, and intelligent search that boost conversions.",
      features: [
        "Product Recommendation Engine",
        "AI Search & Autosuggest",
        "Dynamic Content Personalization",
        "AI-Driven SEO Optimization"
      ],
      icon: ShoppingCart,
      gradient: "from-green-500/20 to-emerald-500/20",
      cta: "Build AI Store",
      delay: 100
    },
    {
      title: "Fintech & Payments",
      subtitle: "Secure Financial Solutions",
      description: "Secure, compliant financial products with real-time monitoring, fraud prevention, and seamless payment integrations.",
      features: [
        "Recharge API Integration",
        "BBPS Bill Payments",
        "AePS & DMT Solutions",
        "AI Fraud Detection"
      ],
      icon: CreditCard,
      gradient: "from-orange-500/20 to-red-500/20",
      cta: "Discuss Fintech",
      delay: 200
    },
    {
      title: "Mobile App Development",
      subtitle: "Native & Cross-Platform",
      description: "Mobile products with AI personalization, voice assistants, and offline intelligence for iOS, Android, and Flutter.",
      features: [
        "Personalized User Journeys",
        "ML-Powered Push Automation",
        "In-App Chatbots & Voice Control",
        "Offline AI Capabilities"
      ],
      icon: Smartphone,
      gradient: "from-purple-500/20 to-pink-500/20",
      cta: "Start App Project",
      delay: 300
    },
    {
      title: "Cloud & MLOps",
      subtitle: "Scalable AI Infrastructure",
      description: "Cloud-first deployments with CI/CD, scalable ML pipelines, model monitoring and governance for production AI.",
      features: [
        "Model Deployment & Monitoring",
        "Scalable Cloud Infrastructure",
        "Containerization & Orchestration",
        "Cost Optimization & Auto-scaling"
      ],
      icon: Cloud,
      gradient: "from-indigo-500/20 to-blue-500/20",
      cta: "Cloud Consultation",
      delay: 400
    },
    {
      title: "Specialized AI Solutions",
      subtitle: "Custom AI Models",
      description: "Tailored AI solutions for specific business problems including computer vision, NLP, and predictive analytics.",
      features: [
        "Multi-language Chatbots",
        "Computer Vision & Analytics",
        "Predictive Business Models",
        "Custom ML Model Development"
      ],
      icon: Bot,
      gradient: "from-teal-500/20 to-cyan-500/20",
      cta: "AI Consultation",
      delay: 500
    }
  ];

  return (
    <main className="min-h-screen">
      <SEO
        title="AI Services — AI Development, Fintech, E-commerce | WaapTech"
        description="AI-first software development, e-commerce recommendation engines, fintech integrations and MLOps. WaapTech helps businesses scale with intelligent products."
        path="/services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container mx-auto text-center">
          <Reveal delayMs={400} durationMs={1600}>
            <h1 className="font-heading text-4xl font-bold md:text-6xl lg:text-7xl mb-6">
              AI-Powered
              <span className="block text-gradient-brand">Digital Services</span>
            </h1>
          </Reveal>
          <Reveal delayMs={400} durationMs={1600}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transform your business with intelligent solutions that automate workflows, 
              enhance customer experiences, and drive measurable growth through AI innovation.
            </p>
          </Reveal>
          <Reveal delayMs={400} durationMs={1600}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Get Free Consultation →
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Case Studies →
              </Button>
            </div>
          </Reveal>
        </div>
        
                 {/* Background Elements */}
         <div className="absolute inset-0 -z-10">
           <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full blur-3xl" />
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-purple-500/5 rounded-full blur-3xl" />
         </div>
       </section>

      {/* Services Grid */}
      <section className="container mx-auto py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delayMs={service.delay} durationMs={1200}>
              <Card className="group h-full cursor-pointer overflow-hidden border border-border/50 bg-gradient-to-br from-white/50 to-white/20 dark:from-white/10 dark:to-white/5 backdrop-blur-sm shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/30 hover:bg-gradient-to-br hover:from-white/60 hover:to-white/30 dark:hover:from-white/20 dark:hover:to-white/10">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} transition-all duration-300 group-hover:scale-110`}>
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-xs font-medium text-primary/60 bg-primary/10 px-3 py-1 rounded-full">
                      {String.fromCharCode(65 + index)}
                    </div>
                  </div>
                  <CardTitle className="font-heading text-xl leading-tight group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-primary/70 mt-2">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-4 border-t border-border/30">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href="/contact">
                      {service.cta} →
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto py-16 md:py-24">
        <Reveal durationMs={800}>
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-16">
            Why Choose <span className="text-gradient-brand">WaapTech</span>
          </h2>
        </Reveal>
        
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "AI-powered development that delivers results 3x faster than traditional approaches"
            },
            {
              icon: ShieldCheck,
              title: "Enterprise Security",
              description: "Bank-grade security with SOC2 compliance and real-time threat detection"
            },
            {
              icon: TrendingUp,
              title: "Proven Results",
              description: "500+ successful AI projects with measurable ROI and client satisfaction"
            }
          ].map((item, i) => (
            <Reveal key={item.title} delayMs={i * 200} durationMs={800}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-16 md:py-24">
        <Reveal durationMs={800}>
          <div className="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 md:p-16 border border-primary/20">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can revolutionize your operations, enhance customer experiences, and drive unprecedented growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Schedule Free Consultation →
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Our Work →
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Services;
