function checkDivisibility(array) {
    return array.filter(x => (x % 3 === 0) && (x % 2 != 0));
}

let array = [1, 2, 3, 4, 6, 9, 12, 15, 18];
let result = checkDivisibility(array);
console.log(result);  