import Select from "react-select";

const Display = ({ isShow, userSelect, handleSubmit, handleChange, datas }) => {
  return (
    <>
      
        <div class="md:container md:mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl md:text-5xl text-center mt-4 lg:mt-6">
            {isShow ? userSelect : ""}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:w-1/2 lg:mx-auto p-4 lg:gap-4">
          <div className="h-32 flex items-center">
            <button
              className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 w-full sm:w-auto"
              onClick={() => handleSubmit()}
              disabled={!userSelect}
            >
              {isShow ? "Hide Values" : "Show Values"}
            </button>
          </div>

          <div className="flex-1 h-32 flex items-center text-lg lg:text-2xl">
            <Select
              className="w-full lg:w-full"
              options={datas}
              onChange={(e) => handleChange(e.value)}
            />
          </div>
        </div>
      
    </>
  );
};

export default Display;
