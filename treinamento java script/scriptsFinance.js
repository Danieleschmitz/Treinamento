//objeto com entradas e saidas das finanças
let finance = {

    salary: [1000, 1500],
    expenses:[100, 400]
}
//função que calcula o total de entrada, de saída e o saldo final"
const calculateBalance = function()
{
    let totalSalary = 0
    let totalExpenses = 0
    let balance = 0

    for(let i=0; i<finance.salary.length; i++){
        totalSalary += finance.salary[i]
    }

    for(let i=0; i<finance.expenses.length; i++){
        totalExpenses += finance.expenses[i]
    }

    balance=totalSalary-totalExpenses

    console.log("Salário total: R$"+totalSalary) 
    console.log("Dispesa total: R$"+totalExpenses)
    console.log("O saldo final é: R$"+balance) 

    //verifica a situação do saldo
    if(balance>0){
        console.log("Saldo Positivo :D")
    }else if(balance==0){
        console.log("Esse mês foi por pouco hein...")
    }else{
        console.log("Saldo negativo :(")
    }
}
 
calculateBalance()