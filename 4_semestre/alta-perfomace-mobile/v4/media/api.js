class API {
    constructor(nota1, nota2){
        this.nota1 = nota1
        this.nota2 = nota2
    }

    get getUrl() {
        return `http://localhost:4000/media/${this.nota1}/${this.nota2}`;
    }
}