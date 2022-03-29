import { throws } from "assert";

export class DnDCharacter {

   strength:number;
   charisma:number;
   wisdom:number;
   intelligence:number;
   constitution:number;
   dexterity: number;
   hitpoints:number;

  
  constructor(){
    this.strength = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.hitpoints = DnDCharacter.getModifierFor(this.constitution)+10;
  }
  

  public static generateAbilityScore(): number {
    let arrayNumeros:number[] = [tiroDado(), tiroDado(), tiroDado(), tiroDado()]
    delete arrayNumeros[arrayNumeros.indexOf(Math.min(...arrayNumeros))]
    let total = arrayNumeros.reduce((a, b) => a + b, 0);
    
    return total;


  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
 
}
 function tiroDado():number  {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1)
  }