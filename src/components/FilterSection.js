import React from "react";

const FilterSection = () => {
  const countFrom = 1;
  const countUpTo = 16;

  return (
    <div className="bg-primary flex flex-wrap items-center justify-between p-4 lg:p-9 gap-4">
      {/* Filter and View Options */}
      <div className="flex items-center gap-4">
        <img src="../system-uicons_filtering.png" alt="Filter" />
        <h4 className="text-sm lg:text-xl font-medium">Filter</h4>
        <img src="../ci_grid-big-round.png" alt="Grid" className="h-6 w-6" />
        <img src="../Vector (1).png" alt="List" className="h-6 w-6" />
      </div>

      {/* Result Count */}
      <div className="flex items-center gap-4 text-xs lg:text-sm">
        <div className="border-l-2 border-gray-400 h-6" />
        <h4>
          Showing {countFrom} - {countUpTo} of 32 results
        </h4>
      </div>

      {/* Add Product Button */}
      <button className="bg-white text-orange-400 py-2 px-4 font-semibold rounded-lg shadow-md">
        Add Product
      </button>

      {/* Show and Sort Options */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <h4 className="text-sm lg:text-xl">Show</h4>
          <input
            className="border rounded-lg p-1 w-12 text-center"
            type="number"
            defaultValue={0}
          />
        </div>

        <div className="flex items-center gap-2">
          <h4 className="text-sm lg:text-xl">Sort by</h4>
          <select
            className="border rounded-lg p-1 w-32 text-gray-500"
            defaultValue="Default"
          >
            <option value="Default">Default</option>
            <option value="Price">Price</option>
            <option value="Name">Name</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
