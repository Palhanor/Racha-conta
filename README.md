## Próximos passos

### GLOBAL
1. Modificar o icone principal da aplicação dentro do navegador
***

### GESTÃO DE DADOS
1. Usar um sistema de gestão de dados global através de ```Context API```, ```Recoil``` ou ```Redux```
***

### BUGS
1. O sistema crasha com qualquer nova rota passada para ele
2. Resolver o problema de renderizacao da pagina na construcao inicial do componente
3. Em alguns momentos não pega a imagem do not found
***

### ROTAS DE NAVEGAÇÃO
1. Configurar o routes.js e importar rodando dentro do index.tsx
  * Deixar o sistema de rotas funcional no routes.js
  * Resolver o problema do nested route com a pagina inicial ```"/"```
  * Resolver a questao da condiçao para exibiçao do ```<Navegacao />``` apenas em Clientes, Pedidos, Cliente e Pedido
  * Criar uma PaginaPadrao?
***

### ESTILIZAÇÃO
1. Seguir o padrão BEM
2. Usar o normalize CSS dentro do projeto
3. Adicionar responsividade com media queries
  * Criar um design para tablet e para desktop
  * Desenvolver as alterações dentro do sistema
4. Criar variaveis de padronização para a página
  * Cores
  * Espaçamentos
  * Breakpoints
5. Usar um sistema de estilização
  * CSS Modules
  * SASS
  * Styled Components
  * Tailwind
6. Criar estilos e componentes padrão para elementos comuns
  * Titulo
  * Container
  * Input
  * Label
  * Button
***

### COMPONENTES E UTILS
1. Implementar sistema de ID para os pedidos
2. Criar um sistema de active para a aba que está sendo usada no componente Navegacao
3. Importar as ilustrações como um componente SVG ou uma váriavel JS para uma tag ```<img>```
4. Criar página de extratos
  * Adicionar um sistema de graficos para consumo por cliente e por pedido
5. Aprimorar o sistema de ID dos clientes e pedidos
  * Criar um sistema de id para pedidos e id para clientes separado
  * Substituir o id do contador por um [UUID](https://www.npmjs.com/package/react-uuid)
6. Gestão de cliente e pedido
  * Permitir a deleção do cliente - Não pode apagar um cliente que vai deixar um pedido sem nenhum autor
  * Permitir a edição do cliente - Nome...
  * Permitir a deleção do pedido
  * Permitir a edição do pedido - Nome, preço, autores... e não pode deixar o pedido sem autores
7. Fazer tratamento de dados de fomulário
  * Não pode permitir dois clientes com nomes iguais (o nome é usado como valor do ```Multiselect```)
  * Não pode permitir que um pedido seja criado sem ao menos um autor
  * Usar uma máscara monetária para o input de preço: [React Currency Format](https://www.npmjs.com/package/react-currency-format) 
  * Modificar a fonte do placeholder do ```Multiselect```

***
***
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
