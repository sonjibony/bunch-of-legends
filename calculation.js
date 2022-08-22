/*-------------------
function for bonus
--------------------*/
function elementValue(elementId){
const element = document.getElementById(elementId);
const elementValue=parseFloat(element.value);
return elementValue;
}

/*-------------------------
calculating player expenses
---------------------------*/
document.getElementById('btn-calculate').addEventListener('click',function(){
   const selectedTotalElement = document.getElementById('selected');
    const selectedTotal = selectedTotalElement.innerText;
    
  
const budgetFieldElement = document.getElementById('budget-field')
    const budgetField = (budgetFieldElement.value)*selectedTotal;
    const expensesFieldElement = document.getElementById('expenses-field');
    expensesFieldElement.innerText = budgetField;
    
    //console.log(budgetField,coachCost,managerCost)
})

/*--------------------------
   calculating total cost
--------------------------*/

document.getElementById('btn-calculate-total').addEventListener('click',function(){
    
    const expensesFieldElement = document.getElementById('expenses-field');
    const expensesField = expensesFieldElement.innerText
  const coachCost= elementValue('coach-field');
  const managerCost= elementValue('manager-field');

  const totalFieldElement = document.getElementById('total-field');
    totalFieldElement.innerText = parseFloat (expensesField)+managerCost+coachCost;
  //console.log(coachCost,managerCost)
})