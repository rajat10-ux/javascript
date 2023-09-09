// //const coding=["js","c++","java","javascript","ruby"]
// // const values=coding.forEach((item)=>{
// //         return item
// // })
// // console.log(values);
// const arr=[1,2,3,4,5,6,7,8,9,10];
// // let newnum=arr.filter((num)=>{
// //         return num>4;
// // })
// const newnum=[];
// newnum.forEach((num)=>{
//         if(num>4){
//                 newnum.push(num);
//         }
// })
// console.log(newnum);
// console.log(newnum);
const books=[
        {
        title:"bookone",
        genre:"fiction",
        publish:"1981"
        },
        {   title:"booktwo",
        genre:"fiction",
        publish:"2003"
       },
       {   title:"bookthree",
       genre:"drama",
       publish:"2007"
      },
      {   title:"bookfour",
      genre:"non-fiction",
      publish:"2001"
     }
]
const userbooks=books.filter((bk)=>{
      return   bk.genre=="fiction";
})
const user=books.filter((value)=>{
        return value.publish>2000 &&  value.genre==="fiction";
})
console.log(userbooks);
console.log(user);