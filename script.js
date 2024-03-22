// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
]

// Your code goes below
// Adding more items to GEOGRAPHY_LIST
GEOGRAPHY_LIST.push({
    country: 'Fantasia',
    capital: 'Imaginaria',
    largestCity: 'Dreamsville',
    subdivisionName: 'region',
    subdivisions: [
        {
            name: 'Adventure Bay',
            capital: 'Paw Patrol HQ',
            largestCity: 'Adventure City',
            area: 5000,
        },
        {
            name: 'Mystic Falls',
            capital: 'Supernatural Central',
            largestCity: 'Vampire City',
            area: 3000,
        },
    ],
},
{
    country: 'Techland',
    capital: 'Silicon Valley',
    largestCity: 'Innovative City',
    subdivisionName: 'district',
    subdivisions: [
        {
            name: 'Gadgetville',
            capital: 'Smartphone City',
            largestCity: 'Laptop Town',
            area: 1500,
        },
        {
            name: 'Robotics Realm',
            capital: 'AI Central',
            largestCity: 'Automation Avenue',
            area: 2000,
        },
    ],
});
function generateHTMLForGeographyList() {
    const mainElement = document.querySelector('main');
    GEOGRAPHY_LIST.forEach(country => {
        const countryElement = document.createElement('div');
        countryElement.innerHTML = `
            <h2>${country.country}</h2>
            <p>Capital: ${country.capital}</p>
            <p>Largest City: ${country.largestCity}</p>
            <h3>${country.subdivisionName}s:</h3>
        `;
        const listElement = document.createElement('ul');
        country.subdivisions.forEach(subdivision => {
            const item = document.createElement('li');
            item.innerHTML = `
                <strong>${subdivision.name}</strong> - Capital: ${subdivision.capital}, Largest City: ${subdivision.largestCity}, Area: ${subdivision.area} sq km
            `;
            listElement.appendChild(item);
        });
        countryElement.appendChild(listElement);
        mainElement.appendChild(countryElement);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', generateHTMLForGeographyList);
