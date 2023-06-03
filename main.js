import Direttore from './Components/Direttore.js';
import ViceDirettore from './Components/ViceDirettore.js';
import Insegnante from './Components/Insegnante.js';
import AddettoMansioni from './Components/AddettoMansioni.js';
import Studente from './Components/Studente.js';
import database from './database/database.js';


// Creazione le istanze per il personale scolastico
const personale = database.personale.map(d => {
    switch (d.ruolo) {
        case 'Direttore':
            return new Direttore(d.nome, d.cognome, d.eta);
        case 'Vice Direttore':
            return new ViceDirettore(d.nome, d.cognome, d.eta);
        case 'Insegnante':
            return new Insegnante(d.nome, d.cognome, d.eta);
        case 'Addetto alle mansioni':
            return new AddettoMansioni(d.nome, d.cognome, d.eta);
        default:
            return null;
    }
});

// Creazione delle istanze per gli studenti
const iscritti = database.iscritti.map(d => {
    return new Studente(d.nome, d.cognome, d.eta, d.anno, d.corso, d.indirizzo, d.esamiCompletati, d.esamiRimanenti, d.punteggioTotale, d.cfu);
});


const personaleTbody = document.getElementById('personale-tbody');
const iscrittiTbody = document.getElementById('iscritti-tbody');

personale.forEach(p => {
    const row = personaleTbody.insertRow();
    row.insertCell().textContent = p.ruolo;
    row.insertCell().textContent = p.nome;
    row.insertCell().textContent = p.cognome;
    row.insertCell().textContent = p.eta;
});

iscritti.forEach(i => {
    const row = iscrittiTbody.insertRow();
    row.insertCell().textContent = i.nome;
    row.insertCell().textContent = i.cognome;
    row.insertCell().textContent = i.eta;
    row.insertCell().textContent = i.anno;
    row.insertCell().textContent = i.corso;
    row.insertCell().textContent = i.indirizzo;
    row.insertCell().textContent = i.esamiCompletati;
    row.insertCell().textContent = i.esamiRimanenti;
    row.insertCell().textContent = i.punteggioTotale;
    row.insertCell().textContent = i.cfu;
});
