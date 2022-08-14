function createGrid(parent, size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            div.addEventListener("mouseenter", e => e.target.classList.add("colored"));
            row.appendChild(div);
        }
        parent.appendChild(row);
    }
}

function removeGrid() {
    document.querySelector(".container").replaceChildren();
}

const container = document.querySelector(".container");
createGrid(container, 16);

document.querySelector("button#change-size").addEventListener("click", () => {
    const newSize = parseInt(prompt("Enter a new size for the grid (Max size: 100)"));
    if (newSize <= 100 && newSize >= 1) {
        removeGrid();
        createGrid(container, newSize);
    } else {
        alert("Invalid size given");
    }
});
