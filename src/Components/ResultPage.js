import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResultPage = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userData.name}</h1>
      <img src={userData.avatar_url} alt={userData.name} width = "100px"/>
      <p>{userData.bio}</p>
      <a href={userData.html_url}>View profile on GitHub</a>
    </div>
  );
};

export default ResultPage;
