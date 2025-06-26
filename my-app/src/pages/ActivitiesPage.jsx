import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ActivitiesPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock activities data - in a real app, this would come from your backend
  const activities = [
    {
      id: 1,
      name: "Color the Animals",
      description:
        "Learn about different animals while coloring fun illustrations.",
      category: "coloring",
      difficulty: "easy",
      duration: "15 min",
      image: <img src="src/assets/color-palette.png" alt="color-palette" width="100" height="100"></img>,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Memory Match",
      description:
        "Test your memory by matching pairs of cards with fun images.",
      category: "memory",
      difficulty: "medium",
      duration: "10 min",
      image: <img src="src/assets/card-game.png" alt="card" width="100" height="100"></img>,
    },
    {
      id: 3,
      name: "Number Puzzle",
      description: "Solve number puzzles to improve math skills.",
      category: "puzzle",
      difficulty: "hard",
      duration: "20 min",
      image: <img src="src/assets/puzzle.png" alt="puzzle" width="100" height="100"></img>,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Word Search",
      description: "Find hidden words in a grid of letters.",
      category: "puzzle",
      difficulty: "medium",
      duration: "15 min",
      image:<img src="src/assets/search.png" alt="search" width="100" height="100"></img>,
      rating: 4.3,
    },
    {
      id: 5,
      name: "Shape Drawing",
      description: "Learn about shapes by drawing and coloring them.",
      category: "coloring",
      difficulty: "easy",
      duration: "10 min",
      image:<img src="src/assets/drawing-shapes.png" alt="drawing" width="100" height="100"/>,
      rating: 4.6,
    },
    {
      id: 6,
      name: "Pattern Memory",
      description: "Remember and repeat patterns of colors and shapes.",
      category: "memory",
      difficulty: "medium",
      duration: "12 min",
      image: <img src="src/assets/pattern.png" alt="colorr-palette" width="100" height="100"></img>,
      rating: 4.4,
    },
  ];

  const categories = [
    { id: "all", label: t("activities.categories.all") },
    { id: "coloring", label: t("activities.categories.coloring") },
    { id: "memory", label: t("activities.categories.memory") },
    { id: "puzzle", label: t("activities.categories.puzzle") },
  ];

  const difficulties = {
    easy: t("activities.difficulty.easy"),
    medium: t("activities.difficulty.medium"),
    hard: t("activities.difficulty.hard"),
  };

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || activity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="activities-page">
      <div className="activities-header">
        <h1>{t("activities.title")}</h1>
        <p>{t("activities.subtitle")}</p>
      </div>

      <div className="activities-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder={t("activities.search.placeholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button btn btn-secondary btn-medium ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="activities-grid">
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-image">{activity.image}</div>
            <div className="activity-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <div className="activity-meta">
                <span className="difficulty">
                  {difficulties[activity.difficulty]}
                </span>
                <span className="duration">{activity.duration}</span>
                <span className="rating"><img src="src/assets/star.png" alt="star" width="20" height="20"/> {activity.rating}</span>
              </div>
              <button className="start-button">{t("activities.start")}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;
