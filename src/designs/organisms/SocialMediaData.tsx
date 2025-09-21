"use client";
import Image from "next/image";
import iconEarth from "../public/images/SocialMedia/famicons_earth-outline.svg";

const socialMediaData = [
  {
    title: "X",
    images: ["/icons/Xnew.svg", "/icons/Xnew1.svg", "/icons/Xnew.svg"],
  },
  {
    title: "Facebook",
    images: ["/icons/fb1.svg", "/icons/fb2.svg", "/icons/fb1.svg"],
  },
  {
    title: "Instagram",
    images: ["/icons/instanew.svg", "/icons/insta2.svg", "/icons/instanew.svg"],
  },
  {
    title: "YouTube",
    images: ["/icons/youtubenew.svg", "/icons/youtubenew2.svg", "/icons/youtubenew.svg"],
  },
];

export default function SocialMediaSection() {
  return (
    <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 py-8 sm:py-10 md:py-12 bg-white">
      <div className="container max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
        <Image
          src={iconEarth}
          alt="social"
          width={24}
          height={24}
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        />
        <h2 className="text-green-900 font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wide">
          IN SOCIAL MEDIA
        </h2>
      </div>

      <div className="max-w-7xl container mx-auto">
        <div className="block sm:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {socialMediaData.map((item, idx) => (
              <div
                key={idx}
                className="flex-none w-72 bg-white shadow-lg  border border-gray-200 overflow-hidden snap-start"
              >
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-green-900 font-semibold text-center text-lg">{item.title}</h3>
                </div>

                <div className="h-80 overflow-y-auto p-4">
                  <div className="space-y-3">
                    {item.images.map((src, i) => (
                      <div key={i} className="bg-gray-50 border border-gray-200  overflow-hidden">
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
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 md:gap-6">
          {socialMediaData.map((item, idx) => (
            <div key={idx} className="bg-white shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-4 md:p-5 border-b border-gray-100">
                <h3 className="text-green-900 font-semibold text-center text-lg md:text-xl">
                  {item.title}
                </h3>
              </div>

              <div className="h-80 md:h-96 overflow-y-auto p-4 md:p-5">
                <div className="space-y-3 md:space-y-4">
                  {item.images.map((src, i) => (
                    <div key={i} className="bg-gray-50 border border-gray-200  overflow-hidden">
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
            </div>
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
          {socialMediaData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg  border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-4 xl:p-5 border-b border-gray-100">
                <h3 className="text-green-900 font-semibold text-center text-lg xl:text-xl">
                  {item.title}
                </h3>
              </div>

              <div className="h-80 xl:h-96 overflow-y-auto p-4 xl:p-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <div className="space-y-3 xl:space-y-4">
                  {item.images.map((src, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 border border-gray-200  overflow-hidden group"
                    >
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
            </div>
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
  );
}
