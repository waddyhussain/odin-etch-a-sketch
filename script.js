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

const container = document.querySelector(".container");
createGrid(container, 16);