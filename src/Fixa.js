export class Fixa {

    constructor(imagen){
        this.id = imagen.id;
        this.img_path = imagen.path;
        this.name = imagen.name;
        this.discovered = false;
        this.faceUp();
        this.faceDown();
    }
    faceUp() {
        // muestra imagen
        return this.id;
    }
}