
//  codigo para dezplazamiento de imagenes de carrucel
/*realizacion de carrusel de imagenes*/
document.addEventListener("DOMContentLoaded",function(){
    const slider=document.querySelector("#slider");
    let sliderSection=document.querySelectorAll(".slider_section");
    let sliderSectionUltimo=sliderSection[sliderSection.length-1];

    const buttonIzquierda=document.querySelector("#left");
    const buttonDerecha=document.querySelector("#rigth");

    slider.insertAdjacentElement(`afterbegin`,sliderSectionUltimo);

    function Move(){
        let sliderSectionPrimero=document.querySelectorAll(".slider_section")[0];
        slider.style.marginleft="-200%";
        slider.style.transition="all 0.5s";
        setTimeout(function(){
            slider.style.transition="none";
            slider.insertAdjacentElement(`beforeend`,sliderSectionPrimero);
            slider.style.marginleft="-100%";
        },500);
    }

    function Prev(){
        let sliderSection=document.querySelectorAll(".slider_section");
        let sliderSectionLast=sliderSection[sliderSection.length-1];
        slider.style.marginleft="0";
        slider.style.transition="all 0.5s";
        setTimeout(function(){
            slider.style.transition="none";
            slider.insertAdjacentElement(`afterbegin`,sliderSectionLast);
            slider.style.marginleft="-100%";
        },500);
    }
    buttonDerecha.addEventListener(`click`,function(){
        Move();
    });
    
    buttonIzquierda.addEventListener(`click`,function(){
        Prev();
    });

    setInterval(function(){
        Move();
    },5000);
    
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

function dropDown(marca){
    let button=document.querySelector(marca);
    let inforAdd=document.getElementById(marca);
    
        if(inforAdd.style.display==="none"||inforAdd.style.display===""){
            inforAdd.style.display="block";
            button.textContent="▲";
        }else{
            inforAdd.style.display="none";
            button.textContent="▼";
        }
}






