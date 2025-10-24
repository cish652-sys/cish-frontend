"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Section } from "lucide-react";

const Contact = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/ContactUs" },
        ]}
        iconProps={true}
        title="CONTACT US"
        description={[""]}
      />

      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {/* CONTACT INFORMATION */}
          <div className="text-center">
            <h2 className="text-green-800 font-bold text-2xl mb-3">CONTACT INFORMATION</h2>
            <p className="text-gray-700 leading-relaxed font-medium">
              ICAR-CENTRAL INSTITUTE FOR SUBTROPICAL HORTICULTURE
            </p>
            <p className="text-gray-700 leading-relaxed">
              cish.lucknow@gmail.com • Rehmankhera, P.O. Kakori, 226101
            </p>
          </div>

          {/* MAP EMBED */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="ICAR-CISH Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.97915022132!2d80.7653883!3d26.9041568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399eaa5873a5708d%3A0x88e5422e91a5231a!2sICAR-Central%20Institute%20for%20Subtropical%20Horticulture%20department!5e0!3m2!1sen!2sin!4v1761324618830!5m2!1sen!2sin"
              width="100%"
              height="350"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-green-800 font-bold text-xl mb-4 text-center">Contact Form</h2>
            <p className="text-gray-600 text-center mb-8">
              Please fill all the texts in the fields.
            </p>

            <form
              action="mailto:shubhjoshi114@gmail.com"
              method="post"
              encType="text/plain"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="Full Name"
                placeholder="Your Full Name"
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                name="Email"
                placeholder="Valid Email Address"
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="Phone"
                placeholder="Valid Phone Number"
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="Inquiry"
                placeholder="Inquiry"
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <textarea
                name="Message"
                placeholder="Your Message to Us"
                rows={5}
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600 md:col-span-2"
              ></textarea>

              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-800 text-white font-medium rounded-md hover:bg-green-700 transition"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
