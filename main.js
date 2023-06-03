import Direttore from './Direttore.js';
import ViceDirettore from './ViceDirettore.js';
import Insegnante from './Insegnante.js';
import AddettoMansioni from './AddettoMansioni.js';
import Studente from './Studente.js';
import database from './database.json';

// Crea le istanze per il personale scolastico e gli studenti
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

const iscritti = database.iscritti.map(d => {
    return new Studente(d.nome, d.cognome, d.eta, d.anno, d.corso, d.indirizzo, d.esamiCompletati, d.esamiRimanenti, d.punteggioTotale, d.cfu);
});

// Aggiungi il personale scolastico e gli studenti alle tabelle
const personaleTable = document.getElementById('personale-table');
const iscrittiTable = document.getElementById('iscritti-table');

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



// Gestisci il form di registrazione
const form = document.getElementById('registration-form');
form.addEventListener('submit', event => {
    event.preventDefault();

    const role = form.elements['role'].value;
    const nome = form.elements['nome'].value;
    const cognome = form.elements['cognome'].value;
    const eta = parseInt(form.elements['eta'].value, 10);

    // Aggiungi ulteriori campi specifici per ogni ruolo

    // Crea l'utente in base al ruolo e aggiungilo al database
    let newUser;
    switch (role) {
        case 'studente':
            // Aggiungi i campi specifici per gli studenti e crea un nuovo oggetto Studente
            newUser = new Studente(nome, cognome, eta, /* altri campi */);
            iscritti.push(newUser);
            break;
        case 'insegnante':
            newUser = new Insegnante(nome, cognome, eta);
            personale.push(newUser);
            break;
        case 'addettoMansioni':
            newUser = new AddettoMansioni(nome, cognome, eta);
            personale.push(newUser);
            break;
        default:
            return;
    }

    // Aggiorna la tabella appropriata
    if (newUser instanceof Studente) {
        const row = iscrittiTable.insertRow();
        // Aggiungi le celle alla riga come fatto in precedenza per gli studenti
    } else {
        const row = personaleTable.insertRow();
        // Aggiungi le celle alla riga come fatto in precedenza per il personale scolastico
    }
});