# Desafio 7 - Teste de API com Typescript

### Descrição do desafio:
> O Desafio 7 consiste em refatorar uma API simples desenvolvida em Express, originalmente escrita em JavaScript, para utilizar Typescript. Além disso, a tarefa inclui a implementação de testes de integração utilizando a biblioteca Jest.

---

### Resolução:
O código da API foi completamente refatorado para incorporar o Typescript, proporcionando melhor tipagem e organização ao projeto. Os testes de integração foram implementados usando o Jest, garantindo a robustez e confiabilidade do sistema. Você pode ver a versão antes de ser refatorada na pasta `__old`.

---

### Instalação e uso
Passo a passo para testar o código em sua máquina

```diff
+ Passo 1: Crie a pasta node_modules com npm install
# > npm install

+ Passo 2: Conecte o seu banco de dados
# Para testar o código será necessário ter uma conexão MySQL ativa em sua máquina;
# Crie um banco de dados para testar o código (não será necessário criar nenhuma tabela);
# Dentro do projeto vá em:
! src > config > knex.ts
# Dentro do arquivo knex.ts altere os campos "host, port, user, password e database";
# Coloque os dados referentes ao seu banco de dados nos campos informados.

+ Passo 3: Carregue a migração do projeto em seu banco de dados
# Para o projeto funcionar será necessário carregar a migração do knex;
# Rode o comando a seguir em seu terminal:
# > npx knex migrate:latest
# Pronto! A tabela "Aluno" foi adicionada ao seu banco de dados.

+ Passo 4: Configure o seu arquivo .env
# Variáveis:
# ROOT_URL="http://localhost:8080"
# PORT="8080"

+ Passo 5: Inicie o projeto
# > npm run start

+ Passo 6: Rode os testes:
# Só será possivel rodar os testes se a aplicação tiver sido iniciada;
# > npm run test
```

