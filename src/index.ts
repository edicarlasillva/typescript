import { Usuario } from './classes/Usuario'

const usuario = new Usuario()

console.log(usuario)

usuario.nome = 'Maria'
usuario.idade = 35

console.log(usuario)

usuario.saudacao()