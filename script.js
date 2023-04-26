const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')


const relogio = setInterval(function time(){
    const todayhoras = new Date();

    let hr = todayhoras.getHours();
    let mints = todayhoras.getMinutes();
    let seg = todayhoras.getSeconds();

    if(hr < 10)  hr = '0' + hr;
    if(mints < 10)  mints = '0' + mints;
    if(seg < 10)  seg = '0' + seg;

    horas.textContent = hr ;
    minutos.textContent = mints;
    segundos.textContent = seg
})















