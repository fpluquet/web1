const loadingDiv = document.getElementById('loading-div');
const errorDiv = document.getElementById('error-div');

async function fetchFrenchSpeakingCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/lang/french?fields=name');
        const countries = await response.json();

        const sortedCountries = countries.sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
        );

        const countryList = document.getElementById('country-list');
        sortedCountries.forEach(country => {
            const listItem = document.createElement('li');
            listItem.textContent = country.name.common;
            countryList.appendChild(listItem);
        });
        loadingDiv.classList.add("hidden")
    } catch (error) {
        console.error('Error fetching countries:', error);
        errorDiv.classList.remove("hidden")
    }
}

fetchFrenchSpeakingCountries();
