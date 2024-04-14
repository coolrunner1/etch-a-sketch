const themeChange = () => {
    
    theme.backgroundcolor="black";
}

const themebtn=document.querySelector("#theme");
let themeMode=0;
themebtn.onclick = () => {
    if (!themeMode){
        themeMode=1;
        document.body.style.backgroundColor = "#f9faf8";
    }
    else {
        themeMode=0;
        document.body.style.backgroundColor = "#181818";
    }
    console.log(themeMode);
}