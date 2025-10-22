// Classe genérica que representa um herói de aventura
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar
  atacar() {
    let ataque;

    // Define o ataque baseado no tipo
    if (this.tipo.toLowerCase() === "mago") {
      ataque = "magia";
    } else if (this.tipo.toLowerCase() === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo.toLowerCase() === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo.toLowerCase() === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "ataque desconhecido";
    }

    // Exibe a mensagem de ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 120, "mago");
const heroi3 = new Heroi("Liang", 25, "monge");
const heroi4 = new Heroi("Kage", 22, "ninja");

heroi1.atacar(); // Saída: O guerreiro atacou usando espada
heroi2.atacar(); // Saída: O mago atacou usando magia
heroi3.atacar(); // Saída: O monge atacou usando artes marciais
heroi4.atacar(); // Saída: O ninja atacou usando shuriken
