"use client";

import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

const EducationPage = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />

      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Education" }]}
        iconProps={true}
        title="EDUCATION"
        description={[""]}
      />

      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-5xl mx-auto flex flex-col gap-6">
          <h2 className="text-gray-700 leading-relaxed">
            Recognizing the importance of capacity building and in harmony with the ICAR focus on
            ‘Student Ready’, the Institute has established collaborations with various universities
            through formal Memorandums of Understanding. The Institute has also been recognized by
            IGNOU, New Delhi, as one of its study centres to offer a one-year Diploma Course on
            Value Added Products from Fruits and Vegetables and a Certificate Course on Organic
            Farming. In addition, under the National Horticulture Mission, the Institute serves as a
            nodal centre for imparting training on rejuvenation of old and unproductive mango
            orchards as well as high-density planting techniques in guava.
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default EducationPage;
