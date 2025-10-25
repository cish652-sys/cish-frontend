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
            Recognizing the importance of capacity building and in harmony with ICAR focus ‘Student
            Ready’ Institute has forged MoUs with universities. Institute has also been recognized
            by IGNOU, New Delhi as one of the study centres for offering one year Diploma course on
            ‘Value added products from fruits and vegetables’ and a Certificate course on ‘Organic
            farming’. National Horticulture Mission has also identified the institute as a nodal
            centre for imparting training on rejuvenation of old and unproductive mango orchards and
            high density planting in guava.
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default EducationPage;
