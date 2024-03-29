import React, { useState } from "react";
import Video1 from "../assets/videos/Nuevos.mp4";
import Video2 from "../assets/videos/Banner.mp4";

function Banner() {
  const [currentVideo, setCurrentVideo] = useState(Video1);

  const handleVideoChange = () => {
    setCurrentVideo(Video2);
  };

  return (
    <section id="inicio">
      <div className="video-container">
        <video
          className="video"
          autoPlay={true}
          loop={true}
          controls={false}
          muted={true}
          onEnded={handleVideoChange}
        >
          <source src={currentVideo} type="video/mp4" />
          Tu navegador no admite videos HTML5.
        </video>
      </div>
    </section>
  );
}

export default Banner;
