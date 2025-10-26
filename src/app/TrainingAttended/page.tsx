"use client";

import { useState } from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { SectionHeader } from "@/designs/organisms/SectionHeader";

export default function TrainingWorkshops() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const trainingData = [
    [
      "1",
      "Mango Festival",
      "Uttar Pradesh Tourism at the Indira Gandhi Pratisthan, Lucknow",
      "24-25 June 2017",
    ],
    [
      "2",
      "National Symposium on IPR in Agricultural Research",
      "Jointly organized by BBA University, Lucknow and UPCAR, Lucknow",
      "30-31 August 2017",
    ],
    [
      "3",
      "Food Processing Summit, 2017",
      "AP Food Processing Society, Vijayawada, Andhra Pradesh",
      "16 October, 2017",
    ],
    [
      "4",
      "Doing Agribusiness in Uttar Pradesh: Opportunity and Challenges",
      "Centre for Agriculture and Rural Development (CARD) with collaboration of IFPRI at Hotel Gomti Nagar, Lucknow",
      "21 December 2017",
    ],
    [
      "5",
      "Horti-Entrepreneurship seminar on Tissue culture, Nursery & Value addition",
      "ICAR-CISH with collaboration of CARD, Lucknow",
      "19 January, 2018",
    ],
    ["6", "Kisan Mela", "CSIR-CIMAP, Lucknow", "31.01.2018"],
    [
      "7",
      "Sensitization Workshop on “Intellectual Property, Technology Management & Entrepreneurship Development”",
      "ICAR-IISR, Lucknow",
      "22 March 2018",
    ],
    ["8", "Boot camp for Bio-entrepreneur", "IIT Kanpur and BCIL, New Delhi", "23-24 March  2018"],
    [
      "9",
      "National conference on  \"Strategies & Challenges in Doubling Farmers' Income through Horticultural Technologies in Subtropics",
      "ICAR-CISH, Rehmankhera, Lucknow",
      "21-22 June, 2018",
    ],
    [
      "10",
      'National Seminar on "Entrepreneurship development in Beekeeping-2018" at Department of Horticulture, Sapru Marg, Lucknow, UP',
      "Jointly organized by ICAR-CISH and CARD, Lucknow",
      "24 July, 2018",
    ],
    [
      "11",
      "Training Programme on Intellectual Property Valuation and Technology Management",
      "ICAR-NAARM, Hyderabad",
      "August 24-29, 2018",
    ],
    [
      "12",
      "Agri-Startup and Entrepreneurship Conclave -2018 “Unleashing Potentials in Agriculture for Young Agri-preneures” (UPAYA) and World Food Day celebration at National Agriculture Science Complex, New Delhi",
      "ICAR’s Intellectual Property & Technology Management (IP&TM) Unit, New Delhi",
      "16-17 October 2018",
    ],
    [
      "13",
      "Krishi Kumbh 2018 at Indian Institute of Sugarcane Research, Lucknow, UP",
      "The Government of Uttar Pradesh in association with the Government of India",
      "26-28 October 2018",
    ],
    [
      "14",
      "26th Meeting of the Central Sub-committee on crop standards, notification and release of varieties for horticultural crops",
      "ICAR, New Delhi",
      "05/11/2018",
    ],
    [
      "15",
      "State Level Meet of Stakeholders for Entrepreneurship Development",
      "NABARD Regional Office, Lucknow",
      "15/11/2018",
    ],
    [
      "16",
      "Brain Storming Programme on Innovations and Entrepreneurship for Rural Prosperity: Doubling Farmers Income by 2022",
      "ICAR-IARI, New Delhi",
      "22/11/2018",
    ],
    [
      "17",
      "Awareness programme on Intellectual Property Rights",
      "Indian Institute of Technology, Kanpur, UP",
      "10.01.2019",
    ],
    [
      "18",
      "National webinar on IPR in Agriculture sector",
      "S K Rajsthan Agricultural University Bikaner under NAHEP - IG Component",
      "17 July, 2020",
    ],
    [
      "19",
      "Intellectual Property right in Agricultural research & education in India.",
      "NAHEP IP & TM Unit",
      "12-28, September 2020",
    ],
  ];

  const organizedData = [
    ["1", "World Intellectual Property Day 2017", "26 April 2017"],
    ["2", "Workshop on World Environmental Day, 2017", "5 June, 2017"],
    [
      "3",
      "Demonstration of Technology of improved vinegar production developed by Central Institute for Subtropical Horticulture   at Basarahiya, Gusainganj, Lucknow",
      "22-23 June 2017",
    ],
    ["4", "Workshop on sensitization on Agri-incubation for startup", "17 August 2017"],
    [
      "5",
      "Awareness programme on on-farm conservation of mango germplasms at Malihabad, Lucknow",
      "04, 13 and 15th September 2017",
    ],
    [
      "6",
      "Horti-Entrepreneurship seminar on Tissue culture, Nursery & Value addition",
      "19 January, 2018",
    ],
    [
      "7",
      "Horti-Entrepreneurship seminar on Value addition, Nursery & Tissue culture.",
      "12 Feb. 2018",
    ],
    ["11", "Entrepreneurship program on Milky Mushroom Cultivation.", "21 March 2018"],
    ["12", "National Seminar on Entrepreneurship development  in Beekeeping-2018", "24 July, 2018"],
    ["13", "Horti-Entrepreneurship Workshop -2018", "18 August, 2018"],
    ["14", "Horti-preneurship workshop", "August 30-31, 2019"],
    [
      "15",
      "Refresher training course, sponsored by MANAGE (Hyderabad), on 'Opportunities for Value Addition in Horticulture Produce' to upgrade the knowledge and improve the skills of established entrepreneurs.",
      "13-16, November, 2019",
    ],
    [
      "16",
      "Entrepreneurship and Leadership Development Programme' for horticulture entrepreneur, sponsored by National Horticulture Board.",
      "18-27, November, 2019",
    ],
    [
      "17",
      "Entrepreneurship and Leadership Development Programme for Horticulture Entrepreneurs.",
      "20-25, January, 2020",
    ],
    ["18", "One day Workshop on Vertical Hydroponics and Soilless culture.", "24, January, 2020"],
    [
      "19",
      "Entrepreneurship Development Programme on Mango and Guava Pulp Processing.",
      "10-12, February, 2020",
    ],
    ["20", "Kisan Mela and  Exhibition on latest horticultural techniques.", "26, February, 2020"],
    [
      "21",
      "Entrepreneurship Development Programme on Mango,Guava, Bael and Aonla processed product",
      "16-18 March,2020",
    ],
    ["22", "Online Entrepreneurship Meet", "04, June,2020"],
    ["23", "Exhibition of improved Mango varieties", "30, June,2020"],
    [
      "24",
      "Training cum workshop on Entreneurship development on Button Mushroom production and processing",
      "10, September, 2020",
    ],
    [
      "25",
      "One day national e-training programme on growing fruits on the roof top",
      "18,September, 2020",
    ],
    ["26", "Training on Mushroom production", "12/3/2020"],
    ["27", "One month (200 hr) training on organic grower", "2/5/2021"],
    ["28", "200 hour Assistant Gardener Training", "3/1/2021"],
    [
      "29",
      "Training on production, protection and post harvest management of subtropical fruit crops",
      "3/8/2021",
    ],
    [
      "30",
      "Training on ‘Pest management in sub-tropical fruit crops (mango, guava, citrus and pomegranate)",
      "3/22/2021",
    ],
    [
      "31",
      "Training on Intellectual Property right in Agricultural research",
      "10-01-2022 to 15-01-2022",
    ],
  ];

  return (
    <div>
      <Header />
      <ResponsiveNavbar />

      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "DIVISION", href: "/Division" },
          { label: "CISH ITMU / IPR CELL", href: "/Itmu" },
          { label: "Capacity Building" },
        ]}
        iconProps={true}
        title="Commercialization of technologies"
        description={[""]}
      />

      <section className="py-12 px-6 md:px-16 bg-[#FBFAF0]">
        {/* Accordion 1 */}
        <div className="border rounded-md shadow-sm bg-white mb-8">
          <button
            onClick={() => setOpen1(!open1)}
            className="w-full text-left px-6 py-4 bg-[#599A5E] text-white font-semibold flex justify-between items-center"
          >
            TRAINING / WORKSHOP / SEMINAR ATTENDED
            <span>{open1 ? "–" : "+"}</span>
          </button>

          {open1 && (
            <div className="p-6 overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead className="bg-[#599A5E] text-white">
                  <tr>
                    <th className="py-3 px-4">S No</th>
                    <th className="py-3 px-4">Name of The Programme</th>
                    <th className="py-3 px-4">Organized By</th>
                    <th className="py-3 px-4">Date of Programme</th>
                  </tr>
                </thead>
                <tbody>
                  {trainingData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-[#F2F8F0]">
                      {row.map((col, idx) => (
                        <td key={idx} className="py-3 px-4 text-gray-700">
                          {col}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Accordion 2 */}
        <div className="border rounded-md shadow-sm bg-white">
          <button
            onClick={() => setOpen2(!open2)}
            className="w-full text-left px-6 py-4 bg-[#599A5E] text-white font-semibold flex justify-between items-center"
          >
            Capacity Building : Training/workshop/Seminar Organized
            <span>{open2 ? "–" : "+"}</span>
          </button>

          {open2 && (
            <div className="p-6 overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead className="bg-[#599A5E] text-white">
                  <tr>
                    <th className="py-3 px-4">S No</th>
                    <th className="py-3 px-4">
                      Name of Programme (Training/workshop/Seminar etc.) Organized
                    </th>
                    <th className="py-3 px-4">Date of Programme</th>
                  </tr>
                </thead>
                <tbody>
                  {organizedData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-[#F2F8F0]">
                      {row.map((col, idx) => (
                        <td key={idx} className="py-3 px-4 text-gray-700">
                          {col}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
