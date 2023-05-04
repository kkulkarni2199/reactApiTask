import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/users/${username}`);
  };

  return (
    
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Enter the GitHub username
      </label>
      <input
        type="text"
        className="textbox"
        value={username}
        onChange={handleInputChange}
        placeholder="For e.g. octocat"
      />
      <button autoFocus type="submit">Search</button>
    </form>
    </div>
   

  );
};

export default SearchPage;
