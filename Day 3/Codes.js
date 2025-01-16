function CalculateDiscount(Price, Discount = 10) {
    return Price * Discount / 100;
}
let result = CalculateDiscount(1000);
console.log(result);

// ----------------------------------------------------------------------------------

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// ----------------------------------------------------------------------------------

function restOperator(...args) {
    return args;
}
console.log(restOperator(1, 2, 3, 4, 5));

// ----------------------------------------------------------------------------------

function createMessage(message="Hi",...name) {
    return name.map((name) => `${message} ${name}`);
}
console.log(createMessage("Hi", "Rahul", "Aman", "Rohit"));

// ----------------------------------------------------------------------------------

function sum(a,b,c) {
    return a+b+c;
}
num = [1,2,3];
console.log(sum(...num));

// ----------------------------------------------------------------------------------

function createUser(name,age=25,country="Unknown"){
    return {Name:name,Age:age,Country:country};
}
console.log(createUser("Rahul",20,"India"));