import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = { id?: string };

const CaseStudiesSection = ({ id }: Props) => (
  <section id={id} className="scroll-mt-24 container mx-auto py-12 md:py-16">
    <h2 className="font-heading text-3xl md:text-4xl">Case Studies</h2>
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <Card>
        <CardContent className="space-y-2 p-6">
          <h3 className="font-heading text-xl">AI-Powered Recharge Platform for KIKPAY</h3>
          <p className="text-sm text-muted-foreground"><strong>Challenge:</strong> High fraud & manual reconciliation</p>
          <p className="text-sm text-muted-foreground"><strong>Solution:</strong> Recharge API + anomaly detection + automated settlement</p>
          <p className="text-sm text-muted-foreground"><strong>Outcome:</strong> Fraud reduced by 40%, settlement time cut by 70%</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="space-y-2 p-6">
          <h3 className="font-heading text-xl">Personalized E-commerce Engine for PAYNIDI PRO</h3>
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
);

export default CaseStudiesSection;


