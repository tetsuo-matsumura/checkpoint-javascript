// Crie uma função que recebe uma string de números e retorna
// um objeto com duas chaves: even e odd. O valor da chave
// even são os números da string que são pares, na ordem em que apareceram
// o valor da chave odd são os números da string que são ímpares, na ordem em que apareceram
const separaParOuImpar = (numeroString) => {
  return
}


// Não mexer aqui embaixo
export default [
  'Exercício 3: Separa Par ou Ímpar',
  separaParOuImpar('25753')?.even === '2',
  separaParOuImpar('25753')?.odd === '5753',
  separaParOuImpar('22222')?.even === '22222',
  separaParOuImpar('22222')?.odd === '',
  separaParOuImpar('1111')?.even === '',
  separaParOuImpar('1111')?.odd === '1111',
  separaParOuImpar('')?.even === '',
  separaParOuImpar('')?.odd === '',
  separaParOuImpar('6547386825904')?.even === '64868204',
  separaParOuImpar('6547386825904')?.odd === '57359'
]