# TO DO
**BUG**
* O sistema de histórico não está passando para a conta os dados necessários para exibir a informação através do ListaConta. Em compensação o sistema está renderizando o extrato da conta atual, pegando os dados diretamente pelo estadop global. Isso pode ser resolvido com a passagem de props dos compoenntes pais (Conta e Extrato), passando os dados necessários para o componente filho (ListaConta).
**OUTROS**
1. Adicionar o sistema de quantidade de produtos logo ao lado do campo de preço
2. Criar limitador de tamanho do input de preço e adicionar os pontos nos milhares
3. Permitir que apague um cliente que já tem pedidos, desde que não seja pedido único
4. Permitir edição do nome do cliente ou dos autores, nome e preço do pedido (não pode deixar sem autores)
5. Criar ordenamento de exibição das listas de clientes e pedidos por preço maior, preço menos, mais antigo, mais novo, entre outros
6. Corrigir os dados de consumidores dentro do pedido e dados dos pedidos dentro do consumidor
7. Tentar adicionar graficos no extato final (usar uma biblioteca)
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
- [ ] Corrigir problemas no output do HTML no build
***
**DETALHES**
* Existem problemas de responsividade com os React Icons e com o Multiselect
* Problemas do HeshRouter usado para o deploy no Github
* O componente de Navegacao está sendo renderizado em cada rota separadamente
* A atual logo e nome são bem feios e precisam de um rebranding
* É legal padronizar mais alguns estilos como bordas, margens, paddings e tal
* Considerar o uso da biblioteca [Shortid](https://www.npmjs.com/package/shortid) no lugar da [UUID](https://www.npmjs.com/package/uuid)

***
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