/* O Que deve ser utilizado

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada */

  class Hero{ 
    constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type.toLowerCase();
    }
    
    attacker() {
        let attack;
        switch (this.type) {
            case 'mago':
                attack = 'magia';
                break;
            case 'guerreiro':
                attack = 'espada';
                break;
            case 'monge':
                attack = 'artes marciais';
                break;
            case 'ninja':
                attack = 'shuriken';
                break;
            default:
                attack = 'ataque desconhecido';
        }
        console.log(`O ${this.type} ${this.name} atacou usando ${attack}`);
    }
    
}

// Exemplo de uso:
const heroi1 = new Hero('Saruman', 2019, 'Mago');
heroi1.attacker(); // Saída: O mago Saruman atacou usando magia
const heroi2 = new Hero('Conan', 30, 'Guerreiro');
heroi2.attacker(); // Saída: O guerreiro Conan atacou usando espada