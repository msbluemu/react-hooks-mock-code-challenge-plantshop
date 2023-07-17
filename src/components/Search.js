import React, {useState} from "react";

function Search({plants, setPlants}) {
  const [searchQuery, setSearchQuery] = useState("");

  
  function handleChange(e) {
    console.log(e.target.value);
    setSearchQuery(e.target.value); // Update the search query state
    filterPlants(e.target.value);
  }

  function filterPlants(query) {
    const filteredPlants = plants.filter((plant) =>
      plant.name.toLowerCase().includes(query.toLowerCase())
    );
    setPlants(filteredPlants);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
