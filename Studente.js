import Iscritto from './Iscritto.js';

export default class Studente extends Iscritto {
    constructor(nome, cognome, eta, anno, corso, indirizzo, esamiCompletati, esamiRimanenti, punteggioTotale, cfu) {
        super(nome, cognome, eta, anno, corso, indirizzo, esamiCompletati, esamiRimanenti, punteggioTotale, cfu);
    }
}