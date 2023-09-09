const coding=["js","ruby","python","cpp","java"];
// coding.forEach( function (value){
//         console.log(value);
// })
// coding.forEach((value)=>{
// console.log(value);
// })
// function printme(item){
//         console.log(item);
// }
// // coding.forEach(printme);
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
const mycode=[
        {
                language:"javascript",
                file:"js"
        },
        {
                language:"java",
                file:"java"
        },
        {
                language:"c++",
                file:"cpp"
        },
]
mycode.forEach((item)=>{
 console.log(item.file);
})