var agora = new Date()
//console.log(agora.getHours())
var hora = agora.getHours()
//var hora = 14
if (hora >= 12 && hora <= 18 ){
    console.log("Boa Tarde")

}else if (hora <= 12 && hora >= 6){
    console.log("Bom Dia!")
}else if(hora >= 0 && hora < 6){
    console.log("Boa Madrugada!")
}else{
    console.log("Boa Noite")
}