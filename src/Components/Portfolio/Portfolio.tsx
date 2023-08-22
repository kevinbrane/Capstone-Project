import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import Isotope from "isotope-layout";
import "./Portfolio.scss";

const Portfolio: React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
    const [activeButton, setActiveButton] = useState<string>("All");

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);

        const iso = Isotope.data('.portfolio-cards-container');
        if (iso) {
            if (buttonName === "All") {
                iso.arrange({ filter: '*' });
            } else {
                iso.arrange({ filter: `.${buttonName}` });
            }
        }
    };

    useEffect(() => {
      const initializeIsotope = () => {
          const iso = new Isotope('.portfolio-cards-container', {
              itemSelector: '.portfolio-item-container',
              layoutMode: 'fitRows'
          });
          
          return () => {
              iso.destroy();
          };
      };
  
      if (document.readyState === 'complete') { 
          initializeIsotope();
      } else {
          window.addEventListener('load', initializeIsotope); 
          return () => {
              window.removeEventListener('load', initializeIsotope); 
          };
      }
  }, []);

    return (
        <div className="portfolio-container" ref={ref}>
            <div>
                <h1 className="portfolio-title">Portfolio</h1>
            </div>
            <div className="portfolio-to-search-container">
                <button onClick={() => handleButtonClick("All")} className={activeButton === "All" ? "active" : ""}>All</button>
                <span className={activeButton === "All" ? "active" : ""}>/</span>
                <button onClick={() => handleButtonClick("Code")} className={activeButton === "Code" ? "active" : ""}>Code</button>
                <span className={activeButton === "Code" ? "active" : ""}>/</span>
                <button onClick={() => handleButtonClick("UI")} className={activeButton === "UI" ? "active" : ""}>UI</button>
            </div>
            <div className="portfolio-cards-container">
                <div className={`portfolio-item-container Code`}>
                    <img src="../src/assets/Portfolio/Portfolio cards.png" alt="" />
                    <div className="portfolio-item-text-container">
                        <h4>Some text</h4>
                        <p>Donec pede justo...</p>
                        <Link className="view-resource" to="">View resource</Link>
                    </div>
                </div>
                <div className={`portfolio-item-container UI`}>
                    <img src="../src/assets/Portfolio/card_3@2x.png" alt="" />
                    <div className="portfolio-item-text-container">
                        <h4>Some text</h4>
                        <p>Donec pede justo...</p>
                        <Link className="view-resource" to="">View resource</Link>
                    </div>
                </div>
                <div className={`portfolio-item-container Code`}>
                    <img src="../src/assets/Portfolio/Portfolio cards.png" alt="" />
                    <div className="portfolio-item-text-container">
                        <h4>Some text</h4>
                        <p>Donec pede justo...</p>
                        <Link className="view-resource" to="">View resource</Link>
                    </div>
                </div>
                <div className={`portfolio-item-container UI`}>
                    <img src="../src/assets/Portfolio/card_3@2x.png" alt="" />
                    <div className="portfolio-item-text-container">
                        <h4>Some text</h4>
                        <p>Donec pede justo...</p>
                        <Link className="view-resource" to="">View resource</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ForwardedPortfolio = forwardRef(Portfolio);
export default ForwardedPortfolio;