const user = {id:11,name:'mokbul',job:'software developer',address:'italy'};
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

const shop = {
    name:'alias dokan',
    address:'nurjahan avenue',
    profit: 1500,
    products:['laptop','mobile','pc'],
    isExpensive:true,
}
const shopSignified = JSON.stringify(shop);
console.log(shopSignified);
console.log(shop);
