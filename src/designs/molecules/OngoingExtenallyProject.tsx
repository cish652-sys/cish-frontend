"use client";
import { useState } from "react";
export default function OngoingExtenallyProject() {
  const projects = [
    {
      no: "01",
      title:
        "Network project on Micro-irrigation in agriculture and allied sectors from organic-domestic wastewater for production of country agriculture. (Lead centre ICAR-CISH, Lucknow)",
      principal: "Dr. Ravindra Gupta",
      coPrincipal: "2017-2022",
    },
    {
      no: "02",
      title:
        "Ensuring productivity/production of mango/one given fruit with reduce of losses against insect/disease preventable causally skill",
      principal: "Dr. Muthukumar M",
      coPrincipal: "2018-2023",
    },
    {
      no: "03",
      title:
        "Micro break analysis and their application for pesticide-biopesticides and plant growth promoters in subtracting horticultural crops",
      principal: "Dr. Devendra Kumar",
      coPrincipal: "2019-2022",
    },
    {
      no: "04",
      title:
        "Genome-wide SNP markers associated with fruit quality for developing trait-based reverse breeding using genomic selection",
      principal: "Dr. Anju Bajpai",
      coPrincipal: "2020-2023",
    },
    {
      no: "05",
      title: "Management of resources with in NEH systems using GAP/HACCP/INT Technology",
      principal:
        "Dr. S. Rajaer (Cl & Coordinator), Project Coordinators: Dr. Navprabhat Sharma, Dr. Prakash Chandra Tripathi",
      coPrincipal: "2017-2022",
    },
    {
      no: "06",
      title:
        "Development of improved package for management of thrips stage of Leaf blight/Anthracnose caused",
      principal: "Dr. P.K. Shukla",
      coPrincipal: "2021-2024",
    },
    {
      no: "07",
      title:
        "Design and development of ergonomically efficient fruit harvesters for mango, guava and jamun",
      principal: "Er. Anil Kumar",
      coPrincipal: "2020-2023",
    },
    {
      no: "08",
      title:
        "Enhancing oilseed repository and facilities for GIS storing in grains shadows systems district(NICRA-Software)",
      principal: "Dr. S. Rajan Soni, W.S.Dhillon Dr. Debashish Hazarika (w.e.f.1.12.2021)",
      coPrincipal: "2020-2023",
    },
    {
      no: "09",
      title: "CERA/Initiation of lands available for developing RNR best Guidelines",
      principal: "Dr. Devendra Pandey",
      coPrincipal: "2012-2022",
    },
    {
      no: "10",
      title: "Validation of GAD description of least biopay-module-Control",
      principal: "Dr. Devendra Pandey",
      coPrincipal: "2012-2022",
    },
    {
      no: "11",
      title: "Development of metagenical description and multivarit guidelines for grains",
      principal: "Dr. A.K. Bajpai/Dr. Archbahar Singh",
      coPrincipal: "2012-2022",
    },
    {
      no: "12",
      title: "National DUS centre for Mango crop",
      principal: "Dr. S. Rajan Soni (1.12.2021-Dr. Ashish Yadav (w.e.f.1.12.2021)",
      coPrincipal: "2012-2022",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // Filter by search
  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.principal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.coPrincipal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort projects
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "name") return a.title.localeCompare(b.title);
    if (sortBy === "principal") return a.principal.localeCompare(b.principal);
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = sorted.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="py-12 px-6 md:px-16" style={{ backgroundColor: "#FBFAF0" }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[#1B5E20] text-lg font-semibold mb-6 uppercase">
          Ongoing Externally Aided Projects{" "}
        </h2>

        {/* Search & Sort Bar */}
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
            <option value="default">Sort By</option>
            <option value="name">Name</option>
            <option value="principal">Principal Investigator</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="bg-[#599A5E] text-[#FFFFFF]">
                <th className="py-3 px-4 text-left w-16 font-semibold">S.No</th>
                <th className="py-3 px-4 text-left font-semibold">Project Title</th>
                <th className="py-3 px-4 text-left font-semibold">PI/Nodal Officer</th>
                <th className="py-3 px-4 text-left font-semibold">Period</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((p, i) => (
                <tr
                  key={i}
                  className="bg-white rounded-md shadow-sm hover:shadow-md transition-all"
                >
                  <td className="py-3 px-4 text-center text-[#567C3B] font-semibold">{p.no}</td>
                  <td className="py-3 px-4 text-gray-700">{p.title}</td>
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
            className="text-gray-600 border rounded-full px-3 py-1 hover:bg-gray-100"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(0, 5)
            .map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-full ${
                  currentPage === page
                    ? "bg-[#31572C] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="text-gray-600 border rounded-full px-3 py-1 hover:bg-gray-100"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
