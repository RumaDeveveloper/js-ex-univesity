export default class Utente {
    constructor(nome, cognome, eta) {
        this._nome = nome;
        this._cognome = cognome;
        this._eta = eta;
    }

    get nome() {
        return this._nome;
    }

    get cognome() {
        return this._cognome;
    }

    get eta() {
        return this._eta;
    }
}
