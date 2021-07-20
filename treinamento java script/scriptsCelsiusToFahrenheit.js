let conversion = function(updatedDegree,unit)
{    
    let newUnit
    if(unit == "C"){
        newUnit = updatedDegree * (9/5) + 32
        console.log(newUnit.toFixed(2)+"°F")
    }else if(unit == "F"){
        newUnit = (updatedDegree - 32) * (5/9)
        console.log(newUnit.toFixed(2)+"°C")
    }else{
      console.log("Unidade de temperatura inválida")
    }
}

//separa a string para transformar em número e identifica a unidade de temperatura
let identifyUnit = function(temperature)
{   
    temperature = temperature.toUpperCase()
    arr = Array.from(temperature)
    lastIndex = arr.length -1
    //degree recebe o valor que está na ultima posição do array, ou seja, a unidade de temperatura
    let signal = arr[lastIndex]
    //retira o símbolo ° e a unidade de temperatura (penúltima e última posição do array)
    arr.splice(lastIndex-1,2)
    //transforma todo o vetor em umas string
    arrTransformString = arr.toString()
    //retira todas as vírgulas
    value = arrTransformString.replace(/,/g,"")
    //trasforma string em número
    value = parseInt(value)
    //chama a função conversionenviando o valor e o grau
    conversion(value, signal)

    ////DICA: EXPRESSÃO REGULAR PARA EXTRAI APENAS NÚMEROS

}

identifyUnit("30°c")

