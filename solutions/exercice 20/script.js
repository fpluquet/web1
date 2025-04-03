const loadButton = document.getElementById("load-button");
const userList = document.getElementById("user-list");
const userTemplate = document.getElementById("user-template");

loadButton.addEventListener("click", async () => {
    loadButton.textContent = "Chargement…";
    userList.innerHTML = "";

    try {
        const response = await fetch("https://api.randomuser.me/?results=100");
        const data = await response.json();

        data.results.forEach(user => {
            // Crée un clone du template pour chaque utilisateur
            const userClone = userTemplate.content.cloneNode(true);
            userClone.querySelector(".user-image").src = user.picture.medium;
            userClone.querySelector(".user-image").alt = `${user.name.first} ${user.name.last}`;
            userClone.querySelector(".user-name").textContent = `${user.name.first} ${user.name.last}`;
            userClone.querySelector(".user-email").textContent = user.email;

            // Ajoute le clone à la liste des utilisateurs
            userList.appendChild(userClone);
        });

        loadButton.textContent = "Recharger";
    } catch (error) {
        console.error("Error fetching users:", error);
        loadButton.textContent = "Erreur, réessayer";
    }
});
