let gridsize = 8;
let boxcount = gridsize ** 2;
let boxsize = 512 / gridsize;
let grid = document.querySelector(".grid");

function populateGrid (boxcount) {
    for (i = 0; i < boxcount; i++) {
        let box = document.createElement("div")
        box.classList.add("box")
        box.id = i
        box.style.width = `${boxsize}px`
        box.style.height= `${boxsize}px`
        grid.appendChild(box)
    }//populates grid with indexed boxes.

}

populateGrid(boxcount)