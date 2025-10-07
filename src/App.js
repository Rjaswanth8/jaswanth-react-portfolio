import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import your components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  const [isBright, setIsBright] = useState(true);

  const brightness = [{ icon: '<i class="fi fi-br-brightness"></i>' }];
  const moon = [{ icon: '<i class="far fa-moon"></i>' }];

  // Toggle theme state
  const toggleTheme = () => {
    setIsBright((prev) => !prev);
  };

  // Dynamically switch CSS file
  useEffect(() => {
    const themeLinkId = "theme-css";
    const themeHref = isBright ? "/light.css" : "/index.css";
    const existingLink = document.getElementById(themeLinkId);

    if (existingLink) {
      existingLink.href = themeHref;
    } else {
      const link = document.createElement("link");
      link.id = themeLinkId;
      link.rel = "stylesheet";
      link.href = themeHref;
      document.head.appendChild(link);
    }
  }, [isBright]);

  return (
    <Router>
      <div>
        {/* Theme Toggle */}
        <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
          {isBright
            ? brightness.map((item, index) => (
                <header
                  key={`brightness-${index}`}
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
              ))
            : moon.map((item, index) => (
                <header
                  className="moon"
                  key={`moon-${index}`}
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
              ))}
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">
                <h2 className="nav-text">Home</h2>
                <i className="fa fa-home"></i>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <h2 className="nav-text">About</h2>
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
            <li>
              <Link to="/education">
                <h2 className="nav-text">Education</h2>
                <i className="fa-solid fa-graduation-cap"></i>
              </Link>
            </li>
            <li>
              <Link to="/experience">
                <h2 className="nav-text">Experience</h2>
                <i className="fa-solid fa-briefcase"></i>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <h2 className="nav-text">Contact</h2>
                <i className="fa-solid fa-comments"></i>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
