import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Search = () => {
  return (
    <div className="flex items-center border rounded-lg bg-white p-2 max-w-xs w-full">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none w-full"
      />
    </div>
  );
};

export default Search;
