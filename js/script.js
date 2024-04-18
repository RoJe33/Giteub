const dominoes = [];

// Créer un jeu de dominos
for (let i = 0; i <= 6; i++) {
  for (let j = i; j <= 6; j++) {
    dominoes.push([i, j]);
  }
}

// Mélanger les dominos
dominoes.sort(() => Math.random() - 0.5);

// Distribuer les dominos aux joueurs
const player1Hand = dominoes.slice(0, 10);
const player2Hand = dominoes.slice(10, 20);

// Afficher les dominos des joueurs
const board = document.getElementById("board");

function displayHand(hand, player) {
  const handDiv = document.createElement("div");
  handDiv.innerHTML = `<h2>Joueur ${player}</h2>`;
  handDiv.classList.add("hand");
  hand.forEach((domino) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = `${domino[0]} | ${domino[1]}`;
    handDiv.appendChild(tile);
  });
  board.appendChild(handDiv);
}

displayHand(player1Hand, 1);
displayHand(player2Hand, 2);
