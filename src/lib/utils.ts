import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const eventsData = [
  {
    image: "/icons/Event 2.svg",
    date: "June 10, 2025",
    title: "Independence Day",
    description:
      "The 79th Independence Day was celebrated with great pomp on 15 August 2025 at the Central Institute of Subtropical Horticulture......",
  },
  {
    image: "/icons/Event 3.svg",
    date: "April 28, 2025",
    title: "lucknow aam mahotsav",
    description:
      "Scientists at ICAR have developed a new crop variety that can withstand prolonged drought conditions.ICAR-CISH Rehmankhera, Kakori, Lucknow has participated in Uttar Pradesh Aam Mahotsav 2025 and exhibited >300 mango varieties and hybrids......",
  },

  {
    image: "/icons/Event 1.svg",
    date: "May 15, 2025",
    title: "Krishi Darshan Chaupal on common topic",
    description:
      "The 6th Krishi Darshan Chaupal on Mango topic was organized on 25th April 2025 at Central Institute for Subtropical Horticulture......",
  },
];

export const rearchData = [
  {
    image: "/icons/Rectangle 707.svg",
    date: "May 15, 2025",
    titleResearch: "SMART BREEDING FOR CLIMATE RESILIENCE",
    description: "",
  },
  {
    image: "/icons/Rectangle 709.svg",
    date: "June 10, 2025",
    titleResearch: "DIGITL ORCHARDS, SUSTAINABLE HARVEST AND RESOURCE CONSERVATION",
    description: "",
  },
  {
    image: "/icons/Rectangle 712.svg",
    date: "April 28, 2025",
    titleResearch: "PROTECTION TO PREVENTION ECO FRIENDLY PEST MANAGEMENT",
    description: "",
  },
  {
    image: "/icons/Rectangle 713.svg",
    date: "April 28, 2025",
    titleResearch: "INNOVATION IN VALUE CHAIN RESEARCH",
    description: "",
  },
];
export const technoItems = [
  {
    title: "ICAR-FUSICONT",
    description: [
      "In-Vitro Bio-Induction Of Host Plant Tolerance Is A First Kind Of Its Approach In Tissue Culture Towards Production Of Wilt Tolerant Disease Free Planting Material.",
      "This Technology Utilizes A Novel Strain Of The Fungus Trichoderma Reesei (CSR-T-3) Cultivated In A Proprietary Medium. The Bio-Fungicide Has Shown Promising Results In Controlling The Disease, Reducing Production Losses, And Improving Yields",
    ],
    href: "https://cish.in/t_fusicont.php",
    image: "/icons/Rectangle 776.svg",
  },
  {
    title: "ICAR-BIOIMMUNIZER",
    description: [
      "ICAR-FUSICONT Is A Bio-Fungicide, For Managing Banana Wilt Disease, Specifically The Panama Wilt (TR4) Caused By Fusarium Oxysporum F. Sp. Cubense.",
      "An Innovative Tissue Culture Technique Mediated Through Bio-Engineering Of Metabolite-Based Biomolecule (Bioimmune) At In-Vitro Stage For The Production Of Fusarium Oxysporum Sp. Cubense TR-4 Tolerant Plantlets Of Banana.",
      "The Technology Of Bio-Immunization For Producing Fusarium Wilt Tolerant Banana Plantlets Was Tested For Its Bio-Efficacy Through Pot Culture Experiments Where The Immune Treated Plantlets Exhibited A Disease Index Of 0.24 Compared With The FOC TR-4 Treated Control That Showed 3.75 Signifying The Host Induced Tolerance Through Changing The Tissue Culture Protocol.",
    ],
    href: "https://cish.in/technology/bioimmunizer.php",
    image: "/icons/Rectangle 778.svg",
  },
  {
    title: "CISH-METWASH",
    description: [
      "CISH-Metwash is an anti-senescence, antifungal bioactive secondary metabolite-based bio-stimulant (strain CSR M44 + Biopolymer +adjuvants) developed for increasing the shelf life of mango 40-44 day and banana 50-52 days at 13 °C and 85% humidity in reefer container used for export through sea route. ]It is breakthrough technology that stands distinct from the regular ethylene absorbers where the maximum reported shelf life in mango 10 days and banana 15 days.",
    ],
    href: "/tech/aonla",
    image: "/icons/Rectangle 780.svg",
  },
];

export const varietiesItem = [
  {
    title: "Awadh Abhaya",
    description: [
      "Hybrid is regular bearer and very late maturing type. Fruit size is medium to large, and light yellow colour with red blush on peel. Fruits have strong stalk attachment. Fruit weigh about 300-400 g, pulp light yellow, very firm in texture, pulp about 80.76%, TSS 25.4°B. The hybrid has potential for both domestic and export markets because of firm texture and long shelf life.",
    ],
    href: "https://cish.org.in/v_abhaya.php",
    image: "/icons/Awadh Mango.svg",
  },
  {
    title: "CISH Ambika",
    description: [
      "Mango hybrid Ambika is developed by crossing between Amrapali x Janardan Pasand.",
      "Regular bearer late in maturity, yield – 80–90 kg/tree of 10 years old.",
      "Regular bearer late in maturity, yield – 80–90 kg/tree of 10 years old.",
      "Fruits weighs about 300–350 g, TSS is 21°B and rich in mangiferin content.",
    ],
    href: "/tech/leafy",
    image: "/icons/Ambika Mango.svg",
  },
  {
    title: "CISH Arunika",
    description: [
      "Mango hybrid Arunika is developed by crossing between Amrapali x Vanraj.",
      "Dwarf, regular bearer, late in maturity, attractive fruit colour with excellent shelf-life.",
      "Fruits are smooth, weighs about 190–210 g.",
      "TSS 24.6°B, rich in mangiferin and β-carotene.",
      "The hybrid has potential for both internal and export markets.",
    ],
    href: "https://cish.org.in/technology/arunika.php",
    image: "/icons/Arunika Mango.svg",
  },
];

export const technologiesItems = [
  {
    id: "1",
    title: "CISH-BIOENHANCER",
    image: "/icons/Rectangle 735.svg",
    description: ["CISH-Bioenhancer” is a consortium of beneficial bacteria..."],
    href: "https://cish.in/t_bioenhancer.php",
  },
  {
    id: "2",
    title: "CISH-BIOZAPPER",
    image: "/icons/Mask group.svg",
    description: ["CISH-Biozapper showed best plant growth promotory properties..."],
    href: "https://cish.in/t_bioenhancer.php",
  },
  {
    id: "3",
    title: "CISH-FASAL PRABHAT",
    image: "/icons/Mask group (1).svg",
    description: ["CISH-Fasal Prabhat is a water-soluble mixture..."],
    href: "https://cish.in/t_bioenhancer.php",
  },
  {
    id: "4",
    title: "CISH-GLUE TRAP",
    image: "/icons/Mask group (2).svg",
    description: ["Four sheets (Blue/Yellow) applied with white oil based glue..."],
    href: "https://cish.in/t_bioenhancer.php",
  },
  {
    id: "5",
    title: "CISH-MANGO WINE SPECIAL",
    image: "/icons/Mask group (3).svg",
    description: ["CISH-Mango wine special offers a scope for production of mango wine..."],
    href: "hhttps://cish.in/t_bioenhancer.php",
  },
  {
    id: "6",
    title: "PRE-HARVEST BAGGING TECHNOLOGY",
    image: "/icons/Rectangle 749 (1).svg",
    description: ["Maximum fruit firmness of mature and ripe fruit..."],
    href: "https://cish.in/t_bioenhancer.php",
  },
  {
    id: "7",
    title: "SMART FRUIT PRODUCTION SYSTEM",
    image: "/icons/Rectangle 750 (1).svg",
    description: ["Sensor-based soil moisture monitoring system..."],
    href: "https://cish.in/t_bioenhancer.php",
  },
  {
    id: "8",
    title: "CISH-TRIANGULAR VERTICAL NFT HYDROPONICS DESIGN FOR VEGETABLES",
    image: "/icons/Rectangle 751.svg",
    description: ["CISH Triangular NFT Hydroponics produced 2.5 times more yield..."],
    href: "https://cish.in/t_bioenhancer.php",
  },
  {
    id: "9",
    title: "CISH-DOUBLE ROW VERTICAL HYDROPONICS DESIGN",
    image: "/icons/Mask group (4).svg",
    description: ["The hydroponics design structure produced 4 times more yield..."],
    href: "https://cish.in/t_bioenhancer.php",
  },
  {
    id: "10",
    title: "ESPALIER ARCHITECTURE FOR HIGH AND QUALITY YIELD OF GUAVA",
    image: "/icons/Rectangle 888.svg",
    description: ["Espalier training system of guava is well standardized..."],
    href: "https://cish.in/t_bioenhancer.php",
  },
  {
    id: "11",
    title:
      "TECHNOLOGY FOR MASS MULTIPLICATION OF WILT TOLERANT GUAVA ROOTSTOCK (PSIDIUM MOLLE × PSIDIUM GUAJAVA)",
    image: "/icons/Rectangle 889 (1).svg",
    description: [""],
    href: "https://cish.org.in/t_fusicont.php",
  },
];

export const technologiesVarietiesItems = [
  {
    id: "1",
    title: "CISH Lalit",
    image: "/icons/Lalit.svg",
    description: ["CISH- Lalit is a superior seedling selection from Apple guava."],
    href: "https://cish.org.in/v_shweta.php",
  },
  {
    id: "2",
    title: "CISH Shweta",
    image: "/icons/Rectangle 739 (2).svg",
    description: [
      "CISH-Sweta is a one of the high yielding varieties, about 90 kg / plant at the age of 6 years.",
    ],
    href: "https://cish.org.in/v_shweta.php",
  },
  {
    id: "3",
    title: "CISH Dhawal",
    image: "/icons/Dhawal.svg",
    description: [
      "CISH-Dhawal has an average yield of 38.4 t/ha which is more than the double of national average of 15.6t/ha (2021-22) and more than CISH Lalima.",
    ],
    href: "https://cish.org.in/v_shweta.php",
  },
  {
    id: "4",
    title: "Awadh Samriddhi",
    image: "/icons/Rectangle 743 (1).svg",
    description: [
      "Hybrid is regular bearer and late maturing type. Pulp dark yellow, firm pulp with scanty fibre, pulp about 71.8%, TSS 21.6°B. The hybrid has potential for both internal and export markets because of its attractive red fruit colour.",
    ],
    href: "https://cish.org.in/v_shweta.php",
  },
];
export const varieties = [
  { src: "/icons/awadh abhaya.svg", title: "Awadh-Abhaya" },
  { src: "/icons/ambika.svg", title: "CISH-Ambika" },
  { src: "/icons/arunika new.svg", title: "CISH-Arunika" },
];

export const varitiesTechnologies = [
  {
    title: "CISH metwash",
    description: "",
    date: "",
  },
  {
    title: "ICAR-BIOIMMUNIZER",
    description: "",
    date: "",
  },
  { title: "ICAR-FUSICONT", description: "", date: "" },
  {
    title: "CISH-BIOENHANCER",
    description: "",
    date: "",
  },
  { title: "CISH-BIOZAPPER", description: "", date: "" },
  {
    title: "ICAR-FUSICONT",
    description: "",
    date: "",
  },
  { title: "CISH Metwash", description: "", date: "" },
  {
    title: "CISH-BIOZAPPER",
    description: "",
    date: "",
  },
  { title: "CISH Metwash", description: "", date: "" },
  {
    title: "CISH-BIOZAPPER",
    description: "",
    date: "",
  },
  { title: "CISH Metwash", description: "", date: "" },
  {
    title: "ICAR-FUSICONT",
    description: "",
    date: "",
  },
];

export const staffData = [
  {
    id: "crop-improvement", // This ID was correct
    title: "DIVISION OF CROP IMPROVEMENT",
    headName: "DR SMT ANJU BAJPAI",
    headTitle: "HEAD & PRINCIPAL SCIENTIST",
    publications: [""],
    description: [
      "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
    ],
    descriptions: [
      "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
    ],
    image: "/icons/Staff1.svg",
  },
  {
    id: "crop-production", // <-- CORRECTED ID (was "division-crop-improvement")
    title: "DIVISION OF CROP PRODUCTION",
    headName: "DR KUNDAN KISHORE",
    headTitle: "HEAD & PRINCIPAL SCIENTIST",
    description: [
      "The Division of Crop Production is dedicated to standardizing agro-techniques for sustainable and profitable cultivation of subtropical fruits. Under the leadership of Dr. Tarun Adak, Principal Scientist, the division develops comprehensive production technologies including planting systems, nutrition management, irrigation scheduling, and canopy management. The team works on precision farming, soil health management, and climate-resilient cultivation practices. Key contributions include development of high-density planting systems, fertigation protocols, and integrated nutrient management practices that have significantly improved productivity and quality of subtropical fruits.",
    ],
    descriptions: [
      "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
    ],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "crop-protection", // <-- CORRECTED ID (was "division-technology")
    title: "DIVISION OF CROP PROTECTION",
    headName: "DR DEEPAK SINGH",
    headTitle: "HEAD & PRINCIPAL SCIENTIST",
    description: [
      "The Division of Crop Protection, headed by Dr. Anil Kumar Singh, Principal Scientist, focuses on developing eco-friendly and sustainable pest management strategies for subtropical fruit crops. The division conducts research on integrated pest management (IPM), biological control, disease forecasting, and pesticide residue analysis. Major research areas include development of biopesticides, pheromone traps, biocontrol agents, and resistant varieties. The division has successfully developed several innovative solutions including CISH-Glue Traps, biological control programs for major pests, and disease management protocols that have reduced chemical pesticide dependency by 40-50% in horticultural crops.",
    ],
    descriptions: [
      "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
    ],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "post-harvest", // <-- CORRECTED ID (was "division-extension")
    title: "DIVISION OF POST HARVEST MANAGEMENT",
    headName: "DR AKATH SINGH",
    headTitle: "HEAD & PRINCIPAL SCIENTIST",
    description: [
      "The Division of Post Harvest Management, led by Dr. Manoj Kumar Mahawar, Principal Scientist, specializes in developing technologies for reducing post-harvest losses, value addition, and processing of subtropical fruits. The division works on innovative packaging, storage technologies, minimal processing, and product development. Notable achievements include development of CISH-Metwash for extending shelf life, various processed products, packaging technologies, and cold chain management systems. The division's technologies have helped in reducing post-harvest losses from 25-30% to less than 10% and have facilitated export of fresh fruits to international markets.",
    ],
    descriptions: [
      "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
    ],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "rrs-malda", // <-- CORRECTED ID (was "division-technology")
    title: "ICAR-CISH R R S, Malda (West Bengal)",
    headName: "DR DIPAK NAYAK",
    headTitle: "SENIOR SCIENTIST & INCHARGE RRS",
    description: [
      "The Regional Research Station at Malda, West Bengal, conducts location-specific research for the eastern region of India. The station focuses on varietal evaluation, production technology development, and technology transfer activities suitable for the agro-climatic conditions of eastern India.",
    ],
    descriptions: [
      "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
    ],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "kvk-malda", // <-- CORRECTED ID (was "division-technology")
    title: "ICAR-CISH K V K, Malda (West Bengal)",
    headName: "DR DK RAGHAV",
    headTitle: "SENIOR SCIENTIST CUM HEAD KVK",
    description: [
      "The Krishi Vigyan Kendra at Malda serves as the extension arm of ICAR-CISH, conducting front-line demonstrations, training programs for farmers, and technology dissemination activities in the eastern region.",
    ],
    descriptions: [
      "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
    ],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "administrative", // <-- CORRECTED ID (was "division-technology")
    title: "ADMINISTRATIVE",
    description: [
      "The Administrative section handles all administrative functions of the institute including personnel management, finance, procurement, and general administration to support smooth functioning of research activities.",
    ],
    descriptions: [
      "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
    ],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "finance-accounts", // <-- CORRECTED ID (was "division-technology")
    title: "FINANCE & ACCOUNTS",
    description: [
      "The Finance & Accounts section manages financial planning, budget allocation, expenditure monitoring, and accounting procedures ensuring transparent and efficient utilization of research funds.",
    ],
    descriptions: [
      "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
    ],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "technical-staff-main", // <-- CORRECTED ID (was "division-technology")
    title: "TECHNICAL STAFF",
    description: [
      "Technical staff provide essential support to research activities through laboratory assistance, field operations, equipment maintenance, and data collection across all research divisions.",
    ],
    descriptions: [
      "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
    ],
    image: "/icons/dummyStaff.svg",
  },
];

// In lib/utils.ts

export const scientificStaffData = [
  {
    id: "crop-improvement",
    title: "DIVISION OF CROP IMPROVEMENT",
    description: [""],
    image: "/icons/Staff1.svg",
  },
  {
    id: "crop-production",
    title: "DIVISION OF CROP PRODUCTION",
    description: [""],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "crop-protection",
    title: "DIVISION OF CROP PROTECTION",
    description: [""],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "post-harvest",
    title: "DIVISION OF POST HARVEST MANAGEMENT",
    description: [""],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "rrs-malda",
    title: "ICAR-CISH R R S, Malda (West Bengal)",
    description: [""], // You can leave description empty for the card view
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "kvk-malda",
    title: "ICAR-CISH K V K, Malda (West Bengal)",
    description: [""], // You can leave description empty for the card view
    image: "/icons/dummyStaff.svg",
  },
];

export const technicalStaffData = [
  {
    id: "tech-1",
    title: "SENIOR TECHNICAL OFFICER - LAB",
    description: [""],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "tech-2",
    title: "TECHNICAL ASSISTANT - FIELD",
    description: [""],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "tech-3",
    title: "LABORATORY TECHNICIAN",
    description: [""],
    image: "/icons/dummyStaff.svg",
  },
];

export const skilledSupportingStaffData = [
  {
    id: "support-1",
    title: "FARM SUPERVISOR",
    description: [""],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "support-2",
    title: "GREENHOUSE MANAGER",
    description: [""],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "support-3",
    title: "EQUIPMENT OPERATOR",
    description: [""],
    image: "/icons/dummyStaff.svg",
  },
];

export const administrativeStaffData = [
  {
    id: "admin-1",
    title: "ADMINISTRATIVE OFFICER",
    description: [""],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "admin-2",
    title: "FINANCE & ACCOUNTS OFFICER",
    description: [""],
    image: "/icons/dummyStaff.svg",
  },
  {
    id: "admin-3",
    title: "HUMAN RESOURCES COORDINATOR",
    description: [""],
    image: "/icons/dummyStaff.svg",
  },
];

export const divisionStaffData = {
  "crop-improvement": [
    {
      id: "ci-staff-1",
      title: "Dr. Devendra Pandey",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "Dr. Devendra Pandey",
      designation: "Principal Scientist",
      icarEmail: "devendra.panday@icar.gov.in",
      altEmail: "devendracish@gmail.com",
      specialization: "Fruit Science",
      joiningDate: "2/17/1986",
      mscInstitute: "Narendra Dev University of Agriculture & Technology, Kumarganj, Ayodhya",
      phdInstitute: "Indian Agricultural Research Institute, Pusa, New Delhi",
    },
    {
      id: "ci-staff-2",
      title: "Dr. Anju Bajpai",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "Dr. Anju Bajpai",
      designation: "Principal Scientist",
      icarEmail: "anju.bajpai@icar.gov.in",
      altEmail: "anju.bajpai@gmail.com",
      specialization: "Fruit Science",
      joiningDate: "2/17/1986",
      mscInstitute: "Narendra Dev University of Agriculture & Technology, Kumarganj, Ayodhya",
      phdInstitute: "Indian Agricultural Research Institute, Pusa, New Delhi",
    },
    {
      id: "ci-staff-3",
      title: "Dr. A.K. Singh",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "Dr. A.K. Singh",
      designation: "Principal Scientist",
      icarEmail: "a.k.singh@icar.gov.in",
      altEmail: "a.k.singh@gmail.com",
      specialization: "Fruit Science",
      joiningDate: "2/17/1986",
      mscInstitute: "Narendra Dev University of Agriculture & Technology, Kumarganj, Ayodhya",
      phdInstitute: "Indian Agricultural Research Institute, Pusa, New Delhi",
    },
    {
      id: "ci-staff-4",
      title: "Dr. H. Ravishankar",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "Dr. H. Ravishankar",
      designation: "Principal Scientist",
      icarEmail: "h.ravishankar@icar.gov.in",
      altEmail: "h.ravishankar@gmail.com",
      specialization: "Fruit Science",
      joiningDate: "2/17/1986",
      mscInstitute: "Narendra Dev University of Agriculture & Technology, Kumarganj, Ayodhya",
      phdInstitute: "Indian Agricultural Research Institute, Pusa, New Delhi",
    },
    {
      id: "ci-staff-5",
      title: "Dr. H. Ravishankar",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "Dr. H. Ravishankar",
      designation: "Principal Scientist",
      icarEmail: "h.ravishankar@icar.gov.in",
      altEmail: "h.ravishankar@gmail.com",
      specialization: "Fruit Science",
      joiningDate: "2/17/1986",
      mscInstitute: "Narendra Dev University of Agriculture & Technology, Kumarganj, Ayodhya",
      phdInstitute: "Indian Agricultural Research Institute, Pusa, New Delhi",
    },
    {
      id: "ci-staff-6",
      title: "Dr. H. Ravishankar",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "Dr. H. Ravishankar",
      designation: "Principal Scientist",
      icarEmail: "h.ravishankar@icar.gov.in",
      altEmail: "h.ravishankar@gmail.com",
      specialization: "Fruit Science",
      joiningDate: "2/17/1986",
      mscInstitute: "Narendra Dev University of Agriculture & Technology, Kumarganj, Ayodhya",
      phdInstitute: "Indian Agricultural Research Institute, Pusa, New Delhi",
    },
    {
      id: "ci-staff-7",
      title: "Dr. H. Ravishankar",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "Dr. H. Ravishankar",
      designation: "Principal Scientist",
      icarEmail: "h.ravishankar@icar.gov.in",
      altEmail: "h.ravishankar@gmail.com",
      specialization: "Fruit Science",
      joiningDate: "2/17/1986",
      mscInstitute: "Narendra Dev University of Agriculture & Technology, Kumarganj, Ayodhya",
      phdInstitute: "Indian Agricultural Research Institute, Pusa, New Delhi",
    },
    {
      id: "ci-staff-8",
      title: "Dr. H. Ravishankar",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "Dr. H. Ravishankar",
      designation: "Principal Scientist",
      icarEmail: "h.ravishankar@icar.gov.in",
      altEmail: "h.ravishankar@gmail.com",
      specialization: "Fruit Science",
      joiningDate: "2/17/1986",
      mscInstitute: "Narendra Dev University of Agriculture & Technology, Kumarganj, Ayodhya",
      phdInstitute: "Indian Agricultural Research Institute, Pusa, New Delhi",
    },
    {
      id: "ci-staff-9",
      title: "Dr. H. Ravishankar",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "Dr. H. Ravishankar",
      designation: "Principal Scientist",
      icarEmail: "h.ravishankar@icar.gov.in",
      altEmail: "h.ravishankar@gmail.com",
      specialization: "Fruit Science",
      joiningDate: "2/17/1986",
      mscInstitute: "Narendra Dev University of Agriculture & Technology, Kumarganj, Ayodhya",
      phdInstitute: "Indian Agricultural Research Institute, Pusa, New Delhi",
    },
    {
      id: "ci-staff-10",
      title: "Dr. H. Ravishankar",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "Dr. H. Ravishankar",
      designation: "Principal Scientist",
      icarEmail: "h.ravishankar@icar.gov.in",
      altEmail: "h.ravishankar@gmail.com",
      specialization: "Fruit Science",
      joiningDate: "2/17/1986",
      mscInstitute: "Narendra Dev University of Agriculture & Technology, Kumarganj, Ayodhya",
      phdInstitute: "Indian Agricultural Research Institute, Pusa, New Delhi",
    },
    // ... other staff
  ],
  "crop-production": [
    {
      id: "cp-staff-1",
      title: "Dr. Principal Scientist - Agronomy",
      description: ["Expert in subtropical fruit production systems and crop management."],
      image: "/icons/dummyStaff.svg",
    },
    // ... other staff
  ],
  "crop-protection": [
    {
      id: "cpr-staff-1",
      title: "Dr. Senior Scientist - Entomology",
      description: ["Leading research on integrated pest management in horticultural crops."],
      image: "/icons/dummyStaff.svg",
    },
    // ... other staff
  ],
  "post-harvest": [
    {
      id: "ph-staff-1",
      title: "Dr. Principal Scientist - Food Technology",
      description: ["Expert in post-harvest technology and value addition of fruits."],
      image: "/icons/dummyStaff.svg",
    },
    // ... other staff
  ],
};
