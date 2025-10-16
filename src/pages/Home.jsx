import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCompanies } from "../api/companyService";
import CompanyCard from "../components/ui/CompanyCard";
import FilterBar from "../components/ui/FilterBar";
import "../assets/styles/home.css";

const Home = () => {
  const [companies, setCompanies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    fetchCompanies()
      .then((data) => {
        setCompanies(data);
        setFiltered(data);
      })
      .catch(() => setError("Failed to fetch data"))
      .finally(() => setLoading(false));
  }, []);

  // Compute unique locations and industries
  const locations = [...new Set(companies.map((c) => c.location))];
  const industries = [...new Set(companies.map((c) => c.industry))];

  // Apply filters
  useEffect(() => {
    const lower = search.toLowerCase();
    let result = companies.filter((c) => c.name.toLowerCase().includes(lower));
    if (location) result = result.filter((c) => c.location === location);
    if (industry) result = result.filter((c) => c.industry === industry);
    setFiltered(result);
  }, [search, location, industry, companies]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-container">
      {/* 🔹 Top Banner */}
      <div className="home-banner">
        <div className="banner-left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDx1-EgLZf1BUPgvkfUfQ4VFwqVXcfOiYN0g&s"
            alt="Logo"
            className="logo"
          />
        </div>

        <div className="banner-center">
          <h1 className="banner-title">Companies Directory</h1>
        </div>

        <div className="banner-right">
          {/* <Link to="/frontline-media" className="btn join-btn">
            Join Now
          </Link> */}
          <a
            href="https://www.frontlinesedutech.com/s/myprofile"
            className="btn join-btn"
          >
            Join Now
          </a>
        </div>
      </div>

      {/* 🔹 Filter Bar */}
      <FilterBar
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        industry={industry}
        setIndustry={setIndustry}
        locations={locations}
        industries={industries}
      />

      {/* 🔹 Companies List */}
      <div className="company-list">
        {filtered.length > 0 ? (
          filtered.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))
        ) : (
          <div className="no-results">
            <h3>🔍 No results found</h3>
            <p>
              No matching companies found. Try different keywords or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
