## Próximos passos

## Outros
1. Criar um sistema de active para a aba que está sendo usada no componente Navegacao
2. Importar as ilustrações como um componente SVG ou uma váriavel para uma tag ```<img>```

### ROTAS DE NAVEGAÇÃO
1. Configurar o routes.js e importar rodando dentro do index.tsx
  * Deixar o sistema de rotas funcional no routes.js
  * Resolver o problema do nested route com a pagina inicial ```"/"```
  * Resolver a questao da condiçao para exibiçao do ```<Navegacao />``` apenas em Clientes, Pedidos, Cliente e Pedido
  * Criar uma PaginaPadrao?
***

### GESTÃO DE DADOS
1. Usar um sistema de gestão de dados global através de ```Context API```, ```Recoil``` ou ```Redux```
***

### COMPONENTES E UTILS
1. Gestão de cliente e pedido
  * Permitir a deleção do cliente - Não pode apagar um cliente que vai deixar um pedido sem nenhum autor
  * Permitir a edição do cliente - Nome...
  * Permitir a deleção do pedido
  * Permitir a edição do pedido - Nome, preço, autores... e não pode deixar o pedido sem autores



### Anotações
1. O sistema crasha com qualquer nova rota passada para ele (pois não há um estado para mesa ou estado de listaClientes e listaPedidos)
2. Pensar em usar CSS Modules (deprecated), Styled Components ou Tailwind
3. Tentar criar uma máscara própria para o input de preço
4. Os nomes dos clientes devem ser diferentes entre si pois o Multiselect usa o value como o próprio nome
5. Existem problemas de responsividade com os React Icons e com o Multiselect
6. Tentar adicionar graficos no extato final
7. Refatorar a estrutura final do sistema, assim como a estilização

### Documentação
**Bibliotecas**: 
* [UUID](https://www.npmjs.com/package/uuid)
* [Multiselect Dropdown](https://www.npmjs.com/package/multiselect-react-dropdown)
* [React Icons](https://www.npmjs.com/package/react-icons)
**Ilustrações**
* [PixelTrue](https://www.pixeltrue.com/free-packs/)
