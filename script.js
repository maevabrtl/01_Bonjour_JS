// Etape 3 - 3. Déplace la variable firstname pour qu’elle devienne un paramètre de la fonction sayHello()
let firstName = 'Beyonce';

// Etape 3 - 1. Encapsule ton code précédent dans une fonction nommée sayHello()
// + Etape 3 - 3. Déplace la variable firstname pour qu’elle devienne un paramètre de la fonction sayHello()
function sayHello(name){
	// Etape 2 - 1. Crée une variable message dans lequel on va stocker le message : Bonjour !
	let message = 'Bonjour !';
	
	// Etape 2 - 3. Crée une seconde variable firstname dans lequel on va stocker un prénom. Exemple : Beyonce
	// let firstName = 'Beyonce'; MOVED LINE 3 pour l'étape 3.3
	
	// Etape 2 - 4. Utilise la variable firstname dans message pour obtenir l’affichage du message : Bonjour Beyonce !
	message = `Bonjour ${name} !`;
	
	// Etape 2 - 2. Affiche le message dans ta console. 
	console.log(message);
}

// + 5. Corrige l’appel de fonction pour retrouver de nouveau le message Bonjour Beyonce !
sayHello(firstName);
