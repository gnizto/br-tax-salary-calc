/**
 * Calculate INSS tax.
 * 
 * @param {grossSalary} This is the salary used to calculate the tax.
 * @return Return the calculated INSS tax.
 * @customfunction
 */
 const inssObj = function() {
    const table = [
      {from: 0,       to: 1212.00, percent: 0.075},
      {from: 1212.01, to: 2427.35, percent: 0.090},
      {from: 2427.36, to: 3641.03, percent: 0.120},
      {from: 3641.04, to: 7087.22, percent: 0.140}
    ]
    
    const max = Math.max(...table.map(i => i.to))
    const min = Math.min(...table.map(i => i.to))
  
    return {
      table: table,
      max: max,
      min: min
    }
  }
  
  function inssCalc(grossSalary){
    const inss = new inssObj();
  
    let taxSum = 0
    let salaryReference = 0
    let subtractValue = 0
    let currTax = 0
  
    inss.table.forEach( itemRange => {
      // If gross salary is greater than the range maximum (to) use the range maximum 
      // else use gross salary
      salaryReference = grossSalary >= itemRange.to ? itemRange.to : grossSalary
      
      // Get the subtract value minus .01 if the range minimum (from) is not 0
      subtractValue = itemRange.from - (itemRange.from === 0 ? 0 : .01)
      
      // Subtract the value found previous from the salary reference found
      salaryReference = salaryReference - subtractValue
      // If it gets a negative value, use 0 (zero) if not use the result
      salaryReference = salaryReference <= 0 ? 0 : salaryReference    
      
      // console.log(`From: ${itemRange.from}`)
      // console.log(`To: ${itemRange.to}`)
      // console.log(`Percent: ${itemRange.percent}`)
  
      // console.log(`SalaryReference: ${salaryReference}`)
  
      // Find the tax over the salary reference found
      currTax = salaryReference * itemRange.percent
      // Add current tax to sum
      taxSum+= currTax
  
      // console.log(`CurrentTax: ${currTax}\n`)
  
    })

    return parseFloat(taxSum.toFixed(2))
  }

module.exports = inssCalc