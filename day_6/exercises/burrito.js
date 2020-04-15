/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/burrito.js`

Add the following methods to this burrito class and call the methods below
the class:
1. add_topping
2. remove_topping
3. change_protein
*/

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }

  add_topping() {
    console.log("Add new topping");
  }

  remove_topping() {
    console.log("Remove a topping");
  }

  change_protein() {
    console.log("Change protein choice");
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

dinner.add_topping();
dinner.remove_topping();
dinner.change_protein();

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);
