const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão. O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

//como eu fiz:
const dragonDamage = () => {
  const dano = Math.random() * 50;
  if (dano >= 15 && dano <= 50) {
    return dano;
  }
}
// como o gabarito faz:
const dragonAttack = (dragon) {
  const minDano = 15;
  const { strength } = dragon; //acessa a chave strench do objeto dragon
  const dragonDano = Math.floor(Math.random() * (strength - minDano) + minDano);
  return dragonDano
}