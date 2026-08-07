import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>
                  Tata 1mg{" "}
                  <span style={{ fontSize: "14px", color: "#ccc", fontWeight: 300, display: "block", marginTop: "5px" }}>
                    Apr 2026 – Jul 2026
                  </span>
                </h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Engineered automated interview scheduling and compensation reporting systems using Google Apps Script and APIs, cutting manual coordination time by 50–70% and turnaround time by 90%. Supported talent acquisition workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>
                  FSSAI{" "}
                  <span style={{ fontSize: "14px", color: "#ccc", fontWeight: 300, display: "block", marginTop: "5px" }}>
                    Jan 2026 – Mar 2026
                  </span>
                </h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Processed and reviewed APAR records for employee appraisals, cleaned large HR datasets (IPR records) in Excel, and analyzed employee data to assist in promotions and operations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Excel & SQL Instructor</h4>
                <h5>
                  PLUS-IS{" "}
                  <span style={{ fontSize: "14px", color: "#ccc", fontWeight: 300, display: "block", marginTop: "5px" }}>
                    Aug 2024 – Aug 2025
                  </span>
                </h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Assisted students with practice sessions and resolved doubts on course materials. Provided one-on-one support and prepared learning materials for training sessions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BA Economics Honours</h4>
                <h5>
                  College of Vocational Studies{" "}
                  <span style={{ fontSize: "14px", color: "#ccc", fontWeight: 300, display: "block", marginTop: "5px" }}>
                    2024 – 2027
                  </span>
                </h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Pursuing BA Economics Honours, focusing on data-driven economics, econometrics, and analytical problem-solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Commerce + Maths</h4>
                <h5>12th CBSE | 83%</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed senior secondary education with a specialized focus on Commerce and Mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th CBSE | 86%</h4>
                <h5>CBSE Board</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed secondary school education under the CBSE board with strong academic performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
