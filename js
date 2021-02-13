/*CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt or from HTML inputs*/
console.log("------------Homework 1------------")

let animal = new Object();
animal.name = prompt("What is the name of your dog?");
animal.kind = prompt("What kind is your dog?")
animal.speak = function(speak) {
    console.log("Dog says", speak)
}
let ja = animal.speak(prompt("What does the dog say?"))
// console.log(animal);
let tekst = document.getElementById("text");
tekst.innerHTML = `Dog's name is ${animal.name}, and it's breed is ${animal.kind}`


console.log("------------Homework 2------------")
/*HOMEWORK PART 2
Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML*/

function myBooks() {
    for (var i = 0; i < books.length; i++) {
        if (books[i].readingStatus) {
            console.log(`Already read ${books[i].title} by ${books[i].author}`);
        } else {
            console.log(`You still need to read ${books[i].title} by ${books[i].author}.`);
        }
    }
} 

let books = [ 
    {
        title: '"The Robots of Dawn"',
        author: 'Isaac Asimov',
        readingStatus: true
    },
    {
        title: '"Mockingjay: The Final Book of The Hunger Games"',
        author: 'Suzanne Collins',
        readingStatus: false
    },
    {
        title: '"Priracnik za Anti Antialkoholicari"',
        author: 'Igor Dzambazov',
        readingStatus: true
    }
];
myBooks();
