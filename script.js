function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()


    msg.innerHTML = `Agora são ${hora} horas  e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = './imagens/fotomanha.jpg'
        document.body.style.backgroundColor = "#FFDEAD"
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = './imagens/fototarde.jpg'
        document.body.style.backgroundColor = "#FF8C00"
    } else {
        //BOA NOITE!
        img.src = './imagens/fotonoite.jpg'
        document.body.style.backgroundColor = "#1C1C1C"
    }
}