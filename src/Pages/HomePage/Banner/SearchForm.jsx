

const SearchForm = () => {
    return (
        <form className="bg-yellow-300 shadow-md p-5 rounded-xl flex items-center justify-center gap-6">
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
          >
            Destination
          </label>
          <input
            className="  border-gray-500 rounded  py-2 px-3   focus:outline-none "
            type="text"
            placeholder=""
          />
        </div>
        {/* 2 */}
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
          >
           Type 
          </label>
          <input
            className="  border rounded  py-2 px-3   focus:outline-none "
            type="text"
            placeholder=""
          />
        </div>
        {/* 3 */}
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
          >
            When
          </label>
          <input
            className="  border rounded  py-2 px-3   focus:outline-none "
            type="text"
            placeholder=""
          />
        </div>
        {/* 4 */}
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
          >
            Guest
          </label>
          <input
            className="  border rounded  py-2 px-3   focus:outline-none "
            type="text"
            placeholder=""
          />
          
        </div>
        <div>
        <input
            className=" bg-white px-4 py-3 rounded-md  cursor-pointer"
            type="submit"
            placeholder=""
          />
        </div>
      </form>
    );
};

export default SearchForm;