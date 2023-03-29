import React from "react";

function Player({ avatarUrl, name }) {
  return (
    <div className="user">
      <span>{name}</span>
      <img className="avatar" src={avatarUrl} alt= {name} />
    </div>
  );
  // code o gia tri src va alt
}

export default Player;
