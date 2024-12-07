// question 4.1
const nums = [1, 10, 2];
nums.sort((a,b)=>a-b); // Bug: Incorrect numeric sorting
console.log(nums);


// question 4.3
Input= [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
// Expected Output: [{"name":"Bob","age":30},{"name":"Alice","age":25}]
Input.sort((a,b)=>b.age - a.age)
console.log(Input)