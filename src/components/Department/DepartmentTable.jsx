import React, { useState } from 'react';

const DepartmentTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Example data (replace with your actual data)
  const data = [
    { id: 1, name: 'Hart Hagerty', phoneNumber: '+888 (01977576465)', job: 'Desktop Support Technician', age: 32 },
    { id: 2, name: 'John Doe', phoneNumber: '+888 (01977576466)', job: 'Software Engineer', age: 25 },
    { id: 3, name: 'Michel Fletch', phoneNumber: '+888 (01977576466)', job: 'Manager', age: 28 },
    { id: 4, name: 'Hamim Hasan', phoneNumber: '+888 (01977576466)', job: 'Software Tester', age: 26 },
    { id: 5, name: 'Karim Billa', phoneNumber: '+888 (01977576466)', job: 'Support Technician', age: 24 },
    // Add more data as needed
  ];

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter data based on search term
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.phoneNumber.includes(searchTerm) ||
    item.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(item.age).includes(searchTerm)
  );

  return (
    <div className="overflow-x-auto w-full px-10 -mt-40">
      {/* Search field */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-lg p-2 mb-4"
      />

      {/* Table */}
      <table className="table">
        {/* Table header */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Job</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>

        {/* Table body */}
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.job}</td>
              <td>{item.age}</td>
              <td>
                <button className="btn btn-ghost btn-xs">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentTable;
