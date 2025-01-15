import PropTypes from "prop-types";

const Table = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse shadow-md bg-white rounded-lg">
          <thead>
            <tr className="bg-[#e5d5fd]">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-left text-sm font-medium text-gray-700"
                >
                  {column.header}
                </th>
              ))}
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50">
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-4 py-2 text-sm text-gray-700"
                    >
                      {column.render
                        ? column.render(row[column.accessor], row)
                        : row[column.accessor]}
                    </td>
                  ))}
                  <td className="px-4 py-2 text-sm text-gray-700">
                    <button
                      onClick={() => onEdit(row)}
                      className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(row.id)}
                      className="bg-red-500 text-white text-xs px-2 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 1} // Adjust the number of columns to include the actions column
                  className="px-4 py-2 text-center text-gray-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Prop validation
Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Table;
