export default class Game {
    currRow: number;
    kombinacija: any;
    constructor();
    generateMap(container: HTMLElement): void;
    dodaj(el: HTMLImageElement): void;
    pogadjaj(): void;
    oboji(niz: number[]): void;
    reset(): void;
    obrisi(el: HTMLImageElement): void;
    prikaziKombinaciju(): void;
    generateTimer(container: HTMLElement): void;
}
