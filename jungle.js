/*Create a base class called Animal with properties like name, species, and energy. Then, create subclasses like Bird, Mammal, and Reptile that inherit from Animal. Add specific properties and methods to each subclass, like fly() for Bird, furColor() for Mammal, and isColdBlooded() for Reptile. Add the attack() and eat() methods for each. */

class Animal {
    static remainingAnimals = 0;

    constructor(name, species, energy) {
        this.name = name;
        this.species = species;
        this.energy = energy;
        Animal.remainingAnimals++;
    }

    eat(amount) {
        console.log(`${this.name} eats and gains energy! `);
        this.energy += amount;
        console.log(`${this.name} energy: ${this.energy}`);
    }
    getName() {
        console.log(this.name);
    }
    setName(name) {
        this.name = name;
    }
    getSpecies() {
        console.log(this.species);
    }
    setSpecies(species) {
        this.species = species;
    }
    getEnergy() {
        console.log(this.energy);
    }
    setEnergy(energy) {
        this.energy = energy;
    }
}

class Bird extends Animal {
    constructor(name, species, canFly, energy = 100) {
        super(name, species, energy);
        this.canFly = canFly;
    }
    fly() {
        console.log(`${this.name} is flying!`);
    }
    attack(target) {
        if (this.energy >= 20) {
            console.log(`${this.name} swoops in to attack ${target.name}!`);
            this.energy -= 20;
            console.log(`${this.name} energy: ${this.energy}`);
            target.energy -= 20;
            console.log(`${target.name} energy: ${target.energy}`);
        }
        else {
            console.log(`${this.name} looses and ${target.name} wins the fight!`);
            Animal.remainingAnimals--;
        }
    }
    eat() {
        super.eat(10);
    }
}
class Mammal extends Animal {
    constructor(name, species, furColor, energy = 200) {
        super(name, species, energy);
        this.furColor = furColor;
    }
    furColor() {
        console.log(`${this.name} has ${this.furColor} fur.`);
    }
    attack(target) {
        if (this.energy >= 50) {
            console.log(`${this.name} swoops in to attack ${target.name}!`);
            this.energy -= 50;
            console.log(`${this.name} energy: ${this.energy}`);
            target.energy -= 50;
            console.log(`${target.name} energy: ${target.energy}`);
        }
        else {
            console.log(`${this.name} looses and ${target.name} wins the fight!`);
            Animal.remainingAnimals--;
        }
    }
    eat() {
        super.eat(20);
    }
}

class Reptile extends Animal {
    constructor(name, species, coldBlooded, energy = 100) {
        super(name, species, energy);
        this.coldBlooded = coldBlooded;
    }
    isColdBlooded() {
        console.log(`${this.name} is cold-blooded.`);
    }
    attack(target) {
        if (this.energy >= 30) {
            console.log(`${this.name} swoops in to attack ${target.name}!`);
            this.energy -= 30;
            console.log(`${this.name} energy: ${this.energy}`);
            target.energy -= 30;
            console.log(`${target.name} energy: ${target.energy}`);
        }
        else {
            console.log(`${this.name} looses and ${target.name} wins the fight!`);
            Animal.remainingAnimals--;
        }
    }
    eat() {
        super.eat(15);
    }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();