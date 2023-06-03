import PersonaleScolastico from './PersonaleScolastico.js';

export default class AddettoMansioni extends PersonaleScolastico {
    constructor(nome, cognome, eta) {
        super(nome, cognome, eta, 'Addetto alle mansioni');
    }
}