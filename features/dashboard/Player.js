import React from "react";

//this component represents the player.

const Player = ({ videoId }) => {
  var id;
  if (typeof videoId === "string") {
    id = videoId;
  } else if (typeof videoId === "object") {
    id = videoId.videoId;
  }
  const url = `https://www.youtube.com/embed/${id}`;
  return (
    <div>
      <iframe src={url} className="player" />
    </div>
  );
};

export default Player;
