"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BUSINESS_NAME = "Gutama Home Improvement";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2" aria-label={BUSINESS_NAME}>
            <Image
              src="/images/logo2.png"
              alt={BUSINESS_NAME}
              width={180}
              height={96}
              priority
              className="h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all",
                  "hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.phones.english}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              {siteConfig.phones.english}
            </a>
            <Button asChild>
              <Link href="#contact">Get Free Estimate</Link>
            </Button>
          </div>

          {/* Hamburger toggle */}
          <button
            type="button"
            className="relative z-[70] inline-flex h-10 w-10 items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className={cn(
              "absolute transition-all duration-300",
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
            )}>
              <X className="h-6 w-6" />
            </span>
            <span className={cn(
              "absolute transition-all duration-300",
              isOpen ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            )}>
              <Menu className="h-6 w-6" />
            </span>
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Slide-out drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed top-0 left-0 z-[60] h-full w-[300px] sm:w-[340px] lg:hidden",
          "flex flex-col bg-background border-r border-border/40",
          "transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Gradient accent line on right edge */}
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

        {/* Logo */}
        <div className="flex items-center px-8 pt-8 pb-6 border-b border-border/40">
          <Link href="/" onClick={close} aria-label={BUSINESS_NAME}>
            <Image
              src="/images/logo2.png"
              alt={BUSINESS_NAME}
              width={150}
              height={64}
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 py-4 flex-1">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={close}
              style={{ transitionDelay: isOpen ? `${100 + i * 60}ms` : "0ms" }}
              className={cn(
                "group relative flex items-center gap-4 py-4 px-2",
                "text-[15px] font-medium tracking-[0.08em] uppercase",
                "text-foreground/50 hover:text-foreground",
                "border-b border-border/40 last:border-b-0",
                "transition-all duration-300",
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              )}
            >
              {/* Hover accent bar */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[2px] bg-primary rounded-full transition-all duration-300 group-hover:h-5" />
              {/* Index */}
              <span className="text-[11px] font-mono text-foreground/20 group-hover:text-primary/60 transition-colors duration-300 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {link.label}
              </span>
            </Link>
          ))}

          {/* Phone */}
          <a
            href={`tel:${siteConfig.phones.english}`}
            style={{ transitionDelay: isOpen ? `${100 + NAV_LINKS.length * 60}ms` : "0ms" }}
            className={cn(
              "inline-flex items-center gap-3 mt-6 py-3 px-2",
              "text-sm text-muted-foreground hover:text-primary transition-colors duration-300",
              "transition-all duration-300",
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            )}
          >
            <Phone className="h-4 w-4 text-primary" />
            {siteConfig.phones.english}
          </a>

          {/* CTA */}
          <div
            style={{ transitionDelay: isOpen ? `${100 + (NAV_LINKS.length + 1) * 60}ms` : "0ms" }}
            className={cn(
              "mt-3 transition-all duration-300",
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            )}
          >
            <Button asChild className="w-full" onClick={close}>
              <Link href="#contact">Get Free Estimate</Link>
            </Button>
          </div>
        </nav>

        {/* Bottom social strip */}
        <div
          style={{ transitionDelay: isOpen ? `${100 + (NAV_LINKS.length + 2) * 60}ms` : "0ms" }}
          className={cn(
            "px-8 py-6 border-t border-border/40",
            "transition-all duration-300",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/25 mb-4 font-mono">
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
                "hover:border-primary/50 hover:text-primary hover:bg-primary/5",
                "transition-all duration-300"
              )}
            >
              <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className={cn(
                "group flex h-10 w-10 items-center justify-center rounded-sm",
                "border border-border/60 text-foreground/40",
                "hover:border-primary/50 hover:text-primary hover:bg-primary/5",
                "transition-all duration-300"
              )}
            >
              <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            </a>

            <div className="h-px flex-1 bg-border/40" />

            <a
              href={`tel:${siteConfig.phones.english}`}
              className="text-[11px] font-mono text-foreground/25 hover:text-primary transition-colors duration-300 tracking-wider"
            >
              {siteConfig.phones.english}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}