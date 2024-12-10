# React + Vite

• Resumo do Projeto

O propósito da aplicação é fornecer uma SPA estilo Pokédex para que os usuários possam explorar e filtrar diferentes Pokémons, visualizando suas imagens, tipos e habilidades.

• Breve descrição das funcionalidades da aplicação entregue:

-   Listagem de Pokémons com nomes, imagens e tipos.
-   Filtragem por tipos de Pokémons.
-   Troca de tema entre claro e escuro.
-   Botão de carregar mais Pokémons ao clicar em "Ver mais".
-   Exibição dos detalhes dos Pokémons ao clicar no card dele.

• Ferramentas utilizadas, e o por que estas foram escolhidas para a realização do desafio:

-   React: Para construir interfaces da pokedex.
-   Axios: Biblioteca para fazer requisições de dados da API.
-   Vite: Ferramenta de desenvolvimento para a pokedex em conjunto com React.
-   react-router-dom: Para desenvolvimento de rotas da pagina ao clicar no Pokemon escolhido.
-   Uso de Hooks do React para desenvolvimento do projeto como por exemplo (UseContext, UseEffect e UseState)
-   CSS: Utilizado para estilizar a aplicação.

• Decisões adotadas durante o planejamento e execução do desafio, justificando-as:

    As decisões foram adotadas seguindo passo a passo de acordo com o desafio enviado utilizando os componentes de funções e Hooks de acordo com a necessidade de cada item.

    Primeiro foi feito uma requisição da API pelo Axios utilizando a função GetPokemons utilizando o limite para 10 pokemons na página, e a partir das informações dos pokemons retornados feito a inicialização do projeto.

    Depois foi criado um botão com a função Button onclick, onde ao clicar no Botão a página irá renderizar mais 10 pokemons.

    Foi criado uma página interna utilizando react-router-dom para roteamento e gerenciar as rotas da aplicação de maneira eficiente.

    Foi adicionado a variável pokemonData na função GetPokemons para puxas as informações do Pokemon, como por exemplo: Imagem, Tipo e Nome.

    Foi criado o botão para alternar o tema da página entre claro e escuro entre as pastas contexts, theme-toggler-button e Button no componente button-theme.

    Por ultimo foi feito o desafio de um botão com filtro por tipo de pokemon, onde foi criado a pasta AppInner com a função AppInner para puxar todos os filtros selecionados dos pokemons.


• Passo a passo dos comandos para que possamos rodar o seu projeto no nosso computador:
    
    Inicializar o terminal e digitar os seguintes comandos: 

    git clone https://github.com/brandon-l-rufino/pokedex-app.git
    cd quest-react-avancado
    npm install 
    npm run dev
    http://localhost:5173/