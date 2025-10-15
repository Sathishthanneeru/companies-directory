import React from "react";
import "../../assets/styles/FilterBar.css";

const FilterBar = ({ search, setSearch, location, setLocation, industry, setIndustry, locations, industries }) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search companies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">All Locations</option>
        {locations.map((loc, index) => (
          <option key={index} value={loc}>{loc}</option>
        ))}
      </select>

      <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
        <option value="">All Industries</option>
        {industries.map((ind, index) => (
          <option key={index} value={ind}>{ind}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
