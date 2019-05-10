/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
function GameObject(object){
    this.createdAt = object.createdAt;
    this.name = object.name;
    this.dimensions = object.dimensions;
   
  }
  GameObject.prototype.destroy =function(){
    return `${this.name} was removed from the game`
  }
  */
 class GameObject{
     constructor(object){
        this.createdAt = object.createdAt;
        this.name = object.name;
        this.dimensions = object.dimensions;
     }
     destroy(){
        return `${this.name} was removed from the game`
     }

 }
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  /*
  function CharacterStats(value){
    GameObject.call(this, value)
    this.healthPoints = value.healthPoints;
  }
  CharacterStats.prototype = Object.create(GameObject.prototype)
  
  CharacterStats.prototype.takeDamage = function(name){
    return `${this.name} took damage`
  
  }
  */
 class CharacterStats extends GameObject {
     constructor(stats){
         super(stats)
         this.healthPoints = stats.healthPoints
     }
     takeDamage(){
        return `${this.name} took damage`
     }
 }
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
 /*
  
  function Humanoid(value){
    CharacterStats.call(this , value)
    this.team = value.team;
    this.weapons = value.weapons;
    this.language =  value.language;
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype)
    Humanoid.prototype.greet = function(){
      return `${this.name} offers a greeting in ${this.language}`
    }
    */
   class Humanoid extends CharacterStats {
       constructor(properties){
        super(properties)
        this.team = properties.team;
        this.weapons = properties.weapons;
        this.language = properties.language;
       }
       greet(){
        return `${this.name} offers a greeting in ${this.language}`
       }
   }
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:

  class Villian extends Humanoid {
    removePoints(damage){
        this.healthPoints -= damage
        if(this.healthPoints <= 0){
            return `${this.takeDamage()} \n${this.destroy()}`
        }
        return this.takeDamage()
    }
}
class Hero extends Humanoid{
    removePoints(damage){
        this.healthPoints -= damage
        if(this.healthPoints <= 0){
            return `${this.takeDamage()} \n${this.destroy()}`
        }
        return this.takeDamage()
    }
     

}
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });

    const aGirl = new Hero({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 2,
          height: 3,
        },
        healthPoints: 30,
        name: 'Arya',
        team: 'The North',
        weapons: [
          'Needle',
          'Dragon Glass',
          'Sword',
        ],
        language: 'Elvish',
      });
      const nightKing = new Villian({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 2,
          height: 8,
        },
        healthPoints: 50,
        name: 'night king',
        team: 'The Dead',
        weapons: [
          'Ice',
          'blue eyes',
          'dead dragon',
          'sword'
        ],
        language: 'None',
      });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!

    console.log(aGirl.removePoints(10))
    console.log(nightKing.removePoints(50))
  