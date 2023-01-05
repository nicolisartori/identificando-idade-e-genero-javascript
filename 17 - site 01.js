function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert("Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        var img = document.createElement('img') //mesma coisa que ir no html e criar uma tag img com id foto
        img.setAttribute('id', 'foto')

        var genero = ''
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0  && idade < 10){
                //criança
                img.setAttribute('src', 'kidH.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemH.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultoH.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoH.png')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"

            if (idade >= 0  && idade < 10){
                //criança
                img.setAttribute('src', 'kidM.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultaM.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosaM.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Identificamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}