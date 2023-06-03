export default class Utente {
    constructor(nome, cognome, eta) {
        this._nome = nome;
        this._cognome = cognome;
        this._eta = eta;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get cognome() {
        return this._cognome;
    }

    set cognome(cognome) {
         this._cognome = cognome;
     }

    get eta() {
        return this._eta;
    }

    set eta(eta) {
         this._eta = eta;
    }
}
