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
- [ ] Resolver a questao da condiçao para exibiçao do ```<Navegacao />``` apenas em Clientes, Pedidos, Cliente e Pedido
***
**RREFATORAÇÃO**
- [ ] Aplicar sistema de atributos externos (Exattrs)
- [ ] Organizar fluxo de dados
- [ ] Mitigar duplicação de código (funções, componentes, estilos)
- [ ] Fazer comentários necessários
- [ ] Rever a estilização global e de componentes
- [ ] Analizar escopo das funções e estados
- [ ] Componentizar mais elementos das páginas
- [ ] Compartilhar componentes (item de lista)
- [ ] Usar hooks customizados para extrair funções entre outros
***
**OUTROS**
1. Refatorar os nomes Cliente para Consumidor e Pedido para Compra, e alterar as nomenclaturas no sistema
2. Adicionar o sistema de quantidade de produtos logo ao lado do campo de preço
3. Criar limitador de tamanho do input de preço e adicionar os pontos nos milhares
4. Pensar em usar [CSS Modules](https://www.npmjs.com/package/typescript-plugin-css-modules), [Styled Components](https://www.npmjs.com/package/styled-components) ou [Tailwind](https://www.npmjs.com/package/tailwindcss)
5. Permitir que apague um cliente que já tem pedidos, desde que não seja pedido único
6. Permitir edição do nome do cliente ou dos autores, nome e preço do pedido (não pode deixar sem autores)
7. Criar ordenamento de exibição das listas de clientes e pedidos por preço maior, preço menos, mais antigo, mais novo, entre outros
8. Existem problemas de responsividade com os React Icons e com o Multiselect
9. Adicionar o uso de localStorage para persistência dos dados (principalmente do histórico de contas)
10. Criar página de histórico usando localStorage
11. Problemas do HeshRouter usado para o deploy no Github
12. Tentar adicionar graficos no extato final (usar uma biblioteca)
13. Corrigir os dados de consumidores dentro do pedido e dados dos pedidos dentro do consumidor