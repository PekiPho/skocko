

export class RandomZnaci{
    brojevi:number[];

    constructor(){
        this.brojevi=[-1,-1,-1,-1];
        for(let i=0;i<4;i++)
        {
            this.brojevi[i]=Math.floor(Math.random()*6);
            //console.log(this.brojevi[i]);
        }
        
    }

    pokusaj(niz:number[]){
        let vrednost:boolean=true;
        for(let i=0;i<4;i++){
            if(niz[i]!=this.brojevi[i])
                vrednost=false;
        }
        return vrednost;
    }

    dajBoje(niz:number[]):number[]{

        let konacniNiz=[0,0]; // tacno, postoji na lose mesto
        let pomocniNiz=[false,false,false,false];
        let bojeMapa:number[]=[0,0,0,0,0,0];

        for(let i=0;i<4;i++)
            bojeMapa[this.brojevi[i]]++;
        
        for(let i=0;i<4;i++){
            if(niz[i]==this.brojevi[i])
                {
                    bojeMapa[niz[i]]--;
                    pomocniNiz[i]=true;
                    konacniNiz[0]++;
                }
        }
        for(let i=0;i<4;i++){
            if(bojeMapa[niz[i]]>0 && pomocniNiz[i]===false)
                {
                    bojeMapa[niz[i]]--;
                    konacniNiz[1]++;
                }
        }

        return konacniNiz;
    }
}