import React from "react";
import PropTypes from "prop-types";

const Table = ({ columns, data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>; // Display a message if no data is available
  }

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>
                {row[col] !== undefined ? row[col] : "N/A"} {/* Default "N/A" if the property is undefined */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
