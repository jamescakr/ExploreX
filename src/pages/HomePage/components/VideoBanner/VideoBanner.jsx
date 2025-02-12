import React from "react";
import "./VideoBanner.Style.css";

export default function VideoBanner() {
  return (
    <div>
      <div className="hero-heading">
        <video loop autoPlay muted id="bg-video">
          <source src={require("./travel video.mov")} type="Video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="hero-title">Discover Your Next Adventure</h1>
          <div className="fw-semibold">Explore, Dream, Travel.</div>
        </div>
      </div>
    </div>
  );
}
