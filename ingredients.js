var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var whileVar = 0;
// Write a while loop that prints out the contents of ingredients:
while (whileVar < ingredients.length){
  console.log(ingredients[whileVar]);
  whileVar++;
}
// Write a for loop that prints out the contents of ingredients:
for (var forVar=0; forVar < ingredients.length; forVar++){
  console.log(ingredients[forVar]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var forVar2=ingredients.length; forVar2 >= 0; forVar2--){
  console.log(ingredients[forVar2]);
}