/* Opdracht Objectgeorienteerd programmeren
   Informatica - Emmauscollege Rotterdam
*/

/* ******************************************************* */
/* instellingen om foutcontrole van je code beter te maken */
/* ******************************************************* */
///<reference path="p5.global-mode.d.ts" />
"use strict"


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var xPosities;
var yPosities;
var speedsX;
var speedsY;
const BREEDTE = 20;



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // initialiseer waarden

  speedsX = [3, 2, 5, -1, 8];      // random waarde tussen -5 en 5
  speedsY = [-6, 1, -2, 4, 2];
  xPosities = [130, 60, 470, 300, 80];
  yPosities = [70, 101, 410, 510, 160]    // 👆
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);
  //alle posities arra
  for (var i = 0; i < xPosities.length; i++) {
    // teken
    noStroke;
    fill(255, 255, 255);
    rect(xPosities[i], yPosities[i], BREEDTE, BREEDTE);

    //  posities
    xPosities[i] = xPosities[i] + speedsX[i];
    yPosities[i] = yPosities[i] + speedsY[i];

    // weg stuiter
    if (xPosities[i] <= 0 || xPosities[i] + BREEDTE >= width) {
      speedsX[i] = speedsX[i] * -1;
    }

    if (yPosities[i] <= 0 || yPosities[i] + BREEDTE >= height) {
      speedsY[i] = speedsY[i] * -1;
    }

  }
}