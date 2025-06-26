import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>{t("home.title")}</h1>
          <p className="hero-subtitle">{t("home.subtitle")}</p>
          <div className="hero-buttons">
            <Link to="/activities" className="btn btn-primary btn-large">
              {t("home.startButton")}
            </Link>
            <Link to="/games" className="btn btn-secondary btn-large">
              {t("nav.games")}
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">{t("home.features.title")}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><img src="src/assets/color-palette.png" alt="color-palette"width="80" height="80"/></div>
            <h2>{t("home.features.coloring.title")}</h2>
            <p>{t("home.features.coloring.description")}</p>
            <Link to="/activities" className="feature-link">
              {t("home.features.learnMore")} →
            </Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><img src="src/assets/game-console.png" alt="game"width="80" height="80"/></div>
            <h2>{t("home.features.puzzles.title")}</h2>
            <p>{t("home.features.puzzles.description")}</p>
            <Link to="/games" className="feature-link">
              {t("home.features.learnMore")} →
            </Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><img src="src/assets/puzzle.png" alt="puzzle"width="80" height="80"/></div>
            <h2>{t("home.features.memory.title")}</h2>
            <p>{t("home.features.memory.description")}</p>
            <Link to="/games" className="feature-link">
              {t("home.features.learnMore")} →
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>{t("home.cta.title")}</h2>
          <p>{t("home.cta.description")}</p>
          <Link to="/profile" className="btn btn-secondary btn-large">
            {t("home.cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
