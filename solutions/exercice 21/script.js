const loadButton = document.getElementById("load-button");
const userList = document.getElementById("user-list");
const userTemplate = document.getElementById("user-template");

function renderUsers(users) {
    userList.innerHTML = "";
    users.forEach(user => {
        const userClone = userTemplate.content.cloneNode(true);
        userClone.querySelector(".user-image").src = user.picture.medium;
        userClone.querySelector(".user-image").alt = `${user.name.first} ${user.name.last}`;
        userClone.querySelector(".user-name").textContent = `${user.name.first} ${user.name.last}`;
        userClone.querySelector(".user-email").textContent = user.email;

        userList.appendChild(userClone);
    });
}

function saveUsersToLocalStorage(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function loadUsersFromLocalStorage() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

loadButton.addEventListener("click", async () => {
    loadButton.textContent = "Chargement…";

    try {
        const response = await fetch("https://api.randomuser.me/?results=100");
        const data = await response.json();

        renderUsers(data.results);
        saveUsersToLocalStorage(data.results);

        loadButton.textContent = "Recharger";
    } catch (error) {
        console.error("Error fetching users:", error);
        loadButton.textContent = "Erreur, réessayer";
    }
});

// Load users from localStorage on page load
const savedUsers = loadUsersFromLocalStorage();
if (savedUsers.length > 0) {
    renderUsers(savedUsers);
}