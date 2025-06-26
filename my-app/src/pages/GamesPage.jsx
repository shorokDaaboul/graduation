import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const GamesPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://127.0.0.1:5000/api/games");
        if (!response.ok) throw new Error("Failed to fetch games");
        const data = await response.json();
        setGames(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  const categories = [
    { id: "all", label: t("games.categories.all") },
    { id: "math", label: t("games.categories.math") },
    { id: "language", label: t("games.categories.language") },
    { id: "science", label: t("games.categories.science") },
    { id: "geography", label: t("games.categories.geography") },
    { id: "music", label: t("games.categories.music") },
    { id: "art", label: t("games.categories.art") },
  ];

  const filteredGames = games.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="games-page">
      <div className="games-header">
        <h1>{t("games.title")}</h1>
        <p>{t("games.subtitle")}</p>
      </div>

      <div className="games-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder={t("games.search.placeholder")}
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

      {loading ? (
        <div>{t("games.loading") || "Loading..."}</div>
      ) : error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        <div className="games-grid">
          {filteredGames.map((game) => (
            <div key={game.id} className="game-card card">
              <div className="game-image">
                {game.image && (
                  <img
                    src={`src/assets/${game.image}`}
                    alt={game.title}
                    width="100"
                    height="100"
                  />
                )}
              </div>
              <div className="game-content">
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <div className="game-meta">
                  <span className="age-range">
                    {t("games.ageRange")}: {game.ageRange}
                  </span>
                  <span className="duration">{game.duration}</span>
                  <span className="players">
                    {t("games.players")}: {game.players}
                  </span>
                  <span className="rating">⭐ {game.rating}</span>
                </div>
                <button className="play-button">{t("games.play")}</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GamesPage;
