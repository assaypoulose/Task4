//To compare two JSON objects with the same properties but in different order


let obj1 = { name: "Person 1", age:5 };
let obj2 = {age:5, name: "Person 1" };

function compareJSON(obj1, obj2) {
  return JSON.stringify(obj1, null, 2) === JSON.stringify(obj2, null, 2);
}

console.log(compareJSON(obj1, obj2)); // true


//To display all the country flags in the console using the REST Countries API

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(country.flags.png);
    });
  })
  .catch(error => console.log(error));

  //To print all the country names, regions, sub-regions and populations using the REST Countries API

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(`Name: ${country.name.common}`);
      console.log(`Region: ${country.region}`);
      console.log(`Sub-region: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
      console.log('----------------------------------');
    });
  })
  .catch(error => console.log(error));