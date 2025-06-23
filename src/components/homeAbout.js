import SkillsSection from "./SkillsSection";

function homeAbout() {
  const listNumbers = [
    { number: "1.7", text: "years of experience" },
    { number: "10", text: "completed projects" },
    { number: "8", text: "happy customers" },
    { number: "3", text: "awards won" },
  ];

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

  const experienceList = [
    {
      role: "SaaS Developer - II",
      year: "June 2024 - Present",
      company: "Meritto (Formerly NoPaperForms)",
      text: "Enhancing the student dashboard UI for better user experience.",
    },
    {
      role: "Web Developer Intern",
      year: "Feb 2024 - May 2024",
      company: "G-Rank Digital Marketing Pvt Ltd.",
      text: "Assisting in developing responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and Bootstrap.",
    },
    {
      role: "Consultant Intern",
      year: "july 2023 - Sep 2023",
      company: "Briclay Technologies",
      text: "I am a Cousultant Intern with 3 months of internship experience in building responsive and interactive web applications.",
    },
  ];

  return (
    <div className="about container">
      <div className="about-container">
        <div className="head-container">
          <h1 className="main-head">
            about <span className="me">me</span>
          </h1>
          <span className="resume">resume</span>
        </div>

        <h2>personal infos</h2>
        <div className="row">
          <div className="col-lg-6   details">
            <div className="row">
              <div className="col-mb-3 col-xs-12 col-sm-12 col-lg-6">
                <h5>
                  <span className="details-head">First Name:</span> Jaswanth
                </h5>
                <h5>
                  <span className="details-head">Age:</span> 23
                </h5>
                <h5>
                  <span className="details-head">Freelance: </span>
                  <span className="freelance">Available</span>
                </h5>
                <h5>
                  <span className="details-head">Phone:</span> +91 - 8688086646
                </h5>
                <h5>
                  <span className="details-head">Country: </span>Indian
                </h5>
              </div>
              <div className="col-mb-3 col-xs-12 col-sm-12 col-lg-6">
                <h5>
                  <span className="details-head">Last Name:</span> Ravinni
                </h5>
                {/* <h5>
                  <span className="details-head">Nationality Name:</span> Indian
                </h5> */}
                <h5>
                  <span className="details-head">Address:</span> Chittoor - AP
                </h5>
                <h5>
                  <span className="details-head">Email:</span>{" "}
                  raminenijaswanth26@gmail.com
                </h5>
                <h5>
                  <span className="details-head">Languages:</span> Telugu,
                  English, Hindi, Tamil
                </h5>
              </div>
              <div className="download-cv">
                <a href="#home" className="button">
                  <span>Download cv</span>
                  <span class="fa-solid fa-download download-icon"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              {listNumbers.map((item) => (
                <div className="col-lg-6 number-text">
                  <span className="number">{item.number}</span>
                  <p className="text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 
      <div className="container">
        <div className="row">
          {mySkills.map((item) => (
            <div className="col-lg-3">
              <div className="c100 p25 percent-div">
                <h2 className="skill-percent">{item.number}</h2>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
                <h2 className="skill-name">{item.text}</h2>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <hr class="separator"></hr>
      <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">
        my skills
      </h3>
      <SkillsSection />

      <div className="container">
        <h3 className="ex-edu-heading pb-5 pt-5">Experience & Education</h3>
        <div className="row">
          <div className="col-lg-6">
            {experienceList.map((item) => (
              <div className="ex-edu-content">
                <div>
                  <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
                </div>
                <div>
                  <span className="year">{item.year}</span>
                  <h5 className="ex-edu-heads">
                    {item.role} - <span>{item.company}</span>
                  </h5>
                  <p className="ex-edu-para">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            {educationList.map((item) => (
              <div className="ex-edu-content">
                <div>
                  <i class="fa-solid fa-graduation-cap cap"></i>
                </div>
                <div>
                  <span className="year">{item.year}</span>
                  <h5 className="ex-edu-heads">
                    {item.degree} - <span>{item.college}</span>
                  </h5>
                  <p className="ex-edu-para">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default homeAbout;
