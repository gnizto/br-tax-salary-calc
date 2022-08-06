/**
 * Calculate salary per month based on hour amount.
 * 
 * @param {salaryPerHour} This is the salary per hour.
 * @param {hoursPerDay} Hours of work each day.
 * @param {daysPerWeek} Number of days of work each week.
 * @return Return the salary per month.
 * @customfunction
*/
function salaryHourToMonth(salaryPerHour, hoursPerDay, daysPerWeek){
  let salaryPerMonth

  salaryPerMonth = (salaryPerHour * hoursPerDay * daysPerWeek * 52) / 12

  return parseFloat(salaryPerMonth.toFixed(2))
}

/**
 * Calculate salary per year based on hour amount.
 * 
 * @param {salaryPerHour} This is the salary per hour.
 * @param {hoursPerDay} Hours of work each day.
 * @param {daysPerWeek} Number of days of work each week.
 * @return Return the salary per year.
 * @customfunction
*/
function salaryHourToYear(salaryPerHour, hoursPerDay, daysPerWeek){
  let salaryPerYear

  salaryPerYear = (salaryPerHour * hoursPerDay * daysPerWeek * 52)

  return parseFloat(salaryPerYear.toFixed(2))
}

/**
 * Calculate salary per hour based on month amount.
 * 
 * @param {salaryPerMonth} This is the salary per month.
 * @param {hoursPerDay} Hours of work each day.
 * @param {daysPerWeek} Number of days of work each week.
 * @return Return the salary per hour.
 * @customfunction
*/
function salaryMonthToHour(salaryPerMonth, hoursPerDay, daysPerWeek){
  let salaryPerHour

  salaryPerHour = (salaryPerMonth * 12) / (hoursPerDay * daysPerWeek * 52)

  return parseFloat(salaryPerHour.toFixed(2))
}

/**
 * Calculate salary per year based on month amount.
 * 
 * @param {salaryPerMonth} This is the salary per month.
 * @return Return the salary per year.
 * @customfunction
*/
function salaryMonthToYear(salaryPerMonth) {
  let salaryPerYear = salaryPerMonth * 12

  return parseFloat(salaryPerYear.toFixed(2))
}

/**
 * Calculate salary per hour based on year amount.
 * 
 * @param {salaryPerYear} This is the salary per year.
 * @param {hoursPerDay} Hours of work each day.
 * @param {daysPerWeek} Number of days of work each week.
 * @return Return the salary per hour.
 * @customfunction
*/
function salaryYearToHour(salaryPerYear, hoursPerDay, daysPerWeek) {
  let salaryPerHour
  let salaryPerMonth = salaryPerYear / 12
  salaryPerHour = salaryMonthToHour(salaryPerMonth, hoursPerDay, daysPerWeek)

  // console.log(`SalaryPerHour: ${salaryPerHour}`)
  return parseFloat(salaryPerHour.toFixed(2))
}

module.exports = { 
  salaryHourToMonth : salaryHourToMonth,
  salaryHourToYear  : salaryHourToYear,
  salaryMonthToHour : salaryMonthToHour,
  salaryMonthToYear : salaryMonthToYear,
  salaryYearToHour  : salaryYearToHour
}
