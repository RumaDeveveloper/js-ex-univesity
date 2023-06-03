import Utente from './Utente.js';

export default class PersonaleScolastico extends Utente {
    constructor(nome, cognome, eta, ruolo) {
        super(nome, cognome, eta);
        this._ruolo = ruolo;
    }

    get ruolo() {
        return this._ruolo;
    }
}
