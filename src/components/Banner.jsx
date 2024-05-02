import Video from "../assets/videos/firma.mp4";

function Banner() {
  return (
    <section id="inicio">
      <div className="video-container">
        <video
          className="video"
          autoPlay={true}
          loop={true}
          controls={false}
          muted={true}
        >
          <source src={Video} type="video/mp4" />
          Tu navegador no admite videos HTML5.
        </video>
      </div>
    </section>
  );
}

export default Banner;
