let inventory = []
let product1 = {
    name : "honda",
    model : 2021,
    cost : 2500,
    qty : 120
}
let product2 = {
    name : "unique",
    model : 2022,
    cost : 1500,
    qty : 10
}
let product3 = {
    name : "Super Star",
    model : 2023,
    cost : 2000,
    qty : 190
}
inventory.push(product1,product2,product3)
console.log(inventory[2].qty);
const product4= {
    name: 'Tablet',
    model: 'iPad Air',
    cost: 599,
    qty: 8
  }
  inventory.push(product4)
  console.log(inventory[3].model);
  
