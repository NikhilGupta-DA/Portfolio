import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const currentContainers = [...containerRef.current];
    if (ScrollTrigger.isTouch) {
      currentContainers.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
        }
      });

      const handleBoxClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const container = target.closest(".what-content") as HTMLDivElement;
        if (container && currentContainers.includes(container)) {
          handleClick(container);
        }
      };

      const parent = document.querySelector(".what-box-in");
      if (parent) {
        parent.addEventListener("click", handleBoxClick as EventListener);
      }

      return () => {
        if (parent) {
          parent.removeEventListener("click", handleBoxClick as EventListener);
        }
      };
    }
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="calc(100% - 1px)"
                y1="0"
                x2="calc(100% - 1px)"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="calc(100% - 1px)"
                  x2="100%"
                  y2="calc(100% - 1px)"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>ANALYSIS</h3>
              <h4>Description</h4>
              <p>
                Analyzing complex datasets to generate actionable insights, designing robust relational databases, and building interactive dashboards to support decision-making.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">SQL Server</div>
                <div className="what-tags">Power BI</div>
                <div className="what-tags">Excel</div>
                <div className="what-tags">Google Sheets</div>
                <div className="what-tags">Data Modelling</div>
                <div className="what-tags">ETL & CTEs</div>
                <div className="what-tags">Dax Functions</div>
                <div className="what-tags">Power Query</div>
                <div className="what-tags">Dashboard Design</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="calc(100% - 1px)"
                  x2="100%"
                  y2="calc(100% - 1px)"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AUTOMATION</h3>
              <h4>Description</h4>
              <p>
                Engineering scalable automation systems to eliminate manual workflows, scripting custom integrations, and optimizing business processes using APIs.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Google Apps Script</div>
                <div className="what-tags">VBA</div>
                <div className="what-tags">Sheets & Calendar APIs</div>
                <div className="what-tags">Stored Procedures</div>
                <div className="what-tags">Generative AI</div>
                <div className="what-tags">Data Cleaning</div>
                <div className="what-tags">App Script</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
