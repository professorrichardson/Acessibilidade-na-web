document.addEventListener('DOMContentLoaded', function () {

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')   //aula 05
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade') //aula05

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    botaoDeAcessibilidade.addEventListener('click', function (){   //aula05
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');   //aula05
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista') //aula05
       })

})