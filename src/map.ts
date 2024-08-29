// enum Igra{
//     skocko,
//     tref,
//     pik,
//     srce,
//     karo,
//     zvezda
// }

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
        for(let j=0;j<4;j++){
            
        }

        container.appendChild(red);
    }
}