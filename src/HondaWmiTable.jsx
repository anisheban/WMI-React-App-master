
import React from 'react';

const HondaWmiTable = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Id</th>
            <th>Name</th>
            <th>Vehicle Type</th>
            <th>WMI</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.country}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.vehicleType}</td>
              <td>{item.wmi}</td>
              <td>{item.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <span><strong>{data.length}</strong> records found</span>
    </div>
  );
};

export default HondaWmiTable;

