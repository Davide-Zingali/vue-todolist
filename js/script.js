// Ex di oggi e domani: Todoolean con Vue :boolean:
// DESCRIZIONE:
// Creiamo una mini app di todolist con html+css+js in Vue
// Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.
var app = new Vue({
    el: '#root',
    data: {
        // sourceInput rappresenta il contenuto di value (ovvero che che verra' visualizzato all'interno del tag input su pagina web), che puo' essere sia mandato a schermo che usato come input per compilare l'array sotto
        sourceInput: '',
        // array che compilo tramite il dato sopra e grazie all'evento click legato al button posto su html
        arrayAdd: ['Appuntamento di lavoro ore 15']
    },
    methods: {
        addElement: function () {
            // tramite push di js aggiungo grazie a this (che si lega ai dati) componente array (sourceInput) in base all'evento click posto su html
            this.arrayAdd.push(this.sourceInput),
            console.log('mostro array' + this.arrayAdd)
        },
        deleteElement: function (indice) {
            // tramite lo slice(numero 1 per un componente) elimino grazie a this (che si lega ai dati) componente array in base all'evento click posto su html
            this.arrayAdd.splice(indice, 1);
            console.log('slice in log', this.arrayAdd.slice());
        },
        eliminaTutto: function() {
            this.arrayAdd.splice([]);
        }
    }
})
















// BONUS possibili: (come sempre se avete finito, ottimizzato e capito tutto il resto, e in caso metterete in sottocartella nel repo):
// dò la possibilità anche di inserire la nuova “cosa da fare”, scritta nell’input anche con la pressione del tasto ‘enter’ da tastiera;
// l’utente non può inserire più volte la stessa “cosa da fare”;
// etc. etc… quello che vi intriga di più da provare.





// NOTE:
// ricordatevi che siamo in Vue;
// quindi la centralità sono i dati;
// l’interfaccia e quindi l’html verrà di conseguenza;
// come sempre andate per piccoli passi;
// capite prima la logica che intendete sviluppare prima di iniziare a scrivere del vero e proprio codice;
// cercate di divertirvi, alla fine state giocando con dei lego digitali potenziati :bowtie: