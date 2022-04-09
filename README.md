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
- [ ] Usar hooks personalizados
***
**OUTROS**
1. Pensar em usar [CSS Modules](https://www.npmjs.com/package/typescript-plugin-css-modules), [Styled Components](https://www.npmjs.com/package/styled-components) ou [Tailwind](https://www.npmjs.com/package/tailwindcss)
2. Permitir que apague um cliente que já tem pedidos, desde que não seja pedido único
3. Permitir edição do nome do cliente ou dos autores, nome e preço do pedido (não pode deixar sem autores)
4. Existem problemas de responsividade com os React Icons e com o Multiselect
5. Adicionar o uso de localStorage para persistência dos dados
6. Problemas do HeshRouter usado para o deploy no Github
7. Tentar adicionar graficos no extato final (usar uma biblioteca)