// question 1.1
function fetchData() {
    setTimeout(() => console.log("Task 1"), 0);
    console.log("Task 2");
    Promise.resolve().then(() => console.log("Task 3"));
    setTimeout(() => console.log("Completed!"));
}
fetchData();

// question 1.3

// https://vimeo.com/1037017499?share=copy
console.log("*****************question 1.3***********************");
console.log("A");
setTimeout(() => console.log("B"), 1000);
Promise.resolve().then(() => console.log("C"));
console.log("D");



