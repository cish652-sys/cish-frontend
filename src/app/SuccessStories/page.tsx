"use client";
import { useState } from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { SectionHeader } from "@/designs/organisms/SectionHeader";

interface SectionProps {
  title: string;
  overview: string[];
  initiatives: string[];
  outcome: string[];
  impact: string[];
}

const SuccessAccordion = ({ title, overview, initiatives, outcome, impact }: SectionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="border rounded-md shadow-sm mb-6 bg-white">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left px-6 py-4 bg-[#599A5E] text-white font-semibold flex justify-between items-center"
        >
          {title}
          <span>{open ? "–" : "+"}</span>
        </button>

        {open && (
          <div className="px-6 py-4 text-gray-700 space-y-4 leading-relaxed">
            <div>
              <h3 className="font-semibold text-[#31572C]">Overview</h3>
              <ul className="list-disc list-inside space-y-1">
                {overview.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#31572C]">Initiatives</h3>
              <ul className="list-disc list-inside space-y-1">
                {initiatives.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#31572C]">Outcome</h3>
              <ul className="list-disc list-inside space-y-1">
                {outcome.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#31572C]">Impact</h3>
              <ul className="list-disc list-inside space-y-1">
                {impact.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function SuccessStories() {
  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Success Stories" }]}
        iconProps={true}
        title="Success Stories"
        description={[""]}
      />
      <section className="py-12 px-6 md:px-16 bg-[#FBFAF0]">
        <SuccessAccordion
          title="On-farm conservation of mango varieties through community based organization"
          overview={[
            "Traditional varieties in diversity rich orchards of Malihabad getting eroded.",
            "Lack of knowledge, limited interest in non commercial varieties and diversity wealth and conservation and its socio-economic and ecological community.",
            "Low priority for the sale of non commercial mango varieties.",
            "Absence of local institutions for on-farm conservation.",
            "Absence of nurseries for non commercial mango variety grafts.",
            "Lack of knowledge about the importance of diversity wealth.",
          ]}
          initiatives={[
            "The Society for Conservation of Mango Diversity (SMDC) established with the participation of community members.",
            "Community members trained and provided independent platform for participation.",
            "Linkages with marketing people, training and website on unique varieties.",
            "Awareness through diversity fairs and meetings.",
            "Proper harvesting, ripening and handling along with sale in selected urban markets.",
            "Establishment of community nurseries and involving nurseries outside the communities.",
            "Establishment of multi-variety community orchards for conservation.",
            "SCMD played key role in initiation of the process.",
          ]}
          outcome={[
            "Community members mediated documentation of unique mango varieties.",
            "Diversity fairs and awareness meetings attracted stakeholders.",
            "Sale of non-commercial varieties started in urban markets.",
            "Better price obtained due to proper harvesting, ripening and handling in urban markets.",
            "Community nurseries and outside community nurseries produced more than 10,000 grafts of non-commercial varieties.",
            "Community varieties multiplied and planted in multi-variety orchards.",
          ]}
          impact={[
            "Farmers bagged price in national and regional diversity fairs.",
            "Grafted plants of farmers’ varieties available in community nursery.",
            "34 farmers and community varieties submitted to PPV&FRA for registration.",
          ]}
        />

        <SuccessAccordion
          title="CISH interventions for successful management of shoot gall psylla in Barabanki district"
          overview={[
            "Pest is spreading in new areas of Sitapur, Barabanki and Faizabad districts.",
            "Threat to Deshehari mango belt of Lucknow and adjoining areas.",
            "Farmers not able to manage the pest, not aware of proper spray schedule.",
            "Timely spray is important for management.",
          ]}
          initiatives={[
            "Sensitization programme undertaken by CISH at Sohawal (Faizabad) and Amberpur (Sitapur) to create awareness.",
            "Farmers trained for identification of the life stages of pest and its management strategies.",
          ]}
          outcome={[
            "In Baraulia (Sirauli Gousapur block; Barabanki District) village farmers followed spray schedules timely.",
            "Second week of March farmers sprayed insecticide Profenophos @ 2 ml/litre.",
            "Second week of August farmers sprayed with Dimethoate @ 1.5 ml/litre.",
            "Second spray with Quinalphos @1.5 ml/litre during first week of September.",
            "In treated orchards, no infestation was observed.",
          ]}
          impact={[
            "In treated orchards, no infestation was observed during surveys in October –November , 2014.",
            "Interventions of CISH, reduced amount of application of pesticide and number of sprays.",
            "Pest was efficiently managed and restricted further spread.",
            "Due to farmers participation technology is getting lateral spread.",
          ]}
        />

        <SuccessAccordion
          title="Success story of Aonla Cider Technology"
          overview={[
            "Aonla (Phyllanthus emblica Linn.) - Indian gooseberry also known as “Amritphal” in local parlance due to its high medicinal and therapeutic value owing to aggressive advocacy of its production technology area under aonla has increased substantially.",
            "Increased production has led to the aggravation of postharvest crop losses.",
            "Postharvest losses could be managed through development of value added products.",
            "Amongst various aonla products (Chawanprash, murabba, laddu, supari) already available in the market, aonla juice is getting popular amongst health conscious populace.",
          ]}
          initiatives={[
            "Keeping the global consumer preferences in view CISH has developed a unique fermented, nutritious and refreshing drink-AONLA CIDER from aonla fruit.",
            "Aonla cider is a sweet fermented drink having 10o B TSS, 4% alcohol, 0.4% polyphenol, 66mg-1 ascorbic acid.",
          ]}
          outcome={["Product gained acceptance with fruit processing entrepreneurs."]}
          impact={[
            "The production technology has recently been transferred to Center for Technology and Entrepreneurship Development, Industrial Area, Jagdishpur at a cost of Rs. 3,00,000 (Three lakhs only).",
          ]}
        />
      </section>
      <Footer />
    </div>
  );
}
