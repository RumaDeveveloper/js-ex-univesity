import PersonaleScolastico from './PersonaleScolastico.js';

export default class Insegnante extends PersonaleScolastico {
    constructor(nome, cognome, eta) {
        super(nome, cognome, eta, 'Insegnante');
    }
}