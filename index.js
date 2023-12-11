class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar(tipo) {
    if (tipo == "mago") {
      console.log(`O ${this.tipo} atacou usando magia`);
    } else if (tipo == "guerreiro") {
      console.log(`O ${this.tipo} atacou usando espada`);
    } else if (tipo == "monje") {
      console.log(`O ${this.tipo} atacou usando artes marciais`);
    } else if (tipo == "ninja") {
      console.log(`O ${this.tipo} atacou usando shuriken`);
    }
  }
}
let nomeHeroi = "Israel";
let idadeHeroi = 23;
let tipoHeroi = "guerreiro";
let heroiDoJogador = new heroi(nomeHeroi, idadeHeroi, tipoHeroi);
console.log(heroiDoJogador.atacar(tipoHeroi));
