
## Estrutura do Projeto

- **web**: Pasta contendo o frontend da aplicação.
- **backend**: Pasta contendo o backend da aplicação.

## Como Rodar o Projeto

### Passo 1: Configuração do Frontend

1. Acesse a pasta `web` fornecida (via zip).

```bash
cd web
```

Instale as dependências rodando o comando:

```bash
yarn install
```

Após a instalação, inicie o servidor de desenvolvimento rodando o comando:

```bash
yarn start
```


O frontend será iniciado na porta 3001. Você pode acessá-lo em http://localhost:3001



Passo 2: Configuração do Backend
Acesse a pasta backend fornecida (via zip)

cd backend
Instale as dependências utilizando rodando o comando:
```bash
yarn install
```

Após a instalação, inicie o servidor do backend rodando o comando:
```bash
yarn start
```


O backend será iniciado na porta 3000. Você pode acessá-lo em http://localhost:3000.


## Configuração do Banco de Dados
Passo 1: Criar Conta no MongoDB Atlas
Acesse o site MongoDB Atlas e crie uma conta, caso ainda não tenha uma.

https://account.mongodb.com/account/login

Após criar sua conta, crie um novo cluster com o nome Backend. Siga as instruções fornecidas pelo MongoDB para configurar o cluster e aguarde até que ele seja criado.

Passo 2: Conectar ao Cluster
Após a criação do cluster, vá para a seção Connect no MongoDB Atlas.

Selecione Connect your application e, em seguida, copie a string de conexão fornecida, que será semelhante a esta:

```bash
mongodb+srv://<username>:<db_password>@backend.ob6ly.mongodb.net/?retryWrites=true&w=majority&appName=Backend
```
```bash
Substitua <db_password> pelo senha que você escolher durante a criação do cluster.
```

Passo 3: Configuração do Arquivo .env

No diretório do backend, crie um arquivo .env com base no arquivo .env.example fornecido.

Dentro do arquivo .env, adicione a string de conexão do MongoDB conforme o exemplo abaixo:


```bash
MONGO_URI=mongodb+srv://<username>:<db_password>@backend.ob6ly.mongodb.net/?retryWrites=true&w=majority&appName=Backend

```

Substitua <db_password> pela senha escolhida ao criar o cluster.


Se precisar pegar ou alterar a senha do banco de dados, você pode fazer isso acessando o MongoDB Atlas na seção Security > Database Access, clicando em Edit, e depois Edit Password. Você pode também optar por gerar uma senha segura automaticamente em (AUTO GENERATE SECURE PASSWORD).

No arquivo .env deve ser colocado também o JWT_SECRET abaixo ou crie um novo secret se deseajar.

```bash
JWT_SECRET=026191e4b0dc8ea477066c29226b0d215b789d7cb677b140f588798c5e08981

```




Resumo das Portas
Backend: http://localhost:3000
Frontend: http://localhost:3001

