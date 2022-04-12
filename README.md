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
**NOVA PÁGINA (HISTÓRICO)**
- [ ] Desenvolver a página de histórico de contas com dados e estilização
- [ ] Criar um estilo comum para Extrato e Historico ou Conta
***
**REFATORAÇÃO**
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
1. Adicionar o sistema de quantidade de produtos logo ao lado do campo de preço
2. Criar limitador de tamanho do input de preço e adicionar os pontos nos milhares
3. Permitir que apague um cliente que já tem pedidos, desde que não seja pedido único
4. Permitir edição do nome do cliente ou dos autores, nome e preço do pedido (não pode deixar sem autores)
5. Criar ordenamento de exibição das listas de clientes e pedidos por preço maior, preço menos, mais antigo, mais novo, entre outros
6.  Corrigir os dados de consumidores dentro do pedido e dados dos pedidos dentro do consumidor
7.  Tentar adicionar graficos no extato final (usar uma biblioteca)
***
**DETALHES**
* Existem problemas de responsividade com os React Icons e com o Multiselect
* Problemas do HeshRouter usado para o deploy no Github