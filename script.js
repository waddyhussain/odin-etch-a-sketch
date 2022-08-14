function createGrid(parent, size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            if (parent.classList.contains("show-border")) {
                div.classList.add("show-border");
            }
            
            div.addEventListener("mouseenter", e => e.target.classList.add("colored"));
            row.appendChild(div);
        }
        parent.appendChild(row);
    }
}

function removeGrid() {
    document.querySelector(".container").replaceChildren();
}

function toggleGridlines() {
    document.querySelector(".container").classList.toggle("show-border");
    document.querySelectorAll(".row div").forEach(div => div.classList.toggle("show-border"));
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

document.querySelector("button#toggle-gridlines").addEventListener("click", toggleGridlines);