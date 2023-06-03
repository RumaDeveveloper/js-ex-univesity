import PersonaleScolastico from './PersonaleScolastico.js';

export default class ViceDirettore extends PersonaleScolastico {
    constructor(nome, cognome, eta) {
        super(nome, cognome, eta, 'Vice Direttore');
    }
}