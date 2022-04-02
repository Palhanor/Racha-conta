// 1. Substituir o id do contador por um UUID: https://www.npmjs.com/package/react-uuid
// 2. Ou entao criar um sistema de id para pedidos e id para clientes separado

let count = -1;

export default function contador() {
    count += 1
    return count
}