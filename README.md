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



Até aqui, já fizemos muitas alterações em nossa página. Desenvolvemos o menu de acessibilidade, inserindo dois botões que aumentam e diminuem o tamanho das fontes. Porém, lembrando tudo o que vimos até agora, ainda falta um ponto muito importante a ser implementado: o  **contraste das cores**  dos elementos da página.

As cores iniciais que escolhemos estão muito bonitas e são legíveis, mas isso não significa que todos conseguirão ler o que está escrito devido ao contraste. Por isso, podemos implementar uma solução para esse problema, de forma que, com apenas um clique, seja possível aumentar o contraste da página.

Como podemos fazer isso? Vamos criar mais um botão no  **menu de acessibilidade**, abaixo dos botões  `A+`  e  `A-`, oferecendo a opção de contraste. Vamos lá?

##  Criando o botão de contraste

No arquivo  `index.html`  no VSCode, na div  `acessibilidade`, vamos copiar a tag  `<button>`  do botão  `A-`  e colocá-la logo abaixo.

No nosso site, até o momento, já estamos utilizando alguns ícones de classe no  _Bootstrap_, como os ícones do Instagram, WhatsApp e TikTok. Podemos usar esse mesmo tipo de ícone no botão de alto contraste.

Como fazemos para inserir esse ícone? Entre as tags de abertura e fechamento do  `button`, incluímos uma nova tag, a tag  `<i>`, e usamos nela a  `class`  do ícone selecionado. Nesse caso, será o ícone  `bi bi-shadow`. Por fim, fechamos a tag  `</i>`.

> index.html

```xml
<div id="acessibilidade" class="menu-acessibilidade"> 
        <button id="botao-acessibilidade" class="btn btn-primary fw-bold rotacao-botao" aria-expanded="false">acessibilidade</button>
        <div id="opcoes-acessibilidade" class="opcoes-acessibilidade apresenta-lista">
                <button id="aumentar-fonte" class="btn btn-primary fw-bold" aria-label="Aumentar o tamanho da fonte">A+</button>
                <button id="diminuir-fonte" class="btn btn-primary fw-bold" aria-label="diminuir o tamanho da fonte">A-</button>
                <button id="alterna-contraste" class="btn btn-primary fw-bold" aria-label="Alterna o contraste de cores"> <i class="bi bi-shadows"></i></button>
        </div>
</div>

```

Nesse ponto, podemos salvar as alterações e verificar no navegador se o botão com o ícone é mostrado. Clicando no menu acessibilidade, já podemos ver que o botão de contraste é um círculo metade branco e metade preto.

##  Aumentando o contraste

Como a configuração necessária no HTML já foi feita, vamos agora trabalhar as alterações no CSS.

No seletor  `:root`, após o  `laranja-claro`, vamos criar uma nova variável para aplicar a cor preta no fundo. Para isso, criamos o  `alto-contraste-fundo`  com o código hexadecimal  `#000000`.

Para as fontes de textos, vamos utilizar a cor branca. Por isso, criamos a variável  `alto-contraste-texto`  com o código  `#ffffff`. Agora, para a configuração dos links, vamos utilizar a cor amarela. Então, para isso criamos  `alto-contraste-texto`  com o código  `#ffd700`.

> style.css

```css
:root {
    --laranja-claro: #FF862A;
    --alto-contraste-fundo: #000000;
    --alto-contraste-texto: #ffffff;
    --alto-contraste-link: #ffd700;
}

```

No arquivo de estilo, iremos trabalhar com as classes.

Primeiro, iremos chamar o seletor  `.alto-contraste`, acrescentamos nele a propriedade  `background-color`, que é responsável pela cor do fundo. Seu valor será a variável  `var(--alto-contraste-fundo)`.

Na propriedade  `color`, que é responsável por definir a cord dos elementos, terá a  `var(--alto-contraste-texto)`.

```css
.alto-contraste{
    background-color: var(--alto-contraste-fundo);
    color: var(--alto-contraste-texto);
}

```

Vamos fazer as configurações das demais sessões, onde queremos que apareça o alto contraste. No nosso site serão o cabeçalho, o rodapé e o formulário, o que signifca  `.alto-contraste header`,  `.alto-contraste footer`  e  `alto-contraste .formulario`.

Para isso, vamos aplicar entre chaves a cor de fundo a todos eles através do  `background-color`  como  `var(--alto-contraste-fundo)`. A cord também será o  `var(--alto-contraste-texto)`.

```css
.alto-contraste header,
.alto-contraste footer,
.alto-contraste .formulario{
    background-color: var(--alto-contraste-fundo);
    color: var(--alto-contraste-texto);
}

```

Para que todos os elementos da nossa página sejam configurados, devemos continuar aplicando as classes nos outros elementos. Para itens do menu, especificamos  `.alto-constraste .nav-link`. Sua propriedade  `color`  será  `var(--alto-contraste-link)`.

```css
.alto-contraste .nav-link{
    color: var(--alto-contraste-link);
}

```

Além das configurações já feitas, vamos trabalhar o botão de início, o botão formulário e também com o  `btn-primary`, a classe do  _Bootstrap_  que iremos modificar. Para isso, escrevemos  `.alto-contraste .botao-inicio, .alto-contraste .formulario button, .alto-contraste .btn-primary`.

Porém, dessa vez, colocamos o  `background-color`  como  `alto-contraste-link`  e o  `color`  como  `alto-contraste-fundo`.

```css
.alto-contraste .botao-inicio,
.alto-contraste .formulario button,
.alto-contraste .btn-primary{
    background-color: var(--alto-contraste-link);
    color: var(--alto-contraste-fundo)
}

```

Para que a imagem de fundo não apareça na parte de boas vindas quando a pessoa clicar botão de contraste, vamos retirar o  `background`.

Nesse caso, vamos chamar o  `.alto-contraste #tropicalia`  para chamar a  `section`  cujo  `id`  é igual a  `tropicalia`.

Nessa  `section`, vamos colocar um  `background: none`, ou seja, queremos que ele não apareça ao clicar no botão de contraste.

```css
.alto-contraste #tropicalia {
    background: none;
}

```

Outro configuração que precisamos fazer é no alto contraste de fundo da galeria. Para isso, chamaremos a classe  `.alto-contraste`  e a seção com id  `#galeria`. O  `background-color`  terá a cor preta e deverá ser armazenado na  `var(--alto-contraste-fundo)`.

```css
.alto-contraste #galeria {
    background-color: var(--alto-contraste-fundo);
}

```

Similar ao que foi feito na  `section`  com id  `tropicalia`, vamos retirar o  `background`  da classe  `.alto-contraste .fundo-galeria`.

```css
.alto-contraste .fundo-galeria {
    background: none;
}

```

Agora, devemos aplicar essa classe  `fundo-galeria`  no arquivo HTML. Na  `section`  cujo`id`  é igual a  `galeria`, após o  `<h2>`, temos uma  `<div>`  que contém algumas classes do  _Bootstrap_. Além delas, vamos inserir também a classe  `fundo-galeria`.

```xml
<section id="galeria" tabindex="0" aria-label="Seção de galeria de imagens">
        <h2 class="text-center pt-5">Galeria</h2>
        <div class="container p-3 mt-3 fundo-galeria">

            <!-- Código omitido --> 

         </div>
</section>

```

> _Atenção:_  No vídeo, a instrutora adiciona a classe  `fundo-galeria`  na  `<div>`  incorreta. Preste atenção, pois você deve adicionar a classe na  `<div>`  localizada dentro da seção de  `galeria`, assim como fizemos acima na transcrição.

## Implementando a ação de mudar o contraste

Se você salvar as alterações feitas no HTML e CSS e testar no navegador, verá que com o que foi feito até agora, o botão de contraste aparece corretamente, em uma lista com os demais botões, porém, ao clicar nele, nenhuma mudança é refletida no nosso site.

Como vamos fazer para que essas alterações sejam aplicadas ao site quando o usuário clicar no botão de  `contraste`? Para isso, vamos ter que novamente, configurar o  `JavaScript`.

Para isso, vamos abrir o arquivo  `script.js`. Abaixo da  `const diminuiFonteBotao`, vamos criar uma  `const`  chamada  `alternaContraste`.

Essa constante vai pegar o  `document.getElementById()`  e chamar o botão cujo id é  `alterna-contraste`.

> script.js

```javascript
const alternaContraste = document.getElementById('alterna-contraste')

```

Após isso, vamos precisar trabalhar com o  `classList.toggle()`. Abaixo da lógica  `diminuiFonteBotao.addEventListener()`, vamos chamar  `alternaContraste.addEventListener()`, que vai ouvir o clique do botão. Para isso, basta passar o  `click`, entre aspas, como primeiro parâmetro.

Logo após, como segundo parâmetro, passamos uma  `function`  e abrimos parênteses e chaves. Dentro dessa função, vamos no  `documento.body.classList.toggle()`, que é quem vai fazer a dinâmica de modificar as classe. Chamamos o  `alto-contraste`  entre aspas simples.

```javascript
alternaContraste.addEventListener('click', function(){
         document.body.classList.toggle('alto-contraste')
 })

```

# 07

o momento, de acordo com nosso checklist, já implementamos alguns recursos básicos de acessibilidade. Será que podemos inserir ainda mais? Claro que sim! Vamos lá?

##  Inserindo Recursos ARIA

Para proporcionar ainda mais acessibilidade ao nosso site, agora podemos trabalhar com atributos específicos, chamados de  **Atributos ARIA**.

A  **ARIA**  (Accessible Rich Internet Applications) é um conjunto de especificações técnicas que visa permitir aos desenvolvedores implementar conteúdos cada vez mais acessíveis na web.

Esses atributos são essenciais para indicar aos leitores de tela e outras tecnologias assistivas a função de cada elemento interativo na página, proporcionando uma experiência mais inclusiva.

Para começar a implementá-los, vamos abrir no  **VS Code**  o arquivo  `index.html`. Nesse arquivo, temos os botões  `A+`  e  `A-`, que sabemos que aumentam e diminuem a fonte. Contudo, podemos melhorar a descrição desses botões.

Para que os leitores de tela possam identificar a função de cada botão, utilizamos o recurso  `aria-label`. Adicionamos esse atributo ao botão de aumentar a fonte, logo após o  `fw-bold`.

Esse novo atributo funciona como uma etiqueta para a informação, informando qual a responsabilidade do elemento interativo no site. Neste caso, o botão é responsável por  `Aumentar o tamanho da fonte`.

Assim como fizemos com o botão de aumentar, podemos usar esse mesmo recurso no botão de diminuir o tamanho da fonte, mudando o texto para  `Diminuir o tamanho da fonte`. O código fica da seguinte forma:

> `index.html`

```xml
<div id="acessibilidade" class="menu-acessibilidade">
    <button id="botao-acessibilidade" class="btn btn-primary fw-bold
    rotacao-botao">acessibilidade</button>
    <div id="opcoes-acessibilidade" class="opcoes-acessibilidade apresenta-lista">
        <button id="aumentar-fonte" class="btn btn-primary fw-bold" aria-label="Aumentar
        o tamanho da fonte">A+</button>
        <button id="diminuir-fonte" class="btn btn-primary fw-bold" aria-label="Diminuir
        o tamanho da fonte">A-</button>
        <button id="alterna-contraste" class="btn btn-primary fw-bold"> <i class="bi
        bi-shadows"></i></button>
    </div>
</div>

```

Com essa nova implementação, quando o usuário estiver utilizando um leitor de tela, ele saberá exatamente a função desses dois botões.

##  Melhorando o Botão de Acessibilidade

Outro ponto que podemos melhorar no nosso projeto é indicar a posição atual do menu de acessibilidade (se ele está aberto ou fechado).

Atualmente, essa informação é visual, mas é importante que esteja disponível também no código, acessível para tecnologias assistivas. Vamos implementar!

O botão começa fechado, então, podemos informar isso no site. Na tag  `botao-acessibilidade`, adicionamos o atributo  `aria-expanded`  com o valor inicial  `false`.

Assim, quando o usuário estiver usando o leitor de tela, ele saberá que o menu está fechado.

> `index.html`

```bash
<div id="acessibilidade" class="menu-acessibilidade">
    <button id="botao-acessibilidade" class="btn btn-primary fw-bold rotacao-botao" aria-expanded="false">acessibilidade</button>
</div>

```

Para mudar o valor de  `aria-expanded`, precisamos ajustar o JavaScript. No arquivo  `script.js`, criamos a variável  `const botaoSelecionado`  dentro do botão de acessibilidade.

Essa variável recebe o valor de  `botaoAcessibilidade.getAttribute()`, onde passamos  `’aria-expanded’`  dentro dos parênteses e  `=== ‘true’`  fora.

> `script.js`

```csharp
const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';

```

Essa linha verifica o valor do  `aria-expanded`  e, caso o botão seja selecionado, queremos que esse valor seja modificado.

Na linha seguinte, usamos  `botaoDeAcessibilidade.setAttribute()`  para atribuir um novo valor ao  `’aria-expanded’`.

Após a vírgula, colocamos  `!botaoSelecionado`, que alterna o valor de  `true`  para  `false`  e vice-versa, conforme necessário.

```javascript
const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
```
# 08
Oi, estudante! Até agora, nosso site está bem interessante e cheio de recursos de acessibilidade. Mas precisamos considerar outra situação: será que pessoas que não conseguem usar o mouse conseguem navegar corretamente pelo nosso site?

Faça o teste você mesmo: abra o site no navegador e tente acessá-lo sem o mouse. Como? Usando apenas o  **teclado**!

##  Navegação no Site por Teclado

Enquanto navegava pelo nosso site sem usar o mouse, você percebeu algum problema? Ao pressionar a tecla “Tab” no menu superior direito, notamos que o menu “Início” fica contornado.

Conforme vamos pressionando a tecla “Tab” mais vezes, o contorno vai passando pela página, na seguinte ordem: “Início” > “Galeria” > “Contato” > botão de “Acessibilidade” > botão “Quero conhecer”. Depois disso, ele vai direto para o primeiro campo do formulário.

Porém, quando desenvolvemos este site, o objetivo era que a pessoa usuária tivesse acesso às informações de “O que foi a Tropicália” e à “Galeria”. Mas, usando apenas o teclado, todo esse conteúdo é pulado.

E agora? Como fazemos para focar nessas duas seções? Vamos analisar nosso código.

##  Implementando a Navegação por Teclado

No arquivo  `index.html`, para que um elemento específico seja focado, podemos inserir um novo atributo:  `tabindex`.

No arquivo da instrutora, na linha 54, há a seção  `<section id="tropicalia">`. Antes do  `aria-label`, vamos inserir  `tabindex="0"`.

> `index.html`

```python
<section id="tropicalia" class="my-5 pt-6 secao-tropicalia" tabindex="0" aria-label="Seção explicativa sobre a Tropicália">

```

Mas por que adicionamos o valor zero? Esse valor indica que o  **foco segue a sequência do nosso código**. Assim, ao pressionarmos a tecla “Tab”, o foco seguirá a ordem estrutural do código.

Queremos que o foco também vá para a galeria. Para isso, basta copiar  `tabindex="0"`  e adicionar à seção  `<section id="galeria">`, logo após o atributo ID.

> `index.html`

```bash
<section id="galeria" tabindex="0" aria-label="Seção de galeria de imagens">

```

##  Testando as Alterações

Agora que adicionamos o atributo  `tabindex="0"`, podemos testar a navegação da página para ver se está funcionando corretamente. Abra a página e atualize.

Perceba que, ao pressionar a tecla “Tab”, a navegação começa pelo “Início”, como já fazia antes. Pressionando novamente, agora o foco segue: "Início" > "Galeria" > "Contato" > botão "Acessibilidade" > botão "Quero conhecer".

Ao pressionar mais uma vez, o foco vai para a seção “O que foi a Tropicália”, com um contorno ao redor da seção para indicar o foco. Legal, não é?

Pressionando “Tab” novamente, o foco agora vai para a seção “Galeria”, também com o contorno ao redor. Ao pressionar “Tab” mais uma vez, o foco finalmente vai para o primeiro campo do formulário. Isso significa que nossa implementação funcionou!

# 09

Olá, estudante! Ao observar nosso projeto no estado atual, podemos concluir que ele já está muito bonito e com muitos recursos de acessibilidade. Porém, ainda podemos melhorar sua apresentação.

Quando você navega pela web, já se deparou com aqueles sites super bonitos, com animações incríveis, que prendem nossa atenção? O que será que eles utilizam para nos manter interessados na tela?

Bom, existem vários elementos que podem causar esse efeito, e um deles são as animações que aparecem assim que a página carrega. Esses elementos tornam o site mais dinâmico e interativo. Vamos adicionar essas animações ao nosso projeto também?

Para isso, podemos fazer de duas maneiras: usando CSS, JavaScript e HTML puros, o que seria bastante trabalhoso, ou podemos utilizar uma biblioteca pronta que facilita todo esse processo para nós. Vamos escolher usar a biblioteca!

##  Instalando a biblioteca ScrollReveal

A biblioteca que escolhemos foi a ScrollReveal. O conteúdo dela pode ser acessado através do site  [scrollrevealjs.org](https://scrollrevealjs.org/). O efeito que ela adiciona faz com que os elementos apareçam de forma suave, conferindo um toque mais moderno ao nosso projeto.

Audiodescrição: O efeito adicionado pela biblioteca ScrollReveal ocorre quando a tela é rolada para baixo, fazendo com que blocos retangulares coloridos surjam de forma suave.

Para entender como usar essa biblioteca, podemos traduzir o site ScrollReveal para português e acessar a seção “Guia” para compreendermos melhor seu funcionamento.

Na seção “Instalação”, é possível ver que há duas formas: via NPM, que exige salvar a biblioteca no computador, ou via CDN (Rede de Distribuição de Conteúdo), sendo essa a opção recomendada.

Vamos utilizar a forma mais simples, através do CDN. Assim, basta inserir o link disponibilizado, e todos os recursos da biblioteca serão incluídos de forma muito prática.

Neste ponto, é importante prestar atenção a um detalhe: alguma vez, ao navegar na internet, você notou que alguns elementos não carregaram corretamente ou demoraram a aparecer?

Isso pode ocorrer devido à conexão com a internet ou a problemas com o CDN (Rede de Distribuição). Para evitar que isso ocorra, precisamos garantir que estamos usando sempre as mesmas CDNs para todas as bibliotecas da nossa página.

Vamos olhar nosso projeto, na página HTML. Estamos usando o Bootstrap, que possui uma CDN própria. Observe que o ScrollReveal usa uma CDN diferente, o que pode causar problemas no nosso projeto. Por isso, é essencial padronizar o uso de CDNs.

##  Configurando o CDN do ScrollReveal

Para otimizar a nossa página, vamos utilizar o  `cdnjs.cloudflare`, que irá melhorar o desempenho dos recursos da nossa página.

Para acessar o CDN do  `cdnjs`, vamos acessar a página  [cdnjs.com](https://cdnjs.com/), uma plataforma de código aberto (Open Source). Vamos traduzir para o português, na página inicial vamos pesquisar por “ScrollReveal.js”. Copie o link que aparece.

```bash
https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.js

```

No final da página HTML do nosso projeto, adicionamos a tag de script e colocamos os link copiado com o endereço do CDN do ScrollReveal como a fonte.

```xml
<script src="https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.js"></script>

```

Agora sim, todos os nossos CDNs estão padronizados com o  `cdnjs.cloudflare`.

##  Aplicando o ScrollReveal ao código

Voltando a página do ScrollReveal, vamos entender como podemos usá-lo. Na seção “Customização”, nós vemos como podemos utilizar essa biblioteca. Ao descer um pouco mais a página, encontramos o campo “Revelar opções”.

Nessa seção, vamos como podemos chamar o ScrollReveal e o método  `.reveal()`. Esse método tem dois parâmetros:  `target`  (alvo) e  `options`  (opções), esses métodos se referem a como queremos que as informações apareçam na tela.

Veja no exemplo mais abaixo na página do ScrollReveal,  `ScrollReveal().reveal('.tagline', { delay: 500 });`, onde  `delay`  significa o tempo de espera para que aconteça a animação. Vamos copiar essa linha de código de adicioná-la ao nosso arquivo  `script.js`.

> **Lembrete:**  Essa é uma biblioteca JavaScript, então todo o código deve ser integrado ao seu script JavaScript.

##  Implementando animações nas seções

Vamos colar a linha de código abaixo no nosso  `script.js`, e alterá-la para que funcione no nosso projeto. Devemos substituir o  `.tagline`  por  `#inicio`. Vamos manter o mesmo  _delay_  e ver o que essa mudança vai fazer na nossa página

```scss
ScrollReveal().reveal('#inicio', { delay: 500 });

```

Olhando a nossa página no navegador, vemos que a  _section_  de início aparece suavemente, e isso se repete sempre que carregamos a página. Vamos aplicar o mesmo efeito às outras  _sections_!

Voltando ao VS Code, no arquivo  `script.js`, vamos copiar a linha de código que inserimos para seção de início e colocar uma nova para cada seção do nosso projeto. Olhando para o arquivo HTML, a instrutora tem as seções  `#inicio`,  `#tropicali`,  `#galeria`  e  `#contato`.

```scss
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });
```

# 10
Olá estudante! Durante toda nossa jornada, desenvolvemos um site que estava pré-pronto utilizando HTML e CSS. A partir desses arquivos, refatoramos o site e inserimos  **recursos de acessibilidade**.

Vamos agora pensar na seguinte possibilidade: no futuro, depois de novos cursos e aprendizados, iremos precisar fazer uma nova refatoração, talvez aumentar o site inserindo novas seções e novos recursos.

Pensando nisso, como podemos deixar o nosso projeto atual bem  _organizado_  e com  _informações_  sobre o que fizemos, para facilitar o nosso trabalho nessa nova refatoração?

Vamos aprender!

##  Criando arquivo de documentação

Vamos abrir o VS Code e criar um novo arquivo na raiz do nosso projeto. Chamaremos esse arquivo de  `README.md`. Esse formato novo o  `.md`  faz referência à linguagem de marcação  _**Markdown**_, com ela, nós podemos descrever informações sobre o nosso projeto.

No  _Markdown_, podemos criar títulos e subtítulos utilizando  `#`  (conhecida como cerquilha, hashtag, e como a nossa instrutora chama  _tralha_).

Utilizando  `#`  vamos inserir o título do nosso projeto em texto normal, no projeto da instrutora o título foi “Site acessível sobre Tropicália”. O código dela foi  `# Site acessível sobre Tropicália`.

Logo após o título, vamos inseir a  **descrição**  do nosso projeto, para isso, vamos criar um subtítulo, para isso, vamos colocar duas  `##`  antes dele, o código deve ficar da seguinte forma:  `## Sobre`.

O que foi feito durante todo o projeto? Construímos um site com diversos recursos de acessibilidade. Logo, essa descrição poderia ser:  `Refatoração de um site implementando recursos de acessibilidade no HTML, CSS e JS`.

Essa descrição feita pela instrutora é apenas um exemplo, podemos inserir uma mais detalhada, pois, quanto mais detalhes, mais fácil será o nosso trabalho ao voltar nesse projeto no futuro.

Logo após a seção  `#Sobre`  podemos inserir uma nova seção mencionando agora os  **recursos de acessibilidade**  que construímos. Logo, o título dessa seção pode ser  `## Recursos de acessibilidade`.

Para fazer uma lista com diversos itens utilizando o  _Markdown_  podemos adicionar um  `-`  antes de cada item. No projeto da instrutora, os itens foram: Atributos aria, Alt (texto alternativo), tab-index e menus de acessibilidade.

> **Desafio:**  Insira mais detalhes sobre os recursos de acessibilidade que implementamos no nosso site!

Outra informação que podemos descrever são as  **tecnologias utilizadas**  em nosso projeto. Para isso, vamos inserir mais uma seção, a instrutora utilizou o subtítulo  `## Tecnologias utilizadas`.

Você consegue listar quais foram as tecnologias que utilizamos no desenvolvimento do nosso projeto? Nós podemos listar Bootstrap, ScrollReveal.js, HTML, CSS e JavaScript. Todos esses nos ajudaram a deixar nosso site bem dinâmico e com a aparência que ele tem agora. O arquivo  `README.md`  da instrutora ficou da seguinte forma:

> `README.md`

```markdown
# Site acessível sobre Tropicália
## Sobre
Refatoração de um site implementando recursos de acessibilidade no HTML, CSS e JS.
## Recursos de acessibilidade
- Atributos aria
- Alt
- Tab-index
- Menu de acessibilidade
## Tecnologias utilizadas
- Bootstrap
- ScrollReveal.js
- HTML
- CSS
- JS

```

