export class Usuario {
  nome!: string
  idade!: number

  saudacao(): void {
    console.log(`Olá, ${this.nome}`)
  }
}
