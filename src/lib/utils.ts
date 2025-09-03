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
    href: "/tech/solanaceous",
    image: "/icons/Rectangle 776.svg",
  },
  {
    title: "ICAR-BIOIMMUNIZER",
    description: [
      "ICAR-FUSICONT Is A Bio-Fungicide, For Managing Banana Wilt Disease, Specifically The Panama Wilt (TR4) Caused By Fusarium Oxysporum F. Sp. Cubense.",
      "An Innovative Tissue Culture Technique Mediated Through Bio-Engineering Of Metabolite-Based Biomolecule (Bioimmune) At In-Vitro Stage For The Production Of Fusarium Oxysporum Sp. Cubense TR-4 Tolerant Plantlets Of Banana.",
      "The Technology Of Bio-Immunization For Producing Fusarium Wilt Tolerant Banana Plantlets Was Tested For Its Bio-Efficacy Through Pot Culture Experiments Where The Immune Treated Plantlets Exhibited A Disease Index Of 0.24 Compared With The FOC TR-4 Treated Control That Showed 3.75 Signifying The Host Induced Tolerance Through Changing The Tissue Culture Protocol.",
    ],
    href: "/tech/leafy",
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
    href: "/tech/solanaceous",
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
    href: "/tech/aonla",
    image: "/icons/Arunika Mango.svg",
  },
];

export const technologiesItems = [
  {
    id: "1",
    title: "CISH-BIOENHANCER",
    image: "/icons/Rectangle 735.svg",
    description: [
      "CISH-Bioenhancer” is a consortium of beneficial bacteria isolated from indigenous natural farming products (indigenous cow based) like panchgavya, which having the attributes of high solubilization of nutrients like P, K, Zn, IAA production, siderophore etc. ",
    ],
  },
  {
    id: "2",
    title: "CISH-BIOZAPPER",
    image: "/icons/Mask group.svg",
    description: [
      "CISH-Biozapper showed best plant growth promotory properties like IAA, ammonia, HCN production, P, K, and Zn solubilization and soil health in terms of soil enzymes (Dehydrogenase, FDA etc.) and production.",
    ],
  },
  {
    id: "3",
    title: "CISH-FASAL PRABHAT",
    image: "/icons/Mask group (1).svg",
    description: [
      "CISH-Fasal Prabhat is a water-soluble mixture of micronutrients (zinc, boron, magnesium, iron, and copper) and humic acid. ",
    ],
  },
  {
    id: "4",
    title: "CISH-GLUE TRAP",
    image: "/icons/Mask group (2).svg",
    description: [
      "Four sheets (Blue/Yellow) applied with white oil based glue; sheets are foldable, seperated by butter paper. Can be used one by one by folding and removing the butter paper without replacement of sheet.",
    ],
  },
  {
    id: "5",
    title: "CISH-MANGO WINE SPECIAL",
    image: "/icons/Mask group (3).svg",
    description: [
      "CISH-Mango wine special offers a scope for production of mango wine round the year using preserved mango pulp",
    ],
  },
  {
    id: "6",
    title: "PRE-HARVEST BAGGING TECHNOLOGY",
    image: "/icons/Rectangle 749 (1).svg",
    description: [
      "Maximum fruit firmness of mature and ripe fruit (54.52 and 21.93N) was recorded in Double layer Brown/black",
    ],
  },
  {
    id: "7",
    title: "SMART FRUIT PRODUCTION SYSTEM",
    image: "/icons/Rectangle 750 (1).svg",
    description: [
      "Sensor-based soil moisture monitoring system for precise irrigation scheduling in mango and guava.",
    ],
  },
  {
    id: "8",
    title: "CISH-TRIANGULAR VERTICAL NFT HYDROPONICS DESIGN FOR VEGETABLES",
    image: "/icons/Rectangle 751.svg",
    description: [
      "CISH Triangular NFT Hydroponics produced 2.5 times more yield per unit area by utilizing space vertically...",
    ],
  },
  {
    id: "9",
    title: "CISH-DOUBLE ROW VERTICAL HYDROPONICS DESIGN",
    image: "/icons/Mask group (4).svg",
    description: [
      "The hydroponics design structure produced 4 times more yield per unit area by utilizing space vertically as compared with normal NFT and 20 % more yield with single vertical NFT design.",
    ],
  },
  {
    id: "10",
    title: "ESPALIER ARCHITECTURE FOR HIGH AND QUALITY YIELD OF GUAVA",
    image: "/icons/Rectangle 888.svg",
    description: [
      "Espalier training system of guava is well standardized training system for high yield of quality fruits. In this system, fruiting starts 2nd year after planting (8.5 kg/tree)",
    ],
  },
  {
    id: "11",
    title:
      "TECHNOLOGY FOR MASS MULTIPLICATION OF WILT TOLERANT GUAVA ROOTSTOCK (PSIDIUM MOLLE × PSIDIUM GUAJAVA)",
    image: "/icons/Rectangle 889 (1).svg",
    description: [""],
  },
];
export const technologiesVarietiesItems = [
  {
    id: "1",
    title: "CISH Lalit",
    image: "/icons/Lalit.svg",
    description: ["CISH- Lalit is a superior seedling selection from Apple guava."],
  },
  {
    id: "2",
    title: "CISH Shweta",
    image: "/icons/Rectangle 739 (2).svg",
    description: [
      "CISH-Sweta is a one of the high yielding varieties, about 90 kg / plant at the age of 6 years.",
    ],
  },
  {
    id: "3",
    title: "CISH Dhawal",
    image: "/icons/Dhawal.svg",
    description: [
      "CISH-Dhawal has an average yield of 38.4 t/ha which is more than the double of national average of 15.6t/ha (2021-22) and more than CISH Lalima.",
    ],
  },
  {
    id: "4",
    title: "Awadh Samriddhi",
    image: "/icons/Rectangle 743 (1).svg",
    description: [
      "Hybrid is regular bearer and late maturing type. Pulp dark yellow, firm pulp with scanty fibre, pulp about 71.8%, TSS 21.6°B. The hybrid has potential for both internal and export markets because of its attractive red fruit colour.",
    ],
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
