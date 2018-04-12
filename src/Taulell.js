import { Fitxa } from "./Fitxa";
import { Game } from "./Game";


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
        this.modal = this.createModalWin();
        this.printModalWin();

        this.loseModal = this.createModalLose();
        this.printModalLose();
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
                <h3 id="nivell"></h3>
            </div>
            <div class="item-info">
                <h3>Temps</h3>
                <h3 id="timed">Comming Soon</h3> 
            </div>
            <div class="item-info">
                <h3>Punts</h3>
                <h3 id="punts">0</h3>
            </div>
            <div class="item-info">
                <h3>Tornar</h3>
                <button id="back"><</button>
            </div>
        `;
        return table;
    }
    printMenu(){
        Game.getApp().innerHTML += this.menu;
    }
    createMenuPrincipal() {
        let menu = ``;
        menu +=  `
            <div id="menu-principal">
                <h2>Escull el nivell</h2> 
                <button class="play" id="lvl_facil">Fàcil</button> 
                <button class="play" id="lvl_medio">Mitjà</button> 
                <button class="play" id="lvl_dificil">Difícil</button> 
            </div>
        `;
        return menu;
    }
    printModalWin() {
        Game.getApp().innerHTML += this.modal;
    }
    createModalWin() {
        let modal = ``;
        modal += `
        <div id="popup1" class="overlay">
            <div class="popup">
                <h2>Felicitats has guanyat! :)</h2>
                <button id="play-again">
                    Tornar a jugar!</a>
                </button>
            </div>
        </div>
        `;
        return modal;
    }
    printModalLose() {
        Game.getApp().innerHTML += this.loseModal;
    }
    createModalLose() {
        let modal = ``;
        modal += `
        <div id="popup2" class="overlay">
            <div class="popup">
                <h2>Has perdut! :(</h2>
                <button id="play-againLose">
                    Tornar a jugar!</a>
                </button>
            </div>
        </div>
        `;
        return modal;
    }
    displayTaulell() {
        document.getElementById("game").classList.add("display-flex");
        document.getElementById("info").classList.add("display-flex"); 
        document.getElementById("menu-principal").classList.add("display-none");   
    }
    flipCards (time) {
        this.cards.forEach(function(card,index) { 
             document.getElementById(card.id).classList.toggle("open");
             document.getElementById(card.id).classList.toggle("disabled");
        });
        setTimeout(() => {
            this.cards.forEach(function(card,index) { 
                document.getElementById(card.id).classList.toggle("open");
                document.getElementById(card.id).classList.toggle("disabled");
           });
        }, time);
    }
}

