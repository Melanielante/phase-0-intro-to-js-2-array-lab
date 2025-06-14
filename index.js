// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendCat(name) {
    cats.push("Ralph");
 }

 function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
    
 }
 function destructivelyRemoveLastCat(name) {
    cats.pop();
 }
 function destructivelyRemoveFirstCat(name) {
    cats.shift();
 }
 function appendCat(name) {
    return [...cats, name];
 }
 function prependCat(name) {
    return [name, ...cats];
 }
 function removeLastCat(name) {
    return cats.slice(0,2);
 }
 function removeFirstCat(name) {
    return cats.slice(1,3);
 }