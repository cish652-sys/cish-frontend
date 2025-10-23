"use client";
import React from "react";
import Typography from "../atoms/Typography";
import { SectionHeader } from "../organisms/SectionHeader";
import { Logo } from "../atoms/Logo";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import Image from "next/image";
import Link from "next/link";

const socialMediaData = [
  {
    title: "X / Twitter",
    images: ["/icons/Xnew.svg", "/icons/Xnew1.svg", "/icons/Xnew.svg"],
    link: "https://x.com/ICAR_CISH",
    icons: "/icons/Twitter.svg",
  },
  {
    title: "Facebook",
    images: ["/icons/fb1.svg", "/icons/fb2.svg", "/icons/fb1.svg"],
    link: "https://www.facebook.com/ICARCISH/",
    icons: "/icons/Facebook.svg",
  },
  {
    title: "Instagram",
    images: ["/icons/instanew.svg", "/icons/insta2.svg", "/icons/instanew.svg"],
    link: "https://www.instagram.com/icar_cish/?hl=en",
    icons: "/icons/Instagram.svg",
  },
  {
    title: "YouTube",
    images: ["/icons/youtubenew.svg", "/icons/youtubenew2.svg", "/icons/youtubenew.svg"],
    link: "https://www.youtube.com/channel/UCUvmB_0pBbCsUenY8Ckb4Ng",
    icons: "/icons/ytsocialmedia.png",
  },
];
const SocialMediaPage = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section>

      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "SOCIAL MEDIA" }]}
        iconProps={true}
        title="SOCIAL MEDIA"
        description={[""]}
      />

      <div>
        <div className="flex  container items-center pt-2 gap-3 mb-6">
          <Typography variant="sectionHeading">SOCIAL MEDIA</Typography>
        </div>
      </div>
      <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 py-8 sm:py-10 md:py-12 bg-white">
        <div className="max-w-7xl container mx-auto">
          {/* Mobile view */}
          <div className="block sm:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {socialMediaData.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-none w-72 bg-white shadow-lg border border-gray-200 overflow-hidden snap-start hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  {/* MODIFICATION START */}
                  <div className="relative p-4 border-b border-gray-100 flex items-center justify-center">
                    <Image
                      src={item.icons}
                      alt={`${item.title} icon`}
                      width={24}
                      height={24}
                      className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2"
                    />
                    <h3 className="text-green-900 font-semibold text-lg">{item.title}</h3>
                  </div>
                  {/* MODIFICATION END */}

                  <div className="h-80 overflow-y-auto p-4">
                    <div className="space-y-3">
                      {item.images.map((src, i) => (
                        <div key={i} className="bg-gray-50 border border-gray-200 overflow-hidden">
                          <Image
                            src={src}
                            alt={`${item.title} post ${i + 1}`}
                            width={240}
                            height={160}
                            className="w-full h-40 hover:scale-105 transition-transform duration-300 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tablet view */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 md:gap-6">
            {socialMediaData.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                {/* MODIFICATION START */}
                <div className="relative p-4 md:p-5 border-b border-gray-100 flex items-center justify-center">
                  <Image
                    src={item.icons}
                    alt={`${item.title} icon`}
                    width={28}
                    height={28}
                    className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2"
                  />
                  <h3 className="text-green-900 font-semibold text-lg md:text-xl">{item.title}</h3>
                </div>
                {/* MODIFICATION END */}

                <div className="h-80 md:h-96 overflow-y-auto p-4 md:p-5">
                  <div className="space-y-3 md:space-y-4">
                    {item.images.map((src, i) => (
                      <div key={i} className="bg-gray-50 border border-gray-200 overflow-hidden">
                        <Image
                          src={src}
                          alt={`${item.title} post ${i + 1}`}
                          width={280}
                          height={200}
                          className="w-full h-44 md:h-52 object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop view */}
          <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
            {socialMediaData.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              >
                {/* MODIFICATION START */}
                <div className="relative p-4 xl:p-5 border-b border-gray-100 flex items-center justify-center">
                  <Image
                    src={item.icons}
                    alt={`${item.title} icon`}
                    width={28}
                    height={28}
                    className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2"
                  />
                  <h3 className="text-green-900 font-semibold text-lg xl:text-xl group-hover:text-green-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                {/* MODIFICATION END */}

                <div className="h-80 xl:h-96 overflow-y-auto p-4 xl:p-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <div className="space-y-3 xl:space-y-4">
                    {item.images.map((src, i) => (
                      <div key={i} className="bg-gray-50 border border-gray-200 overflow-hidden">
                        <Image
                          src={src}
                          alt={`${item.title} post ${i + 1}`}
                          width={240}
                          height={180}
                          className="w-full h-40 xl:h-44 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style jsx global>{`
          .scrollbar-thin {
            scrollbar-width: thin;
          }
          .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
            background-color: #d1d5db;
            border-radius: 6px;
          }
          .scrollbar-track-gray-100::-webkit-scrollbar-track {
            background-color: #f3f4f6;
          }
          .scrollbar-thin::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
        `}</style>
      </section>
      <Footer />
    </main>
  );
};

export default SocialMediaPage;
