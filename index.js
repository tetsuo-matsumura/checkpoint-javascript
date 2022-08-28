import exercicio1 from './exercicio1.js'
import exercicio2 from './exercicio2.js'
import exercicio3 from './exercicio3.js'
import exercicio4 from './exercicio4.js'
import exercicio5 from './exercicio5.js'

const exercicios = [
  exercicio1,
  exercicio2,
  exercicio3,
  exercicio4,
  exercicio5,
]

const runTest = (test) => {
  if (test.includes(false)) console.log(test[0] + ': ❌')
  else console.log(test[0] + ': ❇️')
}

exercicios.forEach(exercicio => runTest(exercicio))