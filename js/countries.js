const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
};

const displayCountries = countrires => {
    // console.log(countrires);
    const countriesHTML = countrires.map(counrty => getCountryHTML(counrty));
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
};

const getCountryHTML = counrty => {
    return `
    <div class= "country">
        <h2>${counrty.name.common}</h2>
        <img src="${counrty.flags.png}">
    </div>
    `
};

// call the function
loadCountries();