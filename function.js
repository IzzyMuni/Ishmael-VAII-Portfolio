'use strict'

let btn = document.getElementById("btn");
        let btnText = document.getElementById("btnText");
        let btnIcon = document.getElementById("btnIcon");



        btn.onclick = function(){
            document.body.classList.toggle("dark-theme");

            if(document.body.classList.contains("dark-theme")){
                btnIcon.src = "https://www.nicepng.com/png/full/121-1215503_sun-icon-white-sun-blue-background.png";
                btnText.innerHTML = "Light";
            }else{
                btnIcon.src = "https://www.pngall.com/wp-content/uploads/15/Half-Moon-PNG-Clipart.png";
                btnText.innerHTML = "Dark";
            }
        }