// const skraceno od constant u njoj se vrednost ne menja

// var je varijabla odnosno promenljiva

// let je promenljiva unutar jednog bloka

/*
let random ="Random text";

const randomFn =  () => {
    
    let random = "random";
    console.log(random);

}

randomFn();
*/

const randomObj = {
name: "Kebir",
lName: "Mavric",
city: "Novi Pazar",
age:26    
};

//destrukturizacija objekata- object destruction

// Razlaganje delova objekta na zasebne promenljive

// const {name, lName, city, age} = randomObj;

// const name = randomObj.name;

// randomObj.age = 27;

const newObj = {
    ...randomObj,
    age: 27,
}

console.log(newObj);


if(newObj.age === 27) {
    console.log(newObj);
} else {
    console.log("Error");
}

newObj.age === 27 ? console.log(newObj.age) : console.log("Error");


// = -dodela vrednosti

// == - proveravanje vrednosti

// === - proveravanje tipa podatka i vrednosti

// Class based components su komponente bazirane na klasama i metodama



// Node runtime koji vrsi egzekuciju i kompajlovanje javascript koda
// Node ima mnostvo svojih modula, najpoznatiji us fs(fileSystem) i http modul

//Svaka klasa MORA imati constructor metodu
//cd - change directory je komanda u terminalu
//ls - je komanda koja sluzi za izlistavanje fajlova i foldera unutar kompajlera
//