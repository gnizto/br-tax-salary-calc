/**
 * Calculate IRRF tax.
 * 
 * @param {salaryBase} This is the salary used to calculate the tax.
 * @return Return the calculated IRRF tax.
 * @customfunction
 */
 const irrfObj = function() {
    const table = [
        {from: 0,       to: 1903.98, percent: 0.0},
        {from: 1903.99, to: 2826.65, percent: 0.075},
        {from: 2826.66, to: 3751.05, percent: 0.150},
        {from: 3751.06, to: 4664.68, percent: 0.225},
        {from: 4664.69, to: Infinity, percent: 0.275}
    ]
    
    const max = Math.max(...table.map(i => i.to))
    const min = Math.min(...table.map(i => i.to))

    return {
        table: table,
        max: max,
        min: min
    }
}

function irrfCalc(salaryBase){
    const irrf = new irrfObj();

    let taxSum = 0
    let salaryReference = 0
    let subtractValue = 0
    let currTax = 0

    irrf.table.forEach( itemRange => {
        // If gross salary is greater than the range maximum (to) use the range maximum 
        // else use gross salary
        salaryReference = salaryBase >= itemRange.to ? itemRange.to : salaryBase
        
        // Get the subtract value minus .01 if the range minimum (from) is not 0
        subtractValue = itemRange.from - (itemRange.from === 0 ? 0 : .01)
        
        // Subtract the value found previous from the salary reference found
        salaryReference = salaryReference - subtractValue
        // If it gets a negative value, use 0 (zero) if not use the result
        salaryReference = salaryReference <= 0 ? 0 : salaryReference

        // Find the tax over the salary reference found
        currTax = salaryReference * itemRange.percent
        // Add current tax to sum
        taxSum+= currTax
    } )

    return parseFloat(taxSum.toFixed(2))
}

module.exports = irrfCalc