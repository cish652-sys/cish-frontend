import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { SectionHeader } from "@/designs/organisms/SectionHeader";

export default function CadreStrength() {
  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "CADRE STRENGTH", href: "/Itmu" },
        ]}
        iconProps={true}
        title="CADRE STRENGTH"
        description={[""]}
      />
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 text-gray-800">
          {/* <h1 className="text-green-800 font-bold text-2xl text-center">CADRE STRENGTH</h1> */}
          <h2 className="text-center font-semibold">
            ICAR-Central Institute for Subtropical Horticulture as on 01-06-2021
          </h2>

          {/* Main Institute Table */}
          <div className="overflow-x-auto shadow-lg border border-gray-300">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-[#599A5E]">
                <tr>
                  <th className="p-3 border-b border-gray-300">Sl. No.</th>
                  <th className="p-3 border-b border-gray-300">Name of the Discipline</th>
                  <th className="p-3 border-b border-gray-300" colSpan={5}>
                    Sanctioned Cadre Strength
                  </th>
                  <th className="p-3 border-b border-gray-300" colSpan={5}>
                    In-Position
                  </th>
                </tr>
                <tr className="bg-[#599A5E]">
                  <th></th>
                  <th></th>
                  <th className="p-2 border-b border-gray-300">Sci.</th>
                  <th className="p-2 border-b border-gray-300">Sr. Sci</th>
                  <th className="p-2 border-b border-gray-300">Pr. Sci</th>
                  <th className="p-2 border-b border-gray-300">HoD</th>
                  <th className="p-2 border-b border-gray-300">Total</th>
                  <th className="p-2 border-b border-gray-300">Sci.</th>
                  <th className="p-2 border-b border-gray-300">Sr. Sci</th>
                  <th className="p-2 border-b border-gray-300">Pr. Sci</th>
                  <th className="p-2 border-b border-gray-300">HoD</th>
                  <th className="p-2 border-b border-gray-300">Total</th>
                </tr>
              </thead>

              <tbody>
                {[
                  [1, "Agricultural Biotechnology", 2, 0, 0, 0, 2, 2, 0, 0, 0, 2],
                  [2, "Agricultural Chemicals", 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
                  [3, "Agricultural Economics", 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
                  [4, "Agricultural Entomology", 1, 2, 0, 0, 3, 1, 2, 0, 0, 3],
                  [5, "Agricultural Extension", 2, 0, 0, 0, 2, 0, 0, 0, 0, 0],
                  [6, "Agricultural Microbiology", 1, 0, 0, 0, 1, 2, 0, 0, 0, 2],
                  [
                    7,
                    "Agricultural Structures & Process Engineering",
                    2,
                    0,
                    0,
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                  ],
                  [8, "Agricultural Statistics", 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                  [9, "Farm Machinery & Power", 1, 0, 0, 0, 1, 2, 0, 0, 0, 2],
                  [10, "Food Technology", 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
                  [11, "Fruit Science", 12, 5, 1, 0, 18, 11, 5, 1, 0, 17],
                  [12, "Genetics & Plant Breeding", 3, 0, 0, 0, 3, 2, 0, 0, 0, 2],
                  [13, "Nematology", 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                  [14, "Plant Pathology", 1, 1, 0, 0, 2, 1, 1, 0, 0, 2],
                  [15, "Plant Physiology", 2, 0, 0, 0, 2, 1, 1, 0, 0, 2],
                  [16, "Soil Science", 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
                  [17, "Vegetable Science", 1, 1, 0, 0, 2, 1, 1, 0, 0, 2],
                  [18, "Computer Application", 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
                  [20, "Environmental Science", 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
                  [19, "Heads of Divisions", 0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
                ].map((r, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-lime-50"}>
                    {r.map((c, j) => (
                      <td key={j} className="p-2 border-t border-gray-300 text-center">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* TOTAL Row */}
                <tr className="font-semibold bg-[#599A5E]">
                  <td colSpan={2} className="p-2 text-center border-t">
                    TOTAL
                  </td>
                  <td className="p-2 border-t">34</td>
                  <td className="p-2 border-t">9</td>
                  <td className="p-2 border-t">1</td>
                  <td className="p-2 border-t">4</td>
                  <td className="p-2 border-t">48</td>
                  <td className="p-2 border-t">28</td>
                  <td className="p-2 border-t">11</td>
                  <td className="p-2 border-t">1</td>
                  <td className="p-2 border-t">0</td>
                  <td className="p-2 border-t">40</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Regional Station, Malda */}
          <h3 className="text-green-800 font-bold text-xl">Regional Station, Malda</h3>
          <div className="overflow-x-auto shadow-lg border border-gray-300">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-[#599A5E]">
                <tr>
                  <th className="p-3 border-b border-gray-300">Sl. No.</th>
                  <th className="p-3 border-b border-gray-300">Name of the Discipline</th>
                  <th className="p-3 border-b border-gray-300" colSpan={5}>
                    Sanctioned Cadre Strength
                  </th>
                  <th className="p-3 border-b border-gray-300" colSpan={5}>
                    In-Position
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [1, "Fruit Science", 1, 1, 0, 0, 2, 1, 0, 0, 0, 1],
                  [2, "Plant Pathology", 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                  [3, "Agricultural Biotechnology", 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-lime-50"}>
                    {r.map((c, j) => (
                      <td key={j} className="p-2 border-t border-gray-300 text-center">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}

                <tr className="font-semibold bg-[#599A5E]">
                  <td colSpan={2} className="p-2 text-center border-t">
                    TOTAL
                  </td>
                  <td className="p-2 border-t">2</td>
                  <td className="p-2 border-t">1</td>
                  <td className="p-2 border-t">0</td>
                  <td className="p-2 border-t">0</td>
                  <td className="p-2 border-t">3</td>
                  <td className="p-2 border-t">2</td>
                  <td className="p-2 border-t">0</td>
                  <td className="p-2 border-t">0</td>
                  <td className="p-2 border-t">0</td>
                  <td className="p-2 border-t">2</td>
                </tr>

                <tr className="font-bold bg-[#599A5E]">
                  <td colSpan={2} className="p-2 text-center border-t">
                    GRAND TOTAL
                  </td>
                  <td>36</td>
                  <td>10</td>
                  <td>1</td>
                  <td>4</td>
                  <td>51</td>
                  <td>30</td>
                  <td>11</td>
                  <td>1</td>
                  <td>0</td>
                  <td>42</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Technical */}
          <h3 className="text-green-800 font-bold text-xl">Technical</h3>
          <div className="overflow-x-auto shadow-lg border border-gray-300">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-[#599A5E]">
                <tr>
                  <th className="p-3 border-b border-gray-300">Category</th>
                  <th className="p-3 border-b border-gray-300">Sanctioned Strength</th>
                  <th className="p-3 border-b border-gray-300">In Position</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Category I (T-1 & T-2)", 23, 11],
                  ["Category II (T-3 & T-5)", 19, 13],
                  ["Category III (T-6)", 1, 1],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-lime-50"}>
                    <td className="p-2 border-t border-gray-300">{r[0]}</td>
                    <td className="p-2 border-t border-gray-300 text-center">{r[1]}</td>
                    <td className="p-2 border-t border-gray-300 text-center">{r[2]}</td>
                  </tr>
                ))}

                <tr className="font-semibold bg-[#599A5E]">
                  <td className="p-2 border-t">Total</td>
                  <td className="p-2 border-t text-center">43</td>
                  <td className="p-2 border-t text-center">25</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Administrative */}
          <h3 className="text-green-800 font-bold text-xl">Administrative</h3>
          <div className="overflow-x-auto shadow-lg border border-gray-300">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-[#599A5E]">
                <tr>
                  <th className="p-3 border-b border-gray-300">Post</th>
                  <th className="p-3 border-b border-gray-300">Sanctioned Strength</th>
                  <th className="p-3 border-b border-gray-300">In Position</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Sr. A.O.", 1, 1],
                  ["Sr. F.& A.O.", 1, 1],
                  ["F.& A.O.", 0, 0],
                  ["A.A.O.", 2, 2],
                  ["Assistant", 8, 3],
                  ["Sr. Clerk", 5, 4],
                  ["Jr. Clerk", 6, 3],
                  ["Private Secretary", 1, 1],
                  ["Personal Assistant", 2, 0],
                  ["Stenographer Grade III", 0, 1],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-lime-50"}>
                    <td className="p-2 border-t border-gray-300">{r[0]}</td>
                    <td className="p-2 border-t border-gray-300 text-center">{r[1]}</td>
                    <td className="p-2 border-t border-gray-300 text-center">{r[2]}</td>
                  </tr>
                ))}

                <tr className="font-semibold bg-[#599A5E]">
                  <td className="p-2 border-t">Total</td>
                  <td className="p-2 border-t text-center">26</td>
                  <td className="p-2 border-t text-center">14</td>
                </tr>

                <tr className="font-semibold bg-[#599A5E]">
                  <td className="p-2 border-t">Skilled Supporting Staff</td>
                  <td className="p-2 border-t text-center">39</td>
                  <td className="p-2 border-t text-center">15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
