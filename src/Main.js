import { Game } from './Game';

class Main {

    constructor(url){
        this.getConfig(url);
    }

    getConfig(url) {
        fetch(url)
            .then(res => res.json())
            .then((config) => {
                this.config = config;
                this.getLevel(this.config["levels"]["level_instruments"]);
            })
            .catch(err => { throw err });
    }
    
    getLevel(url) {
        fetch(url)
            .then(res => res.json())
            .then((level) => {
                this.level = level;
                this.startGame();
            })
            .catch(err => { throw err });
    }

    startGame(){
        new Game(this.level);
    }



}

let main = new Main("resources/config.json");
