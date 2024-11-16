# API Node.JS com TypeScript e HTTP Module - Gerenciador de Podcasts

### Projeto desenvolvido baseado no módulo criando APIs com Node.JS do curso Node Fundamentals da DIO

### Tecnologias
 
<div>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" height="40"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40px"/>
</div>

### Descrição do Projeto

O Podcast Manager é uma aplicação inspirada no estilo Netflix que permite centralizar diferentes episódios de podcasts separados por categorias. Este projeto visa facilitar o acesso e a organização de episódios de podcasts em formato de vídeo.

Todo o projeto foi desenvolvido sem nenhum uso de framework, pois a intenção foi criar uma API de forma prática entendendo desde a sua arquitetura até a implementação do controller, services, repositories, server, além das boas práticas.

### Funcionalidades

- Listar os episódios de podcasts em sessões de categorias
- Filtrar episódios por nome de podcast

### Endpoints

- **Listar episódios**: `GET /list`
- **Filtrar episódios**: `GET /episode?p={nome}`

Exemplo de requisção para retornar uma lista de episódios com base no nome do podcast fornecido:

- `GET /episode?p=flow`

### Como usar

1. Clone este repositório
2. Instale as dependências usando `npm install`
3. Inicie o servidor executando `npm start:dev`
4. Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome de podcast



