import SEO from "@/components/seo/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  return (
    <main>
      <SEO
        title="Case Studies — AI-Powered Results | WaapTech"
        description="Explore AI-enabled case studies across fintech and e-commerce with measurable outcomes."
        path="/case-studies"
      />

      <section className="container mx-auto py-12 md:py-16">
        <h1 className="font-heading text-3xl md:text-4xl">Case Studies</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="space-y-2 p-6">
              <h2 className="font-heading text-xl">AI-Powered Recharge Platform for KIKPAY</h2>
              <p className="text-sm text-muted-foreground"><strong>Challenge:</strong> High fraud & manual reconciliation</p>
              <p className="text-sm text-muted-foreground"><strong>Solution:</strong> Recharge API + anomaly detection + automated settlement</p>
              <p className="text-sm text-muted-foreground"><strong>Outcome:</strong> Fraud reduced by 40%, settlement time cut by 70%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-2 p-6">
              <h2 className="font-heading text-xl">Personalized E-commerce Engine for PAYNIDI PRO</h2>
              <p className="text-sm text-muted-foreground"><strong>Challenge:</strong> Low AOV and poor search conversion</p>
              <p className="text-sm text-muted-foreground"><strong>Solution:</strong> AI-based recommendation + smart search</p>
              <p className="text-sm text-muted-foreground"><strong>Outcome:</strong> 18% increase in AOV, 22% lift in conversion</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <a href="/contact"><Button variant="gradient">Start your project →</Button></a>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;
