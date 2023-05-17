

//=====================Home-Task==================


//----------------------#Task-1-------------------

// function test(str) {
//     return "something " + str
// }
// console.log(test("is better than nothing"));

//----------------------#Task-2-------------------

// function test(boolion){
//     return boolion.toString()

// }
// console.log(test(false));

//----------------------#Task-3-------------------

// function test(str) {
//     return Number(str)
// }
// console.log(test("6"));

// function test(str) {
//     return parseInt(str)
// }
// console.log(test("7"));

//----------------------#Task-4-------------------

// function test(str) {
//     str = str.toLowerCase()
//     if (str === "mubashir") {
//         return `Hello, My Love!`
//     }
//     else {
//         return `Hello, ${str.charAt(0).toUpperCase() + str.slice(1)}!`
//     }
// }
// console.log(test("Mubashir"));
// console.log(test("Helen"));

//----------------------#Task-5-------------------

// function test(a,b){
//     return a.length === b.length
// }
// console.log(test("abS","BCN"));

//----------------------#Task-6-------------------

function test(str) {
    if (str === "") {
        return 0;
    } else {
        return 1 + test(str.slice(1));
    }
}

console.log(test('hello')); 