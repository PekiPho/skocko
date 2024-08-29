import { RandomZnaci } from "./logika";

export default class Game{
    currRow: number;
    kombinacija:any;

    constructor(){
        this.currRow=0;
        this.kombinacija=new RandomZnaci();
    }

    generateMap(container:HTMLElement){
        for(let i=0;i<6;i++){
            let red=document.createElement("div");
            red.classList.add("horizontalno");
    
            let redLevo=document.createElement('div');
            redLevo.classList.add('redLevo');
            redLevo.classList.add(`red${i}`);
    
            let redDesno = document.createElement('div');
            redDesno.classList.add('redDesno');
    
            for(let j=0;j<4;j++){
                
                let poljeSlika=document.createElement('img');
                //let polje=document.createElement('div');
                poljeSlika.src="";
                //poljeSlika.alt="";
                //poljeSlika.onerror=function(){this.style.display='none';};
                poljeSlika.classList.add("polje");
                poljeSlika.classList.add(`polje${j}`);
                //polje.appendChild(poljeSlika);
                redLevo.appendChild(poljeSlika);
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
            //let znak:HTMLDivElement=document.createElement('div');
            
            
    
            let image=document.createElement('img');
            image.classList.add('znak');
            image.classList.add(`${i}`);

            switch(i){
                case 0: image.src='../assets/skocko.png'; break;
                case 1: image.src='../assets/tref.png'; break;
                case 2: image.src='../assets/pik.png'; break;
                case 3: image.src='../assets/herc.png'; break;
                case 4: image.src='../assets/karo.png'; break;
                case 5: image.src='../assets/zvezda.png'; break;
            }
    
            image.addEventListener('click',()=>{this.dodaj(image);});
            znakovi.appendChild(image);
        }
        
        container.appendChild(znakovi);
    
        let btnContainer=document.createElement('div');
        btnContainer.classList.add('btnContainer');
    
        let Pogadjaj=document.createElement('button');
        Pogadjaj.classList.add('dugme');
        Pogadjaj.textContent="POGODI";
        Pogadjaj.addEventListener("click",this.pogadjaj);
        btnContainer.appendChild(Pogadjaj);
    
        let novaIgra=document.createElement('button');
        novaIgra.classList.add('dugme');
        novaIgra.textContent="Nova Igra";
        novaIgra.addEventListener("click",this.reset);
        btnContainer.appendChild(novaIgra);
    
        container.appendChild(btnContainer);
    
    }

    dodaj(el:HTMLImageElement):void{
        let slika=el.firstChild;

        let trenRed=document.querySelector(`.redLevo.red${this.currRow}`).children;
        console.log(this.currRow);
        console.log(trenRed[2]);
        for(let i=0;i<trenRed.length;i++){
            if(trenRed[i].getAttribute('src')=="")
            {
                trenRed[i].setAttribute('src',el.src);
                trenRed[i].setAttribute('class',el.className.split(' ')[1]);
                break;
            }
        }
    }

    reset(){

    }

    

    pogadjaj(){
        this.kombinacija.print;
    }
}

