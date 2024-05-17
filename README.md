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

## Secao 04 - Tópicos Abordados nesse Módulo

1. **Componentes**: São blocos de construção fundamentais do Angular, permitindo a criação de elementos HTML reutilizáveis e dinâmicos em nossa aplicação.

2. **Property Binding**: Permite a atualização dinâmica das propriedades de elementos HTML com base em valores na classe do componente.

3. **Event Binding**: Permite a resposta a eventos do usuário, como cliques ou teclas pressionadas, executando ações específicas definidas no componente.

4. **Attribute Binding**: Possibilita a manipulação dinâmica dos atributos de elementos HTML, permitindo a adaptação do comportamento da interface do usuário conforme necessário.

5.**Style Binding**: Permite a aplicação dinâmica de estilos CSS aos elementos HTML com base em valores na classe do componente.

6. **Class Binding**: Facilita a adição dinâmica de classes CSS aos elementos HTML, proporcionando flexibilidade na estilização da interface do usuário.

7. **@Input** (Decorator): Permite a comunicação entre componentes pais e filhos, enviando dados do componente pai para o componente filho.

8. **@Output** (Decorator): Habilita a comunicação entre componentes filhos e pais, permitindo que os componentes filhos enviem dados de volta ao componente pai.

9. **Código Duplicado**: Aborda a importância de evitar a duplicação de código através da prática de componentização, promovendo a reutilização e manutenibilidade do código.

10. **Two Way Data Binding**: Permite a sincronização bidirecional de dados entre o template HTML e a classe do componente, garantindo uma atualização instantânea de ambas as fontes de dados.

11. **NgIf** (Diretiva): Diretivas do Angular que permitem a renderização condicional de elementos e a adição dinâmica de classes CSS com base em condições.

12. **NgFor** (Diretiva): Diretiva utilizada para iterar sobre uma coleção de dados, criando um elemento no DOM para cada item da coleção. Essencial para a renderização dinâmica de listas e elementos repetitivos no template HTML.

13. **NgStyle e NgClass (Diretivas)**: Diretivas que possibilitam a aplicação dinâmica de estilos e classes CSS aos elementos HTML com base em valores na classe do componente.

14. **Pipes**: Introduz a utilização de pipes no Angular, que são transformadores de dados utilizados para formatar e manipular valores exibidos no template HTML.
