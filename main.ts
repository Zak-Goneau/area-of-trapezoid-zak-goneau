game.splash("This program calculates the area of a trapezoid in centimeters")
let base1 = game.askForNumber("What is the length of the first base (cm) ?")
let base2 = game.askForNumber("What is the length of the second base (cm) ?")
let height = game.askForNumber("What is the height of the trapezoid (cm) ?")
let area = (base1 + base2) / 2 * height
game.splash("The area of a trapezoid with the base1 of " + base1 + "cm, base2 of " + base2 + "cm, and a height of " + height + "cm, will be " + area + "cm squared")
