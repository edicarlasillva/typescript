import { Usuario } from './classes/Usuario'
import { Livro } from './classes/Livro'

const usuario = new Usuario()

console.log(usuario)

usuario.nome = 'Maria'
usuario.idade = 35

console.log(usuario)

usuario.saudacao()

// Criar instância baseada na classe Livro
const livro1 = new Livro()

livro1.titulo = 'Roube como um artista'
livro1.autor = 'Austin Kleon'
livro1.anoPublicacao = 2015

livro1.mostrarDetalhes()

const livro2 = new Livro()
livro2.titulo = 'A única coisa'
livro2.autor = 'Gary'
livro2.anoPublicacao = 2015

livro2.mostrarDetalhes()