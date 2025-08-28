"use client";

import { FooterIcon } from "@/designs/atoms/FooterAtoms/FooterIcon";
import { ContactInfo } from "@/designs/molecules/FooterMolecules/ContactInfo";
import { FooterLinksGroup } from "@/designs/molecules/FooterMolecules/FooterLinksGroup";

export function Footer() {
  return (
    <footer className="bg-green-800 text-white px-6 md:px-12 lg:px-20 py-10">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-1 ml-3">
            <img src="/icons/cish.svg" alt="ICAR-CISH Logo" className="w-[84px] h-[84px]" />
            <h3
              className="
    font-bold
    text-[25px]
    leading-[100%]
    tracking-[0]
    font-['Noto_Sans',sans-serif]
  "
            >
              ICAR-CISH
            </h3>
          </div>
          <p
            className="
    font-normal
    text-[16px]
    leading-[150%]
    tracking-[0]
    capitalize
    font-['Noto_Sans',sans-serif]
     p-2
  "
          >
            The Central Institute For Subtropical Horticulture (CISH) was started as Central Mango
            Research Station on September 4, 1972 under the aegis of the Indian Institute of
            Horticulture Research.
          </p>

          <div className="flex gap-3 mt-0 ml-3">
            <FooterIcon href="#" imgSrc="/icons/Facebook.svg" alt="Facebook" />
            <FooterIcon href="#" imgSrc="/icons/Twitter.svg" alt="Twitter" />
            <FooterIcon href="#" imgSrc="/icons/Instagram.svg" alt="Instagram" />
            <FooterIcon href="#" imgSrc="/icons/Youtube.svg" alt="YouTube" />
          </div>
        </div>

        {/* Quick Links */}
        <FooterLinksGroup
          title="QUICK LINKS"
          links={[
            { label: "About Us", href: "#" },
            { label: "Research", href: "#" },
            { label: "Publication", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Tenders", href: "#" },
            { label: "RTI", href: "#" },
            { label: "Downloads", href: "#" },
            { label: "Contact Us", href: "#" },
          ]}
        />

        {/* Services */}
        <FooterLinksGroup
          title="SERVICES"
          links={[
            { label: "Library", href: "#" },
            { label: "Museum", href: "#" },
            { label: "Nursery", href: "#" },
            { label: "Consultancy", href: "#" },
            { label: "Contract Research", href: "#" },
            { label: "Education", href: "#" },
            { label: "Auditorium", href: "#" },
            { label: "Guest House", href: "#" },
          ]}
        />

        {/* Contact Info */}
        <ContactInfo />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200">
        <p>© 2025 Central Institute For Subtropical Horticulture. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-yellow-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-400">
            Terms Of Use
          </a>
          <a href="#" className="hover:text-yellow-400">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
