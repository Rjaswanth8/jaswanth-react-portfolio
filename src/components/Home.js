import HomeAbout from "./homeAbout";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="home container-fluid">
      <div className="color-div"></div>
      <div className="row align-items-center home-container">
        <div className="col-md-4 col-12">
          <div
            className="profile-image"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          ></div>
        </div>
        <div
          className="col-md-6 col-12"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="profile-content">
            <h1 className="name">I'M R JASWANTH.</h1>
            <h1 className="role">FRONT-END DEVELOPER</h1>
            <p>
              As a front-end developer, I specialize in developing responsive,
              performant interfaces that deliver seamless user experiences. I'm
              Jaswanth passionate about writing clean code and creating
              purposeful, user-focused designs.
            </p>
            <div
              className="download-cv"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <a href="#aboutPopup" className="button">
                <span variant="primary">more about me</span>
                <span className="fa-solid fa-arrow-right download-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="popup-container" id="aboutPopup">
        <div className="popup">
          <a href="#home" className="close-btn">
            ×
          </a>
          <div className="popup-scroll-content">
            <HomeAbout />
          </div>
        </div>
      </div>

      {/* Mobile hero section */}

      <div className="container mobile-home">
        <div className="row text-center rowgap">
          <div className="image-div">
            <img src="../images/home/mobile.jpg" alt="hero-image" />
          </div>
          <div>
            <h1 className="name">
              I'M R JASWANTH.
              <br /> <span className="role">FRONT-END DEVELOPER</span>
            </h1>
          </div>

          <p>
            As a front-end developer, I specialize in developing responsive,
            performant interfaces that deliver seamless user experiences. I'm
            Jaswanth — driven by clean code and purposeful design.
          </p>
          <div
            className="download-cv"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <a href="#aboutPopup" className="button">
              <span variant="primary">more about me</span>
              <span className="fa-solid fa-arrow-right download-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
