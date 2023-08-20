import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio: React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  const [activeButton, setActiveButton] = useState<string>("All");
  const [hiddenCategories, setHiddenCategories] = useState<string[]>([]);

  const handleButtonClick = (buttonName: string) => {
    // Reset hidden categories before filtering
    setHiddenCategories([]);

    setActiveButton(buttonName);

    // Determine which categories should be hidden after the fade-out animation
    const categories = ["Code", "UI"];
    const categoriesToHide = categories.filter(category => category !== buttonName && buttonName !== "All");

    setTimeout(() => {
      setHiddenCategories(categoriesToHide);
    }, 700); // This delay should match the duration of your fade-out animation
  };

  const shouldRenderItem = (category: string) => {
    if (activeButton === "All" || activeButton === category || hiddenCategories.includes(category)) return true;
    return false;
  };

  const getImageClass = (category: string): string => {
    if (hiddenCategories.includes(category)) return "hidden";
    if (activeButton === "All" || activeButton === category) return "fade-in-from-right";
    return "fade-out";
  };

  return (
    <div className="portfolio-container" ref={ref}>
      <div>
        <h1 className="portfolio-title">Portfolio</h1>
      </div>
      <div className="portfolio-to-search-container">
        <button onClick={() => handleButtonClick("All")} className={activeButton === "All" ? "active" : ""}>
          All
        </button>
        <span className={activeButton === "All" ? "active" : ""}>/</span>
        <button onClick={() => handleButtonClick("Code")} className={activeButton === "Code" ? "active" : ""}>
          Code
        </button>
        <span className={activeButton === "Code" ? "active" : ""}>/</span>
        <button onClick={() => handleButtonClick("UI")} className={activeButton === "UI" ? "active" : ""}>
          UI
        </button>
      </div>
      <div className="portfolio-cards-container">
        {shouldRenderItem("Code") && (
          <div className={`portfolio-item-container ${getImageClass("Code")}`}>
            <img src="../../public/Portfolio/Portfolio cards.png" alt="" />
          </div>
        )}
        {shouldRenderItem("UI") && (
          <div className={`portfolio-item-container ${getImageClass("UI")}`}>
            <img src="../../public/Portfolio/card_3@2x.png" alt="" />
          </div>
        )}
        {shouldRenderItem("Code") && (
          <div className={`portfolio-item-container ${getImageClass("Code")}`}>
            <img src="../../public/Portfolio/Portfolio cards.png" alt="" />
          </div>
        )}
        {shouldRenderItem("UI") && (
          <div className={`portfolio-item-container ${getImageClass("UI")}`}>
            <img src="../../public/Portfolio/card_3@2x.png" alt="" />
          </div>
        )}
        <div className="portfolio-item-text-container">
          <h4>Some text</h4>
          <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
          </p>
          <Link className="view-resource" to="">
            View resource
          </Link>
        </div>
      </div>
    </div>
  );
};

const ForwardedPortfolio = forwardRef(Portfolio);
export default ForwardedPortfolio;