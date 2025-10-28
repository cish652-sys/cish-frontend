"use client";

import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

const GuestHouse = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />

      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Guest House / Training Hostel" }]}
        iconProps={true}
        title="GUEST HOUSE / TRAINING HOSTEL"
        description={[""]}
      />

      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-5xl mx-auto flex flex-col gap-6">
          <h2 className="text-gray-700 leading-relaxed">
            Institute has a well established Guest House / Training Hostel to provide comfortable
            stay to the visitors. The Institute guest house has one suite for VIP guests and fifteen
            well-furnished rooms. In addition to this, two dormitories with fourteen beds each are
            also available for group accommodation.
            <br />
            <br />
            Allocation of rooms and rent is collected as per ICAR guidelines. In allotment of rooms,
            preference is given to ICAR / SAU officers coming on official visits. Rooms shall not be
            allotted for marriage ceremonies or other personal functions. For detailed guidelines
            regarding room allocation, please refer to the document attached below.
          </h2>

          <div className="text-gray-700 leading-relaxed">
            <p className="font-semibold">Contact:</p>
            <p>
              Sh. Dhirendra P. Singh, Incharge (Guest House) —{" "}
              <span className="font-medium">+91 9026317652</span>
            </p>
            <p>
              Sh. Abhishek Kumar — <span className="font-medium">+91 7905880546</span>
            </p>
            <p className="mt-1">
              Email:{" "}
              <a href="mailto:cishguesthouse@gmail.com" className="text-blue-600 underline">
                cishguesthouse@gmail.com
              </a>
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <a
              href="http://13.234.154.152:9000/nfp-bucket/CISH_Guest_House_Guidelines.pdf"
              className="px-6 py-3 border border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white transition rounded-md text-center"
            >
              Click Here For Guidelines
            </a>

            <a
              href="https://cish.in/pdf/guest_house_booking_oroforma.pdf"
              className="px-6 py-3 border border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white transition rounded-md text-center"
            >
              Download Guest House Booking Form
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GuestHouse;
