
const inputEl = document.getElementById("validation")
const textAEcrire = document.getElementById("texteAEcrire").innerText
const validationTextEl = document.getElementById("texteValide")

function valider() {
  if (inputEl.value === textAEcrire) {
    validationTextEl.innerHTML = "Texte validé";
  } else {
    validationTextEl.innerHTML = "Je ne peux pas valider les conditions pour le moment";
  }
}

valider()

inputEl.addEventListener("keyup", valider);

inputEl.addEventListener("mouseenter", () => inputEl.classList.add("highlight"))
inputEl.addEventListener("mouseleave", () => inputEl.classList.remove("highlight"))
