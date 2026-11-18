const games = [
  {
    name: "Slope",
    category: "Arcade",
    image: "https://placehold.co/400x220/172554/ffffff?text=SLOPE",
    link: "https://y8.com/embed/slope"
  },
  {
    name: "Space Runner",
    category: "Arcade",
    image: "https://placehold.co/400x220/172554/ffffff?text=Space+Runner"
  },
  {
    name: "Galaxy Puzzle",
    category: "Puzzle",
    image: "https://placehold.co/400x220/312e81/ffffff?text=Galaxy+Puzzle"
  },
  {
    name: "Astro Quest",
    category: "Adventure",
    image: "https://placehold.co/400x220/164e63/ffffff?text=Astro+Quest"
  }
];

const gameGrid = document.getElementById("gameGrid");
const gameSearch = document.getElementById("gameSearch");

let activeCategory = "All";

function displayGames(list) {
  gameGrid.innerHTML = "";

  list.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    const img = document.createElement("img");
    img.src = game.image;
    img.alt = game.name;

    const title = document.createElement("h3");
    title.textContent = game.name;

    const category = document.createElement("p");
    category.textContent = game.category;

    const button = document.createElement("button");

    if (game.link) {
      button.textContent = "Play";
      button.onclick = () => openGame(game);
    } else {
      button.textContent = "Coming Soon";
      button.disabled = true;
    }

    card.append(img, title, category, button);
    gameGrid.appendChild(card);
  });
}

function filterGames(category) {
  activeCategory = category;
  updateGames();
}

function updateGames() {
  const search = gameSearch.value.toLowerCase();

  const filtered = games.filter(game => {
    const matchesCategory =
      activeCategory === "All" ||
      game.category === activeCategory;

    const matchesSearch =
      game.name.toLowerCase().includes(search) ||
      game.category.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  displayGames(filtered);
}

gameSearch.addEventListener("input", updateGames);

function openGame(game) {
  const player = document.getElementById("gamePlayer");
  const frame = document.getElementById("gameFrame");

  document.getElementById("playerTitle").textContent =
    "Playing: " + game.name;

  frame.src = game.link;
  player.hidden = false;
  player.scrollIntoView({ behavior: "smooth" });
}

function closeGame() {
  document.getElementById("gameFrame").src = "";
  document.getElementById("gamePlayer").hidden = true;
  document.getElementById("games").scrollIntoView({
    behavior: "smooth"
  });
}

function fullscreenGame() {
  const frame = document.getElementById("gameFrame");

  if (frame.requestFullscreen) {
    frame.requestFullscreen();
  }
}

displayGames(games);
