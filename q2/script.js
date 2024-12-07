// question 2.1
const nums = [10, 20, 30];
const result = nums.map((n) => n / 2).filter((n) => n > 0); // Bug: Improper math operation
console.log(result.reduce((acc, com) => acc + com , 0));


// question 2.2
// https://vimeo.com/1036978302?share=copy
input =  [1, 2, 3, 4, 5]

const ans = input.filter((i)=>{
    if (i%2==0){
        return i
    }
}).map((i)=>{
    return i*2
}).reduce((acc, com)=>acc+com, 0)
console.log(ans)