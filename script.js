let gridsize = 8;
let boxcount = gridsize ** 2;
let boxsize = 512 / gridsize;
let grid = document.querySelector(".grid");
let rainbow = false;

function populateGrid(boxcount) {
    for (i = 0; i < boxcount; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.id = "box" + i;
        box.style.width = `${boxsize}px`;
        box.style.height= `${boxsize}px`;
        box.setAttribute("lightness", '10');
        grid.appendChild(box);

        
    }//populates grid with indexed boxes.
    listen()
}

function draw(targetid) {
    let target = document.querySelector(`#${targetid}`);
    if (rainbow) {
        let lightness = target.getAttribute("lightness")
        target.style.backgroundColor = `rgb(${getRandom(lightness)},${getRandom(lightness)},${getRandom(lightness)})`;
        if (lightness > 0) {
            lightness--;
        }
        target.setAttribute("lightness", lightness) //decreases "lightness" value each pass.
        
    }
    else {
    target.style.backgroundColor = 'black';
    }
    
}


function listen() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => { 
        box.addEventListener('mouseover', (e)=>{ //adds event listener to each box
            console.log(e.target.id);
            draw(e.target.id);
        })
    })
}

function clear() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
    box.remove();
})
populateGrid(boxcount);
}

function resize() {
    size = prompt('What size grid u want?')
    if (size <= 100) {
        gridsize = size;
        boxcount = gridsize ** 2;
        boxsize = 512 / gridsize;
        clear();
    }
}

function getRandom(lightness) {
    let randomnumber = lightness * (Math.floor(Math.random() * 255) / 10);
    return randomnumber;
}


populateGrid(boxcount);

//clear button
let clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', clear);


//resize button
let resizeButton = document.querySelector(".size");
resizeButton.addEventListener('click', resize);

//toggle rainbow button
let rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener('click', () => {
    rainbow = !rainbow;
    console.log(rainbow)
});