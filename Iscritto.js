import Utente from './Utente.js';

export default class Iscritto extends Utente {
    constructor(nome, cognome, eta, anno, corso, indirizzo, esamiCompletati, esamiRimanenti, punteggioTotale, cfu) {
        super(nome, cognome, eta);
        this._anno = anno;
        this._corso = corso;
        this._indirizzo = indirizzo;
        this._esamiCompletati = esamiCompletati;
        this._esamiRimanenti = esamiRimanenti;
        this._punteggioTotale = punteggioTotale;
        this._cfu = cfu;
    }

    get anno() {
        return this._anno;
    }

    get corso() {
        return this._corso;
    }

    get indirizzo() {
        return this._indirizzo;
    }

    get esamiCompletati() {
        return this._esamiCompletati;
    }

    get esamiRimanenti() {
        return this._esamiRimanenti;
    }

    get punteggioTotale() {
        return this._punteggioTotale;
    }

    get cfu() {
        return this._cfu;
    }
}
