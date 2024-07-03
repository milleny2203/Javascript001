function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
//var segundo = data.getSeconds()
msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
if (hora >=0 && hora < 12){
    //bom dia
    img.src = 'manha.png'
    document.body.style.backgroundColor = "#ebe2d6"
}else if (hora >=12 && hora < 18){
    //boa tarde
    img.scr = 'tarde.png'
    document.body.style.backgroundColor = "#fccd76"
}else{
    //boa noite
    img.src = 'noite.png'
    document.body.style.backgroundColor = "#3f759b"
}
}