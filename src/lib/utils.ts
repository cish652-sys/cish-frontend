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
  "In-vitro bio-induction of host plant tolerance is a first kind of its approach in tissue culture towards production of wilt tolerant disease-free planting material.",
  "This technology utilizes a novel strain of the fungus Trichoderma reesei (CSR-T-3) cultivated in a proprietary medium. The bio-fungicide has shown promising results in controlling the disease, reducing production losses, and improving yields."
],

    href: "https://cish.in/t_fusicont.php",
    image: "/icons/Rectangle 776.svg",
  },
  {
    id: 9002,
    title: "ICAR-BIOIMMUNIZER",
    description: [
  "ICAR-FUSICONT is a bio-fungicide for managing banana wilt disease, specifically the Panama wilt (TR4) caused by Fusarium oxysporum f. sp. cubense.",
  "An innovative tissue culture technique mediated through bio-engineering of metabolite-based biomolecule (bioimmune) at in-vitro stage for the production of Fusarium oxysporum sp. cubense TR-4 tolerant plantlets of banana.",
  "The technology of bio-immunization for producing Fusarium wilt tolerant banana plantlets was tested for its bio-efficacy through pot culture experiments where the immune treated plantlets exhibited a disease index of 0.24 compared with the FOC TR-4 treated control that showed 3.75, signifying the host-induced tolerance through changing the tissue culture protocol."
],

    href: "https://cish.in/t_bioimmunizer.php",
    image: "/icons/Rectangle 778.svg",
  },
  {
    id: 9003,
    title: "CISH-METWASH",
   description: [
  "CISH-Metwash is an anti-senescence, antifungal, bioactive secondary metabolite-based bio-stimulant (strain CSR M44 + biopolymer + adjuvants) developed for increasing the shelf life of mango (40–44 days) and banana (50–52 days) at 13 °C and 85% humidity in reefer containers used for export through sea route. It is a breakthrough technology that stands distinct from regular ethylene absorbers, where the maximum reported shelf life in mango is 10 days and in banana is 15 days."
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
    href: "https://cish.in/v_ambika.php",
    image: "/icons/div4.svg",
  },
];

export const cropImprovementData = [
  {
    title: "GENETIC RESOURCE MANAGEMENT",
    description: [
      "The Institute has Field Gene Bank Of Mandated Crops Such As Mango (745), Guava (120), Papaya (17), Bael (54), Litchi (35), Aonla (35), Jamun (38), Khirnee (17), Mahua (25), Tamarind (20), Wood Apple (17), Custard Apple (8), Mulberry (10), Hog Plum (3), Lasora (5), Carambola (3), Karonda (30), Grape (4) And Cape Gooseberry (4). A Catalogue Of 184 Accessions (Including Morphological And Molecular Characterization) Was Published In 2011 And An Interactive CD Was Prepared.",
    ],
  },
  {
    title: "MOLECULAR CHARACTERIZATION AND GENOMICS",
    description: [
      "Characterization Of Mango Accessions (c. 200 Cvs) Using SSR Markers Was Done Towards Fingerprinting And Diversity Assessment Based On 30 Loci. The Fingerprint Development Of The Indian Varieties By Converting The Genotypic Data Into Barcodes Has Been Published. Clonal Variability Among Commercial Indian Mango Varieties Is Being Assessed. Gene Expression Studies Are Being Done At CISH. The Transcriptome Data Has Been Generated In Mango For Fruit Colour, Regulation Of Flowering And Abiotic Stresses. Primer Designing And Its Validation In Diverse Genotypes For Genes Involved In Anthocyanin Pigmentation And Flowering Have Been Done. In Guava, Efforts Are Being Made To Study The Molecular Basis Of Seediness, Fruit Colour And Wilt Resistance. Genes For Regulation VIZ., COs (Constans), LFY (Leafy), FLT (Flowering Time) Has Been Completed To Elucidate The Molecular Mechanisms Underlying The Trait Expression.",
    ],
  },
  {
    title: "GUAVA (PSIDIUM GUAJAVA L.)",
    description: [
      "Molecular Characterization And Genetic Diversity Analysis Of Guava Cultivars (22), Psidium Sp. (6) And Intervarietal Hybrids Was Done Using Microsatellites (SSR And ISSR), Minisatellites (RAMPO) And Dominant Markers (RAPD). Diversity Analysis Based On Allelic Data Generated By RAPD And RAMPO Markers Revealed Differentiation Of Exotic Types From Cultivars Originated In Northern Plains. SSR Markers Were Found Suitable To Discriminate Between Half Sib Populations Of Guava And To Produce Cell Specific Fingerprints. RAPD Markers Were Found To Be The Best Descriptors And Tools For Fingerprinting Of Closely Related Accessions. Cp DNA Gene Sequences Were Used In Mapping The Chloroplast Genome.",
    ],
  },
  {
    title: "LITCHI (LITCHI CHINENSIS L.)",
    description: [
      "Mini Protocol Was Developed For DNA Isolation Using DNeasy Extraction With 3.5% CTAB Buffer And Purification By Spin Columns. Twenty-Seven Accessions Of Litchi And Muzaffarpur Were Characterized Using Microsatellites (SSR And ISSR) And RAPD Markers. Based On The Discrimination And Resolving Power, ISSR Markers Were Found To Be Suitably SSR Markers For Generation Of Cultivar Barcode And Clustering Analyses. Phylogenetic Analysis Using UPGMA Method Grouped All The Varieties In Two Clusters. Reports Available On Molecular Characterization Of Litchi Germplasm Using RAPD And ISSR Markers Revealed That The Microsatellites Have Exposed Narrow Genetic Background Of Litchi Cultivars From India, Rationalizing Cross Breeding And Widening Of Genetic Base Towards Its Improvement.",
    ],
  },
  {
    title: "JAMUN (SYZYGIUM CUMINI SKEELS.)",
    description: [
      "Eight Jamun Accessions J 34, J 36, J 37, J 21, J 32, J 39, J 40 And J 10 Characterized By RAPD And ISSR Come. SSR Cross Amplification Markers J 36 And J 37 Which Are Selections From CISH Showed Highest Similarity As Per The Matrix Generated By Jaccard's Coefficient. J 36 And J 22 Are Distant Branches Showing The Least Similarity With The Other Genotypes. Cross Species Amplification Of Guava SSR Markers Was Verified In Jamun.",
    ],
  },
];

export const divisionVarietiesData = [
  {
    id: "v1",
    title: "Hybrid-949:",
    description: [
      "This Is A Cross Between Amrapali And Vanraj With Firm Flesh, Attractive Dark Red Colour On The Peel And Better Shelf Life. This Hybrid Has Regular Bearing Character And Late In Season.",
    ],
    image: "/icons/Rectangle 941.svg",
    href: "/varieties/hybrid-949",
  },
  {
    id: "v2",
    title: "Ambika:",
    description: [
      "A Cross Between Amrapali And Janardhan Pasand, Fruits Oblong Oval, Colour Bright Yellow With Dark Red Blush, Pulp Dark Yellow, Firm With Scanty Fibre. Fruit Weight 250-350 G, TSS 21.0 Brix. It Is A Regular Bearing Variety And Late In Maturity. The Hybrid Has Potential For Both Internal And Export Markets Because Of Its Attractive Fruit Colour. Yields About 40 Kg/Plant By About 10 Years Of Planting Under Improved Cultural Practices.",
    ],
    image: "/icons/Rectangle 947.svg", // Placeholder path
    href: "/varieties/ambika", // Placeholder path
  },
  {
    id: "v3",
    title: "Arunika:",
    description: [
      "A Cross Between Amrapali And Vanraj, The Tree Prolific Dwarf And Compact. Fruits Are Smooth, Everage Yellow And Red Blush, Weight About 190-210g, TSS 24.0 Brix. Stone Is Thin, Pulp Orange, Firm With Scanty Fibre, Pulp 68%, TSS 24.0 Brix. The Hybrid Has Potential For Both Internal And Export Markets Because Of Its Attractive Fruit Colour. Average Fruit Yield Is About 60 Kg/Plant At 8 Years Of Planting. It Has Demonstrated Wider Adaptability And Is Performing Well Under Northern Plains. It Is A Regular Bearer And Has Red Peel Colour.",
    ],
    image: "/icons/Rectangle 941.svg", // Placeholder path
    href: "/varieties/arunika", // Placeholder path
  },
  {
    id: "v4",
    title: "Hybrid-1084:",
    description: [
      "A Cross Between Amrapali And Janardhan Pasand Was Found Promising With Attractive Dark Red Colour On The Peel And Better Shelf Life. This Hybrid Has Regular Bearing Character.",
    ],
    image: "/icons/Rectangle 941.svg", // Placeholder path
    href: "/varieties/hybrid-1084", // Placeholder path
  },
  {
    id: "v5",
    title: "CISH-M-2:",
    description: [
      "A Cross Between Dashehari X Chausa. Fruits Of This Hybrid Are Also Medium With An Average Weight 260 G And Oblong In Shape. Skin Is Smooth, Tough And Yellowish Green When Ripe. Flesh Is Firm, Yeloish Orange In Colour With Scanty Fibre, TSS 22.6 Brix. This Hybrid Has Commercial Potential Because Of Its Sooty Mould Free Fruit Surface Even After Exposure To Heavy Rains. The Fruits Are Similar To Those Of Dashehari, A Leading Variety Of North India, But Mature 15 Days After Dashehari.",
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
      "Selection From Half Sib Population Of Apple Guava Suitable For Both Fresh As Well As Processing Purposes. Highly Responsive To Pruning, Yields About 100kg/Plant By About 6 Years Of Planting Under High Density (3x6m). Salient Features Are Red Fleshed Fruits With Attractive Saffron Yellow Top Skin With Red Blush. Fruits Medium, Pulp Firm Pink And Fruits Weigh 185-200g With Good Blend Of Sugar And Acid. It Has High TSS (12.0 Brix) And Vitamin C Content. The Pink Color In The Beverage Remains Stable For More Than A Year In Storage.",
    ],
    image: "/icons/var3.svg", // Placeholder path
    href: "/varieties/lalit", // Placeholder path
  },
  {
    id: "g2",
    title: "Shweta:",
    description: [
      "Selection From Half Sib Population Of Apple Guava Variety With Globose Fruits, Medium Size, Weight 225g, Creamy White Exocarp, Snow White Flesh, Soft Seeded (<100/Fruit), Good Keeping Quality, High TSS (12.5 Brix), High Yielding (100kg Pulp). With Good Keeping Quality, High TSS, Good Yield. Tree Is Vigorous In Appearance, Medium Size, Creamy White Exocarp With Red Spots Or Blush. 90 Kg/Plant At The Age Of 6 Years.",
    ],
    image: "/icons/var4.svg", // Placeholder path
    href: "/varieties/shweta", // Placeholder path
  },
  {
    id: "g3",
    title: "Dhawal:",
    description: [
      "Fruits Are Deep Red Coloured With Soft Seeds, Attractive Shape, High TSS (11.0 Brix) And Long Shelf Life. Fruits Of This Selection Recorded Higher Ascorbic Acid Content (185 Mg/100g Pulp) And Shelf Life. Analysis Of The Pigments In Various Portions Of The Same Fruits Has Shown Less Variation In This Selection.",
    ],
    image: "/icons/var5.svg", // Placeholder path
    href: "/varieties/dhawal", // Placeholder path
  },
  {
    id: "g4",
    title: "Lalima:",
    description: [
      "A Selection From Open Pollinated Seedling Guava Population Raised At Lucknow Has Been Found Promising (Fruit Weight 180g & TSS 13.0 Brix). It Has Attractive Skin Colour (Red Blush), Higher Proportion Of Coloured Fruit, Good Yield And Responsiveness To Pruning.",
    ],
    image: "/icons/var6.svg", // Placeholder path
    href: "/varieties/lalima-guava", // Placeholder path
  },
];

export const jamunVarietiesData = [
  {
    id: "j1",
    title: "CISH J-42:",
    description: [
      "seedless accession obtained from a land race of thane district of MH. Fruit are oblong in shape with good taste. Average fruit weight is 8.0g, fruit length 2.57 cm, breadth 2.18 cm, average. pulp 85 per cent, tss 14.0 brix, acidity 1.0 per, 34.14mg/100g, sugar 0.231 per cent, anthocyanin 1.56 per cent, has a total antioxidant value 5.54 mg AAE/g. Besides, it is rich in total phonolics content (26.78 mg/g fresh weight) and flavonoids (11.2mg/g fresh weight), the selected type has great potential for processing and value added products due to absence of seed.",
    ],
    image: "/icons/var1.svg", // Placeholder path
    href: "/varieties/cish-j-42", // Placeholder path
  },
  {
    id: "j2",
    title: "CISH B-2:",
    description: [
      "Selection Made From Land Race Of Lucknow District On Fruit And Seedling Type. Fruit Ripens During Last Week Of June. Average Fruit Weight Is 22.04 G, Length 3.90 Cm And Diameter 3.03 Cm. Pulp Is 91.56 Per Cent, TSS 13.0 Brix, Acidity Is 0.58, 49.88 Mg/100g And Has A Total Antioxidant Value 38.38 Mg AEAC/G.",
    ],
    image: "/icons/var1.svg", // Placeholder path
    href: "/varieties/cish-b-2-jamun", // Placeholder path
  },
];

export const baelVarietiesData = [
  {
    id: "b1",
    title: "CISH B-1:",
    description: [
      "It Is A Selection From Open Pollinated Seedlings. It Is A Mid Season Variety Which Matures During April-May. Tree Is Semi Vigorous With Dense Canopy, Erect Growth Habit, Precocious And Heavy Bearer. Fruits Are Ovate In Shape, Fruit Size 15-17.8cm In Length And 39.2-41.0 Cm In Circumference, Average Fruit Weight 1.01 Kg. Fruit Has Thin Rind (0.18cm), Orange Yellow Pulp And Less Mucilage Content. It Has A Very Good Taste And Flavour. Fruits Have 63.57 Per Cent Pulp, TSS 31.7 Brix, Acidity 0.49 Per Cent, Sugar 18.63%, Total Carotenoids 1.18 Mg/100g Pulp, Total Sugar 20.54 Per Cent And Tannin Content 2.5 Per Cent.",
    ],
    image: "/icons/var1.svg", // Placeholder path
    href: "/varieties/cish-b-1", // Placeholder path
  },
  {
    id: "b2",
    title: "Lalima:",
    description: [
      "It Is Also A Selection From Open Pollinated Seedlings. Tree Is Dwarf With A Medium Spreading Habit. It Is Also Regular And Annual Bearer And Precocious With Moderate Bearing Habit. Fruits Are Roundish In Shape With An Average Weight Of 1.01 kg, Length Of 14.80 Cm And Circumference Of 52.54 Cm. Fruit Weight Is From 1.80-2.70 Kg/Fruit. Fruit Pulp Is Orange Yellow With TSS 31.0 Brix, Acidity 0.56, Seed And Fibre Contents Are Low With Average Seed Number 50-121 Fruit And Average Seed Weight 4.02g. Seed To Pulp Ratio Is 1:270.",
    ],
    image: "/icons/var1.svg", // Placeholder path
    href: "/varieties/lalima-bael", // Placeholder path
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
