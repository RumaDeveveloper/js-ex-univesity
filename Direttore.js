import PersonaleScolastico from './PersonaleScolastico.js';

export default class Direttore extends PersonaleScolastico {
    constructor(nome, cognome, eta) {
        super(nome, cognome, eta, 'Direttore');
    }
}
