import { RandomZnaci } from "./logika";

export default class Game{
    currRow: number;
    kombinacija:any;

    constructor(){
        this.currRow=0;
        this.kombinacija=new RandomZnaci();
        //console.log(this.kombinacija.brojevi);
    }

    generateMap(container:HTMLElement){

        //this.generateTimer(container);

        for(let i=0;i<6;i++){
            let red=document.createElement("div");
            red.classList.add("horizontalno");
    
            let redLevo=document.createElement('div');
            redLevo.classList.add('redLevo');
            redLevo.classList.add(`red${i}`);
    
            let redDesno = document.createElement('div');
            redDesno.classList.add('redDesno');
            redDesno.classList.add(`red${i}`);
    
            for(let j=0;j<4;j++){
                
                let poljeSlika=document.createElement('img');
                //let polje=document.createElement('div');
                poljeSlika.src="";
                //poljeSlika.alt="";
                //poljeSlika.onerror=function(){this.style.display='none';};
                poljeSlika.classList.add("polje");

                //ovo
                //poljeSlika.classList.add(`polje${j}`);

                poljeSlika.addEventListener('click',()=>{this.obrisi(poljeSlika);});
                //polje.appendChild(poljeSlika);
                redLevo.appendChild(poljeSlika);
                red.appendChild(redLevo);
    
                
                let guess = document.createElement('div');
                guess.classList.add("guess");
                guess.style.backgroundColor= "gray";
                redDesno.appendChild(guess);
                red.appendChild(redDesno);
                
            }
            container.appendChild(red);
        }

        let redLevo=document.createElement('div');
        redLevo.classList.add('levred');
        for(let i=0;i<4;i++){
            let pobedaPolje=document.createElement('img');
            pobedaPolje.src="";
            pobedaPolje.classList.add("polje");
            pobedaPolje.classList.add("pobeda");
            redLevo.appendChild(pobedaPolje);
        }
        container.appendChild(redLevo);
    
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
        Pogadjaj.addEventListener("click",()=>{this.pogadjaj();});
        btnContainer.appendChild(Pogadjaj);
    
        let novaIgra=document.createElement('button');
        novaIgra.classList.add('dugme');
        novaIgra.textContent="Nova Igra";
        novaIgra.addEventListener("click",()=>{this.reset();});
        btnContainer.appendChild(novaIgra);
    
        container.appendChild(btnContainer);
    
    }

    dodaj(el:HTMLImageElement):void{
        let slika=el.firstChild;

        let trenRed=document.querySelector(`.redLevo.red${this.currRow}`).children;
        //console.log(`.redLevo.red${this.currRow}`);
        for(let i=0;i<trenRed.length;i++){
            if(trenRed[i].getAttribute('src')=="")
            {
                trenRed[i].setAttribute('src',el.src);
                trenRed[i].setAttribute('class',el.className.split(' ')[1]);
                break;
            }
        }
    }

    pogadjaj():void{
        let checker:boolean=false;
        let niz:number[] = [];
        let trenutniRed=document.querySelector(`.redLevo.red${this.currRow}`).children;
        //console.log();
        for(let i=0;i<trenutniRed.length;i++){
            if(trenutniRed[i].getAttribute('src')=="")
            {
                checker=true;
                niz=[];
                break;
            }
            else{
                niz.push(parseInt(trenutniRed[i].className.split(' ')[0]));
            }
        }
        //console.log(niz);
        if(!checker)
        {
            if(this.kombinacija.pokusaj(niz))
                {
                    this.oboji(niz);
                    this.prikaziKombinaciju();
                    this.currRow=-1;
                }
            else{
                this.oboji(niz);
                this.currRow++;
                if(this.currRow>5)
                    this.prikaziKombinaciju();
                console.log(this.currRow);
            }
            
        }
    }

    oboji(niz:number[]){
        let nizBoja:number[];
        nizBoja= this.kombinacija.dajBoje(niz);
        //console.log("kombinacija je " + this.kombinacija.brojevi);
        //console.log(nizBoja);

        let guessRed=document.querySelector(`.redDesno.red${this.currRow}`).children;
        //console.log(guessRed);
        let colorCounter=0;
        for(let i=0;i<guessRed.length;i++){
            if(guessRed[colorCounter].getAttribute('style')=="background-color: gray;" && nizBoja[0]>0){
                guessRed[colorCounter++].setAttribute('style',"background-color: red;");
                nizBoja[0]--;
            }
            else if(nizBoja[1]>0 && guessRed[colorCounter].getAttribute('style')=="background-color: gray;"){
                guessRed[colorCounter++].setAttribute('style',"background-color: yellow;");
                nizBoja[1]--;
            }
        }
    }

    reset(){
        this.currRow=0;
        this.kombinacija=new RandomZnaci();
        let i=0;
        let znakoviPolja=document.querySelectorAll(`.redLevo>*`);
        let pobedaPolja=document.querySelectorAll(".pobeda");

        znakoviPolja.forEach(element => {
            element.className="";
            element.classList.add("polje");
            element.classList.add(`polje${i%4}`);
            element.setAttribute("src","");
        });

        pobedaPolja.forEach(el=>{
            el.className="";
            el.classList.add("polje");
            el.classList.add("pobeda");
            el.setAttribute("src","");
        });

        i=0;
        let znakoviGuess=document.querySelectorAll(`.redDesno>*`);
        znakoviGuess.forEach(element=>{
            element.setAttribute('style',"background-color: gray;");
        });
    }

    obrisi(el:HTMLImageElement){
        let roditelj=el.parentElement;
        if(roditelj.classList.contains(`red${this.currRow}`)){
            el.className="";
            el.classList.add("polje");
            el.setAttribute("src","");
        }
        //console.log(el.parentElement);
    }

    prikaziKombinaciju(){
        let niz:number[]=this.kombinacija.brojevi;
        let pobednaPolja=document.querySelectorAll('.pobeda');
        pobednaPolja.forEach((polje:HTMLImageElement,index)=>{
            switch(niz[index]){
                    case 0: polje.src='../assets/skocko.png'; break;
                    case 1: polje.src='../assets/tref.png'; break;
                    case 2: polje.src='../assets/pik.png'; break;
                    case 3: polje.src='../assets/herc.png'; break;
                    case 4: polje.src='../assets/karo.png'; break;
                    case 5: polje.src='../assets/zvezda.png'; break;
            }
        });
    }


    generateTimer(container:HTMLElement){
        let drugiCont= document.createElement('div');
        drugiCont.classList.add("drugiCont");
        drugiCont.textContent="60";

        container.appendChild(drugiCont);

        for(let i=0;i<2;i++){
            let beliDiv = document.createElement('div');
            beliDiv.classList.add(`polukrug`);
            beliDiv.classList.add("pkb");
            let plaviDiv=document.createElement('div');
            plaviDiv.classList.add(`polukrug`);
            plaviDiv.classList.add("pkp");


            plaviDiv.style.zIndex="5";
            beliDiv.style.zIndex="5";

            if(i==1){
                beliDiv.style.transform="rotate(180deg)";
                beliDiv.style.zIndex="3";
                plaviDiv.style.transform="rotate(180deg)";
                plaviDiv.style.zIndex="3";

            }
            drugiCont.appendChild(beliDiv);
            drugiCont.appendChild(plaviDiv);
        }
        container.appendChild(drugiCont);
    }
    
}



/*da koristim hash mapu za pamcenje brojeva od 0-5 i onda prvi prolaz ako element iz
naseg pogadjanja jednak elementu smanjujemo, i prvo prolazimo tako kroz niz,onda elementi koji nisu na mesto
prodjemo da pitamo da li postoje u hash mapi da bi znali da postoji ali nije na mestu
*/

/* treba mi da dodam red da prikazuje tacnu kombinaciju, znaci trebam da proverim i ako
je tacno prikazujem i ako je broj redova veci od 5 onda prikazujem svakako*/