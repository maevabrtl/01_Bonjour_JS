# ***Exercice individuel n°2 : Bonjour JavaScript !***

## **Étape 1 : organisation de dossiers**
1. Pour créer un dossier nommé `exercices_individuels/`, j'utilise la commande `mkdir exercice_individuels` dans mon dossier `Ada`.
2. Pour créer un dossier `bonjour_javascript/` dans ce dossier, j'utilise la même commande à l'intérieur du dossier `exercices_individuels/` en remplacant le nom de dossier, ce qui donne : `mkdir bonjour_javascript`.
3. Dans ce nouveau dossier, j'utilise la commande `touch` pour créer un fichier comme ceci : `touch script.js`.  <br>

## **Étape 2 : premier code**
J'ouvre ensuite ce fichier dans VSCode. <br>
1. Je crée la variable `message` à laquelle je donne la valeur `Bonjour !`.
2. J'utilise la fonction `log` pour afficher la valeur de `message` dans la console :
```
let message = "Bonjour !";

console.log(message);
```
> [!NOTE]
> J'utilise des double quotes (") pour déclarer ma chaine de caractères et non des simples (') par habitude (car en langage C les simple quotes servent à déclarer un seul caractère et non une chaîne), mais l'écriture `let message = 'Bonjour'` est aussi valable. La seule différence est l'utilisation ou non d'un escape caractère (\\) pour l'utilisation de quotes à l'intérieur de la string.

3. J'ajoute une seconde variable `firstName` à laquelle je donne la valeur `Beyonce`. Ce qui donne :
```
let message = "Bonjour !";
let firstName = "Beyonce";

console.log(message);
```

4. Pour utiliser la variable `firstName` dans `message`, je modifie la valeur de `message` après la déclaration (et l'assignation) de `firstName` afin que celle-ci puisse être utilisée.  <br>
Ensuite, je modifie la valeur de ma variable message comme suit : ```message = `Bonjour ${firstName} !`;```.
> [!NOTE]
> J'utilise cette fois des backticks ( \` ) pour entourer ma string car c'est la seule manière de faire qui permettent d'utiliser une variable à l'intérieur (à ma connaissance).  <br>
> Le `${<nom_de_ma_variable>}` permet de signifier que l'on souhaite remplacer ceci par la valeur de la variable, ici, ce sera donc `Beyonce`.

Le code ressemble donc désormais à ceci : 
```
let message = "Bonjour !";
let firstName = "Beyonce";
message = `Bonjour ${firstName} !`;

console.log(message);
```


## **Étape 3 : dans une fonction**

1. J'_encapsule_ ensuite ce code comme demandé dans une fonction nommée `sayHello()`.
2. J'appelle ensuite cette fonction, mon code ressemble désormais à ça :
```
let message = "Bonjour !";
let firstName = "Beyonce";

function sayHello() {
	message = `Bonjour ${firstName} !`;
	console.log(message);
}

sayHello();
```
3. Pour passer ma variable `firstName` en paramètre de ma fonction, je l'insère dans les parenthèses comme suit : `function sayHello(firstName)`.
4. J'obtiens en effet `Bonjour undefined !` dans la console. Cela se produit car je n'assigne pas de valeur à `firstName` dans l'appel de fonction. <br>
Je vais corriger cette erreur en mettant la variable `firstName`, et pour plus de clarté, je renomme le paramètre de ma fonction `sayHello()` par `name` afin de ne pas le confondre avec ma variable `firstName`.  <br> Mon code final est donc celui du fichier `script.js` :
```
let message = "Bonjour !";
let firstName = "Beyonce";

function sayHello(name) {
	message = `Bonjour ${name} !`;
	console.log(message);
}

sayHello(firstName);
```


## **Étape 4 : un second paramètre**

Pour cette étape, je crée un nouveau fichier `script_optionnel.js`, dans lequel je copie le code précédent.
```
function sayHello(name) {
	message = `Bonjour ${name} !`;
	console.log(message);
}

sayHello("Beyonce");
```
> [!NOTE]
> On remarque dans ce code que je n'ai pas redéclaré de variable `firstName` comme précedemment, mais qu'à la place j'utilise directement la chaîne de caractères `"Beyonce"` dans mon appel de fonction.
1. J'ajoute une nouvelle variable nommée `hour` en paramètres de la fonction `sayHello()` :  <br>
`function sayHello(firstName, hour)`
2. Je dois ajouter une condition dans la fonction pour que lorsque `hour` est supérieur ou égal à 18H, `message` prenne la valeur `"Bonsoir"` plutôt que `"Bonjour"`. Pour ce faire j'utilise une ternaire (aussi appelée *opérateur conditionnel*, [voir la doc pour plus d'infos](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator)). <br>
Ma condition est donc `hour >= 18 ?`, et je choisis de mettre ma ternaire directement dans la déclaration de message, comme ceci :
```
let	message = (hour >= 18) ? `Bonsoir ${name} !` : `Bonjour ${name} !`;
```
Je teste ensuite mon code avec plusieurs appels de fonction avec des nombres différents pour vérifier que mon code fonctionne. Voici donc mon code final pour cette étape :
```
function sayHello(name, hour){
	let	message = (hour >= 18) ? `Bonsoir ${name} !` : `Bonjour ${name} !`;
	console.log(message);
}

sayHello("Beyonce", 11);
sayHello("Beyonce", 18);
sayHello("Beyonce", 17);
```
> [!NOTE]
> Pour cet exercice, je trouve qu'il serait intéressant de pouvoir générer un nombre aléatoire (enfin [pseudo-aléatoire](https://fr.wikipedia.org/wiki/Pseudo-al%C3%A9atoire), mais j'utilise le mot aléatoire pour plus de simplicité). Je vais donc détailler mon cheminement ci-dessous.

Il existe plusieurs fonctions contenues dans l'objet `Math` ([doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)) en JS qui, combinées ensemble, nous permettent de générer un nombre entier (nombre ou chiffre non-décimal) aléatoire dans une plage donnée (*range*). Ici, nous souhaitons avoir une range qui va de 0 (inclus) à 24 (exclus) pour générer n'importe quelle heure d'une journée.
- La fonction `Math.random()` : renvoie un nombre décimal entre 0 (inclus) et 1 (exclus), ce qui donne un chiffre compris ente 0 et 0.999(999... etc). <br>
Pour générer un nombre compris entre 0 et 24, je dois donc multiplier le *retour* de `Math.random()` par la taille de ma range, c'est-à-dire 24.
- La fonction `Math.floor()` : arrondit à l'entier inférieur le nombre qui lui est passé en paramètre (par exemple, si nous écrivons `Math.floor(5.6)`, la fonction nous *retournera* `5`).
> [!NOTE]
> J'utilise cette fonction pour travailler avec des entiers, ce que je trouve plus simple et plus clair, et qui me permet de découvrir et apprendre à utiliser de nouvelles fonctions, mais ce n'est pas du tout une obligation dans ce cas.

Je dois donc envoyer la valeur `Math.random() * 24` en paramètre de `Math.floor()` pour obtenir le résultat souhaité. <br>
Pour plus de lisibilité je déclare une *constante* (valeur fixe) à laquelle j'assigne la taille de ma range : `const	nbOfHours = 24;`. <br>
Ensuite, je modifie mon appel de fonction avec ces nouveaux paramètres.  <br>
Pour vérifier que mon code fonctionne, j'utilise `console.log()` pour afficher dans la console la valeur qui aura été générée et assignée au paramètre `hour` de la fonction `sayHello()`. <br>
Mon code final est celui du fichier `script_optionnel.js`. <br>

## **Étape 5 : HTML, liaison avec JavaScript**
*A partir de cette étape, le fichier JS correspondant sera `script_bonus.js`.* <br>
La méthode de résolution de cette étape est expliquée dans l'énoncé, je ne vais donc pas la reprendre en détail. Cette étape consiste à créer un fichier `index.html` qui fasse le lien avec notre script JavaScript.  <br>

## **Étape 6 : Première manipulation du DOM**
Pour cette étape, comme la précédente, une bonne partie du procédé est expliqué dans l'énoncé. Je reviens donc simplement sur l'utilisation de la commande `prompt()`, qui sera utilisée dans mon code comme ceci : `let 	firstName = prompt("What's your name ?");`. Dans cette ligne, j'assigne à ma variable `firstName` la *valeur de retour* de la fonction `prompt()`, qui sera ici le nom rentré par l'utilisateur.  <br>

# ***Pour aller plus loin*** 
Après avoir réalisé cet exercice, j'ai réfléchi aux différentes modifications et apports que je pourrais faire à ce code pour m'entrainer. J'ai donc décidé de me mettre un nouveau challenge : à la place de générer pseudo-aléatoirement un nombre pour ma variable `hour`, pourquoi ne pas tout simplement récupérer l'heure actuelle ? <br>
C'est ce que j'ai fait dans le fichier `script_bonus.js`.  <br>

## **Chercher & appliquer**
***Tout est dans le titre.*** J'ai cherché s'il existait en JS une fonction permettant de récupérer l'heure actuelle, et j'ai trouvé ceci : 
1. Pour récupérer la date et l'heure en JS, on utilise l'objet `Date` ([où j'ai trouvé mes infos ?](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript-fr)). Celui-ci permet de créer une date, de la récupérer ou la modifier, à l'aide de différentes *méthodes* (une fonction qui est associée à un objet et qui permet d’interagir avec cet objet). Pour définir une variable de ce type, on procède comme suit :
```
const	time = new Date();
```
2. Pour obtenir uniquement l'heure (donc, ce qui nous intéresse ici) nous utilisons la méthode `getHours()` :
```
const	time = new Date();
const	hourTime = time.getHours();
```
Il ne me reste plus qu'a passé la valeur de `hourTime` en paramètre de la fonction `sayHello()` et le code est codé.

> *Pour voir mon code final sur ce projet, rendez-vous dans le fichier `script_bonus.js`.*  <br>

# ***Conclusion***

Réaliser ce `README.md` m'a permis : 
- de revoir le processus d'éxecution de mon code,
- de réfléchir à son architecture et comment le *clean*,
- de corriger quelques erreurs,
- d'approfondir et de mieux comprendre certaines notions,
- pratiquer mon vocabulaire tech et mes explications.
 <br>
 
**C'était un projet intéressant et bien organisé, réalisable de plein de manières différentes. Il m'a permis de découvrir de nouvelles notions et laisse de la place pour approfondir.**
