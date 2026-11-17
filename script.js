const games = [
  { name: "Coming Soon", category: "Arcade" },
  { name: "Coming Soon", category: "Puzzle" },
  { name: "Coming Soon", category: "Adventure" }
];

const gameGrid = document.getElementById("gameGrid");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
    <h3>${game.name}</h3>
    <p>${game.category}</p>
  `;

  gameGrid.appendChild(card);
});
