function Experience() {
  const experienceList = [
    {
      role: "SaaS Developer - II",
      year: "June 2024 - Present",
      company: "Meritto (Formerly NoPaperForms)",
      text: "Developing Student Dashboard for IIT Madras & SRM Group of Institutions Using React.JS.",
      moredetails: `<h6>Student Dashboard for IIT Madras & SRM Group of Institutions</h6>
<ul>
  <li>Built and maintained a responsive student dashboard using <strong>React.js</strong> for managing application forms of IIT Madras and SRM institutions.</li>
  <li>Developed modular and reusable React components for form sections, input fields, and validation messages.</li>
  <li>Integrated dynamic workflows based on student selections (e.g., program, campus, specialization) using <strong>React state management (useState, useEffect)</strong>.</li>
  <li>Designed a clean and intuitive UI using <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong> for responsive layout and styling.</li>
  <li>Used <strong>React Router</strong> for multi-page navigation within the dashboard, enabling features like application tracking and exam result views.</li>
  <li>Applied conditional rendering and role-based access control for different types of users (student, admin, evaluator).</li>
  <li>Followed component-driven development practices with proper folder structuring and code reusability.</li>
  <li>Utilized <strong>Git</strong> for version control and worked in an Agile environment with regular code reviews and sprint planning.</li>
   <li> Additionally part of Creating and developing landing pages for lead capturing.</li>
  <li>Utilizing drag-and-drop builders for responsive landing pages.</li>
  <li>Creating and training the chatbot “Niaa” for lead capturing and student enrollment.</li>
</ul>
`,
    },
    {
      role: "Web Developer Intern",
      year: "Feb 2024 - May 2024",
      company: "G-Rank Digital Marketing Pvt Ltd.",
      text: "Assisting in developing responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and Bootstrap.",
      moredetails: `<h6>A digital marketing company specializing in web development</h6>

<ul>
  <li>Assisted in developing responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and Bootstrap.</li>
  <li>Handled back-end development using PHP to manage email communications from enquiry forms.</li>
  <li>Collaborated with senior developers and designers to meet project requirements.</li>
  <li>Tested and debugged code for cross-browser compatibility.</li>
  <li>Implemented UI designs to optimize the user experience.</li>
  <li>Documented code and project specifications for team collaboration.</li>
  <li>Learned new technologies and best practices in web development.</li>
  <li>Optimized websites for performance, speed, and SEO.</li>
  <li>Communicated project progress and adhered to deadlines.</li>
</ul>
`,
    },
    {
      role: "Consultant Intern",
      year: "july 2023 - Sep 2023",
      company: "Briclay Technologies",
      text: "I am a Cousultant Intern with 3 months of internship experience in building responsive and interactive web applications.",
      moredetails: `<h6>Briclay Technologies - Is a product based company similar to Zepto and Blinkit</h6>
      <ul>
      <li>Part of Developing the official webpage for Briclay Technologies.</li>
      <li>Part of Creating a official webpage for Newto Solutions Pvt Ltd by using technologies like HTML,
CSS, Javascript, React.JS</li>
      </ul>`,
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
          My <span className="me">Experience</span>
        </h1>
        <span className="resume">Expertise</span>
      </div>
      <div className="container experience">
        <div className="row">
          <div
            className="col-lg-9"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos="fade-right"
          >
            {experienceList.map((item) => (
              <div className="ex-edu-content">
                <div>
                  <i className="fa-solid fa-briefcase" aria-hidden="true"></i>
                </div>
                <div>
                  <span className="year">{item.year}</span>
                  <h5 className="ex-edu-heads">
                    {item.role} - <span>{item.company}</span>
                  </h5>

                  <p className="ex-edu-para">{item.text}</p>
                  <div className="info-section">
                    <p className="info-content">
                      More Details
                      <i className="fa-solid fa-circle-info"></i>{" "}
                      <span
                        className="more-info"
                        dangerouslySetInnerHTML={{ __html: item.moredetails }}
                      ></span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            ;
          </div>
          <div className="col-lg-3 company-logos">
            <div className="row">
              <div
                className="col-lg-12"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos="fade-left"
              >
                <img
                  src="https://www.nopaperforms.com/wp-content/uploads/2024/10/noPaperForms-Logo_white-01.png"
                  alt=""
                />
              </div>
              <div
                className="col-lg-12"
                data-aos-duration="1500"
                data-aos-delay="250"
                data-aos="fade-left"
              >
                <img src="../images/experience/g-rank.png" alt="" />
              </div>
              <div
                className="col-lg-12"
                data-aos-duration="1900"
                data-aos-delay="290"
                data-aos="fade-left"
              >
                <img
                  src="../images/experience/briclay.jpg"
                  alt=""
                  className="briclay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
