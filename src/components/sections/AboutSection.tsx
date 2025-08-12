type Props = { id?: string };

const AboutSection = ({ id }: Props) => (
  <section id={id} className="scroll-mt-24 container mx-auto py-12 md:py-16">
    <h2 className="font-heading text-3xl md:text-4xl">From Code to Intelligence — We Build Smarter Digital Futures</h2>
    <p className="mt-3 max-w-3xl text-muted-foreground">
      WaapTech is an AI-first technology company based in Lucknow, India. We combine deep engineering expertise with modern AI capabilities to build products that are secure, scalable and impactful.
    </p>

    <div className="grid gap-10 py-8 md:grid-cols-2">
      <article>
        <h3 className="font-heading text-2xl">Mission</h3>
        <p className="mt-2 text-muted-foreground">To empower businesses with intelligent, automated and future-ready digital solutions.</p>
      </article>
      <article>
        <h3 className="font-heading text-2xl">Vision</h3>
        <p className="mt-2 text-muted-foreground">To be the trusted AI technology partner for enterprises and startups across the globe.</p>
      </article>
    </div>

    <div className="py-4">
      <h3 className="font-heading text-2xl">Core Values</h3>
      <ul className="mt-3 grid gap-3 text-muted-foreground md:grid-cols-2">
        <li>Customer-first engineering</li>
        <li>Ethical AI & data privacy</li>
        <li>Continuous innovation</li>
        <li>Transparent delivery and support</li>
      </ul>
    </div>

    <div className="py-4">
      <h3 className="font-heading text-2xl">Our Process</h3>
      <ol className="mt-3 grid gap-3 text-muted-foreground md:grid-cols-5">
        <li><strong>Discover</strong> — requirements, stakeholders, feasibility</li>
        <li><strong>Design</strong> — UX, architecture, prototype</li>
        <li><strong>Build</strong> — agile sprints, automated testing</li>
        <li><strong>Deploy</strong> — CI/CD, MLOps, secure rollout</li>
        <li><strong>Optimize</strong> — analytics, A/B testing, model retraining</li>
      </ol>
    </div>
  </section>
);

export default AboutSection;


