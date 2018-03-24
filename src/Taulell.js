import { Fixa } from "./Fixa"
export class Taulell {

    constructor(level){
       this.amount = level.images_amount;
       this.imagesPath = level.images_path;
       this.images = level.images;
      
    }
    createTableGame() {
        
        let table = ``;
        for(var i = 0; i < this.amount * 2; i++) {
            if(i >= 8) this.fixa = new Fixa(this.images[i - 8], this.imagesPath);
            else  this.fixa = new Fixa(this.images[i], this.imagesPath);
            this.fixa.shuffle(this.images);
            table += this.fixa.getHTML();
        }
        return table;
    }
    createTableInfo() {
        let table = ``;
       
        table +=  `<div class="item-info">   
        </div>`;
        
        return table;
    }
    

}

