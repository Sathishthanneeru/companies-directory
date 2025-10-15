import React from "react";
import "../../assets/styles/CompanyCard.css";

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <h3 className="company-name">{company.name}</h3>
      <p className="company-info">
        {company.location} | {company.industry}
      </p>
      {/* Optional: Add more details or buttons */}
    </div>
  );
};

export default CompanyCard;
