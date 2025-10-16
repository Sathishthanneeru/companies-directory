*Companies Directory:

A React-based frontend web application that displays a list of companies with advanced filtering and search capabilities.
Users can browse companies by name, location, and industry, and navigate seamlessly using React Router.
It also features a banner section with branding and quick access to the Frontline Media page.

Features

✅ Responsive UI – Optimized for all screen sizes (desktop, tablet, mobile)
✅ Dynamic Company Listing – Fetches and displays company data from a mock API
✅ Search & Filter – Filter companies by name, location, and industry in real time
✅ Smooth Routing – Implemented internal navigation using React Router
✅ Top Banner – Includes logo, project title, and interactive “Join Now” & “Login” buttons
✅ Custom Styling – Designed with a unique and modern home.css
✅ Error & Loading States – Displays meaningful messages during data fetch operations


Tech Stack:

 1.React.js (Frontend framework)
 2.React Router DOM (Routing and navigation)
 3.CSS3 (Custom component styling)
 4.JavaScript (ES6+) (Logic and dynamic data rendering)

Folder Structure
companies-directory/
│
├── src/
│   ├── api/
│   │   └── companyService.js         
│   ├── assets/
│   │   └── styles/
│   │       └── home.css
│   ├── components/
│   │   └── ui/
│   │       ├── CompanyCard.jsx      
│   │       └── FilterBar.jsx         
│   ├── pages/
│   │   └── Home.jsx                  
│   ├── App.jsx                       
│   └── main.jsx                      
│
└── package.json

*How It Works:
The app fetches a list of companies from the mock API (companyService.js).

Users can:
Search by company name.
Filter by location or industry.
Filtered results are displayed instantly.

The banner includes:
Logo
Companies Directory title
Join Now button (opens Frontline Media website)
