import React, { useState } from 'react';
import axios from 'axios';

const Cards = () => {
      const [username, setUsername] = useState('');
      const [userData, setUserData] = useState(null);

      const handleSubmit = async (event) => {
            event.preventDefault();
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setUserData(response.data);
            //console.log();
            setUsername('');
      };

      return (
            <div className="github-card">
                  <form onSubmit={handleSubmit}>
                        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter a GitHub username" />
                        <button type="submit">Search</button>
                  </form>
                  {userData && (
                        <div className="card">
                              <img src={userData.avatar_url} alt="" />
                              <div className="card-info">
                                    <h3 className="name">{userData.name}</h3>
                                    <p className="username">{userData.login}</p>
                                    <p>Public Repos: {userData.public_repos}</p>
                                    <p>Public Gists: {userData.public_gists}</p>
                                    <p>Profile Created: {userData.created_at.slice(0, 10)}</p>
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default Cards;
