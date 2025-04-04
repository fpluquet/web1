const grid = document.getElementById("grid");
const feedback = document.getElementById("feedback");
const xInput = document.getElementById("x-coord");
const yInput = document.getElementById("y-coord");
const checkButton = document.getElementById("check-button");

const gridSize = 8;
const shipPosition = {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1
};

const history = [];

function createGrid() {
    const headerRow = document.createElement("div");
    headerRow.classList.add("row");
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("cell", "header");
    headerRow.appendChild(emptyCell);

    for (let i = 1; i <= gridSize; i++) {
        const headerCell = document.createElement("div");
        headerCell.classList.add("cell", "header");
        headerCell.textContent = i;
        headerRow.appendChild(headerCell);
    }
    grid.appendChild(headerRow);

    for (let i = 1; i <= gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        const rowHeader = document.createElement("div");
        rowHeader.classList.add("cell", "header");
        rowHeader.textContent = i;
        row.appendChild(rowHeader);

        for (let j = 1; j <= gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function checkCoordinates() {
    const x = parseInt(xInput.value);
    const y = parseInt(yInput.value);

    if (isNaN(x) || isNaN(y) || x < 1 || x > gridSize || y < 1 || y > gridSize) {
        feedback.textContent = "Veuillez entrer des coordonnées valides entre 1 et 8.";
        return;
    }

    if (history.some(coord => coord.x === x && coord.y === y)) {
        feedback.textContent = "Vous avez déjà essayé ces coordonnées.";
        return;
    }

    history.push({ x, y });

    if (x === shipPosition.x && y === shipPosition.y) {
        feedback.textContent = "Félicitations ! Vous avez trouvé le vaisseau !";
        highlightCell(x, y, "found");
    } else {
        feedback.textContent = `${x === shipPosition.x ? "Écho en ligne" : "Pas d'écho en ligne"}. ${y === shipPosition.y ? "Écho en colonne" : "Pas d'écho en colonne"}.`;
        if (x === shipPosition.x) {
            highlightCell(x, y, "echo-row");
        }
        else if (y === shipPosition.y) {
            highlightCell(x, y, "echo-column");
        } else {
            highlightCell(x, y, "miss");
        }

    }
}

function highlightCell(x, y, status) {
    const row = grid.children[x];
    const cell = row.children[y];
    cell.classList.add(status);
}

checkButton.addEventListener("click", checkCoordinates);
createGrid();
