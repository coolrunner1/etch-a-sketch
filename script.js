let draw=false;

const colorChange = (i) => {
    pix=document.getElementById("pixel"+i);
    pix.onmousedown=()=>draw=true;
    pix.onmouseup=()=>draw=false;
    if (draw)
        pix.style.backgroundColor="pink";
    console.log("you are gay x"+i);
}


const themebtn=document.querySelector("#theme");
const divImg = document.createElement("div");
divImg.style.width="100%";
divImg.style.height="100%";
divImg.style.backgroundImage = "url('https://www.svgrepo.com/show/20546/sun.svg')";
divImg.style.backgroundRepeat= "no-repeat";
divImg.style.backgroundSize = "cover";
themebtn.appendChild(divImg);
let themeMode=0;
themebtn.onclick = () => {
    if (themeMode){
        themeMode=0;
        document.body.style.backgroundColor = "#f9faf8";
        divImg.style.backgroundImage = "url('https://www.svgrepo.com/show/20546/sun.svg')";
    }
    else {
        themeMode=1;
        document.body.style.backgroundColor = "#181818";
        divImg.style.backgroundImage = "url('https://www.svgrepo.com/show/79251/crescent-moon.svg')";
    }
}

grid=document.getElementById("container-with-box");
for (let i=0; i<256; i++){
    const div = document.createElement("div");
    div.classList.add( "pixels" );
    div.id=("pixel"+i);
    div.onpointerenter=() => colorChange(i);
    grid.appendChild(div);
}