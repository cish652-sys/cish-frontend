"use client";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { SectionHeader } from "@/designs/organisms/SectionHeader";

export default function Collaboration() {
  return (
    <>
      <Header />
      <ResponsiveNavbar />

      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Collaboration" }]}
        iconProps={true}
        title="Collaboration"
        description={[""]}
      />

      <section className="py-12 px-6 md:px-16 bg-[#FBFAF0] text-gray-800 leading-relaxed">
        <h2 className="text-green-800 text-2xl font-bold mt-6 mb-6">
          Institute established linkages with the following organizations/ universities/ agencies/
          societies/ entrepreneurs during the period:
        </h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            Department of Biotechnology, 6th-8th Floor, Block 2, CGO Complex, Lodhi Road, New
            Delhi-110003 for (i)Development of national database on mango. (ii) Project on
            management of Fusarium wilt in NER banana using ICAR-FUSICONT Technology.
          </li>

          <li>
            Protection of Plant Varieties and Farmers’ Rights Authority (PPV & FRA), Government of
            India, Ministry of Agriculture & Farmers Welfare, Department of Agriculture,
            Co-operation & Farmers Welfare, NASC Complex, DPS Marg, Opp-Todapur Village, New
            Delhi-110012 for development of morphological descriptors and DUS test guidelines for
            mango, guava, jamun, aonla and bael.
          </li>

          <li>
            Council of Science and Technology U.P. (UPCST), Vigyan Bhawan, 9-Nabiullah Road,
            Lucknow, Uttar Pradesh-226018 for research funding.
          </li>

          <li>
            UP Council of Agricultural Research (UPCAR), 8th Floor, Kisan Mandi Bhawan, Vibhuti
            Khand, Gomtinagar, Lucknow, Uttar Pradesh-226010 for research in priority areas
            established with special reference to Uttar Pradesh.
          </li>

          <li>
            National Bee Board, Department of Agriculture, Cooperation & Farmers Welfare, Ministry
            of Agriculture and Farmers Welfare, Govt. of India ‘B’ Wing, IInd Floor, Janpath Bhawan,
            Janpath, New Delhi -110001; for project on ‘Integrated Bee Development Centre (IBDC)’.
          </li>

          <li>
            Mission for Integrated Development of Horticulture (MIDH)-National Horticulture Mission,
            NHM 248A, Krishi Bhawan, Dr. Rajendra Prasad Road, New Delhi - 110001; for development
            of Hi-Tech Nursery for Public Sector.
          </li>

          <li>
            Bayer Crop Science Limited, Khasra No. 563, Amar Shaheed Path, Lucknow, Uttar Pradesh
            226002; for Evaluation of bio-efficacy and phytotoxicity of Flupyram and Trifloxystrobin
            against anthracnose, powdery mildow and leaf spot and Tebuconazole against anthracnose,
            powdery mildew and post harvest diseases in mango.
          </li>

          <li>
            Agriculture Skill Council of India (ASCI) 6th Floor, GNG Building, Plot No. 10, Sector
            -44, Gurugram, Haryana-122004; for providing the farmers centric training.
          </li>

          <li>
            Department of Science and Technology- Science and Engineering Research Board 5 & 5A,
            Lower Ground Floor Vasant Square Mall Sector-B, Pocket-5 Vasant Kunj New Delhi-110070;
            for supporting research projects.
          </li>

          <li>
            Palvi Industries, Sangli, Maharashtra C/o Sudarshan Agro Engineering, Plot No-H/18-1,
            Behind Latthye Polytechnic College, Sangli, Maharashtra-413436, India; signed MoU for
            five years w.e.f January 01, 2020 for Prototype development of solar light based insect
            traps having electrified killing mechanism and other associated prototype development
            works.
          </li>

          <li>
            National Bank for Agriculture and Rural Development, Plot C-24, G Block, Bandra Kurla
            complex, BKC Road, Bandra East, Mumbai, Maharashtra-400051; for Technology interventions
            for quality mango production for doubling income of mango growers in Malda District,
            West Bengal.
          </li>

          <li>
            National Institute of Agricultural Extension Management (MANAGE), Rajendranagar
            Hyderabad, Telangana signed MoU for three years w.e.f. February 02, 2019; for providing
            support in training program (ACABC, Certified Farm Advisor Programme and Diploma in
            Agricultural Extension Services for Input Dealers (DAESI) at KVK, Malda by SAMETI &
            MANAGE.
          </li>

          <li>
            Crop Life India, 2nd Floor, Ansal Chambers II 6 Bhikaji Cama Place, New Delhi signed MoU
            for three years w.e.f. March 27, 2019; for providing training on organic cultivation.
          </li>

          <li>
            Bundelkhand University, Kanpur Road, Jhansi, Uttar Pradesh signed MoU for three years
            w.e.f. March 12, 2019; for facilitating student training/ post graduate dissertation/
            research work.
          </li>

          <li>
            Green care Hydroponics Private Limited, Lucknow, signed MoU for three years w.e.f. April
            06, 2019; for crop specific hydroponics nutrient management technology.
          </li>

          <li>
            Rama University, Kanpur, signed MoU for three years w.e.f April 18, 2019; for
            facilitating students’ training/postgraduate research.
          </li>

          <li>
            Awadh Aam Utpadak Evam Bagwani Samiti, Malihabad, Lucknow signed MoU for three years
            w.e.f. April 22, 2019; for sustainable development and extension of mango orchard-based
            poultry farming.
          </li>

          <li>
            M/s. Agrarian Development Consultant Private Limited, Lucknow signed MoU for three years
            w.e.f. June 10, 2019; for carrying out the technical support/guidance towards export of
            mango.
          </li>

          <li>
            SRIJAN, 4, Community Shopping Centre, Saidullajab, New Delhi signed MoU for three years
            w.e.f. June 27, 2019; for betterment of farmers and knowledge sharing.
          </li>

          <li>
            Satvik Biotech Kela Utpadak Nursery, Lucknow signed MoU for three years w.e.f. July 04,
            2019 for technology transfer of ICAR- Fusicont to control Fusarium wilt.
          </li>

          <li>
            G.L.A. University, Mathura signed MoU for three years w.e.f. November 20, 2019; for
            promotion of Inter-institutional research collaboration, staff and students’ training/
            post graduate research.
          </li>

          <li>
            M/s Parashar Agrotech Bio Pvt. Ltd., Varanasi signed MoU for five years w.e.f. November
            11, 2020; for licensing CISH Trap container.
          </li>

          <li>
            ICAR-Directorate of Poultry Research, Rajendra nagar, Hyderabad, signed MoU for two
            years w.e.f. November 17, 2020; for Introduction/ evaluation of suitable backyard
            poultry farming in the schedule caste populated village/block, district of west Bengal.
          </li>

          <li>
            M/s Ranaji Biotech India Pvt. Ltd., Kanpur signed MoU for five years w.e.f. November 30,
            2020; for licensing CISH glue trap.
          </li>

          <li>
            Shri Rai Rampati Rai, Raipur village block Maal,Tehsil, Malihabad, U.P signed MoU for
            one year w.e.f. December 15, 2020; for rejuvenate old unproductive mango orchard and
            record related data.
          </li>

          <li>
            Jan evam Krishi Vikas Sansthan, Prayagraj signed MoU for one years w.e.f. December 17,
            2020; for providing training to enable farmers to earn maximum profit by growing fruit
            crops.
          </li>

          <li>
            M/s Garden King, Kannauj, U.P. signed MoU for three years w.e.f. January 01, 2021; for
            pulp processing (turmeric, ginger, garlic, onion paste).
          </li>

          <li>
            M/s Scientia In-vitro Agritech signed MoU for five years w.e.f. January 12, 2021; for
            Production and commercialization of In Vitro immunization of tissue culture banana
            Technology, Lucknow.
          </li>

          <li>
            M/s Life Speaks, Maharashtra signed MoU for five years w.e.f. January 19, 2021; for
            licensing CISH VMAT and OMAT.
          </li>

          <li>
            M/s Saavi Industries Sangli Maharashtra signed MoU for five years w.e.f. January 19,
            2021; for licensing CISH Pest Hammer.
          </li>

          <li>
            G H Raisoni University, Chhindwara, MP signed MoU for five years w.e.f. February 04,
            2021; for facilitating Students Training/ Postgraduate research.
          </li>

          <li>
            ICAR-NINFET, Kolkata signed MoU for five years w.e.f. August 08, 2021; to promote and
            enhance research interests, sharing scientific knowledge, methodology.
          </li>

          <li>
            Amity University, Lucknow signed MoU for five years w.e.f. August 09, 2021; for
            facilitating students’ training/postgraduate research.
          </li>

          <li>
            Ch. Charan Singh Meerut University, Meerut signed MoU for five years w.e.f. September
            08, 2021; for facilitating students’ training/postgraduate research.
          </li>

          <li>
            M/s Sai Enterprises, Lucknow, U.P. signed MoU for three years w.e.f. September 08, 2021;
            for marketing license of CISH-Glue Trap.
          </li>

          <li>
            M/s Balaji Agro Foods, Lucknow signed MoU for five years w.e.f. October 26, 2021; for
            mango based immunity booster products.
          </li>

          <li>
            RML Avadh University, Ayodhya signed MoU for three years w.e.f. November 20, 2021; for
            facilitating students’ training/postgraduate research.
          </li>

          <li>
            M/s Atharv Biotech OPC Pvt. Ltd., Lucknow signed MoU for five years w.e.f. November 30,
            2021; for production of bio-immune tissue cultured banana plants.
          </li>

          <li>
            NABARD, Kolkata signed MoU for three years w.e.f. November 30, 2021; for promoting
            NABARD FPO.
          </li>

          <li>Department of Agriculture, Government of West Bengal.</li>
          <li>Directorate of Horticulture, Govt. of West Bengal.</li>
          <li>Ramakrishna Mission Ashrama, Sargachi, Murshidabad.</li>
          <li>Agricultural Technology Management Agency, Malda.</li>
          <li>Department of Agriculture, Cooperation & Farmers Welfare, Govt. of India.</li>
          <li>Crop Life India Ltd, New Delhi.</li>
          <li>South Asian Biotechnology Center, New Delhi.</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}
