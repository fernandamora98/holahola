function cov() {
    var salida = prompt('Veces que sales a la semana con amigos','número de veces')
    Probabilidad= (salida*9.5)
    if (Probabilidad>50){
        document.getElementById('cov-p').innerHTML= 'Tu probabilidad de contagio es de: '+ Probabilidad +'% CÁLMATE Y QUEDATE EN TU CASA UN RATO';

    }
    else document.getElementById('cov-p').innerHTML= 'Tu probabilidad de contagio es de: '+ Probabilidad +'% CUIDATE';

}¨;

var fotoss = ["sitio/fotos/b4.jpeg", "sitio/fotos/b5.jpeg""sitio/fotos/b3.jpeg"],
    cont= 0;
function carrusel(fotitos) {
    fotitos.addEventListener('click', e => {
        let atras = fotitos.querySelector('.adelante'),
            img = fotitos.querySelector('img'),
            tgt = e.target;
        if (tgt !== atras) {
            return;
        }
        if (cont > 0) {
            img.src = fotoss[cont - 1];
        } else {
            img.src = fotoss[fotoss.length - 1];
            cont = fotoss.length - 1;
        }
        if (tgt == adelante) {
            if (cont > fotoss.length - 1) {
                img.src = fotoss[cont + 1];
            } else {
                img.src = fotosss[0]
                cont = 0
            }
        }
    })
}
document.addEventListener('dom',() => {
    let hola =document.querySelector('.fotitos')
    carrusel(fotitos);
} );