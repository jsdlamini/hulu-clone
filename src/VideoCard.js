import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <h1> </h1>
      <img
        src="https://www.signs.com/content/assets/filelibrary/pcs-header-4250.png"
        alt=""
      />
      <p> This is a film about programming</p> <h2>Movie title</h2>
      <p> Number of likes</p>
    </div>
  );
}

export default VideoCard;
