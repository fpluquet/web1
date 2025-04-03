const euroInput = document.getElementById("euro");
const dollarInput = document.getElementById("dollar");

document.getElementById("euro").addEventListener("input", function() {
    const euroValue = parseFloat(euroInput.value);

    if (!isNaN(euroValue)) {
        dollarInput.value = (euroValue * 1.24).toFixed(2);
    } else {
        dollarInput.value = "";
    }
});

document.getElementById("dollar").addEventListener("input", function() {
    const dollarValue = parseFloat(dollarInput.value);
    if (!isNaN(dollarValue)) {
        euroInput.value = (dollarValue / 1.24).toFixed(2);
    } else {
        euroInput.value = "";
    }
});