import React from "react";

import "./Repositories.css";

const Repository = ({ repo, user }) => (
  <div className="repo">
    <div>
      <div className="title">

        <a
          href={`https://github.com/${repo.full_name}`}
          target="_blank"
          rel="noopener norefferer"
        >
          <span>{repo.name}</span>
        </a>
      </div>
      <span className="bio">{repo.description}</span>
    </div>
    <div className="d-flex">
      <div className="techstack">
    
      <span><button>{repo.language}</button></span>
      <span><button>{repo.stargazers_count}</button></span>
      <button><span>{repo.forks_count}</span></button>
       
      </div>
    </div>
  </div>
);

export default Repository;
