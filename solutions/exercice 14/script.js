function afficherCapitale(element) {
    const capitale = element.getAttribute('data-answer');
    element.innerHTML = capitale;
}

function cacherCapitale(element) {
    element.innerHTML = '****';
}