document.getElementById("creationBouton").addEventListener("click", function() {
    const texte = document.getElementById("texte").value;
    const couleur = document.getElementById("couleur").value;

    if (texte && couleur) {
        const paragraphe = document.createElement("p");
        paragraphe.textContent = texte;
        paragraphe.style.backgroundColor = couleur;
        document.getElementById("conteneur").appendChild(paragraphe);
    } else {
        alert("Veuillez remplir les deux champs.");
    }
});