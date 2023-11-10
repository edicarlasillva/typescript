// import { Usuario } from './classes/Usuario'
// import { Livro } from './classes/Livro'

// const usuario = new Usuario()

// console.log(usuario)

// usuario.nome = 'Maria'
// usuario.idade = 35

// console.log(usuario)

// usuario.saudacao()

// // Criar instância baseada na classe Livro
// const livro1 = new Livro()

// livro1.titulo = 'Roube como um artista'
// livro1.autor = 'Austin Kleon'
// livro1.anoPublicacao = 2015

// livro1.mostrarDetalhes()

// const livro2 = new Livro()
// livro2.titulo = 'A única coisa'
// livro2.autor = 'Gary'
// livro2.anoPublicacao = 2015

// livro2.mostrarDetalhes()


// Construtores
class Usuario {
  nome: string
  idade: number
  email: string

  // construtor
  constructor(nome: string, idade: number, email?: string) {
    this.nome = nome
    this.idade = idade
    this.email = email
  }

  saudacao(): void {
    const mensagem = `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos${this.email ? `e meu e-mail é ${this.email}. ` : ` 'email não informado.'`}`

    console.log(mensagem)
  }
}

const usuario = new Usuario('Carla', 35)
console.log(usuario.saudacao())

// Crie uma classe ContaBancaria com propriedades titular, saldo e um método sacar que reduza o saldo. Adicione um construtor que aceite o titular e um saldo inicial (com um saldo padrão de 0). Crie uma instância da ContaBancaria, realize alguns saques e exiba o saldo final.