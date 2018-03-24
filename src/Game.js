import { Taulell } from './Taulell';
export class Game {

    constructor(level){
       this.taulell = new Taulell(level);
       this.getApp().innerHTML = `
            <div id="info">${this.taulell.createTableInfo()}</div>
            <div id="game">
                ${this.taulell.createTableGame()}
            </div>

       `;
    }
    getApp(){
        return document.getElementById('app');
    }
}