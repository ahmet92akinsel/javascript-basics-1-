const createPerson = (name, age) => {
  return  {
    name: name,
    age: age
  };
};


function getName(object) {
 
  return object.name;
}

const getProperty = (property, object) => {
  
  return object[property];

};
const hasProperty = (property, object) => {

  if (object.hasOwnProperty(property)) {
    return true
  } else {
    return false
  };
  };
function isOver65(person) {
  
  if (person["age"] > 65) {
    return true
  } else {
    return false
  }
};


const getAges = people => {
  
  let person1 = people [0] ["age"]
  let person2 = people [1] ["age"]
  let person3 = people [2] ["age"]
  let ages = [person1,person2,person3];
  return ages; 

  //return people.map(person => person.age);
};

const findByName = (name, people) => {
  
return people.find(people => people.name === name)
};

const findHondas = cars => {
 
return cars.filter(cars => cars.manufacturer === "Honda");

 
};

const averageAge = people => {
 
  let ages = people.reduce((acc,person) => {
   return acc + person.age
  } ,0) 
  return ages / people.length;
};
const createTalkingPerson = (name, age) => {
  
const person = {

  name : name, 
  age : age,
  introduce: function(strangersName) {
    return `Hi ${strangersName}, my name is Bill and I am 40!`
  }
    
};
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
