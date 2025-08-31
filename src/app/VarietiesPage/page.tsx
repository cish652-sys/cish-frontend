import { Logo } from '@/designs/atoms/Logo'
import { Footer } from '@/designs/organisms/FooterOrganisms/Footer'
import { Header } from '@/designs/organisms/Header'
import ResponsiveNavbar from '@/designs/organisms/Navbar/NavigatioMenu'
import { SectionHeader } from '@/designs/organisms/SectionHeader'
import TrendingTechnologies from '@/designs/organisms/TrendingTechnologies'
import VarietiesSection from '@/designs/organisms/VarietiesSection'
import { OtherTechnologies } from '@/designs/templates/OtherTechnologies'
import React from 'react'
import banner from '../../designs/public/images/banner.svg'


function Varietiespage() {
  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
              <Logo src={banner} alt="Website Banner" responsive />
          </section>
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
            <OtherTechnologies />
            <Footer />

    </div>
  )
}

export default Varietiespage
