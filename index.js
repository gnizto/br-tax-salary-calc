const inssCalc = require('./taxes/inssCalc');
const irrfCalc = require('./taxes/irrfCalc');

let grossSalary = 3412.74

let inssTax = inssCalc(grossSalary);
let irrfTax = irrfCalc(grossSalary-inssTax)

let taxes = parseFloat((inssTax + irrfTax).toFixed(2))
let liquidSalary = parseFloat((grossSalary - taxes).toFixed(2))

console.log(`Your gross salary: $${grossSalary}`)
console.log(`INSS tax: $${inssTax}`)
console.log(`IRRF tax: $${irrfTax}`)
console.log(`Taxes combined: $${taxes}`)
console.log(`Your liquid salary: $${liquidSalary}`)