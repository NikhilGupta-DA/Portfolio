import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    title: "Email Outreach System",
    category: "Workflow Automation",
    tools: "Google Apps Script, Sheets, Scheduled Delivery, Weekend Filtering, Follow-ups",
    impact: "Released ₹1.4 Crores in annual gross CTC job offers to my college in February using this automated outreach tool.",
    image: "/images/email_collage.png",
    link: "#",
  },
  {
    num: "02",
    title: "Automated Bank Statement Generator",
    category: "Database / SQL",
    tools: "SQL Server, T-SQL Stored Procedures, Window Functions, Temp Tables, DATEDIFF",
    impact: "Built using optimized T-SQL stored procedures; dynamically retrieves and formats transaction statements by accepting Account ID and Month parameters as inputs.",
    image: "/images/bank_statement.png",
    link: "#",
  },
  {
    num: "03",
    title: "Automated Interview Scheduler",
    category: "API Integration",
    tools: "Google Apps Script, Sheets API, Calendar API, Automation",
    impact: "Reduced interview scheduling time by 50% to 60% at Tata 1mg using this automated calendar scheduling tool.",
    image: "/images/scheduler_collage.png",
    link: "#",
  },
  {
    num: "04",
    title: "Compensation Reporting Pipeline",
    category: "Data Analytics",
    tools: "Advanced Excel, VBA, Power Query, Data Modeling",
    impact: "Developed a custom VBA automation tool for a Senior Manager at Tata 1mg to process and partition complex employee compensation reports based on a mapping sheet. Reduced processing time from 2 hours to 1 minute, saving over 95% of manual execution time.",
    image: "/images/compensation_flow.png",
    link: "#",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                {project.impact && (
                  <>
                    <h4 style={{ marginTop: "20px", color: "var(--accentColor)", fontWeight: 500 }}>Key Impact</h4>
                    <p style={{ color: "#eae5ec" }}>{project.impact}</p>
                  </>
                )}
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
