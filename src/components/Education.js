function Education() {
  const educationList = [
    {
      degree: "B.Tech",
      college: "Rgukt rkv (IIIT)",
      year: "2019 - 2025",
      text: "I have done my ug in mechanical engineering from rajiv gandhi university of knowledge technologies (IIIT)",
    },
    {
      degree: "puc",
      year: "2017 - 2019",
      college: "Rgukt rkv (IIIT)",
      text: "I have done my puc in MPC from rajiv gandhi university of knowledge technologies (IIIT)",
    },
    {
      degree: "SSC",
      year: "2016 - 2017",
      college: "Z.P.H.S. Pullur",
      text: "I have done my schooling from Z.P.H.S. Pullur",
    },
  ];

  return (
    <div>
      <div
        className="head-container"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos="fade-down"
      >
        <h1 className="main-head">
          My <span className="me">Education</span>
        </h1>
        <span className="resume">Education</span>
      </div>
      <div className="container education">
        <div className="row">
          <div
            className="col-lg-7"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos="fade-right"
          >
            {educationList.map((item) => (
              <div className="ex-edu-content">
                <div>
                  <i class="fa-solid fa-graduation-cap cap"></i>
                </div>
                <div className="box-shadow">
                  <span className="year">{item.year}</span>
                  <h5 className="ex-edu-heads">
                    {item.degree} - <span>{item.college}</span>
                  </h5>
                  <p className="ex-edu-para">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="col-lg-4"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos="fade-left"
          >
            <img
              src="../images/education/rkv.webp"
              alt=""
              className="rkv-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
