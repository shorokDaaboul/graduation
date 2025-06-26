import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("info");
  
  // State for all text background colors
 const [textBackgrounds, setTextBackgrounds] = useState({
  name: 'transparent',
  age: 'transparent',
  level: 'transparent',
  points: 'transparent',
  sectionTitle: 'transparent',
  infoLabel: 'transparent',
  infoValue: 'transparent',
  activityCard: 'transparent',
  activityScore: 'transparent'
});

  // Function to update any text background
  function updateTextBackground(element, color) {
    setTextBackgrounds(prev => ({
      ...prev,
      [element]: color
    }));
  }

  // Mock user data
  const userData = {
    name: "John Doe",
    age: 8,
    avatar: <img src="src/assets/boy.png" alt="User Avatar" width="100" height="100"/>,
    level: "Intermediate",
    points: 1250,
    joinDate: "2024-01-15",
    favoriteActivities: ["Coloring", "Puzzles", "Memory Games"],
    recentActivities: [
      { id: 1, name: "Color the Animals", date: "2024-03-15", score: 95 },
      { id: 2, name: "Memory Match", date: "2024-03-14", score: 88 },
      { id: 3, name: "Number Puzzle", date: "2024-03-13", score: 92 },
    ],
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">{userData.avatar}</div>
        <div className="profile-info">
          <h1 style={{ 
            backgroundColor: textBackgrounds.name,
            display: 'inline-block',
            padding: '5px 15px',
            borderRadius: '20px'
          }}>
            {userData.name}
          </h1>
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-label">{t("profile.level")}</span>
              <span 
                className="stat-value" 
                style={{ backgroundColor: textBackgrounds.level }}
              >
                {userData.level}
              </span>
            </div>
            <div className="stat">
              <span className="stat-label">{t("profile.points")}</span>
              <span 
                className="stat-value" 
                style={{ backgroundColor: textBackgrounds.points }}
              >
                {userData.points}
              </span>
            </div>
            <div className="stat">
              <span className="stat-label">{t("profile.age")}</span>
              <span 
                className="stat-value" 
                style={{ backgroundColor: textBackgrounds.age }}
              >
                {userData.age}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs remain the same */}
      <div className="profile-tabs">
        <button
          className={`tab-button ${activeTab === "info" ? "active" : ""}`}
          onClick={() => setActiveTab("info")}
        >
          {t("profile.tabs.info")}
        </button>
        <button
          className={`tab-button ${activeTab === "activities" ? "active" : ""}`}
          onClick={() => setActiveTab("activities")}
        >
          {t("profile.tabs.activities")}
        </button>
        <button
          className={`tab-button ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          {t("profile.tabs.settings")}
        </button>
      </div>

      <div className="profile-content">
        {activeTab === "info" && (
          <div className="profile-section">
            <h2 style={{ backgroundColor: textBackgrounds.sectionTitle }}>
              {t("profile.about.title")}
            </h2>
            <div className="info-grid">
              <div className="info-item">
                <span 
                  className="info-label"
                  style={{ backgroundColor: textBackgrounds.infoLabel }}
                >
                  {t("profile.about.joinDate")}
                </span>
                <span 
                  className="info-value"
                  style={{ backgroundColor: textBackgrounds.infoValue }}
                >
                  {userData.joinDate}
                </span>
              </div>
              <div className="info-item">
                <span 
                  className="info-label"
                  style={{ backgroundColor: textBackgrounds.infoLabel }}
                >
                  {t("profile.about.favorites")}
                </span>
                <div className="favorites-list">
                  {userData.favoriteActivities.map((activity, index) => (
                    <span 
                      key={index} 
                      className="favorite-tag"
                      style={{ backgroundColor: textBackgrounds.infoValue }}
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "activities" && (
          <div className="profile-section">
            <h2 style={{ backgroundColor: textBackgrounds.sectionTitle }}>
              {t("profile.activities.title")}
            </h2>
            <div className="activities-list">
              {userData.recentActivities.map((activity) => (
                <div 
                  key={activity.id} 
                  className="activity-card"
                  style={{ backgroundColor: textBackgrounds.activityCard }}
                >
                  <div className="activity-info">
                    <h3>{activity.name}</h3>
                    <span className="activity-date">{activity.date}</span>
                  </div>
                  <div 
                    className="activity-score"
                    style={{ backgroundColor: textBackgrounds.activityScore }}
                  >
                    <span className="score-value">{activity.score}</span>
                    <span className="score-label">
                      {t("profile.activities.score")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="profile-section">
            <h2 style={{ backgroundColor: textBackgrounds.sectionTitle }}>
              {t("profile.settings.title")}
            </h2>
            <div className="settings-form">
              <div className="form-group">
                <label>{t("profile.settings.name")}</label>
                <input type="text" defaultValue={userData.name} />
              </div>
              <div className="form-group">
                <label>{t("profile.settings.age")}</label>
                <input type="number" defaultValue={userData.age} />
              </div>
              <div className="form-group">
                <label>{t("profile.settings.avatar")}</label>
                <div className="avatar-options">
                  <button className="avatar-option"><img src="src/assets/boy (1).png" alt="Button Image" width="40" height="40"/></button>
                  <button className="avatar-option"><img src="src/assets/girl.png" alt="Button Image" width="40" height="40"/></button>
                  <button className="avatar-option"><img src="src/assets/girl (1).png" alt="Button Image" width="40" height="40"/></button>
                  <button className="avatar-option"><img src="src/assets/boy.png" alt="Button Image" width="40" height="40"/></button>
                </div>
              </div>
              
              {/* Color Controls Section */}
              <div className="color-controls">
                <h3>Text Background Colors</h3>
                
                <div className="color-control-group">
                  <label>Name Background:</label>
                  <input 
                    type="color" 
                    value={textBackgrounds.name}
                    onChange={(e) => updateTextBackground('name', e.target.value)}
                  />
                </div>

                <div className="color-control-group">
                  <label>Age Background:</label>
                  <input 
                    type="color" 
                    value={textBackgrounds.age}
                    onChange={(e) => updateTextBackground('age', e.target.value)}
                  />
                </div>

                <div className="color-control-group">
                  <label>Level Background:</label>
                  <input 
                    type="color" 
                    value={textBackgrounds.level}
                    onChange={(e) => updateTextBackground('level', e.target.value)}
                  />
                </div>

                <div className="color-control-group">
                  <label>Points Background:</label>
                  <input 
                    type="color" 
                    value={textBackgrounds.points}
                    onChange={(e) => updateTextBackground('points', e.target.value)}
                  />
                </div>

                <div className="color-control-group">
                  <label>Section Titles:</label>
                  <input 
                    type="color" 
                    value={textBackgrounds.sectionTitle}
                    onChange={(e) => updateTextBackground('sectionTitle', e.target.value)}
                  />
                </div>
              </div>

              <button className="btn btn-primary">
                {t("profile.settings.save")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;