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