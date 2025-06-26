import React from "react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="nav">
      <div className="nav-content">
        <Link to="/" className="nav-link nav-logo">
          {t("app.name")}
        </Link>
        <div className="nav-links">
          <Link
            to="/activities"
            className={`nav-link ${isActive("/activities") ? "active" : ""}`}
          >
            {t("nav.activities")}
          </Link>
          <Link
            to="/games"
            className={`nav-link ${isActive("/games") ? "active" : ""}`}
          >
            {t("nav.games")}
          </Link>
          <Link
            to="/profile"
            className={`nav-link ${isActive("/profile") ? "active" : ""}`}
          >
            {t("nav.profile")}
          </Link>
          <button onClick={toggleLanguage} className="nav-button">
            <span className="lang-icon">
              {i18n.language === "en" ? "🇸🇦" : "🇬🇧"}
            </span>
            {i18n.language === "en" ? "عربي" : "English"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
