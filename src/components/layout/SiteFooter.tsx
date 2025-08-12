import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const currentYear = new Date().getFullYear();

const SiteFooter = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg">WaapTech</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">
            Intelligent digital solutions for web, mobile and fintech — powered by AI.
          </p>
          <div className="mt-4 flex gap-4 text-muted-foreground">
            <a aria-label="LinkedIn" href="#" className="hover:text-primary"><Linkedin size={20} /></a>
            <a aria-label="Twitter" href="#" className="hover:text-primary"><Twitter size={20} /></a>
            <a aria-label="Facebook" href="#" className="hover:text-primary"><Facebook size={20} /></a>
            <a aria-label="Instagram" href="#" className="hover:text-primary"><Instagram size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Address: L-II/211/G, Sector G, LDA Colony, Lucknow, UP 226012</li>
            <li>Phone: +91 7392080372</li>
            <li>Email: info@waaptech.in</li>
            <li>Hours: Mon–Sat: 9:00 AM – 7:00 PM IST</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Newsletter</h4>
          <p className="mt-2 text-sm text-muted-foreground">Get AI insights and product updates.</p>
          <form className="mt-4 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
            <input aria-label="Email" type="email" required placeholder="Your email" className="flex-1 rounded-md border bg-background px-3 py-2 text-sm"/>
            <button className="rounded-md px-4 py-2 text-sm text-primary-foreground bg-gradient-brand">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {currentYear} WaapTech. All rights reserved.</p>
          <nav className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;