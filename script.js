const themeChange = () => {
    
    theme.backgroundcolor="black";
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