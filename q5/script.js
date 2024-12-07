// question 5.1
const obj = {
    name: "Alice",
    greet: function() {  
        console.log(`Hello, ${this.name}`); // Bug: Arrow function doesn't bind `this`
    }
};
const bound = obj.greet.bind(obj)
bound()

// question 5.3
function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log(`my name is ${this.name}`);
    };
}

const person1 = new Person("Alice");
console.log(person1.greet())