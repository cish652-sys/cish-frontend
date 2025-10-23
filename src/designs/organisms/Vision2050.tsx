"use client";
import React from "react";
import { Header } from "../organisms/Header";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Logo } from "../atoms/Logo";
import { SectionHeader } from "../organisms/SectionHeader";

const Vision2050 = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Vision 2050" }]}
        iconProps={true}
        title="NEWS AND EVENTS"
        description={[""]}
      />
    </main>
  );
};

export default Vision2050;
