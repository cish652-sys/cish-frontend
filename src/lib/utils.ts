import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Job } from "@/types";
import type { DivisionStaffData } from "@/types";
import { TechnologyCardItem } from "@/types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const eventsData = [
  {
    image: "/icons/Event 2.svg",
    date: "August 15, 2025",
    title: "Independence Day",
    description:
      "The 79th Independence Day was celebrated with great pomp on 15 August 2025 at the Central Institute of Subtropical Horticulture......",
  },
  {
    image: "/icons/Event 3.png",
    date: "July 28, 2025",
    title: "lucknow aam mahotsav",
    description:
      "ICAR-CISH Rehmankhera, Kakori, Lucknow has participated in Uttar Pradesh Aam Mahotsav 2025 and exhibited >300 mango varieties and hybrids......",
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
    titleResearch: "DIGITAL ORCHARDS, SUSTAINABLE HARVEST AND RESOURCE CONSERVATION",
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
export const technoItems: TechnologyCardItem[] = [
  {
    id: 9001,
    title: "ICAR-FUSICONT",
    description: [
      "In-Vitro Bio-Induction Of Host Plant Tolerance Is A First Kind Of Its Approach In Tissue Culture Towards Production Of Wilt Tolerant Disease Free Planting Material.",
      "This Technology Utilizes A Novel Strain Of The Fungus Trichoderma Reesei (CSR-T-3) Cultivated In A Proprietary Medium. The Bio-Fungicide Has Shown Promising Results In Controlling The Disease, Reducing Production Losses, And Improving Yields",
    ],
    href: "https://cish.in/t_fusicont.php",
    image: "/icons/Rectangle 776.svg",
  },
  {
    id: 9002,
    title: "ICAR-BIOIMMUNIZER",
    description: [
      "ICAR-FUSICONT Is A Bio-Fungicide, For Managing Banana Wilt Disease, Specifically The Panama Wilt (TR4) Caused By Fusarium Oxysporum F. Sp. Cubense.",
      "An Innovative Tissue Culture Technique Mediated Through Bio-Engineering Of Metabolite-Based Biomolecule (Bioimmune) At In-Vitro Stage For The Production Of Fusarium Oxysporum Sp. Cubense TR-4 Tolerant Plantlets Of Banana.",
      "The Technology Of Bio-Immunization For Producing Fusarium Wilt Tolerant Banana Plantlets Was Tested For Its Bio-Efficacy Through Pot Culture Experiments Where The Immune Treated Plantlets Exhibited A Disease Index Of 0.24 Compared With The FOC TR-4 Treated Control That Showed 3.75 Signifying The Host Induced Tolerance Through Changing The Tissue Culture Protocol.",
    ],
    href: "https://cish.in/t_bioimmunizer.php",
    image: "/icons/Rectangle 778.svg",
  },
  {
    id: 9003,
    title: "CISH-METWASH",
    description: [
      "CISH-Metwash is an anti-senescence, antifungal bioactive secondary metabolite-based bio-stimulant (strain CSR M44 + Biopolymer +adjuvants) developed for increasing the shelf life of mango 40-44 day and banana 50-52 days at 13 °C and 85% humidity in reefer container used for export through sea route. ]It is breakthrough technology that stands distinct from the regular ethylene absorbers where the maximum reported shelf life in mango 10 days and banana 15 days.",
    ],
    href: "/tech/aonla",
    image: "/icons/Rectangle 780.svg",
  },
];

export const divItems = [
  {
    title: "DIVISION OF CROP IMPROVEMENT AND BIO-TECHONOLOGY",
    description: [
      "The Institute has field gene bank of mandated crops such as mango (745), guava (120), papaya (17), bael (54), litchi (35), aonla (35), Jamun (38), khirnee (17),",
      "mahua (25), tamarind (20), wood apple (17), custard apple (8), mulberry (10), hog plum (3), lasora (5), carambola (3), karonda (30), grape (4) and cape gooseberry ",
      "Regular bearer late in maturity, yield – 80–90 kg/tree of 10 years old.",
      "(4). A catalogue of 184 accessions (including morphological and molecular characterization) was published in 2011 and an interactive CD was prepared.",
    ],
    href: "/Division/crop-improvement",
    image: "/icons/div1.svg",
  },
  {
    title: "CROP PRODUCTION",
    description: [
      "The Institute has field gene bank of mandated crops such as mango (745), guava (120), papaya (17), bael (54), litchi (35), aonla (35), Jamun (38), khirnee (17),",
      "mahua (25), tamarind (20), wood apple (17), custard apple (8), mulberry (10), hog plum (3), lasora (5), carambola (3), karonda (30), grape (4) and cape gooseberry ",
      "Regular bearer late in maturity, yield – 80–90 kg/tree of 10 years old.",
      "(4). A catalogue of 184 accessions (including morphological and molecular characterization) was published in 2011 and an interactive CD was prepared.",
    ],
    href: "/Division/crop-production",
    image: "/icons/div2.svg",
  },
  {
    title: "CROP PROTECTION",
    description: [
      "The Institute has field gene bank of mandated crops such as mango (745), guava (120), papaya (17), bael (54), litchi (35), aonla (35), Jamun (38), khirnee (17),",
      "mahua (25), tamarind (20), wood apple (17), custard apple (8), mulberry (10), hog plum (3), lasora (5), carambola (3), karonda (30), grape (4) and cape gooseberry ",
      "Regular bearer late in maturity, yield – 80–90 kg/tree of 10 years old.",
      "(4). A catalogue of 184 accessions (including morphological and molecular characterization) was published in 2011 and an interactive CD was prepared.",
    ],
    href: "/Division/crop-protection",
    image: "/icons/div3.svg",
  },
  {
    title: "POSTHARVEST MANAGEMENT",
    description: [
      "The Institute has field gene bank of mandated crops such as mango (745), guava (120), papaya (17), bael (54), litchi (35), aonla (35), Jamun (38), khirnee (17),",
      "mahua (25), tamarind (20), wood apple (17), custard apple (8), mulberry (10), hog plum (3), lasora (5), carambola (3), karonda (30), grape (4) and cape gooseberry ",
      "Regular bearer late in maturity, yield – 80–90 kg/tree of 10 years old.",
      "(4). A catalogue of 184 accessions (including morphological and molecular characterization) was published in 2011 and an interactive CD was prepared.",
    ],
    href: "",
    image: "/icons/div4.svg",
  },
];

export const cropImprovementData = [
  {
    title: "Genetic resource management",
    description: [
      "The institute has a field gene bank of mandated crops such as mango (745), guava (120), papaya (17), bael (54), litchi (35), aonla (35), jamun (38), khirnee (17), mahua (25), tamarind (20), wood apple (17), custard apple (8), mulberry (10), hog plum (3), lasora (5), carambola (3), karonda (30), grape (4), and cape gooseberry (4). A catalogue of 184 accessions (including morphological and molecular characterization) was published in 2011 and an interactive CD was prepared.",
    ],
  },
  {
    title: "Molecular characterization and genomics",
    description: [
      "Characterization of about 200 mango accessions using SSR markers was carried out for fingerprinting and diversity assessment based on 30 loci. The fingerprint data for Indian varieties was converted into barcodes and published. Clonal variability among commercial Indian mango varieties is being assessed. Gene expression studies are ongoing at CISH. Transcriptome data in mango has been generated for fruit colour, regulation of flowering, and abiotic stresses. Primer designing and validation have been done for genes involved in anthocyanin pigmentation and flowering. In guava, efforts are underway to study the molecular basis of seediness, fruit colour, and wilt resistance. Gene regulation studies involving COs (Constans), LFY (Leafy), and FLT (Flowering Time) have been completed to elucidate the molecular mechanisms underlying these traits.",
    ],
  },
  {
    title: "Guava (Psidium guajava L.)",
    description: [
      "Molecular characterization and genetic diversity analysis of guava cultivars (22), Psidium species (6), and intervarietal hybrids were conducted using microsatellites (SSR and ISSR), minisatellites (RAMPO), and dominant markers (RAPD). Diversity analysis based on allelic data from RAPD and RAMPO markers revealed clear differentiation between exotic types and cultivars from the northern plains. SSR markers were suitable for distinguishing half-sib populations and producing cell-specific fingerprints. RAPD markers were found to be the best descriptors for fingerprinting closely related accessions. Chloroplast DNA gene sequences were used in mapping the chloroplast genome.",
    ],
  },
  {
    title: "Litchi (Litchi chinensis L.)",
    description: [
      "A mini protocol was developed for DNA isolation using DNeasy extraction with 3.5% CTAB buffer and purification through spin columns. Twenty-seven accessions of litchi and Muzaffarpur were characterized using SSR, ISSR, and RAPD markers. Based on discrimination and resolving power, ISSR markers were found to be more effective than SSRs for cultivar barcode generation and clustering analyses. Phylogenetic analysis using the UPGMA method grouped all varieties into two clusters. Molecular characterization revealed a narrow genetic background among Indian litchi cultivars, suggesting the need for crossbreeding and genetic base widening.",
    ],
  },
  {
    title: "Jamun (Syzygium cumini Skeels.)",
    description: [
      "Eight jamun accessions (J-34, J-36, J-37, J-21, J-32, J-39, J-40, and J-10) were characterized using RAPD and ISSR markers. Cross-amplification of SSR markers was verified in jamun. Accessions J-36 and J-37, both CISH selections, showed the highest similarity based on Jaccard’s coefficient, while J-36 and J-22 were the most distantly related. These findings support the use of molecular markers for jamun diversity studies.",
    ],
  },
];

export const divisionVarietiesData = [
  {
    id: "v1",
    title: "Hybrid-949:",
    description: [
      "This is a cross between Amrapali and Vanraj. The fruits have firm flesh, an attractive dark red peel colour, and better shelf life. This hybrid is a regular bearer and matures late in the season.",
    ],
    image: "/icons/Rectangle 941.svg",
    href: "/varieties/hybrid-949",
  },
  {
    id: "v2",
    title: "Ambika:",
    description: [
      "This hybrid is a cross between Amrapali and Janardhan Pasand. Fruits are oblong–oval, bright yellow with a dark red blush, and have dark yellow, firm pulp with scanty fibre. Average fruit weight ranges from 250–350 g, with TSS of 21.0°Brix. It is a regular-bearing variety that matures late in the season. Ambika has excellent potential for both domestic and export markets due to its attractive fruit colour. The tree yields about 40 kg per plant at around 10 years of age under improved cultural practices.",
    ],
    image: "/icons/Rectangle 947.svg",
    href: "/varieties/ambika",
  },
  {
    id: "v3",
    title: "Arunika:",
    description: [
      "Arunika is a cross between Amrapali and Vanraj. The tree is prolific, dwarf, and compact. Fruits are smooth, yellow with a red blush, and weigh about 190–210 g. The pulp is orange, firm, with scanty fibre and makes up about 68% of the fruit. TSS is around 24.0°Brix, and the stone is thin. This hybrid is suitable for both internal and export markets due to its attractive fruit colour. Average fruit yield is about 60 kg per plant at 8 years of age. It has shown wide adaptability and performs well under northern plains conditions. The variety is a regular bearer with red peel colour.",
    ],
    image: "/icons/Rectangle 941.svg",
    href: "/varieties/arunika",
  },
  {
    id: "v4",
    title: "Hybrid-1084:",
    description: [
      "This hybrid, a cross between Amrapali and Janardhan Pasand, is promising for its attractive dark red peel colour and good shelf life. It is a regular-bearing type with potential for both domestic and export markets.",
    ],
    image: "/icons/Rectangle 941.svg",
    href: "/varieties/hybrid-1084",
  },
  {
    id: "v5",
    title: "CISH-M-2:",
    description: [
      "This hybrid is a cross between Dashehari and Chausa. The fruits are medium-sized (around 260 g), oblong, and have smooth, tough skin that turns yellowish-green when ripe. The flesh is firm, yellowish-orange in colour, with scanty fibre and TSS of 22.6°Brix. CISH-M-2 has strong commercial potential due to its resistance to sooty mould, even after heavy rains. The fruits resemble Dashehari — a leading variety of North India — but mature about 15 days later.",
    ],
    image: "/icons/Rectangle 947.svg",
    href: "/varieties/cish-m-2",
  },
];

export const varietiesItem: TechnologyCardItem[] = [
  {
    id: 1,
    title: "Awadh Abhaya",
    description: [
      "Hybrid is regular bearer and very late maturing type. Fruit size is medium to large, and light yellow colour with red blush on peel. Fruits have strong stalk attachment. Fruit weigh about 300-400 g, pulp light yellow, very firm in texture, pulp about 80.76%, TSS 25.4°B. The hybrid has potential for both domestic and export markets because of firm texture and long shelf life.",
    ],
    href: "https://cish.in/v_abhaya.php",
    image: "/icons/Awadh Mango.svg",
  },
  {
    id: 2,
    title: "CISH Ambika",
    description: [
      "Mango hybrid Ambika is developed by crossing between Amrapali x Janardan Pasand.",
      "Regular bearer late in maturity, yield – 80–90 kg/tree of 10 years old.",
      "Regular bearer late in maturity, yield – 80–90 kg/tree of 10 years old.",
      "Fruits weighs about 300–350 g, TSS is 21°B and rich in mangiferin content.",
    ],
    href: "https://cish.in/v_ambika.php",
    image: "/icons/Ambika Mango.svg",
  },
  {
    id: 3,
    title: "CISH Arunika",
    description: [
      "Mango hybrid Arunika is developed by crossing between Amrapali x Vanraj.",
      "Dwarf, regular bearer, late in maturity, attractive fruit colour with excellent shelf-life.",
      "Fruits are smooth, weighs about 190–210 g.",
      "TSS 24.6°B, rich in mangiferin and β-carotene.",
      "The hybrid has potential for both internal and export markets.",
    ],
    href: "https://cish.in/v_arunika.php",
    image: "/icons/Arunika Mango.svg",
  },
];

export const technologiesItems: TechnologyCardItem[] = [
  {
    id: 1,
    title: "CISH-BIOENHANCER",
    image: "/icons/Rectangle 735.svg",
    description: ["CISH-Bioenhancer” is a consortium of beneficial bacteria..."],
    href: "https://cish.in/t_bioenhancer.php",
  },
  {
    id: 2,
    title: "CISH-BIOZAPPER",
    image: "/icons/Mask group.svg",
    description: ["CISH-Biozapper showed best plant growth promotory properties..."],
    href: "",
  },
  {
    id: 3,
    title: "CISH-FASAL PRABHAT",
    image: "/icons/Mask group (1).svg",
    description: ["CISH-Fasal Prabhat is a water-soluble mixture..."],
    href: "",
  },
  {
    id: 4,
    title: "CISH-GLUE TRAP",
    image: "/icons/Mask group (2).svg",
    description: ["Four sheets (Blue/Yellow) applied with white oil based glue..."],
    href: "",
  },
  {
    id: 5,
    title: "CISH-MANGO WINE SPECIAL",
    image: "/icons/Mask group (3).svg",
    description: ["CISH-Mango wine special offers a scope for production of mango wine..."],
    href: "https://cish.in/t_mango_wine_special.php",
  },
  {
    id: 6,
    title: "PRE-HARVEST BAGGING TECHNOLOGY",
    image: "/icons/Rectangle 749 (1).svg",
    description: ["Maximum fruit firmness of mature and ripe fruit..."],
    href: "",
  },
  {
    id: 7,
    title: "SMART FRUIT PRODUCTION SYSTEM",
    image: "/icons/Rectangle 750 (1).svg",
    description: ["Sensor-based soil moisture monitoring system..."],
    href: "",
  },
  {
    id: 8,
    title: "CISH-TRIANGULAR VERTICAL NFT HYDROPONICS DESIGN FOR VEGETABLES",
    image: "/icons/Rectangle 751.svg",
    description: ["CISH Triangular NFT Hydroponics produced 2.5 times more yield..."],
    href: "",
  },
  {
    id: 9,
    title: "CISH-DOUBLE ROW VERTICAL HYDROPONICS DESIGN",
    image: "/icons/Mask group (4).svg",
    description: ["The hydroponics design structure produced 4 times more yield..."],
    href: "",
  },
  {
    id: 10,
    title: "ESPALIER ARCHITECTURE FOR HIGH AND QUALITY YIELD OF GUAVA",
    image: "/icons/Rectangle 888.svg",
    description: ["Espalier training system of guava is well standardized..."],
    href: "",
  },
  {
    id: 11,
    title:
      "TECHNOLOGY FOR MASS MULTIPLICATION OF WILT TOLERANT GUAVA ROOTSTOCK (PSIDIUM MOLLE × PSIDIUM GUAJAVA)",
    image: "/icons/Rectangle 889 (1).svg",
    description: [""],
    href: "",
  },
];

export const technologiesVarietiesItems: TechnologyCardItem[] = [
  {
    id: 1,
    title: "CISH Lalit",
    image: "/icons/Lalit.svg",
    description: ["CISH- Lalit is a superior seedling selection from Apple guava."],
    href: "https://cish.in/v_lalit.php",
  },
  {
    id: 2,
    title: "CISH Shweta",
    image: "/icons/Rectangle 739 (2).svg",
    description: [
      "CISH-Sweta is a one of the high yielding varieties, about 90 kg / plant at the age of 6 years.",
    ],
    href: "https://cish.in/v_shweta.php",
  },
  {
    id: 3,
    title: "CISH Dhawal",
    image: "/icons/Dhawal.svg",
    description: [
      "CISH-Dhawal has an average yield of 38.4 t/ha which is more than the double of national average of 15.6t/ha (2021-22) and more than CISH Lalima.",
    ],
    href: "https://cish.in/v_dhawal.php",
  },
  {
    id: 4,
    title: "Awadh Samriddhi",
    image: "/icons/Rectangle 743 (1).svg",
    description: [
      "Hybrid is regular bearer and late maturing type. Pulp dark yellow, firm pulp with scanty fibre, pulp about 71.8%, TSS 21.6°B. The hybrid has potential for both internal and export markets because of its attractive red fruit colour.",
    ],
    href: "https://cish.in/v_samriddhi.php",
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
  // { title: "CISH Metwash", description: "", date: "" },
  {
    title: "CISH-BIOZAPPER",
    description: "",
    date: "",
  },
  // { title: "CISH Metwash", description: "", date: "" },
  {
    title: "CISH-BIOZAPPER",
    description: "",
    date: "",
  },
  // { title: "CISH Metwash", description: "", date: "" },
  {
    title: "ICAR-FUSICONT",
    description: "",
    date: "",
  },
];

export const dummyStaffData = [
  {
    id: "crop-improvement", // This ID was correct
    title: "DIVISION OF CROP IMPROVEMENT",
    headName: "DR SMT ANJU BAJPAI",
    headTitle: "HEAD & PRINCIPAL SCIENTIST",
    publications: [""],
    description: [
      "",
      // "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      // "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
    ],
    descriptions: [
      // "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      // "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
      // "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
      "",
    ],
    image: "/icons/Staff1.svg",
    href: "/staff/crop-improvement",
  },
  {
    id: "crop-production", // <-- CORRECTED ID (was "division-crop-improvement")
    title: "DIVISION OF CROP PRODUCTION",
    headName: "DR KUNDAN KISHORE",
    headTitle: "HEAD & PRINCIPAL SCIENTIST",
    description: [
      // "The Division of Crop Production is dedicated to standardizing agro-techniques for sustainable and profitable cultivation of subtropical fruits. Under the leadership of Dr. Tarun Adak, Principal Scientist, the division develops comprehensive production technologies including planting systems, nutrition management, irrigation scheduling, and canopy management. The team works on precision farming, soil health management, and climate-resilient cultivation practices. Key contributions include development of high-density planting systems, fertigation protocols, and integrated nutrient management practices that have significantly improved productivity and quality of subtropical fruits.",
      "",
    ],
    descriptions: [
      // "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      // "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
      "",
    ],
    image: "/icons/dummyStaff.svg",
    href: "/staff/crop-production",
  },
  {
    id: "crop-protection", // <-- CORRECTED ID (was "division-technology")
    title: "DIVISION OF CROP PROTECTION",
    headName: "DR DEEPAK SINGH",
    headTitle: "HEAD & PRINCIPAL SCIENTIST",
    description: [
      // "The Division of Crop Protection, headed by Dr. Anil Kumar Singh, Principal Scientist, focuses on developing eco-friendly and sustainable pest management strategies for subtropical fruit crops. The division conducts research on integrated pest management (IPM), biological control, disease forecasting, and pesticide residue analysis. Major research areas include development of biopesticides, pheromone traps, biocontrol agents, and resistant varieties. The division has successfully developed several innovative solutions including CISH-Glue Traps, biological control programs for major pests, and disease management protocols that have reduced chemical pesticide dependency by 40-50% in horticultural crops.",
      "",
    ],
    descriptions: [
      // "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      // "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
      "",
    ],
    image: "/icons/dummyStaff.svg",
    href: "/staff/crop-protection",
  },
  {
    id: "post-harvest",
    title: "DIVISION OF POST HARVEST MANAGEMENT",
    headName: "DR AKATH SINGH",
    headTitle: "HEAD & PRINCIPAL SCIENTIST",
    description: [
      // "The Division of Post Harvest Management, led by Dr. Manoj Kumar Mahawar, Principal Scientist, specializes in developing technologies for reducing post-harvest losses, value addition, and processing of subtropical fruits. The division works on innovative packaging, storage technologies, minimal processing, and product development. Notable achievements include development of CISH-Metwash for extending shelf life, various processed products, packaging technologies, and cold chain management systems. The division's technologies have helped in reducing post-harvest losses from 25-30% to less than 10% and have facilitated export of fresh fruits to international markets.",
      "",
    ],
    descriptions: [
      // "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      // "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
      "",
    ],
    image: "/icons/dummyStaff.svg",
    href: "/staff/crop-post-harvest",
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
    href: "/staff/rrs-malda", // <-- ADD THIS
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
      // "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      // "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
      "",
    ],
    image: "/icons/dummyStaff.svg",
    href: "/staff/kvk-malda", // <-- ADD THIS
  },
  {
    id: "administrative", // <-- CORRECTED ID (was "division-technology")
    title: "ADMINISTRATIVE",
    description: [
      "The Administrative section handles all administrative functions of the institute including personnel management, finance, procurement, and general administration to support smooth functioning of research activities.",
    ],
    descriptions: [
      // "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      // "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
      "",
    ],
    image: "/icons/dummyStaff.svg",
    href: "/staff/administrative", // <-- ADD THIS
  },
  {
    id: "finance-accounts", // <-- CORRECTED ID (was "division-technology")
    title: "FINANCE & ACCOUNTS",
    description: [
      "The Finance & Accounts section manages financial planning, budget allocation, expenditure monitoring, and accounting procedures ensuring transparent and efficient utilization of research funds.",
    ],
    descriptions: [
      // "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      // "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
      "",
    ],
    image: "/icons/dummyStaff.svg",
    href: "/staff/finance-accounts", // <-- ADD THIS
  },
  {
    id: "technical-staff-main", // <-- CORRECTED ID (was "division-technology")
    title: "TECHNICAL STAFF",
    description: [
      "Technical staff provide essential support to research activities through laboratory assistance, field operations, equipment maintenance, and data collection across all research divisions.",
    ],
    descriptions: [
      // "AK Singh, Anju Bajpai, S Rajan, SS Das, KK Mishra (2021) Modified BBCH codification and correlation of phenological characteristics with climatic variables in jamun (Syzigium cuminii Skeels).Scientia Horticulturae https://doi.org/10.1016/j.scienta.2021.110081",
      // "Anju Bajpai, A.K. Singh and H. Ravishankar (2012) Reproductive Phenology, Flower biology and pollination in Jamun (Syzygium cumini L.)(In press) Indian J. of Horticulture. Septemember-2012;. 69(3) : 416-419",
      "",
    ],
    image: "/icons/dummyStaff.svg",
    href: "/staff/technical-staff-main", // <-- ADD THIS
  },
];

// In lib/utils.ts

export const dummyScientificStaffData = [
  {
    id: "crop-improvement",
    title: "DIVISION OF CROP IMPROVEMENT",
    description: [""],
    image: "/icons/Division of Crop Improvement.png",
    href: "/staff/crop-improvement", // <-- ADDED
  },
  {
    id: "crop-production",
    title: "DIVISION OF CROP PRODUCTION",
    description: [""],
    image: "/icons/Division of Crop Production.png",
    href: "/staff/crop-production", // <-- ADDED
  },
  {
    id: "crop-protection",
    title: "DIVISION OF CROP PROTECTION",
    description: [""],
    image: "/icons/Division of Crop Protection.png",
    href: "/staff/crop-protection", // <-- ADDED
  },
  {
    id: "post-harvest",
    title: "DIVISION OF POST HARVEST MANAGEMENT",
    description: [""],
    image: "/icons/Division of Post-Harvest Management.png",
    href: "/staff/post-harvest", // <-- ADDED
  },
  {
    id: "rrs-malda",
    title: "ICAR-CISH R R S, Malda (West Bengal)",
    description: [""],
    image: "/icons/rrs.png",
    href: "/staff/rrs-malda", // <-- ADDED
  },
  {
    id: "kvk-malda",
    title: "ICAR-CISH K V K, Malda (West Bengal)",
    description: [""],
    image: "/icons/kvk.png",
    href: "/staff/kvk-malda", // <-- ADDED
  },
];

export const technicalStaffData = [
  {
    id: "tech-1",
    title: "SENIOR TECHNICAL OFFICER - LAB",
    description: [""],
    image: "/icons/dummyStaff.svg",
    href: "/staff/tech-1", // <-- ADDED
  },
  {
    id: "tech-2",
    title: "TECHNICAL ASSISTANT - FIELD",
    description: [""],
    image: "/icons/dummyStaff.svg",
    href: "/staff/tech-2", // <-- ADDED
  },
  {
    id: "tech-3",
    title: "LABORATORY TECHNICIAN",
    description: [""],
    image: "/icons/dummyStaff.svg",
    href: "/staff/tech-3", // <-- ADDED
  },
];

export const skilledSupportingStaffData = [
  {
    id: "support-1",
    title: "FARM SUPERVISOR",
    description: [""],
    image: "/icons/dummyStaff.svg",
    href: "/staff/support-1", // <-- ADDED
  },
  {
    id: "support-2",
    title: "GREENHOUSE MANAGER",
    description: [""],
    image: "/icons/dummyStaff.svg",
    href: "/staff/support-2", // <-- ADDED
  },
  {
    id: "support-3",
    title: "EQUIPMENT OPERATOR",
    description: [""],
    image: "/icons/dummyStaff.svg",
    href: "/staff/support-3", // <-- ADDED
  },
];

export const administrativeStaffData = [
  {
    id: "admin-1",
    title: "ADMINISTRATIVE OFFICER",
    description: [""],
    image: "/icons/dummyStaff.svg",
    href: "/staff/admin-1", // <-- ADDED
  },
  {
    id: "admin-2",
    title: "FINANCE & ACCOUNTS OFFICER",
    description: [""],
    image: "/icons/dummyStaff.svg",
    href: "/staff/admin-2", // <-- ADDED
  },
  {
    id: "admin-3",
    title: "HUMAN RESOURCES COORDINATOR",
    description: [""],
    image: "/icons/dummyStaff.svg",
    href: "/staff/admin-3", // <-- ADDED
  },
];

export const dummyDivisionStaffData: DivisionStaffData = {
  "crop-improvement": [
    {
      id: "ci-staff-2",
      title: "Dr. Anju Bajpai",
      description: ["HEAD & PRINCIPAL SCIENTIST"], // Using designation for card description
      image: "/icons/Staff1.svg", // Using the correct image from staffData
      name: "Dr. Anju Bajpai",
      designation: "HEAD & PRINCIPAL SCIENTIST", // Updated designation
      icarEmail: "anju.bajpai@icar.gov.in",
      altEmail: "anju.bajpai@gmail.com",
      specialization: "Fruit Science",
      joiningDate: "2/17/1986",
      mscInstitute: "Narendra Dev University of Agriculture & Technology, Kumarganj, Ayodhya",
      phdInstitute: "Indian Agricultural Research Institute, Pusa, New Delhi",
    },
    // The rest of the staff for this division follows
    {
      id: "ci-staff-1",
      title: "Dr. Devendra Pandey",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Ci1.svg",
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
      id: "ci-staff-3",
      title: "Dr. Maneesh Mishra",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "Dr. Maneesh Mishra",
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
      title: "Dr. Ashish Yadav",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Ci2.svg",
      name: "Dr. Ashish Yadav",
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
      title: "Dr. Sanjay Kumar Singh",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Ci3.svg",
      name: "Dr. Sanjay Kumar Singh",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "ci-staff-9",
      title: "Dr H C Verma",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/hcverma.svg",
      name: "Dr H C Verma",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "ci-staff-6",
      title: "Dr. Muthu Kumar M",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Ci5.svg",
      name: "Dr. Muthu Kumar M",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "ci-staff-7",
      title: "Dr. Israr Ahmad",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Ci6.svg",
      name: "Dr. Israr Ahmad",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "ci-staff-8",
      title: "Dr. Anshuman Singh",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Ci7.svg",
      name: "Dr. Anshuman Singh",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "ci-staff-9",
      title: "Swosti Suvadarsini Das",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "Swosti Suvadarsini Das",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "ci-staff-10",
      title: "Dr Vishambhar Dayal",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Ci8.svg",
      name: "Dr Vishambhar Dayal",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "ci-staff-12",
      title: "Mr Amarkant Kushwaha",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Ci9.svg",
      name: "Mr Amarkant Kushwaha",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    // ... other staff would continue here, for example:
    // {
    //   id: "ci-staff-11",
    //   title: "Dr. Vishambhar Dayal",
    //   ...
    // },
    // {
    //   id: "ci-staff-12",
    //   title: "Mr Amarkant Kushwaha",
    //   ...
    // },
  ],
  "crop-production": [
    {
      id: "cp-staff-1",
      title: "DR KUNDAN KISHORE",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "DR KUNDAN KISHORE",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "cp-staff-1",
      title: "DR PL SAROJ",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Cp5.svg",
      name: "DR PL SAROJ",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "cp-staff-2",
      title: "DR SK SHUKLA",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Cp1.svg",
      name: "DR SK SHUKLA",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "cp-staff-3",
      title: "DR DINESH KUMAR",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Cp2.svg",
      name: "DR DINESH KUMAR",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "cp-staff-4",
      title: "DR NARESH BABU",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "DR NARESH BABU",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "cp-staff-5",
      title: "DR SHYAM RAJ SINGH",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Cp3.svg",
      name: "DR SHYAM RAJ SINGH",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "cp-staff-6",
      title: "DR KK SRIVASTAVA",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "DR KK SRIVASTAVA",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "cp-staff-7",
      title: "DR DUSHYANT MISHRA",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "DR DUSHYANT MISHRA",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "cp-staff-8",
      title: "DR TARUN ADAK",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/dummyStaff.svg",
      name: "DR TARUN ADAK",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
    {
      id: "cp-staff-9",
      title: "DR GOVIND KUMAR",
      description: ["Specializes in mango and guava breeding programs with 15+ years experience."],
      image: "/icons/Cp4.svg",
      name: "DR GOVIND KUMAR",
      designation: "N/A",
      icarEmail: "N/A",
      altEmail: "N/A",
      specialization: "Fruit Science",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
  ],
  "crop-protection": [
    {
      id: "cpr-staff-1",
      title: "Dr. Senior Scientist - Entomology",
      description: ["Leading research on integrated pest management in horticultural crops."],
      image: "/icons/Ci9.svg",
      // --- ADD ALL THESE ---
      name: "Dr. Senior Scientist",
      designation: "Senior Scientist - Entomology",
      icarEmail: "dummy.email@icar.gov.in",
      altEmail: "dummy.email@gmail.com",
      specialization: "Entomology",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
  ],
  "post-harvest": [
    {
      id: "ph-staff-1",
      title: "Dr. Principal Scientist - Food Technology",
      description: ["Expert in post-harvest technology and value addition of fruits."],
      image: "/icons/dummyStaff.svg",
      // --- ADD ALL THESE ---
      name: "Dr. Principal Scientist",
      designation: "Principal Scientist - Food Technology",
      icarEmail: "dummy.email@icar.gov.in",
      altEmail: "dummy.email@gmail.com",
      specialization: "Food Technology",
      joiningDate: "N/A",
      mscInstitute: "N/A",
      phdInstitute: "N/A",
    },
  ],
};

export const guavaVarietiesData = [
  {
    id: "g1",
    title: "Lalit:",
    description: [
      "This is a selection from a half-sib population of apple guava suitable for both fresh consumption and processing. It responds well to pruning and yields about 100 kg per plant after six years under high-density planting (3 × 6 m). Fruits are medium-sized, with red flesh, saffron-yellow skin with a red blush, and a firm pink pulp weighing 185–200 g. It has a good balance of sugar and acidity, high TSS (12.0°Brix), and rich vitamin C content. The pink colour of the processed beverage remains stable for over a year in storage.",
    ],
    image: "/icons/var3.svg",
    href: "/varieties/lalit",
  },
  {
    id: "g2",
    title: "Shweta:",
    description: [
      "This variety is selected from a half-sib population of apple guava. Fruits are globose, medium-sized (about 225 g), with creamy white skin and snow-white flesh. They have soft seeds (fewer than 100 per fruit), good keeping quality, and high TSS (12.5°Brix). The tree is vigorous, medium-sized, and produces around 90 kg per plant at six years of age.",
    ],
    image: "/icons/var4.svg",
    href: "/varieties/shweta",
  },
  {
    id: "g3",
    title: "Dhawal:",
    description: [
      "This selection bears deep red fruits with soft seeds, attractive shape, high TSS (11.0°Brix), and a long shelf life. The fruits have higher ascorbic acid content (185 mg/100g pulp) and uniform pigmentation throughout the pulp.",
    ],
    image: "/icons/var5.svg",
    href: "/varieties/dhawal",
  },
  {
    id: "g4",
    title: "Lalima:",
    description: [
      "This selection, derived from open-pollinated seedling guava populations at Lucknow, has shown great promise. Fruits weigh around 180 g, have TSS of 13.0°Brix, attractive red-blushed skin, and good responsiveness to pruning. It yields well and produces a high proportion of coloured fruits.",
    ],
    image: "/icons/var6.svg",
    href: "/varieties/lalima-guava",
  },
];

export const jamunVarietiesData = [
  {
    id: "j1",
    title: "CISH J-42:",
    description: [
      "This is a seedless accession obtained from a landrace of Thane district, Maharashtra. Fruits are oblong with good taste and average 8.0 g in weight. Average fruit length is 2.57 cm and breadth 2.18 cm. Pulp content is about 85%, TSS 14.0°Brix, acidity 1.0%, and anthocyanin 1.56%. The total antioxidant value is 5.54 mg AAE/g, with high phenolic (26.78 mg/g fresh weight) and flavonoid (11.2 mg/g fresh weight) contents. Its seedlessness and high antioxidant potential make it ideal for processing and value-added products.",
    ],
    image: "/icons/var1.svg",
    href: "/varieties/cish-j-42",
  },
  {
    id: "j2",
    title: "CISH J-37:",
    description: [
      "This variety was selected from a land race of Lucknow district based on fruit and seedling traits. Fruits ripen in the last week of June and average 22.0 g in weight, 3.9 cm in length, and 3.0 cm in diameter. Pulp content is 91.56%, TSS 13.0°Brix, acidity 0.58%, and total antioxidant value 38.38 mg AEAC/g. It is suitable for table use and processing.",
    ],
    image: "/icons/var1.svg",
    href: "/varieties/cish-b-2-jamun",
  },
];

export const baelVarietiesData = [
  {
    id: "b1",
    title: "CISH B-1:",
    description: [
      "It is a selection from open pollinated seedlings. It is a mid-season variety which matures during April–May. Trees are tall, vigorous with dense canopy, erect growth habit, precocious and heavy bearer. Fruit shape is oval to oblong, fruit size 15–17.8 cm in length and 39.2–41.0 cm in circumference, average fruit weight 1.01 kg. Fruits are thin-shelled with pleasant flavour and less mucilage content. It has a very good taste and flavour. Fruits have 65.57 per cent pulp, TSS 38.0°B. Fruits are also good for processing; total carotenoids 1.18 mg/100 g pulp, total sugar 20.54 per cent and tannin content 3.5 per cent. The yield of fully grown up tree varies from 50–80 kg. It is suitable for canning and slice preparation.",
    ],
    image: "/icons/var1.svg",
    href: "/varieties/cish-b-1",
  },
  {
    id: "b2",
    title: "CISH - B2:",
    description: [
      "It is also a selection from open pollinated seedlings. Tree is dwarf with medium spreading habit. Foliage is sparse and almost thornless, precocious with moderate bearing habit. Fruits are oblong to round in shape with average length of 14.80 cm and circumference of 52.64 cm. Fruit weight is from 1.80–2.70 kg/fruit. Fruit pulp is orange-yellow and shell is thin (0.24–0.26 cm). Seed and fibre contents are low with average seed number 50.12 per fruit and average seed weight 4.40 g. Seed-to-pulp ratio is 1:270. It has good taste with pleasant aroma. It has 61.32 per cent pulp, 31.90°B TSS, 0.99 mg/100 g total carotenoids, 16.33 per cent total sugars and 2.45 per cent tannin content. The yield of the grown-up tree varies from 60–90 kg, whereas CISH B-2 is excellent, high-yielding variety for processing with pleasantly aromatic pulp.",
    ],
    image: "/icons/var1.svg",
    href: "/varieties/lalima-bael",
  },
];
export const jobData: Job[] = [
  {
    id: 1,
    title: "WALK IN INTERVIEW NOTICE FOR THE POST OF YOUNG PROFESSIONAL II",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Project Of Young Professional II.",
    lastDateText: "Last Date Of Application 28th August 2025.",
    publishedDate: "19-08-2025",
    startDate: "19-08-2025",
    interviewDate: "28-08-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form"],
  },
  {
    id: 2,
    title: "WALK IN INTERVIEW NOTICE FOR THE POST OF YOUNG PROFESSIONAL I",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Project Of Young Professional I.",
    lastDateText: "Last Date Of Application 01th August 2025.",
    publishedDate: "22-07-2025",
    startDate: "22-07-2025",
    interviewDate: "01-08-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form", "result"],
  },
  {
    id: 3,
    title: "WALK IN INTERVIEW NOTICE FOR THE POST OF YOUNG PROFESSIONAL I",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Project Of Young Professional I.",
    lastDateText: "Last Date Of Application 30th July 2025.",
    publishedDate: "22-07-2025",
    startDate: "22-07-2025",
    interviewDate: "30-07-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form", "result"],
  },
  {
    id: 4,
    title: "VACANCY NOTIFICATION FOR THE POST OF PART TIME MEDICAL DOCTOR",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Specific Period Of Young Professional-I (YP-I, ) For A Short Duration At ICAR-CISH.",
    lastDateText: "Last Date Of Application 16th Jun 2025.",
    publishedDate: "29-05-2025",
    startDate: "29-05-2025",
    interviewDate: "16-06-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form", "result"],
  },
  {
    id: 5,
    title: "WALK IN INTERVIEW NOTICE FOR THE POST OF YOUNG PROFESSIONAL I",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Specific Period Of Young Professional-I (YP-I, ) For A Short Duration At ICAR-CISH.",
    lastDateText: "Last Date Of Application 13th Jun 2025.",
    publishedDate: "27-05-2025",
    startDate: "27-05-2025",
    interviewDate: "13-06-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form", "result"],
  },
  {
    id: 6,
    title: "WALK IN INTERVIEW FOR THE CONTRACTUAL POSITION OF PROJECT ASSISTANT",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Project Of Project Assistant For A Short Duration At ICAR-CISH.",
    lastDateText: "Last Date Of Application 13th Jun 2025.",
    publishedDate: "27-05-2025",
    startDate: "27-05-2025",
    interviewDate: "13-06-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form"],
  },
  {
    id: 7,
    title: "WALK IN INTERVIEW NOTICE FOR THE POST OF YOUNG PROFESSIONAL II",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Project Of Young Professional II.",
    lastDateText: "Last Date Of Application 22th July 2025.",
    publishedDate: "15-07-2025",
    startDate: "15-07-2025",
    interviewDate: "22-07-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form", "result"],
  },
  {
    id: 8,
    title: "WALK IN INTERVIEW NOTICE FOR THE POST OF YOUNG PROFESSIONAL I",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Project Of Young Professional-I (One Post) For A Short Duration At ICAR-CISH.",
    lastDateText: "Last Date Of Application 10th July 2025.",
    publishedDate: "12-07-2025",
    startDate: "12-07-2025",
    interviewDate: "17-07-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form", "result"],
  },
  {
    id: 9,
    title: "WALK IN INTERVIEW NOTICE FOR THE POST OF YOUNG PROFESSIONAL I",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Project Of Young Professional-I (One Post) For A Short Duration At ICAR-CISH.",
    lastDateText: "Last Date Of Application 04th April 2025.",
    publishedDate: "04-06-2025",
    startDate: "04-06-2025",
    interviewDate: "10-06-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form"],
  },
  {
    id: 10,
    title: "WALK IN INTERVIEW NOTICE FOR THE POST OF YOUNG PROFESSIONAL I",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Project Of Young Professional-I (One Post) For A Short Duration At ICAR-CISH.",
    lastDateText: "Last Date Of Application 04th April 2025.",
    publishedDate: "04-06-2025",
    startDate: "04-06-2025",
    interviewDate: "10-06-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form"],
  },
  {
    id: 11,
    title: "WALK IN INTERVIEW NOTICE FOR THE POST OF YOUNG PROFESSIONAL I",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Project Of Young Professional-I (One Post) For A Short Duration At ICAR-CISH.",
    lastDateText: "Last Date Of Application 04th April 2025.",
    publishedDate: "04-06-2025",
    startDate: "04-06-2025",
    interviewDate: "10-06-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form"],
  },
  {
    id: 12,
    title: "WALK IN INTERVIEW NOTICE FOR THE POST OF YOUNG PROFESSIONAL I",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Project Of Young Professional-I (One Post) For A Short Duration At ICAR-CISH.",
    lastDateText: "Last Date Of Application 04th April 2025.",
    publishedDate: "04-06-2025",
    startDate: "04-06-2025",
    interviewDate: "10-06-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form"],
  },
  {
    id: 13,
    title: "WALK IN INTERVIEW NOTICE FOR THE POST OF YOUNG PROFESSIONAL I",
    description:
      "The ICAR-CISH, Lucknow Will Conduct “Walk-In-Interview” For The Contractual Position Purely On Temporary Basis And Co-terminus With The Project Of Young Professional-I (One Post) For A Short Duration At ICAR-CISH.",
    lastDateText: "Last Date Of Application 04th April 2025.",
    publishedDate: "04-06-2025",
    startDate: "04-06-2025",
    interviewDate: "10-06-2025",
    latestUpdate: "APPLICATION FORM",
    buttons: ["form"],
  },
];
