//tecnica 4
// a) 1, 3, 5, 7, ___
function nextInSequenceA() {
    let sequence = [1, 3, 5, 7];
    let lastElement = sequence[sequence.length - 1];
    return lastElement + 2; 
}

// b) 2, 4, 8, 16, 32, 64, ____
function nextInSequenceB() {
    let sequence = [2, 4, 8, 16, 32, 64];
    let lastElement = sequence[sequence.length - 1];
    return lastElement * 2; 
}

// c) 0, 1, 4, 9, 16, 25, 36, ____
function nextInSequenceC() {
    let sequence = [0, 1, 4, 9, 16, 25, 36];
    let n = sequence.length;
    return n * n; 
}

// d) 4, 16, 36, 64, ____
function nextInSequenceD() {
    let sequence = [4, 16, 36, 64];
    let n = sequence.length + 1;
    return (2 * n) ** 2; 
}

// e) 1, 1, 2, 3, 5, 8, ____
function nextInSequenceE() {
    let sequence = [1, 1, 2, 3, 5, 8];
    let n = sequence.length;
    return sequence[n - 1] + sequence[n - 2];
}

// f) 2, 10, 12, 16, 17, 18, 19, ____
function nextInSequenceF() {
    let sequence = [2, 10, 12, 16, 17, 18, 19];
    let lastElement = sequence[sequence.length - 1];
    return lastElement + 1; 
}

console.log("a) Next: " + nextInSequenceA()); 
console.log("b) Next: " + nextInSequenceB()); 
console.log("c) Next: " + nextInSequenceC()); 
console.log("d) Next: " + nextInSequenceD()); 
console.log("e) Next: " + nextInSequenceE());
console.log("f) Next: " + nextInSequenceF()); 

