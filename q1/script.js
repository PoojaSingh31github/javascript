// question 1.1
function fetchUser(callback) {
    setTimeout(() => {
        const user = null; // Should fetch a valid user object
        callback(user); // Bug: Cannot read property 'name'
    }, 1000);
}

fetchUser((name) => console.log(name));


Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()),
    fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json())
])
.then(([todos, photos]) => {
    console.log('Todos:', todos);
    console.log('Photos:', photos);
    const combinedResult = { todos, photos };
    console.log('Combined Result:', combinedResult);
})
.catch(error => {
    console.error('Error fetching data:', error);
});
// question 1.2 and 1.4
// https://vimeo.com/1036976060?share=copy


// question 1.3
const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 resolved", console.log("first")), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 resolved "), 2000));
const p3 = new Promise((_, reject) => setTimeout(() => reject("P3 rejected"), 1500));

Promise.all([p1, p2])
  .then(console.log, "first") 
  .catch(console.error);

Promise.race([p1, p3])
  .then(console.log, "second") 
  .catch(console.error);
