// const mynums=[1,2,3]
// //const mytotal=mynums.reduce(function(acc,curr){
// //         return acc+curr;
// // })
// const mytotal=mynums.reduce((acc,curr)=>acc+curr,0)
// console.log(mytotal);
const shoppingcart=[
        {
                itemname:"jscourse",
                price:2999,
        },
        {
                itemname:"datascienctist",
                price:12999,
        },
        {
                itemname:"dsa",
                price:999,
        }
]
let ans=shoppingcart.reduce((acc,item)=>acc+item.price,0);
console.log(ans);