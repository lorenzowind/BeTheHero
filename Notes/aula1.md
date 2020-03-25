# Arquitetura da aplicação

## Backend (API Restful)
- Regras de negócio
- Conexão banco de dados
- Envio de e-mail
- Comunicação com webservices
- Auntenticação do usuário
- Criptografia e segurança
### Via JSON
1. Front-end web
2. Front-end mobile
3. Serviços externos

## Entendendo o React
### Abordagem tradicional
- A cada requisição, o servidor retorna o conteúdo completo da página, contendo todo o HTML e CSS.
- Limita o front-end para o browser já que o aplicativo mobile ou serviços externos não vão conseguir interpretar o HTML.
### Abordagem de SPA (Single-Page Applications)
- As requisições trazem apenas dados como respostas e, com esses dados, o front-end pode preencher as informações em tela.
- A página nunca recarrega, otimizando a performance e dando vida ao conceito de SPA. Retornando apenas o JSON podemos ter quantos front-ends quisermos.

## Entendo o React Native
### Abordagem tradicional
- Criamos uma aplicação para IOS e outra para Android, e nesses casos, o trabalho se torna repetido tanto para criação quanto para as alterações no projeto.
### Abordagem do React Native
- Todo código feito é em JavaScript, esse código não é convertido em código nativo, melhor do que isso, o dispositivo passa a entender o código JavaScript e a interface gerada é totalmente nativa.
### Por que o Expo?
- Sem o Expo, precisamos instalar em nosso sistema tanto o Android Studio para obter a SDK de desenvolvimento Android, e o Xcode (Mac) para obter a SDK do IOS. Nesse caso, a iniciação do desenvolvimento fica mais penosa, já que essas SDK's não são extremamente simples de instalar e livres de erros.
- Com o Expo, instalamos um aplicativo no celular chamado Expo, e dentro dele, tudo o que precisamos para desenvolver no React Native já está instalado, como as API's de mapas, geolocalização, câmera, sensores, calendário, etc. Com isso, não precisa se preocupar em gerar o aplicativo para Android e IOS já que o app do Expo instalado tem tudo o que precisamos e assim usamos apenas React.

## Preparando o ambiente
### Backend
```
npm init -y
npm install express

node index.js
```
### Frontend
```
npx create-react-app frontend

npm start
```