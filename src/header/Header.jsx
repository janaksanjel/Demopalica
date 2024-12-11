import React, { useState } from "react";
import "./Header.css";

import DarkMode from "../DarkMode/DarkMode";
import Chart from "../Chart/Chart";

const Header = () => {

// Initial list of items
const items = []; // Example items

// State for search query and filtered results
const [searchQuery, setSearchQuery] = useState("");
const [filteredItems, setFilteredItems] = useState(items);

// Handle input change
const handleInputChange = (e) => {
  const query = e.target.value;
  setSearchQuery(query);

  // Filter the items based on the search query
  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredItems(filtered);
};
  return (
    <>
      <div className="headmain" style={{ backgroundColor: 'white' }}>
        <div className="imageheader">
          <img
            src="https://gwp.nirc.com.np/images/logo.png"
            alt="Nepali Logo"
            className="logo"
          />
        </div>
        <div className="header">
          <h2>डेमो पालिका</h2>
        </div>
        <div className="date-year">
          <select id="fiscal-year-select">
            <option value="2076/2077">२०७६/२०७७</option>
            <option value="2077/2078">२०७७/७८</option>
            <option value="2078/2079">२०७८/७९</option>
            <option value="2079/2080">२०७९/०८०</option>
            <option value="2080/2081">२०८०/८१</option>
            <option value="2081/2082" selected>
              २०८१/०८२
            </option>
          </select>
        </div>
  
        <div className="dark">
          <DarkMode />
        </div>
        <div className="search-container">
      {/* Search Input */}
      <input
        type="text"
        placeholder="योजना नम्बर/कोड द्वारा खोज्नुहोस्"
        value={searchQuery}
        onChange={handleInputChange}
        className="search-input"
      />

      {/* Display Filtered Results */}
      <ul className="search-results">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="search-item">
              {item}
            </li>
          ))
        ) : (
          <li className="search-no-results"></li>
        )}
      </ul>
    </div>
      </div>

      

      
    </>
  );
};

export default Header;
