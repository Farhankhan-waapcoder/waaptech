import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="/" className="font-heading text-xl font-semibold">
          <span className="text-gradient-brand">WaapTech</span>
        </a>
        <div className="hidden gap-6 md:flex">
          <NavLink to="/" className={({isActive})=>`text-sm hover-scale ${isActive? 'text-primary':'text-muted-foreground'} story-link`}>
            Home
          </NavLink>
          <NavLink to="/services" className={({isActive})=>`text-sm hover-scale ${isActive? 'text-primary':'text-muted-foreground'} story-link`}>
            Services
          </NavLink>
          <NavLink to="/about" className={({isActive})=>`text-sm hover-scale ${isActive? 'text-primary':'text-muted-foreground'} story-link`}>
            About
          </NavLink>
          <NavLink to="/case-studies" className={({isActive})=>`text-sm hover-scale ${isActive? 'text-primary':'text-muted-foreground'} story-link`}>
            Case Studies
          </NavLink>
          <NavLink to="/contact" className={({isActive})=>`text-sm hover-scale ${isActive? 'text-primary':'text-muted-foreground'} story-link`}>
            Contact
          </NavLink>
        </div>
        <div className="hidden md:block">
          <a href="/contact">
            <Button variant="gradient" size="sm">Get a Free Consultation →</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
