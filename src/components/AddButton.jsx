import { useNavigate } from "react-router-dom";

const AddButton = ({ label, path }) => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
      onClick={() => navigate(path)}
    >
      + Add {label}
    </button>
  );
};

export default AddButton;
