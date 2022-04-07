# Documentação
## Bibliotecas
* [UUID](https://www.npmjs.com/package/uuid)
* [Multiselect Dropdown](https://www.npmjs.com/package/multiselect-react-dropdown)
* [React Icons](https://www.npmjs.com/package/react-icons)
***
## Ilustrações
* [PixelTrue](https://www.pixeltrue.com/free-packs/)
***
## Componentes
...
***
## Estilos
...
***
## Estados
...
***

# To-do
**GESTÃO DE DADOS**
- [ ] Usar um sistema de gestão de dados global através de ```Context API```, ```Recoil``` ou ```Redux```
***
**ROTAS DE NAVEGAÇÃO**
- [ ] Configurar o routes.js e importar rodando dentro do index.tsx
- [ ] Deixar o sistema de rotas funcional no routes.js
- [ ] Resolver o problema do nested route com a pagina inicial ```"/"```
- [ ] Resolver a questao da condiçao para exibiçao do ```<Navegacao />``` apenas em Clientes, Pedidos, Cliente e Pedido
***
**RREFATORAÇÃO**
- [ ] Organizar fluxo de dados
- [ ] Mitigar duplicação de código (funções, componentes, estilos)
- [ ] Fazer comentários necessários
- [ ] Rever a estilização global e de componentes
- [ ] Analizar escopo das funções e estados
***
**OUTROS**
- [ ] O sistema crasha com qualquer nova rota passada para ele (pois não há um estado para mesa ou estado de listaClientes e listaPedidos)
- [ ] Pensar em usar CSS Modules (deprecated), Styled Components ou Tailwind
- [ ] Tentar criar uma máscara própria para o input de preço
- [ ] Os nomes dos clientes devem ser diferentes entre si pois o Multiselect usa o value como o próprio nome
- [ ] Existem problemas de responsividade com os React Icons e com o Multiselect
- [ ] Tentar adicionar graficos no extato final
- [ ] Permitir que apague um cliente que já tem pedidos, desde que não seja pedido único
- [ ] Permitir edição do nome do cliente ou dos autores, nome e preço do pedido (não pode deixar sem autores)
- [ ] Adicionar o uso de localStorage para persistência dos dados
- [ ] Ver questão de importar svg e png no React e CSS Module deprecated no Foruma da Alura