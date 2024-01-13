//Déclaration du tableau dwtab avec les prénoms des stagiaires de la promo
let dwtab = ["Caroline", "Farid", "Marc", "Ali", "Alexandre", "Arnaud", "Christopher", "Delphine", "Gaetan", "Sylvain", "Maxime", "Khaled", "Dylan", "Yannis", "Vladyslav"];

//Afficher le tableau dans la console avec console.table
console.table(dwtab);

//Créer une liste HTML pour les éléments du tableau
let stagiairesList = document.getElementById('stagiairesList');
dwtab.forEach(function(prenom) {
  let li = document.createElement('li');
  li.textContent = prenom;
  stagiairesList.appendChild(li);
});

//Créer une liste HTML pour les éléments du tableau en sens inverse
let inverseStagiairesList = document.getElementById('inverseStagiairesList');
for (let i = dwtab.length - 1; i >= 0; i--) {
    let li = document.createElement('li');
    li.textContent = dwtab[i];
    inverseStagiairesList.appendChild(li);
}

//Ajouter 15 au début du tableau
dwtab.unshift(15);

//Ajouter "Patmo" et "Formateur" à la fin du tableau
dwtab.push("Patmo", "Formateur");

//Enlever "Formateur" de la fin du tableau
dwtab.pop();

//Enlever 15 au début du tableau
dwtab.shift();

// Ajouter "Toto" en position 2 du tableau
dwtab.splice(1, 0, "Toto");

//Remplacer "Ali" par "Khaled"
let indexAli = dwtab.indexOf("Ali");
if (indexAli !== -1) {
    dwtab.splice(indexAli, 1, "Khaled");
}

//Afficher les éléments du tableau avec leurs index dans la console avec une boucle avec for
console.log("Avec for :");
for (let i = 0; i < dwtab.length; i++) {
    console.log(`Index ${i}: ${dwtab[i]}`);
}

//Afficher les éléments du tableau avec leurs index dans la console avec une boucle forEach
console.log("Avec forEach :");
dwtab.forEach(function(element, index){
    console.log(`Index ${index}: ${element}`);
});

//Afficher les éléments du tableau avec une boucle for...of dans la console
console.log("Avec for...of :");
for (const element of dwtab) {
  console.log(element);
}

//Afficher les éléments du tableau avec une boucle for...in dans la console
console.log("Avec for...in :");
for (const index in dwtab) {
  console.log(`Index ${index}: ${dwtab[index]}`);
}