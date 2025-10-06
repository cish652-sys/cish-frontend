'use client'
import React from 'react'
import { Header } from '../organisms/Header'
import ResponsiveNavbar from '../organisms/Navbar/NavigatioMenu'
import { Logo } from '../atoms/Logo'
import { SectionHeader } from '../organisms/SectionHeader'

const EventsPage = () => {
  return (
    <main>
        <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "NEWS AND EVENTS" }]}
        iconProps={true}
        title="NEWS AND EVENTS"
        description={[""]}
      />


    </main>
  )
}

export default EventsPage