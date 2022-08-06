function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'FotoManha.jpg'
        document.body.style.background = "#1CC9F0"
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'FotoTarde.jpg'
        document.body.style.background = "#FA982D"
    } else {
        //boa noite
        img.src = 'FotoNoite.jpg'
        document.body.style.background = "#002559"
    }
}
