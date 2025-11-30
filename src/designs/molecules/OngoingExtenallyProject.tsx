"use client";
import { useState, useEffect } from "react";

// Define the structure for a project item used in the component's state and rendering
interface Project {
  sn: string; // Serial number (S.No) - derived from API 'id' or index
  scheme: string; // Scheme
  title: string; // Project Title - maps to API 'projectTitle'
  principal: string; // PI / Nodal Officer - maps to API 'piOffice'
  period: string; // Period - maps to API 'startDate' and 'endDate'
}

// Define the structure of the data returned by the API
interface ApiProject {
  id: number;
  projectTitle: string;
  piOffice: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  ispublished: boolean;
  isactive: boolean;
  backtocreator: boolean;
}

// Existing hardcoded dummy data (raw structure without 'sn')
const rawFallbackProjects = [
  {
    scheme: "AMAAS, MAU",
    title:
      "Network project on Micro organisms in agriculture and allied sectors. Sub-Project: Microbial interventions for production of enzyme supplement for animal feed from fruit and vegetable mandi waste",
    principal: "Dr. Neelima Garg",
    period: "2017–2022",
  },
  {
    scheme: "DST-SERB",
    title:
      "Genomics assisted identification of resistance genes from wild relatives of guava against Meloidogyne enterolobii causing wilt",
    principal: "Dr. Muthukumar M.",
    period: "2018–2022",
  },
  {
    scheme: "DST-SERB",
    title:
      "Micro biome analysis and their application for pesticide biodegradation and plant growth promotion in subtropical horticultural crops",
    principal: "Dr. Govind Kumar",
    period: "2019–2022",
  },
  {
    scheme: "DST-SERB",
    title:
      "Genome wide SNP markers associated with fruit traits for developing climate smart mango hybrids using genome selection",
    principal: "Dr. Anju Bajpai",
    period: "2020–2023",
  },
  {
    scheme: "DBT",
    title: "Management of Fusarium wilt in NER banana using ICAR-FUSICONT Technology",
    principal:
      "Dr. S. Rajan / Dr. T. Damodaran (Project Coordinator)\nDr. Maneesh Mishra, Co-PI\nDr. Ashish Yadav, Co-PI",
    period: "2021–2024",
  },
  {
    scheme: "UPCST",
    title:
      "Development of integrated package for management of fruit drop of bael (Aegle marmelos correa)",
    principal: "Dr. P.K. Shukla",
    period: "2021–2024",
  },
  {
    scheme: "UPCAR",
    title:
      "Design and development of ergonomically efficient fruit harvesters for mango, guava and bael",
    principal: "Er. Anil Verma",
    period: "2020–2023",
  },
  {
    scheme: "PPV & FRA",
    title:
      "Developing national repository and facilities for DUS testing in guava (Psidium guajava) and litchi (Litchi chinesis)",
    principal: "Dr. S. Rajan (upto 30.11.2021) / Dr. Anshuman Singh (w.e.f 1.12.2021)",
    period: "2012–2023",
  },
  {
    scheme: "PPV & FRA",
    title: "Characterization of aonla varieties for developing DUS test guidelines",
    principal: "Dr. Devendra Pandey",
    period: "2012–2022",
  },
  {
    scheme: "PPV & FRA",
    title: "Validation of DUS descriptors of bael (Aegle marmelos Correa)",
    principal: "Dr. Devendra Pandey",
    period: "2012–2022",
  },
  {
    scheme: "PPV & FRA",
    title: "Development of morphological descriptors and DUS test guidelines for jamun",
    principal: "Dr. A.K. Singh / Dr. Anshuman Singh",
    period: "2012–2022",
  },
  {
    scheme: "PPV & FRA",
    title: "National DUS centre for mango crop",
    principal: "Dr. S. Rajan (upto 30.11.2021) / Dr. Ashish Yadav (w.e.f 1.12.2021)",
    period: "2012–2022",
  },
  {
    scheme: "ICAR Networking Project",
    title: "National Agriculture Innovation Fund: Component-I IP&TM",
    principal: "Dr. Ravi S.C.",
    period: "2008–2023",
  },
  {
    scheme: "ICAR Networking Project",
    title: "National Agriculture Innovation Fund: Component-II ABI",
    principal: "Dr. Maneesh Mishra",
    period: "2019–2023",
  },
  {
    scheme: "RKVY",
    title:
      "Advance centre for establishment of value chain and food processing of agri-horticultural crops to empower rural youth, self-help groups and processing entrepreneurs",
    principal: "Dr. Dipak Nayak",
    period: "2018–2022",
  },
  {
    scheme: "PKVY",
    title:
      "Promotion of organic farming practices for improving livelihood security of small and marginal farmers in Uttar Pradesh",
    principal: "Dr. R.A. Ram",
    period: "2020–2023",
  },
  {
    scheme: "MIDH",
    title: "Hi-Tech Nursery Public Sector (4 ha)",
    principal: "Dr. Dipak Nayak",
    period: "2020–2023",
  },
  {
    scheme: "Farmer FIRST Programme (KVK)",
    title:
      "Enhancing livelihood and profitability index of Malihabad farmers through diversified horti-enterprise modules",
    principal: "Dr. Maneesh Mishra",
    period: "2016–2022",
  },
  {
    scheme: "Mandi Parishad, U.P.",
    title:
      "Preparation of work plan and its implementation for GI patenting of Langra, Chausa and Rataul mango of U.P.",
    principal: "Dr. S. Rajan (upto 30.11.2021) / Dr. Ashish Yadav (w.e.f 1.12.2021)",
    period: "2020–2022",
  },
  {
    scheme: "Seed Hub Project",
    title: "Seed Hub Project at KVK Malda",
    principal: "Dr. Dipak Nayak",
    period: "2017–2022",
  },
  {
    scheme: "National Bee Board",
    title: "Integrated Bee Development Centre (IBDC)",
    principal: "Dr. Dipak Nayak",
    period: "2018–2022",
  },
  {
    scheme: "Crop Life India",
    title:
      "Responsible use of Crop Protection products in mango and litchi for farmers safety, pollinators conservation and yield enhancement",
    principal: "Dr. Dipak Nayak",
    period: "2019–2022",
  },
  {
    scheme: "Palvi Industries, Sangli, Maharashtra",
    title:
      "Prototype development of solar light based insect traps having electrified killing mechanism and other associated prototype development works",
    principal: "Dr. H.S. Singh",
    period: "2019–2023",
  },
  {
    scheme: "NABARD",
    title:
      "Technology interventions for quality mango production for doubling income of mango growers in Malda District, West Bengal",
    principal: "Dr. Dipak Nayak",
    period: "2020–2023",
  },
  {
    scheme: "Bayer Crop Science Limited (Contract Research)",
    title:
      "Evaluation of bio-efficacy and phytotoxicity of Flupyram 250 g/l + Trifloxystrobin 250 g/l (Luna sensation 500SC) against anthracnose, powdery mildow and leaf spot and Tebuconazole 430 SC (BUONOS) against anthracnose, powdery mildew and post harvest diseases in mango",
    principal: "Dr. P.K. Shukla",
    period: "2021–2023",
  },
  {
    scheme: "Tribal Sub Plan",
    title: "Tribal Sub Plan",
    principal: "Dr. Dipak Nayak",
    period: "2018–2022",
  },
  {
    scheme: "Scheduled Caste Sub Plan",
    title: "S.C. Sub Plan",
    principal: "Dr. Ashok Kumar / Dr. Vishambhar Dayal",
    period: "2018–2022",
  },
  {
    scheme: "Inter-Institutional Collaborative project (ICAR-CISH & CSIR-NBRI, Lucknow)",
    title:
      "Application of whitefly-trap-cum death sink cotton to protect vegetables and horticultural crops from whitefly vectored viral diseases",
    principal: "—",
    period: "—",
  },
];

// Map the raw data to the final Project[] structure to satisfy TypeScript before state initialization.
const fallbackProjects: Project[] = rawFallbackProjects.map((p, index) => ({
  ...p,
  sn: String(index + 1).padStart(2, "0"), // Add 'sn' dynamically here
}));

// Helper function to map API data to the component's Project structure
const mapApiDataToProject = (data: ApiProject[]): Project[] => {
  // Sort by id to ensure correct numerical order before mapping
  const sortedData = data.sort((a, b) => a.id - b.id);

  return sortedData.map((item, index) => ({
    // Use index + 1 for S.No
    sn: String(index + 1).padStart(2, "0"),
    scheme: "N/A",
    title: item.projectTitle || "N/A",
    principal: item.piOffice || "N/A",
    // Combine start and end date for the period
    period: `${item.startDate || "N/A"} - ${item.endDate || "N/A"}`,
  }));
};

export default function OngoingExtenallyProject() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [isLoading, setIsLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const API_URL = "https://api.cish.org.in/projects/external";
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const apiData: ApiProject[] = await response.json();

        if (Array.isArray(apiData) && apiData.length > 0) {
          const mappedProjects = mapApiDataToProject(apiData);
          setProjects(mappedProjects);
          setIsFallback(false);
        } else {
          console.warn("API returned empty data or unexpected format. Using fallback data.");
          setProjects(fallbackProjects);
          setIsFallback(true);
        }
      } catch (error) {
        console.error("Failed to fetch ongoing external projects:", error);
        setProjects(fallbackProjects);
        setIsFallback(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // ✅ Filter by search
  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.principal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.period.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.scheme.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "principal") return a.principal.localeCompare(b.principal);
    if (sortBy === "scheme") return a.scheme.localeCompare(b.scheme);
    return 0;
  });

  // ✅ Pagination
  const totalItems = sorted.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = sorted.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  // Conditionally render a loading state
  if (isLoading) {
    return (
      <section className="py-12 px-6 md:px-16 bg-[#FBFAF0] min-h-[300px] flex justify-center items-center">
        <p className="text-[#1B5E20] text-xl font-medium">Loading projects...</p>
      </section>
    );
  }

  return (
    <section className="py-12 px-6 md:px-16 bg-[#FBFAF0]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#1B5E20] text-lg md:text-xl font-semibold mb-6 uppercase">
          Ongoing Externally Aided Projects
        </h2>

        {/* Search & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-700"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>

          <select
            className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-1 focus:ring-green-700"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="" disabled hidden>
              Sort By
            </option>
            <option value="title">Project Title</option>
            <option value="principal">PI / Nodal Officer</option>
            <option value="scheme">Scheme</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="bg-[#599A5E] text-white text-sm md:text-base">
                <th className="py-3 px-4 font-semibold w-14">S.No</th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">Scheme</th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">Project Title</th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">PI / Nodal Officer</th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">Period</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((p, i) => (
                <tr
                  key={p.sn}
                  className="bg-white rounded-md shadow-sm hover:shadow-md transition-all"
                >
                  <td className="py-3 px-4 text-center text-[#567C3B] font-semibold">{p.sn}</td>
                  <td className="py-3 px-4 text-gray-700">{p.scheme}</td>
                  <td className="py-3 px-4 text-gray-700">{p.title}</td>
                  <td className="py-3 px-4 text-gray-700">{p.principal}</td>
                  <td className="py-3 px-4 text-gray-700">{p.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-gray-600 border rounded-full px-3 py-1 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-full ${currentPage === page ? "bg-[#31572C] text-white" : "text-gray-700 hover:bg-gray-100"}`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-gray-600 border rounded-full px-3 py-1 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
