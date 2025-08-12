import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useLocation } from "react-router-dom";
import { useActiveSection } from "@/hooks/use-active-section";

const SiteHeader = () => {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const activeId = useActiveSection(onHome ? ["services", "about", "case-studies"] : []);
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
          <a href="/#services" className={`text-sm hover-scale story-link ${onHome && activeId === 'services' ? 'text-primary' : 'text-muted-foreground'}`}>Services</a>
          <a href="/#about" className={`text-sm hover-scale story-link ${onHome && activeId === 'about' ? 'text-primary' : 'text-muted-foreground'}`}>About</a>
          <a href="/#case-studies" className={`text-sm hover-scale story-link ${onHome && activeId === 'case-studies' ? 'text-primary' : 'text-muted-foreground'}`}>Case Studies</a>
          <NavLink to="/contact" className={({isActive})=>`text-sm hover-scale ${isActive? 'text-primary':'text-muted-foreground'} story-link`}>
            Contact
          </NavLink>
        </div>
        <div className="hidden md:block">
          <a href="/contact">
            <Button variant="gradient" size="sm">Get a Free Consultation →</Button>
          </a>
        </div>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:max-w-sm p-6">
              <div className="mb-4 font-heading text-lg">Menu</div>
              <nav className="grid gap-3">
                <SheetClose asChild>
                  <NavLink to="/" className={({isActive})=>`text-base ${isActive? 'text-primary':'text-foreground'} `}>
                    Home
                  </NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <a href="/#services" className="text-base text-foreground">
                    Services
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="/#about" className="text-base text-foreground">
                    About
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="/#case-studies" className="text-base text-foreground">
                    Case Studies
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/contact" className={({isActive})=>`text-base ${isActive? 'text-primary':'text-foreground'} `}>
                    Contact
                  </NavLink>
                </SheetClose>
                <a href="/contact" className="mt-2">
                  <Button variant="gradient" className="w-full">Get a Free Consultation →</Button>
                </a>
                <div className="mt-4">
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
