let draw = false;
let state = 0;

document.getElementById("paint-but").onclick = () => {
    state = 0;
}
document.getElementById("rainbow-but").onclick = () => {
    state = 1;
}
document.getElementById("erase-but").onclick = () => {
    state = 2;
}

document.getElementById("clear-but").onclick = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.getElementById("pixel" + i);
        div.style.backgroundColor = "white";
    }
}

const colorChange = (i) => {
    const pix = document.getElementById("pixel" + i);
    pix.onmousedown = () => draw = true;
    pix.onmouseup = () => draw = false;
    if (draw) {
        if (state === 0) {
            const colorElem = document.getElementById("color-but");
            pix.style.backgroundColor = colorElem.value;
        } else if (state === 1) {
            pix.style.backgroundColor = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
        } else if (state === 2) {
            pix.style.backgroundColor = "white";
        } else {
            console.log("Unknown error");
        }
    }
}

const themeBut = document.querySelector("#theme");
const divImg = document.createElement("div");
divImg.style.width = "100%";
divImg.style.height = "100%";
divImg.style.backgroundImage = "url('https://www.svgrepo.com/show/20546/sun.svg')";
divImg.style.backgroundRepeat = "no-repeat";
divImg.style.backgroundSize = "cover";
themeBut.appendChild(divImg);
let themeMode = 0;
themeBut.onclick = () => {
    if (themeMode) {
        themeMode = 0;
        document.body.style.backgroundColor = "#f9faf8";
        divImg.style.backgroundImage = "url('https://www.svgrepo.com/show/20546/sun.svg')";
    } else {
        themeMode = 1;
        document.body.style.backgroundColor = "#181818";
        divImg.style.backgroundImage = "url('https://www.svgrepo.com/show/79251/crescent-moon.svg')";
    }
}

const grid = document.getElementById("container-with-box");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("pixels");
    div.id = ("pixel" + i);
    div.onpointerenter = () => colorChange(i);
    grid.appendChild(div);
}