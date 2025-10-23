"use client";
import { useState } from "react";
export default function OngoingHouseProject() {
  const projects = [
    {
      no: "01",
      name: "Genetic resource management and improvement of mango",
      principal: "Dr. Ashish Yadav",
      coPrincipal:
        "Dr. Arshuman Singh, Dr. Vishambhar Dayal, Dr. Amar Kant Kushwaha, Dr. P.K. Shukla, Dr. Gundappa",
    },
    {
      no: "02",
      name: "Genetic resource management and improvement of guava",
      principal: "Dr. Arshuman Singh",
      coPrincipal:
        "Dr. Ashish Yadav, Dr. Vishambhar Dayal, Mr. Amar Kant Kushwaha, Dr. Nidhi Kumari, Dr. Gundappa",
    },
    {
      no: "03",
      name: "Genetic mapping and development of genomic tools to accelerate molecular breeding in fruits",
      principal: "Dr. Anju Bajpai",
      coPrincipal:
        "Dr. Muthukumar M, Dr. Israr Ahmad, Dr. H.C. Verma, Dr. Bharti Khirid, Dr. Ashish Yadav, Dr. Devendra Pandey, Dr. Arshuman Singh, Dr. P.K. Shukla",
    },
    {
      no: "04",
      name: "Improvement of aonla and bael for higher yield and nutraceutical value",
      principal: "Dr. D. Pandey",
      coPrincipal: "Dr. Anju Bajpai, Dr. A.K. Bhattacherjee, Mr. Amar Kant Kushwaha",
    },
    {
      no: "05",
      name: "Genetic resource management and improvement of jamun",
      principal: "Dr. A.K. Singh",
      coPrincipal: "Dr. Anju Bajpai, Dr. Arshuman Singh",
    },
    {
      no: "06",
      name: "Development of tissue culture system of fruit crops through bioreactor",
      principal: "Dr. Maneesh Mishra",
      coPrincipal: "Er. Anil Kumar Verma",
    },
    {
      no: "07",
      name: "Development of ICT tools for advisories on subtropical fruit crops",
      principal: "Dr. H.C. Verma",
      coPrincipal: "Er. Anil Kumar Verma",
    },
    {
      no: "08",
      name: "Canopy management for improving productivity in mango and guava",
      principal: "Dr. K.K. Srivastava",
      coPrincipal:
        "Dr. S.K. Shukla, Dr. D. Mishra, Dr. Dinesh Kumar, Dr. A.K. Tiwedi, Dr. S.K. Dwivedi, Dr. P. Barman, Dr. Govind Kumar",
    },
    {
      no: "09",
      name: "Enhancing input use efficiency for higher productivity of subtropical fruits",
      principal: "Dr. Dinesh Kumar",
      coPrincipal:
        "Dr. R.A. Ram, Dr. S.K. Shukla, Dr. K.K. Srivastava, Dr. S.R. Singh, Dr. Naresh Babu, Dr. A.K. Verma, Dr. Tarun Adak, Dr. S.K. Dwivedi, Dr. P. Barman, Dr. Govind Kumar",
    },
    {
      no: "10",
      name: "Crop diversification in fruit production system for enhanced productivity and farmer profitability",
      principal: "Dr. S.K. Shukla",
      coPrincipal:
        "Dr. D. Mishra, Dr. S.R. Singh, Dr. Naresh Babu, Dr. K.K. Srivastava, Dr. A.K. Tiwedi, Dr. P. Barman, Dr. Israr Ahmad, Dr. Govind Kumar, Dr. Ravi S.C.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

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
          Ongoing In-House Projects
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
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-700"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>

          <select
            className="border border-gray-300  px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-1 focus:ring-green-700"
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
                <th className="py-3 px-4 text-left font-semibold">Name Of Proposed Activity</th>
                <th className="py-3 px-4 text-left font-semibold">Principal Investigator</th>
                <th className="py-3 px-4 text-left font-semibold">Co-Principal Investigator</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((p, i) => (
                <tr
                  key={i}
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
