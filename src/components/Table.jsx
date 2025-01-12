import { useContext, useEffect } from "react";
import { DataContext } from "./DataProvider";
import PropTypes from "prop-types"; // استيراد PropTypes

const Table = ({ columns, apiUrl }) => {
  const { data, loading, error, fetchData } = useContext(DataContext);

  useEffect(() => {
    if (apiUrl) {
      fetchData(apiUrl);
    }
  }, [apiUrl, fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="border px-4 py-2">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex} className="border px-4 py-2">
                {item[column.toLowerCase()]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  apiUrl: PropTypes.string.isRequired,
};

export default Table;
