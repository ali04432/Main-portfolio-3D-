import "./styles/Career.css";
import { config } from "../config";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3 className="career-period">{exp.period}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        <h3 className="career-education-title">Education</h3>
        <div className="career-info">
          {config.education.map((education) => (
            <div key={education.degree} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{education.degree}</h4>
                  <h5>{education.institution}</h5>
                </div>
                <h3 className="career-period">{education.period}</h3>
              </div>
              <p>{education.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
