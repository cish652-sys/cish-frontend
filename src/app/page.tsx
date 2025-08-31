import { MainHeader } from "@/designs/templates/MainHeader";
import Rearch from "@/designs/organisms/cardFields/Rearch";
import EventsSection from "@/designs/organisms/EventsSection";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import HomeWithDirector from "@/designs/templates/DirectorHome";
import Dashboard from "@/designs/templates/DashboardKeyOffering";
import { FruitResearch } from "@/designs/organisms/FruitResearch";
import { CommercializationSection } from "@/designs/organisms/CommercializationSection";
import { varieties, varitiesTechnologies } from "@/lib/utils";
import SocialMediaSection from "@/designs/organisms/SocialMediaData";
import KeyImpacts from "@/designs/organisms/KeyImpacts";

export default function Home() {
  return (
    <div>
      <MainHeader />
      <FruitResearch />

      <HomeWithDirector />
      <CommercializationSection varieties={varieties} technologies={varitiesTechnologies} />
      <KeyImpacts />
      <Rearch />

      <Dashboard />
      <EventsSection />
      <SocialMediaSection />

      <Footer />
    </div>
  );
}
