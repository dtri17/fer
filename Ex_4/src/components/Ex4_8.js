
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
    name: "Costas",
    address: {
        street: "Lalaland 12"
    }
};

// Print the name of each company using forEach:
companies.forEach(company => console.log(company.name));
// Print the name of each company that started after 1987:
companies.forEach(company => {
    if (company.start > 1987) {
        console.log(company.name);
    }
});
// Companies with category "Retail", increment their start by 1 and append in the DOM:
// Assuming you have a div with an id = "output" in your HTML:
if (typeof window !== 'undefined') {
    const outputDiv = document.getElementById('output');
}

companies.forEach(company => {
    if (company.category === 'Retail') {
        company.start += 1;
        if (typeof window !== 'undefined') {
            const companyDiv = document.createElement('div');
            companyDiv.innerHTML = `
                <p>Name: ${company.name}</p>
                <p>Category: ${company.category}</p>
                <p>Start: ${company.start}</p>
                <p>End: ${company.end}</p>
                `;
            outputDiv.appendChild(companyDiv);
        }
    }
});


// Sort the companies based on their end date in ascending order:
const sortedCompanies = companies.sort((a, b) => a.end - b.end);
console.log(sortedCompanies)


// Sort the ages array in descending order:
const sortedAges = ages.sort((a, b) => b - a);
console.log(sortedAges)


// Print the sum if you add all the ages using reduce:
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);
// Make a new object with properties from companies[0] and a print method:
const { name, category } = companies[0];
const companyProfile = {
    name,
    category,
    print() {
        console.log(`Name: ${this.name}, Category: ${this.category}`);
    }
};
companyProfile.print();

// Function that takes unknown number of number arguments and returns their sum:
function sumNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}



// Function that takes unknown number of arguments and returns an array:
function collectArgs(...args) {
    return args.reduce((arr, item) => {
        if (Array.isArray(item)) {
            return arr.concat(item);
        }
        arr.push(item);
        return arr;
    }, []);
}


// Destructuring the street property from the person object:
const { address: { street } } = person;
// Function that returns an incrementing number starting from 0:
const createCounter = (() => {
    let counter = 0;
    return () => counter++;
})();


// Function that destructors query parameters from a URL into an object:
function getQueryParams(url) {
    const queryParams = {};
    new URL(url).searchParams.forEach((value, key) => {
        queryParams[key] = value;
    });
    return queryParams;
}
