const mynums=[1,2,3,4,5,6,7,8,9,10]
// const ans=mynums.map((value)=>{
//         return value+10;
// })
//console.log(ans);
const ans=mynums
                                 .map((nums)=>nums*10)
                                 .map((nums)=>nums+1)
                                 .filter((nums)=>nums>=40)
console.log(ans);