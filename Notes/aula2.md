# Base da Aplicação

## Rotas / Recurso

## Métodos HTTP
- GET: Buscar um informação do backend
- POST: Criar uma informação no backend
- PUT: Alterar uma informação no backend
- DELETE: Deletar uma informação no backend

## Tipos de parâmetros
- Query Params: paramêtros nomeados enviados na rota após "?" (Filtros, paginação)
- Route Params: parâmetros utilizados para identificar recursos
- Request Body: Corpo da requisição, utilziado para criar ou alterar recursos 

## Instalação Nodemon
```
npm install nodemon -D

npm start
```

## Bancos de dados
- SQL: MySQL, SQLite, Postgree SQL, Oracle, Microsoft SQL Server
- NoSQL: MongoDB, CouchDB, etc

## Manipulação BD
- Driver: SELECT * FROM users
- Query Builder: table('users').select('*').where()

## Instalação [KNEX](http://knexjs.org/)
```
npm install knex
npm install sqlite3

npx knex init
```

## Migrations Knex
```
npx knex migrate:make migrate_name
npx knex migrate:latest
npx knex migrate:rollback
```

## Buscar entidades e funcionalidades
- Ongs, Casos (Incidents)
- Login de ONG, Logout de ONG, Cadastro de ONG, Cadastrar novos casos, Deletar casos, Listar casos específicos de uma ONG, Listar todos os casos, Entrar em contato com a ONG

## Instalação CORS (módulo de segurança)
```
npm install cors
```