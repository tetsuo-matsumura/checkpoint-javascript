// Modifique o método realizarCompra da classe Festa
// para receber uma instância de Item e adicionar na propriedade items.
// Caso o item não seja uma instancia de "Item", não adicionar
// Caso o novo item supere o valor do budget restante, não adicionar

class Item {
  constructor(nome, preco) {
    this.nome = nome
    this.preco = preco
  }
}

class Festa {
  constructor(budget) {
    this.budget = budget
    this.items = []
  }
  realizarCompra(item) {
    return
  }
}


// Não mexer aqui embaixo
export default [
  'Exercício 5: Lista de compras da Festa',
  (()=>{
    let item = new Item('Copos', 100)
    let festa = new Festa(2000)
    festa.realizarCompra(item)
    return festa.items.length === 1
  })(),
  (()=>{
    let item = new Item('Copos', 2100)
    let festa = new Festa(2000)
    festa.realizarCompra(item)
    return festa.items.length === 0
  })(),
  (()=>{
    let festa = new Festa(2000)
    festa.realizarCompra({
      nome: 'Copos',
      valor: 1500
    })
    return festa.items.length === 0
  })(),
  (()=>{
    let item = new Item('Copos', 500)
    let festa = new Festa(1000)
    festa.realizarCompra(item)
    festa.realizarCompra(item)
    festa.realizarCompra(item)
    return festa.items.length === 2
  })(),

]