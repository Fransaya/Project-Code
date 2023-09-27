
//  codigo para dezplazamiento de imagenes de carrucel
/*realizacion de carrusel de imagenes*/
document.addEventListener("DOMContentLoaded",function(){
    const imagenes=document.querySelectorAll(".imagen");
    const anterior=document.querySelector(".anterior");
    const siguiente=document.querySelector(".siguiente");
    const slide=document.querySelectorAll(".slider");

    anterior.addEventListener("click",e =>MoveLeft());
    siguiente.addEventListener("click",e =>MoveRigth());
    let index=0
    function MoveLeft(){
        index+=25
        slide.style.transform=`translate(+${index}$)`
    }
    function MoveRigth(){
        index-=25
        slide.style.transform=`translate(-${index}%)`
    }

})



/// SECCION BUTTON CERRAR SECION REDIRECCIONAMIENTO AL INDEX;
function cerrarSecion(marcas){
    switch (marcas){
        case `principal`:
            window.location.href = "index.html";
            break;
        case "marcas":
            window.location.href = "../negocio.html";
            break;
    }
    
}


// SECCION PARA MOSTRAR USUARIO EN EL INPUT DEL HEADER.

// function ObtenerCookie(name){
//     var cookieVal=null;
//     if(document.cookie && document.cookie!==``){
//         var cookies=document.cookie.split(`;`);
//         for(let i=0;i<cookies.length;i++){
//             var cookie=cookies[i].trim();
//             if(cookie.substring(0,name.length+1) === (name+`=`)){
//                 cookieVal=decodeURIComponent(cookie.substring(name.length+1));
//                 break;
//             }
//         }
//     }
//     console.log(`valor del email ${cookieVal}`)
//     return cookieVal;
// }
const emailDisplay=document.getElementById("displayUsuario");
window.addEventListener("message",(event)=>{
    emailDisplay.value=event.data.email;
})

// let displayInput=document.getElementById("displayUsuario");
// displayInput.value=window.email;


/// FUNCTION PARA REDIRECCIONAMIENTO DE PAGINA EN VER DE CADA NOTEBOOK DE CARUSEL

function redireccionar(argumento){
    switch(argumento){
        case `apple`:
            window.location.href="./marcas/apple.html";
            break;
        case `dell`:
            window.location.href="./marcas/dell.html";
            break;
        case `asus`:
            window.location.href="./marcas/asus.html";
            break;
        case `hp`:
            window.location.href="./marcas/hp.html";
            break;
    }   
}







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




