// // Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    const newCats = cats.push(name)
    return newCats
}

const destructivelyPrependCat = function(name) {
    const newCats = cats.unshift(name)
    return newCats
}

function destructivelyRemoveLastCat() {
    const newCats = cats.pop()
    return newCats
}

const destructivelyRemoveFirstCat = function() {
    const newCats = cats.shift()
    return newCats
}

function appendCat(name) {
    const copyCats = [...cats, `${name}`]
    return copyCats

}

const prependCat = function(name) {
    const copyCats = [`${name}`, ...cats]
    return copyCats

}

function removeLastCat() {
    const copyCats = [...cats].slice(0, cats.length -1)
    return copyCats

}

const removeFirstCat = function() {
    const copyCats = [...cats].slice(1)
    return copyCats
}