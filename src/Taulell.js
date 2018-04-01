import { Fitxa } from "./Fitxa";
import { Game } from './Game.js';


export class Taulell {

    constructor(columns, rows, level){  
        this.columns = columns;
        this.rows = rows;   
    
        this.cards = this.generateCards(level);
        this.shuffleCards(this.cards);
        
        this.table = this.generateTaulell();
        this.printTaulell();

        this.menu= this.createMenuPrincipal();
        this.printMenu();
        
        
    }
    generateCards(level) {
        let cards = [];
        let i,id;
        for(i = 0, id = 0; i < level.images_amount; i++, id++) {
            cards[id] = new Fitxa(level.images[i], id, level.images_path);
            cards[++id] = new Fitxa(level.images[i], id, level.images_path);
        }
        return cards;
    }
    shuffleCards(cards) {
        var currentIndex = cards.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cards[currentIndex];
            cards[currentIndex] = cards[randomIndex];
            cards[randomIndex] = temporaryValue;
        }
        return cards;
    }
    generateTaulell() {
        return `
            <div id="info">
                ${this.createTableInfo()}
            </div>
            <div id="game">
                ${this.printCards()}
                
            </div>
        `;
    }
    printCards(){
        let cells = ``;
        let count = 0;
        for(let i = 0; i < this.columns; i++) {
            for(let j = 0; j < this.rows; j++) {
                cells += `
                    ${this.cards[count].getHTML()}
                `;
                count++;
            }
        }
        return cells;
    }
    printTaulell() {
        Game.getApp().innerHTML = this.table; 
    }
    createTableInfo() {
        let table = ``;
       
        table +=  `
            <div class="item-info"> 
                <h3>Nivell</h3>
                <h3>Facil</h3>
            </div>
            <div class="item-info">
                <h3>Temps</h3>
                <h3 id="time"></h3> 
            </div>
            <div class="item-info">
                <h3>Punts</h3>
                <h3 id="punts">0</h3>
            </div>
            <div class="item-info">
                <h3>Back</h3>
            </div>
            
        `;
        
        return table;
    }

    printMenu(){
        Game.getApp().innerHTML += this.menu;
    }
    createMenuPrincipal() {
        console.log("Hello menu");
        let menu = ``;
       
        menu +=  `
            <div class="menu-principal"> 
               <button id="facil">Juga!</button> 
            </div>
            
        `;
        return menu;
    }
}

