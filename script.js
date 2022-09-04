let gridsize = 64;
let grid = document.querySelector(".grid");

function populateGrid (gridsize) {
    for (i = 0; i < gridsize; i++) {
        let box = document.createElement("div")
        box.classList.add("box")
        box.id = i
        grid.appendChild(box)
    }

}

populateGrid(gridsize)