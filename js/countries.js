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

const getCountryHTML = ({ name, flags, area, region }) => {
    return `
    <div class= "country">
        <h2 title="Country Name">${name.common}</h2>
        <p title="Country Area">Area: ${area} km</p>
        <p title="Country Region">Continet: ${region}</p>
        <img title="Country Flages Picture" src="${flags.png}">
    </div>
    `
};


//     // option: 1
// const getCountryHTML = counrty => {
//     const { name, flags } = counrty;
//     return `
//     <div class= "country">
//         <h2>${name.common}</h2>
//         <img src="${flags.png}">
//     </div>
//     `
// };

// original
// const getCountryHTML = counrty => {
//     return `
//     <div class= "country">
//         <h2>${counrty.name.common}</h2>
//         <img src="${counrty.flags.png}">
//     </div>
//     `
// };

// call the function
loadCountries();