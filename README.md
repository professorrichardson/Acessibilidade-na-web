No nosso site, até o momento, já temos o nosso botão para aumentar e diminuir o tamanho da fonte funcionando. Mas será que apenas ter dois botões, um com o sinal de mais e outro com o sinal de menos, é o suficiente para indicar que nosso site tem acessibilidade? Acho que não!

Para que qualquer pessoa que acesse a nossa página entenda que temos opções de acessibilidade no nosso site, podemos evidenciar que nossos botões fazem essas mudanças colocando-os dentro de um  **menu de acessibilidade!**

Vamos começar.

## [00:36] Criação do menu de acessibilidade

No nosso código HTML, vamos inserir dentro da  `div id=”acessibilidade”`  e antes dos botões  `A+`  e  `A-`, um novo botão com a tag  `button`. Esse novo botão irá se chamar acessibilidade e servirá para abrir o  **menu de acessibilidade.**

Nesse novo botão, para manter a padronização com os outros botões já inseridos, vamos inserir nele também as classes dos outros botões  `A+`  e  `A-`  , sendo essas classes  `btn btn-primary fw-bold`. O seu código deve ficar como o do exemplo abaixo.

> index.html

```bash
<button id="botao-acessibilidade" class="btn btn-primary fw-bold">acessibilidade</button>

```

Agora já temos o botão de acessibilidade no nosso menu de acessibilidade no canto superior direito da página inicial do nosso site. Assim como os botões  `A+`  e  `A-`, ele tem o fundo azul e as letras brancas.

Para que o nosso menu envolva todos os botões, vamos colocar as nossas opções em uma  `div`. Para isso, vamos criar uma  `div`  e fechá-la abaixo dos botões  `A+`  e  `A-`. Podemos definir o  `id`  dessa  `div`  como  `”opcoes-acessibilidade”`.

```bash
 <div id="acessibilidade">
  <button id="botao-acessibilidade" class="btn btn-primary fw-bold">acessibilidade</button>
  <div id="opcoes-acessibilidade">
    <button id="aumentar-fonte" class="btn btn-primary fw-bold">A+</button>
    <button id="diminuir-fonte" class="btn btn-primary fw-bold">A-</button>
  </div>
</div>

```

## [01:48] Customizando o menu de acessibilidade HTML

No quesito visual, para que o nosso menu fique mais organizado, queremos que o botão de acessibilidade fique colado à  **direita**  da tela, na posição  **vertical**. De forma que, ao clicarmos nele, ele seja exibido na  **horizontal**.

Além de aparecer na horizontal, queremos também que os botões  `A+`  e  `A-`  sejam apresentados em uma lista, onde o usuário pode escolher a opção que quer utilizar como exibição na página. Vamos então trabalhar nessa customização.

Na  `div`  com  `id=acessibilidade`, vamos chamar uma nova classe, chamada  `menu-acessibilidade`. No botão que queremos  **rotacionar**, vamos criar mais uma classe, chamada  `rotacao-botao`.

Para conseguirmos estilizar as nossas  **opções**, vamos criar a classe  `opcoes-acessibilidade`  e uma outra classe que irá apresentar os nossos botões em uma  **lista**, chamada de  `apresenta-lista`.

```bash
<div id="acessibilidade" class="menu-acessibilidade">
  <button id="botao-acessibilidade" class="btn btn-primary fw-bold rotacao-botao">acessibilidade</button>
  <div id="opcoes-acessibilidade" class="opcoes-acessibilidade apresenta-lista">
    <button id="aumentar-fonte" class="btn btn-primary fw-bold">A+</button>
    <button id="diminuir-fonte" class="btn btn-primary fw-bold">A-</button>
  </div>
</div>

```

## [02:58] Customizando o menu de acessibilidade CSS

Nessa parte, vamos agora aplicar a customização no CSS. Com o arquivo do CSS aberto, vamos chamar a nossa classe  `.menu-acessibilidade`. Nela, vamos posicionar o nosso botão com a propriedade  `position: fixed`  para fixar a posição do nosso menu.

Depois, vamos adicionar a configuração  `top: 2rem`  e  `right: 20px`  para que fique à direita. Para que o nosso menu seja apresentado acima de todos os outros elementos da página enquanto rolamos a tela para baixo, vamos inserir a configuração  `z-index: 1000`.

> styles.css

```css
.menu-acessibilidade{
    position: fixed;
    top:2rem;
    right:20px;
    z-index: 1000;
}

```

Para aplicar a rotação no nosso botão, vamos configurar a classe  `.rotacao-botao`. Nela, vamos aplicar o  `transform: rotate(-90deg)`, que significa rotação em 90 graus, e o  `transform-origin: right center`  (para rotacionar da direita para o centro).

```css
   .rotacao-botao{ 
      transform: rotate(-90deg);
      transform-origin: right center;
}

```

Nesse ponto, o nosso botão já está posicionado como queremos, à direita da página e na posição vertical.

Vamos agora trabalhar nas opções de acessibilidade, selecionando a classe  `.opcoes-acessibilidade`. Vamos aplicar  `margin-top: 10px`,  `display: flex`  e, em seguida, a direção do flex,  `flex-direction: column`.

```css
.opcoes-acessibilidade{
    margin-top:10px;
    display: flex;
    flex-direction: column;
}

```

Agora as opções estão configuradas como queríamos. Ao clicar no botão acessibilidade, os demais botões são mostrados em formato de lista.

Para que os botões  `A+`  e  `A-`  tenham uma margem entre eles, para não ficarem colados um no outro, vamos selecionar o botão das opções com o  `.opcoes-acessibilidade button`  e adicionar  `margin-bottom: 5px`.

```css
.opcoes-acessibilidade button{
    margin-bottom: 5px;
}

```

Nesse ponto, os botões estão corretamente posicionados e com o estilo visual da forma que queremos, porém, se clicarmos no botão de acessibilidade , ele não executa a ação de exibir os botões  `A+`  e  `A-`. Para isso, precisamos agora configurar no  **JavaScript**.

## [06:10] Customizando o menu de acessibilidade JavaScript

Agora, dentro do  **VSCode**, vamos abrir o arquivo  `script.js`. Dentro da nossa classe principal  `document.addEventListener('DOMContentLoaded', function(){}`  , vamos abrir um espaço no início para adicionar essa funcionalidade, focando na configuração do botão de acessibilidade.

Vamos então criar a variável  `const botaoDeAcessibilidade`, que receberá o método  `document.getElementById()`, passando para ele o ID  `’botao-acessibilidade’`. Após esses passos, vamos criar uma nova constante para as nossas opções, chamada  `opcoesDeAcessibilidade`, que receberá  `document.getElementById(‘opcoes-acessibilidade’)`.

> script.js

```javascript
const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

```

Para que a função funcione, precisamos fazer com que ela escute o clique do botão. Para isso, vamos chamar o  `botaoDeAcessibilidade`  e adicionar o  `addEventListener(‘click’, function() {})`. Nessa função, vamos chamar o  `botaoDeAcessibilidade.classList.toggle('rotacao-botao')`.

O  `classList.toggle`  vai adicionar ou remover uma classe. Se a classe já existe, ele remove; se não existe, ele inclui!

Para finalizar, vamos chamar as  `opcoesDeAcessibilidade`  e aplicar nelas  `.classList.toggle(‘apresenta-lista’)`.

```javascript
botaoDeAcessibilidade.addEventListener('click', function (){
 botaoDeAcessibilidade.classList.toggle('rotacao-botao');
 opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
})

```

Após finalizar a última configuração, vamos salvar as configurações feitas no  `script.js`  e verificar no navegador se funcionou.

Agora, quando clicamos no botão de acessibilidade, que está na vertical, ele fica na horizontal e exibe os demais botões  `A+`  e  `A-`  abaixo dele em formato de lista, como mostrado abaixo.

![alt-text:A imagem mostra captura de tela da seção de uma interface de site com um fundo branco. No canto direito, há um botão vertical azul com o texto "acessibilidade" em branco, escrito na vertical e centralizado. Esse botão indica a funcionalidade para facilitar o acesso a opções de acessibilidade do site.](http://cdn3.gnarususercontent.com.br/3970-acessibilidade/imagens-atividades/aula05-botao_acessibilidade.gif)


# Fim aula 05
