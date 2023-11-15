function matches(victory, defeat){
    let result = victory - defeat
    return result
}
function rank () {
    let resultRank = matches (120, 20)
    let rank = " "

if (resultRank < 10) {
    rank  = "Ferro"
}
else if(resultRank = 11 && resultRank < 20) 
{
    rank  = "Bronze"
}
else if(resultRank = 21 && resultRank < 51)
{
    rank  =  "Prata"
}
else if (resultRank = 51 && resultRank < 81)
{
    rank  =  "Ouro"
}
else if(resultRank = 81 && resultRank < 91)
{
    rank  =  "Diamante"
}
else if(resultRank =91 && resultRank < 101)
{
    rank  =  "Lendário"
}
else if(resultRank >=101)
{
    rank  =  "Imortal"
}
return ("O Héroi tem um saldo de " + resultRank + " e está no " + rank)
}