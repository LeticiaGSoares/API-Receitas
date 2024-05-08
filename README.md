Uma empresa deseja criar um aplicativo de receitas para ajudar os usuários a descobrir e aprender a preparar diferentes pratos. O aplicativo deve permitir aos usuários visualizar uma variedade de receitas, incluindo informações sobre ingredientes e modo de preparo.

Desenvolva uma API que contenha informações sobre várias receitas. Cada receita deve incluir os seguintes campos:

1. **Nome**: O nome da receita.
2. **Categoria**: A categoria à qual a receita pertence (por exemplo, Massas, Aves, Sobremesas, etc.).
3. **Ingredientes**: Uma lista dos ingredientes necessários para preparar a receita.
4. **Modo de Preparo**: As instruções passo a passo sobre como preparar a receita.

### Rotas da aplicação

1. **POST /receitas**:
    - Descrição: Esta rota permite adicionar uma nova receita ao banco de dados.
    - Funcionalidade: Criação de Receita
    - Método HTTP: POST
    - Corpo da Requisição: Deve conter os detalhes da nova receita a ser adicionada, incluindo nome, categoria, ingredientes e modo de preparo.
2. **GET /receitas**:
    - Descrição: Esta rota permite visualizar todas as receitas disponíveis.
    - Funcionalidade: Listagem de Todas as Receitas
    - Método HTTP: GET
3. **GET /receitas/{id}**:
    - Descrição: Esta rota permite visualizar os detalhes de uma receita específica com base em seu ID.
    - Funcionalidade: Detalhes de uma Receita Específica
    - Método HTTP: GET
    - Parâmetros da URL: ID da receita a ser visualizada.
4. **PUT /receitas/{id}**:
    - Descrição: Esta rota permite atualizar os detalhes de uma receita específica com base em seu ID.
    - Funcionalidade: Atualização de Receita
    - Método HTTP: PUT
    - Parâmetros da URL: ID da receita a ser atualizada.
    - Corpo da Requisição: Deve conter os dados a serem atualizados da receita.
5. **DELETE /receitas/{id}**:
    - Descrição: Esta rota permite excluir uma receita específica com base em seu ID.
    - Funcionalidade: Exclusão de Receita
    - Método HTTP: DELETE
    - Parâmetros da URL: ID da receita a ser excluída.
6. **GET /categorias**:
    - Descrição: Esta rota permite visualizar todas as categorias de receitas disponíveis.
    - Funcionalidade: Listagem de Todas as Categorias de Receitas
    - Método HTTP: GET
7. **GET /busca**:
    - Descrição: Esta rota permite realizar uma busca por receitas com base em termos de busca fornecidos pelos usuários.
    - Funcionalidade: Busca de Receitas por Termo
    - Método HTTP: GET
    - Parâmetros da URL: Termo de busca.
8. **GET /ingredientes**:
    - Descrição: Esta rota permite visualizar a lista de todos os ingredientes presentes nas receitas cadastradas.
    - Funcionalidade: Listagem de Todos os Ingredientes
    - Método HTTP: GET