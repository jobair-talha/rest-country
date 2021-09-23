const allCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => countryName(data))
}
const countryName = countries =>{
    let allCountriesName = document.getElementById('countries')
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <h2>${country.name}</h2>
            <p>${country.capital}</p> 
            <button onclick="loadCountryByName('${country.name}')">Details</button>`;
        allCountriesName.appendChild(div);
    });
}

const loadCountryByName = (countriesDetails) => {
    const details= `https://restcountries.eu/rest/v2/name/${countriesDetails}`
    fetch (details)
    .then (res => res.json())
    .then(data => mainCountry(data[0]))

}
const mainCountry = (data) => {
    console.log(data)
    const mainDiv = document.getElementById('country')
    mainDiv.innerHTML = `<h1>${data.name}</h1>
    <img src = '${data.flag}'>
    `
}

allCountries()