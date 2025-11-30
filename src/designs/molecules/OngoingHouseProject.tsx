"use client";
import { useState, useEffect } from "react";

// Define the structure for a project item used in the component's state and rendering
interface Project {
  no: string; // Serial number (S.No) - derived from API 'id' or index
  name: string; // Name Of Proposed Activity - maps to API 'activityName'
  principal: string; // Principal Investigator - maps to API 'principalInvestigator'
  coPrincipal: string; // Co-Principal Investigator - maps to API 'coPrincipalInvestigator'
}

// Define the structure of the data returned by the API
interface ApiProject {
  id: number;
  activityName: string;
  principalInvestigator: string;
  coPrincipalInvestigator: string;
  createdAt: string;
  ispublished: boolean;
  isactive: boolean;
  backtocreator: boolean;
}

// Existing hardcoded dummy data as the fallback (raw structure without 'no')
const rawFallbackProjects = [
  {
    name: "Genetic resource management and improvement of mango",
    principal: "Dr. Ashish Yadav",
    coPrincipal:
      "Dr. Anshuman Singh, Dr. Vishambhar Dayal, Dr. Amar Kant Kushwaha, Dr. P.K. Shukla, Dr. Gundappa",
  },
  {
    name: "Genetic resource management and improvement of guava",
    principal: "Dr. Anshuman Singh",
    coPrincipal:
      "Dr. Ashish Yadav, Dr. Vishambhar Dayal, Mr. Amar Kant Kushwaha, Dr. Nidhi Kumari, Dr. Gundappa",
  },
  {
    name: "Genetic mapping and development of genomic tools to accelerate molecular breeding in fruits",
    principal: "Dr. Anju Bajpai",
    coPrincipal:
      "Dr. Muthukumar M, Dr. Israr Ahmad, Dr. H.C. Verma, Dr. Bharati Khilladi, Dr. Ashish Yadav, Dr. Devendra Pandey, Dr. Anshuman Singh, Dr. P. K. Shukla",
  },
  {
    name: "Improvement of aonla and bael for higher yield and nutraceutical value",
    principal: "Dr. D. Pandey",
    coPrincipal: "Dr. Anju Bajpai, Dr. A.K. Bhattacherjee, Mr. Amar Kant Kushwaha",
  },
  {
    name: "Genetic resource management and improvement of jamun",
    principal: "Dr. A.K. Singh",
    coPrincipal: "Dr. Anju Bajpai, Dr. Anshuman Singh",
  },
  {
    name: "Development of tissue culture system of fruit crops though bioreactor",
    principal: "Dr. Maneesh Mishra",
    coPrincipal: "Er. Anil Kumar Verma",
  },
  {
    name: "Development of ICT tools for advisories on subtropical fruit crops",
    principal: "Dr. H.C. Verma",
    coPrincipal: "",
  },
  {
    name: "Canopy management for improving productivity in mango and guava",
    principal: "Dr. K.K. Srivastava",
    coPrincipal:
      "Dr. S.K. Shukla, Dr. D. Mishra, Dr. Dinesh Kumar, Dr. A.K. Trivedi, Dr. S.K. Dwivedi, Dr. P. Barman, Dr. Govind Kumar",
  },
  {
    name: "Enhancing input use efficiency for higher productivity of subtropical fruits",
    principal: "Dr. Dinesh Kumar",
    coPrincipal:
      "Dr. R.A. Ram, Dr. S.K. Shukla, Dr. K.K Srivastava, Dr. S.R. Singh, Dr. Naresh Babu, Dr. A.K. Verma, Dr. Tarun Adak, Dr. S.K. Dwivedi, Dr. P. Barman, Dr. Govind Kumar",
  },
  {
    name: "Crop diversification in fruit production system for enhanced productivity and farmer profitability",
    principal: "Dr. S.K. Shukla",
    coPrincipal:
      "Dr. D. Mishra, Dr. S.R. Singh, Dr. Naresh Babu, Dr. K.K. Srivastava, Dr. A.K. Trivedi, Dr. P. Barman, Dr. Israr Ahmad, Dr. Govind Kumar, Dr. Ravi S.C.",
  },
  {
    name: "Development and evaluation of nano formulations for enhancing productivity and quality of horticultural crops",
    principal: "Dr. Dushyant Mishra",
    coPrincipal: "",
  },
  {
    name: "Management of abiotic stress and physiological issues in subtropical fruit crops",
    principal: "Dr. A.K. Trivedi",
    coPrincipal:
      "Dr. S.K. Shukla, Dr. Dinesh Kumar, Dr. Dushyant Mishra, Dr. Israr Ahmad, Dr. S.K. Dwivedi, Dr. P. Barman, Dr. Govind Kumar, Dr. Alok Kumar",
  },
  {
    name: "Improving knowledge and skill of stakeholders for increasing production and productivity of subtropical horticultural crops",
    principal: "Dr. Naresh Babu",
    coPrincipal:
      "Dr. S.K. Shukla, Dr. K.K. Srivastava, Dr. S. R. Singh, Vishambhar Dayal, Dr. Ravi S.C.",
  },
  {
    name: "Development of soilless culture technology for high value fruits and vegatable crops",
    principal: "Dr. S.R. Singh",
    coPrincipal: "Er. A.K. Verma, Dr. Ashok Kumar",
  },
  {
    name: "Exploring possibilities of non-traditional fruit crops for extended market availability of fresh fruit in subtropics",
    principal: "Dr. Ashok Kumar",
    coPrincipal: "Dr. Naresh Babu, Dr. S.R. Singh",
  },
  {
    name: "Evaluation of stress under different moisture/temperature regimes in subtropical fruit orchards",
    principal: "Dr. Tarun Adak",
    coPrincipal: "Dr. Naresh Babu, Dr. Ashok Kumar",
  },
  {
    name: "Identification, dynamics, loss assessment and devising management tools and schedules for prevailing and emerging insect pests of subtropical fruit crops",
    principal: "Dr. H.S. Singh",
    coPrincipal:
      "Dr. Dinesh Kumar, Dr. S.K. Shukla, Dr. P.K. Shukla, Dr. Gundappa, Dr. S.K. Dwivedi, Dr. Govind Kumar",
  },
  {
    name: "Disease diagnosis, devising detection tools and management practices for diseases of subtropical fruit crops",
    principal: "Dr. P.K. Shukla",
    coPrincipal: "Nidhi Kumari",
  },
  {
    name: "Developing protocols for value added products of fruits and vegetables",
    principal: "Dr. Abha Singh",
    coPrincipal: "Dr. Neelima Garg, Dr. Bharati Khilladi, Dr. A.K. Gupta, Dr. Karma Beer",
  },
  {
    name: "Development of protocol for shelf life extension of sub-tropical fruits and vegetables",
    principal: "Dr. Bharati Killadi",
    coPrincipal: "Dr. Alok Gupta, Dr. Neelima Garg, Dr. Abha Singh",
  },
  {
    name: "Handling, storage and transport studies in mango for minimized losses",
    principal: "Dr. Karma Beer",
    coPrincipal: "Er. A.K. Verma, Ravi S.C.",
  },
  {
    name: "Identification of constraints and opportunities for improving efficiency of mango and guava value chain in subtropics",
    principal: "Dr. Ravi S.C.",
    coPrincipal: "Dr. Karma Beer, Er. A.K. Verma",
  },
];

// Map the raw data to the final Project[] structure to satisfy TypeScript before state initialization.
const fallbackProjects: Project[] = rawFallbackProjects.map((p, index) => ({
  ...p,
  no: String(index + 1).padStart(2, "0"), // Add 'no' dynamically here
}));

// Helper function to map API data to the component's Project structure
const mapApiDataToProject = (data: ApiProject[]): Project[] => {
  // Sort by id to ensure correct numerical order before mapping
  const sortedData = data.sort((a, b) => a.id - b.id);

  return sortedData.map((item, index) => ({
    // Use index + 1 for S.No
    no: String(index + 1).padStart(2, "0"),
    name: item.activityName || "N/A",
    principal: item.principalInvestigator || "N/A",
    coPrincipal: item.coPrincipalInvestigator || "N/A",
  }));
};

export default function OngoingHouseProject() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [isLoading, setIsLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const API_URL = "https://api.cish.org.in/projects/house";
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
        console.error("Failed to fetch ongoing house projects:", error);
        setProjects(fallbackProjects);
        setIsFallback(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter by search
  const filtered = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.principal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.coPrincipal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort projects
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "principal") return a.principal.localeCompare(b.principal);
    return 0;
  });

  // Pagination logic
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
          Ongoing In-House Projects
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
            <option value="name">Name of Proposed Activity</option>
            <option value="principal">Principal Investigator</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="bg-[#599A5E] text-white text-sm md:text-base">
                <th className="py-3 px-4 font-semibold w-14">S.No</th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">
                  Name Of Proposed Activity
                </th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">
                  Principal Investigator
                </th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">
                  Co-Principal Investigator
                </th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((p, i) => (
                <tr
                  key={p.no}
                  className="bg-white rounded-md shadow-sm hover:shadow-md transition-all"
                >
                  <td className="py-3 px-4 text-center text-[#567C3B] font-semibold">{p.no}</td>
                  <td className="py-3 px-4 text-gray-700">{p.name}</td>
                  <td className="py-3 px-4 text-gray-700">{p.principal}</td>
                  <td className="py-3 px-4 text-gray-700">{p.coPrincipal}</td>
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
