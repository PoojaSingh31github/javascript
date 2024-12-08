
// const person = {
//     firstName: "Alice",
//     lastName: "Doe",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// const anotherPerson = {
//     firstName: "Bob",
//     lastName: "Smith"
// };

// // Using call
// console.log(person.fullName.call(anotherPerson)); // "Bob Smith"

// // Using apply
// console.log(person.fullName.apply(anotherPerson)); // "Bob Smith"

// // Using bind
// const getFullName = person.fullName.bind(anotherPerson);
// console.log(getFullName()); // "Bob Smith"




// question 6.1
const obj = {
    num: 42,
    getNum: () => {
        return obj.num; // Explicitly use `obj.num` as `this` won't work in arrow functions
    }
};

const detachedGetNum = obj.getNum;
console.log(detachedGetNum()); // Output: 42


// question 6.3

// Expected Output: 6
function cal(a,b,c) {
    return a+b+c
    
}
const Input= { a: 1, b: 2, c: 3 }
const call = cal.call(null, Input.a, Input.b,Input.c)
console.log(call)
const apply = cal.apply(null,[ Input.a, Input.b,Input.c])
console.log(apply)