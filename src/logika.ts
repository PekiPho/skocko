

export class RandomZnaci{
    brojevi:number[];

    constructor(){
        this.brojevi=[-1,-1,-1,-1];
        for(let i=0;i<4;i++)
        {
            this.brojevi[i]=Math.floor(Math.random()*6);
            console.log(this.brojevi[i]);
        }
    }

    print(){
        console.log(this.brojevi);
    }
}