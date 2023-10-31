
//busca um elemento do HTML
function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);
    if(elemento === null){
        console.log('elemento nao encontrado');
    }

    if(elemento != null){
        if(elemento.localName === 'audio'){
            elemento.play();
        }
        else{
            console.log('elemento nao encontrado');
        }
    }

}

document.querySelectorAll('.tecla');

const listaDeTecla = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTecla.length) {
    const tecla = listaDeTecla[contador];
    const instrumento = listaDeTecla[contador].classList[1];
    const idAudio = `#som_${instrumento}`;//templete string
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

    contador = contador + 1;
    //console.log(contador);
}

