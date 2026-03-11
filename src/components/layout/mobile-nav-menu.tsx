import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Music2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
  isActive: boolean;
};

type MobileNavMenuProps = {
  isOpen: boolean;
  close: () => void;
  navLinks: NavLink[];
  businessName: string;
  phone: string;
};

export function MobileNavMenu({
  isOpen,
  close,
  navLinks,
  businessName,
  phone,
}: MobileNavMenuProps) {
  return (
    <>
      <div
        onClick={close}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-55 bg-black/50 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed left-0 top-0 z-60 h-full w-75 sm:w-85 lg:hidden",
          "flex flex-col border-r border-border/40 bg-background",
          "transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="absolute right-0 top-0 h-full w-px bg-linear-to-b from-transparent via-primary/40 to-transparent" />

        <div className="flex items-center border-b border-border/40 px-8 pb-6 pt-8">
          <Link href="/" onClick={close} aria-label={businessName}>
            <Image
              src="/images/logo2.png"
              alt={businessName}
              width={150}
              height={64}
              quality={60}
              sizes="150px"
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="flex flex-1 flex-col px-6 py-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={close}
              className={cn(
                "group relative flex items-center gap-4 border-b border-border/40 px-2 py-4 last:border-b-0",
                "text-[15px] font-medium uppercase tracking-[0.08em]",
                "transition-all duration-300",
                link.isActive
                  ? "text-foreground"
                  : "text-foreground/50 hover:text-foreground",
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              )}
            >
              <span
                className={cn(
                  "absolute left-0 top-1/2 w-0.5 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 group-hover:h-5",
                  link.isActive ? "h-5" : "h-0"
                )}
              />
              <span className="w-5 font-mono text-[11px] text-foreground/20 transition-colors duration-300 group-hover:text-primary/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {link.label}
              </span>
            </Link>
          ))}

          <div
            className={cn(
              "mt-3 transition-all duration-300",
              isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            )}
          >
            <Button asChild className="w-full" onClick={close}>
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </div>
        </nav>

        <div
          className={cn(
            "border-t border-border/40 px-8 py-6",
            "transition-all duration-300",
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/25">
            Follow Us
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className={cn(
                "group flex h-10 w-10 items-center justify-center rounded-sm",
                "border border-border/60 text-foreground/40",
                "transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
              )}
            >
              <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className={cn(
                "group flex h-10 w-10 items-center justify-center rounded-sm",
                "border border-border/60 text-foreground/40",
                "transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
              )}
            >
              <Facebook className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://www.tiktok.com/@gutamaroofing.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on TikTok"
              className={cn(
                "group flex h-10 w-10 items-center justify-center rounded-sm",
                "border border-border/60 text-foreground/40",
                "transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
              )}
            >
              <Music2 className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>

            <div className="h-px flex-1 bg-border/40" />

            <a
              href={`tel:${phone}`}
              className="font-mono text-[11px] tracking-wider text-foreground/25 transition-colors duration-300 hover:text-primary"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
