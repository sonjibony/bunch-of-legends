/*-------------------
function for bonus
--------------------*/
function elementValue(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = parseFloat(element.value);
  return elementValue;
}

/*-------------------------
calculating player expenses
---------------------------*/
document.getElementById("btn-calculate").addEventListener("click", function () {
  const selectedTotalElement = document.getElementById("selected");
  const selectedTotal = selectedTotalElement.innerText;
  const budgetFieldElement = document.getElementById("budget-field");
  //budget calculation
  const budgetField = budgetFieldElement.value * selectedTotal;
  const expensesFieldElement = document.getElementById("expenses-field");
  expensesFieldElement.innerText = budgetField;
});

/*--------------------------
   calculating total cost
--------------------------*/
document
  .getElementById("btn-calculate-total")
  .addEventListener("click", function () {
    const expensesFieldElement = document.getElementById("expenses-field");
    const expensesField = expensesFieldElement.innerText;
    // using bonus function
    const coachCost = elementValue("coach-field");
    const managerCost = elementValue("manager-field");
    // total cost calculation
    const totalFieldElement = document.getElementById("total-field");
    totalFieldElement.innerText =
      parseFloat(expensesField) + managerCost + coachCost;
  });
