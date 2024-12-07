// question 3.1
const chars = "aabbc";
const freq = chars.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0 ) + 1;
    return acc; // Bug: Initial value missing
}, {});
console.log(freq);


// question 3.2
// https://vimeo.com/1036981209?share=copy
input = [1, 2, 3, 4, 5]
const count = input.reduce((acc, i)=>{
    if (acc[i] %2 != 0) {
        "odd" =  acc[i] +1;
    }else{
        "even"=acc[i] +1
    }
    return acc;
}, {});
console.log(count)