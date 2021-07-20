let notas = [-90, 91, 80, 85, 89,70,74,79,60,65,69,-40]

for(let i=0; i< notas.length ; i++)
{
    if(notas[i]<0 || notas[i]>100){
        console.log(notas[i]," NOTA INVÁLIDA!!!")
    }
    else if(notas[i]<=59){
        console.log(notas[i]," = Nota: F")
    }else if(notas[i]<=69){
        console.log(notas[i]," = Nota: D")
    }else if(notas[i]<=79){
        console.log(notas[i]," = Nota: C")
    }else if(notas[i]<=89){
        console.log(notas[i]," = Nota: B")
    }else{
        console.log(notas[i]," = Nota: A")
    }
}




