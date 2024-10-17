# ***Exercice individuel n°2 : Bonjour JavaScript !***

## **Étape 1 : organisation de dossiers**
1. Pour créer un dossier nommé `exercices_individuels/`, j'utilise la commande `mkdir exercice_individuels` dans mon dossier `Ada`.
2. Pour créer un dossier `bonjour_javascript/` dans ce dossier, j'utilise la même commande à l'intérieur du dossier `exercices_individuels/` en remplacant le nom de dossier, ce qui donne : `mkdir bonjour_javascript`.
3. Dans ce nouveau dossier, j'utilise la commande `touch` pour créer un fichier comme ceci : `touch script.js`.

## **Étape 2 : premier code**
J'ouvre ensuite ce fichier dans VSCode.
1. Je crée la variable `message` à laquelle je donne la valeur `Bonjour !`.
2. J'utilise la fonction `log` pour afficher la valeur de `message` dans la console :
```
let message = "Bonjour !";

console.log(message);
```
> [!NOTE]
> J'utilise des double quotes (") pour déclarer ma chaine de caractères et non des simples (') par habitude (car en langage C les simple quotes servent à déclarer un seul caractère et non une chaîne), mais l'écriture `let message = 'Bonjour'` est aussi valable. La seule différence est l'utilisation ou non d'un escape caractère (\\) pour l'utilisation de quotes à l'intérieur de la string.)

3. J'ajoute une seconde variable `firstName` à laquelle je donne la valeur : `Beyonce` : `let firstName = "Beyonce";`. Ce qui donne :
```
let message = "Bonjour !";
let firstName = "Beyonce";

console.log(message);
```

4. Pour utiliser la variable `firstName` dans `message`, je modifie la valeur de `message` après la déclaration (et l'assignation) de `firstName` afin que celle-ci puisse être utilisée.
Ensuite, je modifie la valeur de ma variable message comme suit : `message = ``Bonjour ${firstName} !``;`.
> [!NOTE]
> J'utilise cette fois des backticks ( \` ) pour entourer ma string car c'est la seule manière de faire qui permettent d'utiliser une variable à l'intérieur (à ma connaissance).
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
4. J'obtiens en effet `Bonjour undefined !` dans la console. Cela se produit car je n'assigne pas de valeur à `firstName` dans l'appel de fonction. 
Je vais corriger cette erreur en mettant la variable `firstName`, et pour plus de clarté, je renomme le paramètre de ma fonction `sayHello()` par `name` afin de ne pas le confondre avec ma variable `firstName`. Mon code final est donc celui du fichier `script.js` :
```
let message = "Bonjour !";
let firstName = "Beyonce";

function sayHello(name) {
	message = `Bonjour ${name} !`;
	console.log(message);
}

sayHello(firstName);
```

> Voilà donc pour ces 3 premières étapes. J'ajouterai plus tard l'étape 4 (optionnelle), ainsi que les étapes 5 et 6 (bonus).
