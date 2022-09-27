import React from "react";

import "./UserData.css";

const UserData = ({ user }) => (
  <div className="user-info">
    <img
      src={user.avatar_url}
      className="p-2 avatar"
      width="150"
      height="150"
    />
    <div className="user">
      <h5>{user.name}</h5>
      <div className="information">
        {user.location && (
     <div className="info">
            <span>{user.location} </span>
          </div>
        )}
        {user.email && (
          <div className="info">
            <span>{user.email} · </span>
          </div>
        )}
        {user.twitter_username && (
          <div className="info">
            <span>{user.twitter_username} · </span>
            <br />
          </div>
        )}

        {user.followers && (
          <div className="info">
            <span>{user.followers} Followers · </span>
          </div>
        )}
        {user.following && (
          <div className="info">
            <span>{user.following} Following </span>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default React.memo(UserData);
