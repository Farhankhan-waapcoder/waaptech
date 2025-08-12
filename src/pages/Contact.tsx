import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Contact = () => {
  const structured = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'WaapTech',
      url: typeof window !== 'undefined' ? window.location.origin : ''
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'WaapTech',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'L-II/211/G, Sector G, LDA Colony',
        addressLocality: 'Lucknow',
        addressRegion: 'UP',
        postalCode: '226012',
        addressCountry: 'IN'
      },
      telephone: '+91 7392080372',
      openingHours: 'Mo-Sa 09:00-19:00'
    }
  ];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thanks! We’ll get back within 24 hours.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <main>
      <SEO
        title="Contact WaapTech — AI Product Development & Fintech Integrations"
        description="Contact WaapTech for AI development, fintech APIs, mobile apps and cloud solutions. Reach our team in Lucknow for a free consultation."
        path="/contact"
        structuredData={structured}
      />

      <section className="container mx-auto grid gap-10 py-12 md:grid-cols-2 md:py-16">
        <div>
          <h1 className="font-heading text-3xl md:text-4xl">Let’s Build Something Intelligent Together</h1>
          <p className="mt-3 text-muted-foreground">Fill the form or reach out directly. We respond within 24 hours.</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Address: L-II/211/G, Sector G, LDA Colony, Lucknow, UP 226012</li>
            <li>Phone: +91 7392080372</li>
            <li>Email: info@waaptech.in</li>
            <li>Hours: Mon–Sat: 9:00 AM – 7:00 PM IST</li>
          </ul>
          <div className="mt-6 h-48 w-full rounded-md border bg-muted/30" aria-label="Map placeholder" />
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input name="name" placeholder="Full name" required />
            <Input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input name="phone" placeholder="Phone" />
            <Input name="company" placeholder="Company" />
          </div>
          <Select name="service">
            <SelectTrigger>
              <SelectValue placeholder="Interested Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ai-dev">AI-Enabled Software Development</SelectItem>
              <SelectItem value="ecom">AI-Powered Web & E-commerce</SelectItem>
              <SelectItem value="fintech">Fintech & Payments</SelectItem>
              <SelectItem value="mobile">Mobile App Development</SelectItem>
              <SelectItem value="mlops">Cloud, DevOps & MLOps</SelectItem>
            </SelectContent>
          </Select>
          <Textarea name="message" placeholder="Short message" rows={5} />
          <Input type="file" name="attachment" />
          <Button type="submit" variant="gradient">Send Message</Button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
