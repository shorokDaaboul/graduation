import React from "react";
import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";
import "./Layout.css";
import { Link } from "react-router";

const Layout = () => {
  const { t } = useTranslation();

  return (
    <div className="layout">
      <header className="header">
        <Navigation />
      </header>

      <main className="main">
        <Outlet />
      </main>
      <footer className="">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t("footer.about.title")}</h3>
            <p>{t("footer.about.description")}</p>
          </div>
          <div className="footer-section">
            <h3>{t("footer.quickLinks.title")}</h3>
            <ul>
              <li>
                <a href="/activities">{t("nav.activities")}</a>
              </li>
              <li>
                <a href="/games">{t("nav.games")}</a>
              </li>
              <li>
                <a href="/profile">{t("nav.profile")}</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>{t("footer.contact.title")}</h3>
            <ul>
              <li>{t("footer.contact.email")}</li>
              <li>{t("footer.contact.phone")}</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
