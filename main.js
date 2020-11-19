var gameData = {
    pizza: 0,
    pizzaPerClick: 1,
    pizzaPerClicCost: 10
  }
  
  function eatPizza() {
    gameData.pizza += gameData.pizzaPerClick;
    document.getElementById("pizzasEaten").innerHTML = gameData.gold + " Pizzas Eaten";
  }
  function buyPizzaPerClick() {
    if (gameData.pizza >= gameData.pizzaPerClickCost) {
      gameData.pizza -= gameData.pizzaPerClickCost
      gameData.pizzaPerClick += 1
      gameData.pizzaPerClickCost *= 2
      document.getElementById("pizzasEaten").innerHTML = gameData.gold + " Pizzas Eaten";
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Oven (Currently Level " + gameData.pizzaPerClick + ") Cost: " + gameData.pizzaPerClickCost + " Pizza"

    }
  }
  var mainGameLoop = window.setInterval(function() {
    eatPizza()
  }, 1000)

  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("chicasPizzaClickerSave", JSON.stringify(gameData))
  }, 15000)

var savegame = JSON.parse(localStorage.getItem("chicasPizzaClickerSave"))
if (savegame !== null) {
  gameData = savegame
}