let gridsize = 8;
let boxcount = gridsize ** 2;
let boxsize = 512 / gridsize;
let grid = document.querySelector(".grid");

function populateGrid(boxcount) {
    for (i = 0; i < boxcount; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.id = "box" + i;
        box.style.width = `${boxsize}px`;
        box.style.height= `${boxsize}px`;
        grid.appendChild(box);
    }//populates grid with indexed boxes.

}

function draw(targetid) {
    let target = document.querySelector(`#${targetid}`);
    target.style.backgroundColor = 'black';
}


function listen() {
    let boxes = document.querySelectorAll(".box")
    boxes.forEach(box => { 
        box.addEventListener('mouseover', (e)=>{ //adds event listener to each box
            console.log(e.target.id);
            draw(e.target.id);
        })
    })
}


populateGrid(boxcount);
listen();