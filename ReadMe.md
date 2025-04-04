# Programmation WEB

Auteur : Pluquet Frédéric

## Objectifs

- Comprendre les bases du langage HTML
- Comprendre les bases du langage CSS
- Comprendre les bases du langage JavaScript

### Exercices HTML/CSS

Pour chaque exercice suivant, créez un fichier HTML et un fichier CSS (que vous pouvez inclure dans le fichier HTML) pour réaliser les tâches demandées. Ne mettez pas de CSS directement dans le fichier HTML, sauf si c’est demandé explicitement.

### Exercice 1 : Page web pour le jeu Mikado

Créez une page web pour une notice du jeu Mikado, en HTML contenant :

- Un titre clair dans l’onglet du navigateur
- L’usage des balises de titre `<H1>` et `<H2>`
- La séparation des paragraphes dans des balises différentes `<p>`
- L’intégration d’une ou plusieurs images en rapport avec le MIKADO, avec :
    - une image dans sa taille d’origine
    - une ou plusieurs images redimensionnées
- Quelques mots importants mis en gras et en italique

Rendez la page la plus esthétique possible en utilisant le CSS. Vous pouvez utiliser des couleurs, des polices, des bordures, des marges, des ombres, des dégradés, des images de fond, etc. pour rendre la page plus agréable à lire.

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%201)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%201)

---

### Exercice 2 : Ensemble de pages web pour une aventure

Créez un ensemble de pages web. Le principe est simple, imaginez une aventure dans lequel le héros est le lecteur.

Dans chaque page, vous mettrez :

- Un titre
- Un fond
- Une image et un paragraphe qui décrit le lieu où se trouve le héros
- Un choix entre 2 ou 3 pages (ex. « Aller au nord » ou « prendre porte N 3 », etc.)
- Chaque choix sera un lien vers une autre page
- Chaque choix aura une icône ou une image cliquable

**Scénarisation** :

- Scénarisez vos pages web et prévoyez des choix plus complexes si la première page d’accueil du jeu demande un choix de personnage. Idéalement, prévoyez un schéma des liens de vos pages.
- Exemple : « Vous ne pouvez pas passer par ce passage car il est trop étroit. Cependant, si vous êtes un nain, vous pouvez emprunter ce passage. »

Le but est de créer un ensemble de liens permettant de « jouer » avec une ambiance graphique.

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%202)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%202)

---

### Exercice 3 : Page de facture

Créer une page de type facture, en HTML, au format suivant :

- Un titre clair dans l’onglet du navigateur
- Le nom d’un client, son adresse
- La date
- Un titre contenant le mot « FACTURE »
- Un tableau, formaté comme suit :
    - Première ligne en gras, fond coloré
    - 5 colonnes : référence, nom produit, quantité, prix H.T., prix total H.T.
    - Quelques lignes de produit (remplissage)
    - Une ligne (et deux colonnes !) en gras avec le total TVA
    - Une ligne de remerciement d’achat dans votre magasin

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%203)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%203)

---

### Exercice 4 : Formulaire de facture

Créez la page suivante en utilisant les balises `div`, `h1`, `h2`, `p`, `fieldset`, `form`, `select`, `hr`, `input`, `textarea`, `br`, …

![facture.png](resources/images/facture.png)

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%204)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%204)

---

### Exercice 5 : Style de la facture

Reprenez votre dernier exercice et ajoutez-y un fichier `style.css` pour en améliorer le style.

Ce fichier CSS permettra d’améliorer les différentes balises. La police utilisée doit être désormais `Segoe UI`.

Le résultat doit être le plus proche possible de l’image ci-dessous :

![factureStyle.png](resources/images/factureStyle.png)

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%205)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%205)

---

### Exercice 6 : Menu horizontal réactif

Créez un menu horizontal, contenant les items suivants, sous forme de blocs de 150 pixels (et qui passeront verticalement si la fenêtre se réduit).

- Accueil
- Agenda
- Articles
- Contact
- Mentions

Les items du menu seront réactifs au passage de la souris (changement de couleur ou couleur de fond).

Un clic sur un des menus permettra de déplacer la page courante vers la section choisie (ajoutez du texte aléatoire, en utilisant [Lipsum](https://www.lipsum.com/) par exemple, dans chaque section pour avoir une page assez grande et scrollable).

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%206)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%206)

---

### Exercice 7 : Jeu CSS

Passez les 32 niveaux de [flukeout.github.io](https://flukeout.github.io/).

---

### Exercice 8 : Animation CSS et JS

Analysez le code contenu dans le dossier `solutions/exercice8`. Comprenez comment il fonctionne. Modifiez le code pour ajouter une animation de type `bounce` sur le texte `HELLO`.

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%208)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%208)

---

### Exercice 9 : Recodage de la page connected.helha.be

Recodez le visuel de la page [https://connected.helha.be/login/index.php](https://connected.helha.be/login/index.php) avec un maximum de détails. Vous pouvez vous aider du code de la page existante pour comprendre comment les éléments sont placés et pour récupérer les différentes images qui la composent.


---

### Exercices JS

### Exercice 10 : Le langage

Créez un tableau de 10 objets (créés à la volée) ayant comme propriétés un nom et un âge. Initialisez ces objets avec des valeurs aléatoires. Pour cela, créez des noms et des prénoms plausibles et des âges aléatoires.

Parcourez ensuite ce tableau pour afficher toutes les informations sur la console. Par exemple :

```
1. Dupont Jean, 25 ans
2. Durand Paul, 32 ans
3. ...
```

Affichez ensuite la plus grande différence entre les âges ainsi que le nom qui comporte le plus de lettres différentes. Par exemple :

```
La plus grande différence d'âge entre deux personnes est de 15 ans.
Le nom avec le plus de lettres différentes est "Dupont Jean".
```

<details>
<summary>Solution</summary>

```javascript
// Liste des noms et prénoms possibles
const noms = ["Dupont", "Durand", "Martin", "Bernard", "Petit"];
const prenoms = ["Jean", "Paul", "Pierre", "Jacques", "Henri"];

// Création d'un tableau de 10 objets personne avec des noms, prénoms et âges aléatoires
const personnes = Array.from({ length: 10 }, () => ({
  nom: noms[Math.floor(Math.random() * noms.length)],
  prenom: prenoms[Math.floor(Math.random() * prenoms.length)],
  age: Math.floor(Math.random() * 100)
}));

// Affichage des informations de chaque personne dans la console
personnes.forEach((personne, index) => {
  console.log(`${index + 1}. ${personne.nom} ${personne.prenom}, ${personne.age} ans`);
});

// Calcul de la plus grande différence d'âge entre deux personnes
const ages = personnes.map(personne => personne.age);
const maxAgeDifference = Math.max(...ages) - Math.min(...ages);

// Recherche du nom complet avec le plus de lettres différentes
const nomsAvecLePlusDeLettresDiff = (nom1, nom2) => {
  const lettresDiff1 = new Set(nom1.split('')).size;
  const lettresDiff2 = new Set(nom2.split('')).size;
  return lettresDiff1 > lettresDiff2 ? nom1 : nom2;
};

const nomTrouvé  = personnes.reduce((acc, personne) => {
  const nomComplet = `${personne.nom} ${personne.prenom}`;
  return nomsAvecLePlusDeLettresDiff(acc, nomComplet);
}, "");

// Affichage des résultats dans la console
console.log(`La plus grande différence d'âge entre deux personnes est de ${maxAgeDifference} ans.`);
console.log(`Le nom avec le plus de lettres différentes est "${nomTrouvé}".`);
```

</details>

---

### Exercice 11 : Le langage

Pour rappel, voici des exemples de fonction nommée, fonction anonyme, fonction anonyme courte :

```javascript
function circonférence(r) {
  return 2 * Math.PI * r;
}
```

Exemple de fonction anonyme :

```javascript
const circonférence = function(r) {
  return 2 * Math.PI * r;
};
```

Exemple de fonction anonyme courte :

```javascript
const circonférence = r => 2 * Math.PI * r;
```

Pour chaque exercice suivant, écrivez la fonction demandée dans les trois versions (fonction nommée, fonction anonyme, fonction anonyme courte) quand c'est possible :

1. Écrire une fonction `carre(n)` qui retourne le carré de `n`. Testez-les.
2. Écrire une fonction `affiche(n, texte)` qui affiche sur la console `n` fois le texte passé en paramètre. Testez-les.
3. Écrire une fonction `produit(...)` qui prend un nombre variable de paramètres et en retourne leur produit. Testez-les.
4. Écrire une fonction `estPremier(n)` qui retourne `true` si `n` est premier, `false` sinon. Testez-les.
5. Écrire une fonction `estPalindrome(texte)` qui retourne `true` si `texte` est un palindrome, `false` sinon. Testez-les.

<details>
    <summary>Solution</summary>

```javascript
// Fonction nommée
function carreNomme(n) {
  return n * n;
}

// Fonction anonyme
const carreAnonyme = function(n) {
  return n * n;
};

// Fonction anonyme courte
const carreCourt = n => n * n;

// Fonction nommée
function afficheNomme(n, texte) {
  for (let i = 0; i < n; i++) {
    console.log(texte);
  }
}

// Fonction anonyme
const afficheAnonyme = function(n, texte) {
  for (let i = 0; i < n; i++) {
    console.log(texte);
  }
};

// Fonction anonyme courte
const afficheCourt = (n, texte) => {
  for (let i = 0; i < n; i++) {
    console.log(texte);
  }
};

// Fonction nommée
function produitNomme(...args) {
  return args.reduce((acc, val) => acc * val, 1);
}

// Fonction anonyme
const produitAnonyme = function(...args) {
  return args.reduce((acc, val) => acc * val, 1);
};

// Fonction anonyme courte
const produitCourt = (...args) => args.reduce((acc, val) => acc * val, 1);

// Fonction nommée
function estPremierNomme(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Fonction anonyme
const estPremierAnonyme = function(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// Fonction anonyme courte
const estPremierCourt = n => {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// Fonction nommée
function estPalindromeNomme(texte) {
  const reversed = texte.split('').reverse().join('');
  return texte === reversed;
}

// Fonction anonyme
const estPalindromeAnonyme = function(texte) {
  const reversed = texte.split('').reverse().join('');
  return texte === reversed;
};

// Fonction anonyme courte
const estPalindromeCourt = texte => {
  const reversed = texte.split('').reverse().join('');
  return texte === reversed;
};

// Fonction de test
function testerFonctions() {
  console.log("Test de carreNomme(4) :", carreNomme(4)); // 16
  console.log("Test de carreAnonyme(4) :", carreAnonyme(4)); // 16
  console.log("Test de carreCourt(4) :", carreCourt(4)); // 16
  
  afficheNomme(2, "Bonjour via fonction nommée"); 
  afficheAnonyme(2, "Bonjour via fonction anonyme"); 
  afficheCourt(2, "Bonjour via fonction courte");
  
  console.log("Test de produitNomme(2, 3, 4) :", produitNomme(2, 3, 4)); // 24
  console.log("Test de produitAnonyme(2, 3, 4) :", produitAnonyme(2, 3, 4)); // 24
  console.log("Test de produitCourt(2, 3, 4) :", produitCourt(2, 3, 4)); // 24
  
  console.log("Test de estPremierNomme(7) :", estPremierNomme(7)); // true
  console.log("Test de estPremierAnonyme(7) :", estPremierAnonyme(7)); // true
  console.log("Test de estPremierCourt(7) :", estPremierCourt(7)); // true
  
  console.log("Test de estPalindromeNomme('radar') :", estPalindromeNomme('radar')); // true
  console.log("Test de estPalindromeAnonyme('radar') :", estPalindromeAnonyme('radar')); // true
  console.log("Test de estPalindromeCourt('radar') :", estPalindromeCourt('radar')); // true
}

testerFonctions();
```

</details>

---

### Exercice 12 : Les événements

Créez une page HTML avec un texte à recopier, un champ `input` de type `text` et un paragraphe par défaut.

En utilisant l’événement `onkeyup` sur le champ de texte, assurez-vous que l’utilisateur a saisi un texte donné correctement. Tant qu'il ne l'a pas fait, le paragraphe affiche un message d’erreur. Dès qu’il a saisi le texte correctement, le paragraphe affiche un message de validation.

Voici la solution à laquelle vous devez arriver : [[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%2012)

Voici le code d’aide. Recopiez-le et lisez bien chaque ligne pour voir si vous comprenez le code proposé.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Validation</title>
    <script>
        function valider() {
            const element = document.getElementById("texteValide");
            if (document.getElementById("validation").value === /* ... */) {
                element.innerHTML = /* ... */
            } else {
                element.innerHTML = /* ... */
            }
        }
    </script>
</head>
<body>
    <p>
        Recopiez le texte suivant : "je certifie avoir lu les conditions de vente"
    </p>
    <hr/>
    <input
        type="text"
        id="validation"
        placeholder="texte sans les guillemets"
        style="width: 600px"
        onkeyup="valider()"
    />
    <p id="texteValide">
        Je ne peux pas valider les conditions pour le moment
    </p>
</body>
</html>
```

Ensuite, vous devez modifier les parties `/* ... */` pour que cela fonctionne comme attendu.

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%2012)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%2012)

--- 

### Exercice 13 : Les événements

Dans l’exercice précédent, utilisez maintenant l’événement `onchange` et observez ce que cela change (pensez à retirer le focus du champ texte en cliquant en dehors du champ pour que l’événement se produise).

Quel est la différence entre `onkeyup` et `onchange` ?


Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%2013)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%2013)

---

### Exercice 14 : Les événements

Soit un exemple de code HTML simple qui permet de changer le texte d’un bouton lorsqu’on clique dessus :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemple</title>
  </head>
  <body>
    <button onclick="this.innerHTML = 'Cliqué !'">Cliquez-moi</button>
  </body>
</html>
```

Sur base de cet exemple, créez une petite page web dans laquelle l’utilisateur pourra cliquer sur un texte `****` pour afficher la capitale d’un pays (mettez des étoiles et le texte affiché dans une balise `<span>`). Par exemple :

```
La capitale de la France est ****
La capitale de l’Italie est Rome
La capitale du Chili est ****
La capitale de l’Allemagne est ****
La capitale de la Corée du Sud est ****
```

Quand cela fonctionne, nous allons augmenter la qualité du code en créant une fonction JavaScript qui prend en paramètre `this` et le texte à afficher. Transformez alors les différents événements en appelant cette fonction.

Allez plus loin en utilisant un attribut `data-...` sur chaque span pour stocker la capitale (par exemple `data-answer='Paris'`) et en l'utilisant dans la fonction pour ne plus passer la capitale en paramètre.

Dès que cela fonctionne, ajoutez un événement `onmouseenter` pour afficher le texte et un événement `onmouseleave` pour le cacher.

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%2014)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%2014)


---

### Exercice 15 : Manipulation de DOM

Créez une page web sur laquelle il y a un formulaire avec :

- Un input de texte avec l’id « texte »
- Un input de texte avec l’id « couleur »
- Un bouton avec l’id « creationBouton »

Quand on clique sur le bouton `creationBouton`, un nouvel élément `<p>` est ajouté à la page avec comme texte la valeur du champ « texte » et la couleur de fond, la valeur du champ « couleur ».

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%2015)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%2015)

---

### Exercice 16 : Les événements

Avec les éléments précédents, créez un convertisseur de monnaie euros / dollars avec deux champs input de type text et deux fonctions. Pour information de conversion, 1€ = 1.24$.

**Astuce :** Un champ input de type text est un texte. Pour le transformer en nombre, il existe seulement deux fonctions JavaScript qui sont `parseInt()` et `parseFloat()`.

Exemple d'utilisation :

```javascript
var n1 = parseFloat(document.getElementById("euro").value) * 1.24;
```

Ne soyez pas surpris en vidant le champ d'obtenir `NaN` (Not a Number) dans le champ de conversion. Cela signifie que le champ est vide et que la conversion n’a pas pu se faire.

Fixez ce problème en ajoutant une condition qui vérifie si le champ est vide ou non, pour ne pas afficher `NaN` (via la fonction `isNaN()`).

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%2016)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%2016)

---

### Exercice 17 : Jeu - SOS spatial

Vous devez coder un petit jeu simple : dans une grille de 8x8, l’ordinateur cache un objet qui représente un vaisseau perdu.

L’utilisateur saisit des coordonnées X et Y (utilisation de la fonction `window.prompt()` ou d’un champ input de type text) et l’ordinateur répond s’il y a un écho sur la ligne et la colonne (si le vaisseau est sur la ligne et/ou sur la colonne). Tant que l’objet n’est pas trouvé, on ressaisit les coordonnées.

Pour mieux comprendre, jouez rapidement ici : [[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%2017)


#### Difficulté supplémentaire 1 :
Il serait utile de conserver un historique des coordonnées déjà saisies et empêcher l’utilisateur de la resaisir. Pour cela, une fonction `estPrésente(x,y)` lisant dans un tableau serait pratique, pour éviter d’incrémenter le compteur d’essai.

#### Difficulté supplémentaire 2 :
Une représentation graphique du tableau avec les tests serait plus attirant. Le mot test serait remplacé par une image de sonde ou autre objet. Pour rappel, une table en HTML se dessine avec `<table><tr><td>` et du CSS.

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%2017)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%2017)

---

### Exercice 18 : Async/await

Nous avons une fonction synchrone appelée `f`. Comment pouvez-vous appeler la fonction `async wait()` et utiliser son résultat à l’intérieur de `f` ?

```javascript
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  // ...que devez-vous écrire ici?
  // nous devons appeler async wait() et attendre pour obtenir 10
  // Souvenez-vous, on ne peut pas utiliser "await".
}
```

La solution est techniquement très simple, mais la question est assez courante pour les développeurs en matière d’async/await.

<details>
  <summary>Solution</summary>

```javascript
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    wait().then(result => {
        console.log("Result from async wait():", result);
    });
}

// Call the function f to demonstrate the solution
f();
```

</details>

---

### Exercice 19 : Asynchronous JavaScript

Grâce à l’API [https://restcountries.com/](https://restcountries.com/), obtenez la liste de tous les pays qui parlent français et affichez-la dans une liste `<ul>` en HTML. Triez cette liste par ordre alphabétique.

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%2019)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%2019)

---

### Exercice 20 : Asynchronous JavaScript

Créez une page web qui affiche un seul bouton « Charger ».

Une fois cliqué, le bouton affiche le texte « Chargement… » et la page va demander via une requête Ajax cent utilisateurs random à l’API [https://api.randomuser.me/](https://api.randomuser.me/).

Une fois les utilisateurs reçus, ils sont affichés dans la page et le bouton affiche le texte « Recharger ».

Conseil : Pour éviter de devoir créer de nouvels éléments HTML pour chaque utilisateur, vous pouvez créer un élément `template` dans votre HTML. Il contiendra le code HTML de l’utilisateur et vous pourrez le cloner autant de fois que nécessaire pour afficher les utilisateurs. Cela permet de garder le code HTML et JS propre et d’éviter de devoir créer une structure HTML dans le JS.

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%2020)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%2020)

---

### Exercice 21 : Asynchronous JavaScript

Reprenez le code de l’exercice précédent et sauvegardez les derniers utilisateurs dans le `localStorage`. Lorsque la page est rechargée, vous récupérez ces utilisateurs pour les afficher directement.

Exemple de solution : [[Code]](https://github.com/fpluquet/web1/tree/master/solutions/exercice%2021)
[[Voir le site]](https://fpluquet.github.io/web1/solutions/exercice%2021)
