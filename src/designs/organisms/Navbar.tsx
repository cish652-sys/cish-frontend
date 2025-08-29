"use client";

import { Menubar } from "@/designs/atoms/menubar";
import { NavLink } from "@/designs/atoms/Navlinks";
import { MenuDropdown } from "@/designs/molecules/MenuDropdown";
import { MobileAccordionNav } from "@/designs/molecules/MobileAccordionNav";
import { navigation } from "@/config/navigation";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b">
      <div className="container flex items-center justify-between py-3">
        <Menubar className="gap-2 border-none shadow-none bg-transparent">
          {navigation.map((item) =>
            item.type === "link" ? (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={item.active}
                className="md:inline-block"
              />
            ) : (
              <MenuDropdown key={item.label} label={item.label} links={item.links} />
            )
          )}
        </Menubar>
      </div>

      {/* Mobile (accordion) */}
      <div className="container mx-auto px-2">
        <MobileAccordionNav items={navigation} />
      </div>
    </nav>
  );
};
