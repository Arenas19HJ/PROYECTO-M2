document.addEventListener('DOMContentLoaded',function(){
    cambiarfondo();
    openFullscreen();

})

function cambiarfondo(){
    const id_img = document.querySelector('#illustration-canvas');
    const boton1 = document.querySelector('#img1');
    const boton2 = document.querySelector('#img2');
    const boton3 = document.querySelector('#img3');
    const boton4 = document.querySelector('#img4');
    const boton5 = document.querySelector('#img5');
    const boton6 = document.querySelector('#img6');
    const boton7 = document.querySelector('#img7');
    const boton8 = document.querySelector('#img8');

    boton1.onclick=function(){
        id_img.classList.add('imagen_1');
        id_img.classList.remove('imagen_2');
        id_img.classList.remove('imagen_3');
        id_img.classList.remove('imagen_4');
        id_img.classList.remove('imagen_5');
        id_img.classList.remove('imagen_6');
        id_img.classList.remove('imagen_7');
        id_img.classList.remove('imagen_8');

    }
    boton2.onclick=function(){
        id_img.classList.remove('imagen_1');
        id_img.classList.add('imagen_2');
        id_img.classList.remove('imagen_3');
        id_img.classList.remove('imagen_4');
        id_img.classList.remove('imagen_5');
        id_img.classList.remove('imagen_6');
        id_img.classList.remove('imagen_7');
        id_img.classList.remove('imagen_8');

    }
    boton3.onclick=function(){
        id_img.classList.remove('imagen_1');
        id_img.classList.remove('imagen_2');
        id_img.classList.add('imagen_3');
        id_img.classList.remove('imagen_4');
        id_img.classList.remove('imagen_5');
        id_img.classList.remove('imagen_6');
        id_img.classList.remove('imagen_7');
        id_img.classList.remove('imagen_8');

    }
    boton4.onclick=function(){
        id_img.classList.remove('imagen_1');
        id_img.classList.remove('imagen_2');
        id_img.classList.remove('imagen_3');
        id_img.classList.add('imagen_4');
        id_img.classList.remove('imagen_5');
        id_img.classList.remove('imagen_6');
        id_img.classList.remove('imagen_7');
        id_img.classList.remove('imagen_8');

    }
    boton5.onclick=function(){
        id_img.classList.remove('imagen_1');
        id_img.classList.remove('imagen_2');
        id_img.classList.remove('imagen_3');
        id_img.classList.remove('imagen_4');
        id_img.classList.add('imagen_5');
        id_img.classList.remove('imagen_6');
        id_img.classList.remove('imagen_7');
        id_img.classList.remove('imagen_8');

    }
    boton6.onclick=function(){
        id_img.classList.remove('imagen_1');
        id_img.classList.remove('imagen_2');
        id_img.classList.remove('imagen_3');
        id_img.classList.remove('imagen_4');
        id_img.classList.remove('imagen_5');
        id_img.classList.add('imagen_6');
        id_img.classList.remove('imagen_7');
        id_img.classList.remove('imagen_8');

    }
    boton7.onclick=function(){
        id_img.classList.remove('imagen_1');
        id_img.classList.remove('imagen_2');
        id_img.classList.remove('imagen_3');
        id_img.classList.remove('imagen_4');
        id_img.classList.remove('imagen_5');
        id_img.classList.remove('imagen_6');
        id_img.classList.add('imagen_7');
        id_img.classList.remove('imagen_8');

    }
    boton8.onclick=function(){
        id_img.classList.remove('imagen_1');
        id_img.classList.remove('imagen_2');
        id_img.classList.remove('imagen_3');
        id_img.classList.remove('imagen_4');
        id_img.classList.remove('imagen_5');
        id_img.classList.remove('imagen_6');
        id_img.classList.remove('imagen_7');
        id_img.classList.add('imagen_8');

    }
}





function openFullscreen() {
    var elem = document.querySelector('#illustration-canvas');
    const buttonExp = document.querySelector('#exp1');
    
    buttonExp.onclick=function(){

        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { 
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { 
          elem.msRequestFullscreen();
        }
    }
}