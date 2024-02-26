class User {
  constructor(FirstName, lastName, age, location) {
    this.FirstName = FirstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static ConforontoEtà(user1, user2) {
    if (user1.age < user2.age) {
      console.log(`${user1.FirstName} è più piccolo di ${user2.FirstName}`);
    } else if (user1.age > user2.age) {
      console.log(`${user1.firstName} è più anziano di ${user2.firstName}`);
    } else {
      console.log(`${user1.firstName} ha la stessa età di ${user2.firstName}`);
    }
  }
}

const user1 = new User("Giuseppe", "Polizzi", "19", "Italy");
const user2 = new User("Giovanni", "Palermo", "22", "USA");

User.ConforontoEtà(user1, user2);

/////////////////////////////////////////////////

const formNode = document.querySelector("form");
const fname=document.getElementById("fname") 
const lname=document.getElementById("lname") 
const species=document.getElementById("species") 
const breed=document.getElementById("breed") 

class Animal {
  constructor(nome, proprietario, specie, razza) {
    this.nome = nome;
    this.proprietario = proprietario;
    this.specie = specie;
    this.razza = razza;
  }
}

const animali=[];

formNode.onsubmit = function (e) {
  e.preventDefault();
    const animale = new Animal(fname.value, lname.value, species.value, breed.value);

    animali.push(animale);
    fname.value="";
    lname.value="";
    species.value="";
    breed.value="";

    
  console.log(animali)
};
