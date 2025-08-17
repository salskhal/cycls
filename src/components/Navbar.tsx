import { useState, useEffect, useRef } from "react";
import { AlignJustify, X } from "lucide-react";
import logo from "@/assets/logo.png";

import { Button } from "@/components/ui/button";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "The Problem", href: "#the-problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Dev", href: "#for-dev" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#home");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle smooth scrolling to sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(href);
      setMobileMenuOpen(false);
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = (): void => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
      const target = event.target as Node;

      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="max-w-7xl mx-auto py-4 fixed top-0 left-0 right-0 z-50 px-3">
      <div className="border border-white/15 rounded-full p-4 px-6 flex items-center justify-between bg-gray-100/80 backdrop-blur-sm transition-all duration-300">
        <a
          href="#home"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#home")}
          className="transform transition-transform hover:scale-105"
        >
          <img src={logo} alt="Logo" className="w-full" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 font-medium">
          {navLinks.map((link: NavLink, index: number) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={index}
                href={link.href}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, link.href)}
                className={`relative px-2 py-1 text-black transition-all duration-200 hover:scale-105 ${
                  isActive ? "text-black" : "hover:text-black/80"
                }`}
              >
                {link.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full transition-all duration-300" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Connect Button */}
        <div className="hidden lg:block">
          <div className="transform transition-transform hover:scale-105">
            <Button>Get Started</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="lg:hidden text-black p-1 focus:outline-none transform transition-transform active:scale-90"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="transition-transform duration-200">
            {mobileMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute top-20 left-4 right-4 mt-6 p-4 border border-black/15 rounded-xl bg-gray-100/80 backdrop-blur-lg shadow-lg z-50 animate-fadeIn"
          style={{
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link: NavLink, index: number) => {
              const isActive = activeSection === link.href;
              return (
                <div
                  key={index}
                  style={{
                    animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, link.href)}
                    className={`relative block text-black hover:text-black/80 py-2 px-4 font-medium transition-colors ${
                      isActive ? "text-black" : ""
                    }`}
                  >
                    <div className="flex items-center">
                      {link.label}
                      {isActive && (
                        <div className="absolute left-0 w-1 h-6 bg-black rounded-full transition-all duration-300" />
                      )}
                    </div>
                  </a>
                </div>
              );
            })}
            <div
              className="pt-2 pb-1 px-4"
              style={{
                animation: `slideIn 0.3s ease-out ${navLinks.length * 0.1}s both`,
              }}
            >
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}