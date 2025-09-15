"use client";

import { FooterIcon } from "@/designs/atoms/FooterAtoms/FooterIcon";
import { ContactInfo } from "@/designs/molecules/FooterMolecules/ContactInfo";
import { FooterLinksGroup } from "@/designs/molecules/FooterMolecules/FooterLinksGroup";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/icons/cish.svg"
                alt="ICAR-CISH Logo"
                className="w-20 h-20"
                height={80}
                width={80}
              />
              <h3 className="font-bold text-xl md:text-2xl leading-tight font-['Noto_Sans',sans-serif]">
                ICAR-CISH
              </h3>
            </div>

            <p className="text-sm md:text-base leading-relaxed font-['Noto_Sans',sans-serif] mb-4">
              The Central Institute For Subtropical Horticulture (CISH) was started as Central Mango
              Research Station on September 4, 1972 under the aegis of the Indian Institute of
              Horticulture Research.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <FooterIcon
                href="https://www.facebook.com/ICARCISH/"
                imgSrc="/icons/Facebook.svg"
                alt="Facebook"
              />
              <FooterIcon
                href="https://x.com/i/flow/single_sign_on"
                imgSrc="/icons/Twitter.svg"
                alt="Twitter"
              />
              <FooterIcon
                href="https://www.instagram.com/icar_cish/?hl=en"
                imgSrc="/icons/Instagram.svg"
                alt="Instagram"
              />
              <FooterIcon
                href="https://www.youtube.com/channel/UCUvmB_0pBbCsUenY8Ckb4Ng"
                imgSrc="/icons/Youtube.svg"
                alt="YouTube"
              />
            </div>
          </div>

          {/* Quick Links */}
          <FooterLinksGroup
            title="Quick Links"
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
            title="Services"
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
            {["Privacy Policy", "Terms Of Use", "Sitemap"].map((item) => (
              <a key={item} href="#" className="hover:text-yellow-400">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
