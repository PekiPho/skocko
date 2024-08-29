// enum Igra{
//     skocko,
//     tref,
//     pik,
//     srce,
//     karo,
//     zvezda
// }

import {pogadjaj,reset} from './logika.ts';

export function generateMap(container){
    for(let i=0;i<6;i++){
        let red=document.createElement("div");
        red.classList.add("horizontalno");

        let redLevo=document.createElement('div');
        redLevo.classList.add('redLevo');

        let redDesno = document.createElement('div');
        redDesno.classList.add('redDesno');

        for(let j=0;j<4;j++){
            
            let polje=document.createElement('div');
            polje.classList.add("polje");
            polje.classList.add(`red${i}`);
            redLevo.appendChild(polje);
            red.appendChild(redLevo);

            
            let guess = document.createElement('div');
            guess.classList.add("guess");
            redDesno.appendChild(guess);
            red.appendChild(redDesno);
            
        }
        container.appendChild(red);
    }

    let znakovi=document.createElement('div');
    znakovi.classList.add("znakovi");

    for(let i=0;i<6;i++){
        let znak=document.createElement('div');
        znak.classList.add('znak');

        let image=document.createElement('img');

        switch(i){
            case 0: image.src='../assets/skocko.png'; break;
            case 1: image.src='../assets/tref.png'; break;
            case 2: image.src='../assets/pik.png'; break;
            case 3: image.src='../assets/herc.png'; break;
            case 4: image.src='../assets/karo.png'; break;
            case 5: image.src='../assets/zvezda.png'; break;
        }

        znak.appendChild(image);
        znakovi.appendChild(znak);
    }

    container.appendChild(znakovi);

    let btnContainer=document.createElement('div');
    btnContainer.classList.add('btnContainer');

    let Pogadjaj=document.createElement('button');
    Pogadjaj.classList.add('dugme');
    Pogadjaj.textContent="POGODI";
    Pogadjaj.addEventListener("click",pogadjaj);
    btnContainer.appendChild(Pogadjaj);

    let novaIgra=document.createElement('button');
    novaIgra.classList.add('dugme');
    novaIgra.textContent="Nova Igra";
    novaIgra.addEventListener("click",reset);
    btnContainer.appendChild(novaIgra);

    container.appendChild(btnContainer);

}