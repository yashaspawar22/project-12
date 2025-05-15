import React, { useState } from "react";
import NavBar from "./NavBar";
import ViewMore from "../collegedetails/viewmore";

const SuperAdminPage = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [collegesPerPage, setCollegesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollege, setSelectedCollege] = useState(null);

  const allColleges = [
    {
      id: 1,
      college_id: "C01",
      name: "Harvard University",
      contact: { email: "contact@harvard.edu", phone: "123-456-7890" },
      admins: ["Alice", "Bob"],
      subscription: { plan: "Premium", status: "Active", expiry: "2025-12-31" },
    },
    {
      id: 2,
      college_id: "C02",
      name: "MIT",
      contact: { email: "info@mit.edu", phone: "987-654-3210" },
      admins: ["Carol", "Dave"],
      subscription: { plan: "Standard", status: "Active", expiry: "2025-06-30" },
    },
    {
      id: 3,
      college_id: "C03",
      name: "Stanford University",
      contact: { email: "contact@stanford.edu", phone: "415-555-1234" },
      admins: ["Eve", "Frank"],
      subscription: { plan: "Premium", status: "Active", expiry: "2026-01-15" },
    },
    {
      id: 4,
      college_id: "C04",
      name: "University of California, Berkeley",
      contact: { email: "info@berkeley.edu", phone: "510-642-6000" },
      admins: ["Grace", "Heidi"],
      subscription: { plan: "Standard", status: "Inactive", expiry: "2024-10-10" },
    },
    {
      id: 5,
      college_id: "C05",
      name: "Princeton University",
      contact: { email: "contact@princeton.edu", phone: "609-258-3000" },
      admins: ["Ivan", "Judy"],
      subscription: { plan: "Premium", status: "Active", expiry: "2025-11-20" },
    },
    {
      id: 6,
      college_id: "C06",
      name: "Yale University",
      contact: { email: "info@yale.edu", phone: "203-432-4771" },
      admins: ["Karl", "Liam"],
      subscription: { plan: "Standard", status: "Active", expiry: "2025-09-15" },
    },
    {
      id: 7,
      college_id: "C07",
      name: "Columbia University",
      contact: { email: "contact@columbia.edu", phone: "212-854-1754" },
      admins: ["Mona", "Nina"],
      subscription: { plan: "Premium", status: "Active", expiry: "2025-08-30" },
    },
    {
      id: 8,
      college_id: "C08",
      name: "University of Chicago",
      contact: { email: "info@uchicago.edu", phone: "773-702-1234" },
      admins: ["Oscar", "Pam"],
      subscription: { plan: "Standard", status: "Inactive", expiry: "2024-12-01" },
    },
    {
      id: 9,
      college_id: "C09",
      name: "California Institute of Technology",
      contact: { email: "contact@caltech.edu", phone: "626-395-6811" },
      admins: ["Quinn", "Rachel"],
      subscription: { plan: "Premium", status: "Active", expiry: "2025-07-22" },
    },
    {
      id: 10,
      college_id: "C10",
      name: "University of Pennsylvania",
      contact: { email: "info@upenn.edu", phone: "215-898-5000" },
      admins: ["Steve", "Tina"],
      subscription: { plan: "Standard", status: "Active", expiry: "2025-10-05" },
    },
    {
      id: 11,
      college_id: "C11",
      name: "Duke University",
      contact: { email: "contact@duke.edu", phone: "919-684-8111" },
      admins: ["Uma", "Victor"],
      subscription: { plan: "Premium", status: "Active", expiry: "2025-12-15" },
    },
    {
      id: 12,
      college_id: "C12",
      name: "Northwestern University",
      contact: { email: "info@northwestern.edu", phone: "847-491-3741" },
      admins: ["Wendy", "Xander"],
      subscription: { plan: "Standard", status: "Active", expiry: "2025-09-30" },
    },
  ];

  const filteredColleges = allColleges.filter((college) =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedColleges = [...filteredColleges].sort((a, b) =>
    sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  const totalPages = Math.ceil(sortedColleges.length / collegesPerPage);
  const indexOfLast = currentPage * collegesPerPage;
  const indexOfFirst = indexOfLast - collegesPerPage;
  const currentColleges = sortedColleges.slice(indexOfFirst, indexOfLast);

  const handleSort = () => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  const handlePageChange = (page) => setCurrentPage(page);
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePerPageChange = (e) => {
    setCollegesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const openViewMore = (college) => setSelectedCollege(college);
  const closeViewMore = () => setSelectedCollege(null);

  return (
    <div className="flex min-h-screen bg-black text-gray-900">
      <NavBar />

      <div className="flex-grow p-6 space-y-6">
        <header className="bg-gray-800 p-4 rounded-lg shadow text-white">
          <h1 className="text-2xl font-semibold border-b border-gray-600 pb-2 text-green-400">
            Super Admin
          </h1>
        </header>

        <div className="border-t-2 border-gray-500"></div>

        <div className="ml-4 max-w-md">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!!selectedCollege}
          />
        </div>

        {selectedCollege ? (
          <div className="ml-4">
            <button
              onClick={closeViewMore}
              className="mb-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              aria-label="Back to list"
            >
              ← Back to list
            </button>
            <ViewMore college={selectedCollege} />
          </div>
        ) : (
          <>
            <div className="ml-4 bg-white p-4 rounded-xl shadow overflow-auto">
              <table className="min-w-full table-auto text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left font-semibold text-gray-700">
                    <th className="px-4 py-2">Sl no</th>
                    <th
                      className="px-4 py-2 cursor-pointer select-none"
                      onClick={handleSort}
                    >
                      College Name{" "}
                      <span className="inline-block align-middle">
                        {sortOrder === "asc" ? "▲" : "▼"}
                      </span>
                    </th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentColleges.map((college, index) => (
                    <tr
                      key={college.id}
                      className="border-t cursor-pointer hover:bg-gray-100"
                      onClick={() => openViewMore(college)}
                    >
                      <td className="px-4 py-2">{indexOfFirst + index + 1}</td>
                      <td className="px-4 py-2">{college.name}</td>
                      <td className="px-4 py-2">
                        <button
                          className="text-blue-600 hover:underline"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row onClick firing twice
                            openViewMore(college);
                          }}
                        >
                          View More
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ml-4 flex justify-center items-center mt-4 space-x-2">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-blue-600 hover:underline"
                }`}
              >
                ←
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : "text-blue-600 hover:underline"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-blue-600 hover:underline"
                }`}
              >
                →
              </button>
            </div>

            <div className="mt-2 flex justify-center items-center space-x-4 text-sm">
              <span className="text-white">Colleges per page</span>
              <select
                id="collegesPerPage"
                value={collegesPerPage}
                onChange={handlePerPageChange}
                className="px-2 py-1 rounded border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                disabled={!!selectedCollege}
              >
                {[10, 20, 30, 40, 50].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SuperAdminPage;
