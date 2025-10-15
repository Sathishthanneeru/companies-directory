import React, { useEffect, useState } from "react";
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
  const locations = [...new Set(companies.map(c => c.location))];
  const industries = [...new Set(companies.map(c => c.industry))];

  // Apply filters
  useEffect(() => {
    const lower = search.toLowerCase();
    let result = companies.filter(c => c.name.toLowerCase().includes(lower));
    if (location) result = result.filter(c => c.location === location);
    if (industry) result = result.filter(c => c.industry === industry);
    setFiltered(result);
  }, [search, location, industry, companies]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-container">
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
      <div className="company-list">
        {filtered.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Home;
