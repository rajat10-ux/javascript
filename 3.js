// for off
const arr=[1,2,3,4,5];
for (const val of arr) {
        console.log(val);
}
const greet="greetings";
for (const iterator of greet) {
        console.log(iterator);
}
//maps
const map=  new Map();
map.set('IN',"india");
map.set('usa',"ussssaaaarrr");
map.set('fr',"france")
// console.log(map);
for (const [key,value] of map) {
        console.log(key,value);
}
const myobject={
 'game1':"nfs",
 'game2':'spiderman',
}
console.log(myobject);