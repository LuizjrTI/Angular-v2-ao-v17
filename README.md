# Angular-v2-ao-v17

Curso básico ao Profissional de AngularJs

## Gerar um novo Projeto

`ng new NOME_DO_PROJETO --no-standalone`

- Dessa forma, o projeto que será gerado se assemelhará com a estrutura de projetos que eu utilizo nos vídeos, já que será gerado o arquivo app.module.ts.

- Para projetos a partir da versão 17 em diante. use `ng new NOME_DO_PROJETO`

## Para gerar um component com o template dentro do typescript

- `ng g c NOME_DO_COMPONENTE --inline-template`

* Nesse caso ele não vai gerar o arquivo HTML, mas sim um template dentro do arquivo typescript.

## Para gerar um component com o a folha de estilo dentro do typescript

- `ng g c NOME_DO_COMPONENTE --inline-style`

* Nesse caso ele não vai gerar o arquivo SCSS/CSS, mas sim uma folha de estilo dentro do arquivo typescript.

## Uso do seletor ::ng-deep

- Conseguir a partir do pai acessar as propriedades dos filhos. Podendo alteralas diretamente do pai.

## ViewEncapsulation

- O conceito de View Encapsulation, que permite controlar o escopo e o estilo dos componentes da interface do usuário. Existem três tipos principais de encapsulamento de visualização em AngularJS:

  - Emulated (Emulado): Neste tipo de encapsulamento, o AngularJS replica o comportamento de estilos de CSS em escopos específicos de componentes, permitindo que os estilos aplicados a um componente sejam isolados e não afetem outros componentes na página. Isso é alcançado adicionando identificadores exclusivos aos elementos DOM dos componentes, o que impede que os estilos definidos em um componente interfiram nos estilos de outros componentes.

  - Shadow DOM: O encapsulamento do Shadow DOM é uma técnica mais avançada que utiliza a especificação nativa do Shadow DOM do navegador para encapsular estilos e estrutura de componentes. Com o Shadow DOM, cada componente AngularJS é encapsulado em sua própria árvore DOM oculta, permitindo que os estilos aplicados a um componente sejam efetivamente isolados dos estilos de outros componentes na página. Isso proporciona uma separação mais robusta e independente entre os componentes, tornando-os menos propensos a serem afetados por estilos externos.

  - None (Nenhum): No encapsulamento "None", os estilos definidos em um componente AngularJS não são encapsulados de forma alguma e podem afetar diretamente outros componentes na página. Isso significa que os estilos aplicados a um componente podem se propagar e influenciar o estilo de outros componentes, resultando em uma menor isolamento e reutilização dos componentes. Embora seja menos comum, o encapsulamento "None" pode ser útil em certos cenários onde é desejável um compartilhamento amplo de estilos entre os componentes.

Em resumo, o encapsulamento de visualização em AngularJS oferece diferentes níveis de isolamento de estilos e estrutura de componentes, permitindo desenvolver aplicativos da web mais modulares, flexíveis e fáceis de manter.
