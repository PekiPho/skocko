import Game from './map';

let gameContainer=document.querySelector(".gameContainer");

let g= new Game();

g.generateMap(document.body);
