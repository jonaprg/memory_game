import { Taulell } from './Taulell';
export class Game {

    constructor(level){
       this.taulell = new Taulell(4, 4, level);
       this.startGame();
    }
    startGame() {
        this.taulell.clickCards();
    }
    check(fitxa1,fitxa2) {
        return fitxa1.id === fitxa2.id;
    }
    static getApp(){
        return document.getElementById('app');
    }
    
}