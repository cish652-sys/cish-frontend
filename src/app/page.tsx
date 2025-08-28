// import { FruitsSection } from "@/designs/templates/FruitSection"
import { MainHeader } from "@/designs/templates/MainHeader";

import Rearch from "@/designs/organisms/cardFields/Rearch";
import EventsSection from "@/designs/organisms/EventsSection";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import HomeWithDirector from "@/designs/templates/DirectorHome";
import Dashboard from "@/designs/templates/DashboardKeyOffering";
// import ManinPageProduct from "@/designs/templates/MainPageProduct";
import KeyImpacts from "@/designs/organisms/KeyImpacts";

export default function Home() {
  return (
    <div>
      <MainHeader />
      {/* <FruitsSection /> */}
      <HomeWithDirector />
      {/* <ManinPageProduct /> */}
      <Dashboard />
      <KeyImpacts />
      <Rearch />
      <EventsSection />

      <Footer />
    </div>
  );
}
