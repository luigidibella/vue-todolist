Esercizio: Vue To Do List
===
## Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo.
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no.
## Milestone 1:
Stampare all’interno di una lista HTML un item per ogni todo.  
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
## Milestone 2:
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
## Milestone 3:
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.  
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista.
## Bonus:
1. Esporre un messaggio di errore se il testo inserito ha meno di 4 caratteri.
2. Cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa).
3. Rendere eliminabili solo i task con `done === true`. In caso contrario esporre un messaggio di errore diverso dal precedente.
4. Se la lista è vuota stampare “Non sono presenti task” al posto della lista.