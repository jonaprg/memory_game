export class Fixa {

    constructor(imagen, imagesPath){
        this.id = imagen.id;
        this.name = imagen.name;
        this.img_path = imagen.path;
        this.imagesPath = imagesPath;
        console.log("Classe Fixa ---> " +imagesPath);
        
    }
    /*faceUp() {
        this.discovered = false;
        this.faceUp();
        this.faceDown();
        // muestra imagen
        return this.id;
    }*/
    shuffle(imagen) {
        var numElem = imagen.length;
        while(numElem) {
            var i = Math.floor(Math.random()*numElem--);
            var t = imagen[numElem];
            imagen[numElem] = imagen[i];
            imagen[i] = t;
        }
        return imagen;
    }

    getHTML() {
        return `
        <div id="${this.id}"class="item-card">
            <img src="${this.imagesPath}${this.img_path}">
        </div>
        
        `;
    }
}