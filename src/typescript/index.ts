// import { Informacoes } from './tipos'

// // Boolean
// // let ativo: boolean = true

// import { type } from "os"

// let estaChovendo: boolean = true
// let temSol: boolean = false

// // String
// let nome: string = 'Carla'

// // Number
// let idade: number = 23
// let altura: number = 1.73 // decimal

// // Array
// let numeros: number[] = [1, 2, 3, 4]
// let frutas: string[] = ['Maça', 'Morango']

// let conhecimentos: Array<string> = ['Javascript', 'Java']

// let array: (string | number | boolean)[] = ['Carla', 35, true]

// // Any
// let qualquerValor: any = 40

// qualquerValor = 'Uma string'

// // Undefined
// let indefinido: undefined = undefined

// // Null
// let nulo: null = null

// let dados: {
//   usuario: string
//   idade: number
//   conhecimentos: string[]
// } = {
//   usuario: 'João',
//   idade: 23,
//   conhecimentos: ['HTML', 'JS']
// }


// function exemplo(condicao: boolean): number | string {
//   if (condicao) {
//     return 40
//   } else {
//     return 'André'
//   }
// }

// function digaOla(): void {
//   console.log('Olá')
// }

// type Categorias = 'design' | 'código'

// function pintarCategorias(categorias: Categorias) {
//   if (categorias === 'design') {
//     console.log('Pintar de vermelho')
//   } else if (categorias === 'código') {
//     console.log('Pintar de verde')
//   }
// }

// pintarCategorias('design')


// interface Product {
//   nome: string
//   preco: number
//   teclado: boolean
// }

// const produtos: Product[] = [
//   { nome: 'Celular', preco: 2000, teclado: true }
// ]


// interface Pessoa {
//   nome: string
//   idade?: number
// }

// const pessoas: Pessoa[] = [
//   { nome: 'Amanda' }
// ]


// type Produto = {
//   preco: number
// }

// type Carro = {
//   rodas: number
//   portas: number
// }

// function produtoCarro(dados: Produto & Carro) {
//   console.log(dados.preco, dados.portas, dados.rodas)
// }

// const carro = {
//   preco: 2000,
//   rodas: 4,
//   portas: 4
// }

// produtoCarro(carro)



// interface Usuario {
//   nome?: string
// }

// interface Telefone {
//   telefone: string
// }

// interface UsuarioCompleto extends Usuario, Telefone {
//   email: string
// }

// const usuario: UsuarioCompleto[] = [
//   { email: '@gmail.com', telefone: '' }
// ]

// const info: Informacoes[] = [
//   { rua: 'Rua', email: '', codigo: '' }
// ]


// criar uma função chamada calcularMedia que recebe dois números como parâmetros e retorna a média desses números.

function calcularMedia(numero1: number, numero2: number) {
  const media = (numero1 + numero2) / 2
  return media
}

const resultado = calcularMedia(10, 7)

console.log(resultado)

