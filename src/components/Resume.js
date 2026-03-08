import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Resume.css";
import resume from "../assets/resume.pdf";
import Navbar from "../components/Navbar";

function Resume() {
  const componentRef = useRef();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume; // imported file path
    link.download = "resume.pdf"; // pangalan ng file pag nade-download
    link.click();
  };

  //   <button
  //     onClick={handlePrint}
  //     style={{ padding: "10px 20px", fontSize: "16px" }}
  //   >
  //     Download PDF
  //   </button>;

  return (
    <div>
      <Navbar />
      <div ref={componentRef} className="resume-container">
        {/* Header */}
        <header className="resume-header">
          <h1>Dominick Salazar</h1>
          <p>
            Email: dominicksalazar788@yahoo.com | Phone: +63 9957657606 |
            Location: Northern Samar, Philippines
          </p>
        </header>

        {/* Summary */}
        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Full Stack Developer with experience in ReactJS and Laravel,
            passionate about building efficient and scalable web applications.
          </p>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2>Work Experience</h2>
          <div>
            <h3>WordPress & ReactJS Developer - Government Office</h3>
            <p>
              <em>2023 - 2026 Present</em>
            </p>
            <ul>
              <li>
                Developed SIWAK System using ReactJS , Tailwindcss and Laravel.
              </li>
              <li>
                Built Gym Website with Bootstrap, Material UI, and RestAPI
                integration.
              </li>
              <li>Handled full-stack development projects and deployment.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2>Education</h2>
          <p>
            Bachelor of Science in Information Technology, University of the
            Philippines, Diliman
          </p>
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2>Skills</h2>
          <ul>
            <li>ReactJS, Laravel, PHP, JavaScript</li>
            <li>Bootstrap, Material UI, TailwindCSS</li>
            <li>REST APIs, CRUD operations</li>
            <li>Database: MySQL, PostgreSQL</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h2>Projects</h2>
          <div className="project">
            <h3>Gym Website</h3>
            <p>
              Responsive website to explore workouts based on targeted muscles.
              Built with ReactJS, Bootstrap, Material UI, and integrated REST
              APIs.
            </p>
          </div>
          <div className="project">
            <h3>SIWAK System</h3>
            <p>
              Government system for tracking PPA data using ReactJS and Laravel.
            </p>
          </div>
        </section>
      </div>

      {/* Download Button */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={handleDownload}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default Resume;
