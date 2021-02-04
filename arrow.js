function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(10);
console.log(result);

// arrow function declare method
const doubleIt2 = num => num * 2;
const result2 = doubleIt2(50);
console.log(result2);

const add = (x, y) => x + y;
const result3 = add(10, 3);
console.log(result3);

const give5 = () => 5;
const result4 = give5();
console.log(result4);