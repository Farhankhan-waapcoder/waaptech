import SEO from "@/components/seo/SEO";

const About = () => {
  return (
    <main>
      <SEO
        title="About WaapTech — Intelligent Digital Solutions"
        description="WaapTech is an AI-first technology company based in Lucknow delivering secure, scalable and impactful products."
        path="/about"
      />

      <section className="container mx-auto py-12 md:py-16">
        <h1 className="font-heading text-3xl md:text-4xl">From Code to Intelligence — We Build Smarter Digital Futures</h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          WaapTech is an AI-first technology company based in Lucknow, India. We combine deep engineering expertise with modern AI capabilities to build products that are secure, scalable and impactful.
        </p>
      </section>

      <section className="container mx-auto grid gap-10 py-8 md:grid-cols-2">
        <article>
          <h2 className="font-heading text-2xl">Mission</h2>
          <p className="mt-2 text-muted-foreground">To empower businesses with intelligent, automated and future-ready digital solutions.</p>
        </article>
        <article>
          <h2 className="font-heading text-2xl">Vision</h2>
          <p className="mt-2 text-muted-foreground">To be the trusted AI technology partner for enterprises and startups across the globe.</p>
        </article>
      </section>

      <section className="container mx-auto py-8">
        <h2 className="font-heading text-2xl">Core Values</h2>
        <ul className="mt-3 grid gap-3 text-muted-foreground md:grid-cols-2">
          <li>Customer-first engineering</li>
          <li>Ethical AI & data privacy</li>
          <li>Continuous innovation</li>
          <li>Transparent delivery and support</li>
        </ul>
      </section>

      <section className="container mx-auto py-8">
        <h2 className="font-heading text-2xl">Our Process</h2>
        <ol className="mt-3 grid gap-3 text-muted-foreground md:grid-cols-5">
          <li><strong>Discover</strong> — requirements, stakeholders, feasibility</li>
          <li><strong>Design</strong> — UX, architecture, prototype</li>
          <li><strong>Build</strong> — agile sprints, automated testing</li>
          <li><strong>Deploy</strong> — CI/CD, MLOps, secure rollout</li>
          <li><strong>Optimize</strong> — analytics, A/B testing, model retraining</li>
        </ol>
      </section>

      <section className="container mx-auto py-8">
        <h2 className="font-heading text-2xl">Team & Capabilities</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          A team of product managers, AI/ML engineers, backend & frontend developers, QA, DevOps and UX designers — backed by fintech and payments domain experts.
        </p>
      </section>
    </main>
  );
};

export default About;
