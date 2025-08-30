// import { FruitsSection } from "@/designs/templates/FruitSection"
import { MainHeader } from "@/designs/templates/MainHeader";

import Rearch from "@/designs/organisms/cardFields/Rearch";
import EventsSection from "@/designs/organisms/EventsSection";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import HomeWithDirector from "@/designs/templates/DirectorHome";
import Dashboard from "@/designs/templates/DashboardKeyOffering";
// import ManinPageProduct from "@/designs/templates/MainPageProduct";
import KeyImpacts from "@/designs/organisms/KeyImpacts";
import VarietiesSection from "@/designs/organisms/VarietiesSection";
import TrendingTechnologies from "@/designs/organisms/TrendingTechnologies";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { OtherTechnologies } from "@/designs/templates/OtherTechnologies";

export default function Home() {
  return (
    <div>
      {/* <MainHeader /> */}
      {/* <FruitsSection /> */}
      {/* <HomeWithDirector /> */}
      {/* <ManinPageProduct /> */}
      {/* <Dashboard /> */}
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "TECHNOLOGIES FOR COMMERCIALIZATION" },
        ]}
        iconName="microscope"
        title="TECHNOLOGIES FOR COMMERCIALIZATION"
        description={[
          "Bring advanced tools and practices from research to the fields.",
          "They help farmers improve productivity, reduce costs, and ensure better quality yields.",
          "The goal is to make farming more sustainable, profitable, and accessible to all.",
        ]}
      />
      <TrendingTechnologies />
      <OtherTechnologies/>
      <Footer />
    </div>
  );
}
