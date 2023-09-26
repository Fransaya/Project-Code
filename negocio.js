/* FUNCION DE BUTON RELACION CON INFORMACION DE NOTEBOOK DELL PARA MUESTREO DE INFORMACION ABAJO DEL BUTTON*/



function dropDown(){
    let button=document.querySelector(".informaciondell");
    let inforAdd=document.getElementById("infoAdd");
    
        if(inforAdd.style.display==="none"||inforAdd.style.display===""){
            inforAdd.style.display="block";
            button.textContent="▲";
        }else{
            inforAdd.style.display="none";
            button.textContent="▼";
        }
}

function dropInfoApple(){
    let button=document.querySelector(".informacionapple");
    let inforapple=document.getElementById("inforapple");
    if(inforapple.style.display==="none"|| inforapple.style.display===""){
        inforapple.style.display="block";
        button.textContent="▲";
    }else{
        inforapple.style.display="none";
        button.textContent="▼";
    }
};


function dropinforAsus(){
    let button=document.querySelector("informacioAsus");
    let inforAsus=document.getElementById("infoasus");
    if(inforAsus.style.display==="none"||inforAsus.style.display===""){
        inforAsus.style.display="block";
        button.textContent="▲";
    } else{
        inforAsus.style.display="none";
        button.textContent="▼";
    }
}

function dropInfoHP(){
    let button=document.querySelector(".informacionHp");
    let inforHP=document.getElementById("infoHp");
    if(inforHP.style.display==="none"||inforHP.style.display===""){
        inforHP.style.display="block";
        button.textContent="▲";
    }else{
        inforHP.style.display="none";
        button.textContent="▼";
    }
}




