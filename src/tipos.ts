export interface Endereco {
  rua: string
  cidade?: string
}

export interface Email {
  email: string
}

export interface Informacoes extends Endereco, Email {
  codigo: string
}