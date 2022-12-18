// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
} 
function appendCat(name) {
    const newCat = [...cats];
    newCat.push(name)
    return newCat; //return [...cats, name]
}

function prependCat(name) {
    const newCat2 = [...cats];
    newCat2.unshift(name);
    return newCat2;
}

function removeLastCat() {
    const newCat3 = [...cats];
    newCat3.pop();
    return newCat3;
}
function removeFirstCat() {
    const newCat4 = [...cats];
    newCat4.shift();
    return newCat4;
}